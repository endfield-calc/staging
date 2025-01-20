import{a as ki,b as Bi,d as B,t as Ui}from"./chunk-GBMECOWH.js";import{a as Ti,b as Ei,c as Di}from"./chunk-GGYGZIUD.js";import{Ac as R,Bc as S,Cc as O,D as vi,Dc as wi,Ec as V,Ed as Y,Fc as _,Gc as Ri,I as W,Jc as q,K as bi,L as Ii,Mc as I,Md as ri,Nb as yi,Nc as T,O as D,Od as Fi,Pd as Ni,Rc as ni,S as w,Tc as F,Uc as H,Vc as xi,Zc as Ai,c as ti,cd as G,d as fi,k as mi,kc as ji,l as Q,m as Si,sd as Vi,td as Oi,v as gi,wc as X,xa as si,yc as Mi,z as zi,zc as A}from"./chunk-QU7NEV74.js";import{j as x}from"./chunk-TWZW5B45.js";var b=function(u){return u.Version0="0",u.Version1="1",u.Version2="2",u.Version3="3",u.Version4="4",u.Version5="5",u.Version6="6",u.Version7="7",u.Version8="8",u.Version9="9",u.Version10="10",u.Version11="11",u}(b||{});var L=(()=>{class u{constructor(){this.base64codes=new Uint8Array(256).fill(255),this.nToId=ni(i=>i/_>=1?this.nToId(Math.floor(i/_))+this.nToId(i%_):V[i]),this.idToN=ni(i=>{let e=Ri[i[0]];return i.length>1?(i=i.substring(1),e*Math.pow(_,i.length)+this.idToN(i)):e});for(let i=0;i<V.length;i++)this.base64codes[V.charCodeAt(i)]=i;this.base64codes[95]=0}deflate(i){return x(this,null,function*(){let e=yield this.compress(i,"deflate");return this.bytesToBase64(e)})}inflate(i){return x(this,null,function*(){try{return yield this.inflateStr(i)}catch{console.warn("Router failed to parse url, checking for missing trailing characters...")}try{return yield this.inflateMend(i,"-")}catch{}try{return yield this.inflateMend(i,".")}catch{}return yield this.inflateMend(i,"_")})}inflateMend(i,e){return x(this,null,function*(){let t=yield this.inflateStr(i+e);if(!t)throw new Error("Failed to parse, generated empty string");return console.warn(`Router mended url by appending '${e}'`),t})}inflateStr(i){return this.decompress(this.base64ToBytes(i))}bytesToBase64(i){let e="",t,r=i.length;for(t=2;t<r;t+=3)e+=V[i[t-2]>>2],e+=V[(i[t-2]&3)<<4|i[t-1]>>4],e+=V[(i[t-1]&15)<<2|i[t]>>6],e+=V[i[t]&63];return t===r+1&&(e+=V[i[t-2]>>2],e+=V[(i[t-2]&3)<<4],e+="__"),t===r&&(e+=V[i[t-2]>>2],e+=V[(i[t-2]&3)<<4|i[t-1]>>4],e+=V[(i[t-1]&15)<<2],e+="_"),e}getBase64Code(i){if(i>=this.base64codes.length)throw new Error("Unable to parse base64 string.");let e=this.base64codes[i];if(e===255)throw new Error("Unable to parse base64 string.");return e}base64ToBytes(i){if(i.length%4!==0)throw new Error("Unable to parse base64 string.");let e=i.indexOf("_");if(e!==-1&&e<i.length-2)throw new Error("Unable to parse base64 string.");let t=i.endsWith("__")?2:i.endsWith("_")?1:0,r=i.length,n=new Uint8Array(3*(r/4)),s;for(let o=0,c=0;o<r;o+=4,c+=3)s=this.getBase64Code(i.charCodeAt(o))<<18|this.getBase64Code(i.charCodeAt(o+1))<<12|this.getBase64Code(i.charCodeAt(o+2))<<6|this.getBase64Code(i.charCodeAt(o+3)),n[c]=s>>16,n[c+1]=s>>8&255,n[c+2]=s&255;return n.subarray(0,n.length-t)}compress(i,e="deflate"){return x(this,null,function*(){let t=new TextEncoder().encode(i),r=new CompressionStream(e),n=r.writable.getWriter();n.write(t),n.close();let s=new Response(r.readable).arrayBuffer();return new Uint8Array(yield s)})}decompress(i,e="deflate"){return x(this,null,function*(){let t=new DecompressionStream(e),r=t.writable.getWriter();r.write(i).catch(()=>{}),r.close().catch(()=>{});let n=new Response(t.readable).arrayBuffer();return new TextDecoder().decode(yield n)})}static{this.\u0275fac=function(e){return new(e||u)}}static{this.\u0275prov=D({token:u,factory:u.\u0275fac,providedIn:"root"})}}return u})();var J=(()=>{class u{constructor(){this.compressionSvc=w(L)}zipFields(i){return i.join(S).replace(/\**$/,"")}zipString(i){return i??""}zipRational(i){return i==null?"":i.toString()}zipNumber(i){return i==null?"":i.toString()}zipArray(i){return i==null?"":i.length?i.join(R):A}zipNString(i,e){return i==null?"":this.compressionSvc.nToId(e.indexOf(i))}zipDiffSubset(i,e,t,r=t){if(i==null||e!=null&&Array.from(i).every(p=>e.has(p)))return"";if(i.size===0)return A;let n=new Set(t),s=[],o,c;return r.forEach((p,d)=>{if(n.has(p))if(i.has(p)){let h=this.compressionSvc.nToId(d);o==null?o=h:c=h}else o!=null&&(c==null?s.push(o):s.push(o+R+c),o=void 0,c=void 0)}),o!=null&&(c==null?s.push(o):s.push(o+R+c)),s.join(S)}zipDiffString(i,e,t){return i===e||i==null?"":[i,this.compressionSvc.nToId(t.indexOf(i))]}zipDiffNumber(i,e){return i===e||i==null?"":i.toString()}zipDiffRational(i,e){return i==null||e!=null&&i.eq(e)?"":i.toString()}zipDiffBool(i,e){return i===e?"":i?O:wi}zipDiffIndices(i,e){let t=i!=null?i.length>0?i.join(R):A:"",r=e!=null?e.length>0?e.join(R):A:"";return t===r?"":t}zipDiffArray(i,e,t){let r=i!=null?i.length>0?i.join(R):A:"",n=e!=null?e.length>0?e.join(R):A:"";return r===n?"":i==null||i.length===0?r:[r,i.map(s=>this.compressionSvc.nToId(t.indexOf(s))).join(R)]}parseString(i,e){if(e!=null)return this.parseNString(i,e);if(i?.length)return i}parseBool(i){if(i?.length)return i===O}parseNumber(i){if(i?.length)return Number(i)}parseRational(i){if(i?.length)return q(i)}parseArray(i,e){if(e)return this.parseNArray(i,e);if(i?.length)return i===A?[]:i.split(R)}parseIndices(i,e){if(i?.length)return i===A?[]:i.split(R).map(t=>Number(t)).map(t=>e[t]??{})}parseNString(i,e){let t=this.parseString(i);return t==null?t:e[this.compressionSvc.idToN(t)]}parseNArray(i,e){let t=this.parseArray(i);return t==null?t:t.map(r=>e[this.compressionSvc.idToN(r)])}parseSubset(i,e){if(!i?.length)return;if(i===A)return new Set;let t=i.split(S),r=new Set;for(let n of t){let[s,o]=n.split(R).map(d=>this.compressionSvc.idToN(d)),c=o!=null?o+1:s+1;e.slice(s,c).forEach(d=>r.add(d))}return r}set(i,e,t){return r=>(n,s,...o)=>{let c=s(e),p=s(t),d=r(c,p,...o),h,f;Array.isArray(d)?[h,f]=[...d]:h=f=d,h&&(i.bare[n]=h,i.hash[n]=f)}}get(i){return e=>(e=e.bind(this),(t,...r)=>e(i[t],...r))}static{this.\u0275fac=function(e){return new(e||u)}}static{this.\u0275prov=D({token:u,factory:u.\u0275fac,providedIn:"root"})}}return u})();var g="_",Z="?",P="=",a=function(u){return u.Version="v",u.Mod="b",u.Objectives="p",u.RecipeObjectives="q",u.Items="i",u.Recipes="r",u.Machines="f",u.Modules="m",u.Beacons="e",u.Settings="s",u.Zip="z",u}(a||{}),ii=function(u){return u.ExpensiveDeprecation="The expensive setting has been removed. Please use or request an expensive data set instead.",u.LimitStepDeprecation="Limit steps have been replaced by limit objectives. Results may differ if using multiple objectives as limits apply to all objectives.",u}(ii||{}),Ci=(()=>{class u{constructor(){this.analyticsSvc=w(Oi),this.compressionSvc=w(L),this.contentSvc=w(Bi),this.translateSvc=w(Ai),this.zipSvc=w(J)}migrate(i,e){if(Object.keys(e).length===0)return{modId:i??X,params:{},isBare:!0};e=H(e);let t=T(e.v,b.Version0);this.analyticsSvc.event("unzip_version",t);let r=e.z==null;(r||t===b.Version0)&&Object.keys(e).forEach(o=>{Array.isArray(e[o])?e[o]=e[o].map(c=>decodeURIComponent(c)):e[o]&&(e[o]=decodeURIComponent(e[o]))});let n=this.migrateAny(i,e,r,t);return this.displayWarnings(n.warnings),["o","i","r","m","e","b"].forEach(o=>{let c=n.params[o];typeof c=="string"&&(n.params[o]=[c])}),{modId:n.modId,params:n.params,isBare:n.isBare}}migrateAny(i,e,t,r){let s={modId:i,params:e,warnings:[],isBare:t};switch(r){case b.Version0:return this.migrateV0(s);case b.Version1:return this.migrateV1(s);case b.Version2:return this.migrateV2(s);case b.Version3:return this.migrateV3(s);case b.Version4:return this.migrateV4(s);case b.Version5:return this.migrateV5(s);case b.Version6:return this.migrateV6(s);case b.Version7:return this.migrateV7(s);case b.Version8:return this.migrateV8(s);case b.Version9:return this.migrateV9(s);case b.Version10:return this.migrateV10(s);default:return s}}migrateV0(i){let{params:e}=i;if(e[a.Settings]){let r=I(e[a.Settings]).split(S),n=this.zipSvc.parseString(r[0]);n=n&&G.modHash[G.modHashV0.indexOf(n)],n=n??"";let s=this.zipSvc.parseNumber(r[6])??60,o=s===1?"0":s===3600?"2":"1";e[a.Settings]=this.zipSvc.zipFields([n,o,I(e[a.Mod]),r[1],r[3],r[4],r[5],r[7],r[8],r[10],r[9],r[2],r[11],r[12]])}else e[a.Mod]&&(e[a.Settings]=this.zipSvc.zipFields([Z,Z,I(e[a.Mod])]));return delete e[a.Mod],e[a.Version]=b.Version1,this.migrateV1(i)}migrateV1(i){let{params:e,warnings:t}=i;if(e[a.Settings]){let n=I(e[a.Settings]).split(S),s=11;if(n.length>s){let o=n.splice(s,1);this.zipSvc.parseBool(o[0])&&t.push(ii.ExpensiveDeprecation)}e[a.Settings]=this.zipSvc.zipFields(n)}return e[a.Version]=b.Version4,this.migrateV4(i)}migrateV2(i){let{params:e}=i;if(e[a.Recipes]){let r=I(e[a.Recipes]).split(g),n=[],s=3;for(let o of r){let c=o.split(S);if(c.length>s){let p=this.parseNNumber(c[s])?.toString();c[s]=this.zipSvc.zipString(p)}n.push(this.zipSvc.zipFields(c))}e[a.Recipes]=n.join(g)}if(e[a.Machines]){let r=I(e[a.Machines]).split(g),n=[],s=2;for(let o of r){let c=o.split(S);if(c.length>s){let p=this.parseNNumber(c[s])?.toString();c[s]=this.zipSvc.zipString(p)}n.push(this.zipSvc.zipFields(c))}e[a.Machines]=n.join(g)}return e[a.Version]=b.Version3,this.migrateV3(i)}migrateV3(i){let{params:e,warnings:t}=i;if(e[a.Settings]){let n=I(e[a.Settings]).split(S),s=10;if(n.length>s){let o=n.splice(s,1);this.zipSvc.parseBool(o[0])&&t.push(ii.ExpensiveDeprecation)}e[a.Settings]=this.zipSvc.zipFields(n)}return e[a.Version]=b.Version5,this.migrateV5(i)}migrateInlineBeaconsSection(i,e,t,r){if(i[e]){let s=I(i[e]).split(g),o=[];for(let c of s.map(p=>p.split(S))){let p=t+1,d=p+1,h=d+3;if(c.length>t){let f,m,j;c.length>h&&(j=c.splice(h,1)[0]),c.length>d&&(f=c.splice(d,1)[0]),c.length>p&&(m=c.splice(p,1)[0]);let l=c[t];c[t]=this.zipSvc.zipArray([r.length]),r.push(this.zipSvc.zipFields([l,this.zipSvc.zipString(m),this.zipSvc.zipString(f),this.zipSvc.zipString(j)]))}o.push(this.zipSvc.zipFields(c))}i[e]=o.join(g)}}migrateInlineBeacons(i){let e=[];return this.migrateInlineBeaconsSection(i.params,a.RecipeObjectives,4,e),this.migrateInlineBeaconsSection(i.params,a.Recipes,3,e),e.length&&(i.params[a.Beacons]=e.join(g)),i}migrateV4(i){return i=this.migrateInlineBeacons(i),i.params[a.Version]=b.Version6,this.migrateV6(i)}migrateV5(i){return i=this.migrateInlineBeacons(i),i.params[a.Version]=b.Version7,this.migrateV7(i)}migrateInsertField(i,e,t){if(i[e]){let r=I(i[e]).split(g);for(let n=0;n<r.length;n++){let s=r[n].split(S);s.length>t&&(s.splice(t,0,""),r[n]=this.zipSvc.zipFields(s))}i[e]=r.join(g)}}migrateDeleteField(i,e,t){if(i[e]){let r=I(i[e]).split(g);for(let n=0;n<r.length;n++){let s=r[n].split(S);s.length>t&&(s.splice(t,1),r[n]=this.zipSvc.zipFields(s))}i[e]=r.join(g)}}migrateMoveUpField(i,e,t){if(i[e]!=null){let r=i[e];for(i.splice(e,1),i.length>t&&i.splice(t,0,"");i.length<=t;)i.push("");i[t]=r}}migrateToV8(i){let{params:e,isBare:t}=i,r=!1;if(this.migrateInsertField(e,a.RecipeObjectives,2),e[a.Objectives]){let n=I(e[a.Objectives]).split(g),s=[...n];for(let o=0;o<n.length;o++){let p=n[o].split(S);if(p[2]==="3")if(t){let d=e[a.RecipeObjectives]?I(e[a.RecipeObjectives]).split(g):[];if(p.length>3){let h=[p[3],p[1],B.Limit.toString()],f=[p[0],"1",B.Maximize.toString()];d.push(this.zipSvc.zipFields(f)),d.push(this.zipSvc.zipFields(h)),r=!0}else d.push(this.zipSvc.zipFields([p[0],p[1]]));s.splice(o,1),e[a.RecipeObjectives]=d.join(g)}else p[2]="0",s[o]=this.zipSvc.zipFields(p);else if(p.length>3){let d=[p[3],p[1],p[2],B.Limit.toString()],h=[p[0],"1","",B.Maximize.toString()];s[o]=this.zipSvc.zipFields(h),s.push(this.zipSvc.zipFields(d)),r=!0}}r&&i.warnings.push(ii.LimitStepDeprecation),e[a.Objectives]=s.join(g)}if(this.migrateDeleteField(e,a.Items,4),this.migrateInsertField(e,a.Recipes,1),e[a.Settings]){let n=I(e[a.Settings]).split(S),s=t?1:0;if(n.length>2+s){let o=this.zipSvc.parseArray(n[2+s].replaceAll(P,A));if(o){let c=I(e[a.Recipes]),p=c?c.split(g):[];for(let d of o){let h=!1;for(let f=0;f<p.length;f++){let m=p[f].split(S);m[0]===d&&(h=!0,m[1]=O,p[f]=this.zipSvc.zipFields(m))}h||p.push(this.zipSvc.zipFields([d,O]))}e[a.Recipes]=p.join(g)}n.splice(2+s,1)}n.splice(s,0,""),this.migrateMoveUpField(n,16+s,20+s),this.migrateMoveUpField(n,15+s,19+s),this.migrateMoveUpField(n,14+s,18+s),this.migrateMoveUpField(n,13+s,17+s),e[a.Settings]=this.zipSvc.zipFields(n)}return e[a.Version]=b.Version8,i}migrateV6(i){return i.isBare=!0,this.migrateV8(this.migrateToV8(i))}migrateV7(i){return i.isBare=!1,this.migrateV8(this.migrateToV8(i))}migrateV8(i){let{params:e}=i;if(e[a.RecipeObjectives]){let t=[];e[a.Objectives]&&(t=I(e[a.Objectives]).split(g));let r=I(e[a.RecipeObjectives]).split(g);for(let n of r){let s=n.split(S),o=this.zipSvc.zipFields([s[0],s[1],"3",s[2],s[3],s[4],s[5],s[6],s[7]]);t.push(o)}e[a.RecipeObjectives]="",e[a.Objectives]=t.join(g)}return this.migrateV9(i)}migrateInlineModulesSection(i,e,t,r){if(i[e]){let s=I(i[e]).split(g),o=[];for(let c of s.map(p=>p.split(S))){if(c.length>t){let p=c[t],d=this.zipSvc.parseArray(p);if(d==null)continue;let h=new Map;for(let m of d){let j=h.get(m)??0;h.set(m,j+1)}let f=Array.from(h.keys()).map((m,j)=>r.length+j);c[t]=this.zipSvc.zipArray(f);for(let m of h.keys())r.push(this.zipSvc.zipFields([T(h.get(m)?.toString(),""),m]))}o.push(this.zipSvc.zipFields(c))}i[e]=o.join(g)}}migrateV9(i){let{params:e}=i,t=[];if(this.migrateInlineModulesSection(i.params,a.Beacons,1,t),this.migrateInlineModulesSection(i.params,a.Recipes,3,t),this.migrateInlineModulesSection(i.params,a.Objectives,5,t),i.params[a.Machines]){let n=I(e[a.Machines]).split(g),s=[],o=i.params[a.Beacons]?I(i.params[a.Beacons]).split(g):[],c=2,p=c+1,d=p+1;n.map(h=>h.split(S)).forEach((h,f)=>{if(f===0&&h[0]===O&&(h[0]=P),this.migrateMoveUpField(h,5,6),h[0]!==P&&h[0]!==""&&h.length>1){let m=h[1];if(m){let j=m.split(R)[0];h[1]=this.zipSvc.zipArray([t.length]),t.push(this.zipSvc.zipFields(["",j]))}}if(h.length>2){let m,j;if(h.length>d&&(m=h.splice(d,1)[0]),h.length>p){let y=h.splice(p,1)[0];if(y){let N=y.split(R)[0];j=[t.length],t.push(this.zipSvc.zipFields(["",N]))}}let l=h[c];h[c]=this.zipSvc.zipArray([o.length]),o.push(this.zipSvc.zipFields([l,this.zipSvc.zipArray(j),this.zipSvc.zipString(m)]))}s.push(this.zipSvc.zipFields(h))}),o.length&&(i.params[a.Beacons]=o.join(g)),i.params[a.Machines]=s.join(g)}if(t.length&&(i.params[a.Modules]=t.join(g)),e[a.Settings]){let r=I(e[a.Settings]).split(S),n=i.isBare?5:4;if(r.length>n){let s=r.splice(n,1)[0];if(e[a.Machines]){let o=I(e[a.Machines]).split(g).map(p=>p.split(S)),c=o.find(p=>p[0]===P||p[0]==="");if(c){for(;c.length<4;)c.push("");c[3]=s}else o.unshift(["","","",s]);e[a.Machines]=o.map(p=>this.zipSvc.zipFields(p)).join(g)}else e[a.Machines]=["","","",s].join(S);e[a.Settings]=r.join(S)}}return e[a.Version]=b.Version10,this.migrateV10(i)}migrateV10(i){let{params:e}=i;delete e[a.RecipeObjectives];let t=new Set,r=new Set,n=new Set,s=new Set,o=new Set;function c(v,z){z.size!==0&&(e[v]=Array.from(z).join(R))}let p=e[a.Modules];delete e[a.Modules];let d=p?.split(g),h=e[a.Beacons];delete e[a.Beacons];let f=h?.split(g),m=e[a.Objectives];delete e[a.Objectives];let j=[],l=m?.split(g).map((v,z)=>{let M=v.split(S),U=z.toString();return j.push(U),M[8]===O&&t.add(U),M.splice(8,1),M.join(S)}).filter(v=>v);l?.length&&(e.o=l),t.size&&(e.och=this.zipSvc.zipDiffSubset(t,void 0,j));let y=e[a.Items];delete e[a.Items];let N=y?.split(g).map(v=>{let z=v.split(S),M=z[0];return z[1]===O&&r.add(M),z[4]===O&&n.add(M),z.splice(4,1),z.splice(1,1),z.join(S)}).filter(v=>v);N?.length&&(e.i=N),c("v10iex",r),c("v10ich",n);let k=e[a.Recipes];delete e[a.Recipes];let E=k?.split(g).map(v=>{let z=v.split(S),M=z[0];return z[1]===O&&s.add(M),z[7]===O&&o.add(M),z.splice(7,1),z.splice(1,1),z.join(S)}).filter(v=>v);E?.length&&(e.r=E),c("v10rex",s),c("v10rch",o);let Li=e[a.Machines];delete e[a.Machines];let K,oi,pi,ai,li,ei=[];Li?.split(g).forEach((v,z)=>{let M=v.split(S),U=M[0];z===0?(U===P&&(K=[]),pi=M[1],ai=M[2],oi=M[3],li=M[4]):(K?.push(U),M.length>1&&ei.push(v))}),ei.length&&(e.m=ei),e.mmr=K?.join(R),e.mfr=oi,e.mer=pi,e.mbe=ai,e.moc=li;let hi=e[a.Settings];if(delete e[a.Settings],hi){let v=hi.split(S),z=i.isBare?v.splice(0,1)[0]:void 0;z&&(i.modId=z);let M=v[0];M&&M!==Z&&c("v10tre",new Set(M.split(R))),["odr","mpr","ibe","ifr","bmi","bre","bic","mit","icw","ifw","ipi","mbr","mps","rnp","omt","cfa","cma","cun","cex","csu","cmx","osm","cfp"].forEach((ui,C)=>{e[ui]=v[C+1]||void 0}),i.isBare||["ifr","bmi","bre","omt"].filter(C=>e[C]!=null).forEach(C=>{e[C]=this.parseNNumber(I(e[C]))?.toString()})}let Pi=e[a.Mod];delete e[a.Mod];let $=Pi;$&&!i.isBare&&($=G.modHash[this.compressionSvc.idToN($)]),$&&(i.modId=$),e.e=d,e.b=f,e.v=b.Version11,F(e);function di(v){return v.replaceAll(Z,"").replaceAll(P,A)}return Object.keys(e).forEach(v=>{let z=e[v];Array.isArray(z)?e[v]=z.map(M=>di(M)):z&&(e[v]=di(z))}),i}restoreV10ResearchedTechnologies(i,e){let t=e.items.filter(c=>c.technology),r=t.map(c=>c.id);if(i==null||!r.length)return;let n=new Set(i),s=xi(t),o;do{o=new Set;for(let c of n)s[c].technology?.prerequisites?.filter(d=>!n.has(d)).forEach(d=>o.add(d));o.forEach(c=>n.add(c))}while(o.size);if(n.size!==r.length)return n}parseNNumber(i){if(i?.length)return this.compressionSvc.idToN(i)}parseSet(i,e){if(i==null)return;let t=i.split(R);return e==null?new Set(t):new Set(t.map(r=>e[this.compressionSvc.idToN(r)]))}displayWarnings(i){this.translateSvc.multi(["app.migrationWarning","OK"]).pipe(vi()).subscribe(([e,t])=>{for(let r of i)this.contentSvc.confirm({message:r,header:e,acceptLabel:t,rejectVisible:!1})})}static{this.\u0275fac=function(e){return new(e||u)}}static{this.\u0275prov=D({token:u,factory:u.\u0275fac,providedIn:"root"})}}return u})();var Be=(()=>{class u{get empty(){return{bare:{},hash:{}}}get emptyRecipeSettingsInfo(){return{idMap:{},list:[]}}get emptyMachineSettings(){return{moduleMap:{},beaconMap:{}}}constructor(){this.router=w(ji),this.compressionSvc=w(L),this.dataSvc=w(ki),this.itemsSvc=w(Ti),this.machinesSvc=w(Ei),this.migrationSvc=w(Ci),this.objectivesSvc=w(Ui),this.recipesSvc=w(Di),this.settingsSvc=w(Ni),this.zipSvc=w(J),this.zipState$=new ti,this.zipConfig=si(this.empty),this.version=b.Version11,this.zipTail={v:this.version},this.route$=new ti,this.ready=si(!1),this.navigating$=new fi(!1),this.stored=Vi("router"),this.route$.pipe(W(i=>Si({params:i.params,queryParams:i.queryParams})),Ii(this.navigating$),gi(([i,e])=>!e),Q(([i])=>i),W(t=>x(this,[t],function*({params:i,queryParams:e}){return e=yield this.unzipQueryParams(e),{params:i,queryParams:e}})),Q(({params:i,queryParams:e})=>this.migrationSvc.migrate(i.id,e)),W(({modId:i,params:e,isBare:t})=>this.updateState(i,e,t))).subscribe(),yi(()=>{let i=this.ready(),e=this.settingsSvc.hash();if(!i||!e)return;let t=this.objectivesSvc.state(),r=this.itemsSvc.state(),n=this.recipesSvc.state(),s=this.machinesSvc.state(),o=this.settingsSvc.state(),c=this.settingsSvc.dataset();this.zipState$.next({objectives:t,items:r,recipes:n,machines:s,settings:o,data:c,hash:e})}),this.zipState$.pipe(zi(0),Q(i=>this.zipState(i)),bi(i=>{this.zipConfig.set(i.config)}),W(i=>this.updateUrl(i))).subscribe()}updateUrl(i){return x(this,null,function*(){let e=yield this.getHash(i);this.navigating$.next(!0),yield this.router.navigate([],{queryParams:e}),this.navigating$.next(!1);let t=this.router.url,r=t.split("?")[0];(r.endsWith("list")||r.endsWith("flow"))&&this.stored.set(t)})}zipState(i){let{objectives:e,items:t,recipes:r,machines:n,settings:s,data:o,hash:c}=i,p=this.zipModulesBeacons(e,r,n,s,c);return this.zipObjectives(p,e,c),this.zipItems(p,t,c),this.zipRecipes(p,r,c),this.zipMachines(p,n,c),this.zipSettings(p,s,Object.keys(e),o,c),p}stepHref(i,e,t){return x(this,null,function*(){if(t==null)return null;let r;if(i.itemId!=null&&i.items!=null?r={1:{id:"1",targetId:i.itemId,value:i.items,unit:Y.Items,type:B.Output}}:i.recipeId!=null&&i.machines!=null&&(r={1:{id:"1",targetId:i.recipeId,value:i.machines,unit:Y.Machines,type:B.Output}}),r==null)return null;let n={objectives:this.empty,config:e,objectiveSettings:this.emptyMachineSettings,recipeSettings:this.emptyMachineSettings,machineSettings:this.emptyMachineSettings};return this.zipObjectives(n,r,t),yield this.getHash(n)})}getHashParams(i){return x(this,null,function*(){let e=this.toString(i);return{z:yield this.compressionSvc.deflate(e),v:this.version}})}getHash(i){return x(this,null,function*(){let e=H(i.objectives.bare,i.config.bare,this.zipTail),t=H(i.objectives.hash,i.config.hash,this.zipTail),r=yield this.getHashParams(t),s=this.toString(e).length,c=this.toString(r).length;return s<Math.max(c,Mi)?e:r})}toParams(i){let e=i.split("&");return e.some(t=>!t.includes("="))?e.reduce((t,r)=>(t[r[0]]=r.substring(1),t),{}):e.reduce((t,r)=>{let[n,s]=r.split("=");return t[n]==null?t[n]=s:Array.isArray(t[n])?t[n].push(s):t[n]=[t[n],s],t},{})}toString(i){return Object.keys(i).flatMap(e=>{let t=i[e];return Array.isArray(t)?t.map(r=>`${e}=${r}`):t?`${e}=${t}`:[]},"").join("&")}unzipQueryParams(i){return x(this,null,function*(){let e=i.z;if(e!=null)try{let t=I(e).replace(/\+/g,"-").replace(/\//g,".").replace(/=/g,"_"),r=yield this.compressionSvc.inflate(t);i=this.toParams(r),i.z=e}catch(t){throw console.error(t),new Error("RouterService failed to parse url")}return i})}updateState(i,e,t){return x(this,null,function*(){if(i==null&&Object.keys(e).length===0){this.ready.set(!0);return}let[r,n]=yield mi(this.dataSvc.requestData(i??X)),s=t?void 0:n,o=this.unzipModules(e,s),c=this.unzipBeacons(e,o,s),p={};p.objectivesState=this.unzipObjectives(e,o,c,s),p.itemsState=this.unzipItems(e,s),p.recipesState=this.unzipRecipes(e,o,c,s),p.machinesState=this.unzipMachines(e,o,c,s);let d=p.objectivesState?Object.keys(p.objectivesState):[];p.settingsState=this.unzipSettings(i,e,c,d,r,n,s),this.dispatch(p)})}dispatch(i){this.objectivesSvc.load(i.objectivesState),this.itemsSvc.load(i.itemsState),this.recipesSvc.load(i.recipesState),this.machinesSvc.load(i.machinesState),this.settingsSvc.load(i.settingsState),this.ready.set(!0)}zipModulesBeacons(i,e,t,r,n){let s=this.emptyRecipeSettingsInfo,o=this.emptyRecipeSettingsInfo,c=y=>this.zipMachineSettings(y,s,o,n),p=c(i),d=c(e),h=c(t),f;if(r.beacons){let y=this.beaconModuleMap(r.beacons,s,n);f=this.zipBeaconArray(r.beacons,y,o,n)}let m=this.empty,j=["bare","hash"];return[["e",s.list],["b",o.list]].forEach(([y,N])=>{N.forEach(k=>{j.forEach(E=>{m[E][y]==null?m[E][y]=[k[E]]:m[E][y].push(k[E])})})}),{objectives:this.empty,config:m,objectiveSettings:p,recipeSettings:d,machineSettings:h,beacons:f}}zipMachineSettings(i,e,t,r){let n=this.emptyMachineSettings;for(let s of Object.keys(i)){let o=i[s];if(o.modules!=null&&(n.moduleMap[s]=this.zipModuleArray(o.modules,e,r)),o.beacons!=null){let c=this.beaconModuleMap(o.beacons,e,r);n.beaconMap[s]=this.zipBeaconArray(o.beacons,c,t,r)}}return n}beaconModuleMap(i,e,t){return i.map(r=>{if(r.modules!=null)return this.zipModuleArray(r.modules,e,t)})}zipModuleArray(i,e,t){return i.map(r=>{let n=this.zipSvc.zipRational(r.count),s={bare:this.zipSvc.zipFields([n,this.zipSvc.zipString(r.id)]),hash:this.zipSvc.zipFields([n,this.zipSvc.zipNString(r.id,t.modules)])};return e.idMap[s.bare]==null&&(e.idMap[s.bare]=e.list.length,e.list.push(s)),e.idMap[s.bare]})}unzipModules(i,e){return i.e==null?[]:i.e.map(t=>{let r=t.split(S),n=0,s={count:this.zipSvc.parseRational(r[n++]),id:this.zipSvc.parseString(r[n++],e?.modules)};return F(s),s})}zipBeaconArray(i,e,t,r){return i.map((n,s)=>{let o=this.zipSvc.zipRational(n.count),c=this.zipSvc.zipArray(e[s]),p=this.zipSvc.zipRational(n.total),d={bare:this.zipSvc.zipFields([o,c,this.zipSvc.zipString(n.id),p]),hash:this.zipSvc.zipFields([o,c,this.zipSvc.zipNString(n.id,r.beacons),p])};return t.idMap[d.bare]==null&&(t.idMap[d.bare]=t.list.length,t.list.push(d)),t.idMap[d.bare]})}unzipBeacons(i,e,t){return i.b==null?[]:i.b.map(r=>{let n=r.split(S),s=0,o={count:this.zipSvc.parseRational(n[s++]),modules:this.zipSvc.parseIndices(n[s++],e),id:this.zipSvc.parseString(n[s++],t?.beacons),total:this.zipSvc.parseRational(n[s++])};return F(o),o})}zipObjectives(i,e,t){let r=Object.keys(e);if(!r.length)return;let n=r.map(s=>e[s]);i.objectives.bare.o=[],i.objectives.hash.o=[];for(let s of n){let o=this.zipSvc.zipDiffRational(s.value,q.one),c=this.zipSvc.zipDiffNumber(s.unit,Y.Items),p=this.zipSvc.zipDiffNumber(s.type,B.Output),d=this.zipSvc.zipArray(i.objectiveSettings.moduleMap[s.id]),h=this.zipSvc.zipArray(i.objectiveSettings.beaconMap[s.id]),f=this.zipSvc.zipNumber(s.overclock);i.objectives.bare.o.push(this.zipSvc.zipFields([s.targetId,o,c,p,this.zipSvc.zipString(s.machineId),d,h,f,this.zipSvc.zipString(s.fuelId)])),i.objectives.hash.o.push(this.zipSvc.zipFields([this.zipSvc.zipNString(s.targetId,ri(s)?t.recipes:t.items),o,c,p,this.zipSvc.zipNString(s.machineId,t.machines),d,h,f,this.zipSvc.zipNString(s.fuelId,t.fuels)]))}}unzipObjectives(i,e,t,r){if(i.o==null)return;let n={},s=1;for(let o of i.o){let c=o.split(S),p=0,d=s.toString(),h={id:s.toString(),targetId:c[p++],value:T(this.zipSvc.parseRational(c[p++]),q.one),unit:this.zipSvc.parseNumber(c[p++])??Y.Items,type:this.zipSvc.parseNumber(c[p++])??B.Output,machineId:this.zipSvc.parseString(c[p++],r?.machines),modules:this.zipSvc.parseIndices(c[p++],e),beacons:this.zipSvc.parseIndices(c[p++],t),overclock:this.zipSvc.parseRational(c[p++]),fuelId:this.zipSvc.parseString(c[p++],r?.fuels)};r&&(h.targetId=T(this.zipSvc.parseNString(h.targetId,ri(h)?r.recipes:r.items),"")),F(h),n[d]=h,s++}return n}zipItems(i,e,t){let r=Object.keys(e);if(r.length){i.config.bare.i=[],i.config.hash.i=[];for(let n of r){let s=e[n];i.config.bare.i.push(this.zipSvc.zipFields([n,this.zipSvc.zipString(s.beltId),this.zipSvc.zipString(s.wagonId),this.zipSvc.zipRational(s.stack)])),i.config.hash.i.push(this.zipSvc.zipFields([this.zipSvc.zipNString(n,t.items),this.zipSvc.zipNString(s.beltId,t.belts),this.zipSvc.zipNString(s.wagonId,t.wagons),this.zipSvc.zipRational(s.stack)]))}}}unzipItems(i,e){if(i.i==null)return;let t={};for(let r of i.i){let n=r.split(S),s=0,o=T(this.zipSvc.parseString(n[s++],e?.items),""),c={beltId:this.zipSvc.parseString(n[s++],e?.belts),wagonId:this.zipSvc.parseString(n[s++],e?.wagons),stack:this.zipSvc.parseRational(n[s++])};F(c),Object.keys(c).length&&(t[o]=c)}return t}zipRecipes(i,e,t){let r=Object.keys(e);if(r.length){i.config.bare.r=[],i.config.hash.r=[];for(let n of r){let s=e[n],o=this.zipSvc.zipArray(i.recipeSettings.moduleMap[n]),c=this.zipSvc.zipArray(i.recipeSettings.beaconMap[n]),p=this.zipSvc.zipNumber(s.overclock),d=this.zipSvc.zipNumber(s.cost),h=this.zipSvc.zipNumber(s.productivity);i.config.bare.r.push(this.zipSvc.zipFields([n,this.zipSvc.zipString(s.machineId),o,c,p,d,this.zipSvc.zipString(s.fuelId),h])),i.config.hash.r.push(this.zipSvc.zipFields([this.zipSvc.zipNString(n,t.recipes),this.zipSvc.zipNString(s.machineId,t.machines),o,c,p,d,this.zipSvc.zipNString(s.fuelId,t.fuels),h]))}}}unzipRecipes(i,e,t,r){if(i.r==null)return;let n={};for(let s of i.r){let o=s.split(S),c=0,p=T(this.zipSvc.parseString(o[c++],r?.recipes),""),d={machineId:this.zipSvc.parseString(o[c++],r?.machines),modules:this.zipSvc.parseArray(o[c++])?.map(h=>e[Number(h)]??{}),beacons:this.zipSvc.parseArray(o[c++])?.map(h=>t[Number(h)]??{}),overclock:this.zipSvc.parseRational(o[c++]),cost:this.zipSvc.parseRational(o[c++]),fuelId:this.zipSvc.parseString(o[c++],r?.fuels),productivity:this.zipSvc.parseRational(o[c++])};F(d),Object.keys(d).length&&(n[p]=d)}return n}zipMachines(i,e,t){let r=Object.keys(e);if(r.length){i.config.bare.m=[],i.config.hash.m=[];for(let n of r){let s=e[n],o=this.zipSvc.zipArray(i.machineSettings.moduleMap[n]),c=this.zipSvc.zipArray(i.machineSettings.beaconMap[n]),p=this.zipSvc.zipNumber(s.overclock);i.config.bare.m.push(this.zipSvc.zipFields([n,o,c,this.zipSvc.zipString(s.fuelId),p])),i.config.hash.m.push(this.zipSvc.zipFields([this.zipSvc.zipNString(n,t.machines),o,c,this.zipSvc.zipNString(s.fuelId,t.fuels),p]))}}}unzipMachines(i,e,t,r){if(i.m==null)return;let n={};for(let s of i.m){let o=s.split(S),c=0,p=T(this.zipSvc.parseString(o[c++],r?.machines),""),d={modules:this.zipSvc.parseArray(o[c++])?.map(h=>e[Number(h)]??{}),beacons:this.zipSvc.parseArray(o[c++])?.map(h=>t[Number(h)]??{}),fuelId:this.zipSvc.parseString(o[c++],r?.fuels),overclock:this.zipSvc.parseRational(o[c++])};F(d),Object.keys(d).length&&(n[p]=d)}return n}zipSettings(i,e,t,r,n){let s=Fi,o=this.zipSvc.set(i.config,e,s),c=o(this.zipSvc.zipDiffSubset.bind(this.zipSvc)),p=o(this.zipSvc.zipDiffNumber.bind(this.zipSvc)),d=o(this.zipSvc.zipDiffBool.bind(this.zipSvc)),h=o(this.zipSvc.zipDiffString.bind(this.zipSvc)),f=o(this.zipSvc.zipDiffRational.bind(this.zipSvc)),m=o(this.zipSvc.zipDiffArray.bind(this.zipSvc)),j=o(this.zipSvc.zipDiffIndices.bind(this.zipSvc));c("och",l=>l.checkedObjectiveIds,t),p("omt",l=>l.maximizeType),d("orm",l=>l.requireMachinesOutput),p("odr",l=>l.displayRate),c("iex",l=>l.excludedItemIds,r.itemIds,n.items),c("ich",l=>l.checkedItemIds,r.itemIds,n.items),h("ibe",l=>l.beltId,n.belts),h("ipi",l=>l.pipeId,n.belts),h("icw",l=>l.cargoWagonId,n.wagons),h("ifw",l=>l.fluidWagonId,n.wagons),f("ifr",l=>l.flowRate),f("ist",l=>l.stack),c("rex",l=>l.excludedRecipeIds,r.recipeIds,n.recipes),c("rch",l=>l.checkedRecipeIds,r.recipeIds,n.recipes),d("rnp",l=>l.netProductionOnly),p("mpr",l=>l.preset),m("mmr",l=>l.machineRankIds,n.machines),m("mfr",l=>l.fuelRankIds,n.fuels),m("mer",l=>l.moduleRankIds,n.modules),j("mbe",l=>l===s?void 0:i.beacons),f("moc",l=>l.overclock),f("mbr",l=>l.beaconReceivers),h("mps",l=>l.proliferatorSprayId,n.modules),p("mit",l=>l.inserterTarget),f("bmi",l=>l.miningBonus),f("bre",l=>l.researchBonus),p("bic",l=>l.inserterCapacity),c("tre",l=>l.researchedTechnologyIds,r.technologyIds,n.technologies),c("loc",l=>l.locationIds,r.locationIds,n.locations??[]),f("cfa",l=>l.costs.factor),f("cma",l=>l.costs.machine),f("cfp",l=>l.costs.footprint),f("cun",l=>l.costs.unproduceable),f("cex",l=>l.costs.excluded),f("csu",l=>l.costs.surplus),f("cmx",l=>l.costs.maximize),f("cre",l=>l.costs.recycling)}unzipSettings(i,e,t,r,n,s,o){let c=this.zipSvc.get(e),p=c(this.zipSvc.parseSubset.bind(this.zipSvc)),d=c(this.zipSvc.parseNumber.bind(this.zipSvc)),h=c(this.zipSvc.parseBool.bind(this.zipSvc)),f=c(this.zipSvc.parseString.bind(this.zipSvc)),m=c(this.zipSvc.parseRational.bind(this.zipSvc)),j=c(this.zipSvc.parseArray.bind(this.zipSvc)),l=c(this.zipSvc.parseIndices.bind(this.zipSvc)),y={modId:i,checkedObjectiveIds:p("och",r),maximizeType:d("omt"),requireMachinesOutput:h("orm"),displayRate:d("odr"),excludedItemIds:p("iex",s.items),checkedItemIds:p("ich",s.items),beltId:f("ibe",o?.belts),pipeId:f("ipi",o?.belts),cargoWagonId:f("icw",o?.wagons),fluidWagonId:f("ifw",o?.wagons),flowRate:m("ifr"),stack:m("ist"),excludedRecipeIds:p("rex",s.recipes),checkedRecipeIds:p("rch",s.recipes),netProductionOnly:h("rnp"),preset:d("mpr"),machineRankIds:j("mmr",o?.machines),fuelRankIds:j("mfr",o?.fuels),moduleRankIds:j("mer",o?.modules),beacons:l("mbe",t),overclock:m("moc"),beaconReceivers:m("mbr"),proliferatorSprayId:f("mps",o?.modules),inserterTarget:d("mit"),miningBonus:m("bmi"),researchBonus:m("bre"),inserterCapacity:d("bic"),researchedTechnologyIds:p("tre",s.technologies),locationIds:p("loc",s.locations??[])},N={factor:m("cfa"),machine:m("cma"),footprint:m("cfp"),unproduceable:m("cun"),excluded:m("cex"),surplus:m("csu"),maximize:m("cmx"),recycling:m("cre")},k=this.migrationSvc.parseSet.bind(this.migrationSvc);if(e.v10iex&&(y.excludedItemIds=k(e.v10iex,o?.items)),e.v10ich&&(y.checkedItemIds=k(e.v10ich,o?.items)),e.v10rex&&(y.excludedRecipeIds=k(e.v10rex,o?.recipes)),e.v10rch&&(y.checkedRecipeIds=k(e.v10rch,o?.recipes)),e.v10tre&&(y.researchedTechnologyIds=k(e.v10tre,o?.technologies),y.researchedTechnologyIds=this.migrationSvc.restoreV10ResearchedTechnologies(y.researchedTechnologyIds,n)),F(N),Object.keys(N).length&&(y.costs=N),F(y),!!Object.keys(y).length)return y}static{this.\u0275fac=function(e){return new(e||u)}}static{this.\u0275prov=D({token:u,factory:u.\u0275fac,providedIn:"root"})}}return u})();export{Ci as a,Be as b};
