(this.webpackJsonpbike=this.webpackJsonpbike||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(2),o=n.n(s),c=n(4),l=n.n(c),i=n(6),u=n(5),m=n(3);n(14);var p=function(){var e="https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json",t="https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json",n=Object(a.useState)({lat:59.926171,lng:10.742574}),s=Object(u.a)(n,2),o=s[0],c=s[1],p=Object(a.useState)([]),b=Object(u.a)(p,2),f=b[0],h=b[1],k=Object(a.useState)([]),v=Object(u.a)(k,2),d=v[0],j=v[1];Object(a.useEffect)((function(){function n(){return(n=Object(i.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,h(a.data.stations);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(i.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,j(a.data.stations);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}(),function(){a.apply(this,arguments)}()}),[]);var g=Object(a.useState)({}),y=Object(u.a)(g,2),E=y[0],O=y[1];return r.a.createElement(m.c,{googleMapsApiKey:"AIzaSyAm5i-LiJFcXQ2eBOWwD2Jrl-akuSv8ojg"},r.a.createElement(m.a,{mapContainerStyle:{width:"100vw",height:"100vh"},zoom:13,center:o},r.a.createElement(m.e,{options:{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"}},(function(e){return f.map((function(t,n){return r.a.createElement(m.d,{className:"marker",key:n,onClick:function(){c({lat:t.lat,lng:t.lon}),O({id:d[n].station_id,id_2:t.station_id,name:t.name,lat:t.lat,lon:t.lon,numAvailableBikes:d[n].num_bikes_available,freeSpots:d[n].num_docks_available})},position:{lat:t.lat,lng:t.lon},clusterer:e})}))})),E.name&&r.a.createElement(m.b,{position:{lat:E.lat,lng:E.lon},clickable:!0,onCloseClick:function(){return O({})}},r.a.createElement("div",null,r.a.createElement("h4",null,E.name),r.a.createElement("p",null,"Available bikes: "+E.numAvailableBikes),r.a.createElement("p",null,"Free spots: "+E.freeSpots)))))};var b=function(){return r.a.createElement(p,null)};o.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2fdb29f3.chunk.js.map