# Go to MicroK8s component, open the Access dropdown list, choose Web Shell

# Change to ubuntu user
su - ubuntu

# List all config files used for part 2
tree /home/ubuntu/nginx-kic-workshop/

# In task_00, you will create an NGINX Plus Dashboard
cd /home/ubuntu/nginx-kic-workshop
kubectl apply -f task_00/dashboard-vs.yaml

# From JumpHost component, open Firefox and type this in the address bar
http://dashboard.example.com/dashboard.html

# Optional: an ingress service has been created for you. View its manifest for your reference
bat task_00/loadbalancer.yaml