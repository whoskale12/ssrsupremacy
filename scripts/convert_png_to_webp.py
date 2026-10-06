#!/usr/bin/env python3
"""Convert PNG images to WebP format"""

import os
from pathlib import Path
from PIL import Image

def convert_png_to_webp(input_path):
    """Convert a PNG image to WebP format"""
    output_path = input_path.replace('.png', '.webp').replace('.PNG', '.webp')
    
    try:
        img = Image.open(input_path)
        print(f"Opening: {input_path}")
        print(f"  Mode: {img.mode}, Size: {img.size}")
        
        # Save as WebP
        img.save(output_path, 'WEBP', quality=90)
        print(f"✓ Saved WebP: {output_path}")
        
        # Delete original
        os.remove(input_path)
        print(f"✓ Deleted: {input_path}")
        return True
    except Exception as e:
        print(f"✗ Error: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    """Convert PNG files in public directory"""
    base_path = Path(__file__).parent.parent / "public"
    
    png_files = [
        base_path / "LOGO.png",
        base_path / "logo-transparent.png",
        base_path / "kaosputih.png",
        base_path / "keychain.png",
    ]
    
    print("Converting PNG files to WebP...\n")
    
    for png_file in png_files:
        if png_file.exists():
            convert_png_to_webp(str(png_file))
            print()
        else:
            print(f"Not found: {png_file}\n")

if __name__ == "__main__":
    main()