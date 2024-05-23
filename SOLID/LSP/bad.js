// invalidTaskOperations.js

// פונקציה בסיסית ליצירת משימה
function createTask(description) {
    return {
        id: Date.now(),
        description,
        completed: false,
        deadline: null
    };
}

// פונקציה שמשנה את מבנה הנתונים ומוסיפה שדה חדש במקום להשתמש בפונקציה המקורית
function completeTaskWithInvalidChange(task) {
    // שינוי מבנה הנתונים - הוספת שדה חדש ושינוי שדה קיים
    return {
        id: task.id,
        description: task.description,
        completed: task.completed ? "yes" : "no", // שינוי השדה 'completed' ממערך בוליאני למחרוזת
        deadline: task.deadline,
        alert: true // הוספת שדה חדש
    };
}

// דוגמת שימוש
const tasks = [createTask("Buy milk"), createTask("Pay bills")];
const invalidTasksWithCompletion = tasks.map(task => completeTaskWithInvalidChange(task));
console.log(invalidTasksWithCompletion);

// פונקציה שמטפלת במשימות שהושלמו
function printCompletedTasks(tasks) {
    tasks.forEach(task => {
        if (task.completed === true) { // ציפיה לבוליאני ולא למחרוזת
            console.log(`Completed task: ${task.description}`);
        }
    });
}

printCompletedTasks(invalidTasksWithCompletion); // לא עובד כצפוי, בגלל שהשדה 'completed' אינו בוליאני
