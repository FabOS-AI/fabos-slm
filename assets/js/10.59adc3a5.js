(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{320:function(e,t,a){"use strict";a.r(t);var o=a(15),i=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"debugging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),t("h2",{attrs:{id:"failing-jobs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#failing-jobs"}},[e._v("#")]),e._v(" Failing Jobs")]),e._v(" "),t("p",[e._v("An overview of all jobs can be found in the "),t("code",[e._v("Jobs")]),e._v(" section. The status column can determine whether a job failed or was successful. If a job has failed, more details can often be found in AWX.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/figures/development/failing-jobs-slm-overview.png",alt:"Jobs Overview"}})]),e._v(" "),t("h3",{attrs:{id:"awx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#awx"}},[e._v("#")]),e._v(" AWX")]),e._v(" "),t("p",[e._v("First of all, the job id of the failed job which can be found in the "),t("code",[e._v("Jobs")]),e._v(" section is required:\n"),t("img",{attrs:{src:"/img/figures/development/failing-jobs-slm-overview-get-job-id.png",alt:"Jobs Overview - Get Job ID"}})]),e._v(" "),t("p",[e._v("After that, log in to the AWX Web UI. It is accessible by default on port 80 on the host where Service Lifecycle Management is installed. The credentials are admin / password by default. Then select the "),t("code",[e._v("Jobs")]),e._v(" section and search for the job you want to get more details about.\n"),t("img",{attrs:{src:"/img/figures/development/failing-jobs-awx-overview.png",alt:"AWX Jobs Overview"}})]),e._v(" "),t("p",[e._v("In the details view, the job details can be found on the left side and the log output on the right side. In the upper right corner, the full log file can be downloaded. When contacting the developers regarding a problem, attach the downloaded log file and a screenshot of the job view.\n"),t("img",{attrs:{src:"/img/figures/development/failing-jobs-awx-job-details.png",alt:"AWX Job Details"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);