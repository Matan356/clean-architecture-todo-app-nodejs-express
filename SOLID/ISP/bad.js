// operations.js

// ממשק גדול שמכיל פונקציות לניהול משימות ותאריכי יעד
const Operations = {
    createTask: (description) => ({
        id: Date.now(),
        description,
        completed: false
    }),
    completeTask: (task) => ({
        ...task,
        completed: true
    }),
    setTaskDeadline: (task, deadline) => ({
        ...task,
        deadline
    })
};

// דוגמת שימוש
const task = Operations.createTask("Buy milk");
const completedTask = Operations.completeTask(task);
const taskWithDeadline = Operations.setTaskDeadline(task, "2023-10-01");

console.log(task);
console.log(completedTask);
console.log(taskWithDeadline);
