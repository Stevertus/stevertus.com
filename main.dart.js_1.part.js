self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G={
zb:function(d){var y=0,x=P.b5(P.e),w,v,u,t,s
var $async$zb=P.b6(function(e,f){if(e===1)return P.b2(f,x)
while(true)switch(y){case 0:y=3
return P.aQ(G.AM(C.b.aj(d,"http")?d:"https://stevertus.com/"+d,null),$async$zb)
case 3:v=f
u=v.e
t=B.mm(J.R(U.mg(u).c.a,"charset"))
s=v.x
t.aJ(0,s)
t=v.b
if(t!==200)throw H.d("Request failed!")
w=B.mm(J.R(U.mg(u).c.a,"charset")).aJ(0,s)
y=1
break
case 1:return P.b3(w,x)}})
return P.b4($async$zb,x)},
z9:function(d){var y=0,x=P.b5(null),w,v
var $async$z9=P.b6(function(e,f){if(e===1)return P.b2(f,x)
while(true)switch(y){case 0:v=C.m
y=3
return P.aQ(G.zb(d),$async$z9)
case 3:w=v.aJ(0,f)
y=1
break
case 1:return P.b3(w,x)}})
return P.b4($async$z9,x)}},Y,R,K={
GW:function(){return C.c5},
Nf:function(d,e){return new K.xW(E.L(H.b(d,"$iF"),H.q(e),X.aU))},
Ng:function(d,e){return new K.xX(E.L(H.b(d,"$iF"),H.q(e),X.aU))},
Nh:function(d,e){H.b(d,"$iF")
H.q(e)
return new K.xY(N.ab(),E.L(d,e,X.aU))},
Ni:function(d,e){return new K.m1(E.L(H.b(d,"$iF"),H.q(e),X.aU))},
Nj:function(d,e){return new K.xZ(E.L(H.b(d,"$iF"),H.q(e),X.aU))},
Nk:function(d,e){return new K.y_(E.L(H.b(d,"$iF"),H.q(e),X.aU))},
Nl:function(d,e){H.b(d,"$iF")
H.q(e)
return new K.y0(N.ab(),E.L(d,e,X.aU))},
Nm:function(d,e){H.b(d,"$iF")
H.q(e)
return new K.y1(N.ab(),E.L(d,e,X.aU))},
Nn:function(d){return new K.y2(d,new G.cU())},
iD:function iD(d){var _=this
_.c=_.b=_.a=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null
_.d=d},
xW:function xW(d){var _=this
_.d=_.c=_.b=null
_.a=d},
xX:function xX(d){var _=this
_.d=_.c=_.b=null
_.a=d},
xY:function xY(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
m1:function m1(d){this.c=this.b=null
this.a=d},
xZ:function xZ(d){this.c=this.b=null
this.a=d},
y_:function y_(d){var _=this
_.f=_.e=_.d=_.c=_.b=null
_.a=d},
y0:function y0(d,e){var _=this
_.b=d
_.e=_.d=_.c=null
_.a=e},
y1:function y1(d,e){this.b=d
this.a=e},
y2:function y2(d,e){var _=this
_.b=_.a=null
_.c=d
_.d=e},
kh:function kh(d){this.a=d}},X={
GV:function(d){var y=new X.iu()
y.mz(d)
return y},
aU:function aU(d){this.a=d
this.c=this.b=null},
uh:function uh(d){this.a=d},
ui:function ui(){},
iu:function iu(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
uf:function uf(d){this.a=d},
ug:function ug(){}},S,N,E,M,Q,D,L,O,V,B,A={
Kg:function(d,e,f){var y={}
y.a=null
y.b=!0
y.c=null
return new A.zA(y,d,f,e)},
zA:function zA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},U,T,Z,F
a.setFunctionNamesIfNecessary([G,K,X,A])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
G=a.updateHolder(c[5],G)
Y=c[6]
R=c[7]
K=a.updateHolder(c[8],K)
X=a.updateHolder(c[9],X)
S=c[10]
N=c[11]
E=c[12]
M=c[13]
Q=c[14]
D=c[15]
L=c[16]
O=c[17]
V=c[18]
B=c[19]
A=a.updateHolder(c[20],A)
U=c[21]
T=c[22]
Z=c[23]
F=c[24]
X.aU.prototype={
D:function(){G.z9("tekpack.json").aT(new X.uh(this),P.z).hZ(new X.ui())}}
X.iu.prototype={
mz:function(d){var y,x,w,v=this,u="texture",t="isNotBlue",s=J.a0(d),r=s.h(d,"name")
v.a=H.o(r==null?"":r)
r=s.h(d,"description")
r=r==null?null:J.FG(r,"\n","<br>")
v.b=r==null?"":r
r=s.h(d,u)
r=H.o(r==null?"":r)
v.d=r
if(C.b.aj(r,"/"))v.d="assets/tekpack"+r
v.c=H.bI(s.h(d,t)!=null&&s.h(d,t))
v.srt(H.c([],[P.e]))
for(y=0;y<=8;++y){x=H.b(J.Fu(H.zj(s.h(d,"crafting")),new X.uf(y),new X.ug()),"$it")
if(x!=null&&J.R(x,u)!=null){w=H.o(J.R(x,u))
if(J.mw(w,"/"))w="assets/tekpack"+w}else w=null
r=v.e;(r&&C.a).i(r,w)}},
srt:function(d){this.e=H.k(d,"$if",[P.e],"$af")}}
K.iD.prototype={
p:function(){var y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="fluidBtn",h="style",g=j.aa(),f=document,e=T.V(f,g)
j.C(e,"container")
j.l(e)
y=T.a5(f,e,"img")
T.j(y,"alt","tekpack")
H.b(y,"$iw")
j.C(y,"logo")
T.j(y,"src","assets/tekpack/logo.png")
j.q(y)
x=T.V(f,e)
j.C(x,"floatingCard")
j.l(x)
w=E.iB(j,3)
j.e=w
v=w.c
x.appendChild(v)
j.l(v)
j.f=new V.dM(v)
u=f.createElement("h2")
j.q(u)
T.P(u,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
t=T.a5(f,u,"a")
T.j(t,"routerLink","/mcscript")
H.b(t,"$iw")
j.l(t)
T.P(t,"mcScript")
T.P(u,".")
j.q(T.a5(f,u,"br"))
T.P(u," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
w=G.bG(j,11)
j.r=w
s=w.c
T.j(s,i,"")
T.j(s,"highlight","")
T.j(s,h,"width: 50%;height: 60px;line-height: 30px")
j.l(s)
j.x=new Z.bj(s)
r=T.av("Get it via ")
q=f.createElement("img")
T.j(q,"alt","dmanager")
T.j(q,"src","assets/dManager-icon.ico")
T.j(q,h,"height:25px;margin-left:5px")
j.q(q)
w=[W.T]
p=[P.p]
j.r.G(j.x,H.c([H.c([r,q],w)],p))
o=T.av(" ")
n=G.bG(j,15)
j.y=n
m=n.c
T.j(m,i,"")
T.j(m,"secondary","")
j.l(m)
j.z=new Z.bj(m)
l=T.av("Opensource on ")
k=f.createElement("img")
T.j(k,"alt","")
T.j(k,"src","assets/gitHub_icon.svg")
T.j(k,h,"height:25px")
j.q(k)
j.y.G(j.z,H.c([H.c([l,k],w)],p))
j.e.G(j.f,H.c([H.c([u,s,o,m],w)],p))
w=j.Q=new V.G(18,j,T.Z(e))
j.ch=new K.N(new D.K(w,K.LU()),w)
w=j.cx=new V.G(19,j,T.Z(e))
j.cy=new K.N(new D.K(w,K.LV()),w)
w=j.db=new V.G(20,j,T.Z(e))
j.dx=new K.N(new D.K(w,K.LZ()),w)
w=W.A
J.aS(s,"click",j.B(j.gqi(),w,w))
J.aS(m,"click",j.B(j.gqk(),w,w))
w=j.d
j.dy=new K.kh(H.b(w.a.K(C.ab,w.b),"$ifF"))},
w:function(){var y,x,w=this,v=w.a,u=w.d.f===0
if(u)w.f.D()
if(u)w.x.d=!0
if(u)w.x.D()
if(u)w.z.c=!0
if(u)w.z.D()
w.ch.sL(v.b!=null)
y=w.cy
x=v.a.length
y.sL(x!==0)
y=w.dx
x=v.c
y.sL(x!=null&&J.dl(x))
w.Q.F()
w.cx.F()
w.db.F()
w.e.t()
w.r.t()
w.y.t()},
H:function(){var y=this
y.Q.E()
y.cx.E()
y.db.E()
y.e.v()
y.r.v()
y.y.v()},
qj:function(d){this.a.toString
window.location.href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
ql:function(d){this.a.toString
window.location.href="https://github.com/Stevertus/tekPack"},
$aaa:function(){return[X.aU]}}
K.xW.prototype={
p:function(){var y,x=this,w=document,v=w.createElement("div")
H.b(v,"$iw")
x.C(v,"video")
x.l(v)
y=H.b(T.a5(w,v,"iframe"),"$ifO")
x.d=y
T.j(y,"allow","autoplay; encrypted-media")
T.j(x.d,"allowfullscreen","")
T.j(x.d,"frameborder","0")
x.l(x.d)
y=H.b(x.a.c,"$iiD").dy
x.spC(A.Kg(y.gtk(y),null,null))
x.I(v)},
w:function(){var y=this,x=C.b.n("https://www.youtube.com/embed/",y.a.a.b)+"?rel=0&amp;controls=0&amp;showinfo=0",w=y.c.$1(x)
x=y.b
if(x==null?w!=null:x!==w){y.d.src=$.bQ.c.iU(w)
y.b=w}},
spC:function(d){this.c=H.m(d,{func:1,args:[,]})},
$aE:function(){return[X.aU]}}
K.xX.prototype={
p:function(){var y,x=this,w=document.createElement("div")
H.b(w,"$iw")
x.C(w,"grid")
x.l(w)
y=x.b=new V.G(1,x,T.Z(w))
x.c=new R.cn(y,new D.K(y,K.LW()))
x.I(w)},
w:function(){var y=this,x=y.a.a.a,w=y.d
if(w!==x){y.c.sbI(x)
y.d=x}y.c.aQ()
y.b.F()},
H:function(){this.b.E()},
$aE:function(){return[X.aU]}}
K.xY.prototype={
p:function(){var y,x,w=this,v=document,u=v.createElement("div")
H.b(u,"$iw")
w.C(u,"item")
w.l(u)
y=T.a5(v,u,"h5")
w.q(y)
y.appendChild(w.b.b)
x=T.a5(v,u,"img")
w.y=x
T.j(x,"alt","")
w.C(H.b(w.y,"$iw"),"icon")
w.q(w.y)
x=T.V(v,u)
w.z=x
w.C(x,"crafting-grid")
w.l(w.z)
x=w.c=new V.G(5,w,T.Z(w.z))
w.d=new R.cn(x,new D.K(x,K.LX()))
x=T.V(v,u)
w.Q=x
w.C(x,"description")
w.l(w.Q)
w.I(u)},
w:function(){var y,x,w,v=this,u=H.b(v.a.f.h(0,"$implicit"),"$iiu"),t=u.e,s=v.r
if(s==null?t!=null:s!==t){v.d.sbI(t)
v.r=t}v.d.aQ()
v.c.F()
s=u.a
if(s==null)s=""
v.b.W(s)
y=u.d
s=v.e
if(s!=y){v.y.src=$.bQ.c.bN(y)
v.e=y}x=!H.a6(u.c)
s=v.f
if(s!==x){T.fu(v.z,"crafting-blue",x)
v.f=x}w=u.b
s=v.x
if(s!=w){v.Q.innerHTML=$.bQ.c.lN(w)
v.x=w}},
H:function(){this.c.E()},
$aE:function(){return[X.aU]}}
K.m1.prototype={
p:function(){var y,x=this,w=document.createElement("div")
H.b(w,"$iw")
x.C(w,"crafting-item")
x.l(w)
y=x.b=new V.G(1,x,T.Z(w))
x.c=new K.N(new D.K(y,K.LY()),y)
x.I(w)},
w:function(){var y=H.o(this.a.f.h(0,"$implicit"))
this.c.sL(y!=null)
this.b.F()},
H:function(){this.b.E()},
$aE:function(){return[X.aU]}}
K.xZ.prototype={
p:function(){var y=this,x=document.createElement("img")
y.c=x
y.q(x)
y.I(y.c)},
w:function(){var y=this,x=H.o(H.b(y.a.c,"$im1").a.f.h(0,"$implicit")),w=y.b
if(w!=x){y.c.src=$.bQ.c.bN(x)
y.b=x}},
$aE:function(){return[X.aU]}}
K.y_.prototype={
p:function(){var y,x,w,v=this,u=E.iB(v,0)
v.b=u
y=u.c
v.l(y)
v.c=new V.dM(y)
x=document.createElement("h2")
T.j(x,"id","changelog")
v.q(x)
T.P(x,"Changelog")
u=v.d=new V.G(3,v,T.aR())
v.e=new R.cn(u,new D.K(u,K.M_()))
w=[P.p]
v.b.G(v.c,H.c([H.c([x,u],w)],w))
v.I(y)},
w:function(){var y,x=this,w=x.a,v=w.a
w=w.ch
if(w===0)x.c.D()
w=v.c
v.toString
y=J.FM(J.zL(w))
w=x.f
if(w!==y){x.e.sbI(y)
x.f=y}x.e.aQ()
x.d.F()
x.b.t()},
H:function(){this.d.E()
this.b.v()},
$aE:function(){return[X.aU]}}
K.y0.prototype={
p:function(){var y,x,w=this,v=document,u=v.createElement("div")
H.b(u,"$iw")
w.l(u)
y=T.a5(v,u,"h4")
w.q(y)
y.appendChild(w.b.b)
x=H.b(T.a5(v,u,"ul"),"$iw")
w.l(x)
x=w.c=new V.G(4,w,T.Z(x))
w.d=new R.cn(x,new D.K(x,K.M0()))
w.I(u)},
w:function(){var y=this,x=y.a,w=x.f.h(0,"$implicit"),v=J.R(x.a.c,w)
x=y.e
if(x==null?v!=null:x!==v){x=y.d
H.k(v,"$iu",[P.p],"$au")
x.sbI(v)
y.e=v}y.d.aQ()
y.c.F()
y.b.W(H.o(O.b7(w)))},
H:function(){this.c.E()},
$aE:function(){return[X.aU]}}
K.y1.prototype={
p:function(){var y=document.createElement("li")
this.q(y)
y.appendChild(this.b.b)
this.I(y)},
w:function(){this.b.W(H.o(O.b7(this.a.f.h(0,"$implicit"))))},
$aE:function(){return[X.aU]}}
K.y2.prototype={
p:function(){var y,x,w=this,v=new K.iD(E.ax(w,0,3)),u=$.D0
if(u==null)u=$.D0=O.az($.Ll,null)
v.b=u
y=document.createElement("tekpack")
v.c=H.b(y,"$iw")
w.sbQ(v)
x=w.b.c
w.sbP(new X.aU(H.c([],[X.iu])))
w.I(x)},
w:function(){var y=this.d.e
if(y===0)this.a.D()
this.b.t()},
$aak:function(){return[X.aU]}}
K.kh.prototype={
ai:function(d,e){H.o(e)
this.a.toString
return new R.ii(e==null?"":e)}}
var z=a.updateTypes([{func:1,ret:[E.E,-1],args:[A.F,P.r]},{func:1,ret:-1,args:[,]},{func:1,args:[,]},{func:1,ret:[G.ak,X.aU],args:[M.aA]}])
A.zA.prototype={
$1:function(d){var y,x
H.v(d,this.c)
y=this.a
if(!y.b){x=y.c
x=x==null?d!=null:x!==d}else x=!0
if(x){y.b=!1
y.c=d
y.a=this.b.$1(d)}return y.a},
$S:function(){return{func:1,ret:this.d,args:[this.c]}}}
X.uh.prototype={
$1:function(d){var y,x,w="items",v=this.a,u=J.a0(d)
v.b=H.o(u.h(d,"video"))
y=u.h(d,"changes")
v.c=H.b(y==null?P.bT():y,"$it")
if(u.h(d,w)!=null){v=v.a
x=0
while(!0){y=H.zt(J.aH(u.h(d,w)))
if(typeof y!=="number")return H.x(y)
if(!(x<y))break
C.a.i(v,X.GV(H.b(J.R(u.h(d,w),x),"$it")));++x}}},
$S:4}
X.ui.prototype={
$1:function(d){return P.di(d)},
$S:3}
X.uf.prototype={
$1:function(d){return J.a7(J.R(d,"slot"),this.a)},
$S:16}
X.ug.prototype={
$0:function(){return},
$S:1};(function installTearOffs(){var y=a._static_2,x=a._static_1,w=a._instance_1u,v=a._instance_1i
y(K,"LU","Nf",0)
y(K,"LV","Ng",0)
y(K,"LW","Nh",0)
y(K,"LX","Ni",0)
y(K,"LY","Nj",0)
y(K,"LZ","Nk",0)
y(K,"M_","Nl",0)
y(K,"M0","Nm",0)
x(K,"M1","Nn",3)
var u
w(u=K.iD.prototype,"gqi","qj",1)
w(u,"gqk","ql",1)
v(K.kh.prototype,"gtk","ai",2)})();(function inheritance(){var y=a.inheritMany,x=a.inherit
y(H.dp,[A.zA,X.uh,X.ui,X.uf,X.ug])
y(P.p,[X.aU,X.iu,K.kh])
x(K.iD,E.aa)
y(E.E,[K.xW,K.xX,K.xY,K.m1,K.xZ,K.y_,K.y0,K.y1])
x(K.y2,G.ak)})();(function constants(){C.c5=new D.aF("tekpack",K.M1(),[X.aU])})();(function staticFields(){$.Ly=['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}']
$.D0=null
$.Ll=[$.Ly]})()}
$__dart_deferred_initializers__["D2M1XnBMv5M4rupXJdEUZiQy41w="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_1.part.js.map
