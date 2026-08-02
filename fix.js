const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src');
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find cases where padding is on parent and container mx-auto is on immediate child
  let lines = content.split('\n');
  let newLines = [];
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    // Check if current line is a section or footer with padding
    if (line.includes('px-4') && line.includes('sm:px-6') && line.includes('lg:px-8')) {
      if (i + 1 < lines.length && lines[i+1].includes('className="container mx-auto"')) {
        // Remove padding from parent
        line = line.replace(' px-4 sm:px-6 lg:px-8', '').replace('px-4 sm:px-6 lg:px-8 ', '');
        // Add padding to child
        lines[i+1] = lines[i+1].replace('className="container mx-auto"', 'className="px-4 sm:px-6 lg:px-8 container mx-auto w-full"');
        modified = true;
      }
    }
    
    // special case for footer
    if (line.includes('className="mx-auto max-w-[1200px]"') || line.includes('className="container mx-auto flex')) {
        // let's ensure padding is present
    }
    
    newLines.push(line);
  }

  if (modified) {
    fs.writeFileSync(file, newLines.join('\n'), 'utf8');
    console.log('Updated', file);
    changedCount++;
  }
});
console.log('Total files updated:', changedCount);
