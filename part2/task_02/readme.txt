# In task_02, we will create end-to-end encryption services for our cafe business
cd /home/ubuntu/nginx-kic-workshop

# Delete the current virtualserver 
kubectl delete -f task_01/cafe-vs.yaml

# Create new services and virtualservers
kubectl apply -f task_02/cafe-mtls.yaml
kubectl apply -f task_02/cafe-mtls-vs.yaml

# Go Firefox windows opened from the task_00, test the newly deployed services, notice the service names have changed
https://cafe.example.com/
https://cafe.example.com/coffee
https://cafe.example.com/tea

# Optional: Check what you have created so far (can press 'Tab' for auto-completion)
list-all-k8s-lab-resources.sh