self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
LJ(d,e,f){var x={},w=A.h3("result")
x.a=!0
x.b=null
return new B.zV(x,w,d,f,e)},
zV:function zV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
HE(d){var x=new B.nT(A.c([],y.m))
x.nj(d)
return x},
aP:function aP(d){this.a=d
this.c=this.b=null},
x5:function x5(d){this.a=d},
x6:function x6(){},
nT:function nT(d){var _=this
_.b=_.a=""
_.c=!1
_.d=""
_.e=d},
x3:function x3(d){this.a=d},
x4:function x4(){},
HF(){return D.c3},
OY(d,e){return new B.qX(A.H(y.j.a(d),A.n(e),y.J))},
OZ(d,e){return new B.qY(A.H(y.j.a(d),A.n(e),y.J))},
P_(d,e){y.j.a(d)
A.n(e)
return new B.qZ(A.ai(),A.H(d,e,y.J))},
P0(d,e){return new B.r_(A.H(y.j.a(d),A.n(e),y.J))},
P1(d,e){return new B.r0(A.H(y.j.a(d),A.n(e),y.J))},
P2(d,e){return new B.r1(A.H(y.j.a(d),A.n(e),y.J))},
P3(d,e){y.j.a(d)
A.n(e)
return new B.r2(A.ai(),A.H(d,e,y.J))},
P4(d,e){y.j.a(d)
A.n(e)
return new B.r3(A.ai(),A.H(d,e,y.J))},
P5(){return new B.r4(new A.cG())},
k2:function k2(d){var _=this
_.c=_.b=_.a=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=$
_.d=d},
qX:function qX(d){var _=this
_.b=null
_.d=_.c=$
_.a=d},
qY:function qY(d){var _=this
_.c=_.b=$
_.d=null
_.a=d},
qZ:function qZ(d,e){var _=this
_.b=d
_.d=_.c=$
_.x=_.r=_.f=_.e=null
_.Q=_.z=_.y=$
_.a=e},
r_:function r_(d){this.c=this.b=$
this.a=d},
r0:function r0(d){this.b=null
this.c=$
this.a=d},
r1:function r1(d){var _=this
_.e=_.d=_.c=_.b=$
_.f=null
_.a=d},
r2:function r2(d,e){var _=this
_.b=d
_.d=_.c=$
_.e=null
_.a=e},
r3:function r3(d,e){this.b=d
this.a=e},
r4:function r4(d){var _=this
_.c=_.b=_.a=_.e=$
_.d=d},
nv:function nv(d){this.a=d},
M4(d){var x,w=$.FV(),v=J.ah(w)
v.seT(w,d)
x=v.geT(w)
if(w._docChildren==null)v.sp6(w,new A.me(w,new A.ii(w)))
v=w._docChildren
v.toString
J.BG(v)
return x},
zA(d){var x=0,w=A.bl(y.N),v,u
var $async$zA=A.bm(function(e,f){if(e===1)return A.bi(f,w)
while(true)switch(x){case 0:x=3
return A.aX(A.Bj(A.h1(C.a.ab(d,"http")?d:"http://localhost:8080/"+d),null),$async$zA)
case 3:u=f
if(u.b!==200)throw A.d("Request failed!")
v=A.zr(J.N(A.yU(u.e).c.a,"charset")).aY(0,u.x)
x=1
break
case 1:return A.bj(v,w)}})
return A.bk($async$zA,w)},
zy(d){var x=0,w=A.bl(y.A),v,u
var $async$zy=A.bm(function(e,f){if(e===1)return A.bi(f,w)
while(true)switch(x){case 0:u=C.m
x=3
return A.aX(B.zA(d),$async$zy)
case 3:v=u.aY(0,f)
x=1
break
case 1:return A.bj(v,w)}})
return A.bk($async$zy,w)}},J,A,C,D
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[3],B)
J=c[1]
A=c[0]
C=c[2]
D=c[7]
B.aP.prototype={
w(){B.zy("assets/tekpack.json").bg(new B.x5(this),y.P).ip(new B.x6())}}
B.nT.prototype={
nj(d){var x,w,v,u,t=this,s="texture",r="isNotBlue",q=J.ac(d),p=q.k(d,"name")
t.a=A.p(p==null?"":p)
p=q.k(d,"description")
p=p==null?null:J.Gr(p,"\n","<br>")
t.b=p==null?"":p
p=q.k(d,s)
p=A.p(p==null?"":p)
t.d=p
if(C.a.ab(p,"/"))t.d="assets/tekpack"+p
t.c=A.b0(q.k(d,r)!=null&&q.k(d,r))
t.sul(A.c([],y.m))
for(p=y._,x=y.Y,w=0;w<=8;++w){v=x.a(J.Gf(p.a(q.k(d,"crafting")),new B.x3(w),new B.x4()))
if(v!=null&&J.N(v,s)!=null){u=A.p(J.N(v,s))
if(C.a.ab(u,"/"))u="assets/tekpack"+u
C.b.p(t.e,u)}else C.b.p(t.e,null)}},
sul(d){this.e=y.q.a(d)}}
B.k2.prototype={
t(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="_compView_3",g="rootElement",f="_FluidCard_3_5",e="_compView_11",d="fluidBtn",a0="style",a1="_FluidButton_11_5",a2="_compView_15",a3="_FluidButton_15_5",a4="_appEl_18",a5="_appEl_19",a6="_appEl_20",a7=i.a9(),a8=document
a8.toString
x=A.U(a8,a7)
i.C(x,"container")
w=y.z
w.a(x)
i.gi().j(x)
v=A.a5(a8,x,"img",w)
A.h(v,"alt","tekpack")
i.C(v,"logo")
A.h(v,"src","assets/tekpack/logo.png")
w.a(v)
i.gi().j(v)
u=A.U(a8,x)
i.C(u,"floatingCard")
w.a(u)
i.gi().j(u)
t=A.id(i,3)
A.b(i.e,h)
i.e=t
t=A.a(A.a(t,h).c,g)
u.appendChild(t).toString
i.gi().j(t)
A.b(i.f,f)
i.f=new A.d8(t)
s=a8.createElement("h2")
w.a(s)
i.gi().j(s)
A.P(s,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
r=A.a5(a8,s,"a",y.a)
A.h(r,"href","https://mcscript.stevertus.com")
w.a(r)
i.gi().j(r)
A.P(r,"mcScript")
A.P(s," . ")
t=w.a(A.a5(a8,s,"br",w))
i.gi().j(t)
A.P(s," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
t=A.by(i,11)
A.b(i.r,e)
i.r=t
t=A.a(A.a(t,e).c,g)
A.h(t,d,"")
A.h(t,"highlight","")
A.h(t,a0,"width: 50%; height: 60px; line-height: 30px")
i.gi().j(t)
A.b(i.x,a1)
i.x=new A.b_(t)
q=A.a6("Get it via ")
p=a8.createElement("img")
A.h(p,"alt","dmanager")
A.h(p,"src","assets/dManager-icon.ico")
A.h(p,a0,"height: 25px; margin-left: 5px")
w.a(p)
i.gi().j(p)
o=y.f
n=y.Q
A.a(i.r,e).D(A.a(i.x,a1),A.c([A.c([q,p],o)],n))
m=A.a6(" ")
l=A.by(i,15)
A.b(i.y,a2)
i.y=l
l=A.a(A.a(l,a2).c,g)
A.h(l,d,"")
A.h(l,"secondary","")
i.gi().j(l)
A.b(i.z,a3)
i.z=new A.b_(l)
k=A.a6("Opensource on ")
j=a8.createElement("img")
A.h(j,"alt","")
A.h(j,"src","assets/gitHub_icon.svg")
A.h(j,a0,"height: 25px")
w.a(j)
i.gi().j(j)
A.a(i.y,a2).D(A.a(i.z,a3),A.c([A.c([k,j],o)],n))
A.a(i.e,h).D(A.a(i.f,f),A.c([A.c([s,t,m,l],o)],n))
a8=new A.C(18,i,A.Z(x))
A.b(i.Q,a4)
i.Q=a8
a8=A.a(a8,a4)
w=A.a(i.Q,a4)
A.b(i.ch,"_NgIf_18_9")
i.ch=new A.O(new A.F(a8,B.Nr()),w)
a8=new A.C(19,i,A.Z(x))
A.b(i.cx,a5)
i.cx=a8
a8=A.a(a8,a5)
w=A.a(i.cx,a5)
A.b(i.cy,"_NgIf_19_9")
i.cy=new A.O(new A.F(a8,B.Ns()),w)
a8=new A.C(20,i,A.Z(x))
A.b(i.db,a6)
i.db=a8
a8=A.a(a8,a6)
w=A.a(i.db,a6)
A.b(i.dx,"_NgIf_20_9")
i.dx=new A.O(new A.F(a8,B.Nw()),w)
a8=y.C
J.a9(t,"click",i.B(i.grY(),a8,a8))
J.a9(l,"click",i.B(i.gt_(),a8,a8))
a8=i.d
a8=a8.a.L(C.ai,a8.b,y.B)
A.b(i.dy,"_pipe_safeURL_0")
i.dy=new B.nv(a8)},
A(){var x,w,v=this,u="_FluidButton_11_5",t="_FluidButton_15_5",s=A.a(v.a,"ctx"),r=v.d.f===0
if(r)A.a(v.f,"_FluidCard_3_5").w()
if(r)A.a(v.x,u).d=!0
if(r)A.a(v.x,u).w()
if(r)A.a(v.z,t).c=!0
if(r)A.a(v.z,t).w()
A.a(v.ch,"_NgIf_18_9").sK(s.b!=null)
x=A.a(v.cy,"_NgIf_19_9")
w=s.a.length
x.sK(w!==0)
x=A.a(v.dx,"_NgIf_20_9")
w=s.c
x.sK(w!=null&&J.e_(w))
A.a(v.Q,"_appEl_18").G()
A.a(v.cx,"_appEl_19").G()
A.a(v.db,"_appEl_20").G()
A.a(v.e,"_compView_3").q()
A.a(v.r,"_compView_11").q()
A.a(v.y,"_compView_15").q()},
E(){var x=this
A.a(x.Q,"_appEl_18").F()
A.a(x.cx,"_appEl_19").F()
A.a(x.db,"_appEl_20").F()
A.a(x.e,"_compView_3").u()
A.a(x.r,"_compView_11").u()
A.a(x.y,"_compView_15").u()},
rZ(d){A.a(this.a,"ctx")
y.F.a(window.location).href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
t0(d){A.a(this.a,"ctx")
y.F.a(window.location).href="https://github.com/Stevertus/tekPack"}}
B.qX.prototype={
grd(){return A.a(this.c,"_pipe_safeURL_0_0")},
t(){var x,w=this,v="_el_1",u=document,t=u.createElement("div")
y.z.a(t)
w.C(t,"video")
w.gi().j(t)
x=y.v
x=x.a(A.a5(u,t,"iframe",x))
A.b(w.d,v)
w.d=x
A.h(A.a(x,v),"allow","autoplay; encrypted-media")
A.h(A.a(w.d,v),"allowfullscreen","")
A.h(A.a(w.d,v),"frameborder","0")
x=A.a(w.d,v)
w.gi().j(x)
x=A.a(w.a.c.dy,"_pipe_safeURL_0")
x=y.g.a(B.LJ(x.gv9(x),y.L,y.N))
A.b(w.c,"_pipe_safeURL_0_0")
w.snW(x)
w.J(t)},
A(){var x,w=this,v=w.a.a.b
v.toString
x=w.re("https://www.youtube.com/embed/"+v+"?rel=0&amp;controls=0&amp;showinfo=0")
v=w.b
if(v!==x){A.a(w.d,"_el_1").src=A.EX(x)
w.b=x}},
snW(d){this.c=y.g.a(d)},
re(d){return this.grd().$1(d)}}
B.qY.prototype={
t(){var x,w,v=this,u="_appEl_1",t=document.createElement("div")
y.z.a(t)
v.C(t,"grid")
v.gi().j(t)
x=new A.C(1,v,A.Z(t))
A.b(v.b,u)
v.b=x
x=A.a(x,u)
w=A.a(v.b,u)
A.b(v.c,"_NgFor_1_9")
v.c=new A.ck(w,new A.F(x,B.Nt()))
v.J(t)},
A(){var x=this,w="_NgFor_1_9",v=x.a.a.a,u=x.d
if(u!==v){A.a(x.c,w).sbH(v)
x.d=v}u=A.a(x.c,w)
u.aR()
A.a(x.b,"_appEl_1").G()},
E(){A.a(this.b,"_appEl_1").F()}}
B.qZ.prototype={
t(){var x,w,v=this,u="_el_3",t="_el_4",s="_appEl_5",r="_el_6",q=document,p=q.createElement("div"),o=y.z
o.a(p)
v.C(p,"item")
v.gi().j(p)
x=o.a(A.a5(q,p,"h5",o))
v.gi().j(x)
x.appendChild(v.b.b).toString
o=o.a(A.a5(q,p,"img",o))
A.b(v.y,u)
v.y=o
A.h(A.a(o,u),"alt","")
v.C(A.a(v.y,u),"icon")
o=A.a(v.y,u)
v.gi().j(o)
o=y.d
x=o.a(A.U(q,p))
A.b(v.z,t)
v.z=x
v.C(A.a(x,t),"crafting-grid")
x=A.a(v.z,t)
v.gi().j(x)
x=new A.C(5,v,A.Z(A.a(v.z,t)))
A.b(v.c,s)
v.c=x
x=A.a(x,s)
w=A.a(v.c,s)
A.b(v.d,"_NgFor_5_9")
v.d=new A.ck(w,new A.F(x,B.Nu()))
o=o.a(A.U(q,p))
A.b(v.Q,r)
v.Q=o
v.C(A.a(o,r),"description")
o=A.a(v.Q,r)
v.gi().j(o)
v.J(p)},
A(){var x,w,v,u=this,t="_NgFor_5_9",s=u.a.f.k(0,"$implicit"),r=s.e,q=u.r
if(q!==r){A.a(u.d,t).sbH(r)
u.r=r}q=A.a(u.d,t)
q.aR()
A.a(u.c,"_appEl_5").G()
q=s.a
u.b.a_(q)
x=s.d
q=u.e
if(q!==x){A.a(u.y,"_el_3").src=A.eC(x)
u.e=x}w=!s.c
q=u.f
if(q!==w){A.eD(A.a(u.z,"_el_4"),"crafting-blue",w)
u.f=w}v=s.b
q=u.x
if(q!==v){A.a(u.Q,"_el_6").innerHTML=B.M4(v)
u.x=v}},
E(){A.a(this.c,"_appEl_5").F()}}
B.r_.prototype={
t(){var x,w,v=this,u="_appEl_1",t=document.createElement("div")
y.z.a(t)
v.C(t,"crafting-item")
v.gi().j(t)
x=new A.C(1,v,A.Z(t))
A.b(v.b,u)
v.b=x
x=A.a(x,u)
w=A.a(v.b,u)
A.b(v.c,"_NgIf_1_9")
v.c=new A.O(new A.F(x,B.Nv()),w)
v.J(t)},
A(){var x=this.a.f.k(0,"$implicit")
A.a(this.c,"_NgIf_1_9").sK(x!=null)
A.a(this.b,"_appEl_1").G()},
E(){A.a(this.b,"_appEl_1").F()}}
B.r0.prototype={
t(){var x=this,w="_el_0",v=document.createElement("img")
y.z.a(v)
A.b(x.c,w)
x.c=v
v=A.a(v,w)
x.gi().j(v)
x.J(A.a(x.c,w))},
A(){var x=this,w=x.a.c.a.f.k(0,"$implicit"),v=x.b
if(v!=w){A.a(x.c,"_el_0").src=A.eC(w)
x.b=w}}}
B.r1.prototype={
t(){var x,w,v,u=this,t="_compView_0",s="_FluidCard_0_5",r="_appEl_3",q=A.id(u,0)
A.b(u.b,t)
u.b=q
q=A.a(A.a(q,t).c,"rootElement")
u.gi().j(q)
A.b(u.c,s)
u.c=new A.d8(q)
x=document.createElement("h2")
A.h(x,"id","changelog")
y.z.a(x)
u.gi().j(x)
A.P(x,"Changelog")
w=new A.C(3,u,A.aR())
A.b(u.d,r)
u.d=w
w=A.a(w,r)
v=A.a(u.d,r)
A.b(u.e,"_NgFor_3_9")
u.e=new A.ck(v,new A.F(w,B.Nx()))
A.a(u.b,t).D(A.a(u.c,s),A.c([A.c([x,A.a(u.d,r)],y.f)],y.Q))
u.J(q)},
A(){var x,w=this,v="_NgFor_3_9",u=w.a,t=u.ch
if(t===0)A.a(w.c,"_FluidCard_0_5").w()
u=u.a.c
u.toString
x=J.Ac(J.A9(u))
u=w.f
if(u!==x){A.a(w.e,v).sbH(x)
w.f=x}u=A.a(w.e,v)
u.aR()
A.a(w.d,"_appEl_3").G()
A.a(w.b,"_compView_0").q()},
E(){A.a(this.d,"_appEl_3").F()
A.a(this.b,"_compView_0").u()}}
B.r2.prototype={
t(){var x,w=this,v="_appEl_4",u=document,t=u.createElement("div"),s=y.z
s.a(t)
w.gi().j(t)
x=s.a(A.a5(u,t,"h4",s))
w.gi().j(x)
x.appendChild(w.b.b).toString
s=s.a(A.a5(u,t,"ul",y.M))
w.gi().j(s)
s=new A.C(4,w,A.Z(s))
A.b(w.c,v)
w.c=s
s=A.a(s,v)
x=A.a(w.c,v)
A.b(w.d,"_NgFor_4_9")
w.d=new A.ck(x,new A.F(s,B.Ny()))
w.J(t)},
A(){var x,w=this,v="_NgFor_4_9",u=w.a,t=u.f.k(0,"$implicit")
u=u.a.c
u.toString
x=J.N(u,t)
u=w.e
if(u==null?x!=null:u!==x){u=A.a(w.d,v)
y.k.a(x)
u.sbH(x)
w.e=x}u=A.a(w.d,v)
u.aR()
A.a(w.c,"_appEl_4").G()
if(typeof t=="string")u=t
else u=t==null?"":A.u(t)
w.b.a_(u)},
E(){A.a(this.c,"_appEl_4").F()}}
B.r3.prototype={
t(){var x=document.createElement("li")
y.z.a(x)
this.gi().j(x)
x.appendChild(this.b.b).toString
this.J(x)},
A(){var x,w=this.a.f.k(0,"$implicit")
if(typeof w=="string")x=w
else x=w==null?"":A.u(w)
this.b.a_(x)}}
B.r4.prototype={
t(){var x,w=this,v="rootElement",u="componentView",t=new B.k2(A.av(w,0,3)),s=$.DD
if(s==null)s=$.DD=A.ay($.MQ,null)
A.b($,"componentStyles")
t.b=s
x=document.createElement("tekpack")
y.z.a(x)
A.b($,v)
t.c=x
x=A.j(w)
x.h("D<S.T>").a(t)
A.b(w.b,u)
w.sbL(t)
t=A.a(A.a(w.b,u).c,v)
x=x.h("S.T").a(new B.aP(A.c([],y.K)))
A.b(w.a,"component")
w.sbK(x)
w.J(t)},
au(d,e,f){var x
if(d===C.ai&&0===e){x=this.e
return x===$?this.e=C.a7:x}return f},
A(){var x=this.d.e
if(x===0)A.a(this.a,"component").w()
A.a(this.b,"componentView").q()}}
B.nv.prototype={
an(d,e){A.p(e)
return new A.jI(e)}}
var z=a.updateTypes(["k<~>(t,l)","~(@)","nu(i)","S<aP>()"])
B.zV.prototype={
$1(d){var x,w,v=this
v.d.a(d)
x=v.a
if(!x.a){w=x.b
w=w==null?d!=null:w!==d}else w=!0
if(w){x.a=!1
x.b=d
v.b.b=v.c.$1(d)}return v.b.c1()},
$S(){return this.e.h("@<0>").H(this.d).h("1(2)")}}
B.x5.prototype={
$1(d){var x,w,v="items",u=this.a,t=J.ac(d)
u.b=A.dz(t.k(d,"video"))
x=t.k(d,"changes")
if(x==null){x=y.A
x=A.X(x,x)}u.c=y.Y.a(x)
if(t.k(d,v)!=null)for(u=u.a,x=y.G,w=0;w<A.yN(J.ax(t.k(d,v)));++w)C.b.p(u,B.HE(x.a(J.N(t.k(d,v),w))))},
$S:3}
B.x6.prototype={
$1(d){return A.dB(d)},
$S:0}
B.x3.prototype={
$1(d){return J.ag(J.N(d,"slot"),this.a)},
$S:25}
B.x4.prototype={
$0(){return null},
$S:5};(function installTearOffs(){var x=a._static_2,w=a._static_0,v=a._instance_1u,u=a._instance_1i
x(B,"Nr","OY",0)
x(B,"Ns","OZ",0)
x(B,"Nt","P_",0)
x(B,"Nu","P0",0)
x(B,"Nv","P1",0)
x(B,"Nw","P2",0)
x(B,"Nx","P3",0)
x(B,"Ny","P4",0)
w(B,"Nz","P5",3)
var t
v(t=B.k2.prototype,"grY","rZ",1)
v(t,"gt_","t0",1)
u(B.nv.prototype,"gv9","an",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bR,[B.zV,B.x5,B.x6,B.x3])
x(A.r,[B.aP,B.nT,B.nv])
w(B.x4,A.fu)
w(B.k2,A.D)
x(A.k,[B.qX,B.qY,B.qZ,B.r_,B.r0,B.r1,B.r2,B.r3])
w(B.r4,A.S)})()
A.q1(b.typeUniverse,JSON.parse('{"k2":{"D":["aP"],"t":[],"v":[],"w":[],"D.T":"aP"},"qX":{"k":["aP"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aP"},"qY":{"k":["aP"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aP"},"qZ":{"k":["aP"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aP"},"r_":{"k":["aP"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aP"},"r0":{"k":["aP"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aP"},"r1":{"k":["aP"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aP"},"r2":{"k":["aP"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aP"},"r3":{"k":["aP"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aP"},"r4":{"S":["aP"],"A":[],"v":[],"w":[],"B":[],"S.T":"aP"}}'))
var y=(function rtii(){var x=A.aD
return{a:x("eG"),d:x("e4"),B:x("iY"),C:x("L"),z:x("Q"),v:x("fJ"),Q:x("J<o<r>>"),f:x("J<r>"),K:x("J<nT>"),m:x("J<i?>"),_:x("o<@>"),q:x("o<i?>"),F:x("fN"),G:x("K<@,@>"),P:x("ae"),j:x("t"),L:x("nu"),g:x("nu(i)"),N:x("i"),J:x("aP"),M:x("i7"),A:x("@"),k:x("m<r?>?"),Y:x("K<@,@>?")}})();(function constants(){D.c3=new A.az("tekpack",B.Nz(),A.aD("az<aP>"))})();(function staticFields(){$.Nd=A.c(['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}'],y.f)
$.DD=null
$.MQ=A.c([$.Nd],y.f)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"R6","FV",()=>{var w=A.KE().createDocumentFragment()
w.toString
return w})})()}
$__dart_deferred_initializers__["UK5EmxfkSP/38lKcezZIaIvgoXU="] = $__dart_deferred_initializers__.current

//# sourceMappingURL=main.dart.js_1.part.js.map
