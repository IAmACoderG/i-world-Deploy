"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[503],{503:function(t,n,e){e.r(n),e.d(n,{PolygonDrawer:function(){return c}});var r=e(5671),o=e(3144),u=e(136),a=e(516),i=e(3897),c=function(t){(0,u.Z)(e,t);var n=(0,a.Z)(e);function e(){return(0,r.Z)(this,e),n.apply(this,arguments)}return(0,o.Z)(e,[{key:"getCenter",value:function(t,n){return{x:-n/(t.sides/3.5),y:-n/.76}}},{key:"getSidesData",value:function(t,n){var e=t.sides;return{count:{denominator:1,numerator:e},length:2.66*n/(e/3)}}}]),e}(i.y)},3897:function(t,n,e){e.d(n,{y:function(){return c}});var r=e(5671),o=e(3144),u=e(4709),a=0,i=0;var c=function(){function t(){(0,r.Z)(this,t)}return(0,o.Z)(t,[{key:"draw",value:function(t){var n=t.particle,e=t.radius;!function(t,n,e){var r=t.context,o=e.count.numerator*e.count.denominator,c=e.count.numerator/e.count.denominator,s=180*(c-2)/c,l=Math.PI-(0,u.Id)(s);if(r){r.beginPath(),r.translate(n.x,n.y),r.moveTo(a,i);for(var f=0;f<o;f++)r.lineTo(e.length,i),r.translate(e.length,i),r.rotate(l)}}(t,this.getCenter(n,e),this.getSidesData(n,e))}},{key:"getSidesCount",value:function(t){var n,e=t.shapeData;return Math.round((0,u.Gu)(null!==(n=null===e||void 0===e?void 0:e.sides)&&void 0!==n?n:5))}}]),t}()}}]);
//# sourceMappingURL=503.d68831e4.chunk.js.map