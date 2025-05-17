import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-CgfFrydU.js";import{c as k}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const j=P.forwardRef(({label:i,errorMessage:C,isRequired:F,isDisabled:c,status:e,id:d,className:_,...I},M)=>r.jsxs("div",{className:"mb-4",children:[i&&r.jsxs("label",{htmlFor:d,className:"block text-sm font-medium mb-1",children:[i,F&&r.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),r.jsx("input",{id:d,ref:M,className:k("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",{"border-gray-300":!e,"border-red-500 ring-red-200":e==="error","border-green-500 ring-green-200":e==="success","bg-gray-100 cursor-not-allowed":c},_),disabled:c,"aria-invalid":e==="error",...I}),e==="error"&&r.jsx("p",{className:"text-red-500 text-sm mt-1",children:C})]}));j.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},status:{required:!1,tsType:{name:"union",raw:'"error" | "success"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const H={title:"Components/InputField",component:j,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text for the input field"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Controlled input value"},status:{control:{type:"select"},options:[null,"error","success"],description:"Validation status of the field"},errorMessage:{control:"text",description:'Error message to display when status is "error"',if:{arg:"status",eq:"error"}},isRequired:{control:"boolean",description:"Whether the field is required"},isDisabled:{control:"boolean",description:"Disables the input field"},id:{control:"text",description:"HTML id attribute"},className:{control:"text",description:"Additional CSS classes"},onChange:{action:"changed",description:"Callback when input value changes"}},args:{label:"Input Field",placeholder:"Type something..."}},s={},a={args:{label:"Email Address",isRequired:!0,placeholder:"Enter your email"}},t={args:{label:"Password",status:"error",errorMessage:"Password must be at least 8 characters",value:"weak"}},o={args:{label:"Username",status:"success",value:"available_username"}},l={args:{label:"Disabled Field",isDisabled:!0,value:"Cannot edit this"}},n={args:{label:void 0,placeholder:"No label input"}};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,g,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    isRequired: true,
    placeholder: "Enter your email"
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,x,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Password",
    status: "error",
    errorMessage: "Password must be at least 8 characters",
    value: "weak"
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,q,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Username",
    status: "success",
    value: "available_username"
  }
}`,...(S=(q=o.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var w,D,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Disabled Field",
    isDisabled: true,
    value: "Cannot edit this"
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,T,R;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: undefined,
    placeholder: "No label input"
  }
}`,...(R=(T=n.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const O=["Default","Required","ErrorState","SuccessState","Disabled","WithoutLabel"];export{s as Default,l as Disabled,t as ErrorState,a as Required,o as SuccessState,n as WithoutLabel,O as __namedExportsOrder,H as default};
