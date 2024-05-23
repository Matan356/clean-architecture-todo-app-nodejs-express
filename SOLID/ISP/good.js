// taskOperations.js

// ממשק לניהול משימות
const TaskOperations = {
    createTask: (description) => ({
        id: Date.now(),
        description,
        completed: false
    }),
    completeTask: (task) => ({
        ...task,
        completed: true
    })
};

// ממשק לניהול תאריכי יעד במשימות
const TaskDeadlineOperations = {
    setTaskDeadline: (task, deadline) => ({
        ...task,
        deadline
    })
};

// דוגמת שימוש
const task = TaskOperations.createTask("Buy milk");
const completedTask = TaskOperations.completeTask(task);
const taskWithDeadline = TaskDeadlineOperations.setTaskDeadline(task, "2023-10-01");

console.log(task);
console.log(completedTask);
console.log(taskWithDeadline);
