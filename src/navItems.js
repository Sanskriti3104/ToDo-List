import { parseISO, isToday, isPast } from "date-fns";

export function getTodayTasks(projectManager) {
    const allTodayTasks = [];

    projectManager.projects.forEach(project => {

        project.todos.forEach(todo => {
            if (todo.dueDate) {
                const due = parseISO(todo.dueDate);
                if (isToday(due)) {
                    // Clone todo but include info about which project it belongs to
                    allTodayTasks.push({ ...todo, projectTitle: project.title });
                }
            }
        });
    });

    return allTodayTasks;
}

export function getUpcomingTasks(projectManager) {
    const upcomingTasks = [];

    projectManager.projects.forEach(project => {

        project.todos.forEach(todo => {
            if (todo.dueDate) {
                const due = parseISO(todo.dueDate);
                if (!isPast(due) && !isToday(due)) {
                    // Clone todo but include info about which project it belongs to
                    upcomingTasks.push({ ...todo, projectTitle: project.title });
                }
            }
        });
    });

    return upcomingTasks;
}

export function getPriorityTasks(projectManager) {
    const allTasks = [];

    // Collect all tasks with project reference
    projectManager.projects.forEach(project => {
        project.todos.forEach(todo => {
            allTasks.push({ ...todo, projectTitle: project.title });
        });
    });

    // Helper to convert priority to rank
    const priorityRank = {
        high: 1,
        medium: 2,
        low: 3
    };

    // Helper: sort by priority, then by date
    allTasks.sort((a, b) => {
        const pA = priorityRank[a.priority?.toLowerCase()] || 4;
        const pB = priorityRank[b.priority?.toLowerCase()] || 4;

        // First, sort by priority
        if (pA !== pB) return pA - pB;

        // Then, sort by due date (earlier first)
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;

        return new Date(a.dueDate) - new Date(b.dueDate);
    });

    return allTasks;
}
