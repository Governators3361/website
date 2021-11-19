SRC_DIR="/src/"
BLOGS_DIR="/blog/"
GALLERY_DIR="/gallery/"

echo "Starting preprocessing..."

cd /
cd ."$SRC_DIR"

# copy external directories to site directory
echo "Copying directories..."
cp -r .."$BLOGS_DIR" ./
cp -r .."$GALLERY_DIR" ./

# create text files listing the contents of the new "blogs" and "gallery" directories
echo "Generating directory listings..."
cd ."$BLOGS_DIR"
printf '%s\n' * > "listing.txt"
cd ../
cd ."$GALLERY_DIR"
printf '%s\n' * > "listing.txt"

echo "Preprocessing finished!"
