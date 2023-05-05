# Basic Node.js App Cron Demo

This repository is a basic Node.js application that demonstrates how to run adhoc npm commands asynchronously and regularly on Kubernetes (k8s) cronJob objects.

## Prerequisites
Before running this app, you must have the following installed on your system:

- Node.js (v18 or higher)
- npm
- Kubernetes cluster (minikube or any other)

## Installation
- Clone this repository to your local machine using git clone https://github.com/DSdatsme/npmcron-demo.git
- Change directory to the cloned repository: cd npmcron-demo
- Install dependencies using `npm install`

## Usage
To run the app on k8s, just apply the yamls present in `k8s` folder.

```bash
kubectl apply -f appdeploy.yaml
kubectl apply -f cron.yaml
kubectl apply -f hi.yaml
```

You can check the pods by running

```bash
kubectl get pods -A
```
