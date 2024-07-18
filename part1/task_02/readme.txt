# In task_02, you will create a powerful API gateway with NGINX Plus
# The backend API is NJS-ErgastF1API. The setup is running as api-server-1 with port 8091 and api-server-2 with port 8092.
docker ps

# Go to conf.d folder
cd /etc/nginx/conf.d

# In order for SSL and API key authentication to work, you will need some key files
cp /home/ubuntu/nginx-routing-workshop/task_02/api_secret.jwk /etc/nginx/
cp /home/ubuntu/nginx-routing-workshop/task_02/apigwdemo.com.crt /etc/nginx/
cp /home/ubuntu/nginx-routing-workshop/task_02/apigwdemo.com.key /etc/nginx/

# And the main logic! Copy the api_gateway.conf from task_02 folder
cp /home/ubuntu/nginx-routing-workshop/task_02/api_gateway.conf .
nginx -t
nginx -s reload

# We are ready to test different scenarios with our API Gateway now

# Send request with SSL Termination
curl -k https://web.f5demos.com:8443/api/f1/drivers?year=2019 | jq && echo

# Get response header in result
curl -k -v https://web.f5demos.com:8443/get | jq && echo

# API key authentication
curl -k -H "x-api-key:P5FcvLwkyN7eethF" https://web.f5demos.com:8443/post | jq && echo

# Key-Value store API key authentication
curl -k -H "x-kv-api-key:2j1PM5rwgt1" https://web.f5demos.com:8443/anything | jq && echo

# Rate limit
for i in {1..10}; do curl -k https://web.f5demos.com:8443/get | jq && echo; done

# JWT authentication
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1aWQiOjIyMn0.L7cAao32jKJGKEgdWyfKzDn6FC-3baJv6Rl1E6lGwY0" ; curl -k -H "Authorization: Bearer $TOKEN" https://web.f5demos.com:8443/drivers | jq && echo

# Enable App Protect by putting these lines in the api_gateway.conf file (under server section, refer to lb.conf file in the same folder)
app_protect_enable on;
app_protect_policy_file /etc/app_protect/conf/NginxDefaultPolicy.json;
app_protect_security_log_enable on;
app_protect_security_log /opt/app_protect/share/defaults/log_illegal.json /var/log/app_protect/security.log;

# Test App Protect by sending an SQL injection attack
curl -k "https://web.f5demos.com:8443/api/f1/drivers?year=2019%27%20OR%20%271%27=%271"

