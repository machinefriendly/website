// Function to format date as YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Set the current date when the page loads
window.onload = function() {
  const dateElement = document.getElementById('current-date');
  if (dateElement) {
    dateElement.textContent = formatDate(new Date());
  }
};
