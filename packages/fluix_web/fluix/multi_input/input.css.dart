final List<dynamic> styles = [':host {\n  border: none;\n  background-color: var(--inputBackground);\n  color: black;\n  padding: 8px 15px;\n  border-radius: 6px;\n  font-size: 16px;\n  font-family: "Lato";\n}\n:host:focus {\n  padding-bottom: 6px;\n  border-bottom: 2px solid var(--primary);\n}\n:host.fluidMultiInput-error {\n  padding-bottom: 6px;\n  border-bottom: 2px solid var(--errorColor);\n}\n:host:focus {\n  outline: none;\n}\n'];