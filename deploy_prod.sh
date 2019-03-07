#!/bin/bash

npm run build


if [ $1 = 'prod01' ]; then

rsync -rvltOD ./dist/* ali-krspace-iot-web-01:/data/work/frontend/novo-op/

elif [ $1 = 'prod02' ]; then

rsync -rvltOD ./dist/* ali-krspace-iot-web-02:/data/work/frontend/novo-op/

elif [ $1 = 'preprod' ]; then

rsync -rvltOD ./dist/* ali-krspace-iot-sim-01:/data/work/frontend/novo-op/

elif [ $1 = 'all' ]; then

rsync -rvltOD ./dist/* ali-krspace-iot-web-01:/data/work/frontend/novo-op/
rsync -rvltOD ./dist/* ali-krspace-iot-web-02:/data/work/frontend/novo-op/

fi
