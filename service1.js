// Open the modal
function openModal() {
    document.getElementById("addServiceModal").classList.remove("hidden");
}

// Close the modal
function closeModal() {
    document.getElementById("addServiceModal").classList.add("hidden");
}

// Save the service (dummy function)
function saveService() {
    const name = document.getElementById("serviceName").value;
    const description = document.getElementById("serviceDescription").value;
    const image = document.getElementById("serviceImage").files[0];

    if (name && description && image) {
        alert(`New service added: ${name}`);
        closeModal();
    } else {
        alert("Please fill in all fields.");
    }
}
