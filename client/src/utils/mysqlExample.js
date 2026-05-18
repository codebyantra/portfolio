/**
 * MySQL Integration Example
 * 
 * This file demonstrates how to integrate MySQL backend with the React frontend.
 * In a production setup, you would have a Node.js/Express backend server that 
 * connects to MySQL and exposes REST API endpoints.
 * 
 * Backend Architecture Example:
 * - Server: Node.js + Express
 * - Database: MySQL
 * - API: RESTful endpoints
 */

// Example API endpoints (these would be on your backend server)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

/**
 * Example: Fetch all projects from MySQL database
 */
export const fetchProjectsFromMySQL = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

/**
 * Example: Fetch single project by ID
 */
export const fetchProjectById = async (projectId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch project');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};

/**
 * Example: Fetch user profile from MySQL
 */
export const fetchUserProfile = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

/**
 * Example: Create a new project in MySQL
 */
export const createProject = async (projectData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(projectData)
    });
    if (!response.ok) {
      throw new Error('Failed to create project');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

/**
 * Example: Update project in MySQL
 */
export const updateProject = async (projectId, projectData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(projectData)
    });
    if (!response.ok) {
      throw new Error('Failed to update project');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

/**
 * Example: Delete project from MySQL
 */
export const deleteProject = async (projectId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to delete project');
    }
    return { success: true };
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

/**
 * Example Backend Server Setup (Node.js + Express + MySQL)
 * 
 * This would be in your server/index.js or a separate backend project:
 * 
 * const express = require('express');
 * const mysql = require('mysql2/promise');
 * const cors = require('cors');
 * 
 * const app = express();
 * app.use(cors());
 * app.use(express.json());
 * 
 * // MySQL Connection Pool
 * const pool = mysql.createPool({
 *   host: 'localhost',
 *   user: 'root',
 *   password: 'your_password',
 *   database: 'portfolio_db',
 *   waitForConnections: true,
 *   connectionLimit: 10,
 *   queueLimit: 0
 * });
 * 
 * // GET all projects
 * app.get('/api/projects', async (req, res) => {
 *   try {
 *     const connection = await pool.getConnection();
 *     const [rows] = await connection.query('SELECT * FROM projects');
 *     connection.release();
 *     res.json(rows);
 *   } catch (error) {
 *     res.status(500).json({ error: error.message });
 *   }
 * });
 * 
 * // GET single project
 * app.get('/api/projects/:id', async (req, res) => {
 *   try {
 *     const connection = await pool.getConnection();
 *     const [rows] = await connection.query('SELECT * FROM projects WHERE id = ?', [req.params.id]);
 *     connection.release();
 *     res.json(rows[0]);
 *   } catch (error) {
 *     res.status(500).json({ error: error.message });
 *   }
 * });
 * 
 * // POST create project
 * app.post('/api/projects', async (req, res) => {
 *   try {
 *     const { name, description, tech_stack, live_url, github_url } = req.body;
 *     const connection = await pool.getConnection();
 *     const [result] = await connection.query(
 *       'INSERT INTO projects (name, description, tech_stack, live_url, github_url) VALUES (?, ?, ?, ?, ?)',
 *       [name, description, tech_stack, live_url, github_url]
 *     );
 *     connection.release();
 *     res.json({ id: result.insertId, ...req.body });
 *   } catch (error) {
 *     res.status(500).json({ error: error.message });
 *   }
 * });
 * 
 * app.listen(5000, () => {
 *   console.log('Server running on port 5000');
 * });
 */

/**
 * Example MySQL Database Schema
 * 
 * CREATE TABLE projects (
 *   id INT PRIMARY KEY AUTO_INCREMENT,
 *   name VARCHAR(255) NOT NULL,
 *   description TEXT,
 *   tech_stack JSON,
 *   live_url VARCHAR(255),
 *   github_url VARCHAR(255),
 *   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 *   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
 * );
 * 
 * CREATE TABLE users (
 *   id INT PRIMARY KEY AUTO_INCREMENT,
 *   name VARCHAR(255) NOT NULL,
 *   email VARCHAR(255) UNIQUE NOT NULL,
 *   bio TEXT,
 *   profile_image VARCHAR(255),
 *   github_url VARCHAR(255),
 *   linkedin_url VARCHAR(255),
 *   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 *   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
 * );
 * 
 * CREATE TABLE skills (
 *   id INT PRIMARY KEY AUTO_INCREMENT,
 *   user_id INT NOT NULL,
 *   skill_name VARCHAR(100) NOT NULL,
 *   proficiency ENUM('beginner', 'intermediate', 'advanced', 'expert'),
 *   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
 * );
 */

export default {
  fetchProjectsFromMySQL,
  fetchProjectById,
  fetchUserProfile,
  createProject,
  updateProject,
  deleteProject
};
