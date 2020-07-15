self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G={
A0:function(d){var x=0,w=P.bd(y.N),v,u,t,s,r
var $async$A0=P.be(function(e,f){if(e===1)return P.ba(f,w)
while(true)switch(x){case 0:x=3
return P.aY(G.BG(C.b.aj(d,"http")?d:"https://stevertus.com/"+d,null),$async$A0)
case 3:u=f
t=u.e
s=B.rV(J.U(U.rO(t).c.a,"charset"))
r=u.x
s.aO(0,r)
s=u.b
if(s!==200)throw H.a("Request failed!")
v=B.rV(J.U(U.rO(t).c.a,"charset")).aO(0,r)
x=1
break
case 1:return P.bb(v,w)}})
return P.bc($async$A0,w)},
zZ:function(d){var x=0,w=P.bd(y.A),v,u
var $async$zZ=P.be(function(e,f){if(e===1)return P.ba(f,w)
while(true)switch(x){case 0:u=C.m
x=3
return P.aY(G.A0(d),$async$zZ)
case 3:v=u.aO(0,f)
x=1
break
case 1:return P.bb(v,w)}})
return P.bc($async$zZ,w)}},Y,R,K={
I8:function(){return C.c3},
Pb:function(d,e){return new K.rd(E.L(y.j.a(d),H.l(e),y.J))},
Pc:function(d,e){return new K.re(E.L(y.j.a(d),H.l(e),y.J))},
Pd:function(d,e){y.j.a(d)
H.l(e)
return new K.rf(N.ad(),E.L(d,e,y.J))},
Pe:function(d,e){return new K.lC(E.L(y.j.a(d),H.l(e),y.J))},
Pf:function(d,e){return new K.rg(E.L(y.j.a(d),H.l(e),y.J))},
Pg:function(d,e){return new K.rh(E.L(y.j.a(d),H.l(e),y.J))},
Ph:function(d,e){y.j.a(d)
H.l(e)
return new K.ri(N.ad(),E.L(d,e,y.J))},
Pi:function(d,e){y.j.a(d)
H.l(e)
return new K.rj(N.ad(),E.L(d,e,y.J))},
Pj:function(d){return new K.rk(d,new G.cZ())},
iH:function iH(d){var _=this
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
lC:function lC(d){this.c=this.b=null
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
rk:function rk(d,e){var _=this
_.b=_.a=null
_.c=d
_.d=e},
nH:function nH(d){this.a=d}},X={
I7:function(d){var x=new X.kh()
x.n4(d)
return x},
aS:function aS(d){this.a=d
this.c=this.b=null},
xL:function xL(d){this.a=d},
xM:function xM(){},
kh:function kh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
xJ:function xJ(d){this.a=d},
xK:function xK(){}},S,N,E,M,Q,D,L,O,V,B,A={
M2:function(d,e,f){var x={}
x.a=null
x.b=!0
x.c=null
return new A.An(x,d,f,e)},
An:function An(d,e,f,g){var _=this
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
X.aS.prototype={
C:function(){G.zZ("tekpack.json").aY(new X.xL(this),y.P).ig(new X.xM())}}
X.kh.prototype={
n4:function(d){var x,w,v,u,t,s=this,r="texture",q="isNotBlue",p=J.a2(d),o=p.i(d,"name")
s.a=H.i(o==null?"":o)
o=p.i(d,"description")
o=o==null?null:J.GP(o,"\n","<br>")
s.b=o==null?"":o
o=p.i(d,r)
o=H.i(o==null?"":o)
s.d=o
if(C.b.aj(o,"/"))s.d="assets/tekpack"+o
s.c=H.bK(p.i(d,q)!=null&&p.i(d,q))
s.str(H.b([],y.s))
for(o=y.b,x=y.f,w=0;w<=8;++w){v=x.a(J.GE(o.a(p.i(d,"crafting")),new X.xJ(w),new X.xK()))
if(v!=null&&J.U(v,r)!=null){u=H.i(J.U(v,r))
if(J.Cc(u,"/"))u="assets/tekpack"+u}else u=null
t=s.e;(t&&C.a).j(t,u)}},
str:function(d){this.e=y.a.a(d)}}
K.iH.prototype={
t:function(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="fluidBtn",h="style",g=j.aa(),f=document,e=T.W(f,g)
j.E(e,"container")
j.k(e)
x=T.a9(f,e,"img")
T.e(x,"alt","tekpack")
w=y.z
w.a(x)
j.E(x,"logo")
T.e(x,"src","assets/tekpack/logo.png")
j.v(x)
v=T.W(f,e)
j.E(v,"floatingCard")
j.k(v)
u=E.iF(j,3)
j.e=u
t=u.c
v.appendChild(t)
j.k(t)
j.f=new V.dq(t)
s=f.createElement("h2")
j.v(s)
T.Q(s,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
r=T.a9(f,s,"a")
T.e(r,"routerLink","/mcscript")
w.a(r)
j.k(r)
T.Q(r,"mcScript")
T.Q(s,".")
j.v(T.a9(f,s,"br"))
T.Q(s," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
w=G.bA(j,11)
j.r=w
q=w.c
T.e(q,i,"")
T.e(q,"highlight","")
T.e(q,h,"width: 50%;height: 60px;line-height: 30px")
j.k(q)
j.x=new Z.b5(q)
p=T.ak("Get it via ")
o=f.createElement("img")
T.e(o,"alt","dmanager")
T.e(o,"src","assets/dManager-icon.ico")
T.e(o,h,"height:25px;margin-left:5px")
j.v(o)
w=y._
j.r.D(j.x,[H.b([p,o],w)])
n=T.ak(" ")
u=G.bA(j,15)
j.y=u
m=u.c
T.e(m,i,"")
T.e(m,"secondary","")
j.k(m)
j.z=new Z.b5(m)
l=T.ak("Opensource on ")
k=f.createElement("img")
T.e(k,"alt","")
T.e(k,"src","assets/gitHub_icon.svg")
T.e(k,h,"height:25px")
j.v(k)
j.y.D(j.z,[H.b([l,k],w)])
j.e.D(j.f,[H.b([s,q,n,m],w)])
w=j.Q=new V.G(18,j,T.X(e))
j.ch=new K.P(new D.K(w,K.NL()),w)
w=j.cx=new V.G(19,j,T.X(e))
j.cy=new K.P(new D.K(w,K.NM()),w)
w=j.db=new V.G(20,j,T.X(e))
j.dx=new K.P(new D.K(w,K.NQ()),w)
w=y.C
J.aH(q,"click",j.B(j.gra(),w,w))
J.aH(m,"click",j.B(j.grd(),w,w))
w=j.d
j.dy=new K.nH(y.B.a(w.a.M(C.ab,w.b)))},
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
x.sL(w!=null&&J.ee(w))
v.Q.H()
v.cx.H()
v.db.H()
v.e.q()
v.r.q()
v.y.q()},
I:function(){var x=this
x.Q.G()
x.cx.G()
x.db.G()
x.e.u()
x.r.u()
x.y.u()},
rb:function(d){this.a.toString
window.location.href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
re:function(d){this.a.toString
window.location.href="https://github.com/Stevertus/tekPack"}}
K.rd.prototype={
t:function(){var x,w,v=this,u=document,t=u.createElement("div")
y.z.a(t)
v.E(t,"video")
v.k(t)
x=y.v.a(T.a9(u,t,"iframe"))
v.d=x
T.e(x,"allow","autoplay; encrypted-media")
T.e(v.d,"allowfullscreen","")
T.e(v.d,"frameborder","0")
v.k(v.d)
x=y.m.a(v.a.c).dy
w=y.A
v.sqr(A.M2(x.gue(x),w,w))
v.J(t)},
A:function(){var x=this,w=C.b.p("https://www.youtube.com/embed/",x.a.a.b)+"?rel=0&amp;controls=0&amp;showinfo=0",v=x.c.$1(w)
w=x.b
if(w==null?v!=null:w!==v){x.d.src=$.c4.c.j7(v)
x.b=v}},
sqr:function(d){this.c=y.e.a(d)}}
K.re.prototype={
t:function(){var x,w=this,v=document.createElement("div")
y.z.a(v)
w.E(v,"grid")
w.k(v)
x=w.b=new V.G(1,w,T.X(v))
w.c=new R.cI(x,new D.K(x,K.NN()))
w.J(v)},
A:function(){var x=this,w=x.a.a.a,v=x.d
if(v!==w){x.c.sbG(w)
x.d=w}x.c.aI()
x.b.H()},
I:function(){this.b.G()}}
K.rf.prototype={
t:function(){var x,w,v=this,u=document,t=u.createElement("div"),s=y.z
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
s=v.c=new V.G(5,v,T.X(v.z))
v.d=new R.cI(s,new D.K(s,K.NO()))
s=T.W(u,t)
v.Q=s
v.E(s,"description")
v.k(v.Q)
v.J(t)},
A:function(){var x,w,v,u=this,t=y.h.a(u.a.f.i(0,"$implicit")),s=t.e,r=u.r
if(r==null?s!=null:r!==s){u.d.sbG(s)
u.r=s}u.d.aI()
u.c.H()
r=t.a
if(r==null)r=""
u.b.Z(r)
x=t.d
r=u.e
if(r!=x){u.y.src=$.c4.c.bW(x)
u.e=x}w=!H.a7(t.c)
r=u.f
if(r!==w){T.hB(u.z,"crafting-blue",w)
u.f=w}v=t.b
r=u.x
if(r!=v){u.Q.innerHTML=$.c4.c.me(v)
u.x=v}},
I:function(){this.c.G()}}
K.lC.prototype={
t:function(){var x,w=this,v=document.createElement("div")
y.z.a(v)
w.E(v,"crafting-item")
w.k(v)
x=w.b=new V.G(1,w,T.X(v))
w.c=new K.P(new D.K(x,K.NP()),x)
w.J(v)},
A:function(){var x=H.i(this.a.f.i(0,"$implicit"))
this.c.sL(x!=null)
this.b.H()},
I:function(){this.b.G()}}
K.rg.prototype={
t:function(){var x=this,w=document.createElement("img")
x.c=w
x.v(w)
x.J(x.c)},
A:function(){var x=this,w=H.i(y.p.a(x.a.c).a.f.i(0,"$implicit")),v=x.b
if(v!=w){x.c.src=$.c4.c.bW(w)
x.b=w}}}
K.rh.prototype={
t:function(){var x,w,v=this,u=E.iF(v,0)
v.b=u
x=u.c
v.k(x)
v.c=new V.dq(x)
w=document.createElement("h2")
T.e(w,"id","changelog")
v.v(w)
T.Q(w,"Changelog")
u=v.d=new V.G(3,v,T.aU())
v.e=new R.cI(u,new D.K(u,K.NR()))
v.b.D(v.c,[[w,u]])
v.J(x)},
A:function(){var x,w=this,v=w.a,u=v.ch
if(u===0)w.c.C()
x=J.AF(J.AB(v.a.c))
v=w.f
if(v!==x){w.e.sbG(x)
w.f=x}w.e.aI()
w.d.H()
w.b.q()},
I:function(){this.d.G()
this.b.u()}}
K.ri.prototype={
t:function(){var x,w=this,v=document,u=v.createElement("div"),t=y.z
t.a(u)
w.k(u)
x=T.a9(v,u,"h4")
w.v(x)
x.appendChild(w.b.b)
t=t.a(T.a9(v,u,"ul"))
w.k(t)
t=w.c=new V.G(4,w,T.X(t))
w.d=new R.cI(t,new D.K(t,K.NS()))
w.J(u)},
A:function(){var x=this,w=x.a,v=w.f.i(0,"$implicit"),u=J.U(w.a.c,v)
w=x.e
if(w==null?u!=null:w!==u){w=x.d
y.y.a(u)
w.sbG(u)
x.e=u}x.d.aI()
x.c.H()
x.b.Z(H.i(O.bj(v)))},
I:function(){this.c.G()}}
K.rj.prototype={
t:function(){var x=document.createElement("li")
this.v(x)
x.appendChild(this.b.b)
this.J(x)},
A:function(){this.b.Z(H.i(O.bj(this.a.f.i(0,"$implicit"))))}}
K.rk.prototype={
t:function(){var x,w,v=this,u=new K.iH(E.ax(v,0,3)),t=$.E4
if(t==null)t=$.E4=O.ay($.N9,null)
u.b=t
x=document.createElement("tekpack")
u.c=y.z.a(x)
v.sbM(u)
w=v.b.c
v.sbL(new X.aS(H.b([],y.K)))
v.J(w)},
A:function(){var x=this.d.e
if(x===0)this.a.C()
this.b.q()}}
K.nH.prototype={
am:function(d,e){H.i(e)
this.a.toString
return new R.ip(e==null?"":e)}}
var z=a.updateTypes(["j<~>(q,n)","~(@)","@(@)","a4<aS>(al)"])
A.An.prototype={
$1:function(d){var x,w
this.c.a(d)
x=this.a
if(!x.b){w=x.c
w=w==null?d!=null:w!==d}else w=!0
if(w){x.b=!1
x.c=d
x.a=this.b.$1(d)}return x.a},
$S:function(){return this.d.h("@<0>").K(this.c).h("1(2)")}}
X.xL.prototype={
$1:function(d){var x,w,v,u="items",t=this.a,s=J.a2(d)
t.b=H.i(s.i(d,"video"))
x=s.i(d,"changes")
if(x==null){x=y.A
x=P.Z(x,x)}w=y.f
t.c=w.a(x)
if(s.i(d,u)!=null){t=t.a
v=0
while(!0){x=H.zd(J.aR(s.i(d,u)))
if(typeof x!=="number")return H.u(x)
if(!(v<x))break
C.a.j(t,X.I7(w.a(J.U(s.i(d,u),v))));++v}}},
$S:4}
X.xM.prototype={
$1:function(d){return P.ed(d)},
$S:3}
X.xJ.prototype={
$1:function(d){return J.ac(J.U(d,"slot"),this.a)},
$S:17}
X.xK.prototype={
$0:function(){return null},
$S:1};(function installTearOffs(){var x=a._static_2,w=a._static_1,v=a._instance_1u,u=a._instance_1i
x(K,"NL","Pb",0)
x(K,"NM","Pc",0)
x(K,"NN","Pd",0)
x(K,"NO","Pe",0)
x(K,"NP","Pf",0)
x(K,"NQ","Pg",0)
x(K,"NR","Ph",0)
x(K,"NS","Pi",0)
w(K,"NT","Pj",3)
var t
v(t=K.iH.prototype,"gra","rb",1)
v(t,"grd","re",1)
u(K.nH.prototype,"gue","am",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(H.bP,[A.An,X.xL,X.xM,X.xJ,X.xK])
x(P.w,[X.aS,X.kh,K.nH])
w(K.iH,E.O)
x(E.j,[K.rd,K.re,K.rf,K.lC,K.rg,K.rh,K.ri,K.rj])
w(K.rk,G.a4)})()
H.fp(b.typeUniverse,JSON.parse('{"fu":"B","fW":"B","fA":"c5","fv":"m","hd":"m","hg":"m","fx":"T","fy":"T","fI":"ah","h0":"ah","hc":"c1","hv":"bQ","fB":"D","h7":"D","hr":"F","hq":"bU","he":"bM","ho":"bh","fL":"bY","h4":"cn","h3":"cm","fO":"ap","fQ":"bn","fF":"bI","h8":"aX","iH":{"O":["aS"],"q":[],"t":[],"r":[],"O.T":"aS"},"rd":{"j":["aS"],"q":[],"y":[],"J":[],"t":[],"r":[],"A":[],"j.T":"aS"},"re":{"j":["aS"],"q":[],"y":[],"J":[],"t":[],"r":[],"A":[],"j.T":"aS"},"rf":{"j":["aS"],"q":[],"y":[],"J":[],"t":[],"r":[],"A":[],"j.T":"aS"},"lC":{"j":["aS"],"q":[],"y":[],"J":[],"t":[],"r":[],"A":[],"j.T":"aS"},"rg":{"j":["aS"],"q":[],"y":[],"J":[],"t":[],"r":[],"A":[],"j.T":"aS"},"rh":{"j":["aS"],"q":[],"y":[],"J":[],"t":[],"r":[],"A":[],"j.T":"aS"},"ri":{"j":["aS"],"q":[],"y":[],"J":[],"t":[],"r":[],"A":[],"j.T":"aS"},"rj":{"j":["aS"],"q":[],"y":[],"J":[],"t":[],"r":[],"A":[],"j.T":"aS"},"rk":{"a4":["aS"],"y":[],"t":[],"r":[],"A":[],"a4.T":"aS"}}'))
var y=(function rtii(){var x=H.aF
return{B:x("eY"),C:x("B"),z:x("D"),v:x("h5"),y:x("p<w>"),_:x("x<F>"),s:x("x<f>"),K:x("x<kh>"),a:x("o<f>"),b:x("o<@>"),f:x("M<@,@>"),P:x("C"),j:x("q"),N:x("f"),h:x("kh"),J:x("aS"),m:x("iH"),p:x("lC"),A:x("@"),e:x("@(@)")}})();(function constants(){C.c3=new D.aw("tekpack",K.NT(),H.aF("aw<aS>"))})();(function staticFields(){$.Nx=['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}']
$.E4=null
$.N9=[$.Nx]})()}
$__dart_deferred_initializers__["A4Ff77URxDaESdqKH41kNQ5iuu8="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_1.part.js.map
