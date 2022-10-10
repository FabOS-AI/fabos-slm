---
permalink: /docs/development/developers/
---

# For Developers

::: warning INFO
The source code of Service Lifecycle Management is not yet publicly available. At the moment, only the executables are available in the form of Docker images. The source code is expected to be made public by the end of 2022.
:::

## Local development

### Install
To setup the latest snapshot version, checkout the develop branch of the [fabos-slm-setup GitHub repository](https://github.com/FabOS-AI/fabos-slm-setup) and follow the [installation instructions](/docs/getting-started/installation/).

### Configuration

**1) Edit compose file**

Edit in file `compose/config-exporter.yml` the volume path and environment as described below.

**1.1) Set volume path**

Edit the host path of this volume
```
- {{ /path/to/core/project/on/your/computer }}:/project
```
to the path of core project on your local computer. If you are using Docker Desktop for Windows add the above path 
in `Settings -> Resources -> FILE SHARING`.

**1.2) Environment**

Set the environment variable `CONFIGURE_CORE_PROJECT` to `true`:
```
- CONFIGURE_CORE_PROJECT=true
```

**2) Run config exporter**

Wait until the stack is fully started and all init containers have stopped. Then run the config exporter container, 
which will override the configuration files in your core project (not yet public available):
```
docker-compose -f config-exporter.yml -f docker-compose.yml up --force-recreate config-exporter
```

**3) IDE**
Stop the containers relevant for your development and start the components in your IDE. Through the Config Exporter, the your local project has been configured to allow the components started via IDE to connect to the locally deployed stack.

## Build
To build the Docker images of in the [setup repository](https://github.com/FabOS-AI/fabos-slm-setup) use the following commands:
```
docker-compose -f build.yml -f docker-compose.yml build --no-cache awx-fixed-files
docker-compose -f build.yml -f config-exporter.yml -f docker-compose.yml build --no-cache
```