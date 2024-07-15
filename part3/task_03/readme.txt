# Go to task_03 folder

cd /home/ubuntu/nginx-api-gateway-for-k8s/task_03

# This step ties together the '/' or '/index.html' HTML main page which then
# calls the /get-job api endpoint and renders the job title in bold style.

kubectl apply -f VirtualServer.yaml

#From the URL bar of Firefox browser, connect to the web application: https://jobs.local