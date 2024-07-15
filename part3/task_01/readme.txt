# The main HTML site has embedded JavaScript to fetch a random job from the get-job REST api endpoint.
# The endpoint has not been published yet and so this part will fail with "Error fetching job title"

# Create job and main services
cd /home/ubuntu/nginx-api-gateway-for-k8s
kubectl apply -f task_01/jobs.yaml
kubectl apply -f task_01/main.yaml

# Go to MicroK8s component, open the Access dropdown list, choose Firefox

# The get-job REST api is running as a nodeport service:
http://10.1.1.11:30020/

# The main HTML site is running as a nodeport service:
http://10.1.1.11:30010/

