import Vapi from "@vapi-ai/web";
 
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!); // '!' means that the value is not null or undefined