import os
import json

def generate_manifests(root_dir):
    # Valid image extensions
    valid_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}
    
    # Walk through the directory
    for dirpath, dirnames, filenames in os.walk(root_dir):
        images = []
        for filename in filenames:
            ext = os.path.splitext(filename)[1].lower()
            if ext in valid_extensions:
                images.append(filename)
        
        # If directory contains images, create a manifest
        if images:
            # Sort for consistency
            images.sort()
            manifest_path = os.path.join(dirpath, 'manifest.json')
            try:
                with open(manifest_path, 'w') as f:
                    json.dump(images, f, indent=4)
                print(f"Created manifest for {dirpath}: {len(images)} images")
            except Exception as e:
                print(f"Error writing manifest to {dirpath}: {e}")

if __name__ == "__main__":
    # Path to photography images
    target_dir = os.path.join(os.getcwd(), "assets", "images", "photography")
    if os.path.exists(target_dir):
        print(f"Scanning {target_dir}...")
        generate_manifests(target_dir)
        print("Done!")
    else:
        print(f"Directory not found: {target_dir}")
