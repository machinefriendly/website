const fs = require('fs');
const path = require('path');

// List of HTML files to update
const htmlFiles = [
  'index.html',
  'Privacy Policy.html',
  'Terms of Service.html',
  'ImageKit.html'
];

// Function to update the HTML file
function updateHtmlFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove any existing date script
    content = content.replace(
      /<script>\s*\/\/ Function to format date[\s\S]*?<\/script>/,
      ''
    );
    
    // Add the script tag for the date-updater.js file before the closing body tag
    if (!content.includes('src/date-updater.js')) {
      content = content.replace(
        /<\/body>/,
        '<script src="src/date-updater.js"></script>\n</body>'
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
  updateHtmlFile(filePath);
});

console.log('All files have been updated.');
