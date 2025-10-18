import { parseISO, isToday, isPast } from "date-fns";

export function getTodayTasks(projectManager) {
    const allTodayTasks = [];

    projectManager.projects.forEach(project => {
        
        project.todos.forEach(todo => {
            if(todo.dueDate){
                const due = parseISO(todo.dueDate);
                if(isToday(due)) {
                    // Clone todo but include info about which project it belongs to
                    allTodayTasks.push({...todo, projectTitle: project.title });
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
            if(todo.dueDate){
                const due = parseISO(todo.dueDate);
                if(!isPast(due) && !isToday(due)) {
                    // Clone todo but include info about which project it belongs to
                    upcomingTasks.push({...todo, projectTitle: project.title });
                }
            }
        });
    });

    return upcomingTasks;
} 