

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];




function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}




const taskForm = document.getElementById("taskForm");

if (taskForm) {

    taskForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const taskName =
            document.getElementById("taskName").value;

        const taskDescription =
            document.getElementById("taskDescription").value;

        const taskDeadline =
            document.getElementById("taskDeadline").value;

        const taskPriority =
            document.getElementById("taskPriority").value;

        const task = {

            id: Date.now(),

            name: taskName,

            description: taskDescription,

            deadline: taskDeadline,

            priority: taskPriority,

            completed: false

        };

        tasks.push(task);

        saveTasks();

        alert("Task Added Successfully!");

        taskForm.reset();

    });

}




function showTasks() {

    const taskList =
        document.getElementById("taskList");

    if (!taskList) return;

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const card =
            document.createElement("div");

        card.classList.add("task-card");

        card.innerHTML = `

            <h3>${task.name}</h3>

            <p>
                ${task.description}
            </p>

            <p>
                <strong>Deadline:</strong>
                ${task.deadline}
            </p>

            <p>
                <strong>Priority:</strong>
                ${task.priority}
            </p>

            <p>
                <strong>Status:</strong>
                ${task.completed ? "Completed ✅" : "Pending ⏳"}
            </p>

            <button
                class="complete-btn"
                onclick="completeTask(${task.id})"
            >
                Complete
            </button>

            <button
                class="delete-btn"
                onclick="deleteTask(${task.id})"
            >
                Delete
            </button>

        `;

        taskList.appendChild(card);

    });

    updateStats();
}




function completeTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {

            task.completed = true;

        }

        return task;

    });

    saveTasks();

    showTasks();

}



function deleteTask(id) {

    tasks = tasks.filter(task => {

        return task.id !== id;

    });

    saveTasks();

    showTasks();

}




function updateStats() {

    const totalTasks =
        document.getElementById("totalTasks");

    const completedTasks =
        document.getElementById("completedTasks");

    const pendingTasks =
        document.getElementById("pendingTasks");

    if (
        !totalTasks ||
        !completedTasks ||
        !pendingTasks
    ) {
        return;
    }

    const total = tasks.length;

    const completed =
        tasks.filter(task =>
            task.completed
        ).length;

    const pending =
        total - completed;

    totalTasks.textContent = total;

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;

}




const generateBtn =
    document.getElementById("generateBtn");

if (generateBtn) {

    generateBtn.addEventListener("click", () => {

        const scheduleOutput =
            document.getElementById("scheduleOutput");

        scheduleOutput.innerHTML = `

            <h3>Today's Smart Schedule</h3>

            <p> 9:00 AM - DSA Practice</p>

            <p> 11:00 AM - Django Learning</p>

            <p> 3:00 PM - Project Development</p>

            <p> 6:00 PM - Revision & Planning</p>

            <p>
             AI Suggestion:
            Focus on high-priority tasks first.
            </p>

        `;

    });

}



showTasks();