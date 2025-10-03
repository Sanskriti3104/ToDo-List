function createTodo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false,   //default
        toggleComplete() {
            this.completed = !this.completed;
        }
    };
}

function createProject(title) {
    return {
        title: title,
        todos: [],

        addTodo(todo) {
            this.todos.push(todo);
        },
        remoeTodo(index) {
            this.todos.splice(index, 1);
        }
    };
}

function createProjectManager() {
    return {
        projects: [],
        addProject(project) {
            this.projects.push(project);
        },
        removeProject(index) {
            this.projects.splice(index, 1);
        },
        getProject(title) {
            return this.projects.find(project => project.title === title);
        }
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.querySelector(".today-view button"); 
    const todayView = document.querySelector(".today-view");
    const taskForm = document.getElementById("taskForm");
    const cancelBtn = document.getElementById("cancelBtn");
    const taskListContainer = document.querySelector(".task-list ul");
    const submitBtn = document.querySelector(".submitBtn");

    // Show form on "Add Task" click
    addTaskBtn.addEventListener("click", () => {
        todayView.style.display = "none";     // hide welcome view
        document.querySelector(".task-list").style.display = "block"; // show task list section
        taskForm.style.display = "block";     // keep form open
    });

    // Hide form on "Cancel" click
    cancelBtn.addEventListener("click", () => {
        taskForm.reset();
        taskForm.style.display = "none";
    });

    // Enable/disable submit button based on title input
    taskForm.addEventListener("input", () => {
        const title = taskForm.querySelector(".task-title").value.trim();
        submitBtn.disabled = !title;
    });

    // Handle form submission
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = taskForm.querySelector(".task-title").value.trim();
        const description = taskForm.querySelector(".task-description").value.trim();
        const dueDate = taskForm.querySelector(".task-date").value;
        const priority = taskForm.querySelector(".task-priority").value;

        if (!title) return;  // safeguard

        // Create task item
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.innerHTML = `
            <strong>${title}</strong> 
            <p>${description}</p>
            <small>Due: ${dueDate || "No date"} | Priority: ${priority}</small>
        `;

        // Add to task list
        taskListContainer.appendChild(li);

        // Clear only inputs, keep form visible for next task
        taskForm.reset();
        submitBtn.disabled = true; 
    });
});