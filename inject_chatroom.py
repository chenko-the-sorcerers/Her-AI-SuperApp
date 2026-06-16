import re

with open('pages/frontend/chatroom.html', 'r') as f:
    chat_html = f.read()

# Extract Room Chat Section
room_match = re.search(r'(<!-- Room Chat Section -->\s*<div class="cr-room-section">.*?</div>)', chat_html, re.DOTALL)
room_html = room_match.group(1) if room_match else ''

# Extract cr-main and cr-info-panel
main_match = re.search(r'(<main class="cr-main" id="cr-main">.*?</main>)', chat_html, re.DOTALL)
info_match = re.search(r'(<!-- RIGHT: INFO PANEL -->\s*<aside class="cr-info-panel" id="cr-info-panel">.*?</aside>)', chat_html, re.DOTALL)

cr_main_html = main_match.group(1) if main_match else ''
cr_info_html = info_match.group(1) if info_match else ''

with open('pages/frontend/profile.html', 'r') as f:
    prof_html = f.read()

# Inject Room Chat into sidebar (before Lainnya)
prof_html = prof_html.replace('<p class="fellow-nav-label">Lainnya</p>', room_html + '\n\n                    <p class="fellow-nav-label">Lainnya</p>')

# Inject Chatroom View into participant-home (before fellow-module-welcome)
chat_view_wrapper = f"""
                <!-- CHATROOM VIEW INJECTED -->
                <div id="participant-chatroom-view" style="display: none; width: 100%; height: 100vh; flex-direction: row; background: #fff;">
                    {cr_main_html}
                    {cr_info_html}
                </div>
                <!-- END CHATROOM VIEW -->
"""

prof_html = prof_html.replace('<section class="fellow-module-welcome"', chat_view_wrapper + '\n                <section class="fellow-module-welcome"')

with open('pages/frontend/profile.html', 'w') as f:
    f.write(prof_html)

print("Injection complete.")
