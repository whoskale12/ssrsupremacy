"""
Make the outer white background of LOGO.png transparent WITHOUT punching holes
in the white *inside* the letters. We flood-fill from the image border and only
clear white pixels connected to the edge. Interior white (enclosed by the black
outline) is left untouched.

Run: python scripts/make_logo_transparent.py
"""
from collections import deque
from PIL import Image

SRC = "public/LOGO.png"
DST = "public/logo-transparent.png"
THRESH = 235  # a pixel counts as "white-ish background" if R,G,B all >= THRESH

img = Image.open(SRC).convert("RGBA")
w, h = img.size
px = img.load()

def is_bg(p):
    r, g, b, a = p
    return a > 0 and r >= THRESH and g >= THRESH and b >= THRESH

visited = bytearray(w * h)
q = deque()

# Seed the queue with every border pixel that is white-ish.
for x in range(w):
    for y in (0, h - 1):
        if is_bg(px[x, y]):
            q.append((x, y)); visited[y * w + x] = 1
for y in range(h):
    for x in (0, w - 1):
        if is_bg(px[x, y]) and not visited[y * w + x]:
            q.append((x, y)); visited[y * w + x] = 1

cleared = 0
while q:
    x, y = q.popleft()
    px[x, y] = (0, 0, 0, 0)  # make transparent
    cleared += 1
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nx, ny = x + dx, y + dy
        if 0 <= nx < w and 0 <= ny < h and not visited[ny * w + nx]:
            if is_bg(px[nx, ny]):
                visited[ny * w + nx] = 1
                q.append((nx, ny))

img.save(DST)
print(f"OK: {w}x{h}, cleared {cleared} bg px -> {DST}")
