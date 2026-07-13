#!/usr/bin/env python3
"""Convert all JPG and PNG images to WebP format"""

import os
from pathlib import Path
from PIL import Image

def convert_to_webp(input_path, output_path=None):
    """Convert an image to WebP format"""
    if output_path is None:
        output_path = input_path.replace('.jpg', '.webp').replace('.png', '.webp').replace('.JPG', '.webp').replace('.PNG', '.webp')
    
    try:
        img = Image.open(input_path)
        # Convert RGBA to RGB if necessary (WebP handles both, but being explicit)
        if img.mode in ('RGBA', 'LA', 'P'):
            # Create a white background
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            background.save(output_path, 'WEBP', quality=90)
        else:
            img.save(output_path, 'WEBP', quality=90)
        
        print(f"✓ Converted: {input_path} → {output_path}")
        # Delete original file
        os.remove(input_path)
        print(f"  Deleted original: {input_path}")
        return True
    except Exception as e:
        print(f"✗ Error converting {input_path}: {e}")
        return False

def main():
    """Main conversion function"""
    base_path = Path(__file__).parent.parent
    
    # Files to convert
    files_to_convert = [
        # Root directory
        base_path / "foto band 1.jpg",
        base_path / "foto band 2.jpg",
        # Public directory
        base_path / "public" / "band-1.jpg",
        base_path / "public" / "band-2.jpg",
        base_path / "public" / "Cover Maxi-Single.jpg",
        base_path / "public" / "LOGO.png",
        base_path / "public" / "logo-transparent.png",
        base_path / "public" / "kaosputih.png",
        base_path / "public" / "keychain.png",
    ]
    
    print("Starting image conversion to WebP...\n")
    
    converted_count = 0
    for file_path in files_to_convert:
        if file_path.exists():
            if convert_to_webp(str(file_path)):
                converted_count += 1
        else:
            print(f"⊘ File not found: {file_path}")
    
    print(f"\n✓ Conversion complete! {converted_count} files converted.")

if __name__ == "__main__":
    main()