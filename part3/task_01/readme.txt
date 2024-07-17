# The main HTML site has embedded JavaScript to fetch a random job from the get-job REST api endpoint.
# The endpoint has not been published yet and so this part will fail with "Error fetching job title"

# Go to task_01 folder
cd /home/ubuntu/nginx-api-gateway-for-k8s/task_01

# Create job and main services
kubectl apply -f jobs.yaml
kubectl apply -f main.yaml

# Switch to the Jumphost Firefox to test

# The get-job REST api is running as a nodeport service:
http://10.1.1.11:30020/

# The main HTML site is running as a nodeport service:
http://10.1.1.11:30010/

