#!/bin/sh

yarn build
docker build -t jordan/engineering:latest .
docker stop engineering_front
docker rm engineering_front
docker run -d -p 3100:80 --name engineering_front jordan/engineering:latest
docker image prune -f