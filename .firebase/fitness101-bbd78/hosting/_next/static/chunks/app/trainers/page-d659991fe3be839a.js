(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{9841:function(e,t,n){Promise.resolve().then(n.bind(n,6569)),Promise.resolve().then(n.bind(n,6048)),Promise.resolve().then(n.bind(n,356)),Promise.resolve().then(n.t.bind(n,1749,23))},6569:function(e,t,n){"use strict";n.r(t);var s=n(7437),a=n(2265),l=n(7907),i=n(703);t.default=function(){let e=(0,l.useRouter)(),t=(0,l.usePathname)(),n=(0,a.useRef)(null),[o,r]=(0,a.useState)(!1),c=t=>{e.push("/".concat(t))};return(0,a.useEffect)(()=>{let e=()=>{if(n.current&&"/"===t){let e=n.current.getBoundingClientRect();window.innerWidth>=640&&r(e.top<=0)}else window.innerWidth>=640?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[t]),(0,s.jsx)("div",{className:"   sticky    flex    bg-custom-background    w-full    justify-center    items-center    top-0    z-50   ",ref:n,children:(0,s.jsxs)("div",{className:"\n        relative \n        flex\n        w-10/12 xl:w-8/12\n        h-14\n        justify-start\n        items-center\n        overflow-hidden\n      ",children:[(0,s.jsx)("div",{className:"\n          absolute \n          left-0 \n          top-0\n          w-fit\n          py-2\n          transition-opacity\n          ".concat(o?"opacity-1":"opacity-0","\n        "),children:(0,s.jsx)("a",{className:"hover:cursor-pointer",onClick:()=>{"/"===t?window.scrollTo({top:0,behavior:"smooth"}):e.push("/")},children:(0,s.jsx)(i.default,{width:40,height:40,src:"/assets/logo.png",alt:"website logo"})})}),(0,s.jsxs)("div",{className:"\n          flex\n          justify-center\n          items-center\n          py-3\n          gap-5 \n          w-1/4\n          transition-all\n          duration-1000\n          ease-in-out\n          absolute\n          top-0\n          ".concat(o?"right-0 sm:-translate-x-1/2 lg:-translate-x-1/4 xl:translate-x-1/12":"right-1/2 translate-x-1/2 ","\n        "),children:[(0,s.jsx)("a",{onClick:()=>{if("/"===t){let e=document.getElementById("about-section");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}else e.push("/")},className:"\n              text-custom-main \n              p-1\n              hover:text-custom-second\n              hover:cursor-pointer\n            ",children:"About"}),(0,s.jsx)("a",{onClick:()=>c("trainers"),className:"   text-custom-main    p-1   hover:text-custom-second   hover:cursor-pointer   ",children:"Trainers"}),(0,s.jsx)("a",{onClick:()=>c("shop"),className:"   text-custom-main    p-1   hover:text-custom-second   hover:cursor-pointer   ",children:"Shop"}),(0,s.jsx)("a",{onClick:()=>c("membership"),className:"   text-custom-main    p-1   hover:text-custom-second   hover:cursor-pointer   ",children:"Join"})]})]})})}},6048:function(e,t,n){"use strict";n.r(t);var s=n(7437),a=n(2265);t.default=function(){let e=(0,a.useRef)(null),[t,n]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let t=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&n(!0)});return e.current&&t.observe(e.current),()=>{t.disconnect(),n(!1)}},[e]),(0,s.jsxs)("div",{ref:e,className:"w-full h-96 flex justify-center items-center relative py-64 bg-custom-background overflow-hidden",children:[(0,s.jsx)("div",{className:"\n                absolute \n                top-0 \n                left-0 \n                h-full \n                w-1/4\n                z-10\n                bg-custom-main\n                opacity-60\n                transition-all\n                duration-1000\n                ease-in-out\n                clip-pad-top-triangle\n                ".concat(t?"translate-x-0":"-translate-x-full","\n            ")}),(0,s.jsx)("div",{className:"\n                absolute \n                bottom-0 \n                right-0 \n                h-full \n                w-1/4\n                z-10\n                bg-custom-main\n                opacity-60\n                transition-all\n                duration-1000\n                ease-in-out\n                clip-pad-bottom-triangle\n                ".concat(t?"translate-x-0":"translate-x-full","\n            ")}),(0,s.jsxs)("div",{className:"\n                w-1/2 lg:w-2/6 2xl:w-1/4\n                z-30 \n                flex \n                flex-col \n                justify-start \n                items-start \n                gap-3\n                transition-all\n                duration-1000\n                ease-in-out\n                ".concat(t?"translate-y-0 opacity-100":"translate-y-full opacity-0","\n            "),children:[(0,s.jsx)("p",{className:"   text-custom-main    text-base sm:text-xl    text-center sm:text-left    w-full sm:w-fit    sm:-translate-x-1/2   ",children:"Join Us"}),(0,s.jsx)("p",{className:"   text-custom-main    text-sm sm:text-base    text-center sm:text-left   ",children:"Whether you're a beginner looking to kickstart your fitness journey or a seasoned athlete aiming to reach new heights, our trainers are here to support you every step of the way. With personalized training programs tailored to your unique needs and goals, you'll receive the attention and expertise you deserve to succeed."})]})]})}},356:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var s=n(7437),a=n(2265),l=n(7288),i=n(703),o=n(2151),r=n.n(o);function c(e){let{date:t,selectedDate:n,setSelectedDate:l}=e,i=t.split(","),[o,r]=(0,a.useState)([]),[c,u]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=[];for(let t=0;t<8;t++){let n=Math.floor(2*Math.random()),s={hour:0,available:!1};s.hour=t>3?t-3:t+9,s.available=1==n,e.push(s)}r([...e])},[]),(0,a.useEffect)(()=>{let e=n.split(", ");e[0]===i[0]?u(parseInt(e[4])):u(0)},[n,i]);let m=e=>{u(e.hour),l("".concat(t,", ").concat(e.hour))};return(0,s.jsxs)("div",{className:"   w-1/12   flex   flex-col   items-center   ",children:[(0,s.jsx)("h3",{className:"   text-custom-main   md:lg   ",children:i[0]}),(0,s.jsx)("div",{className:"   w-full   flex   flex-col   justify-center   items-center   text-center   gap-3   ",children:o.map(e=>(0,s.jsx)("input",{type:"button",value:e.hour,disabled:!e.available,onClick:()=>m(e),className:"\n                            w-full\n                            rounded-lg\n                            ".concat(c===e.hour?"bg-custom-main":"bg-custom-background","\n                            ").concat(e.available?c===e.hour?"text-black":"text-custom-main":"text-zinc-600","\n                            border-2\n                            ").concat(e.available?c===e.hour?"text-black":"border-custom-main":"border-zinc-600","\n                            hover:cursor-pointer\n                            hover:opacity-70\n                        ")},e.hour))})]})}var u=function(e){let{selectedDate:t,setSelectedDate:n}=e,[l,i]=(0,a.useState)([]),[o,u]=(0,a.useState)(!0),m=()=>{let e=[];for(let t=1;t<8;t++)e.push(r()().add(t,"days").format("ddd, DD, MM, YYYY"));return e};return(0,a.useEffect)(()=>{i(m()),u(!1)},[]),(0,s.jsx)("div",{className:"   w-11/12    flex    justify-between   gap-4   ",children:l.map((e,a)=>(0,s.jsx)(c,{date:e,selectedDate:t,setSelectedDate:n},a))})},m=function(e){let{selectedDate:t,setSelectedDate:n}=e,[l,i]=(0,a.useState)({name:"",phone:"",email:""}),[o,r]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),[m,d]=(0,a.useState)(!1),x=(e,t)=>{i({...l,[e]:t})};if(!c)return(0,s.jsxs)("div",{className:"\n                w-full xl:w-3/4\n                flex\n                flex-col\n                gap-3\n                justify-center\n                items-center\n                transition-all\n                duration-1000\n                ease-in-out\n                ".concat(m?"opacity-0":"opacity-100","\n            "),children:[(0,s.jsxs)("div",{className:"   w-full   flex   gap-3   ",children:[(0,s.jsx)("input",{type:"text",placeholder:"Name",onChange:e=>x("name",e.target.value),className:"   w-full   rounded   bg-custom-background   text-custom-main   border-custom-main   border-2   px-2   py-1   "}),(0,s.jsx)("input",{type:"text",placeholder:"Phone Number",onChange:e=>x("phone",e.target.value),className:"   w-full   rounded   bg-custom-background   text-custom-main   border-custom-main   border-2   px-2   py-1   "})]}),(0,s.jsx)("input",{type:"email",placeholder:"Email",onChange:e=>x("email",e.target.value),className:"   w-full   rounded   bg-custom-background   text-custom-main   border-custom-main   border-2   px-2   py-1   "}),(0,s.jsxs)("div",{className:"   w-full   flex   gap-3   ",children:[(0,s.jsx)("input",{type:"button",value:"Cancel",onClick:()=>{n(""),r(!1),i({name:"",phone:"",email:""})},className:"   text-custom-main   md:text-lg   hover:cursor-pointer   hover:opacity-70   "}),(0,s.jsx)("input",{type:"submit",value:"Confirm",onClick:()=>{if(""===l.name||""===l.phone||""===l.email){r(!0);return}r(!1),d(!0),setTimeout(()=>{u(!0)},1e3)},className:"   text-custom-main   md:text-lg   hover:cursor-pointer   hover:opacity-70   "})]}),(0,s.jsx)("div",{className:"   w-full   text-custom-main   ",children:(0,s.jsx)("p",{children:o?"Please fill in form":""})})]});{let e=t.split(", ");return(0,s.jsxs)("div",{className:"\n                w-full md:w-3/4\n                flex\n                flex-col\n                gap-3\n                justify-center\n                items-center\n                transition-all\n                duration-500\n                ease-in-out\n                ".concat(m?"opacity-100":"opacity-0","\n            "),children:[(0,s.jsx)("p",{className:"   text-custom-main   text-lg   ",children:"Session Booked"}),(0,s.jsxs)("p",{className:"   text-custom-main   ",children:[e[1],"-",e[2],"-",e[3]," at ",e[4],5>parseInt(e[4])?"PM":"AM"]}),(0,s.jsx)("p",{className:"   text-custom-main   text-center   ",children:"Thank you for booking a session with us. Please provide your email and phone number on the day you requested."}),(0,s.jsx)("p",{className:"   text-custom-main   ",children:"You will receive a confirmation email shortly."})]})}};function d(e){let{trainer:t}=e,n=(0,a.useRef)(null),[l,o]=(0,a.useState)(!1),[r,c]=(0,a.useState)(!1),[d,x]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting?o(!0):t.boundingClientRect.top>0&&o(!1)});return n.current&&e.observe(n.current),()=>{e.disconnect(),o(!1)}},[n]),(0,s.jsxs)("div",{ref:n,className:"   w-full    h-[650px] md:h-fit lg:h-[600px]   flex    flex-col md:flex-row   justify-end    items-start    gap-10    overflow-hidden   sticky   top-5   ",children:[(0,s.jsx)("div",{className:"\n                w-full md:w-7/12 2xl:w-4/6\n                h-full\n                md:absolute \n                md:top-0\n                md:left-0\n                shadow-2xl\n                transition-all\n                duration-1000\n                ease-in-out\n            ",children:(0,s.jsx)(i.default,{layout:"fill",objectFit:"cover",src:t.photo,style:{objectPosition:"top center"},alt:"trainer photo"})}),(0,s.jsx)("div",{className:"   w-full md:w-5/6 2xl:w-4/6   h-full   absolute   bottom md:top-0   right-0   bg-gradient-to-b md:bg-gradient-to-r    from-transparent    to-75% md:to-50%    to-custom-background   "}),(0,s.jsxs)("div",{className:"   w-full md:w-1/2 2xl:w-5/12   h-[1550px] md:h-full   relative   flex   flex-col   overflow-hidden   ",children:[(0,s.jsxs)("div",{className:"\n                    w-full\n                    h-full min-h-full\n                    py-6 \n                    px-6\n                    flex \n                    flex-col \n                    justify-center \n                    items-center \n                    gap-5 md:gap-10\n                    transition-all\n                    duration-[1300ms]\n                    ease-in-out\n                    ".concat(r?"-translate-y-full opacity-0":"translate-y-0 opacity-100","\n                "),children:[(0,s.jsxs)("div",{className:"\n                        w-full \n                        flex \n                        flex-col \n                        justify-start \n                        items-start gap-3\n                        transition-all\n                        duration-[1300ms]\n                        ease-in-out\n                        ".concat(l?"translate-x-0 opacity-100":"translate-x-full opacity-0","\n                    "),children:[(0,s.jsxs)("p",{className:"text-custom-main text-lg md:text-xl",children:[t.first_name," ",t.last_name]}),(0,s.jsx)("p",{className:"text-custom-main text-sm md:text-base",children:t.desc})]}),(0,s.jsxs)("div",{className:"   w-full    flex    flex-col sm:flex-row   justify-start    items-start    gap-3 sm:gap-5   ",children:[(0,s.jsx)("div",{className:"\n                            w-full sm:w-5/12 \n                            flex \n                            flex-col \n                            justify-start \n                            items-center \n                            gap-2\n                            transition-all\n                            duration-[1600ms]\n                            ease-in-out\n                            ".concat(l?"translate-x-0 opacity-100":"translate-x-full opacity-0","\n                        "),children:t.qualifications.map((e,t)=>(0,s.jsxs)("p",{className:"text-custom-main text-xs md:text-sm decoration-dashed",children:["- ",e]},t))}),(0,s.jsx)("div",{className:"\n                            w-full sm:w-7/12 \n                            flex \n                            flex-col \n                            justify-start \n                            items-center \n                            gap-2\n                            transition-all\n                            duration-[1900ms]\n                            ease-in-out\n                            ".concat(l?"translate-x-0 opacity-100":"translate-x-full opacity-0","\n                        "),children:t.reviews.map((e,t)=>(0,s.jsxs)("p",{className:"text-custom-main text-xs md:text-sm",children:['"',e.review,'" - ',e.name]},t))})]}),(0,s.jsx)("div",{className:"   w-full   h-10   z-50   ",children:(0,s.jsx)("input",{className:"   w-fit   h-full   py-1   px-2   border-2   border-custom-main hover:border-white   text-custom-main hover:text-white   hover:cursor-pointer   ",type:"button",value:"Book a Session",onClick:()=>{c(e=>!e)}})})]}),(0,s.jsxs)("div",{className:"\n                    w-full\n                    h-full min-h-full\n                    py-6 \n                    px-6\n                    flex \n                    flex-col \n                    justify-center\n                    gap-5 md:gap-10\n                    transition-all\n                    duration-[1300ms]\n                    ease-in-out\n                    ".concat(r?"-translate-y-full opacity-100":"translate-y-0 opacity-0","\n                "),children:[(0,s.jsxs)("div",{className:"   w-11/12   flex   justify-between   ",children:[(0,s.jsx)("h3",{className:"   w-full   text-lg md:text-xl   text-custom-main   ",children:"Book A Session"}),""===d?(0,s.jsx)("input",{type:"button",value:"^",onClick:()=>c(!1),className:"   text-xl md:text-2xl   text-custom-main   hover:cursor-pointer   text-center   px-4   "}):null]}),(0,s.jsxs)("div",{className:"   w-full   flex   items-center   gap-3   relative   overflow-hidden   ",children:[(0,s.jsx)("div",{className:"\n                            min-w-full\n                            transition-all\n                            duration-[1300ms]\n                            ease-in-out\n                            ".concat(""==d?"-translate-x-full opacity-0":"translate-x-0 opacity-100","\n                        "),children:(0,s.jsx)(m,{selectedDate:d,setSelectedDate:x})}),(0,s.jsx)("div",{className:"\n                            min-w-full\n                            transition-all\n                            duration-[1300ms]\n                            ease-in-out\n                            ".concat(""==d?"-translate-x-full opacity-100":"translate-x-0 opacity-0","\n                        "),children:(0,s.jsx)(u,{selectedDate:d,setSelectedDate:x})})]})]})]})]})}var x=function(){let e=(0,l.CG)(e=>e.trainers.trainers);return(0,s.jsx)("div",{className:"bg-custom-background flex justify-center items-center py-64 w-full",children:(0,s.jsx)("div",{className:"   w-full   flex    flex-col    justify-center    items-center    gap-8   ",children:e.map(e=>(0,s.jsx)(d,{trainer:e},e.id))})})}},7288:function(e,t,n){"use strict";n.d(t,{CG:function(){return l},TL:function(){return a}});var s=n(828);let a=s.I0.withTypes(),l=s.v9.withTypes();s.oR.withTypes()}},function(e){e.O(0,[990,202,828,971,69,744],function(){return e(e.s=9841)}),_N_E=e.O()}]);