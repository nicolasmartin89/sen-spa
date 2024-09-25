// src/controllers/taskController.js
const taskService = require("../services/taskService");

const getAllTasks = (req, res) => {
  taskService.getAllTasks((err, tasks) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ tasks });
  });
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  taskService.getTaskById(id, (err, task) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ task });
  });
};

const createTask = (req, res) => {
  const taskData = req.body;
  taskService.createTask(taskData, (err, taskId) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Task created successfully" });
  });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const taskData = req.body;
  taskService.updateTask(id, taskData, (err, changes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (changes === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated successfully" });
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  taskService.deleteTask(id, (err, changes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (changes === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  });
};

const markTaskAsComplete = (req, res) => {
  const { id } = req.params;
  taskService.markTaskAsComplete(id, (err, changes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (changes === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task marked as complete" });
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  markTaskAsComplete,
};
