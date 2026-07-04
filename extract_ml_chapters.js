const fs = require('fs');
const path = require('path');

const srcDir = 'pages/frontend/fellow-dashboard/ai-lab/lessons';
const destDir = 'pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/chapters';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = [
    { src: 'ml-intro.html', dest: 'chapter-1.html' },
    { src: 'ml-hypothesis.html', dest: 'chapter-2.html' },
    { src: 'ml-vc-dim.html', dest: 'chapter-3.html' },
    { src: 'ml-bias-variance.html', dest: 'chapter-4.html' }
];

for (const file of files) {
    const content = fs.readFileSync(path.join(srcDir, file.src), 'utf8');
    
    // Extract everything between <article ...> and </article>
    const articleStart = content.indexOf('<article');
    const firstCloseBracket = content.indexOf('>', articleStart);
    const articleEnd = content.indexOf('</article>');
    
    if (articleStart !== -1 && articleEnd !== -1) {
        let innerHTML = content.substring(firstCloseBracket + 1, articleEnd).trim();
        // Remove style blocks if we want to move them to a central place, 
        // but for now keeping them is safer to avoid breaking layout.
        fs.writeFileSync(path.join(destDir, file.dest), innerHTML, 'utf8');
        console.log(`Extracted ${file.src} to ${file.dest}`);
    } else {
        console.log(`Could not find <article> in ${file.src}`);
    }
}
