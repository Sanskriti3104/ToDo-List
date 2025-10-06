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
    const projectList = document.querySelector(".project-list ul");
    const addProjectBtn = document.querySelector(".project-list button");
    const heading = document.querySelector(".main h2");

    // Create project manager and default "today" project
    const projectManager = createProjectManager();
    const todayProject = createProject("Today");
    projectManager.addProject(todayProject);

    //Display "Today" project in sidebar
    const todayLi = document.createElement("li");
    todayLi.textContent = todayProject.title;
    todayLi.classList.add("project-item", "active");
    projectList.appendChild(todayLi);

    //Function to render tasks for selected project
    function renderTasks(project) {
        taskListContainer.innerHTML = "";  // Clear existing tasks
        if (!project) return;
        project.todos.forEach(todo => {
            const li = document.createElement("li");
            li.classList.add("task-item");
            li.innerHTML = `
                <strong>${todo.title}</strong>
                <p>${todo.description}</p>
                <small>Due: ${todo.dueDate || "No date"} | Priority: ${todo.priority}</small>
            `;
            taskListContainer.appendChild(li);
        });
    }

    //Function to handle project switching
    function handleProjectSwitch(e) {
        if (e.target.tagName === "LI") {
            const selectedTitle = e.target.textContent;
            const selectedProject = projectManager.getProject(selectedTitle);

            //Update heading
            heading.textContent = selectedTitle;

            document.querySelectorAll(".project-item").forEach(item => item.classList.remove("active"));
            e.target.classList.add("active");

            renderTasks(selectedProject);
        }
    }

    //Handle project switching
    projectList.addEventListener("click", handleProjectSwitch);

    //Function to add new Project
    addProjectBtn.addEventListener("click", () => {
        const projectName = prompt("Enter project name:");
        if (!projectName) return;

        const newProject = createProject(projectName);
        projectManager.addProject(newProject);

        const li = document.createElement("li");
        li.textContent = newProject.title;
        li.classList.add("project-item");
        projectList.appendChild(li);

        // Switch to the new project
        handleProjectSwitch({ target: li });
    })

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

        // Find the currently active project
        const activeProjectName = document.querySelector(".project-item.active").textContent;
        const activeProject = projectManager.getProject(activeProjectName);

        //Create a new todo object
        const newTodo = createTodo(title, description, dueDate, priority);

        //Add todo to the selected project
        activeProject.addTodo(newTodo);

        //Re-render the updated task list
        renderTasks(activeProject);
        // Clear only inputs, keep form visible for next task
        taskForm.reset();
        submitBtn.disabled = true;
    });
});