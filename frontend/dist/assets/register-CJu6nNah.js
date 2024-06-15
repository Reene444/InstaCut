import{b as j,j as e,G as i,S as o,O as d,I as F,o as B,F as I,q as A,T as x,L as y,p as g}from"./index-CB-OdhJT.js";import{F as k,c as q,a as u,I as p,b as l,E as W,d as C,A as R,B as L,e as D}from"./EyeInvisibleOutlined-AFZuO5Ql.js";const N=s=>new RegExp(/[0-9]/).test(s),M=s=>new RegExp(/[a-z]/).test(s)&&new RegExp(/[A-Z]/).test(s),O=s=>new RegExp(/[!#@$%^&*)(+=._-]/).test(s),T=s=>s<2?{label:"Poor",color:"error.main"}:s<3?{label:"Weak",color:"warning.main"}:s<4?{label:"Normal",color:"warning.dark"}:s<5?{label:"Good",color:"success.main"}:s<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},$=s=>{let a=0;return s.length>5&&(a+=1),s.length>7&&(a+=1),N(s)&&(a+=1),O(s)&&(a+=1),M(s)&&(a+=1),a};function z(){const[s,a]=j.useState(),[h,b]=j.useState(!1),v=()=>{b(!h)},P=n=>{n.preventDefault()},f=n=>{const t=$(n);a(T(t))};return j.useEffect(()=>{f("")},[]),e.jsx(e.Fragment,{children:e.jsx(k,{initialValues:{firstname:"",lastname:"",email:"",company:"",password:"",submit:null},validationSchema:q().shape({firstname:u().max(255).required("First Name is required"),lastname:u().max(255).required("Last Name is required"),email:u().email("Must be a valid email").max(255).required("Email is required"),password:u().max(255).required("Password is required")}),children:({errors:n,handleBlur:t,handleChange:m,handleSubmit:S,isSubmitting:E,touched:r,values:c})=>e.jsx("form",{noValidate:!0,onSubmit:S,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsxs(i,{item:!0,xs:12,md:6,children:[e.jsxs(o,{spacing:1,children:[e.jsx(p,{htmlFor:"firstname-signup",children:"First Name*"}),e.jsx(d,{id:"firstname-login",type:"firstname",value:c.firstname,name:"firstname",onBlur:t,onChange:m,placeholder:"John",fullWidth:!0,error:!!(r.firstname&&n.firstname)})]}),r.firstname&&n.firstname&&e.jsx(l,{error:!0,id:"helper-text-firstname-signup",children:n.firstname})]}),e.jsxs(i,{item:!0,xs:12,md:6,children:[e.jsxs(o,{spacing:1,children:[e.jsx(p,{htmlFor:"lastname-signup",children:"Last Name*"}),e.jsx(d,{fullWidth:!0,error:!!(r.lastname&&n.lastname),id:"lastname-signup",type:"lastname",value:c.lastname,name:"lastname",onBlur:t,onChange:m,placeholder:"Doe",inputProps:{}})]}),r.lastname&&n.lastname&&e.jsx(l,{error:!0,id:"helper-text-lastname-signup",children:n.lastname})]}),e.jsxs(i,{item:!0,xs:12,children:[e.jsxs(o,{spacing:1,children:[e.jsx(p,{htmlFor:"company-signup",children:"Company"}),e.jsx(d,{fullWidth:!0,error:!!(r.company&&n.company),id:"company-signup",value:c.company,name:"company",onBlur:t,onChange:m,placeholder:"Demo Inc.",inputProps:{}})]}),r.company&&n.company&&e.jsx(l,{error:!0,id:"helper-text-company-signup",children:n.company})]}),e.jsxs(i,{item:!0,xs:12,children:[e.jsxs(o,{spacing:1,children:[e.jsx(p,{htmlFor:"email-signup",children:"Email Address*"}),e.jsx(d,{fullWidth:!0,error:!!(r.email&&n.email),id:"email-login",type:"email",value:c.email,name:"email",onBlur:t,onChange:m,placeholder:"demo@company.com",inputProps:{}})]}),r.email&&n.email&&e.jsx(l,{error:!0,id:"helper-text-email-signup",children:n.email})]}),e.jsxs(i,{item:!0,xs:12,children:[e.jsxs(o,{spacing:1,children:[e.jsx(p,{htmlFor:"password-signup",children:"Password"}),e.jsx(d,{fullWidth:!0,error:!!(r.password&&n.password),id:"password-signup",type:h?"text":"password",value:c.password,name:"password",onBlur:t,onChange:w=>{m(w),f(w.target.value)},endAdornment:e.jsx(F,{position:"end",children:e.jsx(B,{"aria-label":"toggle password visibility",onClick:v,onMouseDown:P,edge:"end",color:"secondary",children:h?e.jsx(W,{}):e.jsx(C,{})})}),placeholder:"******",inputProps:{}})]}),r.password&&n.password&&e.jsx(l,{error:!0,id:"helper-text-password-signup",children:n.password}),e.jsx(I,{fullWidth:!0,sx:{mt:2},children:e.jsxs(i,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(i,{item:!0,children:e.jsx(A,{sx:{bgcolor:s==null?void 0:s.color,width:85,height:8,borderRadius:"7px"}})}),e.jsx(i,{item:!0,children:e.jsx(x,{variant:"subtitle1",fontSize:"0.75rem",children:s==null?void 0:s.label})})]})})]}),e.jsx(i,{item:!0,xs:12,children:e.jsxs(x,{variant:"body2",children:["By Signing up, you agree to our  ",e.jsx(y,{variant:"subtitle2",component:g,to:"#",children:"Terms of Service"}),"  and  ",e.jsx(y,{variant:"subtitle2",component:g,to:"#",children:"Privacy Policy"})]})}),n.submit&&e.jsx(i,{item:!0,xs:12,children:e.jsx(l,{error:!0,children:n.submit})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(R,{children:e.jsx(L,{disableElevation:!0,disabled:E,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})})})})}function H(){return e.jsx(D,{children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,children:e.jsxs(o,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[e.jsx(x,{variant:"h3",children:"Sign up"}),e.jsx(x,{component:g,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(z,{})})]})})}export{H as default};
