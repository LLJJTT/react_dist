(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{YiZ1:function(e,t,a){e.exports={avatarHolder:"antd-pro-pages-account-center-center-avatarHolder",name:"antd-pro-pages-account-center-center-name",detail:"antd-pro-pages-account-center-center-detail",title:"antd-pro-pages-account-center-center-title",group:"antd-pro-pages-account-center-center-group",address:"antd-pro-pages-account-center-center-address",tagsTitle:"antd-pro-pages-account-center-center-tagsTitle",teamTitle:"antd-pro-pages-account-center-center-teamTitle",tags:"antd-pro-pages-account-center-center-tags",team:"antd-pro-pages-account-center-center-team",tabsCard:"antd-pro-pages-account-center-center-tabsCard"}},zMb4:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("T2oS");var c=n(a("W9HT"));a("14J3");var u=n(a("BMrR"));a("jCWc");var d=n(a("kPKH"));a("Telt");var s=n(a("Tckk"));a("Pwec");var i=n(a("CtXQ"));a("5NDa");var o=n(a("5rEg"));a("+BJd");var f=n(a("mr32"));a("/zsF");var p,m,g=n(a("PArb")),h=n(a("RIqP")),E=n(a("lwsE")),v=n(a("W8MJ")),b=n(a("a1gu")),y=n(a("Nsbk")),k=n(a("7W2i")),T=n(a("PJYZ")),C=l(a("q1tI")),w=a("MuoO"),N=n(a("mOP9")),j=n(a("usdK")),I=n(a("v99g")),P=n(a("YiZ1")),V=(p=(0,w.connect)(function(e){var t=e.loading,a=e.user,n=e.project;return{listLoading:t.effects["list/fetch"],currentUser:a.currentUser,currentUserLoading:t.effects["user/fetchCurrent"],project:n,projectLoading:t.effects["project/fetchNotice"]}}),p(m=function(e){function t(){var e,a;(0,E.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,b.default)(this,(e=(0,y.default)(t)).call.apply(e,[this].concat(l))),a.state={newTags:[],inputVisible:!1,inputValue:""},a.onTabChange=function(e){var t=a.props.match;switch(e){case"articles":j.default.push("".concat(t.url,"/articles"));break;case"applications":j.default.push("".concat(t.url,"/applications"));break;case"projects":j.default.push("".concat(t.url,"/projects"));break;default:break}},a.showInput=function(){a.setState({inputVisible:!0},function(){return a.input.focus()})},a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=(0,T.default)((0,T.default)(a)),t=e.state,n=t.inputValue,l=t.newTags;n&&0===l.filter(function(e){return e.label===n}).length&&(l=(0,h.default)(l).concat([{key:"new-".concat(l.length),label:n}])),a.setState({newTags:l,inputVisible:!1,inputValue:""})},a}return(0,k.default)(t,e),(0,v.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"user/fetchCurrent"}),e({type:"list/fetch",payload:{count:8}}),e({type:"project/fetchNotice"})}},{key:"render",value:function(){var e=this.state,t=e.newTags,a=e.inputVisible,n=e.inputValue,l=this.props,p=l.listLoading,m=l.currentUser,h=l.currentUserLoading,E=l.project.notice,v=l.projectLoading,b=l.match,y=l.location,k=l.children,T=[{key:"articles",tab:C.default.createElement("span",null,"\u6587\u7ae0 ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"applications",tab:C.default.createElement("span",null,"\u5e94\u7528 ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"projects",tab:C.default.createElement("span",null,"\u9879\u76ee ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))}];return C.default.createElement(I.default,{className:P.default.userCenter},C.default.createElement(u.default,{gutter:24},C.default.createElement(d.default,{lg:7,md:24},C.default.createElement(r.default,{bordered:!1,style:{marginBottom:24},loading:h},m&&Object.keys(m).length?C.default.createElement("div",null,C.default.createElement("div",{className:P.default.avatarHolder},C.default.createElement("img",{alt:"",src:m.avatar}),C.default.createElement("div",{className:P.default.name},m.name),C.default.createElement("div",null,m.signature)),C.default.createElement("div",{className:P.default.detail},C.default.createElement("p",null,C.default.createElement("i",{className:P.default.title}),m.title),C.default.createElement("p",null,C.default.createElement("i",{className:P.default.group}),m.group),C.default.createElement("p",null,C.default.createElement("i",{className:P.default.address}),m.geographic.province.label,m.geographic.city.label)),C.default.createElement(g.default,{dashed:!0}),C.default.createElement("div",{className:P.default.tags},C.default.createElement("div",{className:P.default.tagsTitle},"\u6807\u7b7e"),m.tags.concat(t).map(function(e){return C.default.createElement(f.default,{key:e.key},e.label)}),a&&C.default.createElement(o.default,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:n,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!a&&C.default.createElement(f.default,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},C.default.createElement(i.default,{type:"plus"}))),C.default.createElement(g.default,{style:{marginTop:16},dashed:!0}),C.default.createElement("div",{className:P.default.team},C.default.createElement("div",{className:P.default.teamTitle},"\u56e2\u961f"),C.default.createElement(c.default,{spinning:v},C.default.createElement(u.default,{gutter:36},E.map(function(e){return C.default.createElement(d.default,{key:e.id,lg:24,xl:12},C.default.createElement(N.default,{to:e.href},C.default.createElement(s.default,{size:"small",src:e.logo}),e.member))}))))):"loading...")),C.default.createElement(d.default,{lg:17,md:24},C.default.createElement(r.default,{className:P.default.tabsCard,bordered:!1,tabList:T,activeTabKey:y.pathname.replace("".concat(b.path,"/"),""),onTabChange:this.onTabChange,loading:p},k))))}}]),t}(C.PureComponent))||m),z=V;t.default=z}}]);