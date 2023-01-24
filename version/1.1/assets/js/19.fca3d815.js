(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{329:function(e,t,r){"use strict";r.r(t);var s=r(15),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[e._v("#")]),e._v(" Import")]),e._v(" "),t("p",[e._v("After initial setup, publicly available content (e.g., service offerings) can be imported into your instance of the Service Lifecycle Management.")]),e._v(" "),t("h2",{attrs:{id:"service-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-registry"}},[e._v("#")]),e._v(" Service Registry")]),e._v(" "),t("p",[e._v("To import content into the Service Registry of the Service Lifecycle Management local directories or git repositories can be used. See the two sections below for more information how to configure import from local directories or git repositories. The import can be started using this command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker-compose")]),e._v(" up --force-recreate service-registry-init\n")])])]),t("h3",{attrs:{id:"local-directories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-directories"}},[e._v("#")]),e._v(" Local Directories")]),e._v(" "),t("p",[e._v("Update in the "),t("code",[e._v(".env")]),e._v(" file in the "),t("code",[e._v("compose")]),e._v(" directory the variable "),t("code",[e._v("SERVICE_REGISTRY_INITIALIZATION_LOCAL_DIRECTORIES")]),e._v(" with your directories. Multiple directories must be seperated by comma. The defined directories must be added as volumes to the "),t("code",[e._v("service-registry-init")]),e._v(" service in the "),t("code",[e._v("docker-compose.yml")]),e._v(".")]),e._v(" "),t("p",[e._v("Example of "),t("code",[e._v(".env")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SERVICE_REGISTRY_INITIALIZATION_LOCAL_DIRECTORIES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/my/local/dir1,/my/local/dir2\n")])])]),t("p",[e._v("Example of "),t("code",[e._v("docker-compose.yml")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("service-registry-init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/my/local/dir1:/my/local/dir1"')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/my/local/dir2:/my/local/dir2"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n")])])]),t("h3",{attrs:{id:"git-repositories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-repositories"}},[e._v("#")]),e._v(" Git Repositories")]),e._v(" "),t("p",[e._v("Update in the "),t("code",[e._v(".env")]),e._v(" file in the "),t("code",[e._v("compose")]),e._v(" directory the variable "),t("code",[e._v("SERVICE_REGISTRY_INITIALIZATION_GIT_REPOS")]),e._v(" with your git repositories. Default value is the public "),t("a",{attrs:{href:"https://github.com/FabOS-AI/fabos-slm-service-registry-content",target:"_blank",rel:"noopener noreferrer"}},[e._v("service registry content repository"),t("OutboundLink")],1),e._v(". Multiple git repositories must be seperated by comma. Authentication for a git repository can be defined in the form "),t("code",[e._v("{Username}:{PasswordOrAccessToken}@{RepoUrl}")]),e._v(".")]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SERVICE_REGISTRY_INITIALIZATION_GIT_REPOS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://github.com/FabOS-AI/fabos-slm-service-registry-content.git,myGitUser:myGitUserPassword@https://my-private-git-repo.git\n")])])]),t("h2",{attrs:{id:"resource-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resource-registry"}},[e._v("#")]),e._v(" Resource Registry")]),e._v(" "),t("p",[e._v("To populate the Resource Registry of the Service Lifecycle Management with an already available list of known, a simple utility tool can be used to speed up the process. The tool can be found on "),t("a",{attrs:{href:"https://github.com/FabOS-AI/fabos-slm-resource-registry-init",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),t("OutboundLink")],1),e._v(". In the current version, the tool parses a given "),t("strong",[e._v("Excel file")]),e._v(" and populates the Resource Registry with the contained resources.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("ATTENTION")]),e._v(" "),t("p",[e._v("The tool was initially only intended for a quick repopulation of the Resource Registry in demo setups. Consequently, the tool is rudimentary in design and will be changed in the future in order to be more aligned with the SLM base setup and components.")])]),e._v(" "),t("p",[e._v("Since the tool interacts with the REST-API of the "),t("code",[e._v("Resource Registry")]),e._v(", to use the tool just clone the repo into any directory:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/FabOS-AI/fabos-slm-resource-registry-init "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" fabos-slm-resource-registry-init\n")])])]),t("p",[e._v("Now the Excel file "),t("code",[e._v("example.xlsx")]),e._v(" needs to be adapted to the list of resources to be added to the Resource Registry. There are two example devices listed to familiarize with the pattern. The following fields are definitely required to be filled (per device):")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[e._v("variable")])]),e._v(" "),t("th",[t("strong",[e._v("type")])]),e._v(" "),t("th",[t("strong",[e._v("description")])])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Device")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("An arbitrary device name, for easier reference")])]),e._v(" "),t("tr",[t("td",[e._v("user")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("The user name of the resource, in order to be accessed")])]),e._v(" "),t("tr",[t("td",[e._v("password")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("The password of the corresponding user")])]),e._v(" "),t("tr",[t("td",[e._v("hostname")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("The hostname of the resource")])]),e._v(" "),t("tr",[t("td",[e._v("eth0 IP")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("The IP of the resource. Additionally, eth1 IP can be filled as well, but eth0 will be prefered")])]),e._v(" "),t("tr",[t("td",[e._v("is_resource")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v('A flag that determines if device is added to the resource registry. Set it to "yes" in order to be added')])]),e._v(" "),t("tr",[t("td",[e._v("UUID")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("The UUID of the resource, can be generated externally")])])])]),e._v(" "),t("p",[e._v("Additionally, following flags can be used to trigger the install of an capability for the resource (optional):")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[e._v("variable")])]),e._v(" "),t("th",[t("strong",[e._v("type")])]),e._v(" "),t("th",[t("strong",[e._v("description")])])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("DC_Docker")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v('If set to "yes", Docker capability will be added to resource')])]),e._v(" "),t("tr",[t("td",[e._v("DC_Swarm")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v('If set to "yes", Swarm capability will be added to resource')])]),e._v(" "),t("tr",[t("td",[e._v("DC_K3s")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v('If set to "yes", K3s capability will be added to resource')])])])]),e._v(" "),t("p",[e._v("In a second step, the settings for the tool need to be adapted and verified. Therefore open the "),t("code",[e._v("docker-compose.yaml")]),e._v(" in a text editor and change the variables in the "),t("code",[e._v("environment")]),e._v("-section accoding to your local environment. When the Service Lifecycle Management was setup through the inital setup, all variables should already be matching the local environment. See the following table for details on the settings:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[e._v("variable")])]),e._v(" "),t("th",[t("strong",[e._v("type")]),e._v(" "),t("div",{staticStyle:{width:"110px"}})]),e._v(" "),t("th",[t("strong",[e._v("default")])]),e._v(" "),t("th",[t("strong",[e._v("description")]),e._v(" "),t("div",{staticStyle:{width:"500px"}})])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("SLM_HOST")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v('"http://172.17.0.1"')]),e._v(" "),t("td",[e._v("The full qualified domain name of the SLM host or IP address, including the http prefix")])]),e._v(" "),t("tr",[t("td",[e._v("SLM_USER")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v('"fabos"')]),e._v(" "),t("td",[e._v("The user to be used to add the resources to the SLM")])]),e._v(" "),t("tr",[t("td",[e._v("SLM_PASSWORD")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v('"password"')]),e._v(" "),t("td",[e._v("The corresponding password for the SLM user")])]),e._v(" "),t("tr",[t("td",[e._v("XLSX_FILE")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v('"/files/example.xlsx"')]),e._v(" "),t("td",[e._v('The Excel file inside the container. On default all file of the cloned directory are mounted under "/files"')])]),e._v(" "),t("tr",[t("td",[e._v("SHEET_NAME")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v('"DEVICES"')]),e._v(" "),t("td",[e._v("The sheet name inside the Excel file which contains the list of resources")])]),e._v(" "),t("tr",[t("td",[e._v("FORCE_OVERWRITE")]),e._v(" "),t("td",[e._v("bool (as string)")]),e._v(" "),t("td",[e._v('"False"')]),e._v(" "),t("td",[e._v("Determines if resources and their capabilites should be overwritten if they already exist")])]),e._v(" "),t("tr",[t("td",[e._v("FORCE_DELETE")]),e._v(" "),t("td",[e._v("bool (as string)")]),e._v(" "),t("td",[e._v('"False"')]),e._v(" "),t("td",[e._v("Determines if a resources listed in the EXCEL sheet should be deleted in the first step")])]),e._v(" "),t("tr",[t("td",[e._v("DELETE_ALL")]),e._v(" "),t("td",[e._v("bool (as string)")]),e._v(" "),t("td",[e._v('"False"')]),e._v(" "),t("td",[e._v("Determines if all resources (not only listed resources in the EXCEL) should be deleted in the first step, to start with a clean resource registry")])]),e._v(" "),t("tr",[t("td",[e._v("PING_CHECK")]),e._v(" "),t("td",[e._v("bool (as string)")]),e._v(" "),t("td",[e._v('"False"')]),e._v(" "),t("td",[e._v("Determines if resources should be pinged before added to the resource registry")])])])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("ATTENTION")]),e._v(" "),t("p",[e._v("Especially in a setup with docker be aware of the correct host used in the "),t("code",[e._v("SLM_HOST")]),e._v(" variable. In Docker "),t("strong",[e._v("localhost")]),e._v(" and "),t("strong",[e._v("127.0.0.1")]),e._v(" will not work, instead try the magic internal Docker host "),t("strong",[e._v("host.docker.internal")]),e._v(", "),t("strong",[e._v("172.17.0.1")]),e._v(" or in best case the regular IP of the host.")])]),e._v(" "),t("p",[e._v("Finally, the tool can be run through Docker. Therefore use Docker-Compose to build and run the tool:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker-compose")]),e._v(" up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--build")]),e._v("\n")])])]),t("p",[e._v("A successful run of the tool will print a summary at the end of the run. For the given resource in the "),t("code",[e._v("example.xlsx")]),e._v(" file, the summary looks like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('resource-registry-init  | SUMMARY -------------------------------------------------------------------------------------------------------------------\nresource-registry-init  | Resources deleted (via REST): []\nresource-registry-init  | Resources accessible (via ping): []\nresource-registry-init  | Resources added to registry (via REST): [\nresource-registry-init  |   "0226a355-3156-43e8-b51e-3b670c6ba7c3, SOCP2001-20011111, 192.168.153.48",\nresource-registry-init  |   "7fd248f5-e698-46f1-b30e-1ac568d66c15, RevPi30562, 192.168.153.51"\nresource-registry-init  | ]\nresource-registry-init  | Capabilities added to resources (via REST): [\nresource-registry-init  |   "7fd248f5-e698-46f1-b30e-1ac568d66c15, RevPi30562, [\'DOCKER\']"\nresource-registry-init  | ]\nresource-registry-init  | Resource Registry Setup Done!\nresource-registry-init  | Took: 24.11s\n')])])]),t("p",[e._v("This indicates that the two listed resources ("),t("code",[e._v("SOCP2001-20011111")]),e._v(", "),t("code",[e._v("RevPi30562")]),e._v(") were successfully added to the Resource Registry and that the "),t("code",[e._v("Docker")]),e._v(" capability was also added for the "),t("code",[e._v("RevPi")]),e._v(" device.")])])}),[],!1,null,null,null);t.default=o.exports}}]);