//Function to render tasks for selected project
function renderTasks(project) {
    taskListContainer.innerHTML = ""; // Clear existing tasks
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