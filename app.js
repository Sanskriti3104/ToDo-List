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
        removeTodo(index) {
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
    const addTaskBtns = document.querySelectorAll(".show-form-btn");
    const todayView = document.querySelector(".today-view");
    const taskForm = document.getElementById("taskForm");
    const cancelBtn = document.getElementById("cancelBtn");
    const taskListContainer = document.querySelector(".task-list ul");
    const taskListBtn = document.querySelector(".task-list button");
    const submitBtn = document.querySelector(".submitBtn");
    const projectList = document.querySelector(".project-list ul");
    const addProjectBtn = document.querySelector(".project-list button");
    const projectForm = document.querySelector(".project-form");
    const projectNameInput = document.querySelector(".project-form input");
    const cancelProjectBtn = document.querySelector("#cancelProjectBtn");
    const saveProjectBtn = document.querySelector("#saveProjectBtn");
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
            li.classList.add("task-item", todo.priority);
            if(todo.completed) li.classList.add("completed");

            li.innerHTML = `
            <div class="task-content">
                <strong>${todo.title}</strong>
                <p>${todo.description}</p>
                <small>Due: ${todo.dueDate || "No date"} | Priority: ${todo.priority}</small>
            </div>
            <div class="task-actions">
                <i class='fa fa-check' title="Mark Complete"></i>
                <i class='fa fa-edit' title="Edit Task"></i>
                <i class='fa fa-trash' title="Delete Task"></i>
            </div>
            `;

            //Functionality for task completion
            li.querySelector(".fa-check").addEventListener("click",() => {
                if(todo.completed) return;

                todo.toggleComplete();
                renderTasks(project);
            })

            //Functionality for deleting tasks
            li.querySelector(".fa-trash").addEventListener("click", () =>{
                const index = project.todos.indexOf(todo);

                if(index === -1) return;
                project.removeTodo(index);
                renderTasks(project);
            })

            taskListContainer.appendChild(li);
        });
    }

    //Function to handle form closing 
    function closeForm(e) {
        taskForm.reset();
        taskForm.style.display = "none";
        taskListBtn.style.display = "flex";
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

            closeForm();
            renderTasks(selectedProject);
        }
    }

    //Handle project switching
    projectList.addEventListener("click", handleProjectSwitch);

    //Function to add new Project
    addProjectBtn.addEventListener("click", () => {
        addProjectBtn.style.display = "none";
        projectForm.style.display = "flex";
        projectNameInput.focus();
    });

    //Function to cancel project creation
    function cancelProjectCreation() {
        projectForm.reset();
        projectForm.style.display = "none";
        addProjectBtn.style.display = "block";
    }

    //Cancel project creation
    cancelProjectBtn.addEventListener("click", cancelProjectCreation);

    // Enable/disable submit button based on project title input
    projectForm.addEventListener("input", () => {
        const title = projectNameInput.value.trim();
        saveProjectBtn.disabled = !title;
    });

    //Handle project form submission
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const projectName = projectNameInput.value.trim();
        if (!projectName) return;

        const newProject = createProject(projectName);
        projectManager.addProject(newProject);

        const li = document.createElement("li");
        li.textContent = newProject.title;
        li.classList.add("project-item");
        projectList.appendChild(li);

        cancelProjectCreation();
        // Switch to the new project
        handleProjectSwitch({ target: li });
    })

    // Show form on "Add Task" click
    addTaskBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            todayView.style.display = "none";     // hide welcome view
            document.querySelector(".task-list").style.display = "block"; // show task list section
            taskListBtn.style.display = "none";
            taskForm.style.display = "block";     // keep form open
        });
    });

    // Hide form on "Cancel" click
    cancelBtn.addEventListener("click", closeForm);

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