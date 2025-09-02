import{o,c as d,Z as y,aC as C,v,l as r,Y as de,X as we,g as L,t as h,d as ue,e as n,u as t,aD as Ie,r as b,G as Se,s as le,B as R,aE as Ne,b as g,a as F,x as G,aF as U,aG as se,aH as Te,m as D,F as Ae,h as Ce,f as z,j as ne,aI as xe,S as re,aJ as H,ax as Oe,aK as Be,_ as De}from"./index-B9ncFhZ9.js";var Le={root:"p-card p-component",header:"p-card-header",body:"p-card-body",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Pe={name:"BaseCard",extends:de,css:{classes:Le}},pe={name:"Card",extends:Pe};function Ue(e,V,p,w,I,m){return o(),d("div",y({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"card"}),[e.$slots.header?(o(),d("div",y({key:0,class:e.cx("header")},e.ptm("header")),[C(e.$slots,"header")],16)):v("",!0),r("div",y({class:e.cx("body")},e.ptm("body")),[e.$slots.title?(o(),d("div",y({key:0,class:e.cx("title")},e.ptm("title")),[C(e.$slots,"title")],16)):v("",!0),e.$slots.subtitle?(o(),d("div",y({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[C(e.$slots,"subtitle")],16)):v("",!0),r("div",y({class:e.cx("content")},e.ptm("content")),[C(e.$slots,"content")],16),e.$slots.footer?(o(),d("div",y({key:2,class:e.cx("footer")},e.ptm("footer")),[C(e.$slots,"footer")],16)):v("",!0)],16)],16)}pe.render=Ue;var ze=`
.p-progressbar {
    position: relative;
    overflow: hidden;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-determinate .p-progressbar-value-animate {
    transition: width 1s ease-in-out;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}

@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        left: -200%;
        right: 100%;
    }
    60% {
        left: 107%;
        right: -8%;
    }
    100% {
        left: 107%;
        right: -8%;
    }
}
`,Ee={root:function(V){var p=V.instance;return["p-progressbar p-component",{"p-progressbar-determinate":p.determinate,"p-progressbar-indeterminate":p.indeterminate}]},container:"p-progressbar-indeterminate-container",value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label"},_e=we(ze,{name:"progressbar",manual:!0}),je=_e.load,Re={name:"BaseProgressBar",extends:de,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},css:{classes:Ee,loadStyle:je},provide:function(){return{$parentInstance:this}}},me={name:"ProgressBar",extends:Re,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},Fe=["aria-valuenow"];function Ge(e,V,p,w,I,m){return o(),d("div",y({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptm("root")),[m.determinate?(o(),d("div",y({key:0,class:e.cx("value"),style:m.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(o(),d("div",y({key:0,class:e.cx("label")},e.ptm("label")),[C(e.$slots,"default",{},function(){return[L(h(e.value+"%"),1)]})],16)):v("",!0)],16)):v("",!0),m.indeterminate?(o(),d("div",y({key:1,class:e.cx("container")},e.ptm("container")),[r("div",y({class:e.cx("value")},e.ptm("value")),null,16)],16)):v("",!0)],16,Fe)}me.render=Ge;const He={class:"p-float-label"},qe={style:{overflow:"hidden","text-overflow":"ellipsis",width:"calc(100% - 0.75rem)"},for:"datetime"},oe=ue({__name:"TimeInput",props:{modelValue:{},label:{},needTime:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:V}){const p=e,w=V,I=m=>{w("update:modelValue",m)};return(m,Y)=>(o(),d("span",He,[n(t(Ie),{id:"time",autocomplete:"off","time-only":"","model-value":p.modelValue,"onUpdate:modelValue":I},null,8,["model-value"]),r("label",qe,h(p.label),1)]))}});var q=(e=>(e[e.NOT_STARTED=0]="NOT_STARTED",e[e.STOPPED=1]="STOPPED",e[e.CALCULATING=2]="CALCULATING",e[e.FINISHED=3]="FINISHED",e))(q||{}),ce=(e=>(e[e.RUSSIA=0]="RUSSIA",e[e.GLOBAL=1]="GLOBAL",e))(ce||{}),ve=(e=>(e[e.PDOP=0]="PDOP",e[e.AVAILABILITY=1]="AVAILABILITY",e))(ve||{});const ie={0:"Расчет не начат",1:"Расчет был остановлен",2:"Идет расчет",3:"Расчет окончен"},Ye={0:"PDOP",1:"Доступность"},Je={0:"РФ",1:"Глобально"},Ke={pdop0:"PDOP0",pdop:"PDOP",avail:"Доступность",navBreak:"Максимальный перерыв навигации"},Xe={class:"flex justify-content-evenly flex-1",style:{height:"calc(var(--content-height))"}},Me={class:"flex flex-column",style:{"flex-basis":"45vw"}},Qe={class:"font-bold m-1"},We={key:0,class:"m-1"},Ze={key:1,class:"m-1"},ea={key:2,class:"mb-2"},aa={class:"m-1"},ta={class:"flex flex-column align-items-center w-full flex-grow-1"},la={class:"card-grid w-full"},sa={class:"flex align-items-center mb-2"},na={class:"flex align-items-center mb-2"},ra={class:"flex align-items-center mb-2"},oa={class:"flex align-items-center mb-2"},ia={class:"flex align-items-start mb-2"},da={class:"",style:{"flex-basis":"20%"}},ua=ue({__name:"PDOP",setup(e){const V=new Date,p=b(ce.RUSSIA),w=b([]),I=b(V),m=b(ve.PDOP),Y=b(),E=b(!1),$=b(""),P=b(),k=Se({}),S=b(null),N=b(null),T=b(null),x=b([]),u=le({url:"/pdop_status",startImmediately:!0,updateRate:2e3}),_=le({url:"/pdop_stop",startImmediately:!1}),fe=()=>{var c;const l=Object.entries(k).reduce((i,[f,A])=>(i[f]=Object.values(A),i),{}),a={nkaList:(c=w.value)==null?void 0:c.map(i=>i.sysNum),zoneType:p.value,timestamp:H(I.value),calcMode:m.value,lnCnEmissionIntervals:l};E.value=!0,$.value="",P.value="",Oe.post("/pdop_start",a).then(i=>{const f=i.data.status;Y.value=f!==void 0?ie[f]:""}).catch(i=>{var f,A,O,B;((f=i.response)==null?void 0:f.status)===400?(A=i.response)!=null&&A.data.includes("too short")?$.value="Необходимо выбрать не менее 18 НКА":$.value="Введены не все параметры":((O=i.response)==null?void 0:O.status)===404?$.value=i.response.data:$.value=`Возникла неизвестная ошибка: ${(B=i.response)==null?void 0:B.data}`}).finally(()=>{E.value=!1})},be=()=>{_.get()},J=l=>Be(l).format("HH:mm:ss"),K=()=>{S.value=null,N.value=null,T.value=null},ge=()=>{if(T.value&&S.value&&N.value){if(N.value<S.value){$.value="Указанный конец интервала по времени раньше, чем начало";return}const l=T.value.sysNum,a=k[l]||{},c=Date.now();a[c]=[H(S.value),H(N.value)],k[l]=a,x.value.push({nka:l,nkaRepresentation:`${T.value.sysNum} (${T.value.nkuNum})`,start:J(S.value),end:J(N.value),id:c}),K()}},ye=({nka:l,id:a})=>{delete k[l][a],x.value=x.value.filter(c=>c.id!==a),Object.values(k[l]).length===0&&delete k[l]},he=()=>{Object.keys(k).forEach(l=>{delete k[Number(l)]}),x.value=[],K()},ke=R(()=>{var l,a;return((a=(l=u.data)==null?void 0:l.progress)==null?void 0:a.step)??""}),j=R(()=>{var l,a;return((l=u.data)==null?void 0:l.status)!==q.NOT_STARTED&&((a=u.data)==null?void 0:a.status)!==q.STOPPED}),$e=R(()=>{var l,a;if((l=u.data)!=null&&l.result){const c=Object.entries((a=u.data)==null?void 0:a.result);if(c.length>0)return c.map(([i,f])=>({param:i,value:f}))}return[]}),Ve=[{header:"НКА",field:"nkaRepresentation"},{header:"Начало",field:"start"},{header:"Конец",field:"end"}];return Ne(()=>{var l;P.value=(l=_.data)==null?void 0:l.message}),(l,a)=>{var c,i,f,A,O,B,X,M,Q,W,Z,ee,ae,te;return o(),d("div",Xe,[r("div",Me,[r("p",Qe," Статус: "+h(((c=t(u).data)==null?void 0:c.status)!==void 0?t(ie)[(i=t(u).data)==null?void 0:i.status]:"Неизвестно"),1),j.value?(o(),d("p",We,"Этап расчета: "+h(ke.value??"Неизвестно"),1)):v("",!0),j.value?(o(),d("p",Ze," Режим расчета: "+h(((A=(f=t(u).data)==null?void 0:f.query)==null?void 0:A.mode)!==void 0?t(Ye)[(B=(O=t(u).data)==null?void 0:O.query)==null?void 0:B.mode]:"Неизвестно")+", "+h(((M=(X=t(u).data)==null?void 0:X.query)==null?void 0:M.zone)!==void 0?t(Je)[(W=(Q=t(u).data)==null?void 0:Q.query)==null?void 0:W.zone]:"Неизвестно"),1)):v("",!0),t(u).available&&j.value?(o(),d("div",ea,[r("p",aa,h(((ee=(Z=t(u).data)==null?void 0:Z.progress)==null?void 0:ee.percent)??0)+"%",1),n(t(me),{class:"w-full",value:((te=(ae=t(u).data)==null?void 0:ae.progress)==null?void 0:te.percent)??0},null,8,["value"])])):v("",!0),n(t(pe),{class:"mb-4 flex-grow-1"},{content:g(()=>[r("form",ta,[r("div",la,[n(t(G),{legend:"Территория (область расчета)",class:"field"},{default:g(()=>[r("div",sa,[n(t(U),{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=s=>p.value=s),"input-id":"zone-type-1",name:"russia",value:0},null,8,["modelValue"]),a[9]||(a[9]=r("label",{for:"zone-type-1",class:"ml-2"},"РФ",-1))]),r("div",na,[n(t(U),{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=s=>p.value=s),"input-id":"zone-type-2",name:"global",value:1},null,8,["modelValue"]),a[10]||(a[10]=r("label",{for:"zone-type-2",class:"ml-2"},"Глобально",-1))])]),_:1}),n(t(G),{legend:"Рассчитываемый параметр",class:"field"},{default:g(()=>[r("div",ra,[n(t(U),{modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=s=>m.value=s),"input-id":"grid-mode-2",name:"pdop",value:0},null,8,["modelValue"]),a[11]||(a[11]=r("label",{for:"grid-mode-2",class:"ml-2"},"PDOP",-1))]),r("div",oa,[n(t(U),{modelValue:m.value,"onUpdate:modelValue":a[3]||(a[3]=s=>m.value=s),"input-id":"grid-mode-1",name:"availability",value:1},null,8,["modelValue"]),a[12]||(a[12]=r("label",{for:"grid-mode-1",class:"ml-2"},"Доступность",-1))])]),_:1}),n(se,{modelValue:w.value,"onUpdate:modelValue":a[4]||(a[4]=s=>w.value=s),"is-multiple":!0,class:"field max-w-full"},null,8,["modelValue"]),n(Te,{modelValue:I.value,"onUpdate:modelValue":a[5]||(a[5]=s=>I.value=s),label:"Дата",class:"field max-w-full","need-time":!1},null,8,["modelValue"])]),n(t(G),{legend:"Интервалы недостоверности",class:"field"},{default:g(()=>[r("div",ia,[n(se,{modelValue:T.value,"onUpdate:modelValue":a[6]||(a[6]=s=>T.value=s),class:"mr-3",style:{"flex-basis":"11rem"}},null,8,["modelValue"]),n(oe,{modelValue:S.value,"onUpdate:modelValue":a[7]||(a[7]=s=>S.value=s),class:"mr-3",label:"Время начала"},null,8,["modelValue"]),n(oe,{modelValue:N.value,"onUpdate:modelValue":a[8]||(a[8]=s=>N.value=s),class:"mr-3",label:"Время конца"},null,8,["modelValue"]),n(t(D),{class:"p-button-outlined text-overflow-ellipsis mr-2",style:{"flex-basis":"15rem"},icon:"pi pi-plus ",label:"Добавить",onClick:ge}),n(t(D),{class:"p-button-outlined text-overflow-ellipsis",style:{"flex-basis":"15rem"},icon:"pi pi-undo",severity:"danger",label:"Очистить",onClick:he})]),Object.values(k).length>0?(o(),F(t(ne),{key:0,class:"mb-3 p-datatable-sm w-full",style:{width:"35rem"},value:x.value,"responsive-layout":"scroll","scroll-height":"250px"},{default:g(()=>[(o(),d(Ae,null,Ce(Ve,s=>n(t(z),{key:s.field,field:s.field,header:s.header},null,8,["field","header"])),64)),n(t(z),{"header-style":"width: min-content"},{body:g(({data:s})=>[n(t(D),{class:"p-button-text",icon:"pi pi-times",severity:"danger",size:"small",onClick:pa=>ye(s)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):v("",!0)]),_:1})])]),footer:g(()=>[r("div",null,[n(t(D),{class:"field text-overflow-ellipsis mr-4",loading:E.value,label:"Начать расчет",icon:"pi pi-check",onClick:fe},null,8,["loading"]),n(t(D),{class:"field text-overflow-ellipsis",loading:t(_).loading,label:"Остановить расчет",icon:"pi pi-times",onClick:be},null,8,["loading"])])]),_:1})]),n(t(xe),{layout:"vertical"}),r("div",da,[n(t(ne),{value:$e.value,"show-gridlines":"","responsive-layout":"scroll"},{empty:g(()=>a[13]||(a[13]=[L("Отсутствуют рассчитанные параметры ")])),default:g(()=>[n(t(z),{field:"param",header:"Параметр"},{body:g(({data:s})=>[L(h(t(Ke)[s.param]??s.param),1)]),_:1}),n(t(z),{field:"value",header:"Значение"})]),_:1},8,["value"]),P.value?(o(),F(t(re),{key:0,severity:"info",closable:!0},{default:g(()=>[L(h(P.value),1)]),_:1})):v("",!0),$.value?(o(),F(t(re),{key:1,severity:"error",closable:!0},{default:g(()=>[L(h($.value),1)]),_:1})):v("",!0)])])}}}),ca=De(ua,[["__scopeId","data-v-9ac00970"]]);export{ca as default};
