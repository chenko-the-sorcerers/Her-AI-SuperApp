with open('/home/faiz/her/Her-AI-SuperApp/pages/frontend/profile.html', 'r') as f:
    html = f.read()

div_open = html.count('<div')
div_close = html.count('</div')

section_open = html.count('<section')
section_close = html.count('</section')

print(f"divs: {div_open} open, {div_close} close")
print(f"sections: {section_open} open, {section_close} close")
