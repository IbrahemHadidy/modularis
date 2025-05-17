import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as C}from"./clsx-B-dksMZM.js";const x=({title:a,subtitle:n,image:i,children:b,className:y,...f})=>e.jsxs("div",{className:C("bg-white h-fit rounded-lg shadow-md p-4 border border-gray-100",y),...f,children:[i&&e.jsx("img",{src:i,alt:a,className:"w-full h-32 object-contain mb-4 rounded"}),a&&e.jsx("h3",{className:"text-lg font-semibold mb-1",children:a}),n&&e.jsx("p",{className:"text-gray-600 text-sm mb-2",children:n}),b]});x.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N=""+new URL("wireless-headphones-N8UHxxhz.jpg",import.meta.url).href,j={title:"Components/Card",component:x,tags:["autodocs"],argTypes:{title:{control:"text",description:"Main heading of the card"},subtitle:{control:"text",description:"Secondary text below the title"},image:{control:"text",description:"URL for the card image"},className:{control:"text",description:"Additional CSS classes"},children:{description:"Custom content for the card body"}},args:{title:"Card Title",subtitle:"Card Subtitle"}},t={args:{title:"Wireless Headphones",subtitle:"Noise cancelling, 30hr battery",image:N,children:e.jsx("button",{className:"mt-2 px-4 py-2 bg-blue-500 text-white rounded",children:"Add to Cart"})}},r={args:{title:"John Doe",subtitle:"Frontend Developer",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-gray-600",children:"Skills: React, TypeScript, CSS"}),e.jsx("button",{className:"text-sm text-blue-600 hover:underline",children:"View Profile"})]})}},s={args:{title:"Minimal Card",children:e.jsx("p",{children:"This card shows minimal content"})}};var o,d,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Wireless Headphones",
    subtitle: "Noise cancelling, 30hr battery",
    image: wirelessHeadphones,
    children: <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">\r
        Add to Cart\r
      </button>
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "John Doe",
    subtitle: "Frontend Developer",
    children: <div className="space-y-2">\r
        <p className="text-gray-600">Skills: React, TypeScript, CSS</p>\r
        <button className="text-sm text-blue-600 hover:underline">\r
          View Profile\r
        </button>\r
      </div>
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "Minimal Card",
    children: <p>This card shows minimal content</p>
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const T=["ProductCard","ProfileCard","MinimalCard"];export{s as MinimalCard,t as ProductCard,r as ProfileCard,T as __namedExportsOrder,j as default};
