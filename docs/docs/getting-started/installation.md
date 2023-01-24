---
permalink: /docs/getting-started/installation/
next: /docs/getting-started/first-steps/
---

# Installation

## Prerequisites
* Docker
* Docker Compose

## Download
Download the latest version of `slm-setup-compose.zip` from the [releases page on GitHub](https://github.com/FabOS-AI/fabos-slm-setup/releases), which contains the compose files of the stack.



<div id="start"></div>

## Start

Set in the file `.env` the variable `SLM_HOSTNAME` to the hostname of the host where the stack will be started. E.g.:
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
docker-compose up --force-recreate config-exporter
```

It will generate by default a sub-directory `config/_conf_generated` relative to your docker-compose.yml file containing 
the configuration of the setup stack (`slm-config.yml`). If you want another target directory edit in file `config-exporter.yml` 
the host path of this volume:
```
- ./config:/project
```

## Known Issues

### Default Deployment Capabilities missing

By default the SLM setup routine adds deployment capabilities for

- docker
- docker-swarm
- k3s

which are added during the initial startup. In rare cases this adding process fails and consequently no deployment 
capabilities are available in the UI:

<figure>
    <img src="/img/figures/installation/known-issues-missing-dcs-dc-button-disabled.png">
    <figcaption>Deployment Capability Button disabled because of missing single host deployment capabilities</figcaption>
</figure>

<figure>
    <img src="/img/figures/installation/known-issues-missing-dcs-cluster-button-disabled.png">
    <figcaption>Cluster Button disabled because of missing multi host deployment capabilities</figcaption>
</figure>

To fix this start the container `resource-registry-init` again by running:

```
docker-compose up -d resource-registry-init
```

After the container has started and has added the deployment capabilities and it will stop by itself. The capabilities (single 
host and cluster) should be available after reloading the ui:

<figure>
    <img src="/img/figures/installation/known-issues-missing-dcs-dc-button-enabled.png">
    <figcaption>Deployment Capability Button enabled</figcaption>
</figure>

<figure>
    <img src="/img/figures/installation/known-issues-missing-dcs-cluster-button-enabled.png">
    <figcaption>Cluster Create Button enabled</figcaption>
</figure>

<figure>
    <img src="/img/figures/installation/known-issues-missing-dcs-cluster-types-available.png">
    <figcaption>Default Cluster Types available in selection form</figcaption>
</figure>
