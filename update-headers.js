const fs = require('fs');
const path = require('path');

// List of HTML files to update
const htmlFiles = [
  'index.html',
  'Privacy Policy.html',
  'Terms of Service.html',
  'ImageKit.html'
];

// Function to add or update the header in an HTML file
function updateHeader(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Create the header HTML with dynamic date using JavaScript
    const headerHtml = `
<table class="header">
  <tr>
    <td colspan="2" rowspan="2" class="width-auto">
      <h1 class="title">Machine Friendly</h1>
      <span class="subtitle">Building software that works for humans</span>
    </td>
    <th>Status</th>
    <td class="width-min">Active</td>
  </tr>
  <tr>
    <th>Updated</th>
    <td class="width-min"><time style="white-space: pre;" id="current-date"></time></td>
  </tr>
  <tr>
    <th class="width-min">Contact</th>
    <td class="width-auto"><a href="mailto:hi@machinefriendly.com"><cite>hi@machinefriendly.com</cite></a></td>
    <th class="width-min">Location</th>
    <td>Global</td>
  </tr>
</table>
`;

    // Add JavaScript to update the date dynamically
    const dateScript = `
<script>
  // Function to format date as YYYY-MM-DD
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return \`\${year}-\${month}-\${day}\`;
  }
  
  // Set the current date when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      dateElement.textContent = formatDate(new Date());
    }
  });
</script>
`;

    // Check if the file already has a header
    if (content.includes('<table class="header">')) {
      // Replace existing header with new one
      content = content.replace(
        /<table class="header">[\s\S]*?<\/table>(\s*<label class="debug-toggle-label">[\s\S]*?<\/label>)?/,
        headerHtml
      );
    } else {
      // Add header after <body> tag
      content = content.replace(
        /<body[^>]*>/,
        match => `${match}\n${headerHtml}`
      );
    }

    // Add the date script before the closing body tag if it doesn't exist
    if (!content.includes('formatDate(new Date())')) {
      content = content.replace(
        /<\/body>/,
        match => `${dateScript}\n${match}`
      );
    }

    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

// Process each HTML file
htmlFiles.forEach(file => {
  const filePath = path.resolve(__dirname, file);
  updateHeader(filePath);
});

console.log('All files have been updated.');
