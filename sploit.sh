#!/bin/bash
container=`docker ps | grep sploit_node | awk '{ print $1 }' | head -n 1`
docker exec -it $container node /opt/index.js $@
