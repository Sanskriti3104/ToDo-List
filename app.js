function createTodo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false, //default
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

    // Create project manager and default "Today" project
    const projectManager = createProjectManager();

    // Check if "Today" exists before creating it 
    let todayProject = projectManager.getProject("Today");
    if (!todayProject) {
        todayProject = createProject("Today");
        projectManager.addProject(todayProject);
    }

    // Track the currently active project
    let activeProject = todayProject;

    //Function to handle form closing 
    function closeForm() {
        taskForm.reset();
        taskForm.style.display = "none";
        taskListBtn.style.display = "flex";
    }

    //Function to render tasks for selected project
    function renderTasks(project) {
        taskListContainer.innerHTML = "";  // Clear existing tasks
        if (!project) return;

        project.todos.forEach((todo, todoIndex) => {
            const li = document.createElement("li");
            li.classList.add("task-item", todo.priority);
            if (todo.completed) li.classList.add("completed");

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
            li.querySelector(".fa-check").addEventListener("click", () => {
                todo.toggleComplete();
                renderTasks(project);
            })

            //Functionality for deleting tasks
            li.querySelector(".fa-trash").addEventListener("click", () => {
                project.removeTodo(todoIndex);
                renderTasks(project);
            })

            taskListContainer.appendChild(li);
        });
    }

    // Function to handle project switching logic
    function switchProject(projectName) {
        const selectedProject = projectManager.getProject(projectName);
        if (!selectedProject) return;

        // Update heading
        heading.textContent = selectedProject.title;
        activeProject = selectedProject;

        // Update active class in sidebar
        document.querySelectorAll(".project-item").forEach(item => item.classList.remove("active"));
        const newActiveItem = Array.from(projectList.children).find(item => item.dataset.title === projectName);
        if (newActiveItem) {
            newActiveItem.classList.add("active");
        }

        closeForm(); // Close the task form when switching projectsd
        renderTasks(selectedProject);
    }

    //Function to handle project switching (event listener delegate)
    function handleProjectSwitch(e) {
        const li = e.target.closest('.project-item');
        if (!li) return; // Click wasn't on a project item      

        // Handle project deletion
        if (e.target.classList.contains('fa-trash')) {
            const projectTitle = li.dataset.title;
            const projectIndex = projectManager.projects.findIndex(project => project.title === projectTitle);

            if (projectIndex !== -1) {
                projectManager.removeProject(projectIndex);
                renderProjects();

                //If deleted project was active
                if (activeProject.title === projectTitle) {
                    if (projectManager.projects.includes("Today")) {
                        switchProject("Today");
                    } else if (projectManager.projects.length === 0) {
                        taskListContainer.innerHTML = "";
                        taskListBtn.style.display = "none";
                        heading.textContent = "Today";
                        todayView.style.display = "flex";
                    } else {
                        switchProject(projectManager.projects[0].title);
                    }
                }
            }
            return;
        }
        // Handle regular project switch (click on the li/span)
        switchProject(li.dataset.title);
    }

    //Function to render projects
    function renderProjects() {
        projectList.innerHTML = "";  // Clear existing projects

        projectManager.projects.forEach(project => {
            const li = document.createElement("li");
            li.classList.add("project-item");
            li.dataset.title = project.title; // Use data attribute for title

            // Set active class if it's the current active project
            if (project.title === activeProject.title) {
                li.classList.add("active");
            }

            li.innerHTML = `
            <span>${project.title}</span>
            <i class='fa fa-trash' title="Delete Project"></i>
            `;

            projectList.appendChild(li);
        });
    }


    // --- EVENT LISTENERS ---

    // Show form on "Add Task" click
    addTaskBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            todayView.style.display = "none";     // hide welcome view
            document.querySelector(".task-list").style.display = "block"; // show task list section
            taskListBtn.style.display = "none";
            taskForm.style.display = "block";     // show form

            // Ensure the submit button is correctly disabled/enabled based on current input
            const title = taskForm.querySelector(".task-title").value.trim();
            submitBtn.disabled = !title;
        });
    });

    // Hide form on "Cancel" click
    cancelBtn.addEventListener("click", closeForm);

    // Enable/disable submit button based on title input
    taskForm.addEventListener("input", () => {
        const title = taskForm.querySelector(".task-title").value.trim();
        submitBtn.disabled = !title;
    });

    // Handle task form submission
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = taskForm.querySelector(".task-title").value.trim();
        const description = taskForm.querySelector(".task-description").value.trim();
        const dueDate = taskForm.querySelector(".task-date").value;
        const priority = taskForm.querySelector(".task-priority").value;

        if (!title) return; // safeguard

        // Use the currently active project
        const newTodo = createTodo(title, description, dueDate, priority);
        activeProject.addTodo(newTodo);

        renderTasks(activeProject);

        // Clear inputs and disable button, but keep form open
        taskForm.reset();
        submitBtn.disabled = true;
    });

    //Handle project switching/deletion
    projectList.addEventListener("click", handleProjectSwitch);

    //Function to open project creation form
    addProjectBtn.addEventListener("click", () => {
        addProjectBtn.style.display = "none";
        projectForm.style.display = "flex";
        projectNameInput.focus();
        saveProjectBtn.disabled = true; // Disable on opening
    });

    //Function to cancel project creation
    function cancelProjectCreation() {
        projectForm.reset();
        projectForm.style.display = "none";
        addProjectBtn.style.display = "block";
    }

    //Cancel project creation
    cancelProjectBtn.addEventListener("click", cancelProjectCreation);

    // Enable/disable save button based on project title input
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

        // Re-render all projects (and automatically switch to the new one)
        renderProjects();
        switchProject(projectName);

        todayView.style.display = "none";      
        taskListBtn.style.display = "flex";    
        heading.textContent = projectName;     

        cancelProjectCreation();
    })

    // Render initial project list and tasks
    renderProjects();
    switchProject("Today"); // Ensure "Today" is active and its tasks are shown
});