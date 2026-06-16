import re

with open('/home/faiz/her/Her-AI-SuperApp/pages/frontend/profile.html', 'r') as f:
    html = f.read()

# 1. Modules
html = re.sub(
    r'<div class="courses-row">.*?</div>\s*<!-- Row 2:',
    r'<div class="courses-row fellow-module-grid" id="participantModuleList"></div>\n                    <!-- Row 2:',
    html,
    flags=re.DOTALL
)

# 2. Komunitas
html = re.sub(
    r'<div class="activity-list" style="display: flex; flex-direction: column; gap: 20px;">.*?</div>\s*</div>\s*<!-- Weekly Challenge -->',
    r'<div class="activity-list" id="participantCommunityList" style="display: flex; flex-direction: column; gap: 20px;"></div>\n                            </div>\n\n                        <!-- Weekly Challenge -->',
    html,
    flags=re.DOTALL
)

# 3. Tracks
html = re.sub(
    r'<div class="track-grid" style="display: grid; grid-template-columns: repeat\(auto-fit, minmax\(140px, 1fr\)\); gap: 16px;">.*?</div>\s*</div>\s*</div>\s*<div class="dash-right-col">',
    r'<div class="track-grid" id="participantTrackList" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px;"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dash-right-col">',
    html,
    flags=re.DOTALL
)

# 4. Perjalanan Fellowship
html = re.sub(
    r'<div class="journey-list" style="display: flex; flex-direction: column; gap: 24px;">.*?</div>\s*</div>\s*<!-- Upcoming Events Widget -->',
    r'<div class="journey-list" id="profileProgressList" style="display: flex; flex-direction: column; gap: 24px;"></div>\n                        </div>\n\n                    <!-- Upcoming Events Widget -->',
    html,
    flags=re.DOTALL
)

# 5. Upcoming Events
html = re.sub(
    r'<!-- Upcoming Events Widget -->.*?<div class="activity-list" style="display: flex; flex-direction: column; gap: 16px;">.*?</div>\s*</div>\s*<!-- Leaderboard Widget -->',
    r'<!-- Upcoming Events Widget -->\n                    <div class="widget-plain" style="margin-top: 24px;">\n                        <div class="widget-title">\n                            <h4>Upcoming Events</h4>\n                            <a href="#/meeting">Lihat Semua <i class="fas fa-chevron-right ml-1" style="font-size: 10px;"></i></a>\n                        </div>\n                        <div class="activity-list" id="participantEventList" style="display: flex; flex-direction: column; gap: 16px;"></div>\n                    </div>\n\n                    <!-- Leaderboard Widget -->',
    html,
    flags=re.DOTALL
)

# 6. Leaderboard
html = re.sub(
    r'<!-- Leaderboard Widget -->.*?<div class="activity-list" style="display: flex; flex-direction: column; gap: 16px;">.*?</div>\s*</div>\s*<!-- Butuh Bantuan Widget -->',
    r'<!-- Leaderboard Widget -->\n                    <div class="widget-plain" style="margin-top: 24px;">\n                        <div class="widget-title">\n                            <h4>Leaderboard</h4>\n                            <a href="#/leaderboard">Lihat Semua <i class="fas fa-chevron-right ml-1" style="font-size: 10px;"></i></a>\n                        </div>\n                        <div class="activity-list" id="participantLeaderboardList" style="display: flex; flex-direction: column; gap: 16px;"></div>\n                    </div>\n\n                    <!-- Butuh Bantuan Widget -->',
    html,
    flags=re.DOTALL
)

with open('/home/faiz/her/Her-AI-SuperApp/pages/frontend/profile.html', 'w') as f:
    f.write(html)
