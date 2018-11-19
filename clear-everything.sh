echo "Removing every single stopped container"

docker rm $(docker ps -a -q)

echo "Removing every single image created"

docker kill $(docker ps -q)
