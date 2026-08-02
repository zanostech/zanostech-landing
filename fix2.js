const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let lines = content.split('\n');
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line.includes('px-4') && line.includes('sm:px-6') && line.includes('lg:px-8')) {
      if (i + 1 < lines.length && lines[i+1].includes('container mx-auto')) {
        if (!lines[i+1].includes('px-4')) {
          // Remove padding from parent
          lines[i] = lines[i].replace(' px-4 sm:px-6 lg:px-8', '').replace('px-4 sm:px-6 lg:px-8 ', '');
          
          // Add padding to child
          lines[i+1] = lines[i+1].replace('className="', 'className="px-4 sm:px-6 lg:px-8 ');
          if (!lines[i+1].includes('w-full')) {
            lines[i+1] = lines[i+1].replace('container mx-auto', 'container mx-auto w-full');
          }
          modified = true;
        }
      }
    }
  }

  if (modified) {
    fs.writeFileSync(file, lines.join('\n'), 'utf8');
    console.log('Updated', file);
    changedCount++;
  }
});
console.log('Total files updated:', changedCount);
