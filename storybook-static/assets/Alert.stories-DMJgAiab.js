import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as j}from"./clsx-B-dksMZM.js";const c=({type:n="info",message:S,onClose:l,className:v})=>{const C={info:"bg-blue-100 text-blue-800",success:"bg-green-100 text-green-800",error:"bg-red-100 text-red-800"};return t.jsxs("div",{className:j("p-3 rounded-md mb-4 flex justify-between items-center",C[n],v),children:[t.jsx("span",{children:S}),l&&t.jsx("button",{onClick:l,className:"ml-2 text-xl font-semibold hover:opacity-75","aria-label":"Close alert",children:"×"})]})};c.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},message:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/Alert",component:c,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["info","success","error"]},message:{control:"text"},onClose:{action:"closed"}}},o={render:n=>t.jsx(c,{...n})},e={...o,args:{type:"info",message:"This is an informational message"}},s={...o,args:{type:"success",message:"Operation completed successfully!"}},r={...o,args:{type:"error",message:"Something went wrong. Please try again."}},a={...o,args:{type:"info",message:"This alert can be dismissed",onClose:()=>alert("Alert closed!")}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template,
  args: {
    type: "info",
    message: "This is an informational message"
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  args: {
    type: "success",
    message: "Operation completed successfully!"
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    type: "error",
    message: "Something went wrong. Please try again."
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var b,T,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    type: "info",
    message: "This alert can be dismissed",
    onClose: () => alert("Alert closed!")
  }
}`,...(h=(T=a.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const E=["Info","Success","Error","Closable"];export{a as Closable,r as Error,e as Info,s as Success,E as __namedExportsOrder,q as default};
