export function inboxProjectView(projectManager, taskListContainer) {
    const inboxProject = projectManager.getProject("Inbox");
    if (!inboxProject) return;

    const addTaskBtn = document.querySelector(".task-list .show-form-btn");
    const taskForm = document.getElementById("taskForm");

    if (inboxProject.todos.length === 0) {
        taskListContainer.innerHTML = "";
        addTaskBtn.style.display = "none";
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("inbox-view");

        emptyDiv.innerHTML = `
            <h3>Capture now, Plan later</h3>
            <p>Inbox is your quick-capture zone - dump ideas fast, plan smart later.</p>
            <button class="inbox-add-btn"><i class="fa fa-plus add-task"></i> Add Task</button>
        `;

        taskListContainer.appendChild(emptyDiv);
        // Handle Add Task button click inside Inbox view
        emptyDiv.querySelector(".inbox-add-btn").addEventListener("click", () => {
            emptyDiv.style.display = "none"; // hide inbox view
            taskForm.style.display = "block"; // show main task form
        });
        return;
    }
}