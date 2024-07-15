# Go to task_06 folder

cd /home/ubuntu/nginx-api-gateway-for-k8s/task_06

#The rate-limiting key is the Authorization header. Every unique user will be 
# rate-limited based on their unique Authorization header (JWT).

# Generate JWT 
create-signed-jwt.sh

# Copy your JWT to the k6-jobs.js script
vi k6-jobs.js

# Run a load test without rate-limiting:
k6 run k6-jobs.js --insecure-skip-tls-verify

# Apply the rate-limiting policy:
k apply -f rate-limit-policy.yaml
k apply -f VirtualServer.yaml

# Run a load test with rate-limiting:
k6 run k6-jobs.js --insecure-skip-tls-verify

# Compare the 'http_reqs' in the load test results before and after implementing the policy.
# When a client receives HTTP Error 429: "Too Many Requests" it should back off and retry.