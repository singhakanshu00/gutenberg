/*! For license information please see slot-fill-stories-index-story.d5569e05.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8917],{"./packages/components/src/view/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View",__webpack_exports__.Z=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/compose/build-module/hooks/use-merge-refs/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useMergeRefs}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function assignRef(ref,value){"function"==typeof ref?ref(value):ref&&ref.hasOwnProperty("current")&&(ref.current=value)}function useMergeRefs(refs){const element=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),isAttached=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),didElementChange=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),previousRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),currentRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);return currentRefs.current=refs,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!1===didElementChange.current&&!0===isAttached.current&&refs.forEach(((ref,index)=>{const previousRef=previousRefs.current[index];ref!==previousRef&&(assignRef(previousRef,null),assignRef(ref,element.current))})),previousRefs.current=refs}),refs),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{didElementChange.current=!1})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{assignRef(element,value),didElementChange.current=!0,isAttached.current=null!==value;const refsToAssign=value?currentRefs.current:previousRefs.current;for(const ref of refsToAssign)assignRef(ref,value)}),[])}},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./packages/components/src/slot-fill/stories/index.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithContext:function(){return WithContext},WithFillProps:function(){return WithFillProps},WithSlotChildren:function(){return WithSlotChildren},__namedExportsOrder:function(){return __namedExportsOrder}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/slot-fill/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={component:___WEBPACK_IMPORTED_MODULE_1__.g7,title:"Components/SlotFill",subcomponents:{Fill:___WEBPACK_IMPORTED_MODULE_1__.de,SlotFillProvider:___WEBPACK_IMPORTED_MODULE_1__.zt},argTypes:{name:{control:{type:null}},as:{control:{type:"text"}},fillProps:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/slot-fill",controls:{expanded:!0},docs:{source:{state:"open"}}}};__webpack_exports__.default=meta;const Default=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.zt,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{...props,name:"name"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{...props,name:"age"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:"name",children:"Grace"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:"age",children:"33"})]});Default.displayName="Default",Default.args={bubblesVirtually:!0,as:"span"};const WithFillProps=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.zt,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{...props,name:"name",fillProps:{name:"Grace"}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{...props,name:"age",fillProps:{age:33}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:"name",children:fillProps=>fillProps.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:"age",children:fillProps=>fillProps.age})]});WithFillProps.displayName="WithFillProps",WithFillProps.args={...Default.args};const WithSlotChildren=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.zt,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{...props,name:"name",children:fills=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"red"},children:fills})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{...props,name:"age",children:fills=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"red"},children:fills})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:"name",children:"Alice"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:"age",children:"18"})]});WithSlotChildren.displayName="WithSlotChildren",WithSlotChildren.args={...Default.args};const WithContext=props=>{const Context=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createContext)(""),ContextFill=({name:name})=>{const value=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:name,children:value})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.zt,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{...props,name:"name"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{...props,name:"age"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider,{value:"Grace",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContextFill,{name:"name"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider,{value:33,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContextFill,{name:"age"})})]})};WithContext.displayName="WithContext",WithContext.args={...Default.args},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'props => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name: <Slot {...props} name="name" />\n            </p>\n            <p>\n                Age: <Slot {...props} name="age" />\n            </p>\n            <Fill name="name">Grace</Fill>\n            <Fill name="age">33</Fill>\n        </SlotFillProvider>;\n}',...Default.parameters?.docs?.source}}},WithFillProps.parameters={...WithFillProps.parameters,docs:{...WithFillProps.parameters?.docs,source:{originalSource:'props => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name:{\' \'}\n                <Slot {...props} name="name" fillProps={{\n        name: \'Grace\'\n      }} />\n            </p>\n            <p>\n                Age: <Slot {...props} name="age" fillProps={{\n        age: 33\n      }} />\n            </p>\n\n            <Fill name="name">{fillProps => fillProps.name}</Fill>\n            <Fill name="age">{fillProps => fillProps.age}</Fill>\n        </SlotFillProvider>;\n}',...WithFillProps.parameters?.docs?.source}}},WithSlotChildren.parameters={...WithSlotChildren.parameters,docs:{...WithSlotChildren.parameters?.docs,source:{originalSource:'props => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name:\n                {/* @ts-expect-error Not supported children for `<Slot />` when `bubblesVirtually` is true. */}\n                <Slot {...props} name="name">\n                    {fills => {\n          return <span style={{\n            color: \'red\'\n          }}>{fills}</span>;\n        }}\n                </Slot>\n            </p>\n            <p>\n                Age:\n                {/* @ts-expect-error Not support children for `<Slot />` when `bubblesVirtually` is true. */}\n                <Slot {...props} name="age">\n                    {fills => {\n          return <span style={{\n            color: \'red\'\n          }}>{fills}</span>;\n        }}\n                </Slot>\n            </p>\n            <Fill name="name">Alice</Fill>\n            <Fill name="age">18</Fill>\n        </SlotFillProvider>;\n}',...WithSlotChildren.parameters?.docs?.source}}},WithContext.parameters={...WithContext.parameters,docs:{...WithContext.parameters?.docs,source:{originalSource:'props => {\n  const Context = createContext<string | number>(\'\');\n  const ContextFill = ({\n    name\n  }: {\n    name: string;\n  }) => {\n    const value = useContext(Context);\n    return <Fill name={name}>{value}</Fill>;\n  };\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name: <Slot {...props} name="name" />\n            </p>\n            <p>\n                Age: <Slot {...props} name="age" />\n            </p>\n            <Context.Provider value="Grace">\n                <ContextFill name="name" />\n            </Context.Provider>\n            <Context.Provider value={33}>\n                <ContextFill name="age" />\n            </Context.Provider>\n        </SlotFillProvider>;\n}',...WithContext.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithFillProps","WithSlotChildren","WithContext"]}}]);