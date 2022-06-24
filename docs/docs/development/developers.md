---
permalink: /docs/getting-started/developers/
---

# For Developers

**NOTE: The source code of Service Lifecycle Management is not yet publicly available. At the moment, only the executables are available in the form of Docker images. The source code is expected to be made public by the end of 2022.**

## Build
To build the Docker images of in the [setup repository](https://github.com/FabOS-AI/fabos-slm-setup) use the following commands:
```
docker-compose -f build.yml -f docker-compose.yml build --no-cache awx-fixed-files
docker-compose -f build.yml -f config-exporter.yml -f docker-compose.yml build --no-cache
```

## Local development

### Edit compose file

Edit in file `compose/config-exporter.yml` the volume path and environment as described below.

#### Volume path
Edit the host path of this volume
```
- {{ /path/to/core/project/on/your/computer }}:/project
```
to the path of core project on your local computer. If you are using Docker Desktop for Windows add the above path 
in `Settings -> Resources -> FILE SHARING`.

#### Environment
Set the environment variable `CONFIGURE_CORE_PROJECT` to `true`:
```
- CONFIGURE_CORE_PROJECT=true
```

### Run config exporter
Wait until the stack is fully started and all init containers have stopped. Then run the config exporter container, 
which will override the configuration files in your core project (not yet public available):
```
docker-compose -f config-exporter.yml -f docker-compose.yml up --force-recreate config-exporter
```

### Rebuild and start stack
```
docker-compose down --volumes --remove-orphans && docker-compose -f build.yml -f dev-helper.yml -f docker-compose.yml build --no-cache && docker-compose up -d
```
