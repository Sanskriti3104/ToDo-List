import { format, isToday, isTomorrow, isPast, parseISO } from 'date-fns';

export function renderTasks(project, taskListContainer) {
    taskListContainer.innerHTML = "";
    if (!project) return;

    project.todos.forEach((todo, todoIndex) => {
        const li = document.createElement("li");
        li.classList.add("task-item", todo.priority);
        if (todo.completed) li.classList.add("completed");

        let dueLabel = "No date";

        if (todo.dueDate) {
            const due = parseISO(todo.dueDate); // parse string (like "2025-10-18") into Date

            if (isToday(due)) {
                dueLabel = "Today";
                li.classList.add("due-today");
            } else if (isTomorrow(due)) {
                dueLabel = "Tomorrow";
                li.classList.add("due-tomorrow");
            } else if (isPast(due) && !isToday(due)) {
                dueLabel = `Overdue (${format(due, "dd MMM yyyy")})`;
                li.classList.add("overdue");
            } else {
                dueLabel = format(due, "dd MMM yyyy");
                li.classList.add("due-future");
            }
        }

        li.innerHTML = `
            <div class="task-content">
                <strong>${todo.title}</strong>
                <p>${todo.description}</p>
                <small>
                    Due: <span class="due-text">${dueLabel}</span> |
                    Priority: <span class="priority-text ${todo.priority}">${todo.priority}</span>
                </small>

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
        if (project.title === "Inbox") return;

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