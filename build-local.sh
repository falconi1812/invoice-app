echo "Building docker image for app"
docker build -t falconi/invoice-app .

echo "Image is now available for use"

echo "Running image"

docker run --name=invoice_app -v "$PWD":/usr/src/app -p 49160:8081 -d falconi/invoice-app

echo "Everything is done now, go and enjoy coding!"

sleep 2

docker logs invoice_app

echo "Port is 49160, did this for avoiding port conflicts with other projects ¯\_(ツ)_/¯"

echo "You can now go to 0.0.0.0:49160 and be happy!"
