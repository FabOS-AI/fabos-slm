(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{331:function(t,e,a){"use strict";a.r(e);var s=a(15),i=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("ul",[e("li",[t._v("Docker")]),t._v(" "),e("li",[t._v("Docker Compose")])]),t._v(" "),e("h2",{attrs:{id:"download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),e("p",[t._v("Download the latest version of "),e("code",[t._v("slm-setup-compose.zip")]),t._v(" from the "),e("a",{attrs:{href:"https://github.com/FabOS-AI/fabos-slm-setup/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("releases page on GitHub"),e("OutboundLink")],1),t._v(", which contains the compose files of the stack.")]),t._v(" "),e("div",{attrs:{id:"start"}}),t._v(" "),e("h2",{attrs:{id:"start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" Start")]),t._v(" "),e("p",[t._v("Set in the file "),e("code",[t._v(".env")]),t._v(" the variable "),e("code",[t._v("SLM_HOSTNAME")]),t._v(" to the hostname of the host where the stack will be started. E.g.:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SLM_HOSTNAME=myhost.local\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("ATTENTION")]),t._v(" "),e("p",[e("strong",[t._v("Use lower case for the hostname to avoid case problems (e.g. with token authentication)")])])]),t._v(" "),e("p",[t._v("Start the whole stack:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker-compose up -d\n")])])]),e("h2",{attrs:{id:"stop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[t._v("#")]),t._v(" Stop")]),t._v(" "),e("p",[t._v("Stop the whole docker compose:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker-compose down --remove-orphans\n")])])]),e("p",[t._v("If you want to delete the data add the "),e("code",[t._v("--volumes")]),t._v(" flag:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker-compose down --remove-orphans --volumes\n")])])]),e("h2",{attrs:{id:"components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" Components")]),t._v(" "),e("h3",{attrs:{id:"ports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[t._v("#")]),t._v(" Ports")]),t._v(" "),e("p",[t._v("The different components of the stack can be reached under the following ports:")]),t._v(" "),e("ul",[e("li",[t._v("AWX: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:80")])]),t._v(" "),e("li",[t._v("Consul: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:8500")])]),t._v(" "),e("li",[t._v("Keycloak: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:7080")])]),t._v(" "),e("li",[t._v("Resource Registry: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:9010")])]),t._v(" "),e("li",[t._v("Service Registry: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:9020")])]),t._v(" "),e("li",[t._v("Vault: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:8200")])]),t._v(" "),e("li",[t._v("UI: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:8080")])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("ATTENTION")]),t._v(" "),e("p",[e("strong",[t._v("You need to replace "),e("code",[t._v("myhost.local")]),t._v(" with the hostname of the host where you have installated the Service Lifecycle Management (see section "),e("a",{attrs:{href:"#start"}},[t._v("Start")]),t._v(").")])])]),t._v(" "),e("h3",{attrs:{id:"get-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-configuration"}},[t._v("#")]),t._v(" Get configuration")]),t._v(" "),e("p",[t._v("Most of the settings and credentials are created automatically during first start of the stack. If you want to access the different components of the Service Lifecycle Management stack you need to export the configuration. Wait until the stack is fully started and all init containers have stopped. Then run the config exporter container:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker-compose up --force-recreate config-exporter\n")])])]),e("p",[t._v("It will generate by default a sub-directory "),e("code",[t._v("config/_conf_generated")]),t._v(" relative to your docker-compose.yml file containing\nthe configuration of the setup stack ("),e("code",[t._v("slm-config.yml")]),t._v("). If you want another target directory edit in file "),e("code",[t._v("config-exporter.yml")]),t._v("\nthe host path of this volume:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- ./config:/project\n")])])]),e("h2",{attrs:{id:"known-issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[t._v("#")]),t._v(" Known Issues")]),t._v(" "),e("h3",{attrs:{id:"default-deployment-capabilities-missing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-deployment-capabilities-missing"}},[t._v("#")]),t._v(" Default Deployment Capabilities missing")]),t._v(" "),e("p",[t._v("By default the SLM setup routine adds deployment capabilities for")]),t._v(" "),e("ul",[e("li",[t._v("docker")]),t._v(" "),e("li",[t._v("docker-swarm")]),t._v(" "),e("li",[t._v("k3s")])]),t._v(" "),e("p",[t._v("which are added during the initial startup. In rare cases this adding process fails and consequently no deployment\ncapabilities are available in the UI:")]),t._v(" "),e("figure",[e("img",{attrs:{src:"/img/figures/installation/known-issues-missing-dcs-dc-button-disabled.png"}}),t._v(" "),e("figcaption",[t._v("Deployment Capability Button disabled because of missing single host deployment capabilities")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"/img/figures/installation/known-issues-missing-dcs-cluster-button-disabled.png"}}),t._v(" "),e("figcaption",[t._v("Cluster Button disabled because of missing multi host deployment capabilities")])]),t._v(" "),e("p",[t._v("To fix this start the container "),e("code",[t._v("resource-registry-init")]),t._v(" again by running:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker-compose up -d resource-registry-init\n")])])]),e("p",[t._v("After the container has started and has added the deployment capabilities and it will stop by itself. The capabilities (single\nhost and cluster) should be available after reloading the ui:")]),t._v(" "),e("figure",[e("img",{attrs:{src:"/img/figures/installation/known-issues-missing-dcs-dc-button-enabled.png"}}),t._v(" "),e("figcaption",[t._v("Deployment Capability Button enabled")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"/img/figures/installation/known-issues-missing-dcs-cluster-button-enabled.png"}}),t._v(" "),e("figcaption",[t._v("Cluster Create Button enabled")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"/img/figures/installation/known-issues-missing-dcs-cluster-types-available.png"}}),t._v(" "),e("figcaption",[t._v("Default Cluster Types available in selection form")])])])}),[],!1,null,null,null);e.default=i.exports}}]);