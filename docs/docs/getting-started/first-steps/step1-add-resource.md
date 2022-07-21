---
permalink: /docs/getting-started/first-steps/step1/
prev: /docs/getting-started/first-steps/
---

# Step 1: Add a resource

Log in to the Service Lifecycle Management user interface running on port 8080 of your host (e.g. http://myhost.local:8080). If not changed, default user is `fabos` with password `password`.

First, you need to add a resource which will be managed by the Service Lifecycle Management. Go to the `Resources` section and click on the `+` button in the lower right corner:
![Add resource button](/img/figures/first-steps/first-steps-step1-add-resource-button.png)

Select `ADD EXISTING HOST`, enable `SSH access to resource` and enter the credentials of your device:
![Add resource dialog](/img/figures/first-steps/first-steps-step1-add-resource-dialog.png)
::: warning ATTENTION
Passwordless sudo must be enabled for the specified user. This can be configured with the following steps:
* Edit sudoers file `/etc/sudoers`: sudo nano /etc/sudoers
* Find a line which contains includedir `/etc/sudoers.d`
* Add this below that line: `YourUsername ALL=(ALL) NOPASSWD: ALL` <br>**`YourUsername` must be replaced by the username speicfied in the dialog above**
* Save the changes
:::

As a result you should see your add device as resource in the overview:
![Add resource result](/img/figures/first-steps/first-steps-step1-add-resource-result.png)