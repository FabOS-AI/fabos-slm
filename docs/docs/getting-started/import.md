---
permalink: /docs/getting-started/import/
---

# Import

After initial setup, publicly available content (e.g., service offerings) can be imported into Service Lifecycle Management.

## Service Registry
To import content into the Service Registry of the Service Lifecycle Management change directory to the `compose` directory of your cloned [fabos-slm-setup repository](https://github.com/FabOS-AI/fabos-slm-setup/) and execute the following command:
```
mkdir init && cd init && git clone https://github.com/FabOS-AI/fabos-slm-service-registry-content.git && mv fabos-slm-service-registry-content service-registry & cd ..
``` 

It will create a directory `init` and download the content from a GitHub repository into the sub-directory `init/service-registry`. The import can be started using this command:
```
docker-compose up service-registry-init
```
