// taskHandler.js

// שינוי בפונקציה המקורית לכלול תזכורת
function createTask(description, reminderDate) {
    const task = {
        id: Date.now(),
        description: description,
        completed: false
    };
    if (reminderDate) {
        task.reminderDate = reminderDate;
    }
    return task;
}

module.exports = { createTask };
