// Edit service function
function editService(serviceId) {
    alert("Editing service with ID: " + serviceId);
    // You can open a modal or redirect to an edit page
}

// Delete service function
function deleteService(serviceId) {
    const confirmation = confirm("Are you sure you want to delete this service?");
    if (confirmation) {
        alert("Service with ID " + serviceId + " has been deleted.");
        // Add your delete functionality here (e.g., make an API call)
    }
}

// Open add service modal
function openAddServiceModal() {
    document.getElementById('addServiceModal').classList.remove('hidden');
}

// Close add service modal
function closeAddServiceModal() {
    document.getElementById('addServiceModal').classList.add('hidden');
}

// Handle form submission for adding new service
document.getElementById('addServiceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const serviceName = document.getElementById('serviceName').value;
    const serviceDescription = document.getElementById('serviceDescription').value;
    const servicePrice = document.getElementById('servicePrice').value;
    alert(`Service Added: ${serviceName}, ${serviceDescription}, $${servicePrice}`);
    closeAddServiceModal();
});