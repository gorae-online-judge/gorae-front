image_name='goldggyul/gorae-front'
container_name='gorae-front-container'
port=8000

docker stop $container_name
docker rm $container_name
docker image rm $image_name

npm run build
docker build --no-cache -t $image_name .
docker run -it -d --name $container_name -p $port:3000 $image_name