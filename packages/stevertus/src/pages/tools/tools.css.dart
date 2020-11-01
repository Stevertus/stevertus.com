final List<dynamic> styles = ['.container {\n  position: relative;\n  width: 100%;\n}\n\n.card {\n  --inputBackground: #f8f8fc;\n}\n.card .split {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.card button.full {\n  margin: 8px;\n  width: 47%;\n}\n\n.card * {\n  margin: 8px 0;\n}\n\n.icon {\n  color: grey;\n}\n.icon:hover {\n  color: var(--primary);\n}\n\n#rightControl {\n  position: absolute;\n  right: -60px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 50px;\n  color: black;\n}\n\n#leftControl {\n  position: absolute;\n  left: -60px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 50px;\n  color: black;\n}\n#leftControl .tooltip {\n  position: absolute;\n  right: 0px;\n}\n\n.errorText {\n  color: red;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(var(--columns), 1fr);\n  margin: 16px 0;\n  grid-gap: 5px;\n  background-color: #505050;\n  padding: 10px;\n}\n\n.slot {\n  width: 100%;\n  position: relative;\n}\n.slot:before {\n  content: "";\n  display: inline-block;\n  width: 5px;\n  height: 0;\n  padding-bottom: 100%;\n  position: relative;\n}\n.slot .content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background-color: white;\n  width: 100%;\n}\n.slot .content.selected, .slot .content:hover {\n  background-color: #dedede;\n}\n.slot .content img {\n  position: absolute;\n  width: 40%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.slot .content p {\n  width: 100%;\n  position: absolute;\n  bottom: 5%;\n  text-align: center;\n  margin: 0;\n}\n'];