# Go to task_05 folder
cd /home/ubuntu/nginx-api-gateway-for-k8s/task_05

# Configure Authorization - Signed JSON WEB Token (JWT) Validation
create-signed-jwt.sh
kubectl create secret generic jwk-secret --from-file=jwk=/var/tmp/jwk/jwk.json --type=nginx.org/jwk
kubectl get secret jwk-secret -o yaml
kubectl apply -f jwt-policy.yaml
kubectl apply -f VirtualServer.yaml

# When testing in Firefox browser, toggle the “Authorization” header off/disabled, 
# and you will be rejected with a “401 Authorization Required” HTTP error message.