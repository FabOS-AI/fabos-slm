---
permalink: /docs/usage/api/
---

# API
All components of the Service Lifecycle Management have a REST API. More details about the individual APIs are described below.

## Authentication
All APIs are secured using token-based authentication via Keycloak. To get a access token from Keycloak, the request below can be used. It will return a JSON containg a filed `access_token`. This token must be used for authentication on the component APIs.
::: warning ATTENTION
`<<your-slm-host>>`, `<<your-username>>` and `<<your-password>>`must be replaced!
:::
```sh
curl --request POST \
  --url http://<<your-slm-host>>:7080/auth/realms/fabos/protocol/openid-connect/token \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data client_id=self-service-portal \
  --data grant_type=password \
  --data username=<<your-username>> \
  --data password=<<your-password>>
  ```

## Components

### AWX
The REST API of AWX is reachable under the following URL `http://<<your-slm-host>>:80/api/v2`. AWX is one of the open source upstream projects for [Red Hat Ansible Automation Platform](https://www.ansible.com/products/automation-platform). The commercial variant of RedHat is Ansible Tower. Therefore, information on how to use the AWX REST API can be found in the [Ansible Tower API Guide](https://docs.ansible.com/ansible-tower/latest/html/towerapi/index.html).

### Consul
The REST API of Consul is reachable under the following URL `http://<<your-slm-host>>:8500/v1`. Further information on how to use des Consul REST API can be found in the <a :href="'https://www.consul.io/api-docs/' + $var.consul.version.api" target="_blank">API docs of Consul</a>.


### Keycloak
The REST API of Keycloak is reachable unter the following URL `http://<<your-slm-host>>:7080/auth`. For configuration Keycloak has a Admin REST API, which is described <a :href="'https://www.keycloak.org/docs-api/' + $var.keycloak.version.api + '/rest-api/' " target="_blank">here</a>.


### Notification Service
The REST API of the Service Registry is reachable unter the following URL `http://<<your-slm-host>>:9001`. API documentation is available via Swagger `http://<<your-slm-host>>:9001/swagger-ui/index.html`. When requests are made via the Swagger UI, an Authorization is required via the "Authorize" button. If spring_oauth is used, it will redirect to the Keycloak login page.

### Resource Registry
The REST API of the Service Registry is reachable unter the following URL `http://<<your-slm-host>>:9010`. API documentation is available via Swagger `http://<<your-slm-host>>:9010/swagger-ui/index.html`. When requests are made via the Swagger UI, an Authorization is required via the "Authorize" button. If spring_oauth is used, it will redirect to the Keycloak login page.

### Service Registry
The REST API of the Service Registry is reachable unter the following URL `http://<<your-slm-host>>:9020`. API documentation is available via Swagger `http://<<your-slm-host>>:9020/swagger-ui/index.html`. When requests are made via the Swagger UI, an Authorization is required via the "Authorize" button. If spring_oauth is used, it will redirect to the Keycloak login page.

### Vault
The REST API of Keycloak is reachable unter the following URL `http://<<your-slm-host>>:8200/v1`. Further information on how to use des Consul REST API can be found in the <a :href="'https://www.vaultproject.io/api-docs/' + $var.vault.version.api" target="_blank">API docs of Vault</a>.