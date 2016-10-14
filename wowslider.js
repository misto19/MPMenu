jQuery.fn.wowSlider=function(t){function e(t){return B.css({left:-t+"00%"})}function n(t){return((t||0)+j)%j}function i(e){if(window["ws_"+e]){var n=new window["ws_"+e](t,X,O)
n.name="ws_"+e,$.push(n)}}function r(t,e){J?J.pause(t.curIndex,e):e()}function o(t,e){J?J.play(t,0,e):e()}function s(t,e,i){Z||(isNaN(t)&&(t=V(U,j)),t=n(t),U!=t&&(L?L.load(t,function(){l(t,e,i)}):l(t,e,i)))}function a(t){for(var e="",n=0;n<t.length;n++)e+=String.fromCharCode(t.charCodeAt(n)^1+(t.length-n)%7)
return e}function l(n,i,r){if(!Z){if(i)void 0!=r&&(K=r^t.revers),e(n)
else{if(Z)return
tt=!1,function(e,n,i){et=Math.floor(Math.random()*$.length),k($[et]).trigger("effectStart",{curIndex:e,nextIndex:n,cont:k("."+$[et].name,I),start:function(){K=void 0!=i?i^t.revers:!!(n>e)^t.revers?1:0,$[et].go(n,e,K)}})}(U,n,r),I.trigger(k.Event("go",{index:n}))}U=n,U!=t.stopOn||--t.loop||(t.autoPlay=0),t.onStep&&t.onStep(n)}}function c(){I.find(".ws_effect").fadeOut(200),e(U).fadeIn(200).find("img").css({visibility:"visible"})}function d(t,e,n,i,r,o){new u(t,e,n,i,r,o)}function u(e,n,i,r,o,s){var a,l,c,d,u=0,f=0,p=0
e[0]||(e=k(e)),e.on((n?"mousedown ":"")+"touchstart",function(e){var n=e.originalEvent.touches?e.originalEvent.touches[0]:e
2==t.gestures&&I.addClass("ws_grabbing"),u=0,n?(a=n.pageX,l=n.pageY,f=p=1,r&&(f=p=r(e))):f=p=0,e.originalEvent.touches||(e.preventDefault(),e.stopPropagation())}),k(document).on((n?"mousemove ":"")+"touchmove",e,function(t){if(f){var e=t.originalEvent.touches?t.originalEvent.touches[0]:t
u=1,c=e.pageX-a,d=e.pageY-l,i&&i(t,c,d)}}),k(document).on((n?"mouseup ":"")+"touchend",e,function(e){2==t.gestures&&I.removeClass("ws_grabbing"),f&&(u&&o&&o(e,c,d),!u&&s&&s(e),u&&(e.preventDefault(),e.stopPropagation()),u=0,f=0)}),e.on("click",function(t){p&&(t.preventDefault(),t.stopPropagation()),p=0})}function f(t,e,n){var i=(new Date).getTime(),r=function(){var o=(new Date).getTime(),s=e?(o-i)/e:1
1>s?(t(s),requestAnimationFrame(r)):(cancelAnimationFrame(r),t(1),n&&n())}
r()}function p(e,n){if(ut.length&&T(e),ft.length&&w(e),t.caption&&S(e,n),q){var i=k("A",H.get(e)).get(0)
i?(q.setAttribute("href",i.href),q.setAttribute("target",i.target),q.style.display="block"):q.style.display="none"}t.responsive&&C()}function m(){pt&&(pt=0,setTimeout(function(){I.trigger(k.Event("stop",{}))},t.duration))}function h(){!pt&&t.autoPlay&&(pt=1,I.trigger(k.Event("start",{})))}function v(){y(),m()}function g(){y(),t.autoPlay?(dt=setTimeout(function(){mt||s(void 0,void 0,1)},t.delay),h()):m()}function y(){dt&&clearTimeout(dt),dt=null}function b(t,e,n){y(),t&&t.preventDefault(),s(e,void 0,n),g(),At&&Et&&Et.play()}function x(){function e(t){0>t&&(t=0),L&&L.loadTtip(t),k(u.get(h)).removeClass("ws_overbull"),k(u.get(t)).addClass("ws_overbull"),p.show()
var e={left:u.get(t).offsetLeft-p.width()/2,"margin-top":u.get(t).offsetTop-u.get(0).offsetTop+"px","margin-bottom":-u.get(t).offsetTop+u.get(u.length-1).offsetTop+"px"},n=f.get(t),i={left:-n.offsetLeft+(k(n).outerWidth(!0)-k(n).outerWidth())/2}
0>h?(p.css(e),m.css(i)):(document.all||(e.opacity=1),p.stop().animate(e,"fast"),m.stop().animate(i,"fast")),h=t}if(I.find(".ws_bullets a,.ws_thumbs a").click(function(t){b(t,k(this).index())}),ft.length){ft.hover(function(){wt=1},function(){wt=0})
var n=ft.find(">div")
ft.css({overflow:"hidden"})
var i,r,o,s=I.find(".ws_thumbs")
s.bind("mousemove mouseover",function(t){if(!o){clearTimeout(r)
for(var e=.2,s=0;2>s;s++){var a=ft[s?"width":"height"](),l=n[s?"width":"height"](),c=a-l
if(0>c){var d,u,f=(t[s?"pageX":"pageY"]-ft.offset()[s?"left":"top"])/a
if(i==f)return
i=f
var p=n.position()[s?"left":"top"]
if(n.css({transition:"0ms linear",transform:"translate3d("+p.left+"px,"+p.top+"px,0)"}),n.stop(!0),Tt>0){if(f>e&&1-e>f)return
d=.5>f?0:c-1,u=Tt*Math.abs(p-d)/(Math.abs(f-.5)-e)}else d=c*Math.min(Math.max((f-e)/(1-2*e),0),1),u=-Tt*l/2
n.animate(s?{left:d}:{top:d},u,Tt>0?"linear":"easeOutCubic")}else n.css(s?"left":"top",c/2)}}}),s.mouseout(function(t){r=setTimeout(function(){n.stop()},100)}),ft.trigger("mousemove")
var a,l
t.gestures&&d(ft,2==t.gestures,function(t,e,i){if(s.width()>n.width()||s.height()>n.height())return!1
var r=Math.min(Math.max(a+e,ft.width()-n.width()),0),o=Math.min(Math.max(l+i,ft.height()-n.height()),0)
n.css("left",r),n.css("top",o)},function(t){return o=1,a=parseFloat(n.css("left"))||0,l=parseFloat(n.css("top"))||0,!0},function(){o=0},function(){o=0}),I.find(".ws_thumbs a").each(function(t,e){d(e,0,0,function(t){return!!k(t.target).parents(".ws_thumbs").get(0)},function(t){o=1},function(t){b(t,k(e).index())})})}if(ut.length){var c=ut.find(">div"),u=k("a",ut),f=u.find("IMG")
if(f.length){var p=k('<div class="ws_bulframe"/>').appendTo(c),m=k("<div/>").css({width:f.length+1+"00%"}).appendTo(k("<div/>").appendTo(p))
f.appendTo(m),k("<span/>").appendTo(p)
var h=-1
u.hover(function(){e(k(this).index())})
var v
c.hover(function(){v&&(clearTimeout(v),v=0),e(h)},function(){u.removeClass("ws_overbull"),document.all?v||(v=setTimeout(function(){p.hide(),v=0},400)):p.stop().animate({opacity:0},{duration:"fast",complete:function(){p.hide()}})}),c.click(function(t){b(t,k(t.target).index())})}}}function w(t){k("A",ft).each(function(e){if(e==t){var n=k(this)
if(n.addClass("ws_selthumb"),!wt){var i,r=ft.find(">div"),o=n.position()||{}
i=r.position()||{},r.stop(!0).animate({left:-Math.max(Math.min(o.left,-i.left),o.left+n.width()-ft.width()),top:-Math.max(Math.min(o.top,0),o.top+n.height()-ft.height())})}}else k(this).removeClass("ws_selthumb")})}function T(t){k("A",ut).each(function(e){e==t?k(this).addClass("ws_selbull"):k(this).removeClass("ws_selbull")})}function M(t){var e=H[t],n=k("img",e).attr("title"),i=k(e).data("descr")
return n.replace(/\s+/g,"")||(n=""),(n?"<span>"+n+"</span>":"")+(i?"<br><div>"+i+"</div>":"")}function S(e,n){var i=M(e),r=M(n),o=t.captionEffect;(Dt[k.type(o)]||Dt[o]||Dt.none)(k.extend({$this:I,curIdx:U,prevIdx:Q},t),Mt,St,i,r,K)}function D(){t.autoPlay=!t.autoPlay,t.autoPlay?(g(),Nt.removeClass("ws_play"),Nt.addClass("ws_pause"),J&&J.start(U)):(N.wsStop(),Nt.removeClass("ws_pause"),Nt.addClass("ws_play"))}function E(){return!!document[_t.fullscreenElement]}function A(){/WOW Slider/g.test(F)||(E()?document[_t.exitFullscreen]():(Bt=1,I.wrap("<div class='ws_fs_wrapper'></div>").parent()[0][_t.requestFullscreen]()))}function C(){var e=Ot?4:t.responsive,n=O.width()||t.width,i=k([X,P.find("img"),W.find("img")])
if(e>0&&document.addEventListener&&I.css("fontSize",Math.max(10*Math.min(n/t.width||1,1),4)),2==e){var r=Math.max(n/t.width,1)-1
i.each(function(){k(this).css("marginTop",-t.height*r/2)})}if(3==e){var o=window.innerHeight-(I.offset().top||0),s=t.width/t.height,a=s>n/o
I.css("height",o),i.each(function(){k(this).css({width:a?"auto":"100%",height:a?"100%":"auto",marginLeft:a?(n-o*s)/2:0,marginTop:a?0:(o-n/s)/2})})}if(4==e){var l=window.innerWidth,c=window.innerHeight,s=(I.width()||t.width)/(I.height()||t.height)
I.css({maxWidth:s>l/c?"100%":s*c,height:""}),i.each(function(){k(this).css({width:"100%",marginLeft:0,marginTop:0})})}else I.css({maxWidth:"",top:""})}var k=jQuery,I=this,N=I.get(0)
window.ws_basic=function(t,e,n){var i=k(this)
this.go=function(e){n.find(".ws_list").css("transform","translate3d(0,0,0)").stop(!0).animate({left:e?-e+"00%":/Safari/.test(navigator.userAgent)?"0%":0},t.duration,"easeInOutExpo",function(){i.trigger("effectEnd")})}},t=k.extend({effect:"fade",prev:"",next:"",duration:1e3,delay:2e3,captionDuration:1e3,captionEffect:"none",width:960,height:360,thumbRate:1,gestures:2,caption:!0,controls:!0,keyboardControl:!1,scrollControl:!1,autoPlay:!0,autoPlayVideo:!1,responsive:1,support:jQuery.fn.wowSlider.support,stopOnHover:0,preventCopy:1},t)
var F=navigator.userAgent,O=k(".ws_images",I).css("overflow","visible"),_=k("<div>").appendTo(O).css({position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),B=O.find("ul").css("width","100%").wrap("<div class='ws_list'></div>").parent().appendTo(_)
k("<div>").css({position:"relative",width:"100%","font-size":0,"line-height":0,overflow:"hidden"}).append(O.find("li:first img:first").clone().css({width:"100%",visibility:"hidden"})).prependTo(O),B.css({position:"absolute",top:0,height:"100%",transform:/Firefox/.test(F)?"":"translate3d(0,0,0)"})
var L=t.images&&new wowsliderPreloader(this,t),H=O.find("li"),j=H.length,R=(B.width()/B.find("li").width(),{position:"absolute",top:0,height:"100%",overflow:"hidden"}),P=k("<div>").addClass("ws_swipe_left").css(R).prependTo(B),W=k("<div>").addClass("ws_swipe_right").css(R).appendTo(B)
if(/MSIE/.test(F)||/Trident/.test(F)||/Safari/.test(F)||/Firefox/.test(F)){var G=Math.pow(10,Math.ceil(Math.LOG10E*Math.log(j)))
B.css({width:G+"00%"}),H.css({width:100/G+"%"}),P.css({width:100/G+"%",left:-100/G+"%"}),W.css({width:100/G+"%",left:100*j/G+"%"})}else B.css({width:j+"00%",display:"table"}),H.css({display:"table-cell","float":"none",width:"auto"}),P.css({width:100/j+"%",left:-100/j+"%"}),W.css({width:100/j+"%",left:"100%"})
var V=t.onBeforeStep||function(t){return t+1}
t.startSlide=n(isNaN(t.startSlide)?V(-1,j):t.startSlide),L&&L.load(t.startSlide,function(){}),e(t.startSlide)
var z,q
t.preventCopy&&!/iPhone/.test(navigator.platform)&&(z=k('<div class="ws_cover"><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":10,background:"#FFF",opacity:0}).appendTo(O),q=z.find("A").get(0))
var X=[]
k(".ws_frame",I)
H.each(function(t){for(var e=k(">img:first,>iframe:first,>iframe:first+img,>a:first,>div:first",this),n=k("<div></div>"),i=0;i<this.childNodes.length;)this.childNodes[i]!=e.get(0)&&this.childNodes[i]!=e.get(1)?n.append(this.childNodes[i]):i++
k(this).data("descr")||(n.text().replace(/\s+/g,"")?k(this).data("descr",n.html().replace(/^\s+|\s+$/g,"")):k(this).data("descr","")),k(this).css({"font-size":0}),k(this).data("type",e[0].tagName)
k(">iframe",this).css("opacity",0)
X[X.length]=k(">a>img",this).get(0)||k(">iframe+img",this).get(0)||k(">*",this).get(0)}),X=k(X),X.css("visibility","visible"),P.append(k(X[j-1]).clone()),W.append(k(X[0]).clone())
var $=[]
t.effect=t.effect.replace(/\s+/g,"").split(",")
for(var Y in t.effect)i(t.effect[Y])
$.length||i("basic")
var U=t.startSlide,Q=U,J=!1,K=1,Z=0,tt=!1
k($).bind("effectStart",function(t,e){Z++,r(e,function(){c(),e.cont&&k(e.cont).stop().show().css("opacity",1),e.start&&e.start(),Q=U,U=e.nextIndex,p(U,Q)})}),k($).bind("effectEnd",function(t,n){e(U).stop(!0,!0).show(),setTimeout(function(){o(U,function(){Z--,g(),J&&J.start(U)})},n?n.delay||0:0)}),t.loop=t.loop||Number.MAX_VALUE,t.stopOn=n(t.stopOn)
var et=Math.floor(Math.random()*$.length)
2==t.gestures&&I.addClass("ws_gestures")
var nt=O,it="!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9"
if(it&&(it=a(it))){if(t.gestures){var rt,ot,st,at,lt=0,ct=10
d(O,2==t.gestures,function(e,n,i){at=!!$[0].step,v(),B.stop(!0,!0),st&&(tt=!0,Z++,st=0,at||c()),lt=n,n>rt&&(n=rt),-rt>n&&(n=-rt),at?$[0].step(U,n/rt):t.support.transform&&t.support.transition?B.css("transform","translate3d("+n+"px,0,0)"):B.css("left",ot+n)},function(t){var e=/ws_playpause|ws_prev|ws_next|ws_bullets/g.test(t.target.className)||k(t.target).parents(".ws_bullets").get(0),n=ht?t.target==ht[0]:0
return e||n||J&&J.playing()?!1:(st=1,rt=O.width(),ot=parseFloat(-U*rt)||0,!0)},function(e,i,r){st=0
var o=O.width(),s=n(U+(0>i?1:-1)),a=o*i/Math.abs(i)
Math.abs(lt)<ct&&(s=U,a=0)
var l=200+200*(o-Math.abs(i))/o
Z--,k($[0]).trigger("effectStart",{curIndex:U,nextIndex:s,cont:at?k(".ws_effect"):0,start:function(){function e(){t.support.transform&&t.support.transition&&B.css({transition:"0ms",transform:/Firefox/.test(F)?"":"translate3d(0,0,0)"}),k($[0]).trigger("effectEnd",{swipe:!0})}function n(){at?i>o||-o>i?k($[0]).trigger("effectEnd"):f(function(t){var e=i+(o*(i>0?1:-1)-i)*t
$[0].step(Q,e/o)},l,function(){k($[0]).trigger("effectEnd")}):t.support.transform&&t.support.transition?(B.css({transition:l+"ms ease-out",transform:"translate3d("+a+"px,0,0)"}),setTimeout(e,l)):B.animate({left:ot+a},l,e)}tt=!0,L?L.load(s,n):n()}})},function(){var t=k("A",H.get(U))
t&&t.click()})}var dt,ut=I.find(".ws_bullets"),ft=I.find(".ws_thumbs"),pt=t.autoPlay,mt=!1,ht=a('8B"iucc9!jusv?+,unpuimggs)eji!"')
ht+=a("uq}og<%vjwjvhhh?vfn`sosa8fhtviez8ckifo8dnir(wjxd=70t{9")
var vt=nt||document.body
if(it.length<4&&(it=it.replace(/^\s+|\s+$/g,"")),nt=it?k("<div>"):0,k(nt).css({position:"absolute",padding:"0 0 0 0"}).appendTo(vt),nt&&document.all){var gt=k('<iframe src="javascript:false"></iframe>')
gt.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"}),gt.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"}),nt.append(gt)}k(nt).css({zIndex:56,right:"15px",bottom:"15px"}).appendTo(vt),ht+=a("uhcrm>bwuh=majeis<dqwm:aikp.d`joi}9Csngi?!<"),ht=nt?k(ht):nt,ht&&ht.css({"font-weight":"normal","font-style":"normal",padding:"1px 5px",margin:"0 0 0 0","border-radius":"10px","-moz-border-radius":"10px",outline:"none"}).html(it).bind("contextmenu",function(t){return!1}).hide().appendTo(nt||document.body).attr("target","_blank")
var yt=k('<div class="ws_controls">').appendTo(O)
if(ut[0]&&ut.appendTo(yt),t.controls){var bt=k('<a href="#" class="ws_next">'+t.next+"</a>"),xt=k('<a href="#" class="ws_prev">'+t.prev+"</a>")
yt.append(bt,xt),bt.bind("click",function(t){b(t,U+1,1)}),xt.bind("click",function(t){b(t,U-1,0)}),/iPhone/.test(navigator.platform)&&(xt.get(0).addEventListener("touchend",function(t){b(t,U-1,1)},!1),bt.get(0).addEventListener("touchend",function(t){b(t,U+1,0)},!1))}var wt,Tt=t.thumbRate
if(t.caption){var Mt=k("<div class='ws-title' style='display:none'></div>"),St=k("<div class='ws-title' style='display:none'></div>")
k("<div class='ws-title-wrapper'>").append(Mt,St).appendTo(O),Mt.bind("mouseover",function(t){J&&J.playing()||y()}),Mt.bind("mouseout",function(t){J&&J.playing()||g()})}var Dt={none:function(t,e,n,i){e.html(i),e.show()}}
Dt[t.captionEffect]||(Dt[t.captionEffect]=window["ws_caption_"+t.captionEffect]),(ut.length||ft.length)&&x(),p(U,Q),t.stopOnHover&&(this.bind("mouseover",function(t){J&&J.playing()||y(),mt=!0}),this.bind("mouseout",function(t){J&&J.playing()||g(),mt=!1})),J&&J.playing()||g()
var Et=I.find("audio").get(0),At=t.autoPlay
if(Et){if(window.Audio&&Et.canPlayType&&Et.canPlayType("audio/mp3"))Et.loop="loop",t.autoPlay&&(Et.autoplay="autoplay",setTimeout(function(){Et.play()},100))
else{Et=Et.src
var Ct=Et.substring(0,Et.length-/[^\\\/]+$/.exec(Et)[0].length),kt="wsSound"+Math.round(9999*Math.random())
k("<div>").appendTo(I).get(0).id=kt
var It="wsSL"+Math.round(9999*Math.random())
window[It]={onInit:function(){}},swfobject.createSWF({data:Ct+"player_mp3_js.swf",width:"1",height:"1"},{allowScriptAccess:"always",loop:!0,FlashVars:"listener="+It+"&loop=1&autoplay="+(t.autoPlay?1:0)+"&mp3="+Et},kt),Et=0}I.bind("stop",function(){At=!1,Et?Et.pause():k(kt).SetVariable("method:pause","")}),I.bind("start",function(){Et?Et.play():k(kt).SetVariable("method:play","")})}N.wsStart=s,N.wsRestart=g,N.wsStop=v
var Nt=k('<a href="#" class="ws_playpause"></a>')
if(t.playPause&&(t.autoPlay?Nt.addClass("ws_pause"):Nt.addClass("ws_play"),Nt.click(function(){return D(),!1}),yt.append(Nt)),t.keyboardControl&&k(document).on("keyup",function(t){switch(t.which){case 32:D()
break
case 37:b(t,U-1,0)
break
case 39:b(t,U+1,1)}}),t.scrollControl&&I.on("DOMMouseScroll mousewheel",function(t){t.originalEvent.wheelDelta<0||t.originalEvent.detail>0?b(null,U+1,1):b(null,U-1,0)}),"function"==typeof wowsliderVideo){var Ft=k('<div class="ws_video_btn"><div></div></div>').appendTo(I)
J=new wowsliderVideo(I,t,c),"undefined"!=typeof $f&&(J.vimeo(!0),J.start(U)),window.onYouTubeIframeAPIReady=function(){J.youtube(!0),J.start(U)},Ft.on("click touchend",function(){Z||J.play(U,1)})}var Ot=0
if(t.fullScreen){var _t=function(){for(var t,e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenchange"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitfullscreenchange"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitfullscreenchange"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozfullscreenchange"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","MSFullscreenChange"]],i={},r=0,o=n.length;o>r;r++)if(t=n[r],t&&t[1]in document){for(r=0,e=t.length;e>r;r++)i[n[0][r]]=t[r]
return i}return!1}()
if(_t){var Bt=0
document.addEventListener(_t.fullscreenchange,function(t){E()?(Ot=1,C()):(Bt&&(Bt=0,I.unwrap()),Ot=0,C()),$[0].step||c()}),k("<a href='#' class='ws_fullscreen'></a>").on("click",A).appendTo(O)}}return t.responsive&&(k(C),k(window).on("load resize",C)),this}},jQuery.extend(jQuery.easing,{easeInOutExpo:function(t,e,n,i,r){return 0==e?n:e==r?n+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+n:i/2*(-Math.pow(2,-10*--e)+2)+n},easeOutCirc:function(t,e,n,i,r){return i*Math.sqrt(1-(e=e/r-1)*e)+n},easeOutCubic:function(t,e,n,i,r){return i*((e=e/r-1)*e*e+1)+n},easeOutElastic1:function(t,e,n,i,r){var o=Math.PI/2,s=1.70158,a=0,l=i
if(0==e)return n
if(1==(e/=r))return n+i
if(a||(a=.3*r),l<Math.abs(i)){l=i
var s=a/4}else var s=a/o*Math.asin(i/l)
return l*Math.pow(2,-10*e)*Math.sin((e*r-s)*o/a)+i+n},easeOutBack:function(t,e,n,i,r,o){return void 0==o&&(o=1.70158),i*((e=e/r-1)*e*((o+1)*e+o)+1)+n}}),jQuery.fn.wowSlider.support={transform:function(){if(!window.getComputedStyle)return!1
var t=document.createElement("div")
document.body.insertBefore(t,document.body.lastChild),t.style.transform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"
var e=window.getComputedStyle(t).getPropertyValue("transform")
return t.parentNode.removeChild(t),void 0!==e?"none"!==e:!1}(),perspective:function(){for(var t="perspectiveProperty perspective WebkitPerspective MozPerspective OPerspective MsPerspective".split(" "),e=0;e<t.length;e++)if(void 0!==document.body.style[t[e]])return!!t[e]
return!1}(),transition:function(){var t=document.body||document.documentElement,e=t.style
return void 0!==e.transition||void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.MsTransition||void 0!==e.OTransition}()},function(t){function e(){n&&(o(e),t.fx.tick())}for(var n,i=0,r=["webkit","moz"],o=window.requestAnimationFrame,s=window.cancelAnimationFrame;i<r.length&&!o;i++)o=window[r[i]+"RequestAnimationFrame"],s=s||window[r[i]+"CancelAnimationFrame"]||window[r[i]+"CancelRequestAnimationFrame"]
if(o)window.requestAnimationFrame=o,window.cancelAnimationFrame=s,t.fx.timer=function(i){i()&&t.timers.push(i)&&!n&&(n=!0,e())},t.fx.stop=function(){n=!1}
else{var a=0
window.requestAnimationFrame=function(t,e){if(a)return!1
a=1
var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),o=window.setTimeout(function(){a=0,t(n+r)},r)
return i=n+r,o},window.cancelAnimationFrame=function(t){clearTimeout(t)}}}(jQuery)
