self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G,Y,R={
ma:function(){var x=new R.hz(null)
x.c="[null]"
return x}},K={bR:function bR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=null
_.b=!1}},X,N={
d_:function(d,e){var x=null,w=new N.cZ(d,e,x,x,x,x,x)
w.dj(d)
w.f="get"
return w},
jc:function(d,e,f){var x=new N.cZ(d,e,1,"byte",f,null,null)
x.dj(d)
x.f="score"
return x},
mj:function(d,e){var x=new N.uo(e)
x.a="set"
x.ot(d)
return x},
uo:function uo(d){var _=this
_.d=_.c=_.b=_.a=null
_.e=d}},E={
B3:function(d,e,f){var x=new E.jq(e,d,f)
H.bP(d,".mcfunction","")
if(C.b.w(d,0,1)==="/")x.d=C.b.ai(d,1)
return x},
jq:function jq(d,e,f){var _=this
_.c=d
_.d=e
_.e=f
_.a=null
_.b=!1}},M={
ik:function(d,e,f){var x
if(e!=null){x=e>0?e-1:0
if(d>0)x+=(d-1)*9}else x=d-1
if(f)return new M.dJ(x,"enderchest."+x)
return new M.dJ(x,"container."+x)},
dJ:function dJ(d,e){this.a=d
this.b=e}},S={
f7:function(d,e,f,g){var x=new S.by(H.a([],y.o),d,e,"")
if(g!=null)x.sjT(g)
if(f)C.a.j(x.c,F.nN(x.e))
return x},
et:function(d){var x=H.a([],y.o),w=new S.by(x,null,d,"")
w.d=L.c5()
C.a.j(x,F.nN(d))
return w},
nM:function(d,e,f){var x=new S.by(H.a([],y.o),null,f,d)
x.r=e
return x},
by:function by(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r="0"
_.a=null
_.b=!1},
xj:function xj(d,e,f){this.a=d
this.b=e
this.c=f}},Q,D,O={
jz:function(d,e,f){var x=new O.ap(null)
x.ng(d,e,1,f)
return x}},V,A,T,L={
CX:function(d){var x=null,w=y.b
w=new L.cu("e",P.a_(w,w),d)
w.c8(x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1)
return w},
h6:function h6(d){this.b=d}},U,Z,B,F={
nN:function(d){var x=new F.k0(d)
x.c="add"
return x},
k0:function k0(d){var _=this
_.c=null
_.d=d
_.e="dummy"
_.a=null
_.b=!1}}
a.setFunctionNamesIfNecessary([R,K,N,E,M,S,O,L,F])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
G=c[5]
Y=c[6]
R=a.updateHolder(c[7],R)
K=a.updateHolder(c[8],K)
X=c[9]
N=a.updateHolder(c[10],N)
E=a.updateHolder(c[11],E)
M=a.updateHolder(c[12],M)
S=a.updateHolder(c[13],S)
Q=c[14]
D=c[15]
O=a.updateHolder(c[16],O)
V=c[17]
A=c[18]
T=c[19]
L=a.updateHolder(c[20],L)
U=c[21]
Z=c[22]
B=c[23]
F=a.updateHolder(c[24],F)
E.jq.prototype={
a3:function(d){return this.c}}
S.by.prototype={
nm:function(d,e,f,g){if(g!=null)this.sjT(g)
if(f)C.a.j(this.c,F.nN(this.e))},
nn:function(d,e){this.d=L.c5()
C.a.j(this.c,F.nN(this.e))},
cZ:function(d,e){if(d==null)d=this.d
if(e==null)e=this.e
return C.b.q(J.aJ(J.ak(d)," "),e)},
b5:function(){return this.cZ(null,null)},
bK:function(d){var x=P.at(this.c,!0,y.d)
C.a.j(x,d)
return S.f7(this.d,this.e,!1,x)},
q:function(d,e){if(H.bh(e))return this.j(0,e)
throw H.b("Please use either a Score or an Int in the operator +")},
O:function(d,e){var x=this.bK(D.ay("scoreboard players remove "+this.b5()+" "+C.d.n(e)))
return x},
aa:function(d,e){var x=this.ck(new L.aR(e+1,null,null))
return x},
bd:function(d,e){var x=this.iP(0,e)
return x},
e2:function(d,e){if(H.bh(e))return this.e0(0,e)
throw H.b("Please use either a Score, Data, Condition, Command or an Int in the operator >>")},
e0:function(d,e){return this.bK(D.ay("scoreboard players set "+this.b5()+" "+J.ak(e)))},
j1:function(d){return this.bK(D.ay("scoreboard players reset "+this.b5()))},
j:function(d,e){H.m(e)
return this.bK(D.ay("scoreboard players add "+this.b5()+" "+C.d.n(e)))},
mJ:function(d){return this.bK(D.ay("scoreboard players operation "+this.tT(d).f))},
jt:function(d){return this.bK(D.ay("scoreboard players operation "+this.b5()+" -= "+this.cZ(d.d,d.e)))},
h3:function(d){var x,w=d.f
if(w!=="get")throw H.b(C.b.q("Please set a score to Data.get and not Data.",w))
w="execute store result score "+this.b5()+" run data get "+C.b.q(J.aJ(d.d," "),d.e)+" "+d.r+" "
x=d.x
return this.bK(D.ay(w+C.d.n(x==null?1:x)))},
mN:function(d){var x="execute store result score "+this.b5()+" ",w=E.AU(d.cT(),!1)
if(0>=w.length)return H.c(w,0)
return this.bK(D.ay(C.b.q(x,w[0])))},
tB:function(d,e){y.z.a(d)
return O.jz(new S.xj(this,d,e),0,d.length-1)},
tT:function(d){return S.nM(this.b5()+" = "+this.cZ(d.d,d.e),"0","")},
tU:function(d){return S.nM(this.b5()+" < "+this.cZ(d.d,d.e),"0","")},
tS:function(d){return S.nM(this.b5()+" > "+this.cZ(d.d,d.e),"0","")},
jj:function(){return this.r},
iP:function(d,e){var x,w,v=this
v.r=J.ak(e)
x=v.b5()+" matches "
w=v.r
return S.nM(x+w,w,v.e)},
ck:function(d){var x,w,v=this
v.r=d.n(0)
x=v.b5()+" matches "
w=v.r
return S.nM(x+w,w,v.e)},
a3:function(d){return new O.ap(this.c)},
jk:function(d){return this.f},
sjT:function(d){this.c=y.s.a(d)}}
F.k0.prototype={
a3:function(d){var x,w=this,v="scoreboard objectives add "
switch(w.c){case"add":x=d.f
if(x==null)x="load"
return E.B3(x,D.ay(C.b.q(C.b.q(v,w.d)+" ",w.e)),!0)
case"addHere":return D.ay(C.b.q(C.b.q(v,w.d)+" ",w.e))
case"remove":return D.ay(C.b.q("scoreboard objectives remove ",w.d))
case"setdisplay":return D.ay(C.b.q(C.b.q("scoreboard objectives setdisplay ",w.e)+" ",w.d))}return R.ma()},
i:function(d,e){if(typeof e=="string")return S.f7(L.CX(e),this.d,!0,null)
throw H.b("The operator [] just accepts Entity or String!")}}
L.h6.prototype={
n:function(d){return this.b}}
M.dJ.prototype={
n:function(d){return P.w3(P.G(["slot",this.b,"id",this.a],y.m,y.q))}}
N.uo.prototype={
ot:function(d){var x=this
if(typeof d=="number"||!1)return x.b=J.ak(d)
if(d instanceof L.cu){x.d="entity"
return x.c=d.n(0)}if(d instanceof V.dz){x.d="block"
return x.c=d.n(0)}throw H.b("Please insert a Map, number, String, Entity, DataStorage or Location as value for Data Modify!")},
n:function(d){var x=this,w=x.a,v=x.d
return v!=null?w+" from "+(C.b.q(v+" ",x.c)+" "+x.e):w+C.b.q(" value ",x.b)},
ga2:function(d){return this.b}}
K.bR.prototype={
a3:function(d){var x,w=this,v=w.e
v.toString
x=w.c
if(x!=null)return D.ay("replaceitem entity "+x.n(0)+" "+v.b+" "+w.f.jg())
x=w.d
if(x!=null)return D.ay("replaceitem block "+x.n(0)+" "+v.b+" "+w.f.jg())
throw H.b("You have to give an entity or a location to the replaceitem-widget")}}
var z=a.updateTypes(["aj*(j*)"])
S.xj.prototype={
$1:function(d){var x,w=this.a,v=this.b
if(d>=v.length)return H.c(v,d)
x=w.bK(D.ay("scoreboard players operation "+w.tU(y.x.a(v[d])).f))
w=v.length
if(d>=w)return H.c(v,d)
return L.bq(v[d].ck(new L.aR(this.c,null,null)),!0,null,H.a([x],y.o))},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(R.aj,[E.jq,S.by,F.k0,K.bR])
w(S.xj,H.bM)
x(P.r,[L.h6,M.dJ,N.uo])})()
H.fe(b.typeUniverse,JSON.parse('{"fl":"B","fK":"B","fr":"c2","fm":"n","h1":"n","h5":"n","fo":"T","fp":"T","fx":"al","fP":"al","hl":"bQ","fs":"E","fX":"E","hh":"H","hg":"bU","h2":"bN","he":"bg","fz":"bY","fT":"ch","fS":"cg","fC":"aw","fE":"bk","fv":"bI","fY":"aW","jq":{"aj":[],"U":[]},"by":{"aj":[],"U":[]},"k0":{"aj":[],"U":[]},"bR":{"aj":[],"U":[]}}'))
0
var y={o:H.ah("y<U*>"),b:H.ah("@"),z:H.ah("o<by*>*"),s:H.ah("o<U*>*"),q:H.ah("r*"),x:H.ah("by*"),m:H.ah("f*"),d:H.ah("U*")};(function constants(){C.ap=new M.bT("minecraft:hopper",null,null)
C.aa=new L.h6("Sort.nearest")})()}
$__dart_deferred_initializers__["QqWAX/SplNvIj2ZlUyk7fDQ85/M="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
