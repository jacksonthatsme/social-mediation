$(document).ready(function(){var a=$('[data-js="menu__toggle"]'),e=$('[data-js="menu__background"]'),t=($('[data-js="navigation__list"]'),$('[data-js="navigation__list__item"]'),$('[data-js="social__button-container"]'),$('[data-js="footer__copyright"]'),$('[data-js*="site__menu__element"]')),s=$('[data-js*="menu__activate"]'),o=$('[data-js*="menu__close"]'),l=$("body"),n=t.toArray().reverse(),_=($('[data-js="blob--orange"]'),$('[data-js="blob--blue"]'),$('[data-js="blob--yellow"]'),$('[data-js="blob--green"]'),$('[data-js="check"]'),$('[data-js="cross"]'),$('[data-js="blue__brow--L"]'),$('[data-js="blue__eye--L"]'),$('[data-js="blue__eye--R"]'),$('[data-js="blue__brow--R"]')),d=($('[data-js="blue__mouth"]'),$('[data-js="blue__hand"]')),i=($('[data-js="yellow__brow--L"]'),$('[data-js="yellow__brow--R"]'),$('[data-js="yellow__mouth"]'),$('[data-js="yellow__eye--L"]'),$('[data-js="yellow__eye--R"]'),$('[data-js="yellow__hand"]'),$('[data-js="logotype"]'),$('[data-js="content-container"]')),c=$('[data-js="footer"]'),r=$('[data-js="circledLine"]'),j=new TimelineMax;function y(){var a=c.innerHeight();i.css("marginBottom",a)}a.bind("click",function(){l.toggleClass("has-menu"),l.hasClass("has-menu")?j.to(e,.4,{scaleX:1.2,scaleY:1.2}).to(e,1.1,{ease:Expo.easeOut,scaleX:60,scaleY:60}).to(s,.1,{opacity:0},"-=1.1").to(o,.8,{opacity:1},"-=1").staggerTo(t,1,{opacity:1},.1,"-=1"):j.to(e,1.1,{scaleX:1.2,scaleY:1.2,ease:Expo.easeIn}).to(e,.4,{scaleX:1.6,scaleY:1.6}).staggerTo(n,.2,{opacity:0},.1,"-=1.5").to(o,0,{opacity:0},"-=.4").to(s,.8,{opacity:1},"-=.2")}),y(),$(window).resize(function(){y()}),new TimelineMax({yoyo:!0,repeat:-1,paused:!0}).to(d,.4,{x:5,ease:Power2.easeIn}).to(d,.4,{y:-10,ease:Power2.easeOut}).to(_,.4,{rotation:5,y:-10,ease:Power2.easeOut}),r.each(function(){var a=$(this).find("svg path").get(0).getTotalLength();this.style.strokeDasharray=a,this.style.strokeDashoffset=a})});