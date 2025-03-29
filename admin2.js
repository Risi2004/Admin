document.addEventListener("DOMContentLoaded", function () {
    // Toggle the sidebar expansion/collapse
    document.getElementById('toggleSidebar').addEventListener('click', function () {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');
        sidebar.classList.toggle('sidebar-expanded');
        sidebar.classList.toggle('sidebar-collapsed');
        mainContent.classList.toggle('ml-64');
    });
});
