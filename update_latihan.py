import re

html_path = '/home/faiz/her3/Her-AI-SuperApp/pages/frontend/fellow-dashboard/ai-fundamental/02-python-untuk-ai/latihan.html'
with open(html_path, 'r') as f:
    content = f.read()

with open('/home/faiz/.gemini/antigravity-cli/brain/b14e1d0b-b785-4223-8425-ad4bcf13d3bb/scratch/latihan_form.html', 'r') as f:
    new_form = f.read()

pattern = re.compile(r'<form class="practice-response-form" id="pythonPracticeForm">.*?</form>', re.DOTALL)
new_content = pattern.sub(new_form, content)

with open(html_path, 'w') as f:
    f.write(new_content)

print("Replaced successfully!")
