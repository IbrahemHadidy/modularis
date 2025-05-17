import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";const i=({isOpen:r,onClose:s,children:t,title:v})=>r?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:e.jsxs("div",{className:"bg-white rounded-lg p-6 max-w-md w-full",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-bold",children:v}),e.jsx("button",{onClick:s,className:"text-gray-500 hover:text-gray-700 text-2xl","aria-label":"Close",children:"×"})]}),e.jsx("div",{className:"max-h-[70vh] overflow-y-auto",children:t})]})}):null;i.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""}}};const w={title:"Components/Modal",component:i,tags:["autodocs"],argTypes:{title:{control:"text",description:"Modal header text"}},args:{title:"Default Modal Title"}},l=({args:r})=>{const[s,t]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"Open Modal"}),e.jsx(i,{...r,isOpen:s,onClose:()=>t(!1)})]})},n={render:r=>e.jsx(l,{args:r}),args:{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"This is a basic modal with some content"}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx("button",{className:"px-3 py-1.5 bg-gray-200 rounded hover:bg-gray-300",children:"Cancel"}),e.jsx("button",{className:"px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Confirm"})]})]})}},a={render:r=>e.jsx(l,{args:r}),args:{title:"Long Content Modal",children:e.jsx("div",{className:"max-h-[60vh] overflow-y-auto pr-2",children:Array.from({length:20}).map((r,s)=>e.jsxs("p",{className:"mb-3",children:["Section ",s+1,": Lorem ipsum dolor sit amet..."]},s))})}},o={render:r=>e.jsx(l,{args:r}),args:{title:void 0,children:e.jsxs("div",{children:[e.jsx("p",{children:"This modal has no title"}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx("button",{className:"px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Close"})})]})}};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <ModalTrigger args={args} />,
  args: {
    children: <div className="space-y-4">\r
        <p>This is a basic modal with some content</p>\r
        <div className="flex justify-end space-x-2">\r
          <button className="px-3 py-1.5 bg-gray-200 rounded hover:bg-gray-300">\r
            Cancel\r
          </button>\r
          <button className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">\r
            Confirm\r
          </button>\r
        </div>\r
      </div>
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <ModalTrigger args={args} />,
  args: {
    title: "Long Content Modal",
    children: <div className="max-h-[60vh] overflow-y-auto pr-2">\r
        {Array.from({
        length: 20
      }).map((_, i) => <p key={i} className="mb-3">\r
            Section {i + 1}: Lorem ipsum dolor sit amet...\r
          </p>)}\r
      </div>
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <ModalTrigger args={args} />,
  args: {
    title: undefined,
    children: <div>\r
        <p>This modal has no title</p>\r
        <div className="flex justify-end mt-4">\r
          <button className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">\r
            Close\r
          </button>\r
        </div>\r
      </div>
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const C=["Default","ScrollableContent","NoTitle"];export{n as Default,o as NoTitle,a as ScrollableContent,C as __namedExportsOrder,w as default};
