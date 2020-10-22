self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G={
A9:function(d){var x=0,w=P.b9(y.X),v,u,t,s,r
var $async$A9=P.ba(function(e,f){if(e===1)return P.b6(f,w)
while(true)switch(x){case 0:x=3
return P.aW(G.C0(C.b.al(d,"http")?d:"https://stevertus.com/"+d,null),$async$A9)
case 3:u=f
t=u.e
s=B.rX(J.V(U.rQ(t).c.a,"charset"))
r=u.x
s.aM(0,r)
s=u.b
if(s!==200)throw H.b("Request failed!")
v=B.rX(J.V(U.rQ(t).c.a,"charset")).aM(0,r)
x=1
break
case 1:return P.b7(v,w)}})
return P.b8($async$A9,w)},
A7:function(d){var x=0,w=P.b9(y.z),v,u
var $async$A7=P.ba(function(e,f){if(e===1)return P.b6(f,w)
while(true)switch(x){case 0:u=C.o
x=3
return P.aW(G.A9(d),$async$A7)
case 3:v=u.aM(0,f)
x=1
break
case 1:return P.b7(v,w)}})
return P.b8($async$A7,w)}},Y,R,K={
Iu:function(){return C.c4},
PA:function(d,e){return new K.rf(E.M(y.F.a(d),H.m(e),y.Q))},
PB:function(d,e){return new K.rg(E.M(y.F.a(d),H.m(e),y.Q))},
PC:function(d,e){y.F.a(d)
H.m(e)
return new K.rh(N.af(),E.M(d,e,y.Q))},
PD:function(d,e){return new K.ly(E.M(y.F.a(d),H.m(e),y.Q))},
PE:function(d,e){return new K.ri(E.M(y.F.a(d),H.m(e),y.Q))},
PF:function(d,e){return new K.rj(E.M(y.F.a(d),H.m(e),y.Q))},
PG:function(d,e){y.F.a(d)
H.m(e)
return new K.rk(N.af(),E.M(d,e,y.Q))},
PH:function(d,e){y.F.a(d)
H.m(e)
return new K.rl(N.af(),E.M(d,e,y.Q))},
PI:function(){return new K.rm(new G.cS())},
iD:function iD(d){var _=this
_.c=_.b=_.a=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null
_.d=d},
rf:function rf(d){var _=this
_.d=_.c=_.b=null
_.a=d},
rg:function rg(d){var _=this
_.d=_.c=_.b=null
_.a=d},
rh:function rh(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
ly:function ly(d){this.c=this.b=null
this.a=d},
ri:function ri(d){this.c=this.b=null
this.a=d},
rj:function rj(d){var _=this
_.f=_.e=_.d=_.c=_.b=null
_.a=d},
rk:function rk(d,e){var _=this
_.b=d
_.e=_.d=_.c=null
_.a=e},
rl:function rl(d,e){this.b=d
this.a=e},
rm:function rm(d){var _=this
_.c=_.b=_.a=null
_.d=d},
nJ:function nJ(d){this.a=d}},X={
It:function(d){var x=new X.ke()
x.ns(d)
return x},
aR:function aR(d){this.a=d
this.c=this.b=null},
xP:function xP(d){this.a=d},
xQ:function xQ(){},
ke:function ke(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
xN:function xN(d){this.a=d},
xO:function xO(){}},N,E,M,Q,D,O,V,A={
Mq:function(d,e,f){var x={}
x.a=null
x.b=!0
x.c=null
return new A.Au(x,d,f,e)},
Au:function Au(d,e,f,g){var _=this
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
X.aR.prototype={
C:function(){G.A7("tekpack.json").aZ(new X.xP(this),y.P).is(new X.xQ())}}
X.ke.prototype={
ns:function(d){var x,w,v,u,t,s=this,r="texture",q="isNotBlue",p=J.a2(d),o=p.i(d,"name")
s.a=H.j(o==null?"":o)
o=p.i(d,"description")
o=o==null?null:J.H8(o,"\n","<br>")
s.b=o==null?"":o
o=p.i(d,r)
o=H.j(o==null?"":o)
s.d=o
if(C.b.al(o,"/"))s.d="assets/tekpack"+o
s.c=H.bI(p.i(d,q)!=null&&p.i(d,q))
s.stN(H.a([],y.i))
for(o=y.w,x=y.h,w=0;w<=8;++w){v=x.a(J.GX(o.a(p.i(d,"crafting")),new X.xN(w),new X.xO()))
if(v!=null&&J.V(v,r)!=null){u=H.j(J.V(v,r))
if(J.Cy(u,"/"))u="assets/tekpack"+u}else u=null
t=s.e;(t&&C.a).j(t,u)}},
stN:function(d){this.e=y.G.a(d)}}
K.iD.prototype={
q:function(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="fluidBtn",g="style",f=i.ac(),e=document,d=T.W(e,f)
i.E(d,"container")
i.k(d)
x=T.a8(e,d,"img")
T.e(x,"alt","tekpack")
w=y.f
w.a(x)
i.E(x,"logo")
T.e(x,"src","assets/tekpack/logo.png")
i.v(x)
v=T.W(e,d)
i.E(v,"floatingCard")
i.k(v)
u=E.iB(i,3)
i.e=u
t=u.c
v.appendChild(t)
i.k(t)
i.f=new V.dn(t)
s=e.createElement("h2")
i.v(s)
T.Q(s,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
r=T.a8(e,s,"a")
T.e(r,"routerLink","/mcscript")
w.a(r)
i.k(r)
T.Q(r,"mcScript")
T.Q(s,".")
i.v(T.a8(e,s,"br"))
T.Q(s," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
w=G.bz(i,11)
i.r=w
q=w.c
T.e(q,h,"")
T.e(q,"highlight","")
T.e(q,g,"width: 50%;height: 60px;line-height: 30px")
i.k(q)
i.x=new Z.b0(q)
p=T.ao("Get it via ")
o=e.createElement("img")
T.e(o,"alt","dmanager")
T.e(o,"src","assets/dManager-icon.ico")
T.e(o,g,"height:25px;margin-left:5px")
i.v(o)
w=y.N
u=y.M
i.r.D(i.x,H.a([H.a([p,o],w)],u))
n=T.ao(" ")
m=G.bz(i,15)
i.y=m
l=m.c
T.e(l,h,"")
T.e(l,"secondary","")
i.k(l)
i.z=new Z.b0(l)
k=T.ao("Opensource on ")
j=e.createElement("img")
T.e(j,"alt","")
T.e(j,"src","assets/gitHub_icon.svg")
T.e(j,g,"height:25px")
i.v(j)
i.y.D(i.z,H.a([H.a([k,j],w)],u))
i.e.D(i.f,H.a([H.a([s,q,n,l],w)],u))
w=i.Q=new V.I(18,i,T.Y(d))
i.ch=new K.P(new D.L(w,K.O8()),w)
w=i.cx=new V.I(19,i,T.Y(d))
i.cy=new K.P(new D.L(w,K.O9()),w)
w=i.db=new V.I(20,i,T.Y(d))
i.dx=new K.P(new D.L(w,K.Od()),w)
w=y.L
J.aJ(q,"click",i.B(i.grt(),w,w))
J.aJ(l,"click",i.B(i.grv(),w,w))
w=i.d
i.dy=new K.nJ(y.y.a(w.a.M(C.ab,w.b)))},
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
x.sL(w!=null&&J.ec(w))
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
x.e.u()
x.r.u()
x.y.u()},
ru:function(d){this.a.toString
window.location.href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
rw:function(d){this.a.toString
window.location.href="https://github.com/Stevertus/tekPack"}}
K.rf.prototype={
q:function(){var x,w,v=this,u=document,t=u.createElement("div")
y.f.a(t)
v.E(t,"video")
v.k(t)
x=y.Y.a(T.a8(u,t,"iframe"))
v.d=x
T.e(x,"allow","autoplay; encrypted-media")
T.e(v.d,"allowfullscreen","")
T.e(v.d,"frameborder","0")
v.k(v.d)
x=y.A.a(v.a.c).dy
w=y.z
v.sqK(A.Mq(x.guB(x),w,w))
v.K(t)},
A:function(){var x=this,w=C.b.t("https://www.youtube.com/embed/",x.a.a.b)+"?rel=0&amp;controls=0&amp;showinfo=0",v=x.c.$1(w)
w=x.b
if(w==null?v!=null:w!==v){x.d.src=$.c0.c.jm(v)
x.b=v}},
sqK:function(d){this.c=y.R.a(d)}}
K.rg.prototype={
q:function(){var x,w=this,v=document.createElement("div")
y.f.a(v)
w.E(v,"grid")
w.k(v)
x=w.b=new V.I(1,w,T.Y(v))
w.c=new R.cy(x,new D.L(x,K.Oa()))
w.K(v)},
A:function(){var x=this,w=x.a.a.a,v=x.d
if(v!==w){x.c.sbG(w)
x.d=w}x.c.aH()
x.b.G()},
I:function(){this.b.F()}}
K.rh.prototype={
q:function(){var x,w,v=this,u=document,t=u.createElement("div"),s=y.f
s.a(t)
v.E(t,"item")
v.k(t)
x=T.a8(u,t,"h5")
v.v(x)
x.appendChild(v.b.b)
w=T.a8(u,t,"img")
v.y=w
T.e(w,"alt","")
v.E(s.a(v.y),"icon")
v.v(v.y)
s=T.W(u,t)
v.z=s
v.E(s,"crafting-grid")
v.k(v.z)
s=v.c=new V.I(5,v,T.Y(v.z))
v.d=new R.cy(s,new D.L(s,K.Ob()))
s=T.W(u,t)
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
if(r!=x){u.y.src=$.c0.c.bX(x)
u.e=x}w=!H.a7(t.c)
r=u.f
if(r!==w){T.hq(u.z,"crafting-blue",w)
u.f=w}v=t.b
r=u.x
if(r!=v){u.Q.innerHTML=$.c0.c.mA(v)
u.x=v}},
I:function(){this.c.F()}}
K.ly.prototype={
q:function(){var x,w=this,v=document.createElement("div")
y.f.a(v)
w.E(v,"crafting-item")
w.k(v)
x=w.b=new V.I(1,w,T.Y(v))
w.c=new K.P(new D.L(x,K.Oc()),x)
w.K(v)},
A:function(){var x=H.j(this.a.f.i(0,"$implicit"))
this.c.sL(x!=null)
this.b.G()},
I:function(){this.b.F()}}
K.ri.prototype={
q:function(){var x=this,w=document.createElement("img")
x.c=w
x.v(w)
x.K(x.c)},
A:function(){var x=this,w=H.j(y.S.a(x.a.c).a.f.i(0,"$implicit")),v=x.b
if(v!=w){x.c.src=$.c0.c.bX(w)
x.b=w}}}
K.rj.prototype={
q:function(){var x,w,v,u=this,t=E.iB(u,0)
u.b=t
x=t.c
u.k(x)
u.c=new V.dn(x)
w=document.createElement("h2")
T.e(w,"id","changelog")
u.v(w)
T.Q(w,"Changelog")
t=u.d=new V.I(3,u,T.aT())
u.e=new R.cy(t,new D.L(t,K.Oe()))
v=y.M
u.b.D(u.c,H.a([H.a([w,t],v)],v))
u.K(x)},
A:function(){var x,w=this,v=w.a,u=v.ch
if(u===0)w.c.C()
x=J.AP(J.AK(v.a.c))
v=w.f
if(v!==x){w.e.sbG(x)
w.f=x}w.e.aH()
w.d.G()
w.b.p()},
I:function(){this.d.F()
this.b.u()}}
K.rk.prototype={
q:function(){var x,w=this,v=document,u=v.createElement("div"),t=y.f
t.a(u)
w.k(u)
x=T.a8(v,u,"h4")
w.v(x)
x.appendChild(w.b.b)
t=t.a(T.a8(v,u,"ul"))
w.k(t)
t=w.c=new V.I(4,w,T.Y(t))
w.d=new R.cy(t,new D.L(t,K.Of()))
w.K(u)},
A:function(){var x=this,w=x.a,v=w.f.i(0,"$implicit"),u=J.V(w.a.c,v)
w=x.e
if(w==null?u!=null:w!==u){w=x.d
y.t.a(u)
w.sbG(u)
x.e=u}x.d.aH()
x.c.G()
x.b.a1(H.j(O.bN(v)))},
I:function(){this.c.F()}}
K.rl.prototype={
q:function(){var x=document.createElement("li")
this.v(x)
x.appendChild(this.b.b)
this.K(x)},
A:function(){this.b.a1(H.j(O.bN(this.a.f.i(0,"$implicit"))))}}
K.rm.prototype={
q:function(){var x,w,v=this,u=new K.iD(E.aC(v,0,3)),t=$.El
if(t==null)t=$.El=O.aD($.Nx,null)
u.b=t
x=document.createElement("tekpack")
u.c=y.f.a(x)
v.sbM(u)
w=v.b.c
v.sbL(new X.aR(H.a([],y.D)))
v.K(w)},
A:function(){var x=this.d.e
if(x===0)this.a.C()
this.b.p()}}
K.nJ.prototype={
am:function(d,e){H.j(e)
this.a.toString
return new R.ii(e==null?"":e)}}
var z=a.updateTypes(["l<~>*(q*,i*)","~(@)","@(@)","a4<aR*>*()"])
A.Au.prototype={
$1:function(d){var x,w
this.c.h("0*").a(d)
x=this.a
if(!x.b){w=x.c
w=w==null?d!=null:w!==d}else w=!0
if(w){x.b=!1
x.c=d
x.a=this.b.$1(d)}return x.a},
$S:function(){return this.d.h("@<0>").J(this.c).h("1*(2*)")}}
X.xP.prototype={
$1:function(d){var x,w,v,u="items",t=this.a,s=J.a2(d)
t.b=H.j(s.i(d,"video"))
x=s.i(d,"changes")
if(x==null){x=y.z
x=P.X(x,x)}w=y.h
t.c=w.a(x)
if(s.i(d,u)!=null){t=t.a
v=0
while(!0){x=H.zm(J.aU(s.i(d,u)))
if(typeof x!=="number")return H.x(x)
if(!(v<x))break
C.a.j(t,X.It(w.a(J.V(s.i(d,u),v))));++v}}},
$S:4}
X.xQ.prototype={
$1:function(d){return P.cI(d)},
$S:3}
X.xN.prototype={
$1:function(d){return J.ac(J.V(d,"slot"),this.a)},
$S:32}
X.xO.prototype={
$0:function(){return null},
$S:1};(function installTearOffs(){var x=a._static_2,w=a._static_0,v=a._instance_1u,u=a._instance_1i
x(K,"O8","PA",0)
x(K,"O9","PB",0)
x(K,"Oa","PC",0)
x(K,"Ob","PD",0)
x(K,"Oc","PE",0)
x(K,"Od","PF",0)
x(K,"Oe","PG",0)
x(K,"Of","PH",0)
w(K,"Og","PI",3)
var t
v(t=K.iD.prototype,"grt","ru",1)
v(t,"grv","rw",1)
u(K.nJ.prototype,"guB","am",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(H.bK,[A.Au,X.xP,X.xQ,X.xN,X.xO])
x(P.r,[X.aR,X.ke,K.nJ])
w(K.iD,E.O)
x(E.l,[K.rf,K.rg,K.rh,K.ly,K.ri,K.rj,K.rk,K.rl])
w(K.rm,G.a4)})()
H.fd(b.typeUniverse,JSON.parse('{"fl":"B","fK":"B","fr":"c1","fm":"n","h1":"n","h5":"n","fo":"T","fp":"T","fx":"al","fP":"al","hl":"bP","fs":"E","fX":"E","hh":"H","hg":"bT","h2":"bL","he":"bf","fz":"bX","fT":"cg","fS":"cf","fC":"av","fE":"bh","fv":"bG","fY":"aV","iD":{"O":["aR*"],"q":[],"t":[],"u":[],"O.T":"aR*"},"rf":{"l":["aR*"],"q":[],"A":[],"t":[],"K":[],"u":[],"C":[],"l.T":"aR*"},"rg":{"l":["aR*"],"q":[],"A":[],"t":[],"K":[],"u":[],"C":[],"l.T":"aR*"},"rh":{"l":["aR*"],"q":[],"A":[],"t":[],"K":[],"u":[],"C":[],"l.T":"aR*"},"ly":{"l":["aR*"],"q":[],"A":[],"t":[],"K":[],"u":[],"C":[],"l.T":"aR*"},"ri":{"l":["aR*"],"q":[],"A":[],"t":[],"K":[],"u":[],"C":[],"l.T":"aR*"},"rj":{"l":["aR*"],"q":[],"A":[],"t":[],"K":[],"u":[],"C":[],"l.T":"aR*"},"rk":{"l":["aR*"],"q":[],"A":[],"t":[],"K":[],"u":[],"C":[],"l.T":"aR*"},"rl":{"l":["aR*"],"q":[],"A":[],"t":[],"K":[],"u":[],"C":[],"l.T":"aR*"},"rm":{"a4":["aR*"],"A":[],"t":[],"u":[],"C":[],"a4.T":"aR*"}}'))
0
var y=(function rtii(){var x=H.ah
return{N:x("y<H*>"),M:x("y<r*>"),i:x("y<f*>"),D:x("y<ke*>"),P:x("z"),z:x("@"),y:x("mr*"),L:x("B*"),f:x("E*"),Y:x("fV*"),t:x("p<r*>*"),w:x("o<@>*"),G:x("o<f*>*"),h:x("N<@,@>*"),F:x("q*"),X:x("f*"),v:x("ke*"),Q:x("aR*"),A:x("iD*"),S:x("ly*"),R:x("@(@)*")}})();(function constants(){C.c4=new D.aA("tekpack",K.Og(),H.ah("aA<aR*>"))})();(function staticFields(){$.NV=['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}']
$.El=null
$.Nx=[$.NV]})()}
$__dart_deferred_initializers__["I/pteiO4r+cdjcxEvRW1HYzyNOk="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_1.part.js.map
