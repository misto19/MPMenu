function ws_brick(t,e,n){function i(n){for(var i={},r=e.get(n),o=t.width/d,s=t.height/u,l=0;d*u>l;l++){var n=l%d,c=Math.floor(l/d)
i[l]=a(r,{x:n*o,y:c*s,w:o,h:s})}return i}function r(t,e,n,i,r){for(var o in e)e[o].topEdge.css({width:i,height:t,background:n[o],transform:"rotateX(90deg) translate3d(0,-"+t/2+"px,"+t/2+"px)"}),e[o].bottomEdge.css({width:i,height:t,background:n[o],transform:"rotateX(90deg) translate3d(0,-"+t/2+"px,"+(-r+t/2)+"px)"}),e[o].leftEdge.css({width:t,height:r,background:n[o],transform:"rotateY(90deg) translate3d("+t/2+"px,0,-"+t/2+"px)"}),e[o].rightEdge.css({width:t,height:r,background:n[o],transform:"rotateY(90deg) translate3d("+t/2+"px,0,"+(i-t/2)+"px)"})}function o(t,e){var n,i,r,o,s,a=(new Date).getTime(),c=function(){var d=(new Date).getTime()
for(var u in t)if(!(a+t[u].animate.delay>d)){var f=(d-(a+t[u].animate.delay))/t[u].animate.duration
if(s={},o="",f>1){if(t[u].part[0].ws_delay[1])return cancelAnimationFrame(c),void e()}else{.5>=f?(n=l.easing.easeInBack(1,2*f,0,1,1,1).toFixed(3),i=l.easing.easeInBackQ(1,2*f,0,1,1,1).toFixed(3),r=l.easing.easeInBackQ2(1,2*f,0,1,1,1).toFixed(3),t[u].back.css("backfaceVisibility","hidden")):(n=l.easing.easeOutBack(1,2*(f-.5),0,1,1,1).toFixed(3),i=l.easing.easeOutBackQ(1,2*(f-.5),0,1,1,1).toFixed(3),r=l.easing.easeOutBackQ2(1,2*(f-.5),0,1,1,1).toFixed(3),t[u].back.css("backfaceVisibility","visible"))
for(var p in t[u].animate[.5>=f?"half":"end"]){var m=t[u].animate[.5>=f?"begin":"half"][p]||0,h=t[u].animate[.5>=f?"half":"end"][p]||0
"object"!=typeof h&&(h="scale"===p||"rotateX"===p||"rotateY"===p?m+(h-m)*i:"left"===p||"top"===p?m+(h-m)*r:m+(h-m)*n),"rotateX"===p||"rotateY"===p||"rotateZ"===p?o+=p+"("+h+"deg) ":"scale"===p?o+=p+"("+h+") ":"translate3d"===p?o+=p+"("+(m[0]+(h[0]-m[0])*n).toFixed(3)+"px,"+(m[1]+(h[1]-m[1])*n).toFixed(3)+"px,"+(m[2]+(h[2]-m[2])*n).toFixed(3)+"px) ":s[p]=h}t[u].wrapper.css({transform:"translate3d("+(s.left?s.left:0).toFixed(3)+"px,"+(s.top?s.top:0).toFixed(3)+"px,0)"}),delete s.left,delete s.top,o&&(s.transform=o),t[u].part.css(s)}}requestAnimationFrame(c)}
c()}function s(e,i,s,a){var l=n.width(),c=n.height(),f=l/d,p=c/u,m=.4*t.duration>1e3?1e3:.4*t.duration,h=.6*t.duration,g=[0,0]
r(v,e,y[i],f,p),b.css({transformOrigin:l/2+"px "+c/2+"px 0",width:l,height:c})
for(var x in e){var T=M[x].delay*m
g[1]<=T&&(g[0]=x,g[1]=T),e[x].part[0].ws_delay=[T,0]}e[g[0]].part[0].ws_delay[1]=1
for(var x in e){var S=e[x]
Math.floor(x/d)
S.animate={delay:S.part[0].ws_delay[0],duration:h,begin:{left:0,top:0,width:f,height:p,scale:1,rotateX:0,rotateY:0,translate3d:[0,0,w?v:0]},half:{left:M[x].halfLeft*f,top:M[x].halfTop*p,scale:M[x].halfScale,rotateX:M[x].rotateX/2,rotateY:M[x].rotateY/2,translate3d:[0,0,(w?1:.5)*v]},end:{left:0,top:0,scale:1,rotateX:M[x].rotateX,rotateY:M[x].rotateY,translate3d:[0,0,v]}},S.front.find("img").css(s),S.back.css("backfaceVisibility","hidden").find("img").css(s),S.part.css({width:S.animate.begin.width,height:S.animate.begin.height,left:S.animate.begin.left,top:S.animate.begin.top})}o(e,a)}function a(t,e){e=e||{}
var n,i=1,r=e.exclude||[],o=document.createElement("canvas"),s=o.getContext("2d")
o.width=t.naturalWidth,o.height=t.naturalHeight
s.drawImage(t,0,0,t.naturalWidth,t.naturalHeight)
try{n=s.getImageData(e.x?e.x:0,e.y?e.y:0,e.w?e.w:t.width,e.h?e.h:t.height).data}catch(a){return console.log("error:unable to access image data: "+a),"#ccc"}for(var l=(e.w?e.w:t.width*e.h?e.h:t.height)||n.length,c={},d="",u=[],f={dominant:{name:"",count:0}},p=0;l>p;){if(u[0]=n[p],u[1]=n[p+1],u[2]=n[p+2],d=u.join(","),d in c?c[d]=c[d]+1:c[d]=1,-1===r.indexOf("rgb("+d+")")){var m=c[d]
m>f.dominant.count&&(f.dominant.name=d,f.dominant.count=m)}p+=4*i}return"rgb("+f.dominant.name+")"}var l=jQuery,c=l(this),d=t.cols||4,u=t.rows||3,f=2.5,p=2,m=t.perspective||2e3,h=n.find(".ws_list"),g=[],v=30,y={},b=l("<div>").addClass("ws_effect ws_brick").appendTo(n),x=t.support.transform&&t.support.transition&&t.support.perspective,w=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),T=/Firefox/.test(navigator.userAgent),M=[{zIndex:0,rotateX:360,rotateZ:-360,rotateY:180,halfScale:.5,halfLeft:.7,halfTop:.7,delay:.36},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:180,halfScale:.5,halfLeft:.2,halfTop:.4,delay:.81},{zIndex:1,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:.5,halfLeft:-.2,halfTop:.4,delay:.45},{zIndex:0,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:.5,halfLeft:-.7,halfTop:.7,delay:.63},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:.5,halfLeft:.7,halfTop:0,delay:.54},{zIndex:2,rotateX:360,rotateZ:-360,rotateY:180,halfScale:.5,halfLeft:.2,halfTop:0,delay:.38},{zIndex:2,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:.5,halfLeft:-.2,halfTop:0,delay:0},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:180,halfScale:.5,halfLeft:-.7,halfTop:0,delay:.72},{zIndex:0,rotateX:-360,rotateZ:360,rotateY:180,halfScale:.5,halfLeft:.7,halfTop:-.7,delay:1},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:.5,halfLeft:.2,halfTop:-.4,delay:.7},{zIndex:1,rotateX:360,rotateZ:-360,rotateY:180,halfScale:.5,halfLeft:-.2,halfTop:-.4,delay:.57},{zIndex:0,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:.5,halfLeft:-.7,halfTop:-.7,delay:.9}]
b.css({position:"absolute",top:0,left:0,width:n.width(),height:n.height(),transform:"translate3d(0,0,0)",transformOrigin:t.width/2+"px "+t.height/2+"px 0",perspective:m}).hide()
for(var S=0;d*u>S;S++){var A=S%d,D=Math.floor(S/d),k=l("<div>").css({position:"absolute",left:100*A/d+"%",top:100*D/u+"%",outline:"1px solid transparent",transformStyle:w||T?"flat":"preserve-3d",zIndex:M[S].zIndex,overflow:x?"visible":"hidden"}).appendTo(b),E=l("<div>").css({transform:"scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",outline:"1px solid transparent",transformStyle:"preserve-3d"}).appendTo(k),C=l("<div>").addClass("ws_front_image").appendTo(E),I=x?l("<div>").addClass("ws_back_image").appendTo(E):0
C.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"translate3d(0,0,0)"}).append(l("<img>").css({left:100*-A+"%",top:100*-D+"%",position:"absolute",outline:"1px solid transparent"})),x&&I.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg) translate3d(0,0,"+v+"px)"}).append(l("<img>").css({left:100*-A+"%",top:100*-D+"%",position:"absolute",outline:"1px solid transparent"}))
var F={position:"absolute",outline:"1px solid transparent"}
g[S]={part:E,front:C,back:I,wrapper:k,leftEdge:x?l("<div>").addClass("ws_left_edge").css(F).appendTo(E):0,rightEdge:x?l("<div>").addClass("ws_right_edge").css(F).appendTo(E):0,topEdge:x?l("<div>").addClass("ws_top_edge").css(F).appendTo(E):0,bottomEdge:x?l("<div>").addClass("ws_bottom_edge").css(F).appendTo(E):0}}var N
this.go=function(r,o){function a(t,e){return Math.random()*(e-t+1)+t}if(N)return o
b.show()
var m=l(e.get(o))
if(m={width:m.width(),height:m.height(),marginTop:parseFloat(m.css("marginTop")),marginLeft:parseFloat(m.css("marginLeft"))},x){g[0].front.find("img").on("load",function(){h.hide()})
for(var v in g)g[v].front.find("img").attr("src",e.get(o).src),g[v].back.find("img").attr("src",e.get(r).src)
y[o]||(y[o]=i(o)),N=new s(g,o,m,function(){h.show(),c.trigger("effectEnd"),b.hide()
for(var t in g)g[t].part.css({transition:"",transform:"rotateX(0) rotateY(0) translate3d(0,0,0)"})
N=0})}else{N=!0
var w=n.width(),T=n.height(),M=w/d,S=T/u
b.css({width:w,height:T})
var A=0
for(var v in g){var D=v%d,k=Math.floor(v/d)
g[v].front.find("img").attr("src",e.get(r).src).css(m)
var E=t.duration*(1-Math.abs((p*f-D*k)/(2*u*d))),C=a(-1,1)>0?1:-1,I=a(-1,1)>0?1:-1
g[v].wrapper.css({width:M,height:S}),g[v].part.css({position:"absolute",top:C*S,left:I*M,opacity:0,width:M,height:S}).animate({top:0,left:0,opacity:1},E,function(){A++,A==u*d&&(h.stop(1,1),N=!1,c.trigger("effectEnd"))})}}}}function ws_blinds(t,e,n){function i(e,n,i,r,o){t.support.transform&&t.support.transition?(n.transform||(n.transform=""),n.left&&(n.transform+=" translate3d("+(n.left?n.left:0)+"px,0,0)"),delete n.left,(i||r)&&(n.transition=i+"ms all "+r+"ms ease-in-out"),e.css(n),o&&e.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",o)):i?e.animate(n,i,"swing",o):e.css(n)}for(var r=jQuery,o=r(this),s=t.parts||3,a=r("<div>").addClass("ws_effect ws_blinds").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,"z-index":8}).hide().appendTo(n),l=r("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(a),c=[],d=document.addEventListener,u=0;s>u;u++)c[u]=r("<div>").css({position:d?"relative":"absolute",display:d?"inline-block":"block",height:"100%",width:(100/s+.001).toFixed(3)+"%",border:"none",margin:0,overflow:"hidden",top:0,left:d?0:(100*u/s).toFixed(3)+"%"}).appendTo(a)
this.go=function(d,u,f){void 0==f&&(f=u>d?1:0),a.find("img").stop(!0,!0),a.show()
var p=r(".ws_list",n)
t.fadeOut&&p.fadeOut((1-1/s)*t.duration)
var m=r(e[u]),h={width:m.width()||t.width,height:m.height()||t.height},g=m.clone().css(h).appendTo(l)
i(g,{left:0}),i(g,{left:(f?-1:1)*g.width()*.5},t.duration,.1*t.duration)
for(var v=0;v<c.length;v++){var y=c[v],b=r(e[d]).clone().css({position:"absolute",top:0}).css(h).appendTo(y)
i(b,{left:f?b.width()-y.position().left:-b.width()}),i(b,{left:-y.position().left},t.duration/(c.length+1)*(f?c.length-v+1:v+2),0,!f&&v==c.length-1||f&&!v?function(){o.trigger("effectEnd"),a.hide().find("img").remove(),g.remove()}:!1)}}}function ws_fade(t,e,n){var i=jQuery,r=i(this),o=(i(".ws_list",n),{position:"absolute",left:0,top:0,width:"100%",height:"100%",maxHeight:"none",maxWidth:"none",transform:"translate3d(0,0,0)"}),s=i("<div>").addClass("ws_effect ws_fade").css(o).css("overflow","hidden").appendTo(n)
this.go=function(n,a){var l=i(e.get(n)),c={width:l.width(),height:l.height()}
if(l=l.clone().css(o).css(c).hide().appendTo(s),!t.noCross){var d=i(e.get(a)).clone().css(o).css(c).appendTo(s)
d.fadeOut(t.duration,function(){d.remove()})}l.fadeIn(t.duration,function(){r.trigger("effectEnd"),l.remove()})}}function ws_flip(t,e,n){function i(t,e,n){t[n]||(t[n]=[]),t[n][t[n].length]=e}function r(){for(var t=u.width(),e=u.height(),n=0;c*d>n;n++){var i=n%c,r=Math.floor(n/c),o=Math.round(t*i/c),s=Math.round(e*r/d),l=Math.round(t*(i+1)/c)-o,p=Math.round(e*(r+1)/d)-s
a(f[n]).css({width:l+"px",height:p+"px",left:o+"px",top:s+"px"}).data({width:l,height:p})}}function o(e,n,i){t.support.transform?e.animate({scaleX:.8,scaleY:-1},{easing:"easeInOutCubic",duration:n,complete:i}):e.each(function(t,e){e=a(e),e.animate({width:.8*e.data("width")+"px",height:0},{easing:"easeInOutCubic",duration:n,complete:i})})}function s(e,n,i){t.support.transform?e.animate({scaleX:1,scaleY:1},{easing:"easeInOutCubic",duration:n,complete:function(){e.css({"-o-transform":"none"}),i&&i()}}):e.each(function(t,e){e=a(e),e.animate({width:e.data("width")+"px",height:e.data("height")+"px"},{easing:"easeInOutCubic",duration:n,complete:i})})}for(var a=jQuery,l=a(this),c=t.cols||Math.round(t.width/90),d=t.rows||Math.round(t.height/30),u=a("<div>").addClass("ws_effect ws_flip").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(n),f=[],p=[.7*c,2.5*c],m=[[],[]],h=0;c*d>h;h++){var g=h%c,v=Math.floor(h/c),y=f[h]=document.createElement("div")
a(y).css({position:"absolute",overflow:"hidden"}).append(a("<img>").css({position:"absolute",top:0,left:0})).appendTo(u),i(m[0],y,2*v+g),i(m[1],y,Math.abs(h-(c*d>>1)))}var b
this.go=function(i,h){function g(){k<M.length&&o(a(M[k]),D)
var t=k-S
if(t>=0&&t<M.length){var n,r=a(M[t])
t>=M.length-1&&(n=function(){b&&(T.find("img").css({visibility:"visible"}),l.trigger("effectEnd"),u.hide(),b=0)}),s(r,D,n),r.find("img").attr("src",e.get(i).src)}k++,k-S<M.length&&setTimeout(g,A)}if(b)return-1
b=1,r()
var v="type"in t?t.type:Math.round(Math.random()*(m.length-1)),y=a(e.get(h))
y={width:y.width(),height:y.height(),marginTop:parseFloat(y.css("marginTop")),marginLeft:parseFloat(y.css("marginLeft"))}
var x=n.width()/c,w=n.height()/d
a(f).stop(1,1).css({opacity:1,"z-index":3}).find("img").attr("src",e.get(h).src).css(y).each(function(t){var e=t%c,n=Math.floor(t/c)
a(this).css({left:-x*e,top:-w*n})}),u.show()
var T=a(".ws_list",n)
T.find("img").css({visibility:"hidden"})
var M=m[v],S=Math.round(p[v]),A=.9*t.duration/(M.length+2*S),D=A*S
t.support.transform&&(D/=2)
var k=0
g()}}jQuery.extend(jQuery.easing,{easeInBack:function(t,e,n,i,r,o){return void 0==o&&(o=1.70158),i*(e/=r)*e*((o+1)*e-o)+n},easeOutBack:function(t,e,n,i,r,o){return void 0==o&&(o=1.70158),i*((e=e/r-1)*e*((o+1)*e+o)+1)+n},easeInBackQ:function(t,e,n,i,r,o){var s=(e/=r)*e
return n+i*s*(4*e*s-8*s+8*e-3)},easeOutBackQ:function(t,e,n,i,r,o){var s=(e/=r)*e
return n+i*(4*s*e*s-12*s*s+16*s*e-13*s+6*e)},easeInBackQ2:function(t,e,n,i,r,o){var s=(e/=r)*e
return n+i*s*(1.5*e*s-2.5*s+5*e-3)},easeOutBackQ2:function(t,e,n,i,r,o){var s=(e/=r)*e
return n+i*(1.5*s*e*s-5*s*s+10*s*e-12*s+6.5*e)}}),function(t,e,n,i){function r(t){return parseFloat(t)}function o(){var t={transformProperty:"",MozTransform:"-moz-",WebkitTransform:"-webkit-",OTransform:"-o-",msTransform:"-ms-"}
for(var e in t)if(void 0!==p[e])return t[e]
return null}function s(){if(void 0!==e.Modernizr)return Modernizr.csstransforms
var t=["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"]
for(var n in t)if(p[t[n]]!==i)return!0}function a(e,n){var i=d.exec(t.trim(n))
if(i[3]&&"px"!==i[3]){var r="paddingBottom",o=t.style(e,r)
return t.style(e,r,n),n=l(e,r),t.style(e,r,o),n}return parseFloat(n)}function l(e,n){if(null!=e[n]&&(!e.style||null==e.style[n]))return e[n]
var i=parseFloat(t.css(e,n))
return i&&i>-1e4?i:0}var c=/progid:DXImageTransform\.Microsoft\.Matrix\(.*?\)/,d=/^([\+\-]=)?([\d+.\-]+)(.*)$/,u=/%/,f=n.createElement("modernizr"),p=f.style,m=o(),h=null!==m?m+"transform":!1,g=null!==m?m+"transform-origin":!1
t.support.csstransforms=s(),"-ms-"==m&&(h="msTransform",g="msTransformOrigin"),t.extend({transform:function(e){e.transform=this,this.$elem=t(e),this.applyingMatrix=!1,this.matrix=null,this.height=null,this.width=null,this.outerHeight=null,this.outerWidth=null,this.boxSizingValue=null,this.boxSizingProperty=null,this.attr=null,this.transformProperty=h,this.transformOriginProperty=g}}),t.extend(t.transform,{funcs:["matrix","origin","reflect","reflectX","reflectXY","reflectY","rotate","scale","scaleX","scaleY","skew","skewX","skewY","translate","translateX","translateY"]}),t.fn.transform=function(e,n){return this.each(function(){var i=this.transform||new t.transform(this)
e&&i.exec(e,n)})},t.transform.prototype={exec:function(e,n){return n=t.extend(!0,{forceMatrix:!1,preserve:!1},n),this.attr=null,e=n.preserve?t.extend(!0,this.getAttrs(!0,!0),e):t.extend(!0,{},e),this.setAttrs(e),t.support.csstransforms&&!n.forceMatrix?this.execFuncs(e):t.browser.msie||t.support.csstransforms&&n.forceMatrix?this.execMatrix(e):!1},execFuncs:function(e){var n=[]
for(var i in e)"origin"==i?this[i].apply(this,t.isArray(e[i])?e[i]:[e[i]]):-1!==t.inArray(i,t.transform.funcs)&&n.push(this.createTransformFunc(i,e[i]))
return this.$elem.css(h,n.join(" ")),!0},execMatrix:function(e){function n(t,e){return u.test(t)?parseFloat(t)/100*d["safeOuter"+(e?"Height":"Width")]():a(l,t)}var i,o,s,l=this.$elem[0],d=this,f=/translate[X|Y]?/,p=[]
for(var g in e){switch(t.type(e[g])){case"array":s=e[g]
break
case"string":s=t.map(e[g].split(","),t.trim)
break
default:s=[e[g]]}t.matrix[g]?(s=t.cssAngle[g]?t.map(s,t.angle.toDegree):t.cssNumber[g]?t.map(s,r):t.map(s,n),o=t.matrix[g].apply(this,s),f.test(g)?p.push(o):i=i?i.x(o):o):"origin"==g&&this[g].apply(this,s)}i=i||t.matrix.identity(),t.each(p,function(t,e){i=i.x(e)})
var v=parseFloat(i.e(1,1).toFixed(6)),y=parseFloat(i.e(2,1).toFixed(6)),b=parseFloat(i.e(1,2).toFixed(6)),x=parseFloat(i.e(2,2).toFixed(6)),w=3===i.rows?parseFloat(i.e(1,3).toFixed(6)):0,T=3===i.rows?parseFloat(i.e(2,3).toFixed(6)):0
if(t.support.csstransforms&&"-moz-"===m)this.$elem.css(h,"matrix("+v+", "+y+", "+b+", "+x+", "+w+"px, "+T+"px)")
else if(t.support.csstransforms)this.$elem.css(h,"matrix("+v+", "+y+", "+b+", "+x+", "+w+", "+T+")")
else if(t.browser.msie){var M=", FilterType='nearest neighbor'",S=this.$elem[0].style,A="progid:DXImageTransform.Microsoft.Matrix(M11="+v+", M12="+b+", M21="+y+", M22="+x+", sizingMethod='auto expand'"+M+")",D=S.filter||t.css(this.$elem[0],"filter")||""
S.filter=c.test(D)?D.replace(c,A):D?D+" "+A:A,this.applyingMatrix=!0,this.matrix=i,this.fixPosition(i,w,T),this.applyingMatrix=!1,this.matrix=null}return!0},origin:function(e,n){if(t.support.csstransforms)return void 0===n?this.$elem.css(g,e):this.$elem.css(g,e+" "+n),!0
switch(e){case"left":e="0"
break
case"right":e="100%"
break
case"center":case i:e="50%"}switch(n){case"top":n="0"
break
case"bottom":n="100%"
break
case"center":case i:n="50%"}return this.setAttr("origin",[u.test(e)?e:a(this.$elem[0],e)+"px",u.test(n)?n:a(this.$elem[0],n)+"px"]),!0},createTransformFunc:function(e,n){if("reflect"===e.substr(0,7)){var i=n?t.matrix[e]():t.matrix.identity()
return"matrix("+i.e(1,1)+", "+i.e(2,1)+", "+i.e(1,2)+", "+i.e(2,2)+", 0, 0)"}return"matrix"==e&&"-moz-"===m&&(n[4]=n[4]?n[4]+"px":0,n[5]=n[5]?n[5]+"px":0),e+"("+(t.isArray(n)?n.join(", "):n)+")"},fixPosition:function(e,n,i,r,o){var s=new t.matrix.calc(e,this.safeOuterHeight(),this.safeOuterWidth()),a=this.getAttr("origin"),l=s.originOffset(new t.matrix.V2(u.test(a[0])?parseFloat(a[0])/100*s.outerWidth:parseFloat(a[0]),u.test(a[1])?parseFloat(a[1])/100*s.outerHeight:parseFloat(a[1]))),c=s.sides(),d=this.$elem.css("position")
"static"==d&&(d="relative")
var f={top:0,left:0},p={position:d,top:l.top+i+c.top+f.top+"px",left:l.left+n+c.left+f.left+"px",zoom:1}
this.$elem.css(p)}}}(jQuery,this,this.document),function(t,e,n,i){function r(){if(o)return o
var t={boxSizing:"box-sizing",MozBoxSizing:"-moz-box-sizing",WebkitBoxSizing:"-webkit-box-sizing",OBoxSizing:"-o-box-sizing"},e=n.body
for(var i in t)if(void 0!==e.style[i])return o=t[i]
return null}t.extend(t.transform.prototype,{safeOuterHeight:function(){return this.safeOuterLength("height")},safeOuterWidth:function(){return this.safeOuterLength("width")},safeOuterLength:function(e){var n="outer"+("width"==e?"Width":"Height")
if(!t.support.csstransforms&&t.browser.msie){if(e="width"==e?"width":"height",this.applyingMatrix&&!this[n]&&this.matrix){var i=new t.matrix.calc(this.matrix,1,1),o=i.offset(),s=this.$elem[n]()/o[e]
return this[n]=s,s}if(this.applyingMatrix&&this[n])return this[n]
var a={height:["top","bottom"],width:["left","right"]},l=this.$elem[0],c=parseFloat(t.css(l,e,!0)),d=this.boxSizingProperty,u=this.boxSizingValue
return this.boxSizingProperty||(d=this.boxSizingProperty=r()||"box-sizing",u=this.boxSizingValue=this.$elem.css(d)||"content-box"),this[n]&&this[e]==c?this[n]:(this[e]=c,!d||"padding-box"!=u&&"content-box"!=u||(c+=parseFloat(t.css(l,"padding-"+a[e][0],!0))||0+parseFloat(t.css(l,"padding-"+a[e][1],!0))||0),d&&"content-box"==u&&(c+=parseFloat(t.css(l,"border-"+a[e][0]+"-width",!0))||0+parseFloat(t.css(l,"border-"+a[e][1]+"-width",!0))||0),this[n]=c,c)}return this.$elem[n]()}})
var o=null}(jQuery,this,this.document),function(t,e,n,i){var r=/([\w\-]*?)\((.*?)\)/g,o="data-transform",s=/\s/,a=/,\s?/
t.extend(t.transform.prototype,{setAttrs:function(e){var n,i=""
for(var r in e)n=e[r],t.isArray(n)&&(n=n.join(", ")),i+=" "+r+"("+n+")"
this.attr=t.trim(i),this.$elem.attr(o,this.attr)},setAttr:function(e,n){t.isArray(n)&&(n=n.join(", "))
var i=this.attr||this.$elem.attr(o)
if(i&&-1!=i.indexOf(e)){var s,a=[]
for(r.lastIndex=0;s=r.exec(i);)e==s[1]?a.push(e+"("+n+")"):a.push(s[0])
this.attr=a.join(" "),this.$elem.attr(o,this.attr)}else this.attr=t.trim(i+" "+e+"("+n+")"),this.$elem.attr(o,this.attr)},getAttrs:function(){var t=this.attr||this.$elem.attr(o)
if(!t)return{}
var e,n,i={}
for(r.lastIndex=0;null!==(e=r.exec(t));)e&&(n=e[2].split(a),i[e[1]]=1==n.length?n[0]:n)
return i},getAttr:function(e){var n=this.getAttrs()
return void 0!==n[e]?n[e]:"origin"===e&&t.support.csstransforms?this.$elem.css(this.transformOriginProperty).split(s):"origin"===e?["50%","50%"]:t.cssDefault[e]||0}}),void 0===t.cssAngle&&(t.cssAngle={}),t.extend(t.cssAngle,{rotate:!0,skew:!0,skewX:!0,skewY:!0}),void 0===t.cssDefault&&(t.cssDefault={}),t.extend(t.cssDefault,{scale:[1,1],scaleX:1,scaleY:1,matrix:[1,0,0,1,0,0],origin:["50%","50%"],reflect:[1,0,0,1,0,0],reflectX:[1,0,0,1,0,0],reflectXY:[1,0,0,1,0,0],reflectY:[1,0,0,1,0,0]}),void 0===t.cssMultipleValues&&(t.cssMultipleValues={}),t.extend(t.cssMultipleValues,{matrix:6,origin:{length:2,duplicate:!0},reflect:6,reflectX:6,reflectXY:6,reflectY:6,scale:{length:2,duplicate:!0},skew:2,translate:2}),t.extend(t.cssNumber,{matrix:!0,reflect:!0,reflectX:!0,reflectXY:!0,reflectY:!0,scale:!0,scaleX:!0,scaleY:!0}),t.each(t.transform.funcs,function(e,n){t.cssHooks[n]={set:function(e,i){var r=e.transform||new t.transform(e),o={}
o[n]=i,r.exec(o,{preserve:!0})},get:function(e,i){var r=e.transform||new t.transform(e)
return r.getAttr(n)}}}),t.each(["reflect","reflectX","reflectXY","reflectY"],function(e,n){t.cssHooks[n].get=function(e,i){var r=e.transform||new t.transform(e)
return r.getAttr("matrix")||t.cssDefault[n]}})}(jQuery,this,this.document),function(t,e,n,i){function r(e,n){null!=e[n]&&(!e.style||null==e.style[n])
var i=parseFloat(t.css(e,n))
return i&&i>-1e4?i:0}function o(e,n,i){var o=t.cssMultipleValues[this.prop],a=t.cssAngle[this.prop]
if(o||!t.cssNumber[this.prop]&&-1!==t.inArray(this.prop,t.transform.funcs)){this.values=[],o||(o=1)
var c=this.options.original[this.prop],d=t(this.elem).css(this.prop),u=t.cssDefault[this.prop]||0
t.isArray(d)||(d=[d]),t.isArray(c)||(c="string"===t.type(c)?c.split(","):[c])
for(var f=o.length||o,p=0;c.length<f;)c.push(o.duplicate?c[0]:u[p]||0),p++
var m,h,g,v=this,y=v.elem.transform
orig=t.style(v.elem,l),t.each(c,function(e,n){m=d[e]?d[e]:u[e]&&!o.duplicate?u[e]:o.duplicate?d[0]:0,a?m=t.angle.toDegree(m):t.cssNumber[v.prop]||(h=s.exec(t.trim(m)),h[3]&&"px"!==h[3]&&("%"===h[3]?m=parseFloat(h[2])/100*y["safeOuter"+(e?"Height":"Width")]():(t.style(v.elem,l,m),m=r(v.elem,l),t.style(v.elem,l,orig)))),m=parseFloat(m),h=s.exec(t.trim(n)),h?(g=parseFloat(h[2]),i=h[3]||"px",a?(g=t.angle.toDegree(g+i),i="deg"):t.cssNumber[v.prop]||"%"!==i?t.cssNumber[v.prop]||"px"===i||(t.style(v.elem,l,(g||1)+i),m=(g||1)/r(v.elem,l)*m,t.style(v.elem,l,orig)):m=m/y["safeOuter"+(e?"Height":"Width")]()*100,h[1]&&(g=("-="===h[1]?-1:1)*g+m)):(g=n,i=""),v.values.push({start:m,end:g,unit:i})})}}var s=/^([+\-]=)?([\d+.\-]+)(.*)$/,a=t.fn.animate
t.fn.animate=function(e,n,i,r){var o=t.speed(n,i,r),s=t.cssMultipleValues
return o.complete=o.old,t.isEmptyObject(e)||(void 0===o.original&&(o.original={}),t.each(e,function(n,i){if(s[n]||t.cssAngle[n]||!t.cssNumber[n]&&-1!==t.inArray(n,t.transform.funcs)){var r=null
if(jQuery.isArray(e[n])){var a=1,l=i.length
s[n]&&(a=void 0===s[n].length?s[n]:s[n].length),(l>a||a>l&&2==l||2==l&&2==a&&isNaN(parseFloat(i[l-1])))&&(r=i[l-1],i.splice(l-1,1))}o.original[n]=""+i,e[n]=parseFloat(i)}})),a.apply(this,[arguments[0],o])}
var l="paddingBottom"
t.fx.prototype.custom&&!function(t){var e=t.custom
t.custom=function(t,n,i){return o.apply(this,arguments),e.apply(this,arguments)}}(t.fx.prototype),t.Animation&&t.Animation.tweener&&t.Animation.tweener(t.transform.funcs.join(" "),function(t,e){var n=this.createTween(t,e)
return o.apply(n,[n.start,n.end,n.unit]),n}),t.fx.multipleValueStep={_default:function(e){t.each(e.values,function(t,n){e.values[t].now=n.start+(n.end-n.start)*e.pos})}},t.each(["matrix","reflect","reflectX","reflectXY","reflectY"],function(e,n){t.fx.multipleValueStep[n]=function(e){var n=e.decomposed,i=t.matrix
m=i.identity(),n.now={},t.each(n.start,function(t){return n.now[t]=parseFloat(n.start[t])+(parseFloat(n.end[t])-parseFloat(n.start[t]))*e.pos,("scaleX"===t||"scaleY"===t)&&1===n.now[t]||"scaleX"!==t&&"scaleY"!==t&&0===n.now[t]?!0:void(m=m.x(i[t](n.now[t])))})
var r
t.each(e.values,function(t){switch(t){case 0:r=parseFloat(m.e(1,1).toFixed(6))
break
case 1:r=parseFloat(m.e(2,1).toFixed(6))
break
case 2:r=parseFloat(m.e(1,2).toFixed(6))
break
case 3:r=parseFloat(m.e(2,2).toFixed(6))
break
case 4:r=parseFloat(m.e(1,3).toFixed(6))
break
case 5:r=parseFloat(m.e(2,3).toFixed(6))}e.values[t].now=r})}}),t.each(t.transform.funcs,function(e,n){function i(e){var i=e.elem.transform||new t.transform(e.elem),r={}
t.cssMultipleValues[n]||!t.cssNumber[n]&&-1!==t.inArray(n,t.transform.funcs)?((t.fx.multipleValueStep[e.prop]||t.fx.multipleValueStep._default)(e),r[e.prop]=[],t.each(e.values,function(n,i){r[e.prop].push(i.now+(t.cssNumber[e.prop]?"":i.unit))})):r[e.prop]=e.now+(t.cssNumber[e.prop]?"":e.unit),i.exec(r,{preserve:!0})}t.Tween&&t.Tween.propHooks&&(t.Tween.propHooks[n]={set:i}),t.fx.step&&(t.fx.step[n]=i)}),t.each(["matrix","reflect","reflectX","reflectXY","reflectY"],function(e,n){function i(e){var i=e.elem.transform||new t.transform(e.elem),r={}
if(!e.initialized){if(e.initialized=!0,"matrix"!==n){var o,s=t.matrix[n]().elements
t.each(e.values,function(t){switch(t){case 0:o=s[0]
break
case 1:o=s[2]
break
case 2:o=s[1]
break
case 3:o=s[3]
break
default:o=0}e.values[t].end=o})}e.decomposed={}
var a=e.values
e.decomposed.start=t.matrix.matrix(a[0].start,a[1].start,a[2].start,a[3].start,a[4].start,a[5].start).decompose(),e.decomposed.end=t.matrix.matrix(a[0].end,a[1].end,a[2].end,a[3].end,a[4].end,a[5].end).decompose()}(t.fx.multipleValueStep[e.prop]||t.fx.multipleValueStep._default)(e),r.matrix=[],t.each(e.values,function(t,e){r.matrix.push(e.now)}),i.exec(r,{preserve:!0})}t.Tween&&t.Tween.propHooks&&(t.Tween.propHooks[n]={set:i}),t.fx.step&&(t.fx.step[n]=i)})}(jQuery,this,this.document),function(t,e,n,i){var r=180/Math.PI,o=200/Math.PI,s=Math.PI/180,a=2/1.8,l=.9,c=Math.PI/200,d=/^([+\-]=)?([\d+.\-]+)(.*)$/
t.extend({angle:{runit:/(deg|g?rad)/,radianToDegree:function(t){return t*r},radianToGrad:function(t){return t*o},degreeToRadian:function(t){return t*s},degreeToGrad:function(t){return t*a},gradToDegree:function(t){return t*l},gradToRadian:function(t){return t*c},toDegree:function(e){var n=d.exec(e)
if(n){switch(e=parseFloat(n[2]),n[3]||"deg"){case"grad":e=t.angle.gradToDegree(e)
break
case"rad":e=t.angle.radianToDegree(e)}return e}return 0}}})}(jQuery,this,this.document),function(t,e,n,i){void 0===t.matrix&&t.extend({matrix:{}})
var r=t.matrix
t.extend(r,{V2:function(e,n){t.isArray(arguments[0])?this.elements=arguments[0].slice(0,2):this.elements=[e,n],this.length=2},V3:function(e,n,i){t.isArray(arguments[0])?this.elements=arguments[0].slice(0,3):this.elements=[e,n,i],this.length=3},M2x2:function(e,n,i,r){t.isArray(arguments[0])?this.elements=arguments[0].slice(0,4):this.elements=Array.prototype.slice.call(arguments).slice(0,4),this.rows=2,this.cols=2},M3x3:function(e,n,i,r,o,s,a,l,c){t.isArray(arguments[0])?this.elements=arguments[0].slice(0,9):this.elements=Array.prototype.slice.call(arguments).slice(0,9),this.rows=3,this.cols=3}})
var o={e:function(t,e){var n=this.rows,i=this.cols
return t>n||e>n||1>t||1>e?0:this.elements[(t-1)*i+e-1]},decompose:function(){var e=this.e(1,1),n=this.e(2,1),i=this.e(1,2),r=this.e(2,2),o=this.e(1,3),s=this.e(2,3)
if(Math.abs(e*r-n*i)<.01)return{rotate:"0deg",skewX:"0deg",scaleX:1,scaleY:1,translateX:"0px",translateY:"0px"}
var a=o,l=s,c=Math.sqrt(e*e+n*n)
e/=c,n/=c
var d=e*i+n*r
i-=e*d,r-=n*d
var u=Math.sqrt(i*i+r*r)
i/=u,r/=u,d/=u,0>e*r-n*i&&(e=-e,n=-n,c=-c)
var f=t.angle.radianToDegree,p=f(Math.atan2(n,e))
return d=f(Math.atan(d)),{rotate:p+"deg",skewX:d+"deg",scaleX:c,scaleY:u,translateX:a+"px",translateY:l+"px"}}}
t.extend(r.M2x2.prototype,o,{toM3x3:function(){var t=this.elements
return new r.M3x3(t[0],t[1],0,t[2],t[3],0,0,0,1)},x:function(t){var e=void 0===t.rows
if(!e&&3==t.rows)return this.toM3x3().x(t)
var n=this.elements,i=t.elements
return e&&2==i.length?new r.V2(n[0]*i[0]+n[1]*i[1],n[2]*i[0]+n[3]*i[1]):i.length==n.length?new r.M2x2(n[0]*i[0]+n[1]*i[2],n[0]*i[1]+n[1]*i[3],n[2]*i[0]+n[3]*i[2],n[2]*i[1]+n[3]*i[3]):!1},inverse:function(){var t=1/this.determinant(),e=this.elements
return new r.M2x2(t*e[3],t*-e[1],t*-e[2],t*e[0])},determinant:function(){var t=this.elements
return t[0]*t[3]-t[1]*t[2]}}),t.extend(r.M3x3.prototype,o,{x:function(t){var e=void 0===t.rows
!e&&t.rows<3&&(t=t.toM3x3())
var n=this.elements,i=t.elements
return e&&3==i.length?new r.V3(n[0]*i[0]+n[1]*i[1]+n[2]*i[2],n[3]*i[0]+n[4]*i[1]+n[5]*i[2],n[6]*i[0]+n[7]*i[1]+n[8]*i[2]):i.length==n.length?new r.M3x3(n[0]*i[0]+n[1]*i[3]+n[2]*i[6],n[0]*i[1]+n[1]*i[4]+n[2]*i[7],n[0]*i[2]+n[1]*i[5]+n[2]*i[8],n[3]*i[0]+n[4]*i[3]+n[5]*i[6],n[3]*i[1]+n[4]*i[4]+n[5]*i[7],n[3]*i[2]+n[4]*i[5]+n[5]*i[8],n[6]*i[0]+n[7]*i[3]+n[8]*i[6],n[6]*i[1]+n[7]*i[4]+n[8]*i[7],n[6]*i[2]+n[7]*i[5]+n[8]*i[8]):!1},inverse:function(){var t=1/this.determinant(),e=this.elements
return new r.M3x3(t*(e[8]*e[4]-e[7]*e[5]),t*-(e[8]*e[1]-e[7]*e[2]),t*(e[5]*e[1]-e[4]*e[2]),t*-(e[8]*e[3]-e[6]*e[5]),t*(e[8]*e[0]-e[6]*e[2]),t*-(e[5]*e[0]-e[3]*e[2]),t*(e[7]*e[3]-e[6]*e[4]),t*-(e[7]*e[0]-e[6]*e[1]),t*(e[4]*e[0]-e[3]*e[1]))},determinant:function(){var t=this.elements
return t[0]*(t[8]*t[4]-t[7]*t[5])-t[3]*(t[8]*t[1]-t[7]*t[2])+t[6]*(t[5]*t[1]-t[4]*t[2])}})
var s={e:function(t){return this.elements[t-1]}}
t.extend(r.V2.prototype,s),t.extend(r.V3.prototype,s)}(jQuery,this,this.document),function(t,e,n,i){void 0===t.matrix&&t.extend({matrix:{}}),t.extend(t.matrix,{calc:function(t,e,n){this.matrix=t,this.outerHeight=e,this.outerWidth=n}}),t.matrix.calc.prototype={coord:function(e,n,i){i=void 0!==i?i:0
var r,o=this.matrix
switch(o.rows){case 2:r=o.x(new t.matrix.V2(e,n))
break
case 3:r=o.x(new t.matrix.V3(e,n,i))}return r},corners:function(t,e){var n,i=!(void 0!==t||void 0!==e)
return this.c&&i?n=this.c:(e=e||this.outerHeight,t=t||this.outerWidth,n={tl:this.coord(0,0),bl:this.coord(0,e),tr:this.coord(t,0),br:this.coord(t,e)}),i&&(this.c=n),n},sides:function(t){var e=t||this.corners()
return{top:Math.min(e.tl.e(2),e.tr.e(2),e.br.e(2),e.bl.e(2)),bottom:Math.max(e.tl.e(2),e.tr.e(2),e.br.e(2),e.bl.e(2)),left:Math.min(e.tl.e(1),e.tr.e(1),e.br.e(1),e.bl.e(1)),right:Math.max(e.tl.e(1),e.tr.e(1),e.br.e(1),e.bl.e(1))}},offset:function(t){var e=this.sides(t)
return{height:Math.abs(e.bottom-e.top),width:Math.abs(e.right-e.left)}},area:function(t){var e=t||this.corners(),n={x:e.tr.e(1)-e.tl.e(1)+e.br.e(1)-e.bl.e(1),y:e.tr.e(2)-e.tl.e(2)+e.br.e(2)-e.bl.e(2)},i={x:e.bl.e(1)-e.tl.e(1)+e.br.e(1)-e.tr.e(1),y:e.bl.e(2)-e.tl.e(2)+e.br.e(2)-e.tr.e(2)}
return.25*Math.abs(n.e(1)*i.e(2)-n.e(2)*i.e(1))},nonAffinity:function(){var t=this.sides(),e=t.top-t.bottom,n=t.left-t.right
return parseFloat(parseFloat(Math.abs((Math.pow(e,2)+Math.pow(n,2))/(t.top*t.bottom+t.left*t.right))).toFixed(8))},originOffset:function(e,n){e=e?e:new t.matrix.V2(.5*this.outerWidth,.5*this.outerHeight),n=n?n:new t.matrix.V2(0,0)
var i=this.coord(e.e(1),e.e(2)),r=this.coord(n.e(1),n.e(2))
return{top:r.e(2)-n.e(2)-(i.e(2)-e.e(2)),left:r.e(1)-n.e(1)-(i.e(1)-e.e(1))}}}}(jQuery,this,this.document),function(t,e,n,i){void 0===t.matrix&&t.extend({matrix:{}})
var r=t.matrix,o=r.M2x2,s=r.M3x3
t.extend(r,{identity:function(t){t=t||2
for(var e=t*t,n=Array(e),i=t+1,o=0;e>o;o++)n[o]=o%i===0?1:0
return new r["M"+t+"x"+t](n)},matrix:function(){var t=Array.prototype.slice.call(arguments)
switch(arguments.length){case 4:return new o(t[0],t[2],t[1],t[3])
case 6:return new s(t[0],t[2],t[4],t[1],t[3],t[5],0,0,1)}},reflect:function(){return new o(-1,0,0,-1)},reflectX:function(){return new o(1,0,0,-1)},reflectXY:function(){return new o(0,1,1,0)},reflectY:function(){return new o(-1,0,0,1)},rotate:function(e){var n=t.angle.degreeToRadian(e),i=Math.cos(n),r=Math.sin(n),s=i,a=r,l=-r,c=i
return new o(s,l,a,c)},scale:function(t,e){return t=t||0===t?t:1,e=e||0===e?e:t,new o(t,0,0,e)},scaleX:function(t){return r.scale(t,1)},scaleY:function(t){return r.scale(1,t)},skew:function(e,n){e=e||0,n=n||0
var i=t.angle.degreeToRadian(e),r=t.angle.degreeToRadian(n),s=Math.tan(i),a=Math.tan(r)
return new o(1,s,a,1)},skewX:function(t){return r.skew(t)},skewY:function(t){return r.skew(0,t)},translate:function(t,e){return t=t||0,e=e||0,new s(1,0,t,0,1,e,0,0,1)},translateX:function(t){return r.translate(t)},translateY:function(t){return r.translate(0,t)}})}(jQuery,this,this.document),jQuery.extend(jQuery.easing,{easeInOutCubic:function(t,e,n,i,r){return(e/=r/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n}}),jQuery("#wowslider-container1").wowSlider({effect:"brick,blinds,fade,flip",prev:"",next:"",duration:2e3,delay:3700,width:930,height:300,autoPlay:!0,autoPlayVideo:!1,playPause:!1,stopOnHover:!0,loop:!1,bullets:1,caption:!1,captionEffect:"parallax",controls:!1,responsive:1,fullScreen:!1,gestures:2,onBeforeStep:0,images:0})
