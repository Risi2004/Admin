 // Function to delete a review
 function deleteReview(button) {
    const row = button.closest('tr');
    row.remove();
}