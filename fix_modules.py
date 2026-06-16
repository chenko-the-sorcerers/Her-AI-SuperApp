import re

with open('/home/faiz/her/Her-AI-SuperApp/js/frontend/profile.js', 'r') as f:
    content = f.read()

# First replace: Fix renderParticipantModules fallback array
old_func_start = """    const fallback = [
        { title: 'Python for AI Beginner', notes: 'Modul 3 dari 10', url: '#/curriculum' },
        { title: 'Machine Learning Fundamentals', notes: 'Modul 6 dari 12', url: '#/curriculum' },
        { title: 'Data Analysis with Pandas', notes: 'Modul 2 dari 8', url: '#/curriculum' }
    ];"""

new_func_start = """    const fallback = [
        { title: 'Python for AI Beginner', notes: 'Modul 3 dari 10', percent: 80, tone: 'pink', icon: 'fa-rocket', url: '#/curriculum', image: '/assets/modules/python-for-ai.png' },
        { title: 'Machine Learning Fundamentals', notes: 'Modul 6 dari 12', percent: 50, tone: 'purple', icon: 'fa-brain', url: '#/curriculum', image: '/assets/modules/machine-learning.png' }
    ];"""

content = content.replace(old_func_start, new_func_start)

with open('/home/faiz/her/Her-AI-SuperApp/js/frontend/profile.js', 'w') as f:
    f.write(content)

