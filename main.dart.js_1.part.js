self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G={
Ad:function(d){var x=0,w=P.bd(y.X),v,u,t,s,r
var $async$Ad=P.be(function(e,f){if(e===1)return P.ba(f,w)
while(true)switch(x){case 0:x=3
return P.b1(G.C4(C.b.al(d,"http")?d:"https://stevertus.com/"+d,null),$async$Ad)
case 3:u=f
t=u.e
s=B.rY(J.U(U.rR(t).c.a,"charset"))
r=u.x
s.aM(0,r)
s=u.b
if(s!==200)throw H.b("Request failed!")
v=B.rY(J.U(U.rR(t).c.a,"charset")).aM(0,r)
x=1
break
case 1:return P.bb(v,w)}})
return P.bc($async$Ad,w)},
Ab:function(d){var x=0,w=P.bd(y.z),v,u
var $async$Ab=P.be(function(e,f){if(e===1)return P.ba(f,w)
while(true)switch(x){case 0:u=C.n
x=3
return P.b1(G.Ad(d),$async$Ab)
case 3:v=u.aM(0,f)
x=1
break
case 1:return P.bb(v,w)}})
return P.bc($async$Ab,w)}},Y,R,K={
Iv:function(){return C.c4},
PA:function(d,e){return new K.rg(E.N(y.F.a(d),H.m(e),y.Q))},
PB:function(d,e){return new K.rh(E.N(y.F.a(d),H.m(e),y.Q))},
PC:function(d,e){y.F.a(d)
H.m(e)
return new K.ri(N.ae(),E.N(d,e,y.Q))},
PD:function(d,e){return new K.lE(E.N(y.F.a(d),H.m(e),y.Q))},
PE:function(d,e){return new K.rj(E.N(y.F.a(d),H.m(e),y.Q))},
PF:function(d,e){return new K.rk(E.N(y.F.a(d),H.m(e),y.Q))},
PG:function(d,e){y.F.a(d)
H.m(e)
return new K.rl(N.ae(),E.N(d,e,y.Q))},
PH:function(d,e){y.F.a(d)
H.m(e)
return new K.rm(N.ae(),E.N(d,e,y.Q))},
PI:function(d){return new K.rn(d,new G.d0())},
iJ:function iJ(d){var _=this
_.c=_.b=_.a=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null
_.d=d},
rg:function rg(d){var _=this
_.d=_.c=_.b=null
_.a=d},
rh:function rh(d){var _=this
_.d=_.c=_.b=null
_.a=d},
ri:function ri(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
lE:function lE(d){this.c=this.b=null
this.a=d},
rj:function rj(d){this.c=this.b=null
this.a=d},
rk:function rk(d){var _=this
_.f=_.e=_.d=_.c=_.b=null
_.a=d},
rl:function rl(d,e){var _=this
_.b=d
_.e=_.d=_.c=null
_.a=e},
rm:function rm(d,e){this.b=d
this.a=e},
rn:function rn(d,e){var _=this
_.b=_.a=null
_.c=d
_.d=e},
nM:function nM(d){this.a=d}},X={
Iu:function(d){var x=new X.kj()
x.nj(d)
return x},
aV:function aV(d){this.a=d
this.c=this.b=null},
xU:function xU(d){this.a=d},
xV:function xV(){},
kj:function kj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
xS:function xS(d){this.a=d},
xT:function xT(){}},S,N,E,M,Q,D,L,O,V,B,A={
Mq:function(d,e,f){var x={}
x.a=null
x.b=!0
x.c=null
return new A.Az(x,d,f,e)},
Az:function Az(d,e,f,g){var _=this
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
X.aV.prototype={
C:function(){G.Ab("tekpack.json").aZ(new X.xU(this),y.P).ip(new X.xV())}}
X.kj.prototype={
nj:function(d){var x,w,v,u,t,s=this,r="texture",q="isNotBlue",p=J.a2(d),o=p.i(d,"name")
s.a=H.i(o==null?"":o)
o=p.i(d,"description")
o=o==null?null:J.Hb(o,"\n","<br>")
s.b=o==null?"":o
o=p.i(d,r)
o=H.i(o==null?"":o)
s.d=o
if(C.b.al(o,"/"))s.d="assets/tekpack"+o
s.c=H.bM(p.i(d,q)!=null&&p.i(d,q))
s.stB(H.a([],y.i))
for(o=y.w,x=y.h,w=0;w<=8;++w){v=x.a(J.GZ(o.a(p.i(d,"crafting")),new X.xS(w),new X.xT()))
if(v!=null&&J.U(v,r)!=null){u=H.i(J.U(v,r))
if(J.CC(u,"/"))u="assets/tekpack"+u}else u=null
t=s.e;(t&&C.a).j(t,u)}},
stB:function(d){this.e=y.G.a(d)}}
K.iJ.prototype={
t:function(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="fluidBtn",g="style",f=i.aa(),e=document,d=T.W(e,f)
i.E(d,"container")
i.k(d)
x=T.a9(e,d,"img")
T.e(x,"alt","tekpack")
w=y.f
w.a(x)
i.E(x,"logo")
T.e(x,"src","assets/tekpack/logo.png")
i.v(x)
v=T.W(e,d)
i.E(v,"floatingCard")
i.k(v)
u=E.iH(i,3)
i.e=u
t=u.c
v.appendChild(t)
i.k(t)
i.f=new V.dv(t)
s=e.createElement("h2")
i.v(s)
T.Q(s,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
r=T.a9(e,s,"a")
T.e(r,"routerLink","/mcscript")
w.a(r)
i.k(r)
T.Q(r,"mcScript")
T.Q(s,".")
i.v(T.a9(e,s,"br"))
T.Q(s," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
w=G.bB(i,11)
i.r=w
q=w.c
T.e(q,h,"")
T.e(q,"highlight","")
T.e(q,g,"width: 50%;height: 60px;line-height: 30px")
i.k(q)
i.x=new Z.b6(q)
p=T.am("Get it via ")
o=e.createElement("img")
T.e(o,"alt","dmanager")
T.e(o,"src","assets/dManager-icon.ico")
T.e(o,g,"height:25px;margin-left:5px")
i.v(o)
w=y.N
u=y.M
i.r.D(i.x,H.a([H.a([p,o],w)],u))
n=T.am(" ")
m=G.bB(i,15)
i.y=m
l=m.c
T.e(l,h,"")
T.e(l,"secondary","")
i.k(l)
i.z=new Z.b6(l)
k=T.am("Opensource on ")
j=e.createElement("img")
T.e(j,"alt","")
T.e(j,"src","assets/gitHub_icon.svg")
T.e(j,g,"height:25px")
i.v(j)
i.y.D(i.z,H.a([H.a([k,j],w)],u))
i.e.D(i.f,H.a([H.a([s,q,n,l],w)],u))
w=i.Q=new V.I(18,i,T.X(d))
i.ch=new K.P(new D.M(w,K.O8()),w)
w=i.cx=new V.I(19,i,T.X(d))
i.cy=new K.P(new D.M(w,K.O9()),w)
w=i.db=new V.I(20,i,T.X(d))
i.dx=new K.P(new D.M(w,K.Od()),w)
w=y.L
J.aL(q,"click",i.B(i.grk(),w,w))
J.aL(l,"click",i.B(i.grm(),w,w))
w=i.d
i.dy=new K.nM(y.y.a(w.a.M(C.ac,w.b)))},
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
x.sL(w!=null&&J.ej(w))
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
rl:function(d){this.a.toString
window.location.href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
rn:function(d){this.a.toString
window.location.href="https://github.com/Stevertus/tekPack"}}
K.rg.prototype={
t:function(){var x,w,v=this,u=document,t=u.createElement("div")
y.f.a(t)
v.E(t,"video")
v.k(t)
x=y.Y.a(T.a9(u,t,"iframe"))
v.d=x
T.e(x,"allow","autoplay; encrypted-media")
T.e(v.d,"allowfullscreen","")
T.e(v.d,"frameborder","0")
v.k(v.d)
x=y.A.a(v.a.c).dy
w=y.z
v.sqB(A.Mq(x.gun(x),w,w))
v.K(t)},
A:function(){var x=this,w=C.b.q("https://www.youtube.com/embed/",x.a.a.b)+"?rel=0&amp;controls=0&amp;showinfo=0",v=x.c.$1(w)
w=x.b
if(w==null?v!=null:w!==v){x.d.src=$.c5.c.ji(v)
x.b=v}},
sqB:function(d){this.c=y.R.a(d)}}
K.rh.prototype={
t:function(){var x,w=this,v=document.createElement("div")
y.f.a(v)
w.E(v,"grid")
w.k(v)
x=w.b=new V.I(1,w,T.X(v))
w.c=new R.cF(x,new D.M(x,K.Oa()))
w.K(v)},
A:function(){var x=this,w=x.a.a.a,v=x.d
if(v!==w){x.c.sbG(w)
x.d=w}x.c.aH()
x.b.G()},
I:function(){this.b.F()}}
K.ri.prototype={
t:function(){var x,w,v=this,u=document,t=u.createElement("div"),s=y.f
s.a(t)
v.E(t,"item")
v.k(t)
x=T.a9(u,t,"h5")
v.v(x)
x.appendChild(v.b.b)
w=T.a9(u,t,"img")
v.y=w
T.e(w,"alt","")
v.E(s.a(v.y),"icon")
v.v(v.y)
s=T.W(u,t)
v.z=s
v.E(s,"crafting-grid")
v.k(v.z)
s=v.c=new V.I(5,v,T.X(v.z))
v.d=new R.cF(s,new D.M(s,K.Ob()))
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
u.b.a_(r)
x=t.d
r=u.e
if(r!=x){u.y.src=$.c5.c.bX(x)
u.e=x}w=!H.a8(t.c)
r=u.f
if(r!==w){T.hA(u.z,"crafting-blue",w)
u.f=w}v=t.b
r=u.x
if(r!=v){u.Q.innerHTML=$.c5.c.mt(v)
u.x=v}},
I:function(){this.c.F()}}
K.lE.prototype={
t:function(){var x,w=this,v=document.createElement("div")
y.f.a(v)
w.E(v,"crafting-item")
w.k(v)
x=w.b=new V.I(1,w,T.X(v))
w.c=new K.P(new D.M(x,K.Oc()),x)
w.K(v)},
A:function(){var x=H.i(this.a.f.i(0,"$implicit"))
this.c.sL(x!=null)
this.b.G()},
I:function(){this.b.F()}}
K.rj.prototype={
t:function(){var x=this,w=document.createElement("img")
x.c=w
x.v(w)
x.K(x.c)},
A:function(){var x=this,w=H.i(y.S.a(x.a.c).a.f.i(0,"$implicit")),v=x.b
if(v!=w){x.c.src=$.c5.c.bX(w)
x.b=w}}}
K.rk.prototype={
t:function(){var x,w,v,u=this,t=E.iH(u,0)
u.b=t
x=t.c
u.k(x)
u.c=new V.dv(x)
w=document.createElement("h2")
T.e(w,"id","changelog")
u.v(w)
T.Q(w,"Changelog")
t=u.d=new V.I(3,u,T.aX())
u.e=new R.cF(t,new D.M(t,K.Oe()))
v=y.M
u.b.D(u.c,H.a([H.a([w,t],v)],v))
u.K(x)},
A:function(){var x,w=this,v=w.a,u=v.ch
if(u===0)w.c.C()
x=J.AU(J.AP(v.a.c))
v=w.f
if(v!==x){w.e.sbG(x)
w.f=x}w.e.aH()
w.d.G()
w.b.p()},
I:function(){this.d.F()
this.b.u()}}
K.rl.prototype={
t:function(){var x,w=this,v=document,u=v.createElement("div"),t=y.f
t.a(u)
w.k(u)
x=T.a9(v,u,"h4")
w.v(x)
x.appendChild(w.b.b)
t=t.a(T.a9(v,u,"ul"))
w.k(t)
t=w.c=new V.I(4,w,T.X(t))
w.d=new R.cF(t,new D.M(t,K.Of()))
w.K(u)},
A:function(){var x=this,w=x.a,v=w.f.i(0,"$implicit"),u=J.U(w.a.c,v)
w=x.e
if(w==null?u!=null:w!==u){w=x.d
y.t.a(u)
w.sbG(u)
x.e=u}x.d.aH()
x.c.G()
x.b.a_(H.i(O.bk(v)))},
I:function(){this.c.F()}}
K.rm.prototype={
t:function(){var x=document.createElement("li")
this.v(x)
x.appendChild(this.b.b)
this.K(x)},
A:function(){this.b.a_(H.i(O.bk(this.a.f.i(0,"$implicit"))))}}
K.rn.prototype={
t:function(){var x,w,v=this,u=new K.iJ(E.aC(v,0,3)),t=$.Eo
if(t==null)t=$.Eo=O.aD($.Nx,null)
u.b=t
x=document.createElement("tekpack")
u.c=y.f.a(x)
v.sbM(u)
w=v.b.c
v.sbL(new X.aV(H.a([],y.D)))
v.K(w)},
A:function(){var x=this.d.e
if(x===0)this.a.C()
this.b.p()}}
K.nM.prototype={
am:function(d,e){H.i(e)
this.a.toString
return new R.iq(e==null?"":e)}}
var z=a.updateTypes(["l<~>*(q*,j*)","~(@)","@(@)","a4<aV*>*(an*)"])
A.Az.prototype={
$1:function(d){var x,w
this.c.h("0*").a(d)
x=this.a
if(!x.b){w=x.c
w=w==null?d!=null:w!==d}else w=!0
if(w){x.b=!1
x.c=d
x.a=this.b.$1(d)}return x.a},
$S:function(){return this.d.h("@<0>").J(this.c).h("1*(2*)")}}
X.xU.prototype={
$1:function(d){var x,w,v,u="items",t=this.a,s=J.a2(d)
t.b=H.i(s.i(d,"video"))
x=s.i(d,"changes")
if(x==null){x=y.z
x=P.Z(x,x)}w=y.h
t.c=w.a(x)
if(s.i(d,u)!=null){t=t.a
v=0
while(!0){x=H.zq(J.aY(s.i(d,u)))
if(typeof x!=="number")return H.x(x)
if(!(v<x))break
C.a.j(t,X.Iu(w.a(J.U(s.i(d,u),v))));++v}}},
$S:4}
X.xV.prototype={
$1:function(d){return P.d3(d)},
$S:3}
X.xS.prototype={
$1:function(d){return J.ac(J.U(d,"slot"),this.a)},
$S:39}
X.xT.prototype={
$0:function(){return null},
$S:1};(function installTearOffs(){var x=a._static_2,w=a._static_1,v=a._instance_1u,u=a._instance_1i
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
v(t=K.iJ.prototype,"grk","rl",1)
v(t,"grm","rn",1)
u(K.nM.prototype,"gun","am",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(H.bS,[A.Az,X.xU,X.xV,X.xS,X.xT])
x(P.t,[X.aV,X.kj,K.nM])
w(K.iJ,E.O)
x(E.l,[K.rg,K.rh,K.ri,K.lE,K.rj,K.rk,K.rl,K.rm])
w(K.rn,G.a4)})()
H.fr(b.typeUniverse,JSON.parse('{"fy":"B","fY":"B","fE":"c6","fz":"n","he":"n","hh":"n","fB":"T","fC":"T","fK":"aj","h2":"aj","hv":"bT","fF":"E","h9":"E","hr":"H","hq":"bW","hf":"bO","ho":"bi","fN":"c_","h6":"cp","h5":"co","fQ":"aw","fS":"bm","fI":"bK","ha":"b0","iJ":{"O":["aV*"],"q":[],"u":[],"r":[],"O.T":"aV*"},"rg":{"l":["aV*"],"q":[],"A":[],"u":[],"K":[],"r":[],"C":[],"l.T":"aV*"},"rh":{"l":["aV*"],"q":[],"A":[],"u":[],"K":[],"r":[],"C":[],"l.T":"aV*"},"ri":{"l":["aV*"],"q":[],"A":[],"u":[],"K":[],"r":[],"C":[],"l.T":"aV*"},"lE":{"l":["aV*"],"q":[],"A":[],"u":[],"K":[],"r":[],"C":[],"l.T":"aV*"},"rj":{"l":["aV*"],"q":[],"A":[],"u":[],"K":[],"r":[],"C":[],"l.T":"aV*"},"rk":{"l":["aV*"],"q":[],"A":[],"u":[],"K":[],"r":[],"C":[],"l.T":"aV*"},"rl":{"l":["aV*"],"q":[],"A":[],"u":[],"K":[],"r":[],"C":[],"l.T":"aV*"},"rm":{"l":["aV*"],"q":[],"A":[],"u":[],"K":[],"r":[],"C":[],"l.T":"aV*"},"rn":{"a4":["aV*"],"A":[],"u":[],"r":[],"C":[],"a4.T":"aV*"}}'))
0
var y=(function rtii(){var x=H.ar
return{N:x("y<H*>"),M:x("y<t*>"),i:x("y<f*>"),D:x("y<kj*>"),P:x("z"),z:x("@"),y:x("f_*"),L:x("B*"),f:x("E*"),Y:x("h7*"),t:x("p<t*>*"),w:x("o<@>*"),G:x("o<f*>*"),h:x("L<@,@>*"),F:x("q*"),X:x("f*"),v:x("kj*"),Q:x("aV*"),A:x("iJ*"),S:x("lE*"),R:x("@(@)*")}})();(function constants(){C.c4=new D.aB("tekpack",K.Og(),H.ar("aB<aV*>"))})();(function staticFields(){$.NV=['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}']
$.Eo=null
$.Nx=[$.NV]})()}
$__dart_deferred_initializers__["yMcKYYUm8RjBbyfkFrDv4djvEcw="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_1.part.js.map
