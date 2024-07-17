# Go to task_04 folder
cd /home/ubuntu/nginx-api-gateway-for-k8s/task_04

# Try to add job with non-string data type. You will see the /add-job endpoint accepts everything.

# Add OpenAPI Spec Enforcement with App Protect policy to the application
kubectl apply -f jobs-openapi-spec-appolicy.yaml
kubectl apply -f app-protect-policy.yaml
kubectl apply -f VirtualServer.yaml

# Switch to the Jumphost Firefox to test
# Try to add job with non-string data type again. Your request will be rejected this time.