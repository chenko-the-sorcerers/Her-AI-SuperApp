import re

with open('/home/faiz/her/Her-AI-SuperApp/js/frontend/profile.js', 'r') as f:
    content = f.read()

# I will find all instances of function renderParticipantModules and only keep the first one
# Actually, it's safer to just replace all of them with nothing, and then add one at the end?
# Let's just fix the last one which is at line 970

