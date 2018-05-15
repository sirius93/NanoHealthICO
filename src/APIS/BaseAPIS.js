export let Token_ICO_BASE_API = "https://customer.nanohealthplan.com/api/ico/user/";

if(process.env.NODE_ENV =='production'){
  Token_ICO_BASE_API = "https://customer.nanohealth.in/api/ico/user/";
}
console.log(process.env.NODE_ENV);