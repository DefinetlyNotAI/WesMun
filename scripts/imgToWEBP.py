from PIL import Image
import os

input_dir = ".\\img_here"
output_dir = ".\\output_here"

# Create folders if they don't exist
os.makedirs(input_dir, exist_ok=True)
os.makedirs(output_dir, exist_ok=True)

image_extensions = (".png", ".jpg", ".jpeg", ".bmp", ".tiff", ".gif")

# Check if input folder is empty (no image files)
files = [
    f for f in os.listdir(input_dir)
    if f.lower().endswith(image_extensions)
]

if not files:
    print("Input folder is empty.")
    print("Put your images inside the 'img_here' folder, then run the script again.")

    # Open the input folder (Windows)
    try:
        os.startfile(os.path.abspath(input_dir))
    except Exception as e:
        print(f"Failed to open folder: {e}")

    exit(0)

# Convert images
for file in files:
    try:
        img_path = os.path.join(input_dir, file)
        img = Image.open(img_path)

        # Remove spaces
        safe_name = file.replace(" ", "_")

        # Extract base name without extension
        name, _ = os.path.splitext(safe_name)

        # Output path
        new_file = os.path.join(output_dir, f"{name}.webp")

        img.save(new_file, "WEBP")
        print(f"Converted {file} -> {new_file}")

    except Exception as e:
        print(f"Failed to convert {file}: {e}")
