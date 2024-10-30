// Task Tracker:

// Define a Task class with properties like title, description, priority, and status.
// Use an enum to represent the task status (e.g., Pending, InProgress, Completed).
// Create a method to change task status.
// Create a method to display task details.
enum TaskStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
}
class Task {
  constructor(
    public title: string,
    public description: string,
    public priority: string,
    public status: TaskStatus
  ) {}
  changeStatus(newStatus: TaskStatus): string {
    return (this.status = newStatus);
  }
}

const t1 = new Task(
  "task1",
  "make a website in ReactJs",
  "high",
  TaskStatus.Pending
);
console.log(t1);
// for example we will use this feture in development when a user click on a specific button run this function
console.log(t1.changeStatus(TaskStatus.Completed));
