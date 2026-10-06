#!/usr/bin/env python3
"""Convert all merch images to WebP format"""

import os
from pathlib import Path
from PIL import Image

def convert_to_webp(input_path, output_path=None):
    """Convert an image to WebP format"""
    if output_path is None:
        output_path = input_path.replace('.jpeg', '.webp').replace('.jpg', '.webp').replace('.png', '.webp').replace('.JPG', '.webp').replace('.PNG', '.webp')
    
    try:
        img = Image.open(input_path)
        # Convert RGBA to RGB if necessary
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
    
    # Files to convert - all merch images
    files_to_convert = [
        # Keychain
        base_path / "public" / "keychain" / "keychain.jpeg",
        base_path / "public" / "keychain" / "detailkeychain.jpeg",
        base_path / "public" / "keychain" / "detailkeychain2.jpeg",
        
        # Black rabbit ssr
        base_path / "public" / "black rabbit ssr" / "kaoshitam.jpeg",
        base_path / "public" / "black rabbit ssr" / "frontview.jpeg",
        base_path / "public" / "black rabbit ssr" / "backview.jpeg",
        base_path / "public" / "black rabbit ssr" / "detailview.jpeg",
        
        # White rabbit
        base_path / "public" / "rabbitwhite" / "kaosputih.jpeg",
        
        # Black fuzzymonster
        base_path / "public" / "blackfuzzymonster" / "blackfuzzymonster.jpeg",
        base_path / "public" / "blackfuzzymonster" / "detail1.jpeg",
        base_path / "public" / "blackfuzzymonster" / "detail2.jpeg",
        
        # White fuzzymonster
        base_path / "public" / "whitefuzzymonster" / "detail1.jpeg",
        base_path / "public" / "whitefuzzymonster" / "detail2.jpeg",
        base_path / "public" / "whitefuzzymonster" / "detail3.jpeg",
    ]
    
    print("Starting merch image conversion to WebP...\n")
    
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