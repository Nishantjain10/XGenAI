import{C as u,A as i,D as l,I as d,Q as y,z as m}from"./vendor.DPX5suGc.js";import{a as w,b as D}from"./public.CdQsj55-.js";const c=new u().setEndpoint(w).setProject(D),t=new i(c),n=new l(c),s="6742032c002536e4538f",o="67420452002d85823af3",p=async()=>{try{return await t.getSession("current")}catch{return null}},A=async r=>{try{return await n.createDocument(s,o,d.unique(),r)}catch(e){throw console.error("Error creating document:",e),e}},C=async(r,e)=>{try{return await n.updateDocument(s,o,r,e)}catch(a){throw console.error("Error updating document:",a),a}},P=async()=>{try{await t.deleteSession("current")}catch(r){console.error("Error deleting session:",r)}},g=async r=>{try{return(await n.listDocuments(s,o,[y.equal("twitterId",r)])).documents[0]||null}catch(e){return console.error("Error finding user:",e),null}},h=async()=>{try{return await t.createAnonymousSession()}catch(r){return console.error("Error creating anonymous session:",r),null}},f=m(null);export{A as a,h as c,P as d,g as f,p as g,f as t,C as u};
