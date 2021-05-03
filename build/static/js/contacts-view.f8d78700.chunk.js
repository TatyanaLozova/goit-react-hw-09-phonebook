(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{91:function(t,e,n){t.exports={form:"ContactForm_form__73DKR",input:"ContactForm_input__3isdD",btnAdd:"ContactForm_btnAdd__1F0RD",label:"ContactForm_label__LWiyL"}},94:function(t,e,n){t.exports={contact:"ContactList_contact__I0_ol",btn:"ContactList_btn__3lRjN",laoding:"ContactList_laoding__1HrOm"}},97:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(3),r=n(36),o=n(37),s=n(39),u=n(38),i=n(9),l=n(17),b=n.n(l),f=n(23),j=n(19),p=n.n(j),h=n(10),m=function(){return function(){var t=Object(f.a)(b.a.mark((function t(e){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(h.h)()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:n=t.sent,a=n.data,e(Object(h.i)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(h.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(t){return function(){var e=Object(f.a)(b.a.mark((function e(n){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(h.b)()),e.prev=1,e.next=4,p.a.post("/contacts",t);case 4:a=e.sent,c=a.data,n(Object(h.c)(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(h.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(f.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(h.e)()),e.prev=1,e.next=4,p.a.delete("/contacts/".concat(t));case 4:n(Object(h.f)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(h.d)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},v=n(24),g=function(t){return t.contacts.items},x=function(t){return t.contacts.filter},C={getLoading:function(t){return t.contacts.loading},getAllContacts:g,getFilter:x,getVisibleContacts:Object(v.a)([g,x],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},_=(n(40),n(91)),y=n.n(_),k=n(1),w=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(c.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.props.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0432\u0430\u0448\u0438\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432")):(t.props.onSubmit(t.state),t.resetForm())},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(k.jsxs)("form",{className:y.a.form,onSubmit:this.handleSubmit,children:[Object(k.jsxs)("label",{className:y.a.label,children:["Name",Object(k.jsx)("input",{className:y.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,placeholder:"Name"})]}),Object(k.jsxs)("label",{className:y.a.label,children:["Number",Object(k.jsx)("input",{className:y.a.input,type:"text",name:"number",value:n,onChange:this.handleChange,placeholder:"000-00-00"})]}),Object(k.jsx)("button",{className:y.a.btnAdd,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),N=Object(i.b)((function(t){return{contacts:C.getAllContacts(t)}}),(function(t){return{onSubmit:function(e){return t(d(e))}}}))(w),L=n(94),F=n.n(L),D=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onDeleteContact,a=t.isLaodingContacts;return Object(k.jsxs)(k.Fragment,{children:[a&&Object(k.jsx)("h1",{className:F.a.laoding,children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c...."}),Object(k.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(k.jsxs)("li",{className:F.a.contact,children:[Object(k.jsxs)("p",{children:[a,": "]}),Object(k.jsx)("p",{children:c}),Object(k.jsx)("button",{className:F.a.btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})]})}}]),n}(a.Component),S=C.getLoading,A=C.getVisibleContacts,V=Object(i.b)((function(t){return{isLaodingContacts:S(t),contacts:A(t)}}),(function(t){return{onDeleteContact:function(e){return t(O(e))},fetchContacts:function(){return t(m())}}}))(D),R=Object(i.b)((function(t){return{filterValue:t.contacts.filter}}),(function(t){return{onChangeFilter:function(e){return t(Object(h.j)(e.target.value))}}}))((function(t){var e=t.filterValue,n=t.onChangeFilter;return Object(k.jsxs)("label",{className:y.a.label,children:["Search for contacts by name",Object(k.jsx)("input",{className:y.a.input,type:"text",value:e,onChange:n})]})}));e.default=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{children:"My Phonebook"}),Object(k.jsx)(N,{}),Object(k.jsx)(R,{}),Object(k.jsx)(V,{})]})}}}]);
//# sourceMappingURL=contacts-view.f8d78700.chunk.js.map