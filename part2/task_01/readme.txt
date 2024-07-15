# You are tasked to manage traffic into a website hosted at www.cafe.example.com
# This website has two service 'coffee' and 'tea'
# In task_01, you will create an custom resource virtualserver to route traffic to it
cd /home/ubuntu/nginx-kic-workshop
kubectl apply -f task_01/cafe-secret.yaml
kubectl apply -f task_01/cafe.yaml
kubectl apply -f task_01/cafe-vs.yaml

# Go Firefox windows opened from the task_00, test the newly deployed services
https://cafe.example.com/
https://cafe.example.com/coffee
https://cafe.example.com/tea

# Optional: Check what you have created so far (can press 'Tab' for auto-completion)
list-all-k8s-lab-resources.sh

