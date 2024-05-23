// taskController.js

// פונקציה להוספת משימה
function addTask(req, res) {
    const { description } = req.body;
    if (!description) {
        return res.status(400).send('Description is required');
    }
    const newTask = createTask(description);
    res.status(201).json(newTask);
}

// service - useCase
// פונקציה ליצירת משימה
function createTask(description) {
    const task = { id: Date.now(), description, completed: false };
    saveTask(task);
    return task;
}

// taskDataAccess.js

// פונקציה לשמירת משימה במסד נתונים
function saveTask(task) {
    db.collection('tasks').insertOne(task);
}


