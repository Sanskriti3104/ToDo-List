export function createTodo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false,
        toggleComplete() {
            this.completed = !this.completed;
        }
    };
}

export function createProject(title) {
    return {
        title,
        todos: [],
        addTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    };
}

export function createProjectManager() {
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