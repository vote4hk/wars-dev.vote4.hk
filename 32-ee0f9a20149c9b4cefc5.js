(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"0BW2":function(a,e,t){"use strict";t.r(e);t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V");var r=t("RZad"),n=t("q1tI"),o=t.n(n),l=t("9kay"),i=t("vOnD"),d=t("hlFM"),_=t("ofer"),g=t("AaR6"),h=t("7Qib"),m=t("i+AT"),u=t("hlie"),p=t("6shs");var c=Object(i.e)(d.a).withConfig({displayName:"PassengerDailyFigure__DailyStatsContainer",componentId:"jy7nkr-0"})(["display:flex;justify-content:space-between;"]),s=Object(i.e)((function(a){a.badSign;var e=a.children,t=function(a,e){if(null==a)return{};var t,r,n={},o=Object.keys(a);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,["badSign","children"]);return o.a.createElement(_.a,t,e)})).withConfig({displayName:"PassengerDailyFigure__DailyChange",componentId:"jy7nkr-1"})(["font-size:14px;font-weight:700;color:",";"],(function(a){return a.badSign?a.theme.palette.secondary.dark:a.theme.palette.trafficLight.green})),f=Object(i.e)(d.a).withConfig({displayName:"PassengerDailyFigure__DailyStat",componentId:"jy7nkr-2"})(["display:flex;flex-direction:column;align-items:center;"]),v=Object(i.e)(_.a).withConfig({displayName:"PassengerDailyFigure__DailyStatFigureLabel",componentId:"jy7nkr-3"})(["text-align:center;font-size:",";","{font-size:11px;}"],(function(a){return a.theme.typography.xsmallFontSize}),g.b.down("sm")),y=Object(i.e)(_.a).withConfig({displayName:"PassengerDailyFigure__PassengerDailyStatFigure",componentId:"jy7nkr-4"})(["font-size:20px;font-weight:700;"]);e.default=function(){var a=r.data,e=Object(l.b)().t,t=a.allImmdShenzhenBay.edges,n=t[0].node,i=t[1].node,d=a.allImmdHongKongZhuhaiMacaoBridge.edges,g=d[0].node,b=d[1].node,k=a.allImmdAirport.edges,w=k[0].node,j=k[1].node,x=a.allImmdTotal.edges,O=x[0].node,I=x[1].node,S=[{label:e("dashboard.airport"),today_stat:w.arrival_total,diff:w.arrival_total-j.arrival_total},{label:e("dashboard.bay"),today_stat:n.arrival_total||0,diff:n.arrival_total-i.arrival_total},{label:e("dashboard.bridge"),today_stat:g.arrival_total,diff:g.arrival_total-b.arrival_total},{label:e("dashboard.total"),today_stat:O.arrival_total,diff:O.arrival_total-I.arrival_total}];return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.b,null,e("dashboard.reference_only")),o.a.createElement(_.a,{variant:"body2"},o.a.createElement(u.a,{href:"https://www.immd.gov.hk/hkt/message_from_us/stat_menu.html",target:"_blank"},e("dashboard.source_immd"))),o.a.createElement(p.a,null,o.a.createElement(c,null,S.map((function(a,e){return o.a.createElement(f,{key:e},o.a.createElement(v,null,a.label),o.a.createElement(y,null,Object(h.b)(a.today_stat)),o.a.createElement(s,{badSign:a.diff>0},a.diff>0?"▲ "+Object(h.b)(a.diff):a.diff<0?"▼ "+Object(h.b)(Math.abs(a.diff)):"-"))})))))}},RZad:function(a){a.exports=JSON.parse('{"data":{"allImmdHongKongZhuhaiMacaoBridge":{"edges":[{"node":{"arrival_hong_kong":29,"arrival_mainland":2,"arrival_other":1,"arrival_total":32,"date":"2020-07-25","departure_hong_kong":252,"departure_mainland":252,"departure_other":4,"departure_total":273,"location":"Hong Kong-Zhuhai-Macao Bridge"}},{"node":{"arrival_hong_kong":36,"arrival_mainland":0,"arrival_other":2,"arrival_total":38,"date":"2020-07-24","departure_hong_kong":250,"departure_mainland":250,"departure_other":13,"departure_total":281,"location":"Hong Kong-Zhuhai-Macao Bridge"}}]},"allImmdTotal":{"edges":[{"node":{"arrival_hong_kong":906,"arrival_mainland":59,"arrival_other":27,"arrival_total":992,"date":"2020-07-25","departure_hong_kong":3477,"departure_mainland":3477,"departure_other":65,"departure_total":3883,"location":"Total"}},{"node":{"arrival_hong_kong":1382,"arrival_mainland":53,"arrival_other":44,"arrival_total":1479,"date":"2020-07-24","departure_hong_kong":3489,"departure_mainland":3489,"departure_other":130,"departure_total":3927,"location":"Total"}}]},"allImmdAirport":{"edges":[{"node":{"arrival_hong_kong":577,"arrival_mainland":6,"arrival_other":21,"arrival_total":604,"date":"2020-07-25","departure_hong_kong":1280,"departure_mainland":1280,"departure_other":55,"departure_total":1403,"location":"Airport"}},{"node":{"arrival_hong_kong":1069,"arrival_mainland":5,"arrival_other":42,"arrival_total":1116,"date":"2020-07-24","departure_hong_kong":1386,"departure_mainland":1386,"departure_other":101,"departure_total":1543,"location":"Airport"}}]},"allImmdShenzhenBay":{"edges":[{"node":{"arrival_hong_kong":300,"arrival_mainland":51,"arrival_other":5,"arrival_total":356,"date":"2020-07-25","departure_hong_kong":1945,"departure_mainland":1945,"departure_other":6,"departure_total":2207,"location":"Shenzhen Bay"}},{"node":{"arrival_hong_kong":277,"arrival_mainland":48,"arrival_other":0,"arrival_total":325,"date":"2020-07-24","departure_hong_kong":1853,"departure_mainland":1853,"departure_other":16,"departure_total":2103,"location":"Shenzhen Bay"}}]}}}')},"i+AT":function(a,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return l}));var r=t("vOnD"),n=t("ofer"),o=Object(r.e)(n.a).withConfig({displayName:"Text__Label",componentId:"sc-1qimiaf-0"})(["margin-bottom:3px;font-size:","px;color:",";"],(function(a){return a.theme.typography.xsmallFontSize}),(function(a){return a.theme.palette.primary.dark})),l=Object(r.e)(n.a).withConfig({displayName:"Text__Paragraph",componentId:"sc-1qimiaf-1"})(["margin-bottom:8px;font-size:","px;&& b{font-weight:800;}"],(function(a){return a.theme.typography.smallFontSize}))}}]);
//# sourceMappingURL=32-ee0f9a20149c9b4cefc5.js.map