(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{511:function(e,t,a){e.exports=a(833)},516:function(e,t,a){},833:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=(a(516),a(36)),s=a(24),l=a(49),u=a(50),m=a(53),h=a(159),p=a(40),f=a(74),d=a(123),v=a.n(d);var y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).default_start_date="2017-01-01",a.default_end_date="2017-01-07",a.stats_daily_url="https://xianliflc-ws-product-python.glitch.me/stats/daily",a.stats_hourly_url="https://xianliflc-ws-product-python.glitch.me/hourly",a.filter_type="daily",a.state={stats:[]},a.myRef=r.a.createRef(),a.myRef2=r.a.createRef(),a.filter_type_ref=r.a.createRef(),a.changeDate=a.changeDate.bind(Object(p.a)(a)),a.changeType=a.changeType.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getData",value:function(e,t){var a=this;if(function(e,t){var a=new Date(e).getTime(),n=new Date(t).getTime()-a;return Math.round(n/864e5)}(e,t)+1>7)alert("Range should be maximum of 7 days");else{var n="daily"===this.filter_type?this.stats_daily_url:this.stats_hourly_url;v.a.get("".concat(n,"?start_date=").concat(e,"&end_date=").concat(t)).then((function(e){e.data.data.error&&console.error(e.data.data.error),e.data.data.forEach((function(e){e.impressions=Math.round(e.impressions/100),e.revenue=Math.round(e.revenue)}));var t=e.data.data;a.setState({stats:t})}))}}},{key:"componentDidMount",value:function(){this.getData(this.default_start_date,this.default_end_date,this.filter_type)}},{key:"changeDate",value:function(e){e.preventDefault(),console.log(this.filter_type_ref,this.filter_type_ref.current.f),this.getData(this.myRef.current.value,this.myRef2.current.value)}},{key:"changeType",value:function(e){this.filter_type=e.target.value}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.changeDate},r.a.createElement("div",null,r.a.createElement("input",{type:"date",ref:this.myRef}),r.a.createElement("input",{type:"date",ref:this.myRef2})),r.a.createElement("div",{ref:this.filter_type_ref,onChange:this.changeType},r.a.createElement("input",{type:"radio",name:"type",value:"daily"})," daily",r.a.createElement("input",{type:"radio",name:"type",value:"hourly"})," hourly"),r.a.createElement("button",{type:"submit"}," Submit ")),r.a.createElement(f.b,{width:1e3,height:900,data:this.state.stats,margin:{top:50,right:80,bottom:25,left:50}},r.a.createElement(f.a,{stroke:"#f5f5f5"}),r.a.createElement(f.f,{dataKey:"hour",label:{value:"hour",position:"insideBottomRight",offset:0}}),r.a.createElement(f.g,{label:{value:"impressions (x100)",angle:-90,position:"insideTopLeft"}}),r.a.createElement(f.e,null),r.a.createElement(f.c,null),r.a.createElement(f.d,{type:"monotone",dataKey:"impressions",stroke:"#8884d8"}),r.a.createElement(f.d,{dataKey:"clicks",barSize:20,stroke:"#413ea0"}),r.a.createElement(f.d,{type:"monotone",dataKey:"revenue",stroke:"#ff7300"})))}}]),t}(n.PureComponent),_=a(42),g=a(472),b=a.n(g),E=a(211),k=a(427),w=a(276),x=a(280),O=a.n(x),j=a(5),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleTextChange=function(e){a.props.onSearch(e.target.value)},a.onKeyDown=function(e){27===e.keyCode&&a.props.onHide()},a.onKeyUp=function(e){8===e.keyCode&&""===e.target.value&&(a.handleTextChange(e),a.props.clear())},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown,!1)}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.options,o=t.onHide,i=t.searchText;return r.a.createElement(E.a,{appear:!0,in:!0,timeout:300},r.a.createElement("div",{className:a.main,ref:function(t){return e.rootRef=t}},r.a.createElement(k.a,{placeholder:"Search...",className:a.searchText,InputProps:{"aria-label":n.textLabels.toolbar.search},value:i||"",onChange:this.handleTextChange,onKeyUp:this.onKeyUp,fullWidth:!0,inputRef:function(t){return e.searchField=t}}),r.a.createElement(w.a,{className:a.clearIcon,onClick:o},r.a.createElement(O.a,null))))}}]),t}(r.a.Component),R=Object(j.a)((function(e){return{main:{display:"flex",flex:"1 0 auto"},searchText:{flex:"0.8 0"},clearIcon:{"&:hover":{color:e.palette.error.main}}}}),{name:"CustomSearchRender"})(S);function C(e){console.log(e),this.setState({searched_rows:e})}var D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={style:{backgroundColor:"#ededed"},searched_rows:"",clear:!1},a.myRef=r.a.createRef(),C=C.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({searched_rows:e.query})}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"render",value:function(){return r.a.createElement("tr",{ref:this.myRef,style:this.props.query&&""!==this.props.query&&this.props.poi_name.toLowerCase().toString().indexOf(this.props.query.toLowerCase())>=0?{backgroundColor:"#ff00ff"}:this.state.style},r.a.createElement("td",null),r.a.createElement("td",null,this.props.poi_name),r.a.createElement("td",null,this.props.events),r.a.createElement("td",null,this.props.revenue))}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).poi_url="https://xianliflc-ws-product-python.glitch.me/poi?include=revenue,events",a.columns=[{name:"POI Name",searchable:!0},{name:"No. of events",searchable:!1},{name:"Revenue $",searchable:!1}],a.options={filter:!0,selectableRows:!0,selectableRowsHeader:!1,filterType:"dropdown",responsive:"stacked",rowsPerPage:20,page:1,print:!1,download:!1,rowsPerPageOptions:[],caseSensitive:!1,onTableChange:function(e,t){},customSearch:function(e,t,n){return a.highlightRow(e),!0},customSearchRender:function(e,t,n,o){return r.a.createElement(R,{searchText:e,onSearch:t,onHide:n,options:o,clear:a.clearSearch.bind(Object(p.a)(a))})},customRowRender:function(e){var t=Object(_.a)(e,3),n=t[0],o=t[1],i=t[2];return r.a.createElement(D,{key:n,poi_name:n,events:o,revenue:i,query:a.state.searched_rows})}},a.state={poi:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"clearSearch",value:function(){this.setState({clear:!0,searched_rows:""})}},{key:"highlightRow",value:function(e){this.setState({searched_rows:e,clear:!1})}},{key:"getData",value:function(){var e=this;v.a.get("".concat(this.poi_url)).then((function(t){var a=[];t.data.data.error&&console.error(t.data.data.error),t.data.data.forEach((function(e){a.push([e["Poi Name"],e.events,e.revenue])})),e.setState({poi:a})}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement(b.a,{title:"Poi-revenue list",data:this.state.poi,columns:this.columns,options:this.options})}}]),t}(r.a.Component),M=a(723),T=M.compose,P=M.withProps,I=M.withHandlers,K=a(725),L=K.withScriptjs,A=K.withGoogleMap,W=K.GoogleMap,U=K.Marker,H=a(829).MarkerClusterer,q=T(P({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAnKu85VSoJJASFOAP2K-sgQbsu6Hm9PoU&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),I({onMarkerClustererClick:function(){return function(e){}}}),L,A)((function(e){return r.a.createElement(W,{defaultZoom:4,defaultCenter:{lat:43,lng:-79}},r.a.createElement(H,{onClick:e.onMarkerClustererClick,averageCenter:!0,enableRetinaIcons:!0,gridSize:60},e.markers.map((function(e){return r.a.createElement(U,{key:e.poi_id,position:{lat:e.lat,lng:e.lon}})}))))})),z={composedWrapper:{composed:y},dataTableWapper:{DataTable:N},clusterMap:{ClusterMap:function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).poi_url="https://xianliflc-ws-product-python.glitch.me/poi?include=revenue,events",a.default_min_revenue=0,a.default_max_revenue=1e9,a.default_min_events=0,a.default_max_events=1e9,a.max_revenue_ref=r.a.createRef(),a.min_revenue_ref=r.a.createRef(),a.max_events_ref=r.a.createRef(),a.min_events_ref=r.a.createRef(),a.filterServer=a.filterServer.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.setState({markers:[]})}},{key:"componentDidMount",value:function(){this.getData(this.default_min_revenue,this.default_max_revenue,this.default_min_events,this.default_max_events)}},{key:"getData",value:function(e,t,a,n){var r=this;v.a.get("".concat(this.poi_url,"&min_revenue=").concat(e,"&max_revenue=").concat(t,"&min_events=").concat(a,"&max_events=").concat(n)).then((function(e){e.data.data.error&&(alert(JSON.stringify(e.data.data.error)),console.error(e.data.data.error)),r.setState({markers:e.data.data})}))}},{key:"filterServer",value:function(e){e.preventDefault(),this.getData(NaN!==parseInt(this.min_revenue_ref.current.value)?parseInt(this.min_revenue_ref.current.value):this.default_min_revenue,NaN!==parseInt(this.max_revenue_ref.current.value)?parseInt(this.max_revenue_ref.current.value):this.default_max_revenue,NaN!==parseInt(this.min_events_ref.current.value)?parseInt(this.min_events_ref.current.value):this.default_min_events,NaN!==parseInt(this.max_events_ref.current.value)?parseInt(this.max_events_ref.current.value):this.default_max_events)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.filterServer},"Min revenue ",r.a.createElement("input",{type:"text",ref:this.min_revenue_ref}),"Max revenue ",r.a.createElement("input",{type:"text",ref:this.max_revenue_ref}),"Min events ",r.a.createElement("input",{type:"text",ref:this.min_events_ref}),"Max events ",r.a.createElement("input",{type:"text",ref:this.max_events_ref}),r.a.createElement("button",{type:"submit"}," Submit ")),r.a.createElement(q,{markers:this.state.markers}))}}]),t}(r.a.PureComponent)}},J=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderList",value:function(){var e=Object.keys(z).map((function(e){var t=z[e],a=Object.keys(t).map((function(t){return r.a.createElement("li",{key:"component-".concat(t)},r.a.createElement(h.b,{to:{pathname:"/",search:"?group=".concat(e,"&component=").concat(t)}},t))}));return r.a.createElement("div",{key:"group-".concat(e),className:"component-list-container"},r.a.createElement("p",{className:"group-name"},e),r.a.createElement("ul",{className:"component-list"},a))}));return r.a.createElement("div",{className:"component-list-wrapper"},r.a.createElement("p",{className:"title"},"components"),e)}},{key:"renderPageDetail",value:function(e,t){return r.a.createElement("div",{className:"component-wrapper"},r.a.createElement("p",{className:"back"},r.a.createElement(h.b,{to:{pathname:"/"}},"Back to homepage")),r.a.createElement("p",{className:"title"},t),z[e]&&z[e][t]?r.a.createElement(z[e][t]):null)}},{key:"render",value:function(){var e=this.props.location.search,t=/group=([a-zA-Z]+)/.exec(e),a=/component=([a-zA-Z]+)/.exec(e);return t&&2===t.length&&a&&2===a.length?this.renderPageDetail(t[1],a[1]):this.renderList()}}]),t}(n.Component),B=a(92);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h.a,null,r.a.createElement(B.a,{path:"/",component:J})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[511,1,2]]]);
//# sourceMappingURL=main.66d00f3b.chunk.js.map