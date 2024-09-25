// src/services/taskService.js
const { db } = require("../config/db");
const Task = require("../models/taskModel");

const getAllTasks = (callback) => {
  const sql = `SELECT * FROM tasks`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return callback(err, null);
    }
    const tasks = rows.map(
      (row) =>
        new Task(
          row.id,
          row.name,
          row.description,
          row.date,
          row.time,
          row.duration,
          row.type,
          row.status
        )
    );
    callback(null, tasks);
  });
};

const getTaskById = (id, callback) => {
  const sql = `SELECT * FROM tasks WHERE id = ?`;
  db.get(sql, [id], (err, row) => {
    if (err) {
      return callback(err, null);
    }
    if (!row) {
      return callback(null, null);
    }
    const task = new Task(
      row.id,
      row.name,
      row.description,
      row.date,
      row.time,
      row.duration,
      row.type,
      row.status
    );
    callback(null, task);
  });
};

const createTask = (taskData, callback) => {
  const { name, description, date, time, duration, type, status } = taskData;
  const sql = `INSERT INTO tasks (name, description, date, time, duration, type, status) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.run(
    sql,
    [name, description, date, time, duration, type, status],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      callback(null, { id: this.lastID });
    }
  );
};

const updateTask = (id, taskData, callback) => {
  const { name, description, date, time, duration, type, status } = taskData;
  const sql = `UPDATE tasks SET name = ?, description = ?, date = ?, time = ?, duration = ?, type = ?, status = ? WHERE id = ?`;
  db.run(
    sql,
    [name, description, date, time, duration, type, status, id],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      callback(null, this.changes);
    }
  );
};

const deleteTask = (id, callback) => {
  const sql = `DELETE FROM tasks WHERE id = ?`;
  db.run(sql, [id], function (err) {
    if (err) {
      return callback(err, null);
    }
    callback(null, this.changes);
  });
};

const markTaskAsComplete = (id, callback) => {
  const sql = `UPDATE tasks SET status = 'Completada' WHERE id = ?`;
  db.run(sql, [id], function (err) {
    if (err) {
      return callback(err, null);
    }
    callback(null, this.changes);
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
