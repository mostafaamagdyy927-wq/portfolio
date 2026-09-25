import os
import shutil

root = r"d:\PROTFLIO"
assets_src = os.path.join(root, "Assets")
asset_dir = os.path.join(root, "asset")
public_asset_dir = os.path.join(root, "public", "asset")

os.makedirs(os.path.join(asset_dir, "certificates"), exist_ok=True)
os.makedirs(os.path.join(asset_dir, "projects"), exist_ok=True)
os.makedirs(os.path.join(public_asset_dir, "certificates"), exist_ok=True)
os.makedirs(os.path.join(public_asset_dir, "projects"), exist_ok=True)

# Mapping of original certificate filenames in Assets to normalized names
cert_map = {
    "amzon cloud.jpeg": "aws-ai-practitioner.jpeg",
    "Aws data & ai.jpeg": "aws-partyrock-scholars.jpeg",
    "data base fundmentl Mahera .jpeg": "database-fundamentals-maharatech.jpeg",
    "eme intro in data science.jpeg": "ai-course-itida-eme.jpeg",
    "Intri Sql Data camp.jpeg": "intro-sql-datacamp.jpeg",
    "ITIDA Gigs .jpeg": "itida-gigs-freelance.jpeg",
    "oop IT Sharks.jpeg": "oop-it-sharks.jpeg",
    "python mahera.jpeg": "python-maharatech.jpeg",
}

for orig, normalized in cert_map.items():
    src_file = os.path.join(assets_src, orig)
    if os.path.exists(src_file):
        # copy to asset/certificates with both names
        shutil.copy2(src_file, os.path.join(asset_dir, "certificates", normalized))
        shutil.copy2(src_file, os.path.join(asset_dir, "certificates", orig))
        # copy to public/asset/certificates with both names
        shutil.copy2(src_file, os.path.join(public_asset_dir, "certificates", normalized))
        shutil.copy2(src_file, os.path.join(public_asset_dir, "certificates", orig))
        print(f"Copied {orig} -> {normalized}")

print("Asset directories successfully prepared.")
