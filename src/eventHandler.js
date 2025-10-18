import { createTodo, createProject, createProjectManager } from "./model";
import { renderTasks, renderProjects } from "./render";
import { getTodayTasks, getUpcomingTasks, getPriorityTasks } from "./navItems";

// Main application function, exported to be called from index.js
export function app() {
    document.addEventListener("DOMContentLoaded", () => {
        // --- DOM Elements ---
        const addTaskBtns = document.querySelectorAll(".show-form-btn");
        const todayView = document.querySelector(".today-view");
        const taskForm = document.getElementById("taskForm");
        const cancelBtn = document.getElementById("cancelBtn");
        const taskListContainer = document.querySelector(".task-list ul");
        const taskListBtn = document.querySelector(".task-list button");
        const taskList = document.querySelector(".task-list");
        const submitBtn = document.querySelector(".submitBtn");
        const projectList = document.querySelector(".project-list ul");
        const addProjectBtn = document.querySelector(".project-list button");
        const projectForm = document.querySelector(".project-form");
        const projectNameInput = document.querySelector(".project-form input");
        const cancelProjectBtn = document.querySelector("#cancelProjectBtn");
        const saveProjectBtn = document.querySelector("#saveProjectBtn");
        const heading = document.querySelector(".main h2");
        const inbox = document.querySelector(".inbox");
        const today = document.querySelector(".today");
        const upcoming = document.querySelector(".upcoming");
        const priority = document.querySelector(".priority");

        // Create project manager and default "Today" project
        const projectManager = createProjectManager();

        // Check if "Today" exists before creating it 
        let todayProject = projectManager.getProject("Today");
        if (!todayProject) {
            todayProject = createProject("Today");
            projectManager.addProject(todayProject);
        }

        //Check if "Inbox" exists before creating it
        let inboxProject = projectManager.getProject("Inbox");
        if (!inboxProject) {
            inboxProject = createProject("Inbox");
            projectManager.addProject(inboxProject);
        }

        // Track the currently active project
        let activeProject = todayProject;

        // --- Helper Functions ---

        //Function to handle form closing 
        function closeForm() {
            taskForm.reset();
            taskForm.style.display = "none";
        }

        //Function to cancel project creation
        function cancelProjectCreation() {
            projectForm.reset();
            projectForm.style.display = "none";
            addProjectBtn.style.display = "block";
        }

        // --- Core Application Logic ---

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

            closeForm(); // Close the task form when switching projects

            if (projectName === "Today" && todayProject.todos.length === 0) {
                todayView.style.display = "flex";
                taskListBtn.style.display = "none";
                document.querySelector(".task-list").style.display = "none";
            } else {
                todayView.style.display = "none";
                document.querySelector(".task-list").style.display = "block";
                taskListBtn.style.display = "flex";
            }

            renderTasks(selectedProject, taskListContainer);
        }

        // Function to handle project switching (event listener delegate)
        function handleProjectSwitch(e) {
            const li = e.target.closest('.project-item');
            if (!li) return; // Click wasn't on a project item      

            // Handle project deletion
            if (e.target.classList.contains('fa-trash')) {
                const projectTitle = li.dataset.title;
                const projectIndex = projectManager.projects.findIndex(project => project.title === projectTitle);

                if (projectIndex !== -1) {
                    projectManager.removeProject(projectIndex);
                    renderProjects(projectManager, projectList, activeProject);

                    //If deleted project was active
                    if (activeProject.title === projectTitle) {
                        if (projectManager.getProject("Today")) {
                            switchProject("Today");
                        } else if (projectManager.projects.length === 1 && projectManager.getProject("Inbox")) {
                            switchProject("Inbox");
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
        cancelBtn.addEventListener("click", () => {
            closeForm();
            switchProject(activeProject.title);
        });

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

            renderTasks(activeProject, taskListContainer);

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

            // Check if project name already exists
            const existingProject = projectManager.getProject(projectName);
            if (existingProject) {
                alert("A project with this name already exists!");
                return;
            }

            const newProject = createProject(projectName);
            projectManager.addProject(newProject);

            // Re-render all projects, switch to the new one, and update the view
            activeProject = newProject;
            renderProjects(projectManager, projectList, activeProject);
            switchProject(projectName);

            cancelProjectCreation();
        })

        // -- Nav items helper functions --

        function hideWelcomeView() {
            // Hide the welcome view
            todayView.style.display = "none";
            taskList.style.display = "block";
            taskListBtn.style.display = "none";
            closeForm();
            document.querySelectorAll(".project-item").forEach(item => item.classList.remove("active"));
        }

        function createItems(todo) {
            const li = document.createElement("li");
            li.classList.add("task-item", todo.priority);
            if (todo.completed) li.classList.add("completed");

            li.innerHTML = `
            <div class="task-content">
                <strong>${todo.title}</strong>
                <p>${todo.description || ""}</p>
                <small>
                    From: <span class="project-ref">${todo.projectTitle}</span> |
                    Due: <span class="due-text">${todo.dueDate || "—"}</span> |
                    Priority: <span class="priority-text ${todo.priority}">${todo.priority}</span>
                </small>
            </div>
        `;

            taskListContainer.appendChild(li);
        }

        // -- Nav items --

        inbox.addEventListener("click", () => {
            switchProject("Inbox");
        });

        today.addEventListener("click", () => {
            heading.textContent = "Today";

            const todayTasks = getTodayTasks(projectManager);

            hideWelcomeView();

            // Clear old list
            taskListContainer.innerHTML = "";

            // Render today's tasks
            if (todayTasks.length === 0) {
                taskListContainer.innerHTML = `<p class="no-tasks">No tasks due today </p>`;
                return;
            }

            todayTasks.forEach(todo => {
                createItems(todo);
            });
        })

        upcoming.addEventListener("click", () => {
            heading.textContent = "Upcoming";

            const upcomingTasks = getUpcomingTasks(projectManager);

            hideWelcomeView();

            // Clear old list
            taskListContainer.innerHTML = "";

            // Render upcoming's tasks
            if (upcomingTasks.length === 0) {
                taskListContainer.innerHTML = `<p class="no-tasks">No tasks due upcoming </p>`;
                return;
            }

            upcomingTasks.forEach(todo => {
                createItems(todo);
            });
        })

        priority.addEventListener("click", () => {
            heading.textContent = "Priority";

            const priorityTasks = getPriorityTasks(projectManager);

            hideWelcomeView();

            // Clear old list
            taskListContainer.innerHTML = "";

            if (priorityTasks.length === 0) {
                taskListContainer.innerHTML = `<p class="no-tasks">No tasks available</p>`;
                return;
            }

            // Render all tasks together, sorted by priority + date
            priorityTasks.forEach(todo => {
                createItems(todo);
            });
        });

        // --- Initialization ---

        // Render initial project list and tasks
        renderProjects(projectManager, projectList, activeProject);
        switchProject("Today"); // Ensure "Today" is active and its tasks are shown
    });
} 