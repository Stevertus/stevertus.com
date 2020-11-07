self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G={
us:function(d){var x=0,w=P.aQ(y.X),v,u,t,s,r
var $async$us=P.aR(function(e,f){if(e===1)return P.aN(f,w)
while(true)switch(x){case 0:x=3
return P.ax(G.vR(C.a.a3(d,"http")?d:"https://stevertus.com/"+d,null),$async$us)
case 3:u=f
t=u.e
s=B.o2(J.I(U.nY(t).c.a,"charset"))
r=u.x
s.aM(0,r)
s=u.b
if(s!==200)throw H.b("Request failed!")
v=B.o2(J.I(U.nY(t).c.a,"charset")).aM(0,r)
x=1
break
case 1:return P.aO(v,w)}})
return P.aP($async$us,w)},
uq:function(d){var x=0,w=P.aQ(y.z),v,u
var $async$uq=P.aR(function(e,f){if(e===1)return P.aN(f,w)
while(true)switch(x){case 0:u=C.E
x=3
return P.ax(G.us(d),$async$uq)
case 3:v=u.aM(0,f)
x=1
break
case 1:return P.aO(v,w)}})
return P.aP($async$uq,w)}},Y,R,K={
C4:function(){return C.bt},
HK:function(d,e){return new K.nn(E.S(y.F.a(d),H.o(e),y.Q))},
HL:function(d,e){return new K.no(E.S(y.F.a(d),H.o(e),y.Q))},
HM:function(d,e){y.F.a(d)
H.o(e)
return new K.np(N.aC(),E.S(d,e,y.Q))},
HN:function(d,e){return new K.iL(E.S(y.F.a(d),H.o(e),y.Q))},
HO:function(d,e){return new K.nq(E.S(y.F.a(d),H.o(e),y.Q))},
HP:function(d,e){return new K.nr(E.S(y.F.a(d),H.o(e),y.Q))},
HQ:function(d,e){y.F.a(d)
H.o(e)
return new K.ns(N.aC(),E.S(d,e,y.Q))},
HR:function(d,e){y.F.a(d)
H.o(e)
return new K.nt(N.aC(),E.S(d,e,y.Q))},
HS:function(){return new K.nu(new G.cX())},
fo:function fo(d){var _=this
_.c=_.b=_.a=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null
_.d=d},
nn:function nn(d){var _=this
_.d=_.c=_.b=null
_.a=d},
no:function no(d){var _=this
_.d=_.c=_.b=null
_.a=d},
np:function np(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
iL:function iL(d){this.c=this.b=null
this.a=d},
nq:function nq(d){this.c=this.b=null
this.a=d},
nr:function nr(d){var _=this
_.f=_.e=_.d=_.c=_.b=null
_.a=d},
ns:function ns(d,e){var _=this
_.b=d
_.e=_.d=_.c=null
_.a=e},
nt:function nt(d,e){this.b=d
this.a=e},
nu:function nu(d){var _=this
_.c=_.b=_.a=null
_.d=d},
kr:function kr(d){this.a=d}},X={
C3:function(d){var x=new X.hO()
x.j5(d)
return x},
ak:function ak(d){this.a=d
this.c=this.b=null},
rh:function rh(d){this.a=d},
ri:function ri(){},
hO:function hO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
rf:function rf(d){this.a=d},
rg:function rg(){}},N,E,M,Q,D,O,V,A={
Fp:function(d,e,f){var x={}
x.a=null
x.b=!0
x.c=null
return new A.uM(x,d,f,e)},
uM:function uM(d,e,f,g){var _=this
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
X.ak.prototype={
X:function(){G.uq("tekpack.json").av(new X.rh(this),y.P).eC(new X.ri())}}
X.hO.prototype={
j5:function(d){var x,w,v,u,t,s=this,r="texture",q="isNotBlue",p=J.W(d),o=p.i(d,"name")
s.a=H.n(o==null?"":o)
o=p.i(d,"description")
o=o==null?null:J.As(o,"\n","<br>")
s.b=o==null?"":o
o=p.i(d,r)
o=H.n(o==null?"":o)
s.d=o
if(C.a.a3(o,"/"))s.d="assets/tekpack"+o
s.c=H.d_(p.i(d,q)!=null&&p.i(d,q))
s.smc(H.d([],y.i))
for(o=y.w,x=y.h,w=0;w<=8;++w){v=x.a(J.Ah(o.a(p.i(d,"crafting")),new X.rf(w),new X.rg()))
if(v!=null&&J.I(v,r)!=null){u=H.n(J.I(v,r))
if(J.wi(u,"/"))u="assets/tekpack"+u}else u=null
t=s.e;(t&&C.b).k(t,u)}},
smc:function(d){this.e=y.G.a(d)}}
K.fo.prototype={
q:function(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="fluidBtn",g="style",f=i.a1(),e=document,d=T.a4(e,f)
i.B(d,"container")
i.m(d)
x=T.a2(e,d,"img")
T.e(x,"alt","tekpack")
w=y.f
w.a(x)
i.B(x,"logo")
T.e(x,"src","assets/tekpack/logo.png")
i.p(x)
v=T.a4(e,d)
i.B(v,"floatingCard")
i.m(v)
u=E.rK(i,3)
i.e=u
t=u.c
v.appendChild(t)
i.m(t)
i.f=new V.dB(t)
s=e.createElement("h2")
i.p(s)
T.K(s,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
r=T.a2(e,s,"a")
T.e(r,"routerLink","/mcscript")
w.a(r)
i.m(r)
T.K(r,"mcScript")
T.K(s,".")
i.p(T.a2(e,s,"br"))
T.K(s," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
w=G.dh(i,11)
i.r=w
q=w.c
T.e(q,h,"")
T.e(q,"highlight","")
T.e(q,g,"width: 50%;height: 60px;line-height: 30px")
i.m(q)
i.x=new Z.bz(q)
p=T.bf("Get it via ")
o=e.createElement("img")
T.e(o,"alt","dmanager")
T.e(o,"src","assets/dManager-icon.ico")
T.e(o,g,"height:25px;margin-left:5px")
i.p(o)
w=y.N
u=y.M
i.r.P(i.x,H.d([H.d([p,o],w)],u))
n=T.bf(" ")
m=G.dh(i,15)
i.y=m
l=m.c
T.e(l,h,"")
T.e(l,"secondary","")
i.m(l)
i.z=new Z.bz(l)
k=T.bf("Opensource on ")
j=e.createElement("img")
T.e(j,"alt","")
T.e(j,"src","assets/gitHub_icon.svg")
T.e(j,g,"height:25px")
i.p(j)
i.y.P(i.z,H.d([H.d([k,j],w)],u))
i.e.P(i.f,H.d([H.d([s,q,n,l],w)],u))
w=i.Q=new V.J(18,i,T.aa(d))
i.ch=new K.X(new D.O(w,K.GT()),w)
w=i.cx=new V.J(19,i,T.aa(d))
i.cy=new K.X(new D.O(w,K.GU()),w)
w=i.db=new V.J(20,i,T.aa(d))
i.dx=new K.X(new D.O(w,K.GY()),w)
w=y.L
J.bM(q,"click",i.a0(i.glh(),w,w))
J.bM(l,"click",i.a0(i.glj(),w,w))
w=i.d
i.dy=new K.kr(y.y.a(w.a.I(C.Q,w.b)))},
w:function(){var x,w,v=this,u=v.a,t=v.d.f===0
if(t)v.f.X()
if(t)v.x.d=!0
if(t)v.x.X()
if(t)v.z.c=!0
if(t)v.z.X()
v.ch.sL(u.b!=null)
x=v.cy
w=u.a.length
x.sL(w!==0)
x=v.dx
w=u.c
x.sL(w!=null&&J.ev(w))
v.Q.G()
v.cx.G()
v.db.G()
v.e.A()
v.r.A()
v.y.A()},
H:function(){var x=this
x.Q.F()
x.cx.F()
x.db.F()
x.e.C()
x.r.C()
x.y.C()},
li:function(d){this.a.toString
window.location.href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
lk:function(d){this.a.toString
window.location.href="https://github.com/Stevertus/tekPack"}}
K.nn.prototype={
q:function(){var x,w,v=this,u=document,t=u.createElement("div")
y.f.a(t)
v.B(t,"video")
v.m(t)
x=y.Y.a(T.a2(u,t,"iframe"))
v.d=x
T.e(x,"allow","autoplay; encrypted-media")
T.e(v.d,"allowfullscreen","")
T.e(v.d,"frameborder","0")
v.m(v.d)
x=y.A.a(v.a.c).dy
w=y.z
v.skF(A.Fp(x.gmW(x),w,w))
v.D(t)},
w:function(){var x=this,w=C.a.Z("https://www.youtube.com/embed/",x.a.a.b)+"?rel=0&amp;controls=0&amp;showinfo=0",v=x.c.$1(w)
w=x.b
if(w==null?v!=null:w!==v){x.d.src=$.bJ.c.fb(v)
x.b=v}},
skF:function(d){this.c=y.R.a(d)}}
K.no.prototype={
q:function(){var x,w=this,v=document.createElement("div")
y.f.a(v)
w.B(v,"grid")
w.m(v)
x=w.b=new V.J(1,w,T.aa(v))
w.c=new R.co(x,new D.O(x,K.GV()))
w.D(v)},
w:function(){var x=this,w=x.a.a.a,v=x.d
if(v!==w){x.c.sb7(w)
x.d=w}x.c.au()
x.b.G()},
H:function(){this.b.F()}}
K.np.prototype={
q:function(){var x,w,v=this,u=document,t=u.createElement("div"),s=y.f
s.a(t)
v.B(t,"item")
v.m(t)
x=T.a2(u,t,"h5")
v.p(x)
x.appendChild(v.b.b)
w=T.a2(u,t,"img")
v.y=w
T.e(w,"alt","")
v.B(s.a(v.y),"icon")
v.p(v.y)
s=T.a4(u,t)
v.z=s
v.B(s,"crafting-grid")
v.m(v.z)
s=v.c=new V.J(5,v,T.aa(v.z))
v.d=new R.co(s,new D.O(s,K.GW()))
s=T.a4(u,t)
v.Q=s
v.B(s,"description")
v.m(v.Q)
v.D(t)},
w:function(){var x,w,v,u=this,t=y.v.a(u.a.f.i(0,"$implicit")),s=t.e,r=u.r
if(r==null?s!=null:r!==s){u.d.sb7(s)
u.r=s}u.d.au()
u.c.G()
r=t.a
if(r==null)r=""
u.b.ab(r)
x=t.d
r=u.e
if(r!=x){u.y.src=$.bJ.c.bt(x)
u.e=x}w=!H.a8(t.c)
r=u.f
if(r!==w){T.et(u.z,"crafting-blue",w)
u.f=w}v=t.b
r=u.x
if(r!=v){u.Q.innerHTML=$.bJ.c.iy(v)
u.x=v}},
H:function(){this.c.F()}}
K.iL.prototype={
q:function(){var x,w=this,v=document.createElement("div")
y.f.a(v)
w.B(v,"crafting-item")
w.m(v)
x=w.b=new V.J(1,w,T.aa(v))
w.c=new K.X(new D.O(x,K.GX()),x)
w.D(v)},
w:function(){var x=H.n(this.a.f.i(0,"$implicit"))
this.c.sL(x!=null)
this.b.G()},
H:function(){this.b.F()}}
K.nq.prototype={
q:function(){var x=this,w=document.createElement("img")
x.c=w
x.p(w)
x.D(x.c)},
w:function(){var x=this,w=H.n(y.S.a(x.a.c).a.f.i(0,"$implicit")),v=x.b
if(v!=w){x.c.src=$.bJ.c.bt(w)
x.b=w}}}
K.nr.prototype={
q:function(){var x,w,v,u=this,t=E.rK(u,0)
u.b=t
x=t.c
u.m(x)
u.c=new V.dB(x)
w=document.createElement("h2")
T.e(w,"id","changelog")
u.p(w)
T.K(w,"Changelog")
t=u.d=new V.J(3,u,T.aX())
u.e=new R.co(t,new D.O(t,K.GZ()))
v=y.M
u.b.P(u.c,H.d([H.d([w,t],v)],v))
u.D(x)},
w:function(){var x,w=this,v=w.a,u=v.ch
if(u===0)w.c.X()
x=J.wj(J.uW(v.a.c))
v=w.f
if(v!==x){w.e.sb7(x)
w.f=x}w.e.au()
w.d.G()
w.b.A()},
H:function(){this.d.F()
this.b.C()}}
K.ns.prototype={
q:function(){var x,w=this,v=document,u=v.createElement("div"),t=y.f
t.a(u)
w.m(u)
x=T.a2(v,u,"h4")
w.p(x)
x.appendChild(w.b.b)
t=t.a(T.a2(v,u,"ul"))
w.m(t)
t=w.c=new V.J(4,w,T.aa(t))
w.d=new R.co(t,new D.O(t,K.H_()))
w.D(u)},
w:function(){var x=this,w=x.a,v=w.f.i(0,"$implicit"),u=J.I(w.a.c,v)
w=x.e
if(w==null?u!=null:w!==u){w=x.d
y.t.a(u)
w.sb7(u)
x.e=u}x.d.au()
x.c.G()
x.b.ab(H.n(O.dV(v)))},
H:function(){this.c.F()}}
K.nt.prototype={
q:function(){var x=document.createElement("li")
this.p(x)
x.appendChild(this.b.b)
this.D(x)},
w:function(){this.b.ab(H.n(O.dV(this.a.f.i(0,"$implicit"))))}}
K.nu.prototype={
q:function(){var x,w,v=this,u=new K.fo(E.an(v,0,3)),t=$.xL
if(t==null)t=$.xL=O.al($.Gp,null)
u.b=t
x=document.createElement("tekpack")
u.c=y.f.a(x)
v.sbj(u)
w=v.b.c
v.sbi(new X.ak(H.d([],y.D)))
v.D(w)},
w:function(){var x=this.d.e
if(x===0)this.a.X()
this.b.A()}}
K.kr.prototype={
b9:function(d,e){H.n(e)
this.a.toString
return new R.fa(e==null?"":e)}}
var z=a.updateTypes(["q<~>*(w*,f*)","~(@)","@(@)","a7<ak*>*()"])
A.uM.prototype={
$1:function(d){var x,w
this.c.h("0*").a(d)
x=this.a
if(!x.b){w=x.c
w=w==null?d!=null:w!==d}else w=!0
if(w){x.b=!1
x.c=d
x.a=this.b.$1(d)}return x.a},
$S:function(){return this.d.h("@<0>").v(this.c).h("1*(2*)")}}
X.rh.prototype={
$1:function(d){var x,w,v,u="items",t=this.a,s=J.W(d)
t.b=H.n(s.i(d,"video"))
x=s.i(d,"changes")
if(x==null){x=y.z
x=P.aw(x,x)}w=y.h
t.c=w.a(x)
if(s.i(d,u)!=null){t=t.a
v=0
while(!0){x=H.tK(J.az(s.i(d,u)))
if(typeof x!=="number")return H.Y(x)
if(!(v<x))break
C.b.k(t,X.C3(w.a(J.I(s.i(d,u),v))));++v}}},
$S:4}
X.ri.prototype={
$1:function(d){return P.Fk(d)},
$S:3}
X.rf.prototype={
$1:function(d){return J.a3(J.I(d,"slot"),this.a)},
$S:30}
X.rg.prototype={
$0:function(){return null},
$S:1};(function installTearOffs(){var x=a._static_2,w=a._static_0,v=a._instance_1u,u=a._instance_1i
x(K,"GT","HK",0)
x(K,"GU","HL",0)
x(K,"GV","HM",0)
x(K,"GW","HN",0)
x(K,"GX","HO",0)
x(K,"GY","HP",0)
x(K,"GZ","HQ",0)
x(K,"H_","HR",0)
w(K,"H0","HS",3)
var t
v(t=K.fo.prototype,"glh","li",1)
v(t,"glj","lk",1)
u(K.kr.prototype,"gmW","b9",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(H.bx,[A.uM,X.rh,X.ri,X.rf,X.rg])
x(P.m,[X.ak,X.hO,K.kr])
w(K.fo,E.H)
x(E.q,[K.nn,K.no,K.np,K.iL,K.nq,K.nr,K.ns,K.nt])
w(K.nu,G.a7)})()
H.y4(b.typeUniverse,JSON.parse('{"AB":"A","Ba":"A","AI":"d1","AC":"h","BB":"h","BW":"h","AD":"P","AE":"P","AQ":"aj","Bd":"aj","CE":"c3","AJ":"C","Bw":"C","Cq":"y","Ci":"cf","BC":"bT","Ch":"b5","AW":"cy","Bj":"dE","Bi":"dC","AY":"ad","B_":"dt","AZ":"b9","AO":"cS","By":"dH","Bx":"b0","fo":{"H":["ak*"],"w":[],"t":[],"v":[],"H.T":"ak*"},"nn":{"q":["ak*"],"w":[],"D":[],"t":[],"N":[],"v":[],"F":[],"q.T":"ak*"},"no":{"q":["ak*"],"w":[],"D":[],"t":[],"N":[],"v":[],"F":[],"q.T":"ak*"},"np":{"q":["ak*"],"w":[],"D":[],"t":[],"N":[],"v":[],"F":[],"q.T":"ak*"},"iL":{"q":["ak*"],"w":[],"D":[],"t":[],"N":[],"v":[],"F":[],"q.T":"ak*"},"nq":{"q":["ak*"],"w":[],"D":[],"t":[],"N":[],"v":[],"F":[],"q.T":"ak*"},"nr":{"q":["ak*"],"w":[],"D":[],"t":[],"N":[],"v":[],"F":[],"q.T":"ak*"},"ns":{"q":["ak*"],"w":[],"D":[],"t":[],"N":[],"v":[],"F":[],"q.T":"ak*"},"nt":{"q":["ak*"],"w":[],"D":[],"t":[],"N":[],"v":[],"F":[],"q.T":"ak*"},"nu":{"a7":["ak*"],"D":[],"t":[],"v":[],"F":[],"a7.T":"ak*"}}'))
0
var y=(function rtii(){var x=H.ay
return{N:x("T<y*>"),M:x("T<m*>"),i:x("T<c*>"),D:x("T<hO*>"),P:x("B"),z:x("@"),y:x("jn*"),L:x("A*"),f:x("C*"),Y:x("ea*"),t:x("k<m*>*"),w:x("p<@>*"),G:x("p<c*>*"),h:x("L<@,@>*"),F:x("w*"),X:x("c*"),v:x("hO*"),Q:x("ak*"),A:x("fo*"),S:x("iL*"),R:x("@(@)*")}})();(function constants(){C.bt=new D.aH("tekpack",K.H0(),H.ay("aH<ak*>"))})();(function staticFields(){$.FX=['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}']
$.xL=null
$.Gp=[$.FX]})()}
$__dart_deferred_initializers__["vm/InlNzTl11QogtxG3/WNw77Lw="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_1.part.js.map
