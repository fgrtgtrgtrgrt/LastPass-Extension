(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[31],{1252:function(t,e,n){"use strict";n.r(e);var o=n(1),r=(n(0),n(903)),i=n.n(r),a=n(6),l=n(910),c=n(1087),s=n(1631),u=n(28),d={id:0,type:"ImportPasswords",visible:!0,completed:null,seenAt:null,color:s.a.PURPLE},f={complete:jest.fn(),hideExpandedSkillInDrawer:jest.fn(),hideSkillDetailsDialog:jest.fn(),openImportPasswords:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return f}}});var p=i()([])({secondaryOnboarding:{isHowToOpen:!1},user:{type:u.a.ENTERPRISE_TRIAL}});it("should shallow render the ImportPasswords ad component without crashing",function(){var t=Object(l.shallow)(Object(o.jsx)(a.a,{store:p},Object(o.jsx)(c.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));expect(t).toHaveLength(1)}),it("should open a new tab when clicking on the ImportPasswords button",function(){var t=Object(l.mount)(Object(o.jsx)(a.a,{store:p},Object(o.jsx)(c.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));t.find(".action-cta").at(1).simulate("click"),t.unmount(),expect(f.openImportPasswords).toHaveBeenCalled(),expect(f.complete).toHaveBeenCalled(),expect(f.hideExpandedSkillInDrawer).toHaveBeenCalled()}),it("should close the ImportPasswords skill from all skills when the action button is clicked",function(){var t=Object(l.mount)(Object(o.jsx)(a.a,{store:p},Object(o.jsx)(c.default,{skill:d,expanded:!0,fromAllSkillsDialog:!0})));t.find(".action-cta").at(1).simulate("click"),t.unmount(),expect(f.hideSkillDetailsDialog).toHaveBeenCalled()}),it("should open import also when top[bg] is not available",function(){var t=top.bg;top.bg=void 0;var e=Object(l.mount)(Object(o.jsx)(a.a,{store:p},Object(o.jsx)(c.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));e.find(".action-cta").at(1).simulate("click"),e.unmount(),expect(f.openImportPasswords).toHaveBeenCalled(),top.bg=t})},903:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=r.applyMiddleware.apply(void 0,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t))(function(){var t=[],n=[];return{getState:function(){return l(e)?e(t):e},getActions:function(){return t},dispatch:function(e){if(!(0,a.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(e));t.push(e);for(var o=0;o<n.length;o++)n[o]();return e},clearActions:function(){t=[]},subscribe:function(t){return l(t)&&n.push(t),function(){var e=n.indexOf(t);e<0||n.splice(e,1)}},replaceReducer:function(t){if(!l(t))throw new Error("Expected the nextReducer to be a function.")}}});return n()}};var o,r=n(87),i=n(904),a=(o=i)&&o.__esModule?o:{default:o};var l=function(t){return"function"===typeof t}},904:function(t,e){var n="[object Object]";var o,r,i=Function.prototype,a=Object.prototype,l=i.toString,c=a.hasOwnProperty,s=l.call(Object),u=a.toString,d=(o=Object.getPrototypeOf,r=Object,function(t){return o(r(t))});t.exports=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||u.call(t)!=n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t))return!1;var e=d(t);if(null===e)return!0;var o=c.call(e,"constructor")&&e.constructor;return"function"==typeof o&&o instanceof o&&l.call(o)==s}},908:function(t,e){},909:function(t,e){},911:function(t,e){},912:function(t,e){}}]);