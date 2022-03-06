self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
LL(d,e,f){var x={},w=A.h0("result")
x.a=!0
x.b=null
return new B.zT(x,w,d,f,e)},
zT:function zT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
HF(d){var x=new B.nQ(A.c([],y.m))
x.nh(d)
return x},
aO:function aO(d){this.a=d
this.c=this.b=null},
x4:function x4(d){this.a=d},
x5:function x5(){},
nQ:function nQ(d){var _=this
_.b=_.a=""
_.c=!1
_.d=""
_.e=d},
x2:function x2(d){this.a=d},
x3:function x3(){},
HG(){return D.c3},
P_(d,e){return new B.qV(A.H(y.j.a(d),A.m(e),y.J))},
P0(d,e){return new B.qW(A.H(y.j.a(d),A.m(e),y.J))},
P1(d,e){y.j.a(d)
A.m(e)
return new B.qX(A.ah(),A.H(d,e,y.J))},
P2(d,e){return new B.qY(A.H(y.j.a(d),A.m(e),y.J))},
P3(d,e){return new B.qZ(A.H(y.j.a(d),A.m(e),y.J))},
P4(d,e){return new B.r_(A.H(y.j.a(d),A.m(e),y.J))},
P5(d,e){y.j.a(d)
A.m(e)
return new B.r0(A.ah(),A.H(d,e,y.J))},
P6(d,e){y.j.a(d)
A.m(e)
return new B.r1(A.ah(),A.H(d,e,y.J))},
P7(){return new B.r2(new A.cE())},
k0:function k0(d){var _=this
_.c=_.b=_.a=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=$
_.d=d},
qV:function qV(d){var _=this
_.b=null
_.d=_.c=$
_.a=d},
qW:function qW(d){var _=this
_.c=_.b=$
_.d=null
_.a=d},
qX:function qX(d,e){var _=this
_.b=d
_.d=_.c=$
_.x=_.r=_.f=_.e=null
_.Q=_.z=_.y=$
_.a=e},
qY:function qY(d){this.c=this.b=$
this.a=d},
qZ:function qZ(d){this.b=null
this.c=$
this.a=d},
r_:function r_(d){var _=this
_.e=_.d=_.c=_.b=$
_.f=null
_.a=d},
r0:function r0(d,e){var _=this
_.b=d
_.d=_.c=$
_.e=null
_.a=e},
r1:function r1(d,e){this.b=d
this.a=e},
r2:function r2(d){var _=this
_.c=_.b=_.a=_.e=$
_.d=d},
nt:function nt(d){this.a=d},
M6(d){var x,w=$.FV(),v=J.ae(w)
v.seT(w,d)
x=v.geT(w)
if(w._docChildren==null)v.sp4(w,new A.mc(w,new A.ie(w)))
v=w._docChildren
v.toString
J.BF(v)
return x},
zy(d){var x=0,w=A.bk(y.N),v,u
var $async$zy=A.bl(function(e,f){if(e===1)return A.bh(f,w)
while(true)switch(x){case 0:x=3
return A.aV(A.Bh(A.fZ(C.a.ab(d,"http")?d:"http://localhost:8080/"+d),null),$async$zy)
case 3:u=f
if(u.b!==200)throw A.d("Request failed!")
v=A.zq(J.R(A.yT(u.e).c.a,"charset")).aX(0,u.x)
x=1
break
case 1:return A.bi(v,w)}})
return A.bj($async$zy,w)},
zw(d){var x=0,w=A.bk(y.A),v,u
var $async$zw=A.bl(function(e,f){if(e===1)return A.bh(f,w)
while(true)switch(x){case 0:u=C.m
x=3
return A.aV(B.zy(d),$async$zw)
case 3:v=u.aX(0,f)
x=1
break
case 1:return A.bi(v,w)}})
return A.bj($async$zw,w)}},J,A,C,D
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[3],B)
J=c[1]
A=c[0]
C=c[2]
D=c[7]
B.aO.prototype={
w(){B.zw("assets/tekpack.json").bf(new B.x4(this),y.P).io(new B.x5())}}
B.nQ.prototype={
nh(d){var x,w,v,u,t=this,s="texture",r="isNotBlue",q=J.af(d),p=q.k(d,"name")
t.a=A.p(p==null?"":p)
p=q.k(d,"description")
p=p==null?null:J.Gq(p,"\n","<br>")
t.b=p==null?"":p
p=q.k(d,s)
p=A.p(p==null?"":p)
t.d=p
if(C.a.ab(p,"/"))t.d="assets/tekpack"+p
t.c=A.aZ(q.k(d,r)!=null&&q.k(d,r))
t.sul(A.c([],y.m))
for(p=y._,x=y.Y,w=0;w<=8;++w){v=x.a(J.Gf(p.a(q.k(d,"crafting")),new B.x2(w),new B.x3()))
if(v!=null&&J.R(v,s)!=null){u=A.p(J.R(v,s))
if(C.a.ab(u,"/"))u="assets/tekpack"+u
C.b.p(t.e,u)}else C.b.p(t.e,null)}},
sul(d){this.e=y.q.a(d)}}
B.k0.prototype={
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
t=A.ia(i,3)
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
A.O(s,"tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ")
r=A.a5(a8,s,"a",y.a)
A.h(r,"href","https://mcscript.stevertus.com")
w.a(r)
i.gi().j(r)
A.O(r,"mcScript")
A.O(s," . ")
t=w.a(A.a5(a8,s,"br",w))
i.gi().j(t)
A.O(s," It introduces multiple technical parts and blocks to enrich the vanilla gameplay.")
t=A.bx(i,11)
A.b(i.r,e)
i.r=t
t=A.a(A.a(t,e).c,g)
A.h(t,d,"")
A.h(t,"highlight","")
A.h(t,a0,"width: 50%; height: 60px; line-height: 30px")
i.gi().j(t)
A.b(i.x,a1)
i.x=new A.aY(t)
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
l=A.bx(i,15)
A.b(i.y,a2)
i.y=l
l=A.a(A.a(l,a2).c,g)
A.h(l,d,"")
A.h(l,"secondary","")
i.gi().j(l)
A.b(i.z,a3)
i.z=new A.aY(l)
k=A.a6("Opensource on ")
j=a8.createElement("img")
A.h(j,"alt","")
A.h(j,"src","assets/gitHub_icon.svg")
A.h(j,a0,"height: 25px")
w.a(j)
i.gi().j(j)
A.a(i.y,a2).D(A.a(i.z,a3),A.c([A.c([k,j],o)],n))
A.a(i.e,h).D(A.a(i.f,f),A.c([A.c([s,t,m,l],o)],n))
a8=new A.C(18,i,A.a_(x))
A.b(i.Q,a4)
i.Q=a8
a8=A.a(a8,a4)
w=A.a(i.Q,a4)
A.b(i.ch,"_NgIf_18_9")
i.ch=new A.N(new A.E(a8,B.Nt()),w)
a8=new A.C(19,i,A.a_(x))
A.b(i.cx,a5)
i.cx=a8
a8=A.a(a8,a5)
w=A.a(i.cx,a5)
A.b(i.cy,"_NgIf_19_9")
i.cy=new A.N(new A.E(a8,B.Nu()),w)
a8=new A.C(20,i,A.a_(x))
A.b(i.db,a6)
i.db=a8
a8=A.a(a8,a6)
w=A.a(i.db,a6)
A.b(i.dx,"_NgIf_20_9")
i.dx=new A.N(new A.E(a8,B.Ny()),w)
a8=y.C
J.a9(t,"click",i.B(i.grW(),a8,a8))
J.a9(l,"click",i.B(i.grY(),a8,a8))
a8=i.d
a8=a8.a.L(C.ai,a8.b,y.B)
A.b(i.dy,"_pipe_safeURL_0")
i.dy=new B.nt(a8)},
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
x.sK(w!=null&&J.e3(w))
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
rX(d){A.a(this.a,"ctx")
y.F.a(window.location).href="https://dmanager.stevertus.com/pack/open/stevertus:tekpack"},
rZ(d){A.a(this.a,"ctx")
y.F.a(window.location).href="https://github.com/Stevertus/tekPack"}}
B.qV.prototype={
gra(){return A.a(this.c,"_pipe_safeURL_0_0")},
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
x=y.g.a(B.LL(x.gv9(x),y.L,y.N))
A.b(w.c,"_pipe_safeURL_0_0")
w.snU(x)
w.J(t)},
A(){var x,w=this,v=w.a.a.b
v.toString
x=w.rb("https://www.youtube.com/embed/"+v+"?rel=0&amp;controls=0&amp;showinfo=0")
v=w.b
if(v!==x){A.a(w.d,"_el_1").src=A.EX(x)
w.b=x}},
snU(d){this.c=y.g.a(d)},
rb(d){return this.gra().$1(d)}}
B.qW.prototype={
t(){var x,w,v=this,u="_appEl_1",t=document.createElement("div")
y.z.a(t)
v.C(t,"grid")
v.gi().j(t)
x=new A.C(1,v,A.a_(t))
A.b(v.b,u)
v.b=x
x=A.a(x,u)
w=A.a(v.b,u)
A.b(v.c,"_NgFor_1_9")
v.c=new A.cj(w,new A.E(x,B.Nv()))
v.J(t)},
A(){var x=this,w="_NgFor_1_9",v=x.a.a.a,u=x.d
if(u!==v){A.a(x.c,w).sbG(v)
x.d=v}u=A.a(x.c,w)
u.aR()
A.a(x.b,"_appEl_1").G()},
E(){A.a(this.b,"_appEl_1").F()}}
B.qX.prototype={
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
x=new A.C(5,v,A.a_(A.a(v.z,t)))
A.b(v.c,s)
v.c=x
x=A.a(x,s)
w=A.a(v.c,s)
A.b(v.d,"_NgFor_5_9")
v.d=new A.cj(w,new A.E(x,B.Nw()))
o=o.a(A.U(q,p))
A.b(v.Q,r)
v.Q=o
v.C(A.a(o,r),"description")
o=A.a(v.Q,r)
v.gi().j(o)
v.J(p)},
A(){var x,w,v,u=this,t="_NgFor_5_9",s=u.a.f.k(0,"$implicit"),r=s.e,q=u.r
if(q!==r){A.a(u.d,t).sbG(r)
u.r=r}q=A.a(u.d,t)
q.aR()
A.a(u.c,"_appEl_5").G()
q=s.a
u.b.a_(q)
x=s.d
q=u.e
if(q!==x){A.a(u.y,"_el_3").src=A.eD(x)
u.e=x}w=!s.c
q=u.f
if(q!==w){A.eE(A.a(u.z,"_el_4"),"crafting-blue",w)
u.f=w}v=s.b
q=u.x
if(q!==v){A.a(u.Q,"_el_6").innerHTML=B.M6(v)
u.x=v}},
E(){A.a(this.c,"_appEl_5").F()}}
B.qY.prototype={
t(){var x,w,v=this,u="_appEl_1",t=document.createElement("div")
y.z.a(t)
v.C(t,"crafting-item")
v.gi().j(t)
x=new A.C(1,v,A.a_(t))
A.b(v.b,u)
v.b=x
x=A.a(x,u)
w=A.a(v.b,u)
A.b(v.c,"_NgIf_1_9")
v.c=new A.N(new A.E(x,B.Nx()),w)
v.J(t)},
A(){var x=this.a.f.k(0,"$implicit")
A.a(this.c,"_NgIf_1_9").sK(x!=null)
A.a(this.b,"_appEl_1").G()},
E(){A.a(this.b,"_appEl_1").F()}}
B.qZ.prototype={
t(){var x=this,w="_el_0",v=document.createElement("img")
y.z.a(v)
A.b(x.c,w)
x.c=v
v=A.a(v,w)
x.gi().j(v)
x.J(A.a(x.c,w))},
A(){var x=this,w=x.a.c.a.f.k(0,"$implicit"),v=x.b
if(v!=w){A.a(x.c,"_el_0").src=A.eD(w)
x.b=w}}}
B.r_.prototype={
t(){var x,w,v,u=this,t="_compView_0",s="_FluidCard_0_5",r="_appEl_3",q=A.ia(u,0)
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
A.O(x,"Changelog")
w=new A.C(3,u,A.aQ())
A.b(u.d,r)
u.d=w
w=A.a(w,r)
v=A.a(u.d,r)
A.b(u.e,"_NgFor_3_9")
u.e=new A.cj(v,new A.E(w,B.Nz()))
A.a(u.b,t).D(A.a(u.c,s),A.c([A.c([x,A.a(u.d,r)],y.f)],y.Q))
u.J(q)},
A(){var x,w=this,v="_NgFor_3_9",u=w.a,t=u.ch
if(t===0)A.a(w.c,"_FluidCard_0_5").w()
u=u.a.c
u.toString
x=J.Ab(J.A7(u))
u=w.f
if(u!==x){A.a(w.e,v).sbG(x)
w.f=x}u=A.a(w.e,v)
u.aR()
A.a(w.d,"_appEl_3").G()
A.a(w.b,"_compView_0").q()},
E(){A.a(this.d,"_appEl_3").F()
A.a(this.b,"_compView_0").u()}}
B.r0.prototype={
t(){var x,w=this,v="_appEl_4",u=document,t=u.createElement("div"),s=y.z
s.a(t)
w.gi().j(t)
x=s.a(A.a5(u,t,"h4",s))
w.gi().j(x)
x.appendChild(w.b.b).toString
s=s.a(A.a5(u,t,"ul",y.M))
w.gi().j(s)
s=new A.C(4,w,A.a_(s))
A.b(w.c,v)
w.c=s
s=A.a(s,v)
x=A.a(w.c,v)
A.b(w.d,"_NgFor_4_9")
w.d=new A.cj(x,new A.E(s,B.NA()))
w.J(t)},
A(){var x,w=this,v="_NgFor_4_9",u=w.a,t=u.f.k(0,"$implicit")
u=u.a.c
u.toString
x=J.R(u,t)
u=w.e
if(u==null?x!=null:u!==x){u=A.a(w.d,v)
y.k.a(x)
u.sbG(x)
w.e=x}u=A.a(w.d,v)
u.aR()
A.a(w.c,"_appEl_4").G()
if(typeof t=="string")u=t
else u=t==null?"":A.u(t)
w.b.a_(u)},
E(){A.a(this.c,"_appEl_4").F()}}
B.r1.prototype={
t(){var x=document.createElement("li")
y.z.a(x)
this.gi().j(x)
x.appendChild(this.b.b).toString
this.J(x)},
A(){var x,w=this.a.f.k(0,"$implicit")
if(typeof w=="string")x=w
else x=w==null?"":A.u(w)
this.b.a_(x)}}
B.r2.prototype={
t(){var x,w=this,v="rootElement",u="componentView",t=new B.k0(A.av(w,0,3)),s=$.DC
if(s==null)s=$.DC=A.aw($.MS,null)
A.b($,"componentStyles")
t.b=s
x=document.createElement("tekpack")
y.z.a(x)
A.b($,v)
t.c=x
x=A.j(w)
x.h("D<S.T>").a(t)
A.b(w.b,u)
w.sbK(t)
t=A.a(A.a(w.b,u).c,v)
x=x.h("S.T").a(new B.aO(A.c([],y.K)))
A.b(w.a,"component")
w.sbJ(x)
w.J(t)},
au(d,e,f){var x
if(d===C.ai&&0===e){x=this.e
return x===$?this.e=C.a7:x}return f},
A(){var x=this.d.e
if(x===0)A.a(this.a,"component").w()
A.a(this.b,"componentView").q()}}
B.nt.prototype={
am(d,e){A.p(e)
return new A.jF(e)}}
var z=a.updateTypes(["k<~>(t,l)","~(@)","ns(i)","S<aO>()"])
B.zT.prototype={
$1(d){var x,w,v=this
v.d.a(d)
x=v.a
if(!x.a){w=x.b
w=w==null?d!=null:w!==d}else w=!0
if(w){x.a=!1
x.b=d
v.b.b=v.c.$1(d)}return v.b.c1()},
$S(){return this.e.h("@<0>").H(this.d).h("1(2)")}}
B.x4.prototype={
$1(d){var x,w,v="items",u=this.a,t=J.af(d)
u.b=A.dB(t.k(d,"video"))
x=t.k(d,"changes")
if(x==null){x=y.A
x=A.Y(x,x)}u.c=y.Y.a(x)
if(t.k(d,v)!=null)for(u=u.a,x=y.G,w=0;w<A.yM(J.ay(t.k(d,v)));++w)C.b.p(u,B.HF(x.a(J.R(t.k(d,v),w))))},
$S:3}
B.x5.prototype={
$1(d){return A.dE(d)},
$S:0}
B.x2.prototype={
$1(d){return J.aj(J.R(d,"slot"),this.a)},
$S:25}
B.x3.prototype={
$0(){return null},
$S:5};(function installTearOffs(){var x=a._static_2,w=a._static_0,v=a._instance_1u,u=a._instance_1i
x(B,"Nt","P_",0)
x(B,"Nu","P0",0)
x(B,"Nv","P1",0)
x(B,"Nw","P2",0)
x(B,"Nx","P3",0)
x(B,"Ny","P4",0)
x(B,"Nz","P5",0)
x(B,"NA","P6",0)
w(B,"NB","P7",3)
var t
v(t=B.k0.prototype,"grW","rX",1)
v(t,"grY","rZ",1)
u(B.nt.prototype,"gv9","am",2)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bQ,[B.zT,B.x4,B.x5,B.x2])
x(A.r,[B.aO,B.nQ,B.nt])
w(B.x3,A.fr)
w(B.k0,A.D)
x(A.k,[B.qV,B.qW,B.qX,B.qY,B.qZ,B.r_,B.r0,B.r1])
w(B.r2,A.S)})()
A.q_(b.typeUniverse,JSON.parse('{"k0":{"D":["aO"],"t":[],"v":[],"w":[],"D.T":"aO"},"qV":{"k":["aO"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aO"},"qW":{"k":["aO"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aO"},"qX":{"k":["aO"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aO"},"qY":{"k":["aO"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aO"},"qZ":{"k":["aO"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aO"},"r_":{"k":["aO"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aO"},"r0":{"k":["aO"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aO"},"r1":{"k":["aO"],"t":[],"A":[],"v":[],"G":[],"w":[],"B":[],"k.T":"aO"},"r2":{"S":["aO"],"A":[],"v":[],"w":[],"B":[],"S.T":"aO"}}'))
var y=(function rtii(){var x=A.aD
return{a:x("eG"),d:x("e8"),B:x("iW"),C:x("L"),z:x("P"),v:x("fG"),Q:x("J<o<r>>"),f:x("J<r>"),K:x("J<nQ>"),m:x("J<i?>"),_:x("o<@>"),q:x("o<i?>"),F:x("fK"),G:x("K<@,@>"),P:x("ac"),j:x("t"),L:x("ns"),g:x("ns(i)"),N:x("i"),J:x("aO"),M:x("i4"),A:x("@"),k:x("n<r?>?"),Y:x("K<@,@>?")}})();(function constants(){D.c3=new A.az("tekpack",B.NB(),A.aD("az<aO>"))})();(function staticFields(){$.Nf=A.c(['@font-face {font-family:"Minecraft";font-style:normal;font-weight:400;src:url("fonts/minecraft_font.woff") format("woff")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}'],y.f)
$.DC=null
$.MS=A.c([$.Nf],y.f)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"R9","FV",()=>{var w=A.KF().createDocumentFragment()
w.toString
return w})})()}
$__dart_deferred_initializers__["lAYrasnnMSdhTaYLRP6ocOvz37o="] = $__dart_deferred_initializers__.current

//# sourceMappingURL=main.dart.js_1.part.js.map
