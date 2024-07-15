# Go to MicroK8s component, open the Access dropdown list, choose Web Shell

# Change to ubuntu user
su - ubuntu

# List all config files used for part 2
apt get install tree
tree /home/ubuntu/nginx-kic-workshop/

# In task_00, you will create an NGINX Plus Dashboard
cd /home/ubuntu/nginx-kic-workshop
kubectl apply -f task_00/dashboard-vs.yaml

# Go to MicroK8s component, open the Access dropdown list, choose Firefox
http://dashboard.example.com/dashboard.html

# Optional: an ingress service has been created for you. View its manifest for your reference
bat task_00/loadbalancer.yaml