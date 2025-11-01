import { createTodo, createProject, createProjectManager } from "./model";
import { renderTasks, renderProjects } from "./render";
import { getTodayTasks, getUpcomingTasks, getPriorityTasks, getOverDueTasks } from "./navItems";
import { saveToLocalStorage, loadFromLocalStorage } from "./storage.js";
import { inboxProjectView } from "./inboxView.js";

// Main application function, exported to be called from index.js
export function app() {
    document.addEventListener("DOMContentLoaded", () => {
        // --- DOM Elements ---
        const welcomeModal = document.getElementById("welcomeModal");
        const welcomeForm = document.getElementById("welcomeForm");
        const saveUserNameBtn = document.getElementById("saveUserNameBtn");
        const cancelUserNameBtn = document.getElementById("cancelUserNameBtn");
        const userNameDisplay = document.querySelector(".user-name");
        const userNameEdit = document.querySelector(".top-bar .fa-edit");
        const addTaskBtns = document.querySelectorAll(".show-form-btn");
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
        const overDue = document.querySelector(".overdue");
        const today = document.querySelector(".today");
        const upcoming = document.querySelector(".upcoming");
        const priority = document.querySelector(".priority");
        const editTaskModal = document.getElementById("editTaskModal");
        const cancelEditBtn = document.getElementById("cancelEditBtn");
        const editTaskForm = document.getElementById("editTaskForm");
        const projectNameInputEdit = document.getElementById("editProjectName");
        const todoIndexInputEdit = document.getElementById("editTodoIndex");

        // Create project manager and default "Today" project
        const projectManager = createProjectManager();

        // Load saved data
        loadFromLocalStorage(projectManager, createProject, createTodo);

        //Check if "Inbox" exists before creating it
        let inboxProject = projectManager.getProject("Inbox");
        if (!inboxProject) {
            inboxProject = createProject("Inbox");
            projectManager.addProject(inboxProject);
        }

        // --- Add Dummy Data for First-Time Users ---
        const dataExists = localStorage.getItem("todoData");
        if (!dataExists) {
            // Create some demo projects
            const gettingStarted = createProject("Getting Started");
            const personalProject = createProject("Personal");

            gettingStarted.addTodo(
                createTodo(
                    "Welcome to your To-Do List 🎉",
                    "Click the edit ✏️ icon or delete 🗑️ icons to manage tasks.",
                    (() => {
                        const d = new Date();
                        d.setDate(d.getDate());
                        return d.toISOString().split("T")[0];
                    })(),
                    "low"
                )
            );
            gettingStarted.addTodo(
                createTodo(
                    "Try completing a task ✅",
                    "Click the checkmark icon to mark tasks as done!",
                    (() => {
                        const d = new Date();
                        d.setDate(d.getDate());
                        return d.toISOString().split("T")[0];
                    })(),
                    "medium"
                )
            );

            // Add tasks to "Personal" project
            personalProject.addTodo(
                createTodo(
                    "Buy groceries 🛒",
                    "Milk, eggs, bread, and veggies.",
                    (() => {
                        const d = new Date();
                        d.setDate(d.getDate() - 1);
                        return d.toISOString().split("T")[0]; // yesterday → overdue
                    })(),
                    "low"
                )
            );
            personalProject.addTodo(
                createTodo(
                    "Plan weekend trip 🏞️",
                    "Check train timings and book tickets.",
                    (() => {
                        const d = new Date();
                        d.setDate(d.getDate() + 7);
                        return d.toISOString().split("T")[0]; // next week
                    })(),
                    "medium"
                )
            );

            // Add projects to manager
            projectManager.addProject(gettingStarted);
            projectManager.addProject(personalProject);

            // Save everything immediately
            saveToLocalStorage(projectManager);
        }

        // Track the currently active project
        let activeProject = projectManager.projects[1];
        openActiveProject();

        // --- Helper Functions ---

        // Function to update the displayed username
        function updateUserName(name) {
            userNameDisplay.textContent = `Hello ${name}`;
        }

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

        // Function to open the active project
        function openActiveProject() {
            if (projectManager.projects.length === 1 && projectManager.getProject("Inbox")) {
                switchProject("Inbox");
                inboxProjectView(projectManager, taskListContainer);
            } else {
                switchProject(projectManager.projects[1].title);
            }
        }

        // --- Welcome Model Logic ---

        // Check for saved username on load
        const savedUserName = localStorage.getItem("userName");
        if (savedUserName) {
            updateUserName(savedUserName);
            welcomeModal.style.display = "none";
        } else {
            welcomeModal.style.display = "block";
        }

        // Enable/disable 'Start' button based on input
        welcomeForm.addEventListener("input", () => {
            const userName = welcomeForm.querySelector(".userName-title").value.trim();
            saveUserNameBtn.disabled = !userName;
        });

        // Handle Welcome Form Submission
        welcomeForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const userName = welcomeForm.querySelector(".userName-title").value.trim();
            if (!userName) return;

            if (userName) {
                localStorage.setItem("userName", userName);
                updateUserName(userName);
                welcomeModal.style.display = "none";
            }
        });

        //Update userName
        userNameEdit.addEventListener("click", () => {
            welcomeModal.style.display = "block";
        })

        cancelUserNameBtn.addEventListener("click", () => {
            welcomeModal.style.display = "none";
        });

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

            document.querySelector(".task-list").style.display = "block";
            taskListBtn.style.display = "flex";

            renderTasks(selectedProject, taskListContainer);
            saveToLocalStorage(projectManager);
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
                    saveToLocalStorage(projectManager);

                    //If deleted project was active
                    if (activeProject.title === projectTitle) {
                        openActiveProject();
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
            saveToLocalStorage(projectManager);

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

            saveToLocalStorage(projectManager);
            cancelProjectCreation();
        })

        // -- Nav items helper functions --

        function hideWelcomeView() {
            // Hide the welcome view
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

        function handleNavClicks(fetchTashFn, headingText) {
            heading.textContent = headingText;

            const tasks = fetchTashFn(projectManager);

            hideWelcomeView();

            taskListContainer.innerHTML = "";

            if (!tasks || tasks.length === 0) {
                taskListContainer.innerHTML = `<p class="no-tasks">No tasks available</p>`;
                return;
            }

            // Render tasks
            tasks.forEach(todo => createItems(todo));
        }
        // -- Nav items --

        inbox.addEventListener("click", () => {
            switchProject("Inbox");
            inboxProjectView(projectManager, taskListContainer);
        });

        today.addEventListener("click", () => {
            handleNavClicks(getTodayTasks, "Today");
        })

        upcoming.addEventListener("click", () => {
            handleNavClicks(getUpcomingTasks, "Upcoming");
        })

        priority.addEventListener("click", () => {
            handleNavClicks(getPriorityTasks, "Priority");
        });

        overDue.addEventListener("click", () => {
            handleNavClicks(getOverDueTasks, "OverDue");
        });

        // Function to close the modal
        function closeEditModal() {
            editTaskModal.style.display = "none";
            editTaskForm.reset();
        }

        // Close modal on Cancel button click
        cancelEditBtn.addEventListener("click", closeEditModal);

        // Close modal if user clicks outside of it
        window.addEventListener("click", (event) => {
            if (event.target == editTaskModal) {
                closeEditModal();
            }
        });

        // Handle modal form submission (Save)
        editTaskForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const currentProject = projectManager.getProject(projectNameInputEdit.value);
            const index = parseInt(todoIndexInputEdit.value);

            if (!currentProject || index === undefined) return;

            const todoToEdit = currentProject.todos[index];

            // Get updated values from modal form
            const newTitle = editTaskForm.querySelector(".task-title-edit").value.trim();
            const newDesc = editTaskForm.querySelector(".task-description-edit").value.trim();
            const newDueDate = editTaskForm.querySelector(".task-date-edit").value;
            const newPriority = editTaskForm.querySelector(".task-priority-edit").value;

            if (!newTitle) {
                alert("Title cannot be empty!");
                return;
            }

            // Update the todo item properties
            todoToEdit.title = newTitle;
            todoToEdit.description = newDesc;
            todoToEdit.dueDate = newDueDate;
            todoToEdit.priority = newPriority;

            // Re-render the tasks for the current project
            renderTasks(currentProject, taskListContainer);
            saveToLocalStorage(projectManager);

            // Close the modal
            closeEditModal();
        });

        // --- Initialization ---

        // Render initial project list and tasks
        renderProjects(projectManager, projectList, activeProject);
        switchProject("Getting Started"); // Ensure "Getting Started" is active and its tasks are shown
    });
} 