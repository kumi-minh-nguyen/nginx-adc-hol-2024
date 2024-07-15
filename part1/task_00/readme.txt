# Go to WebHost component, open the Access dropdown list, choose Web Shell

# Ensure you are root user

whoami

# If not, change to root

sudo su -

# List all config files used for part 1

apt get install tree

tree /home/ubuntu/nginx-routing-workshop/

# In task_00, you will use NGINX Plus to serve web content
# First, go to the folder containing NGINX config files (important!)

cd /etc/nginx/conf.d

# Copy web.conf file to that folder

cp /home/ubuntu/nginx-routing-workshop/task_00/web.conf .

nginx -t

nginx -s reload

# Test the web hosting from command line

curl -I http://http://web.f5demos.com:9001

curl -I http://http://web.f5demos.com:9002

curl -I http://http://web.f5demos.com:9003

# Alternatively, you can test from a browser.
# From JumpHost component, open Firefox and type this in the address bar

http://web.f5demos.com:9001

http://web.f5demos.com:9002

http://web.f5demos.com:9003




