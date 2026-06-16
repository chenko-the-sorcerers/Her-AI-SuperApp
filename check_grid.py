with open('/home/faiz/her/Her-AI-SuperApp/pages/frontend/profile.html', 'r') as f:
    html = f.read()

import re
m = re.search(r'<div class="dash-grid">.*?</main>.*?</section>', html, re.DOTALL)
if m:
    print(m.group(0)[:500])
    print("...")
    print(m.group(0)[-500:])
else:
    print("Not found")
