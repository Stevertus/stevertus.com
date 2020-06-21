self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G={
zK:function(d){var x=0,w=P.b8(y.N),v,u,t,s,r
var $async$zK=P.b9(function(e,f){if(e===1)return P.b5(f,w)
while(true)switch(x){case 0:x=3
return P.aW(G.Bn(C.b.ag(d,"http")?d:"https://stevertus.com/"+d,null),$async$zK)
case 3:u=f
t=u.e
s=B.rf(J.T(U.r8(t).c.a,"charset"))
r=u.x
s.aM(0,r)
s=u.b
if(s!==200)throw H.a("Request failed!")
v=B.rf(J.T(U.r8(t).c.a,"charset")).aM(0,r)
x=1
break
case 1:return P.b6(v,w)}})
return P.b7($async$zK,w)},
zI:function(d){var x=0,w=P.b8(y.A),v,u
var $async$zI=P.b9(function(e,f){if(e===1)return P.b5(f,w)
while(true)switch(x){case 0:u=C.m
x=3
return P.aW(G.zK(d),$async$zI)
case 3:v=u.aM(0,f)
x=1
break
case 1:return P.b6(v,w)}})
return P.b7($async$zI,w)}},Y,R,K={
HK:function(){return C.c2},
Ot:function(d,e){return new K.qy(E.N(y.j.a(d),H.k(e),y.J))},
Ou:function(d,e){return new K.qz(E.N(y.j.a(d),H.k(e),y.J))},
Ov:function(d,e){y.j.a(d)
H.k(e)
return new K.qA(N.af(),E.N(d,e,y.J))},
Ow:function(d,e){return new K.l6(E.N(y.j.a(d),H.k(e),y.J))},
Ox:function(d,e){return new K.qB(E.N(y.j.a(d),H.k(e),y.J))},
Oy:function(d,e){return new K.qC(E.N(y.j.a(d),H.k(e),y.J))},
Oz:function(d,e){y.j.a(d)
H.k(e)
return new K.qD(N.af(),E.N(d,e,y.J))},
OA:function(d,e){y.j.a(d)
H.k(e)
return new K.qE(N.af(),E.N(d,e,y.J))},
OB:function(d){return new K.qF(d,new G.d8())},
ia:function ia(d){var _=this
_.c=_.b=_.a=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null
_.d=d},
qy:function qy(d){var _=this
_.d=_.c=_.b=null
_.a=d},
qz:function qz(d){var _=this
_.d=_.c=_.b=null
_.a=d},
qA:function qA(d,e){var _=this
_.b=d
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null
_.a=e},
l6:function l6(d){this.c=this.b=null
this.a=d},
qB:function qB(d){this.c=this.b=null
this.a=d},
qC:function qC(d){var _=this
_.f=_.e=_.d=_.c=_.b=null
_.a=d},
qD:function qD(d,e){var _=this
_.b=d
_.e=_.d=_.c=null
_.a=e},
qE:function qE(d,e){this.b=d
this.a=e},
qF:function qF(d,e){var _=this
_.b=_.a=null
_.c=d
_.d=e},
n9:function n9(d){this.a=d}},X={
HJ:function(d){var x=new X.jO()
x.mL(d)
return x},
aK:function aK(d){this.a=d
this.c=this.b=null},
xq:function xq(d){this.a=d},
xr:function xr(){},
jO:function jO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
xo:function xo(d){this.a=d},
xp:function xp(){}},S,N,E,M,Q,D,L,O,V,B,A={
Lx:function(d,e,f){var x={}
x.a=null
x.b=!0
x.c=null
return new A.A5(x,d,f,e)},
A5:function A5(d,e,f,g){var _=this
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
X.aK.prototype={
E:function(){G.zI("tekpack.json").aV(new X.xq(this),y.P).hZ(new X.xr())}}
X.jO.prototype={
mL:function(d){var x,w,v,u,t,s=this,r="texture",q="isNotBlue",p=J.a1(d),o=p.i(d,"name")
s.a=H.i(o==null?"":o)
o=p.i(d,"description")
o=o==null?null:J.Gr(o,"\n","<br>")
s.b=o==null?"":o
o=p.i(d,r)
o=H.i(o==null?"":o)
s.d=o
if(C.b.ag(o,"/"))s.d="assets/tekpack"+o
s.c=H.bO(p.i(d,q)!=null&&p.i(d,q))
s.srJ(H.b([],y.s))
for(o=y.b,x=y.f,w=0;w<=8;++w){v=x.a(J.Gg(o.a(p.i(d,"crafting")),new X.xo(w),new X.xp()))
if(v!=null&&J.T(v,r)!=null){u=H.i(J.T(v,r))
if(J.BR(u,"/"))u="assets/tekpack"+u}else u=null
t=s.e;(t&&C.a).j(t,u)}},
srJ:function(d){this.e=y.a.a(d)}}
K.ia.prototype={
q:function(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="fluidBtn",h="style",g=j.ab(),f=document,e=T.W(f,g)
j.D(e,"container")
j.m(e)
x=T.a9(f,e,"img")
T.e(x,"alt","tekpack")
w=y.z
w.a(x)
j.D(x,"logo")
T.e(x,"src","assets/tekpack/logo.png")
j.t(x)
v=T.W(f,e)
j.D(v,"floatingCard")
j.m(v)
u=E.jY(j,3)
j.e=u
t=u.c
v.appendChild(t)
j.m(t)
j.f=new V.dS(t)
s=f.createElement("h2")
j.t(s)
T.S(s,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
r=T.a9(f,s,"a")
T.e(r,"routerLink","/mcscript")
w.a(r)
j.m(r)
T.S(r,"mcScript")
T.S(s,".")
j.t(T.a9(f,s,"br"))
T.S(s," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
w=G.bF(j,11)
j.r=w
q=w.c
T.e(q,i,"")
T.e(q,"highlight","")
T.e(q,h,"width: 50%;height: 60px;line-height: 30px")
j.m(q)
j.x=new Z.be(q)
p=T.as("Get it via ")
o=f.createElement("img")
T.e(o,"alt","dmanager")
T.e(o,"src","assets/dManager-icon.ico")
T.e(o,h,"height:25px;margin-left:5px")
j.t(o)
w=y._
j.r.F(j.x,[H.b([p,o],w)])
n=T.as(" ")
u=G.bF(j,15)
j.y=u
m=u.c
T.e(m,i,"")
T.e(m,"secondary","")
j.m(m)
j.z=new Z.be(m)
l=T.as("Opensource on ")
k=f.createElement("img")
T.e(k,"alt","")
T.e(k,"src","assets/gitHub_icon.svg")
T.e(k,h,"height:25px")
j.t(k)
j.y.F(j.z,[H.b([l,k],w)])
j.e.F(j.f,[H.b([s,q,n,m],w)])
w=j.Q=new V.I(18,j,T.a0(e))
j.ch=new K.P(new D.K(w,K.N9()),w)
w=j.cx=new V.I(19,j,T.a0(e))
j.cy=new K.P(new D.K(w,K.Na()),w)
w=j.db=new V.I(20,j,T.a0(e))
j.dx=new K.P(new D.K(w,K.Ne()),w)
w=y.C
J.aP(q,"click",j.C(j.gqt(),w,w))
J.aP(m,"click",j.C(j.gqv(),w,w))
w=j.d
j.dy=new K.n9(y.B.a(w.a.L(C.ab,w.b)))},
A:function(){var x,w,v=this,u=v.a,t=v.d.f===0
if(t)v.f.E()
if(t)v.x.d=!0
if(t)v.x.E()
if(t)v.z.c=!0
if(t)v.z.E()
v.ch.sN(u.b!=null)
x=v.cy
w=u.a.length
x.sN(w!==0)
x=v.dx
w=u.c
x.sN(w!=null&&J.dM(w))
v.Q.H()
v.cx.H()
v.db.H()
v.e.u()
v.r.u()
v.y.u()},
J:function(){var x=this
x.Q.G()
x.cx.G()
x.db.G()
x.e.w()
x.r.w()
x.y.w()},
qu:function(d){this.a.toString
window.location.href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
qw:function(d){this.a.toString
window.location.href="https://github.com/Stevertus/tekPack"}}
K.qy.prototype={
q:function(){var x,w,v=this,u=document,t=u.createElement("div")
y.z.a(t)
v.D(t,"video")
v.m(t)
x=y.v.a(T.a9(u,t,"iframe"))
v.d=x
T.e(x,"allow","autoplay; encrypted-media")
T.e(v.d,"allowfullscreen","")
T.e(v.d,"frameborder","0")
v.m(v.d)
x=y.m.a(v.a.c).dy
w=y.A
v.spN(A.Lx(x.gty(x),w,w))
v.K(t)},
A:function(){var x=this,w=C.b.p("https://www.youtube.com/embed/",x.a.a.b)+"?rel=0&amp;controls=0&amp;showinfo=0",v=x.c.$1(w)
w=x.b
if(w==null?v!=null:w!==v){x.d.src=$.bV.c.iT(v)
x.b=v}},
spN:function(d){this.c=y.e.a(d)}}
K.qz.prototype={
q:function(){var x,w=this,v=document.createElement("div")
y.z.a(v)
w.D(v,"grid")
w.m(v)
x=w.b=new V.I(1,w,T.a0(v))
w.c=new R.cM(x,new D.K(x,K.Nb()))
w.K(v)},
A:function(){var x=this,w=x.a.a.a,v=x.d
if(v!==w){x.c.sbM(w)
x.d=w}x.c.aT()
x.b.H()},
J:function(){this.b.G()}}
K.qA.prototype={
q:function(){var x,w,v=this,u=document,t=u.createElement("div"),s=y.z
s.a(t)
v.D(t,"item")
v.m(t)
x=T.a9(u,t,"h5")
v.t(x)
x.appendChild(v.b.b)
w=T.a9(u,t,"img")
v.y=w
T.e(w,"alt","")
v.D(s.a(v.y),"icon")
v.t(v.y)
s=T.W(u,t)
v.z=s
v.D(s,"crafting-grid")
v.m(v.z)
s=v.c=new V.I(5,v,T.a0(v.z))
v.d=new R.cM(s,new D.K(s,K.Nc()))
s=T.W(u,t)
v.Q=s
v.D(s,"description")
v.m(v.Q)
v.K(t)},
A:function(){var x,w,v,u=this,t=y.h.a(u.a.f.i(0,"$implicit")),s=t.e,r=u.r
if(r==null?s!=null:r!==s){u.d.sbM(s)
u.r=s}u.d.aT()
u.c.H()
r=t.a
if(r==null)r=""
u.b.Y(r)
x=t.d
r=u.e
if(r!=x){u.y.src=$.bV.c.bR(x)
u.e=x}w=!H.aa(t.c)
r=u.f
if(r!==w){T.h7(u.z,"crafting-blue",w)
u.f=w}v=t.b
r=u.x
if(r!=v){u.Q.innerHTML=$.bV.c.lX(v)
u.x=v}},
J:function(){this.c.G()}}
K.l6.prototype={
q:function(){var x,w=this,v=document.createElement("div")
y.z.a(v)
w.D(v,"crafting-item")
w.m(v)
x=w.b=new V.I(1,w,T.a0(v))
w.c=new K.P(new D.K(x,K.Nd()),x)
w.K(v)},
A:function(){var x=H.i(this.a.f.i(0,"$implicit"))
this.c.sN(x!=null)
this.b.H()},
J:function(){this.b.G()}}
K.qB.prototype={
q:function(){var x=this,w=document.createElement("img")
x.c=w
x.t(w)
x.K(x.c)},
A:function(){var x=this,w=H.i(y.p.a(x.a.c).a.f.i(0,"$implicit")),v=x.b
if(v!=w){x.c.src=$.bV.c.bR(w)
x.b=w}}}
K.qC.prototype={
q:function(){var x,w,v=this,u=E.jY(v,0)
v.b=u
x=u.c
v.m(x)
v.c=new V.dS(x)
w=document.createElement("h2")
T.e(w,"id","changelog")
v.t(w)
T.S(w,"Changelog")
u=v.d=new V.I(3,v,T.aX())
v.e=new R.cM(u,new D.K(u,K.Nf()))
v.b.F(v.c,[[w,u]])
v.K(x)},
A:function(){var x,w=this,v=w.a,u=v.ch
if(u===0)w.c.E()
x=J.Am(J.Ai(v.a.c))
v=w.f
if(v!==x){w.e.sbM(x)
w.f=x}w.e.aT()
w.d.H()
w.b.u()},
J:function(){this.d.G()
this.b.w()}}
K.qD.prototype={
q:function(){var x,w=this,v=document,u=v.createElement("div"),t=y.z
t.a(u)
w.m(u)
x=T.a9(v,u,"h4")
w.t(x)
x.appendChild(w.b.b)
t=t.a(T.a9(v,u,"ul"))
w.m(t)
t=w.c=new V.I(4,w,T.a0(t))
w.d=new R.cM(t,new D.K(t,K.Ng()))
w.K(u)},
A:function(){var x=this,w=x.a,v=w.f.i(0,"$implicit"),u=J.T(w.a.c,v)
w=x.e
if(w==null?u!=null:w!==u){w=x.d
y.y.a(u)
w.sbM(u)
x.e=u}x.d.aT()
x.c.H()
x.b.Y(H.i(O.bb(v)))},
J:function(){this.c.G()}}
K.qE.prototype={
q:function(){var x=document.createElement("li")
this.t(x)
x.appendChild(this.b.b)
this.K(x)},
A:function(){this.b.Y(H.i(O.bb(this.a.f.i(0,"$implicit"))))}}
K.qF.prototype={
q:function(){var x,w,v=this,u=new K.ia(E.aA(v,0,3)),t=$.DG
if(t==null)t=$.DG=O.aD($.MB,null)
u.b=t
x=document.createElement("tekpack")
u.c=y.z.a(x)
v.sbU(u)
w=v.b.c
v.sbT(new X.aK(H.b([],y.K)))
v.K(w)},
A:function(){var x=this.d.e
if(x===0)this.a.E()
this.b.u()}}
K.n9.prototype={
aj:function(d,e){H.i(e)
this.a.toString
return new R.hT(e==null?"":e)}}
var z=a.updateTypes(["l<~>(q,m)","~(@)","@(@)","ab<aK>(ak)"])
A.A5.prototype={
$1:function(d){var x,w
this.c.a(d)
x=this.a
if(!x.b){w=x.c
w=w==null?d!=null:w!==d}else w=!0
if(w){x.b=!1
x.c=d
x.a=this.b.$1(d)}return x.a},
$S:function(){return this.d.h("@<0>").I(this.c).h("1(2)")}}
X.xq.prototype={
$1:function(d){var x,w,v,u="items",t=this.a,s=J.a1(d)
t.b=H.i(s.i(d,"video"))
x=s.i(d,"changes")
if(x==null){x=y.A
x=P.a_(x,x)}w=y.f
t.c=w.a(x)
if(s.i(d,u)!=null){t=t.a
v=0
while(!0){x=H.yY(J.aJ(s.i(d,u)))
if(typeof x!=="number")return H.t(x)
if(!(v<x))break
C.a.j(t,X.HJ(w.a(J.T(s.i(d,u),v))));++v}}},
$S:4}
X.xr.prototype={
$1:function(d){return P.dL(d)},
$S:3}
X.xo.prototype={
$1:function(d){return J.ac(J.T(d,"slot"),this.a)},
$S:18}
X.xp.prototype={
$0:function(){return null},
$S:1};(function installTearOffs(){var x=a._static_2,w=a._static_1,v=a._instance_1u,u=a._instance_1i
x(K,"N9","Ot",0)
x(K,"Na","Ou",0)
x(K,"Nb","Ov",0)
x(K,"Nc","Ow",0)
x(K,"Nd","Ox",0)
x(K,"Ne","Oy",0)
x(K,"Nf","Oz",0)
x(K,"Ng","OA",0)
w(K,"Nh","OB",3)
var t
v(t=K.ia.prototype,"gqt","qu",1)
v(t,"gqv","qw",1)
u(K.n9.prototype,"gty","aj",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(H.bQ,[A.A5,X.xq,X.xr,X.xo,X.xp])
x(P.w,[X.aK,X.jO,K.n9])
w(K.ia,E.O)
x(E.l,[K.qy,K.qz,K.qA,K.l6,K.qB,K.qC,K.qD,K.qE])
w(K.qF,G.ab)})()
H.pI(b.typeUniverse,JSON.parse('{"ro":"F","ui":"F","rF":"cU","rp":"o","wa":"o","wW":"o","rt":"U","ru":"U","tl":"av","uy":"av","w9":"cP","yB":"cg","rG":"H","vD":"H","yc":"G","xW":"cu","wp":"c_","xU":"bx","tn":"cE","vd":"dq","vc":"dp","tF":"au","tK":"bB","t6":"c2","vL":"b4","ia":{"O":["aK"],"q":[],"u":[],"r":[],"O.T":"aK"},"qy":{"l":["aK"],"q":[],"y":[],"J":[],"u":[],"r":[],"A":[],"l.T":"aK"},"qz":{"l":["aK"],"q":[],"y":[],"J":[],"u":[],"r":[],"A":[],"l.T":"aK"},"qA":{"l":["aK"],"q":[],"y":[],"J":[],"u":[],"r":[],"A":[],"l.T":"aK"},"l6":{"l":["aK"],"q":[],"y":[],"J":[],"u":[],"r":[],"A":[],"l.T":"aK"},"qB":{"l":["aK"],"q":[],"y":[],"J":[],"u":[],"r":[],"A":[],"l.T":"aK"},"qC":{"l":["aK"],"q":[],"y":[],"J":[],"u":[],"r":[],"A":[],"l.T":"aK"},"qD":{"l":["aK"],"q":[],"y":[],"J":[],"u":[],"r":[],"A":[],"l.T":"aK"},"qE":{"l":["aK"],"q":[],"y":[],"J":[],"u":[],"r":[],"A":[],"l.T":"aK"},"qF":{"ab":["aK"],"y":[],"u":[],"r":[],"A":[],"ab.T":"aK"}}'))
var y=(function rtii(){var x=H.bi
return{B:x("eR"),C:x("F"),z:x("H"),v:x("fK"),y:x("p<w>"),_:x("B<G>"),s:x("B<f>"),K:x("B<jO>"),a:x("n<f>"),b:x("n<@>"),f:x("L<@,@>"),P:x("z"),j:x("q"),N:x("f"),h:x("jO"),J:x("aK"),m:x("ia"),p:x("l6"),A:x("@"),e:x("@(@)")}})();(function constants(){C.c2=new D.aC("tekpack",K.Nh(),H.bi("aC<aK>"))})();(function staticFields(){$.MO=['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}']
$.DG=null
$.MB=[$.MO]})()}
$__dart_deferred_initializers__["g9tdK5v2vQ4jqWvyfGTa01el990="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_1.part.js.map
