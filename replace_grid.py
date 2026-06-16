import re

with open('/home/faiz/her/Her-AI-SuperApp/pages/frontend/fellow-dashboard.html', 'r') as f:
    dashboard_html = f.read()

with open('/home/faiz/her/Her-AI-SuperApp/pages/frontend/profile.html', 'r') as f:
    profile_html = f.read()

# Extract dash-grid from fellow-dashboard.html
dash_grid_match = re.search(r'<div class="dash-grid">.*?</main>', dashboard_html, re.DOTALL)
if dash_grid_match:
    dash_grid_content = dash_grid_match.group(0).replace('</main>', '')
    dash_grid_content = dash_grid_content.strip() + '\n'
else:
    print("Could not find dash-grid in fellow-dashboard.html")
    exit(1)

# In profile.html, find fellow-grid
fellow_grid_match = re.search(r'<div class="fellow-grid">.*?</section>', profile_html, re.DOTALL)
if fellow_grid_match:
    # Wait, the closing tag of the replacement should be exactly the end of the section
    # Actually, in profile.html:
    #                 <div class="fellow-grid">
    #                     ...
    #                     </section>
    #                 </div>
    # Let's find the exact bounds of fellow-grid
    pass

def get_div_content(html, start_str):
    start_idx = html.find(start_str)
    if start_idx == -1: return -1, -1
    
    open_divs = 0
    i = start_idx
    while i < len(html):
        if html[i:i+4] == '<div':
            open_divs += 1
            i += 4
        elif html[i:i+5] == '</div':
            open_divs -= 1
            i += 5
            if open_divs == 0:
                return start_idx, i + 1 # wait, </div> is 6 chars, so i+1 is wrong, it should be i + 1
        else:
            i += 1
    return -1, -1

# dash-grid bounds
dash_start, dash_end = get_div_content(dashboard_html, '<div class="dash-grid">')
dash_grid = dashboard_html[dash_start:dash_end+5]

# fellow-grid bounds
fellow_start, fellow_end = get_div_content(profile_html, '<div class="fellow-grid">')
if fellow_start != -1:
    new_profile = profile_html[:fellow_start] + dash_grid + profile_html[fellow_end+5:]
    with open('/home/faiz/her/Her-AI-SuperApp/pages/frontend/profile.html', 'w') as f:
        f.write(new_profile)
    print("Replaced fellow-grid with dash-grid in profile.html")
else:
    print("Could not find fellow-grid in profile.html")

