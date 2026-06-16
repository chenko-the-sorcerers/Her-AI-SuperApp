const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('/home/faiz/her/Her-AI-SuperApp/pages/frontend/profile.html', 'utf-8');
const dom = new JSDOM(html, { url: "http://localhost/#/participant-home" });

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

// Mock window location hash
Object.defineProperty(window, 'location', {
  value: { hash: '#/participant-home' },
  writable: true
});

try {
    // Run profile.js
    const profileJs = fs.readFileSync('/home/faiz/her/Her-AI-SuperApp/js/frontend/profile.js', 'utf-8');
    eval(profileJs);
    console.log("profile.js executed successfully");
    
    // Simulate hash change
    window.location.hash = '#/participant-chatroom';
    const event = new dom.window.Event('hashchange');
    window.dispatchEvent(event);
    console.log("Hash change to chatroom executed successfully");
} catch (e) {
    console.error("ERROR:", e);
}
