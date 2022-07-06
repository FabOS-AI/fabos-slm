(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{320:function(t,e,a){"use strict";a.r(e);var s=a(13),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("ul",[e("li",[t._v("Docker")]),t._v(" "),e("li",[t._v("Docker Compose")])]),t._v(" "),e("h2",{attrs:{id:"download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),e("p",[t._v("Compose files of the stack can be found in the sub-directory "),e("code",[t._v("compose")]),t._v(" in the "),e("a",{attrs:{href:"https://github.com/FabOS-AI/fabos-slm-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub repository"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("If you don't want to check out the whole repository you can get the latest version via "),e("code",[t._v("Git")]),t._v(" using this command:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/FabOS-AI/fabos-slm-setup.git "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" fabos-slm-setup/compose\n")])])]),e("div",{attrs:{id:"start"}}),t._v(" "),e("h2",{attrs:{id:"start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" Start")]),t._v(" "),e("p",[t._v("Set in the file "),e("code",[t._v("compose/.env")]),t._v(" the variable "),e("code",[t._v("SLM_HOSTNAME")]),t._v(" to the hostname of the host where the stack will be started. E.g.:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SLM_HOSTNAME=myhost.local\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("ATTENTION")]),t._v(" "),e("p",[e("strong",[t._v("Use lower case for the hostname to avoid case problems (e.g. with token authentication)")])])]),t._v(" "),e("p",[t._v("Start the whole stack:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker-compose up -d\n")])])]),e("h2",{attrs:{id:"stop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[t._v("#")]),t._v(" Stop")]),t._v(" "),e("p",[t._v("Stop the whole docker compose:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker-compose down --remove-orphans\n")])])]),e("p",[t._v("If you want to delete the data add the "),e("code",[t._v("--volumes")]),t._v(" flag:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker-compose down --remove-orphans --volumes\n")])])]),e("h2",{attrs:{id:"components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" Components")]),t._v(" "),e("h3",{attrs:{id:"ports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[t._v("#")]),t._v(" Ports")]),t._v(" "),e("p",[t._v("The different components of the stack can be reached under the following ports:")]),t._v(" "),e("ul",[e("li",[t._v("AWX: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:80")])]),t._v(" "),e("li",[t._v("Consul: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:8500")])]),t._v(" "),e("li",[t._v("Keycloak: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:7080")])]),t._v(" "),e("li",[t._v("Resource Registry: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:9010")])]),t._v(" "),e("li",[t._v("Service Registry: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:9020")])]),t._v(" "),e("li",[t._v("Vault: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:8200")])]),t._v(" "),e("li",[t._v("UI: "),e("a",{attrs:{href:""}},[t._v("http://myhost.local:8080")])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("ATTENTION")]),t._v(" "),e("p",[e("strong",[t._v("You need to replace "),e("code",[t._v("myhost.local")]),t._v(" with the hostname of the host where you have installated the Service Lifecycle Management (see section "),e("a",{attrs:{href:"#start"}},[t._v("Start")]),t._v(").")])])]),t._v(" "),e("h3",{attrs:{id:"get-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-configuration"}},[t._v("#")]),t._v(" Get configuration")]),t._v(" "),e("p",[t._v("Most of the settings and credentials are created automatically during first start of the stack. If you want to access the different components of the Service Lifecycle Management stack you need to export the configuration. Wait until the stack is fully started and all init containers have stopped. Then run the config exporter container:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker-compose -f config-exporter.yml -f docker-compose.yml up --force-recreate config-exporter\n")])])]),e("p",[t._v("It will generate by default a sub-directory "),e("code",[t._v("config/_conf_generated")]),t._v(" relative to your docker-compose.yml file containing\nthe configuration of the setup stack ("),e("code",[t._v("slm-config.yml")]),t._v("). If you want another target directory edit in file "),e("code",[t._v("compose/config-exporter.yml")]),t._v("\nthe host path of this volume:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- ./config:/project\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);