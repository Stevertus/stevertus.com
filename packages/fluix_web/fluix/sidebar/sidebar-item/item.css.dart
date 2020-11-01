final List<dynamic> styles = [':host.active .container {\n  color: var(--primary);\n}\n\n.side {\n  min-width: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n}\n.side fluid-icon {\n  font-size: 24px;\n}\n\n.container {\n  cursor: pointer;\n  user-select: none;\n  width: 100%;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  color: #D5D5D9;\n}\n.container:active {\n  color: var(--primary);\n}\n.container.active {\n  color: var(--primary);\n}\n.container:hover {\n  color: var(--primary-darker);\n}\n\n.text {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 16px;\n  max-height: 48px;\n  line-height: 24px;\n  word-wrap: break-word;\n  display: none;\n  opacity: 0;\n}\n.text.expand {\n  animation-duration: 200ms;\n  animation-name: expandText;\n  display: inline;\n  opacity: 1;\n}\n.text.shrink {\n  display: none;\n  opacity: 0;\n  animation-duration: 200ms;\n  animation-name: shrinkText;\n}\n\n@keyframes expandText {\n  from {\n    display: none;\n  }\n  10% {\n    display: inline;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes shrinkText {\n  from {\n    opacity: 1;\n  }\n  70% {\n    width: 80px;\n    display: none;\n    opacity: 0;\n  }\n}\n'];