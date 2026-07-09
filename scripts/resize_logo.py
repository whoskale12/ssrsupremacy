"""
Resize the transparent logo to make it bigger for navbar display.
"""
from PIL import Image

src = 'public/logo-transparent.png'
dst = 'public/LOGO.png'

img = Image.open(src)
print(f'Original size: {img.size}')

# Resize to 256x256 for web use (bigger than original for better navbar display)
new_size = (256, 256)
img_resized = img.resize(new_size, Image.Resampling.LANCZOS)

img_resized.save(dst)
print(f'Resized to: {new_size} and saved to {dst}')