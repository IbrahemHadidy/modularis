import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{c as G}from"./clsx-B-dksMZM.js";const V=({variant:e="primary",size:l="medium",color:W,iconLeft:d,iconRight:u,children:O,className:A,disabled:p,...F})=>m.jsxs("button",{className:G("rounded-md font-medium transition-colors flex items-center justify-center",{"px-4 py-2 text-sm":l==="medium","px-2 py-1 text-xs":l==="small","px-6 py-3 text-base":l==="large","bg-blue-500 text-white hover:bg-blue-600":e==="primary","bg-green-500 text-white hover:bg-green-600":e==="success","bg-gray-200 text-gray-700 hover:bg-gray-300":e==="secondary","bg-red-500 text-white hover:bg-red-600":e==="danger","opacity-50 cursor-not-allowed":p},A),style:{backgroundColor:W},disabled:p,...F,children:[d&&m.jsx("span",{className:"mr-2",children:d}),O,u&&m.jsx("span",{className:"ml-2",children:u})]});V.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "secondary" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},iconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const K={title:"Components/Button",component:V,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger"]},size:{control:{type:"select"},options:["small","medium","large"]},color:{control:{type:"color"}},iconLeft:{control:{type:"text"}},iconRight:{control:{type:"text"}},disabled:{control:{type:"boolean"}},onClick:{action:"clicked"}},args:{children:"Button",variant:"primary",size:"medium",disabled:!1}},r={args:{variant:"primary"}},a={args:{variant:"secondary"}},s={args:{variant:"danger"}},t={args:{iconLeft:"🌟",iconRight:"➡️",children:"Button with Icons"}},o={args:{disabled:!0,children:"Disabled Button"}},n={args:{color:"#ff00ff",children:"Custom Color"}},c={args:{size:"small",children:"Small Button"}},i={args:{size:"large",children:"Large Button"}};var g,y,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,x,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,S,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "danger"
  }
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var R,C,w;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    iconLeft: "🌟",
    iconRight: "➡️",
    children: "Button with Icons"
  }
}`,...(w=(C=t.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var z,N,L;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled Button"
  }
}`,...(L=(N=o.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var j,D,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "#ff00ff",
    children: "Custom Color"
  }
}`,...(T=(D=n.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var q,I,_;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: "Small Button"
  }
}`,...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var k,E,P;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: "Large Button"
  }
}`,...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const M=["Primary","Secondary","Danger","WithIcons","Disabled","CustomColor","SmallSize","LargeSize"];export{n as CustomColor,s as Danger,o as Disabled,i as LargeSize,r as Primary,a as Secondary,c as SmallSize,t as WithIcons,M as __namedExportsOrder,K as default};
