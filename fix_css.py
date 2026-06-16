import re

with open('/home/faiz/her/Her-AI-SuperApp/css/frontend/profile.css', 'r') as f:
    content = f.read()

# Fix track grid:
old_track_grid = """.fellow-tracks #participantTrackList {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
}"""

new_track_grid = """.fellow-tracks #participantTrackList {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}"""
content = content.replace(old_track_grid, new_track_grid)

# Fix track card layout so text doesn't stack vertically
old_track = """.fellow-track {
    border: 1px solid #f1e3eb;
    border-radius: 9px;
    color: #171421;
    display: grid;
    gap: 6px;
    min-height: 82px;
    padding: 12px;
    text-decoration: none;
}"""

new_track = """.fellow-track {
    border: 1px solid #f1e3eb;
    border-radius: 9px;
    color: #171421;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    min-height: 100px;
    padding: 16px;
    text-decoration: none;
    background: #fff;
    transition: transform 0.2s, box-shadow 0.2s;
}
.fellow-track:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(247, 37, 133, 0.08);
}"""
content = content.replace(old_track, new_track)


with open('/home/faiz/her/Her-AI-SuperApp/css/frontend/profile.css', 'w') as f:
    f.write(content)

