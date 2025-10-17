export function renderTasks(project, taskListContainer) {
    taskListContainer.innerHTML = "";
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
                <i class='fa fa-trash' title="Delete Task"></i>
            </div>
        `;

        li.querySelector(".fa-check").addEventListener("click", () => {
            todo.toggleComplete();
            renderTasks(project, taskListContainer);
        });

        li.querySelector(".fa-trash").addEventListener("click", () => {
            project.removeTodo(todoIndex);
            renderTasks(project, taskListContainer);
        });

        taskListContainer.appendChild(li);
    });
}

export function renderProjects(projectManager, projectList, activeProject) {
    projectList.innerHTML = "";

    projectManager.projects.forEach(project => {
        if(project.title === "Inbox") return;
        
        const li = document.createElement("li");
        li.classList.add("project-item");
        li.dataset.title = project.title;

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