import re

with open('/home/faiz/her/Her-AI-SuperApp/js/frontend/profile.js', 'r') as f:
    content = f.read()

old_code = """    if (FELLOW_SECTION_RENDERERS[key]) {
        const sectionMeta = {"""

new_code = """    const header = document.querySelector('#participant-home .fellow-header');
    if (header) {
        header.style.display = (key === 'participant-chatroom' || key === 'participant-settings') ? 'none' : 'flex';
    }

    if (FELLOW_SECTION_RENDERERS[key]) {
        const sectionMeta = {"""

content = content.replace(old_code, new_code)

old_show_home = """function showFellowHome() {
    const grid = document.querySelector('#participant-home .fellow-grid');"""

new_show_home = """function showFellowHome() {
    const header = document.querySelector('#participant-home .fellow-header');
    if (header) header.style.display = 'flex';
    const grid = document.querySelector('#participant-home .fellow-grid');"""

content = content.replace(old_show_home, new_show_home)

with open('/home/faiz/her/Her-AI-SuperApp/js/frontend/profile.js', 'w') as f:
    f.write(content)

