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

    // Show form on "Add Task" click
    addTaskBtn.addEventListener("click", () => {
        todayView.style.display = "none";
        taskForm.style.display = "block";
    });

    // Hide form on "Cancel" click
    cancelBtn.addEventListener("click", () => {
        taskForm.style.display = "none";
        todayView.style.display = "flex";
    });
});
