# There will be cases we want to test new features in our website. 
# One common practice is blue/green testing whereby we put new feature to test with a service that receives less traffic.

# In task_03, we will split 80% of traffic to 'coffee' and 20% of traffic to 'tea' 

# To make it easier to see the difference, let's first scale down the number of pods for each service
kubectl scale deployment coffee-mtls --replicas=1
kubectl scale deployment tea-mtls --replicas=1

# Delete current virtualserver
kubectl delete -f task_02/cafe-mtls-vs.yaml

# Apply new virtualserver with traffic splitting feature
kubectl apply -f task_03/cafe-bluegreen-vs.yaml

# Tick Auto-Refresh box in this page to generate traffic automatically
https://cafe.example.com/coffee

# Go to Firefox opened from previous task to view dashboard
# Pay attention to number of requests each service is getting
http://dashboard.example.com/dashboard.html#upstreams

# Optional: Check what you have created so far (can press 'Tab' for auto-completion)
list-all-k8s-lab-resources.sh