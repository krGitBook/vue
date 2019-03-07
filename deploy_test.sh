#!/bin/bash




buildEnvDir=$1
target_site=www@10.1.60.201
target_site_port=9830



test06_ip=ali-docker-test06

case $1 in


  test06)
    target_site="www@${test06_ip}"
    target_site_port=22
    npm run build -- api-noptest06
  ;;

 
  *)
  target_site=www@10.1.60.201
  target_site_port=9830


  ;;
esac

echo $1
echo $target_site

rsync -cza --delete-before  -e "ssh -p ${target_site_port}"  ./dist/* ${target_site}:/data/work/novo-frontend/novo-op/ >/dev/null
