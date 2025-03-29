document.addEventListener("DOMContentLoaded", function () {
    let sidebarContainer = document.getElementById("sidebar-container");

    if (sidebarContainer) {
        fetch("sidebar.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Sidebar file not found");
                }
                return response.text();
            })
            .then(data => {
                sidebarContainer.innerHTML = data;
            })
            .catch(error => console.error("Error loading sidebar:", error));
    }
});
