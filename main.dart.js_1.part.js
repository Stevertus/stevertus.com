self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G={
Aq:function(d){var x=0,w=P.bj(y.X),v,u,t,s,r
var $async$Aq=P.bk(function(e,f){if(e===1)return P.bg(f,w)
while(true)switch(x){case 0:x=3
return P.aX(G.Cg(C.a.ad(d,"http")?d:"https://stevertus.com/"+d,null),$async$Aq)
case 3:u=f
t=u.e
s=B.rW(J.Q(U.rO(t).c.a,"charset"))
r=u.x
s.aP(0,r)
s=u.b
if(s!==200)throw H.b("Request failed!")
v=B.rW(J.Q(U.rO(t).c.a,"charset")).aP(0,r)
x=1
break
case 1:return P.bh(v,w)}})
return P.bi($async$Aq,w)},
Ao:function(d){var x=0,w=P.bj(y.z),v,u
var $async$Ao=P.bk(function(e,f){if(e===1)return P.bg(f,w)
while(true)switch(x){case 0:u=C.n
x=3
return P.aX(G.Aq(d),$async$Ao)
case 3:v=u.aP(0,f)
x=1
break
case 1:return P.bh(v,w)}})
return P.bi($async$Ao,w)}},Y,R,K={
IL:function(){return C.c4},
PT:function(d,e){return new K.rd(E.K(y.F.a(d),H.l(e),y.Q))},
PU:function(d,e){return new K.re(E.K(y.F.a(d),H.l(e),y.Q))},
PV:function(d,e){y.F.a(d)
H.l(e)
return new K.rf(N.ag(),E.K(d,e,y.Q))},
PW:function(d,e){return new K.lo(E.K(y.F.a(d),H.l(e),y.Q))},
PX:function(d,e){return new K.rg(E.K(y.F.a(d),H.l(e),y.Q))},
PY:function(d,e){return new K.rh(E.K(y.F.a(d),H.l(e),y.Q))},
PZ:function(d,e){y.F.a(d)
H.l(e)
return new K.ri(N.ag(),E.K(d,e,y.Q))},
Q_:function(d,e){y.F.a(d)
H.l(e)
return new K.rj(N.ag(),E.K(d,e,y.Q))},
Q0:function(){return new K.rk(new G.cQ())},
ip:function ip(d){var _=this
_.c=_.b=_.a=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null
_.d=d},
rd:function rd(d){var _=this
_.d=_.c=_.b=null
_.a=d},
re:function re(d){var _=this
_.d=_.c=_.b=null
_.a=d},
rf:function rf(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
lo:function lo(d){this.c=this.b=null
this.a=d},
rg:function rg(d){this.c=this.b=null
this.a=d},
rh:function rh(d){var _=this
_.f=_.e=_.d=_.c=_.b=null
_.a=d},
ri:function ri(d,e){var _=this
_.b=d
_.e=_.d=_.c=null
_.a=e},
rj:function rj(d,e){this.b=d
this.a=e},
rk:function rk(d){var _=this
_.c=_.b=_.a=null
_.d=d},
nH:function nH(d){this.a=d}},X={
IK:function(d){var x=new X.k4()
x.nH(d)
return x},
aO:function aO(d){this.a=d
this.c=this.b=null},
y0:function y0(d){this.a=d},
y1:function y1(){},
k4:function k4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
xZ:function xZ(d){this.a=d},
y_:function y_(){}},N,E,M,Q,D,O,V,A={
MH:function(d,e,f){var x={}
x.a=null
x.b=!0
x.c=null
return new A.AL(x,d,f,e)},
AL:function AL(d,e,f,g){var _=this
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
X.aO.prototype={
C:function(){G.Ao("tekpack.json").b1(new X.y0(this),y.P).iL(new X.y1())}}
X.k4.prototype={
nH:function(d){var x,w,v,u,t,s=this,r="texture",q="isNotBlue",p=J.a3(d),o=p.i(d,"name")
s.a=H.i(o==null?"":o)
o=p.i(d,"description")
o=o==null?null:J.Ho(o,"\n","<br>")
s.b=o==null?"":o
o=p.i(d,r)
o=H.i(o==null?"":o)
s.d=o
if(C.a.ad(o,"/"))s.d="assets/tekpack"+o
s.c=H.bA(p.i(d,q)!=null&&p.i(d,q))
s.sub(H.a([],y.i))
for(o=y.w,x=y.h,w=0;w<=8;++w){v=x.a(J.Hb(o.a(p.i(d,"crafting")),new X.xZ(w),new X.y_()))
if(v!=null&&J.Q(v,r)!=null){u=H.i(J.Q(v,r))
if(J.CS(u,"/"))u="assets/tekpack"+u}else u=null
t=s.e;(t&&C.b).m(t,u)}},
sub:function(d){this.e=y.G.a(d)}}
K.ip.prototype={
q:function(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="fluidBtn",g="style",f=i.ac(),e=document,d=T.V(e,f)
i.E(d,"container")
i.j(d)
x=T.a2(e,d,"img")
T.f(x,"alt","tekpack")
w=y.f
w.a(x)
i.E(x,"logo")
T.f(x,"src","assets/tekpack/logo.png")
i.t(x)
v=T.V(e,d)
i.E(v,"floatingCard")
i.j(v)
u=E.im(i,3)
i.e=u
t=u.c
v.appendChild(t)
i.j(t)
i.f=new V.dh(t)
s=e.createElement("h2")
i.t(s)
T.O(s,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
r=T.a2(e,s,"a")
T.f(r,"routerLink","/mcscript")
w.a(r)
i.j(r)
T.O(r,"mcScript")
T.O(s,".")
i.t(T.a2(e,s,"br"))
T.O(s," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
w=G.by(i,11)
i.r=w
q=w.c
T.f(q,h,"")
T.f(q,"highlight","")
T.f(q,g,"width: 50%;height: 60px;line-height: 30px")
i.j(q)
i.x=new Z.aZ(q)
p=T.am("Get it via ")
o=e.createElement("img")
T.f(o,"alt","dmanager")
T.f(o,"src","assets/dManager-icon.ico")
T.f(o,g,"height:25px;margin-left:5px")
i.t(o)
w=y.N
u=y.M
i.r.D(i.x,H.a([H.a([p,o],w)],u))
n=T.am(" ")
m=G.by(i,15)
i.y=m
l=m.c
T.f(l,h,"")
T.f(l,"secondary","")
i.j(l)
i.z=new Z.aZ(l)
k=T.am("Opensource on ")
j=e.createElement("img")
T.f(j,"alt","")
T.f(j,"src","assets/gitHub_icon.svg")
T.f(j,g,"height:25px")
i.t(j)
i.y.D(i.z,H.a([H.a([k,j],w)],u))
i.e.D(i.f,H.a([H.a([s,q,n,l],w)],u))
w=i.Q=new V.E(18,i,T.Z(d))
i.ch=new K.P(new D.J(w,K.Oq()),w)
w=i.cx=new V.E(19,i,T.Z(d))
i.cy=new K.P(new D.J(w,K.Or()),w)
w=i.db=new V.E(20,i,T.Z(d))
i.dx=new K.P(new D.J(w,K.Ov()),w)
w=y.L
J.aH(q,"click",i.B(i.grN(),w,w))
J.aH(l,"click",i.B(i.grP(),w,w))
w=i.d
i.dy=new K.nH(y.y.a(w.a.M(C.ab,w.b)))},
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
x.sL(w!=null&&J.dP(w))
v.Q.I()
v.cx.I()
v.db.I()
v.e.p()
v.r.p()
v.y.p()},
F:function(){var x=this
x.Q.H()
x.cx.H()
x.db.H()
x.e.u()
x.r.u()
x.y.u()},
rO:function(d){this.a.toString
window.location.href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
rQ:function(d){this.a.toString
window.location.href="https://github.com/Stevertus/tekPack"}}
K.rd.prototype={
q:function(){var x,w,v=this,u=document,t=u.createElement("div")
y.f.a(t)
v.E(t,"video")
v.j(t)
x=y.Y.a(T.a2(u,t,"iframe"))
v.d=x
T.f(x,"allow","autoplay; encrypted-media")
T.f(v.d,"allowfullscreen","")
T.f(v.d,"frameborder","0")
v.j(v.d)
x=y.A.a(v.a.c).dy
w=y.z
v.sr4(A.MH(x.gv0(x),w,w))
v.J(t)},
A:function(){var x=this,w=C.a.v("https://www.youtube.com/embed/",x.a.a.b)+"?rel=0&amp;controls=0&amp;showinfo=0",v=x.c.$1(w)
w=x.b
if(w==null?v!=null:w!==v){x.d.src=$.c_.c.jA(v)
x.b=v}},
sr4:function(d){this.c=y.R.a(d)}}
K.re.prototype={
q:function(){var x,w=this,v=document.createElement("div")
y.f.a(v)
w.E(v,"grid")
w.j(v)
x=w.b=new V.E(1,w,T.Z(v))
w.c=new R.cu(x,new D.J(x,K.Os()))
w.J(v)},
A:function(){var x=this,w=x.a.a.a,v=x.d
if(v!==w){x.c.sbJ(w)
x.d=w}x.c.aK()
x.b.I()},
F:function(){this.b.H()}}
K.rf.prototype={
q:function(){var x,w,v=this,u=document,t=u.createElement("div"),s=y.f
s.a(t)
v.E(t,"item")
v.j(t)
x=T.a2(u,t,"h5")
v.t(x)
x.appendChild(v.b.b)
w=T.a2(u,t,"img")
v.y=w
T.f(w,"alt","")
v.E(s.a(v.y),"icon")
v.t(v.y)
s=T.V(u,t)
v.z=s
v.E(s,"crafting-grid")
v.j(v.z)
s=v.c=new V.E(5,v,T.Z(v.z))
v.d=new R.cu(s,new D.J(s,K.Ot()))
s=T.V(u,t)
v.Q=s
v.E(s,"description")
v.j(v.Q)
v.J(t)},
A:function(){var x,w,v,u=this,t=y.v.a(u.a.f.i(0,"$implicit")),s=t.e,r=u.r
if(r==null?s!=null:r!==s){u.d.sbJ(s)
u.r=s}u.d.aK()
u.c.I()
r=t.a
if(r==null)r=""
u.b.a4(r)
x=t.d
r=u.e
if(r!=x){u.y.src=$.c_.c.bZ(x)
u.e=x}w=!H.a6(t.c)
r=u.f
if(r!==w){T.hc(u.z,"crafting-blue",w)
u.f=w}v=t.b
r=u.x
if(r!=v){u.Q.innerHTML=$.c_.c.mU(v)
u.x=v}},
F:function(){this.c.H()}}
K.lo.prototype={
q:function(){var x,w=this,v=document.createElement("div")
y.f.a(v)
w.E(v,"crafting-item")
w.j(v)
x=w.b=new V.E(1,w,T.Z(v))
w.c=new K.P(new D.J(x,K.Ou()),x)
w.J(v)},
A:function(){var x=H.i(this.a.f.i(0,"$implicit"))
this.c.sL(x!=null)
this.b.I()},
F:function(){this.b.H()}}
K.rg.prototype={
q:function(){var x=this,w=document.createElement("img")
x.c=w
x.t(w)
x.J(x.c)},
A:function(){var x=this,w=H.i(y.S.a(x.a.c).a.f.i(0,"$implicit")),v=x.b
if(v!=w){x.c.src=$.c_.c.bZ(w)
x.b=w}}}
K.rh.prototype={
q:function(){var x,w,v,u=this,t=E.im(u,0)
u.b=t
x=t.c
u.j(x)
u.c=new V.dh(x)
w=document.createElement("h2")
T.f(w,"id","changelog")
u.t(w)
T.O(w,"Changelog")
t=u.d=new V.E(3,u,T.aQ())
u.e=new R.cu(t,new D.J(t,K.Ow()))
v=y.M
u.b.D(u.c,H.a([H.a([w,t],v)],v))
u.J(x)},
A:function(){var x,w=this,v=w.a,u=v.ch
if(u===0)w.c.C()
x=J.B5(J.B1(v.a.c))
v=w.f
if(v!==x){w.e.sbJ(x)
w.f=x}w.e.aK()
w.d.I()
w.b.p()},
F:function(){this.d.H()
this.b.u()}}
K.ri.prototype={
q:function(){var x,w=this,v=document,u=v.createElement("div"),t=y.f
t.a(u)
w.j(u)
x=T.a2(v,u,"h4")
w.t(x)
x.appendChild(w.b.b)
t=t.a(T.a2(v,u,"ul"))
w.j(t)
t=w.c=new V.E(4,w,T.Z(t))
w.d=new R.cu(t,new D.J(t,K.Ox()))
w.J(u)},
A:function(){var x=this,w=x.a,v=w.f.i(0,"$implicit"),u=J.Q(w.a.c,v)
w=x.e
if(w==null?u!=null:w!==u){w=x.d
y.t.a(u)
w.sbJ(u)
x.e=u}x.d.aK()
x.c.I()
x.b.a4(H.i(O.bK(v)))},
F:function(){this.c.H()}}
K.rj.prototype={
q:function(){var x=document.createElement("li")
this.t(x)
x.appendChild(this.b.b)
this.J(x)},
A:function(){this.b.a4(H.i(O.bK(this.a.f.i(0,"$implicit"))))}}
K.rk.prototype={
q:function(){var x,w,v=this,u=new K.ip(E.av(v,0,3)),t=$.Ez
if(t==null)t=$.Ez=O.ax($.NP,null)
u.b=t
x=document.createElement("tekpack")
u.c=y.f.a(x)
v.sbR(u)
w=v.b.c
v.sbQ(new X.aO(H.a([],y.D)))
v.J(w)},
A:function(){var x=this.d.e
if(x===0)this.a.C()
this.b.p()}}
K.nH.prototype={
an:function(d,e){H.i(e)
this.a.toString
return new R.i1(e==null?"":e)}}
var z=a.updateTypes(["m<~>*(q*,k*)","~(@)","@(@)","a9<aO*>*()"])
A.AL.prototype={
$1:function(d){var x,w
this.c.h("0*").a(d)
x=this.a
if(!x.b){w=x.c
w=w==null?d!=null:w!==d}else w=!0
if(w){x.b=!1
x.c=d
x.a=this.b.$1(d)}return x.a},
$S:function(){return this.d.h("@<0>").K(this.c).h("1*(2*)")}}
X.y0.prototype={
$1:function(d){var x,w,v,u="items",t=this.a,s=J.a3(d)
t.b=H.i(s.i(d,"video"))
x=s.i(d,"changes")
if(x==null){x=y.z
x=P.W(x,x)}w=y.h
t.c=w.a(x)
if(s.i(d,u)!=null){t=t.a
v=0
while(!0){x=H.zE(J.au(s.i(d,u)))
if(typeof x!=="number")return H.y(x)
if(!(v<x))break
C.b.m(t,X.IK(w.a(J.Q(s.i(d,u),v))));++v}}},
$S:4}
X.y1.prototype={
$1:function(d){return P.eN(d)},
$S:0}
X.xZ.prototype={
$1:function(d){return J.ab(J.Q(d,"slot"),this.a)},
$S:34}
X.y_.prototype={
$0:function(){return null},
$S:3};(function installTearOffs(){var x=a._static_2,w=a._static_0,v=a._instance_1u,u=a._instance_1i
x(K,"Oq","PT",0)
x(K,"Or","PU",0)
x(K,"Os","PV",0)
x(K,"Ot","PW",0)
x(K,"Ou","PX",0)
x(K,"Ov","PY",0)
x(K,"Ow","PZ",0)
x(K,"Ox","Q_",0)
w(K,"Oy","Q0",3)
var t
v(t=K.ip.prototype,"grN","rO",1)
v(t,"grP","rQ",1)
u(K.nH.prototype,"gv0","an",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(H.c2,[A.AL,X.y0,X.y1,X.xZ,X.y_])
x(P.t,[X.aO,X.k4,K.nH])
w(K.ip,E.M)
x(E.m,[K.rd,K.re,K.rf,K.lo,K.rg,K.rh,K.ri,K.rj])
w(K.rk,G.a9)})()
H.qj(b.typeUniverse,JSON.parse('{"ip":{"M":["aO*"],"q":[],"r":[],"u":[],"M.T":"aO*"},"lo":{"m":["aO*"],"q":[],"A":[],"r":[],"G":[],"u":[],"B":[],"m.T":"aO*"},"rd":{"m":["aO*"],"q":[],"A":[],"r":[],"G":[],"u":[],"B":[],"m.T":"aO*"},"re":{"m":["aO*"],"q":[],"A":[],"r":[],"G":[],"u":[],"B":[],"m.T":"aO*"},"rf":{"m":["aO*"],"q":[],"A":[],"r":[],"G":[],"u":[],"B":[],"m.T":"aO*"},"rg":{"m":["aO*"],"q":[],"A":[],"r":[],"G":[],"u":[],"B":[],"m.T":"aO*"},"rh":{"m":["aO*"],"q":[],"A":[],"r":[],"G":[],"u":[],"B":[],"m.T":"aO*"},"ri":{"m":["aO*"],"q":[],"A":[],"r":[],"G":[],"u":[],"B":[],"m.T":"aO*"},"rj":{"m":["aO*"],"q":[],"A":[],"r":[],"G":[],"u":[],"B":[],"m.T":"aO*"},"rk":{"a9":["aO*"],"A":[],"r":[],"u":[],"B":[],"a9.T":"aO*"}}'))
0
var y=(function rtii(){var x=H.ay
return{N:x("C<I*>"),M:x("C<t*>"),i:x("C<d*>"),D:x("C<k4*>"),P:x("U"),z:x("@"),y:x("mj*"),L:x("L*"),f:x("N*"),Y:x("fP*"),t:x("n<t*>*"),w:x("o<@>*"),G:x("o<d*>*"),h:x("H<@,@>*"),F:x("q*"),X:x("d*"),v:x("k4*"),Q:x("aO*"),A:x("ip*"),S:x("lo*"),R:x("@(@)*")}})();(function constants(){C.c4=new D.aC("tekpack",K.Oy(),H.ay("aC<aO*>"))})();(function staticFields(){$.Oc=['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}']
$.Ez=null
$.NP=[$.Oc]})()}
$__dart_deferred_initializers__["bd0ZAUaklcMF8Go5EFToHyoVOC8="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_1.part.js.map
