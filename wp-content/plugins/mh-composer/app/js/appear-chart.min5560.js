!function(e){e.fn.appear=function(t,a){var n=e.extend({data:void 0,one:!0,accX:0,accY:0},a);return this.each(function(){var a=e(this);if(a.appeared=!1,!t)return void a.trigger("appear",n.data);var l=e(window),o=function(){if(!a.is(":visible"))return void(a.appeared=!1);var e=l.scrollLeft(),t=l.scrollTop(),o=a.offset(),i=o.left,r=o.top,s=n.accX,c=n.accY,u=a.height(),d=l.height(),h=a.width(),f=l.width();r+u+c>=t&&t+d+c>=r&&i+h+s>=e&&e+f+s>=i?a.appeared||a.trigger("appear",n.data):a.appeared=!1},i=function(){if(a.appeared=!0,n.one){l.unbind("scroll",o);var i=e.inArray(o,e.fn.appear.checks);i>=0&&e.fn.appear.checks.splice(i,1)}t.apply(this,arguments)};n.one?a.one("appear",n.data,i):a.bind("appear",n.data,i),l.scroll(o),e.fn.appear.checks.push(o),o()})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var t=e.fn.appear.checks.length;if(t>0)for(;t--;)e.fn.appear.checks[t]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(t,a){var n=e.fn[a];n&&(e.fn[a]=function(){var t=n.apply(this,arguments);return e.fn.appear.run(),t})})}(jQuery),window.Chart=function(e){function t(e,t,a){var n=t.steps*t.stepValue,l=e-t.graphMin,o=c(l/n,1,0);return a*t.steps*o}function a(e,t,a,n){function l(){var l=e.animation?c(r(s),null,0):1;g(n),e.scaleOverlay?(t(),a(l)):(a(l),t())}function o(){s+=i,l(),1>=s?F(o):"function"==typeof e.onAnimationComplete&&e.onAnimationComplete()}var i=e.animation?1/c(e.animationSteps,Number.MAX_VALUE,1):1,r=p[e.animationEasing],s=e.animation?0:1;"function"!=typeof t&&(t=function(){}),F(o)}function n(e,t,a,n,o,i){function r(e){return Math.floor(Math.log(e)/Math.LN10)}var s,c,u,d,h,f,p;for(f=n-o,p=r(f),s=Math.floor(o/(1*Math.pow(10,p)))*Math.pow(10,p),c=Math.ceil(n/(1*Math.pow(10,p)))*Math.pow(10,p),u=c-s,d=Math.pow(10,p),h=Math.round(u/d);a>h||h>t;)a>h?(d/=2,h=Math.round(u/d)):(d*=2,h=Math.round(u/d));var S=[];return l(i,S,h,s,d),{steps:h,stepValue:d,graphMin:s,labels:S}}function l(e,t,a,n,l){if(e)for(var o=1;a+1>o;o++)t.push(h(e,{value:(n+l*o).toFixed(u(l))}))}function o(e){return Math.max.apply(Math,e)}function i(e){return Math.min.apply(Math,e)}function r(e,t){return e?e:t}function s(e){return!isNaN(parseFloat(e))&&isFinite(e)}function c(e,t,a){return s(t)&&e>t?t:s(a)&&a>e?a:e}function u(e){return e%1!=0?e.toString().split(".")[1].length:0}function d(e,t){var a={};for(var n in e)a[n]=e[n];for(var n in t)a[n]=t[n];return a}function h(e,t){var a=/\W/.test(e)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):P[e]=P[e]||h(document.getElementById(e).innerHTML);return t?a(t):a}var f=this,p={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return-1*e*(e-2)},easeInOutQuad:function(e){return(e/=.5)<1?.5*e*e:-0.5*(--e*(e-2)-1)},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return 1*((e=e/1-1)*e*e+1)},easeInOutCubic:function(e){return(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return-1*((e=e/1-1)*e*e*e-1)},easeInOutQuart:function(e){return(e/=.5)<1?.5*e*e*e*e:-0.5*((e-=2)*e*e*e-2)},easeInQuint:function(e){return 1*(e/=1)*e*e*e*e},easeOutQuint:function(e){return 1*((e=e/1-1)*e*e*e*e+1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},easeInSine:function(e){return-1*Math.cos(e/1*(Math.PI/2))+1},easeOutSine:function(e){return 1*Math.sin(e/1*(Math.PI/2))},easeInOutSine:function(e){return-0.5*(Math.cos(Math.PI*e/1)-1)},easeInExpo:function(e){return 0==e?1:1*Math.pow(2,10*(e/1-1))},easeOutExpo:function(e){return 1==e?1:1*(-Math.pow(2,-10*e/1)+1)},easeInOutExpo:function(e){return 0==e?0:1==e?1:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(-Math.pow(2,-10*--e)+2)},easeInCirc:function(e){return e>=1?e:-1*(Math.sqrt(1-(e/=1)*e)-1)},easeOutCirc:function(e){return 1*Math.sqrt(1-(e=e/1-1)*e)},easeInOutCirc:function(e){return(e/=.5)<1?-0.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},easeInElastic:function(e){var t=1.70158,a=0,n=1;if(0==e)return 0;if(1==(e/=1))return 1;if(a||(a=.3),n<Math.abs(1)){n=1;var t=a/4}else var t=a/(2*Math.PI)*Math.asin(1/n);return-(n*Math.pow(2,10*(e-=1))*Math.sin(2*(1*e-t)*Math.PI/a))},easeOutElastic:function(e){var t=1.70158,a=0,n=1;if(0==e)return 0;if(1==(e/=1))return 1;if(a||(a=.3),n<Math.abs(1)){n=1;var t=a/4}else var t=a/(2*Math.PI)*Math.asin(1/n);return n*Math.pow(2,-10*e)*Math.sin(2*(1*e-t)*Math.PI/a)+1},easeInOutElastic:function(e){var t=1.70158,a=0,n=1;if(0==e)return 0;if(2==(e/=.5))return 1;if(a||(a=.3*1.5),n<Math.abs(1)){n=1;var t=a/4}else var t=a/(2*Math.PI)*Math.asin(1/n);return 1>e?-.5*n*Math.pow(2,10*(e-=1))*Math.sin(2*(1*e-t)*Math.PI/a):n*Math.pow(2,-10*(e-=1))*Math.sin(2*(1*e-t)*Math.PI/a)*.5+1},easeInBack:function(e){var t=1.70158;return 1*(e/=1)*e*((t+1)*e-t)},easeOutBack:function(e){var t=1.70158;return 1*((e=e/1-1)*e*((t+1)*e+t)+1)},easeInOutBack:function(e){var t=1.70158;return(e/=.5)<1?.5*e*e*(((t*=1.525)+1)*e-t):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:function(e){return 1-p.easeOutBounce(1-e)},easeOutBounce:function(e){return(e/=1)<1/2.75?7.5625*e*e:2/2.75>e?1*(7.5625*(e-=1.5/2.75)*e+.75):2.5/2.75>e?1*(7.5625*(e-=2.25/2.75)*e+.9375):1*(7.5625*(e-=2.625/2.75)*e+.984375)},easeInOutBounce:function(e){return.5>e?.5*p.easeInBounce(2*e):.5*p.easeOutBounce(2*e-1)+.5}},S=e.canvas.width,m=e.canvas.height;window.devicePixelRatio&&(e.canvas.style.width=S+"px",e.canvas.style.height=m+"px",e.canvas.height=m*window.devicePixelRatio,e.canvas.width=S*window.devicePixelRatio,e.scale(window.devicePixelRatio,window.devicePixelRatio)),this.PolarArea=function(t,a){f.PolarArea.defaults={scaleOverlay:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var n=a?d(f.PolarArea.defaults,a):f.PolarArea.defaults;return new v(t,n,e)},this.Radar=function(t,a){f.Radar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!1,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var n=a?d(f.Radar.defaults,a):f.Radar.defaults;return new b(t,n,e)},this.Pie=function(t,a){f.Pie.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var n=a?d(f.Pie.defaults,a):f.Pie.defaults;return new k(t,n,e)},this.Doughnut=function(t,a){f.Doughnut.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null};var n=a?d(f.Doughnut.defaults,a):f.Doughnut.defaults;return new M(t,n,e)},this.Line=function(t,a){f.Line.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var n=a?d(f.Line.defaults,a):f.Line.defaults;return new L(t,n,e)},this.Bar=function(t,a){f.Bar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};var n=a?d(f.Bar.defaults,a):f.Bar.defaults;return new w(t,n,e)};var g=function(e){e.clearRect(0,0,S,m)},v=function(e,s,c){function u(){p=i([S,m])/2,p-=o([.5*s.scaleFontSize,.5*s.scaleLineWidth]),b=2*s.scaleFontSize,s.scaleShowLabelBackdrop&&(b+=2*s.scaleBackdropPaddingY,p-=1.5*s.scaleBackdropPaddingY),k=p,b=r(b,5)}function d(){for(var e=0;e<v.steps;e++)if(s.scaleShowLine&&(c.beginPath(),c.arc(S/2,m/2,g*(e+1),0,2*Math.PI,!0),c.strokeStyle=s.scaleLineColor,c.lineWidth=s.scaleLineWidth,c.stroke()),s.scaleShowLabels){c.textAlign="center",c.font=s.scaleFontStyle+" "+s.scaleFontSize+"px "+s.scaleFontFamily;var t=v.labels[e];if(s.scaleShowLabelBackdrop){var a=c.measureText(t).width;c.fillStyle=s.scaleBackdropColor,c.beginPath(),c.rect(Math.round(S/2-a/2-s.scaleBackdropPaddingX),Math.round(m/2-g*(e+1)-.5*s.scaleFontSize-s.scaleBackdropPaddingY),Math.round(a+2*s.scaleBackdropPaddingX),Math.round(s.scaleFontSize+2*s.scaleBackdropPaddingY)),c.fill()}c.textBaseline="middle",c.fillStyle=s.scaleFontColor,c.fillText(t,S/2,m/2-g*(e+1))}}function h(a){var n=-Math.PI/2,l=2*Math.PI/e.length,o=1,i=1;s.animation&&(s.animateScale&&(o=a),s.animateRotate&&(i=a));for(var r=0;r<e.length;r++)c.beginPath(),c.arc(S/2,m/2,o*t(e[r].value,v,g),n,n+i*l,!1),c.lineTo(S/2,m/2),c.closePath(),c.fillStyle=e[r].color,c.fill(),s.segmentShowStroke&&(c.strokeStyle=s.segmentStrokeColor,c.lineWidth=s.segmentStrokeWidth,c.stroke()),n+=i*l}function f(){for(var t=Number.MIN_VALUE,a=Number.MAX_VALUE,n=0;n<e.length;n++)e[n].value>t&&(t=e[n].value),e[n].value<a&&(a=e[n].value);var l=Math.floor(k/(.66*b)),o=Math.floor(k/b*.5);return{maxValue:t,minValue:a,maxSteps:l,minSteps:o}}var p,g,v,b,k,M,L;u(),M=f(),L=s.scaleShowLabels?s.scaleLabel:null,s.scaleOverride?(v={steps:s.scaleSteps,stepValue:s.scaleStepWidth,graphMin:s.scaleStartValue,labels:[]},l(L,v.labels,v.steps,s.scaleStartValue,s.scaleStepWidth)):v=n(k,M.maxSteps,M.minSteps,M.maxValue,M.minValue,L),g=p/v.steps,a(s,d,h,c)},b=function(e,s,u){function d(a){var n=2*Math.PI/e.datasets[0].data.length;u.save(),u.translate(S/2,m/2);for(var l=0;l<e.datasets.length;l++){u.beginPath(),u.moveTo(0,-1*a*t(e.datasets[l].data[0],b,v));for(var o=1;o<e.datasets[l].data.length;o++)u.rotate(n),u.lineTo(0,-1*a*t(e.datasets[l].data[o],b,v));if(u.closePath(),u.fillStyle=e.datasets[l].fillColor,u.strokeStyle=e.datasets[l].strokeColor,u.lineWidth=s.datasetStrokeWidth,u.fill(),u.stroke(),s.pointDot){u.fillStyle=e.datasets[l].pointColor,u.strokeStyle=e.datasets[l].pointStrokeColor,u.lineWidth=s.pointDotStrokeWidth;for(var i=0;i<e.datasets[l].data.length;i++)u.rotate(n),u.beginPath(),u.arc(0,-1*a*t(e.datasets[l].data[i],b,v),s.pointDotRadius,2*Math.PI,!1),u.fill(),u.stroke()}u.rotate(n)}u.restore()}function h(){var t=2*Math.PI/e.datasets[0].data.length;if(u.save(),u.translate(S/2,m/2),s.angleShowLineOut){u.strokeStyle=s.angleLineColor,u.lineWidth=s.angleLineWidth;for(var a=0;a<e.datasets[0].data.length;a++)u.rotate(t),u.beginPath(),u.moveTo(0,0),u.lineTo(0,-g),u.stroke()}for(var n=0;n<b.steps;n++){if(u.beginPath(),s.scaleShowLine){u.strokeStyle=s.scaleLineColor,u.lineWidth=s.scaleLineWidth,u.moveTo(0,-v*(n+1));for(var l=0;l<e.datasets[0].data.length;l++)u.rotate(t),u.lineTo(0,-v*(n+1));u.closePath(),u.stroke()}if(s.scaleShowLabels){if(u.textAlign="center",u.font=s.scaleFontStyle+" "+s.scaleFontSize+"px "+s.scaleFontFamily,u.textBaseline="middle",s.scaleShowLabelBackdrop){var o=u.measureText(b.labels[n]).width;u.fillStyle=s.scaleBackdropColor,u.beginPath(),u.rect(Math.round(-o/2-s.scaleBackdropPaddingX),Math.round(-v*(n+1)-.5*s.scaleFontSize-s.scaleBackdropPaddingY),Math.round(o+2*s.scaleBackdropPaddingX),Math.round(s.scaleFontSize+2*s.scaleBackdropPaddingY)),u.fill()}u.fillStyle=s.scaleFontColor,u.fillText(b.labels[n],0,-v*(n+1))}}for(var i=0;i<e.labels.length;i++){u.font=s.pointLabelFontStyle+" "+s.pointLabelFontSize+"px "+s.pointLabelFontFamily,u.fillStyle=s.pointLabelFontColor;var r=Math.sin(t*i)*(g+s.pointLabelFontSize),c=Math.cos(t*i)*(g+s.pointLabelFontSize);u.textAlign=t*i==Math.PI||t*i==0?"center":t*i>Math.PI?"right":"left",u.textBaseline="middle",u.fillText(e.labels[i],r,-c)}u.restore()}function f(){g=i([S,m])/2,k=2*s.scaleFontSize;for(var t=0,a=0;a<e.labels.length;a++){u.font=s.pointLabelFontStyle+" "+s.pointLabelFontSize+"px "+s.pointLabelFontFamily;var n=u.measureText(e.labels[a]).width;n>t&&(t=n)}g-=o([t,s.pointLabelFontSize/2*1.5]),g-=s.pointLabelFontSize,g=c(g,null,0),M=g,k=r(k,5)}function p(){for(var t=Number.MIN_VALUE,a=Number.MAX_VALUE,n=0;n<e.datasets.length;n++)for(var l=0;l<e.datasets[n].data.length;l++)e.datasets[n].data[l]>t&&(t=e.datasets[n].data[l]),e.datasets[n].data[l]<a&&(a=e.datasets[n].data[l]);var o=Math.floor(M/(.66*k)),i=Math.floor(M/k*.5);return{maxValue:t,minValue:a,maxSteps:o,minSteps:i}}var g,v,b,k,M,L,w;e.labels||(e.labels=[]),f();var L=p();w=s.scaleShowLabels?s.scaleLabel:null,s.scaleOverride?(b={steps:s.scaleSteps,stepValue:s.scaleStepWidth,graphMin:s.scaleStartValue,labels:[]},l(w,b.labels,b.steps,s.scaleStartValue,s.scaleStepWidth)):b=n(M,L.maxSteps,L.minSteps,L.maxValue,L.minValue,w),v=g/b.steps,a(s,h,d,u)},k=function(e,t,n){function l(a){var l=-Math.PI/2,i=1,s=1;t.animation&&(t.animateScale&&(i=a),t.animateRotate&&(s=a));for(var c=0;c<e.length;c++){var u=s*(e[c].value/o)*2*Math.PI;n.beginPath(),n.arc(S/2,m/2,i*r,l,l+u),n.lineTo(S/2,m/2),n.closePath(),n.fillStyle=e[c].color,n.fill(),t.segmentShowStroke&&(n.lineWidth=t.segmentStrokeWidth,n.strokeStyle=t.segmentStrokeColor,n.stroke()),l+=u}}for(var o=0,r=i([m/2,S/2])-5,s=0;s<e.length;s++)o+=e[s].value;a(t,null,l,n)},M=function(e,t,n){function l(a){var l=-Math.PI/2,i=1,c=1;t.animation&&(t.animateScale&&(i=a),t.animateRotate&&(c=a));for(var u=0;u<e.length;u++){var d=c*(e[u].value/o)*2*Math.PI;n.beginPath(),n.arc(S/2,m/2,i*r,l,l+d,!1),n.arc(S/2,m/2,i*s,l+d,l,!0),n.closePath(),n.fillStyle=e[u].color,n.fill(),t.segmentShowStroke&&(n.lineWidth=t.segmentStrokeWidth,n.strokeStyle=t.segmentStrokeColor,n.stroke()),l+=d}}for(var o=0,r=i([m/2,S/2])-5,s=r*(t.percentageInnerCutout/100),c=0;c<e.length;c++)o+=e[c].value;a(t,null,l,n)},L=function(e,o,i){function r(a){function n(n,l){return P-a*t(e.datasets[n].data[l],p,f)}function l(e){return F+M*e}for(var r=0;r<e.datasets.length;r++){i.strokeStyle=e.datasets[r].strokeColor,i.lineWidth=o.datasetStrokeWidth,i.beginPath(),i.moveTo(F,P-a*t(e.datasets[r].data[0],p,f));for(var s=1;s<e.datasets[r].data.length;s++)o.bezierCurve?i.bezierCurveTo(l(s-.5),n(r,s-1),l(s-.5),n(r,s),l(s),n(r,s)):i.lineTo(l(s),n(r,s));if(i.stroke(),o.datasetFill?(i.lineTo(F+M*(e.datasets[r].data.length-1),P),i.lineTo(F,P),i.closePath(),i.fillStyle=e.datasets[r].fillColor,i.fill()):i.closePath(),o.pointDot){i.fillStyle=e.datasets[r].pointColor,i.strokeStyle=e.datasets[r].pointStrokeColor,i.lineWidth=o.pointDotStrokeWidth;for(var c=0;c<e.datasets[r].data.length;c++)i.beginPath(),i.arc(F+M*c,P-a*t(e.datasets[r].data[c],p,f),o.pointDotRadius,0,2*Math.PI,!0),i.fill(),i.stroke()}}}function s(){i.lineWidth=o.scaleLineWidth,i.strokeStyle=o.scaleLineColor,i.beginPath(),i.moveTo(S-L/2,P),i.lineTo(S-L/2-w,P),i.stroke(),y>0?(i.save(),i.textAlign="right"):i.textAlign="center",i.fillStyle=o.scaleFontColor;for(var t=0;t<e.labels.length;t++)i.save(),y>0?(i.translate(F+t*M,P+o.scaleFontSize),i.rotate(-(y*(Math.PI/180))),i.fillText(e.labels[t],0,0),i.restore()):i.fillText(e.labels[t],F+t*M,P+o.scaleFontSize+3),i.beginPath(),i.moveTo(F+t*M,P+3),o.scaleShowGridLines&&t>0?(i.lineWidth=o.scaleGridLineWidth,i.strokeStyle=o.scaleGridLineColor):i.lineTo(F+t*M,P+3),i.stroke();i.lineWidth=o.scaleLineWidth,i.strokeStyle=o.scaleLineColor,i.beginPath(),i.moveTo(F,P),i.lineTo(F,0),i.stroke(),i.textAlign="right",i.textBaseline="middle";for(var a=0;a<p.steps;a++)i.beginPath(),i.moveTo(F,P-(a+1)*f),o.scaleShowGridLines?(i.lineWidth=o.scaleGridLineWidth,i.strokeStyle=o.scaleGridLineColor,i.lineTo(F+w,P-(a+1)*f)):i.lineTo(F-.5,P-(a+1)*f),i.stroke(),o.scaleShowLabels&&i.fillText(p.labels[a],F-8,P-(a+1)*f)}function c(){var t=1;if(o.scaleShowLabels){i.font=o.scaleFontStyle+" "+o.scaleFontSize+"px "+o.scaleFontFamily;for(var a=0;a<p.labels.length;a++){var n=i.measureText(p.labels[a]).width;t=n>t?n:t}t+=10}w=S-t-L,M=Math.floor(w/(e.labels.length-1)),F=S-L/2-w,P=v+o.scaleFontSize/2}function u(){h=m,i.font=o.scaleFontStyle+" "+o.scaleFontSize+"px "+o.scaleFontFamily,L=1;for(var t=0;t<e.labels.length;t++){var a=i.measureText(e.labels[t]).width;L=a>L?a:L}S/e.labels.length<L?(y=45,S/e.labels.length<Math.cos(y)*L?(y=90,h-=L):h-=Math.sin(y)*L):h-=o.scaleFontSize,h-=5,g=o.scaleFontSize,h-=g,v=h}function d(){for(var t=Number.MIN_VALUE,a=Number.MAX_VALUE,n=0;n<e.datasets.length;n++)for(var l=0;l<e.datasets[n].data.length;l++)e.datasets[n].data[l]>t&&(t=e.datasets[n].data[l]),e.datasets[n].data[l]<a&&(a=e.datasets[n].data[l]);var o=Math.floor(v/(.66*g)),i=Math.floor(v/g*.5);return{maxValue:t,minValue:a,maxSteps:o,minSteps:i}}var h,f,p,g,v,b,k,M,L,w,F,P,y=0;u(),b=d(),k=o.scaleShowLabels?o.scaleLabel:"",o.scaleOverride?(p={steps:o.scaleSteps,stepValue:o.scaleStepWidth,graphMin:o.scaleStartValue,labels:[]},l(k,p.labels,p.steps,o.scaleStartValue,o.scaleStepWidth)):p=n(v,b.maxSteps,b.minSteps,b.maxValue,b.minValue,k),f=Math.floor(v/p.steps),c(),a(o,s,r,i)},w=function(e,o,i){function r(a){i.lineWidth=o.barStrokeWidth;for(var n=0;n<e.datasets.length;n++){i.fillStyle=e.datasets[n].fillColor,i.strokeStyle=e.datasets[n].strokeColor;for(var l=0;l<e.datasets[n].data.length;l++){var r=F+o.barValueSpacing+M*l+y*n+o.barDatasetSpacing*n+o.barStrokeWidth*n;i.beginPath(),i.moveTo(r,P),i.lineTo(r,P-a*t(e.datasets[n].data[l],p,f)+o.barStrokeWidth/2),i.lineTo(r+y,P-a*t(e.datasets[n].data[l],p,f)+o.barStrokeWidth/2),i.lineTo(r+y,P),o.barShowStroke&&i.stroke(),i.closePath(),i.fill()}}}function s(){i.lineWidth=o.scaleLineWidth,i.strokeStyle=o.scaleLineColor,i.beginPath(),i.moveTo(S-L/2+5,P),i.lineTo(S-L/2-w-5,P),i.stroke(),W>0?(i.save(),i.textAlign="right"):i.textAlign="center",i.fillStyle=o.scaleFontColor;for(var t=0;t<e.labels.length;t++)i.save(),W>0?(i.translate(F+t*M,P+o.scaleFontSize),i.rotate(-(W*(Math.PI/180))),i.fillText(e.labels[t],0,0),i.restore()):i.fillText(e.labels[t],F+t*M+M/2,P+o.scaleFontSize+3),i.beginPath(),i.moveTo(F+(t+1)*M,P+3),i.lineWidth=o.scaleGridLineWidth,i.strokeStyle=o.scaleGridLineColor,i.lineTo(F+(t+1)*M,5),i.stroke();i.lineWidth=o.scaleLineWidth,i.strokeStyle=o.scaleLineColor,i.beginPath(),i.moveTo(F,P+5),i.lineTo(F,5),i.stroke(),i.textAlign="right",i.textBaseline="middle";for(var a=0;a<p.steps;a++)i.beginPath(),i.moveTo(F-3,P-(a+1)*f),o.scaleShowGridLines?(i.lineWidth=o.scaleGridLineWidth,i.strokeStyle=o.scaleGridLineColor,i.lineTo(F+w+5,P-(a+1)*f)):i.lineTo(F-.5,P-(a+1)*f),i.stroke(),o.scaleShowLabels&&i.fillText(p.labels[a],F-8,P-(a+1)*f)}function c(){var t=1;if(o.scaleShowLabels){i.font=o.scaleFontStyle+" "+o.scaleFontSize+"px "+o.scaleFontFamily;for(var a=0;a<p.labels.length;a++){var n=i.measureText(p.labels[a]).width;t=n>t?n:t}t+=10}w=S-t-L,M=Math.floor(w/e.labels.length),y=(M-2*o.scaleGridLineWidth-2*o.barValueSpacing-(o.barDatasetSpacing*e.datasets.length-1)-(o.barStrokeWidth/2*e.datasets.length-1))/e.datasets.length,F=S-L/2-w,P=v+o.scaleFontSize/2}function u(){h=m,i.font=o.scaleFontStyle+" "+o.scaleFontSize+"px "+o.scaleFontFamily,L=1;for(var t=0;t<e.labels.length;t++){var a=i.measureText(e.labels[t]).width;L=a>L?a:L}S/e.labels.length<L?(W=45,S/e.labels.length<Math.cos(W)*L?(W=90,h-=L):h-=Math.sin(W)*L):h-=o.scaleFontSize,h-=5,g=o.scaleFontSize,h-=g,v=h}function d(){for(var t=Number.MIN_VALUE,a=Number.MAX_VALUE,n=0;n<e.datasets.length;n++)for(var l=0;l<e.datasets[n].data.length;l++)e.datasets[n].data[l]>t&&(t=e.datasets[n].data[l]),e.datasets[n].data[l]<a&&(a=e.datasets[n].data[l]);var o=Math.floor(v/(.66*g)),i=Math.floor(v/g*.5);return{maxValue:t,minValue:a,maxSteps:o,minSteps:i}}var h,f,p,g,v,b,k,M,L,w,F,P,y,W=0;u(),b=d(),k=o.scaleShowLabels?o.scaleLabel:"",o.scaleOverride?(p={steps:o.scaleSteps,stepValue:o.scaleStepWidth,graphMin:o.scaleStartValue,labels:[]},l(k,p.labels,p.steps,o.scaleStartValue,o.scaleStepWidth)):p=n(v,b.maxSteps,b.minSteps,b.maxValue,b.minValue,k),f=Math.floor(v/p.steps),c(),a(o,r,s,i)},F=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),P={}};