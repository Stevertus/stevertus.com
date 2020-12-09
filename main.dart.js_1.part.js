self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G={
A5:function(d){var x=0,w=P.be(y.X),v,u,t,s,r
var $async$A5=P.bf(function(e,f){if(e===1)return P.ba(f,w)
while(true)switch(x){case 0:x=3
return P.aX(G.BY(C.b.al(d,"http")?d:"https://stevertus.com/"+d,null),$async$A5)
case 3:u=f
t=u.e
s=B.rx(J.T(U.rq(t).c.a,"charset"))
r=u.x
s.aM(0,r)
s=u.b
if(s!==200)throw H.b("Request failed!")
v=B.rx(J.T(U.rq(t).c.a,"charset")).aM(0,r)
x=1
break
case 1:return P.bb(v,w)}})
return P.bc($async$A5,w)},
A3:function(d){var x=0,w=P.be(y.z),v,u
var $async$A3=P.bf(function(e,f){if(e===1)return P.ba(f,w)
while(true)switch(x){case 0:u=C.p
x=3
return P.aX(G.A5(d),$async$A3)
case 3:v=u.aM(0,f)
x=1
break
case 1:return P.bb(v,w)}})
return P.bc($async$A3,w)}},Y,R,K={
Iq:function(){return C.c3},
Px:function(d,e){return new K.qQ(E.M(y.F.a(d),H.m(e),y.Q))},
Py:function(d,e){return new K.qR(E.M(y.F.a(d),H.m(e),y.Q))},
Pz:function(d,e){y.F.a(d)
H.m(e)
return new K.qS(N.af(),E.M(d,e,y.Q))},
PA:function(d,e){return new K.l8(E.M(y.F.a(d),H.m(e),y.Q))},
PB:function(d,e){return new K.qT(E.M(y.F.a(d),H.m(e),y.Q))},
PC:function(d,e){return new K.qU(E.M(y.F.a(d),H.m(e),y.Q))},
PD:function(d,e){y.F.a(d)
H.m(e)
return new K.qV(N.af(),E.M(d,e,y.Q))},
PE:function(d,e){y.F.a(d)
H.m(e)
return new K.qW(N.af(),E.M(d,e,y.Q))},
PF:function(){return new K.qX(new G.cO())},
id:function id(d){var _=this
_.c=_.b=_.a=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null
_.d=d},
qQ:function qQ(d){var _=this
_.d=_.c=_.b=null
_.a=d},
qR:function qR(d){var _=this
_.d=_.c=_.b=null
_.a=d},
qS:function qS(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
l8:function l8(d){this.c=this.b=null
this.a=d},
qT:function qT(d){this.c=this.b=null
this.a=d},
qU:function qU(d){var _=this
_.f=_.e=_.d=_.c=_.b=null
_.a=d},
qV:function qV(d,e){var _=this
_.b=d
_.e=_.d=_.c=null
_.a=e},
qW:function qW(d,e){this.b=d
this.a=e},
qX:function qX(d){var _=this
_.c=_.b=_.a=null
_.d=d},
nj:function nj(d){this.a=d}},X={
Ip:function(d){var x=new X.jP()
x.ns(d)
return x},
aQ:function aQ(d){this.a=d
this.c=this.b=null},
xI:function xI(d){this.a=d},
xJ:function xJ(){},
jP:function jP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
xG:function xG(d){this.a=d},
xH:function xH(){}},N,E,M,Q,D,O,V,A={
Mm:function(d,e,f){var x={}
x.a=null
x.b=!0
x.c=null
return new A.Ap(x,d,f,e)},
Ap:function Ap(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},T,L,U,Z,B,S,F
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
N=c[10]
E=c[11]
M=c[12]
Q=c[13]
D=c[14]
O=c[15]
V=c[16]
A=a.updateHolder(c[17],A)
T=c[18]
L=c[19]
U=c[20]
Z=c[21]
B=c[22]
S=c[23]
F=c[24]
X.aQ.prototype={
C:function(){G.A3("tekpack.json").aZ(new X.xI(this),y.P).iu(new X.xJ())}}
X.jP.prototype={
ns:function(d){var x,w,v,u,t,s=this,r="texture",q="isNotBlue",p=J.a2(d),o=p.i(d,"name")
s.a=H.i(o==null?"":o)
o=p.i(d,"description")
o=o==null?null:J.H6(o,"\n","<br>")
s.b=o==null?"":o
o=p.i(d,r)
o=H.i(o==null?"":o)
s.d=o
if(C.b.al(o,"/"))s.d="assets/tekpack"+o
s.c=H.bF(p.i(d,q)!=null&&p.i(d,q))
s.stO(H.a([],y.i))
for(o=y.w,x=y.h,w=0;w<=8;++w){v=x.a(J.GV(o.a(p.i(d,"crafting")),new X.xG(w),new X.xH()))
if(v!=null&&J.T(v,r)!=null){u=H.i(J.T(v,r))
if(J.Cw(u,"/"))u="assets/tekpack"+u}else u=null
t=s.e;(t&&C.a).j(t,u)}},
stO:function(d){this.e=y.G.a(d)}}
K.id.prototype={
q:function(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="fluidBtn",g="style",f=i.ac(),e=document,d=T.U(e,f)
i.E(d,"container")
i.k(d)
x=T.a4(e,d,"img")
T.e(x,"alt","tekpack")
w=y.f
w.a(x)
i.E(x,"logo")
T.e(x,"src","assets/tekpack/logo.png")
i.u(x)
v=T.U(e,d)
i.E(v,"floatingCard")
i.k(v)
u=E.ib(i,3)
i.e=u
t=u.c
v.appendChild(t)
i.k(t)
i.f=new V.dj(t)
s=e.createElement("h2")
i.u(s)
T.Q(s,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
r=T.a4(e,s,"a")
T.e(r,"routerLink","/mcscript")
w.a(r)
i.k(r)
T.Q(r,"mcScript")
T.Q(s,".")
i.u(T.a4(e,s,"br"))
T.Q(s," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
w=G.bv(i,11)
i.r=w
q=w.c
T.e(q,h,"")
T.e(q,"highlight","")
T.e(q,g,"width: 50%;height: 60px;line-height: 30px")
i.k(q)
i.x=new Z.b_(q)
p=T.al("Get it via ")
o=e.createElement("img")
T.e(o,"alt","dmanager")
T.e(o,"src","assets/dManager-icon.ico")
T.e(o,g,"height:25px;margin-left:5px")
i.u(o)
w=y.N
u=y.M
i.r.D(i.x,H.a([H.a([p,o],w)],u))
n=T.al(" ")
m=G.bv(i,15)
i.y=m
l=m.c
T.e(l,h,"")
T.e(l,"secondary","")
i.k(l)
i.z=new Z.b_(l)
k=T.al("Opensource on ")
j=e.createElement("img")
T.e(j,"alt","")
T.e(j,"src","assets/gitHub_icon.svg")
T.e(j,g,"height:25px")
i.u(j)
i.y.D(i.z,H.a([H.a([k,j],w)],u))
i.e.D(i.f,H.a([H.a([s,q,n,l],w)],u))
w=i.Q=new V.E(18,i,T.Z(d))
i.ch=new K.P(new D.K(w,K.O5()),w)
w=i.cx=new V.E(19,i,T.Z(d))
i.cy=new K.P(new D.K(w,K.O6()),w)
w=i.db=new V.E(20,i,T.Z(d))
i.dx=new K.P(new D.K(w,K.Oa()),w)
w=y.L
J.aJ(q,"click",i.B(i.gru(),w,w))
J.aJ(l,"click",i.B(i.grw(),w,w))
w=i.d
i.dy=new K.nj(y.y.a(w.a.M(C.aa,w.b)))},
A:function(){var x,w,v=this,u=v.a,t=v.d.f===0
if(t)v.f.C()
if(t)v.x.d=!0
if(t)v.x.C()
if(t)v.z.c=!0
if(t)v.z.C()
v.ch.sL(u.b!=null)
x=v.cy
w=u.a.length
x.sL(w!==0)
x=v.dx
w=u.c
x.sL(w!=null&&J.eb(w))
v.Q.G()
v.cx.G()
v.db.G()
v.e.p()
v.r.p()
v.y.p()},
I:function(){var x=this
x.Q.F()
x.cx.F()
x.db.F()
x.e.v()
x.r.v()
x.y.v()},
rv:function(d){this.a.toString
window.location.href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
rz:function(d){this.a.toString
window.location.href="https://github.com/Stevertus/tekPack"}}
K.qQ.prototype={
q:function(){var x,w,v=this,u=document,t=u.createElement("div")
y.f.a(t)
v.E(t,"video")
v.k(t)
x=y.Y.a(T.a4(u,t,"iframe"))
v.d=x
T.e(x,"allow","autoplay; encrypted-media")
T.e(v.d,"allowfullscreen","")
T.e(v.d,"frameborder","0")
v.k(v.d)
x=y.A.a(v.a.c).dy
w=y.z
v.sqL(A.Mm(x.guC(x),w,w))
v.K(t)},
A:function(){var x=this,w=C.b.t("https://www.youtube.com/embed/",x.a.a.b)+"?rel=0&amp;controls=0&amp;showinfo=0",v=x.c.$1(w)
w=x.b
if(w==null?v!=null:w!==v){x.d.src=$.bV.c.jn(v)
x.b=v}},
sqL:function(d){this.c=y.R.a(d)}}
K.qR.prototype={
q:function(){var x,w=this,v=document.createElement("div")
y.f.a(v)
w.E(v,"grid")
w.k(v)
x=w.b=new V.E(1,w,T.Z(v))
w.c=new R.ct(x,new D.K(x,K.O7()))
w.K(v)},
A:function(){var x=this,w=x.a.a.a,v=x.d
if(v!==w){x.c.sbG(w)
x.d=w}x.c.aH()
x.b.G()},
I:function(){this.b.F()}}
K.qS.prototype={
q:function(){var x,w,v=this,u=document,t=u.createElement("div"),s=y.f
s.a(t)
v.E(t,"item")
v.k(t)
x=T.a4(u,t,"h5")
v.u(x)
x.appendChild(v.b.b)
w=T.a4(u,t,"img")
v.y=w
T.e(w,"alt","")
v.E(s.a(v.y),"icon")
v.u(v.y)
s=T.U(u,t)
v.z=s
v.E(s,"crafting-grid")
v.k(v.z)
s=v.c=new V.E(5,v,T.Z(v.z))
v.d=new R.ct(s,new D.K(s,K.O8()))
s=T.U(u,t)
v.Q=s
v.E(s,"description")
v.k(v.Q)
v.K(t)},
A:function(){var x,w,v,u=this,t=y.v.a(u.a.f.i(0,"$implicit")),s=t.e,r=u.r
if(r==null?s!=null:r!==s){u.d.sbG(s)
u.r=s}u.d.aH()
u.c.G()
r=t.a
if(r==null)r=""
u.b.a1(r)
x=t.d
r=u.e
if(r!=x){u.y.src=$.bV.c.bX(x)
u.e=x}w=!H.a8(t.c)
r=u.f
if(r!==w){T.h1(u.z,"crafting-blue",w)
u.f=w}v=t.b
r=u.x
if(r!=v){u.Q.innerHTML=$.bV.c.mA(v)
u.x=v}},
I:function(){this.c.F()}}
K.l8.prototype={
q:function(){var x,w=this,v=document.createElement("div")
y.f.a(v)
w.E(v,"crafting-item")
w.k(v)
x=w.b=new V.E(1,w,T.Z(v))
w.c=new K.P(new D.K(x,K.O9()),x)
w.K(v)},
A:function(){var x=H.i(this.a.f.i(0,"$implicit"))
this.c.sL(x!=null)
this.b.G()},
I:function(){this.b.F()}}
K.qT.prototype={
q:function(){var x=this,w=document.createElement("img")
x.c=w
x.u(w)
x.K(x.c)},
A:function(){var x=this,w=H.i(y.S.a(x.a.c).a.f.i(0,"$implicit")),v=x.b
if(v!=w){x.c.src=$.bV.c.bX(w)
x.b=w}}}
K.qU.prototype={
q:function(){var x,w,v,u=this,t=E.ib(u,0)
u.b=t
x=t.c
u.k(x)
u.c=new V.dj(x)
w=document.createElement("h2")
T.e(w,"id","changelog")
u.u(w)
T.Q(w,"Changelog")
t=u.d=new V.E(3,u,T.aS())
u.e=new R.ct(t,new D.K(t,K.Ob()))
v=y.M
u.b.D(u.c,H.a([H.a([w,t],v)],v))
u.K(x)},
A:function(){var x,w=this,v=w.a,u=v.ch
if(u===0)w.c.C()
x=J.AK(J.AF(v.a.c))
v=w.f
if(v!==x){w.e.sbG(x)
w.f=x}w.e.aH()
w.d.G()
w.b.p()},
I:function(){this.d.F()
this.b.v()}}
K.qV.prototype={
q:function(){var x,w=this,v=document,u=v.createElement("div"),t=y.f
t.a(u)
w.k(u)
x=T.a4(v,u,"h4")
w.u(x)
x.appendChild(w.b.b)
t=t.a(T.a4(v,u,"ul"))
w.k(t)
t=w.c=new V.E(4,w,T.Z(t))
w.d=new R.ct(t,new D.K(t,K.Oc()))
w.K(u)},
A:function(){var x=this,w=x.a,v=w.f.i(0,"$implicit"),u=J.T(w.a.c,v)
w=x.e
if(w==null?u!=null:w!==u){w=x.d
y.t.a(u)
w.sbG(u)
x.e=u}x.d.aH()
x.c.G()
x.b.a1(H.i(O.bJ(v)))},
I:function(){this.c.F()}}
K.qW.prototype={
q:function(){var x=document.createElement("li")
this.u(x)
x.appendChild(this.b.b)
this.K(x)},
A:function(){this.b.a1(H.i(O.bJ(this.a.f.i(0,"$implicit"))))}}
K.qX.prototype={
q:function(){var x,w,v=this,u=new K.id(E.az(v,0,3)),t=$.Ej
if(t==null)t=$.Ej=O.ay($.Nu,null)
u.b=t
x=document.createElement("tekpack")
u.c=y.f.a(x)
v.sbM(u)
w=v.b.c
v.sbL(new X.aQ(H.a([],y.D)))
v.K(w)},
A:function(){var x=this.d.e
if(x===0)this.a.C()
this.b.p()}}
K.nj.prototype={
am:function(d,e){H.i(e)
this.a.toString
return new R.hU(e==null?"":e)}}
var z=a.updateTypes(["l<~>*(q*,k*)","~(@)","@(@)","a7<aQ*>*()"])
A.Ap.prototype={
$1:function(d){var x,w
this.c.h("0*").a(d)
x=this.a
if(!x.b){w=x.c
w=w==null?d!=null:w!==d}else w=!0
if(w){x.b=!1
x.c=d
x.a=this.b.$1(d)}return x.a},
$S:function(){return this.d.h("@<0>").J(this.c).h("1*(2*)")}}
X.xI.prototype={
$1:function(d){var x,w,v,u="items",t=this.a,s=J.a2(d)
t.b=H.i(s.i(d,"video"))
x=s.i(d,"changes")
if(x==null){x=y.z
x=P.Y(x,x)}w=y.h
t.c=w.a(x)
if(s.i(d,u)!=null){t=t.a
v=0
while(!0){x=H.zj(J.aT(s.i(d,u)))
if(typeof x!=="number")return H.x(x)
if(!(v<x))break
C.a.j(t,X.Ip(w.a(J.T(s.i(d,u),v))));++v}}},
$S:4}
X.xJ.prototype={
$1:function(d){return P.cF(d)},
$S:1}
X.xG.prototype={
$1:function(d){return J.ac(J.T(d,"slot"),this.a)},
$S:34}
X.xH.prototype={
$0:function(){return null},
$S:2};(function installTearOffs(){var x=a._static_2,w=a._static_0,v=a._instance_1u,u=a._instance_1i
x(K,"O5","Px",0)
x(K,"O6","Py",0)
x(K,"O7","Pz",0)
x(K,"O8","PA",0)
x(K,"O9","PB",0)
x(K,"Oa","PC",0)
x(K,"Ob","PD",0)
x(K,"Oc","PE",0)
w(K,"Od","PF",3)
var t
v(t=K.id.prototype,"gru","rv",1)
v(t,"grw","rz",1)
u(K.nj.prototype,"guC","am",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(H.bW,[A.Ap,X.xI,X.xJ,X.xG,X.xH])
x(P.u,[X.aQ,X.jP,K.nj])
w(K.id,E.O)
x(E.l,[K.qQ,K.qR,K.qS,K.l8,K.qT,K.qU,K.qV,K.qW])
w(K.qX,G.a7)})()
H.pX(b.typeUniverse,JSON.parse('{"rG":"F","uD":"F","rX":"cS","rH":"n","wp":"n","xe":"n","rL":"W","rM":"W","tD":"aB","uW":"aB","yY":"cb","rY":"L","vV":"L","yw":"H","ye":"co","wF":"c2","yc":"bD","tH":"cB","vy":"dr","vx":"dq","u0":"aA","u5":"bH","to":"ce","w2":"b9","id":{"O":["aQ*"],"q":[],"r":[],"t":[],"O.T":"aQ*"},"qQ":{"l":["aQ*"],"q":[],"z":[],"r":[],"J":[],"t":[],"A":[],"l.T":"aQ*"},"qR":{"l":["aQ*"],"q":[],"z":[],"r":[],"J":[],"t":[],"A":[],"l.T":"aQ*"},"qS":{"l":["aQ*"],"q":[],"z":[],"r":[],"J":[],"t":[],"A":[],"l.T":"aQ*"},"l8":{"l":["aQ*"],"q":[],"z":[],"r":[],"J":[],"t":[],"A":[],"l.T":"aQ*"},"qT":{"l":["aQ*"],"q":[],"z":[],"r":[],"J":[],"t":[],"A":[],"l.T":"aQ*"},"qU":{"l":["aQ*"],"q":[],"z":[],"r":[],"J":[],"t":[],"A":[],"l.T":"aQ*"},"qV":{"l":["aQ*"],"q":[],"z":[],"r":[],"J":[],"t":[],"A":[],"l.T":"aQ*"},"qW":{"l":["aQ*"],"q":[],"z":[],"r":[],"J":[],"t":[],"A":[],"l.T":"aQ*"},"qX":{"a7":["aQ*"],"z":[],"r":[],"t":[],"A":[],"a7.T":"aQ*"}}'))
0
var y=(function rtii(){var x=H.aI
return{N:x("G<H*>"),M:x("G<u*>"),i:x("G<f*>"),D:x("G<jP*>"),P:x("y"),z:x("@"),y:x("m1*"),L:x("F*"),f:x("L*"),Y:x("fF*"),t:x("o<u*>*"),w:x("p<@>*"),G:x("p<f*>*"),h:x("N<@,@>*"),F:x("q*"),X:x("f*"),v:x("jP*"),Q:x("aQ*"),A:x("id*"),S:x("l8*"),R:x("@(@)*")}})();(function constants(){C.c3=new D.aG("tekpack",K.Od(),H.aI("aG<aQ*>"))})();(function staticFields(){$.NS=['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}']
$.Ej=null
$.Nu=[$.NS]})()}
$__dart_deferred_initializers__["5CP/MIfI3W9FzFHQVRvg03I+gSM="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_1.part.js.map
