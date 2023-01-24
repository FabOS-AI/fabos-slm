---
permalink: /docs/usage/service-offerings
---

# Service Offerings
Services that are available for deployment via the Service Lifecycle Management are offered as so-called service offerings. A service offering can have multiple versions. After ordering a service offering, a new service instance is deployed based on the service offering and the selected version. 

## Creating service offerings
There are two ways to create the service offering: Using a [wizard](#service-offering-wizard) or based on a [Git repository](#git-based-service-offerings).

### Service Offering Wizard
Go to the section `Service Vendor`, select the service vendor for which you want to create a new service offering, and click on the `ADD SERVICE OFFERING` button.
![Add service offering](/img/figures/use/service-offerings/service-offering-create-1.png)

Click on `SERVICE OFFERING WIZARD`.
![Create service offering using wizard](/img/figures/use/service-offerings/service-offering-create-via-wizard-1.png)

Enter the details of the new service offering and click on `CREATE`.
![Create service offering using wizard](/img/figures/use/service-offerings/service-offering-create-via-wizard-2.png)

The service offering gets created and will be visible in the service offerings list of the service vendor. To be able to order a service offering, a version must be created. To do this, click in the new service offering on `CREATE FIRST VERSION`.
![Create first version of service offering](/img/figures/use/service-offerings/service-offering-create-via-wizard-3.png)

Enter the version number and select a deployment type. The following step in the wizard depends on the selected deployment type. In this case `Docker Container` is selected as deployment type.
![Service Offering Wizard - Common information](/img/figures/use/service-offerings/service-offering-create-via-wizard-4.png)

Enter the details used to deploy a Docker container based on the service offering version.
![Service Offering Wizard - Deployment Definition](/img/figures/use/service-offerings/service-offering-create-via-wizard-5.png)

Definitions such as port mappings, volumes, labels or environment variables can be shown to the user as service options when ordering. This allows the user to configure the service instance that will be deployed. In the wizard's last step, the service options are automatically generated based on the previous step, and the service options can be configured. Finally, click `CREATE`.
![Service Offering Wizard - Service Options](/img/figures/use/service-offerings/service-offering-create-via-wizard-6.png)

The service offering version gets created and will be shown as a version of the newly created service offering.
![Result of service offering version creation](/img/figures/use/service-offerings/service-offering-create-via-wizard-7.png)

### Git-based service offerings
To automatically create a service offering based on a Git repository, a file named `fabos.yaml` must be stored in the repository. This file contains all the necessary information to describe a service offering. The file is structured as shown in the example below. Files (e.g., images, compose files, environment variable files) are referenced via their file name and the relative path to the root of the Git repository. An example is available in a [public Git repository](https://github.com/FabOS-AI/fabos-slm-so-test-repo).

```yaml
name: My Service
serviceVendorId: 2eb5f19f-b75b-4bab-aa57-326320ff14ee
description: This is the long description of my service which will be shown in the 
             detail view of the service offering.
shortDescription: This is the short description of my service which will be shown in 
                  the overview of all service offerings.
coverImageFilename: my-service-cover.png
serviceCategoryName: Dashboard
version:
  serviceOptionCategories: []
  serviceRequirements: []
  serviceRepositories: []
  deploymentDefinition:
    deploymentType: DOCKER_COMPOSE
    composeFilename: docker-compose.yml
    envFilenames:
    - env.list
```

Go to the section `Service Vendor`, select the service vendor for which you want to create a new service offering, and click on the `ADD SERVICE OFFERING` button.
![Add service offering](/img/figures/use/service-offerings/service-offering-create-1.png)

Click on `GIT-BASED OFFERING`.
![Create git-based service offering](/img/figures/use/service-offerings/service-offering-create-via-git-1.png)

Enter the URL of the Git repository and a regular expression. All tags matching this regular expression will be created as a version of the service offering. The tag name is used as the version name. If the Git repository is private, credentials to access the Git repository must be provided. Finally, click the `CREATE` button.
![Details of git-based service offering](/img/figures/use/service-offerings/service-offering-create-via-git-2.png)

The Service Lifecycle Management analyses the repository and checks whether version tags exist. A version of the service offering is created for each existing version tag. The Git repository will be checked periodically for new tags, and, if necessary, a new service offering version will be created. The interval at which the tags of the git repository are checked can be configured via the environment variable `SERVICE_REGISTRY_GIT_CHECK_INTERVAL_MINUTES` in the .env file. The service offering then appears in the overview with all service offerings. For git-based service offerings, versions cannot be created or deleted manually. After a tag is deleted from the Git repository, the corresponding service offering version will also be deleted during the next check.
![Result of git-based service offering](/img/figures/use/service-offerings/service-offering-create-via-git-3.png)