# In task_01, you will use NGINX Plus to create a load balancer for your web applications
# Ensure you are in the folder containing NGINX config files (important!)
pwd
# You should see
/etc/nginx/conf.d

# Copy lb.conf file to that folder
cp /home/ubuntu/nginx-routing-workshop/task_01/lb.conf .
nginx -t
nginx -s reload

# Test the load balancer from command line
curl -I http://http://web.f5demos.com:9000

# Alternatively, you can test from a browser.
# From JumpHost component, open Firefox and type this in the address bar
http://web.f5demos.com:9000

# Next, we will create a dashboard to monitor upstream servers
cp /home/ubuntu/nginx-routing-workshop/task_01/dashboard.conf .
nginx -t
nginx -s reload

# Go to Firefox, open a new tab and access the dashboard
http://web.f5demos.com:8081/dashboard.html

# Now we will enable App Protect for NGINX, we will overwrite the original nginx.conf file
# IMPORTANT: go one level up, you should be in /etc/nginx
cd ..
pwd
# You should see
/etc/nginx
# As a good practice, back up the original file first
mv nginx.conf nginx.conf.backup
# Copy nginx.conf from task_01 folder
cp /home/ubuntu/nginx-routing-workshop/task_01/nginx.conf .

# Test App Protect
curl http://web.f5demos.com:9000
curl 'http://web.f5demos.com:9000/?<script>'

