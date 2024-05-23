// taskController.js

// פונקציה אחת שעושה הכל
function addTask(req, res) {
    const { description } = req.body;
    if (!description) {
        return res.status(400).send('Description is required');
    }
    const task = { id: Date.now(), description, completed: false };
    db.collection('tasks').insertOne(task);  // שימוש ישיר במסד נתונים
    res.status(201).json(task);
}
