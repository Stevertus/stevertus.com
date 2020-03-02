self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G={
yH:function(d){var y=0,x=P.b2(P.d),w,v,u,t,s
var $async$yH=P.b3(function(e,f){if(e===1)return P.b_(f,x)
while(true)switch(y){case 0:y=3
return P.aS(G.Ad(C.b.af(d,"http")?d:"https://stevertus.com/"+d,null),$async$yH)
case 3:v=f
u=v.e
t=B.ma(J.R(U.m4(u).c.a,"charset"))
s=v.x
t.aE(0,s)
t=v.b
if(t!==200)throw H.e("Request failed!")
w=B.ma(J.R(U.m4(u).c.a,"charset")).aE(0,s)
y=1
break
case 1:return P.b0(w,x)}})
return P.b1($async$yH,x)},
yF:function(d){var y=0,x=P.b2(null),w,v
var $async$yF=P.b3(function(e,f){if(e===1)return P.b_(f,x)
while(true)switch(y){case 0:v=C.i
y=3
return P.aS(G.yH(d),$async$yF)
case 3:w=v.aE(0,f)
y=1
break
case 1:return P.b0(w,x)}})
return P.b1($async$yF,x)}},Y,R,K={
Ga:function(){return C.c5},
Mf:function(d,e){return new K.xt(E.K(H.b(d,"$iE"),H.q(e),X.aR))},
Mg:function(d,e){return new K.xu(E.K(H.b(d,"$iE"),H.q(e),X.aR))},
Mh:function(d,e){H.b(d,"$iE")
H.q(e)
return new K.xv(N.aw(),E.K(d,e,X.aR))},
Mi:function(d,e){return new K.lQ(E.K(H.b(d,"$iE"),H.q(e),X.aR))},
Mj:function(d,e){return new K.xw(E.K(H.b(d,"$iE"),H.q(e),X.aR))},
Mk:function(d,e){return new K.xx(E.K(H.b(d,"$iE"),H.q(e),X.aR))},
Ml:function(d,e){H.b(d,"$iE")
H.q(e)
return new K.xy(N.aw(),E.K(d,e,X.aR))},
Mm:function(d,e){H.b(d,"$iE")
H.q(e)
return new K.xz(N.aw(),E.K(d,e,X.aR))},
Mn:function(d){return new K.xA(d,new G.cO())},
iv:function iv(d){var _=this
_.c=_.b=_.a=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null
_.d=d},
xt:function xt(d){var _=this
_.d=_.c=_.b=null
_.a=d},
xu:function xu(d){var _=this
_.d=_.c=_.b=null
_.a=d},
xv:function xv(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
lQ:function lQ(d){this.c=this.b=null
this.a=d},
xw:function xw(d){this.c=this.b=null
this.a=d},
xx:function xx(d){var _=this
_.f=_.e=_.d=_.c=_.b=null
_.a=d},
xy:function xy(d,e){var _=this
_.b=d
_.e=_.d=_.c=null
_.a=e},
xz:function xz(d,e){this.b=d
this.a=e},
xA:function xA(d,e){var _=this
_.b=_.a=null
_.c=d
_.d=e},
k8:function k8(d){this.a=d}},X={
G9:function(d){var y=new X.ik()
y.mp(d)
return y},
aR:function aR(d){this.a=d
this.c=this.b=null},
tM:function tM(d){this.a=d},
tN:function tN(){},
ik:function ik(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
tK:function tK(d){this.a=d},
tL:function tL(){}},S,N,E,M,Q,D,L,O,V,B,A={
Jh:function(d,e,f){var y={}
y.a=null
y.b=!0
y.c=null
return new A.z1(y,d,f,e)},
z1:function z1(d,e,f,g){var _=this
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
X.aR.prototype={
D:function(){G.yF("tekpack.json").aN(new X.tM(this),P.z).hG(new X.tN())}}
X.ik.prototype={
mp:function(d){var y,x,w,v=this,u="texture",t="isNotBlue",s=J.a2(d),r=s.h(d,"name")
v.a=H.p(r==null?"":r)
r=s.h(d,"description")
r=r==null?null:J.F_(r,"\n","<br>")
v.b=r==null?"":r
r=s.h(d,u)
r=H.p(r==null?"":r)
v.d=r
if(C.b.af(r,"/"))v.d="assets/tekpack"+r
v.c=H.bD(s.h(d,t)!=null&&s.h(d,t))
v.srg(H.c([],[P.d]))
for(y=0;y<=8;++y){x=H.b(J.EQ(H.yO(s.h(d,"crafting")),new X.tK(y),new X.tL()),"$ir")
if(x!=null&&J.R(x,u)!=null){w=H.p(J.R(x,u))
if(J.ze(w,"/"))w="assets/tekpack"+w}else w=null
r=v.e;(r&&C.a).i(r,w)}},
srg:function(d){this.e=H.k(d,"$if",[P.d],"$af")}}
K.iv.prototype={
p:function(){var y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="fluidBtn",h="style",g=j.a9(),f=document,e=T.V(f,g)
j.B(e,"container")
j.k(e)
y=T.a5(f,e,"img")
T.j(y,"alt","tekpack")
H.b(y,"$iv")
j.B(y,"logo")
T.j(y,"src","assets/tekpack/logo.png")
j.q(y)
x=T.V(f,e)
j.B(x,"floatingCard")
j.k(x)
w=E.it(j,3)
j.e=w
v=w.c
x.appendChild(v)
j.k(v)
j.f=new V.dE(v)
u=f.createElement("h2")
j.q(u)
T.O(u,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
t=T.a5(f,u,"a")
T.j(t,"routerLink","/mcscript")
H.b(t,"$iv")
j.k(t)
T.O(t,"mcScript")
T.O(u,".")
j.q(T.a5(f,u,"br"))
T.O(u," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
w=G.bB(j,11)
j.r=w
s=w.c
T.j(s,i,"")
T.j(s,"highlight","")
T.j(s,h,"width: 50%;height: 60px;line-height: 30px")
j.k(s)
j.x=new Z.be(s)
r=T.ao("Get it via ")
q=f.createElement("img")
T.j(q,"alt","dmanager")
T.j(q,"src","assets/dManager-icon.ico")
T.j(q,h,"height:25px;margin-left:5px")
j.q(q)
w=[W.T]
p=[P.o]
j.r.G(j.x,H.c([H.c([r,q],w)],p))
o=T.ao(" ")
n=G.bB(j,15)
j.y=n
m=n.c
T.j(m,i,"")
T.j(m,"secondary","")
j.k(m)
j.z=new Z.be(m)
l=T.ao("Opensource on ")
k=f.createElement("img")
T.j(k,"alt","")
T.j(k,"src","assets/gitHub_icon.svg")
T.j(k,h,"height:25px")
j.q(k)
j.y.G(j.z,H.c([H.c([l,k],w)],p))
j.e.G(j.f,H.c([H.c([u,s,o,m],w)],p))
w=j.Q=new V.G(18,j,T.Y(e))
j.ch=new K.N(new D.J(w,K.KU()),w)
w=j.cx=new V.G(19,j,T.Y(e))
j.cy=new K.N(new D.J(w,K.KV()),w)
w=j.db=new V.G(20,j,T.Y(e))
j.dx=new K.N(new D.J(w,K.KZ()),w)
w=W.A
J.aP(s,"click",j.A(j.gq7(),w,w))
J.aP(m,"click",j.A(j.gq9(),w,w))
w=j.d
j.dy=new K.k8(H.b(w.a.O(C.ab,w.b),"$ifz"))},
w:function(){var y,x,w=this,v=w.a,u=w.d.f===0
if(u)w.f.D()
if(u)w.x.d=!0
if(u)w.x.D()
if(u)w.z.c=!0
if(u)w.z.D()
w.ch.sK(v.b!=null)
y=w.cy
x=v.a.length
y.sK(x!==0)
y=w.dx
x=v.c
y.sK(x!=null&&J.dc(x))
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
y.e.u()
y.r.u()
y.y.u()},
q8:function(d){this.a.toString
window.location.href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
qa:function(d){this.a.toString
window.location.href="https://github.com/Stevertus/tekPack"},
$aa7:function(){return[X.aR]}}
K.xt.prototype={
p:function(){var y,x=this,w=document,v=w.createElement("div")
H.b(v,"$iv")
x.B(v,"video")
x.k(v)
y=H.b(T.a5(w,v,"iframe"),"$ifH")
x.d=y
T.j(y,"allow","autoplay; encrypted-media")
T.j(x.d,"allowfullscreen","")
T.j(x.d,"frameborder","0")
x.k(x.d)
y=H.b(x.a.c,"$iiv").dy
x.sps(A.Jh(y.gt9(y),null,null))
x.I(v)},
w:function(){var y=this,x=C.b.n("https://www.youtube.com/embed/",y.a.a.b)+"?rel=0&amp;controls=0&amp;showinfo=0",w=y.c.$1(x)
x=y.b
if(x==null?w!=null:x!==w){y.d.src=$.bJ.c.iC(w)
y.b=w}},
sps:function(d){this.c=H.m(d,{func:1,args:[,]})},
$aD:function(){return[X.aR]}}
K.xu.prototype={
p:function(){var y,x=this,w=document.createElement("div")
H.b(w,"$iv")
x.B(w,"grid")
x.k(w)
y=x.b=new V.G(1,x,T.Y(w))
x.c=new R.cj(y,new D.J(y,K.KW()))
x.I(w)},
w:function(){var y=this,x=y.a.a.a,w=y.d
if(w!==x){y.c.sbD(x)
y.d=x}y.c.aM()
y.b.F()},
H:function(){this.b.E()},
$aD:function(){return[X.aR]}}
K.xv.prototype={
p:function(){var y,x,w=this,v=document,u=v.createElement("div")
H.b(u,"$iv")
w.B(u,"item")
w.k(u)
y=T.a5(v,u,"h5")
w.q(y)
y.appendChild(w.b.b)
x=T.a5(v,u,"img")
w.y=x
T.j(x,"alt","")
w.B(H.b(w.y,"$iv"),"icon")
w.q(w.y)
x=T.V(v,u)
w.z=x
w.B(x,"crafting-grid")
w.k(w.z)
x=w.c=new V.G(5,w,T.Y(w.z))
w.d=new R.cj(x,new D.J(x,K.KX()))
x=T.V(v,u)
w.Q=x
w.B(x,"description")
w.k(w.Q)
w.I(u)},
w:function(){var y,x,w,v=this,u=H.b(v.a.f.h(0,"$implicit"),"$iik"),t=u.e,s=v.r
if(s==null?t!=null:s!==t){v.d.sbD(t)
v.r=t}v.d.aM()
v.c.F()
s=u.a
if(s==null)s=""
v.b.a5(s)
y=u.d
s=v.e
if(s!=y){v.y.src=$.bJ.c.bH(y)
v.e=y}x=!H.a6(u.c)
s=v.f
if(s!==x){T.fo(v.z,"crafting-blue",x)
v.f=x}w=u.b
s=v.x
if(s!=w){v.Q.innerHTML=$.bJ.c.lG(w)
v.x=w}},
H:function(){this.c.E()},
$aD:function(){return[X.aR]}}
K.lQ.prototype={
p:function(){var y,x=this,w=document.createElement("div")
H.b(w,"$iv")
x.B(w,"crafting-item")
x.k(w)
y=x.b=new V.G(1,x,T.Y(w))
x.c=new K.N(new D.J(y,K.KY()),y)
x.I(w)},
w:function(){var y=H.p(this.a.f.h(0,"$implicit"))
this.c.sK(y!=null)
this.b.F()},
H:function(){this.b.E()},
$aD:function(){return[X.aR]}}
K.xw.prototype={
p:function(){var y=this,x=document.createElement("img")
y.c=x
y.q(x)
y.I(y.c)},
w:function(){var y=this,x=H.p(H.b(y.a.c,"$ilQ").a.f.h(0,"$implicit")),w=y.b
if(w!=x){y.c.src=$.bJ.c.bH(x)
y.b=x}},
$aD:function(){return[X.aR]}}
K.xx.prototype={
p:function(){var y,x,w,v=this,u=E.it(v,0)
v.b=u
y=u.c
v.k(y)
v.c=new V.dE(y)
x=document.createElement("h2")
T.j(x,"id","changelog")
v.q(x)
T.O(x,"Changelog")
u=v.d=new V.G(3,v,T.aO())
v.e=new R.cj(u,new D.J(u,K.L_()))
w=[P.o]
v.b.G(v.c,H.c([H.c([x,u],w)],w))
v.I(y)},
w:function(){var y,x=this,w=x.a,v=w.a
w=w.ch
if(w===0)x.c.D()
w=v.c
v.toString
y=J.F4(J.zc(w))
w=x.f
if(w!==y){x.e.sbD(y)
x.f=y}x.e.aM()
x.d.F()
x.b.t()},
H:function(){this.d.E()
this.b.u()},
$aD:function(){return[X.aR]}}
K.xy.prototype={
p:function(){var y,x,w=this,v=document,u=v.createElement("div")
H.b(u,"$iv")
w.k(u)
y=T.a5(v,u,"h4")
w.q(y)
y.appendChild(w.b.b)
x=H.b(T.a5(v,u,"ul"),"$iv")
w.k(x)
x=w.c=new V.G(4,w,T.Y(x))
w.d=new R.cj(x,new D.J(x,K.L0()))
w.I(u)},
w:function(){var y=this,x=y.a,w=x.f.h(0,"$implicit"),v=J.R(x.a.c,w)
x=y.e
if(x==null?v!=null:x!==v){x=y.d
H.k(v,"$iu",[P.o],"$au")
x.sbD(v)
y.e=v}y.d.aM()
y.c.F()
y.b.a5(H.p(O.c_(w)))},
H:function(){this.c.E()},
$aD:function(){return[X.aR]}}
K.xz.prototype={
p:function(){var y=document.createElement("li")
this.q(y)
y.appendChild(this.b.b)
this.I(y)},
w:function(){this.b.a5(H.p(O.c_(this.a.f.h(0,"$implicit"))))},
$aD:function(){return[X.aR]}}
K.xA.prototype={
p:function(){var y,x,w=this,v=new K.iv(E.ax(w,0,3)),u=$.Ct
if(u==null)u=$.Ct=O.ay($.Kl,null)
v.b=u
y=document.createElement("tekpack")
v.c=H.b(y,"$iv")
w.sbL(v)
x=w.b.c
w.sbK(new X.aR(H.c([],[X.ik])))
w.I(x)},
w:function(){var y=this.d.e
if(y===0)this.a.D()
this.b.t()},
$aah:function(){return[X.aR]}}
K.k8.prototype={
c9:function(d,e){H.p(e)
this.a.toString
return new R.i8(e==null?"":e)}}
var z=a.updateTypes([{func:1,ret:[E.D,-1],args:[A.E,P.t]},{func:1,ret:-1,args:[,]},{func:1,args:[,]},{func:1,ret:[G.ah,X.aR],args:[M.az]}])
A.z1.prototype={
$1:function(d){var y,x
H.w(d,this.c)
y=this.a
if(!y.b){x=y.c
x=x==null?d!=null:x!==d}else x=!0
if(x){y.b=!1
y.c=d
y.a=this.b.$1(d)}return y.a},
$S:function(){return{func:1,ret:this.d,args:[this.c]}}}
X.tM.prototype={
$1:function(d){var y,x,w="items",v=this.a,u=J.a2(d)
v.b=H.p(u.h(d,"video"))
y=u.h(d,"changes")
v.c=H.b(y==null?P.bM():y,"$ir")
if(u.h(d,w)!=null){v=v.a
x=0
while(!0){y=H.Aj(J.aH(u.h(d,w)))
if(typeof y!=="number")return H.x(y)
if(!(x<y))break
C.a.i(v,X.G9(H.b(J.R(u.h(d,w),x),"$ir")));++x}}},
$S:4}
X.tN.prototype={
$1:function(d){return P.dZ(d)},
$S:3}
X.tK.prototype={
$1:function(d){return J.af(J.R(d,"slot"),this.a)},
$S:16}
X.tL.prototype={
$0:function(){return},
$S:1};(function installTearOffs(){var y=a._static_2,x=a._static_1,w=a._instance_1u,v=a._instance_1i
y(K,"KU","Mf",0)
y(K,"KV","Mg",0)
y(K,"KW","Mh",0)
y(K,"KX","Mi",0)
y(K,"KY","Mj",0)
y(K,"KZ","Mk",0)
y(K,"L_","Ml",0)
y(K,"L0","Mm",0)
x(K,"L1","Mn",3)
var u
w(u=K.iv.prototype,"gq7","q8",1)
w(u,"gq9","qa",1)
v(K.k8.prototype,"gt9","c9",2)})();(function inheritance(){var y=a.inheritMany,x=a.inherit
y(H.df,[A.z1,X.tM,X.tN,X.tK,X.tL])
y(P.o,[X.aR,X.ik,K.k8])
x(K.iv,E.a7)
y(E.D,[K.xt,K.xu,K.xv,K.lQ,K.xw,K.xx,K.xy,K.xz])
x(K.xA,G.ah)})();(function constants(){C.c5=new D.aD("tekpack",K.L1(),[X.aR])})();(function staticFields(){$.Ky=['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}']
$.Ct=null
$.Kl=[$.Ky]})()}
$__dart_deferred_initializers__["oYVrRr/juJ9Yaybf90eNni/KVA4="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_1.part.js.map
