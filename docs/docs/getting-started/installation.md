---
permalink: /docs/getting-started/installation/
next: /docs/getting-started/first-steps/
---

# Installation

## Prerequisites
* Docker
* Docker Compose

## Download
Compose files of the stack can be found in the sub-directory `compose` in the [GitHub repository](https://github.com/FabOS-AI/fabos-slm-setup).

If you don't want to check out the whole repository you can get the latest version via `Git` using this command:
```sh
git clone https://github.com/FabOS-AI/fabos-slm-setup.git && cd fabos-slm-setup/compose
```

<div id="start"></div>

## Start

Set in the file `compose/.env` the variable `SLM_HOSTNAME` to the hostname of the host where the stack will be started. E.g.:
```
SLM_HOSTNAME=myhost.local
```

::: warning ATTENTION
**Use lower case for the hostname to avoid case problems (e.g. with token authentication)**
:::

Start the whole stack:
```
docker-compose up -d
```

## Stop
Stop the whole docker compose:
```
docker-compose down --remove-orphans
```
If you want to delete the data add the `--volumes` flag:
```
docker-compose down --remove-orphans --volumes
```

## Components

### Ports
The different components of the stack can be reached under the following ports:
* AWX: [http://myhost.local:80]()
* Consul: [http://myhost.local:8500]()
* Keycloak: [http://myhost.local:7080]()
* Resource Registry: [http://myhost.local:9010]()
* Service Registry: [http://myhost.local:9020]()
* Vault: [http://myhost.local:8200]()
* UI: [http://myhost.local:8080]()

::: warning ATTENTION
**You need to replace `myhost.local` with the hostname of the host where you have installated the Service Lifecycle Management (see section [Start](#start)).**
:::

### Get configuration

Most of the settings and credentials are created automatically during first start of the stack. If you want to access the different components of the Service Lifecycle Management stack you need to export the configuration. Wait until the stack is fully started and all init containers have stopped. Then run the config exporter container:
```
docker-compose -f config-exporter.yml -f docker-compose.yml up --force-recreate config-exporter
```

It will generate by default a sub-directory `config/_conf_generated` relative to your docker-compose.yml file containing 
the configuration of the setup stack (`slm-config.yml`). If you want another target directory edit in file `compose/config-exporter.yml` 
the host path of this volume:
```
- ./config:/project
```