(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{R6qW:function(e,a,t){"use strict";t.r(a);var o=t("q1tI"),n=t.n(o),r=t("7t3Y"),i=t("7xaS"),c=t("hlie"),l=t("oa/T"),d=t("ofer"),s=t("o4QW"),p=t("Z3vd"),b=t("vOnD"),m=t("Kfvu"),u=t("9kay"),h=b.e.img.withConfig({displayName:"wars-tip__Image",componentId:"sc-14t7w2a-0"})(["width:100%;"]);a.default=function(e){var a=e.pageContext,t=a.node,o=a.uri,b=Object(u.b)().t,g=t.title,y=t.text,x=t.image_url,f=t.source_description,v=t.source_url;return n.a.createElement(i.a,{hideAlerts:!0},n.a.createElement(r.a,{title:"WarsTip",uri:o}),n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{href:v,onClick:function(){Object(m.trackCustomEvent)({category:"wars_tip",action:"click",label:v})}},n.a.createElement(h,{src:x,alt:"test"}))),n.a.createElement(l.a,null,n.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},g),y&&n.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},y)),n.a.createElement(s.a,null,n.a.createElement(p.a,{size:"small",color:"primary",href:v,onClick:function(){Object(m.trackCustomEvent)({category:"wars_tips",action:"click_source",label:v})}},""+b("wars_tips.source")+f)))}},Z3vd:function(e,a,t){"use strict";var o=t("aXB2"),n=t("k1TG"),r=t("q1tI"),i=t.n(r),c=(t("17x9"),t("iuhU")),l=t("H2TA"),d=t("ye/S"),s=t("VD++"),p=t("NqtD"),b=i.a.forwardRef((function(e,a){var t=e.children,r=e.classes,l=e.className,d=e.color,b=void 0===d?"default":d,m=e.component,u=void 0===m?"button":m,h=e.disabled,g=void 0!==h&&h,y=e.disableElevation,x=void 0!==y&&y,f=e.disableFocusRipple,v=void 0!==f&&f,S=e.endIcon,k=e.focusVisibleClassName,C=e.fullWidth,O=void 0!==C&&C,w=e.size,j=void 0===w?"medium":w,z=e.startIcon,E=e.type,I=void 0===E?"button":E,R=e.variant,T=void 0===R?"text":R,N=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),$=z&&i.a.createElement("span",{className:Object(c.a)(r.startIcon,r["iconSize".concat(Object(p.a)(j))])},z),L=S&&i.a.createElement("span",{className:Object(c.a)(r.endIcon,r["iconSize".concat(Object(p.a)(j))])},S);return i.a.createElement(s.a,Object(n.a)({className:Object(c.a)(r.root,r[T],l,"inherit"===b?r.colorInherit:"default"!==b&&r["".concat(T).concat(Object(p.a)(b))],"medium"!==j&&[r["".concat(T,"Size").concat(Object(p.a)(j))],r["size".concat(Object(p.a)(j))]],x&&r.disableElevation,g&&r.disabled,O&&r.fullWidth),component:u,disabled:g,focusRipple:!v,focusVisibleClassName:Object(c.a)(r.focusVisible,k),ref:a,type:I},N),i.a.createElement("span",{className:r.label},$,t,L))}));a.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(d.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(d.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(d.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(b)},o4QW:function(e,a,t){"use strict";var o=t("k1TG"),n=t("aXB2"),r=t("q1tI"),i=t.n(r),c=(t("17x9"),t("iuhU")),l=t("H2TA"),d=i.a.forwardRef((function(e,a){var t=e.disableSpacing,r=void 0!==t&&t,l=e.classes,d=e.className,s=Object(n.a)(e,["disableSpacing","classes","className"]);return i.a.createElement("div",Object(o.a)({className:Object(c.a)(l.root,d,!r&&l.spacing),ref:a},s))}));a.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(d)},"oa/T":function(e,a,t){"use strict";var o=t("k1TG"),n=t("aXB2"),r=t("q1tI"),i=t.n(r),c=(t("17x9"),t("iuhU")),l=t("H2TA"),d=i.a.forwardRef((function(e,a){var t=e.classes,r=e.className,l=e.component,d=void 0===l?"div":l,s=Object(n.a)(e,["classes","className","component"]);return i.a.createElement(d,Object(o.a)({className:Object(c.a)(t.root,r),ref:a},s))}));a.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(d)}}]);
//# sourceMappingURL=component---src-templates-wars-tip-js-623060bd024aa9f00a3a.js.map