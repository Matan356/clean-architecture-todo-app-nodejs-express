// taskHandler.js

// פונקציה ליצירת משימה חדשה
function createTask(description) {
    return {
        id: Date.now(),
        description: description,
        completed: false
    };
}

module.exports = { createTask };


// enhancedTaskHandler.js
const { createTask } = require('./taskHandler');

// פונקציה המוסיפה תזכורת למשימה
function createTaskWithReminder(description, reminderDate) {
    const task = createTask(description);
    return {
        ...task,
        reminderDate: reminderDate
    };
}

module.exports = { createTaskWithReminder };
