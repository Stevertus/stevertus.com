final List<dynamic> styles = ['#spinner {\r\n  display: block;\r\n  height: 50px;\r\n  width: 50px;\r\n  margin: -25px 0 0 -25px;\r\n  border: 4px rgba(0, 0, 0, 0.25) solid;\r\n  border-top: 4px var(--primary) solid;\r\n  border-right: 4px var(--primary) solid;\r\n  border-bottom: 4px var(--primary) solid;\r\n  border-radius: 50%;\r\n  -webkit-animation: spin3 1s infinite linear;\r\n  animation: spin3 1s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes spin3 {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n@keyframes spin3 {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n'];