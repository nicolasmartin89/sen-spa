class Task {
  constructor(id, name, description, date, time, duration, type, status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = date;
    this.time = time;
    this.duration = duration;
    this.type = type;
    this.status = status;
  }
}

module.exports = Task;
