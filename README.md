# root  

## Instructions  

Clone the repo \
`> git clone --recurse-submodules ...`

Install the packages in every subproject \
`> npm install`

Install pm2 \
`> npm install -g pm2`

Run the project \
`> pm2 start ecosystem.config.js`

To see the log of a single service \
`> pm2 log service-name`

To delete all services \
`> pm2 delete all`

