// taskOperations.js

// פונקציה בסיסית ליצירת משימה
function createTask(description) {
    return {
        id: Date.now(),
        description,
        completed: false,
        deadline: null
    };
}

// פונקציה לסימון משימה כהושלמה
function completeTask(task) {
    return {
        ...task,
        completed: true
    };
}

// פונקציה לעדכון תאריך יעד למשימה
function setTaskDeadline(task, deadline) {
    return {
        ...task,
        deadline
    };
}

// דוגמת שימוש
const tasks = [createTask("Buy milk"), createTask("Pay bills")];
const tasksWithDeadline = tasks.map(task => setTaskDeadline(task, "2023-10-01"));
console.log(tasksWithDeadline);
