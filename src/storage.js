// storage.js

export function saveToLocalStorage(projectManager) {
    // Save the entire projectManager (all projects + todos)
    localStorage.setItem("todoData", JSON.stringify(projectManager.projects));
}

export function loadFromLocalStorage(projectManager, createProject, createTodo) {
    const data = localStorage.getItem("todoData");
    if (!data) return;

    const savedProjects = JSON.parse(data);

    // Rebuild full structure with correct object methods
    savedProjects.forEach(projectData => {
        const project = createProject(projectData.title);
        projectData.todos.forEach(todoData => {
            const todo = createTodo(
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority
            );
            if (todoData.completed) todo.completed = true;
            project.addTodo(todo);
        });
        projectManager.addProject(project);
    });
}