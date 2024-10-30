"use strict";
// Task Tracker:
// Define a Task class with properties like title, description, priority, and status.
// Use an enum to represent the task status (e.g., Pending, InProgress, Completed).
// Create a method to change task status.
// Create a method to display task details.
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "Pending";
    TaskStatus["InProgress"] = "InProgress";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus || (TaskStatus = {}));
class Task {
    constructor(title, description, priority, status) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
    }
    changeStatus(newStatus) {
        return (this.status = newStatus);
    }
}
const t1 = new Task("task1", "make a website in ReactJs", "high", TaskStatus.Pending);
console.log(t1);
// for example we will use this feture in development when a user click on a specific button run this function
console.log(t1.changeStatus(TaskStatus.Completed));
