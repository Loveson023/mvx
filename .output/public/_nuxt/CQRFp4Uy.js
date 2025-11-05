import{t as Ze,c as Le,r as rt,o as Vr,a as Xd,w as je,b as se,d as h,e as d,f as T,g as A,h as m,i as xe,j as F,k as N,m as he,n as p,F as X,p as ie,q as w,s as Se,u as q,v as ye,x as Fe,y as ze,z as yo,A as Gt,T as ko,B as Oe,C as _r,D as Zd,E as $n,G as mr,H as eu,I as Co,J as Qr,K as Al,L as tu,M as nu,N as rr}from"#entry";import{defineConfig as ru}from"./BTwakZey.js";import"./R-lXtGyY.js";const iu={vueform:{elements:{list:{add:"+ Add",remove:"&times;"},file:{defaultName:"File",dndTitle:"Upload file",dndDescription:"Drop file or click here to upload",removeConfirm:"By removing the file it will be permanently deleted. Are you sure to continue?",select:"Select file",upload:"Upload"},multifile:{uploadButton:"Upload files",dndTitle:"Upload files",dndDescription:"Drop files or click here to upload"},gallery:{uploadButton:"Upload images",dndTitle:"Upload images",dndDescription:"Drop images or click here to upload"},phone:{ariaLabel:"Select a country"},signature:{type:"Type",draw:"Draw",upload:"Upload",font:"Select typeface",fontPlaceholder:"Your Name",placeholder:"Sign here",unsupportedFormat:"Unsupported file format. Accepted extenions are: :extensions",maxSizeError:"Max file size is :max KBs",imgAlt:"Signature",imgTitle:"Signature",undo:"Undo",redo:"Redo",dnd:"Drop an image here or",uploadButton:"Select image",modeSelectorAriaLabel:"Select signature mode",fontSelectorAriaLabel:"Select typeface",wrapperAriaLabel:"Signature input",inputAriaLabel:"Type your signature here",padAriaLabel:"Draw your signature in the box. Seek assistance if you need to.",clearAriaLabel:"Clear signature",colorAriaLabel:"Select color: "}},steps:{finish:"Finish",next:"Next",previous:"Previous"},editor:{acceptedMimesError:"Accepted mimes are: :mimes",acceptedExtensionsError:"Accepted extenions are: :extensions"},datepicker:{weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute"},dateFormats:{datetimeSeconds24:"YYYY-MM-DD HH:mm:ss",datetimeSeconds12:"YYYY-MM-DD hh:mm:ss a",datetime24:"YYYY-MM-DD HH:mm",datetime12:"YYYY-MM-DD hh:mm a",timeSeconds24:"HH:mm:ss",timeSeconds12:"hh:mm:ss a",time24:"HH:mm",time12:"hh:mm a",date:"YYYY-MM-DD"},multiselect:{multipleLabelOne:"1 option selected",multipleLabelMore:":options options selected",noResults:"No options found",noOptions:"The list is empty"},defaultMessage:"Invalid field",a11y:{file:{description:"Press Backspace to remove"},list:{remove:"Remove item button"}},countries:{AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AG:"Antigua & Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AC:"Ascension Island",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia & Herzegovina",BW:"Botswana",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",BQ:"Caribbean Netherlands",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CO:"Colombia",KM:"Comoros",CG:"Congo - Brazzaville",CD:"Congo - Kinshasa",CK:"Cook Islands",CR:"Costa Rica",CI:"Côte d’Ivoire",HR:"Croatia",CU:"Cuba",CW:"Curaçao",CY:"Cyprus",CZ:"Czechia",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",SZ:"Eswatini",ET:"Ethiopia",FK:"Falkland Islands (Islas Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar (Burma)",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MK:"North Macedonia",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Réunion",RO:"Romania",RU:"Russia",RW:"Rwanda",WS:"Samoa",SM:"San Marino",ST:"São Tomé & Príncipe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",BL:"St. Barthélemy",SH:"St. Helena",KN:"St. Kitts & Nevis",LC:"St. Lucia",MF:"St. Martin",PM:"St. Pierre & Miquelon",VC:"St. Vincent & Grenadines",SD:"Sudan",SR:"Suriname",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad & Tobago",TN:"Tunisia",TR:"Türkiye",TM:"Turkmenistan",TC:"Turks & Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican City",VE:"Venezuela",VN:"Vietnam",WF:"Wallis & Futuna",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"}},validation:{accepted:"The :attribute must be accepted.",active_url:"The :attribute is not a valid URL.",after:"The :attribute must be a date after :date.",after_or_equal:"The :attribute must be a date after or equal to :date.",alpha:"The :attribute may only contain letters.",alpha_dash:"The :attribute may only contain letters, numbers, dashes and underscores.",alpha_num:"The :attribute may only contain letters and numbers.",array:"The :attribute must be an array.",before:"The :attribute must be a date before :date.",before_or_equal:"The :attribute must be a date before or equal to :date.",between:{numeric:"The :attribute must be between :min and :max.",file:"The :attribute must be between :min and :max kilobytes.",string:"The :attribute must be between :min and :max characters.",array:"The :attribute must have between :min and :max items."},boolean:"The :attribute field must be true or false.",captcha:"Please verify that you are not a robot.",completed:"Please fill in a valid phone number.",confirmed:"The :attribute confirmation does not match.",date:"The :attribute is not a valid date.",date_format:"The :attribute does not match the format :format.",date_equals:"The :attribute must be equal to :date.",different:"The :attribute and :other must be different.",digits:"The :attribute must be :digits digits.",digits_between:"The :attribute must be between :min and :max digits.",dimensions:"The :attribute has invalid image dimensions.",distinct:"The :attribute field has a duplicate value.",email:"The :attribute must be a valid email address.",exists:"The selected :attribute is invalid.",file:"The :attribute must be a file.",filled:"The :attribute field must have a value.",gt:{numeric:"The :attribute must be greater than :value.",file:"The :attribute must be greater than :value kilobytes.",string:"The :attribute must be greater than :value characters.",array:"The :attribute must have more than :value items."},gte:{numeric:"The :attribute must be greater than or equal :value.",file:"The :attribute must be greater than or equal :value kilobytes.",string:"The :attribute must be greater than or equal :value characters.",array:"The :attribute must have :value items or more."},image:"The :attribute must be an image.",in:"The selected :attribute is invalid.",in_array:"The :attribute field does not exist in :other.",integer:"The :attribute must be an integer.",ip:"The :attribute must be a valid IP address.",ipv4:"The :attribute must be a valid IPv4 address.",ipv6:"The :attribute must be a valid IPv6 address.",json:"The :attribute must be a valid JSON string.",lt:{numeric:"The :attribute must be less than :value.",file:"The :attribute must be less than :value kilobytes.",string:"The :attribute must be less than :value characters.",array:"The :attribute must have less than :value items."},lte:{numeric:"The :attribute must be less than or equal :value.",file:"The :attribute must be less than or equal :value kilobytes.",string:"The :attribute must be less than or equal :value characters.",array:"The :attribute must not have more than :value items."},max:{numeric:"The :attribute may not be greater than :max.",file:"The :attribute may not be greater than :max kilobytes.",string:"The :attribute may not be greater than :max characters.",array:"The :attribute may not have more than :max items."},mimes:"The :attribute must be a file of type: :values.",mimetypes:"The :attribute must be a file of type: :values.",min:{numeric:"The :attribute must be at least :min.",file:"The :attribute must be at least :min kilobytes.",string:"The :attribute must be at least :min characters.",array:"The :attribute must have at least :min items."},not_in:"The selected :attribute is invalid.",not_regex:"The :attribute format is invalid.",numeric:"The :attribute must be a number.",present:"The :attribute field must be present.",regex:"The :attribute format is invalid.",required:"The :attribute field is required.",required_if:"The :attribute field is required when :other is :value.",required_unless:"The :attribute field is required unless :other is in :values.",required_with:"The :attribute field is required when :values is present.",required_with_all:"The :attribute field is required when :values are present.",required_without:"The :attribute field is required when :values is not present.",required_without_all:"The :attribute field is required when none of :values are present.",same:"The :attribute and :other must match.",size:{numeric:"The :attribute must be :size.",file:"The :attribute must be :size kilobytes.",string:"The :attribute must be :size characters.",array:"The :attribute must contain :size items."},string:"The :attribute must be a string.",timezone:"The :attribute must be a valid zone.",unique:"The :attribute has already been taken.",uploaded:"The :attribute failed to upload.",url:"The :attribute format is invalid.",uuid:"The :attribute must be a valid UUID.",remote:"The :attribute field is invalid."}};/*!
 * Vueform v1.13.6 (https://github.com/vueform/vueform)
 * Copyright (c) 2025 Adam Berecz <adam@vueform.com>
 * Licensed under the MIT License
 */var Yi={};function au(e,t,n,r,i,l){const a=se("FormElements");return d(),h("form",{class:p(e.classes.form),onSubmit:t[0]||(t[0]=he((...o)=>e.submit&&e.submit(...o),["prevent"]))},[T(e.$slots,"empty",{classes:e.classes},()=>[e.showMessages?(d(),A(F("FormMessages"),{key:0})):m("v-if",!0),e.showErrors?(d(),A(F("FormErrors"),{key:1})):m("v-if",!0),e.showLanguages?(d(),A(F("FormLanguages"),{key:2})):m("v-if",!0),e.showTabs?(d(),A(F("FormTabs"),{key:3})):m("v-if",!0),e.showSteps?(d(),A(F("FormSteps"),{key:4})):m("v-if",!0),xe(a,null,{default:N(()=>[T(e.$slots,"default")]),_:3}),e.showStepsControls?(d(),A(F("FormStepsControls"),{key:5})):m("v-if",!0)])],34)}Yi.render=au;Yi.__file="themes/blank/templates/Vueform.vue";var Ao={name:"Vueform",render:Yi.render,data(){return{merge:!0,defaultClasses:{form:""}}}};Ao.__file="themes/vueform/templates/Vueform.vue";var Xi={};const lu=["innerHTML"];function ou(e,t,n,r,i,l){return d(),h("div",{class:p(e.classes.container)},[(d(!0),h(X,null,ie(e.errors,(a,o,s)=>(d(),h("div",{class:p(e.classes.error),innerHTML:a,key:s},null,10,lu))),128))],2)}Xi.render=ou;Xi.__file="themes/blank/templates/FormErrors.vue";var Eo={name:"FormErrors",render:Xi.render,data(){return{merge:!0,defaultClasses:{container:"vf-errors",container_sm:"vf-errors-sm",container_md:"",container_lg:"vf-errors-lg",error:"",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}};function Y(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var su=`.vf-errors {
  background: var(--vf-bg-danger);
  color: var(--vf-color-danger);
  border-radius: var(--vf-radius-input);
  margin-bottom: var(--vf-gutter);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  padding: 0.5rem 0.75rem;
}

.vf-errors.vf-errors-sm {
  border-radius: var(--vf-radius-input-sm);
  margin-bottom: var(--vf-gutter-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
  padding: 0.5rem 0.75rem;
}

.vf-errors.vf-errors-lg {
  border-radius: var(--vf-radius-input-lg);
  margin-bottom: var(--vf-gutter-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
  padding: 0.75rem 1rem;
}`;Y(su);Eo.__file="themes/vueform/templates/FormErrors.vue";var Zi={};const du=["innerHTML"];function uu(e,t,n,r,i,l){return d(),h("div",{class:p(e.classes.container)},[(d(!0),h(X,null,ie(e.messages,(a,o,s)=>(d(),h("div",{class:p(e.classes.message),innerHTML:a,key:s},null,10,du))),128))],2)}Zi.render=uu;Zi.__file="themes/blank/templates/FormMessages.vue";var Lo={name:"FormMessages",render:Zi.render,data(){return{merge:!0,defaultClasses:{container:"vf-messages",container_sm:"vf-messages-sm",container_md:"",container_lg:"vf-messages-lg",message:"",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}},cu=`.vf-messages {
  background: var(--vf-bg-success);
  color: var(--vf-color-success);
  border-radius: var(--vf-radius-input);
  margin-bottom: var(--vf-gutter);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  padding: 0.5rem 0.75rem;
}

.vf-messages.vf-messages-sm {
  border-radius: var(--vf-radius-input-sm);
  margin-bottom: var(--vf-gutter-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
  padding: 0.5rem 0.75rem;
}

.vf-messages.vf-messages-lg {
  border-radius: var(--vf-radius-input-lg);
  margin-bottom: var(--vf-gutter-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
  padding: 0.75rem 1rem;
}`;Y(cu);Lo.__file="themes/vueform/templates/FormMessages.vue";var ea={};function pu(e,t,n,r,i,l){const a=se("FormLanguage");return d(),h("ul",{class:p(e.classes.container)},[T(e.$slots,"default",{},()=>[(d(!0),h(X,null,ie(e.languages,(o,s,u)=>(d(),A(a,{language:o,code:s,key:u,onSelect:e.handleSelect},null,8,["language","code","onSelect"]))),128))])],2)}ea.render=pu;ea.__file="themes/blank/templates/FormLanguages.vue";var xo={name:"FormLanguages",render:ea.render,data(){return{merge:!0,defaultClasses:{container:"vf-languages",container_sm:"vf-languages-sm",container_md:"",container_lg:"vf-languages-lg",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}},fu=`.vf-languages {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-languages.vf-languages-sm {
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-languages.vf-languages-lg {
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}`;Y(fu);xo.__file="themes/vueform/templates/FormLanguages.vue";var ta={};function vu(e,t,n,r,i,l){return d(),h("li",{class:p(e.classes.container)},[w("a",{href:"#",class:p(e.classes.wrapper),onClick:t[0]||(t[0]=he((...a)=>e.select&&e.select(...a),["prevent"]))},Se(e.language),3)],2)}ta.render=vu;ta.__file="themes/blank/templates/FormLanguage.vue";var So={name:"FormLanguage",render:ta.render,data(){return{merge:!0,defaultClasses:{container:"vf-language",wrapper:"vf-language-wrapper",wrapper_sm:"vf-language-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-language-wrapper-lg",wrapper_active:"vf-language-wrapper-active",wrapper_inactive:"",$wrapper:(e,{selected:t,Size:n})=>[e.wrapper,e[`wrapper_${n}`],t?e.wrapper_active:e.wrapper_inactive]}}}},gu=`.vf-language {
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
}

.vf-language-wrapper {
  padding: 0.5rem 1rem;
  display: block;
  margin-left: 1px;
  margin-right: 1px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  color: var(--vf-color-input);
  text-align: center;
}

.vf-language-wrapper:hover {
  text-decoration: none;
}

.vf-language-wrapper.vf-language-wrapper-sm {
  padding: 0.375rem 0.875rem;
}

.vf-language-wrapper.vf-language-wrapper-lg {
  padding: 0.5rem 1rem;
}

.vf-language-wrapper.vf-language-wrapper-active {
  border-color: var(--vf-primary);
}

.vf-language-wrapper.vf-language-wrapper-invalid {
  border-color: var(--vf-danger);
  color: var(--vf-color-danger);
}`;Y(gu);So.__file="themes/vueform/templates/FormLanguage.vue";var na={};function mu(e,t,n,r,i,l){const a=se("FormTab");return d(),h("ul",{class:p(e.classes.container),role:"tablist"},[T(e.$slots,"default",{},()=>[(d(!0),h(X,null,ie(e.tabs,(o,s,u)=>(d(),A(a,q({ref_for:!0},o,{name:s,index:u,key:s}),null,16,["name","index"]))),128))])],2)}na.render=mu;na.__file="themes/blank/templates/FormTabs.vue";var To={name:"FormTabs",render:na.render,data(){return{merge:!0,defaultClasses:{container:"vf-tabs",container_sm:"vf-tabs-sm",container_md:"",container_lg:"vf-tabs-lg",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}},hu=`.vf-tabs {
  display: flex;
  align-items: flex-end;
  list-style: none;
  padding: 0;
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-tabs.vf-tabs-sm {
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-tabs.vf-tabs-lg {
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}`;Y(hu);To.__file="themes/vueform/templates/FormTabs.vue";var ra={};const bu=["aria-selected"],wu={key:0},yu=["innerHTML"];function ku(e,t,n,r,i,l){return ye((d(),h("li",{class:p(e.classes.container)},[w("div",{class:p(e.classes.wrapper),tabindex:"0",role:"tab","aria-selected":e.active,onClick:t[0]||(t[0]=he((...a)=>e.select&&e.select(...a),["prevent"])),onKeypress:t[1]||(t[1]=ze(he((...a)=>e.select&&e.select(...a),["prevent"]),["enter","space"]))},[T(e.$slots,"default",{},()=>[m(" If label is a component "),e.isLabelComponent?(d(),h("span",wu,[(d(),A(F(e.tabLabel),{form$:e.form$},null,8,["form$"]))])):(d(),h(X,{key:1},[m(" If label is HTML "),w("span",{innerHTML:e.tabLabel},null,8,yu)],2112))])],42,bu)],2)),[[Fe,e.visible]])}ra.render=ku;ra.__file="themes/blank/templates/FormTab.vue";var Ro={name:"FormTab",render:ra.render,data(){return{merge:!0,defaultClasses:{container:"vf-tab",wrapper:"vf-tab-wrapper",wrapper_active:"vf-tab-wrapper-active",wrapper_inactive:"",wrapper_valid:"",wrapper_invalid:"vf-tab-wrapper-invalid",wrapper_sm:"vf-tab-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-tab-wrapper-lg",$container:(e,{})=>[e.container],$wrapper:(e,{active:t,invalid:n,Size:r})=>[e.wrapper,e[`wrapper_${r}`],t?e.wrapper_active:e.wrapper_inactive,n?e.wrapper_invalid:e.wrapper_valid]}}}},Cu=`.vf-tab-wrapper {
  padding: 0.5rem 1rem;
  display: block;
  margin-left: 1px;
  margin-right: 1px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  color: var(--vf-color-input);
}

.vf-tab-wrapper:hover {
  text-decoration: none;
}

.vf-tab-wrapper.vf-tab-wrapper-sm {
  padding: 0.375rem 0.875rem;
}

.vf-tab-wrapper.vf-tab-wrapper-lg {
  padding: 0.5rem 1rem;
}

.vf-tab-wrapper.vf-tab-wrapper-active {
  border-color: var(--vf-primary);
}

.vf-tab-wrapper.vf-tab-wrapper-invalid {
  border-color: var(--vf-danger);
  color: var(--vf-color-danger);
}`;Y(Cu);Ro.__file="themes/vueform/templates/FormTab.vue";var ia={};function Au(e,t,n,r,i,l){const a=se("FormStep");return d(),h("div",{class:p(e.classes.container)},[w("ul",{class:p(e.classes.wrapper),role:"tablist"},[T(e.$slots,"default",{},()=>[(d(!0),h(X,null,ie(e.steps,(o,s)=>(d(),A(a,q({ref_for:!0},o,{name:s,key:s}),null,16,["name"]))),128))])],2)],2)}ia.render=Au;ia.__file="themes/blank/templates/FormSteps.vue";var Io={name:"FormSteps",render:ia.render,data(){return{merge:!0,defaultClasses:{container:"vf-steps-container",container_sm:"vf-steps-container-sm",container_md:"",container_lg:"vf-steps-container-lg",wrapper:"vf-steps-wrapper",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}},Eu=`.vf-steps-container {
  width: 100%;
  position: relative;
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-steps-container:before {
  content: " ";
  display: inline-block;
  background: var(--vf-bg-passive);
  position: absolute;
  top: 0.375rem;
  left: 0.125rem;
  right: 0.125rem;
  height: 0.25rem;
}

.vf-steps-container.vf-steps-container-sm {
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-steps-container.vf-steps-container-lg {
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-steps-wrapper {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  overflow-x: auto;
}`;Y(Eu);Io.__file="themes/vueform/templates/FormSteps.vue";var aa={};function Lu(e,t,n,r,i,l){const a=se("FormStepsControl");return d(),h("div",{class:p(e.classes.container)},[xe(a,{type:"previous",labels:e.labels},{default:N(()=>[T(e.$slots,"previous")]),_:3},8,["labels"]),xe(a,{type:"next",labels:e.labels},{default:N(()=>[T(e.$slots,"next")]),_:3},8,["labels"]),xe(a,{type:"finish",labels:e.labels},{default:N(()=>[T(e.$slots,"finish")]),_:3},8,["labels"])],2)}aa.render=Lu;aa.__file="themes/blank/templates/FormStepsControls.vue";var Bo={name:"FormStepsControls",render:aa.render,data(){return{merge:!0,defaultClasses:{container:"vf-steps-controls",container_sm:"vf-steps-controls-sm",container_md:"",container_lg:"vf-steps-controls-lg",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}},xu=`.vf-steps-controls {
  display: flex;
  justify-content: space-between;
  margin: var(--vf-gutter-lg) 0 0 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-steps-controls.vf-steps-controls-sm {
  margin: var(--vf-gutter) 0 0 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-md);
}

.vf-steps-controls.vf-steps-controls-lg {
  margin: var(--vf-gutter-lg) 0 0 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}`;Y(xu);Bo.__file="themes/vueform/templates/FormStepsControls.vue";var la={};const Su=["disabled"],Tu=["innerHTML","disabled"],Ru=["disabled"];function Iu(e,t,n,r,i,l){return d(),h(X,null,[m(" If label is a component "),e.visible&&e.label&&e.isLabelComponent?(d(),h("button",{key:0,disabled:e.isDisabled,class:p(e.classes.button),onClick:t[0]||(t[0]=he((...a)=>e.handleClick&&e.handleClick(...a),["prevent"])),onKeypress:t[1]||(t[1]=ze(he((...a)=>e.handleClick&&e.handleClick(...a),["prevent"]),["enter","space"]))},[(d(),A(F(e.label),{step$:e.current$},null,8,["step$"]))],42,Su)):e.visible&&e.label?(d(),h(X,{key:1},[m(" If label is HTML "),w("button",{innerHTML:e.label,disabled:e.isDisabled,class:p(e.classes.button),onClick:t[2]||(t[2]=he((...a)=>e.handleClick&&e.handleClick(...a),["prevent"])),onKeypress:t[3]||(t[3]=ze(he((...a)=>e.handleClick&&e.handleClick(...a),["prevent"]),["enter","space"]))},null,42,Tu)],2112)):e.visible?(d(),h(X,{key:2},[m(" If label is a slot "),w("button",{disabled:e.isDisabled,class:p(e.classes.button),onClick:t[4]||(t[4]=he((...a)=>e.handleClick&&e.handleClick(...a),["prevent"])),onKeypress:t[5]||(t[5]=ze(he((...a)=>e.handleClick&&e.handleClick(...a),["prevent"]),["enter","space"]))},[T(e.$slots,"default")],42,Ru)],2112)):m("v-if",!0)],2112)}la.render=Iu;la.__file="themes/blank/templates/FormStepsControl.vue";var Mo={name:"FormStepsControl",render:la.render,data(){return{merge:!0,defaultClasses:{button:"vf-btn",button_previous:"",button_previous_enabled:"vf-btn-secondary",button_previous_disabled:"vf-btn-secondary vf-btn-disabled",button_next:"",button_next_enabled:"vf-btn-primary",button_next_disabled:"vf-btn-primary vf-btn-disabled",button_next_loading:"vf-btn-loading vf-btn-loading-primary",button_finish:"",button_finish_enabled:"vf-btn-primary",button_finish_disabled:"vf-btn-primary vf-btn-disabled",button_finish_loading:"vf-btn-loading vf-btn-loading-primary",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",$button:(e,{isDisabled:t,isLoading:n,type:r,Size:i})=>[e.button,e[`button_${i}`],e[`button_${r}`],t?e[`button_${r}_disabled`]:e[`button_${r}_enabled`],n?e[`button_${r}_loading`]:null]}}}};Mo.__file="themes/vueform/templates/FormStepsControl.vue";var oa={};const Bu=["tabindex","aria-selected"],Mu={key:0},Du=["innerHTML"];function Ou(e,t,n,r,i,l){return e.visible?(d(),h("li",{key:0,class:p(e.classes.container)},[w("a",{href:"",class:p(e.classes.wrapper),tabindex:e.isDisabled?-1:0,role:"tab","aria-selected":e.active,onClick:t[0]||(t[0]=he((...a)=>e.select&&e.select(...a),["prevent"])),onKeypress:t[1]||(t[1]=ze(he((...a)=>e.select&&e.select(...a),["prevent"]),["enter","space"]))},[T(e.$slots,"default",{},()=>[m(" If label is a component "),e.isLabelComponent?(d(),h("span",Mu,[(d(),A(F(e.stepLabel),{form$:e.form$},null,8,["form$"]))])):(d(),h(X,{key:1},[m(" If label is HTML "),w("span",{innerHTML:e.stepLabel},null,8,Du)],2112))])],42,Bu)],2)):m("v-if",!0)}oa.render=Ou;oa.__file="themes/blank/templates/FormStep.vue";var Do={name:"FormStep",render:oa.render,data(){return{merge:!0,defaultClasses:{container:"vf-step",wrapper:"",container_active:"vf-step-active",container_inactive:"",container_invalid:"vf-step-invalid",container_valid:"",container_disabled:"vf-step-disabled",container_enabled:"",container_completed:"vf-step-completed",container_incompleted:"",container_pending:"vf-step-pending",$container:(e,{active:t,isDisabled:n,completed:r,invalid:i,pending:l})=>[e.container,t?e.container_active:e.container_inactive,n?e.container_disabled:e.container_enabled,r?e.container_completed:e.container_incompleted,i?e.container_invalid:e.container_valid,l?e.container_pending:null]}}}},$u=`.vf-step {
  display: block;
  position: relative;
  white-space: nowrap;
  flex: 1 1;
  text-align: center;
  padding: 1.25rem 0.625rem 0;
}

.vf-step a {
  text-decoration: none !important;
  color: inherit;
}

.vf-step a:hover, .vf-step a:focus, .vf-step a:active {
  text-decoration: none !important;
  color: inherit;
}

.vf-step a:before {
  content: " ";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  position: absolute;
  background: var(--vf-primary);
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;
}

.vf-step a:after {
  content: " ";
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  background: #FFFFFF;
  border-radius: 50%;
  left: calc(50% - 0.25rem);
  transform: scale(0);
  top: 0.25rem;
  transition: transform 0.3s ease-in-out;
}

.vf-step:first-of-type {
  padding-left: 0;
  text-align: left;
}

.vf-step:first-of-type:before {
  display: none;
}

.vf-step:first-of-type:after {
  left: 0;
}

.vf-step:first-of-type a:before {
  left: 0;
  transform: none;
}

.vf-step:first-of-type a:after {
  left: 0.25rem;
  transform: scale(0);
}

.vf-step:last-of-type {
  padding-right: 0;
  text-align: right;
}

.vf-step:last-of-type:after {
  display: none;
}

.vf-step:last-of-type:before {
  right: 0;
}

.vf-step:last-of-type a:before {
  right: 0;
  left: auto;
  left: initial;
  transform: none;
}

.vf-step:last-of-type a:after {
  left: auto;
  left: initial;
  transform: scale(0);
  right: 0.25rem;
}

.vf-step.vf-step-disabled:before {
  background: var(--vf-bg-passive);
  left: -100%;
}

.vf-step.vf-step-disabled a {
  color: var(--vf-color-passive);
}

.vf-step.vf-step-disabled a:before {
  background: var(--vf-bg-passive);
}

.vf-step.vf-step-completed + .vf-step:not(.vf-step-completed):before {
  content: " ";
  display: inline-block;
  background: var(--vf-primary);
  position: absolute;
  top: 0.375rem;
  left: 0px;
  right: 50%;
  height: 0.25rem;
}

.vf-step.vf-step-completed + .vf-step:last-of-type:before {
  right: 0px;
}

.vf-step.vf-step-completed:before {
  content: " ";
  display: inline-block;
  background: var(--vf-primary);
  position: absolute;
  top: 0.375rem;
  left: 0px;
  right: 0px;
  height: 0.25rem;
}

.vf-step.vf-step-completed a:after {
  mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
  mask-size: 0.5rem 0.5rem;
  -webkit-mask-size: 0.5rem 0.5rem;
  mask-position: 0 0;
  -webkit-mask-position: 0 0;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-color-on-primary);
  border-radius: 0;
  transform: scale(1);
}

.vf-step.vf-step-active a:after {
  mask-image: none;
  -webkit-mask-image: none;
  background-color: var(--vf-color-on-primary);
  top: 0.25rem;
  transform: scale(1);
  border-radius: 50%;
}

.vf-step.vf-step-invalid a {
  color: var(--vf-bg-btn-danger);
}

.vf-step.vf-step-invalid a:before {
  background-color: var(--vf-bg-btn-danger);
}

.vf-step.vf-step-invalid a:after {
  mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
  mask-size: 0.5rem 0.5rem;
  -webkit-mask-size: 0.5rem 0.5rem;
  mask-position: 0 0;
  -webkit-mask-position: 0 0;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-color-btn-danger);
  width: 0.5rem;
  height: 0.5rem;
  top: 0.25rem;
  border-radius: 0;
}

.vf-step.vf-step-invalid.vf-step-active a:after {
  mask-image: none;
  -webkit-mask-image: none;
  background-color: var(--vf-color-on-primary);
  transform: scale(1);
  border-radius: 50%;
}

.vf-step.vf-step-pending a:after {
  animation: 1s linear infinite step-loading;
  background: var(--vf-color-btn-danger);
  top: 0.25rem;
  border-radius: 50%;
}

@keyframes step-loading {
  0% {
    transform: scale(0.5);
  }

  20% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0.5);
  }
}`;Y($u);Do.__file="themes/vueform/templates/FormStep.vue";var sa={};function Fu(e,t,n,r,i,l){return d(),h("div",{class:p(e.classes.container)},[T(e.$slots,"default",{},()=>[(d(!0),h(X,null,ie(e.schema,(a,o)=>(d(),A(F(e.component(a)),q({ref_for:!0},a,{name:o,key:o}),null,16,["name"]))),128))])],2)}sa.render=Fu;sa.__file="themes/blank/templates/FormElements.vue";var Oo={name:"FormElements",render:sa.render,data(){return{merge:!0,defaultClasses:{container:"vf-row",container_sm:"vf-row-sm",container_md:"",container_lg:"vf-row-lg",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}},zu="/* Some styles are contained in Vueform.vue */";Y(zu);Oo.__file="themes/vueform/templates/FormElements.vue";var da={};function Pu(e,t,n,r,i,l){const a=se("ElementLabel"),o=se("ElementText"),s=se("ElementDescription"),u=se("ElementError"),f=se("ElementMessage");return ye((d(),h("div",{class:p(e.classes.container)},[w("div",{class:p(e.classes.outerWrapper)},[xe(a,null,{default:N(()=>[T(e.$slots,"label")]),info:N(()=>[T(e.$slots,"info")]),required:N(()=>[T(e.$slots,"required")]),_:3}),w("div",{class:p(e.classes.innerContainer)},[w("div",{class:p(e.classes.innerWrapperBefore)},[xe(o,{type:"before"},{default:N(()=>[T(e.$slots,"before")]),_:3})],2),w("div",{class:p(e.classes.innerWrapper)},[T(e.$slots,"element")],2),w("div",{class:p(e.classes.innerWrapperAfter)},[xe(o,{type:"between"},{default:N(()=>[T(e.$slots,"between")]),_:3}),xe(s,null,{default:N(()=>[T(e.$slots,"description")]),_:3}),xe(u),xe(f),xe(o,{type:"after"},{default:N(()=>[T(e.$slots,"after")]),_:3})],2)],2)],2)],2)),[[Fe,e.visible]])}da.render=Pu;da.__file="themes/blank/templates/ElementLayout.vue";var $o={name:"ElementLayout",render:da.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-layout",container_sm:"vf-element-layout-sm",container_md:"",container_lg:"vf-element-layout-lg",container_error:"vf-element-layout-error",outerWrapper:"vf-element-layout-outer-wrapper",innerContainer:"vf-layout-inner-container",innerWrapperBefore:"vf-layout-inner-wrapper-before",innerWrapper:"vf-layout-inner-wrapper",innerWrapperAfter:"vf-layout-inner-wrapper-after",$container:(e,{el$:t,Size:n})=>[e.container,e[`container_${n}`],t.columnsClasses.container,t.classes.container,!t.isStatic&&t.errors&&t.errors.length?e.container_error:null],$innerContainer:(e,{el$:t})=>[e.innerContainer,t.columnsClasses.innerContainer],$innerWrapper:(e,{el$:t})=>[e.innerWrapper,t.columnsClasses.wrapper]}}}},Nu=`/* Some styles are contained in Vueform.vue */

.vf-element-layout {
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-element-layout.vf-element-layout-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-element-layout.vf-element-layout-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-layout-inner-container {
  flex: 1 1 0%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.vf-layout-inner-container .vf-layout-inner-wrapper,
.vf-layout-inner-container .vf-layout-inner-wrapper-before,
.vf-layout-inner-container .vf-layout-inner-wrapper-after {
  padding-left: 0;
  padding-right: 0;
}

.vf-layout-inner-wrapper-before,
.vf-layout-inner-wrapper-after {
  grid-column: span 12/span 12;
  padding-left: var(--vf-gutter);
  padding-right: var(--vf-gutter);
}

.vf-element-layout-outer-wrapper {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}`;Y(Nu);$o.__file="themes/vueform/templates/ElementLayout.vue";var ua={};function Hu(e,t,n,r,i,l){const a=se("ElementLabel"),o=se("ElementText"),s=se("ElementDescription"),u=se("ElementError"),f=se("ElementMessage");return ye((d(),h("span",{class:p(e.classes.container)},[xe(a,null,{default:N(()=>[T(e.$slots,"label")]),_:3}),xe(o,{type:"before"},{default:N(()=>[T(e.$slots,"before")]),_:3}),T(e.$slots,"element"),xe(o,{type:"between"},{default:N(()=>[T(e.$slots,"between")]),_:3}),xe(s,null,{default:N(()=>[T(e.$slots,"description")]),_:3}),xe(u),xe(f),xe(o,{type:"after"},{default:N(()=>[T(e.$slots,"after")]),_:3})],2)),[[Fe,e.visible]])}ua.render=Hu;ua.__file="themes/blank/templates/ElementLayoutInline.vue";var Fo={name:"ElementLayoutInline",render:ua.render,data(){return{merge:!0,defaultClasses:{container:"vf-inline-layout",container_error:"has-error",$container:(e,{el$:t})=>[e.container,!t.isStatic&&t.errors&&t.errors.length?e.container_error:null]}}}},Uu=`.vf-inline-layout {
  display: flex;
}`;Y(Uu);Fo.__file="themes/vueform/templates/ElementLayoutInline.vue";var ca={};function ju(e,t,n,r,i,l){return d(),h("div",{class:p(e.classes.container)},[w("span",{class:p(e.classes.loader)},null,2)],2)}ca.render=ju;ca.__file="themes/blank/templates/ElementLoader.vue";var zo={name:"ElementLoader",render:ca.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-loader-container",loader:"vf-element-loader",loader_sm:"vf-element-loader-sm",loader_md:"",loader_lg:"vf-element-loader-lg",$loader:(e,{Size:t})=>[e.loader,e[`loader_${t}`]]}}}},Wu=`.vf-element-loader-container {
  position: relative;
  z-index: 1;
  order: 1;
}

.vf-element-loader {
  position: absolute;
  width: 1rem;
  height: 1rem;
  display: block;
  right: var(--vf-px-input);
  top: 50%;
  transform: translateY(-50%);
}

.vf-element-loader:before, .vf-element-loader:after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  margin: -0.5rem 0 0 -0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  border-color: var(--vf-primary) transparent transparent;
  border-style: solid;
  border-width: 2px;
  box-shadow: 0 0 0 1px transparent;
  box-sizing: border-box;
}

.vf-element-loader:before {
  animation: vf-element-loader 2.4s infinite cubic-bezier(0.41, 0.26, 0.2, 0.62);
}

.vf-element-loader:after {
  animation: vf-element-loader 2.4s infinite cubic-bezier(0.51, 0.09, 0.21, 0.8);
}

.vf-element-loader.vf-element-loader-sm {
  right: var(--vf-px-input-sm);
}

.vf-element-loader.vf-element-loader-lg {
  right: var(--vf-px-input-lg);
}

@keyframes vf-element-loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(2turn);
  }
}`;Y(Wu);zo.__file="themes/vueform/templates/ElementLoader.vue";var pa={};const Vu=["innerHTML"];function _u(e,t,n,r,i,l){return d(),h("div",{class:p(e.classes.container)},[w("span",{class:p(e.classes.label),innerHTML:e.floating},null,10,Vu)],2)}pa.render=_u;pa.__file="themes/blank/templates/ElementLabelFloating.vue";var Po={name:"ElementLabelFloating",render:pa.render,data(){return{merge:!0,defaultClasses:{container:"vf-floating-wrapper",label:"vf-floating-label",label_enabled:"",label_disabled:"vf-floating-label-disabled",label_danger:"vf-floating-label-danger",label_success:"vf-floating-label-success",label_focused:"vf-floating-label-focus",label_sm:"vf-floating-label-sm",label_md:"",label_lg:"vf-floating-label-lg",label_invisible:"",label_visible:"vf-floating-label-visible",$label:(e,{visible:t,Size:n,el$:r})=>[e.label,e[`label_${n}`],t?e.label_visible:e.label_invisible,r.focused?e.label_focused:null,!r.isDisabled&&!r.isDanger&&!r.isSuccess?e.label_enabled:null,r.isDisabled?e.label_disabled:null,r.isDanger?e.label_danger:null,r.isSuccess?e.label_success:null]}}}},Qu=`.vf-floating-wrapper {
  position: relative;
}

.vf-floating-label {
  position: absolute;
  z-index: 1;
  left: var(--vf-px-input);
  font-size: 0.6875rem;
  background-color: var(--vf-bg-input);
  padding: 0 1px;
  line-height: 1px;
  transition-property: box-shadow, color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;
  color: var(--vf-color-floating);
  margin-top: var(--vf-floating-top);
}

.vf-floating-label.vf-floating-label-visible {
  opacity: 1;
  visibility: visible;
}

.vf-floating-label.vf-floating-label-sm {
  left: var(--vf-px-input-sm);
  margin-top: var(--vf-floating-top-sm);
}

.vf-floating-label.vf-floating-label-lg {
  left: var(--vf-px-input-lg);
  margin-top: var(--vf-floating-top-lg);
  background-color: transparent !important;
}

.vf-floating-label.vf-floating-label-disabled {
  background-color: var(--vf-bg-disabled);
}

.vf-floating-label.vf-floating-label-focus {
  background-color: var(--vf-bg-input-focus);
  color: var(--vf-color-floating-focus);
}

.vf-floating-label.vf-floating-label-danger {
  background-color: var(--vf-bg-input-danger);
  color: var(--vf-color-floating-danger);
}

.vf-floating-label.vf-floating-label-success {
  background-color: var(--vf-bg-input-success);
  color: var(--vf-color-floating-success);
}

.vf-input-group .vf-floating-label {
  top: calc(var(--vf-border-width-input-t) * -1);
}

[dir=rtl] .vf-floating-label {
  left: auto;
  right: var(--vf-px-input);
}

[dir=rtl] .vf-floating-label.vf-floating-label-sm {
  left: auto;
  right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-floating-label.vf-floating-label-lg {
  left: auto;
  right: var(--vf-px-input-lg);
}`;Y(Qu);Po.__file="themes/vueform/templates/ElementLabelFloating.vue";var fa={};const qu=["for","id"],Ku=["for","id"],Gu=["innerHTML"],Ju=["for","id"],Yu=["for","id"];function Xu(e,t,n,r,i,l){const a=se("ElementInfo"),o=se("ElementRequired");return d(),h(X,null,[m(" If label is a component "),e.label&&e.isLabelComponent?(d(),h("label",{key:0,class:p(e.classes.container),for:e.name,id:e.id},[w("span",{class:p(e.classes.wrapper)},[e.isLabelComponent?(d(),A(F(e.label),{key:0})):m("v-if",!0)],2),xe(a,null,{default:N(()=>[T(e.$slots,"info")]),_:3}),xe(o,null,{default:N(()=>[T(e.$slots,"required")]),_:3})],10,qu)):e.label?(d(),h(X,{key:1},[m(" If label is HTML "),w("label",{class:p(e.classes.container),for:e.name,id:e.id},[w("span",{class:p(e.classes.wrapper),innerHTML:e.label},null,10,Gu),xe(a,null,{default:N(()=>[T(e.$slots,"info")]),_:3}),xe(o,null,{default:N(()=>[T(e.$slots,"required")]),_:3})],10,Ku)],2112)):e.isSlot?(d(),h(X,{key:2},[m(" If label is a slot "),w("label",{class:p(e.classes.container),for:e.name,id:e.id},[w("span",{class:p(e.classes.wrapper)},[T(e.$slots,"default")],2),xe(a,null,{default:N(()=>[T(e.$slots,"info")]),_:3}),xe(o,null,{default:N(()=>[T(e.$slots,"required")]),_:3})],10,Ju)],2112)):e.hasLabel?(d(),h(X,{key:3},[m(" If labels are forced but has no value "),w("label",{class:p(e.classes.container),for:e.name,id:e.id},null,10,Yu)],2112)):m("v-if",!0)],2112)}fa.render=Xu;fa.__file="themes/blank/templates/ElementLabel.vue";var No={name:"ElementLabel",render:fa.render,data(){return{merge:!0,defaultClasses:{container:"vf-label",container_sm:"vf-label-sm",container_md:"",container_lg:"vf-label-lg",container_horizontal_sm:"vf-horizontal-label-sm",container_horizontal_md:"vf-horizontal-label",container_horizontal_lg:"vf-horizontal-label-lg",container_vertical_sm:"vf-vertical-label-sm",container_vertical_md:"vf-vertical-label",container_vertical_lg:"vf-vertical-label-lg",wrapper:"",$container:(e,{el$:t,Size:n})=>[e.container,e[`container_${n}`],t.inline?null:t.columnsClasses.label,t.computedCols.default.label<12?e[`container_horizontal_${n}`]:e[`container_vertical_${n}`],...Object.keys(t.computedCols).length>1?(t.$vueform.config.breakpoints||["sm","md","lg","xl","2xl"]).map(r=>t.computedCols[r]?.label?t.computedCols[r].label<12?e[`container_horizontal_${n}`].map(i=>`vf-${r}:${i}`).join(" "):e[`container_vertical_${n}`].map(i=>`vf-${r}:${i}`).join(" "):null):[]]}}}},Zu="/* Styles can be found at scss/_label.scss */";Y(Zu);No.__file="themes/vueform/templates/ElementLabel.vue";var va={};const ec=["id"],tc=["innerHTML"];function nc(e,t,n,r,i,l){return e.info||e.isSlot?(d(),h("span",{key:0,class:p(e.classes.container),onMouseover:t[0]||(t[0]=(...a)=>e.handleMouseOver&&e.handleMouseOver(...a))},[w("div",{class:p(e.classes.wrapper),id:e.id},[e.isSlot?(d(),h("span",{key:0,class:p(e.classes.content)},[T(e.$slots,"default")],2)):(d(),h("span",{key:1,class:p(e.classes.content),innerHTML:e.info},null,10,tc))],10,ec)],34)):m("v-if",!0)}va.render=nc;va.__file="themes/blank/templates/ElementInfo.vue";var Ho={name:"ElementInfo",render:va.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-info",wrapper:"vf-element-info-wrapper",wrapper_left:"vf-element-info-wrapper-left",wrapper_right:"vf-element-info-wrapper-right",wrapper_top:"vf-element-info-wrapper-top",wrapper_bottom:"vf-element-info-wrapper-bottom",content:"vf-element-info-content",$wrapper:(e,{position:t})=>[e.wrapper,e[`wrapper_${t}`]]}}}},rc=`.vf-element-info {
  margin-left: 0.25rem;
  position: relative;
  top: 1px;
  cursor: pointer;
}

.vf-element-info:before {
  content: "";
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-passive);
  width: 0.875rem;
  height: 0.875rem;
  display: inline-block;
}

.vf-element-info:hover .vf-element-info-wrapper {
  opacity: 1;
  visibility: visible;
}

.vf-element-info-wrapper {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 1000;
  width: 12.5rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-left {
  top: -0.5625rem;
  right: 1.375rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-right {
  top: -0.5625rem;
  left: 1.375rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-top {
  bottom: 1.375rem;
  left: 50%;
  transform: translateX(-50%);
}

.vf-element-info-wrapper.vf-element-info-wrapper-bottom {
  top: 1.375rem;
  left: 50%;
  transform: translateX(-50%);
}

.vf-element-info-content {
  background: rgba(0, 0, 0, 0.85);
  color: #FFFFFF;
  border-radius: var(--vf-radius-small);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: 0.3125rem 0.625rem;
  font-style: normal;
  display: inline-block;
  position: relative;
}

.vf-element-info-content:after {
  right: 100%;
  top: 0.625rem;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0.85);
  border-width: 5px;
}`;Y(rc);Ho.__file="themes/vueform/templates/ElementInfo.vue";var ga={};const ic=["innerHTML","id"],ac=["id"];function lc(e,t,n,r,i,l){return d(),h(X,null,[m(" If description is HTML "),e.description?(d(),h("div",{key:0,class:p(e.classes.container),innerHTML:e.description,id:e.id},null,10,ic)):e.isSlot?(d(),h(X,{key:1},[m(" If description is a slot "),w("div",{class:p(e.classes.container),id:e.id},[T(e.$slots,"default")],10,ac)],2112)):m("v-if",!0)],2112)}ga.render=lc;ga.__file="themes/blank/templates/ElementDescription.vue";var Uo={name:"ElementDescription",render:ga.render,data(){return{merge:!0,defaultClasses:{container:"vf-description",container_sm:"vf-description-sm",container_md:"",container_lg:"vf-description-lg",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}},oc=`.vf-description {
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  color: var(--vf-color-muted);
  margin-top: 0.25rem;
}

.vf-description.vf-description-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: 0.125rem;
}

.vf-description.vf-description-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
}`;Y(oc);Uo.__file="themes/vueform/templates/ElementDescription.vue";var ma={};const sc=["id","innerHTML"];function dc(e,t,n,r,i,l){return e.showError?(d(),h("div",{key:0,class:p(e.classes.container),id:e.id,"aria-live":"assertive",innerHTML:e.error},null,10,sc)):m("v-if",!0)}ma.render=dc;ma.__file="themes/blank/templates/ElementError.vue";var jo={name:"ElementError",render:ma.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-error",container_sm:"vf-element-error-sm",container_md:"",container_lg:"vf-element-error-lg",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}},uc=`.vf-element-error {
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  color: var(--vf-color-danger);
  margin-top: 0.25rem;
}

.vf-element-error.vf-element-error-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: 0.125rem;
}

.vf-element-error.vf-element-error-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
}`;Y(uc);jo.__file="themes/vueform/templates/ElementError.vue";var ha={};const cc=["innerHTML"];function pc(e,t,n,r,i,l){return e.message?(d(),h("div",{key:0,class:p(e.classes.container),innerHTML:e.message},null,10,cc)):m("v-if",!0)}ha.render=pc;ha.__file="themes/blank/templates/ElementMessage.vue";var Wo={name:"ElementMessage",render:ha.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-message",container_sm:"vf-element-message-sm",container_md:"",container_lg:"vf-element-message-lg",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}},fc=`.vf-element-message {
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  color: var(--vf-color-success);
  margin-top: 0.25rem;
}

.vf-element-message.vf-element-message-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: 0.125rem;
}

.vf-element-message.vf-element-message-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
}`;Y(fc);Wo.__file="themes/vueform/templates/ElementMessage.vue";var ba={};function vc(e,t,n,r,i,l){return e.visible?(d(),h("div",{key:0,class:p(e.classes.container)},[T(e.$slots,"default",{},()=>[t[0]||(t[0]=yo("*",-1))])],2)):m("v-if",!0)}ba.render=vc;ba.__file="themes/blank/templates/ElementRequired.vue";var Vo={name:"ElementRequired",render:ba.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-required"}}}},gc="";Y(gc);Vo.__file="themes/vueform/templates/ElementRequired.vue";var wa={};const mc=["innerHTML"];function hc(e,t,n,r,i,l){return d(),h(X,null,[m(" If content is HTML "),e.content?(d(),h("div",{key:0,class:p(e.classes.container),innerHTML:e.content},null,10,mc)):e.isSlot?(d(),h(X,{key:1},[m(" If content is a slot "),w("div",{class:p(e.classes.container)},[T(e.$slots,"default")],2)],2112)):m("v-if",!0)],2112)}wa.render=hc;wa.__file="themes/blank/templates/ElementText.vue";var _o={name:"ElementText",render:wa.render,data(){return{merge:!0,defaultClasses:{container:"",container_before:"",container_between:"",container_after:"",$container:(e,{type:t})=>[e.container,e[`container_${t}`]]}}}};_o.__file="themes/vueform/templates/ElementText.vue";var ya={};const bc=["innerHTML"];function wc(e,t,n,r,i,l){return d(),h(X,null,[m(" If addon is a component "),e.addon&&e.isAddonComponent?(d(),h("div",{key:0,class:p(e.classes.container)},[w("div",{class:p(e.classes.wrapper)},[(d(),A(F(e.addon)))],2)],2)):e.addon?(d(),h(X,{key:1},[m(" If addon is HTML "),w("div",{class:p(e.classes.container)},[w("div",{class:p(e.classes.wrapper),innerHTML:e.addon},null,10,bc)],2)],2112)):e.isSlot?(d(),h(X,{key:2},[m(" If addon is a slot "),w("div",{class:p(e.classes.container)},[w("div",{class:p(e.classes.wrapper)},[T(e.$slots,"default")],2)],2)],2112)):m("v-if",!0)],2112)}ya.render=wc;ya.__file="themes/blank/templates/ElementAddon.vue";var Qo={name:"ElementAddon",render:ya.render,data(){return{merge:!0,defaultClasses:{container:"vf-addon",container_before:"vf-addon-before",container_after:"vf-addon-after",container_sm:"vf-addon-sm",container_md:"",container_lg:"vf-addon-lg",container_before_sm:"",container_before_md:"",container_before_lg:"",container_after_sm:"",container_after_md:"",container_after_lg:"",wrapper:"vf-addon-wrapper",$container:(e,{type:t,Size:n})=>[e.container,e[`container_${n}`],e[`container_${t}`],e[`container_${t}_${n}`]]}}}},yc=`.vf-addon {
  background: var(--vf-bg-addon);
  color: var(--vf-color-addon);
  border-radius: var(--vf-radius-input);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 0%;
}

.vf-addon.vf-addon-before {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0 var(--vf-space-addon) 0 var(--vf-px-input);
}

.vf-addon.vf-addon-before.vf-addon-sm {
  padding: 0 var(--vf-space-addon-sm) 0 var(--vf-px-input-sm);
}

.vf-addon.vf-addon-before.vf-addon-lg {
  padding: 0 var(--vf-space-addon-lg) 0 var(--vf-px-input-lg);
}

.vf-addon.vf-addon-after {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 var(--vf-px-input) 0 var(--vf-space-addon);
  order: 2;
}

.vf-addon.vf-addon-after.vf-addon-sm {
  padding: 0 var(--vf-px-input-sm) 0 var(--vf-space-addon-sm);
}

.vf-addon.vf-addon-after.vf-addon-lg {
  padding: 0 var(--vf-px-input-lg) 0 var(--vf-space-addon-lg);
}

.vf-addon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}`;Y(yc);Qo.__file="themes/vueform/templates/ElementAddon.vue";var ka={};const kc=["aria-expanded","aria-controls","tabindex"],Cc=["innerHTML"],Ac=["innerHTML"],Ec=["innerHTML"],Lc=["innerHTML"],xc=["data-dropdown-for","id"],Sc=["onMouseover","onClick"],Tc=["innerHTML","data-index","data-selected","tabindex","aria-selected"],Rc=["innerHTML","data-index","data-selected","tabindex","aria-selected"];function Ic(e,t,n,r,i,l){return d(),h("div",{class:p(e.classes.container)},[w("div",q({class:e.classes.wrapper,onClick:t[0]||(t[0]=(...a)=>e.handleSelectorClick&&e.handleSelectorClick(...a)),onKeydown:t[1]||(t[1]=(...a)=>e.handleSelectorKeydown&&e.handleSelectorKeydown(...a))},e.aria,{"aria-expanded":e.isOpen,"aria-haspopup":"listbox","aria-controls":`dropdown-${e.el$.fieldId}`,role:"button",tabindex:e.el$.isDisabled||e.el$.isReadonly?void 0:0,ref:"selector"}),[Object.keys(e.selected).length?(d(),h(X,{key:0},[e.selected.valueDisplay&&typeof e.selected.valueDisplay=="object"&&[e.selected.valueDisplay.render||e.selected.valueDisplay.template]?(d(),A(F(e.selected.valueDisplay),{key:0,el$:e.el$,option:e.selected},null,8,["el$","option"])):e.selected.valueDisplay&&typeof e.selected.valueDisplay=="function"?(d(),h("div",{key:1,innerHTML:e.selected.valueDisplay(e.selected,e.el$)},null,8,Cc)):(d(),h("div",{key:2,innerHTML:e.selected.label},null,8,Ac))],64)):(d(),h(X,{key:1},[e.placeholder&&typeof e.placeholder=="object"&&[e.placeholder.render||e.placeholder.template]?(d(),A(F(e.placeholder),{key:0,el$:e.el$,option:e.selected},null,8,["el$","option"])):e.placeholder&&typeof e.placeholder=="function"?(d(),h("div",{key:1,innerHTML:e.placeholder(e.selected,e.el$)},null,8,Ec)):(d(),h("div",{key:2,innerHTML:e.placeholder},null,8,Lc))],64)),w("div",{class:p(e.classes.caret)},null,2),(d(),A(ko,{to:"body"},[e.isOpen?(d(),h("div",{key:0,"data-dropdown-for":e.el$.fieldId,id:`dropdown-${e.el$.fieldId}`,class:p(e.classes.dropdown),style:Gt(e.style),ref:"dropdown",role:"listbox",tabindex:"-1"},[(d(!0),h(X,null,ie(e.options,(a,o)=>(d(),h("div",{class:p(e.classes.optionWrapper),key:a.value,onMouseover:s=>e.handleOptionPoint(a),onClick:s=>e.handleOptionClick(a)},[a.display&&typeof a.display=="object"&&[a.display.render||a.display.template]?(d(),A(F(a.display),{key:0,el$:e.el$,option:a,index:o,selected:e.selected.index===a.index,pointed:e.pointed.index===a.index,"data-index":a.index,"data-selected":e.selected.index===a.index,role:"option",tabindex:e.pointed.index===a.index?0:-1,"aria-selected":e.selected.index===a.index},null,8,["el$","option","index","selected","pointed","data-index","data-selected","tabindex","aria-selected"])):a.display&&typeof a.display=="function"?(d(),h("div",{key:1,innerHTML:a.display(a,o,e.selected.index===a.index,e.pointed.index===a.index,e.el$),class:p(e.classes.option(a,o,e.el$)),"data-index":a.index,"data-selected":e.selected.index===a.index,role:"option",tabindex:e.pointed.index===a.index?0:-1,"aria-selected":e.selected.index===a.index},null,10,Tc)):(d(),h("div",{key:2,innerHTML:a.label,class:p(e.classes.option(a,o,e.el$)),"data-index":a.index,"data-selected":e.selected.index===a.index,role:"option",tabindex:e.pointed.index===a.index?0:-1,"aria-selected":e.selected.index===a.index},null,10,Rc))],42,Sc))),128))],14,xc)):m("v-if",!0)]))],16,kc)],2)}ka.render=Ic;ka.__file="themes/blank/templates/ElementAddonOptions.vue";var qo={name:"ElementAddonOptions",render:ka.render,data(){return{merge:!0,defaultClasses:{container:"vf-addon-options",container_sm:"vf-addon-options-sm",container_md:"",container_lg:"vf-addon-options-lg",container_disabled:"vf-addon-options-disabled",wrapper:"vf-addon-options-wrapper",wrapper_relaxed:"vf-addon-options-wrapper-relaxed",caret:"vf-addon-options-caret",dropdown:"vf-addon-options-dropdown",option:"vf-addon-options-option",option_active:"vf-addon-options-option-active",$container:(e,{Size:t,el$:n})=>[e.container,e[`container_${t}`],n.isDisabled||n.readonly?e.container_disabled:null],$wrapper:(e,{relaxed:t})=>[e.wrapper,t?e.wrapper_relaxed:e.wrapper_default],$option:(e,{selected:t,pointed:n})=>r=>[e.option,t.index===r.index||n.index===r.index?e.option_active:null]}}}},Bc=`.vf-addon-options {
  display: flex;
  align-items: center;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-addon-options.vf-addon-options-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-addon-options.vf-addon-options-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-addon-options.vf-addon-options-disabled {
  opacity: 0.5;
  cursor: initial;
  pointer-events: none;
}

.vf-addon-options-wrapper {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 4px;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline: none;
}

.vf-addon-options-wrapper:hover, .vf-addon-options-wrapper:focus {
  background: var(--vf-bg-selected);
}

.vf-addon-options-wrapper.vf-addon-options-wrapper-relaxed {
  padding: 6px 12px;
}

.vf-addon-options-caret {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-bg-icon);
  color: var(--vf-color-input);
  width: 0.625rem;
  height: 1rem;
  padding: 1px 0;
  margin-left: 0.5rem;
}

.vf-addon-options-dropdown {
  background-color: var(--vf-bg-input);
  border-width: var(--vf-border-width-dropdown);
  border-style: solid;
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-dropdown);
  color: var(--vf-color-input);
  position: fixed;
  z-index: 1002;
  overflow-x: scroll;
  max-height: calc(100vh - 2rem);
}

.vf-addon-options-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.3125rem 0.75rem;
  white-space: nowrap;
}

.vf-addon-options-option-active {
  background: var(--vf-bg-selected);
}

[dir=rtl] .vf-addon-options-caret {
  margin-left: 0;
  margin-right: 0.5rem;
}`;Y(Bc);qo.__file="themes/vueform/templates/ElementAddonOptions.vue";var Ca={};const Mc=["tabindex","disabled"],Dc=["innerHTML","tabindex","disabled"],Oc=["tabindex","disabled"],$c=["tabindex"],Fc=["innerHTML","tabindex"],zc=["tabindex"];function Pc(e,t,n,r,i,l){return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[m(" Use `button` tag "),e.buttonType==="button"?(d(),h(X,{key:0},[m(" Use it as a component "),e.buttonLabel&&e.isButtonLabelComponent?(d(),h("button",q({key:0},{...e.button,...e.aria},{tabindex:e.isDisabled||e.isLoading?-1:void 0,disabled:e.isDisabled,class:e.classes.button,onClick:t[0]||(t[0]=he((...a)=>e.handleClick&&e.handleClick(...a),["prevent"]))}),[(d(),A(F(e.buttonLabel)))],16,Mc)):e.buttonLabel?(d(),h(X,{key:1},[m(" Use it as HTML "),w("button",q({...e.button,...e.aria},{innerHTML:e.resolvedButtonLabel,tabindex:e.isDisabled||e.isLoading?-1:void 0,class:e.classes.button,disabled:e.isDisabled,onClick:t[1]||(t[1]=he((...a)=>e.handleClick&&e.handleClick(...a),["prevent"]))}),null,16,Dc)],2112)):(d(),h(X,{key:2},[m(" Use it as slot "),w("button",q({...e.button,...e.aria},{tabindex:e.isDisabled||e.isLoading?-1:void 0,class:e.classes.button,disabled:e.isDisabled,onClick:t[2]||(t[2]=he((...a)=>e.handleClick&&e.handleClick(...a),["prevent"]))}),[T(e.$slots,"default",{el$:e.el$},()=>[(d(),A(F(e.fieldSlots.default),{el$:e.el$},null,8,["el$"]))])],16,Oc)],2112))],64)):(d(),h(X,{key:1},[m(" Use `anchor` tag "),m(" Use it as a component "),e.buttonLabel&&e.isButtonLabelComponent?(d(),h("a",q({key:0},{...e.button,...e.aria},{tabindex:e.isDisabled||e.isLoading?-1:void 0,class:e.classes.button,onClick:t[3]||(t[3]=(...a)=>e.handleClick&&e.handleClick(...a))}),[(d(),A(F(e.buttonLabel)))],16,$c)):e.buttonLabel?(d(),h(X,{key:1},[m(" Use it as HTML "),w("a",q({...e.button,...e.aria},{innerHTML:e.resolvedButtonLabel,tabindex:e.isDisabled||e.isLoading?-1:void 0,class:e.classes.button,onClick:t[4]||(t[4]=(...a)=>e.handleClick&&e.handleClick(...a))}),null,16,Fc)],2112)):(d(),h(X,{key:2},[m(" Use it as slot "),w("a",q({...e.button,...e.aria},{tabindex:e.isDisabled||e.isLoading?-1:void 0,class:e.classes.button,onClick:t[5]||(t[5]=(...a)=>e.handleClick&&e.handleClick(...a))}),[T(e.$slots,"default",{el$:e.el$},()=>[(d(),A(F(e.fieldSlots.default),{el$:e.el$},null,8,["el$"]))])],16,zc)],2112))],64))]),_:2},[ie(e.elementSlots,(a,o)=>({name:o,fn:N(()=>[T(e.$slots,o,{el$:e.el$},()=>[(d(),A(F(a),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Ca.render=Pc;Ca.__file="themes/blank/templates/elements/ButtonElement.vue";var Ko={name:"ButtonElement",render:Ca.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",button:"vf-btn",button_enabled:"",button_disabled:"vf-btn-disabled",button_loading:"vf-btn-loading",button_loading_primary:"vf-btn-loading-primary",button_loading_secondary:"vf-btn-loading-secondary",button_loading_danger:"vf-btn-loading-danger",button_primary:"vf-btn-primary",button_secondary:"vf-btn-secondary",button_danger:"vf-btn-danger",button_full:"vf-btn-full",button_not_full:"",button_left:"vf-btn-left",button_center:"vf-btn-center",button_right:"vf-btn-right",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",$button:(e,{isDisabled:t,isLoading:n,buttonClass:r,Size:i,danger:l,secondary:a,full:o,align:s})=>[e.button,l?e.button_danger:null,a?e.button_secondary:null,!l&&!a?e.button_primary:null,e[`button_${i}`],t?e.button_disabled:null,!t&&!n?e.button_enabled:null,n?e.button_loading:null,n&&l?e.button_loading_danger:null,n&&a?e.button_loading_secondary:null,n&&!a&&!l?e.button_loading_primary:null,o?e.button_full:e.button_not_full,s==="left"?e.button_left:null,s==="center"?e.button_center:null,s==="right"?e.button_right:null,r]}}}},Nc="/* Some styles are contained in Vueform.vue */";Y(Nc);Ko.__file="themes/vueform/templates/elements/ButtonElement.vue";var Aa={};const Hc=["id"];function Uc(e,t,n,r,i,l){return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[e.shouldVerify?(d(),h("div",{key:0,class:p(e.classes.wrapper)},[w("div",{id:e.fieldId,class:p(e.classes.captcha),ref:"input"},null,10,Hc)],2)):m("v-if",!0)]),_:2},[ie(e.elementSlots,(a,o)=>({name:o,fn:N(()=>[T(e.$slots,o,{el$:e.el$},()=>[(d(),A(F(a),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Aa.render=Uc;Aa.__file="themes/blank/templates/elements/CaptchaElement.vue";var Go={name:"CaptchaElement",render:Aa.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",captcha:""}}}};Go.__file="themes/vueform/templates/elements/CaptchaElement.vue";var Ea={};const jc=["name","id","true-value","false-value","disabled"],Wc=["innerHTML"];function Vc(e,t,n,r,i,l){return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("label",{class:p(e.classes.wrapper)},[ye(w("input",q({type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a)},e.aria,{class:e.classes.input,name:e.path,id:e.fieldId,"true-value":e.trueValue,"false-value":e.falseValue,disabled:e.isDisabled,ref:"input"}),null,16,jc),[[_r,e.value]]),m(" If label is HTML "),e.Text?(d(),h("span",{key:0,class:p(e.classes.text),innerHTML:e.Text},null,10,Wc)):(d(),h(X,{key:1},[m(" If label is slot "),w("span",{class:p(e.classes.text)},[T(e.$slots,"default",{el$:e.el$},()=>[(d(),A(F(e.fieldSlots.default),{el$:e.el$},null,8,["el$"]))])],2)],2112))],2)]),_:2},[ie(e.elementSlots,(a,o)=>({name:o,fn:N(()=>[T(e.$slots,o,{el$:e.el$},()=>[(d(),A(F(a),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Ea.render=Vc;Ea.__file="themes/blank/templates/elements/CheckboxElement.vue";var Jo={name:"CheckboxElement",render:Ea.render,data(){return{merge:!0,defaultClasses:{container:"vf-contains-link",wrapper:"vf-checkbox-wrapper",wrapper_sm:"vf-checkbox-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkbox-wrapper-lg",wrapper_left:"vf-checkbox-wrapper-left",wrapper_right:"vf-checkbox-wrapper-right",input:"vf-checkbox",input_enabled:"",input_disabled:"",input_danger:"vf-checkbox-danger",input_sm:"vf-checkbox-sm",input_md:"",input_lg:"vf-checkbox-lg",input_left:"vf-checkbox-left",input_right:"vf-checkbox-right",input_standalone:"vf-checkbox-standalone",text:"vf-checkbox-text",text_left:"vf-checkbox-text-left",text_right:"vf-checkbox-text-right",$wrapper:(e,{Size:t,align:n})=>[e.wrapper,e[`wrapper_${t}`],n==="left"?e.wrapper_left:null,n==="right"?e.wrapper_right:null],$input:(e,{isDisabled:t,Size:n,isDanger:r,align:i,standalone:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:e.input_enabled,!t&&r?e.input_danger:null,i==="left"?e.input_left:null,i==="right"?e.input_right:null,l?e.input_standalone:null],$text:(e,{align:t})=>[e.text,t==="left"?e.text_left:null,t==="right"?e.text_right:null]}}}},_c="/* Some styles are contained in Vueform.vue */";Y(_c);Jo.__file="themes/vueform/templates/elements/CheckboxElement.vue";var hr={};const Qc=["aria-labelledby"];function qc(e,t,n,r,i,l){const a=se("CheckboxgroupCheckbox");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.wrapper),"aria-labelledby":e.labelId,role:"group"},[(d(!0),h(X,null,ie(e.resolvedOptions,(o,s,u)=>(d(),A(a,{items:e.resolvedOptions,index:s,item:o,value:o.value,key:u,attrs:e.aria},{default:N(f=>[T(e.$slots,"checkbox",q({ref_for:!0},f,{el$:e.el$}),()=>[(d(),A(F(e.fieldSlots.checkbox),q({ref_for:!0},f,{el$:e.el$}),null,16,["el$"]))])]),_:3},8,["items","index","item","value","attrs"]))),128))],10,Qc)]),_:2},[ie(e.elementSlots,(o,s)=>({name:s,fn:N(()=>[T(e.$slots,s,{el$:e.el$},()=>[(d(),A(F(o),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}hr.render=qc;hr.__file="themes/blank/templates/elements/CheckboxgroupElement.vue";var Yo={name:"CheckboxgroupElement",render:hr.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkboxgroup-view-default",wrapper:"vf-checkboxgroup-wrapper",wrapper_sm:"vf-checkboxgroup-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkboxgroup-wrapper-lg",$wrapper:(e,{Size:t})=>[e.wrapper,e[`wrapper_${t}`]]}}}},Kc=`.vf-checkboxgroup-wrapper {
  cursor: pointer;
}

.vf-checkboxgroup-wrapper .vf-checkbox-container {
  padding-top: 0;
}`;Y(Kc);Yo.__file="themes/vueform/templates/elements/CheckboxgroupElement.vue";var Xo={name:"CheckboxgroupElement_tabs",render:hr.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkboxgroup-view-tabs vf-text-type",wrapper:"vf-checkboxgroup-tabs-wrapper",wrapper_sm:"vf-checkboxgroup-tabs-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkboxgroup-tabs-wrapper-lg",$wrapper:(e,{Size:t})=>[e.wrapper,e[`wrapper_${t}`]]}}}},Gc=`.vf-checkboxgroup-tabs-wrapper {
  display: grid;
  grid-auto-flow: column;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-checkboxgroup-tabs-wrapper.vf-checkboxgroup-tabs-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-checkboxgroup-tabs-wrapper.vf-checkboxgroup-tabs-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;Y(Gc);Xo.__file="themes/vueform/templates/elements/CheckboxgroupElement_tabs.vue";var Zo={name:"CheckboxgroupElement_blocks",render:hr.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkboxgroup-view-blocks",wrapper:"vf-checkboxgroup-blocks-wrapper",wrapper_sm:"vf-checkboxgroup-blocks-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkboxgroup-blocks-wrapper-lg",$wrapper:(e,{Size:t})=>[e.wrapper,e[`wrapper_${t}`]]}}}},Jc=`.vf-checkboxgroup-blocks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-checkboxgroup-blocks-wrapper.vf-checkboxgroup-blocks-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-checkboxgroup-blocks-wrapper.vf-checkboxgroup-blocks-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;Y(Jc);Zo.__file="themes/vueform/templates/elements/CheckboxgroupElement_blocks.vue";var qr={};function Yc(e,t,n,r,i,l){const a=se("ElementAddon"),o=se("ElementLabelFloating"),s=se("DatepickerWrapper");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.inputContainer)},[e.hasAddonBefore?(d(),A(a,{key:0,type:"before"},{default:N(()=>[T(e.$slots,"addon-before",{},()=>[(d(),A(F(e.fieldSlots["addon-before"]),{el$:e.el$},null,8,["el$"]))])]),_:3})):m("v-if",!0),e.hasAddonAfter?(d(),A(a,{key:1,type:"after"},{default:N(()=>[T(e.$slots,"addon-after",{},()=>[(d(),A(F(e.fieldSlots["addon-after"]),{el$:e.el$},null,8,["el$"]))])]),_:3})):m("v-if",!0),e.hasFloating&&!e.empty?(d(),A(o,{key:2,visible:!e.empty},null,8,["visible"])):m("v-if",!0),w("div",{class:p(e.classes.inputWrapper)},[xe(s,{value:e.model,options:e.fieldOptions,id:e.fieldId,class:p(e.classes.input),placeholder:e.Placeholder,autocomplete:e.autocomplete,disabled:e.isDisabled,readonly:e.isReadonly,attrs:e.aria,onChange:e.handleChange,ref:"input"},null,8,["value","options","id","class","placeholder","autocomplete","disabled","readonly","attrs","onChange"])],2)],2)]),_:2},[ie(e.elementSlots,(u,f)=>({name:f,fn:N(()=>[T(e.$slots,f,{el$:e.el$},()=>[(d(),A(F(u),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}qr.render=Yc;qr.__file="themes/blank/templates/elements/DateElement.vue";var es={name:"DateElement",render:qr.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",inputWrapper:"vf-datepicker-wrapper",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.inputContainer,e[`inputContainer_${n}`],t?e.inputContainer_disabled:null,!t&&!r&&!i?e.inputContainer_default:null,!t&&l?e.inputContainer_focused:null,!t&&r?e.inputContainer_success:null,!t&&i?e.inputContainer_danger:null],$input:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!r&&!i&&!l?e.input_enabled:null,!t&&l&&!r&&!i?e.input_focused:null,!t&&i?e.input_danger:null,!t&&r?e.input_success:null]}}}},Xc=`/* Some styles are contained in Vueform.vue & DatepickerWrapper.vue */

.vf-datepicker-wrapper {
  display: block;
  width: 100%;
  height: 100%;
}`;Y(Xc);es.__file="themes/vueform/templates/elements/DateElement.vue";var ts={render:qr.render};ts.__file="themes/blank/templates/elements/DatesElement.vue";var ns={name:"DatesElement",render:ts.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",inputWrapper:"vf-datepicker-wrapper",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.inputContainer,e[`inputContainer_${n}`],t?e.inputContainer_disabled:null,!t&&!r&&!i?e.inputContainer_default:null,!t&&l?e.inputContainer_focused:null,!t&&r?e.inputContainer_success:null,!t&&i?e.inputContainer_danger:null],$input:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!r&&!i&&!l?e.input_enabled:null,!t&&l&&!r&&!i?e.input_focused:null,!t&&i?e.input_danger:null,!t&&r?e.input_success:null]}}}},Zc="/* Some styles are contained in Vueform.vue & DatepickerWrapper.vue */";Y(Zc);ns.__file="themes/vueform/templates/elements/DatesElement.vue";var La={};const ep=["aria-labelledby","aria-placeholder"],tp=["id","accept"];function np(e,t,n,r,i,l){const a=se("DragAndDrop"),o=se("FilePreview");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[m(" Drag n drop "),e.drop&&e.canDrop&&e.canSelect?(d(),A(a,{key:0,title:e.form$.translations.vueform.elements[e.type].dndTitle,description:e.form$.translations.vueform.elements[e.type].dndDescription,disabled:e.isDisabled,onClick:e.handleClick,onDrop:e.handleDrop},null,8,["title","description","disabled","onClick","onDrop"])):e.canSelect?(d(),h(X,{key:1},[m(" Upload button "),w("div",q(e.aria,{class:e.classes.button,"aria-labelledby":e.labelId,"aria-placeholder":e.form$.translations.vueform.elements[e.type].select,onClick:t[0]||(t[0]=he((...s)=>e.handleClick&&e.handleClick(...s),["prevent"])),onKeypress:t[1]||(t[1]=ze((...s)=>e.handleClick&&e.handleClick(...s),["enter","space"])),role:"button",tabindex:"0"}),Se(e.form$.translations.vueform.elements[e.type].select),17,ep)],2112)):m("v-if",!0),m(" Hidden file input "),e.canSelect&&!e.isDisabled&&!e.preparing?ye((d(),h("input",{key:2,id:e.fieldId,type:"file",accept:e.accept,onChange:t[2]||(t[2]=(...s)=>e.handleChange&&e.handleChange(...s)),ref:"input"},null,40,tp)),[[Fe,!1]]):m("v-if",!0),m(" Preview "),T(e.$slots,"preview",{},()=>[(d(),A(o,{key:e.view,attrs:e.aria},null,8,["attrs"]))])]),_:2},[ie(e.elementSlots,(s,u)=>({name:u,fn:N(()=>[T(e.$slots,u,{el$:e.el$},()=>[(d(),A(F(s),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}La.render=np;La.__file="themes/blank/templates/elements/FileElement.vue";var rs={name:"FileElement",render:La.render,data(){return{merge:!0,defaultClasses:{container:"vf-file vf-text-type",container_removing:"vf-file-removing",button:"vf-btn vf-btn-secondary",button_enabled:"",button_disabled:"vf-btn-disabled",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",assertiveText:"vf-assertive-text",$container:(e,{removing:t})=>[e.container,t?e.container_removing:null],$button:(e,{isDisabled:t,preparing:n,Size:r})=>[e.button,e[`button_${r}`],!t&&!n?e.button_enabled:null,t||n?e.button_disabled:null]}}}},rp="/* Some styles are contained in Vueform.vue */";Y(rp);rs.__file="themes/vueform/templates/elements/FileElement.vue";var xa={};const ip=["aria-labelledby"],ap=["data-col","data-row","data-col-start","data-col-end","data-row-start","data-row-end"],lp=["innerHTML"];function op(e,t,n,r,i,l){return d(),A(F(e.elementLayout),{multiple:!0,ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.grid),style:Gt(e.gridStyle),role:"group","aria-labelledby":e.labelId},[(d(!0),h(X,null,ie(e.cells,(a,o)=>(d(),h("div",q({class:e.classes.cell(a),style:a.style},{ref_for:!0},a.attrs,{"data-col":a.col,"data-row":a.row,"data-col-start":a.colStart,"data-col-end":a.colEnd,"data-row-start":a.rowStart,"data-row-end":a.rowEnd}),[a.schema?(d(),h("div",{key:0,class:p(e.classes.fieldWrapper(a))},[T(e.$slots,a.slot,{},()=>[(d(),A(F(a.component),q({name:a.name,key:a.name},{ref_for:!0},a.schema),null,16,["name"]))])],2)):(d(),h("div",{key:1,class:p(e.classes.textWrapper(a))},[T(e.$slots,a.slot,{},()=>[a.content?(d(),h("span",{key:0,class:p(e.classes.text),innerHTML:a.content},null,10,lp)):m("v-if",!0)])],2))],16,ap))),256))],14,ip)]),_:2},[ie(e.elementSlots,(a,o)=>({name:o,fn:N(()=>[T(e.$slots,o,{el$:e.el$},()=>[(d(),A(F(a),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}xa.render=op;xa.__file="themes/blank/templates/elements/GridElement.vue";var is={name:"GridElement",render:xa.render,data(){return{merge:!0,defaultClasses:{container:"vf-grid-container",container_scrollable:"vf-grid-container-scrollable",grid:"vf-grid",grid_sm:"vf-grid-sm",grid_md:"",grid_lg:"vf-grid-lg",grid_fit:"vf-grid-fit",grid_nofit:"",cell:"vf-grid-cell",fieldWrapper:"vf-grid-field-wrapper",fieldWrapper_sm:"vf-grid-field-wrapper-sm",fieldWrapper_md:"",fieldWrapper_lg:"vf-grid-field-wrapper-lg",fieldWrapper_left:"vf-grid-field-wrapper-left",fieldWrapper_center:"vf-grid-field-wrapper-center",fieldWrapper_right:"vf-grid-field-wrapper-right",fieldWrapper_top:"vf-grid-field-wrapper-top",fieldWrapper_middle:"vf-grid-field-wrapper-middle",fieldWrapper_bottom:"vf-grid-field-wrapper-bottom",fieldWrapper_baseline:"vf-grid-field-wrapper-baseline",textWrapper:"vf-grid-text-wrapper",textWrapper_sm:"vf-grid-text-wrapper-sm",textWrapper_md:"",textWrapper_lg:"vf-grid-text-wrapper-lg",textWrapper_left:"vf-grid-text-wrapper-left",textWrapper_center:"vf-grid-text-wrapper-center",textWrapper_right:"vf-grid-text-wrapper-right",textWrapper_justify:"vf-grid-text-wrapper-justify",textWrapper_top:"vf-grid-text-wrapper-top",textWrapper_middle:"vf-grid-text-wrapper-middle",textWrapper_bottom:"vf-grid-text-wrapper-bottom",textWrapper_baseline:"vf-grid-text-wrapper-baseline",text:"vf-grid-text",$container:(e,{scrollable:t})=>[e.container,t?e.container_scrollable:null],$grid:(e,{Size:t,align:n,fitWidth:r})=>[e.grid,e[`grid_${t}`],r?e.grid_fit:e.grid_nofit],$cell:(e,{})=>()=>[e.cell],$fieldWrapper:(e,{Size:t})=>({schema:n,align:r,valign:i,rowIndex:l,colIndex:a})=>[e.fieldWrapper,e[`fieldWrapper_${t}`],e[`fieldWrapper_${r}`],e[`fieldWrapper_${i}`]],$textWrapper:(e,{Size:t})=>({align:n,valign:r,rowIndex:i,colIndex:l})=>[e.textWrapper,e[`textWrapper_${t}`],e[`textWrapper_${n}`],e[`textWrapper_${r}`]]}}}},sp=`/* Some styles are contained in _table.scss */

.vf-grid-container-scrollable {
  overflow-x: auto;
  overflow-y: visible;
}

.vf-grid {
  display: grid;
  -moz-column-gap: min(8.3333333333%, var(--vf-gutter));
       column-gap: min(8.3333333333%, var(--vf-gutter));
  row-gap: var(--vf-gutter);
}

.vf-grid-sm {
  -moz-column-gap: min(8.3333333333%, var(--vf-gutter-sm));
       column-gap: min(8.3333333333%, var(--vf-gutter-sm));
  row-gap: var(--vf-gutter-sm);
}

.vf-grid-lg {
  -moz-column-gap: min(8.3333333333%, var(--vf-gutter-lg));
       column-gap: min(8.3333333333%, var(--vf-gutter-lg));
  row-gap: var(--vf-gutter-lg);
}

.vf-grid-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.vf-grid-cell {
  position: relative;
}

.vf-grid-field-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: var(--vf-min-height-input);
}

.vf-grid-field-wrapper-sm {
  min-height: var(--vf-min-height-input-sm);
}

.vf-grid-field-wrapper-lg {
  min-height: var(--vf-min-height-input-lg);
}

.vf-grid-field-wrapper-left {
  text-align: left;
}

.vf-grid-field-wrapper-center {
  text-align: center;
}

.vf-grid-field-wrapper-right {
  text-align: right;
}

.vf-grid-field-wrapper-top {
  align-items: flex-start;
}

.vf-grid-field-wrapper-middle {
  align-items: center;
}

.vf-grid-field-wrapper-bottom {
  align-items: flex-end;
}

.vf-grid-field-wrapper-baseline {
  align-items: stretch;
}

.vf-grid-text-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  min-height: var(--vf-min-height-input);
  padding: var(--vf-py-input) var(--vf-px-input);
  overflow-wrap: break-word;
}

.vf-grid-text-wrapper-sm {
  min-height: var(--vf-min-height-input-sm);
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-grid-text-wrapper-lg {
  min-height: var(--vf-min-height-input-lg);
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-grid-text-wrapper-left {
  justify-content: flex-start;
  text-align: left;
}

.vf-grid-text-wrapper-center {
  justify-content: center;
  text-align: center;
}

.vf-grid-text-wrapper-right {
  justify-content: flex-end;
  text-align: right;
}

.vf-grid-text-wrapper-justify {
  justify-content: stretch;
  text-align: justify;
}

.vf-grid-text-wrapper-top {
  align-items: start;
}

.vf-grid-text-wrapper-middle {
  align-items: center;
}

.vf-grid-text-wrapper-bottom {
  align-items: end;
}

.vf-grid-text-wrapper-baseline {
  align-items: stretch;
}

.vf-grid-text {
  width: 100%;
}`;Y(sp);is.__file="themes/vueform/templates/elements/GridElement.vue";var Sa={};const dp=["aria-labelledby"];function up(e,t,n,r,i,l){return d(),A(F(e.elementLayout),{multiple:!0,ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.wrapper),role:"group","aria-labelledby":e.labelId},[T(e.$slots,"default",{},()=>[(d(!0),h(X,null,ie(e.children,(a,o)=>(d(),A(F(e.component(a)),q({ref_for:!0},a,{name:o,key:o}),null,16,["name"]))),128))])],10,dp)]),_:2},[ie(e.elementSlots,(a,o)=>({name:o,fn:N(()=>[T(e.$slots,o,{el$:e.el$},()=>[(d(),A(F(a),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Sa.render=up;Sa.__file="themes/blank/templates/elements/GroupElement.vue";var as={name:"GroupElement",render:Sa.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-row",wrapper_sm:"vf-row-sm",wrapper_md:"",wrapper_lg:"vf-row-lg",$wrapper:(e,{Size:t})=>[e.wrapper,e[`wrapper_${t}`]]}}}},cp="/* Some styles are contained in Vueform.vue */";Y(cp);as.__file="themes/vueform/templates/elements/GroupElement.vue";var Ta={};const pp={key:0,ref:"container"},fp=["name","id"];function vp(e,t,n,r,i,l){return e.meta?m("v-if",!0):(d(),h("span",pp,[ye(w("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),type:"hidden",name:e.name,id:e.fieldId,ref:"input"},null,8,fp),[[Zd,e.value]])],512))}Ta.render=vp;Ta.__file="themes/blank/templates/elements/HiddenElement.vue";var ls={name:"HiddenElement",render:Ta.render,data(){return{merge:!0,defaultClasses:{}}}};ls.__file="themes/vueform/templates/elements/HiddenElement.vue";var Ra={};const gp=["aria-labelledby"],mp=["data-id"],hp=["aria-roledescription","id","onClick","onKeypress"],bp=["id","innerHTML"];function wp(e,t,n,r,i,l){return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[m(" Sorting container "),w("div",{class:p(e.classes.list),role:"list","aria-labelledby":e.labelId,ref:"list"},[(d(!0),h(X,null,ie(e.value,(a,o)=>(d(),h("div",{key:o,class:p(e.classes.listItem),role:"listitem","data-id":`${e.path}-${o}`},[T(e.$slots,"default",{index:o},()=>[e.prototype.type?(d(),A(F(e.component(e.prototype)),q({key:0,ref_for:!0},e.prototype,{name:o,key:o}),null,16,["name"])):m("v-if",!0)]),m(" Sort handle "),e.hasSort?(d(),h("span",{key:0,class:p(e.classes.handle),"data-handle":""},[w("span",{class:p(e.classes.handleIcon)},null,2)],2)):m("v-if",!0),m(" Remove button "),e.hasRemove?(d(),h("div",{key:1,"aria-roledescription":e.form$.translations.vueform.a11y.list.remove,class:p(e.classes.remove),id:`${e.path}-${o}-remove-button`,onClick:he(s=>e.handleRemove(o),["prevent"]),onKeypress:ze(s=>e.handleRemove(o),["space","enter"]),role:"button",tabindex:"0"},[w("span",{class:p(e.classes.removeIcon)},null,2)],42,hp)):m("v-if",!0)],10,mp))),128))],10,gp),m(" Add button "),e.hasAdd?(d(),h("div",{key:0,class:p(e.classes.add),id:`${e.fieldId}-add-button`,onClick:t[0]||(t[0]=he((...a)=>e.handleAdd&&e.handleAdd(...a),["prevent"])),onKeypress:t[1]||(t[1]=ze((...a)=>e.handleAdd&&e.handleAdd(...a),["enter","space"])),innerHTML:e.addLabel,role:"button",tabindex:"0"},null,42,bp)):m("v-if",!0)]),_:2},[ie(e.elementSlots,(a,o)=>({name:o,fn:N(()=>[T(e.$slots,o,{el$:e.el$},()=>[(d(),A(F(a),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Ra.render=wp;Ra.__file="themes/blank/templates/elements/ListElement.vue";var os={name:"ListElement",render:Ra.render,data(){return{merge:!0,defaultClasses:{container:"",list:"vf-rowset",list_sm:"vf-rowset-sm",list_md:"",list_lg:"vf-rowset-lg",list_disabled:"vf-list-disabled",list_sorting:"vf-list-sorting",listItem:"vf-row",listItem_sm:"vf-row-sm",listItem_md:"",listItem_lg:"vf-row-lg",handle:"vf-list-handle",handle_sm:"vf-list-handle-sm",handle_md:"",handle_lg:"vf-list-handle-lg",handleIcon:"vf-list-handle-icon",remove:"vf-list-remove",removeIcon:"vf-list-remove-icon",add:"vf-btn vf-btn-primary vf-btn-small vf-btn-list-add",add_sm:"vf-btn-small-sm vf-btn-list-add-sm",add_md:"",add_lg:"vf-btn-small-lg vf-btn-list-add-lg",$list:(e,{isDisabled:t,sorting:n,Size:r})=>[e.list,e[`list_${r}`],t?e.list_disabled:null,n?e.list_sorting:null],$listItem:(e,{Size:t})=>[e.listItem,e[`listItem_${t}`]],$handle:(e,{Size:t})=>[e.handle,e[`handle_${t}`]],$add:(e,{Size:t})=>[e.add,e[`add_${t}`]]}}}},yp=`/* Some styles are contained in Vueform.vue */

.vf-rowset > .vf-row {
  position: relative;
}

.vf-rowset > .vf-row:hover > .vf-list-remove, .vf-rowset > .vf-row:hover > .vf-list-handle {
  visibility: visible;
  opacity: 1;
}

.vf-rowset.vf-list-sorting > div:hover .vf-list-handle, .vf-rowset.vf-list-sorting > div:hover .vf-list-remove {
  visibility: hidden;
  opacity: 0;
}

.vf-list-remove, .vf-list-handle {
  opacity: 0;
  transition: 0.3s;
}

.vf-list-remove span, .vf-list-handle span {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
}

.vf-list-remove {
  position: absolute;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
  top: 0;
  z-index: 999;
  background-color: var(--vf-bg-passive);
  border-radius: 999px;
  transition: 0.15s;
}

.vf-list-remove:hover {
  filter: brightness(0.9);
}

.vf-list-remove:focus {
  opacity: 1;
}

.vf-list-remove-icon {
  display: flex;
  width: 1.125rem;
  height: 1.125rem;
  align-items: center;
  justify-content: center;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-color-passive);
}

.vf-list-handle {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  top: 0;
  cursor: grab;
  z-index: 999;
}

.vf-list-handle:active {
  cursor: grabbing;
}

.vf-list-handle-icon {
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: 0.7rem 0.7rem;
  -webkit-mask-size: 0.7rem 0.7rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-color-passive);
}

.vf-list-handle-sm .vf-list-handle-icon {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-list-handle-lg .vf-list-handle-icon {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-btn-list-add {
  margin-top: var(--vf-gutter);
}

.vf-btn-list-add.vf-btn-list-add-sm {
  margin-top: var(--vf-gutter-sm);
}

.vf-btn-list-add.vf-btn-list-add-lg {
  margin-top: var(--vf-gutter-lg);
}

.sortable-ghost {
  opacity: 0.6;
}`;Y(yp);os.__file="themes/vueform/templates/elements/ListElement.vue";var Ia={};const kp=["name","id","placeholder","disabled","readonly","aria-labelledby"];function Cp(e,t,n,r,i,l){const a=se("ElementAddon"),o=se("ElementLabelFloating");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.inputContainer)},[e.hasAddonBefore?(d(),A(a,{key:0,type:"before"},{default:N(()=>[T(e.$slots,"addon-before",{},()=>[(d(),A(F(e.fieldSlots["addon-before"]),{el$:e.el$},null,8,["el$"]))])]),_:3})):m("v-if",!0),e.hasAddonAfter?(d(),A(a,{key:1,type:"after"},{default:N(()=>[T(e.$slots,"addon-after",{},()=>[(d(),A(F(e.fieldSlots["addon-after"]),{el$:e.el$},null,8,["el$"]))])]),_:3})):m("v-if",!0),e.hasFloating&&!e.empty?(d(),A(o,{key:2,visible:!e.empty},null,8,["visible"])):m("v-if",!0),w("input",q({type:"search",name:e.name,id:e.fieldId,class:e.classes.input,placeholder:e.Placeholder,disabled:e.isDisabled,readonly:e.isReadonly,"aria-labelledby":e.labelId,autocomplete:"off"},e.attrs,{ref:"input",onBlur:t[0]||(t[0]=(...s)=>e.handleLocationBlur&&e.handleLocationBlur(...s))}),null,16,kp)],2)]),_:2},[ie(e.elementSlots,(s,u)=>({name:u,fn:N(()=>[T(e.$slots,u,{el$:e.el$},()=>[(d(),A(F(s),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Ia.render=Cp;Ia.__file="themes/blank/templates/elements/LocationElement.vue";var ss={name:"LocationElement",render:Ia.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.inputContainer,e[`inputContainer_${n}`],t?e.inputContainer_disabled:null,!t&&!r&&!i?e.inputContainer_default:null,!t&&l?e.inputContainer_focused:null,!t&&r?e.inputContainer_success:null,!t&&i?e.inputContainer_danger:null],$input:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!r&&!i&&!l?e.input_enabled:null,!t&&l&&!r&&!i?e.input_focused:null,!t&&i?e.input_danger:null,!t&&r?e.input_success:null]}}}},Ap=`/* Google */

.pac-container {
  border-color: var(--vf-border-color-input);
  background: var(--vf-bg-input);
}

.pac-item {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-color: var(--vf-border-color-input);
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  cursor: pointer;
}

.pac-item > span:last-of-type {
  font-size: 0.75rem;
  color: var(--vf-color-muted);
}

.pac-item:hover, .pac-item.pac-item-selected {
  background: var(--vf-bg-selected);
}

.pac-item-query {
  font-size: 0.875rem;
  line-height: 1;
  margin-right: 0.25rem;
  padding-right: 0.25rem;
  color: var(--vf-color-input);
}

.pac-icon-marker {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  background: var(--vf-bg-icon);
  width: 0.875rem;
  width: 0.875rem;
  margin-right: 0.75rem;
  margin-top: 0;
  padding-top: 1px;
  padding-bottom: 1px;
  box-sizing: content-box !important;
  flex-shrink: 0;
}

.pac-logo:after {
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
}

.pac-icon, .hdpi .pac-icon {
  background-image: none;
}`;Y(Ap);ss.__file="themes/vueform/templates/elements/LocationElement.vue";var Ba={};const Ep=["innerHTML"],Lp=["innerHTML"],xp=["aria-roledescription","id","onClick","onKeypress"],Sp=["id","innerHTML"];function Tp(e,t,n,r,i,l){return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.grid),style:Gt(e.gridStyle),ref:"grid"},[m(" Header row "),m(" First empty column "),e.rowsVisible&&e.colsVisible?(d(),h("div",{key:0,class:p(e.classes.headerFirst)},null,2)):m("v-if",!0),m(" Column headers "),(d(!0),h(X,null,ie(e.resolvedColumns,(a,o)=>(d(),h(X,null,[e.colsVisible?ye((d(),h("div",{key:0,innerHTML:a.label,class:p(e.classes.header)},null,10,Ep)),[[Fe,a.available.value]]):m("v-if",!0)],64))),256)),m(" Remove column "),e.allowRemove&&e.colsVisible?(d(),h("div",{key:1,class:p(e.classes.headerRemove)},null,2)):m("v-if",!0),m(" Content rows "),(d(!0),h(X,null,ie(e.resolvedRows,(a,o)=>(d(),h(X,null,[m(" Row label "),e.rowsVisible?ye((d(),h("div",{key:0,innerHTML:a.label,class:p(e.classes.rowLabel)},null,10,Lp)),[[Fe,a.available.value]]):m("v-if",!0),m(" Input cells "),(d(!0),h(X,null,ie(e.resolvedColumns,(s,u)=>ye((d(),h("div",{class:p(e.classes.cell)},[w("div",{class:p(e.classes.cellWrapper(e.resolveColType(s),e.resolveComponentName(o,u)))},[(d(),A(F(e.resolveComponentType(s)),q({ref_for:!0},e.cells[o][u],{key:e.cells[o][u].name}),null,16))],2)],2)),[[Fe,a.available.value&&s.available.value]])),256)),m(" Remove column "),e.allowRemove?(d(),h("div",{key:1,class:p(e.classes.rowRemove)},[w("div",{"aria-roledescription":e.form$.translations.vueform.a11y.list.remove,class:p(e.classes.remove),id:`${e.path}-${o}-remove-button`,onClick:he(s=>e.handleRemove(o),["prevent"]),onKeypress:ze(s=>e.handleRemove(o),["space","enter"]),role:"button",tabindex:"0"},[w("span",{class:p(e.classes.removeIcon)},null,2)],42,xp)],2)):m("v-if",!0)],64))),256))],6),m(" Add button "),e.allowAdd?(d(),h("div",{key:0,class:p(e.classes.add),id:`${e.fieldId}-add-button`,onClick:t[0]||(t[0]=he((...a)=>e.handleAdd&&e.handleAdd(...a),["prevent"])),onKeypress:t[1]||(t[1]=ze((...a)=>e.handleAdd&&e.handleAdd(...a),["enter","space"])),innerHTML:e.addLabel,role:"button",tabindex:"0"},null,42,Sp)):m("v-if",!0)]),_:2},[ie(e.elementSlots,(a,o)=>({name:o,fn:N(()=>[T(e.$slots,o,{el$:e.el$},()=>[(d(),A(F(a),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Ba.render=Tp;Ba.__file="themes/blank/templates/elements/MatrixElement.vue";var ds={name:"MatrixElement",render:Ba.render,data(){return{merge:!0,defaultClasses:{container:"vf-matrix-container",grid:"vf-matrix-grid",grid_scrollable:"is-scrollable",headerFirst:"vf-matrix-header-first",header:"vf-matrix-header",header_padding:"has-padding",header_sticky:"is-sticky",header_not_sticky:"is-not-sticky",header_wrap:"is-wrap",header_nowrap:"is-nowrap",header_sm:"vf-matrix-header-sm",header_md:"",header_lg:"vf-matrix-header-lg",headerRemove:"vf-matrix-header-remove",rowLabel:"vf-matrix-row-label",rowLabel_sticky:"is-sticky",rowLabel_not_sticky:"is-not-sticky",rowLabel_wrap:"is-wrap",rowLabel_nowrap:"is-nowrap",cell:"vf-matrix-cell",cell_sm:"vf-matrix-cell-sm",cell_md:"",cell_lg:"vf-matrix-cell-lg",cellWrapper:"vf-matrix-cell-wrapper",cellWrapper_padding:"has-padding",cellWrapper_centered:"is-centered",cellWrapper_error:"has-error",cellWrapper_success:"has-success",rowRemove:"vf-matrix-row-remove",remove:"vf-matrix-remove",removeIcon:"vf-matrix-remove-icon",add:"vf-btn vf-btn-primary vf-btn-small vf-matrix-add",add_sm:"vf-btn-small-sm vf-matrix-add-sm",add_md:"",add_lg:"vf-btn-small-lg vf-matrix-add-lg",$grid:(e,{scrollable:t})=>[e.grid,t?e.grid_scrollable:null],$header:(e,{Size:t,padding:n,stickyCols:r,colWrap:i})=>[e.header,e[`header_${t}`],n?e.header_padding:null,r?e.header_sticky:null,i?e.header_wrap:e.header_nowrap],$rowLabel:(e,{stickyRows:t,rowWrap:n})=>[e.rowLabel,t?e.rowLabel_sticky:null,n?e.rowLabel_wrap:e.rowLabel_nowrap],$cell:(e,{Size:t})=>[e.cell,e[`cell_${t}`]],$cellWrapper:(e,{padding:t,centered:n,cells$:r})=>(i,l)=>[e.cellWrapper,t?e.cellWrapper_padding:null,["radio","checkbox","toggle"].includes(i)?e.cellWrapper_centered:null,r[l]?.error?e.cellWrapper_error:null,r[l]?.isSuccess?e.cellWrapper_success:null],$add:(e,{Size:t})=>[e.add,e[`add_${t}`]],$remove:(e,{removeHover:t})=>[e.remove,t?e.remove_hover:null]}}}},Rp=`/* Some styles are contained in _table.scss */

.vf-matrix-grid {
  display: grid;
}

.vf-matrix-grid.is-scrollable {
  overflow: auto;
}

.vf-matrix-header {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: var(--vf-min-height-input);
}

.vf-matrix-header.has-padding {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.vf-matrix-header.is-sticky {
  position: sticky;
  top: 0;
  backdrop-filter: blur(64px);
  z-index: 1;
}

.vf-matrix-header.is-nowrap {
  white-space: nowrap;
}

.vf-matrix-header.vf-matrix-header-sm {
  min-height: var(--vf-min-height-input-sm);
}

.vf-matrix-header.vf-matrix-header-lg {
  min-height: var(--vf-min-height-input-lg);
}

.vf-matrix-row-label {
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
}

.vf-matrix-row-label.is-sticky {
  position: sticky;
  left: 0;
  backdrop-filter: blur(64px);
  z-index: 1;
}

.vf-matrix-row-label.is-nowrap {
  white-space: nowrap;
}

.vf-matrix-cell {
  display: grid;
  align-items: center;
  min-height: var(--vf-min-height-input);
}

.vf-matrix-cell.vf-matrix-cell-sm {
  min-height: var(--vf-min-height-input-sm);
}

.vf-matrix-cell.vf-matrix-cell-lg {
  min-height: var(--vf-min-height-input-lg);
}

.vf-matrix-cell-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
}

.vf-matrix-cell-wrapper.has-padding {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.vf-matrix-cell-wrapper.is-centered {
  justify-content: center;
}

.vf-matrix-row-remove {
  position: sticky;
  right: 0;
  backdrop-filter: blur(64px);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
}

.vf-matrix-remove {
  width: 1rem;
  height: 1rem;
  padding: 0.125rem;
  box-sizing: content-box !important;
  background-color: var(--vf-bg-passive);
  border-radius: 999px;
  transition: 0.15s;
}

.vf-matrix-remove:hover {
  filter: brightness(0.9);
}

.vf-matrix-remove-icon {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-color-passive);
}

.vf-matrix-add {
  margin-top: var(--vf-gutter);
}

.vf-matrix-add.vf-matrix-add-sm {
  margin-top: var(--vf-gutter-sm);
}

.vf-matrix-add.vf-matrix-add-lg {
  margin-top: var(--vf-gutter-lg);
}`;Y(Rp);ds.__file="themes/vueform/templates/elements/MatrixElement.vue";var Ma={};const Ip=["aria-labelledby","aria-placeholder"],Bp=["id","accept","disabled"];function Mp(e,t,n,r,i,l){const a=se("DragAndDrop");return d(),A(F(e.elementLayout),{multiple:!0,ref:"container"},Oe({element:N(()=>[m(" Drag n drop "),e.drop&&e.canDrop&&e.hasAdd?(d(),A(a,{key:0,title:e.form$.translations.vueform.elements[e.type].dndTitle,description:e.form$.translations.vueform.elements[e.type].dndDescription,disabled:e.isDisabled,class:p(e.classes.dnd),onClick:e.handleClick,onDrop:e.handleDrop},null,8,["title","description","disabled","class","onClick","onDrop"])):e.hasAdd?(d(),h(X,{key:1},[m(" Upload button "),w("div",q(e.aria,{class:e.classes.button,"aria-labelledby":e.labelId,"aria-placeholder":e.form$.translations.vueform.elements.multifile.uploadButton,onClick:t[0]||(t[0]=he((...o)=>e.handleClick&&e.handleClick(...o),["prevent"])),onKeypress:t[1]||(t[1]=ze((...o)=>e.handleClick&&e.handleClick(...o),["enter","space"])),role:"button",tabindex:"0"}),Se(e.form$.translations.vueform.elements.multifile.uploadButton),17,Ip)],2112)):m("v-if",!0),m(" Actual input field "),ye(w("input",{multiple:"",id:e.fieldId,type:"file",onChange:t[2]||(t[2]=(...o)=>e.handleChange&&e.handleChange(...o)),accept:e.accept,disabled:e.isDisabled,ref:"input"},null,40,Bp),[[Fe,!1]]),ye((d(),h("div",{class:p(e.classes.list),key:`${e.fieldId}-${e.length}`,ref:"list"},[(d(!0),h(X,null,ie(e.value,(o,s)=>(d(),h("div",{key:s,class:p(e.classes.listItem)},[e.prototype.type?(d(),A(F(e.component(e.prototype)),q({key:0,ref_for:!0},e.prototype,{disabled:!e.hasRemove,embed:!0,name:s,onRemove:u=>e.remove(s)}),null,16,["disabled","name","onRemove"])):m("v-if",!0),m(" Sort handle "),e.hasSort?(d(),h("span",{key:1,class:p(e.classes.handle),"data-handle":""},[w("span",{class:p(e.classes.handleIcon)},null,2)],2)):m("v-if",!0)],2))),128))],2)),[[Fe,!e.empty]])]),_:2},[ie(e.elementSlots,(o,s)=>({name:s,fn:N(()=>[T(e.$slots,s,{el$:e.el$},()=>[(d(),A(F(o),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Ma.render=Mp;Ma.__file="themes/blank/templates/elements/MultifileElement.vue";var us={name:"MultifileElement",render:Ma.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",list:"vf-multifile-list",list_sm:"vf-multifile-list-sm",list_md:"",list_lg:"vf-multifile-list-lg",list_file:"vf-multifile-list-file",list_file_sm:"",list_file_md:"",list_file_lg:"",list_image:"vf-multifile-list-image",list_image_sm:"vf-multifile-list-image-sm",list_image_md:"",list_image_lg:"vf-multifile-list-image-lg",list_gallery:"vf-multifile-list-gallery",list_gallery_sm:"vf-multifile-list-gallery-sm",list_gallery_md:"",list_gallery_lg:"vf-multifile-list-gallery-lg",list_disabled:"vf-multifile-list-disabled",list_sorting:"vf-multifile-list-sorting",listItem:"",handle:"",handle_file:"vf-multifile-handle-file",handle_file_sm:"vf-multifile-handle-file-sm",handle_file_md:"",handle_file_lg:"vf-multifile-handle-file-lg",handle_image:"vf-multifile-handle-image",handle_image_sm:"vf-multifile-handle-image-sm",handle_image_md:"",handle_image_lg:"vf-multifile-handle-image-lg",handle_gallery:"vf-multifile-handle-gallery",handle_gallery_sm:"",handle_gallery_md:"",handle_gallery_lg:"",handleIcon:"",handleIcon_file:"vf-multifile-handle-icon-file",handleIcon_image:"vf-multifile-handle-icon-image",handleIcon_gallery:"vf-multifile-handle-icon-gallery",dnd:"",button:"vf-btn vf-btn-secondary",button_enabled:"",button_disabled:"vf-btn-disabled",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",$list:(e,{isDisabled:t,sorting:n,view:r,Size:i})=>[e.list,e[`list_${i}`],t?e.list_disabled:null,n?e.list_sorting:null,e[`list_${r}`],e[`list_${r}_${i}`]],$handle:(e,{view:t,Size:n})=>[e.handle,e[`handle_${t}`],e[`handle_${t}_${n}`]],$handleIcon:(e,{view:t})=>[e.handleIcon,e[`handleIcon_${t}`]],$button:(e,{isDisabled:t,preparing:n,Size:r})=>[e.button,e[`button_${r}`],!t&&!n?e.button_enabled:null,t||n?e.button_disabled:null]}}}},Dp=`/* Some styles are contained in Vueform.vue */

.vf-multifile-list {
  margin-top: var(--vf-gutter);
}

.vf-multifile-list.vf-multifile-list-sm {
  margin-top: var(--vf-gutter-sm);
}

.vf-multifile-list.vf-multifile-list-lg {
  margin-top: var(--vf-gutter-lg);
}

.vf-multifile-list-file,
.vf-multifile-list-image {
  display: grid;
}

.vf-multifile-list-file > .vf-row,
.vf-multifile-list-image > .vf-row {
  position: relative;
}

.vf-multifile-list-file > .vf-row:hover .vf-multifile-handle-file,
.vf-multifile-list-file > .vf-row:hover .vf-multifile-handle-image,
.vf-multifile-list-image > .vf-row:hover .vf-multifile-handle-file,
.vf-multifile-list-image > .vf-row:hover .vf-multifile-handle-image {
  visibility: visible;
  opacity: 1;
}

.vf-multifile-list-file.vf-multifile-list-sorting > div:hover .vf-multifile-handle-file,
.vf-multifile-list-file.vf-multifile-list-sorting > div:hover .vf-multifile-handle-image,
.vf-multifile-list-image.vf-multifile-list-sorting > div:hover .vf-multifile-handle-file,
.vf-multifile-list-image.vf-multifile-list-sorting > div:hover .vf-multifile-handle-image {
  visibility: hidden;
  opacity: 0;
}

.vf-multifile-list-file {
  row-gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-file.vf-multifile-list-file-sm {
  row-gap: calc(var(--vf-gutter-sm) / 2);
}

.vf-multifile-list-file.vf-multifile-list-file-lg {
  row-gap: calc(var(--vf-gutter-lg) / 2);
}

.vf-multifile-list-image {
  row-gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-image.vf-multifile-list-image-sm {
  row-gap: calc(var(--vf-gutter-sm) / 2);
}

.vf-multifile-list-image.vf-multifile-list-image-lg {
  row-gap: calc(var(--vf-gutter-lg) / 2);
}

.vf-multifile-list-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-gallery.vf-multifile-list-sorting > div:hover .vf-multifile-handle-gallery {
  visibility: hidden;
  opacity: 0;
}

.vf-multifile-list-gallery > div {
  position: relative;
}

.vf-multifile-list-gallery > div:hover .vf-multifile-handle-gallery {
  visibility: visible;
  opacity: 1;
}

.vf-multifile-handle-file,
.vf-multifile-handle-image {
  position: absolute;
  left: var(--vf-gutter);
  transform: translateX(-100%);
  top: 0;
  cursor: grab;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}

.vf-multifile-handle-file:active,
.vf-multifile-handle-image:active {
  cursor: grabbing;
}

.vf-multifile-handle-icon-file,
.vf-multifile-handle-icon-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: 0.7rem 0.7rem;
  -webkit-mask-size: 0.7rem 0.7rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: currentColor;
}

.vf-multifile-handle-file.vf-multifile-handle-file-sm .vf-multifile-handle-icon-file {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-multifile-handle-file.vf-multifile-handle-file-lg .vf-multifile-handle-icon-file {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-multifile-handle-image.vf-multifile-handle-image-sm .vf-multifile-handle-icon-image {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-multifile-handle-image.vf-multifile-handle-image-lg .vf-multifile-handle-icon-image {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-multifile-handle-gallery {
  position: absolute;
  cursor: grab;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  border-radius: 999px;
  left: 0.1875rem;
  top: 0.1875rem;
  transform: none;
  background: var(--vf-gray-200);
}

.vf-multifile-handle-gallery:active {
  cursor: grabbing;
}

.vf-multifile-handle-gallery:hover {
  background-color: var(--vf-gray-300);
}

.vf-multifile-handle-icon-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  width: 1rem;
  height: 1rem;
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-gray-600);
}

.sortable-ghost {
  opacity: 0.6;
}`;Y(Dp);us.__file="themes/vueform/templates/elements/MultifileElement.vue";function Kt(e){return e==null}function Op(e,t,n){const{object:r,valueProp:i,mode:l}=Ze(e),a=mr().proxy,o=n.iv,s=(S,M=!0)=>{o.value=f(S);const C=u(S);t.emit("change",C,a),M&&(t.emit("input",C),t.emit("update:modelValue",C))},u=S=>r.value||Kt(S)?S:Array.isArray(S)?S.map(M=>M[i.value]):S[i.value],f=S=>Kt(S)?l.value==="single"?{}:[]:S;return{update:s}}function Qe(e){return nu(()=>({get:e,set:()=>{}}))}function $p(e,t){const{value:n,modelValue:r,mode:i,valueProp:l}=Ze(e),a=rt(i.value!=="single"?[]:{}),o=Qe(()=>r.value!==void 0?r.value:n.value),s=Le(()=>i.value==="single"?a.value[l.value]:a.value.map(f=>f[l.value])),u=Qe(()=>i.value!=="single"?a.value.map(f=>f[l.value]).join(","):a.value[l.value]);return{iv:a,internalValue:a,ev:o,externalValue:o,textValue:u,plainValue:s}}function Fp(e,t,n){const{regex:r}=Ze(e),i=mr().proxy,l=n.isOpen,a=n.open,o=rt(null),s=()=>{o.value=""},u=M=>{o.value=M.target.value},f=M=>{if(r.value){let C=r.value;typeof C=="string"&&(C=new RegExp(C)),M.key.match(C)||M.preventDefault()}},S=M=>{if(r.value){let E=(M.clipboardData||window.clipboardData).getData("Text"),k=r.value;typeof k=="string"&&(k=new RegExp(k)),E.split("").every(x=>!!x.match(k))||M.preventDefault()}t.emit("paste",M,i)};return je(o,M=>{!l.value&&M&&a(),t.emit("search-change",M,i)}),{search:o,clearSearch:s,handleSearchInput:u,handleKeypress:f,handlePaste:S}}function zp(e,t,n){const{groupSelect:r,mode:i,groups:l,disabledProp:a}=Ze(e),o=rt(null),s=f=>{f===void 0||f!==null&&f[a.value]||l.value&&f&&f.group&&(i.value==="single"||!r.value)||(o.value=f)};return{pointer:o,setPointer:s,clearPointer:()=>{s(null)}}}function oi(e,t=!0){return t?String(e).toLowerCase().trim():String(e).toLowerCase().normalize("NFD").trim().replace(/æ/g,"ae").replace(/œ/g,"oe").replace(/ø/g,"o").replace(new RegExp("\\p{Diacritic}","gu"),"")}function Pp(e){return Object.prototype.toString.call(e)==="[object Object]"}function Np(e,t){if(e.length!==t.length)return!1;const n=t.slice().sort();return e.slice().sort().every(function(r,i){return r===n[i]})}const cs=(e,t)=>{if(e===t)return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let i of n)if(!r.includes(i)||!cs(e[i],t[i]))return!1;return!0};var Hp=cs;function Up(e,t,n){const{options:r,mode:i,trackBy:l,limit:a,hideSelected:o,createTag:s,createOption:u,label:f,appendNewTag:S,appendNewOption:M,multipleLabel:C,object:E,loading:k,delay:x,resolveOnLoad:O,minChars:D,filterResults:L,clearOnSearch:P,clearOnSelect:H,valueProp:I,allowAbsent:te,groupLabel:G,canDeselect:z,max:re,strict:Z,closeOnSelect:_,closeOnDeselect:ae,groups:we,reverse:de,infinite:be,groupOptions:fe,groupHideEmpty:Ke,groupSelect:pe,onCreate:ve,disabledProp:W,searchStart:ee,searchFilter:at}=Ze(e),oe=mr().proxy,le=n.iv,R=n.ev,ne=n.search,Te=n.clearSearch,lt=n.update,Mt=n.pointer,Vt=n.setPointer,Et=n.clearPointer,Lt=n.focus,Pt=n.deactivate,et=n.close,_t=n.localize,yt=rt([]),Ge=rt([]),tt=rt(!1),nt=rt(null),kt=rt(be.value&&a.value===-1?10:a.value),xt=Le({get:()=>Ge.value,set:v=>Ge.value=v}),Me=Qe(()=>s.value||u.value||!1),ot=Qe(()=>S.value!==void 0?S.value:M.value!==void 0?M.value:!0),qe=Le(()=>{if(we.value){let v=Dt.value||[],B=[];return v.forEach(ue=>{We(ue[fe.value]).forEach(Be=>{B.push(Object.assign({},Be,ue[W.value]?{[W.value]:!0}:{}))})}),B}else{let v=We(Ge.value||[]);return yt.value.length&&(v=v.concat(yt.value)),v}}),ut=Le(()=>{let v=qe.value;return de.value&&(v=v.reverse()),pt.value.length&&(v=pt.value.concat(v)),Ue(v)}),Ct=Le(()=>{let v=ut.value;return kt.value>0&&(v=v.slice(0,kt.value)),v}),Dt=Le(()=>{if(!we.value)return[];let v=[],B=Ge.value||[];return yt.value.length&&v.push({[G.value]:" ",[fe.value]:[...yt.value],__CREATE__:!0}),v.concat(B)}),ln=Le(()=>{let v=[...Dt.value].map(B=>({...B}));return pt.value.length&&(v[0]&&v[0].__CREATE__?v[0][fe.value]=[...pt.value,...v[0][fe.value]]:v=[{[G.value]:" ",[fe.value]:[...pt.value],__CREATE__:!0}].concat(v)),v}),ct=Le(()=>{if(!we.value)return[];let v=ln.value;return Je((v||[]).map((B,ue)=>{const Be=We(B[fe.value]);return{...B,index:ue,group:!0,[fe.value]:Ue(Be,!1).map(Ve=>Object.assign({},Ve,B[W.value]?{[W.value]:!0}:{})),__VISIBLE__:Ue(Be).map(Ve=>Object.assign({},Ve,B[W.value]?{[W.value]:!0}:{}))}}))}),Ot=Le(()=>{switch(i.value){case"single":return!Kt(le.value[I.value]);case"multiple":case"tags":return!Kt(le.value)&&le.value.length>0}}),Zt=Le(()=>C.value!==void 0?C.value(le.value,oe):le.value&&le.value.length>1?`${le.value.length} options selected`:"1 option selected"),Nt=Qe(()=>!qe.value.length&&!tt.value&&!pt.value.length),St=Qe(()=>qe.value.length>0&&Ct.value.length==0&&(ne.value&&we.value||!we.value)),pt=Le(()=>Me.value===!1||!ne.value?[]:$e(ne.value)!==-1?[]:[{[I.value]:ne.value,[At.value[0]]:ne.value,[f.value]:ne.value,__CREATE__:!0}]),At=Le(()=>l.value?Array.isArray(l.value)?l.value:[l.value]:[f.value]),bn=Qe(()=>{switch(i.value){case"single":return null;case"multiple":case"tags":return[]}}),On=Qe(()=>k.value||tt.value),Tt=v=>{switch(typeof v!="object"&&(v=Ce(v)),i.value){case"single":lt(v);break;case"multiple":case"tags":lt(le.value.concat(v));break}t.emit("select",wn(v),v,oe)},Rt=v=>{switch(typeof v!="object"&&(v=Ce(v)),i.value){case"single":Pe();break;case"tags":case"multiple":lt(Array.isArray(v)?le.value.filter(B=>v.map(ue=>ue[I.value]).indexOf(B[I.value])===-1):le.value.filter(B=>B[I.value]!=v[I.value]));break}t.emit("deselect",wn(v),v,oe)},wn=v=>E.value?v:v[I.value],Qt=v=>{Rt(v)},Qn=(v,B)=>{if(B.button!==0){B.preventDefault();return}Qt(v)},Pe=()=>{lt(bn.value),t.emit("clear",oe)},c=v=>{if(v.group!==void 0)return i.value==="single"?!1:Ie(v[fe.value])&&v[fe.value].length;switch(i.value){case"single":return!Kt(le.value)&&(le.value[I.value]==v[I.value]||typeof le.value[I.value]=="object"&&typeof v[I.value]=="object"&&Hp(le.value[I.value],v[I.value]));case"tags":case"multiple":return!Kt(le.value)&&le.value.map(B=>B[I.value]).indexOf(v[I.value])!==-1}},b=v=>v[W.value]===!0,y=()=>re===void 0||re.value===-1||!Ot.value&&re.value>0?!1:le.value.length>=re.value,$=v=>{if(!b(v)){if(ve.value&&!c(v)&&v.__CREATE__&&(v={...v},delete v.__CREATE__,v=ve.value(v,oe),v instanceof Promise)){tt.value=!0,v.then(B=>{tt.value=!1,U(B)});return}U(v)}},U=v=>{switch(v.__CREATE__&&(v={...v},delete v.__CREATE__),i.value){case"single":if(v&&c(v)){z.value&&Rt(v),ae.value&&(Et(),et());return}v&&J(v),H.value&&Te(),_.value&&(Et(),et()),v&&Tt(v);break;case"multiple":if(v&&c(v)){Rt(v),ae.value&&(Et(),et());return}if(y()){t.emit("max",oe);return}v&&(J(v),Tt(v)),H.value&&Te(),o.value&&Et(),_.value&&et();break;case"tags":if(v&&c(v)){Rt(v),ae.value&&(Et(),et());return}if(y()){t.emit("max",oe);return}v&&J(v),H.value&&Te(),v&&Tt(v),o.value&&Et(),_.value&&et();break}_.value||Lt()},j=v=>{if(!(b(v)||i.value==="single"||!pe.value)){switch(i.value){case"multiple":case"tags":Re(v[fe.value])?Rt(v[fe.value]):Tt(v[fe.value].filter(B=>le.value.map(ue=>ue[I.value]).indexOf(B[I.value])===-1).filter(B=>!B[W.value]).filter((B,ue)=>le.value.length+1+ue<=re.value||re.value===-1)),o.value&&Mt.value&&Vt(ct.value.filter(B=>!B[W.value])[Mt.value.index]);break}_.value&&Pt()}},J=v=>{Ce(v[I.value])===void 0&&Me.value&&(t.emit("tag",v[I.value],oe),t.emit("option",v[I.value],oe),t.emit("create",v[I.value],oe),ot.value&&He(v),Te())},Q=()=>{i.value!=="single"&&Tt(Ct.value.filter(v=>!v.disabled&&!c(v)))},Re=v=>v.find(B=>!c(B)&&!B[W.value])===void 0,Ie=v=>v.find(B=>!c(B))===void 0,Ce=v=>qe.value[qe.value.map(B=>String(B[I.value])).indexOf(String(v))],$e=v=>qe.value.findIndex(B=>At.value.some(ue=>(parseInt(B[ue])==B[ue]?parseInt(B[ue]):B[ue])===(parseInt(v)==v?parseInt(v):v))),ge=v=>["tags","multiple"].indexOf(i.value)!==-1&&o.value&&c(v),He=v=>{yt.value.push(v)},Je=v=>Ke.value?v.filter(B=>ne.value?B.__VISIBLE__.length:B[fe.value].length):v.filter(B=>ne.value?B.__VISIBLE__.length:!0),Ue=(v,B=!0)=>{let ue=v;if(ne.value&&L.value){let Be=at.value;Be||(Be=(Ve,qn,li)=>At.value.some(Yd=>{let Cl=oi(_t(Ve[Yd]),Z.value);return ee.value?Cl.startsWith(oi(qn,Z.value)):Cl.indexOf(oi(qn,Z.value))!==-1})),ue=ue.filter(Ve=>Be(Ve,ne.value,oe))}return o.value&&B&&(ue=ue.filter(Be=>!ge(Be))),ue},We=v=>{let B=v;return Pp(B)&&(B=Object.keys(B).map(ue=>{let Be=B[ue];return{[I.value]:ue,[At.value[0]]:Be,[f.value]:Be}})),B&&Array.isArray(B)?B=B.map(ue=>typeof ue=="object"?ue:{[I.value]:ue,[At.value[0]]:ue,[f.value]:ue}):B=[],B},qt=()=>{Kt(R.value)||(le.value=ce(R.value))},g=v=>(tt.value=!0,new Promise((B,ue)=>{r.value(ne.value,oe).then(Be=>{Ge.value=Be||[],typeof v=="function"&&v(Be),tt.value=!1}).catch(Be=>{console.error(Be),Ge.value=[],tt.value=!1}).finally(()=>{B()})})),K=()=>{if(Ot.value)if(i.value==="single"){let v=Ce(le.value[I.value]);if(v!==void 0){let B=v[f.value];le.value[f.value]=B,E.value&&(R.value[f.value]=B)}}else le.value.forEach((v,B)=>{let ue=Ce(le.value[B][I.value]);if(ue!==void 0){let Be=ue[f.value];le.value[B][f.value]=Be,E.value&&(R.value[B][f.value]=Be)}})},V=v=>{g(v)},ce=v=>Kt(v)?i.value==="single"?{}:[]:E.value?v:i.value==="single"?Ce(v)||(te.value?{[f.value]:v,[I.value]:v,[At.value[0]]:v}:{}):v.filter(B=>!!Ce(B)||te.value).map(B=>Ce(B)||{[f.value]:B,[I.value]:B,[At.value[0]]:B}),Ae=()=>{nt.value=je(ne,v=>{v.length<D.value||!v&&D.value!==0||(tt.value=!0,P.value&&(Ge.value=[]),setTimeout(()=>{v==ne.value&&r.value(ne.value,oe).then(B=>{(v==ne.value||!ne.value)&&(Ge.value=B,Mt.value=Ct.value.filter(ue=>ue[W.value]!==!0)[0]||null,tt.value=!1)}).catch(B=>{console.error(B)})},x.value))},{flush:"sync"})};if(i.value!=="single"&&!Kt(R.value)&&!Array.isArray(R.value))throw new Error(`v-model must be an array when using "${i.value}" mode`);return r&&typeof r.value=="function"?O.value?g(qt):E.value==!0&&qt():(Ge.value=r.value,qt()),x.value>-1&&Ae(),je(x,(v,B)=>{nt.value&&nt.value(),v>=0&&Ae()}),je(R,v=>{if(Kt(v)){lt(ce(v),!1);return}switch(i.value){case"single":(E.value?v[I.value]!=le.value[I.value]:v!=le.value[I.value])&&lt(ce(v),!1);break;case"multiple":case"tags":Np(E.value?v.map(B=>B[I.value]):v,le.value.map(B=>B[I.value]))||lt(ce(v),!1);break}},{deep:!0}),je(r,(v,B)=>{typeof e.options=="function"?O.value&&(!B||v&&v.toString()!==B.toString())&&g():(Ge.value=e.options,Object.keys(le.value).length||qt(),K())}),je(f,K),je(a,(v,B)=>{kt.value=be.value&&v===-1?10:v}),{resolvedOptions:xt,pfo:ut,fo:Ct,filteredOptions:Ct,hasSelected:Ot,multipleLabelText:Zt,eo:qe,extendedOptions:qe,eg:Dt,extendedGroups:Dt,fg:ct,filteredGroups:ct,noOptions:Nt,noResults:St,resolving:tt,busy:On,offset:kt,select:Tt,deselect:Rt,remove:Qt,selectAll:Q,clear:Pe,isSelected:c,isDisabled:b,isMax:y,getOption:Ce,handleOptionClick:$,handleGroupClick:j,handleTagRemove:Qn,refreshOptions:V,resolveOptions:g,refreshLabels:K}}function jp(e,t,n){const{valueProp:r,showOptions:i,searchable:l,groupLabel:a,groups:o,mode:s,groupSelect:u,disabledProp:f,groupOptions:S}=Ze(e),M=n.fo,C=n.fg,E=n.handleOptionClick,k=n.handleGroupClick,x=n.search,O=n.pointer,D=n.setPointer,L=n.clearPointer,P=n.multiselect,H=n.isOpen,I=Le(()=>M.value.filter(R=>!R[f.value])),te=Le(()=>C.value.filter(R=>!R[f.value])),G=Qe(()=>s.value!=="single"&&u.value),z=Qe(()=>O.value&&O.value.group),re=Le(()=>oe(O.value)),Z=Le(()=>{const R=z.value?O.value:oe(O.value),ne=te.value.map(lt=>lt[a.value]).indexOf(R[a.value]);let Te=te.value[ne-1];return Te===void 0&&(Te=ae.value),Te}),_=Le(()=>{let R=te.value.map(ne=>ne.label).indexOf(z.value?O.value[a.value]:oe(O.value)[a.value])+1;return te.value.length<=R&&(R=0),te.value[R]}),ae=Le(()=>[...te.value].slice(-1)[0]),we=Le(()=>O.value.__VISIBLE__.filter(R=>!R[f.value])[0]),de=Le(()=>{const R=re.value.__VISIBLE__.filter(ne=>!ne[f.value]);return R[R.map(ne=>ne[r.value]).indexOf(O.value[r.value])-1]}),be=Le(()=>{const R=oe(O.value).__VISIBLE__.filter(ne=>!ne[f.value]);return R[R.map(ne=>ne[r.value]).indexOf(O.value[r.value])+1]}),fe=Le(()=>[...Z.value.__VISIBLE__.filter(R=>!R[f.value])].slice(-1)[0]),Ke=Le(()=>[...ae.value.__VISIBLE__.filter(R=>!R[f.value])].slice(-1)[0]),pe=R=>O.value&&(!R.group&&O.value[r.value]===R[r.value]||R.group!==void 0&&O.value[a.value]===R[a.value])?!0:void 0,ve=()=>{D(I.value[0]||null)},W=()=>{!O.value||O.value[f.value]===!0||(z.value?k(O.value):E(O.value))},ee=()=>{if(O.value===null)D((o.value&&G.value?te.value[0].__CREATE__?I.value[0]:te.value[0]:I.value[0])||null);else if(o.value&&G.value){let R=z.value?we.value:be.value;R===void 0&&(R=_.value,R.__CREATE__&&(R=R[S.value][0])),D(R||null)}else{let R=I.value.map(ne=>ne[r.value]).indexOf(O.value[r.value])+1;I.value.length<=R&&(R=0),D(I.value[R]||null)}rr(()=>{le()})},at=()=>{if(O.value===null){let R=I.value[I.value.length-1];o.value&&G.value&&(R=Ke.value,R===void 0&&(R=ae.value)),D(R||null)}else if(o.value&&G.value){let R=z.value?fe.value:de.value;R===void 0&&(R=z.value?Z.value:re.value,R.__CREATE__&&(R=fe.value,R===void 0&&(R=Z.value))),D(R||null)}else{let R=I.value.map(ne=>ne[r.value]).indexOf(O.value[r.value])-1;R<0&&(R=I.value.length-1),D(I.value[R]||null)}rr(()=>{le()})},oe=R=>te.value.find(ne=>ne.__VISIBLE__.map(Te=>Te[r.value]).indexOf(R[r.value])!==-1),le=()=>{let R=P.value.querySelector("[data-pointed]");if(!R)return;let ne=R.parentElement.parentElement;o.value&&(ne=z.value?R.parentElement.parentElement.parentElement:R.parentElement.parentElement.parentElement.parentElement),R.offsetTop+R.offsetHeight>ne.clientHeight+ne.scrollTop&&(ne.scrollTop=R.offsetTop+R.offsetHeight-ne.clientHeight),R.offsetTop<ne.scrollTop&&(ne.scrollTop=R.offsetTop)};return je(x,R=>{l.value&&(R.length&&i.value?ve():L())}),je(H,R=>{if(R&&P&&P.value){let ne=P.value.querySelectorAll("[data-selected]")[0];if(!ne)return;let Te=ne.parentElement.parentElement;rr(()=>{Te.scrollTop=ne.offsetTop})}}),{pointer:O,canPointGroups:G,isPointed:pe,setPointerFirst:ve,selectPointer:W,forwardPointer:ee,backwardPointer:at}}function Bt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Sn(e){var t=Bt(e).Element;return e instanceof t||e instanceof Element}function Ft(e){var t=Bt(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Da(e){if(typeof ShadowRoot>"u")return!1;var t=Bt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var En=Math.max,$r=Math.min,Nn=Math.round;function Oi(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ps(){return!/^((?!chrome|android).)*safari/i.test(Oi())}function Hn(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,l=1;t&&Ft(e)&&(i=e.offsetWidth>0&&Nn(r.width)/e.offsetWidth||1,l=e.offsetHeight>0&&Nn(r.height)/e.offsetHeight||1);var a=Sn(e)?Bt(e):window,o=a.visualViewport,s=!ps()&&n,u=(r.left+(s&&o?o.offsetLeft:0))/i,f=(r.top+(s&&o?o.offsetTop:0))/l,S=r.width/i,M=r.height/l;return{width:S,height:M,top:f,right:u+S,bottom:f+M,left:u,x:u,y:f}}function Oa(e){var t=Bt(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Wp(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Vp(e){return e===Bt(e)||!Ft(e)?Oa(e):Wp(e)}function Yt(e){return e?(e.nodeName||"").toLowerCase():null}function hn(e){return((Sn(e)?e.ownerDocument:e.document)||window.document).documentElement}function $a(e){return Hn(hn(e)).left+Oa(e).scrollLeft}function an(e){return Bt(e).getComputedStyle(e)}function Fa(e){var t=an(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function _p(e){var t=e.getBoundingClientRect(),n=Nn(t.width)/e.offsetWidth||1,r=Nn(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Qp(e,t,n){n===void 0&&(n=!1);var r=Ft(t),i=Ft(t)&&_p(t),l=hn(t),a=Hn(e,i,n),o={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!n)&&((Yt(t)!=="body"||Fa(l))&&(o=Vp(t)),Ft(t)?(s=Hn(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):l&&(s.x=$a(l))),{x:a.left+o.scrollLeft-s.x,y:a.top+o.scrollTop-s.y,width:a.width,height:a.height}}function fs(e){var t=Hn(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Kr(e){return Yt(e)==="html"?e:e.assignedSlot||e.parentNode||(Da(e)?e.host:null)||hn(e)}function vs(e){return["html","body","#document"].indexOf(Yt(e))>=0?e.ownerDocument.body:Ft(e)&&Fa(e)?e:vs(Kr(e))}function ir(e,t){var n;t===void 0&&(t=[]);var r=vs(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),l=Bt(r),a=i?[l].concat(l.visualViewport||[],Fa(r)?r:[]):r,o=t.concat(a);return i?o:o.concat(ir(Kr(a)))}function qp(e){return["table","td","th"].indexOf(Yt(e))>=0}function El(e){return!Ft(e)||an(e).position==="fixed"?null:e.offsetParent}function Kp(e){var t=/firefox/i.test(Oi()),n=/Trident/i.test(Oi());if(n&&Ft(e)){var r=an(e);if(r.position==="fixed")return null}var i=Kr(e);for(Da(i)&&(i=i.host);Ft(i)&&["html","body"].indexOf(Yt(i))<0;){var l=an(i);if(l.transform!=="none"||l.perspective!=="none"||l.contain==="paint"||["transform","perspective"].indexOf(l.willChange)!==-1||t&&l.willChange==="filter"||t&&l.filter&&l.filter!=="none")return i;i=i.parentNode}return null}function Gr(e){for(var t=Bt(e),n=El(e);n&&qp(n)&&an(n).position==="static";)n=El(n);return n&&(Yt(n)==="html"||Yt(n)==="body"&&an(n).position==="static")?t:n||Kp(e)||t}var jt="top",Xt="bottom",vn="right",rn="left",za="auto",Jr=[jt,Xt,vn,rn],Un="start",pr="end",Gp="clippingParents",gs="viewport",Kn="popper",Jp="reference",Ll=Jr.reduce(function(e,t){return e.concat([t+"-"+Un,t+"-"+pr])},[]),Yp=[].concat(Jr,[za]).reduce(function(e,t){return e.concat([t,t+"-"+Un,t+"-"+pr])},[]),Xp="beforeRead",Zp="read",ef="afterRead",tf="beforeMain",nf="main",rf="afterMain",af="beforeWrite",lf="write",of="afterWrite",sf=[Xp,Zp,ef,tf,nf,rf,af,lf,of];function df(e){var t=new Map,n=new Set,r=[];e.forEach(function(l){t.set(l.name,l)});function i(l){n.add(l.name);var a=[].concat(l.requires||[],l.requiresIfExists||[]);a.forEach(function(o){if(!n.has(o)){var s=t.get(o);s&&i(s)}}),r.push(l)}return e.forEach(function(l){n.has(l.name)||i(l)}),r}function uf(e){var t=df(e);return sf.reduce(function(n,r){return n.concat(t.filter(function(i){return i.phase===r}))},[])}function cf(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function pf(e){var t=e.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}function ff(e,t){var n=Bt(e),r=hn(e),i=n.visualViewport,l=r.clientWidth,a=r.clientHeight,o=0,s=0;if(i){l=i.width,a=i.height;var u=ps();(u||!u&&t==="fixed")&&(o=i.offsetLeft,s=i.offsetTop)}return{width:l,height:a,x:o+$a(e),y:s}}function vf(e){var t,n=hn(e),r=Oa(e),i=(t=e.ownerDocument)==null?void 0:t.body,l=En(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=En(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),o=-r.scrollLeft+$a(e),s=-r.scrollTop;return an(i||n).direction==="rtl"&&(o+=En(n.clientWidth,i?i.clientWidth:0)-l),{width:l,height:a,x:o,y:s}}function gf(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Da(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function $i(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function mf(e,t){var n=Hn(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function xl(e,t,n){return t===gs?$i(ff(e,n)):Sn(t)?mf(t,n):$i(vf(hn(e)))}function hf(e){var t=ir(Kr(e)),n=["absolute","fixed"].indexOf(an(e).position)>=0,r=n&&Ft(e)?Gr(e):e;return Sn(r)?t.filter(function(i){return Sn(i)&&gf(i,r)&&Yt(i)!=="body"}):[]}function bf(e,t,n,r){var i=t==="clippingParents"?hf(e):[].concat(t),l=[].concat(i,[n]),a=l[0],o=l.reduce(function(s,u){var f=xl(e,u,r);return s.top=En(f.top,s.top),s.right=$r(f.right,s.right),s.bottom=$r(f.bottom,s.bottom),s.left=En(f.left,s.left),s},xl(e,a,r));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function fn(e){return e.split("-")[0]}function jn(e){return e.split("-")[1]}function ms(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function hs(e){var t=e.reference,n=e.element,r=e.placement,i=r?fn(r):null,l=r?jn(r):null,a=t.x+t.width/2-n.width/2,o=t.y+t.height/2-n.height/2,s;switch(i){case jt:s={x:a,y:t.y-n.height};break;case Xt:s={x:a,y:t.y+t.height};break;case vn:s={x:t.x+t.width,y:o};break;case rn:s={x:t.x-n.width,y:o};break;default:s={x:t.x,y:t.y}}var u=i?ms(i):null;if(u!=null){var f=u==="y"?"height":"width";switch(l){case Un:s[u]=s[u]-(t[f]/2-n[f]/2);break;case pr:s[u]=s[u]+(t[f]/2-n[f]/2);break}}return s}function bs(){return{top:0,right:0,bottom:0,left:0}}function wf(e){return Object.assign({},bs(),e)}function yf(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}function Pa(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,l=n.strategy,a=l===void 0?e.strategy:l,o=n.boundary,s=o===void 0?Gp:o,u=n.rootBoundary,f=u===void 0?gs:u,S=n.elementContext,M=S===void 0?Kn:S,C=n.altBoundary,E=C===void 0?!1:C,k=n.padding,x=k===void 0?0:k,O=wf(typeof x!="number"?x:yf(x,Jr)),D=M===Kn?Jp:Kn,L=e.rects.popper,P=e.elements[E?D:M],H=bf(Sn(P)?P:P.contextElement||hn(e.elements.popper),s,f,a),I=Hn(e.elements.reference),te=hs({reference:I,element:L,placement:i}),G=$i(Object.assign({},L,te)),z=M===Kn?G:I,re={top:H.top-z.top+O.top,bottom:z.bottom-H.bottom+O.bottom,left:H.left-z.left+O.left,right:z.right-H.right+O.right},Z=e.modifiersData.offset;if(M===Kn&&Z){var _=Z[i];Object.keys(re).forEach(function(ae){var we=[vn,Xt].indexOf(ae)>=0?1:-1,de=[jt,Xt].indexOf(ae)>=0?"y":"x";re[ae]+=_[de]*we})}return re}var Sl={placement:"bottom",modifiers:[],strategy:"absolute"};function Tl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function kf(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,l=i===void 0?Sl:i;return function(o,s,u){u===void 0&&(u=l);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Sl,l),modifiersData:{},elements:{reference:o,popper:s},attributes:{},styles:{}},S=[],M=!1,C={state:f,setOptions:function(O){var D=typeof O=="function"?O(f.options):O;k(),f.options=Object.assign({},l,f.options,D),f.scrollParents={reference:Sn(o)?ir(o):o.contextElement?ir(o.contextElement):[],popper:ir(s)};var L=uf(pf([].concat(r,f.options.modifiers)));return f.orderedModifiers=L.filter(function(P){return P.enabled}),E(),C.update()},forceUpdate:function(){if(!M){var O=f.elements,D=O.reference,L=O.popper;if(Tl(D,L)){f.rects={reference:Qp(D,Gr(L),f.options.strategy==="fixed"),popper:fs(L)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(re){return f.modifiersData[re.name]=Object.assign({},re.data)});for(var P=0;P<f.orderedModifiers.length;P++){if(f.reset===!0){f.reset=!1,P=-1;continue}var H=f.orderedModifiers[P],I=H.fn,te=H.options,G=te===void 0?{}:te,z=H.name;typeof I=="function"&&(f=I({state:f,options:G,name:z,instance:C})||f)}}}},update:cf(function(){return new Promise(function(x){C.forceUpdate(),x(f)})}),destroy:function(){k(),M=!0}};if(!Tl(o,s))return C;C.setOptions(u).then(function(x){!M&&u.onFirstUpdate&&u.onFirstUpdate(x)});function E(){f.orderedModifiers.forEach(function(x){var O=x.name,D=x.options,L=D===void 0?{}:D,P=x.effect;if(typeof P=="function"){var H=P({state:f,name:O,instance:C,options:L}),I=function(){};S.push(H||I)}})}function k(){S.forEach(function(x){return x()}),S=[]}return C}}var Cr={passive:!0};function Cf(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,l=i===void 0?!0:i,a=r.resize,o=a===void 0?!0:a,s=Bt(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return l&&u.forEach(function(f){f.addEventListener("scroll",n.update,Cr)}),o&&s.addEventListener("resize",n.update,Cr),function(){l&&u.forEach(function(f){f.removeEventListener("scroll",n.update,Cr)}),o&&s.removeEventListener("resize",n.update,Cr)}}var Af={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Cf,data:{}};function Ef(e){var t=e.state,n=e.name;t.modifiersData[n]=hs({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}var Lf={name:"popperOffsets",enabled:!0,phase:"read",fn:Ef,data:{}},xf={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Sf(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:Nn(n*i)/i||0,y:Nn(r*i)/i||0}}function Rl(e){var t,n=e.popper,r=e.popperRect,i=e.placement,l=e.variation,a=e.offsets,o=e.position,s=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,S=e.isFixed,M=a.x,C=M===void 0?0:M,E=a.y,k=E===void 0?0:E,x=typeof f=="function"?f({x:C,y:k}):{x:C,y:k};C=x.x,k=x.y;var O=a.hasOwnProperty("x"),D=a.hasOwnProperty("y"),L=rn,P=jt,H=window;if(u){var I=Gr(n),te="clientHeight",G="clientWidth";if(I===Bt(n)&&(I=hn(n),an(I).position!=="static"&&o==="absolute"&&(te="scrollHeight",G="scrollWidth")),I=I,i===jt||(i===rn||i===vn)&&l===pr){P=Xt;var z=S&&I===H&&H.visualViewport?H.visualViewport.height:I[te];k-=z-r.height,k*=s?1:-1}if(i===rn||(i===jt||i===Xt)&&l===pr){L=vn;var re=S&&I===H&&H.visualViewport?H.visualViewport.width:I[G];C-=re-r.width,C*=s?1:-1}}var Z=Object.assign({position:o},u&&xf),_=f===!0?Sf({x:C,y:k},Bt(n)):{x:C,y:k};if(C=_.x,k=_.y,s){var ae;return Object.assign({},Z,(ae={},ae[P]=D?"0":"",ae[L]=O?"0":"",ae.transform=(H.devicePixelRatio||1)<=1?"translate("+C+"px, "+k+"px)":"translate3d("+C+"px, "+k+"px, 0)",ae))}return Object.assign({},Z,(t={},t[P]=D?k+"px":"",t[L]=O?C+"px":"",t.transform="",t))}function Tf(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0?!0:r,l=n.adaptive,a=l===void 0?!0:l,o=n.roundOffsets,s=o===void 0?!0:o,u={placement:fn(t.placement),variation:jn(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Rl(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Rl(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Rf={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Tf,data:{}};function If(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},i=t.attributes[n]||{},l=t.elements[n];!Ft(l)||!Yt(l)||(Object.assign(l.style,r),Object.keys(i).forEach(function(a){var o=i[a];o===!1?l.removeAttribute(a):l.setAttribute(a,o===!0?"":o)}))})}function Bf(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var i=t.elements[r],l=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),o=a.reduce(function(s,u){return s[u]="",s},{});!Ft(i)||!Yt(i)||(Object.assign(i.style,o),Object.keys(l).forEach(function(s){i.removeAttribute(s)}))})}}var Mf={name:"applyStyles",enabled:!0,phase:"write",fn:If,effect:Bf,requires:["computeStyles"]},Df=[Af,Lf,Rf,Mf],Of=kf({defaultModifiers:Df});function $f(e){return e==="x"?"y":"x"}function Tr(e,t,n){return En(e,$r(t,n))}function Ff(e,t,n){var r=Tr(e,t,n);return r>n?n:r}function zf(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,l=i===void 0?!0:i,a=n.altAxis,o=a===void 0?!1:a,s=n.boundary,u=n.rootBoundary,f=n.altBoundary,S=n.padding,M=n.tether,C=M===void 0?!0:M,E=n.tetherOffset,k=E===void 0?0:E,x=Pa(t,{boundary:s,rootBoundary:u,padding:S,altBoundary:f}),O=fn(t.placement),D=jn(t.placement),L=!D,P=ms(O),H=$f(P),I=t.modifiersData.popperOffsets,te=t.rects.reference,G=t.rects.popper,z=typeof k=="function"?k(Object.assign({},t.rects,{placement:t.placement})):k,re=typeof z=="number"?{mainAxis:z,altAxis:z}:Object.assign({mainAxis:0,altAxis:0},z),Z=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,_={x:0,y:0};if(I){if(l){var ae,we=P==="y"?jt:rn,de=P==="y"?Xt:vn,be=P==="y"?"height":"width",fe=I[P],Ke=fe+x[we],pe=fe-x[de],ve=C?-G[be]/2:0,W=D===Un?te[be]:G[be],ee=D===Un?-G[be]:-te[be],at=t.elements.arrow,oe=C&&at?fs(at):{width:0,height:0},le=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:bs(),R=le[we],ne=le[de],Te=Tr(0,te[be],oe[be]),lt=L?te[be]/2-ve-Te-R-re.mainAxis:W-Te-R-re.mainAxis,Mt=L?-te[be]/2+ve+Te+ne+re.mainAxis:ee+Te+ne+re.mainAxis,Vt=t.elements.arrow&&Gr(t.elements.arrow),Et=Vt?P==="y"?Vt.clientTop||0:Vt.clientLeft||0:0,Lt=(ae=Z?.[P])!=null?ae:0,Pt=fe+lt-Lt-Et,et=fe+Mt-Lt,_t=Tr(C?$r(Ke,Pt):Ke,fe,C?En(pe,et):pe);I[P]=_t,_[P]=_t-fe}if(o){var yt,Ge=P==="x"?jt:rn,tt=P==="x"?Xt:vn,nt=I[H],kt=H==="y"?"height":"width",xt=nt+x[Ge],Me=nt-x[tt],ot=[jt,rn].indexOf(O)!==-1,qe=(yt=Z?.[H])!=null?yt:0,ut=ot?xt:nt-te[kt]-G[kt]-qe+re.altAxis,Ct=ot?nt+te[kt]+G[kt]-qe-re.altAxis:Me,Dt=C&&ot?Ff(ut,nt,Ct):Tr(C?ut:xt,nt,C?Ct:Me);I[H]=Dt,_[H]=Dt-nt}t.modifiersData[r]=_}}var Pf={name:"preventOverflow",enabled:!0,phase:"main",fn:zf,requiresIfExists:["offset"]},Nf={left:"right",right:"left",bottom:"top",top:"bottom"};function Rr(e){return e.replace(/left|right|bottom|top/g,function(t){return Nf[t]})}var Hf={start:"end",end:"start"};function Il(e){return e.replace(/start|end/g,function(t){return Hf[t]})}function Uf(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,l=n.rootBoundary,a=n.padding,o=n.flipVariations,s=n.allowedAutoPlacements,u=s===void 0?Yp:s,f=jn(r),S=f?o?Ll:Ll.filter(function(E){return jn(E)===f}):Jr,M=S.filter(function(E){return u.indexOf(E)>=0});M.length===0&&(M=S);var C=M.reduce(function(E,k){return E[k]=Pa(e,{placement:k,boundary:i,rootBoundary:l,padding:a})[fn(k)],E},{});return Object.keys(C).sort(function(E,k){return C[E]-C[k]})}function jf(e){if(fn(e)===za)return[];var t=Rr(e);return[Il(e),t,Il(t)]}function Wf(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,l=i===void 0?!0:i,a=n.altAxis,o=a===void 0?!0:a,s=n.fallbackPlacements,u=n.padding,f=n.boundary,S=n.rootBoundary,M=n.altBoundary,C=n.flipVariations,E=C===void 0?!0:C,k=n.allowedAutoPlacements,x=t.options.placement,O=fn(x),D=O===x,L=s||(D||!E?[Rr(x)]:jf(x)),P=[x].concat(L).reduce(function(oe,le){return oe.concat(fn(le)===za?Uf(t,{placement:le,boundary:f,rootBoundary:S,padding:u,flipVariations:E,allowedAutoPlacements:k}):le)},[]),H=t.rects.reference,I=t.rects.popper,te=new Map,G=!0,z=P[0],re=0;re<P.length;re++){var Z=P[re],_=fn(Z),ae=jn(Z)===Un,we=[jt,Xt].indexOf(_)>=0,de=we?"width":"height",be=Pa(t,{placement:Z,boundary:f,rootBoundary:S,altBoundary:M,padding:u}),fe=we?ae?vn:rn:ae?Xt:jt;H[de]>I[de]&&(fe=Rr(fe));var Ke=Rr(fe),pe=[];if(l&&pe.push(be[_]<=0),o&&pe.push(be[fe]<=0,be[Ke]<=0),pe.every(function(oe){return oe})){z=Z,G=!1;break}te.set(Z,pe)}if(G)for(var ve=E?3:1,W=function(le){var R=P.find(function(ne){var Te=te.get(ne);if(Te)return Te.slice(0,le).every(function(lt){return lt})});if(R)return z=R,"break"},ee=ve;ee>0;ee--){var at=W(ee);if(at==="break")break}t.placement!==z&&(t.modifiersData[r]._skip=!0,t.placement=z,t.reset=!0)}}var Vf={name:"flip",enabled:!0,phase:"main",fn:Wf,requiresIfExists:["offset"],data:{_skip:!1}};function _f(e,t,n){const{disabled:r,appendTo:i,appendToBody:l,openDirection:a}=Ze(e),o=mr().proxy,s=n.multiselect,u=n.dropdown,f=rt(!1),S=rt(null),M=rt(null),C=Qe(()=>i.value||l.value),E=Qe(()=>a.value==="top"&&M.value==="bottom"||a.value==="bottom"&&M.value!=="top"?"bottom":"top"),k=()=>{f.value||r.value||(f.value=!0,t.emit("open",o),C.value&&rr(()=>{O()}))},x=()=>{f.value&&(f.value=!1,t.emit("close",o))},O=()=>{if(!S.value)return;let L=parseInt(window.getComputedStyle(u.value).borderTopWidth.replace("px","")),P=parseInt(window.getComputedStyle(u.value).borderBottomWidth.replace("px",""));S.value.setOptions(H=>({...H,modifiers:[...H.modifiers,{name:"offset",options:{offset:[0,(E.value==="top"?L:P)*-1]}}]})),S.value.update()},D=L=>{for(;L&&L!==document.body;){if(getComputedStyle(L).position==="fixed")return!0;L=L.parentElement}return!1};return Vr(()=>{C.value&&(S.value=Of(s.value,u.value,{strategy:D(s.value)?"fixed":void 0,placement:a.value,modifiers:[Pf,Vf,{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:L})=>{L.styles.popper.width=`${L.rects.reference.width}px`},effect:({state:L})=>{L.elements.popper.style.width=`${L.elements.reference.offsetWidth}px`}},{name:"toggleClass",enabled:!0,phase:"write",fn({state:L}){M.value=L.placement}}]}))}),eu(()=>{!C.value||!S.value||(S.value.destroy(),S.value=null)}),{popper:S,isOpen:f,open:k,close:x,placement:E,updatePopper:O}}function Qf(e,t,n){const{searchable:r,disabled:i,clearOnBlur:l}=Ze(e),a=n.input,o=n.open,s=n.close,u=n.clearSearch,f=n.isOpen,S=n.wrapper,M=n.tags,C=rt(!1),E=rt(!1),k=Qe(()=>r.value||i.value?-1:0),x=()=>{r.value&&a.value.blur(),S.value.blur()},O=()=>{r.value&&!i.value&&a.value.focus()},D=(G=!0)=>{i.value||(C.value=!0,G&&o())},L=()=>{C.value=!1,setTimeout(()=>{C.value||(s(),l.value&&u())},1)};return{tabindex:k,isActive:C,mouseClicked:E,blur:x,focus:O,activate:D,deactivate:L,handleFocusIn:G=>{G.target.closest("[data-tags]")&&G.target.nodeName!=="INPUT"||G.target.closest("[data-clear]")||D(E.value)},handleFocusOut:()=>{L()},handleCaretClick:()=>{L(),x()},handleMousedown:G=>{E.value=!0,f.value&&(G.target.isEqualNode(S.value)||G.target.isEqualNode(M.value))?setTimeout(()=>{L()},0):!f.value&&(document.activeElement.isEqualNode(S.value)||document.activeElement.isEqualNode(a.value))&&D(),setTimeout(()=>{E.value=!1},0)}}}function qf(e,t,n){const{mode:r,addTagOn:i,openDirection:l,searchable:a,showOptions:o,valueProp:s,groups:u,addOptionOn:f,createTag:S,createOption:M,reverse:C}=Ze(e),E=mr().proxy,k=n.iv,x=n.update,O=n.deselect,D=n.search,L=n.setPointer,P=n.selectPointer,H=n.backwardPointer,I=n.forwardPointer,te=n.multiselect,G=n.wrapper,z=n.tags,re=n.isOpen,Z=n.open,_=n.blur,ae=n.fo,we=Qe(()=>S.value||M.value||!1),de=Qe(()=>i.value!==void 0?i.value:f.value!==void 0?f.value:["enter"]),be=()=>{r.value==="tags"&&!o.value&&we.value&&a.value&&!u.value&&L(ae.value[ae.value.map(pe=>pe[s.value]).indexOf(D.value)])};return{handleKeydown:pe=>{t.emit("keydown",pe,E);let ve,W;switch(["ArrowLeft","ArrowRight","Enter"].indexOf(pe.key)!==-1&&r.value==="tags"&&(ve=[...te.value.querySelectorAll("[data-tags] > *")].filter(ee=>ee!==z.value),W=ve.findIndex(ee=>ee===document.activeElement)),pe.key){case"Backspace":if(r.value==="single"||a.value&&[null,""].indexOf(D.value)===-1||k.value.length===0)return;let ee=k.value.filter(at=>!at.disabled&&at.remove!==!1);ee.length&&O(ee[ee.length-1]);break;case"Enter":if(pe.preventDefault(),pe.keyCode===229)return;if(W!==-1&&W!==void 0){x([...k.value].filter((at,oe)=>oe!==W)),W===ve.length-1&&(ve.length-1?ve[ve.length-2].focus():a.value?z.value.querySelector("input").focus():G.value.focus());return}if(de.value.indexOf("enter")===-1&&we.value)return;be(),P();break;case" ":if(!we.value&&!a.value){pe.preventDefault(),be(),P();return}if(!we.value)return!1;if(de.value.indexOf("space")===-1&&we.value)return;pe.preventDefault(),be(),P();break;case"Tab":case";":case",":if(de.value.indexOf(pe.key.toLowerCase())===-1||!we.value)return;be(),P(),pe.preventDefault();break;case"Escape":_();break;case"ArrowUp":if(pe.preventDefault(),!o.value)return;re.value||Z(),H();break;case"ArrowDown":if(pe.preventDefault(),!o.value)return;re.value||Z(),I();break;case"ArrowLeft":if(a.value&&z.value&&z.value.querySelector("input").selectionStart||pe.shiftKey||r.value!=="tags"||!k.value||!k.value.length)return;pe.preventDefault(),W===-1?ve[ve.length-1].focus():W>0&&ve[W-1].focus();break;case"ArrowRight":if(W===-1||pe.shiftKey||r.value!=="tags"||!k.value||!k.value.length)return;pe.preventDefault(),ve.length>W+1?ve[W+1].focus():a.value?z.value.querySelector("input").focus():a.value||G.value.focus();break}},handleKeyup:pe=>{t.emit("keyup",pe,E)},preparePointer:be}}function Kf(e,t,n){const{classes:r,disabled:i,showOptions:l,breakTags:a}=Ze(e),o=n.isOpen,s=n.isPointed,u=n.isSelected,f=n.isDisabled,S=n.isActive,M=n.canPointGroups,C=n.resolving,E=n.fo,k=n.placement,x=Qe(()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",wrapper:"multiselect-wrapper",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagWrapper:"multiselect-tag-wrapper",tagWrapperBreak:"multiselect-tag-wrapper-break",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",assist:"multiselect-assistive-text",spacer:"multiselect-spacer",...r.value})),O=Qe(()=>!!(o.value&&l.value&&(!C.value||C.value&&E.value.length)));return{classList:Le(()=>{const L=x.value;return{container:[L.container].concat(i.value?L.containerDisabled:[]).concat(O.value&&k.value==="top"?L.containerOpenTop:[]).concat(O.value&&k.value!=="top"?L.containerOpen:[]).concat(S.value?L.containerActive:[]),wrapper:L.wrapper,spacer:L.spacer,singleLabel:L.singleLabel,singleLabelText:L.singleLabelText,multipleLabel:L.multipleLabel,search:L.search,tags:L.tags,tag:[L.tag].concat(i.value?L.tagDisabled:[]),tagWrapper:[L.tagWrapper,a.value?L.tagWrapperBreak:null],tagDisabled:L.tagDisabled,tagRemove:L.tagRemove,tagRemoveIcon:L.tagRemoveIcon,tagsSearchWrapper:L.tagsSearchWrapper,tagsSearch:L.tagsSearch,tagsSearchCopy:L.tagsSearchCopy,placeholder:L.placeholder,caret:[L.caret].concat(o.value?L.caretOpen:[]),clear:L.clear,clearIcon:L.clearIcon,spinner:L.spinner,inifinite:L.inifinite,inifiniteSpinner:L.inifiniteSpinner,dropdown:[L.dropdown].concat(k.value==="top"?L.dropdownTop:[]).concat(!o.value||!l.value||!O.value?L.dropdownHidden:[]),options:[L.options].concat(k.value==="top"?L.optionsTop:[]),group:L.group,groupLabel:P=>{let H=[L.groupLabel];return s(P)?H.push(u(P)?L.groupLabelSelectedPointed:L.groupLabelPointed):u(P)&&M.value?H.push(f(P)?L.groupLabelSelectedDisabled:L.groupLabelSelected):f(P)&&H.push(L.groupLabelDisabled),M.value&&H.push(L.groupLabelPointable),H},groupOptions:L.groupOptions,option:(P,H)=>{let I=[L.option];return s(P)?I.push(u(P)?L.optionSelectedPointed:L.optionPointed):u(P)?I.push(f(P)?L.optionSelectedDisabled:L.optionSelected):(f(P)||H&&f(H))&&I.push(L.optionDisabled),I},noOptions:L.noOptions,noResults:L.noResults,assist:L.assist,fakeInput:L.fakeInput}}),showDropdown:O}}function Gf(e,t,n){const{limit:r,infinite:i}=Ze(e),l=n.isOpen,a=n.offset,o=n.search,s=n.pfo,u=n.eo,f=rt(null),S=$n(null),M=Qe(()=>a.value<s.value.length),C=k=>{const{isIntersecting:x,target:O}=k[0];if(x){const D=O.offsetParent,L=D.scrollTop;a.value+=r.value==-1?10:r.value,rr(()=>{D.scrollTop=L})}},E=()=>{l.value&&a.value<s.value.length?f.value.observe(S.value):!l.value&&f.value&&f.value.disconnect()};return je(l,()=>{i.value&&E()}),je(o,()=>{i.value&&(a.value=r.value,E())},{flush:"post"}),je(u,()=>{i.value&&E()},{immediate:!1,flush:"post"}),Vr(()=>{window&&window.IntersectionObserver&&(f.value=new IntersectionObserver(C))}),{hasMore:M,infiniteLoader:S}}function Jf(e,t,n){const{placeholder:r,id:i,valueProp:l,label:a,mode:o,groupLabel:s,aria:u,searchable:f}=Ze(e),S=n.pointer,M=n.iv,C=n.hasSelected,E=n.multipleLabelText,k=rt(null),x=Qe(()=>`${i.value?i.value+"-":""}assist`),O=Qe(()=>`${i.value?i.value+"-":""}multiselect-options`),D=Qe(()=>{if(S.value){let _=i.value?`${i.value}-`:"";return _+=`${S.value.group?"multiselect-group":"multiselect-option"}-`,_+=S.value.group?S.value.index:S.value[l.value],_}}),L=Qe(()=>r.value),P=Qe(()=>o.value!=="single"),H=Le(()=>o.value==="single"&&C.value?M.value[a.value]:o.value==="multiple"&&C.value?E.value:o.value==="tags"&&C.value?M.value.map(_=>_[a.value]).join(", "):""),I=Le(()=>{let _={...u.value};return f.value&&(_["aria-labelledby"]=_["aria-labelledby"]?`${x.value} ${_["aria-labelledby"]}`:x.value,H.value&&_["aria-label"]&&(_["aria-label"]=`${H.value}, ${_["aria-label"]}`)),_}),te=_=>`${i.value?i.value+"-":""}multiselect-option-${_[l.value]}`,G=_=>`${i.value?i.value+"-":""}multiselect-group-${_.index}`,z=_=>`${_}`,re=_=>`${_}`,Z=_=>`${_} ❎`;return Vr(()=>{if(i.value&&document&&document.querySelector){let _=document.querySelector(`[for="${i.value}"]`);k.value=_?_.innerText:null}}),{arias:I,ariaLabel:H,ariaAssist:x,ariaControls:O,ariaPlaceholder:L,ariaMultiselectable:P,ariaActiveDescendant:D,ariaOptionId:te,ariaOptionLabel:z,ariaGroupId:G,ariaGroupLabel:re,ariaTagLabel:Z}}function Yf(e,t,n){const{locale:r,fallbackLocale:i}=Ze(e);return{localize:a=>!a||typeof a!="object"?a:a&&a[r.value]?a[r.value]:a&&r.value&&a[r.value.toUpperCase()]?a[r.value.toUpperCase()]:a&&a[i.value]?a[i.value]:a&&i.value&&a[i.value.toUpperCase()]?a[i.value.toUpperCase()]:a&&Object.keys(a)[0]?a[Object.keys(a)[0]]:""}}function Xf(e,t,n){const r=$n(null),i=$n(null),l=$n(null),a=$n(null),o=$n(null);return{multiselect:r,wrapper:i,tags:l,input:a,dropdown:o}}function Zf(e,t,n,r={}){return n.forEach(i=>{r={...r,...i(e,t,r)}}),r}var br={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup","max","create"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1,default:void 0},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:[String,Array],required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:[String,Object],required:!1,default:"The list is empty"},noResultsText:{type:[String,Object],required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1,default:void 0},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},closeOnDeselect:{type:Boolean,required:!1,default:!1},autocomplete:{type:String,required:!1,default:void 0},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function,default:void 0},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1},aria:{required:!1,type:Object,default:()=>({})},clearOnBlur:{required:!1,type:Boolean,default:!0},locale:{required:!1,type:String,default:null},fallbackLocale:{required:!1,type:String,default:"en"},searchFilter:{required:!1,type:Function,default:null},allowAbsent:{required:!1,type:Boolean,default:!1},appendToBody:{required:!1,type:Boolean,default:!1},closeOnScroll:{required:!1,type:Boolean,default:!1},breakTags:{required:!1,type:Boolean,default:!1},appendTo:{required:!1,type:String,default:void 0}},setup(e,t){return Zf(e,t,[Xf,Yf,$p,zp,_f,Fp,Op,Qf,Up,Gf,jp,qf,Kf,Jf])},beforeMount(){(this.$root.constructor&&this.$root.constructor.version&&this.$root.constructor.version.match(/^2\./)||this.vueVersionMs===2)&&(this.$options.components.Teleport||(this.$options.components.Teleport={render(){return this.$slots.default?this.$slots.default[0]:null}}))}};const ev=["id","dir"],tv=["tabindex","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable","role"],nv=["type","modelValue","value","autocomplete","id","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],rv=["onKeyup","aria-label"],iv=["onClick"],av=["type","modelValue","value","id","autocomplete","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],lv=["innerHTML"],ov=["id"],sv=["id"],dv=["id","aria-label","aria-selected"],uv=["data-pointed","onMouseenter","onClick"],cv=["innerHTML"],pv=["aria-label"],fv=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],vv=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],gv=["innerHTML"],mv=["innerHTML"],hv=["value"],bv=["name","value"],wv=["name","value"],yv=["id"];function kv(e,t,n,r,i,l){return d(),h("div",{ref:"multiselect",class:p(e.classList.container),id:n.searchable?void 0:n.id,dir:n.rtl?"rtl":void 0,onFocusin:t[12]||(t[12]=(...a)=>e.handleFocusIn&&e.handleFocusIn(...a)),onFocusout:t[13]||(t[13]=(...a)=>e.handleFocusOut&&e.handleFocusOut(...a)),onKeyup:t[14]||(t[14]=(...a)=>e.handleKeyup&&e.handleKeyup(...a)),onKeydown:t[15]||(t[15]=(...a)=>e.handleKeydown&&e.handleKeydown(...a))},[w("div",q({class:e.classList.wrapper,onMousedown:t[9]||(t[9]=(...a)=>e.handleMousedown&&e.handleMousedown(...a)),ref:"wrapper",tabindex:e.tabindex,"aria-controls":n.searchable?void 0:e.ariaControls,"aria-placeholder":n.searchable?void 0:e.ariaPlaceholder,"aria-expanded":n.searchable?void 0:e.isOpen,"aria-activedescendant":n.searchable?void 0:e.ariaActiveDescendant,"aria-multiselectable":n.searchable?void 0:e.ariaMultiselectable,role:n.searchable?void 0:"combobox"},n.searchable?{}:e.arias),[m(" Search "),n.mode!=="tags"&&n.searchable&&!n.disabled?(d(),h("input",q({key:0,type:n.inputType,modelValue:e.search,value:e.search,class:e.classList.search,autocomplete:n.autocomplete,id:n.searchable?n.id:void 0,onInput:t[0]||(t[0]=(...a)=>e.handleSearchInput&&e.handleSearchInput(...a)),onKeypress:t[1]||(t[1]=(...a)=>e.handleKeypress&&e.handleKeypress(...a)),onPaste:t[2]||(t[2]=he((...a)=>e.handlePaste&&e.handlePaste(...a),["stop"])),ref:"input","aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},{...n.attrs,...e.arias}),null,16,nv)):m("v-if",!0),m(" Tags (with search) "),n.mode=="tags"?(d(),h("div",{key:1,class:p(e.classList.tags),"data-tags":""},[(d(!0),h(X,null,ie(e.iv,(a,o,s)=>T(e.$slots,"tag",{option:a,handleTagRemove:e.handleTagRemove,disabled:n.disabled},()=>[(d(),h("span",{class:p([e.classList.tag,a.disabled?e.classList.tagDisabled:null]),tabindex:"-1",onKeyup:ze(u=>e.handleTagRemove(a,u),["enter"]),key:s,"aria-label":e.ariaTagLabel(e.localize(a[n.label]))},[w("span",{class:p(e.classList.tagWrapper)},Se(e.localize(a[n.label])),3),!n.disabled&&!a.disabled?(d(),h("span",{key:0,class:p(e.classList.tagRemove),onClick:he(u=>e.handleTagRemove(a,u),["stop"])},[w("span",{class:p(e.classList.tagRemoveIcon)},null,2)],10,iv)):m("v-if",!0)],42,rv))])),256)),w("div",{class:p(e.classList.tagsSearchWrapper),ref:"tags"},[m(" Used for measuring search width "),w("span",{class:p(e.classList.tagsSearchCopy)},Se(e.search),3),m(" Actual search input "),n.searchable&&!n.disabled?(d(),h("input",q({key:0,type:n.inputType,modelValue:e.search,value:e.search,class:e.classList.tagsSearch,id:n.searchable?n.id:void 0,autocomplete:n.autocomplete,onInput:t[3]||(t[3]=(...a)=>e.handleSearchInput&&e.handleSearchInput(...a)),onKeypress:t[4]||(t[4]=(...a)=>e.handleKeypress&&e.handleKeypress(...a)),onPaste:t[5]||(t[5]=he((...a)=>e.handlePaste&&e.handlePaste(...a),["stop"])),ref:"input","aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},{...n.attrs,...e.arias}),null,16,av)):m("v-if",!0)],2)],2)):m("v-if",!0),m(" Single label "),n.mode=="single"&&e.hasSelected&&!e.search&&e.iv?T(e.$slots,"singlelabel",{key:2,value:e.iv},()=>[w("div",{class:p(e.classList.singleLabel)},[w("span",{class:p(e.classList.singleLabelText)},Se(e.localize(e.iv[n.label])),3)],2)]):m("v-if",!0),m(" Multiple label "),n.mode=="multiple"&&e.hasSelected&&!e.search?T(e.$slots,"multiplelabel",{key:3,values:e.iv},()=>[w("div",{class:p(e.classList.multipleLabel),innerHTML:e.multipleLabelText},null,10,lv)]):m("v-if",!0),m(" Placeholder "),n.placeholder&&!e.hasSelected&&!e.search?T(e.$slots,"placeholder",{key:4},()=>[w("div",{class:p(e.classList.placeholder),"aria-hidden":"true"},Se(n.placeholder),3)]):m("v-if",!0),m(" Spinner "),n.loading||e.resolving?T(e.$slots,"spinner",{key:5},()=>[w("span",{class:p(e.classList.spinner),"aria-hidden":"true"},null,2)]):m("v-if",!0),m(" Clear "),e.hasSelected&&!n.disabled&&n.canClear&&!e.busy?T(e.$slots,"clear",{key:6,clear:e.clear},()=>[w("span",{"aria-hidden":"true",tabindex:"0",role:"button","data-clear":"","aria-roledescription":"❎",class:p(e.classList.clear),onClick:t[6]||(t[6]=(...a)=>e.clear&&e.clear(...a)),onKeyup:t[7]||(t[7]=ze((...a)=>e.clear&&e.clear(...a),["enter"]))},[w("span",{class:p(e.classList.clearIcon)},null,2)],34)]):m("v-if",!0),m(" Caret "),n.caret&&n.showOptions?T(e.$slots,"caret",{key:7,handleCaretClick:e.handleCaretClick,isOpen:e.isOpen},()=>[w("span",{class:p(e.classList.caret),onClick:t[8]||(t[8]=(...a)=>e.handleCaretClick&&e.handleCaretClick(...a)),"aria-hidden":"true"},null,2)]):m("v-if",!0)],16,tv),m(" Options "),(d(),A(ko,{to:n.appendTo||"body",disabled:!n.appendToBody&&!n.appendTo},[w("div",{id:n.id?`${n.id}-dropdown`:void 0,class:p(e.classList.dropdown),tabindex:"-1",ref:"dropdown",onFocusin:t[10]||(t[10]=(...a)=>e.handleFocusIn&&e.handleFocusIn(...a)),onFocusout:t[11]||(t[11]=(...a)=>e.handleFocusOut&&e.handleFocusOut(...a))},[T(e.$slots,"beforelist",{options:e.fo}),w("ul",{class:p(e.classList.options),id:e.ariaControls,role:"listbox"},[n.groups?(d(!0),h(X,{key:0},ie(e.fg,(a,o,s)=>(d(),h("li",{class:p(e.classList.group),key:s,id:e.ariaGroupId(a),"aria-label":e.ariaGroupLabel(e.localize(a[n.groupLabel])),"aria-selected":e.isSelected(a),role:"option"},[a.__CREATE__?m("v-if",!0):(d(),h("div",{key:0,class:p(e.classList.groupLabel(a)),"data-pointed":e.isPointed(a),onMouseenter:u=>e.setPointer(a,o),onClick:u=>e.handleGroupClick(a)},[T(e.$slots,"grouplabel",{group:a,isSelected:e.isSelected,isPointed:e.isPointed},()=>[w("span",{innerHTML:e.localize(a[n.groupLabel])},null,8,cv)])],42,uv)),w("ul",{class:p(e.classList.groupOptions),"aria-label":e.ariaGroupLabel(e.localize(a[n.groupLabel])),role:"group"},[(d(!0),h(X,null,ie(a.__VISIBLE__,(u,f,S)=>(d(),h("li",{class:p(e.classList.option(u,a)),"data-pointed":e.isPointed(u),"data-selected":e.isSelected(u)||void 0,key:S,onMouseenter:M=>e.setPointer(u),onClick:M=>e.handleOptionClick(u),id:e.ariaOptionId(u),"aria-selected":e.isSelected(u),"aria-label":e.ariaOptionLabel(e.localize(u[n.label])),role:"option"},[T(e.$slots,"option",{option:u,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search},()=>[w("span",null,Se(e.localize(u[n.label])),1)])],42,fv))),128))],10,pv)],10,dv))),128)):(d(!0),h(X,{key:1},ie(e.fo,(a,o,s)=>(d(),h("li",{class:p(e.classList.option(a)),"data-pointed":e.isPointed(a),"data-selected":e.isSelected(a)||void 0,key:s,onMouseenter:u=>e.setPointer(a),onClick:u=>e.handleOptionClick(a),id:e.ariaOptionId(a),"aria-selected":e.isSelected(a),"aria-label":e.ariaOptionLabel(e.localize(a[n.label])),role:"option"},[T(e.$slots,"option",{option:a,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search},()=>[w("span",null,Se(e.localize(a[n.label])),1)])],42,vv))),128))],10,sv),e.noOptions?T(e.$slots,"nooptions",{key:0},()=>[w("div",{class:p(e.classList.noOptions),innerHTML:e.localize(n.noOptionsText)},null,10,gv)]):m("v-if",!0),e.noResults?T(e.$slots,"noresults",{key:1},()=>[w("div",{class:p(e.classList.noResults),innerHTML:e.localize(n.noResultsText)},null,10,mv)]):m("v-if",!0),n.infinite&&e.hasMore?(d(),h("div",{key:2,class:p(e.classList.inifinite),ref:"infiniteLoader"},[T(e.$slots,"infinite",{},()=>[w("span",{class:p(e.classList.inifiniteSpinner)},null,2)])],2)):m("v-if",!0),T(e.$slots,"afterlist",{options:e.fo})],42,ov)],8,["to","disabled"])),m(" Hacky input element to show HTML5 required warning "),n.required?(d(),h("input",{key:0,class:p(e.classList.fakeInput),tabindex:"-1",value:e.textValue,required:""},null,10,hv)):m("v-if",!0),m(" Native input support "),n.nativeSupport?(d(),h(X,{key:1},[n.mode=="single"?(d(),h("input",{key:0,type:"hidden",name:n.name,value:e.plainValue!==void 0?e.plainValue:""},null,8,bv)):(d(!0),h(X,{key:1},ie(e.plainValue,(a,o)=>(d(),h("input",{type:"hidden",name:`${n.name}[]`,value:a,key:o},null,8,wv))),128))],64)):m("v-if",!0),m(" Screen reader assistive text "),n.searchable&&e.hasSelected?(d(),h("div",{key:2,class:p(e.classList.assist),id:e.ariaAssist,"aria-hidden":"true"},Se(e.ariaLabel),11,yv)):m("v-if",!0),m(" Create height for empty input "),w("div",{class:p(e.classList.spacer)},null,2)],42,ev)}br.render=kv;br.__file="node_modules/@vueform/multiselect/src/Multiselect.vue";var Na={};const Cv=["name","id","disabled"],Av=["value"];function Ev(e,t,n,r,i,l){const a=se("ElementLabelFloating"),o=se("Multiselect");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[e.hasFloating&&!e.empty?(d(),A(a,{key:0,visible:!e.empty},null,8,["visible"])):m("v-if",!0),m(" Native select "),e.isNative?(d(),h("div",{key:1,class:p(e.classes.inputWrapper)},[ye(w("select",q({"onUpdate:modelValue":t[0]||(t[0]=s=>e.value=s),class:e.classes.input,name:e.name,id:e.fieldId,multiple:!0,disabled:e.isDisabled},{...e.attrs,...e.aria},{ref:"input"}),[(d(!0),h(X,null,ie(e.resolvedOptions,(s,u)=>(d(),h("option",{value:s.value,key:u},Se(s.label),9,Av))),128))],16,Cv),[[Co,e.value]]),e.placeholder&&e.empty&&!e.isDisabled&&e.type=="select"?(d(),h("span",{key:0,class:p(e.classes.inputPlaceholder)},Se(e.Placeholder),3)):m("v-if",!0)],2)):(d(),h(X,{key:2},[m(" @vueform/multiselect copmonent "),xe(o,q(e.fieldOptions,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=s=>e.value=s),classes:e.classes.select,id:e.fieldId,name:e.name,options:e.resolvedOptions,disabled:e.isDisabled,placeholder:e.Placeholder,attrs:e.attrs,aria:e.aria,locale:e.form$.locale$,onSelect:e.handleSelect,onDeselect:e.handleDeselect,onSearchChange:e.handleSearchChange,onTag:e.handleTag,onOpen:e.handleOpen,onClose:e.handleClose,onClear:e.handleClear,onPaste:e.handlePaste,ref:"input"}),Oe({_:2},[ie({option:"option",noresults:"no-results",nooptions:"no-options",afterlist:"after-list",beforelist:"before-list",placeholder:"placeholder",grouplabel:"group-label",caret:"caret",clear:"clear",spinner:"spinner",default:"default"},(s,u)=>({name:u,fn:N(f=>[T(e.$slots,s,q(f,{el$:e.el$}),()=>[(d(),A(F(e.fieldSlots[s]),q(f,{el$:e.el$}),null,16,["el$"]))])])})),e.fieldOptions.mode=="multiple"?{name:"multiplelabel",fn:N(({values:s})=>[T(e.$slots,"multiple-label",{values:s,el$:e.el$},()=>[(d(),A(F(e.fieldSlots["multiple-label"]),{values:s,el$:e.el$},null,8,["values","el$"]))])]),key:"0"}:void 0]),1040,["modelValue","classes","id","name","options","disabled","placeholder","attrs","aria","locale","onSelect","onDeselect","onSearchChange","onTag","onOpen","onClose","onClear","onPaste"])],2112))]),_:2},[ie(e.elementSlots,(s,u)=>({name:u,fn:N(()=>[T(e.$slots,u,{el$:e.el$},()=>[(d(),A(F(s),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Na.render=Ev;Na.__file="themes/blank/templates/elements/MultiselectElement.vue";var ws={name:"MultiselectElement",components:{Multiselect:br},render:Na.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-input vf-native-multiselect",input_enabled:"",input_disabled:"",input_success:"vf-input-success",input_danger:"vf-input-danger",input_sm:"vf-input-sm",input_md:"",input_lg:"vf-input-lg",inputWrapper:"vf-native-multiselect-wrapper",select:{multipleLabel:"vf-multiselect-multiple-label",multipleLabel_sm:"vf-multiselect-multiple-label-sm",multipleLabel_md:"",multipleLabel_lg:"vf-multiselect-multiple-label-lg",multipleLabel_noClear:"vf-multiselect-multiple-label-no-clear",multipleLabel_noCaret:"vf-multiselect-multiple-label-no-caret",container:"vf-multiselect",container_enabled:"",container_disabled:"vf-multiselect-disabled",container_success:"vf-multiselect-success",container_danger:"vf-multiselect-danger",container_sm:"vf-multiselect-sm",container_md:"",container_lg:"vf-multiselect-lg",containerDisabled:"",containerOpen:"vf-multiselect-open",containerOpenTop:"vf-multiselect-open-top",containerActive:"vf-multiselect-active",containerActive_enabled:"",wrapper:"vf-multiselect-wrapper",wrapper_sm:"vf-multiselect-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-multiselect-wrapper-lg",search:"vf-multiselect-search",search_sm:"vf-multiselect-search-sm",search_md:"",search_lg:"vf-multiselect-search-lg",placeholder:"vf-multiselect-placeholder",placeholder_sm:"vf-multiselect-placeholder-sm",placeholder_md:"",placeholder_lg:"vf-multiselect-placeholder-lg",caret:"vf-multiselect-caret",caret_sm:"vf-multiselect-caret-sm",caret_md:"",caret_lg:"vf-multiselect-caret-lg",caretOpen:"vf-multiselect-caret-open",clear:"vf-multiselect-clear",clear_sm:"vf-multiselect-clear-sm",clear_md:"",clear_lg:"vf-multiselect-clear-lg",clearIcon:"vf-multiselect-clear-icon",spinner:"vf-multiselect-spinner",spinner_sm:"vf-multiselect-spinner-sm",spinner_md:"",spinner_lg:"vf-multiselect-spinner-lg",infinite:"vf-multiselect-infinite",infinite_sm:"vf-multiselect-infinite-sm",infinite_md:"",infinite_lg:"vf-multiselect-infinite-lg",infiniteSpinner:"vf-multiselect-infinite-spinner",dropdown:"vf-multiselect-dropdown",dropdown_sm:"vf-multiselect-dropdown-sm",dropdown_md:"",dropdown_lg:"vf-multiselect-dropdown-lg",dropdownTop:"vf-multiselect-dropdown-top",dropdownTop_sm:"vf-multiselect-dropdown-top-sm",dropdownTop_md:"",dropdownTop_lg:"vf-multiselect-dropdown-top-lg",dropdownHidden:"vf-multiselect-dropdown-hidden",options:"vf-multiselect-options",optionsTop:"vf-multiselect-options-top",group:"vf-multiselect-group",groupLabel:"vf-multiselect-group-label",groupLabel_sm:"vf-multiselect-group-label-sm",groupLabel_md:"",groupLabel_lg:"vf-multiselect-group-label-lg",groupLabelPointable:"vf-multiselect-group-label-pointable",groupLabelPointed:"vf-multiselect-group-label-pointed",groupLabelSelected:"vf-multiselect-group-label-selected",groupLabelDisabled:"vf-multiselect-group-label-disabled",groupLabelSelectedPointed:"vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",groupLabelSelectedDisabled:"vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",groupOptions:"vf-multiselect-group-options",option:"vf-multiselect-option",option_sm:"vf-multiselect-option-sm",option_md:"",option_lg:"vf-multiselect-option-lg",optionPointed:"vf-multiselect-option-pointed",optionSelected:"vf-multiselect-option-selected",optionDisabled:"vf-multiselect-option-disabled",optionSelectedPointed:"vf-multiselect-option-selected vf-multiselect-option-pointed",optionSelectedDisabled:"vf-multiselect-option-selected vf-multiselect-option-disabled",noOptions:"vf-multiselect-no-options",noOptions_sm:"vf-multiselect-no-options-sm",noOptions_md:"",noOptions_lg:"vf-multiselect-no-options-lg",noResults:"vf-multiselect-no-results",noResults_sm:"vf-multiselect-no-results-sm",noResults_md:"",noResults_lg:"vf-multiselect-no-results-lg",fakeInput:"vf-multiselect-fake-input",assist:"vf-assistive-text",spacer:"vf-multiselect-spacer",spacer_sm:"vf-multiselect-spacer-sm",spacer_md:"",spacer_lg:"vf-multiselect-spacer-lg",$container:(e,{Size:t,isDanger:n,isSuccess:r,isDisabled:i})=>[e.select.container,e.select[`container_${t}`],i?e.select.container_disabled:null,!i&&!r&&!n?e.select.container_enabled:null,!i&&n?e.select.container_danger:null,!i&&r?e.select.container_success:null],$containerActive:(e,{Size:t,isDanger:n,isSuccess:r,isDisabled:i})=>[e.select.containerActive,e.select[`container_${t}`],!i&&!r&&!n?e.select.containerActive_enabled:null],$wrapper:(e,{Size:t})=>[e.select.wrapper,e.select[`wrapper_${t}`]],$search:(e,{Size:t})=>[e.select.search,e.select[`search_${t}`]],$placeholder:(e,{Size:t})=>[e.select.placeholder,e.select[`placeholder_${t}`]],$caret:(e,{Size:t})=>[e.select.caret,e.select[`caret_${t}`]],$clear:(e,{Size:t})=>[e.select.clear,e.select[`clear_${t}`]],$spinner:(e,{Size:t})=>[e.select.spinner,e.select[`spinner_${t}`]],$infinite:(e,{Size:t})=>[e.select.infinite,e.select[`infinite_${t}`]],$dropdown:(e,{Size:t})=>[e.select.dropdown,e.select[`dropdown_${t}`]],$dropdownTop:(e,{Size:t})=>[e.select.dropdownTop,e.select[`dropdownTop_${t}`]],$groupLabel:(e,{Size:t})=>[e.select.groupLabel,e.select[`groupLabel_${t}`]],$option:(e,{Size:t})=>[e.select.option,e.select[`option_${t}`]],$spacer:(e,{Size:t})=>[e.select.spacer,e.select[`spacer_${t}`]],$noOptions:(e,{Size:t})=>[e.select.noOptions,e.select[`noOptions_${t}`]],$noResults:(e,{Size:t})=>[e.select.noResults,e.select[`noResults_${t}`]],$multipleLabel:(e,{Size:t,canClear:n,caret:r})=>[e.select.multipleLabel,e.select[`multipleLabel_${t}`],n?null:e.select.multipleLabel_noClear,r?null:e.select.multipleLabel_noCaret]},$input:(e,{isDisabled:t,Size:n,isDanger:r,isSuccess:i})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!i&&!r?e.input_enabled:null,!t&&r?e.input_danger:null,!t&&i?e.input_success:null]}}}},Lv=`/* Some styles are contained in Vueform.vue & SelectElement.vue */

.vf-multiselect-multiple-label {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  background: transparent;
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-clear {
  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-right: var(--vf-px-input);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 20px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-clear {
  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-right: var(--vf-px-input-sm);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-clear {
  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-right: var(--vf-px-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-multiple-label,
.vf-floating-wrapper ~ div .vf-multiselect-multiple-label {
  padding-top: calc(var(--vf-py-input) + var(--vf-floating-top) / 2);
  padding-bottom: calc(var(--vf-py-input) - var(--vf-floating-top) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-multiple-label-sm,
.vf-floating-wrapper ~ div .vf-multiselect-multiple-label-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-floating-top-sm) / 2);
  padding-bottom: calc(var(--vf-py-input-sm) - var(--vf-floating-top-sm) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-multiple-label-lg,
.vf-floating-wrapper ~ div .vf-multiselect-multiple-label-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

[dir=rtl] .vf-multiselect-multiple-label {
  padding-left: calc(var(--vf-px-input) * 2.5 + 20px);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-clear {
  padding-left: calc(var(--vf-px-input) * 1.5 + 10px);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm {
  padding-left: calc(var(--vf-px-input-sm) * 2.5 + 20px);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-clear {
  padding-left: calc(var(--vf-px-input-sm) * 1.5 + 10px);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg {
  padding-left: calc(var(--vf-px-input-lg) * 2.5 + 20px);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-clear {
  padding-left: calc(var(--vf-px-input-lg) * 1.5 + 10px);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
}`;Y(Lv);ws.__file="themes/vueform/templates/elements/MultiselectElement.vue";var Ha={};const xv=["aria-labelledby"];function Sv(e,t,n,r,i,l){return d(),A(F(e.elementLayout),{multiple:!0,ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.wrapper),role:"group","aria-labelledby":e.labelId},[T(e.$slots,"default",{},()=>[(d(!0),h(X,null,ie(e.children,(a,o)=>(d(),A(F(e.component(a)),q({ref_for:!0},a,{embed:e.embed,name:o,key:o,onRemove:t[0]||(t[0]=s=>e.$emit("remove",s))}),null,16,["embed","name"]))),128))])],10,xv)]),_:2},[ie(e.elementSlots,(a,o)=>({name:o,fn:N(()=>[T(e.$slots,o,{el$:e.el$},()=>[(d(),A(F(a),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Ha.render=Sv;Ha.__file="themes/blank/templates/elements/ObjectElement.vue";var ys={name:"ObjectElement",render:Ha.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-row",wrapper_sm:"vf-row-sm",wrapper_md:"",wrapper_lg:"vf-row-lg",wrapper_embed:"vf-row-embed",$wrapper:(e,{Size:t,embed:n})=>[e.wrapper,e[`wrapper_${t}`],n?e.wrapper_embed:null]}}}},Tv="/* Some styles are contained in Vueform.vue */";Y(Tv);ys.__file="themes/vueform/templates/elements/ObjectElement.vue";var Ua={};const Rv=["value","type","name","id","placeholder","autocomplete","disabled","readonly"];function Iv(e,t,n,r,i,l){const a=se("ElementAddonOptions"),o=se("ElementLabelFloating"),s=se("ElementLoader");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.inputContainer)},[w("div",{class:p(e.classes.optionsWrapper)},[xe(a,{options:e.addonOptions,placeholder:e.addonPlaceholder,aria:e.optionsAria,onSelect:e.handleOptionSelect,onOpen:e.handleOpen,onClose:e.handleClose,ref:"options$"},null,8,["options","placeholder","aria","onSelect","onOpen","onClose"])],2),e.hasFloating&&!e.empty?(d(),A(o,{key:0,visible:!e.empty},null,8,["visible"])):m("v-if",!0),e.isLoading?(d(),A(s,{key:1})):m("v-if",!0),w("input",q({value:e.model,type:e.inputType,name:e.name,id:e.fieldId,class:e.classes.input,placeholder:e.Placeholder,autocomplete:e.autocomplete,disabled:e.isDisabled,readonly:e.isReadonly},{...e.attrs,...e.aria},{onKeydown:t[0]||(t[0]=(...u)=>e.handleKeydown&&e.handleKeydown(...u)),onInput:t[1]||(t[1]=(...u)=>e.handleInput&&e.handleInput(...u)),onSelect:t[2]||(t[2]=(...u)=>e.handleInput&&e.handleInput(...u)),onBlur:t[3]||(t[3]=(...u)=>e.handleBlur&&e.handleBlur(...u)),onFocus:t[4]||(t[4]=(...u)=>e.handleFocus&&e.handleFocus(...u)),ref:"input"}),null,16,Rv)],2)]),_:2},[ie(e.elementSlots,(u,f)=>({name:f,fn:N(()=>[T(e.$slots,f,{el$:e.el$},()=>[(d(),A(F(u),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Ua.render=Iv;Ua.__file="themes/blank/templates/elements/PhoneElement.vue";var ks={name:"PhoneElement",render:Ua.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",optionsWrapper:"vf-phone-options-wrapper",optionsWrapper_sm:"vf-phone-options-wrapper-sm",optionsWrapper_md:"",optionsWrapper_lg:"vf-phone-options-wrapper-lg",optionWrapper:"",option:"vf-phone-option",option_active:"vf-phone-option-active",optionWrapper:"vf-phone-option-wrapper",flag:"vf-phone-flag",country:"vf-phone-country",number:"vf-phone-number",placeholder:"vf-phone-flag vf-phone-flag-placeholder",$optionsWrapper:(e,{Size:t})=>[e.optionsWrapper,e[`optionsWrapper_${t}`]],$option:e=>t=>[e.option,t?e.option_active:null],$inputContainer:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.inputContainer,e[`inputContainer_${n}`],t?e.inputContainer_disabled:null,!t&&!r&&!i?e.inputContainer_default:null,!t&&l?e.inputContainer_focused:null,!t&&r?e.inputContainer_success:null,!t&&i?e.inputContainer_danger:null],$input:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!r&&!i&&!l?e.input_enabled:null,!t&&l&&!r&&!i?e.input_focused:null,!t&&i?e.input_danger:null,!t&&r?e.input_success:null]}}}},Bv=`/* Some styles are contained in Vueform.vue */

.vf-phone-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.3125rem 0.75rem;
  white-space: nowrap;
}

.vf-phone-option-active {
  background: var(--vf-bg-selected);
}

.vf-phone-options-wrapper {
  display: flex;
  align-items: center;
  margin-left: var(--vf-px-input);
}

.vf-phone-options-wrapper.vf-phone-options-wrapper-sm {
  margin-left: var(--vf-px-input-sm);
}

.vf-phone-options-wrapper.vf-phone-options-wrapper-lg {
  margin-left: var(--vf-px-input-lg);
}

.vf-phone-option-wrapper {
  display: flex;
  align-items: center;
}

.vf-phone-flag {
  background: no-repeat 0 0;
  background-image: url("data:image/png;base64,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");
  background-size: 24px 4716px;
  width: 24px;
  height: 16px;
  overflow: hidden;
}

.vf-phone-flag-placeholder {
  opacity: 0.6;
}

.vf-phone-country {
  margin-left: 0.75rem;
  font-weight: 600;
  font-size: 15px;
  display: flex;
}

.vf-phone-number {
  margin-left: 0.5rem;
  color: var(--vf-color-muted);
}

[dir=rtl] .vf-addon-options-wrapper {
  margin-left: 0;
  margin-right: var(--vf-px-input);
}

[dir=rtl] .vf-addon-options-wrapper.vf-addon-options-wrapper-sm {
  margin-left: 0;
  margin-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-addon-options-wrapper.vf-addon-options-wrapper-lg {
  margin-left: 0;
  margin-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-phone-country {
  margin-left: 0;
  margin-right: 0.75rem;
}

[dir=rtl] .vf-phone-number {
  margin-left: 0;
  margin-right: 0.5rem;
}`;Y(Bv);ks.__file="themes/vueform/templates/elements/PhoneElement.vue";var ja={};const Mv=["value","name","id","disabled"],Dv=["innerHTML"];function Ov(e,t,n,r,i,l){return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("label",{class:p(e.classes.wrapper)},[ye(w("input",q({type:"radio","onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a)},e.aria,{value:e.radioValue,class:e.classes.input,name:e.inputName,id:e.fieldId,disabled:e.isDisabled,ref:"input"}),null,16,Mv),[[Qr,e.value]]),m(" If label is HTML "),e.Text?(d(),h("span",{key:0,class:p(e.classes.text),innerHTML:e.Text},null,10,Dv)):(d(),h(X,{key:1},[m(" If label is slot "),w("span",{class:p(e.classes.text)},[T(e.$slots,"default",{el$:e.el$},()=>[(d(),A(F(e.fieldSlots.default),{el$:e.el$},null,8,["el$"]))])],2)],2112))],2)]),_:2},[ie(e.elementSlots,(a,o)=>({name:o,fn:N(()=>[T(e.$slots,o,{el$:e.el$},()=>[(d(),A(F(a),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}ja.render=Ov;ja.__file="themes/blank/templates/elements/RadioElement.vue";var Cs={name:"RadioElement",render:ja.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-radio-wrapper",wrapper_sm:"vf-radio-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radio-wrapper-lg",wrapper_left:"vf-radio-wrapper-left",wrapper_right:"vf-radio-wrapper-right",input:"vf-radio",input_enabled:"",input_disabled:"",input_danger:"vf-radio-danger",input_sm:"vf-radio-sm",input_md:"",input_lg:"vf-radio-lg",input_left:"vf-radio-left",input_right:"vf-radio-right",input_standalone:"vf-radio-standalone",text:"vf-radio-text",text_left:"vf-radio-text-left",text_right:"vf-radio-text-right",$wrapper:(e,{Size:t,align:n})=>[e.wrapper,e[`wrapper_${t}`],n==="left"?e.wrapper_left:null,n==="right"?e.wrapper_right:null],$input:(e,{isDisabled:t,Size:n,isDanger:r,align:i,standalone:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:e.input_enabled,!t&&r?e.input_danger:null,i==="left"?e.input_left:null,i==="right"?e.input_right:null,l?e.input_standalone:null],$text:(e,{align:t})=>[e.text,t==="left"?e.text_left:null,t==="right"?e.text_right:null]}}}},$v="/* Some styles are contained in Vueform.vue */";Y($v);Cs.__file="themes/vueform/templates/elements/RadioElement.vue";var wr={};const Fv=["aria-labelledby"];function zv(e,t,n,r,i,l){const a=se("RadiogroupRadio");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.wrapper),"aria-labelledby":e.labelId,role:"radiogroup"},[(d(!0),h(X,null,ie(e.resolvedOptions,(o,s,u)=>(d(),A(a,{items:e.resolvedOptions,index:s,item:o,value:o.value,key:u,attrs:e.aria},{default:N(f=>[T(e.$slots,"radio",q({ref_for:!0},f,{el$:e.el$}),()=>[(d(),A(F(e.fieldSlots.radio),q({ref_for:!0},f,{el$:e.el$}),null,16,["el$"]))])]),_:3},8,["items","index","item","value","attrs"]))),128))],10,Fv)]),_:2},[ie(e.elementSlots,(o,s)=>({name:s,fn:N(()=>[T(e.$slots,s,{el$:e.el$},()=>[(d(),A(F(o),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}wr.render=zv;wr.__file="themes/blank/templates/elements/RadiogroupElement.vue";var As={name:"RadiogroupElement",render:wr.render,data(){return{merge:!0,defaultClasses:{container:"vf-radiogroup-view-default",wrapper:"vf-radiogroup-wrapper",wrapper_sm:"vf-radiogroup-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radiogroup-wrapper-lg",$wrapper:(e,{Size:t})=>[e.wrapper,e[`wrapper_${t}`]]}}}},Pv=`.vf-radiogroup-wrapper {
  cursor: pointer;
}

.vf-radiogroup-wrapper .vf-radio-container {
  padding-top: 0;
}`;Y(Pv);As.__file="themes/vueform/templates/elements/RadiogroupElement.vue";var Es={name:"RadiogroupElement",render:wr.render,data(){return{merge:!0,defaultClasses:{container:"vf-radiogroup-view-tabs vf-text-type",wrapper:"vf-radiogroup-tabs-wrapper",wrapper_sm:"vf-radiogroup-tabs-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radiogroup-tabs-wrapper-lg",$wrapper:(e,{Size:t})=>[e.wrapper,e[`wrapper_${t}`]]}}}},Nv=`.vf-radiogroup-tabs-wrapper {
  display: grid;
  grid-auto-flow: column;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-radiogroup-tabs-wrapper.vf-radiogroup-tabs-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-radiogroup-tabs-wrapper.vf-radiogroup-tabs-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;Y(Nv);Es.__file="themes/vueform/templates/elements/RadiogroupElement_tabs.vue";var Ls={name:"RadiogroupElement",render:wr.render,data(){return{merge:!0,defaultClasses:{container:"vf-radiogroup-view-blocks",wrapper:"vf-radiogroup-blocks-wrapper",wrapper_sm:"vf-radiogroup-blocks-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radiogroup-blocks-wrapper-lg",$wrapper:(e,{Size:t})=>[e.wrapper,e[`wrapper_${t}`]]}}}},Hv=`.vf-radiogroup-blocks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-radiogroup-blocks-wrapper.vf-radiogroup-blocks-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-radiogroup-blocks-wrapper.vf-radiogroup-blocks-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;Y(Hv);Ls.__file="themes/vueform/templates/elements/RadiogroupElement_blocks.vue";var Wa={};const Uv=["name","id","disabled"],jv=["value","disabled"];function Wv(e,t,n,r,i,l){const a=se("ElementLabelFloating"),o=se("Multiselect");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[e.hasFloating&&!e.empty?(d(),A(a,{key:0,visible:!e.empty},null,8,["visible"])):m("v-if",!0),m(" Native select "),e.isNative?(d(),h("div",{key:1,class:p(e.classes.inputWrapper)},[ye(w("select",q({"onUpdate:modelValue":t[0]||(t[0]=s=>e.value=s),class:e.classes.input,name:e.name,id:e.fieldId,disabled:e.isDisabled},{...e.attrs,...e.aria},{ref:"input"}),[(d(!0),h(X,null,ie(e.resolvedOptions,(s,u)=>(d(),h("option",{value:s.value,disabled:s.disabled,key:u},Se(s.label),9,jv))),128))],16,Uv),[[Co,e.value]]),e.placeholder&&e.empty&&!e.isDisabled&&e.type=="select"?(d(),h("span",{key:0,class:p(e.classes.inputPlaceholder)},Se(e.Placeholder),3)):m("v-if",!0),w("span",{class:p(e.classes.inputCaret)},null,2)],2)):(d(),h(X,{key:2},[m(" @vueform/multiselect copmonent "),xe(o,q(e.fieldOptions,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=s=>e.value=s),classes:e.classes.select,id:e.fieldId,name:e.name,options:e.resolvedOptions,disabled:e.isDisabled,placeholder:e.Placeholder,attrs:e.attrs,aria:e.aria,locale:e.form$.locale$,onSelect:e.handleSelect,onDeselect:e.handleDeselect,onSearchChange:e.handleSearchChange,onTag:e.handleTag,onOpen:e.handleOpen,onClose:e.handleClose,onClear:e.handleClear,onPaste:e.handlePaste,ref:"input"}),Oe({_:2},[ie({option:"option",noresults:"no-results",nooptions:"no-options",afterlist:"after-list",beforelist:"before-list",placeholder:"placeholder",grouplabel:"group-label",caret:"caret",clear:"clear",spinner:"spinner",default:"default"},(s,u)=>({name:u,fn:N(f=>[T(e.$slots,s,q(f,{el$:e.el$}),()=>[(d(),A(F(e.fieldSlots[s]),q(f,{el$:e.el$}),null,16,["el$"]))])])})),e.fieldOptions.mode=="single"?{name:"singlelabel",fn:N(({value:s})=>[T(e.$slots,"single-label",{value:s,el$:e.el$},()=>[(d(),A(F(e.fieldSlots["single-label"]),{value:s,el$:e.el$},null,8,["value","el$"]))])]),key:"0"}:void 0]),1040,["modelValue","classes","id","name","options","disabled","placeholder","attrs","aria","locale","onSelect","onDeselect","onSearchChange","onTag","onOpen","onClose","onClear","onPaste"])],2112))]),_:2},[ie(e.elementSlots,(s,u)=>({name:u,fn:N(()=>[T(e.$slots,u,{el$:e.el$},()=>[(d(),A(F(s),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Wa.render=Wv;Wa.__file="themes/blank/templates/elements/SelectElement.vue";var xs={name:"SelectElement",render:Wa.render,components:{Multiselect:br},data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-input vf-native-select",input_enabled:"",input_disabled:"",input_success:"vf-input-success",input_danger:"vf-input-danger",input_sm:"vf-input-sm",input_md:"",input_lg:"vf-input-lg",inputWrapper:"vf-native-select-wrapper",inputWrapper_sm:"vf-native-select-wrapper-sm",inputWrapper_md:"",inputWrapper_lg:"vf-native-select-wrapper-lg",inputPlaceholder:"vf-native-select-placeholder",inputPlaceholder_sm:"vf-native-select-placeholder-sm",inputPlaceholder_md:"",inputPlaceholder_lg:"vf-native-select-placeholder-lg",inputCaret:"vf-native-select-caret",inputCaret_sm:"vf-native-select-caret-sm",inputCaret_md:"",inputCaret_lg:"vf-native-select-caret-lg",select:{singleLabel:"vf-multiselect-single-label",singleLabel_sm:"vf-multiselect-single-label-sm",singleLabel_md:"",singleLabel_lg:"vf-multiselect-single-label-lg",singleLabel_noClear:"vf-multiselect-single-label-no-clear",singleLabel_noCaret:"vf-multiselect-single-label-no-caret",singleLabelText:"vf-multiselect-single-label-text",singleLabelText_truncate:"vf-multiselect-single-label-text-truncate",container:"vf-multiselect",container_enabled:"",container_disabled:"vf-multiselect-disabled",container_success:"vf-multiselect-success",container_danger:"vf-multiselect-danger",container_sm:"vf-multiselect-sm",container_md:"",container_lg:"vf-multiselect-lg",containerDisabled:"",containerOpen:"vf-multiselect-open",containerOpenTop:"vf-multiselect-open-top",containerActive:"vf-multiselect-active",containerActive_enabled:"",wrapper:"vf-multiselect-wrapper",wrapper_sm:"vf-multiselect-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-multiselect-wrapper-lg",search:"vf-multiselect-search",search_sm:"vf-multiselect-search-sm",search_md:"",search_lg:"vf-multiselect-search-lg",placeholder:"vf-multiselect-placeholder",placeholder_sm:"vf-multiselect-placeholder-sm",placeholder_md:"",placeholder_lg:"vf-multiselect-placeholder-lg",caret:"vf-multiselect-caret",caret_sm:"vf-multiselect-caret-sm",caret_md:"",caret_lg:"vf-multiselect-caret-lg",caretOpen:"vf-multiselect-caret-open",clear:"vf-multiselect-clear",clear_sm:"vf-multiselect-clear-sm",clear_md:"",clear_lg:"vf-multiselect-clear-lg",clearIcon:"vf-multiselect-clear-icon",spinner:"vf-multiselect-spinner",spinner_sm:"vf-multiselect-spinner-sm",spinner_md:"",spinner_lg:"vf-multiselect-spinner-lg",infinite:"vf-multiselect-infinite",infinite_sm:"vf-multiselect-infinite-sm",infinite_md:"",infinite_lg:"vf-multiselect-infinite-lg",infiniteSpinner:"vf-multiselect-infinite-spinner",dropdown:"vf-multiselect-dropdown",dropdown_sm:"vf-multiselect-dropdown-sm",dropdown_md:"",dropdown_lg:"vf-multiselect-dropdown-lg",dropdownTop:"vf-multiselect-dropdown-top",dropdownTop_sm:"vf-multiselect-dropdown-top-sm",dropdownTop_md:"",dropdownTop_lg:"vf-multiselect-dropdown-top-lg",dropdownHidden:"vf-multiselect-dropdown-hidden",options:"vf-multiselect-options",optionsTop:"vf-multiselect-options-top",group:"vf-multiselect-group",groupLabel:"vf-multiselect-group-label",groupLabel_sm:"vf-multiselect-group-label-sm",groupLabel_md:"",groupLabel_lg:"vf-multiselect-group-label-lg",groupLabelPointable:"vf-multiselect-group-label-pointable",groupLabelPointed:"vf-multiselect-group-label-pointed",groupLabelSelected:"vf-multiselect-group-label-selected",groupLabelDisabled:"vf-multiselect-group-label-disabled",groupLabelSelectedPointed:"vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",groupLabelSelectedDisabled:"vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",groupOptions:"vf-multiselect-group-options",option:"vf-multiselect-option",option_sm:"vf-multiselect-option-sm",option_md:"",option_lg:"vf-multiselect-option-lg",optionPointed:"vf-multiselect-option-pointed",optionSelected:"vf-multiselect-option-selected",optionDisabled:"vf-multiselect-option-disabled",optionSelectedPointed:"vf-multiselect-option-selected vf-multiselect-option-pointed",optionSelectedDisabled:"vf-multiselect-option-selected vf-multiselect-option-disabled",noOptions:"vf-multiselect-no-options",noOptions_sm:"vf-multiselect-no-options-sm",noOptions_md:"",noOptions_lg:"vf-multiselect-no-options-lg",noResults:"vf-multiselect-no-results",noResults_sm:"vf-multiselect-no-results-sm",noResults_md:"",noResults_lg:"vf-multiselect-no-results-lg",fakeInput:"vf-multiselect-fake-input",assist:"vf-assistive-text",spacer:"vf-multiselect-spacer",spacer_sm:"vf-multiselect-spacer-sm",spacer_md:"",spacer_lg:"vf-multiselect-spacer-lg",$container:(e,{Size:t,isDanger:n,isSuccess:r,isDisabled:i})=>[e.select.container,e.select[`container_${t}`],i?e.select.container_disabled:null,!i&&!r&&!n?e.select.container_enabled:null,!i&&n?e.select.container_danger:null,!i&&r?e.select.container_success:null],$containerActive:(e,{Size:t,isDanger:n,isSuccess:r,isDisabled:i})=>[e.select.containerActive,e.select[`container_${t}`],!i&&!r&&!n?e.select.containerActive_enabled:null],$wrapper:(e,{Size:t})=>[e.select.wrapper,e.select[`wrapper_${t}`]],$search:(e,{Size:t})=>[e.select.search,e.select[`search_${t}`]],$placeholder:(e,{Size:t})=>[e.select.placeholder,e.select[`placeholder_${t}`]],$caret:(e,{Size:t})=>[e.select.caret,e.select[`caret_${t}`]],$clear:(e,{Size:t})=>[e.select.clear,e.select[`clear_${t}`]],$spinner:(e,{Size:t})=>[e.select.spinner,e.select[`spinner_${t}`]],$infinite:(e,{Size:t})=>[e.select.infinite,e.select[`infinite_${t}`]],$dropdown:(e,{Size:t})=>[e.select.dropdown,e.select[`dropdown_${t}`]],$dropdownTop:(e,{Size:t})=>[e.select.dropdownTop,e.select[`dropdownTop_${t}`]],$groupLabel:(e,{Size:t})=>[e.select.groupLabel,e.select[`groupLabel_${t}`]],$option:(e,{Size:t})=>[e.select.option,e.select[`option_${t}`]],$spacer:(e,{Size:t})=>[e.select.spacer,e.select[`spacer_${t}`]],$noOptions:(e,{Size:t})=>[e.select.noOptions,e.select[`noOptions_${t}`]],$noResults:(e,{Size:t})=>[e.select.noResults,e.select[`noResults_${t}`]],$singleLabel:(e,{Size:t,canClear:n,caret:r})=>[e.select.singleLabel,e.select[`singleLabel_${t}`],n?null:e.select.singleLabel_noClear,r?null:e.select.singleLabel_noCaret],$singleLabelText:(e,{truncate:t})=>[e.select.singleLabelText,t?e.select.singleLabelText_truncate:null]},$input:(e,{isDisabled:t,Size:n,isDanger:r,isSuccess:i,caret:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!i&&!r?e.input_enabled:null,!t&&r?e.input_danger:null,!t&&i?e.input_success:null],$inputWrapper:(e,{Size:t})=>[e.inputWrapper,e[`inputWrapper_${t}`]],$inputPlaceholder:(e,{Size:t})=>[e.inputPlaceholder,e[`inputPlaceholder_${t}`]],$inputCaret:(e,{Size:t})=>[e.inputCaret,e[`inputCaret_${t}`]]}}}},Vv=`.vf-native-select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.vf-native-select::-webkit-search-decoration, .vf-native-select::-webkit-search-cancel-button, .vf-native-select::-webkit-search-results-button, .vf-native-select::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-input.vf-native-select {
  padding-right: calc(var(--vf-px-input) * 2);
}

.vf-input-sm.vf-native-select {
  padding-right: calc(var(--vf-px-input-sm) * 2);
}

.vf-input-lg.vf-native-select {
  padding-right: calc(var(--vf-px-input-lg) * 2);
}

.vf-native-select-wrapper {
  position: relative;
}

.vf-native-select-wrapper.vf-native-select-wrapper-sm:before {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-native-select-wrapper.vf-native-select-wrapper-lg:before {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-native-select-placeholder {
  position: absolute;
  top: 0;
  left: var(--vf-px-input);
  bottom: 0;
  display: flex;
  align-items: center;
  margin-left: 1px;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: var(--vf-color-placeholder);
  cursor: default;
  pointer-events: none;
}

.vf-native-select-placeholder.vf-native-select-placeholder-sm {
  left: var(--vf-px-input-sm);
}

.vf-native-select-placeholder.vf-native-select-placeholder-lg {
  left: var(--vf-px-input-lg);
}

.vf-native-select-caret {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-bg-icon);
  position: absolute;
  right: 0;
  top: 50%;
  width: 0.625rem;
  height: 1rem;
  padding: 1px 0;
  box-sizing: content-box !important;
  display: inline-block;
  pointer-events: none;
  transform: translateY(-50%);
  transition: transform 150ms ease-in-out;
  margin-right: var(--vf-px-input);
}

.vf-native-select-caret.vf-native-select-caret-sm {
  margin-right: var(--vf-px-input-sm);
}

.vf-native-select-caret.vf-native-select-caret-lg {
  margin-right: var(--vf-px-input-lg);
}

/* @vueform/multiselect styles */

.vf-multiselect {
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-input);
  min-height: var(--vf-min-height-input);
  border-radius: var(--vf-radius-input);
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-style: solid;
}

.vf-multiselect.vf-multiselect-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect.vf-multiselect-open-top {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-multiselect.vf-multiselect-disabled {
  cursor: default;
  background-color: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  pointer-events: none;
}

.vf-multiselect.vf-multiselect-success {
  background-color: var(--vf-bg-input-success);
  color: var(--vf-color-input-success);
  border-color: var(--vf-border-color-input-success);
}

.vf-multiselect.vf-multiselect-danger {
  background-color: var(--vf-bg-input-danger);
  color: var(--vf-color-input-danger);
  border-color: var(--vf-border-color-input-danger);
}

.vf-multiselect:hover {
  box-shadow: var(--vf-shadow-input-hover);
}

.vf-multiselect:hover:not(.vf-multiselect-success):not(.vf-multiselect-danger) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
  border-color: var(--vf-border-color-input-hover);
}

.vf-multiselect.vf-multiselect-active {
  box-shadow: var(--vf-shadow-input-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-multiselect.vf-multiselect-active:not(.vf-multiselect-success):not(.vf-multiselect-danger) {
  border-color: var(--vf-border-color-input-focus);
  background-color: var(--vf-bg-input-focus);
  color: var(--vf-color-input-focus);
}

.vf-multiselect.vf-multiselect-sm {
  min-height: var(--vf-min-height-input-sm);
  border-radius: var(--vf-radius-input-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect.vf-multiselect-lg {
  min-height: var(--vf-min-height-input-lg);
  border-radius: var(--vf-radius-input-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-multiselect-wrapper {
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  min-height: calc(var(--vf-min-height-input) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-wrapper.vf-multiselect-wrapper-sm {
  min-height: calc(var(--vf-min-height-input-sm) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-wrapper.vf-multiselect-wrapper-lg {
  min-height: calc(var(--vf-min-height-input-lg) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-single-label,
.vf-multiselect-placeholder {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  background: transparent;
  box-sizing: border-box;
  max-width: 100%;
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input-sm);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label,
.vf-floating-wrapper ~ div .vf-multiselect-single-label {
  padding-top: calc(var(--vf-py-input) + var(--vf-floating-top) / 2);
  padding-bottom: calc(var(--vf-py-input) - var(--vf-floating-top) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label-sm,
.vf-floating-wrapper ~ div .vf-multiselect-single-label-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-floating-top-sm) / 2);
  padding-bottom: calc(var(--vf-py-input-sm) - var(--vf-floating-top-sm) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label-lg,
.vf-floating-wrapper ~ div .vf-multiselect-single-label-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

.vf-multiselect-placeholder {
  color: var(--vf-color-placeholder);
}

.vf-multiselect-placeholder.vf-multiselect-placeholder-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
}

.vf-multiselect-placeholder.vf-multiselect-placeholder-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-single-label-text {
  overflow: hidden;
  display: block;
  white-space: nowrap;
  max-width: 100%;
}

.vf-multiselect-single-label-text-truncate {
  text-overflow: ellipsis;
}

.vf-multiselect-search {
  width: 100%;
  height: 100%; /* for FF */
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  outline: none;
  box-sizing: border-box;
  border: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  font-family: inherit;
  background: transparent;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  border-radius: var(--vf-radius-input);
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
  color: var(--vf-color-input);
}

.vf-multiselect-search::-webkit-search-decoration, .vf-multiselect-search::-webkit-search-cancel-button, .vf-multiselect-search::-webkit-search-results-button, .vf-multiselect-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-multiselect-search.vf-multiselect-search-sm {
  border-radius: var(--vf-radius-input-sm);
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect-search.vf-multiselect-search-lg {
  border-radius: var(--vf-radius-input-lg);
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-search-lg,
.vf-floating-wrapper ~ div .vf-multiselect-search-lg,
.vf-floating-wrapper ~ span .vf-multiselect-search-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

.vf-multiselect-spinner {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-primary);
  width: 1rem;
  height: 1rem;
  margin: 0 var(--vf-px-input) 0 0;
  animation: multiselect-spin 1s linear infinite;
  flex-shrink: 0;
  flex-grow: 0;
}

.vf-multiselect-spinner.vf-multiselect-spinner-sm {
  margin: 0 var(--vf-px-input-sm) 0 0;
}

.vf-multiselect-spinner.vf-multiselect-spinner-lg {
  margin: 0 var(--vf-px-input-lg) 0 0;
}

.vf-multiselect-inifite {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: var(--vf-min-height-input);
}

.vf-multiselect-inifite.vf-multiselect-inifite-sm {
  height: var(--vf-min-height-input-sm);
}

.vf-multiselect-inifite.vf-multiselect-inifite-lg {
  height: var(--vf-min-height-input-lg);
}

.vf-multiselect-inifite-spinner {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-primary);
  width: 1rem;
  height: 1rem;
  animation: multiselect-spin 1s linear infinite;
  flex-shrink: 0;
  flex-grow: 0;
}

.vf-multiselect-clear {
  margin: 0 var(--vf-px-input) 0 0px;
  position: relative;
  opacity: 1;
  transition: 0.3s;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
}

.vf-multiselect-clear:hover .vf-multiselect-clear-icon {
  opacity: 1;
}

.vf-multiselect-clear.vf-multiselect-clear-sm {
  margin: 0 var(--vf-px-input-sm) 0 0px;
}

.vf-multiselect-clear.vf-multiselect-clear-lg {
  margin: 0 var(--vf-px-input-lg) 0 0px;
}

.vf-multiselect-clear-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  width: 0.625rem;
  height: 1.125rem;
  display: inline-block;
  transition: 0.3s;
  opacity: 0.5;
}

.vf-multiselect-caret {
  transform: rotate(0deg);
  transition: 0.3s transform;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  width: 0.625rem;
  height: 1.125rem;
  margin: 0 var(--vf-px-input) 0 0;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  pointer-events: none;
}

.vf-multiselect-caret.vf-multiselect-caret-open {
  transform: rotate(180deg);
  pointer-events: auto;
}

.vf-multiselect-caret.vf-multiselect-caret-sm {
  margin: 0 var(--vf-px-input-sm) 0 0;
}

.vf-multiselect-caret.vf-multiselect-caret-lg {
  margin: 0 var(--vf-px-input-lg) 0 0;
}

.vf-multiselect-dropdown {
  position: absolute;
  left: calc(var(--vf-border-width-input-l) * -1);
  right: calc(var(--vf-border-width-input-r) * -1);
  bottom: 0;
  transform: translateY(100%);
  border-width: var(--vf-border-width-dropdown);
  border-style: solid;
  border-color: var(--vf-border-color-input);
  margin-top: calc(var(--vf-border-width-input-t) * -1);
  max-height: 15rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 999;
  background: var(--vf-bg-input);
  display: flex;
  flex-direction: column;
  border-radius: var(--vf-radius-input);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  outline: none;
  box-shadow: var(--vf-shadow-dropdown);
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-top {
  transform: translateY(-100%);
  top: 0;
  margin-top: 0;
  bottom: auto;
  border-radius: var(--vf-radius-input);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-hidden {
  display: none;
}

v .vf-multiselect-dropdown.vf-multiselect-dropdown-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

v .vf-multiselect-dropdown.vf-multiselect-dropdown-sm.vf-multiselect-dropdown-top-sm {
  border-radius: var(--vf-radius-input-sm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-lg.vf-multiselect-dropdown-top-lg {
  border-radius: var(--vf-radius-input-lg);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-options {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: var(--vf-color-input);
}

.vf-multiselect-group {
  padding: 0;
  margin: 0;
}

.vf-multiselect-group-label {
  font-weight: 600;
  color: #374151;
  cursor: default;
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: calc(var(--vf-py-input) * 0.5) var(--vf-px-input);
  color: var(--vf-color-input);
  background: var(--vf-bg-selected);
  filter: brightness(0.9);
}

.vf-multiselect-group-label.vf-multiselect-group-label-pointable {
  cursor: pointer;
}

.vf-multiselect-group-label.vf-multiselect-group-label-pointed {
  filter: brightness(0.95);
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected {
  background: var(--vf-primary-darker);
  color: var(--vf-color-on-primary);
  filter: brightness(1);
}

.vf-multiselect-group-label.vf-multiselect-group-label-disabled {
  background: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  cursor: not-allowed;
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected.vf-multiselect-group-label-pointed {
  opacity: 0.9;
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected.vf-multiselect-group-label-disabled {
  opacity: 0.5;
}

.vf-multiselect-group-label.vf-multiselect-group-label-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  padding: calc(var(--vf-py-input-sm) * 0.5) var(--vf-px-input-sm);
}

.vf-multiselect-group-label.vf-multiselect-group-label-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  padding: calc(var(--vf-py-input-lg) * 0.5) var(--vf-px-input-lg);
}

.vf-multiselect-group-options {
  padding: 0;
  margin: 0;
}

.vf-multiselect-option {
  padding: calc(var(--vf-py-input) + var(--vf-border-width-input-t)) var(--vf-px-input) calc(var(--vf-py-input) + var(--vf-border-width-input-t));
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.vf-multiselect-option.vf-multiselect-option-pointed {
  background: var(--vf-bg-selected);
  color: var(--vf-color-input);
}

.vf-multiselect-option.vf-multiselect-option-selected {
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
}

.vf-multiselect-option.vf-multiselect-option-disabled {
  background: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  cursor: not-allowed;
}

.vf-multiselect-option.vf-multiselect-option-selected.vf-multiselect-option-pointed {
  opacity: 0.9;
}

.vf-multiselect-option.vf-multiselect-option-selected.vf-multiselect-option-disabled {
  opacity: 0.5;
}

.vf-multiselect-option.vf-multiselect-option-sm {
  padding: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t)) var(--vf-px-input-sm) calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
}

.vf-multiselect-option.vf-multiselect-option-lg {
  padding: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t)) var(--vf-px-input-lg) calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
}

.vf-multiselect-no-options,
.vf-multiselect-no-results {
  padding: var(--vf-py-input) var(--vf-px-input);
  color: var(--vf-color-muted);
}

.vf-multiselect-no-options.vf-multiselect-no-options-sm {
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-multiselect-no-options.vf-multiselect-no-options-lg {
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-multiselect-no-results.vf-multiselect-no-results-sm {
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-multiselect-no-results.vf-multiselect-no-results-lg {
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-multiselect-fake-input {
  background: transparent;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  width: 100%;
  height: 1px;
  border: 0;
  padding: 0;
  font-size: 0;
  outline: none;
}

.vf-multiselect-fake-input:active, .vf-multiselect-fake-input:focus {
  outline: none;
}

.vf-multiselect-spacer {
  display: none;
}

[dir=rtl] .vf-input.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input) * 2);
}

[dir=rtl] .vf-input-sm.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input-sm) * 2);
}

[dir=rtl] .vf-input-lg.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input-lg) * 2);
}

[dir=rtl] .vf-native-select-placeholder {
  left: auto;
  right: var(--vf-px-input);
}

[dir=rtl] .vf-native-select-caret {
  right: auto;
  left: 0;
  margin-right: 0;
  margin-left: var(--vf-px-input);
}

[dir=rtl] .vf-native-select-caret.vf-native-select-caret-sm {
  margin-right: 0;
  margin-left: var(--vf-px-input-sm);
}

[dir=rtl] .vf-native-select-caret.vf-native-select-caret-lg {
  margin-right: 0;
  margin-left: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label {
  padding-left: calc(var(--vf-px-input) * 4);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input) * 2);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm {
  padding-left: calc(var(--vf-px-input-sm) * 4);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input-sm) * 2);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg {
  padding-left: calc(var(--vf-px-input-lg) * 4);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input-lg) * 2);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-placeholder {
  padding-left: var(--vf-min-height-input);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-placeholder.vf-multiselect-placeholder-sm {
  padding-left: calc(1.25rem + var(--vf-px-input-sm) * 3);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-placeholder.vf-multiselect-placeholder-lg {
  padding-left: calc(1.25rem + var(--vf-px-input-lg) * 3);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-search {
  padding-left: 0;
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-search.vf-multiselect-search-sm {
  padding-left: 0;
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-search.vf-multiselect-search-lg {
  padding-left: 0;
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-spinner {
  margin: 0 0 0 var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-caret {
  margin: 0 0 0 var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-clear {
  padding: 0 0 0 var(--vf-px-input);
}

@keyframes multiselect-spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}`;Y(Vv);xs.__file="themes/vueform/templates/elements/SelectElement.vue";var Va={};const _v=["tabindex","aria-label","id"],Qv=["src","alt","title"],qv=["title","tabindex","aria-label"],Kv=["title","tabindex","aria-label"],Gv=["value","disabled","readonly","aria-label"],Jv=["innerHTML"],Yv=["tabindex","aria-label"],Xv=["accept"],Zv=["width","height"],eg=["width","height","tabindex","aria-label"],tg=["tabindex","aria-label","aria-selected","onClick","onKeydown"],ng=["fill"],rg=["tabindex","aria-label"];function ig(e,t,n,r,i,l){const a=se("ElementAddonOptions");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.wrapper),style:Gt(e.wrapperStyle),tabindex:e.isDisabled?void 0:0,"aria-label":e.wrapperAriaLabel,id:e.id,onKeydown:t[11]||(t[11]=ze((...o)=>e.handleMouseLeave&&e.handleMouseLeave(...o),["tab","escape"])),onMouseleave:t[12]||(t[12]=(...o)=>e.handleMouseLeave&&e.handleMouseLeave(...o)),ref:"input"},[m(" Line "),ye(w("hr",{class:p(e.classes.line),style:Gt(e.lineStyle),"aria-hidden":"true"},null,6),[[Fe,e.showLine]]),m(" Loaded preview "),ye(w("div",{class:p(e.classes.loadedWrapper)},[w("img",{src:e.value,alt:e.imgAltText,title:e.imgTitleText,class:p(e.classes.loadedImg)},null,10,Qv)],2),[[Fe,e.uploaded]]),m(" Not loaded actions "),ye(w("div",{class:p(e.classes.innerWrapper)},[m(" Actions "),w("div",{class:p(e.classes.actions)},[m(" Mode "),ye(xe(a,{options:e.resolvedModes,placeholder:"",position:"bottom",relaxed:"",aria:e.modeSelectorAria,onSelect:e.handleModeSelect,ref:"mode$"},null,8,["options","aria","onSelect"]),[[Fe,e.showModes]]),m(" Fonts "),ye(xe(a,{options:e.resolvedFonts,placeholder:e.fontText,position:"bottom",relaxed:"",aria:e.fontSelectorAria,onSelect:e.handleFontSelect,ref:"font$"},null,8,["options","placeholder","aria","onSelect"]),[[Fe,e.showFonts]]),m(" Undos "),ye(w("div",{class:p(e.classes.undosWrapper)},[m(" Undo "),w("div",{class:p(e.classes.undo),title:e.undoText,role:"button",tabindex:e.undosLeft?e.tabindex:void 0,"aria-label":e.undoText,onClick:t[0]||(t[0]=he((...o)=>e.handleUndo&&e.handleUndo(...o),["stop"])),onKeydown:t[1]||(t[1]=ze(he((...o)=>e.handleUndo&&e.handleUndo(...o),["prevent"]),["space","enter"]))},null,42,qv),m(" Redo "),w("div",{class:p(e.classes.redo),title:e.redoText,role:"button",tabindex:e.redos.length?e.tabindex:void 0,"aria-label":e.redoText,onClick:t[2]||(t[2]=he((...o)=>e.handleRedo&&e.handleRedo(...o),["stop"])),onKeydown:t[3]||(t[3]=ze(he((...o)=>e.handleRedo&&e.handleRedo(...o),["prevent"]),["space","enter"]))},null,42,Kv)],2),[[Fe,e.showUndos]])],2),m(" Input "),ye(w("input",{value:e.text,type:"text",spellcheck:"false",class:p(e.classes.input),disabled:e.isDisabled,readonly:e.isReadonly,style:Gt(e.inputStyle),"aria-label":e.inputAriaLabel,onInput:t[4]||(t[4]=(...o)=>e.handleInput&&e.handleInput(...o)),onSelect:t[5]||(t[5]=(...o)=>e.handleInput&&e.handleInput(...o)),ref:"input$"},null,46,Gv),[[Fe,e.showInput]]),m(" Placeholder "),ye(w("div",{class:p(e.classes.placeholder),innerHTML:e.placeholderText},null,10,Jv),[[Fe,e.showPlaceholder]]),m(" Upload container "),ye(w("div",{class:p(e.classes.uploadContainer),ref:"upload$"},[m(" File upload "),ye(w("div",{class:p(e.classes.uploadWrapper)},[m(" DnD text "),e.droppable?(d(),h("div",{key:0,class:p(e.classes.dndText)},Se(e.dndText),3)):m("v-if",!0),m(" Select button "),w("div",{class:p(e.classes.uploadButton),tabindex:e.tabindex,role:"button","aria-label":e.uploadButtonText,onClick:t[6]||(t[6]=(...o)=>e.handleSelectClick&&e.handleSelectClick(...o)),onKeydown:t[7]||(t[7]=ze(he((...o)=>e.handleSelectClick&&e.handleSelectClick(...o),["prevent"]),["space","enter"])),ref:"uploadButton$"},Se(e.uploadButtonText),43,Yv),m(" Hidden file input "),ye(w("input",{type:"file",accept:e.fileAccept,onChange:t[8]||(t[8]=(...o)=>e.handleFileSelect&&e.handleFileSelect(...o)),ref:"file$"},null,40,Xv),[[Fe,!1]])],2),[[Fe,e.showUpload]]),m(" Preview "),ye(w("canvas",{width:e.uploadWidth,height:e.uploadHeight,class:p(e.classes.uploadPreview),ref:"preview$"},null,10,Zv),[[Fe,e.showPreview]])],2),[[Fe,e.showUploadContainer]]),m(" Pad "),ye(w("canvas",{width:e.padWidth,height:e.padHeight,style:Gt(e.padStyle),class:p(e.classes.pad),tabindex:e.tabindex,"aria-label":e.padAriaLabel,ref:"pad$"},null,14,eg),[[Fe,e.showPad]]),m(" Colors "),ye(w("div",{class:p(e.classes.colors),role:"listbox"},[(d(!0),h(X,null,ie(e.colors,o=>(d(),h("svg",{width:"12",height:"12",class:p(e.classes.color(o)),role:"option",tabindex:e.tabindex,"aria-label":`${e.colorAriaLabel} ${o}`,"aria-selected":o===e.color,onClick:s=>e.handleColorSelect(o),onKeydown:ze(he(s=>e.handleColorSelect(o),["prevent"]),["space","enter"])},[w("circle",{cx:"6",cy:"6",r:"6",fill:o},null,8,ng)],42,tg))),256))],2),[[Fe,e.showColors]])],2),[[Fe,!e.uploaded]]),m(" Clear "),e.showClear?(d(),h("div",{key:0,class:p(e.classes.clearWrapper)},[w("div",{class:p(e.classes.clear),tabindex:e.tabindex,role:"button","aria-label":e.clearAriaLabel,onClick:t[9]||(t[9]=(...o)=>e.handleClear&&e.handleClear(...o)),onKeydown:t[10]||(t[10]=ze(he((...o)=>e.handleClear&&e.handleClear(...o),["prevent"]),["enter","space"]))},null,42,rg)],2)):m("v-if",!0)],46,_v)]),_:2},[ie(e.elementSlots,(o,s)=>({name:s,fn:N(()=>[T(e.$slots,s,{el$:e.el$},()=>[(d(),A(F(o),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Va.render=ig;Va.__file="themes/blank/templates/elements/SignatureElement.vue";var Ss={name:"SignatureElement",render:Va.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-signature",wrapper_sm:"vf-signature-sm",wrapper_md:"",wrapper_lg:"vf-signature-lg",wrapper_disabled:"vf-signature-disabled",wrapper_enabled:"",wrapper_readonly:"vf-signature-readonly",line:"vf-signature-line",loadedWrapper:"vf-signature-loaded-wrapper",loadedWrapper_disabled:"vf-signature-loaded-wrapper-disabled",loadedWrapper_enabled:"",loadedImg:"vf-signature-loaded-img",innerWrapper:"vf-signature-inner-wrapper",innerWrapper_disabled:"vf-signature-inner-wrapper-disabled",innerWrapper_enabled:"",input:"vf-signature-input",input_invert:"vf-signature-input-invert",placeholder:"vf-signature-placeholder",uploadContainer:"vf-signature-upload-container",uploadContainer_dragging:"vf-signature-upload-container-dragging",uploadContainer_not_dragging:"",uploadWrapper:"vf-signature-upload-wrapper",uploadWrapper_processing:"vf-signature-upload-wrapper-processing",dndText:"vf-signature-dnd-text",uploadButton:"vf-btn vf-btn-secondary",uploadPreview:"vf-signature-upload-preview",pad:"vf-signature-pad",pad_invert:"vf-signature-pad-invert",colors:"vf-signature-colors",color:"vf-signature-color",color_invert:"vf-signature-color-invert",color_active:"vf-signature-color-active",color_inactive:"",actions:"vf-signature-actions",undosWrapper:"vf-signature-undos-wrapper",undo:"vf-signature-undo",undo_enabled:"",undo_disabled:"vf-signature-undo-disabled",redo:"vf-signature-redo",redo_enabled:"",redo_disabled:"vf-signature-redo-disabled",clearWrapper:"vf-signature-clear-wrapper",clear:"vf-signature-clear",$wrapper:(e,{isDisabled:t,readonly:n,Size:r})=>[e.wrapper,e[`wrapper_${r}`],t?e.wrapper_disabled:e.wrapper_enabled,n?e.wrapper_readonly:null],$loadedWrapper:(e,{isDisabled:t})=>[e.loadedWrapper,t?e.loadedWrapper_disabled:e.loadedWrapper_enabled],$innerWrapper:(e,{isDisabled:t})=>[e.innerWrapper,t?e.innerWrapper_disabled:e.innerWrapper_enabled],$input:(e,{invertColors:t,color:n})=>[e.input,t.indexOf(n)!==-1?e.input_invert:null],$uploadContainer:(e,{dragging:t})=>[e.uploadContainer,t?e.uploadContainer_dragging:e.uploadContainer_not_dragging],$uploadWrapper:(e,{processing:t})=>[e.uploadWrapper,t?e.uploadWrapper_processing:null],$pad:(e,{invertColors:t,color:n})=>[e.pad,t.indexOf(n)!==-1?e.pad_invert:null],$color:(e,{color:t,invertColors:n,mode:r})=>i=>[e.color,i===t?e.color_active:e.color_inactive,n.indexOf(i)!==-1&&r!=="upload"?e.color_invert:null],$undo:(e,{undosLeft:t})=>[e.undo,t?e.undo_enabled:e.undo_disabled],$redo:(e,{redos:t})=>[e.redo,t.length?e.redo_enabled:e.redo_disabled]}}}},ag=`.vf-signature {
  position: relative;
  font-family: inherit;
  transition-property: box-shadow, color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-color: var(--vf-border-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  border-radius: var(--vf-radius-large);
}

.vf-signature:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
  border-color: var(--vf-border-color-input-focus);
}

.vf-signature.vf-signature-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
  border-radius: var(--vf-radius-large-sm);
}

.vf-signature.vf-signature-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
  border-radius: var(--vf-radius-large-lg);
}

.vf-signature.vf-signature-disabled {
  background-color: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  cursor: not-allowed;
  pointer-events: none;
}

.vf-signature.vf-signature-readonly {
  pointer-events: none;
}

.vf-signature-line {
  position: absolute;
  top: 50%;
  left: 1.5rem;
  right: 1.5rem;
  border-color: var(--vf-border-color-signature-hr);
}

.vf-signature-loaded-wrapper {
  position: absolute;
  left: 2.25rem;
  right: 2.25rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vf-signature-loaded-wrapper.vf-signature-loaded-wrapper-disabled {
  opacity: 0.5;
}

.vf-signature-inner-wrapper.vf-signature-inner-wrapper-disabled {
  opacity: 0.5;
}

.vf-signature-input {
  background: transparent;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 0 2.25rem 0 0;
  text-align: center;
  text-indent: 2.25rem;
  transition-property: box-shadow, color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  height: 8.5rem;
}

.vf-signature-placeholder {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  color: var(--vf-color-placeholder);
  text-align: center;
}

.vf-signature-upload-container {
  position: absolute;
  left: 2.25rem;
  right: 2.25rem;
  bottom: 50%;
  transform: translateY(50%);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.vf-signature-upload-container.vf-signature-upload-container-dragging {
  opacity: 0.5;
}

.vf-signature-upload-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.vf-signature-upload-wrapper.vf-signature-upload-wrapper-processing {
  opacity: 0.6;
  pointer-events: none;
}

.vf-signature-dnd-text {
  color: var(--vf-text-700);
}

.vf-signature-upload-preview {
  width: 100%;
  margin: 0 auto;
}

.vf-signature-pad {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.vf-signature-colors {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.vf-signature-color {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
}

.vf-signature-color:hover, .vf-signature-color.vf-signature-color-active {
  transform: scale(1.4);
}

.vf-signature-color:focus-visible {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-signature-actions {
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  opacity: 0.5;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  z-index: 1;
}

.vf-signature-actions:hover {
  opacity: 1;
}

.vf-signature-undos-wrapper {
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.vf-signature-undo,
.vf-signature-redo {
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  cursor: pointer;
  width: 0.75rem;
  height: 0.75rem;
}

.vf-signature-undo:focus-visible,
.vf-signature-redo:focus-visible {
  opacity: 0.8;
}

.vf-signature-undo {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
}

.vf-signature-undo.vf-signature-undo-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.vf-signature-redo {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
}

.vf-signature-redo.vf-signature-redo-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.vf-signature-clear-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  font-size: 14px;
}

.vf-signature-clear {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-color-input);
  width: 0.75rem;
  height: 1rem;
  padding: 1px 0;
  box-sizing: content-box !important;
  display: inline-block;
  cursor: pointer;
}

.vf-signature-clear:focus-visible {
  opacity: 0.8;
}

.dark .vf-signature-input-invert,
.dark .vf-signature-pad-invert,
.dark .vf-signature-color-invert {
  filter: invert(1);
}

.dark .vf-signature-dnd-text {
  color: var(--vf-dark-200);
}

.dark .vf-signature-undo,
.dark .vf-signature-redo {
  background: var(--vf-dark-300);
}

[dir=rtl] .vf-signature-input {
  padding: 0 0 0 2.25rem;
}

[dir=rtl] .vf-signature-undos-wrapper {
  right: auto;
  left: 0.75rem;
}`;Y(ag);Ss.__file="themes/vueform/templates/elements/SignatureElement.vue";function Ir(e){return[null,void 0,!1].indexOf(e)!==-1}function lg(e,t,n){const{value:r,modelValue:i,min:l}=Ze(e);let a=i&&i.value!==void 0?i:r;const o=rt(a.value);if(Ir(a.value)&&(a=rt(l.value)),Array.isArray(a.value)&&a.value.length==0)throw new Error("Slider v-model must not be an empty array");return{value:a,initialValue:o}}function og(e,t,n){const{classes:r,showTooltip:i,tooltipPosition:l,orientation:a}=Ze(e),o=Le(()=>({target:"slider-target",focused:"slider-focused",tooltipFocus:"slider-tooltip-focus",tooltipDrag:"slider-tooltip-drag",ltr:"slider-ltr",rtl:"slider-rtl",horizontal:"slider-horizontal",vertical:"slider-vertical",textDirectionRtl:"slider-txt-dir-rtl",textDirectionLtr:"slider-txt-dir-ltr",base:"slider-base",connects:"slider-connects",connect:"slider-connect",origin:"slider-origin",handle:"slider-handle",handleLower:"slider-handle-lower",handleUpper:"slider-handle-upper",touchArea:"slider-touch-area",tooltip:"slider-tooltip",tooltipTop:"slider-tooltip-top",tooltipBottom:"slider-tooltip-bottom",tooltipLeft:"slider-tooltip-left",tooltipRight:"slider-tooltip-right",tooltipHidden:"slider-tooltip-hidden",active:"slider-active",draggable:"slider-draggable",tap:"slider-state-tap",drag:"slider-state-drag",pips:"slider-pips",pipsHorizontal:"slider-pips-horizontal",pipsVertical:"slider-pips-vertical",marker:"slider-marker",markerHorizontal:"slider-marker-horizontal",markerVertical:"slider-marker-vertical",markerNormal:"slider-marker-normal",markerLarge:"slider-marker-large",markerSub:"slider-marker-sub",value:"slider-value",valueHorizontal:"slider-value-horizontal",valueVertical:"slider-value-vertical",valueNormal:"slider-value-normal",valueLarge:"slider-value-large",valueSub:"slider-value-sub",...r.value}));return{classList:Le(()=>{const u={...o.value};return Object.keys(u).forEach(f=>{u[f]=Array.isArray(u[f])?u[f].filter(S=>S!==null).join(" "):u[f]}),i.value!=="always"&&(u.target+=` ${i.value==="drag"?u.tooltipDrag:u.tooltipFocus}`),a.value==="horizontal"&&(u.tooltip+=l.value==="bottom"?` ${u.tooltipBottom}`:` ${u.tooltipTop}`),a.value==="vertical"&&(u.tooltip+=l.value==="right"?` ${u.tooltipRight}`:` ${u.tooltipLeft}`),u})}}var Ts={exports:{}};(function(e,t){(function(n){e.exports=n()})(function(){var n=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function r(E){return E.split("").reverse().join("")}function i(E,k){return E.substring(0,k.length)===k}function l(E,k){return E.slice(-1*k.length)===k}function a(E,k,x){if((E[k]||E[x])&&E[k]===E[x])throw new Error(k)}function o(E){return typeof E=="number"&&isFinite(E)}function s(E,k){return E=E.toString().split("e"),E=Math.round(+(E[0]+"e"+(E[1]?+E[1]+k:k))),E=E.toString().split("e"),(+(E[0]+"e"+(E[1]?+E[1]-k:-k))).toFixed(k)}function u(E,k,x,O,D,L,P,H,I,te,G,z){var re=z,Z,_,ae,we="",de="";return L&&(z=L(z)),o(z)?(E!==!1&&parseFloat(z.toFixed(E))===0&&(z=0),z<0&&(Z=!0,z=Math.abs(z)),E!==!1&&(z=s(z,E)),z=z.toString(),z.indexOf(".")!==-1?(_=z.split("."),ae=_[0],x&&(we=x+_[1])):ae=z,k&&(ae=r(ae).match(/.{1,3}/g),ae=r(ae.join(r(k)))),Z&&H&&(de+=H),O&&(de+=O),Z&&I&&(de+=I),de+=ae,de+=we,D&&(de+=D),te&&(de=te(de,re)),de):!1}function f(E,k,x,O,D,L,P,H,I,te,G,z){var re,Z="";return G&&(z=G(z)),!z||typeof z!="string"||(H&&i(z,H)&&(z=z.replace(H,""),re=!0),O&&i(z,O)&&(z=z.replace(O,"")),I&&i(z,I)&&(z=z.replace(I,""),re=!0),D&&l(z,D)&&(z=z.slice(0,-1*D.length)),k&&(z=z.split(k).join("")),x&&(z=z.replace(x,".")),re&&(Z+="-"),Z+=z,Z=Z.replace(/[^0-9\.\-.]/g,""),Z==="")||(Z=Number(Z),P&&(Z=P(Z)),!o(Z))?!1:Z}function S(E){var k,x,O,D={};for(E.suffix===void 0&&(E.suffix=E.postfix),k=0;k<n.length;k+=1)if(x=n[k],O=E[x],O===void 0)x==="negative"&&!D.negativeBefore?D[x]="-":x==="mark"&&D.thousand!=="."?D[x]=".":D[x]=!1;else if(x==="decimals")if(O>=0&&O<8)D[x]=O;else throw new Error(x);else if(x==="encoder"||x==="decoder"||x==="edit"||x==="undo")if(typeof O=="function")D[x]=O;else throw new Error(x);else if(typeof O=="string")D[x]=O;else throw new Error(x);return a(D,"mark","thousand"),a(D,"prefix","negative"),a(D,"prefix","negativeBefore"),D}function M(E,k,x){var O,D=[];for(O=0;O<n.length;O+=1)D.push(E[n[O]]);return D.push(x),k.apply("",D)}function C(E){if(!(this instanceof C))return new C(E);typeof E=="object"&&(E=S(E),this.to=function(k){return M(E,u,k)},this.from=function(k){return M(E,f,k)})}return C})})(Ts);var Bl=Ts.exports;function sg(e,t,n){const{format:r,step:i}=Ze(e),l=n.value,a=n.classList,o=Le(()=>!r||!r.value?Bl({decimals:i.value>=0?0:2}):typeof r.value=="function"?{to:r.value}:Bl({...r.value})),s=Le(()=>Array.isArray(l.value)?l.value.map(f=>o.value):o.value);return{tooltipFormat:o,tooltipsFormat:s,tooltipsMerge:(f,S,M)=>{var C=getComputedStyle(f).direction==="rtl",E=f.noUiSlider.options.direction==="rtl",k=f.noUiSlider.options.orientation==="vertical",x=f.noUiSlider.getTooltips(),O=f.noUiSlider.getOrigins();x.forEach(function(D,L){D&&O[L].appendChild(D)}),f.noUiSlider.on("update",function(D,L,P,H,I){var te=[[]],G=[[]],z=[[]],re=0;x[0]&&(te[0][0]=0,G[0][0]=I[0],z[0][0]=o.value.to(parseFloat(D[0])));for(var Z=1;Z<D.length;Z++)(!x[Z]||D[Z]-D[Z-1]>S)&&(re++,te[re]=[],z[re]=[],G[re]=[]),x[Z]&&(te[re].push(Z),z[re].push(o.value.to(parseFloat(D[Z]))),G[re].push(I[Z]));te.forEach(function(_,ae){for(var we=_.length,de=0;de<we;de++){var be=_[de];if(de===we-1){var fe=0;G[ae].forEach(function(W){fe+=1e3-W});var Ke=k?"bottom":"right",pe=E?0:we-1,ve=1e3-G[ae][pe];fe=(C&&!k?100:0)+fe/we-ve,x[be].innerHTML=z[ae].join(M),x[be].style.display="block",x[be].style[Ke]=fe+"%",a.value.tooltipHidden.split(" ").forEach(W=>{x[be].classList.contains(W)&&x[be].classList.remove(W)})}else x[be].style.display="none",a.value.tooltipHidden.split(" ").forEach(W=>{x[be].classList.add(W)})}})})}}}var un;(function(e){e.Range="range",e.Steps="steps",e.Positions="positions",e.Count="count",e.Values="values"})(un||(un={}));var vt;(function(e){e[e.None=-1]="None",e[e.NoValue=0]="NoValue",e[e.LargeValue=1]="LargeValue",e[e.SmallValue=2]="SmallValue"})(vt||(vt={}));function dg(e){return Fr(e)&&typeof e.from=="function"}function Fr(e){return typeof e=="object"&&typeof e.to=="function"}function Ml(e){e.parentElement.removeChild(e)}function Fi(e){return e!=null}function Dl(e){e.preventDefault()}function ug(e){return e.filter(function(t){return this[t]?!1:this[t]=!0},{})}function cg(e,t){return Math.round(e/t)*t}function pg(e,t){var n=e.getBoundingClientRect(),r=e.ownerDocument,i=r.documentElement,l=Rs(r);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),t?n.top+l.y-i.clientTop:n.left+l.x-i.clientLeft}function Wt(e){return typeof e=="number"&&!isNaN(e)&&isFinite(e)}function Ol(e,t,n){n>0&&(dt(e,t),setTimeout(function(){Br(e,t)},n))}function $l(e){return Math.max(Math.min(e,100),0)}function Yr(e){return Array.isArray(e)?e:[e]}function fg(e){e=String(e);var t=e.split(".");return t.length>1?t[1].length:0}function dt(e,t){e.classList&&!/\s/.test(t)?e.classList.add(t):e.className+=" "+t}function Br(e,t){e.classList&&!/\s/.test(t)?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function vg(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function Rs(e){var t=window.pageXOffset!==void 0,n=(e.compatMode||"")==="CSS1Compat",r=t?window.pageXOffset:n?e.documentElement.scrollLeft:e.body.scrollLeft,i=t?window.pageYOffset:n?e.documentElement.scrollTop:e.body.scrollTop;return{x:r,y:i}}function gg(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function mg(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch{}return e}function hg(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function _a(e,t){return 100/(t-e)}function zi(e,t,n){return t*100/(e[n+1]-e[n])}function bg(e,t){return zi(e,e[0]<0?t+Math.abs(e[0]):t-e[0],0)}function wg(e,t){return t*(e[1]-e[0])/100+e[0]}function fr(e,t){for(var n=1;e>=t[n];)n+=1;return n}function yg(e,t,n){if(n>=e.slice(-1)[0])return 100;var r=fr(n,e),i=e[r-1],l=e[r],a=t[r-1],o=t[r];return a+bg([i,l],n)/_a(a,o)}function kg(e,t,n){if(n>=100)return e.slice(-1)[0];var r=fr(n,t),i=e[r-1],l=e[r],a=t[r-1],o=t[r];return wg([i,l],(n-a)*_a(a,o))}function Cg(e,t,n,r){if(r===100)return r;var i=fr(r,e),l=e[i-1],a=e[i];return n?r-l>(a-l)/2?a:l:t[i-1]?e[i-1]+cg(r-e[i-1],t[i-1]):r}var Is=(function(){function e(t,n,r){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=n;var i,l=[];for(Object.keys(t).forEach(function(a){l.push([Yr(t[a]),a])}),l.sort(function(a,o){return a[0][0]-o[0][0]}),i=0;i<l.length;i++)this.handleEntryPoint(l[i][1],l[i][0]);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)this.handleStepPoint(i,this.xNumSteps[i])}return e.prototype.getDistance=function(t){for(var n=[],r=0;r<this.xNumSteps.length-1;r++)n[r]=zi(this.xVal,t,r);return n},e.prototype.getAbsoluteDistance=function(t,n,r){var i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);!r&&t===this.xPct[i+1]&&i++,n===null&&(n=[]);var l,a=1,o=n[i],s=0,u=0,f=0,S=0;for(r?l=(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):l=(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);o>0;)s=this.xPct[i+1+S]-this.xPct[i+S],n[i+S]*a+100-l*100>100?(u=s*l,a=(o-100*l)/n[i+S],l=1):(u=n[i+S]*s/100*a,a=0),r?(f=f-u,this.xPct.length+S>=1&&S--):(f=f+u,this.xPct.length-S>=1&&S++),o=n[i+S]*a;return t+f},e.prototype.toStepping=function(t){return t=yg(this.xVal,this.xPct,t),t},e.prototype.fromStepping=function(t){return kg(this.xVal,this.xPct,t)},e.prototype.getStep=function(t){return t=Cg(this.xPct,this.xSteps,this.snap,t),t},e.prototype.getDefaultStep=function(t,n,r){var i=fr(t,this.xPct);return(t===100||n&&t===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/r},e.prototype.getNearbySteps=function(t){var n=fr(t,this.xPct);return{stepBefore:{startValue:this.xVal[n-2],step:this.xNumSteps[n-2],highestStep:this.xHighestCompleteStep[n-2]},thisStep:{startValue:this.xVal[n-1],step:this.xNumSteps[n-1],highestStep:this.xHighestCompleteStep[n-1]},stepAfter:{startValue:this.xVal[n],step:this.xNumSteps[n],highestStep:this.xHighestCompleteStep[n]}}},e.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(fg);return Math.max.apply(null,t)},e.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},e.prototype.convert=function(t){return this.getStep(this.toStepping(t))},e.prototype.handleEntryPoint=function(t,n){var r;if(t==="min"?r=0:t==="max"?r=100:r=parseFloat(t),!Wt(r)||!Wt(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(n[0]);var i=Number(n[1]);r?this.xSteps.push(isNaN(i)?!1:i):isNaN(i)||(this.xSteps[0]=i),this.xHighestCompleteStep.push(0)},e.prototype.handleStepPoint=function(t,n){if(n){if(this.xVal[t]===this.xVal[t+1]){this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t];return}this.xSteps[t]=zi([this.xVal[t],this.xVal[t+1]],n,0)/_a(this.xPct[t],this.xPct[t+1]);var r=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],i=Math.ceil(Number(r.toFixed(3))-1),l=this.xVal[t]+this.xNumSteps[t]*i;this.xHighestCompleteStep[t]=l}},e})(),Fl={to:function(e){return e===void 0?"":e.toFixed(2)},from:Number},Bs={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},on={tooltips:".__tooltips",aria:".__aria"};function Ag(e,t){if(!Wt(t))throw new Error("noUiSlider: 'step' is not numeric.");e.singleStep=t}function Eg(e,t){if(!Wt(t))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=t}function Lg(e,t){if(!Wt(t))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");e.keyboardMultiplier=t}function xg(e,t){if(!Wt(t))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=t}function Sg(e,t){if(typeof t!="object"||Array.isArray(t))throw new Error("noUiSlider: 'range' is not an object.");if(t.min===void 0||t.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");e.spectrum=new Is(t,e.snap||!1,e.singleStep)}function Tg(e,t){if(t=Yr(t),!Array.isArray(t)||!t.length)throw new Error("noUiSlider: 'start' option is incorrect.");e.handles=t.length,e.start=t}function Rg(e,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");e.snap=t}function Ig(e,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");e.animate=t}function Bg(e,t){if(typeof t!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");e.animationDuration=t}function Ms(e,t){var n=[!1],r;if(t==="lower"?t=[!0,!1]:t==="upper"&&(t=[!1,!0]),t===!0||t===!1){for(r=1;r<e.handles;r++)n.push(t);n.push(!1)}else{if(!Array.isArray(t)||!t.length||t.length!==e.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=t}e.connect=n}function Mg(e,t){switch(t){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Ds(e,t){if(!Wt(t))throw new Error("noUiSlider: 'margin' option must be numeric.");t!==0&&(e.margin=e.spectrum.getDistance(t))}function Dg(e,t){if(!Wt(t))throw new Error("noUiSlider: 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(t),!e.limit||e.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function Og(e,t){var n;if(!Wt(t)&&!Array.isArray(t))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(t)&&!(t.length===2||Wt(t[0])||Wt(t[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(t!==0){for(Array.isArray(t)||(t=[t,t]),e.padding=[e.spectrum.getDistance(t[0]),e.spectrum.getDistance(t[1])],n=0;n<e.spectrum.xNumSteps.length-1;n++)if(e.padding[0][n]<0||e.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var r=t[0]+t[1],i=e.spectrum.xVal[0],l=e.spectrum.xVal[e.spectrum.xVal.length-1];if(r/(l-i)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function $g(e,t){switch(t){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Fg(e,t){if(typeof t!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=t.indexOf("tap")>=0,r=t.indexOf("drag")>=0,i=t.indexOf("fixed")>=0,l=t.indexOf("snap")>=0,a=t.indexOf("hover")>=0,o=t.indexOf("unconstrained")>=0,s=t.indexOf("invert-connects")>=0,u=t.indexOf("drag-all")>=0,f=t.indexOf("smooth-steps")>=0;if(i){if(e.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Ds(e,e.start[1]-e.start[0])}if(s&&e.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(o&&(e.margin||e.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:n||l,drag:r,dragAll:u,smoothSteps:f,fixed:i,snap:l,hover:a,unconstrained:o,invertConnects:s}}function zg(e,t){if(t!==!1)if(t===!0||Fr(t)){e.tooltips=[];for(var n=0;n<e.handles;n++)e.tooltips.push(t)}else{if(t=Yr(t),t.length!==e.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");t.forEach(function(r){if(typeof r!="boolean"&&!Fr(r))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),e.tooltips=t}}function Pg(e,t){if(t.length!==e.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");e.handleAttributes=t}function Ng(e,t){if(!Fr(t))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");e.ariaFormat=t}function Hg(e,t){if(!dg(t))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");e.format=t}function Ug(e,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");e.keyboardSupport=t}function jg(e,t){e.documentElement=t}function Wg(e,t){if(typeof t!="string"&&t!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");e.cssPrefix=t}function Vg(e,t){if(typeof t!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof e.cssPrefix=="string"?(e.cssClasses={},Object.keys(t).forEach(function(n){e.cssClasses[n]=e.cssPrefix+t[n]})):e.cssClasses=t}function Os(e){var t={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Fl,format:Fl},n={step:{r:!1,t:Ag},keyboardPageMultiplier:{r:!1,t:Eg},keyboardMultiplier:{r:!1,t:Lg},keyboardDefaultStep:{r:!1,t:xg},start:{r:!0,t:Tg},connect:{r:!0,t:Ms},direction:{r:!0,t:$g},snap:{r:!1,t:Rg},animate:{r:!1,t:Ig},animationDuration:{r:!1,t:Bg},range:{r:!0,t:Sg},orientation:{r:!1,t:Mg},margin:{r:!1,t:Ds},limit:{r:!1,t:Dg},padding:{r:!1,t:Og},behaviour:{r:!0,t:Fg},ariaFormat:{r:!1,t:Ng},format:{r:!1,t:Hg},tooltips:{r:!1,t:zg},keyboardSupport:{r:!0,t:Ug},documentElement:{r:!1,t:jg},cssPrefix:{r:!0,t:Wg},cssClasses:{r:!0,t:Vg},handleAttributes:{r:!1,t:Pg}},r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Bs,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(s){if(!Fi(e[s])&&r[s]===void 0){if(n[s].r)throw new Error("noUiSlider: '"+s+"' is required.");return}n[s].t(t,Fi(e[s])?e[s]:r[s])}),t.pips=e.pips;var i=document.createElement("div"),l=i.style.msTransform!==void 0,a=i.style.transform!==void 0;t.transformRule=a?"transform":l?"msTransform":"webkitTransform";var o=[["left","top"],["right","bottom"]];return t.style=o[t.dir][t.ort],t}function _g(e,t,n){var r=gg(),i=hg(),l=i&&mg(),a=e,o,s,u,f,S,M,C=t.spectrum,E=[],k=[],x=[],O=0,D={},L=!1,P=e.ownerDocument,H=t.documentElement||P.documentElement,I=P.body,te=P.dir==="rtl"||t.ort===1?0:100;function G(c,b){var y=P.createElement("div");return b&&dt(y,b),c.appendChild(y),y}function z(c,b){var y=G(c,t.cssClasses.origin),$=G(y,t.cssClasses.handle);if(G($,t.cssClasses.touchArea),$.setAttribute("data-handle",String(b)),t.keyboardSupport&&($.setAttribute("tabindex","0"),$.addEventListener("keydown",function(j){return Ge(j,b)})),t.handleAttributes!==void 0){var U=t.handleAttributes[b];Object.keys(U).forEach(function(j){$.setAttribute(j,U[j])})}return $.setAttribute("role","slider"),$.setAttribute("aria-orientation",t.ort?"vertical":"horizontal"),b===0?dt($,t.cssClasses.handleLower):b===t.handles-1&&dt($,t.cssClasses.handleUpper),y.handle=$,y}function re(c,b){return b?G(c,t.cssClasses.connect):!1}function Z(c,b){s=G(b,t.cssClasses.connects),u=[],f=[],f.push(re(s,c[0]));for(var y=0;y<t.handles;y++)u.push(z(b,y)),x[y]=y,f.push(re(s,c[y+1]))}function _(c){dt(c,t.cssClasses.target),t.dir===0?dt(c,t.cssClasses.ltr):dt(c,t.cssClasses.rtl),t.ort===0?dt(c,t.cssClasses.horizontal):dt(c,t.cssClasses.vertical);var b=getComputedStyle(c).direction;return b==="rtl"?dt(c,t.cssClasses.textDirectionRtl):dt(c,t.cssClasses.textDirectionLtr),G(c,t.cssClasses.base)}function ae(c,b){return!t.tooltips||!t.tooltips[b]?!1:G(c.firstChild,t.cssClasses.tooltip)}function we(){return a.hasAttribute("disabled")}function de(c){var b=u[c];return b.hasAttribute("disabled")}function be(c){c!=null?(u[c].setAttribute("disabled",""),u[c].handle.removeAttribute("tabindex")):(a.setAttribute("disabled",""),u.forEach(function(b){b.handle.removeAttribute("tabindex")}))}function fe(c){c!=null?(u[c].removeAttribute("disabled"),u[c].handle.setAttribute("tabindex","0")):(a.removeAttribute("disabled"),u.forEach(function(b){b.removeAttribute("disabled"),b.handle.setAttribute("tabindex","0")}))}function Ke(){M&&(xt("update"+on.tooltips),M.forEach(function(c){c&&Ml(c)}),M=null)}function pe(){Ke(),M=u.map(ae),nt("update"+on.tooltips,function(c,b,y){if(!(!M||!t.tooltips)&&M[b]!==!1){var $=c[b];t.tooltips[b]!==!0&&($=t.tooltips[b].to(y[b])),M[b].innerHTML=$}})}function ve(){xt("update"+on.aria),nt("update"+on.aria,function(c,b,y,$,U){x.forEach(function(j){var J=u[j],Q=ot(k,j,0,!0,!0,!0),Re=ot(k,j,100,!0,!0,!0),Ie=U[j],Ce=String(t.ariaFormat.to(y[j]));Q=C.fromStepping(Q).toFixed(1),Re=C.fromStepping(Re).toFixed(1),Ie=C.fromStepping(Ie).toFixed(1),J.children[0].setAttribute("aria-valuemin",Q),J.children[0].setAttribute("aria-valuemax",Re),J.children[0].setAttribute("aria-valuenow",Ie),J.children[0].setAttribute("aria-valuetext",Ce)})})}function W(c){if(c.mode===un.Range||c.mode===un.Steps)return C.xVal;if(c.mode===un.Count){if(c.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var b=c.values-1,y=100/b,$=[];b--;)$[b]=b*y;return $.push(100),ee($,c.stepped)}return c.mode===un.Positions?ee(c.values,c.stepped):c.mode===un.Values?c.stepped?c.values.map(function(U){return C.fromStepping(C.getStep(C.toStepping(U)))}):c.values:[]}function ee(c,b){return c.map(function(y){return C.fromStepping(b?C.getStep(y):y)})}function at(c){function b(Ie,Ce){return Number((Ie+Ce).toFixed(7))}var y=W(c),$={},U=C.xVal[0],j=C.xVal[C.xVal.length-1],J=!1,Q=!1,Re=0;return y=ug(y.slice().sort(function(Ie,Ce){return Ie-Ce})),y[0]!==U&&(y.unshift(U),J=!0),y[y.length-1]!==j&&(y.push(j),Q=!0),y.forEach(function(Ie,Ce){var $e,ge,He,Je=Ie,Ue=y[Ce+1],We,qt,g,K,V,ce,Ae,v=c.mode===un.Steps;for(v&&($e=C.xNumSteps[Ce]),$e||($e=Ue-Je),Ue===void 0&&(Ue=Je),$e=Math.max($e,1e-7),ge=Je;ge<=Ue;ge=b(ge,$e)){for(We=C.toStepping(ge),qt=We-Re,V=qt/(c.density||1),ce=Math.round(V),Ae=qt/ce,He=1;He<=ce;He+=1)g=Re+He*Ae,$[g.toFixed(5)]=[C.fromStepping(g),0];K=y.indexOf(ge)>-1?vt.LargeValue:v?vt.SmallValue:vt.NoValue,!Ce&&J&&ge!==Ue&&(K=0),ge===Ue&&Q||($[We.toFixed(5)]=[ge,K]),Re=We}}),$}function oe(c,b,y){var $,U,j=P.createElement("div"),J=($={},$[vt.None]="",$[vt.NoValue]=t.cssClasses.valueNormal,$[vt.LargeValue]=t.cssClasses.valueLarge,$[vt.SmallValue]=t.cssClasses.valueSub,$),Q=(U={},U[vt.None]="",U[vt.NoValue]=t.cssClasses.markerNormal,U[vt.LargeValue]=t.cssClasses.markerLarge,U[vt.SmallValue]=t.cssClasses.markerSub,U),Re=[t.cssClasses.valueHorizontal,t.cssClasses.valueVertical],Ie=[t.cssClasses.markerHorizontal,t.cssClasses.markerVertical];dt(j,t.cssClasses.pips),dt(j,t.ort===0?t.cssClasses.pipsHorizontal:t.cssClasses.pipsVertical);function Ce(ge,He){var Je=He===t.cssClasses.value,Ue=Je?Re:Ie,We=Je?J:Q;return He+" "+Ue[t.ort]+" "+We[ge]}function $e(ge,He,Je){if(Je=b?b(He,Je):Je,Je!==vt.None){var Ue=G(j,!1);Ue.className=Ce(Je,t.cssClasses.marker),Ue.style[t.style]=ge+"%",Je>vt.NoValue&&(Ue=G(j,!1),Ue.className=Ce(Je,t.cssClasses.value),Ue.setAttribute("data-value",String(He)),Ue.style[t.style]=ge+"%",Ue.innerHTML=String(y.to(He)))}}return Object.keys(c).forEach(function(ge){$e(ge,c[ge][0],c[ge][1])}),j}function le(){S&&(Ml(S),S=null)}function R(c){le();var b=at(c),y=c.filter,$=c.format||{to:function(U){return String(Math.round(U))}};return S=a.appendChild(oe(b,y,$)),S}function ne(){var c=o.getBoundingClientRect(),b="offset"+["Width","Height"][t.ort];return t.ort===0?c.width||o[b]:c.height||o[b]}function Te(c,b,y,$){var U=function(J){var Q=lt(J,$.pageOffset,$.target||b);if(!Q||we()&&!$.doNotReject||vg(a,t.cssClasses.tap)&&!$.doNotReject||c===r.start&&Q.buttons!==void 0&&Q.buttons>1||$.hover&&Q.buttons)return!1;l||Q.preventDefault(),Q.calcPoint=Q.points[t.ort],y(Q,$)},j=[];return c.split(" ").forEach(function(J){b.addEventListener(J,U,l?{passive:!0}:!1),j.push([J,U])}),j}function lt(c,b,y){var $=c.type.indexOf("touch")===0,U=c.type.indexOf("mouse")===0,j=c.type.indexOf("pointer")===0,J=0,Q=0;if(c.type.indexOf("MSPointer")===0&&(j=!0),c.type==="mousedown"&&!c.buttons&&!c.touches)return!1;if($){var Re=function($e){var ge=$e.target;return ge===y||y.contains(ge)||c.composed&&c.composedPath().shift()===y};if(c.type==="touchstart"){var Ie=Array.prototype.filter.call(c.touches,Re);if(Ie.length>1)return!1;J=Ie[0].pageX,Q=Ie[0].pageY}else{var Ce=Array.prototype.find.call(c.changedTouches,Re);if(!Ce)return!1;J=Ce.pageX,Q=Ce.pageY}}return b=b||Rs(P),(U||j)&&(J=c.clientX+b.x,Q=c.clientY+b.y),c.pageOffset=b,c.points=[J,Q],c.cursor=U||j,c}function Mt(c){var b=c-pg(o,t.ort),y=b*100/ne();return y=$l(y),t.dir?100-y:y}function Vt(c){var b=100,y=!1;return u.forEach(function($,U){if(!de(U)){var j=k[U],J=Math.abs(j-c),Q=J===100&&b===100,Re=J<b,Ie=J<=b&&c>j;(Re||Ie||Q)&&(y=U,b=J)}}),y}function Et(c,b){c.type==="mouseout"&&c.target.nodeName==="HTML"&&c.relatedTarget===null&&Pt(c,b)}function Lt(c,b){if(navigator.appVersion.indexOf("MSIE 9")===-1&&c.buttons===0&&b.buttonsProperty!==0)return Pt(c,b);var y=(t.dir?-1:1)*(c.calcPoint-b.startCalcPoint),$=y*100/b.baseSize;ut(y>0,$,b.locations,b.handleNumbers,b.connect)}function Pt(c,b){b.handle&&(Br(b.handle,t.cssClasses.active),O-=1),b.listeners.forEach(function(y){H.removeEventListener(y[0],y[1])}),O===0&&(Br(a,t.cssClasses.drag),ln(),c.cursor&&(I.style.cursor="",I.removeEventListener("selectstart",Dl))),t.events.smoothSteps&&(b.handleNumbers.forEach(function(y){ct(y,k[y],!0,!0,!1,!1)}),b.handleNumbers.forEach(function(y){Me("update",y)})),b.handleNumbers.forEach(function(y){Me("change",y),Me("set",y),Me("end",y)})}function et(c,b){if(!b.handleNumbers.some(de)){var y;if(b.handleNumbers.length===1){var $=u[b.handleNumbers[0]];y=$.children[0],O+=1,dt(y,t.cssClasses.active)}c.stopPropagation();var U=[],j=Te(r.move,H,Lt,{target:c.target,handle:y,connect:b.connect,listeners:U,startCalcPoint:c.calcPoint,baseSize:ne(),pageOffset:c.pageOffset,handleNumbers:b.handleNumbers,buttonsProperty:c.buttons,locations:k.slice()}),J=Te(r.end,H,Pt,{target:c.target,handle:y,listeners:U,doNotReject:!0,handleNumbers:b.handleNumbers}),Q=Te("mouseout",H,Et,{target:c.target,handle:y,listeners:U,doNotReject:!0,handleNumbers:b.handleNumbers});U.push.apply(U,j.concat(J,Q)),c.cursor&&(I.style.cursor=getComputedStyle(c.target).cursor,u.length>1&&dt(a,t.cssClasses.drag),I.addEventListener("selectstart",Dl,!1)),b.handleNumbers.forEach(function(Re){Me("start",Re)})}}function _t(c){c.stopPropagation();var b=Mt(c.calcPoint),y=Vt(b);y!==!1&&(t.events.snap||Ol(a,t.cssClasses.tap,t.animationDuration),ct(y,b,!0,!0),ln(),Me("slide",y,!0),Me("update",y,!0),t.events.snap?et(c,{handleNumbers:[y]}):(Me("change",y,!0),Me("set",y,!0)))}function yt(c){var b=Mt(c.calcPoint),y=C.getStep(b),$=C.fromStepping(y);Object.keys(D).forEach(function(U){U.split(".")[0]==="hover"&&D[U].forEach(function(j){j.call(Pe,$)})})}function Ge(c,b){if(we()||de(b))return!1;var y=["Left","Right"],$=["Down","Up"],U=["PageDown","PageUp"],j=["Home","End"];t.dir&&!t.ort?y.reverse():t.ort&&!t.dir&&($.reverse(),U.reverse());var J=c.key.replace("Arrow",""),Q=J===U[0],Re=J===U[1],Ie=J===$[0]||J===y[0]||Q,Ce=J===$[1]||J===y[1]||Re,$e=J===j[0],ge=J===j[1];if(!Ie&&!Ce&&!$e&&!ge)return!0;c.preventDefault();var He;if(Ce||Ie){var Je=Ie?0:1,Ue=On(b),We=Ue[Je];if(We===null)return!1;We===!1&&(We=C.getDefaultStep(k[b],Ie,t.keyboardDefaultStep)),Re||Q?We*=t.keyboardPageMultiplier:We*=t.keyboardMultiplier,We=Math.max(We,1e-7),We=(Ie?-1:1)*We,He=E[b]+We}else ge?He=t.spectrum.xVal[t.spectrum.xVal.length-1]:He=t.spectrum.xVal[0];return ct(b,C.toStepping(He),!0,!0),Me("slide",b),Me("update",b),Me("change",b),Me("set",b),!1}function tt(c){c.fixed||u.forEach(function(b,y){Te(r.start,b.children[0],et,{handleNumbers:[y]})}),c.tap&&Te(r.start,o,_t,{}),c.hover&&Te(r.move,o,yt,{hover:!0}),c.drag&&f.forEach(function(b,y){if(!(b===!1||y===0||y===f.length-1)){var $=u[y-1],U=u[y],j=[b],J=[$,U],Q=[y-1,y];dt(b,t.cssClasses.draggable),c.fixed&&(j.push($.children[0]),j.push(U.children[0])),c.dragAll&&(J=u,Q=x),j.forEach(function(Re){Te(r.start,Re,et,{handles:J,handleNumbers:Q,connect:b})})}})}function nt(c,b){D[c]=D[c]||[],D[c].push(b),c.split(".")[0]==="update"&&u.forEach(function(y,$){Me("update",$)})}function kt(c){return c===on.aria||c===on.tooltips}function xt(c){var b=c&&c.split(".")[0],y=b?c.substring(b.length):c;Object.keys(D).forEach(function($){var U=$.split(".")[0],j=$.substring(U.length);(!b||b===U)&&(!y||y===j)&&(!kt(j)||y===j)&&delete D[$]})}function Me(c,b,y){Object.keys(D).forEach(function($){var U=$.split(".")[0];c===U&&D[$].forEach(function(j){j.call(Pe,E.map(t.format.to),b,E.slice(),y||!1,k.slice(),Pe)})})}function ot(c,b,y,$,U,j,J){var Q;return u.length>1&&!t.events.unconstrained&&($&&b>0&&(Q=C.getAbsoluteDistance(c[b-1],t.margin,!1),y=Math.max(y,Q)),U&&b<u.length-1&&(Q=C.getAbsoluteDistance(c[b+1],t.margin,!0),y=Math.min(y,Q))),u.length>1&&t.limit&&($&&b>0&&(Q=C.getAbsoluteDistance(c[b-1],t.limit,!1),y=Math.min(y,Q)),U&&b<u.length-1&&(Q=C.getAbsoluteDistance(c[b+1],t.limit,!0),y=Math.max(y,Q))),t.padding&&(b===0&&(Q=C.getAbsoluteDistance(0,t.padding[0],!1),y=Math.max(y,Q)),b===u.length-1&&(Q=C.getAbsoluteDistance(100,t.padding[1],!0),y=Math.min(y,Q))),J||(y=C.getStep(y)),y=$l(y),y===c[b]&&!j?!1:y}function qe(c,b){var y=t.ort;return(y?b:c)+", "+(y?c:b)}function ut(c,b,y,$,U){var j=y.slice(),J=$[0],Q=t.events.smoothSteps,Re=[!c,c],Ie=[c,!c];$=$.slice(),c&&$.reverse(),$.length>1?$.forEach(function($e,ge){var He=ot(j,$e,j[$e]+b,Re[ge],Ie[ge],!1,Q);He===!1?b=0:(b=He-j[$e],j[$e]=He)}):Re=Ie=[!0];var Ce=!1;$.forEach(function($e,ge){Ce=ct($e,y[$e]+b,Re[ge],Ie[ge],!1,Q)||Ce}),Ce&&($.forEach(function($e){Me("update",$e),Me("slide",$e)}),U!=null&&Me("drag",J))}function Ct(c,b){return t.dir?100-c-b:c}function Dt(c,b){k[c]=b,E[c]=C.fromStepping(b);var y=Ct(b,0)-te,$="translate("+qe(y+"%","0")+")";if(u[c].style[t.transformRule]=$,t.events.invertConnects&&k.length>1){var U=k.every(function(j,J,Q){return J===0||j>=Q[J-1]});if(L!==!U){Qt();return}}Ot(c),Ot(c+1),L&&(Ot(c-1),Ot(c+2))}function ln(){x.forEach(function(c){var b=k[c]>50?-1:1,y=3+(u.length+b*c);u[c].style.zIndex=String(y)})}function ct(c,b,y,$,U,j){return U||(b=ot(k,c,b,y,$,!1,j)),b===!1?!1:(Dt(c,b),!0)}function Ot(c){if(f[c]){var b=k.slice();L&&b.sort(function(Q,Re){return Q-Re});var y=0,$=100;c!==0&&(y=b[c-1]),c!==f.length-1&&($=b[c]);var U=$-y,j="translate("+qe(Ct(y,U)+"%","0")+")",J="scale("+qe(U/100,"1")+")";f[c].style[t.transformRule]=j+" "+J}}function Zt(c,b){return c===null||c===!1||c===void 0||(typeof c=="number"&&(c=String(c)),c=t.format.from(c),c!==!1&&(c=C.toStepping(c)),c===!1||isNaN(c))?k[b]:c}function Nt(c,b,y){var $=Yr(c),U=k[0]===void 0;b=b===void 0?!0:b,t.animate&&!U&&Ol(a,t.cssClasses.tap,t.animationDuration),x.forEach(function(Q){ct(Q,Zt($[Q],Q),!0,!1,y)});var j=x.length===1?0:1;if(U&&C.hasNoSize()&&(y=!0,k[0]=0,x.length>1)){var J=100/(x.length-1);x.forEach(function(Q){k[Q]=Q*J})}for(;j<x.length;++j)x.forEach(function(Q){ct(Q,k[Q],!0,!0,y)});ln(),x.forEach(function(Q){Me("update",Q),$[Q]!==null&&b&&Me("set",Q)})}function St(c){Nt(t.start,c)}function pt(c,b,y,$){if(c=Number(c),!(c>=0&&c<x.length))throw new Error("noUiSlider: invalid handle number, got: "+c);ct(c,Zt(b,c),!0,!0,$),Me("update",c),y&&Me("set",c)}function At(c){if(c===void 0&&(c=!1),c)return E.length===1?E[0]:E.slice(0);var b=E.map(t.format.to);return b.length===1?b[0]:b}function bn(){for(xt(on.aria),xt(on.tooltips),Object.keys(t.cssClasses).forEach(function(c){Br(a,t.cssClasses[c])});a.firstChild;)a.removeChild(a.firstChild);delete a.noUiSlider}function On(c){var b=k[c],y=C.getNearbySteps(b),$=E[c],U=y.thisStep.step,j=null;if(t.snap)return[$-y.stepBefore.startValue||null,y.stepAfter.startValue-$||null];U!==!1&&$+U>y.stepAfter.startValue&&(U=y.stepAfter.startValue-$),$>y.thisStep.startValue?j=y.thisStep.step:y.stepBefore.step===!1?j=!1:j=$-y.stepBefore.highestStep,b===100?U=null:b===0&&(j=null);var J=C.countStepDecimals();return U!==null&&U!==!1&&(U=Number(U.toFixed(J))),j!==null&&j!==!1&&(j=Number(j.toFixed(J))),[j,U]}function Tt(){return x.map(On)}function Rt(c,b){var y=At(),$=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];$.forEach(function(j){c[j]!==void 0&&(n[j]=c[j])});var U=Os(n);$.forEach(function(j){c[j]!==void 0&&(t[j]=U[j])}),C=U.spectrum,t.margin=U.margin,t.limit=U.limit,t.padding=U.padding,t.pips?R(t.pips):le(),t.tooltips?pe():Ke(),k=[],Nt(Fi(c.start)?c.start:y,b),c.connect&&wn()}function wn(){for(;s.firstChild;)s.removeChild(s.firstChild);for(var c=0;c<=t.handles;c++)f[c]=re(s,t.connect[c]),Ot(c);tt({drag:t.events.drag,fixed:!0})}function Qt(){L=!L,Ms(t,t.connect.map(function(c){return!c})),wn()}function Qn(){o=_(a),Z(t.connect,o),tt(t.events),Nt(t.start),t.pips&&R(t.pips),t.tooltips&&pe(),ve()}Qn();var Pe={destroy:bn,steps:Tt,on:nt,off:xt,get:At,set:Nt,setHandle:pt,reset:St,disable:be,enable:fe,__moveHandles:function(c,b,y){ut(c,b,k,y)},options:n,updateOptions:Rt,target:a,removePips:le,removeTooltips:Ke,getPositions:function(){return k.slice()},getTooltips:function(){return M},getOrigins:function(){return u},pips:R};return Pe}function Qg(e,t){if(!e||!e.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=Os(t),r=_g(e,n,t);return e.noUiSlider=r,r}var qg={__spectrum:Is,cssClasses:Bs,create:Qg};function zl(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;const n=t.slice().sort();return e.length===t.length&&e.slice().sort().every(function(r,i){return r===n[i]})}function Kg(e,t,n){const{orientation:r,direction:i,tooltips:l,step:a,min:o,max:s,merge:u,id:f,disabled:S,options:M,classes:C,format:E,lazy:k,ariaLabelledby:x,aria:O}=Ze(e),D=n.value,L=n.initialValue,P=n.tooltipsFormat,H=n.tooltipsMerge,I=n.tooltipFormat,te=n.classList,G=rt(null),z=rt(null),re=rt(!1),Z=Le(()=>{let W={cssPrefix:"",cssClasses:te.value,orientation:r.value,direction:i.value,tooltips:l.value?P.value:!1,connect:"lower",start:Ir(D.value)?o.value:D.value,range:{min:o.value,max:s.value}};if(a.value>0&&(W.step=a.value),Array.isArray(D.value)&&(W.connect=!0),x&&x.value||O&&Object.keys(O.value).length){let ee=Array.isArray(D.value)?D.value:[D.value];W.handleAttributes=ee.map(at=>Object.assign({},O.value,x&&x.value?{"aria-labelledby":x.value}:{}))}return E.value&&(W.ariaFormat=I.value),W}),_=Le(()=>{let W={id:f&&f.value?f.value:void 0};return S.value&&(W.disabled=!0),W}),ae=Le(()=>Array.isArray(D.value)),we=()=>{fe(L.value)},de=()=>{let W=z.value.get();return Array.isArray(W)?W.map(ee=>parseFloat(ee)):parseFloat(W)},be=(W,ee=!0)=>{z.value.set(W,ee)},fe=W=>{t.emit("input",W),t.emit("update:modelValue",W),t.emit("update",W)},Ke=()=>{z.value=qg.create(G.value,Object.assign({},Z.value,M.value)),l.value&&ae.value&&u.value>=0&&H(G.value,u.value," - "),z.value.on("set",()=>{const W=de();t.emit("change",W),t.emit("set",W),k.value&&fe(W)}),z.value.on("update",()=>{if(!re.value)return;const W=de();if(ae.value&&zl(D.value,W)||!ae.value&&D.value==W){t.emit("update",W);return}k.value||fe(W)}),z.value.on("start",()=>{t.emit("start",de())}),z.value.on("end",()=>{t.emit("end",de())}),z.value.on("slide",()=>{t.emit("slide",de())}),z.value.on("drag",()=>{t.emit("drag",de())}),G.value.querySelectorAll("[data-handle]").forEach(W=>{W.onblur=()=>{G.value&&te.value.focused.split(" ").forEach(ee=>{G.value.classList.remove(ee)})},W.onfocus=()=>{te.value.focused.split(" ").forEach(ee=>{G.value.classList.add(ee)})}}),re.value=!0},pe=()=>{z.value.off(),z.value.destroy(),z.value=null},ve=(W,ee)=>{re.value=!1,pe(),Ke()};return Vr(Ke),Xd(pe),je(ae,ve,{immediate:!1}),je(o,ve,{immediate:!1}),je(s,ve,{immediate:!1}),je(a,ve,{immediate:!1}),je(r,ve,{immediate:!1}),je(i,ve,{immediate:!1}),je(l,ve,{immediate:!1}),je(u,ve,{immediate:!1}),je(E,ve,{immediate:!1,deep:!0}),je(M,ve,{immediate:!1,deep:!0}),je(C,ve,{immediate:!1,deep:!0}),je(D,(W,ee)=>{ee&&(typeof ee=="object"&&typeof W=="object"&&W&&Object.keys(ee)>Object.keys(W)||typeof ee=="object"&&typeof W!="object"||Ir(W))&&ve()},{immediate:!1}),je(D,W=>{if(Ir(W)){be(o.value,!1);return}let ee=de();ae.value&&!Array.isArray(ee)&&(ee=[ee]),(ae.value&&!zl(W,ee)||!ae.value&&W!=ee)&&be(W,!1)},{deep:!0}),{slider:G,slider$:z,isRange:ae,sliderProps:_,init:Ke,destroy:pe,refresh:ve,update:be,reset:we}}const Gg={value:{validator:function(e){return t=>typeof t=="number"||t instanceof Array||t===null||t===void 0||t===!1},required:!1},modelValue:{validator:function(e){return t=>typeof t=="number"||t instanceof Array||t===null||t===void 0||t===!1},required:!1}};var Qa={name:"Slider",emits:["input","update:modelValue","start","slide","drag","update","change","set","end"],props:{...Gg,id:{type:[String,Number],required:!1},disabled:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},orientation:{type:String,required:!1,default:"horizontal"},direction:{type:String,required:!1,default:"ltr"},tooltips:{type:Boolean,required:!1,default:!0},options:{type:Object,required:!1,default:()=>({})},merge:{type:Number,required:!1,default:-1},format:{type:[Object,Function,Boolean],required:!1,default:null},classes:{type:Object,required:!1,default:()=>({})},showTooltip:{type:String,required:!1,default:"always"},tooltipPosition:{type:String,required:!1,default:null},lazy:{type:Boolean,required:!1,default:!0},ariaLabelledby:{type:String,required:!1,default:void 0},aria:{required:!1,type:Object,default:()=>({})}},setup(e,t){const n=lg(e),r=og(e),i=sg(e,t,{value:n.value,classList:r.classList}),l=Kg(e,t,{value:n.value,initialValue:n.initialValue,tooltipFormat:i.tooltipFormat,tooltipsFormat:i.tooltipsFormat,tooltipsMerge:i.tooltipsMerge,classList:r.classList});return{...r,...i,...l}}};function Jg(e,t,n,r,i,l){return d(),h("div",q(e.sliderProps,{ref:"slider"}),null,16)}Qa.render=Jg;Qa.__file="node_modules/@vueform/slider/src/Slider.vue";var qa={};function Yg(e,t,n,r,i,l){const a=se("Slider");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.wrapper)},[m(" @vueform/slider component "),xe(a,q({value:e.value,modelValue:e.value},e.fieldOptions,{aria:e.aria,classes:e.classes.slider,id:e.fieldId,ref:"input",onUpdate:e.handleUpdate,onChange:e.handleChange}),null,16,["value","modelValue","aria","classes","id","onUpdate","onChange"])],2)]),_:2},[ie(e.elementSlots,(o,s)=>({name:s,fn:N(()=>[T(e.$slots,s,{el$:e.el$},()=>[(d(),A(F(o),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}qa.render=Yg;qa.__file="themes/blank/templates/elements/SliderElement.vue";var $s={name:"SliderElement",render:qa.render,components:{Slider:Qa},data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-slider-wrapper",wrapper_sm:"vf-slider-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-slider-wrapper-lg",slider:{target:"vf-slider-target",target_sm:"vf-slider-target-sm",target_md:"vf-slider-target-md",target_lg:"vf-slider-target-lg",focused:"vf-slider-focused",tooltipFocus:"vf-slider-tooltip-focus",tooltipDrag:"vf-slider-tooltip-drag",ltr:"vf-slider-ltr",rtl:"vf-slider-rtl",horizontal:"vf-slider-horizontal",horizontal_sm:"vf-slider-horizontal-sm",horizontal_md:"vf-slider-horizontal-md",horizontal_lg:"vf-slider-horizontal-lg",vertical:"vf-slider-vertical",vertical_sm:"vf-slider-vertical-sm",vertical_md:"vf-slider-vertical-md",vertical_lg:"vf-slider-vertical-lg",textDirectionRtl:"vf-slider-txt-dir-rtl",textDirectionLtr:"vf-slider-txt-dir-ltr",base:"vf-slider-base",base_sm:"vf-slider-base-sm",base_md:"vf-slider-base-md",base_lg:"vf-slider-base-lg",connects:"vf-slider-connects",connects_sm:"vf-slider-connects-sm",connects_md:"vf-slider-connects-md",connects_lg:"vf-slider-connects-lg",connect:"vf-slider-connect",connect_sm:"vf-slider-connect-sm",connect_md:"vf-slider-connect-md",connect_lg:"vf-slider-connect-lg",origin:"vf-slider-origin",handle:"vf-slider-handle",handle_sm:"vf-slider-handle-sm",handle_md:"vf-slider-handle-md",handle_lg:"vf-slider-handle-lg",handleUpper:"vf-handle-upper",handleLower:"vf-handle-lower",touchArea:"vf-slider-touch-area",tooltip:"vf-slider-tooltip",tooltip_sm:"vf-slider-tooltip-sm",tooltip_md:"vf-slider-tooltip-md",tooltip_lg:"vf-slider-tooltip-lg",tooltipTop:"vf-slider-tooltip-top",tooltipTop_sm:"vf-slider-tooltip-top-sm",tooltipTop_md:"vf-slider-tooltip-top-md",tooltipTop_lg:"vf-slider-tooltip-top-lg",tooltipBottom:"vf-slider-tooltip-bottom",tooltipBottom_sm:"vf-slider-tooltip-bottom-sm",tooltipBottom_md:"vf-slider-tooltip-bottom-md",tooltipBottom_lg:"vf-slider-tooltip-bottom-lg",tooltipLeft:"vf-slider-tooltip-left",tooltipLeft_sm:"vf-slider-tooltip-left-sm",tooltipLeft_md:"vf-slider-tooltip-left-md",tooltipLeft_lg:"vf-slider-tooltip-left-lg",tooltipRight:"vf-slider-tooltip-right",tooltipRight_sm:"vf-slider-tooltip-right-sm",tooltipRight_md:"vf-slider-tooltip-right-md",tooltipRight_lg:"vf-slider-tooltip-right-lg",tooltipHidden:"vf-slider-tooltip-hidden",active:"vf-slider-active",draggable:"vf-slider-draggable",tap:"vf-slider-state-tap",drag:"vf-slider-state-drag",$slider:(e,{Size:t})=>[e.slider.slider,e.slider[`slider_${t}`]],$horizontal:(e,{Size:t})=>[e.slider.horizontal,e.slider[`horizontal_${t}`]],$vertical:(e,{Size:t})=>[e.slider.vertical,e.slider[`vertical_${t}`]],$base:(e,{Size:t})=>[e.slider.base,e.slider[`base_${t}`]],$connects:(e,{Size:t})=>[e.slider.connects,e.slider[`connects_${t}`]],$connect:(e,{Size:t})=>[e.slider.connect,e.slider[`connect_${t}`]],$handle:(e,{Size:t})=>[e.slider.handle,e.slider[`handle_${t}`]],$tooltip:(e,{Size:t})=>[e.slider.tooltip,e.slider[`tooltip_${t}`]],$tooltipTop:(e,{Size:t})=>[e.slider.tooltipTop,e.slider[`tooltipTop_${t}`]],$tooltipBottom:(e,{Size:t})=>[e.slider.tooltipBottom,e.slider[`tooltipBottom_${t}`]],$tooltipLeft:(e,{Size:t})=>[e.slider.tooltipLeft,e.slider[`tooltipLeft_${t}`]],$tooltipRight:(e,{Size:t})=>[e.slider.tooltipRight,e.slider[`tooltipRight_${t}`]]},$wrapper:(e,{Size:t})=>[e.wrapper,e[`wrapper_${t}`]]}}}},Xg=`.vf-slider-wrapper {
  margin-top: calc((var(--vf-min-height-input) - var(--vf-slider-height)) / 2);
}

.vf-slider-wrapper.vf-slider-wrapper-sm {
  margin-top: calc((var(--vf-min-height-input-sm) - var(--vf-slider-height)) / 2);
  margin-bottom: 0.25rem;
}

.vf-slider-wrapper.vf-slider-wrapper-lg {
  margin-top: calc((var(--vf-min-height-input-lg) - var(--vf-slider-height)) / 2);
}

/* @vueform/slider styles */

.vf-slider-target,
.vf-slider-target * {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  touch-action: none;
  -moz-user-select: none;
  user-select: none;
  box-sizing: border-box;
}

.vf-slider-target {
  position: relative;
  margin: calc((var(--vf-line-height) - var(--vf-slider-height)) / 2) 0;
}

.vf-slider-target[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.vf-slider-target.vf-slider-target-sm {
  margin: calc((var(--vf-line-height-sm) - var(--vf-slider-height-sm)) / 2) 0;
}

.vf-slider-target.vf-slider-target-lg {
  margin: calc((var(--vf-line-height-lg) - var(--vf-slider-height-lg)) / 2) 0;
}

.vf-slider-target.vf-slider-horizontal {
  height: var(--vf-slider-height);
}

.vf-slider-target.vf-slider-horizontal.vf-slider-horizontal-sm {
  height: var(--vf-slider-height-sm);
}

.vf-slider-target.vf-slider-horizontal.vf-slider-horizontal-lg {
  height: var(--vf-slider-height-lg);
}

.vf-slider-target.vf-slider-vertical {
  width: var(--vf-slider-height);
  height: var(--vf-slider-height-vertical);
}

.vf-slider-target.vf-slider-vertical.vf-slider-vertical-sm {
  width: var(--vf-slider-height-sm);
  height: var(--vf-slider-height-vertical-sm);
}

.vf-slider-target.vf-slider-vertical.vf-slider-vertical-lg {
  width: var(--vf-slider-height-lg);
  height: var(--vf-slider-height-vertical-lg);
}

.vf-slider-target.vf-slider-state-drag * {
  cursor: inherit !important;
}

.vf-slider-base,
.vf-slider-connects {
  width: 100%;
  height: 100%;
  position: relative;
}

.vf-slider-base {
  box-shadow: var(--vf-shadow-input);
  background-color: var(--vf-bg-passive);
  border-radius: var(--vf-radius-slider);
  z-index: 1;
}

.vf-slider-base.vf-slider-base-sm {
  border-radius: var(--vf-radius-slider-sm);
}

.vf-slider-base.vf-slider-base-lg {
  border-radius: var(--vf-radius-slider-lg);
}

.vf-slider-connects {
  overflow: hidden;
  z-index: 0;
  border-radius: var(--vf-radius-slider);
}

.vf-slider-connects.vf-slider-connects-sm {
  border-radius: var(--vf-radius-slider-sm);
}

.vf-slider-connects.vf-slider-connects-lg {
  border-radius: var(--vf-radius-slider-lg);
}

.vf-slider-connect,
.vf-slider-origin {
  will-change: transform;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform-style: preserve-3d;
  transform-origin: 0 0;
  transform-style: flat;
}

.vf-slider-connect {
  background: var(--vf-primary);
  border-radius: var(--vf-radius-slider);
  cursor: pointer;
}

.vf-slider-connect.vf-slider-connect-sm {
  border-radius: var(--vf-radius-slider-sm);
}

.vf-slider-connect.vf-slider-connect-lg {
  border-radius: var(--vf-radius-slider-lg);
}

[disabled] .vf-slider-connect {
  background: var(--vf-slider-connect-bg-disabled);
}

.vf-slider-txt-dir-rtl.vf-slider-horizontal .vf-slider-origin {
  left: 0;
  right: auto;
}

.vf-slider-vertical .vf-slider-origin {
  top: -100%;
  width: 0;
}

.vf-slider-horizontal .vf-slider-origin {
  height: 0;
}

.vf-slider-state-tap .vf-slider-connect,
.vf-slider-state-tap .vf-slider-origin {
  transition: transform 0.3s;
}

.vf-slider-handle {
  backface-visibility: hidden;
  position: absolute;
  width: var(--vf-slider-handle-size);
  height: var(--vf-slider-handle-size);
  background-color: var(--vf-bg-slider-handle);
  border-radius: 999px;
  box-shadow: var(--vf-shadow-handles);
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  cursor: grab;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.vf-slider-handle:focus {
  box-shadow: var(--vf-shadow-handles-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-slider-handle:hover {
  box-shadow: var(--vf-shadow-handles-hover);
}

.vf-slider-handle.vf-slider-handle-sm {
  height: var(--vf-slider-handle-size-sm);
  width: var(--vf-slider-handle-size-sm);
}

.vf-slider-handle.vf-slider-handle-lg {
  height: var(--vf-slider-handle-size-lg);
  width: var(--vf-slider-handle-size-lg);
}

.vf-slider-horizontal .vf-slider-handle {
  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * -1);
  right: calc(var(--vf-slider-handle-size) / 2 * -1);
}

.vf-slider-horizontal .vf-slider-handle.vf-slider-handle-sm {
  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * -1);
  right: calc(var(--vf-slider-handle-size-sm) / 2 * -1);
}

.vf-slider-horizontal .vf-slider-handle.vf-slider-handle-lg {
  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * -1);
  right: calc(var(--vf-slider-handle-size-lg) / 2 * -1);
}

.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle {
  left: calc(var(--vf-slider-handle-width) / 2 * -1);
  right: auto;
}

.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle.vf-slider-handle-sm {
  left: calc(var(--vf-slider-handle-width-sm) / 2 * -1);
}

.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle.vf-slider-handle-lg {
  left: calc(var(--vf-slider-handle-width-lg) / 2 * -1);
}

.vf-slider-vertical {
  width: var(--vf-slider-height);
  height: var(--vf-slider-vertical-height);
}

.vf-slider-vertical .vf-slider-handle {
  bottom: calc(var(--vf-slider-handle-size) / 2 * -1);
  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * -1);
}

.vf-slider-vertical .vf-slider-handle.vf-slider-handle-sm {
  bottom: calc(var(--vf-slider-handle-size-sm) / 2 * -1);
  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * -1);
}

.vf-slider-vertical .vf-slider-handle.vf-slider-handle-lg {
  bottom: calc(var(--vf-slider-handle-size-lg) / 2 * -1);
  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * -1);
}

.vf-slider-touch-area {
  height: 100%;
  width: 100%;
}

.vf-slider-tooltip {
  position: absolute;
  display: block;
  font-weight: 600;
  white-space: nowrap;
  min-width: 1.25rem;
  text-align: center;
  border: 1px solid var(--vf-border-color-slider-tooltip);
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: var(--vf-py-slider-tooltip) var(--vf-px-slider-tooltip);
  border-radius: var(--vf-radius-small);
}

.vf-slider-tooltip.vf-slider-tooltip-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  padding: var(--vf-py-slider-tooltip-sm) var(--vf-px-slider-tooltip-sm);
  border-radius: var(--vf-radius-small-sm);
}

.vf-slider-tooltip.vf-slider-tooltip-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  padding: var(--vf-py-slider-tooltip-lg) var(--vf-px-slider-tooltip-lg);
  border-radius: var(--vf-radius-small-lg);
}

.vf-slider-tooltip-focus .vf-slider-tooltip,
.vf-slider-tooltip-drag .vf-slider-tooltip {
  display: none !important;
}

.vf-slider-tooltip-focus.vf-slider-focused .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),
.vf-slider-tooltip-drag.vf-slider-state-drag .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),
.vf-slider-tooltip-drag .vf-slider-active .vf-slider-tooltip {
  display: block !important;
}

[disabled].vf-slider-target,
[disabled].vf-slider-handle,
[disabled] .vf-slider-handle {
  cursor: not-allowed;
}

.vf-slider-horizontal .vf-slider-tooltip-top {
  transform: translate(-50%, 0);
  left: 50%;
  bottom: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-tooltip-top:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%);
  bottom: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-top-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-sm {
  bottom: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-sm:before {
  bottom: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-top-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-lg {
  bottom: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-lg:before {
  bottom: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);
  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
  border-top-color: inherit;
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top {
  bottom: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top.vf-slider-tooltip-top-sm {
  bottom: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top.vf-slider-tooltip-top-lg {
  bottom: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom {
  transform: translate(-50%, 0);
  left: 50%;
  top: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%);
  top: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-bottom-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm {
  top: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm:before {
  top: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-bottom-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg {
  top: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg:before {
  top: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);
  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
  border-bottom-color: inherit;
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom {
  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm {
  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg {
  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-vertical .vf-slider-tooltip-left {
  transform: translate(0, -50%);
  top: 50%;
  right: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-tooltip-left:before {
  content: "";
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  transform: translateY(-50%);
  right: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-left-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-sm {
  right: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-sm:before {
  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-left-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-lg {
  right: calc(var(--vf-slider-handle-siz-lg) + var(--vf-slider-tooltip-distanc-lg));
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-lg:before {
  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-left-color: inherit;
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left {
  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left.vf-slider-tooltip-left-sm {
  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left.vf-slider-tooltip-left-lg {
  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-vertical .vf-slider-tooltip-right {
  transform: translate(0, -50%);
  top: 50%;
  left: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-tooltip-right:before {
  content: "";
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  transform: translateY(-50%);
  left: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-right-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-sm {
  left: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-sm:before {
  left: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-right-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-lg {
  left: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-lg:before {
  left: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);
  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
  border-right-color: inherit;
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right {
  left: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right.vf-slider-tooltip-right-sm {
  left: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right.vf-slider-tooltip-right-lg {
  left: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip {
  transform: translate(50%, 0);
  left: auto;
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip {
  transform: translate(0, 50%);
  top: auto;
}

.vf-slider-active {
  cursor: grabbing;
}

.vf-slider-draggable {
  cursor: ew-resize;
}

.vf-slider-vertical .vf-slider-draggable {
  cursor: ns-resize;
}`;Y(Xg);$s.__file="themes/vueform/templates/elements/SliderElement.vue";var Ka={};const Zg=["innerHTML"],em=["href","target","innerHTML"],tm=["href","target"],nm=["href","target"],rm=["src","alt","title","width","height"],im=["src","alt","title","width","height"],am=["innerHTML"];function lm(e,t,n,r,i,l){return e.wrap?(d(),A(F(e.elementLayout),{key:0,ref:"container"},Oe({element:N(()=>[m(" If content is HTML "),e.isHtml&&(e.resolvedContent||["img","hr"].indexOf(e.tag)!==-1)?(d(),h(X,{key:0},[!e.tag&&e.allowHtml?(d(),h("div",q({key:0,class:e.classes.content,innerHTML:e.resolvedContent},e.attrs),null,16,Zg)):m("v-if",!0),!e.tag&&!e.allowHtml?(d(),h("div",q({key:1,class:e.classes.content},e.attrs),Se(e.content),17)):m("v-if",!0),e.tag==="a"?(d(),h("div",{key:2,class:p(e.classes.tag)},[e.allowHtml?(d(),h("a",q({key:0,href:e.href,target:e.target},e.attrs,{innerHTML:e.resolvedContent}),null,16,em)):(d(),h("a",q({key:1,href:e.href,target:e.target},e.attrs),Se(e.resolvedContent),17,tm))],2)):e.tag==="hr"?(d(),h("div",{key:3,class:p(e.classes.tag)},[w("hr",Al(tu(e.attrs)),null,16)],2)):e.tag==="img"?(d(),h("div",{key:4,class:p(e.classes.tag)},[e.href?(d(),h("a",{key:0,href:e.href,target:e.target},[w("img",q({src:e.src,alt:e.alt,title:e.title,width:e.width,height:e.height},e.attrs),null,16,rm)],8,nm)):(d(),h("img",q({key:1,src:e.src,alt:e.alt,title:e.title,width:e.width,height:e.height},e.attrs),null,16,im))],2)):e.tag?(d(),h("div",{key:5,class:p(e.classes.tag)},[e.allowHtml?(d(),A(F(e.tag),q({key:0,innerHTML:e.resolvedContent},e.attrs),null,16,["innerHTML"])):(d(),A(F(e.tag),Al(q({key:1},e.attrs)),{default:N(()=>[yo(Se(e.resolvedContent),1)]),_:1},16))],2)):m("v-if",!0)],64)):e.resolvedContent?(d(),h(X,{key:1},[m(" If content is component "),(d(),A(F(e.componentContent),{el$:e.el$},null,8,["el$"]))],2112)):(d(),h(X,{key:2},[m(" If content is a slot "),T(e.$slots,"default",{el$:e.el$},()=>[(d(),A(F(e.slotContent),{el$:e.el$},null,8,["el$"]))])],2112))]),_:2},[ie(e.elementSlots,(a,o)=>({name:o,fn:N(()=>[T(e.$slots,o,{el$:e.el$},()=>[(d(),A(F(a),{el$:e.el$},null,8,["el$"]))])])}))]),1536)):e.content&&e.isHtml?(d(),h("div",{key:1,class:p(e.classes.content),innerHTML:e.resolvedContent},null,10,am)):e.content?(d(),A(F(e.componentContent),{key:2,ref:"container"},null,512)):(d(),h("div",{key:3,class:p(e.classes.container),ref:"container"},[T(e.$slots,"default",{el$:e.el$},()=>[(d(),A(F(e.slotContent),{el$:e.el$},null,8,["el$"]))])],2))}Ka.render=lm;Ka.__file="themes/blank/templates/elements/StaticElement.vue";var Fs={name:"StaticElement",render:Ka.render,data(){return{merge:!0,defaultClasses:{container:"vf-contains-link",content:"vf-static",content_sm:"vf-static-sm",content_md:"",content_lg:"vf-static-lg",content_top_1:"vf-static-tag-top-1",content_top_2:"vf-static-tag-top-2",content_top_3:"vf-static-tag-top-3",content_bottom_1:"vf-static-tag-bottom-1",content_bottom_2:"vf-static-tag-bottom-2",content_bottom_3:"vf-static-tag-bottom-3",tag:"vf-static-tag",tag_sm:"vf-static-tag-sm",tag_md:"",tag_lg:"vf-static-tag-lg",tag_top_1:"vf-static-tag-top-1",tag_top_2:"vf-static-tag-top-2",tag_top_3:"vf-static-tag-top-3",tag_bottom_1:"vf-static-tag-bottom-1",tag_bottom_2:"vf-static-tag-bottom-2",tag_bottom_3:"vf-static-tag-bottom-3",tag_left:"vf-static-tag-left",tag_center:"vf-static-tag-center",tag_right:"vf-static-tag-right",tag_p:"vf-static-tag-p",tag_h1:"vf-static-tag-h1",tag_h2:"vf-static-tag-h2",tag_h3:"vf-static-tag-h3",tag_h4:"vf-static-tag-h4",tag_blockquote:"vf-static-tag-blockquote",tag_a:"vf-static-tag-a",tag_hr:"vf-static-tag-hr",tag_img:"vf-static-tag-img",$content:(e,{Size:t,top:n,bottom:r})=>[e.content,e[`content_${t}`],n>=1?e[`content_top_${n}`]:null,r>=1?e[`content_bottom_${r}`]:null],$tag:(e,{Size:t,tag:n,align:r,top:i,bottom:l})=>[e.tag,e[`tag_${t}`],e[`tag_${n}`],r==="left"?e.tag_left:null,r==="center"?e.tag_center:null,r==="right"?e.tag_right:null,i>=1?e[`tag_top_${i}`]:null,l>=1?e[`tag_bottom_${l}`]:null]}}}},om="/* Styles contained in scss/_static.scss */";Y(om);Fs.__file="themes/vueform/templates/elements/StaticElement.vue";var Ga={};function sm(e,t,n,r,i,l){const a=se("ElementLabelFloating"),o=se("Multiselect");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[e.hasFloating&&!e.empty?(d(),A(a,{key:0,visible:!e.empty},null,8,["visible"])):m("v-if",!0),m(" @vueform/multiselect copmonent "),xe(o,q(e.fieldOptions,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=s=>e.value=s),classes:e.classes.select,id:e.fieldId,name:e.name,options:e.resolvedOptions,disabled:e.isDisabled,placeholder:e.Placeholder,attrs:e.attrs,aria:e.aria,locale:e.form$.locale$,onSelect:e.handleSelect,onDeselect:e.handleDeselect,onSearchChange:e.handleSearchChange,onTag:e.handleTag,onOpen:e.handleOpen,onClose:e.handleClose,onClear:e.handleClear,onPaste:e.handlePaste,ref:"input"}),Oe({_:2},[ie({option:"option",noresults:"no-results",nooptions:"no-options",afterlist:"after-list",beforelist:"before-list",placeholder:"placeholder",grouplabel:"group-label",caret:"caret",clear:"clear",spinner:"spinner",default:"default"},(s,u)=>({name:u,fn:N(f=>[T(e.$slots,s,q(f,{el$:e.el$}),()=>[(d(),A(F(e.fieldSlots[s]),q(f,{el$:e.el$}),null,16,["el$"]))])])})),e.fieldOptions.mode=="tags"?{name:"tag",fn:N(({option:s,handleTagRemove:u,disabled:f})=>[T(e.$slots,"tag",{option:s,handleTagRemove:u,disabled:f,el$:e.el$},()=>[(d(),A(F(e.fieldSlots.tag),{option:s,handleTagRemove:u,disabled:f,el$:e.el$},null,8,["option","handleTagRemove","disabled","el$"]))])]),key:"0"}:void 0]),1040,["modelValue","classes","id","name","options","disabled","placeholder","attrs","aria","locale","onSelect","onDeselect","onSearchChange","onTag","onOpen","onClose","onClear","onPaste"])]),_:2},[ie(e.elementSlots,(s,u)=>({name:u,fn:N(()=>[T(e.$slots,u,{el$:e.el$},()=>[(d(),A(F(s),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Ga.render=sm;Ga.__file="themes/blank/templates/elements/TagsElement.vue";var zs={name:"TagsElement",render:Ga.render,components:{Multiselect:br},data(){return{merge:!0,defaultClasses:{container:"vf-text-type",select:{tags:"vf-multiselect-tags",tags_sm:"vf-multiselect-tags-sm",tags_md:"",tags_lg:"vf-multiselect-tags-lg",tag:"vf-multiselect-tag",tag_sm:"vf-multiselect-tag-sm",tag_md:"",tag_lg:"vf-multiselect-tag-lg",tagDisabled:"vf-multiselect-tag-disabled",tagDisabled_sm:"",tagDisabled_md:"",tagDisabled_lg:"",tagWrapper:"vf-multiselect-tag-wrapper",tagWrapperBreak:"vf-multiselect-tag-wrapper-break",tagRemove:"vf-multiselect-tag-remove",tagRemove_sm:"vf-multiselect-tag-remove-sm",tagRemove_md:"",tagRemove_lg:"vf-multiselect-tag-remove-lg",tagRemoveIcon:"vf-multiselect-tag-remove-icon",tagsSearchWrapper:"vf-multiselect-tags-search-wrapper",tagsSearchWrapper_sm:"",tagsSearchWrapper_md:"",tagsSearchWrapper_lg:"",tagsSearch:"vf-multiselect-tags-search",tagsSearch_sm:"vf-multiselect-tags-search-sm",tagsSearch_md:"",tagsSearch_lg:"vf-multiselect-tags-search-lg",tagsSearchCopy:"vf-multiselect-tags-search-copy",container:"vf-multiselect",container_enabled:"",container_disabled:"vf-multiselect-disabled",container_success:"vf-multiselect-success",container_danger:"vf-multiselect-danger",container_sm:"vf-multiselect-sm",container_md:"",container_lg:"vf-multiselect-lg",containerDisabled:"",containerOpen:"vf-multiselect-open",containerOpenTop:"vf-multiselect-open-top",containerActive:"vf-multiselect-active",containerActive_enabled:"",wrapper:"vf-multiselect-wrapper",wrapper_sm:"vf-multiselect-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-multiselect-wrapper-lg",search:"vf-multiselect-search",search_sm:"vf-multiselect-search-sm",search_md:"",search_lg:"vf-multiselect-search-lg",placeholder:"vf-multiselect-placeholder",placeholder_sm:"vf-multiselect-placeholder-sm",placeholder_md:"",placeholder_lg:"vf-multiselect-placeholder-lg",caret:"vf-multiselect-caret",caret_sm:"vf-multiselect-caret-sm",caret_md:"",caret_lg:"vf-multiselect-caret-lg",caretOpen:"vf-multiselect-caret-open",clear:"vf-multiselect-clear",clear_sm:"vf-multiselect-clear-sm",clear_md:"",clear_lg:"vf-multiselect-clear-lg",clearIcon:"vf-multiselect-clear-icon",spinner:"vf-multiselect-spinner",spinner_sm:"vf-multiselect-spinner-sm",spinner_md:"",spinner_lg:"vf-multiselect-spinner-lg",infinite:"vf-multiselect-infinite",infinite_sm:"vf-multiselect-infinite-sm",infinite_md:"",infinite_lg:"vf-multiselect-infinite-lg",infiniteSpinner:"vf-multiselect-infinite-spinner",dropdown:"vf-multiselect-dropdown",dropdown_sm:"vf-multiselect-dropdown-sm",dropdown_md:"",dropdown_lg:"vf-multiselect-dropdown-lg",dropdownTop:"vf-multiselect-dropdown-top",dropdownTop_sm:"vf-multiselect-dropdown-top-sm",dropdownTop_md:"",dropdownTop_lg:"vf-multiselect-dropdown-top-lg",dropdownHidden:"vf-multiselect-dropdown-hidden",options:"vf-multiselect-options",optionsTop:"vf-multiselect-options-top",group:"vf-multiselect-group",groupLabel:"vf-multiselect-group-label",groupLabel_sm:"vf-multiselect-group-label-sm",groupLabel_md:"",groupLabel_lg:"vf-multiselect-group-label-lg",groupLabelPointable:"vf-multiselect-group-label-pointable",groupLabelPointed:"vf-multiselect-group-label-pointed",groupLabelSelected:"vf-multiselect-group-label-selected",groupLabelDisabled:"vf-multiselect-group-label-disabled",groupLabelSelectedPointed:"vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",groupLabelSelectedDisabled:"vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",groupOptions:"vf-multiselect-group-options",option:"vf-multiselect-option",option_sm:"vf-multiselect-option-sm",option_md:"",option_lg:"vf-multiselect-option-lg",optionPointed:"vf-multiselect-option-pointed",optionSelected:"vf-multiselect-option-selected",optionDisabled:"vf-multiselect-option-disabled",optionSelectedPointed:"vf-multiselect-option-selected vf-multiselect-option-pointed",optionSelectedDisabled:"vf-multiselect-option-selected vf-multiselect-option-disabled",noOptions:"vf-multiselect-no-options",noOptions_sm:"vf-multiselect-no-options-sm",noOptions_md:"",noOptions_lg:"vf-multiselect-no-options-lg",noResults:"vf-multiselect-no-results",noResults_sm:"vf-multiselect-no-results-sm",noResults_md:"",noResults_lg:"vf-multiselect-no-results-lg",fakeInput:"vf-multiselect-fake-input",assist:"vf-assistive-text",spacer:"vf-multiselect-spacer",spacer_sm:"vf-multiselect-spacer-sm",spacer_md:"",spacer_lg:"vf-multiselect-spacer-lg",$container:(e,{Size:t,isDanger:n,isSuccess:r,isDisabled:i})=>[e.select.container,e.select[`container_${t}`],i?e.select.container_disabled:null,!i&&!r&&!n?e.select.container_enabled:null,!i&&n?e.select.container_danger:null,!i&&r?e.select.container_success:null],$containerActive:(e,{Size:t,isDanger:n,isSuccess:r,isDisabled:i})=>[e.select.containerActive,e.select[`container_${t}`],!i&&!r&&!n?e.select.containerActive_enabled:null],$wrapper:(e,{Size:t})=>[e.select.wrapper,e.select[`wrapper_${t}`]],$search:(e,{Size:t})=>[e.select.search,e.select[`search_${t}`]],$placeholder:(e,{Size:t})=>[e.select.placeholder,e.select[`placeholder_${t}`]],$caret:(e,{Size:t})=>[e.select.caret,e.select[`caret_${t}`]],$clear:(e,{Size:t})=>[e.select.clear,e.select[`clear_${t}`]],$spinner:(e,{Size:t})=>[e.select.spinner,e.select[`spinner_${t}`]],$infinite:(e,{Size:t})=>[e.select.infinite,e.select[`infinite_${t}`]],$dropdown:(e,{Size:t})=>[e.select.dropdown,e.select[`dropdown_${t}`]],$dropdownTop:(e,{Size:t})=>[e.select.dropdownTop,e.select[`dropdownTop_${t}`]],$groupLabel:(e,{Size:t})=>[e.select.groupLabel,e.select[`groupLabel_${t}`]],$option:(e,{Size:t})=>[e.select.option,e.select[`option_${t}`]],$spacer:(e,{Size:t})=>[e.select.spacer,e.select[`spacer_${t}`]],$noOptions:(e,{Size:t})=>[e.select.noOptions,e.select[`noOptions_${t}`]],$noResults:(e,{Size:t})=>[e.select.noResults,e.select[`noResults_${t}`]],$tags:(e,{Size:t})=>[e.select.tags,e.select[`tags_${t}`]],$tag:(e,{Size:t})=>[e.select.tag,e.select[`tag_${t}`]],$tagDisabled:(e,{Size:t})=>[e.select.tagDisabled,e.select[`tagDisabled_${t}`]],$tagRemove:(e,{Size:t})=>[e.select.tagRemove,e.select[`tagRemove_${t}`]],$tagsSearchWrapper:(e,{Size:t})=>[e.select.tagsSearchWrapper,e.select[`tagsSearchWrapper_${t}`]],$tagsSearch:(e,{Size:t})=>[e.select.tagsSearch,e.select[`tagsSearch_${t}`]]},$input:(e,{isDisabled:t,Size:n,isDanger:r,isSuccess:i})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!i&&!r?e.input_enabled:null,!t&&r?e.input_danger:null,!t&&i?e.input_success:null],$inputWrapper:(e,{Size:t})=>[e.inputWrapper,e[`inputWrapper_${t}`]]}}}},dm=`/* Some styles are contained in SelectElement.vue */

.vf-multiselect-tags {
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-wrap: wrap;
  margin: var(--vf-space-tags) 0 0;
  padding-left: var(--vf-py-input);
  align-items: center;
  min-width: 0;
}

.vf-multiselect-tags.vf-multiselect-tags-sm {
  padding-left: var(--vf-py-input-sm);
}

.vf-multiselect-tags.vf-multiselect-tags-lg {
  padding-left: var(--vf-py-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-tags,
.vf-floating-wrapper ~ div .vf-multiselect-tags {
  padding-left: var(--vf-px-input);
  margin: calc(var(--vf-space-tags) + var(--vf-floating-top) + 0.34375rem - 1px) 0 0;
}

.vf-floating-wrapper ~ .vf-multiselect-tags-sm,
.vf-floating-wrapper ~ div .vf-multiselect-tags-sm {
  padding-left: var(--vf-px-input-sm);
  margin: calc(var(--vf-space-tags-sm) + var(--vf-floating-top-sm) + 0.34375rem - 1px) 0 0;
}

.vf-floating-wrapper ~ .vf-multiselect-tags-lg,
.vf-floating-wrapper ~ div .vf-multiselect-tags-lg {
  padding-left: var(--vf-px-input-lg);
  margin: calc(var(--vf-space-tags-lg) + var(--vf-floating-top-lg) + 0.34375rem - 1px) 0 0;
}

.vf-multiselect-tag {
  background: var(--vf-bg-tag);
  color: var(--vf-color-tag);
  border-style: solid;
  border-width: var(--vf-border-width-tag);
  border-color: var(--vf-border-color-tag);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  font-weight: 600;
  padding: var(--vf-py-tag) 0 var(--vf-py-tag) var(--vf-px-tag);
  border-radius: var(--vf-radius-tag);
  margin-right: var(--vf-space-tags);
  margin-bottom: var(--vf-space-tags);
  display: flex;
  align-items: center;
  white-space: nowrap;
  min-width: 0;
}

.vf-multiselect-tag.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag);
  opacity: 0.5;
}

.vf-multiselect-tag.vf-multiselect-tag-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  border-radius: var(--vf-radius-tag-sm);
  padding: var(--vf-py-tag-sm) 0 var(--vf-py-tag-sm) var(--vf-px-tag-sm);
}

.vf-multiselect-tag.vf-multiselect-tag-sm.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag-sm);
}

.vf-multiselect-tag.vf-multiselect-tag-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  border-radius: var(--vf-radius-tag-lg);
  padding: var(--vf-py-tag-lg) 0 var(--vf-py-tag-lg) var(--vf-px-tag-lg);
}

.vf-multiselect-tag.vf-multiselect-tag-lg.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag-lg);
}

.vf-multiselect-tag-wrapper {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vf-multiselect-tag-wrapper-break {
  white-space: normal;
  word-break: break-all;
}

.vf-multiselect-tag-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin: 0 0.125rem;
  border-radius: var(--vf-radius-tag);
}

.vf-multiselect-tag-remove:hover {
  background: rgba(0, 0, 0, 0.1);
}

.vf-multiselect-tag-remove.vf-multiselect-tag-remove-sm {
  border-radius: var(--vf-radius-tag-sm);
}

.vf-multiselect-tag-remove.vf-multiselect-tag-remove-lg {
  border-radius: var(--vf-radius-tag-lg);
}

.vf-multiselect-tag-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: currentColor;
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
}

.vf-multiselect-tags-search-wrapper {
  display: inline-block;
  position: relative;
  margin: 0 var(--vf-space-tags) var(--vf-space-tags);
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  max-width: 100%;
}

.vf-multiselect-tags-search-copy {
  visibility: hidden;
  white-space: pre-wrap;
  display: inline-block;
  height: 1px;
  width: 100%;
}

.vf-multiselect-tags-search {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: transparent;
  padding-right: 0.5rem;
}

.vf-multiselect-tags-search::-webkit-search-decoration, .vf-multiselect-tags-search::-webkit-search-cancel-button, .vf-multiselect-tags-search::-webkit-search-results-button, .vf-multiselect-tags-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-multiselect-tags-search.vf-multiselect-tags-search-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect-tags-search.vf-multiselect-tags-search-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

[dir=rtl] .vf-multiselect-tags {
  padding-left: 0;
  padding-right: var(--vf-py-input);
}

[dir=rtl] .vf-multiselect-tags.vf-multiselect-tags-sm {
  padding-right: var(--vf-py-input-sm);
}

[dir=rtl] .vf-multiselect-tags.vf-multiselect-tags-lg {
  padding-right: var(--vf-py-input-lg);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags {
  padding-left: 0;
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags-sm,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags-sm {
  padding-left: 0;
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags-lg,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags-lg {
  padding-left: 0;
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-tag {
  padding: var(--vf-py-tag) var(--vf-px-tag) var(--vf-py-tag) 0;
  margin-right: 0;
  margin-left: var(--vf-space-tags);
}

[dir=rtl] .vf-multiselect-tag.is-disabled {
  padding-left: ar(--vf-px-tag);
}`;Y(dm);zs.__file="themes/vueform/templates/elements/TagsElement.vue";var Xr={};const um=["value","name","id","placeholder","disabled","readonly","rows","data-autogrow"];function cm(e,t,n,r,i,l){const a=se("ElementAddon"),o=se("ElementLabelFloating"),s=se("ElementLoader");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.inputContainer)},[e.hasAddonBefore?(d(),A(a,{key:0,type:"before"},{default:N(()=>[T(e.$slots,"addon-before",{},()=>[(d(),A(F(e.fieldSlots["addon-before"]),{el$:e.el$},null,8,["el$"]))])]),_:3})):m("v-if",!0),e.hasAddonAfter?(d(),A(a,{key:1,type:"after"},{default:N(()=>[T(e.$slots,"addon-after",{},()=>[(d(),A(F(e.fieldSlots["addon-after"]),{el$:e.el$},null,8,["el$"]))])]),_:3})):m("v-if",!0),e.hasFloating&&!e.empty?(d(),A(o,{key:2,visible:!e.empty},null,8,["visible"])):m("v-if",!0),ye(xe(s,null,null,512),[[Fe,e.pending]]),w("textarea",q({value:e.model,name:e.name,id:e.fieldId,class:e.classes.input,placeholder:e.Placeholder,disabled:e.isDisabled,readonly:e.isReadonly,rows:e.rows},{...e.attrs,...e.aria},{"data-autogrow":e.autogrow||void 0,onKeydown:t[0]||(t[0]=(...u)=>e.handleKeydown&&e.handleKeydown(...u)),onKeyup:t[1]||(t[1]=(...u)=>e.handleKeyup&&e.handleKeyup(...u)),onKeypress:t[2]||(t[2]=(...u)=>e.handleKeypress&&e.handleKeypress(...u)),onInput:t[3]||(t[3]=(...u)=>e.handleInput&&e.handleInput(...u)),onBlur:t[4]||(t[4]=(...u)=>e.handleBlur&&e.handleBlur(...u)),onFocus:t[5]||(t[5]=(...u)=>e.handleFocus&&e.handleFocus(...u)),ref:"input"}),null,16,um)],2)]),_:2},[ie(e.elementSlots,(u,f)=>({name:f,fn:N(()=>[T(e.$slots,f,{el$:e.el$},()=>[(d(),A(F(u),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Xr.render=cm;Xr.__file="themes/blank/templates/elements/TextareaElement.vue";var Ps={name:"TextareaElement",render:Xr.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group vf-input-group-textarea",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.inputContainer,e[`inputContainer_${n}`],t?e.inputContainer_disabled:null,!t&&!r&&!i?e.inputContainer_default:null,!t&&l?e.inputContainer_focused:null,!t&&r?e.inputContainer_success:null,!t&&i?e.inputContainer_danger:null],$input:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!r&&!i&&!l?e.input_enabled:null,!t&&l&&!r&&!i?e.input_focused:null,!t&&i?e.input_danger:null,!t&&r?e.input_success:null]}}}},pm="/* Some styles are contained in Vueform.vue */";Y(pm);Ps.__file="themes/vueform/templates/elements/TextareaElement.vue";var Zr={};const fm=["value","type","name","id","placeholder","autocomplete","disabled","readonly"];function vm(e,t,n,r,i,l){const a=se("ElementAddon"),o=se("ElementLabelFloating"),s=se("ElementLoader");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.inputContainer)},[e.hasAddonBefore?(d(),A(a,{key:0,type:"before"},{default:N(()=>[T(e.$slots,"addon-before",{},()=>[(d(),A(F(e.fieldSlots["addon-before"]),{el$:e.el$},null,8,["el$"]))])]),_:3})):m("v-if",!0),e.hasAddonAfter?(d(),A(a,{key:1,type:"after"},{default:N(()=>[T(e.$slots,"addon-after",{},()=>[(d(),A(F(e.fieldSlots["addon-after"]),{el$:e.el$},null,8,["el$"]))])]),_:3})):m("v-if",!0),e.hasFloating&&!e.empty?(d(),A(o,{key:2,visible:!e.empty},null,8,["visible"])):m("v-if",!0),e.isLoading?(d(),A(s,{key:3})):m("v-if",!0),w("input",q({value:e.model,type:e.inputType,name:e.name,id:e.fieldId,class:e.classes.input,placeholder:e.Placeholder,autocomplete:e.autocomplete,disabled:e.isDisabled,readonly:e.isReadonly},{...e.attrs,...e.aria},{onKeydown:t[0]||(t[0]=(...u)=>e.handleKeydown&&e.handleKeydown(...u)),onKeyup:t[1]||(t[1]=(...u)=>e.handleKeyup&&e.handleKeyup(...u)),onKeypress:t[2]||(t[2]=(...u)=>e.handleKeypress&&e.handleKeypress(...u)),onInput:t[3]||(t[3]=(...u)=>e.handleInput&&e.handleInput(...u)),onSelect:t[4]||(t[4]=(...u)=>e.handleInput&&e.handleInput(...u)),onBlur:t[5]||(t[5]=(...u)=>e.handleBlur&&e.handleBlur(...u)),onFocus:t[6]||(t[6]=(...u)=>e.handleFocus&&e.handleFocus(...u)),ref:"input"}),null,16,fm)],2)]),_:2},[ie(e.elementSlots,(u,f)=>({name:f,fn:N(()=>[T(e.$slots,f,{el$:e.el$},()=>[(d(),A(F(u),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Zr.render=vm;Zr.__file="themes/blank/templates/elements/TextElement.vue";var Ns={name:"TextElement",render:Zr.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.inputContainer,e[`inputContainer_${n}`],t?e.inputContainer_disabled:null,!t&&!r&&!i?e.inputContainer_default:null,!t&&l?e.inputContainer_focused:null,!t&&r?e.inputContainer_success:null,!t&&i?e.inputContainer_danger:null],$input:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!r&&!i&&!l?e.input_enabled:null,!t&&l&&!r&&!i?e.input_focused:null,!t&&i?e.input_danger:null,!t&&r?e.input_success:null]}}}},gm="/* Some styles are contained in Vueform.vue */";Y(gm);Ns.__file="themes/vueform/templates/elements/TextElement.vue";function mm(e,t,n){const{value:r,modelValue:i,falseValue:l,trueValue:a,disabled:o}=Ze(e),s=i&&i.value!==void 0?i:r,u=Le(()=>s.value===a.value),f=k=>{t.emit("input",k),t.emit("update:modelValue",k),t.emit("change",k)},S=()=>{f(a.value)},M=()=>{f(l.value)},C=k=>{f(k.target.checked?a.value:l.value)},E=()=>{o.value||(u.value?M():S())};return[null,void 0,!1,0,"0","off"].indexOf(s.value)!==-1&&[l.value,a.value].indexOf(s.value)===-1&&M(),[!0,1,"1","on"].indexOf(s.value)!==-1&&[l.value,a.value].indexOf(s.value)===-1&&S(),{externalValue:s,checked:u,update:f,check:S,uncheck:M,handleInput:C,handleClick:E}}function hm(e,t,n){const{trueValue:r,falseValue:i,onLabel:l,offLabel:a}=Ze(e),o=n.checked,s=n.update;return{label:Le(()=>{let C=o.value?l.value:a.value;return C||(C="&nbsp;"),C}),toggle:()=>{s(o.value?i.value:r.value)},on:()=>{s(r.value)},off:()=>{s(i.value)}}}function bm(e,t,n){const r=Ze(e),i=r.disabled,l=n.checked,a=Le(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...r.classes.value}));return{classList:Le(()=>({container:a.value.container,toggle:[a.value.toggle,i.value?l.value?a.value.toggleOnDisabled:a.value.toggleOffDisabled:l.value?a.value.toggleOn:a.value.toggleOff],handle:[a.value.handle,i.value?l.value?a.value.handleOnDisabled:a.value.handleOffDisabled:l.value?a.value.handleOn:a.value.handleOff],label:a.value.label}))}}function wm(e,t,n){const{disabled:r}=Ze(e),i=n.check,l=n.uncheck,a=n.checked;return{handleSpace:()=>{r.value||(a.value?l():i())}}}const ym={value:{validator:function(e){return t=>["number","string","boolean"].indexOf(typeof t)!==-1||t===null||t===void 0},required:!1},modelValue:{validator:function(e){return t=>["number","string","boolean"].indexOf(typeof t)!==-1||t===null||t===void 0},required:!1}};var Ja={name:"Toggle",emits:["input","update:modelValue","change"],props:{...ym,id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,t){const n=mm(e,t),r=hm(e,t,{checked:n.checked,update:n.update}),i=bm(e,t,{checked:n.checked}),l=wm(e,t,{check:n.check,uncheck:n.uncheck,checked:n.checked});return{...n,...i,...r,...l}}};const km=["tabindex","aria-checked","aria-describedby","aria-labelledby"],Cm=["id","name","value","checked","disabled"],Am=["innerHTML"],Em=["checked"];function Lm(e,t,n,r,i,l){return d(),h("div",q({class:e.classList.container,tabindex:n.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":n.describedby,"aria-labelledby":n.labelledby,role:"switch"},n.aria,{onKeypress:t[1]||(t[1]=ze(he((...a)=>e.handleSpace&&e.handleSpace(...a),["prevent"]),["space"]))}),[ye(w("input",{type:"checkbox",id:n.id,name:n.name,value:n.trueValue,checked:e.checked,disabled:n.disabled},null,8,Cm),[[Fe,!1]]),w("div",{class:p(e.classList.toggle),onClick:t[0]||(t[0]=(...a)=>e.handleClick&&e.handleClick(...a))},[w("span",{class:p(e.classList.handle)},null,2),T(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[w("span",{class:p(e.classList.label),innerHTML:e.label},null,10,Am)]),n.required?(d(),h("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,Em)):m("v-if",!0)],2)],16,km)}Ja.render=Lm;Ja.__file="node_modules/@vueform/toggle/src/Toggle.vue";var Ya={};const xm=["innerHTML"];function Sm(e,t,n,r,i,l){const a=se("Toggle");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[w("div",{class:p(e.classes.wrapper)},[m(" @vueform/toggle component "),xe(a,q({value:e.value,modelValue:e.value},e.fieldOptions,{classes:e.classes.toggle,name:e.name,id:e.fieldId,aria:e.aria,onInput:e.handleChange,ref:"input"}),null,16,["value","modelValue","classes","name","id","aria","onInput"]),!e.standalone&&e.Text?(d(),h("span",{key:0,class:p(e.classes.text),innerHTML:e.Text},null,10,xm)):e.standalone?m("v-if",!0):(d(),h("span",{key:1,class:p(e.classes.text)},[T(e.$slots,"default",{el$:e.el$},()=>[(d(),A(F(e.fieldSlots.default),{el$:e.el$},null,8,["el$"]))])],2))],2)]),_:2},[ie(e.elementSlots,(o,s)=>({name:s,fn:N(()=>[T(e.$slots,s,{el$:e.el$},()=>[(d(),A(F(o),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}Ya.render=Sm;Ya.__file="themes/blank/templates/elements/ToggleElement.vue";var Hs={name:"ToggleElement",render:Ya.render,components:{Toggle:Ja},data(){return{merge:!0,defaultClasses:{container:"vf-contains-link",wrapper:"vf-toggle-wrapper",wrapper_left:"vf-toggle-wrapper-left",wrapper_right:"vf-toggle-wrapper-right",text:"vf-toggle-text",text_sm:"vf-toggle-text-sm",text_md:"",text_lg:"vf-toggle-text-lg",text_left:"vf-toggle-text-left",text_right:"vf-toggle-text-right",toggle:{container:"vf-toggle-container",container_enabled:"",container_disabled:"vf-toggle-container-disabled",toggle:"vf-toggle",toggle_sm:"vf-toggle-sm",toggle_md:"",toggle_lg:"vf-toggle-lg",toggleOn:"vf-toggle-on",toggleOff:"vf-toggle-off",toggleOnDisabled:"vf-toggle-on-disabled",toggleOffDisabled:"vf-toggle-off-disabled",handle:"vf-toggle-handle",handle_sm:"vf-toggle-handle-sm",handle_md:"",handle_lg:"vf-toggle-handle-lg",handleOn:"vf-toggle-handle-on",handleOff:"vf-toggle-handle-off",handleOnDisabled:"vf-toggle-handle-on-disabled",handleOffDisabled:"vf-toggle-handle-off-disabled",label:"vf-toggle-label",label_sm:"vf-toggle-label-sm",label_md:"",label_lg:"vf-toggle-label-lg",$container:(e,{Size:t,isDisabled:n})=>[e.toggle.container,e.toggle[`container_${t}`],n?e.toggle.container_disabled:e.toggle.container_enabled],$toggle:(e,{Size:t})=>[e.toggle.toggle,e.toggle[`toggle_${t}`]],$handle:(e,{Size:t})=>[e.toggle.handle,e.toggle[`handle_${t}`]],$label:(e,{Size:t})=>[e.toggle.label,e.toggle[`label_${t}`]]},$text:(e,{Size:t,align:n})=>[e.text,e[`text_${t}`],n==="left"?e.text_left:null,n==="right"?e.text_right:null],$wrapper:(e,{align:t})=>[e.wrapper,t==="left"?e.wrapper_left:null,t==="right"?e.wrapper_right:null]}}}},Tm=`.vf-toggle-wrapper {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.vf-toggle-text {
  margin-left: var(--vf-space-checkbox);
}

.vf-toggle-text.vf-toggle-text-sm {
  margin-left: var(--vf-space-checkbox-sm);
}

.vf-toggle-text.vf-toggle-text-lg {
  margin-left: var(--vf-space-checkbox-lg);
}

/* @vueform/toggle styles */

.vf-toggle-container {
  display: inline-block;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  border-radius: 9999px;
  transition: box-shadow 0.15s ease-in-out, color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  box-shadow: var(--vf-shadow-handles);
}

.vf-toggle-container:hover:not(.vf-toggle-container-disabled) {
  box-shadow: var(--vf-shadow-handles-hover);
}

.vf-toggle-container:focus {
  box-shadow: var(--vf-shadow-handles-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-toggle-container.vf-toggle-container-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.vf-toggle {
  display: flex;
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  transition: 0.3s all;
  align-items: center;
  box-sizing: content-box !important;
  border-width: var(--vf-border-width-toggle);
  border-style: solid;
  font-size: 0.75rem;
  width: var(--vf-toggle-width);
  height: var(--vf-toggle-height);
  line-height: 1;
}

.vf-toggle.vf-toggle-sm {
  width: var(--vf-toggle-width-sm);
  height: var(--vf-toggle-height-sm);
  font-size: 0.75rem;
}

.vf-toggle.vf-toggle-lg {
  width: var(--vf-toggle-width-lg);
  height: var(--vf-toggle-height-lg);
  font-size: 0.8125rem;
}

.vf-toggle-on {
  background: var(--vf-primary);
  border-color: var(--vf-primary);
  justify-content: flex-start;
  color: var(--vf-color-on-primary);
}

.vf-toggle-off {
  background: var(--vf-bg-passive);
  border-color: var(--vf-bg-passive);
  justify-content: flex-end;
  color: var(--vf-color-passive);
}

.vf-toggle-on-disabled {
  background: var(--vf-primary);
  border-color: var(--vf-primary);
  justify-content: flex-start;
  color: var(--vf-color-on-primary);
}

.vf-toggle-off-disabled {
  background: var(--vf-bg-passive);
  border-color: var(--vf-bg-passive);
  justify-content: flex-end;
  color: var(--vf-color-passive);
}

.vf-toggle-handle {
  display: inline-block;
  background: var(--vf-bg-toggle-handle);
  width: var(--vf-toggle-height);
  height: var(--vf-toggle-height);
  top: 0;
  border-radius: 50%;
  position: absolute;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.vf-toggle-handle.vf-toggle-handle-sm {
  width: var(--vf-toggle-height-sm);
  height: var(--vf-toggle-height-sm);
}

.vf-toggle-handle.vf-toggle-handle-lg {
  width: var(--vf-toggle-height-lg);
  height: var(--vf-toggle-height-lg);
}

.vf-toggle-handle-on {
  left: 100%;
  transform: translateX(-100%);
}

.vf-toggle-handle-off {
  left: 0%;
}

.vf-toggle-handle-on-disabled {
  left: 100%;
  transform: translateX(-100%);
  background: var(--vf-bg-toggle-handle);
}

.vf-toggle-handle-off-disabled {
  left: 0%;
  background: var(--vf-bg-toggle-handle);
}

.vf-toggle-label {
  text-align: center;
  width: calc(var(--vf-toggle-width) - var(--vf-toggle-height));
  box-sizing: border-box;
  white-space: nowrap;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.vf-toggle-label.vf-toggle-label-sm {
  width: calc(var(--vf-toggle-width-sm) - var(--vf-toggle-height-sm));
}

.vf-toggle-label.vf-toggle-label-lg {
  width: calc(var(--vf-toggle-width-lg) - var(--vf-toggle-height-lg));
}

body:not([dir=rtl]) .vf-toggle-wrapper-right {
  justify-content: flex-end;
}

body:not([dir=rtl]) .vf-toggle-text-right {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox);
  order: -1;
}

body:not([dir=rtl]) .vf-toggle-text-right.vf-toggle-text-sm {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-sm);
}

body:not([dir=rtl]) .vf-toggle-text-right.vf-toggle-text-lg {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-lg);
}

body[dir=rtl] .vf-toggle-wrapper-left {
  justify-content: flex-end;
}

body[dir=rtl] .vf-toggle-text {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-sm {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-sm);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-lg {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-lg);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-left {
  margin-right: 0;
  margin-left: var(--vf-space-checkbox);
  order: -1;
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-left.vf-toggle-text-sm {
  margin-right: 0;
  margin-left: var(--vf-space-checkbox-sm);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-left.vf-toggle-text-lg {
  margin-right: 0;
  margin-left: var(--vf-space-checkbox-lg);
}`;Y(Tm);Hs.__file="themes/vueform/templates/elements/ToggleElement.vue";var ei={};function Rm(e,t,n,r,i,l){const a=se("EditorWrapper");return d(),A(F(e.elementLayout),{ref:"container"},Oe({element:N(()=>[xe(a,{value:e.model,placeholder:e.Placeholder,id:e.fieldId,accept:e.accept,"accept-mimes":e.acceptMimes,endpoint:e.editorEndpoint,method:e.editorMethod,disabled:e.isDisabled,"hide-tools":e.hideTools,class:p(e.classes.input),attrs:e.aria,onInput:e.handleInput,onAlert:e.handleAlert,onError:e.handleError,onBlur:e.handleBlur,ref:"input"},null,8,["value","placeholder","id","accept","accept-mimes","endpoint","method","disabled","hide-tools","class","attrs","onInput","onAlert","onError","onBlur"])]),_:2},[ie(e.elementSlots,(o,s)=>({name:s,fn:N(()=>[T(e.$slots,s,{el$:e.el$},()=>[(d(),A(F(o),{el$:e.el$},null,8,["el$"]))])])}))]),1536)}ei.render=Rm;ei.__file="themes/blank/templates/elements/EditorElement.vue";var Us={name:"EditorElement",render:ei.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-editor",input_enabled:"",input_disabled:"vf-editor-disabled",input_success:"vf-editor-success",input_danger:"vf-editor-danger",input_focused:"vf-editor-focused",input_sm:"vf-editor-sm",input_md:"",input_lg:"vf-editor-lg",$input:(e,{isDisabled:t,focused:n,Size:r,isSuccess:i,isDanger:l})=>[e.input,e[`input_${r}`],t?e.input_disabled:null,!t&&!i&&!l?e.input_default:null,!t&&n?e.input_focused:null,!t&&i?e.input_success:null,!t&&l?e.input_danger:null]}}}},Im=`.vf-editor {
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  border-style: solid;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-input);
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-radius: var(--vf-radius-input);
}

.vf-editor.vf-editor-disabled {
  background-color: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
}

.vf-editor.vf-editor-success {
  background-color: var(--vf-bg-input-success);
  color: var(--vf-color-input-success);
  border-color: var(--vf-border-color-input-success);
}

.vf-editor.vf-editor-danger {
  background-color: var(--vf-bg-input-danger);
  color: var(--vf-color-input-danger);
  border-color: var(--vf-border-color-input-danger);
}

.vf-editor:hover:not(.vf-editor-disabled) {
  box-shadow: var(--vf-shadow-input-hover);
}

.vf-editor:hover:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
  border-color: var(--vf-border-color-input-hover);
}

.vf-editor.vf-editor-focused {
  box-shadow: var(--vf-shadow-input-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
  border-color: var(--vf-border-color-input-focus);
}

.vf-editor.vf-editor-focused:not(.vf-editor-success):not(.vf-editor-danger), .vf-editor.vf-editor-focused:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {
  background-color: var(--vf-bg-input-focus);
  color: var(--vf-color-input-focus);
}`;Y(Im);Us.__file="themes/vueform/templates/elements/EditorElement.vue";var js={render:Xr.render};js.__file="themes/blank/templates/elements/TTextareaElement.vue";var Ws={name:"TTextareaElement",render:js.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group vf-input-group-textarea",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.inputContainer,e[`inputContainer_${n}`],t?e.inputContainer_disabled:null,!t&&!r&&!i?e.inputContainer_default:null,!t&&l?e.inputContainer_focused:null,!t&&r?e.inputContainer_success:null,!t&&i?e.inputContainer_danger:null],$input:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!r&&!i&&!l?e.input_enabled:null,!t&&l&&!r&&!i?e.input_focused:null,!t&&i?e.input_danger:null,!t&&r?e.input_success:null]}}}},Bm="/* Some styles are contained in Vueform.vue */";Y(Bm);Ws.__file="themes/vueform/templates/elements/TTextareaElement.vue";var Vs={render:Zr.render};Vs.__file="themes/blank/templates/elements/TTextElement.vue";var _s={name:"TTextElement",render:Vs.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.inputContainer,e[`inputContainer_${n}`],t?e.inputContainer_disabled:null,!t&&!r&&!i?e.inputContainer_default:null,!t&&l?e.inputContainer_focused:null,!t&&r?e.inputContainer_success:null,!t&&i?e.inputContainer_danger:null],$input:(e,{isDisabled:t,Size:n,isSuccess:r,isDanger:i,focused:l})=>[e.input,e[`input_${n}`],t?e.input_disabled:null,!t&&!r&&!i&&!l?e.input_enabled:null,!t&&l&&!r&&!i?e.input_focused:null,!t&&i?e.input_danger:null,!t&&r?e.input_success:null]}}}},Mm="/* Some styles are contained in Vueform.vue */";Y(Mm);_s.__file="themes/vueform/templates/elements/TTextElement.vue";var Qs={render:ei.render};Qs.__file="themes/blank/templates/elements/TEditorElement.vue";var qs={name:"TEditorElement",render:Qs.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-editor",input_enabled:"",input_disabled:"vf-editor-disabled",input_success:"vf-editor-success",input_danger:"vf-editor-danger",input_focused:"vf-editor-focused",input_focused_success:"vf-editor-focused-success",input_focused_danger:"vf-editor-focused-danger",input_sm:"vf-editor-sm",input_md:"",input_lg:"vf-editor-lg",$input:(e,{isDisabled:t,focused:n,Size:r,isSuccess:i,isDanger:l})=>[e.input,e[`input_${r}`],t?e.input_disabled:null,!t&&!i&&!l&&!n?e.input_enabled:null,!t&&l?e.input_danger:null,!t&&i?e.input_success:null,n&&!l&&!i?e.input_focused:null,n&&i?e.input_focused_success:null,n&&l?e.input_focused_danger:null]}}}},Dm="/* Some styles are contained in EditorElement.vue */";Y(Dm);qs.__file="themes/vueform/templates/elements/TEditorElement.vue";var Xa={};const Om=["value","name","id","disabled","aria-label"],$m=["innerHTML"];function Fm(e,t,n,r,i,l){return d(),h("label",{class:p(e.classes.container)},[T(e.$slots,"default",q({name:e.name},{classes:e.classes,isDisabled:e.isDisabled,id:e.id,item:e.item,value:e.value,items:e.items,index:e.index}),()=>[ye(w("input",q({type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=a=>e.el$.model=a)},e.attrs,{value:e.value,class:e.classes.input,name:e.name,id:e.id,disabled:e.isDisabled,"aria-label":e.item.label}),null,16,Om),[[_r,e.el$.model]]),w("span",{class:p(e.classes.text),innerHTML:e.item.label},null,10,$m)])],2)}Xa.render=Fm;Xa.__file="themes/blank/templates/elements/partials/CheckboxgroupCheckbox.vue";var Ks={name:"CheckboxgroupCheckbox",render:Xa.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkbox-container",input:"vf-checkbox",input_enabled:"",input_disabled:"",input_sm:"vf-checkbox-sm",input_md:"",input_lg:"vf-checkbox-lg",text:"vf-checkbox-text",$input:(e,{isDisabled:t,Size:n})=>[e.input,e[`input_${n}`],t?e.input_disabled:e.input_enabled]}}}},zm="/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */";Y(zm);Ks.__file="themes/vueform/templates/elements/partials/CheckboxgroupCheckbox.vue";var Za={};const Pm=["aria-checked"],Nm=["title"],Hm=["value","id","name","disabled"],Um=["innerHTML"];function jm(e,t,n,r,i,l){return d(),h("label",q(e.attrs,{class:e.classes.container,tabindex:"0",role:"checkbox","aria-checked":e.checked,onKeypress:t[1]||(t[1]=ze(he(a=>e.el$.toggle(e.value),["prevent"]),["space"])),onKeydown:t[2]||(t[2]=(...a)=>e.handleKeydown&&e.handleKeydown(...a))}),[T(e.$slots,"default",q({name:e.name},{classes:e.classes,isDisabled:e.isDisabled,id:e.id,item:e.item,value:e.value,items:e.items,index:e.index}),()=>[w("div",{class:p(e.classes.wrapper),title:e.item.label},[ye(w("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=a=>e.el$.model=a),value:e.value,id:e.id,class:p(e.classes.input),name:e.name,disabled:e.isDisabled},null,10,Hm),[[_r,e.el$.model]]),w("span",{class:p(e.classes.text),innerHTML:`${e.item.label}`},null,10,Um)],10,Nm)])],16,Pm)}Za.render=jm;Za.__file="themes/blank/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue";var Gs={name:"CheckboxgroupCheckbox_tabs",render:Za.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkbox-tabs-container",wrapper:"vf-checkbox-tabs",wrapper_not_last:"vf-checkbox-tabs-not-last",wrapper_first:"vf-checkbox-tabs-first",wrapper_first_sm:"vf-checkbox-tabs-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-checkbox-tabs-first-lg",wrapper_last:"vf-checkbox-tabs-last",wrapper_last_sm:"vf-checkbox-tabs-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-checkbox-tabs-last-lg",wrapper_selected:"vf-checkbox-tabs-selected",wrapper_unselected:"vf-checkbox-tabs-unselected",wrapper_disabled:"vf-checkbox-tabs-disabled",wrapper_sm:"vf-checkbox-tabs-sm",wrapper_md:"",wrapper_lg:"vf-checkbox-tabs-lg",input:"vf-checkbox-tabs-input",text:"",$wrapper:(e,{index:t,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[e.wrapper,e[`wrapper_${a}`],t<Object.keys(n).length-1?e.wrapper_not_last:null,t===0?e.wrapper_first:null,t===0?e[`wrapper_first_${a}`]:null,t===Object.keys(n).length-1?e.wrapper_last:null,t===Object.keys(n).length-1?e[`wrapper_last_${a}`]:null,r.value?.indexOf(i)!==-1?e.wrapper_selected:e.wrapper_unselected,l?e.wrapper_disabled:null]}}}},Wm=`/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */

.vf-checkbox-tabs-container {
  display: flex;
  cursor: pointer;
}

.vf-checkbox-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);
  width: 100%;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-checkbox-tabs.vf-checkbox-tabs-not-last {
  border-right: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-first {
  border-radius: var(--vf-radius-input);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-first.vf-checkbox-tabs-first-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-first.vf-checkbox-tabs-first-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-last {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-last.vf-checkbox-tabs-last-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-last.vf-checkbox-tabs-last-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-selected {
  background-color: var(--vf-primary);
  border-color: rgba(0, 0, 0, 0.15);
  color: var(--vf-color-on-primary);
}

.vf-checkbox-tabs.vf-checkbox-tabs-unselected {
  border-color: var(--vf-border-color-input);
}

.vf-checkbox-tabs.vf-checkbox-tabs-unselected:hover:not(.vf-radio-tabs-disabled) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
}

.vf-checkbox-tabs.vf-checkbox-tabs-disabled {
  opacity: 0.5;
}

.vf-checkbox-tabs.vf-checkbox-tabs-sm {
  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-checkbox-tabs.vf-checkbox-tabs-lg {
  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-checkbox-tabs-input {
  display: none;
}`;Y(Wm);Gs.__file="themes/vueform/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue";var el={};const Vm=["value","name","id","disabled"],_m=["innerHTML"],Qm=["innerHTML"];function qm(e,t,n,r,i,l){return d(),h("label",{class:p(e.classes.container)},[T(e.$slots,"default",q({name:e.name},{classes:e.classes,isDisabled:e.isDisabled,id:e.id,item:e.item,value:e.value,items:e.items,index:e.index}),()=>[w("div",{class:p(e.classes.wrapper)},[ye(w("input",q({type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=a=>e.el$.model=a)},e.attrs,{value:e.value,class:e.classes.input,name:e.name,id:e.id,disabled:e.isDisabled}),null,16,Vm),[[_r,e.el$.model]]),w("div",{class:p(e.classes.text_wrapper)},[w("div",{class:p(e.classes.text),innerHTML:e.item.label},null,10,_m),w("div",{class:p(e.classes.description),innerHTML:e.item.description},null,10,Qm)],2)],2)])],2)}el.render=qm;el.__file="themes/blank/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue";var Js={name:"CheckboxgroupCheckbox_blocks",render:el.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkbox-blocks-container",container_sm:"vf-checkbox-blocks-container-sm",container_md:"",container_lg:"vf-checkbox-blocks-container-lg",wrapper:"vf-checkbox-blocks",wrapper_not_last:"vf-checkbox-blocks-not-last",wrapper_first:"vf-checkbox-blocks-first",wrapper_first_sm:"vf-checkbox-blocks-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-checkbox-blocks-first-lg",wrapper_last:"vf-checkbox-blocks-last",wrapper_last_sm:"vf-checkbox-blocks-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-checkbox-blocks-last-lg",wrapper_selected:"vf-checkbox-blocks-selected",wrapper_unselected:"vf-checkbox-blocks-unselected",wrapper_disabled:"vf-checkbox-blocks-disabled",wrapper_sm:"vf-checkbox-blocks-sm",wrapper_md:"",wrapper_lg:"vf-checkbox-blocks-lg",input:"vf-checkbox",input_enabled:"",input_disabled:"",input_sm:"vf-checkbox-sm",input_md:"",input_lg:"vf-checkbox-lg",text_wrapper:"vf-checkbox-blocks-text-wrapper",text:"vf-checkbox-blocks-text",description:"vf-checkbox-blocks-description",description_sm:"vf-checkbox-blocks-description-sm",description_md:"",description_lg:"vf-checkbox-blocks-description-lg",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]],$wrapper:(e,{index:t,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[e.wrapper,e[`wrapper_${a}`],t<Object.keys(n).length-1?e.wrapper_not_last:null,t===0?e.wrapper_first:null,t===0?e[`wrapper_first_${a}`]:null,t===Object.keys(n).length-1?e.wrapper_last:null,t===Object.keys(n).length-1?e[`wrapper_last_${a}`]:null,r.value&&r.value?.indexOf(i)!==-1?e.wrapper_selected:e.wrapper_unselected,l?e.wrapper_disabled:null],$input:(e,{isDisabled:t,Size:n})=>[e.input,e[`input_${n}`],t?e.input_disabled:e.input_enabled],$description:(e,{Size:t})=>[e.description,e[`description_${t}`]]}}}},Km=`/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */

.vf-checkbox-blocks-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  border-radius: var(--vf-radius-large);
}

.vf-checkbox-blocks-container .vf-checkbox {
  margin-top: 0;
}

.vf-checkbox-blocks-container.vf-checkbox-blocks-container-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-checkbox-blocks-container.vf-checkbox-blocks-container-lg {
  border-radius: var(--vf-radius-large-lg);
}

.vf-checkbox-blocks {
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  width: 100%;
  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background: var(--vf-bg-input);
}

.vf-checkbox-blocks.vf-checkbox-blocks-not-last {
  border-bottom-width: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-first {
  border-radius: var(--vf-radius-large);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-first.vf-checkbox-blocks-first-sm {
  border-radius: var(--vf-radius-large-sm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-first.vf-checkbox-blocks-first-lg {
  border-radius: var(--vf-radius-large-lg);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-last {
  border-radius: var(--vf-radius-large);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-last.vf-checkbox-blocks-last-sm {
  border-radius: var(--vf-radius-large-sm);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-last.vf-checkbox-blocks-last-lg {
  border-radius: var(--vf-radius-large-lg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-selected {
  background-color: var(--vf-bg-selected);
}

.vf-checkbox-blocks.vf-checkbox-blocks-disabled {
  opacity: 0.5;
}

.vf-checkbox-blocks.vf-checkbox-blocks-sm {
  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-checkbox-blocks.vf-checkbox-blocks-lg {
  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-checkbox-blocks-text-wrapper {
  margin-left: 0.5rem;
}

.vf-checkbox-blocks-description {
  color: var(--vf-color-muted);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  margin-top: -0.125rem;
}

.vf-checkbox-blocks-description.vf-checkbox-blocks-description-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: -0.125rem;
}

.vf-checkbox-blocks-description.vf-checkbox-blocks-description-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  margin-top: -0.125rem;
}`;Y(Km);Js.__file="themes/vueform/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue";var tl={};function Gm(e,t,n,r,i,l){return d(),h("div",{class:p(e.classes.container),onClick:t[0]||(t[0]=he((...a)=>e.handleClick&&e.handleClick(...a),["prevent"])),ref:"area"},[w("span",{class:p(e.classes.icon)},null,2),e.title?(d(),h("span",{key:0,class:p(e.classes.title)},Se(e.title),3)):m("v-if",!0),e.description?(d(),h("span",{key:1,class:p(e.classes.description)},Se(e.description),3)):m("v-if",!0)],2)}tl.render=Gm;tl.__file="themes/blank/templates/elements/partials/DragAndDrop.vue";var Ys={name:"DragAndDrop",render:tl.render,data(){return{merge:!0,defaultClasses:{container:"vf-dnd",container_sm:"vf-dnd-sm",container_md:"",container_lg:"vf-dnd-lg",container_inactive:"",container_active:"is-active",container_enabled:"",container_disabled:"is-disabled",icon:"vf-dnd-icon-upload",title:"vf-dnd-title",description:"vf-dnd-description",$container:(e,{dragging:t,disabled:n,Size:r})=>[e.container,e[`container_${r}`],t?e.container_active:e.container_inactive,n?e.container_disabled:e.container_enabled]}}}},Jm=`.vf-dnd {
  background-color: #FFFFFF;
  transition: 0.3s;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-style: dashed;
  border-color: var(--vf-border-color-input);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  font-size: inherit;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  position: relative;
  transition: 0.3s;
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-radius: var(--vf-radius-large);
  box-shadow: var(--vf-shadow-input);
  text-align: center;
}

.vf-dnd.vf-dnd-sm {
  border-radius: var(--vf-radius-large);
}

.vf-dnd.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.vf-dnd.is-active {
  border-color: var(--vf-primary);
}

.vf-dnd-icon-upload {
  display: flex;
  width: 2.25rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  background: var(--vf-primary);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: cover;
  -webkit-mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-dnd-title {
  font-weight: 600;
  margin-top: 0.75rem;
}`;Y(Jm);Ys.__file="themes/vueform/templates/elements/partials/DragAndDrop.vue";var nl={};const Ym=["aria-labelledby","aria-placeholder","aria-describedby"],Xm=["id"],Zm=["href","title"],eh=["title"];function th(e,t,n,r,i,l){return ye((d(),h("div",q({class:e.classes.container},e.attrs,{tabindex:"0",role:"button","aria-labelledby":e.ariaLabelledby,"aria-placeholder":e.ariaPlaceholder,"aria-describedby":`${e.el$.fieldId}-file-description`,onKeyup:t[3]||(t[3]=(...a)=>e.handleKeyup&&e.handleKeyup(...a))}),[w("span",{id:`${e.el$.fieldId}-file-description`,class:p(e.classes.assistiveText),"aria-hidden":""},Se(e.form$.translations.vueform.a11y.file.description),11,Xm),w("div",{class:p(e.classes.wrapper)},[w("div",{class:p(e.classes.file)},[m(" Filename "),e.hasLink&&e.clickable?(d(),h("a",{key:0,href:e.link,class:p(e.classes.filenameLink),title:e.filename,target:"_blank",rel:"nofollow noopener"},Se(e.filename),11,Zm)):(d(),h("span",{key:1,class:p(e.classes.filenameStatic),title:e.filename},Se(e.filename),11,eh))],2),w("div",{class:p(e.classes.actions)},[m(" Remove "),e.canRemove?(d(),h("div",{key:0,class:p(e.classes.remove),onClick:t[0]||(t[0]=he((...a)=>e.remove&&e.remove(...a),["prevent"])),onKeypress:t[1]||(t[1]=ze((...a)=>e.remove&&e.remove(...a),["enter","space"])),"aria-roledescription":"❎",role:"button",tabindex:"0"},[w("span",{class:p(e.classes.removeIcon)},null,2)],34)):m("v-if",!0),m(" Progress "),e.uploading?(d(),h("div",{key:1,class:p(e.classes.percent)},Se(e.progress)+"%",3)):m("v-if",!0),m(" Error "),e.hasError?(d(),h("span",{key:2,class:p(e.classes.warning)},[w("span",{class:p(e.classes.warningIcon)},null,2)],2)):m("v-if",!0),m(" Upload button "),e.canUploadTemp?(d(),h("div",{key:3,class:p(e.classes.upload),onClick:t[2]||(t[2]=he((...a)=>e.upload&&e.upload(...a),["prevent"])),tabindex:"-1"},Se(e.uploadText),3)):e.el$.stage>1?(d(),h(X,{key:4},[m(" Success "),w("span",{class:p(e.classes.uploaded)},[w("span",{class:p(e.classes.uploadedIcon)},null,2)],2)],2112)):m("v-if",!0)],2)],2),e.uploading?(d(),h("div",{key:0,class:p(e.classes.progressBar)},[w("div",{class:p(e.classes.progress),style:Gt({width:e.progress+"%"})},null,6)],2)):m("v-if",!0)],16,Ym)),[[Fe,e.visible]])}nl.render=th;nl.__file="themes/blank/templates/elements/partials/FilePreview.vue";var Xs={name:"FilePreview",render:nl.render,data(){return{merge:!0,defaultClasses:{container:"vf-file-preview",container_sm:"vf-file-preview-sm",container_md:"",container_lg:"vf-file-preview-lg",wrapper:"vf-file-preview-wrapper",file:"vf-file-preview-file",filenameLink:"vf-file-preview-filename-link",filenameStatic:"vf-file-preview-filename",actions:"vf-file-preview-actions",percent:"vf-file-preview-percent",upload:"vf-file-preview-upload",progressBar:"vf-file-preview-progress-bar",progress:"vf-file-preview-progress",warning:"vf-file-preview-warning",warningIcon:"vf-file-preview-warning-icon",uploaded:"vf-file-preview-uploaded",uploadedIcon:"vf-file-preview-uploaded-icon",remove:"vf-file-preview-remove",removeIcon:"vf-file-preview-remove-icon",assistiveText:"vf-assistive-text",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]]}}}},nh=`.vf-file-preview {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  min-height: var(--vf-min-height-input);
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.vf-file-preview:hover .vf-file-preview-uploaded,
.vf-file-preview:hover .vf-file-preview-warning,
.vf-file-preview:hover .vf-file-preview-percent {
  display: none;
}

.vf-file-preview:hover .vf-file-preview-remove {
  display: inline-block;
}

.vf-file-preview.vf-file-preview-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
  min-height: var(--vf-min-height-input-sm);
}

.vf-file-preview.vf-file-preview-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
  min-height: var(--vf-min-height-input-lg);
}

.vf-file-preview-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vf-file-preview-file {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.vf-file-preview-filename {
  overflow: hidden;
  text-overflow: ellipsis;
}

.vf-file-preview-filename-link {
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vf-file-preview-filename-link:hover, .vf-file-preview-filename-link:focus, .vf-file-preview-filename-link:active {
  color: inherit;
}

.vf-file-preview-filename-link:hover {
  text-decoration: underline;
}

.vf-file-preview-actions {
  display: flex;
  align-items: center;
}

.vf-file-preview-upload {
  font-size: 0.75rem;
  margin-left: 0.5rem;
  white-space: nowrap;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-percent {
  font-size: 0.875rem;
  color: var(--vf-color-muted);
  margin-left: 0.375rem;
}

.vf-file-preview-progress-bar {
  margin-top: 0.625rem;
  border-radius: 0;
  height: 0.1875rem;
  background: var(--vf-bg-passive);
  position: absolute;
  bottom: 0;
  width: 100%;
}

.vf-file-preview-progress {
  border-radius: 0;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-warning,
.vf-file-preview-uploaded,
.vf-file-preview-remove {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
}

.vf-file-preview-warning-icon,
.vf-file-preview-uploaded-icon,
.vf-file-preview-remove-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-remove {
  display: none;
  margin-left: 0.375rem;
  background-color: var(--vf-bg-passive);
  transition: 0.15s;
}

.vf-file-preview-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-uploaded {
  background-color: var(--vf-bg-success);
}

.vf-file-preview-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-warning {
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview {
  opacity: 0.6;
}`;Y(nh);Xs.__file="themes/vueform/templates/elements/partials/FilePreview.vue";var rl={};const rh=["aria-labelledby","aria-placeholder","aria-describedby"],ih=["id"],ah=["href"],lh=["src","alt","title"],oh=["src","alt","title"],sh=["href"];function dh(e,t,n,r,i,l){return ye((d(),h("div",q({class:e.classes.container,tabindex:"0",role:"button"},e.attrs,{"aria-labelledby":e.ariaLabelledby,"aria-placeholder":e.ariaPlaceholder,"aria-describedby":`${e.el$.fieldId}-file-description`,onKeyup:t[4]||(t[4]=(...a)=>e.handleKeyup&&e.handleKeyup(...a))}),[w("span",{id:`${e.el$.fieldId}-file-description`,class:p(e.classes.assistiveText),"aria-hidden":""},Se(e.form$.translations.vueform.a11y.file.description),11,ih),w("div",{class:p(e.classes.wrapper)},[m(" Image "),e.uploaded&&e.hasLink&&e.clickable?(d(),h("a",{key:0,href:e.link,class:p(e.classes.image),target:"_blank",rel:"nofollow noopener"},[w("img",{class:p(e.classes.img),src:e.preview,alt:e.filename,title:e.filename,"aria-hidden":"true"},null,10,lh)],10,ah)):(d(),h("span",{key:1,class:p(e.classes.image)},[w("img",{class:p(e.classes.img),src:e.preview,alt:e.filename,title:e.filename,"aria-hidden":"true"},null,10,oh)],2)),w("div",{class:p(e.classes.file)},[m(" Filename "),e.hasLink&&e.clickable?(d(),h("a",{key:0,href:e.link,class:p(e.classes.filenameLink),target:"_blank",rel:"nofollow noopener"},Se(e.filename),11,sh)):(d(),h("span",{key:1,class:p(e.classes.filenameStatic)},Se(e.filename),3))],2),w("div",{class:p(e.classes.actions)},[m(" Remove "),e.canRemove?(d(),h("div",{key:0,class:p(e.classes.remove),onClick:t[0]||(t[0]=he((...a)=>e.remove&&e.remove(...a),["prevent"])),onKeypress:t[1]||(t[1]=ze((...a)=>e.remove&&e.remove(...a),["enter","space"])),"aria-roledescription":"❎",role:"button",tabindex:"0"},[w("span",{class:p(e.classes.removeIcon)},null,2)],34)):m("v-if",!0),m(" Progress "),e.uploading?(d(),h("div",{key:1,class:p(e.classes.percent)},Se(e.progress)+"%",3)):m("v-if",!0),m(" Error "),e.hasError?(d(),h("span",{key:2,class:p(e.classes.warning)},[w("span",{class:p(e.classes.warningIcon)},null,2)],2)):m("v-if",!0),m(" Upload button "),e.canUploadTemp?(d(),h("div",{key:3,class:p(e.classes.upload),onClick:t[2]||(t[2]=he((...a)=>e.upload&&e.upload(...a),["prevent"])),onKeypress:t[3]||(t[3]=ze((...a)=>e.upload&&e.upload(...a),["enter","space"])),tabindex:"-1",role:"button"},Se(e.uploadText),35)):e.el$.stage>1?(d(),h(X,{key:4},[m(" Success "),w("span",{class:p(e.classes.uploaded)},[w("span",{class:p(e.classes.uploadedIcon)},null,2)],2)],2112)):m("v-if",!0)],2)],2),e.uploading?(d(),h("div",{key:0,class:p(e.classes.progressBar)},[w("div",{class:p(e.classes.progress),style:Gt({width:e.progress+"%"})},null,6)],2)):m("v-if",!0)],16,rh)),[[Fe,e.visible]])}rl.render=dh;rl.__file="themes/blank/templates/elements/partials/FilePreview_image.vue";var Zs={name:"ImagePreview",render:rl.render,data(){return{merge:!0,defaultClasses:{container:"vf-file-preview-image",wrapper:"vf-file-preview-image-wrapper",image:"vf-file-preview-image-image",image_link:"",image_static:"",image_sm:"vf-file-preview-image-image-sm",image_md:"",image_lg:"vf-file-preview-image-image-lg",img:"vf-file-preview-image-img",img_sm:"vf-file-preview-image-img-sm",img_md:"",img_lg:"vf-file-preview-image-img-lg",file:"vf-file-preview-image-file",filenameLink:"vf-file-preview-image-filename-link",filenameStatic:"vf-file-preview-image-filename",actions:"vf-file-preview-image-actions",percent:"vf-file-preview-image-percent",upload:"vf-file-preview-image-upload",progressBar:"vf-file-preview-image-progress-bar",progressBar_sm:"vf-file-preview-image-progress-bar-sm",progressBar_md:"",progressBar_lg:"vf-file-preview-image-progress-bar-lg",progress:"vf-file-preview-image-progress",warning:"vf-file-preview-image-warning",warningIcon:"vf-file-preview-image-warning-icon",uploaded:"vf-file-preview-image-uploaded",uploadedIcon:"vf-file-preview-image-uploaded-icon",remove:"vf-file-preview-image-remove",removeIcon:"vf-file-preview-image-remove-icon",assistiveText:"vf-assistive-text",$image:(e,{hasLink:t,Size:n})=>[e.image,e[`image_${n}`],t?e.image_link:e.image_static],$img:(e,{Size:t})=>[e.img,e[`img_${t}`]],$progressBar:(e,{Size:t})=>[e.progressBar,e[`progressBar_${t}`]]}}}},uh=`.vf-file-preview-image {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
}

.vf-file-preview-image:hover .vf-file-preview-image-uploaded,
.vf-file-preview-image:hover .vf-file-preview-image-warning,
.vf-file-preview-image:hover .vf-file-preview-image-percent {
  display: none;
}

.vf-file-preview-image:hover .vf-file-preview-image-remove {
  display: inline-block;
}

.vf-file-preview-image-image {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  background: var(--vf-bg-passive);
  border-radius: var(--vf-radius-image);
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  box-shadow: var(--vf-shadow-input);
}

.vf-file-preview-image-image:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-image-image.vf-file-preview-image-image-sm {
  border-radius: var(--vf-radius-image-sm);
}

.vf-file-preview-image-image.vf-file-preview-image-image-lg {
  border-radius: var(--vf-radius-image-lg);
}

.vf-file-preview-image-img {
  -o-object-fit: cover;
     object-fit: cover;
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  border-radius: var(--vf-radius-image);
  border: 0;
}

.vf-file-preview-image-img[src=""], .vf-file-preview-image-img[src="data:"], .vf-file-preview-image-img:not([src]) {
  opacity: 0;
}

.vf-file-preview-image-img.vf-file-preview-image-img-sm {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
  border-radius: var(--vf-radius-image-sm);
}

.vf-file-preview-image-img.vf-file-preview-image-img-lg {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
  border-radius: var(--vf-radius-image-lg);
}

.vf-file-preview-image-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.vf-file-preview-image-file {
  display: flex;
  align-items: center;
  margin-left: 0.625rem;
  flex: 1 1 auto;
}

.vf-file-preview-image-filename-link {
  text-decoration: none;
  color: inherit;
}

.vf-file-preview-image-filename-link:hover, .vf-file-preview-image-filename-link:focus, .vf-file-preview-image-filename-link:active {
  color: inherit;
}

.vf-file-preview-image-filename-link:hover {
  text-decoration: underline;
}

.vf-file-preview-image-actions {
  display: flex;
  align-items: center;
}

.vf-file-preview-image-upload {
  font-size: 0.75rem;
  margin-left: 0.5rem;
  white-space: nowrap;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-image-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-image-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-image-percent {
  font-size: 0.875rem;
  color: var(--vf-color-muted);
  margin-left: 0.375rem;
}

.vf-file-preview-image-progress-bar {
  margin-top: 0.625rem;
  border-radius: 0;
  height: 0.1875rem;
  background: var(--vf-bg-passive);
  position: absolute;
  bottom: 0;
  left: calc(var(--vf-min-height-input) + 0.625rem);
  right: 0;
}

.vf-file-preview-image-progress-bar.vf-file-preview-image-progress-bar-sm {
  left: calc(var(--vf-min-height-input-sm) + 0.625rem);
}

.vf-file-preview-image-progress-bar.vf-file-preview-image-progress-bar-lg {
  left: calc(var(--vf-min-height-input-lg) + 0.625rem);
}

.vf-file-preview-image-progress {
  border-radius: 0;
  display: block;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-image-warning,
.vf-file-preview-image-uploaded,
.vf-file-preview-image-remove {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
}

.vf-file-preview-image-warning-icon,
.vf-file-preview-image-uploaded-icon,
.vf-file-preview-image-remove-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-image-remove {
  display: none;
  margin-left: 0.375rem;
  background-color: var(--vf-bg-passive);
  transition: 0.15s;
}

.vf-file-preview-image-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-image-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-image-uploaded {
  background-color: var(--vf-bg-success);
}

.vf-file-preview-image-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-image-warning {
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-image-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview-image {
  opacity: 0.6;
}`;Y(uh);Zs.__file="themes/vueform/templates/elements/partials/FilePreview_image.vue";var il={};const ch=["aria-labelledby","aria-placeholder","aria-role","aria-describedby"],ph=["id"],fh=["href"],vh=["src","alt","title"],gh=["src","alt","title"];function mh(e,t,n,r,i,l){return ye((d(),h("div",q({class:e.classes.container,tabindex:"0",role:"button"},e.attrs,{"aria-labelledby":e.ariaLabelledby,"aria-placeholder":e.ariaPlaceholder,"aria-role":e.ariaRoledescription,"aria-describedby":`${e.el$.fieldId}-file-description`,onKeyup:t[4]||(t[4]=(...a)=>e.handleKeyup&&e.handleKeyup(...a))}),[w("span",{id:`${e.el$.fieldId}-file-description`,class:p(e.classes.assistiveText),"aria-hidden":""},Se(e.form$.translations.vueform.a11y.file.description),11,ph),m(" Image  "),e.uploaded&&e.hasLink&&e.clickable?(d(),h("a",{key:0,class:p(e.classes.image),href:e.link,target:"_blank",rel:"nofollow noopener"},[w("img",{src:e.preview,class:p(e.classes.img),alt:e.filename,title:e.filename,"aria-hidden":"true"},null,10,vh)],10,fh)):(d(),h("div",{key:1,class:p(e.classes.image)},[w("img",{class:p(e.classes.img),src:e.preview,alt:e.filename,title:e.filename,"aria-hidden":"true"},null,10,gh)],2)),m(" Overlay "),!e.uploaded&&!e.uploading?(d(),h("div",{key:2,class:p(e.classes.overlay)},[e.canUploadTemp?(d(),h("div",{key:0,class:p(e.classes.upload),onClick:t[0]||(t[0]=he((...a)=>e.upload&&e.upload(...a),["prevent"])),onKeypress:t[1]||(t[1]=ze((...a)=>e.upload&&e.upload(...a),["enter","space"])),tabindex:"-1",role:"button"},Se(e.uploadText),35)):m("v-if",!0)],2)):m("v-if",!0),m(" Error "),e.hasError?(d(),h("span",{key:3,class:p(e.classes.warning)},[w("span",{class:p(e.classes.warningIcon)},null,2)],2)):e.el$.stage>1?(d(),h(X,{key:4},[m(" Success "),w("span",{class:p(e.classes.uploaded)},[w("span",{class:p(e.classes.uploadedIcon)},null,2)],2)],2112)):m("v-if",!0),m(" Remove "),e.canRemove?(d(),h("div",{key:5,class:p(e.classes.remove),onClick:t[2]||(t[2]=he((...a)=>e.remove&&e.remove(...a),["prevent"])),onKeypress:t[3]||(t[3]=ze((...a)=>e.remove&&e.remove(...a),["enter","space"])),"aria-roledescription":"❎",role:"button",tabindex:"0"},[w("span",{class:p(e.classes.removeIcon)},null,2)],34)):m("v-if",!0),m(" Progress "),e.uploading?(d(),h("div",{key:6,class:p(e.classes.progressBar)},[w("div",{class:p(e.classes.progress),style:Gt({width:e.progress+"%"})},null,6)],2)):m("v-if",!0)],16,ch)),[[Fe,e.visible]])}il.render=mh;il.__file="themes/blank/templates/elements/partials/FilePreview_gallery.vue";var ed={name:"GalleryPreview",render:il.render,data(){return{merge:!0,defaultClasses:{container:"vf-file-preview-gallery",container_sm:"vf-file-preview-gallery-sm",container_md:"",container_lg:"vf-file-preview-gallery-lg",image:"vf-file-preview-gallery-image",image_sm:"vf-file-preview-gallery-image-sm",image_md:"",image_lg:"vf-file-preview-gallery-image-lg",image_link:"",image_static:"",img:"vf-file-preview-gallery-img",img_sm:"vf-file-preview-gallery-img-sm",img_md:"",img_lg:"vf-file-preview-gallery-img-lg",overlay:"vf-file-preview-gallery-overlay",overlay_sm:"vf-file-preview-gallery-overlay-sm",overlay_md:"",overlay_lg:"vf-file-preview-gallery-overlay-lg",upload:"vf-file-preview-gallery-upload",progressBar:"vf-file-preview-gallery-progress-bar",progress:"vf-file-preview-gallery-progress",warning:"vf-file-preview-gallery-warning",warningIcon:"vf-file-preview-gallery-warning-icon",uploaded:"vf-file-preview-gallery-uploaded",uploadedIcon:"vf-file-preview-gallery-uploaded-icon",remove:"vf-file-preview-gallery-remove",removeIcon:"vf-file-preview-gallery-remove-icon",assistiveText:"vf-assistive-text",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]],$image:(e,{Size:t})=>[e.image,e[`image_${t}`]],$img:(e,{Size:t})=>[e.img,e[`img_${t}`]],$overlay:(e,{Size:t})=>[e.overlay,e[`overlay_${t}`]]}}}},hh=`.vf-file-preview-gallery {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transition: 0.2s background;
  width: var(--vf-gallery-size);
  height: var(--vf-gallery-size);
  position: relative;
}

.vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay {
  opacity: 1;
  visibility: visible;
}

.vf-file-preview-gallery:hover .vf-file-preview-gallery-remove {
  opacity: 1;
  visibility: visible;
}

.vf-file-preview-gallery.vf-file-preview-gallery-sm {
  width: var(--vf-gallery-size-sm);
  height: var(--vf-gallery-size-sm);
}

.vf-file-preview-gallery.vf-file-preview-gallery-lg {
  width: var(--vf-gallery-size-lg);
  height: var(--vf-gallery-size-lg);
}

.vf-file-preview-gallery-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0.75rem;
  border-radius: var(--vf-radius-gallery);
}

.vf-file-preview-gallery-overlay.vf-file-preview-gallery-overlay-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-overlay.vf-file-preview-gallery-overlay-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-upload {
  font-size: 0.75rem;
  white-space: nowrap;
  background: #FFFFFF;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-gallery-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-gallery-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-gallery-image {
  width: 100%;
  height: 100%;
  font-size: 0;
  background: var(--vf-bg-passive);
  border-radius: var(--vf-radius-gallery);
  outline: none;
}

.vf-file-preview-gallery-image.vf-file-preview-gallery-image-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-image.vf-file-preview-gallery-image-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: var(--vf-radius-gallery);
}

.vf-file-preview-gallery-img[src=""], .vf-file-preview-gallery-img[src="data:"], .vf-file-preview-gallery-img:not([src]) {
  opacity: 0;
}

.vf-file-preview-gallery-img.vf-file-preview-gallery-img-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-img.vf-file-preview-gallery-img-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-progress-bar {
  border-radius: 0;
  height: 0.1875rem;
  position: absolute;
  left: 0.1875rem;
  bottom: 0.1875rem;
  z-index: 1;
  background: #FFFFFF;
  right: 0.1875rem;
}

.vf-file-preview-gallery-progress {
  border-radius: 0;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-gallery-remove,
.vf-file-preview-gallery-uploaded,
.vf-file-preview-gallery-warning {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
}

.vf-file-preview-gallery-remove-icon,
.vf-file-preview-gallery-uploaded-icon,
.vf-file-preview-gallery-warning-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-gallery-remove {
  position: absolute;
  right: 0.1875rem;
  top: 0.1875rem;
  opacity: 0;
  visibility: hidden;
  background-color: var(--vf-bg-passive);
  border-radius: 999px;
  transition: 0.15s;
}

.vf-file-preview-gallery-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-gallery-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-gallery-uploaded {
  position: absolute;
  right: 0.1875rem;
  bottom: 0.1875rem;
  border-radius: 999px;
  background-color: var(--vf-bg-success);
}

.vf-file-preview-gallery-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-gallery-warning {
  position: absolute;
  right: 0.1875rem;
  bottom: 0.1875rem;
  border-radius: 999px;
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-gallery-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview-gallery {
  opacity: 0.6;
}

.is-sorting .vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay, .vf-gallery.is-disabled .vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay {
  opacity: 0;
  visibility: hidden;
}

.is-sorting .vf-file-preview-gallery:hover .vf-file-preview-gallery-remove, .vf-gallery.is-disabled .vf-file-preview-gallery:hover .vf-file-preview-gallery-remove {
  opacity: 0;
  visibility: hidden;
}`;Y(hh);ed.__file="themes/vueform/templates/elements/partials/FilePreview_gallery.vue";var al={};const bh=["value","name","id","disabled","aria-label"],wh=["innerHTML"];function yh(e,t,n,r,i,l){return d(),h("label",{class:p(e.classes.container)},[T(e.$slots,"default",q({name:e.name},{classes:e.classes,isDisabled:e.isDisabled,id:e.id,item:e.item,value:e.value,items:e.items,index:e.index}),()=>[ye(w("input",q({type:"radio","onUpdate:modelValue":t[0]||(t[0]=a=>e.el$.value=a)},e.attrs,{value:e.value,class:e.classes.input,name:e.name,id:e.id,disabled:e.isDisabled,"aria-label":e.item.label}),null,16,bh),[[Qr,e.el$.value]]),w("span",{class:p(e.classes.text),innerHTML:e.item.label},null,10,wh)])],2)}al.render=yh;al.__file="themes/blank/templates/elements/partials/RadiogroupRadio.vue";var td={name:"RadiogroupRadio",render:al.render,data(){return{merge:!0,defaultClasses:{container:"vf-radio-container",input:"vf-radio",input_enabled:"",input_disabled:"",input_sm:"vf-radio-sm",input_md:"",input_lg:"vf-radio-lg",text:"vf-radio-text",$input:(e,{isDisabled:t,Size:n})=>[e.input,e[`input_${n}`],t?e.input_disabled:e.input_enabled]}}}},kh="/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */";Y(kh);td.__file="themes/vueform/templates/elements/partials/RadiogroupRadio.vue";var ll={};const Ch=["aria-checked"],Ah=["title"],Eh=["value","name","id","disabled"],Lh=["innerHTML"];function xh(e,t,n,r,i,l){return d(),h("label",q(e.attrs,{class:e.classes.container,tabindex:"0",role:"radio","aria-checked":e.checked,onKeypress:t[1]||(t[1]=ze(he(a=>e.el$.update(e.value),["prevent"]),["space"])),onKeydown:t[2]||(t[2]=(...a)=>e.handleKeydown&&e.handleKeydown(...a))}),[T(e.$slots,"default",q({name:e.name},{classes:e.classes,isDisabled:e.isDisabled,id:e.id,item:e.item,value:e.value,items:e.items,index:e.index}),()=>[w("div",{class:p(e.classes.wrapper),title:e.item.label},[ye(w("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=a=>e.el$.model=a),value:e.value,class:p(e.classes.input),name:e.name,id:e.id,disabled:e.isDisabled},null,10,Eh),[[Qr,e.el$.model]]),w("span",{class:p(e.classes.text),innerHTML:`${e.item.label}`},null,10,Lh)],10,Ah)])],16,Ch)}ll.render=xh;ll.__file="themes/blank/templates/elements/partials/RadiogroupRadio_tabs.vue";var nd={name:"RadiogroupRadio_tabs",render:ll.render,data(){return{merge:!0,defaultClasses:{container:"vf-radio-tabs-container",wrapper:"vf-radio-tabs",wrapper_not_last:"vf-radio-tabs-not-last",wrapper_first:"vf-radio-tabs-first",wrapper_first_sm:"vf-radio-tabs-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-radio-tabs-first-lg",wrapper_last:"vf-radio-tabs-last",wrapper_last_sm:"vf-radio-tabs-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-radio-tabs-last-lg",wrapper_selected:"vf-radio-tabs-selected",wrapper_unselected:"vf-radio-tabs-unselected",wrapper_disabled:"vf-radio-tabs-disabled",wrapper_sm:"vf-radio-tabs-sm",wrapper_md:"",wrapper_lg:"vf-radio-tabs-lg",input:"vf-radio-tabs-input",text:"",$wrapper:(e,{index:t,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[e.wrapper,e[`wrapper_${a}`],t<Object.keys(n).length-1?e.wrapper_not_last:null,t===0?e.wrapper_first:null,t===Object.keys(n).length-1?e.wrapper_last:null,r.value==i?e.wrapper_selected:e.wrapper_unselected,l?e.wrapper_disabled:null]}}}},Sh=`/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */

.vf-radio-tabs-container {
  display: flex;
  cursor: pointer;
}

.vf-radio-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);
  width: 100%;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-radio-tabs.vf-radio-tabs-not-last {
  border-right: 0;
}

.vf-radio-tabs.vf-radio-tabs-first {
  border-radius: var(--vf-radius-input);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-first.vf-radio-tabs-first-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-first.vf-radio-tabs-first-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-last {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-last.vf-radio-tabs-last-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-last.vf-radio-tabs-last-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-selected {
  background-color: var(--vf-primary);
  border-color: rgba(0, 0, 0, 0.15);
  color: var(--vf-color-on-primary);
}

.vf-radio-tabs.vf-radio-tabs-unselected {
  border-color: var(--vf-border-color-input);
}

.vf-radio-tabs.vf-radio-tabs-unselected:hover:not(.vf-radio-tabs-disabled) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
}

.vf-radio-tabs.vf-radio-tabs-disabled {
  opacity: 0.5;
}

.vf-radio-tabs.vf-radio-tabs-sm {
  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-radio-tabs.vf-radio-tabs-lg {
  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-radio-tabs-input {
  display: none;
}`;Y(Sh);nd.__file="themes/vueform/templates/elements/partials/RadiogroupRadio_tabs.vue";var ol={};const Th=["value","name","id","disabled"],Rh=["innerHTML"],Ih=["innerHTML"];function Bh(e,t,n,r,i,l){return d(),h("label",{class:p(e.classes.container)},[T(e.$slots,"default",q({name:e.name},{classes:e.classes,isDisabled:e.isDisabled,id:e.id,item:e.item,value:e.value,items:e.items,index:e.index}),()=>[w("div",{class:p(e.classes.wrapper)},[ye(w("input",q({type:"radio","onUpdate:modelValue":t[0]||(t[0]=a=>e.el$.model=a)},e.attrs,{value:e.value,class:e.classes.input,name:e.name,id:e.id,disabled:e.isDisabled}),null,16,Th),[[Qr,e.el$.model]]),w("div",{class:p(e.classes.text_wrapper)},[w("div",{class:p(e.classes.text),innerHTML:e.item.label},null,10,Rh),w("div",{class:p(e.classes.description),innerHTML:e.item.description},null,10,Ih)],2)],2)])],2)}ol.render=Bh;ol.__file="themes/blank/templates/elements/partials/RadiogroupRadio_blocks.vue";var rd={name:"RadiogroupRadio_blocks",render:ol.render,data(){return{merge:!0,defaultClasses:{container:"vf-radio-blocks-container",container_sm:"vf-radio-blocks-container-sm",container_md:"",container_lg:"vf-radio-blocks-container-lg",wrapper:"vf-radio-blocks",wrapper_not_last:"vf-radio-blocks-not-last",wrapper_first:"vf-radio-blocks-first",wrapper_first_sm:"vf-radio-blocks-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-radio-blocks-first-lg",wrapper_last:"vf-radio-blocks-last",wrapper_last_sm:"vf-radio-blocks-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-radio-blocks-last-lg",wrapper_selected:"vf-radio-blocks-selected",wrapper_unselected:"vf-radio-blocks-unselected",wrapper_disabled:"vf-radio-blocks-disabled",wrapper_sm:"vf-radio-blocks-sm",wrapper_md:"",wrapper_lg:"vf-radio-blocks-lg",input:"vf-radio",input_enabled:"",input_disabled:"",input_sm:"vf-radio-sm",input_md:"",input_lg:"vf-radio-lg",text_wrapper:"vf-radio-blocks-text-wrapper",text:"vf-radio-blocks-text",description:"vf-radio-blocks-description",description_sm:"vf-radio-blocks-description-sm",description_md:"",description_lg:"vf-radio-blocks-description-lg",$container:(e,{Size:t})=>[e.container,e[`container_${t}`]],$wrapper:(e,{index:t,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[e.wrapper,e[`wrapper_${a}`],t<Object.keys(n).length-1?e.wrapper_not_last:null,t===0?e.wrapper_first:null,t===0?e[`wrapper_first_${a}`]:null,t===Object.keys(n).length-1?e.wrapper_last:null,t===Object.keys(n).length-1?e[`wrapper_last_${a}`]:null,r.value==i?e.wrapper_selected:e.wrapper_unselected,l?e.wrapper_disabled:null],$input:(e,{isDisabled:t,Size:n})=>[e.input,e[`input_${n}`],t?e.input_disabled:e.input_enabled],$description:(e,{Size:t})=>[e.description,e[`description_${t}`]]}}}},Mh=`/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */

.vf-radio-blocks-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  background: var(--vf-bg-input);
  border-radius: var(--vf-radius-large);
}

.vf-radio-blocks-container .vf-radio {
  margin-top: 0;
}

.vf-radio-blocks-container.vf-radio-blocks-container-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-radio-blocks-container.vf-radio-blocks-container-lg {
  border-radius: var(--vf-radius-large-lg);
}

.vf-radio-blocks {
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  width: 100%;
  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-radio-blocks.vf-radio-blocks-not-last {
  border-bottom-width: 0;
}

.vf-radio-blocks.vf-radio-blocks-first {
  border-radius: var(--vf-radius-large);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-first.vf-radio-blocks-first-sm {
  border-radius: var(--vf-radius-large-sm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-first.vf-radio-blocks-first-lg {
  border-radius: var(--vf-radius-large-lg);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-last {
  border-radius: var(--vf-radius-large);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-last.vf-radio-blocks-last-sm {
  border-radius: var(--vf-radius-large-sm);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-last.vf-radio-blocks-last-lg {
  border-radius: var(--vf-radius-large-lg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-selected {
  background-color: var(--vf-bg-selected);
}

.vf-radio-blocks.vf-radio-blocks-disabled {
  opacity: 0.5;
}

.vf-radio-blocks.vf-radio-blocks-sm {
  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-radio-blocks.vf-radio-blocks-lg {
  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-radio-blocks-text-wrapper {
  margin-left: 0.5rem;
}

.vf-radio-blocks-description {
  color: var(--vf-color-muted);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  margin-top: -0.125rem;
}

.vf-radio-blocks-description.vf-radio-blocks-description-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: -0.125rem;
}

.vf-radio-blocks-description.vf-radio-blocks-description-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  margin-top: -0.125rem;
}`;Y(Mh);rd.__file="themes/vueform/templates/elements/partials/RadiogroupRadio_blocks.vue";var sl={};const Dh=["id","placeholder","autocomplete"];function Oh(e,t,n,r,i,l){return d(),h("input",q({type:"text",class:e.classes.datepicker,id:e.id,placeholder:e.placeholder,autocomplete:e.autocomplete},e.attrs,{ref:"input"}),null,16,Dh)}sl.render=Oh;sl.__file="themes/blank/templates/wrappers/DatepickerWrapper.vue";var id={name:"DatepickerWrapper",render:sl.render,data(){return{merge:!0,defaultClasses:{datepicker:"",calendarContainer:"flatpickr-calendar-container"}}}},$h=`.flatpickr-wrapper {
  width: 100%;
  height: 100%;
}

.flatpickr-calendar {
  background: transparent;
  opacity: 0;
  display: none;
  text-align: center;
  visibility: hidden;
  padding: 0;
  animation: none;
  direction: ltr;
  border: 0;
  font-size: 14px;
  line-height: 24px;
  border-radius: 5px;
  position: absolute;
  width: 307.875px;
  box-sizing: border-box;
  touch-action: manipulation;
  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.08);
  color: var(--vf-color-input);
}

.flatpickr-calendar.open,
.flatpickr-calendar.inline {
  opacity: 1;
  max-height: 640px;
  visibility: visible;
}

.flatpickr-calendar.open {
  display: inline-block;
  z-index: 999;
}

.flatpickr-calendar.animate.open {
  animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.flatpickr-calendar.inline {
  display: block;
  position: relative;
  top: 2px;
}

.flatpickr-calendar.rightMost {
  left: auto;
  right: 0;
}

.flatpickr-calendar.static {
  position: absolute;
  top: calc(100% + 2px);
}

.flatpickr-calendar.static.open {
  z-index: 999;
  display: block;
}

.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
  box-shadow: none !important;
}

.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
  box-shadow: -2px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);
}

.flatpickr-calendar .hasWeeks .dayContainer,
.flatpickr-calendar .hasTime .dayContainer {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.flatpickr-calendar .hasWeeks .dayContainer {
  border-left: 0;
}

.flatpickr-calendar.hasTime .flatpickr-time {
  height: 40px;
  border-top: 1px solid var(--vf-border-color-input);
}

.flatpickr-calendar.hasTime .flatpickr-innerContainer {
  border-bottom: 0;
}

.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
  height: auto;
}

.flatpickr-calendar:before,
.flatpickr-calendar:after {
  position: absolute;
  display: block;
  pointer-events: none;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  left: 22px;
}

.flatpickr-calendar.rightMost:before,
.flatpickr-calendar.arrowRight:before,
.flatpickr-calendar.rightMost:after,
.flatpickr-calendar.arrowRight:after {
  left: auto;
  right: 22px;
}

.flatpickr-calendar.arrowCenter:before,
.flatpickr-calendar.arrowCenter:after {
  left: 50%;
  right: 50%;
}

.flatpickr-calendar:before {
  border-width: 5px;
  margin: 0 -5px;
  box-sizing: border-box;
}

.flatpickr-calendar:after {
  border-width: 4px;
  margin: 0 -4px;
  box-sizing: border-box;
}

.flatpickr-calendar.arrowTop:before,
.flatpickr-calendar.arrowTop:after {
  bottom: 100%;
}

.flatpickr-calendar.arrowTop:before {
  border-bottom-color: var(--vf-bg-date-head);
  box-sizing: border-box;
}

.flatpickr-calendar.arrowTop:after {
  border-bottom-color: var(--vf-bg-date-head);
  box-sizing: border-box;
}

.flatpickr-calendar.arrowBottom:before,
.flatpickr-calendar.arrowBottom:after {
  top: 100%;
}

.flatpickr-calendar.arrowBottom:before {
  border-top-color: var(--vf-bg-date-head);
}

.flatpickr-calendar.arrowBottom:after {
  border-top-color: var(--vf-bg-date-head);
}

.flatpickr-calendar:focus {
  outline: 0;
}

.flatpickr-wrapper {
  position: relative;
  display: flex;
}

.flatpickr-months {
  display: flex;
}

.flatpickr-months .flatpickr-month {
  border-radius: 5px 5px 0 0;
  background: var(--vf-bg-date-head);
  color: var(--vf-color-date-head);
  fill: var(--vf-color-date-head);
  height: 34px;
  line-height: 1;
  text-align: center;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
  flex: 1;
}

.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 34px;
  padding: 10px;
  z-index: 1;
  color: var(--vf-color-date-head);
  fill: var(--vf-color-date-head);
}

.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
.flatpickr-months .flatpickr-next-month.flatpickr-disabled {
  display: none;
}

.flatpickr-months .flatpickr-prev-month i,
.flatpickr-months .flatpickr-next-month i {
  position: relative;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
  left: 0;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
.flatpickr-months .flatpickr-next-month.flatpickr-next-month {
  right: 0;
}

.flatpickr-months .flatpickr-prev-month:hover,
.flatpickr-months .flatpickr-next-month:hover {
  color: var(--vf-color-date-head);
}

.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  opacity: 1;
}

.flatpickr-months .flatpickr-prev-month svg,
.flatpickr-months .flatpickr-next-month svg {
  width: 14px;
  height: 14px;
  opacity: 0.7;
  display: block;
}

.flatpickr-months .flatpickr-prev-month svg path,
.flatpickr-months .flatpickr-next-month svg path {
  transition: fill 0.1s;
  fill: inherit;
}

.numInputWrapper {
  position: relative;
  height: auto;
}

.numInputWrapper input,
.numInputWrapper span {
  display: inline-block;
}

.numInputWrapper input {
  width: 100%;
}

.numInputWrapper input::-ms-clear {
  display: none;
}

.numInputWrapper input::-webkit-outer-spin-button,
.numInputWrapper input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

.numInputWrapper span {
  position: absolute;
  right: 0;
  width: 14px;
  padding: 0 4px 0 2px;
  height: 50%;
  line-height: 50%;
  opacity: 0;
  cursor: pointer;
  border: 1px solid var(--vf-border-color-input);
  box-sizing: border-box;
}

.numInputWrapper span:hover {
  background: var(--vf-bg-selected);
}

.numInputWrapper span:active {
  background: var(--vf-bg-selected);
}

.numInputWrapper span:after {
  display: block;
  content: "";
  position: absolute;
}

.numInputWrapper span.arrowUp {
  top: 0;
  border-bottom: 0;
}

.numInputWrapper span.arrowUp:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid var(--vf-color-input);
  top: 26%;
  box-sizing: border-box;
}

.numInputWrapper span.arrowDown {
  top: 50%;
}

.numInputWrapper span.arrowDown:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--vf-color-input);
  top: 40%;
  box-sizing: border-box;
}

.numInputWrapper span svg {
  width: inherit;
  height: auto;
}

.numInputWrapper span svg path {
  fill: var(--vf-color-input);
}

.numInputWrapper:hover {
  background: rgba(0, 0, 0, 0.05);
}

.numInputWrapper:hover span {
  opacity: 1;
}

.flatpickr-current-month {
  font-size: 135%;
  line-height: inherit;
  font-weight: 300;
  color: inherit;
  position: absolute;
  width: 75%;
  left: 12.5%;
  padding: 7.48px 0 0 0;
  line-height: 1;
  height: 34px;
  display: inline-block;
  text-align: center;
  transform: translate3d(0px, 0px, 0px);
}

.flatpickr-current-month span.cur-month {
  font-family: inherit;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  margin-left: 0.5ch;
  padding: 0;
}

.flatpickr-current-month span.cur-month:hover {
  background: rgba(0, 0, 0, 0.05);
}

.flatpickr-current-month .numInputWrapper {
  width: 6ch;
  width: 7ch\\0 ;
  display: inline-block;
}

.flatpickr-current-month .numInputWrapper span.arrowUp:after {
  border-bottom-color: var(--vf-color-date-head);
}

.flatpickr-current-month .numInputWrapper span.arrowDown:after {
  border-top-color: var(--vf-color-date-head);
}

.flatpickr-current-month input.cur-year {
  background: transparent;
  box-sizing: border-box;
  color: inherit;
  cursor: text;
  padding: 0 0 0 0.5ch;
  margin: 0;
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  line-height: inherit;
  height: auto;
  border: 0;
  border-radius: 0;
  vertical-align: initial;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

.flatpickr-current-month input.cur-year:focus {
  outline: 0;
}

.flatpickr-current-month input.cur-year[disabled],
.flatpickr-current-month input.cur-year[disabled]:hover {
  font-size: 100%;
  color: var(--vf-gray-300);
  background: transparent;
  pointer-events: none;
}

.flatpickr-current-month .flatpickr-monthDropdown-months {
  appearance: menulist;
  background: var(--vf-bg-date-head);
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  height: auto;
  line-height: inherit;
  margin: -1px 0 0 0;
  outline: none;
  padding: 0 0 0 0.5ch;
  position: relative;
  vertical-align: initial;
  -webkit-box-sizing: border-box;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  width: auto;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:focus,
.flatpickr-current-month .flatpickr-monthDropdown-months:active {
  outline: none;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:hover {
  background: rgba(0, 0, 0, 0.1);
}

.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
  background-color: var(--vf-bg-date-head);
  outline: none;
  padding: 0;
}

.flatpickr-weekdays {
  background: var(--vf-bg-date-head);
  text-align: center;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  height: 28px;
}

.flatpickr-weekdays .flatpickr-weekdaycontainer {
  display: flex;
  flex: 1;
}

span.flatpickr-weekday {
  cursor: default;
  font-size: 90%;
  background: var(--vf-bg-date-head);
  color: var(--vf-color-date-head);
  line-height: 1;
  margin: 0;
  text-align: center;
  display: block;
  flex: 1;
  font-weight: bolder;
}

.dayContainer,
.flatpickr-weeks {
  padding: 1px 0 0 0;
}

.flatpickr-days {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  width: 307.875px;
  background-color: var(--vf-bg-input);
}

.flatpickr-days:focus {
  outline: 0;
}

.dayContainer {
  padding: 0;
  outline: 0;
  text-align: left;
  width: 307.875px;
  min-width: 307.875px;
  max-width: 307.875px;
  box-sizing: border-box;
  display: inline-block;
  display: flex;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  justify-content: space-around;
  transform: translate3d(0px, 0px, 0px);
  opacity: 1;
}

.dayContainer + .dayContainer {
  box-shadow: -1px 0 0 var(--vf-gray-200);
}

.flatpickr-day {
  background: none;
  border: 1px solid transparent;
  border-radius: 150px;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  width: 14.2857143%;
  flex-basis: 14.2857143%;
  max-width: 39px;
  height: 39px;
  line-height: 38px;
  margin: 0;
  display: inline-block;
  position: relative;
  justify-content: center;
  text-align: center;
}

.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  cursor: pointer;
  outline: 0;
  background: var(--vf-bg-selected);
  border-color: var(--vf-bg-selected);
}

.flatpickr-day.today {
  border-color: var(--vf-bg-selected);
}

.flatpickr-day.today:hover,
.flatpickr-day.today:focus {
  border-color: var(--vf-bg-selected);
  background: var(--vf-bg-selected);
}

.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  background: var(--vf-primary);
  box-shadow: none;
  color: #fff;
  border-color: var(--vf-primary);
}

.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange {
  border-radius: 50px 0 0 50px;
}

.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  border-radius: 0 50px 50px 0;
}

.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
  box-shadow: -10px 0 0 var(--vf-primary);
}

.flatpickr-day.selected.startRange.endRange,
.flatpickr-day.startRange.startRange.endRange,
.flatpickr-day.endRange.startRange.endRange {
  border-radius: 50px;
}

.flatpickr-day.inRange {
  border-radius: 0;
  box-shadow: -5px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover,
.flatpickr-day.prevMonthDay,
.flatpickr-day.nextMonthDay,
.flatpickr-day.notAllowed,
.flatpickr-day.notAllowed.prevMonthDay,
.flatpickr-day.notAllowed.nextMonthDay {
  color: var(--vf-color-disabled);
  background: transparent;
  border-color: transparent;
  cursor: default;
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  cursor: not-allowed;
  color: var(--vf-color-disabled);
}

.flatpickr-day.week.selected {
  border-radius: 0;
  box-shadow: -5px 0 0 var(--vf-primary), 5px 0 0 var(--vf-primary);
}

.flatpickr-day.hidden {
  visibility: hidden;
}

.rangeMode .flatpickr-day {
  margin-top: 1px;
}

.flatpickr-weekwrapper {
  float: left;
}

.flatpickr-weekwrapper .flatpickr-weeks {
  padding: 0 12px;
}

.flatpickr-weekwrapper .flatpickr-weekday {
  float: none;
  width: 100%;
  line-height: 28px;
}

.flatpickr-weekwrapper span.flatpickr-day,
.flatpickr-weekwrapper span.flatpickr-day:hover {
  display: block;
  width: 100%;
  max-width: none;
  color: var(--vf-gray-300);
  background: transparent;
  cursor: default;
  border: none;
}

.flatpickr-innerContainer {
  display: block;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  background: var(--vf-bg-input);
}

.flatpickr-rContainer {
  display: inline-block;
  padding: 0;
  box-sizing: border-box;
}

.flatpickr-time {
  text-align: center;
  outline: 0;
  display: block;
  height: 0;
  line-height: 40px;
  max-height: 40px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  background: var(--vf-bg-input);
  border-radius: 0 0 5px 5px;
  color: var(--vf-color-input);
}

.flatpickr-time:after {
  content: "";
  display: table;
  clear: both;
}

.flatpickr-time .numInputWrapper {
  flex: 1;
  width: 40%;
  height: 40px;
  float: left;
}

.flatpickr-time .numInputWrapper span.arrowUp:after {
  border-bottom-color: var(--vf-color-input);
  box-sizing: border-box;
}

.flatpickr-time .numInputWrapper span.arrowDown:after {
  border-top-color: var(--vf-color-input);
  box-sizing: border-box;
}

.flatpickr-time.hasSeconds .numInputWrapper {
  width: 26%;
}

.flatpickr-time.time24hr .numInputWrapper {
  width: 49%;
}

.flatpickr-time input {
  background: transparent;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  height: inherit;
  line-height: inherit;
  font-size: 14px;
  position: relative;
  box-sizing: border-box;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  color: var(--vf-color-input);
  background: var(--vf-bg-input);
}

.flatpickr-time input.flatpickr-hour {
  font-weight: bold;
}

.flatpickr-time input.flatpickr-minute,
.flatpickr-time input.flatpickr-second {
  font-weight: 400;
}

.flatpickr-time input:focus {
  outline: 0;
  border: 0;
}

.flatpickr-time .flatpickr-time-separator,
.flatpickr-time .flatpickr-am-pm {
  height: inherit;
  float: left;
  line-height: inherit;
  font-weight: bold;
  width: 2%;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  align-self: center;
  background: var(--vf-bg-input);
}

.flatpickr-time .flatpickr-am-pm {
  outline: 0;
  width: 18%;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
}

.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: var(--vf-bg-selected);
}

.flatpickr-input[readonly] {
  cursor: pointer;
}

@keyframes fpFadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

span.flatpickr-day.selected {
  font-weight: bold;
}`;Y($h);id.__file="themes/vueform/templates/wrappers/DatepickerWrapper.vue";var Fh="2.1.15";const Ln="[data-trix-attachment]",dl={preview:{presentation:"gallery",caption:{name:!0,size:!0}},file:{caption:{size:!0}}},mt={default:{tagName:"div",parse:!1},quote:{tagName:"blockquote",nestable:!0},heading1:{tagName:"h1",terminal:!0,breakOnReturn:!0,group:!1},code:{tagName:"pre",terminal:!0,htmlAttributes:["language"],text:{plaintext:!0}},bulletList:{tagName:"ul",parse:!1},bullet:{tagName:"li",listAttribute:"bulletList",group:!1,nestable:!0,test(e){return Pl(e.parentNode)===mt[this.listAttribute].tagName}},numberList:{tagName:"ol",parse:!1},number:{tagName:"li",listAttribute:"numberList",group:!1,nestable:!0,test(e){return Pl(e.parentNode)===mt[this.listAttribute].tagName}},attachmentGallery:{tagName:"div",exclusive:!0,terminal:!0,parse:!1,group:!1}},Pl=e=>{var t;return e==null||(t=e.tagName)===null||t===void 0?void 0:t.toLowerCase()},Nl=navigator.userAgent.match(/android\s([0-9]+.*Chrome)/i),si=Nl&&parseInt(Nl[1]);var yr={composesExistingText:/Android.*Chrome/.test(navigator.userAgent),recentAndroid:si&&si>12,samsungAndroid:si&&navigator.userAgent.match(/Android.*SM-/),forcesObjectResizing:/Trident.*rv:11/.test(navigator.userAgent),supportsInputEvents:typeof InputEvent<"u"&&["data","getTargetRanges","inputType"].every((e=>e in InputEvent.prototype))},ad={ADD_ATTR:["language"],SAFE_FOR_XML:!1,RETURN_DOM:!0},me={attachFiles:"Attach Files",bold:"Bold",bullets:"Bullets",byte:"Byte",bytes:"Bytes",captionPlaceholder:"Add a caption…",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",url:"URL",urlPlaceholder:"Enter a URL…",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"};const zh=[me.bytes,me.KB,me.MB,me.GB,me.TB,me.PB];var ld={prefix:"IEC",precision:2,formatter(e){switch(e){case 0:return"0 ".concat(me.bytes);case 1:return"1 ".concat(me.byte);default:let t;this.prefix==="SI"?t=1e3:this.prefix==="IEC"&&(t=1024);const n=Math.floor(Math.log(e)/Math.log(t)),r=(e/Math.pow(t,n)).toFixed(this.precision).replace(/0*$/,"").replace(/\.$/,"");return"".concat(r," ").concat(zh[n])}}};const ti="\uFEFF",pn=" ",od=function(e){for(const t in e){const n=e[t];this[t]=n}return this},ul=document.documentElement,Ph=ul.matches,_e=function(e){let{onElement:t,matchingSelector:n,withCallback:r,inPhase:i,preventDefault:l,times:a}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=t||ul,s=n,u=i==="capturing",f=function(S){a!=null&&--a==0&&f.destroy();const M=gn(S.target,{matchingSelector:s});M!=null&&(r?.call(M,S,M),l&&S.preventDefault())};return f.destroy=()=>o.removeEventListener(e,f,u),o.addEventListener(e,f,u),f},ar=function(e){let{onElement:t,bubbles:n,cancelable:r,attributes:i}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const l=t??ul;n=n!==!1,r=r!==!1;const a=document.createEvent("Events");return a.initEvent(e,n,r),i!=null&&od.call(a,i),l.dispatchEvent(a)},sd=function(e,t){if(e?.nodeType===1)return Ph.call(e,t)},gn=function(e){let{matchingSelector:t,untilNode:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.parentNode;if(e!=null){if(t==null)return e;if(e.closest&&n==null)return e.closest(t);for(;e&&e!==n;){if(sd(e,t))return e;e=e.parentNode}}},cl=e=>document.activeElement!==e&&An(e,document.activeElement),An=function(e,t){if(e&&t)for(;t;){if(t===e)return!0;t=t.parentNode}},di=function(e){var t;if((t=e)===null||t===void 0||!t.parentNode)return;let n=0;for(e=e.previousSibling;e;)n++,e=e.previousSibling;return n},mn=e=>{var t;return e==null||(t=e.parentNode)===null||t===void 0?void 0:t.removeChild(e)},zr=function(e){let{onlyNodesOfType:t,usingFilter:n,expandEntityReferences:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(()=>{switch(t){case"element":return NodeFilter.SHOW_ELEMENT;case"text":return NodeFilter.SHOW_TEXT;case"comment":return NodeFilter.SHOW_COMMENT;default:return NodeFilter.SHOW_ALL}})();return document.createTreeWalker(e,i,n??null,r===!0)},gt=e=>{var t;return e==null||(t=e.tagName)===null||t===void 0?void 0:t.toLowerCase()},ke=function(e){let t,n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};typeof e=="object"?(r=e,e=r.tagName):r={attributes:r};const i=document.createElement(e);if(r.editable!=null&&(r.attributes==null&&(r.attributes={}),r.attributes.contenteditable=r.editable),r.attributes)for(t in r.attributes)n=r.attributes[t],i.setAttribute(t,n);if(r.style)for(t in r.style)n=r.style[t],i.style[t]=n;if(r.data)for(t in r.data)n=r.data[t],i.dataset[t]=n;return r.className&&r.className.split(" ").forEach((l=>{i.classList.add(l)})),r.textContent&&(i.textContent=r.textContent),r.childNodes&&[].concat(r.childNodes).forEach((l=>{i.appendChild(l)})),i};let Gn;const lr=function(){if(Gn!=null)return Gn;Gn=[];for(const e in mt){const t=mt[e];t.tagName&&Gn.push(t.tagName)}return Gn},ui=e=>zn(e?.firstChild),Hl=function(e){let{strict:t}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{strict:!0};return t?zn(e):zn(e)||!zn(e.firstChild)&&(function(n){return lr().includes(gt(n))&&!lr().includes(gt(n.firstChild))})(e)},zn=e=>Nh(e)&&e?.data==="block",Nh=e=>e?.nodeType===Node.COMMENT_NODE,Pn=function(e){let{name:t}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e)return or(e)?e.data===ti?!t||e.parentNode.dataset.trixCursorTarget===t:void 0:Pn(e.firstChild)},xn=e=>sd(e,Ln),dd=e=>or(e)&&e?.data==="",or=e=>e?.nodeType===Node.TEXT_NODE,pl={level2Enabled:!0,getLevel(){return this.level2Enabled&&yr.supportsInputEvents?2:0},pickFiles(e){const t=ke("input",{type:"file",multiple:!0,hidden:!0,id:this.fileInputId});t.addEventListener("change",(()=>{e(t.files),mn(t)})),mn(document.getElementById(this.fileInputId)),document.body.appendChild(t),t.click()}};var Mr={removeBlankTableCells:!1,tableCellSeparator:" | ",tableRowSeparator:`
`},Tn={bold:{tagName:"strong",inheritable:!0,parser(e){const t=window.getComputedStyle(e);return t.fontWeight==="bold"||t.fontWeight>=600}},italic:{tagName:"em",inheritable:!0,parser:e=>window.getComputedStyle(e).fontStyle==="italic"},href:{groupTagName:"a",parser(e){const t="a:not(".concat(Ln,")"),n=e.closest(t);if(n)return n.getAttribute("href")}},strike:{tagName:"del",inheritable:!0},frozen:{style:{backgroundColor:"highlight"}}},ud={getDefaultHTML:()=>`<div class="trix-button-row">
      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="`.concat(me.bold,'" tabindex="-1">').concat(me.bold,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="`).concat(me.italic,'" tabindex="-1">').concat(me.italic,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="`).concat(me.strike,'" tabindex="-1">').concat(me.strike,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="`).concat(me.link,'" tabindex="-1">').concat(me.link,`</button>
      </span>

      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="`).concat(me.heading1,'" tabindex="-1">').concat(me.heading1,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="`).concat(me.quote,'" tabindex="-1">').concat(me.quote,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="`).concat(me.code,'" tabindex="-1">').concat(me.code,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="`).concat(me.bullets,'" tabindex="-1">').concat(me.bullets,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="`).concat(me.numbers,'" tabindex="-1">').concat(me.numbers,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="`).concat(me.outdent,'" tabindex="-1">').concat(me.outdent,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="`).concat(me.indent,'" tabindex="-1">').concat(me.indent,`</button>
      </span>

      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="`).concat(me.attachFiles,'" tabindex="-1">').concat(me.attachFiles,`</button>
      </span>

      <span class="trix-button-group-spacer"></span>

      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="`).concat(me.undo,'" tabindex="-1">').concat(me.undo,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="`).concat(me.redo,'" tabindex="-1">').concat(me.redo,`</button>
      </span>
    </div>

    <div class="trix-dialogs" data-trix-dialogs>
      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">
        <div class="trix-dialog__link-fields">
          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="`).concat(me.urlPlaceholder,'" aria-label="').concat(me.url,`" data-trix-validate-href required data-trix-input>
          <div class="trix-button-group">
            <input type="button" class="trix-button trix-button--dialog" value="`).concat(me.link,`" data-trix-method="setAttribute">
            <input type="button" class="trix-button trix-button--dialog" value="`).concat(me.unlink,`" data-trix-method="removeAttribute">
          </div>
        </div>
      </div>
    </div>`)};const Pi={interval:5e3};var kr=Object.freeze({__proto__:null,attachments:dl,blockAttributes:mt,browser:yr,css:{attachment:"attachment",attachmentCaption:"attachment__caption",attachmentCaptionEditor:"attachment__caption-editor",attachmentMetadata:"attachment__metadata",attachmentMetadataContainer:"attachment__metadata-container",attachmentName:"attachment__name",attachmentProgress:"attachment__progress",attachmentSize:"attachment__size",attachmentToolbar:"attachment__toolbar",attachmentGallery:"attachment-gallery"},dompurify:ad,fileSize:ld,input:pl,keyNames:{8:"backspace",9:"tab",13:"return",27:"escape",37:"left",39:"right",46:"delete",68:"d",72:"h",79:"o"},lang:me,parser:Mr,textAttributes:Tn,toolbar:ud,undo:Pi});class it{static proxyMethod(t){const{name:n,toMethod:r,toProperty:i,optional:l}=Hh(t);this.prototype[n]=function(){let a,o;var s,u;return r?o=l?(s=this[r])===null||s===void 0?void 0:s.call(this):this[r]():i&&(o=this[i]),l?(a=(u=o)===null||u===void 0?void 0:u[n],a?Ul.call(a,o,arguments):void 0):(a=o[n],Ul.call(a,o,arguments))}}}const Hh=function(e){const t=e.match(Uh);if(!t)throw new Error("can't parse @proxyMethod expression: ".concat(e));const n={name:t[4]};return t[2]!=null?n.toMethod=t[1]:n.toProperty=t[1],t[3]!=null&&(n.optional=!0),n},{apply:Ul}=Function.prototype,Uh=new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$");var ci,pi,fi;class vr extends it{static box(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t instanceof this?t:this.fromUCS2String(t?.toString())}static fromUCS2String(t){return new this(t,Ni(t))}static fromCodepoints(t){return new this(Hi(t),t)}constructor(t,n){super(...arguments),this.ucs2String=t,this.codepoints=n,this.length=this.codepoints.length,this.ucs2Length=this.ucs2String.length}offsetToUCS2Offset(t){return Hi(this.codepoints.slice(0,Math.max(0,t))).length}offsetFromUCS2Offset(t){return Ni(this.ucs2String.slice(0,Math.max(0,t))).length}slice(){return this.constructor.fromCodepoints(this.codepoints.slice(...arguments))}charAt(t){return this.slice(t,t+1)}isEqualTo(t){return this.constructor.box(t).ucs2String===this.ucs2String}toJSON(){return this.ucs2String}getCacheKey(){return this.ucs2String}toString(){return this.ucs2String}}const jh=((ci=Array.from)===null||ci===void 0?void 0:ci.call(Array,"👼").length)===1,Wh=((pi=" ".codePointAt)===null||pi===void 0?void 0:pi.call(" ",0))!=null,Vh=((fi=String.fromCodePoint)===null||fi===void 0?void 0:fi.call(String,32,128124))===" 👼";let Ni,Hi;Ni=jh&&Wh?e=>Array.from(e).map((t=>t.codePointAt(0))):function(e){const t=[];let n=0;const{length:r}=e;for(;n<r;){let i=e.charCodeAt(n++);if(55296<=i&&i<=56319&&n<r){const l=e.charCodeAt(n++);(64512&l)==56320?i=((1023&i)<<10)+(1023&l)+65536:n--}t.push(i)}return t},Hi=Vh?e=>String.fromCodePoint(...Array.from(e||[])):function(e){return(()=>{const t=[];return Array.from(e).forEach((n=>{let r="";n>65535&&(n-=65536,r+=String.fromCharCode(n>>>10&1023|55296),n=56320|1023&n),t.push(r+String.fromCharCode(n))})),t})().join("")};let _h=0;class Bn extends it{static fromJSONString(t){return this.fromJSON(JSON.parse(t))}constructor(){super(...arguments),this.id=++_h}hasSameConstructorAs(t){return this.constructor===t?.constructor}isEqualTo(t){return this===t}inspect(){const t=[],n=this.contentsForInspection()||{};for(const r in n){const i=n[r];t.push("".concat(r,"=").concat(i))}return"#<".concat(this.constructor.name,":").concat(this.id).concat(t.length?" ".concat(t.join(", ")):"",">")}contentsForInspection(){}toJSONString(){return JSON.stringify(this)}toUTF16String(){return vr.box(this)}getCacheKey(){return this.id.toString()}}const Rn=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0},fl=function(e){const t=e.slice(0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.splice(...r),t},Qh=/[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,qh=(function(){const e=ke("input",{dir:"auto",name:"x",dirName:"x.dir"}),t=ke("textarea",{dir:"auto",name:"y",dirName:"y.dir"}),n=ke("form");n.appendChild(e),n.appendChild(t);const r=(function(){try{return new FormData(n).has(t.dirName)}catch{return!1}})(),i=(function(){try{return e.matches(":dir(ltr),:dir(rtl)")}catch{return!1}})();return r?function(l){return t.value=l,new FormData(n).get(t.dirName)}:i?function(l){return e.value=l,e.matches(":dir(rtl)")?"rtl":"ltr"}:function(l){const a=l.trim().charAt(0);return Qh.test(a)?"rtl":"ltr"}})();let vi=null,gi=null,mi=null,Ar=null;const Ui=()=>(vi||(vi=Gh().concat(Kh())),vi),Xe=e=>mt[e],Kh=()=>(gi||(gi=Object.keys(mt)),gi),ji=e=>Tn[e],Gh=()=>(mi||(mi=Object.keys(Tn)),mi),cd=function(e,t){Jh(e).textContent=t.replace(/%t/g,e)},Jh=function(e){const t=document.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("data-tag-name",e.toLowerCase());const n=Yh();return n&&t.setAttribute("nonce",n),document.head.insertBefore(t,document.head.firstChild),t},Yh=function(){const e=jl("trix-csp-nonce")||jl("csp-nonce");if(e){const{nonce:t,content:n}=e;return t==""?n:t}},jl=e=>document.head.querySelector("meta[name=".concat(e,"]")),Wl={"application/x-trix-feature-detection":"test"},pd=function(e){const t=e.getData("text/plain"),n=e.getData("text/html");if(!t||!n)return t?.length;{const{body:r}=new DOMParser().parseFromString(n,"text/html");if(r.textContent===t)return!r.querySelector("*")}},fd=/Mac|^iP/.test(navigator.platform)?e=>e.metaKey:e=>e.ctrlKey,vl=e=>setTimeout(e,1),vd=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={};for(const n in e){const r=e[n];t[n]=r}return t},Vn=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0},De=function(e){if(e!=null)return Array.isArray(e)||(e=[e,e]),[Vl(e[0]),Vl(e[1]!=null?e[1]:e[0])]},nn=function(e){if(e==null)return;const[t,n]=De(e);return Wi(t,n)},Pr=function(e,t){if(e==null||t==null)return;const[n,r]=De(e),[i,l]=De(t);return Wi(n,i)&&Wi(r,l)},Vl=function(e){return typeof e=="number"?e:vd(e)},Wi=function(e,t){return typeof e=="number"?e===t:Vn(e,t)};class gd extends it{constructor(){super(...arguments),this.update=this.update.bind(this),this.selectionManagers=[]}start(){this.started||(this.started=!0,document.addEventListener("selectionchange",this.update,!0))}stop(){if(this.started)return this.started=!1,document.removeEventListener("selectionchange",this.update,!0)}registerSelectionManager(t){if(!this.selectionManagers.includes(t))return this.selectionManagers.push(t),this.start()}unregisterSelectionManager(t){if(this.selectionManagers=this.selectionManagers.filter((n=>n!==t)),this.selectionManagers.length===0)return this.stop()}notifySelectionManagersOfSelectionChange(){return this.selectionManagers.map((t=>t.selectionDidChange()))}update(){this.notifySelectionManagersOfSelectionChange()}reset(){this.update()}}const In=new gd,md=function(){const e=window.getSelection();if(e.rangeCount>0)return e},sr=function(){var e;const t=(e=md())===null||e===void 0?void 0:e.getRangeAt(0);if(t&&!Xh(t))return t},hd=function(e){const t=window.getSelection();return t.removeAllRanges(),t.addRange(e),In.update()},Xh=e=>_l(e.startContainer)||_l(e.endContainer),_l=e=>!Object.getPrototypeOf(e),nr=e=>e.replace(new RegExp("".concat(ti),"g"),"").replace(new RegExp("".concat(pn),"g")," "),gl=new RegExp("[^\\S".concat(pn,"]")),ml=e=>e.replace(new RegExp("".concat(gl.source),"g")," ").replace(/\ {2,}/g," "),Ql=function(e,t){if(e.isEqualTo(t))return["",""];const n=hi(e,t),{length:r}=n.utf16String;let i;if(r){const{offset:l}=n,a=e.codepoints.slice(0,l).concat(e.codepoints.slice(l+r));i=hi(t,vr.fromCodepoints(a))}else i=hi(t,e);return[n.utf16String.toString(),i.utf16String.toString()]},hi=function(e,t){let n=0,r=e.length,i=t.length;for(;n<r&&e.charAt(n).isEqualTo(t.charAt(n));)n++;for(;r>n+1&&e.charAt(r-1).isEqualTo(t.charAt(i-1));)r--,i--;return{utf16String:e.slice(n,r),offset:n}};class It extends Bn{static fromCommonAttributesOfObjects(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(!t.length)return new this;let n=Jn(t[0]),r=n.getKeys();return t.slice(1).forEach((i=>{r=n.getKeysCommonToHash(Jn(i)),n=n.slice(r)})),n}static box(t){return Jn(t)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(...arguments),this.values=Dr(t)}add(t,n){return this.merge(Zh(t,n))}remove(t){return new It(Dr(this.values,t))}get(t){return this.values[t]}has(t){return t in this.values}merge(t){return new It(e0(this.values,t0(t)))}slice(t){const n={};return Array.from(t).forEach((r=>{this.has(r)&&(n[r]=this.values[r])})),new It(n)}getKeys(){return Object.keys(this.values)}getKeysCommonToHash(t){return t=Jn(t),this.getKeys().filter((n=>this.values[n]===t.values[n]))}isEqualTo(t){return Rn(this.toArray(),Jn(t).toArray())}isEmpty(){return this.getKeys().length===0}toArray(){if(!this.array){const t=[];for(const n in this.values){const r=this.values[n];t.push(t.push(n,r))}this.array=t.slice(0)}return this.array}toObject(){return Dr(this.values)}toJSON(){return this.toObject()}contentsForInspection(){return{values:JSON.stringify(this.values)}}}const Zh=function(e,t){const n={};return n[e]=t,n},e0=function(e,t){const n=Dr(e);for(const r in t){const i=t[r];n[r]=i}return n},Dr=function(e,t){const n={};return Object.keys(e).sort().forEach((r=>{r!==t&&(n[r]=e[r])})),n},Jn=function(e){return e instanceof It?e:new It(e)},t0=function(e){return e instanceof It?e.values:e};class hl{static groupObjects(){let t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{depth:r,asTree:i}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};i&&r==null&&(r=0);const l=[];return Array.from(n).forEach((a=>{var o;if(t){var s,u,f;if((s=a.canBeGrouped)!==null&&s!==void 0&&s.call(a,r)&&(u=(f=t[t.length-1]).canBeGroupedWith)!==null&&u!==void 0&&u.call(f,a,r))return void t.push(a);l.push(new this(t,{depth:r,asTree:i})),t=null}(o=a.canBeGrouped)!==null&&o!==void 0&&o.call(a,r)?t=[a]:l.push(a)})),t&&l.push(new this(t,{depth:r,asTree:i})),l}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{depth:n,asTree:r}=arguments.length>1?arguments[1]:void 0;this.objects=t,r&&(this.depth=n,this.objects=this.constructor.groupObjects(this.objects,{asTree:r,depth:this.depth+1}))}getObjects(){return this.objects}getDepth(){return this.depth}getCacheKey(){const t=["objectGroup"];return Array.from(this.getObjects()).forEach((n=>{t.push(n.getCacheKey())})),t.join("/")}}class n0 extends it{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),this.objects={},Array.from(t).forEach((n=>{const r=JSON.stringify(n);this.objects[r]==null&&(this.objects[r]=n)}))}find(t){const n=JSON.stringify(t);return this.objects[n]}}class r0{constructor(t){this.reset(t)}add(t){const n=ql(t);this.elements[n]=t}remove(t){const n=ql(t),r=this.elements[n];if(r)return delete this.elements[n],r}reset(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return this.elements={},Array.from(t).forEach((n=>{this.add(n)})),t}}const ql=e=>e.dataset.trixStoreKey;class Nr extends it{isPerforming(){return this.performing===!0}hasPerformed(){return this.performed===!0}hasSucceeded(){return this.performed&&this.succeeded}hasFailed(){return this.performed&&!this.succeeded}getPromise(){return this.promise||(this.promise=new Promise(((t,n)=>(this.performing=!0,this.perform(((r,i)=>{this.succeeded=r,this.performing=!1,this.performed=!0,this.succeeded?t(i):n(i)})))))),this.promise}perform(t){return t(!1)}release(){var t,n;(t=this.promise)===null||t===void 0||(n=t.cancel)===null||n===void 0||n.call(t),this.promise=null,this.performing=null,this.performed=null,this.succeeded=null}}Nr.proxyMethod("getPromise().then"),Nr.proxyMethod("getPromise().catch");class Mn extends it{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.object=t,this.options=n,this.childViews=[],this.rootView=this}getNodes(){return this.nodes||(this.nodes=this.createNodes()),this.nodes.map((t=>t.cloneNode(!0)))}invalidate(){var t;return this.nodes=null,this.childViews=[],(t=this.parentView)===null||t===void 0?void 0:t.invalidate()}invalidateViewForObject(t){var n;return(n=this.findViewForObject(t))===null||n===void 0?void 0:n.invalidate()}findOrCreateCachedChildView(t,n,r){let i=this.getCachedViewForObject(n);return i?this.recordChildView(i):(i=this.createChildView(...arguments),this.cacheViewForObject(i,n)),i}createChildView(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};n instanceof hl&&(r.viewClass=t,t=i0);const i=new t(n,r);return this.recordChildView(i)}recordChildView(t){return t.parentView=this,t.rootView=this.rootView,this.childViews.push(t),t}getAllChildViews(){let t=[];return this.childViews.forEach((n=>{t.push(n),t=t.concat(n.getAllChildViews())})),t}findElement(){return this.findElementForObject(this.object)}findElementForObject(t){const n=t?.id;if(n)return this.rootView.element.querySelector("[data-trix-id='".concat(n,"']"))}findViewForObject(t){for(const n of this.getAllChildViews())if(n.object===t)return n}getViewCache(){return this.rootView!==this?this.rootView.getViewCache():this.isViewCachingEnabled()?(this.viewCache||(this.viewCache={}),this.viewCache):void 0}isViewCachingEnabled(){return this.shouldCacheViews!==!1}enableViewCaching(){this.shouldCacheViews=!0}disableViewCaching(){this.shouldCacheViews=!1}getCachedViewForObject(t){var n;return(n=this.getViewCache())===null||n===void 0?void 0:n[t.getCacheKey()]}cacheViewForObject(t,n){const r=this.getViewCache();r&&(r[n.getCacheKey()]=t)}garbageCollectCachedViews(){const t=this.getViewCache();if(t){const n=this.getAllChildViews().concat(this).map((r=>r.object.getCacheKey()));for(const r in t)n.includes(r)||delete t[r]}}}class i0 extends Mn{constructor(){super(...arguments),this.objectGroup=this.object,this.viewClass=this.options.viewClass,delete this.options.viewClass}getChildViews(){return this.childViews.length||Array.from(this.objectGroup.getObjects()).forEach((t=>{this.findOrCreateCachedChildView(this.viewClass,t,this.options)})),this.childViews}createNodes(){const t=this.createContainerElement();return this.getChildViews().forEach((n=>{Array.from(n.getNodes()).forEach((r=>{t.appendChild(r)}))})),[t]}createContainerElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.objectGroup.getDepth();return this.getChildViews()[0].createContainerElement(t)}}/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */const{entries:bd,setPrototypeOf:Kl,isFrozen:a0,getPrototypeOf:l0,getOwnPropertyDescriptor:o0}=Object;let{freeze:bt,seal:zt,create:wd}=Object,{apply:Vi,construct:_i}=typeof Reflect<"u"&&Reflect;bt||(bt=function(e){return e}),zt||(zt=function(e){return e}),Vi||(Vi=function(e,t,n){return e.apply(t,n)}),_i||(_i=function(e,t){return new e(...t)});const Er=wt(Array.prototype.forEach),s0=wt(Array.prototype.lastIndexOf),Gl=wt(Array.prototype.pop),Yn=wt(Array.prototype.push),d0=wt(Array.prototype.splice),Or=wt(String.prototype.toLowerCase),bi=wt(String.prototype.toString),Jl=wt(String.prototype.match),Xn=wt(String.prototype.replace),u0=wt(String.prototype.indexOf),c0=wt(String.prototype.trim),Ht=wt(Object.prototype.hasOwnProperty),ft=wt(RegExp.prototype.test),Zn=(Yl=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return _i(Yl,t)});var Yl;function wt(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Vi(e,t,r)}}function Ee(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Or;Kl&&Kl(e,null);let r=t.length;for(;r--;){let i=t[r];if(typeof i=="string"){const l=n(i);l!==i&&(a0(t)||(t[r]=l),i=l)}e[i]=!0}return e}function p0(e){for(let t=0;t<e.length;t++)Ht(e,t)||(e[t]=null);return e}function kn(e){const t=wd(null);for(const[n,r]of bd(e))Ht(e,n)&&(Array.isArray(r)?t[n]=p0(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=kn(r):t[n]=r);return t}function er(e,t){for(;e!==null;){const n=o0(e,t);if(n){if(n.get)return wt(n.get);if(typeof n.value=="function")return wt(n.value)}e=l0(e)}return function(){return null}}const Xl=bt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),wi=bt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),yi=bt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),f0=bt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ki=bt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),v0=bt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Zl=bt(["#text"]),eo=bt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ci=bt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),to=bt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Lr=bt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),g0=zt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),m0=zt(/<%[\w\W]*|[\w\W]*%>/gm),h0=zt(/\$\{[\w\W]*/gm),b0=zt(/^data-[\-\w.\u00B7-\uFFFF]+$/),w0=zt(/^aria-[\-\w]+$/),yd=zt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),y0=zt(/^(?:\w+script|data):/i),k0=zt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),kd=zt(/^html$/i),C0=zt(/^[a-z][.\w]*(-[.\w]+)+$/i);var no=Object.freeze({__proto__:null,ARIA_ATTR:w0,ATTR_WHITESPACE:k0,CUSTOM_ELEMENT:C0,DATA_ATTR:b0,DOCTYPE_NAME:kd,ERB_EXPR:m0,IS_ALLOWED_URI:yd,IS_SCRIPT_OR_DATA:y0,MUSTACHE_EXPR:g0,TMPLIT_EXPR:h0});const A0=1,E0=3,L0=7,x0=8,S0=9,T0=function(){return typeof window>"u"?null:window};var Hr=(function e(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:T0();const n=g=>e(g);if(n.version="3.2.5",n.removed=[],!t||!t.document||t.document.nodeType!==S0||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const i=r,l=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:u,NodeFilter:f,NamedNodeMap:S=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:M,DOMParser:C,trustedTypes:E}=t,k=u.prototype,x=er(k,"cloneNode"),O=er(k,"remove"),D=er(k,"nextSibling"),L=er(k,"childNodes"),P=er(k,"parentNode");if(typeof o=="function"){const g=r.createElement("template");g.content&&g.content.ownerDocument&&(r=g.content.ownerDocument)}let H,I="";const{implementation:te,createNodeIterator:G,createDocumentFragment:z,getElementsByTagName:re}=r,{importNode:Z}=i;let _={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported=typeof bd=="function"&&typeof P=="function"&&te&&te.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ae,ERB_EXPR:we,TMPLIT_EXPR:de,DATA_ATTR:be,ARIA_ATTR:fe,IS_SCRIPT_OR_DATA:Ke,ATTR_WHITESPACE:pe,CUSTOM_ELEMENT:ve}=no;let{IS_ALLOWED_URI:W}=no,ee=null;const at=Ee({},[...Xl,...wi,...yi,...ki,...Zl]);let oe=null;const le=Ee({},[...eo,...Ci,...to,...Lr]);let R=Object.seal(wd(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ne=null,Te=null,lt=!0,Mt=!0,Vt=!1,Et=!0,Lt=!1,Pt=!0,et=!1,_t=!1,yt=!1,Ge=!1,tt=!1,nt=!1,kt=!0,xt=!1,Me=!0,ot=!1,qe={},ut=null;const Ct=Ee({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Dt=null;const ln=Ee({},["audio","video","img","source","image","track"]);let ct=null;const Ot=Ee({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Zt="http://www.w3.org/1998/Math/MathML",Nt="http://www.w3.org/2000/svg",St="http://www.w3.org/1999/xhtml";let pt=St,At=!1,bn=null;const On=Ee({},[Zt,Nt,St],bi);let Tt=Ee({},["mi","mo","mn","ms","mtext"]),Rt=Ee({},["annotation-xml"]);const wn=Ee({},["title","style","font","a","script"]);let Qt=null;const Qn=["application/xhtml+xml","text/html"];let Pe=null,c=null;const b=r.createElement("form"),y=function(g){return g instanceof RegExp||g instanceof Function},$=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!c||c!==g){if(g&&typeof g=="object"||(g={}),g=kn(g),Qt=Qn.indexOf(g.PARSER_MEDIA_TYPE)===-1?"text/html":g.PARSER_MEDIA_TYPE,Pe=Qt==="application/xhtml+xml"?bi:Or,ee=Ht(g,"ALLOWED_TAGS")?Ee({},g.ALLOWED_TAGS,Pe):at,oe=Ht(g,"ALLOWED_ATTR")?Ee({},g.ALLOWED_ATTR,Pe):le,bn=Ht(g,"ALLOWED_NAMESPACES")?Ee({},g.ALLOWED_NAMESPACES,bi):On,ct=Ht(g,"ADD_URI_SAFE_ATTR")?Ee(kn(Ot),g.ADD_URI_SAFE_ATTR,Pe):Ot,Dt=Ht(g,"ADD_DATA_URI_TAGS")?Ee(kn(ln),g.ADD_DATA_URI_TAGS,Pe):ln,ut=Ht(g,"FORBID_CONTENTS")?Ee({},g.FORBID_CONTENTS,Pe):Ct,ne=Ht(g,"FORBID_TAGS")?Ee({},g.FORBID_TAGS,Pe):{},Te=Ht(g,"FORBID_ATTR")?Ee({},g.FORBID_ATTR,Pe):{},qe=!!Ht(g,"USE_PROFILES")&&g.USE_PROFILES,lt=g.ALLOW_ARIA_ATTR!==!1,Mt=g.ALLOW_DATA_ATTR!==!1,Vt=g.ALLOW_UNKNOWN_PROTOCOLS||!1,Et=g.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Lt=g.SAFE_FOR_TEMPLATES||!1,Pt=g.SAFE_FOR_XML!==!1,et=g.WHOLE_DOCUMENT||!1,Ge=g.RETURN_DOM||!1,tt=g.RETURN_DOM_FRAGMENT||!1,nt=g.RETURN_TRUSTED_TYPE||!1,yt=g.FORCE_BODY||!1,kt=g.SANITIZE_DOM!==!1,xt=g.SANITIZE_NAMED_PROPS||!1,Me=g.KEEP_CONTENT!==!1,ot=g.IN_PLACE||!1,W=g.ALLOWED_URI_REGEXP||yd,pt=g.NAMESPACE||St,Tt=g.MATHML_TEXT_INTEGRATION_POINTS||Tt,Rt=g.HTML_INTEGRATION_POINTS||Rt,R=g.CUSTOM_ELEMENT_HANDLING||{},g.CUSTOM_ELEMENT_HANDLING&&y(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(R.tagNameCheck=g.CUSTOM_ELEMENT_HANDLING.tagNameCheck),g.CUSTOM_ELEMENT_HANDLING&&y(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(R.attributeNameCheck=g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),g.CUSTOM_ELEMENT_HANDLING&&typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(R.allowCustomizedBuiltInElements=g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Lt&&(Mt=!1),tt&&(Ge=!0),qe&&(ee=Ee({},Zl),oe=[],qe.html===!0&&(Ee(ee,Xl),Ee(oe,eo)),qe.svg===!0&&(Ee(ee,wi),Ee(oe,Ci),Ee(oe,Lr)),qe.svgFilters===!0&&(Ee(ee,yi),Ee(oe,Ci),Ee(oe,Lr)),qe.mathMl===!0&&(Ee(ee,ki),Ee(oe,to),Ee(oe,Lr))),g.ADD_TAGS&&(ee===at&&(ee=kn(ee)),Ee(ee,g.ADD_TAGS,Pe)),g.ADD_ATTR&&(oe===le&&(oe=kn(oe)),Ee(oe,g.ADD_ATTR,Pe)),g.ADD_URI_SAFE_ATTR&&Ee(ct,g.ADD_URI_SAFE_ATTR,Pe),g.FORBID_CONTENTS&&(ut===Ct&&(ut=kn(ut)),Ee(ut,g.FORBID_CONTENTS,Pe)),Me&&(ee["#text"]=!0),et&&Ee(ee,["html","head","body"]),ee.table&&(Ee(ee,["tbody"]),delete ne.tbody),g.TRUSTED_TYPES_POLICY){if(typeof g.TRUSTED_TYPES_POLICY.createHTML!="function")throw Zn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof g.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Zn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');H=g.TRUSTED_TYPES_POLICY,I=H.createHTML("")}else H===void 0&&(H=(function(K,V){if(typeof K!="object"||typeof K.createPolicy!="function")return null;let ce=null;const Ae="data-tt-policy-suffix";V&&V.hasAttribute(Ae)&&(ce=V.getAttribute(Ae));const v="dompurify"+(ce?"#"+ce:"");try{return K.createPolicy(v,{createHTML:B=>B,createScriptURL:B=>B})}catch{return console.warn("TrustedTypes policy "+v+" could not be created."),null}})(E,l)),H!==null&&typeof I=="string"&&(I=H.createHTML(""));bt&&bt(g),c=g}},U=Ee({},[...wi,...yi,...f0]),j=Ee({},[...ki,...v0]),J=function(g){Yn(n.removed,{element:g});try{P(g).removeChild(g)}catch{O(g)}},Q=function(g,K){try{Yn(n.removed,{attribute:K.getAttributeNode(g),from:K})}catch{Yn(n.removed,{attribute:null,from:K})}if(K.removeAttribute(g),g==="is")if(Ge||tt)try{J(K)}catch{}else try{K.setAttribute(g,"")}catch{}},Re=function(g){let K=null,V=null;if(yt)g="<remove></remove>"+g;else{const v=Jl(g,/^[\r\n\t ]+/);V=v&&v[0]}Qt==="application/xhtml+xml"&&pt===St&&(g='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+g+"</body></html>");const ce=H?H.createHTML(g):g;if(pt===St)try{K=new C().parseFromString(ce,Qt)}catch{}if(!K||!K.documentElement){K=te.createDocument(pt,"template",null);try{K.documentElement.innerHTML=At?I:ce}catch{}}const Ae=K.body||K.documentElement;return g&&V&&Ae.insertBefore(r.createTextNode(V),Ae.childNodes[0]||null),pt===St?re.call(K,et?"html":"body")[0]:et?K.documentElement:Ae},Ie=function(g){return G.call(g.ownerDocument||g,g,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},Ce=function(g){return g instanceof M&&(typeof g.nodeName!="string"||typeof g.textContent!="string"||typeof g.removeChild!="function"||!(g.attributes instanceof S)||typeof g.removeAttribute!="function"||typeof g.setAttribute!="function"||typeof g.namespaceURI!="string"||typeof g.insertBefore!="function"||typeof g.hasChildNodes!="function")},$e=function(g){return typeof s=="function"&&g instanceof s};function ge(g,K,V){Er(g,(ce=>{ce.call(n,K,V,c)}))}const He=function(g){let K=null;if(ge(_.beforeSanitizeElements,g,null),Ce(g))return J(g),!0;const V=Pe(g.nodeName);if(ge(_.uponSanitizeElement,g,{tagName:V,allowedTags:ee}),g.hasChildNodes()&&!$e(g.firstElementChild)&&ft(/<[/\w!]/g,g.innerHTML)&&ft(/<[/\w!]/g,g.textContent)||g.nodeType===L0||Pt&&g.nodeType===x0&&ft(/<[/\w]/g,g.data))return J(g),!0;if(!ee[V]||ne[V]){if(!ne[V]&&Ue(V)&&(R.tagNameCheck instanceof RegExp&&ft(R.tagNameCheck,V)||R.tagNameCheck instanceof Function&&R.tagNameCheck(V)))return!1;if(Me&&!ut[V]){const ce=P(g)||g.parentNode,Ae=L(g)||g.childNodes;if(Ae&&ce)for(let v=Ae.length-1;v>=0;--v){const B=x(Ae[v],!0);B.__removalCount=(g.__removalCount||0)+1,ce.insertBefore(B,D(g))}}return J(g),!0}return g instanceof u&&!(function(ce){let Ae=P(ce);Ae&&Ae.tagName||(Ae={namespaceURI:pt,tagName:"template"});const v=Or(ce.tagName),B=Or(Ae.tagName);return!!bn[ce.namespaceURI]&&(ce.namespaceURI===Nt?Ae.namespaceURI===St?v==="svg":Ae.namespaceURI===Zt?v==="svg"&&(B==="annotation-xml"||Tt[B]):!!U[v]:ce.namespaceURI===Zt?Ae.namespaceURI===St?v==="math":Ae.namespaceURI===Nt?v==="math"&&Rt[B]:!!j[v]:ce.namespaceURI===St?!(Ae.namespaceURI===Nt&&!Rt[B])&&!(Ae.namespaceURI===Zt&&!Tt[B])&&!j[v]&&(wn[v]||!U[v]):!(Qt!=="application/xhtml+xml"||!bn[ce.namespaceURI]))})(g)?(J(g),!0):V!=="noscript"&&V!=="noembed"&&V!=="noframes"||!ft(/<\/no(script|embed|frames)/i,g.innerHTML)?(Lt&&g.nodeType===E0&&(K=g.textContent,Er([ae,we,de],(ce=>{K=Xn(K,ce," ")})),g.textContent!==K&&(Yn(n.removed,{element:g.cloneNode()}),g.textContent=K)),ge(_.afterSanitizeElements,g,null),!1):(J(g),!0)},Je=function(g,K,V){if(kt&&(K==="id"||K==="name")&&(V in r||V in b))return!1;if(!(Mt&&!Te[K]&&ft(be,K))){if(!(lt&&ft(fe,K))){if(!oe[K]||Te[K]){if(!(Ue(g)&&(R.tagNameCheck instanceof RegExp&&ft(R.tagNameCheck,g)||R.tagNameCheck instanceof Function&&R.tagNameCheck(g))&&(R.attributeNameCheck instanceof RegExp&&ft(R.attributeNameCheck,K)||R.attributeNameCheck instanceof Function&&R.attributeNameCheck(K))||K==="is"&&R.allowCustomizedBuiltInElements&&(R.tagNameCheck instanceof RegExp&&ft(R.tagNameCheck,V)||R.tagNameCheck instanceof Function&&R.tagNameCheck(V))))return!1}else if(!ct[K]){if(!ft(W,Xn(V,pe,""))){if((K!=="src"&&K!=="xlink:href"&&K!=="href"||g==="script"||u0(V,"data:")!==0||!Dt[g])&&!(Vt&&!ft(Ke,Xn(V,pe,"")))){if(V)return!1}}}}}return!0},Ue=function(g){return g!=="annotation-xml"&&Jl(g,ve)},We=function(g){ge(_.beforeSanitizeAttributes,g,null);const{attributes:K}=g;if(!K||Ce(g))return;const V={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:oe,forceKeepAttr:void 0};let ce=K.length;for(;ce--;){const Ae=K[ce],{name:v,namespaceURI:B,value:ue}=Ae,Be=Pe(v);let Ve=v==="value"?ue:c0(ue);if(V.attrName=Be,V.attrValue=Ve,V.keepAttr=!0,V.forceKeepAttr=void 0,ge(_.uponSanitizeAttribute,g,V),Ve=V.attrValue,!xt||Be!=="id"&&Be!=="name"||(Q(v,g),Ve="user-content-"+Ve),Pt&&ft(/((--!?|])>)|<\/(style|title)/i,Ve)){Q(v,g);continue}if(V.forceKeepAttr||(Q(v,g),!V.keepAttr))continue;if(!Et&&ft(/\/>/i,Ve)){Q(v,g);continue}Lt&&Er([ae,we,de],(li=>{Ve=Xn(Ve,li," ")}));const qn=Pe(g.nodeName);if(Je(qn,Be,Ve)){if(H&&typeof E=="object"&&typeof E.getAttributeType=="function"&&!B)switch(E.getAttributeType(qn,Be)){case"TrustedHTML":Ve=H.createHTML(Ve);break;case"TrustedScriptURL":Ve=H.createScriptURL(Ve)}try{B?g.setAttributeNS(B,v,Ve):g.setAttribute(v,Ve),Ce(g)?J(g):Gl(n.removed)}catch{}}}ge(_.afterSanitizeAttributes,g,null)},qt=function g(K){let V=null;const ce=Ie(K);for(ge(_.beforeSanitizeShadowDOM,K,null);V=ce.nextNode();)ge(_.uponSanitizeShadowNode,V,null),He(V),We(V),V.content instanceof a&&g(V.content);ge(_.afterSanitizeShadowDOM,K,null)};return n.sanitize=function(g){let K=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},V=null,ce=null,Ae=null,v=null;if(At=!g,At&&(g="<!-->"),typeof g!="string"&&!$e(g)){if(typeof g.toString!="function")throw Zn("toString is not a function");if(typeof(g=g.toString())!="string")throw Zn("dirty is not a string, aborting")}if(!n.isSupported)return g;if(_t||$(K),n.removed=[],typeof g=="string"&&(ot=!1),ot){if(g.nodeName){const Be=Pe(g.nodeName);if(!ee[Be]||ne[Be])throw Zn("root node is forbidden and cannot be sanitized in-place")}}else if(g instanceof s)V=Re("<!---->"),ce=V.ownerDocument.importNode(g,!0),ce.nodeType===A0&&ce.nodeName==="BODY"||ce.nodeName==="HTML"?V=ce:V.appendChild(ce);else{if(!Ge&&!Lt&&!et&&g.indexOf("<")===-1)return H&&nt?H.createHTML(g):g;if(V=Re(g),!V)return Ge?null:nt?I:""}V&&yt&&J(V.firstChild);const B=Ie(ot?g:V);for(;Ae=B.nextNode();)He(Ae),We(Ae),Ae.content instanceof a&&qt(Ae.content);if(ot)return g;if(Ge){if(tt)for(v=z.call(V.ownerDocument);V.firstChild;)v.appendChild(V.firstChild);else v=V;return(oe.shadowroot||oe.shadowrootmode)&&(v=Z.call(i,v,!0)),v}let ue=et?V.outerHTML:V.innerHTML;return et&&ee["!doctype"]&&V.ownerDocument&&V.ownerDocument.doctype&&V.ownerDocument.doctype.name&&ft(kd,V.ownerDocument.doctype.name)&&(ue="<!DOCTYPE "+V.ownerDocument.doctype.name+`>
`+ue),Lt&&Er([ae,we,de],(Be=>{ue=Xn(ue,Be," ")})),H&&nt?H.createHTML(ue):ue},n.setConfig=function(){$(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),_t=!0},n.clearConfig=function(){c=null,_t=!1},n.isValidAttribute=function(g,K,V){c||$({});const ce=Pe(g),Ae=Pe(K);return Je(ce,Ae,V)},n.addHook=function(g,K){typeof K=="function"&&Yn(_[g],K)},n.removeHook=function(g,K){if(K!==void 0){const V=s0(_[g],K);return V===-1?void 0:d0(_[g],V,1)[0]}return Gl(_[g])},n.removeHooks=function(g){_[g]=[]},n.removeAllHooks=function(){_={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n})();Hr.addHook("uponSanitizeAttribute",(function(e,t){/^data-trix-/.test(t.attrName)&&(t.forceKeepAttr=!0)}));const R0="style href src width height language class".split(" "),I0="javascript:".split(" "),B0="script iframe form noscript".split(" ");class ni extends it{static setHTML(t,n,r){const i=new this(n,r).sanitize(),l=i.getHTML?i.getHTML():i.outerHTML;t.innerHTML=l}static sanitize(t,n){const r=new this(t,n);return r.sanitize(),r}constructor(t){let{allowedAttributes:n,forbiddenProtocols:r,forbiddenElements:i,purifyOptions:l}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.allowedAttributes=n||R0,this.forbiddenProtocols=r||I0,this.forbiddenElements=i||B0,this.purifyOptions=l||{},this.body=M0(t)}sanitize(){this.sanitizeElements(),this.normalizeListElementNesting();const t=Object.assign({},ad,this.purifyOptions);return Hr.setConfig(t),this.body=Hr.sanitize(this.body),this.body}getHTML(){return this.body.innerHTML}getBody(){return this.body}sanitizeElements(){const t=zr(this.body),n=[];for(;t.nextNode();){const r=t.currentNode;switch(r.nodeType){case Node.ELEMENT_NODE:this.elementIsRemovable(r)?n.push(r):this.sanitizeElement(r);break;case Node.COMMENT_NODE:n.push(r)}}return n.forEach((r=>mn(r))),this.body}sanitizeElement(t){return t.hasAttribute("href")&&this.forbiddenProtocols.includes(t.protocol)&&t.removeAttribute("href"),Array.from(t.attributes).forEach((n=>{let{name:r}=n;this.allowedAttributes.includes(r)||r.indexOf("data-trix")===0||t.removeAttribute(r)})),t}normalizeListElementNesting(){return Array.from(this.body.querySelectorAll("ul,ol")).forEach((t=>{const n=t.previousElementSibling;n&&gt(n)==="li"&&n.appendChild(t)})),this.body}elementIsRemovable(t){if(t?.nodeType===Node.ELEMENT_NODE)return this.elementIsForbidden(t)||this.elementIsntSerializable(t)}elementIsForbidden(t){return this.forbiddenElements.includes(gt(t))}elementIsntSerializable(t){return t.getAttribute("data-trix-serialize")==="false"&&!xn(t)}}const M0=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";e=e.replace(/<\/html[^>]*>[^]*$/i,"</html>");const t=document.implementation.createHTMLDocument("");return t.documentElement.innerHTML=e,Array.from(t.head.querySelectorAll("style")).forEach((n=>{t.body.appendChild(n)})),t.body},{css:sn}=kr;class bl extends Mn{constructor(){super(...arguments),this.attachment=this.object,this.attachment.uploadProgressDelegate=this,this.attachmentPiece=this.options.piece}createContentNodes(){return[]}createNodes(){let t;const n=t=ke({tagName:"figure",className:this.getClassName(),data:this.getData(),editable:!1}),r=this.getHref();return r&&(t=ke({tagName:"a",editable:!1,attributes:{href:r,tabindex:-1}}),n.appendChild(t)),this.attachment.hasContent()?ni.setHTML(t,this.attachment.getContent()):this.createContentNodes().forEach((i=>{t.appendChild(i)})),t.appendChild(this.createCaptionElement()),this.attachment.isPending()&&(this.progressElement=ke({tagName:"progress",attributes:{class:sn.attachmentProgress,value:this.attachment.getUploadProgress(),max:100},data:{trixMutable:!0,trixStoreKey:["progressElement",this.attachment.id].join("/")}}),n.appendChild(this.progressElement)),[ro("left"),n,ro("right")]}createCaptionElement(){const t=ke({tagName:"figcaption",className:sn.attachmentCaption}),n=this.attachmentPiece.getCaption();if(n)t.classList.add("".concat(sn.attachmentCaption,"--edited")),t.textContent=n;else{let r,i;const l=this.getCaptionConfig();if(l.name&&(r=this.attachment.getFilename()),l.size&&(i=this.attachment.getFormattedFilesize()),r){const a=ke({tagName:"span",className:sn.attachmentName,textContent:r});t.appendChild(a)}if(i){r&&t.appendChild(document.createTextNode(" "));const a=ke({tagName:"span",className:sn.attachmentSize,textContent:i});t.appendChild(a)}}return t}getClassName(){const t=[sn.attachment,"".concat(sn.attachment,"--").concat(this.attachment.getType())],n=this.attachment.getExtension();return n&&t.push("".concat(sn.attachment,"--").concat(n)),t.join(" ")}getData(){const t={trixAttachment:JSON.stringify(this.attachment),trixContentType:this.attachment.getContentType(),trixId:this.attachment.id},{attributes:n}=this.attachmentPiece;return n.isEmpty()||(t.trixAttributes=JSON.stringify(n)),this.attachment.isPending()&&(t.trixSerialize=!1),t}getHref(){if(!D0(this.attachment.getContent(),"a"))return this.attachment.getHref()}getCaptionConfig(){var t;const n=this.attachment.getType(),r=vd((t=dl[n])===null||t===void 0?void 0:t.caption);return n==="file"&&(r.name=!0),r}findProgressElement(){var t;return(t=this.findElement())===null||t===void 0?void 0:t.querySelector("progress")}attachmentDidChangeUploadProgress(){const t=this.attachment.getUploadProgress(),n=this.findProgressElement();n&&(n.value=t)}}const ro=e=>ke({tagName:"span",textContent:ti,data:{trixCursorTarget:e,trixSerialize:!1}}),D0=function(e,t){const n=ke("div");return ni.setHTML(n,e||""),n.querySelector(t)};class Cd extends bl{constructor(){super(...arguments),this.attachment.previewDelegate=this}createContentNodes(){return this.image=ke({tagName:"img",attributes:{src:""},data:{trixMutable:!0}}),this.refresh(this.image),[this.image]}createCaptionElement(){const t=super.createCaptionElement(...arguments);return t.textContent||t.setAttribute("data-trix-placeholder",me.captionPlaceholder),t}refresh(t){var n;if(t||(t=(n=this.findElement())===null||n===void 0?void 0:n.querySelector("img")),t)return this.updateAttributesForImage(t)}updateAttributesForImage(t){const n=this.attachment.getURL(),r=this.attachment.getPreviewURL();if(t.src=r||n,r===n)t.removeAttribute("data-trix-serialized-attributes");else{const o=JSON.stringify({src:n});t.setAttribute("data-trix-serialized-attributes",o)}const i=this.attachment.getWidth(),l=this.attachment.getHeight();i!=null&&(t.width=i),l!=null&&(t.height=l);const a=["imageElement",this.attachment.id,t.src,t.width,t.height].join("/");t.dataset.trixStoreKey=a}attachmentDidChangeAttributes(){return this.refresh(this.image),this.refresh()}}class Ad extends Mn{constructor(){super(...arguments),this.piece=this.object,this.attributes=this.piece.getAttributes(),this.textConfig=this.options.textConfig,this.context=this.options.context,this.piece.attachment?this.attachment=this.piece.attachment:this.string=this.piece.toString()}createNodes(){let t=this.attachment?this.createAttachmentNodes():this.createStringNodes();const n=this.createElement();if(n){const r=(function(i){for(;(l=i)!==null&&l!==void 0&&l.firstElementChild;){var l;i=i.firstElementChild}return i})(n);Array.from(t).forEach((i=>{r.appendChild(i)})),t=[n]}return t}createAttachmentNodes(){const t=this.attachment.isPreviewable()?Cd:bl;return this.createChildView(t,this.piece.attachment,{piece:this.piece}).getNodes()}createStringNodes(){var t;if((t=this.textConfig)!==null&&t!==void 0&&t.plaintext)return[document.createTextNode(this.string)];{const n=[],r=this.string.split(`
`);for(let i=0;i<r.length;i++){const l=r[i];if(i>0){const a=ke("br");n.push(a)}if(l.length){const a=document.createTextNode(this.preserveSpaces(l));n.push(a)}}return n}}createElement(){let t,n,r;const i={};for(n in this.attributes){r=this.attributes[n];const a=ji(n);if(a){if(a.tagName){var l;const o=ke(a.tagName);l?(l.appendChild(o),l=o):t=l=o}if(a.styleProperty&&(i[a.styleProperty]=r),a.style)for(n in a.style)r=a.style[n],i[n]=r}}if(Object.keys(i).length)for(n in t||(t=ke("span")),i)r=i[n],t.style[n]=r;return t}createContainerElement(){for(const t in this.attributes){const n=this.attributes[t],r=ji(t);if(r&&r.groupTagName){const i={};return i[t]=n,ke(r.groupTagName,i)}}}preserveSpaces(t){return this.context.isLast&&(t=t.replace(/\ $/,pn)),t=t.replace(/(\S)\ {3}(\S)/g,"$1 ".concat(pn," $2")).replace(/\ {2}/g,"".concat(pn," ")).replace(/\ {2}/g," ".concat(pn)),(this.context.isFirst||this.context.followsWhitespace)&&(t=t.replace(/^\ /,pn)),t}}class Ed extends Mn{constructor(){super(...arguments),this.text=this.object,this.textConfig=this.options.textConfig}createNodes(){const t=[],n=hl.groupObjects(this.getPieces()),r=n.length-1;for(let l=0;l<n.length;l++){const a=n[l],o={};l===0&&(o.isFirst=!0),l===r&&(o.isLast=!0),O0(i)&&(o.followsWhitespace=!0);const s=this.findOrCreateCachedChildView(Ad,a,{textConfig:this.textConfig,context:o});t.push(...Array.from(s.getNodes()||[]));var i=a}return t}getPieces(){return Array.from(this.text.getPieces()).filter((t=>!t.hasAttribute("blockBreak")))}}const O0=e=>/\s$/.test(e?.toString()),{css:io}=kr;class Ld extends Mn{constructor(){super(...arguments),this.block=this.object,this.attributes=this.block.getAttributes()}createNodes(){const t=[document.createComment("block")];if(this.block.isEmpty())t.push(ke("br"));else{var n;const r=(n=Xe(this.block.getLastAttribute()))===null||n===void 0?void 0:n.text,i=this.findOrCreateCachedChildView(Ed,this.block.text,{textConfig:r});t.push(...Array.from(i.getNodes()||[])),this.shouldAddExtraNewlineElement()&&t.push(ke("br"))}if(this.attributes.length)return t;{let r;const{tagName:i}=mt.default;this.block.isRTL()&&(r={dir:"rtl"});const l=ke({tagName:i,attributes:r});return t.forEach((a=>l.appendChild(a))),[l]}}createContainerElement(t){const n={};let r;const i=this.attributes[t],{tagName:l,htmlAttributes:a=[]}=Xe(i);if(t===0&&this.block.isRTL()&&Object.assign(n,{dir:"rtl"}),i==="attachmentGallery"){const o=this.block.getBlockBreakPosition();r="".concat(io.attachmentGallery," ").concat(io.attachmentGallery,"--").concat(o)}return Object.entries(this.block.htmlAttributes).forEach((o=>{let[s,u]=o;a.includes(s)&&(n[s]=u)})),ke({tagName:l,className:r,attributes:n})}shouldAddExtraNewlineElement(){return/\n\n$/.test(this.block.toString())}}class ri extends Mn{static render(t){const n=ke("div"),r=new this(t,{element:n});return r.render(),r.sync(),n}constructor(){super(...arguments),this.element=this.options.element,this.elementStore=new r0,this.setDocument(this.object)}setDocument(t){t.isEqualTo(this.document)||(this.document=this.object=t)}render(){if(this.childViews=[],this.shadowElement=ke("div"),!this.document.isEmpty()){const t=hl.groupObjects(this.document.getBlocks(),{asTree:!0});Array.from(t).forEach((n=>{const r=this.findOrCreateCachedChildView(Ld,n);Array.from(r.getNodes()).map((i=>this.shadowElement.appendChild(i)))}))}}isSynced(){return $0(this.shadowElement,this.element)}sync(){const t=this.createDocumentFragmentForSync();for(;this.element.lastChild;)this.element.removeChild(this.element.lastChild);return this.element.appendChild(t),this.didSync()}didSync(){return this.elementStore.reset(ao(this.element)),vl((()=>this.garbageCollectCachedViews()))}createDocumentFragmentForSync(){const t=document.createDocumentFragment();return Array.from(this.shadowElement.childNodes).forEach((n=>{t.appendChild(n.cloneNode(!0))})),Array.from(ao(t)).forEach((n=>{const r=this.elementStore.remove(n);r&&n.parentNode.replaceChild(r,n)})),t}}const ao=e=>e.querySelectorAll("[data-trix-store-key]"),$0=(e,t)=>lo(e.innerHTML)===lo(t.innerHTML),lo=e=>e.replace(/&nbsp;/g," ");function ht(e,t,n){return(t=F0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F0(e){var t=(function(n,r){if(typeof n!="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var l=i.call(n,r);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)})(e,"string");return typeof t=="symbol"?t:String(t)}function Ne(e,t){return z0(e,xd(e,t,"get"))}function wl(e,t,n){return P0(e,xd(e,t,"set"),n),n}function xd(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function z0(e,t){return t.get?t.get.call(e):t.value}function P0(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function xr(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function Sd(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function dr(e,t,n){Sd(e,t),t.set(e,n)}class Dn extends Bn{static registerType(t,n){n.type=t,this.types[t]=n}static fromJSON(t){const n=this.types[t.type];if(n)return n.fromJSON(t)}constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.attributes=It.box(n)}copyWithAttributes(t){return new this.constructor(this.getValue(),t)}copyWithAdditionalAttributes(t){return this.copyWithAttributes(this.attributes.merge(t))}copyWithoutAttribute(t){return this.copyWithAttributes(this.attributes.remove(t))}copy(){return this.copyWithAttributes(this.attributes)}getAttribute(t){return this.attributes.get(t)}getAttributesHash(){return this.attributes}getAttributes(){return this.attributes.toObject()}hasAttribute(t){return this.attributes.has(t)}hasSameStringValueAsPiece(t){return t&&this.toString()===t.toString()}hasSameAttributesAsPiece(t){return t&&(this.attributes===t.attributes||this.attributes.isEqualTo(t.attributes))}isBlockBreak(){return!1}isEqualTo(t){return super.isEqualTo(...arguments)||this.hasSameConstructorAs(t)&&this.hasSameStringValueAsPiece(t)&&this.hasSameAttributesAsPiece(t)}isEmpty(){return this.length===0}isSerializable(){return!0}toJSON(){return{type:this.constructor.type,attributes:this.getAttributes()}}contentsForInspection(){return{type:this.constructor.type,attributes:this.attributes.inspect()}}canBeGrouped(){return this.hasAttribute("href")}canBeGroupedWith(t){return this.getAttribute("href")===t.getAttribute("href")}getLength(){return this.length}canBeConsolidatedWith(t){return!1}}ht(Dn,"types",{});class Td extends Nr{constructor(t){super(...arguments),this.url=t}perform(t){const n=new Image;n.onload=()=>(n.width=this.width=n.naturalWidth,n.height=this.height=n.naturalHeight,t(!0,n)),n.onerror=()=>t(!1),n.src=this.url}}class _n extends Bn{static attachmentForFile(t){const n=new this(this.attributesForFile(t));return n.setFile(t),n}static attributesForFile(t){return new It({filename:t.name,filesize:t.size,contentType:t.type})}static fromJSON(t){return new this(t)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.releaseFile=this.releaseFile.bind(this),this.attributes=It.box(t),this.didChangeAttributes()}getAttribute(t){return this.attributes.get(t)}hasAttribute(t){return this.attributes.has(t)}getAttributes(){return this.attributes.toObject()}setAttributes(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=this.attributes.merge(t);var r,i,l,a;if(!this.attributes.isEqualTo(n))return this.attributes=n,this.didChangeAttributes(),(r=this.previewDelegate)===null||r===void 0||(i=r.attachmentDidChangeAttributes)===null||i===void 0||i.call(r,this),(l=this.delegate)===null||l===void 0||(a=l.attachmentDidChangeAttributes)===null||a===void 0?void 0:a.call(l,this)}didChangeAttributes(){if(this.isPreviewable())return this.preloadURL()}isPending(){return this.file!=null&&!(this.getURL()||this.getHref())}isPreviewable(){return this.attributes.has("previewable")?this.attributes.get("previewable"):_n.previewablePattern.test(this.getContentType())}getType(){return this.hasContent()?"content":this.isPreviewable()?"preview":"file"}getURL(){return this.attributes.get("url")}getHref(){return this.attributes.get("href")}getFilename(){return this.attributes.get("filename")||""}getFilesize(){return this.attributes.get("filesize")}getFormattedFilesize(){const t=this.attributes.get("filesize");return typeof t=="number"?ld.formatter(t):""}getExtension(){var t;return(t=this.getFilename().match(/\.(\w+)$/))===null||t===void 0?void 0:t[1].toLowerCase()}getContentType(){return this.attributes.get("contentType")}hasContent(){return this.attributes.has("content")}getContent(){return this.attributes.get("content")}getWidth(){return this.attributes.get("width")}getHeight(){return this.attributes.get("height")}getFile(){return this.file}setFile(t){if(this.file=t,this.isPreviewable())return this.preloadFile()}releaseFile(){this.releasePreloadedFile(),this.file=null}getUploadProgress(){return this.uploadProgress!=null?this.uploadProgress:0}setUploadProgress(t){var n,r;if(this.uploadProgress!==t)return this.uploadProgress=t,(n=this.uploadProgressDelegate)===null||n===void 0||(r=n.attachmentDidChangeUploadProgress)===null||r===void 0?void 0:r.call(n,this)}toJSON(){return this.getAttributes()}getCacheKey(){return[super.getCacheKey(...arguments),this.attributes.getCacheKey(),this.getPreviewURL()].join("/")}getPreviewURL(){return this.previewURL||this.preloadingURL}setPreviewURL(t){var n,r,i,l;if(t!==this.getPreviewURL())return this.previewURL=t,(n=this.previewDelegate)===null||n===void 0||(r=n.attachmentDidChangeAttributes)===null||r===void 0||r.call(n,this),(i=this.delegate)===null||i===void 0||(l=i.attachmentDidChangePreviewURL)===null||l===void 0?void 0:l.call(i,this)}preloadURL(){return this.preload(this.getURL(),this.releaseFile)}preloadFile(){if(this.file)return this.fileObjectURL=URL.createObjectURL(this.file),this.preload(this.fileObjectURL)}releasePreloadedFile(){this.fileObjectURL&&(URL.revokeObjectURL(this.fileObjectURL),this.fileObjectURL=null)}preload(t,n){if(t&&t!==this.getPreviewURL())return this.preloadingURL=t,new Td(t).then((r=>{let{width:i,height:l}=r;return this.getWidth()&&this.getHeight()||this.setAttributes({width:i,height:l}),this.preloadingURL=null,this.setPreviewURL(t),n?.()})).catch((()=>(this.preloadingURL=null,n?.())))}}ht(_n,"previewablePattern",/^image(\/(gif|png|webp|jpe?g)|$)/);class Wn extends Dn{static fromJSON(t){return new this(_n.fromJSON(t.attachment),t.attributes)}constructor(t){super(...arguments),this.attachment=t,this.length=1,this.ensureAttachmentExclusivelyHasAttribute("href"),this.attachment.hasContent()||this.removeProhibitedAttributes()}ensureAttachmentExclusivelyHasAttribute(t){this.hasAttribute(t)&&(this.attachment.hasAttribute(t)||this.attachment.setAttributes(this.attributes.slice([t])),this.attributes=this.attributes.remove(t))}removeProhibitedAttributes(){const t=this.attributes.slice(Wn.permittedAttributes);t.isEqualTo(this.attributes)||(this.attributes=t)}getValue(){return this.attachment}isSerializable(){return!this.attachment.isPending()}getCaption(){return this.attributes.get("caption")||""}isEqualTo(t){var n;return super.isEqualTo(t)&&this.attachment.id===(t==null||(n=t.attachment)===null||n===void 0?void 0:n.id)}toString(){return"￼"}toJSON(){const t=super.toJSON(...arguments);return t.attachment=this.attachment,t}getCacheKey(){return[super.getCacheKey(...arguments),this.attachment.getCacheKey()].join("/")}toConsole(){return JSON.stringify(this.toString())}}ht(Wn,"permittedAttributes",["caption","presentation"]),Dn.registerType("attachment",Wn);class yl extends Dn{static fromJSON(t){return new this(t.string,t.attributes)}constructor(t){super(...arguments),this.string=(n=>n.replace(/\r\n?/g,`
`))(t),this.length=this.string.length}getValue(){return this.string}toString(){return this.string.toString()}isBlockBreak(){return this.toString()===`
`&&this.getAttribute("blockBreak")===!0}toJSON(){const t=super.toJSON(...arguments);return t.string=this.string,t}canBeConsolidatedWith(t){return t&&this.hasSameConstructorAs(t)&&this.hasSameAttributesAsPiece(t)}consolidateWith(t){return new this.constructor(this.toString()+t.toString(),this.attributes)}splitAtOffset(t){let n,r;return t===0?(n=null,r=this):t===this.length?(n=this,r=null):(n=new this.constructor(this.string.slice(0,t),this.attributes),r=new this.constructor(this.string.slice(t),this.attributes)),[n,r]}toConsole(){let{string:t}=this;return t.length>15&&(t=t.slice(0,14)+"…"),JSON.stringify(t.toString())}}Dn.registerType("string",yl);class Ur extends Bn{static box(t){return t instanceof this?t:new this(t)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),this.objects=t.slice(0),this.length=this.objects.length}indexOf(t){return this.objects.indexOf(t)}splice(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new this.constructor(fl(this.objects,...n))}eachObject(t){return this.objects.map(((n,r)=>t(n,r)))}insertObjectAtIndex(t,n){return this.splice(n,0,t)}insertSplittableListAtIndex(t,n){return this.splice(n,0,...t.objects)}insertSplittableListAtPosition(t,n){const[r,i]=this.splitObjectAtPosition(n);return new this.constructor(r).insertSplittableListAtIndex(t,i)}editObjectAtIndex(t,n){return this.replaceObjectAtIndex(n(this.objects[t]),t)}replaceObjectAtIndex(t,n){return this.splice(n,1,t)}removeObjectAtIndex(t){return this.splice(t,1)}getObjectAtIndex(t){return this.objects[t]}getSplittableListInRange(t){const[n,r,i]=this.splitObjectsAtRange(t);return new this.constructor(n.slice(r,i+1))}selectSplittableList(t){const n=this.objects.filter((r=>t(r)));return new this.constructor(n)}removeObjectsInRange(t){const[n,r,i]=this.splitObjectsAtRange(t);return new this.constructor(n).splice(r,i-r+1)}transformObjectsInRange(t,n){const[r,i,l]=this.splitObjectsAtRange(t),a=r.map(((o,s)=>i<=s&&s<=l?n(o):o));return new this.constructor(a)}splitObjectsAtRange(t){let n,[r,i,l]=this.splitObjectAtPosition(H0(t));return[r,n]=new this.constructor(r).splitObjectAtPosition(U0(t)+l),[r,i,n-1]}getObjectAtPosition(t){const{index:n}=this.findIndexAndOffsetAtPosition(t);return this.objects[n]}splitObjectAtPosition(t){let n,r;const{index:i,offset:l}=this.findIndexAndOffsetAtPosition(t),a=this.objects.slice(0);if(i!=null)if(l===0)n=i,r=0;else{const o=this.getObjectAtIndex(i),[s,u]=o.splitAtOffset(l);a.splice(i,1,s,u),n=i+1,r=s.getLength()-l}else n=a.length,r=0;return[a,n,r]}consolidate(){const t=[];let n=this.objects[0];return this.objects.slice(1).forEach((r=>{var i,l;(i=(l=n).canBeConsolidatedWith)!==null&&i!==void 0&&i.call(l,r)?n=n.consolidateWith(r):(t.push(n),n=r)})),n&&t.push(n),new this.constructor(t)}consolidateFromIndexToIndex(t,n){const r=this.objects.slice(0).slice(t,n+1),i=new this.constructor(r).consolidate().toArray();return this.splice(t,r.length,...i)}findIndexAndOffsetAtPosition(t){let n,r=0;for(n=0;n<this.objects.length;n++){const i=r+this.objects[n].getLength();if(r<=t&&t<i)return{index:n,offset:t-r};r=i}return{index:null,offset:null}}findPositionAtIndexAndOffset(t,n){let r=0;for(let i=0;i<this.objects.length;i++){const l=this.objects[i];if(i<t)r+=l.getLength();else if(i===t){r+=n;break}}return r}getEndPosition(){return this.endPosition==null&&(this.endPosition=0,this.objects.forEach((t=>this.endPosition+=t.getLength()))),this.endPosition}toString(){return this.objects.join("")}toArray(){return this.objects.slice(0)}toJSON(){return this.toArray()}isEqualTo(t){return super.isEqualTo(...arguments)||N0(this.objects,t?.objects)}contentsForInspection(){return{objects:"[".concat(this.objects.map((t=>t.inspect())).join(", "),"]")}}}const N0=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(e.length!==t.length)return!1;let n=!0;for(let r=0;r<e.length;r++){const i=e[r];n&&!i.isEqualTo(t[r])&&(n=!1)}return n},H0=e=>e[0],U0=e=>e[1];class Ut extends Bn{static textForAttachmentWithAttributes(t,n){return new this([new Wn(t,n)])}static textForStringWithAttributes(t,n){return new this([new yl(t,n)])}static fromJSON(t){return new this(Array.from(t).map((n=>Dn.fromJSON(n))))}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments);const n=t.filter((r=>!r.isEmpty()));this.pieceList=new Ur(n)}copy(){return this.copyWithPieceList(this.pieceList)}copyWithPieceList(t){return new this.constructor(t.consolidate().toArray())}copyUsingObjectMap(t){const n=this.getPieces().map((r=>t.find(r)||r));return new this.constructor(n)}appendText(t){return this.insertTextAtPosition(t,this.getLength())}insertTextAtPosition(t,n){return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList,n))}removeTextAtRange(t){return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t))}replaceTextAtRange(t,n){return this.removeTextAtRange(n).insertTextAtPosition(t,n[0])}moveTextFromRangeToPosition(t,n){if(t[0]<=n&&n<=t[1])return;const r=this.getTextAtRange(t),i=r.getLength();return t[0]<n&&(n-=i),this.removeTextAtRange(t).insertTextAtPosition(r,n)}addAttributeAtRange(t,n,r){const i={};return i[t]=n,this.addAttributesAtRange(i,r)}addAttributesAtRange(t,n){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(n,(r=>r.copyWithAdditionalAttributes(t))))}removeAttributeAtRange(t,n){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(n,(r=>r.copyWithoutAttribute(t))))}setAttributesAtRange(t,n){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(n,(r=>r.copyWithAttributes(t))))}getAttributesAtPosition(t){var n;return((n=this.pieceList.getObjectAtPosition(t))===null||n===void 0?void 0:n.getAttributes())||{}}getCommonAttributes(){const t=Array.from(this.pieceList.toArray()).map((n=>n.getAttributes()));return It.fromCommonAttributesOfObjects(t).toObject()}getCommonAttributesAtRange(t){return this.getTextAtRange(t).getCommonAttributes()||{}}getExpandedRangeForAttributeAtOffset(t,n){let r,i=r=n;const l=this.getLength();for(;i>0&&this.getCommonAttributesAtRange([i-1,r])[t];)i--;for(;r<l&&this.getCommonAttributesAtRange([n,r+1])[t];)r++;return[i,r]}getTextAtRange(t){return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t))}getStringAtRange(t){return this.pieceList.getSplittableListInRange(t).toString()}getStringAtPosition(t){return this.getStringAtRange([t,t+1])}startsWithString(t){return this.getStringAtRange([0,t.length])===t}endsWithString(t){const n=this.getLength();return this.getStringAtRange([n-t.length,n])===t}getAttachmentPieces(){return this.pieceList.toArray().filter((t=>!!t.attachment))}getAttachments(){return this.getAttachmentPieces().map((t=>t.attachment))}getAttachmentAndPositionById(t){let n=0;for(const i of this.pieceList.toArray()){var r;if(((r=i.attachment)===null||r===void 0?void 0:r.id)===t)return{attachment:i.attachment,position:n};n+=i.length}return{attachment:null,position:null}}getAttachmentById(t){const{attachment:n}=this.getAttachmentAndPositionById(t);return n}getRangeOfAttachment(t){const n=this.getAttachmentAndPositionById(t.id),r=n.position;if(t=n.attachment)return[r,r+1]}updateAttributesForAttachment(t,n){const r=this.getRangeOfAttachment(n);return r?this.addAttributesAtRange(t,r):this}getLength(){return this.pieceList.getEndPosition()}isEmpty(){return this.getLength()===0}isEqualTo(t){var n;return super.isEqualTo(t)||(t==null||(n=t.pieceList)===null||n===void 0?void 0:n.isEqualTo(this.pieceList))}isBlockBreak(){return this.getLength()===1&&this.pieceList.getObjectAtIndex(0).isBlockBreak()}eachPiece(t){return this.pieceList.eachObject(t)}getPieces(){return this.pieceList.toArray()}getPieceAtPosition(t){return this.pieceList.getObjectAtPosition(t)}contentsForInspection(){return{pieceList:this.pieceList.inspect()}}toSerializableText(){const t=this.pieceList.selectSplittableList((n=>n.isSerializable()));return this.copyWithPieceList(t)}toString(){return this.pieceList.toString()}toJSON(){return this.pieceList.toJSON()}toConsole(){return JSON.stringify(this.pieceList.toArray().map((t=>JSON.parse(t.toConsole()))))}getDirection(){return qh(this.toString())}isRTL(){return this.getDirection()==="rtl"}}class Jt extends Bn{static fromJSON(t){return new this(Ut.fromJSON(t.text),t.attributes,t.htmlAttributes)}constructor(t,n,r){super(...arguments),this.text=j0(t||new Ut),this.attributes=n||[],this.htmlAttributes=r||{}}isEmpty(){return this.text.isBlockBreak()}isEqualTo(t){return!!super.isEqualTo(t)||this.text.isEqualTo(t?.text)&&Rn(this.attributes,t?.attributes)&&Vn(this.htmlAttributes,t?.htmlAttributes)}copyWithText(t){return new Jt(t,this.attributes,this.htmlAttributes)}copyWithoutText(){return this.copyWithText(null)}copyWithAttributes(t){return new Jt(this.text,t,this.htmlAttributes)}copyWithoutAttributes(){return this.copyWithAttributes(null)}copyUsingObjectMap(t){const n=t.find(this.text);return n?this.copyWithText(n):this.copyWithText(this.text.copyUsingObjectMap(t))}addAttribute(t){const n=this.attributes.concat(oo(t));return this.copyWithAttributes(n)}addHTMLAttribute(t,n){const r=Object.assign({},this.htmlAttributes,{[t]:n});return new Jt(this.text,this.attributes,r)}removeAttribute(t){const{listAttribute:n}=Xe(t),r=uo(uo(this.attributes,t),n);return this.copyWithAttributes(r)}removeLastAttribute(){return this.removeAttribute(this.getLastAttribute())}getLastAttribute(){return so(this.attributes)}getAttributes(){return this.attributes.slice(0)}getAttributeLevel(){return this.attributes.length}getAttributeAtLevel(t){return this.attributes[t-1]}hasAttribute(t){return this.attributes.includes(t)}hasAttributes(){return this.getAttributeLevel()>0}getLastNestableAttribute(){return so(this.getNestableAttributes())}getNestableAttributes(){return this.attributes.filter((t=>Xe(t).nestable))}getNestingLevel(){return this.getNestableAttributes().length}decreaseNestingLevel(){const t=this.getLastNestableAttribute();return t?this.removeAttribute(t):this}increaseNestingLevel(){const t=this.getLastNestableAttribute();if(t){const n=this.attributes.lastIndexOf(t),r=fl(this.attributes,n+1,0,...oo(t));return this.copyWithAttributes(r)}return this}getListItemAttributes(){return this.attributes.filter((t=>Xe(t).listAttribute))}isListItem(){var t;return(t=Xe(this.getLastAttribute()))===null||t===void 0?void 0:t.listAttribute}isTerminalBlock(){var t;return(t=Xe(this.getLastAttribute()))===null||t===void 0?void 0:t.terminal}breaksOnReturn(){var t;return(t=Xe(this.getLastAttribute()))===null||t===void 0?void 0:t.breakOnReturn}findLineBreakInDirectionFromPosition(t,n){const r=this.toString();let i;switch(t){case"forward":i=r.indexOf(`
`,n);break;case"backward":i=r.slice(0,n).lastIndexOf(`
`)}if(i!==-1)return i}contentsForInspection(){return{text:this.text.inspect(),attributes:this.attributes}}toString(){return this.text.toString()}toJSON(){return{text:this.text,attributes:this.attributes,htmlAttributes:this.htmlAttributes}}getDirection(){return this.text.getDirection()}isRTL(){return this.text.isRTL()}getLength(){return this.text.getLength()}canBeConsolidatedWith(t){return!this.hasAttributes()&&!t.hasAttributes()&&this.getDirection()===t.getDirection()}consolidateWith(t){const n=Ut.textForStringWithAttributes(`
`),r=this.getTextWithoutBlockBreak().appendText(n);return this.copyWithText(r.appendText(t.text))}splitAtOffset(t){let n,r;return t===0?(n=null,r=this):t===this.getLength()?(n=this,r=null):(n=this.copyWithText(this.text.getTextAtRange([0,t])),r=this.copyWithText(this.text.getTextAtRange([t,this.getLength()]))),[n,r]}getBlockBreakPosition(){return this.text.getLength()-1}getTextWithoutBlockBreak(){return Rd(this.text)?this.text.getTextAtRange([0,this.getBlockBreakPosition()]):this.text.copy()}canBeGrouped(t){return this.attributes[t]}canBeGroupedWith(t,n){const r=t.getAttributes(),i=r[n],l=this.attributes[n];return l===i&&!(Xe(l).group===!1&&!(()=>{if(!Ar){Ar=[];for(const a in mt){const{listAttribute:o}=mt[a];o!=null&&Ar.push(o)}}return Ar})().includes(r[n+1]))&&(this.getDirection()===t.getDirection()||t.isEmpty())}}const j0=function(e){return e=W0(e),e=_0(e)},W0=function(e){let t=!1;const n=e.getPieces();let r=n.slice(0,n.length-1);const i=n[n.length-1];return i?(r=r.map((l=>l.isBlockBreak()?(t=!0,Q0(l)):l)),t?new Ut([...r,i]):e):e},V0=Ut.textForStringWithAttributes(`
`,{blockBreak:!0}),_0=function(e){return Rd(e)?e:e.appendText(V0)},Rd=function(e){const t=e.getLength();return t===0?!1:e.getTextAtRange([t-1,t]).isBlockBreak()},Q0=e=>e.copyWithoutAttribute("blockBreak"),oo=function(e){const{listAttribute:t}=Xe(e);return t?[t,e]:[e]},so=e=>e.slice(-1)[0],uo=function(e,t){const n=e.lastIndexOf(t);return n===-1?e:fl(e,n,1)};class $t extends Bn{static fromJSON(t){return new this(Array.from(t).map((n=>Jt.fromJSON(n))))}static fromString(t,n){const r=Ut.textForStringWithAttributes(t,n);return new this([new Jt(r)])}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),t.length===0&&(t=[new Jt]),this.blockList=Ur.box(t)}isEmpty(){const t=this.getBlockAtIndex(0);return this.blockList.length===1&&t.isEmpty()&&!t.hasAttributes()}copy(){const t=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).consolidateBlocks?this.blockList.consolidate().toArray():this.blockList.toArray();return new this.constructor(t)}copyUsingObjectsFromDocument(t){const n=new n0(t.getObjects());return this.copyUsingObjectMap(n)}copyUsingObjectMap(t){const n=this.getBlocks().map((r=>t.find(r)||r.copyUsingObjectMap(t)));return new this.constructor(n)}copyWithBaseBlockAttributes(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const n=this.getBlocks().map((r=>{const i=t.concat(r.getAttributes());return r.copyWithAttributes(i)}));return new this.constructor(n)}replaceBlock(t,n){const r=this.blockList.indexOf(t);return r===-1?this:new this.constructor(this.blockList.replaceObjectAtIndex(n,r))}insertDocumentAtRange(t,n){const{blockList:r}=t;n=De(n);let[i]=n;const{index:l,offset:a}=this.locationFromPosition(i);let o=this;const s=this.getBlockAtPosition(i);return nn(n)&&s.isEmpty()&&!s.hasAttributes()?o=new this.constructor(o.blockList.removeObjectAtIndex(l)):s.getBlockBreakPosition()===a&&i++,o=o.removeTextAtRange(n),new this.constructor(o.blockList.insertSplittableListAtPosition(r,i))}mergeDocumentAtRange(t,n){let r,i;n=De(n);const[l]=n,a=this.locationFromPosition(l),o=this.getBlockAtIndex(a.index).getAttributes(),s=t.getBaseBlockAttributes(),u=o.slice(-s.length);if(Rn(s,u)){const M=o.slice(0,-s.length);r=t.copyWithBaseBlockAttributes(M)}else r=t.copy({consolidateBlocks:!0}).copyWithBaseBlockAttributes(o);const f=r.getBlockCount(),S=r.getBlockAtIndex(0);if(Rn(o,S.getAttributes())){const M=S.getTextWithoutBlockBreak();if(i=this.insertTextAtRange(M,n),f>1){r=new this.constructor(r.getBlocks().slice(1));const C=l+M.getLength();i=i.insertDocumentAtRange(r,C)}}else i=this.insertDocumentAtRange(r,n);return i}insertTextAtRange(t,n){n=De(n);const[r]=n,{index:i,offset:l}=this.locationFromPosition(r),a=this.removeTextAtRange(n);return new this.constructor(a.blockList.editObjectAtIndex(i,(o=>o.copyWithText(o.text.insertTextAtPosition(t,l)))))}removeTextAtRange(t){let n;t=De(t);const[r,i]=t;if(nn(t))return this;const[l,a]=Array.from(this.locationRangeFromRange(t)),o=l.index,s=l.offset,u=this.getBlockAtIndex(o),f=a.index,S=a.offset,M=this.getBlockAtIndex(f);if(i-r==1&&u.getBlockBreakPosition()===s&&M.getBlockBreakPosition()!==S&&M.text.getStringAtPosition(S)===`
`)n=this.blockList.editObjectAtIndex(f,(C=>C.copyWithText(C.text.removeTextAtRange([S,S+1]))));else{let C;const E=u.text.getTextAtRange([0,s]),k=M.text.getTextAtRange([S,M.getLength()]),x=E.appendText(k);C=o!==f&&s===0&&u.getAttributeLevel()>=M.getAttributeLevel()?M.copyWithText(x):u.copyWithText(x);const O=f+1-o;n=this.blockList.splice(o,O,C)}return new this.constructor(n)}moveTextFromRangeToPosition(t,n){let r;t=De(t);const[i,l]=t;if(i<=n&&n<=l)return this;let a=this.getDocumentAtRange(t),o=this.removeTextAtRange(t);const s=i<n;s&&(n-=a.getLength());const[u,...f]=a.getBlocks();return f.length===0?(r=u.getTextWithoutBlockBreak(),s&&(n+=1)):r=u.text,o=o.insertTextAtRange(r,n),f.length===0?o:(a=new this.constructor(f),n+=r.getLength(),o.insertDocumentAtRange(a,n))}addAttributeAtRange(t,n,r){let{blockList:i}=this;return this.eachBlockAtRange(r,((l,a,o)=>i=i.editObjectAtIndex(o,(function(){return Xe(t)?l.addAttribute(t,n):a[0]===a[1]?l:l.copyWithText(l.text.addAttributeAtRange(t,n,a))})))),new this.constructor(i)}addAttribute(t,n){let{blockList:r}=this;return this.eachBlock(((i,l)=>r=r.editObjectAtIndex(l,(()=>i.addAttribute(t,n))))),new this.constructor(r)}removeAttributeAtRange(t,n){let{blockList:r}=this;return this.eachBlockAtRange(n,(function(i,l,a){Xe(t)?r=r.editObjectAtIndex(a,(()=>i.removeAttribute(t))):l[0]!==l[1]&&(r=r.editObjectAtIndex(a,(()=>i.copyWithText(i.text.removeAttributeAtRange(t,l)))))})),new this.constructor(r)}updateAttributesForAttachment(t,n){const r=this.getRangeOfAttachment(n),[i]=Array.from(r),{index:l}=this.locationFromPosition(i),a=this.getTextAtIndex(l);return new this.constructor(this.blockList.editObjectAtIndex(l,(o=>o.copyWithText(a.updateAttributesForAttachment(t,n)))))}removeAttributeForAttachment(t,n){const r=this.getRangeOfAttachment(n);return this.removeAttributeAtRange(t,r)}setHTMLAttributeAtPosition(t,n,r){const i=this.getBlockAtPosition(t),l=i.addHTMLAttribute(n,r);return this.replaceBlock(i,l)}insertBlockBreakAtRange(t){let n;t=De(t);const[r]=t,{offset:i}=this.locationFromPosition(r),l=this.removeTextAtRange(t);return i===0&&(n=[new Jt]),new this.constructor(l.blockList.insertSplittableListAtPosition(new Ur(n),r))}applyBlockAttributeAtRange(t,n,r){const i=this.expandRangeToLineBreaksAndSplitBlocks(r);let l=i.document;r=i.range;const a=Xe(t);if(a.listAttribute){l=l.removeLastListAttributeAtRange(r,{exceptAttributeName:t});const o=l.convertLineBreaksToBlockBreaksInRange(r);l=o.document,r=o.range}else l=a.exclusive?l.removeBlockAttributesAtRange(r):a.terminal?l.removeLastTerminalAttributeAtRange(r):l.consolidateBlocksAtRange(r);return l.addAttributeAtRange(t,n,r)}removeLastListAttributeAtRange(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{blockList:r}=this;return this.eachBlockAtRange(t,(function(i,l,a){const o=i.getLastAttribute();o&&Xe(o).listAttribute&&o!==n.exceptAttributeName&&(r=r.editObjectAtIndex(a,(()=>i.removeAttribute(o))))})),new this.constructor(r)}removeLastTerminalAttributeAtRange(t){let{blockList:n}=this;return this.eachBlockAtRange(t,(function(r,i,l){const a=r.getLastAttribute();a&&Xe(a).terminal&&(n=n.editObjectAtIndex(l,(()=>r.removeAttribute(a))))})),new this.constructor(n)}removeBlockAttributesAtRange(t){let{blockList:n}=this;return this.eachBlockAtRange(t,(function(r,i,l){r.hasAttributes()&&(n=n.editObjectAtIndex(l,(()=>r.copyWithoutAttributes())))})),new this.constructor(n)}expandRangeToLineBreaksAndSplitBlocks(t){let n;t=De(t);let[r,i]=t;const l=this.locationFromPosition(r),a=this.locationFromPosition(i);let o=this;const s=o.getBlockAtIndex(l.index);if(l.offset=s.findLineBreakInDirectionFromPosition("backward",l.offset),l.offset!=null&&(n=o.positionFromLocation(l),o=o.insertBlockBreakAtRange([n,n+1]),a.index+=1,a.offset-=o.getBlockAtIndex(l.index).getLength(),l.index+=1),l.offset=0,a.offset===0&&a.index>l.index)a.index-=1,a.offset=o.getBlockAtIndex(a.index).getBlockBreakPosition();else{const u=o.getBlockAtIndex(a.index);u.text.getStringAtRange([a.offset-1,a.offset])===`
`?a.offset-=1:a.offset=u.findLineBreakInDirectionFromPosition("forward",a.offset),a.offset!==u.getBlockBreakPosition()&&(n=o.positionFromLocation(a),o=o.insertBlockBreakAtRange([n,n+1]))}return r=o.positionFromLocation(l),i=o.positionFromLocation(a),{document:o,range:t=De([r,i])}}convertLineBreaksToBlockBreaksInRange(t){t=De(t);let[n]=t;const r=this.getStringAtRange(t).slice(0,-1);let i=this;return r.replace(/.*?\n/g,(function(l){n+=l.length,i=i.insertBlockBreakAtRange([n-1,n])})),{document:i,range:t}}consolidateBlocksAtRange(t){t=De(t);const[n,r]=t,i=this.locationFromPosition(n).index,l=this.locationFromPosition(r).index;return new this.constructor(this.blockList.consolidateFromIndexToIndex(i,l))}getDocumentAtRange(t){t=De(t);const n=this.blockList.getSplittableListInRange(t).toArray();return new this.constructor(n)}getStringAtRange(t){let n;const r=t=De(t);return r[r.length-1]!==this.getLength()&&(n=-1),this.getDocumentAtRange(t).toString().slice(0,n)}getBlockAtIndex(t){return this.blockList.getObjectAtIndex(t)}getBlockAtPosition(t){const{index:n}=this.locationFromPosition(t);return this.getBlockAtIndex(n)}getTextAtIndex(t){var n;return(n=this.getBlockAtIndex(t))===null||n===void 0?void 0:n.text}getTextAtPosition(t){const{index:n}=this.locationFromPosition(t);return this.getTextAtIndex(n)}getPieceAtPosition(t){const{index:n,offset:r}=this.locationFromPosition(t);return this.getTextAtIndex(n).getPieceAtPosition(r)}getCharacterAtPosition(t){const{index:n,offset:r}=this.locationFromPosition(t);return this.getTextAtIndex(n).getStringAtRange([r,r+1])}getLength(){return this.blockList.getEndPosition()}getBlocks(){return this.blockList.toArray()}getBlockCount(){return this.blockList.length}getEditCount(){return this.editCount}eachBlock(t){return this.blockList.eachObject(t)}eachBlockAtRange(t,n){let r,i;t=De(t);const[l,a]=t,o=this.locationFromPosition(l),s=this.locationFromPosition(a);if(o.index===s.index)return r=this.getBlockAtIndex(o.index),i=[o.offset,s.offset],n(r,i,o.index);for(let u=o.index;u<=s.index;u++)if(r=this.getBlockAtIndex(u),r){switch(u){case o.index:i=[o.offset,r.text.getLength()];break;case s.index:i=[0,s.offset];break;default:i=[0,r.text.getLength()]}n(r,i,u)}}getCommonAttributesAtRange(t){t=De(t);const[n]=t;if(nn(t))return this.getCommonAttributesAtPosition(n);{const r=[],i=[];return this.eachBlockAtRange(t,(function(l,a){if(a[0]!==a[1])return r.push(l.text.getCommonAttributesAtRange(a)),i.push(co(l))})),It.fromCommonAttributesOfObjects(r).merge(It.fromCommonAttributesOfObjects(i)).toObject()}}getCommonAttributesAtPosition(t){let n,r;const{index:i,offset:l}=this.locationFromPosition(t),a=this.getBlockAtIndex(i);if(!a)return{};const o=co(a),s=a.text.getAttributesAtPosition(l),u=a.text.getAttributesAtPosition(l-1),f=Object.keys(Tn).filter((S=>Tn[S].inheritable));for(n in u)r=u[n],(r===s[n]||f.includes(n))&&(o[n]=r);return o}getRangeOfCommonAttributeAtPosition(t,n){const{index:r,offset:i}=this.locationFromPosition(n),l=this.getTextAtIndex(r),[a,o]=Array.from(l.getExpandedRangeForAttributeAtOffset(t,i)),s=this.positionFromLocation({index:r,offset:a}),u=this.positionFromLocation({index:r,offset:o});return De([s,u])}getBaseBlockAttributes(){let t=this.getBlockAtIndex(0).getAttributes();for(let n=1;n<this.getBlockCount();n++){const r=this.getBlockAtIndex(n).getAttributes(),i=Math.min(t.length,r.length);t=(()=>{const l=[];for(let a=0;a<i&&r[a]===t[a];a++)l.push(r[a]);return l})()}return t}getAttachmentById(t){for(const n of this.getAttachments())if(n.id===t)return n}getAttachmentPieces(){let t=[];return this.blockList.eachObject((n=>{let{text:r}=n;return t=t.concat(r.getAttachmentPieces())})),t}getAttachments(){return this.getAttachmentPieces().map((t=>t.attachment))}getRangeOfAttachment(t){let n=0;const r=this.blockList.toArray();for(let i=0;i<r.length;i++){const{text:l}=r[i],a=l.getRangeOfAttachment(t);if(a)return De([n+a[0],n+a[1]]);n+=l.getLength()}}getLocationRangeOfAttachment(t){const n=this.getRangeOfAttachment(t);return this.locationRangeFromRange(n)}getAttachmentPieceForAttachment(t){for(const n of this.getAttachmentPieces())if(n.attachment===t)return n}findRangesForBlockAttribute(t){let n=0;const r=[];return this.getBlocks().forEach((i=>{const l=i.getLength();i.hasAttribute(t)&&r.push([n,n+l]),n+=l})),r}findRangesForTextAttribute(t){let{withValue:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=0,i=[];const l=[];return this.getPieces().forEach((a=>{const o=a.getLength();(function(s){return n?s.getAttribute(t)===n:s.hasAttribute(t)})(a)&&(i[1]===r?i[1]=r+o:l.push(i=[r,r+o])),r+=o})),l}locationFromPosition(t){const n=this.blockList.findIndexAndOffsetAtPosition(Math.max(0,t));if(n.index!=null)return n;{const r=this.getBlocks();return{index:r.length-1,offset:r[r.length-1].getLength()}}}positionFromLocation(t){return this.blockList.findPositionAtIndexAndOffset(t.index,t.offset)}locationRangeFromPosition(t){return De(this.locationFromPosition(t))}locationRangeFromRange(t){if(!(t=De(t)))return;const[n,r]=Array.from(t),i=this.locationFromPosition(n),l=this.locationFromPosition(r);return De([i,l])}rangeFromLocationRange(t){let n;t=De(t);const r=this.positionFromLocation(t[0]);return nn(t)||(n=this.positionFromLocation(t[1])),De([r,n])}isEqualTo(t){return this.blockList.isEqualTo(t?.blockList)}getTexts(){return this.getBlocks().map((t=>t.text))}getPieces(){const t=[];return Array.from(this.getTexts()).forEach((n=>{t.push(...Array.from(n.getPieces()||[]))})),t}getObjects(){return this.getBlocks().concat(this.getTexts()).concat(this.getPieces())}toSerializableDocument(){const t=[];return this.blockList.eachObject((n=>t.push(n.copyWithText(n.text.toSerializableText())))),new this.constructor(t)}toString(){return this.blockList.toString()}toJSON(){return this.blockList.toJSON()}toConsole(){return JSON.stringify(this.blockList.toArray().map((t=>JSON.parse(t.text.toConsole()))))}}const co=function(e){const t={},n=e.getLastAttribute();return n&&(t[n]=!0),t},Ai=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{string:e=nr(e),attributes:t,type:"string"}},po=(e,t)=>{try{return JSON.parse(e.getAttribute("data-trix-".concat(t)))}catch{return{}}};class gr extends it{static parse(t,n){const r=new this(t,n);return r.parse(),r}constructor(t){let{referenceElement:n,purifyOptions:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.html=t,this.referenceElement=n,this.purifyOptions=r,this.blocks=[],this.blockElements=[],this.processedElements=[]}getDocument(){return $t.fromJSON(this.blocks)}parse(){try{this.createHiddenContainer(),ni.setHTML(this.containerElement,this.html,{purifyOptions:this.purifyOptions});const t=zr(this.containerElement,{usingFilter:K0});for(;t.nextNode();)this.processNode(t.currentNode);return this.translateBlockElementMarginsToNewlines()}finally{this.removeHiddenContainer()}}createHiddenContainer(){return this.referenceElement?(this.containerElement=this.referenceElement.cloneNode(!1),this.containerElement.removeAttribute("id"),this.containerElement.setAttribute("data-trix-internal",""),this.containerElement.style.display="none",this.referenceElement.parentNode.insertBefore(this.containerElement,this.referenceElement.nextSibling)):(this.containerElement=ke({tagName:"div",style:{display:"none"}}),document.body.appendChild(this.containerElement))}removeHiddenContainer(){return mn(this.containerElement)}processNode(t){switch(t.nodeType){case Node.TEXT_NODE:if(!this.isInsignificantTextNode(t))return this.appendBlockForTextNode(t),this.processTextNode(t);break;case Node.ELEMENT_NODE:return this.appendBlockForElement(t),this.processElement(t)}}appendBlockForTextNode(t){const n=t.parentNode;if(n===this.currentBlockElement&&this.isBlockElement(t.previousSibling))return this.appendStringWithAttributes(`
`);if(n===this.containerElement||this.isBlockElement(n)){var r;const i=this.getBlockAttributes(n),l=this.getBlockHTMLAttributes(n);Rn(i,(r=this.currentBlock)===null||r===void 0?void 0:r.attributes)||(this.currentBlock=this.appendBlockForAttributesWithElement(i,n,l),this.currentBlockElement=n)}}appendBlockForElement(t){const n=this.isBlockElement(t),r=An(this.currentBlockElement,t);if(n&&!this.isBlockElement(t.firstChild)){if(!this.isInsignificantTextNode(t.firstChild)||!this.isBlockElement(t.firstElementChild)){const i=this.getBlockAttributes(t),l=this.getBlockHTMLAttributes(t);if(t.firstChild){if(r&&Rn(i,this.currentBlock.attributes))return this.appendStringWithAttributes(`
`);this.currentBlock=this.appendBlockForAttributesWithElement(i,t,l),this.currentBlockElement=t}}}else if(this.currentBlockElement&&!r&&!n){const i=this.findParentBlockElement(t);if(i)return this.appendBlockForElement(i);this.currentBlock=this.appendEmptyBlock(),this.currentBlockElement=null}}findParentBlockElement(t){let{parentElement:n}=t;for(;n&&n!==this.containerElement;){if(this.isBlockElement(n)&&this.blockElements.includes(n))return n;n=n.parentElement}return null}processTextNode(t){let n=t.data;var r;return fo(t.parentNode)||(n=ml(n),Id((r=t.previousSibling)===null||r===void 0?void 0:r.textContent)&&(n=G0(n))),this.appendStringWithAttributes(n,this.getTextAttributes(t.parentNode))}processElement(t){let n;if(xn(t)){if(n=po(t,"attachment"),Object.keys(n).length){const r=this.getTextAttributes(t);this.appendAttachmentWithAttributes(n,r),t.innerHTML=""}return this.processedElements.push(t)}switch(gt(t)){case"br":return this.isExtraBR(t)||this.isBlockElement(t.nextSibling)||this.appendStringWithAttributes(`
`,this.getTextAttributes(t)),this.processedElements.push(t);case"img":n={url:t.getAttribute("src"),contentType:"image"};const r=(i=>{const l=i.getAttribute("width"),a=i.getAttribute("height"),o={};return l&&(o.width=parseInt(l,10)),a&&(o.height=parseInt(a,10)),o})(t);for(const i in r){const l=r[i];n[i]=l}return this.appendAttachmentWithAttributes(n,this.getTextAttributes(t)),this.processedElements.push(t);case"tr":if(this.needsTableSeparator(t))return this.appendStringWithAttributes(Mr.tableRowSeparator);break;case"td":if(this.needsTableSeparator(t))return this.appendStringWithAttributes(Mr.tableCellSeparator)}}appendBlockForAttributesWithElement(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.blockElements.push(n);const i=(function(){return{text:[],attributes:arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},htmlAttributes:arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}}})(t,r);return this.blocks.push(i),i}appendEmptyBlock(){return this.appendBlockForAttributesWithElement([],null)}appendStringWithAttributes(t,n){return this.appendPiece(Ai(t,n))}appendAttachmentWithAttributes(t,n){return this.appendPiece((function(r){return{attachment:r,attributes:arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},type:"attachment"}})(t,n))}appendPiece(t){return this.blocks.length===0&&this.appendEmptyBlock(),this.blocks[this.blocks.length-1].text.push(t)}appendStringToTextAtIndex(t,n){const{text:r}=this.blocks[n],i=r[r.length-1];if(i?.type!=="string")return r.push(Ai(t));i.string+=t}prependStringToTextAtIndex(t,n){const{text:r}=this.blocks[n],i=r[0];if(i?.type!=="string")return r.unshift(Ai(t));i.string=t+i.string}getTextAttributes(t){let n;const r={};for(const i in Tn){const l=Tn[i];if(l.tagName&&gn(t,{matchingSelector:l.tagName,untilNode:this.containerElement}))r[i]=!0;else if(l.parser){if(n=l.parser(t),n){let a=!1;for(const o of this.findBlockElementAncestors(t))if(l.parser(o)===n){a=!0;break}a||(r[i]=n)}}else l.styleProperty&&(n=t.style[l.styleProperty],n&&(r[i]=n))}if(xn(t)){const i=po(t,"attributes");for(const l in i)n=i[l],r[l]=n}return r}getBlockAttributes(t){const n=[];for(;t&&t!==this.containerElement;){for(const i in mt){const l=mt[i];var r;l.parse!==!1&&gt(t)===l.tagName&&((r=l.test)!==null&&r!==void 0&&r.call(l,t)||!l.test)&&(n.push(i),l.listAttribute&&n.push(l.listAttribute))}t=t.parentNode}return n.reverse()}getBlockHTMLAttributes(t){const n={},r=Object.values(mt).find((i=>i.tagName===gt(t)));return(r?.htmlAttributes||[]).forEach((i=>{t.hasAttribute(i)&&(n[i]=t.getAttribute(i))})),n}findBlockElementAncestors(t){const n=[];for(;t&&t!==this.containerElement;){const r=gt(t);lr().includes(r)&&n.push(t),t=t.parentNode}return n}isBlockElement(t){if(t?.nodeType===Node.ELEMENT_NODE&&!xn(t)&&!gn(t,{matchingSelector:"td",untilNode:this.containerElement}))return lr().includes(gt(t))||window.getComputedStyle(t).display==="block"}isInsignificantTextNode(t){if(t?.nodeType!==Node.TEXT_NODE||!J0(t.data))return;const{parentNode:n,previousSibling:r,nextSibling:i}=t;return q0(n.previousSibling)&&!this.isBlockElement(n.previousSibling)||fo(n)?void 0:!r||this.isBlockElement(r)||!i||this.isBlockElement(i)}isExtraBR(t){return gt(t)==="br"&&this.isBlockElement(t.parentNode)&&t.parentNode.lastChild===t}needsTableSeparator(t){if(Mr.removeBlankTableCells){var n;const r=(n=t.previousSibling)===null||n===void 0?void 0:n.textContent;return r&&/\S/.test(r)}return t.previousSibling}translateBlockElementMarginsToNewlines(){const t=this.getMarginOfDefaultBlockElement();for(let n=0;n<this.blocks.length;n++){const r=this.getMarginOfBlockElementAtIndex(n);r&&(r.top>2*t.top&&this.prependStringToTextAtIndex(`
`,n),r.bottom>2*t.bottom&&this.appendStringToTextAtIndex(`
`,n))}}getMarginOfBlockElementAtIndex(t){const n=this.blockElements[t];if(n&&n.textContent&&!lr().includes(gt(n))&&!this.processedElements.includes(n))return vo(n)}getMarginOfDefaultBlockElement(){const t=ke(mt.default.tagName);return this.containerElement.appendChild(t),vo(t)}}const fo=function(e){const{whiteSpace:t}=window.getComputedStyle(e);return["pre","pre-wrap","pre-line"].includes(t)},q0=e=>e&&!Id(e.textContent),vo=function(e){const t=window.getComputedStyle(e);if(t.display==="block")return{top:parseInt(t.marginTop),bottom:parseInt(t.marginBottom)}},K0=function(e){return gt(e)==="style"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},G0=e=>e.replace(new RegExp("^".concat(gl.source,"+")),""),J0=e=>new RegExp("^".concat(gl.source,"*$")).test(e),Id=e=>/\s$/.test(e),Y0=["contenteditable","data-trix-id","data-trix-store-key","data-trix-mutable","data-trix-placeholder","tabindex"],Qi="data-trix-serialized-attributes",X0="[".concat(Qi,"]"),Z0=new RegExp("<!--block-->","g"),e1={"application/json":function(e){let t;if(e instanceof $t)t=e;else{if(!(e instanceof HTMLElement))throw new Error("unserializable object");t=gr.parse(e.innerHTML).getDocument()}return t.toSerializableDocument().toJSONString()},"text/html":function(e){let t;if(e instanceof $t)t=ri.render(e);else{if(!(e instanceof HTMLElement))throw new Error("unserializable object");t=e.cloneNode(!0)}return Array.from(t.querySelectorAll("[data-trix-serialize=false]")).forEach((n=>{mn(n)})),Y0.forEach((n=>{Array.from(t.querySelectorAll("[".concat(n,"]"))).forEach((r=>{r.removeAttribute(n)}))})),Array.from(t.querySelectorAll(X0)).forEach((n=>{try{const r=JSON.parse(n.getAttribute(Qi));n.removeAttribute(Qi);for(const i in r){const l=r[i];n.setAttribute(i,l)}}catch{}})),t.innerHTML.replace(Z0,"")}};var t1=Object.freeze({__proto__:null});class Ye extends it{constructor(t,n){super(...arguments),this.attachmentManager=t,this.attachment=n,this.id=this.attachment.id,this.file=this.attachment.file}remove(){return this.attachmentManager.requestRemovalOfAttachment(this.attachment)}}Ye.proxyMethod("attachment.getAttribute"),Ye.proxyMethod("attachment.hasAttribute"),Ye.proxyMethod("attachment.setAttribute"),Ye.proxyMethod("attachment.getAttributes"),Ye.proxyMethod("attachment.setAttributes"),Ye.proxyMethod("attachment.isPending"),Ye.proxyMethod("attachment.isPreviewable"),Ye.proxyMethod("attachment.getURL"),Ye.proxyMethod("attachment.getHref"),Ye.proxyMethod("attachment.getFilename"),Ye.proxyMethod("attachment.getFilesize"),Ye.proxyMethod("attachment.getFormattedFilesize"),Ye.proxyMethod("attachment.getExtension"),Ye.proxyMethod("attachment.getContentType"),Ye.proxyMethod("attachment.getFile"),Ye.proxyMethod("attachment.setFile"),Ye.proxyMethod("attachment.releaseFile"),Ye.proxyMethod("attachment.getUploadProgress"),Ye.proxyMethod("attachment.setUploadProgress");class Bd extends it{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),this.managedAttachments={},Array.from(t).forEach((n=>{this.manageAttachment(n)}))}getAttachments(){const t=[];for(const n in this.managedAttachments){const r=this.managedAttachments[n];t.push(r)}return t}manageAttachment(t){return this.managedAttachments[t.id]||(this.managedAttachments[t.id]=new Ye(this,t)),this.managedAttachments[t.id]}attachmentIsManaged(t){return t.id in this.managedAttachments}requestRemovalOfAttachment(t){var n,r;if(this.attachmentIsManaged(t))return(n=this.delegate)===null||n===void 0||(r=n.attachmentManagerDidRequestRemovalOfAttachment)===null||r===void 0?void 0:r.call(n,t)}unmanageAttachment(t){const n=this.managedAttachments[t.id];return delete this.managedAttachments[t.id],n}}class Md{constructor(t){this.composition=t,this.document=this.composition.document;const n=this.composition.getSelectedRange();this.startPosition=n[0],this.endPosition=n[1],this.startLocation=this.document.locationFromPosition(this.startPosition),this.endLocation=this.document.locationFromPosition(this.endPosition),this.block=this.document.getBlockAtIndex(this.endLocation.index),this.breaksOnReturn=this.block.breaksOnReturn(),this.previousCharacter=this.block.text.getStringAtPosition(this.endLocation.offset-1),this.nextCharacter=this.block.text.getStringAtPosition(this.endLocation.offset)}shouldInsertBlockBreak(){return this.block.hasAttributes()&&this.block.isListItem()&&!this.block.isEmpty()?this.startLocation.offset!==0:this.breaksOnReturn&&this.nextCharacter!==`
`}shouldBreakFormattedBlock(){return this.block.hasAttributes()&&!this.block.isListItem()&&(this.breaksOnReturn&&this.nextCharacter===`
`||this.previousCharacter===`
`)}shouldDecreaseListLevel(){return this.block.hasAttributes()&&this.block.isListItem()&&this.block.isEmpty()}shouldPrependListItem(){return this.block.isListItem()&&this.startLocation.offset===0&&!this.block.isEmpty()}shouldRemoveLastBlockAttribute(){return this.block.hasAttributes()&&!this.block.isListItem()&&this.block.isEmpty()}}class cn extends it{constructor(){super(...arguments),this.document=new $t,this.attachments=[],this.currentAttributes={},this.revision=0}setDocument(t){var n,r;if(!t.isEqualTo(this.document))return this.document=t,this.refreshAttachments(),this.revision++,(n=this.delegate)===null||n===void 0||(r=n.compositionDidChangeDocument)===null||r===void 0?void 0:r.call(n,t)}getSnapshot(){return{document:this.document,selectedRange:this.getSelectedRange()}}loadSnapshot(t){var n,r,i,l;let{document:a,selectedRange:o}=t;return(n=this.delegate)===null||n===void 0||(r=n.compositionWillLoadSnapshot)===null||r===void 0||r.call(n),this.setDocument(a??new $t),this.setSelection(o??[0,0]),(i=this.delegate)===null||i===void 0||(l=i.compositionDidLoadSnapshot)===null||l===void 0?void 0:l.call(i)}insertText(t){let{updatePosition:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{updatePosition:!0};const r=this.getSelectedRange();this.setDocument(this.document.insertTextAtRange(t,r));const i=r[0],l=i+t.getLength();return n&&this.setSelection(l),this.notifyDelegateOfInsertionAtRange([i,l])}insertBlock(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Jt;const n=new $t([t]);return this.insertDocument(n)}insertDocument(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new $t;const n=this.getSelectedRange();this.setDocument(this.document.insertDocumentAtRange(t,n));const r=n[0],i=r+t.getLength();return this.setSelection(i),this.notifyDelegateOfInsertionAtRange([r,i])}insertString(t,n){const r=this.getCurrentTextAttributes(),i=Ut.textForStringWithAttributes(t,r);return this.insertText(i,n)}insertBlockBreak(){const t=this.getSelectedRange();this.setDocument(this.document.insertBlockBreakAtRange(t));const n=t[0],r=n+1;return this.setSelection(r),this.notifyDelegateOfInsertionAtRange([n,r])}insertLineBreak(){const t=new Md(this);if(t.shouldDecreaseListLevel())return this.decreaseListLevel(),this.setSelection(t.startPosition);if(t.shouldPrependListItem()){const n=new $t([t.block.copyWithoutText()]);return this.insertDocument(n)}return t.shouldInsertBlockBreak()?this.insertBlockBreak():t.shouldRemoveLastBlockAttribute()?this.removeLastBlockAttribute():t.shouldBreakFormattedBlock()?this.breakFormattedBlock(t):this.insertString(`
`)}insertHTML(t){const n=gr.parse(t,{purifyOptions:{SAFE_FOR_XML:!0}}).getDocument(),r=this.getSelectedRange();this.setDocument(this.document.mergeDocumentAtRange(n,r));const i=r[0],l=i+n.getLength()-1;return this.setSelection(l),this.notifyDelegateOfInsertionAtRange([i,l])}replaceHTML(t){const n=gr.parse(t).getDocument().copyUsingObjectsFromDocument(this.document),r=this.getLocationRange({strict:!1}),i=this.document.rangeFromLocationRange(r);return this.setDocument(n),this.setSelection(i)}insertFile(t){return this.insertFiles([t])}insertFiles(t){const n=[];return Array.from(t).forEach((r=>{var i;if((i=this.delegate)!==null&&i!==void 0&&i.compositionShouldAcceptFile(r)){const l=_n.attachmentForFile(r);n.push(l)}})),this.insertAttachments(n)}insertAttachment(t){return this.insertAttachments([t])}insertAttachments(t){let n=new Ut;return Array.from(t).forEach((r=>{var i;const l=r.getType(),a=(i=dl[l])===null||i===void 0?void 0:i.presentation,o=this.getCurrentTextAttributes();a&&(o.presentation=a);const s=Ut.textForAttachmentWithAttributes(r,o);n=n.appendText(s)})),this.insertText(n)}shouldManageDeletingInDirection(t){const n=this.getLocationRange();if(nn(n)){if(t==="backward"&&n[0].offset===0||this.shouldManageMovingCursorInDirection(t))return!0}else if(n[0].index!==n[1].index)return!0;return!1}deleteInDirection(t){let n,r,i,{length:l}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=this.getLocationRange();let o=this.getSelectedRange();const s=nn(o);if(s?r=t==="backward"&&a[0].offset===0:i=a[0].index!==a[1].index,r&&this.canDecreaseBlockAttributeLevel()){const u=this.getBlock();if(u.isListItem()?this.decreaseListLevel():this.decreaseBlockAttributeLevel(),this.setSelection(o[0]),u.isEmpty())return!1}return s&&(o=this.getExpandedRangeInDirection(t,{length:l}),t==="backward"&&(n=this.getAttachmentAtRange(o))),n?(this.editAttachment(n),!1):(this.setDocument(this.document.removeTextAtRange(o)),this.setSelection(o[0]),!r&&!i&&void 0)}moveTextFromRange(t){const[n]=Array.from(this.getSelectedRange());return this.setDocument(this.document.moveTextFromRangeToPosition(t,n)),this.setSelection(n)}removeAttachment(t){const n=this.document.getRangeOfAttachment(t);if(n)return this.stopEditingAttachment(),this.setDocument(this.document.removeTextAtRange(n)),this.setSelection(n[0])}removeLastBlockAttribute(){const[t,n]=Array.from(this.getSelectedRange()),r=this.document.getBlockAtPosition(n);return this.removeCurrentAttribute(r.getLastAttribute()),this.setSelection(t)}insertPlaceholder(){return this.placeholderPosition=this.getPosition(),this.insertString(" ")}selectPlaceholder(){if(this.placeholderPosition!=null)return this.setSelectedRange([this.placeholderPosition,this.placeholderPosition+1]),this.getSelectedRange()}forgetPlaceholder(){this.placeholderPosition=null}hasCurrentAttribute(t){const n=this.currentAttributes[t];return n!=null&&n!==!1}toggleCurrentAttribute(t){const n=!this.currentAttributes[t];return n?this.setCurrentAttribute(t,n):this.removeCurrentAttribute(t)}canSetCurrentAttribute(t){return Xe(t)?this.canSetCurrentBlockAttribute(t):this.canSetCurrentTextAttribute(t)}canSetCurrentTextAttribute(t){const n=this.getSelectedDocument();if(n){for(const r of Array.from(n.getAttachments()))if(!r.hasContent())return!1;return!0}}canSetCurrentBlockAttribute(t){const n=this.getBlock();if(n)return!n.isTerminalBlock()}setCurrentAttribute(t,n){return Xe(t)?this.setBlockAttribute(t,n):(this.setTextAttribute(t,n),this.currentAttributes[t]=n,this.notifyDelegateOfCurrentAttributesChange())}setHTMLAtributeAtPosition(t,n,r){var i;const l=this.document.getBlockAtPosition(t),a=(i=Xe(l.getLastAttribute()))===null||i===void 0?void 0:i.htmlAttributes;if(l&&a!=null&&a.includes(n)){const o=this.document.setHTMLAttributeAtPosition(t,n,r);this.setDocument(o)}}setTextAttribute(t,n){const r=this.getSelectedRange();if(!r)return;const[i,l]=Array.from(r);if(i!==l)return this.setDocument(this.document.addAttributeAtRange(t,n,r));if(t==="href"){const a=Ut.textForStringWithAttributes(n,{href:n});return this.insertText(a)}}setBlockAttribute(t,n){const r=this.getSelectedRange();if(this.canSetCurrentAttribute(t))return this.setDocument(this.document.applyBlockAttributeAtRange(t,n,r)),this.setSelection(r)}removeCurrentAttribute(t){return Xe(t)?(this.removeBlockAttribute(t),this.updateCurrentAttributes()):(this.removeTextAttribute(t),delete this.currentAttributes[t],this.notifyDelegateOfCurrentAttributesChange())}removeTextAttribute(t){const n=this.getSelectedRange();if(n)return this.setDocument(this.document.removeAttributeAtRange(t,n))}removeBlockAttribute(t){const n=this.getSelectedRange();if(n)return this.setDocument(this.document.removeAttributeAtRange(t,n))}canDecreaseNestingLevel(){var t;return((t=this.getBlock())===null||t===void 0?void 0:t.getNestingLevel())>0}canIncreaseNestingLevel(){var t;const n=this.getBlock();if(n){if((t=Xe(n.getLastNestableAttribute()))===null||t===void 0||!t.listAttribute)return n.getNestingLevel()>0;{const r=this.getPreviousBlock();if(r)return(function(){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Rn((arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).slice(0,i.length),i)})(r.getListItemAttributes(),n.getListItemAttributes())}}}decreaseNestingLevel(){const t=this.getBlock();if(t)return this.setDocument(this.document.replaceBlock(t,t.decreaseNestingLevel()))}increaseNestingLevel(){const t=this.getBlock();if(t)return this.setDocument(this.document.replaceBlock(t,t.increaseNestingLevel()))}canDecreaseBlockAttributeLevel(){var t;return((t=this.getBlock())===null||t===void 0?void 0:t.getAttributeLevel())>0}decreaseBlockAttributeLevel(){var t;const n=(t=this.getBlock())===null||t===void 0?void 0:t.getLastAttribute();if(n)return this.removeCurrentAttribute(n)}decreaseListLevel(){let[t]=Array.from(this.getSelectedRange());const{index:n}=this.document.locationFromPosition(t);let r=n;const i=this.getBlock().getAttributeLevel();let l=this.document.getBlockAtIndex(r+1);for(;l&&l.isListItem()&&!(l.getAttributeLevel()<=i);)r++,l=this.document.getBlockAtIndex(r+1);t=this.document.positionFromLocation({index:n,offset:0});const a=this.document.positionFromLocation({index:r,offset:0});return this.setDocument(this.document.removeLastListAttributeAtRange([t,a]))}updateCurrentAttributes(){const t=this.getSelectedRange({ignoreLock:!0});if(t){const n=this.document.getCommonAttributesAtRange(t);if(Array.from(Ui()).forEach((r=>{n[r]||this.canSetCurrentAttribute(r)||(n[r]=!1)})),!Vn(n,this.currentAttributes))return this.currentAttributes=n,this.notifyDelegateOfCurrentAttributesChange()}}getCurrentAttributes(){return od.call({},this.currentAttributes)}getCurrentTextAttributes(){const t={};for(const n in this.currentAttributes){const r=this.currentAttributes[n];r!==!1&&ji(n)&&(t[n]=r)}return t}freezeSelection(){return this.setCurrentAttribute("frozen",!0)}thawSelection(){return this.removeCurrentAttribute("frozen")}hasFrozenSelection(){return this.hasCurrentAttribute("frozen")}setSelection(t){var n;const r=this.document.locationRangeFromRange(t);return(n=this.delegate)===null||n===void 0?void 0:n.compositionDidRequestChangingSelectionToLocationRange(r)}getSelectedRange(){const t=this.getLocationRange();if(t)return this.document.rangeFromLocationRange(t)}setSelectedRange(t){const n=this.document.locationRangeFromRange(t);return this.getSelectionManager().setLocationRange(n)}getPosition(){const t=this.getLocationRange();if(t)return this.document.positionFromLocation(t[0])}getLocationRange(t){return this.targetLocationRange?this.targetLocationRange:this.getSelectionManager().getLocationRange(t)||De({index:0,offset:0})}withTargetLocationRange(t,n){let r;this.targetLocationRange=t;try{r=n()}finally{this.targetLocationRange=null}return r}withTargetRange(t,n){const r=this.document.locationRangeFromRange(t);return this.withTargetLocationRange(r,n)}withTargetDOMRange(t,n){const r=this.createLocationRangeFromDOMRange(t,{strict:!1});return this.withTargetLocationRange(r,n)}getExpandedRangeInDirection(t){let{length:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},[r,i]=Array.from(this.getSelectedRange());return t==="backward"?n?r-=n:r=this.translateUTF16PositionFromOffset(r,-1):n?i+=n:i=this.translateUTF16PositionFromOffset(i,1),De([r,i])}shouldManageMovingCursorInDirection(t){if(this.editingAttachment)return!0;const n=this.getExpandedRangeInDirection(t);return this.getAttachmentAtRange(n)!=null}moveCursorInDirection(t){let n,r;if(this.editingAttachment)r=this.document.getRangeOfAttachment(this.editingAttachment);else{const i=this.getSelectedRange();r=this.getExpandedRangeInDirection(t),n=!Pr(i,r)}if(t==="backward"?this.setSelectedRange(r[0]):this.setSelectedRange(r[1]),n){const i=this.getAttachmentAtRange(r);if(i)return this.editAttachment(i)}}expandSelectionInDirection(t){let{length:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getExpandedRangeInDirection(t,{length:n});return this.setSelectedRange(r)}expandSelectionForEditing(){if(this.hasCurrentAttribute("href"))return this.expandSelectionAroundCommonAttribute("href")}expandSelectionAroundCommonAttribute(t){const n=this.getPosition(),r=this.document.getRangeOfCommonAttributeAtPosition(t,n);return this.setSelectedRange(r)}selectionContainsAttachments(){var t;return((t=this.getSelectedAttachments())===null||t===void 0?void 0:t.length)>0}selectionIsInCursorTarget(){return this.editingAttachment||this.positionIsCursorTarget(this.getPosition())}positionIsCursorTarget(t){const n=this.document.locationFromPosition(t);if(n)return this.locationIsCursorTarget(n)}positionIsBlockBreak(t){var n;return(n=this.document.getPieceAtPosition(t))===null||n===void 0?void 0:n.isBlockBreak()}getSelectedDocument(){const t=this.getSelectedRange();if(t)return this.document.getDocumentAtRange(t)}getSelectedAttachments(){var t;return(t=this.getSelectedDocument())===null||t===void 0?void 0:t.getAttachments()}getAttachments(){return this.attachments.slice(0)}refreshAttachments(){const t=this.document.getAttachments(),{added:n,removed:r}=(function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const a=[],o=[],s=new Set;i.forEach((f=>{s.add(f)}));const u=new Set;return l.forEach((f=>{u.add(f),s.has(f)||a.push(f)})),i.forEach((f=>{u.has(f)||o.push(f)})),{added:a,removed:o}})(this.attachments,t);return this.attachments=t,Array.from(r).forEach((i=>{var l,a;i.delegate=null,(l=this.delegate)===null||l===void 0||(a=l.compositionDidRemoveAttachment)===null||a===void 0||a.call(l,i)})),(()=>{const i=[];return Array.from(n).forEach((l=>{var a,o;l.delegate=this,i.push((a=this.delegate)===null||a===void 0||(o=a.compositionDidAddAttachment)===null||o===void 0?void 0:o.call(a,l))})),i})()}attachmentDidChangeAttributes(t){var n,r;return this.revision++,(n=this.delegate)===null||n===void 0||(r=n.compositionDidEditAttachment)===null||r===void 0?void 0:r.call(n,t)}attachmentDidChangePreviewURL(t){var n,r;return this.revision++,(n=this.delegate)===null||n===void 0||(r=n.compositionDidChangeAttachmentPreviewURL)===null||r===void 0?void 0:r.call(n,t)}editAttachment(t,n){var r,i;if(t!==this.editingAttachment)return this.stopEditingAttachment(),this.editingAttachment=t,(r=this.delegate)===null||r===void 0||(i=r.compositionDidStartEditingAttachment)===null||i===void 0?void 0:i.call(r,this.editingAttachment,n)}stopEditingAttachment(){var t,n;this.editingAttachment&&((t=this.delegate)===null||t===void 0||(n=t.compositionDidStopEditingAttachment)===null||n===void 0||n.call(t,this.editingAttachment),this.editingAttachment=null)}updateAttributesForAttachment(t,n){return this.setDocument(this.document.updateAttributesForAttachment(t,n))}removeAttributeForAttachment(t,n){return this.setDocument(this.document.removeAttributeForAttachment(t,n))}breakFormattedBlock(t){let{document:n}=t;const{block:r}=t;let i=t.startPosition,l=[i-1,i];r.getBlockBreakPosition()===t.startLocation.offset?(r.breaksOnReturn()&&t.nextCharacter===`
`?i+=1:n=n.removeTextAtRange(l),l=[i,i]):t.nextCharacter===`
`?t.previousCharacter===`
`?l=[i-1,i+1]:(l=[i,i+1],i+=1):t.startLocation.offset-1!=0&&(i+=1);const a=new $t([r.removeLastAttribute().copyWithoutText()]);return this.setDocument(n.insertDocumentAtRange(a,l)),this.setSelection(i)}getPreviousBlock(){const t=this.getLocationRange();if(t){const{index:n}=t[0];if(n>0)return this.document.getBlockAtIndex(n-1)}}getBlock(){const t=this.getLocationRange();if(t)return this.document.getBlockAtIndex(t[0].index)}getAttachmentAtRange(t){const n=this.document.getDocumentAtRange(t);if(n.toString()==="".concat("￼",`
`))return n.getAttachments()[0]}notifyDelegateOfCurrentAttributesChange(){var t,n;return(t=this.delegate)===null||t===void 0||(n=t.compositionDidChangeCurrentAttributes)===null||n===void 0?void 0:n.call(t,this.currentAttributes)}notifyDelegateOfInsertionAtRange(t){var n,r;return(n=this.delegate)===null||n===void 0||(r=n.compositionDidPerformInsertionAtRange)===null||r===void 0?void 0:r.call(n,t)}translateUTF16PositionFromOffset(t,n){const r=this.document.toUTF16String(),i=r.offsetFromUCS2Offset(t);return r.offsetToUCS2Offset(i+n)}}cn.proxyMethod("getSelectionManager().getPointRange"),cn.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),cn.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"),cn.proxyMethod("getSelectionManager().locationIsCursorTarget"),cn.proxyMethod("getSelectionManager().selectionIsExpanded"),cn.proxyMethod("delegate?.getSelectionManager");class qi extends it{constructor(t){super(...arguments),this.composition=t,this.undoEntries=[],this.redoEntries=[]}recordUndoEntry(t){let{context:n,consolidatable:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.undoEntries.slice(-1)[0];if(!r||!n1(i,t,n)){const l=this.createEntry({description:t,context:n});this.undoEntries.push(l),this.redoEntries=[]}}undo(){const t=this.undoEntries.pop();if(t){const n=this.createEntry(t);return this.redoEntries.push(n),this.composition.loadSnapshot(t.snapshot)}}redo(){const t=this.redoEntries.pop();if(t){const n=this.createEntry(t);return this.undoEntries.push(n),this.composition.loadSnapshot(t.snapshot)}}canUndo(){return this.undoEntries.length>0}canRedo(){return this.redoEntries.length>0}createEntry(){let{description:t,context:n}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{description:t?.toString(),context:JSON.stringify(n),snapshot:this.composition.getSnapshot()}}}const n1=(e,t,n)=>e?.description===t?.toString()&&e?.context===JSON.stringify(n),Ei="attachmentGallery";class Dd{constructor(t){this.document=t.document,this.selectedRange=t.selectedRange}perform(){return this.removeBlockAttribute(),this.applyBlockAttribute()}getSnapshot(){return{document:this.document,selectedRange:this.selectedRange}}removeBlockAttribute(){return this.findRangesOfBlocks().map((t=>this.document=this.document.removeAttributeAtRange(Ei,t)))}applyBlockAttribute(){let t=0;this.findRangesOfPieces().forEach((n=>{n[1]-n[0]>1&&(n[0]+=t,n[1]+=t,this.document.getCharacterAtPosition(n[1])!==`
`&&(this.document=this.document.insertBlockBreakAtRange(n[1]),n[1]<this.selectedRange[1]&&this.moveSelectedRangeForward(),n[1]++,t++),n[0]!==0&&this.document.getCharacterAtPosition(n[0]-1)!==`
`&&(this.document=this.document.insertBlockBreakAtRange(n[0]),n[0]<this.selectedRange[0]&&this.moveSelectedRangeForward(),n[0]++,t++),this.document=this.document.applyBlockAttributeAtRange(Ei,!0,n))}))}findRangesOfBlocks(){return this.document.findRangesForBlockAttribute(Ei)}findRangesOfPieces(){return this.document.findRangesForTextAttribute("presentation",{withValue:"gallery"})}moveSelectedRangeForward(){this.selectedRange[0]+=1,this.selectedRange[1]+=1}}const Od=function(e){const t=new Dd(e);return t.perform(),t.getSnapshot()},r1=[Od];class $d{constructor(t,n,r){this.insertFiles=this.insertFiles.bind(this),this.composition=t,this.selectionManager=n,this.element=r,this.undoManager=new qi(this.composition),this.filters=r1.slice(0)}loadDocument(t){return this.loadSnapshot({document:t,selectedRange:[0,0]})}loadHTML(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=gr.parse(t,{referenceElement:this.element}).getDocument();return this.loadDocument(n)}loadJSON(t){let{document:n,selectedRange:r}=t;return n=$t.fromJSON(n),this.loadSnapshot({document:n,selectedRange:r})}loadSnapshot(t){return this.undoManager=new qi(this.composition),this.composition.loadSnapshot(t)}getDocument(){return this.composition.document}getSelectedDocument(){return this.composition.getSelectedDocument()}getSnapshot(){return this.composition.getSnapshot()}toJSON(){return this.getSnapshot()}deleteInDirection(t){return this.composition.deleteInDirection(t)}insertAttachment(t){return this.composition.insertAttachment(t)}insertAttachments(t){return this.composition.insertAttachments(t)}insertDocument(t){return this.composition.insertDocument(t)}insertFile(t){return this.composition.insertFile(t)}insertFiles(t){return this.composition.insertFiles(t)}insertHTML(t){return this.composition.insertHTML(t)}insertString(t){return this.composition.insertString(t)}insertText(t){return this.composition.insertText(t)}insertLineBreak(){return this.composition.insertLineBreak()}getSelectedRange(){return this.composition.getSelectedRange()}getPosition(){return this.composition.getPosition()}getClientRectAtPosition(t){const n=this.getDocument().locationRangeFromRange([t,t+1]);return this.selectionManager.getClientRectAtLocationRange(n)}expandSelectionInDirection(t){return this.composition.expandSelectionInDirection(t)}moveCursorInDirection(t){return this.composition.moveCursorInDirection(t)}setSelectedRange(t){return this.composition.setSelectedRange(t)}activateAttribute(t){let n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return this.composition.setCurrentAttribute(t,n)}attributeIsActive(t){return this.composition.hasCurrentAttribute(t)}canActivateAttribute(t){return this.composition.canSetCurrentAttribute(t)}deactivateAttribute(t){return this.composition.removeCurrentAttribute(t)}setHTMLAtributeAtPosition(t,n,r){this.composition.setHTMLAtributeAtPosition(t,n,r)}canDecreaseNestingLevel(){return this.composition.canDecreaseNestingLevel()}canIncreaseNestingLevel(){return this.composition.canIncreaseNestingLevel()}decreaseNestingLevel(){if(this.canDecreaseNestingLevel())return this.composition.decreaseNestingLevel()}increaseNestingLevel(){if(this.canIncreaseNestingLevel())return this.composition.increaseNestingLevel()}canRedo(){return this.undoManager.canRedo()}canUndo(){return this.undoManager.canUndo()}recordUndoEntry(t){let{context:n,consolidatable:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.undoManager.recordUndoEntry(t,{context:n,consolidatable:r})}redo(){if(this.canRedo())return this.undoManager.redo()}undo(){if(this.canUndo())return this.undoManager.undo()}}class Fd{constructor(t){this.element=t}findLocationFromContainerAndOffset(t,n){let{strict:r}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{strict:!0},i=0,l=!1;const a={index:0,offset:0},o=this.findAttachmentElementParentForNode(t);o&&(t=o.parentNode,n=di(o));const s=zr(this.element,{usingFilter:zd});for(;s.nextNode();){const u=s.currentNode;if(u===t&&or(t)){Pn(u)||(a.offset+=n);break}if(u.parentNode===t){if(i++===n)break}else if(!An(t,u)&&i>0)break;Hl(u,{strict:r})?(l&&a.index++,a.offset=0,l=!0):a.offset+=Li(u)}return a}findContainerAndOffsetFromLocation(t){let n,r;if(t.index===0&&t.offset===0){for(n=this.element,r=0;n.firstChild;)if(n=n.firstChild,ui(n)){r=1;break}return[n,r]}let[i,l]=this.findNodeAndOffsetFromLocation(t);if(i){if(or(i))Li(i)===0?(n=i.parentNode.parentNode,r=di(i.parentNode),Pn(i,{name:"right"})&&r++):(n=i,r=t.offset-l);else{if(n=i.parentNode,!Hl(i.previousSibling)&&!ui(n))for(;i===n.lastChild&&(i=n,n=n.parentNode,!ui(n)););r=di(i),t.offset!==0&&r++}return[n,r]}}findNodeAndOffsetFromLocation(t){let n,r,i=0;for(const l of this.getSignificantNodesForIndex(t.index)){const a=Li(l);if(t.offset<=i+a)if(or(l)){if(n=l,r=i,t.offset===r&&Pn(n))break}else n||(n=l,r=i);if(i+=a,i>t.offset)break}return[n,r]}findAttachmentElementParentForNode(t){for(;t&&t!==this.element;){if(xn(t))return t;t=t.parentNode}}getSignificantNodesForIndex(t){const n=[],r=zr(this.element,{usingFilter:i1});let i=!1;for(;r.nextNode();){const a=r.currentNode;var l;if(zn(a)){if(l!=null?l++:l=0,l===t)i=!0;else if(i)break}else i&&n.push(a)}return n}}const Li=function(e){return e.nodeType===Node.TEXT_NODE?Pn(e)?0:e.textContent.length:gt(e)==="br"||xn(e)?1:0},i1=function(e){return a1(e)===NodeFilter.FILTER_ACCEPT?zd(e):NodeFilter.FILTER_REJECT},a1=function(e){return dd(e)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},zd=function(e){return xn(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT};class Pd{createDOMRangeFromPoint(t){let n,{x:r,y:i}=t;if(document.caretPositionFromPoint){const{offsetNode:l,offset:a}=document.caretPositionFromPoint(r,i);return n=document.createRange(),n.setStart(l,a),n}if(document.caretRangeFromPoint)return document.caretRangeFromPoint(r,i);if(document.body.createTextRange){const l=sr();try{const a=document.body.createTextRange();a.moveToPoint(r,i),a.select()}catch{}return n=sr(),hd(l),n}}getClientRectsForDOMRange(t){const n=Array.from(t.getClientRects());return[n[0],n[n.length-1]]}}class Cn extends it{constructor(t){super(...arguments),this.didMouseDown=this.didMouseDown.bind(this),this.selectionDidChange=this.selectionDidChange.bind(this),this.element=t,this.locationMapper=new Fd(this.element),this.pointMapper=new Pd,this.lockCount=0,_e("mousedown",{onElement:this.element,withCallback:this.didMouseDown})}getLocationRange(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t.strict===!1?this.createLocationRangeFromDOMRange(sr()):t.ignoreLock?this.currentLocationRange:this.lockedLocationRange?this.lockedLocationRange:this.currentLocationRange}setLocationRange(t){if(this.lockedLocationRange)return;t=De(t);const n=this.createDOMRangeFromLocationRange(t);n&&(hd(n),this.updateCurrentLocationRange(t))}setLocationRangeFromPointRange(t){t=De(t);const n=this.getLocationAtPoint(t[0]),r=this.getLocationAtPoint(t[1]);this.setLocationRange([n,r])}getClientRectAtLocationRange(t){const n=this.createDOMRangeFromLocationRange(t);if(n)return this.getClientRectsForDOMRange(n)[1]}locationIsCursorTarget(t){const n=Array.from(this.findNodeAndOffsetFromLocation(t))[0];return Pn(n)}lock(){this.lockCount++==0&&(this.updateCurrentLocationRange(),this.lockedLocationRange=this.getLocationRange())}unlock(){if(--this.lockCount==0){const{lockedLocationRange:t}=this;if(this.lockedLocationRange=null,t!=null)return this.setLocationRange(t)}}clearSelection(){var t;return(t=md())===null||t===void 0?void 0:t.removeAllRanges()}selectionIsCollapsed(){var t;return((t=sr())===null||t===void 0?void 0:t.collapsed)===!0}selectionIsExpanded(){return!this.selectionIsCollapsed()}createLocationRangeFromDOMRange(t,n){if(t==null||!this.domRangeWithinElement(t))return;const r=this.findLocationFromContainerAndOffset(t.startContainer,t.startOffset,n);if(!r)return;const i=t.collapsed?void 0:this.findLocationFromContainerAndOffset(t.endContainer,t.endOffset,n);return De([r,i])}didMouseDown(){return this.pauseTemporarily()}pauseTemporarily(){let t;this.paused=!0;const n=()=>{if(this.paused=!1,clearTimeout(r),Array.from(t).forEach((i=>{i.destroy()})),An(document,this.element))return this.selectionDidChange()},r=setTimeout(n,200);t=["mousemove","keydown"].map((i=>_e(i,{onElement:document,withCallback:n})))}selectionDidChange(){if(!this.paused&&!cl(this.element))return this.updateCurrentLocationRange()}updateCurrentLocationRange(t){var n,r;if((t??(t=this.createLocationRangeFromDOMRange(sr())))&&!Pr(t,this.currentLocationRange))return this.currentLocationRange=t,(n=this.delegate)===null||n===void 0||(r=n.locationRangeDidChange)===null||r===void 0?void 0:r.call(n,this.currentLocationRange.slice(0))}createDOMRangeFromLocationRange(t){const n=this.findContainerAndOffsetFromLocation(t[0]),r=nn(t)?n:this.findContainerAndOffsetFromLocation(t[1])||n;if(n!=null&&r!=null){const i=document.createRange();return i.setStart(...Array.from(n||[])),i.setEnd(...Array.from(r||[])),i}}getLocationAtPoint(t){const n=this.createDOMRangeFromPoint(t);var r;if(n)return(r=this.createLocationRangeFromDOMRange(n))===null||r===void 0?void 0:r[0]}domRangeWithinElement(t){return t.collapsed?An(this.element,t.startContainer):An(this.element,t.startContainer)&&An(this.element,t.endContainer)}}Cn.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),Cn.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),Cn.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),Cn.proxyMethod("pointMapper.createDOMRangeFromPoint"),Cn.proxyMethod("pointMapper.getClientRectsForDOMRange");var Nd=Object.freeze({__proto__:null,Attachment:_n,AttachmentManager:Bd,AttachmentPiece:Wn,Block:Jt,Composition:cn,Document:$t,Editor:$d,HTMLParser:gr,HTMLSanitizer:ni,LineBreakInsertion:Md,LocationMapper:Fd,ManagedAttachment:Ye,Piece:Dn,PointMapper:Pd,SelectionManager:Cn,SplittableList:Ur,StringPiece:yl,Text:Ut,UndoManager:qi}),l1=Object.freeze({__proto__:null,ObjectView:Mn,AttachmentView:bl,BlockView:Ld,DocumentView:ri,PieceView:Ad,PreviewableAttachmentView:Cd,TextView:Ed});const{lang:xi,css:yn,keyNames:o1}=kr,Si=function(e){return function(){const t=e.apply(this,arguments);t.do(),this.undos||(this.undos=[]),this.undos.push(t.undo)}};class Hd extends it{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(...arguments),ht(this,"makeElementMutable",Si((()=>({do:()=>{this.element.dataset.trixMutable=!0},undo:()=>delete this.element.dataset.trixMutable})))),ht(this,"addToolbar",Si((()=>{const l=ke({tagName:"div",className:yn.attachmentToolbar,data:{trixMutable:!0},childNodes:ke({tagName:"div",className:"trix-button-row",childNodes:ke({tagName:"span",className:"trix-button-group trix-button-group--actions",childNodes:ke({tagName:"button",className:"trix-button trix-button--remove",textContent:xi.remove,attributes:{title:xi.remove},data:{trixAction:"remove"}})})})});return this.attachment.isPreviewable()&&l.appendChild(ke({tagName:"div",className:yn.attachmentMetadataContainer,childNodes:ke({tagName:"span",className:yn.attachmentMetadata,childNodes:[ke({tagName:"span",className:yn.attachmentName,textContent:this.attachment.getFilename(),attributes:{title:this.attachment.getFilename()}}),ke({tagName:"span",className:yn.attachmentSize,textContent:this.attachment.getFormattedFilesize()})]})})),_e("click",{onElement:l,withCallback:this.didClickToolbar}),_e("click",{onElement:l,matchingSelector:"[data-trix-action]",withCallback:this.didClickActionButton}),ar("trix-attachment-before-toolbar",{onElement:this.element,attributes:{toolbar:l,attachment:this.attachment}}),{do:()=>this.element.appendChild(l),undo:()=>mn(l)}}))),ht(this,"installCaptionEditor",Si((()=>{const l=ke({tagName:"textarea",className:yn.attachmentCaptionEditor,attributes:{placeholder:xi.captionPlaceholder},data:{trixMutable:!0}});l.value=this.attachmentPiece.getCaption();const a=l.cloneNode();a.classList.add("trix-autoresize-clone"),a.tabIndex=-1;const o=function(){a.value=l.value,l.style.height=a.scrollHeight+"px"};_e("input",{onElement:l,withCallback:o}),_e("input",{onElement:l,withCallback:this.didInputCaption}),_e("keydown",{onElement:l,withCallback:this.didKeyDownCaption}),_e("change",{onElement:l,withCallback:this.didChangeCaption}),_e("blur",{onElement:l,withCallback:this.didBlurCaption});const s=this.element.querySelector("figcaption"),u=s.cloneNode();return{do:()=>{if(s.style.display="none",u.appendChild(l),u.appendChild(a),u.classList.add("".concat(yn.attachmentCaption,"--editing")),s.parentElement.insertBefore(u,s),o(),this.options.editCaption)return vl((()=>l.focus()))},undo(){mn(u),s.style.display=null}}}))),this.didClickToolbar=this.didClickToolbar.bind(this),this.didClickActionButton=this.didClickActionButton.bind(this),this.didKeyDownCaption=this.didKeyDownCaption.bind(this),this.didInputCaption=this.didInputCaption.bind(this),this.didChangeCaption=this.didChangeCaption.bind(this),this.didBlurCaption=this.didBlurCaption.bind(this),this.attachmentPiece=t,this.element=n,this.container=r,this.options=i,this.attachment=this.attachmentPiece.attachment,gt(this.element)==="a"&&(this.element=this.element.firstChild),this.install()}install(){this.makeElementMutable(),this.addToolbar(),this.attachment.isPreviewable()&&this.installCaptionEditor()}uninstall(){var t;let n=this.undos.pop();for(this.savePendingCaption();n;)n(),n=this.undos.pop();(t=this.delegate)===null||t===void 0||t.didUninstallAttachmentEditor(this)}savePendingCaption(){if(this.pendingCaption!=null){const l=this.pendingCaption;var t,n,r,i;this.pendingCaption=null,l?(t=this.delegate)===null||t===void 0||(n=t.attachmentEditorDidRequestUpdatingAttributesForAttachment)===null||n===void 0||n.call(t,{caption:l},this.attachment):(r=this.delegate)===null||r===void 0||(i=r.attachmentEditorDidRequestRemovingAttributeForAttachment)===null||i===void 0||i.call(r,"caption",this.attachment)}}didClickToolbar(t){return t.preventDefault(),t.stopPropagation()}didClickActionButton(t){var n;if(t.target.getAttribute("data-trix-action")==="remove")return(n=this.delegate)===null||n===void 0?void 0:n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment)}didKeyDownCaption(t){var n,r;if(o1[t.keyCode]==="return")return t.preventDefault(),this.savePendingCaption(),(n=this.delegate)===null||n===void 0||(r=n.attachmentEditorDidRequestDeselectingAttachment)===null||r===void 0?void 0:r.call(n,this.attachment)}didInputCaption(t){this.pendingCaption=t.target.value.replace(/\s/g," ").trim()}didChangeCaption(t){return this.savePendingCaption()}didBlurCaption(t){return this.savePendingCaption()}}class Ud extends it{constructor(t,n){super(...arguments),this.didFocus=this.didFocus.bind(this),this.didBlur=this.didBlur.bind(this),this.didClickAttachment=this.didClickAttachment.bind(this),this.element=t,this.composition=n,this.documentView=new ri(this.composition.document,{element:this.element}),_e("focus",{onElement:this.element,withCallback:this.didFocus}),_e("blur",{onElement:this.element,withCallback:this.didBlur}),_e("click",{onElement:this.element,matchingSelector:"a[contenteditable=false]",preventDefault:!0}),_e("mousedown",{onElement:this.element,matchingSelector:Ln,withCallback:this.didClickAttachment}),_e("click",{onElement:this.element,matchingSelector:"a".concat(Ln),preventDefault:!0})}didFocus(t){var n;const r=()=>{var i,l;if(!this.focused)return this.focused=!0,(i=this.delegate)===null||i===void 0||(l=i.compositionControllerDidFocus)===null||l===void 0?void 0:l.call(i)};return((n=this.blurPromise)===null||n===void 0?void 0:n.then(r))||r()}didBlur(t){this.blurPromise=new Promise((n=>vl((()=>{var r,i;return cl(this.element)||(this.focused=null,(r=this.delegate)===null||r===void 0||(i=r.compositionControllerDidBlur)===null||i===void 0||i.call(r)),this.blurPromise=null,n()}))))}didClickAttachment(t,n){var r,i;const l=this.findAttachmentForElement(n),a=!!gn(t.target,{matchingSelector:"figcaption"});return(r=this.delegate)===null||r===void 0||(i=r.compositionControllerDidSelectAttachment)===null||i===void 0?void 0:i.call(r,l,{editCaption:a})}getSerializableElement(){return this.isEditingAttachment()?this.documentView.shadowElement:this.element}render(){var t,n,r,i,l,a;return this.revision!==this.composition.revision&&(this.documentView.setDocument(this.composition.document),this.documentView.render(),this.revision=this.composition.revision),this.canSyncDocumentView()&&!this.documentView.isSynced()&&((r=this.delegate)===null||r===void 0||(i=r.compositionControllerWillSyncDocumentView)===null||i===void 0||i.call(r),this.documentView.sync(),(l=this.delegate)===null||l===void 0||(a=l.compositionControllerDidSyncDocumentView)===null||a===void 0||a.call(l)),(t=this.delegate)===null||t===void 0||(n=t.compositionControllerDidRender)===null||n===void 0?void 0:n.call(t)}rerenderViewForObject(t){return this.invalidateViewForObject(t),this.render()}invalidateViewForObject(t){return this.documentView.invalidateViewForObject(t)}isViewCachingEnabled(){return this.documentView.isViewCachingEnabled()}enableViewCaching(){return this.documentView.enableViewCaching()}disableViewCaching(){return this.documentView.disableViewCaching()}refreshViewCache(){return this.documentView.garbageCollectCachedViews()}isEditingAttachment(){return!!this.attachmentEditor}installAttachmentEditorForAttachment(t,n){var r;if(((r=this.attachmentEditor)===null||r===void 0?void 0:r.attachment)===t)return;const i=this.documentView.findElementForObject(t);if(!i)return;this.uninstallAttachmentEditor();const l=this.composition.document.getAttachmentPieceForAttachment(t);this.attachmentEditor=new Hd(l,i,this.element,n),this.attachmentEditor.delegate=this}uninstallAttachmentEditor(){var t;return(t=this.attachmentEditor)===null||t===void 0?void 0:t.uninstall()}didUninstallAttachmentEditor(){return this.attachmentEditor=null,this.render()}attachmentEditorDidRequestUpdatingAttributesForAttachment(t,n){var r,i;return(r=this.delegate)===null||r===void 0||(i=r.compositionControllerWillUpdateAttachment)===null||i===void 0||i.call(r,n),this.composition.updateAttributesForAttachment(t,n)}attachmentEditorDidRequestRemovingAttributeForAttachment(t,n){var r,i;return(r=this.delegate)===null||r===void 0||(i=r.compositionControllerWillUpdateAttachment)===null||i===void 0||i.call(r,n),this.composition.removeAttributeForAttachment(t,n)}attachmentEditorDidRequestRemovalOfAttachment(t){var n,r;return(n=this.delegate)===null||n===void 0||(r=n.compositionControllerDidRequestRemovalOfAttachment)===null||r===void 0?void 0:r.call(n,t)}attachmentEditorDidRequestDeselectingAttachment(t){var n,r;return(n=this.delegate)===null||n===void 0||(r=n.compositionControllerDidRequestDeselectingAttachment)===null||r===void 0?void 0:r.call(n,t)}canSyncDocumentView(){return!this.isEditingAttachment()}findAttachmentForElement(t){return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId,10))}}class jd extends it{}const Wd="data-trix-mutable",s1="[".concat(Wd,"]"),d1={attributes:!0,childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0};class Vd extends it{constructor(t){super(t),this.didMutate=this.didMutate.bind(this),this.element=t,this.observer=new window.MutationObserver(this.didMutate),this.start()}start(){return this.reset(),this.observer.observe(this.element,d1)}stop(){return this.observer.disconnect()}didMutate(t){var n,r;if(this.mutations.push(...Array.from(this.findSignificantMutations(t)||[])),this.mutations.length)return(n=this.delegate)===null||n===void 0||(r=n.elementDidMutate)===null||r===void 0||r.call(n,this.getMutationSummary()),this.reset()}reset(){this.mutations=[]}findSignificantMutations(t){return t.filter((n=>this.mutationIsSignificant(n)))}mutationIsSignificant(t){if(this.nodeIsMutable(t.target))return!1;for(const n of Array.from(this.nodesModifiedByMutation(t)))if(this.nodeIsSignificant(n))return!0;return!1}nodeIsSignificant(t){return t!==this.element&&!this.nodeIsMutable(t)&&!dd(t)}nodeIsMutable(t){return gn(t,{matchingSelector:s1})}nodesModifiedByMutation(t){const n=[];switch(t.type){case"attributes":t.attributeName!==Wd&&n.push(t.target);break;case"characterData":n.push(t.target.parentNode),n.push(t.target);break;case"childList":n.push(...Array.from(t.addedNodes||[])),n.push(...Array.from(t.removedNodes||[]))}return n}getMutationSummary(){return this.getTextMutationSummary()}getTextMutationSummary(){const{additions:t,deletions:n}=this.getTextChangesFromCharacterData(),r=this.getTextChangesFromChildList();Array.from(r.additions).forEach((o=>{Array.from(t).includes(o)||t.push(o)})),n.push(...Array.from(r.deletions||[]));const i={},l=t.join("");l&&(i.textAdded=l);const a=n.join("");return a&&(i.textDeleted=a),i}getMutationsByType(t){return Array.from(this.mutations).filter((n=>n.type===t))}getTextChangesFromChildList(){let t,n;const r=[],i=[];Array.from(this.getMutationsByType("childList")).forEach((o=>{r.push(...Array.from(o.addedNodes||[])),i.push(...Array.from(o.removedNodes||[]))})),r.length===0&&i.length===1&&zn(i[0])?(t=[],n=[`
`]):(t=Ki(r),n=Ki(i));const l=t.filter(((o,s)=>o!==n[s])).map(nr),a=n.filter(((o,s)=>o!==t[s])).map(nr);return{additions:l,deletions:a}}getTextChangesFromCharacterData(){let t,n;const r=this.getMutationsByType("characterData");if(r.length){const i=r[0],l=r[r.length-1],a=(function(o,s){let u,f;return o=vr.box(o),(s=vr.box(s)).length<o.length?[f,u]=Ql(o,s):[u,f]=Ql(s,o),{added:u,removed:f}})(nr(i.oldValue),nr(l.target.data));t=a.added,n=a.removed}return{additions:t?[t]:[],deletions:n?[n]:[]}}}const Ki=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const t=[];for(const n of Array.from(e))switch(n.nodeType){case Node.TEXT_NODE:t.push(n.data);break;case Node.ELEMENT_NODE:gt(n)==="br"?t.push(`
`):t.push(...Array.from(Ki(n.childNodes)||[]))}return t};class _d extends Nr{constructor(t){super(...arguments),this.file=t}perform(t){const n=new FileReader;return n.onerror=()=>t(!1),n.onload=()=>{n.onerror=null;try{n.abort()}catch{}return t(!0,this.file)},n.readAsArrayBuffer(this.file)}}class u1{constructor(t){this.element=t}shouldIgnore(t){return!!yr.samsungAndroid&&(this.previousEvent=this.event,this.event=t,this.checkSamsungKeyboardBuggyModeStart(),this.checkSamsungKeyboardBuggyModeEnd(),this.buggyMode)}checkSamsungKeyboardBuggyModeStart(){this.insertingLongTextAfterUnidentifiedChar()&&c1(this.element.innerText,this.event.data)&&(this.buggyMode=!0,this.event.preventDefault())}checkSamsungKeyboardBuggyModeEnd(){this.buggyMode&&this.event.inputType!=="insertText"&&(this.buggyMode=!1)}insertingLongTextAfterUnidentifiedChar(){var t;return this.isBeforeInputInsertText()&&this.previousEventWasUnidentifiedKeydown()&&((t=this.event.data)===null||t===void 0?void 0:t.length)>50}isBeforeInputInsertText(){return this.event.type==="beforeinput"&&this.event.inputType==="insertText"}previousEventWasUnidentifiedKeydown(){var t,n;return((t=this.previousEvent)===null||t===void 0?void 0:t.type)==="keydown"&&((n=this.previousEvent)===null||n===void 0?void 0:n.key)==="Unidentified"}}const c1=(e,t)=>go(e)===go(t),p1=new RegExp("(".concat("￼","|").concat(ti,"|").concat(pn,"|\\s)+"),"g"),go=e=>e.replace(p1," ").trim();class ii extends it{constructor(t){super(...arguments),this.element=t,this.mutationObserver=new Vd(this.element),this.mutationObserver.delegate=this,this.flakyKeyboardDetector=new u1(this.element);for(const n in this.constructor.events)_e(n,{onElement:this.element,withCallback:this.handlerFor(n)})}elementDidMutate(t){}editorWillSyncDocumentView(){return this.mutationObserver.stop()}editorDidSyncDocumentView(){return this.mutationObserver.start()}requestRender(){var t,n;return(t=this.delegate)===null||t===void 0||(n=t.inputControllerDidRequestRender)===null||n===void 0?void 0:n.call(t)}requestReparse(){var t,n;return(t=this.delegate)===null||t===void 0||(n=t.inputControllerDidRequestReparse)===null||n===void 0||n.call(t),this.requestRender()}attachFiles(t){const n=Array.from(t).map((r=>new _d(r)));return Promise.all(n).then((r=>{this.handleInput((function(){var i,l;return(i=this.delegate)===null||i===void 0||i.inputControllerWillAttachFiles(),(l=this.responder)===null||l===void 0||l.insertFiles(r),this.requestRender()}))}))}handlerFor(t){return n=>{n.defaultPrevented||this.handleInput((()=>{if(!cl(this.element)){if(this.flakyKeyboardDetector.shouldIgnore(n))return;this.eventName=t,this.constructor.events[t].call(this,n)}}))}}handleInput(t){try{var n;(n=this.delegate)===null||n===void 0||n.inputControllerWillHandleInput(),t.call(this)}finally{var r;(r=this.delegate)===null||r===void 0||r.inputControllerDidHandleInput()}}createLinkHTML(t,n){const r=document.createElement("a");return r.href=t,r.textContent=n||t,r.outerHTML}}var Ti;ht(ii,"events",{});const{browser:f1,keyNames:Qd}=kr;let v1=0;class tn extends ii{constructor(){super(...arguments),this.resetInputSummary()}setInputSummary(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.inputSummary.eventName=this.eventName;for(const n in t){const r=t[n];this.inputSummary[n]=r}return this.inputSummary}resetInputSummary(){this.inputSummary={}}reset(){return this.resetInputSummary(),In.reset()}elementDidMutate(t){var n,r;return this.isComposing()?(n=this.delegate)===null||n===void 0||(r=n.inputControllerDidAllowUnhandledInput)===null||r===void 0?void 0:r.call(n):this.handleInput((function(){return this.mutationIsSignificant(t)&&(this.mutationIsExpected(t)?this.requestRender():this.requestReparse()),this.reset()}))}mutationIsExpected(t){let{textAdded:n,textDeleted:r}=t;if(this.inputSummary.preferDocument)return!0;const i=n!=null?n===this.inputSummary.textAdded:!this.inputSummary.textAdded,l=r!=null?this.inputSummary.didDelete:!this.inputSummary.didDelete,a=[`
`,` 
`].includes(n)&&!i,o=r===`
`&&!l;if(a&&!o||o&&!a){const u=this.getSelectedRange();if(u){var s;const f=a?n.replace(/\n$/,"").length||-1:n?.length||1;if((s=this.responder)!==null&&s!==void 0&&s.positionIsBlockBreak(u[1]+f))return!0}}return i&&l}mutationIsSignificant(t){var n;const r=Object.keys(t).length>0,i=((n=this.compositionInput)===null||n===void 0?void 0:n.getEndData())==="";return r||!i}getCompositionInput(){if(this.isComposing())return this.compositionInput;this.compositionInput=new dn(this)}isComposing(){return this.compositionInput&&!this.compositionInput.isEnded()}deleteInDirection(t,n){var r;return((r=this.responder)===null||r===void 0?void 0:r.deleteInDirection(t))!==!1?this.setInputSummary({didDelete:!0}):n?(n.preventDefault(),this.requestRender()):void 0}serializeSelectionToDataTransfer(t){var n;if(!(function(i){if(i==null||!i.setData)return!1;for(const l in Wl){const a=Wl[l];try{if(i.setData(l,a),!i.getData(l)===a)return!1}catch{return!1}}return!0})(t))return;const r=(n=this.responder)===null||n===void 0?void 0:n.getSelectedDocument().toSerializableDocument();return t.setData("application/x-trix-document",JSON.stringify(r)),t.setData("text/html",ri.render(r).innerHTML),t.setData("text/plain",r.toString().replace(/\n$/,"")),!0}canAcceptDataTransfer(t){const n={};return Array.from(t?.types||[]).forEach((r=>{n[r]=!0})),n.Files||n["application/x-trix-document"]||n["text/html"]||n["text/plain"]}getPastedHTMLUsingHiddenElement(t){const n=this.getSelectedRange(),r={position:"absolute",left:"".concat(window.pageXOffset,"px"),top:"".concat(window.pageYOffset,"px"),opacity:0},i=ke({style:r,tagName:"div",editable:!0});return document.body.appendChild(i),i.focus(),requestAnimationFrame((()=>{const l=i.innerHTML;return mn(i),this.setSelectedRange(n),t(l)}))}}ht(tn,"events",{keydown(e){this.isComposing()||this.resetInputSummary(),this.inputSummary.didInput=!0;const t=Qd[e.keyCode];if(t){var n;let i=this.keys;["ctrl","alt","shift","meta"].forEach((l=>{var a;e["".concat(l,"Key")]&&(l==="ctrl"&&(l="control"),i=(a=i)===null||a===void 0?void 0:a[l])})),((n=i)===null||n===void 0?void 0:n[t])!=null&&(this.setInputSummary({keyName:t}),In.reset(),i[t].call(this,e))}if(fd(e)){const i=String.fromCharCode(e.keyCode).toLowerCase();if(i){var r;const l=["alt","shift"].map((a=>{if(e["".concat(a,"Key")])return a})).filter((a=>a));l.push(i),(r=this.delegate)!==null&&r!==void 0&&r.inputControllerDidReceiveKeyboardCommand(l)&&e.preventDefault()}}},keypress(e){if(this.inputSummary.eventName!=null||e.metaKey||e.ctrlKey&&!e.altKey)return;const t=h1(e);var n,r;return t?((n=this.delegate)===null||n===void 0||n.inputControllerWillPerformTyping(),(r=this.responder)===null||r===void 0||r.insertString(t),this.setInputSummary({textAdded:t,didDelete:this.selectionIsExpanded()})):void 0},textInput(e){const{data:t}=e,{textAdded:n}=this.inputSummary;if(n&&n!==t&&n.toUpperCase()===t){var r;const i=this.getSelectedRange();return this.setSelectedRange([i[0],i[1]+n.length]),(r=this.responder)===null||r===void 0||r.insertString(t),this.setInputSummary({textAdded:t}),this.setSelectedRange(i)}},dragenter(e){e.preventDefault()},dragstart(e){var t,n;return this.serializeSelectionToDataTransfer(e.dataTransfer),this.draggedRange=this.getSelectedRange(),(t=this.delegate)===null||t===void 0||(n=t.inputControllerDidStartDrag)===null||n===void 0?void 0:n.call(t)},dragover(e){if(this.draggedRange||this.canAcceptDataTransfer(e.dataTransfer)){e.preventDefault();const r={x:e.clientX,y:e.clientY};var t,n;if(!Vn(r,this.draggingPoint))return this.draggingPoint=r,(t=this.delegate)===null||t===void 0||(n=t.inputControllerDidReceiveDragOverPoint)===null||n===void 0?void 0:n.call(t,this.draggingPoint)}},dragend(e){var t,n;(t=this.delegate)===null||t===void 0||(n=t.inputControllerDidCancelDrag)===null||n===void 0||n.call(t),this.draggedRange=null,this.draggingPoint=null},drop(e){var t,n;e.preventDefault();const r=(t=e.dataTransfer)===null||t===void 0?void 0:t.files,i=e.dataTransfer.getData("application/x-trix-document"),l={x:e.clientX,y:e.clientY};if((n=this.responder)===null||n===void 0||n.setLocationRangeFromPointRange(l),r!=null&&r.length)this.attachFiles(r);else if(this.draggedRange){var a,o;(a=this.delegate)===null||a===void 0||a.inputControllerWillMoveText(),(o=this.responder)===null||o===void 0||o.moveTextFromRange(this.draggedRange),this.draggedRange=null,this.requestRender()}else if(i){var s;const u=$t.fromJSONString(i);(s=this.responder)===null||s===void 0||s.insertDocument(u),this.requestRender()}this.draggedRange=null,this.draggingPoint=null},cut(e){var t,n;if((t=this.responder)!==null&&t!==void 0&&t.selectionIsExpanded()&&(this.serializeSelectionToDataTransfer(e.clipboardData)&&e.preventDefault(),(n=this.delegate)===null||n===void 0||n.inputControllerWillCutText(),this.deleteInDirection("backward"),e.defaultPrevented))return this.requestRender()},copy(e){var t;(t=this.responder)!==null&&t!==void 0&&t.selectionIsExpanded()&&this.serializeSelectionToDataTransfer(e.clipboardData)&&e.preventDefault()},paste(e){const t=e.clipboardData||e.testClipboardData,n={clipboard:t};if(!t||b1(e))return void this.getPastedHTMLUsingHiddenElement((P=>{var H,I,te;return n.type="text/html",n.html=P,(H=this.delegate)===null||H===void 0||H.inputControllerWillPaste(n),(I=this.responder)===null||I===void 0||I.insertHTML(n.html),this.requestRender(),(te=this.delegate)===null||te===void 0?void 0:te.inputControllerDidPaste(n)}));const r=t.getData("URL"),i=t.getData("text/html"),l=t.getData("public.url-name");if(r){var a,o,s;let P;n.type="text/html",P=l?ml(l).trim():r,n.html=this.createLinkHTML(r,P),(a=this.delegate)===null||a===void 0||a.inputControllerWillPaste(n),this.setInputSummary({textAdded:P,didDelete:this.selectionIsExpanded()}),(o=this.responder)===null||o===void 0||o.insertHTML(n.html),this.requestRender(),(s=this.delegate)===null||s===void 0||s.inputControllerDidPaste(n)}else if(pd(t)){var u,f,S;n.type="text/plain",n.string=t.getData("text/plain"),(u=this.delegate)===null||u===void 0||u.inputControllerWillPaste(n),this.setInputSummary({textAdded:n.string,didDelete:this.selectionIsExpanded()}),(f=this.responder)===null||f===void 0||f.insertString(n.string),this.requestRender(),(S=this.delegate)===null||S===void 0||S.inputControllerDidPaste(n)}else if(i){var M,C,E;n.type="text/html",n.html=i,(M=this.delegate)===null||M===void 0||M.inputControllerWillPaste(n),(C=this.responder)===null||C===void 0||C.insertHTML(n.html),this.requestRender(),(E=this.delegate)===null||E===void 0||E.inputControllerDidPaste(n)}else if(Array.from(t.types).includes("Files")){var k,x;const P=(k=t.items)===null||k===void 0||(k=k[0])===null||k===void 0||(x=k.getAsFile)===null||x===void 0?void 0:x.call(k);if(P){var O,D,L;const H=g1(P);!P.name&&H&&(P.name="pasted-file-".concat(++v1,".").concat(H)),n.type="File",n.file=P,(O=this.delegate)===null||O===void 0||O.inputControllerWillAttachFiles(),(D=this.responder)===null||D===void 0||D.insertFile(n.file),this.requestRender(),(L=this.delegate)===null||L===void 0||L.inputControllerDidPaste(n)}}e.preventDefault()},compositionstart(e){return this.getCompositionInput().start(e.data)},compositionupdate(e){return this.getCompositionInput().update(e.data)},compositionend(e){return this.getCompositionInput().end(e.data)},beforeinput(e){this.inputSummary.didInput=!0},input(e){return this.inputSummary.didInput=!0,e.stopPropagation()}}),ht(tn,"keys",{backspace(e){var t;return(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),this.deleteInDirection("backward",e)},delete(e){var t;return(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),this.deleteInDirection("forward",e)},return(e){var t,n;return this.setInputSummary({preferDocument:!0}),(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0?void 0:n.insertLineBreak()},tab(e){var t,n;(t=this.responder)!==null&&t!==void 0&&t.canIncreaseNestingLevel()&&((n=this.responder)===null||n===void 0||n.increaseNestingLevel(),this.requestRender(),e.preventDefault())},left(e){var t;if(this.selectionIsInCursorTarget())return e.preventDefault(),(t=this.responder)===null||t===void 0?void 0:t.moveCursorInDirection("backward")},right(e){var t;if(this.selectionIsInCursorTarget())return e.preventDefault(),(t=this.responder)===null||t===void 0?void 0:t.moveCursorInDirection("forward")},control:{d(e){var t;return(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),this.deleteInDirection("forward",e)},h(e){var t;return(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),this.deleteInDirection("backward",e)},o(e){var t,n;return e.preventDefault(),(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0||n.insertString(`
`,{updatePosition:!1}),this.requestRender()}},shift:{return(e){var t,n;(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0||n.insertString(`
`),this.requestRender(),e.preventDefault()},tab(e){var t,n;(t=this.responder)!==null&&t!==void 0&&t.canDecreaseNestingLevel()&&((n=this.responder)===null||n===void 0||n.decreaseNestingLevel(),this.requestRender(),e.preventDefault())},left(e){if(this.selectionIsInCursorTarget())return e.preventDefault(),this.expandSelectionInDirection("backward")},right(e){if(this.selectionIsInCursorTarget())return e.preventDefault(),this.expandSelectionInDirection("forward")}},alt:{backspace(e){var t;return this.setInputSummary({preferDocument:!1}),(t=this.delegate)===null||t===void 0?void 0:t.inputControllerWillPerformTyping()}},meta:{backspace(e){var t;return this.setInputSummary({preferDocument:!1}),(t=this.delegate)===null||t===void 0?void 0:t.inputControllerWillPerformTyping()}}}),tn.proxyMethod("responder?.getSelectedRange"),tn.proxyMethod("responder?.setSelectedRange"),tn.proxyMethod("responder?.expandSelectionInDirection"),tn.proxyMethod("responder?.selectionIsInCursorTarget"),tn.proxyMethod("responder?.selectionIsExpanded");const g1=e=>{var t;return(t=e.type)===null||t===void 0||(t=t.match(/\/(\w+)$/))===null||t===void 0?void 0:t[1]},m1=!((Ti=" ".codePointAt)===null||Ti===void 0||!Ti.call(" ",0)),h1=function(e){if(e.key&&m1&&e.key.codePointAt(0)===e.keyCode)return e.key;{let t;if(e.which===null?t=e.keyCode:e.which!==0&&e.charCode!==0&&(t=e.charCode),t!=null&&Qd[t]!=="escape")return vr.fromCodepoints([t]).toString()}},b1=function(e){const t=e.clipboardData;if(t){if(t.types.includes("text/html")){for(const n of t.types){const r=/^CorePasteboardFlavorType/.test(n),i=/^dyn\./.test(n)&&t.getData(n);if(r||i)return!0}return!1}{const n=t.types.includes("com.apple.webarchive"),r=t.types.includes("com.apple.flat-rtfd");return n||r}}};class dn extends it{constructor(t){super(...arguments),this.inputController=t,this.responder=this.inputController.responder,this.delegate=this.inputController.delegate,this.inputSummary=this.inputController.inputSummary,this.data={}}start(t){if(this.data.start=t,this.isSignificant()){var n,r;this.inputSummary.eventName==="keypress"&&this.inputSummary.textAdded&&((r=this.responder)===null||r===void 0||r.deleteInDirection("left")),this.selectionIsExpanded()||(this.insertPlaceholder(),this.requestRender()),this.range=(n=this.responder)===null||n===void 0?void 0:n.getSelectedRange()}}update(t){if(this.data.update=t,this.isSignificant()){const n=this.selectPlaceholder();n&&(this.forgetPlaceholder(),this.range=n)}}end(t){return this.data.end=t,this.isSignificant()?(this.forgetPlaceholder(),this.canApplyToDocument()?(this.setInputSummary({preferDocument:!0,didInput:!1}),(n=this.delegate)===null||n===void 0||n.inputControllerWillPerformTyping(),(r=this.responder)===null||r===void 0||r.setSelectedRange(this.range),(i=this.responder)===null||i===void 0||i.insertString(this.data.end),(l=this.responder)===null||l===void 0?void 0:l.setSelectedRange(this.range[0]+this.data.end.length)):this.data.start!=null||this.data.update!=null?(this.requestReparse(),this.inputController.reset()):void 0):this.inputController.reset();var n,r,i,l}getEndData(){return this.data.end}isEnded(){return this.getEndData()!=null}isSignificant(){return!f1.composesExistingText||this.inputSummary.didInput}canApplyToDocument(){var t,n;return((t=this.data.start)===null||t===void 0?void 0:t.length)===0&&((n=this.data.end)===null||n===void 0?void 0:n.length)>0&&this.range}}dn.proxyMethod("inputController.setInputSummary"),dn.proxyMethod("inputController.requestRender"),dn.proxyMethod("inputController.requestReparse"),dn.proxyMethod("responder?.selectionIsExpanded"),dn.proxyMethod("responder?.insertPlaceholder"),dn.proxyMethod("responder?.selectPlaceholder"),dn.proxyMethod("responder?.forgetPlaceholder");class ur extends ii{constructor(){super(...arguments),this.render=this.render.bind(this)}elementDidMutate(){return this.scheduledRender?this.composing?(t=this.delegate)===null||t===void 0||(n=t.inputControllerDidAllowUnhandledInput)===null||n===void 0?void 0:n.call(t):void 0:this.reparse();var t,n}scheduleRender(){return this.scheduledRender?this.scheduledRender:this.scheduledRender=requestAnimationFrame(this.render)}render(){var t,n;cancelAnimationFrame(this.scheduledRender),this.scheduledRender=null,this.composing||(n=this.delegate)===null||n===void 0||n.render(),(t=this.afterRender)===null||t===void 0||t.call(this),this.afterRender=null}reparse(){var t;return(t=this.delegate)===null||t===void 0?void 0:t.reparse()}insertString(){var t;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0;return(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),this.withTargetDOMRange((function(){var i;return(i=this.responder)===null||i===void 0?void 0:i.insertString(n,r)}))}toggleAttributeIfSupported(t){var n;if(Ui().includes(t))return(n=this.delegate)===null||n===void 0||n.inputControllerWillPerformFormatting(t),this.withTargetDOMRange((function(){var r;return(r=this.responder)===null||r===void 0?void 0:r.toggleCurrentAttribute(t)}))}activateAttributeIfSupported(t,n){var r;if(Ui().includes(t))return(r=this.delegate)===null||r===void 0||r.inputControllerWillPerformFormatting(t),this.withTargetDOMRange((function(){var i;return(i=this.responder)===null||i===void 0?void 0:i.setCurrentAttribute(t,n)}))}deleteInDirection(t){let{recordUndoEntry:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordUndoEntry:!0};var r;n&&((r=this.delegate)===null||r===void 0||r.inputControllerWillPerformTyping());const i=()=>{var a;return(a=this.responder)===null||a===void 0?void 0:a.deleteInDirection(t)},l=this.getTargetDOMRange({minLength:this.composing?1:2});return l?this.withTargetDOMRange(l,i):i()}withTargetDOMRange(t,n){var r;return typeof t=="function"&&(n=t,t=this.getTargetDOMRange()),t?(r=this.responder)===null||r===void 0?void 0:r.withTargetDOMRange(t,n.bind(this)):(In.reset(),n.call(this))}getTargetDOMRange(){var t,n;let{minLength:r}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{minLength:0};const i=(t=(n=this.event).getTargetRanges)===null||t===void 0?void 0:t.call(n);if(i&&i.length){const l=w1(i[0]);if(r===0||l.toString().length>=r)return l}}withEvent(t,n){let r;this.event=t;try{r=n.call(this)}finally{this.event=null}return r}}ht(ur,"events",{keydown(e){if(fd(e)){var t;const n=C1(e);(t=this.delegate)!==null&&t!==void 0&&t.inputControllerDidReceiveKeyboardCommand(n)&&e.preventDefault()}else{let n=e.key;e.altKey&&(n+="+Alt"),e.shiftKey&&(n+="+Shift");const r=this.constructor.keys[n];if(r)return this.withEvent(e,r)}},paste(e){var t;let n;const r=(t=e.clipboardData)===null||t===void 0?void 0:t.getData("URL");return qd(e)?(e.preventDefault(),this.attachFiles(e.clipboardData.files)):k1(e)?(e.preventDefault(),n={type:"text/plain",string:e.clipboardData.getData("text/plain")},(i=this.delegate)===null||i===void 0||i.inputControllerWillPaste(n),(l=this.responder)===null||l===void 0||l.insertString(n.string),this.render(),(a=this.delegate)===null||a===void 0?void 0:a.inputControllerDidPaste(n)):r?(e.preventDefault(),n={type:"text/html",html:this.createLinkHTML(r)},(o=this.delegate)===null||o===void 0||o.inputControllerWillPaste(n),(s=this.responder)===null||s===void 0||s.insertHTML(n.html),this.render(),(u=this.delegate)===null||u===void 0?void 0:u.inputControllerDidPaste(n)):void 0;var i,l,a,o,s,u},beforeinput(e){const t=this.constructor.inputTypes[e.inputType],n=(r=e,!(!/iPhone|iPad/.test(navigator.userAgent)||r.inputType&&r.inputType!=="insertParagraph"));var r;t&&(this.withEvent(e,t),n||this.scheduleRender()),n&&this.render()},input(e){In.reset()},dragstart(e){var t,n;(t=this.responder)!==null&&t!==void 0&&t.selectionContainsAttachments()&&(e.dataTransfer.setData("application/x-trix-dragging",!0),this.dragging={range:(n=this.responder)===null||n===void 0?void 0:n.getSelectedRange(),point:Ii(e)})},dragenter(e){Ri(e)&&e.preventDefault()},dragover(e){if(this.dragging){e.preventDefault();const n=Ii(e);var t;if(!Vn(n,this.dragging.point))return this.dragging.point=n,(t=this.responder)===null||t===void 0?void 0:t.setLocationRangeFromPointRange(n)}else Ri(e)&&e.preventDefault()},drop(e){var t,n;if(this.dragging)return e.preventDefault(),(t=this.delegate)===null||t===void 0||t.inputControllerWillMoveText(),(n=this.responder)===null||n===void 0||n.moveTextFromRange(this.dragging.range),this.dragging=null,this.scheduleRender();if(Ri(e)){var r;e.preventDefault();const i=Ii(e);return(r=this.responder)===null||r===void 0||r.setLocationRangeFromPointRange(i),this.attachFiles(e.dataTransfer.files)}},dragend(){var e;this.dragging&&((e=this.responder)===null||e===void 0||e.setSelectedRange(this.dragging.range),this.dragging=null)},compositionend(e){this.composing&&(this.composing=!1,yr.recentAndroid||this.scheduleRender())}}),ht(ur,"keys",{ArrowLeft(){var e,t;if((e=this.responder)!==null&&e!==void 0&&e.shouldManageMovingCursorInDirection("backward"))return this.event.preventDefault(),(t=this.responder)===null||t===void 0?void 0:t.moveCursorInDirection("backward")},ArrowRight(){var e,t;if((e=this.responder)!==null&&e!==void 0&&e.shouldManageMovingCursorInDirection("forward"))return this.event.preventDefault(),(t=this.responder)===null||t===void 0?void 0:t.moveCursorInDirection("forward")},Backspace(){var e,t,n;if((e=this.responder)!==null&&e!==void 0&&e.shouldManageDeletingInDirection("backward"))return this.event.preventDefault(),(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0||n.deleteInDirection("backward"),this.render()},Tab(){var e,t;if((e=this.responder)!==null&&e!==void 0&&e.canIncreaseNestingLevel())return this.event.preventDefault(),(t=this.responder)===null||t===void 0||t.increaseNestingLevel(),this.render()},"Tab+Shift"(){var e,t;if((e=this.responder)!==null&&e!==void 0&&e.canDecreaseNestingLevel())return this.event.preventDefault(),(t=this.responder)===null||t===void 0||t.decreaseNestingLevel(),this.render()}}),ht(ur,"inputTypes",{deleteByComposition(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteByCut(){return this.deleteInDirection("backward")},deleteByDrag(){return this.event.preventDefault(),this.withTargetDOMRange((function(){var e;this.deleteByDragRange=(e=this.responder)===null||e===void 0?void 0:e.getSelectedRange()}))},deleteCompositionText(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteContent(){return this.deleteInDirection("backward")},deleteContentBackward(){return this.deleteInDirection("backward")},deleteContentForward(){return this.deleteInDirection("forward")},deleteEntireSoftLine(){return this.deleteInDirection("forward")},deleteHardLineBackward(){return this.deleteInDirection("backward")},deleteHardLineForward(){return this.deleteInDirection("forward")},deleteSoftLineBackward(){return this.deleteInDirection("backward")},deleteSoftLineForward(){return this.deleteInDirection("forward")},deleteWordBackward(){return this.deleteInDirection("backward")},deleteWordForward(){return this.deleteInDirection("forward")},formatBackColor(){return this.activateAttributeIfSupported("backgroundColor",this.event.data)},formatBold(){return this.toggleAttributeIfSupported("bold")},formatFontColor(){return this.activateAttributeIfSupported("color",this.event.data)},formatFontName(){return this.activateAttributeIfSupported("font",this.event.data)},formatIndent(){var e;if((e=this.responder)!==null&&e!==void 0&&e.canIncreaseNestingLevel())return this.withTargetDOMRange((function(){var t;return(t=this.responder)===null||t===void 0?void 0:t.increaseNestingLevel()}))},formatItalic(){return this.toggleAttributeIfSupported("italic")},formatJustifyCenter(){return this.toggleAttributeIfSupported("justifyCenter")},formatJustifyFull(){return this.toggleAttributeIfSupported("justifyFull")},formatJustifyLeft(){return this.toggleAttributeIfSupported("justifyLeft")},formatJustifyRight(){return this.toggleAttributeIfSupported("justifyRight")},formatOutdent(){var e;if((e=this.responder)!==null&&e!==void 0&&e.canDecreaseNestingLevel())return this.withTargetDOMRange((function(){var t;return(t=this.responder)===null||t===void 0?void 0:t.decreaseNestingLevel()}))},formatRemove(){this.withTargetDOMRange((function(){for(const n in(e=this.responder)===null||e===void 0?void 0:e.getCurrentAttributes()){var e,t;(t=this.responder)===null||t===void 0||t.removeCurrentAttribute(n)}}))},formatSetBlockTextDirection(){return this.activateAttributeIfSupported("blockDir",this.event.data)},formatSetInlineTextDirection(){return this.activateAttributeIfSupported("textDir",this.event.data)},formatStrikeThrough(){return this.toggleAttributeIfSupported("strike")},formatSubscript(){return this.toggleAttributeIfSupported("sub")},formatSuperscript(){return this.toggleAttributeIfSupported("sup")},formatUnderline(){return this.toggleAttributeIfSupported("underline")},historyRedo(){var e;return(e=this.delegate)===null||e===void 0?void 0:e.inputControllerWillPerformRedo()},historyUndo(){var e;return(e=this.delegate)===null||e===void 0?void 0:e.inputControllerWillPerformUndo()},insertCompositionText(){return this.composing=!0,this.insertString(this.event.data)},insertFromComposition(){return this.composing=!1,this.insertString(this.event.data)},insertFromDrop(){const e=this.deleteByDragRange;var t;if(e)return this.deleteByDragRange=null,(t=this.delegate)===null||t===void 0||t.inputControllerWillMoveText(),this.withTargetDOMRange((function(){var n;return(n=this.responder)===null||n===void 0?void 0:n.moveTextFromRange(e)}))},insertFromPaste(){const{dataTransfer:e}=this.event,t={dataTransfer:e},n=e.getData("URL"),r=e.getData("text/html");if(n){var i;let s;this.event.preventDefault(),t.type="text/html";const u=e.getData("public.url-name");s=u?ml(u).trim():n,t.html=this.createLinkHTML(n,s),(i=this.delegate)===null||i===void 0||i.inputControllerWillPaste(t),this.withTargetDOMRange((function(){var f;return(f=this.responder)===null||f===void 0?void 0:f.insertHTML(t.html)})),this.afterRender=()=>{var f;return(f=this.delegate)===null||f===void 0?void 0:f.inputControllerDidPaste(t)}}else if(pd(e)){var l;t.type="text/plain",t.string=e.getData("text/plain"),(l=this.delegate)===null||l===void 0||l.inputControllerWillPaste(t),this.withTargetDOMRange((function(){var s;return(s=this.responder)===null||s===void 0?void 0:s.insertString(t.string)})),this.afterRender=()=>{var s;return(s=this.delegate)===null||s===void 0?void 0:s.inputControllerDidPaste(t)}}else if(y1(this.event)){var a;t.type="File",t.file=e.files[0],(a=this.delegate)===null||a===void 0||a.inputControllerWillPaste(t),this.withTargetDOMRange((function(){var s;return(s=this.responder)===null||s===void 0?void 0:s.insertFile(t.file)})),this.afterRender=()=>{var s;return(s=this.delegate)===null||s===void 0?void 0:s.inputControllerDidPaste(t)}}else if(r){var o;this.event.preventDefault(),t.type="text/html",t.html=r,(o=this.delegate)===null||o===void 0||o.inputControllerWillPaste(t),this.withTargetDOMRange((function(){var s;return(s=this.responder)===null||s===void 0?void 0:s.insertHTML(t.html)})),this.afterRender=()=>{var s;return(s=this.delegate)===null||s===void 0?void 0:s.inputControllerDidPaste(t)}}},insertFromYank(){return this.insertString(this.event.data)},insertLineBreak(){return this.insertString(`
`)},insertLink(){return this.activateAttributeIfSupported("href",this.event.data)},insertOrderedList(){return this.toggleAttributeIfSupported("number")},insertParagraph(){var e;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.withTargetDOMRange((function(){var t;return(t=this.responder)===null||t===void 0?void 0:t.insertLineBreak()}))},insertReplacementText(){const e=this.event.dataTransfer.getData("text/plain"),t=this.event.getTargetRanges()[0];this.withTargetDOMRange(t,(()=>{this.insertString(e,{updatePosition:!1})}))},insertText(){var e;return this.insertString(this.event.data||((e=this.event.dataTransfer)===null||e===void 0?void 0:e.getData("text/plain")))},insertTranspose(){return this.insertString(this.event.data)},insertUnorderedList(){return this.toggleAttributeIfSupported("bullet")}});const w1=function(e){const t=document.createRange();return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),t},Ri=e=>{var t;return Array.from(((t=e.dataTransfer)===null||t===void 0?void 0:t.types)||[]).includes("Files")},y1=e=>{var t;return((t=e.dataTransfer.files)===null||t===void 0?void 0:t[0])&&!qd(e)&&!(n=>{let{dataTransfer:r}=n;return r.types.includes("Files")&&r.types.includes("text/html")&&r.getData("text/html").includes("urn:schemas-microsoft-com:office:office")})(e)},qd=function(e){const t=e.clipboardData;if(t)return Array.from(t.types).filter((n=>n.match(/file/i))).length===t.types.length&&t.files.length>=1},k1=function(e){const t=e.clipboardData;if(t)return t.types.includes("text/plain")&&t.types.length===1},C1=function(e){const t=[];return e.altKey&&t.push("alt"),e.shiftKey&&t.push("shift"),t.push(e.key),t},Ii=e=>({x:e.clientX,y:e.clientY}),Gi="[data-trix-attribute]",Ji="[data-trix-action]",A1="".concat(Gi,", ").concat(Ji),ai="[data-trix-dialog]",E1="".concat(ai,"[data-trix-active]"),L1="".concat(ai," [data-trix-method]"),mo="".concat(ai," [data-trix-input]"),ho=(e,t)=>(t||(t=Fn(e)),e.querySelector("[data-trix-input][name='".concat(t,"']"))),bo=e=>e.getAttribute("data-trix-action"),Fn=e=>e.getAttribute("data-trix-attribute")||e.getAttribute("data-trix-dialog-attribute");class Kd extends it{constructor(t){super(t),this.didClickActionButton=this.didClickActionButton.bind(this),this.didClickAttributeButton=this.didClickAttributeButton.bind(this),this.didClickDialogButton=this.didClickDialogButton.bind(this),this.didKeyDownDialogInput=this.didKeyDownDialogInput.bind(this),this.element=t,this.attributes={},this.actions={},this.resetDialogInputs(),_e("mousedown",{onElement:this.element,matchingSelector:Ji,withCallback:this.didClickActionButton}),_e("mousedown",{onElement:this.element,matchingSelector:Gi,withCallback:this.didClickAttributeButton}),_e("click",{onElement:this.element,matchingSelector:A1,preventDefault:!0}),_e("click",{onElement:this.element,matchingSelector:L1,withCallback:this.didClickDialogButton}),_e("keydown",{onElement:this.element,matchingSelector:mo,withCallback:this.didKeyDownDialogInput})}didClickActionButton(t,n){var r;(r=this.delegate)===null||r===void 0||r.toolbarDidClickButton(),t.preventDefault();const i=bo(n);return this.getDialog(i)?this.toggleDialog(i):(l=this.delegate)===null||l===void 0?void 0:l.toolbarDidInvokeAction(i,n);var l}didClickAttributeButton(t,n){var r;(r=this.delegate)===null||r===void 0||r.toolbarDidClickButton(),t.preventDefault();const i=Fn(n);var l;return this.getDialog(i)?this.toggleDialog(i):(l=this.delegate)===null||l===void 0||l.toolbarDidToggleAttribute(i),this.refreshAttributeButtons()}didClickDialogButton(t,n){const r=gn(n,{matchingSelector:ai});return this[n.getAttribute("data-trix-method")].call(this,r)}didKeyDownDialogInput(t,n){if(t.keyCode===13){t.preventDefault();const r=n.getAttribute("name"),i=this.getDialog(r);this.setAttribute(i)}if(t.keyCode===27)return t.preventDefault(),this.hideDialog()}updateActions(t){return this.actions=t,this.refreshActionButtons()}refreshActionButtons(){return this.eachActionButton(((t,n)=>{t.disabled=this.actions[n]===!1}))}eachActionButton(t){return Array.from(this.element.querySelectorAll(Ji)).map((n=>t(n,bo(n))))}updateAttributes(t){return this.attributes=t,this.refreshAttributeButtons()}refreshAttributeButtons(){return this.eachAttributeButton(((t,n)=>(t.disabled=this.attributes[n]===!1,this.attributes[n]||this.dialogIsVisible(n)?(t.setAttribute("data-trix-active",""),t.classList.add("trix-active")):(t.removeAttribute("data-trix-active"),t.classList.remove("trix-active")))))}eachAttributeButton(t){return Array.from(this.element.querySelectorAll(Gi)).map((n=>t(n,Fn(n))))}applyKeyboardCommand(t){const n=JSON.stringify(t.sort());for(const r of Array.from(this.element.querySelectorAll("[data-trix-key]"))){const i=r.getAttribute("data-trix-key").split("+");if(JSON.stringify(i.sort())===n)return ar("mousedown",{onElement:r}),!0}return!1}dialogIsVisible(t){const n=this.getDialog(t);if(n)return n.hasAttribute("data-trix-active")}toggleDialog(t){return this.dialogIsVisible(t)?this.hideDialog():this.showDialog(t)}showDialog(t){var n,r;this.hideDialog(),(n=this.delegate)===null||n===void 0||n.toolbarWillShowDialog();const i=this.getDialog(t);i.setAttribute("data-trix-active",""),i.classList.add("trix-active"),Array.from(i.querySelectorAll("input[disabled]")).forEach((a=>{a.removeAttribute("disabled")}));const l=Fn(i);if(l){const a=ho(i,t);a&&(a.value=this.attributes[l]||"",a.select())}return(r=this.delegate)===null||r===void 0?void 0:r.toolbarDidShowDialog(t)}setAttribute(t){var n;const r=Fn(t),i=ho(t,r);return!i.willValidate||(i.setCustomValidity(""),i.checkValidity()&&this.isSafeAttribute(i))?((n=this.delegate)===null||n===void 0||n.toolbarDidUpdateAttribute(r,i.value),this.hideDialog()):(i.setCustomValidity("Invalid value"),i.setAttribute("data-trix-validate",""),i.classList.add("trix-validate"),i.focus())}isSafeAttribute(t){return!t.hasAttribute("data-trix-validate-href")||Hr.isValidAttribute("a","href",t.value)}removeAttribute(t){var n;const r=Fn(t);return(n=this.delegate)===null||n===void 0||n.toolbarDidRemoveAttribute(r),this.hideDialog()}hideDialog(){const t=this.element.querySelector(E1);var n;if(t)return t.removeAttribute("data-trix-active"),t.classList.remove("trix-active"),this.resetDialogInputs(),(n=this.delegate)===null||n===void 0?void 0:n.toolbarDidHideDialog((r=>r.getAttribute("data-trix-dialog"))(t))}resetDialogInputs(){Array.from(this.element.querySelectorAll(mo)).forEach((t=>{t.setAttribute("disabled","disabled"),t.removeAttribute("data-trix-validate"),t.classList.remove("trix-validate")}))}getDialog(t){return this.element.querySelector("[data-trix-dialog=".concat(t,"]"))}}class cr extends jd{constructor(t){let{editorElement:n,document:r,html:i}=t;super(...arguments),this.editorElement=n,this.selectionManager=new Cn(this.editorElement),this.selectionManager.delegate=this,this.composition=new cn,this.composition.delegate=this,this.attachmentManager=new Bd(this.composition.getAttachments()),this.attachmentManager.delegate=this,this.inputController=pl.getLevel()===2?new ur(this.editorElement):new tn(this.editorElement),this.inputController.delegate=this,this.inputController.responder=this.composition,this.compositionController=new Ud(this.editorElement,this.composition),this.compositionController.delegate=this,this.toolbarController=new Kd(this.editorElement.toolbarElement),this.toolbarController.delegate=this,this.editor=new $d(this.composition,this.selectionManager,this.editorElement),r?this.editor.loadDocument(r):this.editor.loadHTML(i)}registerSelectionManager(){return In.registerSelectionManager(this.selectionManager)}unregisterSelectionManager(){return In.unregisterSelectionManager(this.selectionManager)}render(){return this.compositionController.render()}reparse(){return this.composition.replaceHTML(this.editorElement.innerHTML)}compositionDidChangeDocument(t){if(this.notifyEditorElement("document-change"),!this.handlingInput)return this.render()}compositionDidChangeCurrentAttributes(t){return this.currentAttributes=t,this.toolbarController.updateAttributes(this.currentAttributes),this.updateCurrentActions(),this.notifyEditorElement("attributes-change",{attributes:this.currentAttributes})}compositionDidPerformInsertionAtRange(t){this.pasting&&(this.pastedRange=t)}compositionShouldAcceptFile(t){return this.notifyEditorElement("file-accept",{file:t})}compositionDidAddAttachment(t){const n=this.attachmentManager.manageAttachment(t);return this.notifyEditorElement("attachment-add",{attachment:n})}compositionDidEditAttachment(t){this.compositionController.rerenderViewForObject(t);const n=this.attachmentManager.manageAttachment(t);return this.notifyEditorElement("attachment-edit",{attachment:n}),this.notifyEditorElement("change")}compositionDidChangeAttachmentPreviewURL(t){return this.compositionController.invalidateViewForObject(t),this.notifyEditorElement("change")}compositionDidRemoveAttachment(t){const n=this.attachmentManager.unmanageAttachment(t);return this.notifyEditorElement("attachment-remove",{attachment:n})}compositionDidStartEditingAttachment(t,n){return this.attachmentLocationRange=this.composition.document.getLocationRangeOfAttachment(t),this.compositionController.installAttachmentEditorForAttachment(t,n),this.selectionManager.setLocationRange(this.attachmentLocationRange)}compositionDidStopEditingAttachment(t){this.compositionController.uninstallAttachmentEditor(),this.attachmentLocationRange=null}compositionDidRequestChangingSelectionToLocationRange(t){if(!this.loadingSnapshot||this.isFocused())return this.requestedLocationRange=t,this.compositionRevisionWhenLocationRangeRequested=this.composition.revision,this.handlingInput?void 0:this.render()}compositionWillLoadSnapshot(){this.loadingSnapshot=!0}compositionDidLoadSnapshot(){this.compositionController.refreshViewCache(),this.render(),this.loadingSnapshot=!1}getSelectionManager(){return this.selectionManager}attachmentManagerDidRequestRemovalOfAttachment(t){return this.removeAttachment(t)}compositionControllerWillSyncDocumentView(){return this.inputController.editorWillSyncDocumentView(),this.selectionManager.lock(),this.selectionManager.clearSelection()}compositionControllerDidSyncDocumentView(){return this.inputController.editorDidSyncDocumentView(),this.selectionManager.unlock(),this.updateCurrentActions(),this.notifyEditorElement("sync")}compositionControllerDidRender(){this.requestedLocationRange&&(this.compositionRevisionWhenLocationRangeRequested===this.composition.revision&&this.selectionManager.setLocationRange(this.requestedLocationRange),this.requestedLocationRange=null,this.compositionRevisionWhenLocationRangeRequested=null),this.renderedCompositionRevision!==this.composition.revision&&(this.runEditorFilters(),this.composition.updateCurrentAttributes(),this.notifyEditorElement("render")),this.renderedCompositionRevision=this.composition.revision}compositionControllerDidFocus(){return this.isFocusedInvisibly()&&this.setLocationRange({index:0,offset:0}),this.toolbarController.hideDialog(),this.notifyEditorElement("focus")}compositionControllerDidBlur(){return this.notifyEditorElement("blur")}compositionControllerDidSelectAttachment(t,n){return this.toolbarController.hideDialog(),this.composition.editAttachment(t,n)}compositionControllerDidRequestDeselectingAttachment(t){const n=this.attachmentLocationRange||this.composition.document.getLocationRangeOfAttachment(t);return this.selectionManager.setLocationRange(n[1])}compositionControllerWillUpdateAttachment(t){return this.editor.recordUndoEntry("Edit Attachment",{context:t.id,consolidatable:!0})}compositionControllerDidRequestRemovalOfAttachment(t){return this.removeAttachment(t)}inputControllerWillHandleInput(){this.handlingInput=!0,this.requestedRender=!1}inputControllerDidRequestRender(){this.requestedRender=!0}inputControllerDidHandleInput(){if(this.handlingInput=!1,this.requestedRender)return this.requestedRender=!1,this.render()}inputControllerDidAllowUnhandledInput(){return this.notifyEditorElement("change")}inputControllerDidRequestReparse(){return this.reparse()}inputControllerWillPerformTyping(){return this.recordTypingUndoEntry()}inputControllerWillPerformFormatting(t){return this.recordFormattingUndoEntry(t)}inputControllerWillCutText(){return this.editor.recordUndoEntry("Cut")}inputControllerWillPaste(t){return this.editor.recordUndoEntry("Paste"),this.pasting=!0,this.notifyEditorElement("before-paste",{paste:t})}inputControllerDidPaste(t){return t.range=this.pastedRange,this.pastedRange=null,this.pasting=null,this.notifyEditorElement("paste",{paste:t})}inputControllerWillMoveText(){return this.editor.recordUndoEntry("Move")}inputControllerWillAttachFiles(){return this.editor.recordUndoEntry("Drop Files")}inputControllerWillPerformUndo(){return this.editor.undo()}inputControllerWillPerformRedo(){return this.editor.redo()}inputControllerDidReceiveKeyboardCommand(t){return this.toolbarController.applyKeyboardCommand(t)}inputControllerDidStartDrag(){this.locationRangeBeforeDrag=this.selectionManager.getLocationRange()}inputControllerDidReceiveDragOverPoint(t){return this.selectionManager.setLocationRangeFromPointRange(t)}inputControllerDidCancelDrag(){this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),this.locationRangeBeforeDrag=null}locationRangeDidChange(t){return this.composition.updateCurrentAttributes(),this.updateCurrentActions(),this.attachmentLocationRange&&!Pr(this.attachmentLocationRange,t)&&this.composition.stopEditingAttachment(),this.notifyEditorElement("selection-change")}toolbarDidClickButton(){if(!this.getLocationRange())return this.setLocationRange({index:0,offset:0})}toolbarDidInvokeAction(t,n){return this.invokeAction(t,n)}toolbarDidToggleAttribute(t){if(this.recordFormattingUndoEntry(t),this.composition.toggleCurrentAttribute(t),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarDidUpdateAttribute(t,n){if(this.recordFormattingUndoEntry(t),this.composition.setCurrentAttribute(t,n),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarDidRemoveAttribute(t){if(this.recordFormattingUndoEntry(t),this.composition.removeCurrentAttribute(t),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarWillShowDialog(t){return this.composition.expandSelectionForEditing(),this.freezeSelection()}toolbarDidShowDialog(t){return this.notifyEditorElement("toolbar-dialog-show",{dialogName:t})}toolbarDidHideDialog(t){return this.thawSelection(),this.editorElement.focus(),this.notifyEditorElement("toolbar-dialog-hide",{dialogName:t})}freezeSelection(){if(!this.selectionFrozen)return this.selectionManager.lock(),this.composition.freezeSelection(),this.selectionFrozen=!0,this.render()}thawSelection(){if(this.selectionFrozen)return this.composition.thawSelection(),this.selectionManager.unlock(),this.selectionFrozen=!1,this.render()}canInvokeAction(t){return!!this.actionIsExternal(t)||!((n=this.actions[t])===null||n===void 0||(n=n.test)===null||n===void 0||!n.call(this));var n}invokeAction(t,n){return this.actionIsExternal(t)?this.notifyEditorElement("action-invoke",{actionName:t,invokingElement:n}):(r=this.actions[t])===null||r===void 0||(r=r.perform)===null||r===void 0?void 0:r.call(this);var r}actionIsExternal(t){return/^x-./.test(t)}getCurrentActions(){const t={};for(const n in this.actions)t[n]=this.canInvokeAction(n);return t}updateCurrentActions(){const t=this.getCurrentActions();if(!Vn(t,this.currentActions))return this.currentActions=t,this.toolbarController.updateActions(this.currentActions),this.notifyEditorElement("actions-change",{actions:this.currentActions})}runEditorFilters(){let t=this.composition.getSnapshot();if(Array.from(this.editor.filters).forEach((i=>{const{document:l,selectedRange:a}=t;t=i.call(this.editor,t)||{},t.document||(t.document=l),t.selectedRange||(t.selectedRange=a)})),n=t,r=this.composition.getSnapshot(),!Pr(n.selectedRange,r.selectedRange)||!n.document.isEqualTo(r.document))return this.composition.loadSnapshot(t);var n,r}updateInputElement(){const t=(function(n,r){const i=e1[r];if(i)return i(n);throw new Error("unknown content type: ".concat(r))})(this.compositionController.getSerializableElement(),"text/html");return this.editorElement.setFormValue(t)}notifyEditorElement(t,n){switch(t){case"document-change":this.documentChangedSinceLastRender=!0;break;case"render":this.documentChangedSinceLastRender&&(this.documentChangedSinceLastRender=!1,this.notifyEditorElement("change"));break;case"change":case"attachment-add":case"attachment-edit":case"attachment-remove":this.updateInputElement()}return this.editorElement.notify(t,n)}removeAttachment(t){return this.editor.recordUndoEntry("Delete Attachment"),this.composition.removeAttachment(t),this.render()}recordFormattingUndoEntry(t){const n=Xe(t),r=this.selectionManager.getLocationRange();if(n||!nn(r))return this.editor.recordUndoEntry("Formatting",{context:this.getUndoContext(),consolidatable:!0})}recordTypingUndoEntry(){return this.editor.recordUndoEntry("Typing",{context:this.getUndoContext(this.currentAttributes),consolidatable:!0})}getUndoContext(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return[this.getLocationContext(),this.getTimeContext(),...Array.from(n)]}getLocationContext(){const t=this.selectionManager.getLocationRange();return nn(t)?t[0].index:t}getTimeContext(){return Pi.interval>0?Math.floor(new Date().getTime()/Pi.interval):0}isFocused(){var t;return this.editorElement===((t=this.editorElement.ownerDocument)===null||t===void 0?void 0:t.activeElement)}isFocusedInvisibly(){return this.isFocused()&&!this.getLocationRange()}get actions(){return this.constructor.actions}}ht(cr,"actions",{undo:{test(){return this.editor.canUndo()},perform(){return this.editor.undo()}},redo:{test(){return this.editor.canRedo()},perform(){return this.editor.redo()}},link:{test(){return this.editor.canActivateAttribute("href")}},increaseNestingLevel:{test(){return this.editor.canIncreaseNestingLevel()},perform(){return this.editor.increaseNestingLevel()&&this.render()}},decreaseNestingLevel:{test(){return this.editor.canDecreaseNestingLevel()},perform(){return this.editor.decreaseNestingLevel()&&this.render()}},attachFiles:{test:()=>!0,perform(){return pl.pickFiles(this.editor.insertFiles)}}}),cr.proxyMethod("getSelectionManager().setLocationRange"),cr.proxyMethod("getSelectionManager().getLocationRange");var x1=Object.freeze({__proto__:null,AttachmentEditorController:Hd,CompositionController:Ud,Controller:jd,EditorController:cr,InputController:ii,Level0InputController:tn,Level2InputController:ur,ToolbarController:Kd}),S1=Object.freeze({__proto__:null,MutationObserver:Vd,SelectionChangeObserver:gd}),T1=Object.freeze({__proto__:null,FileVerificationOperation:_d,ImagePreloadOperation:Td});cd("trix-toolbar",`%t {
  display: block;
}

%t {
  white-space: nowrap;
}

%t [data-trix-dialog] {
  display: none;
}

%t [data-trix-dialog][data-trix-active] {
  display: block;
}

%t [data-trix-dialog] [data-trix-validate]:invalid {
  background-color: #ffdddd;
}`);class Gd extends HTMLElement{connectedCallback(){this.innerHTML===""&&(this.innerHTML=ud.getDefaultHTML())}}let R1=0;const I1=function(e){if(!e.hasAttribute("contenteditable"))return e.setAttribute("contenteditable",""),(function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return n.times=1,_e(t,n)})("focus",{onElement:e,withCallback:()=>B1(e)})},B1=function(e){return M1(e),D1()},M1=function(e){var t,n;if((t=(n=document).queryCommandSupported)!==null&&t!==void 0&&t.call(n,"enableObjectResizing"))return document.execCommand("enableObjectResizing",!1,!1),_e("mscontrolselect",{onElement:e,preventDefault:!0})},D1=function(e){var t,n;if((t=(n=document).queryCommandSupported)!==null&&t!==void 0&&t.call(n,"DefaultParagraphSeparator")){const{tagName:r}=mt.default;if(["div","p"].includes(r))return document.execCommand("DefaultParagraphSeparator",!1,r)}},wo=yr.forcesObjectResizing?{display:"inline",width:"auto"}:{display:"inline-block",width:"1px"};cd("trix-editor",`%t {
    display: block;
}

%t:empty::before {
    content: attr(placeholder);
    color: graytext;
    cursor: text;
    pointer-events: none;
    white-space: pre-line;
}

%t a[contenteditable=false] {
    cursor: text;
}

%t img {
    max-width: 100%;
    height: auto;
}

%t `.concat(Ln,` figcaption textarea {
    resize: none;
}

%t `).concat(Ln,` figcaption textarea.trix-autoresize-clone {
    position: absolute;
    left: -9999px;
    max-height: 0px;
}

%t `).concat(Ln,` figcaption[data-trix-placeholder]:empty::before {
    content: attr(data-trix-placeholder);
    color: graytext;
}

%t [data-trix-cursor-target] {
    display: `).concat(wo.display,` !important;
    width: `).concat(wo.width,` !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
}

%t [data-trix-cursor-target=left] {
    vertical-align: top !important;
    margin-left: -1px !important;
}

%t [data-trix-cursor-target=right] {
    vertical-align: bottom !important;
    margin-right: -1px !important;
}`));var en=new WeakMap,tr=new WeakSet;class O1{constructor(t){var n,r;Sd(n=this,r=tr),r.add(n),dr(this,en,{writable:!0,value:void 0}),this.element=t,wl(this,en,t.attachInternals())}connectedCallback(){xr(this,tr,Sr).call(this)}disconnectedCallback(){}get labels(){return Ne(this,en).labels}get disabled(){var t;return(t=this.element.inputElement)===null||t===void 0?void 0:t.disabled}set disabled(t){this.element.toggleAttribute("disabled",t)}get required(){return this.element.hasAttribute("required")}set required(t){this.element.toggleAttribute("required",t),xr(this,tr,Sr).call(this)}get validity(){return Ne(this,en).validity}get validationMessage(){return Ne(this,en).validationMessage}get willValidate(){return Ne(this,en).willValidate}setFormValue(t){xr(this,tr,Sr).call(this)}checkValidity(){return Ne(this,en).checkValidity()}reportValidity(){return Ne(this,en).reportValidity()}setCustomValidity(t){xr(this,tr,Sr).call(this,t)}}function Sr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const{required:t,value:n}=this.element,r=t&&!n,i=!!e,l=ke("input",{required:t}),a=e||l.validationMessage;Ne(this,en).setValidity({valueMissing:r,customError:i},a)}var Bi=new WeakMap,Mi=new WeakMap,Di=new WeakMap;class $1{constructor(t){dr(this,Bi,{writable:!0,value:void 0}),dr(this,Mi,{writable:!0,value:n=>{n.defaultPrevented||n.target===this.element.form&&this.element.reset()}}),dr(this,Di,{writable:!0,value:n=>{if(n.defaultPrevented||this.element.contains(n.target))return;const r=gn(n.target,{matchingSelector:"label"});r&&Array.from(this.labels).includes(r)&&this.element.focus()}}),this.element=t}connectedCallback(){wl(this,Bi,(function(t){if(t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby"))return;const n=function(){const r=Array.from(t.labels).map((l=>{if(!l.contains(t))return l.textContent})).filter((l=>l)),i=r.join(" ");return i?t.setAttribute("aria-label",i):t.removeAttribute("aria-label")};return n(),_e("focus",{onElement:t,withCallback:n})})(this.element)),window.addEventListener("reset",Ne(this,Mi),!1),window.addEventListener("click",Ne(this,Di),!1)}disconnectedCallback(){var t;(t=Ne(this,Bi))===null||t===void 0||t.destroy(),window.removeEventListener("reset",Ne(this,Mi),!1),window.removeEventListener("click",Ne(this,Di),!1)}get labels(){const t=[];this.element.id&&this.element.ownerDocument&&t.push(...Array.from(this.element.ownerDocument.querySelectorAll("label[for='".concat(this.element.id,"']"))||[]));const n=gn(this.element,{matchingSelector:"label"});return n&&[this.element,null].includes(n.control)&&t.push(n),t}get disabled(){return console.warn("This browser does not support the [disabled] attribute for trix-editor elements."),!1}set disabled(t){console.warn("This browser does not support the [disabled] attribute for trix-editor elements.")}get required(){return console.warn("This browser does not support the [required] attribute for trix-editor elements."),!1}set required(t){console.warn("This browser does not support the [required] attribute for trix-editor elements.")}get validity(){return console.warn("This browser does not support the validity property for trix-editor elements."),null}get validationMessage(){return console.warn("This browser does not support the validationMessage property for trix-editor elements."),""}get willValidate(){return console.warn("This browser does not support the willValidate property for trix-editor elements."),!1}setFormValue(t){}checkValidity(){return console.warn("This browser does not support checkValidity() for trix-editor elements."),!0}reportValidity(){return console.warn("This browser does not support reportValidity() for trix-editor elements."),!0}setCustomValidity(t){console.warn("This browser does not support setCustomValidity(validationMessage) for trix-editor elements.")}}var st=new WeakMap;class jr extends HTMLElement{constructor(){super(),dr(this,st,{writable:!0,value:void 0}),wl(this,st,this.constructor.formAssociated?new O1(this):new $1(this))}get trixId(){return this.hasAttribute("trix-id")?this.getAttribute("trix-id"):(this.setAttribute("trix-id",++R1),this.trixId)}get labels(){return Ne(this,st).labels}get disabled(){return Ne(this,st).disabled}set disabled(t){Ne(this,st).disabled=t}get required(){return Ne(this,st).required}set required(t){Ne(this,st).required=t}get validity(){return Ne(this,st).validity}get validationMessage(){return Ne(this,st).validationMessage}get willValidate(){return Ne(this,st).willValidate}get type(){return this.localName}get toolbarElement(){var t;if(this.hasAttribute("toolbar"))return(t=this.ownerDocument)===null||t===void 0?void 0:t.getElementById(this.getAttribute("toolbar"));if(this.parentNode){const n="trix-toolbar-".concat(this.trixId);return this.setAttribute("toolbar",n),this.internalToolbar=ke("trix-toolbar",{id:n}),this.parentNode.insertBefore(this.internalToolbar,this),this.internalToolbar}}get form(){var t;return(t=this.inputElement)===null||t===void 0?void 0:t.form}get inputElement(){var t;if(this.hasAttribute("input"))return(t=this.ownerDocument)===null||t===void 0?void 0:t.getElementById(this.getAttribute("input"));if(this.parentNode){const n="trix-input-".concat(this.trixId);this.setAttribute("input",n);const r=ke("input",{type:"hidden",id:n});return this.parentNode.insertBefore(r,this.nextElementSibling),r}}get editor(){var t;return(t=this.editorController)===null||t===void 0?void 0:t.editor}get name(){var t;return(t=this.inputElement)===null||t===void 0?void 0:t.name}get value(){var t;return(t=this.inputElement)===null||t===void 0?void 0:t.value}set value(t){var n;this.defaultValue=t,(n=this.editor)===null||n===void 0||n.loadHTML(this.defaultValue)}attributeChangedCallback(t,n,r){t==="connected"&&this.isConnected&&n!=null&&n!==r&&requestAnimationFrame((()=>this.reconnect()))}notify(t,n){if(this.editorController)return ar("trix-".concat(t),{onElement:this,attributes:n})}setFormValue(t){this.inputElement&&(this.inputElement.value=t,Ne(this,st).setFormValue(t))}connectedCallback(){this.hasAttribute("data-trix-internal")||(I1(this),(function(t){t.hasAttribute("role")||t.setAttribute("role","textbox")})(this),this.editorController||(ar("trix-before-initialize",{onElement:this}),this.editorController=new cr({editorElement:this,html:this.defaultValue=this.value}),requestAnimationFrame((()=>ar("trix-initialize",{onElement:this})))),this.editorController.registerSelectionManager(),Ne(this,st).connectedCallback(),this.toggleAttribute("connected",!0),(function(t){!document.querySelector(":focus")&&t.hasAttribute("autofocus")&&document.querySelector("[autofocus]")===t&&t.focus()})(this))}disconnectedCallback(){var t;(t=this.editorController)===null||t===void 0||t.unregisterSelectionManager(),Ne(this,st).disconnectedCallback(),this.toggleAttribute("connected",!1)}reconnect(){this.removeInternalToolbar(),this.disconnectedCallback(),this.connectedCallback()}removeInternalToolbar(){var t;(t=this.internalToolbar)===null||t===void 0||t.remove(),this.internalToolbar=null}checkValidity(){return Ne(this,st).checkValidity()}reportValidity(){return Ne(this,st).reportValidity()}setCustomValidity(t){Ne(this,st).setCustomValidity(t)}formDisabledCallback(t){this.inputElement&&(this.inputElement.disabled=t),this.toggleAttribute("contenteditable",!t)}formResetCallback(){this.reset()}reset(){this.value=this.defaultValue}}ht(jr,"formAssociated","ElementInternals"in window),ht(jr,"observedAttributes",["connected"]);const Wr={VERSION:Fh,config:kr,core:t1,models:Nd,views:l1,controllers:x1,observers:S1,operations:T1,elements:Object.freeze({__proto__:null,TrixEditorElement:jr,TrixToolbarElement:Gd}),filters:Object.freeze({__proto__:null,Filter:Dd,attachmentGalleryFilter:Od})};Object.assign(Wr,Nd),window.Trix=Wr,setTimeout((function(){customElements.get("trix-toolbar")||customElements.define("trix-toolbar",Gd),customElements.get("trix-editor")||customElements.define("trix-editor",jr)}),0);typeof Wr?.elements?.TrixEditorElement?.formAssociated<"u"&&(Wr.elements.TrixEditorElement.formAssociated=!1);var kl={};const F1=["id","value"];function z1(e,t,n,r,i,l){const a=se("trix-editor");return d(),h("div",{class:p(e.classes.container)},[w("input",{id:`editor-input-${e.id}`,value:e.value,type:"hidden"},null,8,F1),xe(a,q(e.options,{onTrixChange:e.handleChange,onTrixBlur:e.handleBlur,onTrixFileAccept:e.handleFileAccept,onTrixAttachmentAdd:e.handleAttachmentAdd,ref:"trix$"}),null,16,["onTrixChange","onTrixBlur","onTrixFileAccept","onTrixAttachmentAdd"])],2)}kl.render=z1;kl.__file="themes/blank/templates/wrappers/EditorWrapper.vue";var Jd={name:"EditorWrapper",render:kl.render,data(){return{merge:!0,defaultClasses:{container:"",container_hideBold:"vf-editor-hide-bold",container_hideItalic:"vf-editor-hide-italic",container_hideStrike:"vf-editor-hide-strike",container_hideLink:"vf-editor-hide-link",container_hideHeading:"vf-editor-hide-heading",container_hideQuote:"vf-editor-hide-quote",container_hideCode:"vf-editor-hide-code",container_hideBulletList:"vf-editor-hide-bullet-list",container_hideNumberList:"vf-editor-hide-number-list",container_hideDecreaseNesting:"vf-editor-hide-decrease-nesting",container_hideIncreaseNesting:"vf-editor-hide-increase-nesting",container_hideAttach:"vf-editor-hide-attach",container_hideUndo:"vf-editor-hide-undo",container_hideRedo:"vf-editor-hide-redo",$container:(e,{hideTools:t})=>[e.container].concat(t.map(n=>e[`container_hide${n.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join("")}`]))}}}},P1=`@charset "UTF-8";

trix-toolbar {
  padding: 0.5rem 0.375rem;
  border-radius: 0.25rem;
  flex-wrap: wrap;
}

trix-toolbar .trix-button-row {
  display: block;
  margin-bottom: -0.25rem;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
}

trix-toolbar .trix-button-group {
  display: inline;
}

trix-toolbar .trix-button-group-spacer {
  display: hidden;
  flex-grow: 1;
}

trix-toolbar .trix-button {
  position: relative;
  margin-bottom: 0.25rem;
  color: var(--vf-bg-icon);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  outline: none;
  border-radius: 0.25rem;
  white-space: nowrap;
  float: left;
  border: 0;
  background: none;
  cursor: pointer;
}

trix-toolbar .trix-button.trix-active {
  background-color: var(--vf-bg-selected);
  filter: brightness(0.9);
}

trix-toolbar .trix-button:not(.trix-active):hover {
  background-color: var(--vf-bg-selected);
}

trix-toolbar .trix-button--icon {
  width: 2.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-indent: -9999px;
}

trix-toolbar .trix-button--icon::before {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: inline-block;
  content: "";
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  top: 0.125rem;
  bottom: 0.125rem;
  margin-top: 0.125rem;
  margin-bottom: 0.125rem;
}

trix-toolbar .trix-button--icon.trix-active::before {
  opacity: 1;
}

trix-toolbar .trix-button--icon:disabled::before {
  opacity: 0.4;
}

trix-toolbar .trix-button--icon-attach::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-bold::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-italic::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-link::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-strike::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-quote::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-heading-1::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-code::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.375rem;
  bottom: 0.375rem;
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-bullet-list::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-number-list::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-undo::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
}

trix-toolbar .trix-button--icon-redo::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
}

trix-toolbar .trix-button--icon-decrease-nesting-level::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e");
  margin-bottom: 0;
}

trix-toolbar .trix-button--icon-increase-nesting-level::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-dialogs {
  position: relative;
}

trix-toolbar .trix-dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 1rem 0.625rem;
  background-color: var(--vf-bg-input);
  box-shadow: 0 0px 15px 0px rgba(0, 0, 0, 0.3);
  margin-top: 0.375rem;
  border-radius: 0.25rem;
  z-index: 2;
}

trix-toolbar .trix-input--dialog {
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--vf-border-color-input);
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
}

trix-toolbar .trix-input--dialog:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color) !important;
}

trix-toolbar .trix-input--dialog.validate:invalid {
  border-color: var(--vf-color-danger);
}

trix-toolbar .trix-button--dialog {
  padding: 0.5rem;
  border-left-width: 1px;
  border-color: var(--vf-border-color-input);
  background-color: transparent;
  border-radius: 0;
}

trix-toolbar .trix-button--dialog:not(.trix-active):hover {
  background-color: transparent;
}

trix-toolbar .trix-button--dialog:first-of-type {
  border: 0;
}

trix-toolbar .trix-dialog--link {
  max-width: 36rem;
}

trix-toolbar .trix-dialog__link-fields {
  display: flex;
  align-items: center;
  width: 100%;
}

trix-toolbar .trix-dialog__link-fields .trix-input {
  flex: 1 1 0%;
}

trix-toolbar .trix-dialog__link-fields .trix-button-group {
  flex-grow: 0;
  flex-shrink: 0;
}

trix-editor {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
  padding-bottom: var(--vf-py-input);
  border-radius: var(--vf-radius-large);
  outline: none;
  min-height: 6rem;
}

trix-editor:empty:not(:focus)::before {
  color: var(--vf-color-placeholder);
}

trix-editor [data-trix-mutable]:not(.attachment__caption-editor) {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

trix-editor [data-trix-mutable]::-moz-selection,
trix-editor [data-trix-cursor-target]::-moz-selection,
trix-editor [data-trix-mutable] ::-moz-selection {
  background-image: none;
}

trix-editor [data-trix-mutable]::-moz-selection, trix-editor [data-trix-cursor-target]::-moz-selection, trix-editor [data-trix-mutable] ::-moz-selection {
  background-image: none;
}

trix-editor [data-trix-mutable]::selection,
trix-editor [data-trix-cursor-target]::selection,
trix-editor [data-trix-mutable] ::selection {
  background-image: none;
}

trix-editor [data-trix-mutable].attachment__caption-editor:focus::-moz-selection {
  background: highlight;
}

trix-editor [data-trix-mutable].attachment__caption-editor:focus::selection {
  background: highlight;
}

trix-editor [data-trix-mutable].attachment.attachment--file {
  background-color: var(--vf-bg-selected);
}

trix-editor [data-trix-mutable].attachment img {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

trix-editor .attachment {
  position: relative;
}

trix-editor .attachment:hover {
  cursor: default;
}

trix-editor .attachment--preview .attachment__caption:hover {
  cursor: text;
}

trix-editor .attachment__progress {
  position: absolute;
  z-index: 1;
  height: 1.25rem;
  top: 50%;
  left: 0;
  transform: translateY(-0.625rem);
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  opacity: 0.2;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

trix-editor .attachment__progress[value="100"] {
  opacity: 0;
}

trix-editor .attachment__caption-editor {
  display: inline-block;
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  vertical-align: top;
  width: 100%;
  border-width: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-family: inherit;
}

trix-editor .attachment__toolbar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
}

trix-editor .trix-button-group {
  display: inline-flex;
}

trix-editor .trix-button {
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin: 0;
  background-color: transparent;
  color: var(--vf-bg-icon);
  font-size: 0.875rem;
  line-height: 1.25rem;
  white-space: nowrap;
  border-radius: 0;
  border-width: 0;
  outline: 0;
  cursor: pointer;
}

trix-editor .trix-button--remove {
  display: inline-block;
  overflow-x: hidden;
  padding: 0;
  background-color: var(--vf-bg-input);
  line-height: 1.75rem;
  border-color: var(--vf-color-selected);
  border-radius: 9999px;
  border-width: 1px;
  border-style: solid;
  outline: 0;
  text-indent: -9999px;
  width: 24px;
  height: 24px;
}

trix-editor .trix-button--remove:hover {
  background-color: var(--vf-bg-selected);
}

trix-editor .trix-button--remove::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0.125rem;
  right: 0.125rem;
  bottom: 0.125rem;
  left: 0.125rem;
  background-color: var(--vf-color-input);
  opacity: 0.7;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e");
}

trix-editor .attachment__metadata-container {
  position: relative;
}

trix-editor .attachment__metadata {
  position: absolute;
  top: 1rem;
  left: 50%;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #000000;
  opacity: 0.7;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
}

trix-editor .attachment__metadata .attachment__name {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
  white-space: nowrap;
  max-width: 100%;
}

trix-editor .attachment__metadata .attachment__size {
  margin-left: 0.25rem;
  white-space: nowrap;
}

.trix-content h1,
trix-editor h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  line-height: 1.25;
}

.trix-content a,
trix-editor a {
  color: var(--vf-primary);
}

.trix-content ul,
trix-editor ul {
  padding-left: 2.5rem;
  list-style-type: disc;
}

.trix-content [dir=rtl] ul,
trix-editor [dir=rtl] ul {
  padding-right: 2.5rem;
  list-style-type: disc;
}

.trix-content ol,
trix-editor ol {
  padding-left: 2.5rem;
  list-style-type: decimal;
}

.trix-content [dir=rtl] ol,
trix-editor [dir=rtl] ol {
  padding-right: 2.5rem;
  list-style-type: decimal;
}

.trix-content blockquote,
trix-editor blockquote {
  padding-left: 0.625rem;
  border-left-width: 4px;
  border-color: var(--vf-gray-300);
  border-left-style: solid;
  margin: 0;
}

.trix-content [dir=rtl] blockquote,
.trix-content blockquote[dir=rtl],
trix-editor [dir=rtl] blockquote,
trix-editor blockquote[dir=rtl] {
  padding-left: 0.625rem;
  border-left-width: 4px;
  border-color: var(--vf-gray-300);
}

.trix-content pre,
trix-editor pre {
  display: inline-block;
  overscroll-behavior-x: auto;
  padding: 0.5rem;
  background-color: var(--vf-gray-50);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.25rem;
  vertical-align: top;
  white-space: pre;
  width: 100%;
}

.trix-content img,
trix-editor img {
  max-width: 100%;
  height: auto;
}

.trix-content .attachment__caption,
trix-editor .attachment__caption {
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.trix-content .attachment__caption .attachment__name + .attachment__size::before,
trix-editor .attachment__caption .attachment__name + .attachment__size::before {
  content: " · ";
}

.trix-content * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.trix-content .attachment {
  display: inline-block;
  position: relative;
  max-width: 100%;
}

.trix-content .attachment a {
  text-decoration: none;
}

.trix-content .attachment--preview {
  text-align: center;
  width: 100%;
}

.trix-content .attachment--preview .attachment__caption {
  color: var(--vf-gray-500);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.trix-content .attachment--file {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0.125rem;
  margin-top: 0;
  color: var(--vf-gray-700);
  line-height: 1;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: var(--vf-gray-300);
}

.trix-content .attachment-gallery {
  display: flex;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.trix-content .attachment-gallery .attachment {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  flex-grow: 1;
  flex-shrink: 0;
  width: 33.333333%;
}

.trix-content .attachment-gallery.attachment-gallery--2 .attachment, .trix-content .attachment-gallery.attachment-gallery--4 .attachment {
  width: 50%;
}

.trix-content .attachment__progress {
  display: none;
}

.vf-editor-sm trix-editor {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
  padding-bottom: var(--vf-py-input-sm);
  border-radius: var(--vf-radius-large-sm);
  min-height: 5rem;
}

.vf-editor-sm .trix-content h1,
.vf-editor-sm trix-editor h1 {
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.25;
}

.vf-editor-sm trix-toolbar {
  padding: var(--vf-py-input-sm) var(--vf-py-input-sm);
}

.vf-editor-sm trix-toolbar .trix-button--icon {
  width: 2.25rem;
}

.vf-editor-lg trix-editor {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
  padding-bottom: var(--vf-py-input-lg);
  border-radius: var(--vf-radius-large-lg);
}

.vf-editor-disabled trix-toolbar {
  pointer-events: none;
}

.vf-editor-hide-bold .trix-button--icon-bold {
  display: none;
}

.vf-editor-hide-italic .trix-button--icon-italic {
  display: none;
}

.vf-editor-hide-strike .trix-button--icon-strike {
  display: none;
}

.vf-editor-hide-link .trix-button--icon-link {
  display: none;
}

.vf-editor-hide-heading .trix-button--icon-heading-1 {
  display: none;
}

.vf-editor-hide-quote .trix-button--icon-quote {
  display: none;
}

.vf-editor-hide-code .trix-button--icon-code {
  display: none;
}

.vf-editor-hide-bullet-list .trix-button--icon-bullet-list {
  display: none;
}

.vf-editor-hide-number-list .trix-button--icon-number-list {
  display: none;
}

.vf-editor-hide-decrease-nesting .trix-button--icon-decrease-nesting-level {
  display: none;
}

.vf-editor-hide-increase-nesting .trix-button--icon-increase-nesting-level {
  display: none;
}

.vf-editor-hide-attach .trix-button--icon-attach {
  display: none;
}

.vf-editor-hide-undo .trix-button--icon-undo {
  display: none;
}

.vf-editor-hide-redo .trix-button--icon-redo {
  display: none;
}

.dark .trix-content blockquote,
.dark trix-editor blockquote {
  border-color: var(--vf-dark-700);
}

.dark .trix-content pre,
.dark trix-editor pre {
  background-color: var(--vf-dark-900);
}`;Y(P1);Jd.__file="themes/vueform/templates/wrappers/EditorWrapper.vue";function N1(e,t){switch(e){case"default":return"vf-col-".concat(t);default:return"vf-col-".concat(e,"-").concat(t)}}var H1={},U1={"matrix-table":{addClasses:{MatrixElement:{container:"vf-matrix-table",cellWrapper_stretch:"is-stretch"}},overrideClasses:{MatrixElement:{$cellWrapper:(e,t)=>{var{padding:n,centered:r,cells$:i}=t;return(l,a)=>{var o,s,u=["radio","checkbox","toggle"].includes(l);return[e.cellWrapper,n?e.cellWrapper_padding:null,u?e.cellWrapper_centered:null,u?null:e.cellWrapper_stretch,(o=i[a])!==null&&o!==void 0&&o.error?e.cellWrapper_error:null,(s=i[a])!==null&&s!==void 0&&s.isSuccess?e.cellWrapper_success:null]}}}}},"grid-table":{addClasses:{GridElement:{container:"vf-grid-table"},ToggleElement:{wrapper_sm:"vf-toggle-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-toggle-wrapper-lg"}},overrideClasses:{GridElement:{$cell:(e,t)=>{var{colHeader:n,rowHeader:r}=t;return i=>{var{colStart:l,rowStart:a}=i;return[e.cell,r&&l===0||n&&a===0?"form-bg-table-header form-color-table-header":null]}}},ToggleElement:{$wrapper:(e,t)=>{var{align:n,Size:r}=t;return[e.wrapper,e["wrapper_".concat(r)],n==="left"?e.wrapper_left:null,n==="right"?e.wrapper_right:null]}}}}},j1={templates:{Vueform:Ao,FormErrors:Eo,FormMessages:Lo,FormLanguages:xo,FormLanguage:So,FormTabs:To,FormTab:Ro,FormSteps:Io,FormStepsControls:Bo,FormStepsControl:Mo,FormStep:Do,FormElements:Oo,ElementLayout:$o,ElementLayoutInline:Fo,ElementLoader:zo,ElementLabelFloating:Po,ElementLabel:No,ElementInfo:Ho,ElementDescription:Uo,ElementError:jo,ElementMessage:Wo,ElementRequired:Vo,ElementText:_o,ElementAddon:Qo,ElementAddonOptions:qo,ButtonElement:Ko,CaptchaElement:Go,CheckboxElement:Jo,CheckboxgroupElement:Yo,CheckboxgroupElement_tabs:Xo,CheckboxgroupElement_blocks:Zo,DateElement:es,DatesElement:ns,FileElement:rs,GridElement:is,GroupElement:as,HiddenElement:ls,ListElement:os,LocationElement:ss,MatrixElement:ds,MultifileElement:us,MultiselectElement:ws,ObjectElement:ys,PhoneElement:ks,RadioElement:Cs,RadiogroupElement:As,RadiogroupElement_tabs:Es,RadiogroupElement_blocks:Ls,SelectElement:xs,SignatureElement:Ss,SliderElement:$s,StaticElement:Fs,TagsElement:zs,TextareaElement:Ps,TextElement:Ns,ToggleElement:Hs,EditorElement:Us,TTextareaElement:Ws,TTextElement:_s,TEditorElement:qs,CheckboxgroupCheckbox:Ks,CheckboxgroupCheckbox_tabs:Gs,CheckboxgroupCheckbox_blocks:Js,DragAndDrop:Ys,FilePreview:Xs,FilePreview_image:Zs,FilePreview_gallery:ed,RadiogroupRadio:td,RadiogroupRadio_tabs:nd,RadiogroupRadio_blocks:rd,DatepickerWrapper:id,EditorWrapper:Jd},classes:H1,columns:N1,presets:U1};const Q1=ru({theme:j1,locales:{en:iu},locale:"en"});export{Q1 as default};
