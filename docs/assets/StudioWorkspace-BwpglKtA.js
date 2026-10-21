import{a as e,i as t,n,t as r}from"./index-yL7N-EC0.js";var i=e(t(),1),a={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},o={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},s=`attached`,c=1e3,l=1001,u=1002,d=1003,f=1004,p=1005,m=1006,h=1007,g=1008,_=1009,v=1014,y=1015,b=1016,x=1020,S=1023,C=1026,w=1027,T=2300,E=2301,D=2302,O=2400,k=2401,A=2402,ee=2500,te=3e3,j=3001,ne=3200,M=3201,N=`srgb`,P=`srgb-linear`,re=`display-p3`,ie=`display-p3-linear`,F=`linear`,ae=`srgb`,oe=`rec709`,se=7680,ce=35044,le=1035,ue=2e3,de=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},fe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),pe=1234567,me=Math.PI/180,he=180/Math.PI;function I(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fe[e&255]+fe[e>>8&255]+fe[e>>16&255]+fe[e>>24&255]+`-`+fe[t&255]+fe[t>>8&255]+`-`+fe[t>>16&15|64]+fe[t>>24&255]+`-`+fe[n&63|128]+fe[n>>8&255]+`-`+fe[n>>16&255]+fe[n>>24&255]+fe[r&255]+fe[r>>8&255]+fe[r>>16&255]+fe[r>>24&255]).toLowerCase()}function L(e,t,n){return Math.max(t,Math.min(n,e))}function R(e,t){return(e%t+t)%t}function ge(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function z(e,t,n){return e===t?0:(n-e)/(t-e)}function _e(e,t,n){return(1-n)*e+n*t}function B(e,t,n,r){return _e(e,t,1-Math.exp(-n*r))}function ve(e,t=1){return t-Math.abs(R(e,t*2)-t)}function ye(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function be(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function xe(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Se(e,t){return e+Math.random()*(t-e)}function Ce(e){return e*(.5-Math.random())}function we(e){e!==void 0&&(pe=e);let t=pe+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Te(e){return e*me}function Ee(e){return e*he}function De(e){return!(e&e-1)&&e!==0}function Oe(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ke(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ae(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function V(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function je(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Me={DEG2RAD:me,RAD2DEG:he,generateUUID:I,clamp:L,euclideanModulo:R,mapLinear:ge,inverseLerp:z,lerp:_e,damp:B,pingpong:ve,smoothstep:ye,smootherstep:be,randInt:xe,randFloat:Se,randFloatSpread:Ce,seededRandom:we,degToRad:Te,radToDeg:Ee,isPowerOfTwo:De,ceilPowerOfTwo:Oe,floorPowerOfTwo:ke,setQuaternionFromProperEuler:Ae,normalize:je,denormalize:V},H=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(L(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},U=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ne.makeScale(e,t)),this}rotate(e){return this.premultiply(Ne.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ne.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ne=new U;function Pe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Fe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ie(){let e=Fe(`canvas`);return e.style.display=`block`,e}var Le={};function Re(e){e in Le||(Le[e]=!0,console.warn(e))}var ze=new U().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Be=new U().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ve={[P]:{transfer:F,primaries:oe,toReference:e=>e,fromReference:e=>e},[N]:{transfer:ae,primaries:oe,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[ie]:{transfer:F,primaries:`p3`,toReference:e=>e.applyMatrix3(Be),fromReference:e=>e.applyMatrix3(ze)},[re]:{transfer:ae,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Be),fromReference:e=>e.applyMatrix3(ze).convertLinearToSRGB()}},He=new Set([P,ie]),Ue={enabled:!0,_workingColorSpace:P,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!He.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=Ve[t].toReference,i=Ve[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Ve[e].primaries},getTransfer:function(e){return e===``?F:Ve[e].transfer}};function We(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ge(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ke,qe=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ke===void 0&&(Ke=Fe(`canvas`)),Ke.width=e.width,Ke.height=e.height;let n=Ke.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ke}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Fe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=We(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(We(t[e]/255)*255):t[e]=We(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Je=0,Ye=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Je++}),this.uuid=I(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Xe(r[t].image)):e.push(Xe(r[t]))}else e=Xe(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Xe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?qe.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Ze=0,Qe=class e extends de{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=l,i=l,a=m,o=g,s=S,c=_,u=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ze++}),this.uuid=I(),this.name=``,this.source=new Ye(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d==`string`?this.colorSpace=d:(Re(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=d===3001?N:``),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case c:e.x-=Math.floor(e.x);break;case l:e.x=e.x<0?0:1;break;case u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case c:e.y-=Math.floor(e.y);break;case l:e.y=e.y<0?0:1;break;case u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Re(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace===`srgb`?j:te}set encoding(e){Re(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=e===3001?N:``}};Qe.DEFAULT_IMAGE=null,Qe.DEFAULT_MAPPING=300,Qe.DEFAULT_ANISOTROPY=1;var $e=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},et=class extends de{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Re(`THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.`),n.colorSpace=n.encoding===3001?N:``),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:m,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Qe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ye(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},tt=class extends et{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nt=class extends Qe{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=d,this.minFilter=d,this.wrapR=l,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rt=class extends Qe{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=d,this.minFilter=d,this.wrapR=l,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},W=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(L(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(at.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(at.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return it.copy(this).projectOnVector(e),this.sub(it)}reflect(e){return this.sub(it.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(L(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},it=new G,at=new W,ot=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ct.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ct.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ct.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ct):ct.fromBufferAttribute(r,t),ct.applyMatrix4(e.matrixWorld),this.expandByPoint(ct);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),lt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),lt.copy(e.boundingBox)),lt.applyMatrix4(e.matrixWorld),this.union(lt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ct),ct.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gt),_t.subVectors(this.max,gt),ut.subVectors(e.a,gt),dt.subVectors(e.b,gt),ft.subVectors(e.c,gt),pt.subVectors(dt,ut),mt.subVectors(ft,dt),ht.subVectors(ut,ft);let t=[0,-pt.z,pt.y,0,-mt.z,mt.y,0,-ht.z,ht.y,pt.z,0,-pt.x,mt.z,0,-mt.x,ht.z,0,-ht.x,-pt.y,pt.x,0,-mt.y,mt.x,0,-ht.y,ht.x,0];return!bt(t,ut,dt,ft,_t)||(t=[1,0,0,0,1,0,0,0,1],!bt(t,ut,dt,ft,_t))?!1:(vt.crossVectors(pt,mt),t=[vt.x,vt.y,vt.z],bt(t,ut,dt,ft,_t))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ct).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ct).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(st[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),st[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),st[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),st[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),st[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),st[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),st[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),st[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(st)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},st=[new G,new G,new G,new G,new G,new G,new G,new G],ct=new G,lt=new ot,ut=new G,dt=new G,ft=new G,pt=new G,mt=new G,ht=new G,gt=new G,_t=new G,vt=new G,yt=new G;function bt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){yt.fromArray(e,a);let o=i.x*Math.abs(yt.x)+i.y*Math.abs(yt.y)+i.z*Math.abs(yt.z),s=t.dot(yt),c=n.dot(yt),l=r.dot(yt);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var xt=new ot,St=new G,Ct=new G,wt=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?xt.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;St.subVectors(e,this.center);let t=St.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(St,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ct.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(St.copy(e.center).add(Ct)),this.expandByPoint(St.copy(e.center).sub(Ct))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Tt=new G,Et=new G,Dt=new G,Ot=new G,kt=new G,At=new G,jt=new G,Mt=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tt.copy(this.origin).addScaledVector(this.direction,t),Tt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Et.copy(e).add(t).multiplyScalar(.5),Dt.copy(t).sub(e).normalize(),Ot.copy(this.origin).sub(Et);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Dt),o=Ot.dot(this.direction),s=-Ot.dot(Dt),c=Ot.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Et).addScaledVector(Dt,d),f}intersectSphere(e,t){Tt.subVectors(e.center,this.origin);let n=Tt.dot(this.direction),r=Tt.dot(Tt)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Tt)!==null}intersectTriangle(e,t,n,r,i){kt.subVectors(t,e),At.subVectors(n,e),jt.crossVectors(kt,At);let a=this.direction.dot(jt),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ot.subVectors(this.origin,e);let s=o*this.direction.dot(At.crossVectors(Ot,At));if(s<0)return null;let c=o*this.direction.dot(kt.cross(Ot));if(c<0||s+c>a)return null;let l=-o*Ot.dot(jt);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},K=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Nt.setFromMatrixColumn(e,0).length(),i=1/Nt.setFromMatrixColumn(e,1).length(),a=1/Nt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ft,e,It)}lookAt(e,t,n){let r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Lt.crossVectors(n,zt),Lt.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Lt.crossVectors(n,zt)),Lt.normalize(),Rt.crossVectors(zt,Lt),r[0]=Lt.x,r[4]=Rt.x,r[8]=zt.x,r[1]=Lt.y,r[5]=Rt.y,r[9]=zt.y,r[2]=Lt.z,r[6]=Rt.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],j=r[3],ne=r[7],M=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*A+c*ne,i[8]=a*C+o*D+s*ee+c*M,i[12]=a*w+o*O+s*te+c*N,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*A+f*ne,i[9]=l*C+u*D+d*ee+f*M,i[13]=l*w+u*O+d*te+f*N,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*A+g*ne,i[10]=p*C+m*D+h*ee+g*M,i[14]=p*w+m*O+h*te+g*N,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*A+b*ne,i[11]=_*C+v*D+y*ee+b*M,i[15]=_*w+v*O+y*te+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Nt.set(r[0],r[1],r[2]).length(),a=Nt.set(r[4],r[5],r[6]).length(),o=Nt.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Pt.copy(this);let s=1/i,c=1/a,l=1/o;return Pt.elements[0]*=s,Pt.elements[1]*=s,Pt.elements[2]*=s,Pt.elements[4]*=c,Pt.elements[5]*=c,Pt.elements[6]*=c,Pt.elements[8]*=l,Pt.elements[9]*=l,Pt.elements[10]*=l,t.setFromRotationMatrix(Pt),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=ue){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ue){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Nt=new G,Pt=new K,Ft=new G(0,0,0),It=new G(1,1,1),Lt=new G,Rt=new G,zt=new G,Bt=new K,Vt=new W,Ht=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(L(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-L(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(L(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-L(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(L(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-L(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vt.setFromEuler(this),this.setFromQuaternion(Vt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ht.DEFAULT_ORDER=`XYZ`;var Ut=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Wt=0,Gt=new G,Kt=new W,qt=new K,Jt=new G,Yt=new G,Xt=new G,Zt=new W,Qt=new G(1,0,0),$t=new G(0,1,0),en=new G(0,0,1),tn={type:`added`},nn={type:`removed`},rn=class e extends de{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=I(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new Ht,r=new W,i=new G(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new K},normalMatrix:{value:new U}}),this.matrix=new K,this.matrixWorld=new K,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ut,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kt.setFromAxisAngle(e,t),this.quaternion.multiply(Kt),this}rotateOnWorldAxis(e,t){return Kt.setFromAxisAngle(e,t),this.quaternion.premultiply(Kt),this}rotateX(e){return this.rotateOnAxis(Qt,e)}rotateY(e){return this.rotateOnAxis($t,e)}rotateZ(e){return this.rotateOnAxis(en,e)}translateOnAxis(e,t){return Gt.copy(e).applyQuaternion(this.quaternion),this.position.add(Gt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qt,e)}translateY(e){return this.translateOnAxis($t,e)}translateZ(e){return this.translateOnAxis(en,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jt.copy(e):Jt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Yt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(Yt,Jt,this.up):qt.lookAt(Jt,Yt,this.up),this.quaternion.setFromRotationMatrix(qt),r&&(qt.extractRotation(r.matrixWorld),Kt.setFromRotationMatrix(qt),this.quaternion.premultiply(Kt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tn)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nn)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yt,e,Xt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yt,Zt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};rn.DEFAULT_UP=new G(0,1,0),rn.DEFAULT_MATRIX_AUTO_UPDATE=!0,rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new G,q=new G,on=new G,sn=new G,cn=new G,ln=new G,un=new G,dn=new G,fn=new G,pn=new G,mn=!1,hn=class e{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){an.subVectors(r,t),q.subVectors(n,t),on.subVectors(e,t);let a=an.dot(an),o=an.dot(q),s=an.dot(on),c=q.dot(q),l=q.dot(on),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,sn)!==null&&sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,n,r,i,a,o,s){return mn===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),mn=!0),this.getInterpolation(e,t,n,r,i,a,o,s)}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,sn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,sn.x),s.addScaledVector(a,sn.y),s.addScaledVector(o,sn.z),s)}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),q.subVectors(e,t),an.cross(q).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),q.subVectors(this.a,this.b),an.cross(q).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return mn===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),mn=!0),e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;cn.subVectors(r,n),ln.subVectors(i,n),dn.subVectors(e,n);let s=cn.dot(dn),c=ln.dot(dn);if(s<=0&&c<=0)return t.copy(n);fn.subVectors(e,r);let l=cn.dot(fn),u=ln.dot(fn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(cn,a);pn.subVectors(e,i);let f=cn.dot(pn),p=ln.dot(pn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ln,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return un.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(un,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(cn,a).addScaledVector(ln,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},vn={h:0,s:0,l:0};function yn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var J=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=N){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ue.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ue.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ue.workingColorSpace){if(e=R(e,1),t=L(t,0,1),n=L(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=yn(i,r,e+1/3),this.g=yn(i,r,e),this.b=yn(i,r,e-1/3)}return Ue.toWorkingColorSpace(this,r),this}setStyle(e,t=N){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=N){let n=gn[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=We(e.r),this.g=We(e.g),this.b=We(e.b),this}copyLinearToSRGB(e){return this.r=Ge(e.r),this.g=Ge(e.g),this.b=Ge(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=N){return Ue.fromWorkingColorSpace(bn.copy(this),e),Math.round(L(bn.r*255,0,255))*65536+Math.round(L(bn.g*255,0,255))*256+Math.round(L(bn.b*255,0,255))}getHexString(e=N){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ue.workingColorSpace){Ue.fromWorkingColorSpace(bn.copy(this),t);let n=bn.r,r=bn.g,i=bn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=N){Ue.fromWorkingColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,r=bn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(vn);let n=_e(_n.h,vn.h,t),r=_e(_n.s,vn.s,t),i=_e(_n.l,vn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new J;J.NAMES=gn;var xn=0,Sn=class extends de{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xn++}),this.uuid=I(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=se,this.stencilZFail=se,this.stencilZPass=se,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Cn=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wn=new G,Tn=new H,En=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ce,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=y,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXY(t,Tn.x,Tn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=V(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=V(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=V(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=V(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=V(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Dn=class extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}},On=class extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}},kn=class extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}},An=0,jn=new K,Mn=new rn,Nn=new G,Pn=new ot,Fn=new ot,In=new G,Ln=class e extends de{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:An++}),this.uuid=I(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Pe(e)?On:Dn)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Mn.lookAt(e),Mn.updateMatrix(),this.applyMatrix4(Mn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nn).negate(),this.translate(Nn.x,Nn.y,Nn.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new kn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Pn.setFromBufferAttribute(n),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new G,1/0);else if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fn.setFromBufferAttribute(n),this.morphTargetsRelative?(In.addVectors(Pn.min,Fn.min),Pn.expandByPoint(In),In.addVectors(Pn.max,Fn.max),Pn.expandByPoint(In)):(Pn.expandByPoint(Fn.min),Pn.expandByPoint(Fn.max))}Pn.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)In.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(In));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)In.fromBufferAttribute(a,t),o&&(Nn.fromBufferAttribute(e,t),In.add(Nn)),r=Math.max(r,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new En(new Float32Array(4*o),4));let s=this.getAttribute(`tangent`).array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new G,l[e]=new G;let u=new G,d=new G,f=new G,p=new H,m=new H,h=new H,g=new G,_=new G;function v(e,t,n){u.fromArray(r,e*3),d.fromArray(r,t*3),f.fromArray(r,n*3),p.fromArray(a,e*2),m.fromArray(a,t*2),h.fromArray(a,n*2),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new G,x=new G,S=new G,C=new G;function w(e){S.fromArray(i,e*3),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[e*4]=b.x,s[e*4+1]=b.y,s[e*4+2]=b.z,s[e*4+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new G,i=new G,a=new G,o=new G,s=new G,c=new G,l=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new En(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Rn=new K,zn=new Mt,Bn=new wt,Vn=new G,Hn=new G,Un=new G,Wn=new G,Gn=new G,Kn=new G,qn=new H,Jn=new H,Yn=new H,Xn=new G,Zn=new G,Qn=new G,$n=new G,er=new G,tr=class extends rn{constructor(e=new Ln,t=new Cn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Kn.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Gn.fromBufferAttribute(s,e),a?Kn.addScaledVector(Gn,r):Kn.addScaledVector(Gn.sub(t),r))}t.add(Kn)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bn.copy(n.boundingSphere),Bn.applyMatrix4(i),zn.copy(e.ray).recast(e.near),!(Bn.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Bn,Vn)===null||zn.origin.distanceToSquared(Vn)>(e.far-e.near)**2))&&(Rn.copy(i).invert(),zn.copy(e.ray).applyMatrix4(Rn),(n.boundingBox===null||zn.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=rr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=rr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=rr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=rr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function nr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;er.copy(s),er.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(er);return l<n.near||l>n.far?null:{distance:l,point:er.clone(),object:e}}function rr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Hn),e.getVertexPosition(c,Un),e.getVertexPosition(l,Wn);let u=nr(e,t,n,r,Hn,Un,Wn,$n);if(u){i&&(qn.fromBufferAttribute(i,s),Jn.fromBufferAttribute(i,c),Yn.fromBufferAttribute(i,l),u.uv=hn.getInterpolation($n,Hn,Un,Wn,qn,Jn,Yn,new H)),a&&(qn.fromBufferAttribute(a,s),Jn.fromBufferAttribute(a,c),Yn.fromBufferAttribute(a,l),u.uv1=hn.getInterpolation($n,Hn,Un,Wn,qn,Jn,Yn,new H),u.uv2=u.uv1),o&&(Xn.fromBufferAttribute(o,s),Zn.fromBufferAttribute(o,c),Qn.fromBufferAttribute(o,l),u.normal=hn.getInterpolation($n,Hn,Un,Wn,Xn,Zn,Qn,new G),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new G,materialIndex:0};hn.getNormal(Hn,Un,Wn,e.normal),u.face=e}return u}var ir=class e extends Ln{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new kn(c,3)),this.setAttribute(`normal`,new kn(l,3)),this.setAttribute(`uv`,new kn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new G;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ar(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function or(e){let t={};for(let n=0;n<e.length;n++){let r=ar(e[n]);for(let e in r)t[e]=r[e]}return t}function sr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function cr(e){return e.getRenderTarget()===null?e.outputColorSpace:Ue.workingColorSpace}var lr={clone:ar,merge:or},ur=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fr=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ur,this.fragmentShader=dr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=sr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},pr=class extends rn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new K,this.projectionMatrix=new K,this.projectionMatrixInverse=new K,this.coordinateSystem=ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mr=class extends pr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=he*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(me*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return he*2*Math.atan(Math.tan(me*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(me*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hr=-90,gr=1,_r=class extends rn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new mr(hr,gr,e,t);r.layers=this.layers,this.add(r);let i=new mr(hr,gr,e,t);i.layers=this.layers,this.add(i);let a=new mr(hr,gr,e,t);a.layers=this.layers,this.add(a);let o=new mr(hr,gr,e,t);o.layers=this.layers,this.add(o);let s=new mr(hr,gr,e,t);s.layers=this.layers,this.add(s);let c=new mr(hr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},vr=class extends Qe{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yr=class extends tt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Re(`THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.`),t.colorSpace=t.encoding===3001?N:``),this.texture=new vr(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?m:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ir(5,5,5),i=new fr({name:`CubemapFromEquirect`,uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new tr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=m),new _r(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},br=new G,xr=new G,Sr=new U,Cr=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=br.subVectors(n,t).cross(xr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(br),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sr.getNormalMatrix(e),r=this.coplanarPoint(br).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},wr=new wt,Tr=new G,Er=class{constructor(e=new Cr,t=new Cr,n=new Cr,r=new Cr,i=new Cr,a=new Cr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ue){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Tr.x=r.normal.x>0?e.max.x:e.min.x,Tr.y=r.normal.y>0?e.max.y:e.min.y,Tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dr(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Or(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(r,s),e.bufferData(r,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(i instanceof Uint16Array){if(t.isFloat16BufferAttribute){if(n)c=e.HALF_FLOAT;else throw Error(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`)}else c=e.UNSIGNED_SHORT}else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function a(t,r,i){let a=r.array,o=r._updateRange,s=r.updateRanges;if(e.bindBuffer(i,t),o.count===-1&&s.length===0&&e.bufferSubData(i,0,a),s.length!==0){for(let t=0,r=s.length;t<r;t++){let r=s[t];n?e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count):e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}o.count!==-1&&(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1),r.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);if(n===void 0)r.set(e,i(e,t));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);a(n.buffer,e,t),n.version=e.version}}return{get:o,remove:s,update:c}}var kr=class e extends Ln{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new kn(p,3)),this.setAttribute(`normal`,new kn(m,3)),this.setAttribute(`uv`,new kn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Ar={basic:{uniforms:or([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:or([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:or([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:or([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:or([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new J(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:or([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:or([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:or([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:or([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:or([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:or([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distanceRGBA:{uniforms:or([X.common,X.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distanceRGBA_vert,fragmentShader:Y.distanceRGBA_frag},shadow:{uniforms:or([X.lights,X.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Ar.physical={uniforms:or([Ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var jr={r:0,b:0,g:0};function Mr(e,t,n,r,i,a,o){let s=new J(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(a,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:t).get(_)),_===null?h(s,c):_&&_.isColor&&(h(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();v===`additive`?r.buffers.color.setClear(0,0,0,1,o):v===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new tr(new ir(1,1,1),new fr({name:`BackgroundCubeMaterial`,uniforms:ar(Ar.backgroundCube.uniforms),vertexShader:Ar.backgroundCube.vertexShader,fragmentShader:Ar.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Ue.getTransfer(_.colorSpace)!==ae,(d!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),a.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new tr(new kr(2,2),new fr({name:`BackgroundMaterial`,uniforms:ar(Ar.background.uniforms),vertexShader:Ar.background.vertexShader,fragmentShader:Ar.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Ue.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),l.layers.enableAll(),a.unshift(l,l.geometry,l.material,0,0,null))}function h(t,n){t.getRGB(jr,cr(e)),r.buffers.color.setClear(jr.r,jr.g,jr.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,h(s,c)},render:m}}function Nr(e,t,n,r){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=g(null),l=c,u=!1;function d(t,r,i,a,s){let c=!1;if(o){let e=h(a,i,r);l!==e&&(l=e,p(l.object)),c=_(t,a,i,s),c&&v(t,a,i,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}s!==null&&n.update(s,e.ELEMENT_ARRAY_BUFFER),(c||u)&&(u=!1,w(t,r,i,a),s!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(s).buffer))}function f(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function m(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function h(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=g(f()),a[r]=o),o}function g(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function _(e,t,n,r){let i=l.attributes,a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=i[t],r=a[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;o++}return l.attributesNum!==o||l.index!==r}function v(e,t,n,r){let i={},a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=a[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,o++}l.attributes=i,l.attributesNum=o,l.index=r}function y(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function b(e){x(e,0)}function x(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function S(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function C(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function w(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;y();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let a=l[t];if(a.location>=0){let o=c[t];if(o===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(o=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(o=i.instanceColor)),o!==void 0){let t=o.normalized,c=o.itemSize,l=n.get(o);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=r.isWebGL2===!0&&(d===e.INT||d===e.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let n=o.data,r=n.stride,l=o.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)x(a.location+e,n.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,r*f,(l+c/a.locationSize*e)*f,p)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)x(a.location+e,o.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,c*f,c/a.locationSize*e*f,p)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(a.location,n);break;case 3:e.vertexAttrib3fv(a.location,n);break;case 4:e.vertexAttrib4fv(a.location,n);break;default:e.vertexAttrib1fv(a.location,n)}}}}S()}function T(){O();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e]}}function E(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function D(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)m(r[e].object),delete r[e];delete n[e.id]}}function O(){k(),u=!0,l!==c&&(l=c,p(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function Pr(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}function l(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t],r[t]);else{o.multiDrawArraysWEBGL(a,e,0,r,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function Fr(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e.constructor.name===`WebGL2RenderingContext`,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function Ir(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Cr,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Lr(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new yr(a.height/2);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Rr=class extends pr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zr=4,Br=[.125,.215,.35,.446,.526,.582],Vr=20,Hr=new Rr,Ur=new J,Wr=null,Gr=0,Kr=0,qr=(1+Math.sqrt(5))/2,Jr=1/qr,Yr=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,qr,Jr),new G(0,qr,-Jr),new G(Jr,0,qr),new G(-Jr,0,qr),new G(qr,Jr,0),new G(-qr,Jr,0)],Xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ni(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ti(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wr,Gr,Kr),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:m,minFilter:m,generateMipmaps:!1,type:b,format:S,colorSpace:P,depthBuffer:!1},r=Qr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qr(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zr(r)),this._blurMaterial=ei(r,e,t)}return r}_compileMaterial(e){let t=new tr(this._lodPlanes[0],e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,n,r){let i=new mr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Ur),s.toneMapping=0,s.autoClear=!1;let u=new Cn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new tr(new ir,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Ur),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;$r(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ni()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ti());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new tr(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;$r(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Hr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=Yr[(t-1)%Yr.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new tr(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Vr;m>Vr&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);let h=[],g=0;for(let e=0;e<Vr;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];$r(t,3*v*(r>_-zr?r-_+zr:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Hr)}};function Zr(e){let t=[],n=[],r=[],i=e,a=e-zr+1+Br.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-zr?s=Br[o-e+zr-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ln;h.setAttribute(`position`,new En(f,3)),h.setAttribute(`uv`,new En(p,2)),h.setAttribute(`faceIndex`,new En(m,1)),t.push(h),i>zr&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Qr(e,t,n){let r=new tt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function $r(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ei(e,t,n){let r=new Float32Array(Vr),i=new G(0,1,0);return new fr({name:`SphericalGaussianBlur`,defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ri(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ti(){return new fr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ri(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ni(){return new fr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ri(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ri(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ii(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let i=t.get(r);return n===null&&(n=new Xr(e)),i=s?n.fromEquirectangular(r,i):n.fromCubemap(r,i),t.set(r,i),i.texture}if(t.has(r))return t.get(r).texture;{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){n===null&&(n=new Xr(e));let i=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,i),r.addEventListener(`dispose`,a),i.texture}return null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function ai(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?(n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`)):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function oi(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Pe(n)?On:Dn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function si(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}function f(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t]/c,r[t]);else{o.multiDrawElementsWEBGL(a,r,0,s,e,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function ci(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function li(e,t){return e[0]-t[0]}function ui(e,t){return Math.abs(t[1])-Math.abs(e[1])}function di(e,t,n){let r={},i=new Float32Array(8),a=new WeakMap,o=new $e,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function c(c,l,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let r=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,i=r===void 0?0:r.length,s=a.get(l);if(s===void 0||s.count!==i){s!==void 0&&s.texture.dispose();let e=l.morphAttributes.position!==void 0,n=l.morphAttributes.normal!==void 0,r=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],u=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),r===!0&&(f=3);let p=l.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*i),g=new nt(h,p,m,i);g.type=y,g.needsUpdate=!0;let _=f*4;for(let t=0;t<i;t++){let i=c[t],a=u[t],s=d[t],l=p*m*4*t;for(let t=0;t<i.count;t++){let c=t*_;e===!0&&(o.fromBufferAttribute(i,t),h[l+c+0]=o.x,h[l+c+1]=o.y,h[l+c+2]=o.z,h[l+c+3]=0),n===!0&&(o.fromBufferAttribute(a,t),h[l+c+4]=o.x,h[l+c+5]=o.y,h[l+c+6]=o.z,h[l+c+7]=0),r===!0&&(o.fromBufferAttribute(s,t),h[l+c+8]=o.x,h[l+c+9]=o.y,h[l+c+10]=o.z,h[l+c+11]=s.itemSize===4?o.w:1)}}s={count:i,texture:g,size:new H(p,m)},a.set(l,s);function v(){g.dispose(),a.delete(l),l.removeEventListener(`dispose`,v)}l.addEventListener(`dispose`,v)}let c=0;for(let e=0;e<d.length;e++)c+=d[e];let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,d),u.getUniforms().setValue(e,`morphTargetsTexture`,s.texture,n),u.getUniforms().setValue(e,`morphTargetsTextureSize`,s.size)}else{let t=d===void 0?0:d.length,n=r[l.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[l.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=d[e]}n.sort(ui);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort(li);let a=l.morphAttributes.position,o=l.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&l.getAttribute(`morphTarget`+e)!==a[n]&&l.setAttribute(`morphTarget`+e,a[n]),o&&l.getAttribute(`morphNormal`+e)!==o[n]&&l.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&l.hasAttribute(`morphTarget`+e)===!0&&l.deleteAttribute(`morphTarget`+e),o&&l.hasAttribute(`morphNormal`+e)===!0&&l.deleteAttribute(`morphNormal`+e),i[e]=0)}let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:c}}function fi(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var pi=class extends Qe{constructor(e,t,n,r,i,a,o,s,c,l){if(l=l===void 0?C:l,l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=v),n===void 0&&l===1027&&(n=x),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?d:o,this.minFilter=s===void 0?d:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mi=new Qe,hi=new pi(1,1);hi.compareFunction=515;var gi=new nt,_i=new rt,vi=new vr,yi=[],bi=[],xi=new Float32Array(16),Si=new Float32Array(9),Ci=new Float32Array(4);function wi(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=yi[i];if(a===void 0&&(a=new Float32Array(i),yi[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ti(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ei(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Di(e,t){let n=bi[t];n===void 0&&(n=new Int32Array(t),bi[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Oi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ki(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ti(n,t))return;e.uniform2fv(this.addr,t),Ei(n,t)}}function Ai(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ti(n,t))return;e.uniform3fv(this.addr,t),Ei(n,t)}}function ji(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ti(n,t))return;e.uniform4fv(this.addr,t),Ei(n,t)}}function Mi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ti(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ei(n,t)}else{if(Ti(n,r))return;Ci.set(r),e.uniformMatrix2fv(this.addr,!1,Ci),Ei(n,r)}}function Ni(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ti(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ei(n,t)}else{if(Ti(n,r))return;Si.set(r),e.uniformMatrix3fv(this.addr,!1,Si),Ei(n,r)}}function Pi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ti(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ei(n,t)}else{if(Ti(n,r))return;xi.set(r),e.uniformMatrix4fv(this.addr,!1,xi),Ei(n,r)}}function Fi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ii(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ti(n,t))return;e.uniform2iv(this.addr,t),Ei(n,t)}}function Li(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ti(n,t))return;e.uniform3iv(this.addr,t),Ei(n,t)}}function Ri(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ti(n,t))return;e.uniform4iv(this.addr,t),Ei(n,t)}}function zi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Bi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ti(n,t))return;e.uniform2uiv(this.addr,t),Ei(n,t)}}function Vi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ti(n,t))return;e.uniform3uiv(this.addr,t),Ei(n,t)}}function Hi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ti(n,t))return;e.uniform4uiv(this.addr,t),Ei(n,t)}}function Ui(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?hi:mi;n.setTexture2D(t||a,i)}function Wi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||_i,i)}function Gi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||vi,i)}function Ki(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||gi,i)}function qi(e){switch(e){case 5126:return Oi;case 35664:return ki;case 35665:return Ai;case 35666:return ji;case 35674:return Mi;case 35675:return Ni;case 35676:return Pi;case 5124:case 35670:return Fi;case 35667:case 35671:return Ii;case 35668:case 35672:return Li;case 35669:case 35673:return Ri;case 5125:return zi;case 36294:return Bi;case 36295:return Vi;case 36296:return Hi;case 35678:case 36198:case 36298:case 36306:case 35682:return Ui;case 35679:case 36299:case 36307:return Wi;case 35680:case 36300:case 36308:case 36293:return Gi;case 36289:case 36303:case 36311:case 36292:return Ki}}function Ji(e,t){e.uniform1fv(this.addr,t)}function Yi(e,t){let n=wi(t,this.size,2);e.uniform2fv(this.addr,n)}function Xi(e,t){let n=wi(t,this.size,3);e.uniform3fv(this.addr,n)}function Zi(e,t){let n=wi(t,this.size,4);e.uniform4fv(this.addr,n)}function Qi(e,t){let n=wi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function $i(e,t){let n=wi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ea(e,t){let n=wi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ta(e,t){e.uniform1iv(this.addr,t)}function na(e,t){e.uniform2iv(this.addr,t)}function ra(e,t){e.uniform3iv(this.addr,t)}function ia(e,t){e.uniform4iv(this.addr,t)}function aa(e,t){e.uniform1uiv(this.addr,t)}function oa(e,t){e.uniform2uiv(this.addr,t)}function sa(e,t){e.uniform3uiv(this.addr,t)}function ca(e,t){e.uniform4uiv(this.addr,t)}function la(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||mi,a[e])}function ua(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||_i,a[e])}function da(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||vi,a[e])}function fa(e,t,n){let r=this.cache,i=t.length,a=Di(n,i);Ti(r,a)||(e.uniform1iv(this.addr,a),Ei(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||gi,a[e])}function pa(e){switch(e){case 5126:return Ji;case 35664:return Yi;case 35665:return Xi;case 35666:return Zi;case 35674:return Qi;case 35675:return $i;case 35676:return ea;case 5124:case 35670:return ta;case 35667:case 35671:return na;case 35668:case 35672:return ra;case 35669:case 35673:return ia;case 5125:return aa;case 36294:return oa;case 36295:return sa;case 36296:return ca;case 35678:case 36198:case 36298:case 36306:case 35682:return la;case 35679:case 36299:case 36307:return ua;case 35680:case 36300:case 36308:case 36293:return da;case 36289:case 36303:case 36311:case 36292:return fa}}var ma=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qi(t.type)}},ha=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pa(t.type)}},ga=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},_a=/(\w+)(\])?(\[|\.)?/g;function va(e,t){e.seq.push(t),e.map[t.id]=t}function ya(e,t,n){let r=e.name,i=r.length;for(_a.lastIndex=0;;){let a=_a.exec(r),o=_a.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){va(n,l===void 0?new ma(s,e,t):new ha(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ga(s),va(n,e)),n=e}}}var ba=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ya(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function xa(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Sa=37297,Ca=0;function wa(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Ta(e){let t=Ue.getPrimaries(Ue.workingColorSpace),n=Ue.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case P:case ie:return[r,`LinearTransferOETF`];case N:case re:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function Ea(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+wa(e.getShaderSource(t),r)}return i}function Da(e,t){let n=Ta(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Oa(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function ka(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(Na).join(`
`)}function Aa(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``].filter(Na).join(`
`)}function ja(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ma(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Na(e){return e!==``}function Pa(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fa(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ia=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(e){return e.replace(Ia,za)}var Ra=new Map([[`encodings_fragment`,`colorspace_fragment`],[`encodings_pars_fragment`,`colorspace_pars_fragment`],[`output_fragment`,`opaque_fragment`]]);function za(e,t){let n=Y[t];if(n===void 0){let e=Ra.get(t);if(e!==void 0)n=Y[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return La(n)}var Ba=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Va(e){return e.replace(Ba,Ha)}function Ha(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ua(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Wa(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Ga(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Ka(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function qa(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Ja(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ya(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Wa(n),l=Ga(n),u=Ka(n),d=qa(n),f=Ja(n),p=n.isWebGL2?``:ka(n),m=Aa(n),h=ja(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Na).join(`
`),_.length>0&&(_+=`
`),v=[p,`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Na).join(`
`),v.length>0&&(v+=`
`)):(_=[Ua(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors&&n.isWebGL2?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Na).join(`
`),v=[p,Ua(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:Oa(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Da(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Na).join(`
`)),o=La(o),o=Pa(o,n),o=Fa(o,n),s=La(s),s=Pa(s,n),s=Fa(s,n),o=Va(o),s=Va(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`precision mediump sampler2DArray;`,`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=xa(i,i.VERTEX_SHADER,b),C=xa(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g).trim(),r=i.getShaderInfoLog(S).trim(),a=i.getShaderInfoLog(C).trim(),o=!0,s=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=Ea(i,S,`vertex`),t=Ea(i,C,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+n+`
`+e+`
`+t)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:_},fragmentShader:{log:a,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new ba(i,g),E=Ma(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,Sa)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ca++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var Xa=0,Za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qa(e),t.set(e,n)),n}},Qa=class{constructor(e){this.id=Xa++,this.code=e,this.usedTimes=0}};function $a(e,t,n,r,i,a,o){let s=new Ut,c=new Za,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return e===0?`uv`:`uv${e}`}function g(a,s,l,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ar[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let ee=e.getRenderTarget(),te=_.isInstancedMesh===!0,j=_.isBatchedMesh===!0,ne=!!a.map,M=!!a.matcap,N=!!x,re=!!a.aoMap,ie=!!a.lightMap,F=!!a.bumpMap,ae=!!a.normalMap,oe=!!a.displacementMap,se=!!a.emissiveMap,ce=!!a.metalnessMap,le=!!a.roughnessMap,ue=a.anisotropy>0,de=a.clearcoat>0,fe=a.iridescence>0,pe=a.sheen>0,me=a.transmission>0,he=ue&&!!a.anisotropyMap,I=de&&!!a.clearcoatMap,L=de&&!!a.clearcoatNormalMap,R=de&&!!a.clearcoatRoughnessMap,ge=fe&&!!a.iridescenceMap,z=fe&&!!a.iridescenceThicknessMap,_e=pe&&!!a.sheenColorMap,B=pe&&!!a.sheenRoughnessMap,ve=!!a.specularMap,ye=!!a.specularColorMap,be=!!a.specularIntensityMap,xe=me&&!!a.transmissionMap,Se=me&&!!a.thicknessMap,Ce=!!a.gradientMap,we=!!a.alphaMap,Te=a.alphaTest>0,Ee=!!a.alphaHash,De=!!a.extensions,Oe=!!y.attributes.uv1,ke=!!y.attributes.uv2,Ae=!!y.attributes.uv3,V=0;return a.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(V=e.toneMapping),{isWebGL2:u,shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:j,instancing:te,instancingColor:te&&_.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:P,map:ne,matcap:M,envMap:N,envMapMode:N&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:F,normalMap:ae,displacementMap:f&&oe,emissiveMap:se,normalMapObjectSpace:ae&&a.normalMapType===1,normalMapTangentSpace:ae&&a.normalMapType===0,metalnessMap:ce,roughnessMap:le,anisotropy:ue,anisotropyMap:he,clearcoat:de,clearcoatMap:I,clearcoatNormalMap:L,clearcoatRoughnessMap:R,iridescence:fe,iridescenceMap:ge,iridescenceThicknessMap:z,sheen:pe,sheenColorMap:_e,sheenRoughnessMap:B,specularMap:ve,specularColorMap:ye,specularIntensityMap:be,transmission:me,transmissionMap:xe,thicknessMap:Se,gradientMap:Ce,opaque:a.transparent===!1&&a.blending===1,alphaMap:we,alphaTest:Te,alphaHash:Ee,combine:a.combine,mapUv:ne&&h(a.map.channel),aoMapUv:re&&h(a.aoMap.channel),lightMapUv:ie&&h(a.lightMap.channel),bumpMapUv:F&&h(a.bumpMap.channel),normalMapUv:ae&&h(a.normalMap.channel),displacementMapUv:oe&&h(a.displacementMap.channel),emissiveMapUv:se&&h(a.emissiveMap.channel),metalnessMapUv:ce&&h(a.metalnessMap.channel),roughnessMapUv:le&&h(a.roughnessMap.channel),anisotropyMapUv:he&&h(a.anisotropyMap.channel),clearcoatMapUv:I&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:L&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:z&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:B&&h(a.sheenRoughnessMap.channel),specularMapUv:ve&&h(a.specularMap.channel),specularColorMapUv:ye&&h(a.specularColorMap.channel),specularIntensityMapUv:be&&h(a.specularIntensityMap.channel),transmissionMapUv:xe&&h(a.transmissionMap.channel),thicknessMapUv:Se&&h(a.thicknessMap.channel),alphaMapUv:we&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(ae||ue),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:ke,vertexUv3s:Ae,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(ne||we),fog:!!v,useFog:a.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:V,useLegacyLights:e._useLegacyLights,decodeVideoTexture:ne&&a.map.isVideoTexture===!0&&Ue.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionDerivatives:De&&a.extensions.derivatives===!0,extensionFragDepth:De&&a.extensions.fragDepth===!0,extensionDrawBuffers:De&&a.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&a.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),rendererExtensionFragDepth:u||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:u||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:u||r.has(`EXT_shader_texture_lod`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()}}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.useLegacyLights&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Ar[t];n=lr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Ya(e,n,t,a),l.push(r)),r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function eo(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function to(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function no(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ro(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||to),r.length>1&&r.sort(t||no),i.length>1&&i.sort(t||no)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function io(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ro,e.set(t,[i])):n>=r.length?(i=new ro,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ao(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new G,color:new J};break;case`SpotLight`:n={position:new G,direction:new G,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new J,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new J,groundColor:new J};break;case`RectAreaLight`:n={color:new J,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function oo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var so=0;function co(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function lo(e,t){let n=new ao,r=oo(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new G);let a=new G,o=new K,s=new K;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(co);let x=o===!0?Math.PI:1;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,S=t.intensity,C=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*S*x,c+=o.g*S*x,l+=o.b*S*x;else if(t.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],S);b++}else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=w,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(S*x),e.distance=C,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,i.spot[f]=e;let a=t.shadow;if(t.map&&(i.spotLightMap[v]=t.map,v++,a.updateMatrices(t),t.castShadow&&y++),i.spotLightMatrix[f]=a.matrix,t.castShadow){let e=r.get(t);e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[f]=e,i.spotShadowMap[f]=w,_++}f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(S),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=w,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(S*x),e.groundColor.copy(t.groundColor).multiplyScalar(S*x),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2?e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=X.LTC_FLOAT_1,i.rectAreaLTC2=X.LTC_FLOAT_2):(i.rectAreaLTC1=X.LTC_HALF_1,i.rectAreaLTC2=X.LTC_HALF_2):e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=X.LTC_FLOAT_1,i.rectAreaLTC2=X.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=X.LTC_HALF_1,i.rectAreaLTC2=X.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let S=i.hash;(S.directionalLength!==u||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==h||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==b)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=f,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=h,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=b,i.version=so++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function uo(e,t){let n=new lo(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function fo(e,t){let n=new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new uo(e,t),n.set(r,[o])):i>=a.length?(o=new uo(e,t),a.push(o)):o=a[i],o}function i(){n=new WeakMap}return{get:r,dispose:i}}var po=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ne,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mo=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ho=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,go=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _o(e,t,n){let r=new Er,i=new H,a=new H,o=new $e,s=new po({depthPacking:M}),c=new mo,l={},u=n.maxTextureSize,f={0:1,1:0,2:2},p=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:ho,fragmentShader:go}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Ln;h.setAttribute(`position`,new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new tr(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],f=l.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();if(i.multiply(g),a.copy(f.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,f.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,f.mapSize.y=a.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:d,magFilter:d};f.map!==null&&f.map.dispose(),f.map=new tt(i.x,i.y,e),f.map.texture.name=l.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),p.viewport(o),f.updateMatrices(l,e),r=f.getFrustum(),x(n,s,f.camera,l,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,s),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(c,l,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new tt(i.x,i.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function vo(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new $e,r=null,i=new $e(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new J(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,te=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),ne=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),ne=M>=1);let P=null,re={},ie=e.getParameter(e.SCISSOR_BOX),F=e.getParameter(e.VIEWPORT),ae=new $e().fromArray(ie),oe=new $e().fromArray(F);function se(t,n,i,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),le(e.DEPTH_TEST),c.setFunc(3),R(!1),ge(1),le(e.CULL_FACE),I(0);function le(t){f[t]!==!0&&(e.enable(t),f[t]=!0)}function ue(t){f[t]!==!1&&(e.disable(t),f[t]=!1)}function de(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,r&&(t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n)),!0)}function fe(r,i){let a=h,o=!1;if(r){if(a=m.get(i),a===void 0&&(a=[],m.set(i,a)),r.isWebGLMultipleRenderTargets){let t=r.texture;if(a.length!==t.length||a[0]!==e.COLOR_ATTACHMENT0){for(let n=0,r=t.length;n<r;n++)a[n]=e.COLOR_ATTACHMENT0+n;a.length=t.length,o=!0}}else a[0]!==e.COLOR_ATTACHMENT0&&(a[0]=e.COLOR_ATTACHMENT0,o=!0)}else a[0]!==e.BACK&&(a[0]=e.BACK,o=!0);o&&(n.isWebGL2?e.drawBuffers(a):t.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(a))}function pe(t){return g!==t&&(e.useProgram(t),g=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)me[103]=e.MIN,me[104]=e.MAX;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(me[103]=e.MIN_EXT,me[104]=e.MAX_EXT)}let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function I(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(ue(e.BLEND),_=!1);else if(_===!1&&(le(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(me[n],me[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function L(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),R(r),t.blending===1&&t.transparent===!1?I(0):I(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function R(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function ge(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function z(t){t!==A&&(ne&&e.lineWidth(t),A=t)}function _e(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(ee!==n||te!==r)&&(e.polygonOffset(n,r),ee=n,te=r)):ue(e.POLYGON_OFFSET_FILL)}function B(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+j-1),P!==t&&(e.activeTexture(t),P=t)}function ye(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+j-1:P);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function be(){let t=re[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function V(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function je(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Me(t,n){let r=d.get(n);r===void 0&&(r=new WeakMap,d.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function H(t,n){let r=d.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function U(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},P=null,re={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new J(0,0,0),E=0,D=!1,O=null,k=null,A=null,ee=null,te=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:I,setMaterial:L,setFlipSided:R,setCullFace:ge,setLineWidth:z,setPolygonOffset:_e,setScissorTest:B,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:ke,texImage3D:Ae,updateUBOMapping:Me,uniformBlockBinding:H,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:V,viewport:je,reset:U}}function yo(e,t,n,r,i,a,o){let s=i.isWebGL2,_=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,y=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap,S,C=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function T(e,t){return w?new OffscreenCanvas(e,t):Fe(`canvas`)}function E(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||t===!0){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?ke:Math.floor,a=r(i*e.width),o=r(i*e.height);S===void 0&&(S=T(a,o));let s=n?T(a,o):S;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e}return e}function D(e){return De(e.width)&&De(e.height)}function O(e){return s?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function k(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function A(t){e.generateMipmap(t)}function ee(n,r,i,a,o=!1){if(s===!1)return r;if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c=r;if(r===e.RED&&(i===e.FLOAT&&(c=e.R32F),i===e.HALF_FLOAT&&(c=e.R16F),i===e.UNSIGNED_BYTE&&(c=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(c=e.R8UI),i===e.UNSIGNED_SHORT&&(c=e.R16UI),i===e.UNSIGNED_INT&&(c=e.R32UI),i===e.BYTE&&(c=e.R8I),i===e.SHORT&&(c=e.R16I),i===e.INT&&(c=e.R32I)),r===e.RG&&(i===e.FLOAT&&(c=e.RG32F),i===e.HALF_FLOAT&&(c=e.RG16F),i===e.UNSIGNED_BYTE&&(c=e.RG8)),r===e.RGBA){let t=o?F:Ue.getTransfer(a);i===e.FLOAT&&(c=e.RGBA32F),i===e.HALF_FLOAT&&(c=e.RGBA16F),i===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),c}function te(e,t,n){return k(e,n)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(t){return t===1003||t===1004||t===1005?e.NEAREST:e.LINEAR}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),N(t),t.isVideoTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function N(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=C.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&P(e),Object.keys(i).length===0&&C.delete(n)}r.remove(e)}function P(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=C.get(i);delete a[n.__cacheKey],o.memory.textures--}function re(t){let n=t.texture,i=r.get(t),a=r.get(n);if(a.__webglTexture!==void 0&&(e.deleteTexture(a.__webglTexture),o.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(i.__webglFramebuffer[t]))for(let n=0;n<i.__webglFramebuffer[t].length;n++)e.deleteFramebuffer(i.__webglFramebuffer[t][n]);else e.deleteFramebuffer(i.__webglFramebuffer[t]);i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer[t])}else{if(Array.isArray(i.__webglFramebuffer))for(let t=0;t<i.__webglFramebuffer.length;t++)e.deleteFramebuffer(i.__webglFramebuffer[t]);else e.deleteFramebuffer(i.__webglFramebuffer);if(i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer),i.__webglMultisampledFramebuffer&&e.deleteFramebuffer(i.__webglMultisampledFramebuffer),i.__webglColorRenderbuffer)for(let t=0;t<i.__webglColorRenderbuffer.length;t++)i.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(i.__webglColorRenderbuffer[t]);i.__webglDepthRenderbuffer&&e.deleteRenderbuffer(i.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,i=n.length;t<i;t++){let i=r.get(n[t]);i.__webglTexture&&(e.deleteTexture(i.__webglTexture),o.memory.textures--),r.remove(n[t])}r.remove(n),r.remove(t)}let ie=0;function ae(){ie=0}function oe(){let e=ie;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),ie+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ce(t,i){let a=r.get(t);if(t.isVideoTexture&&Te(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{R(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?R(a,t,i):n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?R(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ge(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let pe={[c]:e.REPEAT,[l]:e.CLAMP_TO_EDGE,[u]:e.MIRRORED_REPEAT},me={[d]:e.NEAREST,[f]:e.NEAREST_MIPMAP_NEAREST,[p]:e.NEAREST_MIPMAP_LINEAR,[m]:e.LINEAR,[h]:e.LINEAR_MIPMAP_NEAREST,[g]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function I(n,a,o){if(o?(e.texParameteri(n,e.TEXTURE_WRAP_S,pe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[a.minFilter])):(e.texParameteri(n,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(n,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(a.wrapS!==1001||a.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),e.texParameteri(n,e.TEXTURE_MAG_FILTER,j(a.magFilter)),e.texParameteri(n,e.TEXTURE_MIN_FILTER,j(a.minFilter)),a.minFilter!==1003&&a.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){let o=t.get(`EXT_texture_filter_anisotropic`);if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1||s===!1&&a.type===1016&&t.has(`OES_texture_half_float_linear`)===!1)return;(a.anisotropy>1||r.get(a).__currentAnisotropy)&&(e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy)}}function L(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne));let i=n.source,a=C.get(i);a===void 0&&(a={},C.set(i,a));let s=se(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&P(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function R(t,o,c){let l=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(l=e.TEXTURE_3D);let u=L(t,o),d=o.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);let f=r.get(d);if(d.version!==f.__version||u===!0){n.activeTexture(e.TEXTURE0+c);let t=Ue.getPrimaries(Ue.workingColorSpace),r=o.colorSpace===``?null:Ue.getPrimaries(o.colorSpace),p=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,p);let m=O(o)&&D(o.image)===!1,h=E(o.image,m,!1,i.maxTextureSize);h=Ee(o,h);let g=D(h)||s,_=a.convert(o.format,o.colorSpace),y=a.convert(o.type),b=ee(o.internalFormat,_,y,o.colorSpace,o.isVideoTexture);I(l,o,g);let S,C=o.mipmaps,w=s&&o.isVideoTexture!==!0&&b!==36196,T=f.__version===void 0||u===!0,j=te(o,h,g);if(o.isDepthTexture)b=e.DEPTH_COMPONENT,s?b=o.type===1015?e.DEPTH_COMPONENT32F:o.type===1014?e.DEPTH_COMPONENT24:o.type===1020?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT16:o.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),o.format===1026&&b===e.DEPTH_COMPONENT&&o.type!==1012&&o.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),o.type=v,y=a.convert(o.type)),o.format===1027&&b===e.DEPTH_COMPONENT&&(b=e.DEPTH_STENCIL,o.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),o.type=x,y=a.convert(o.type))),T&&(w?n.texStorage2D(e.TEXTURE_2D,1,b,h.width,h.height):n.texImage2D(e.TEXTURE_2D,0,b,h.width,h.height,0,_,y,null));else if(o.isDataTexture){if(C.length>0&&g){w&&T&&n.texStorage2D(e.TEXTURE_2D,j,b,C[0].width,C[0].height);for(let t=0,r=C.length;t<r;t++)S=C[t],w?n.texSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,_,y,S.data):n.texImage2D(e.TEXTURE_2D,t,b,S.width,S.height,0,_,y,S.data);o.generateMipmaps=!1}else w?(T&&n.texStorage2D(e.TEXTURE_2D,j,b,h.width,h.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,h.width,h.height,_,y,h.data)):n.texImage2D(e.TEXTURE_2D,0,b,h.width,h.height,0,_,y,h.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){w&&T&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,b,C[0].width,C[0].height,h.depth);for(let t=0,r=C.length;t<r;t++)S=C[t],o.format===1023?w?n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,S.width,S.height,h.depth,_,y,S.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,b,S.width,S.height,h.depth,0,_,y,S.data):_===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,S.width,S.height,h.depth,_,S.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,b,S.width,S.height,h.depth,0,S.data,0,0)}else{w&&T&&n.texStorage2D(e.TEXTURE_2D,j,b,C[0].width,C[0].height);for(let t=0,r=C.length;t<r;t++)S=C[t],o.format===1023?w?n.texSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,_,y,S.data):n.texImage2D(e.TEXTURE_2D,t,b,S.width,S.height,0,_,y,S.data):_===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,S.width,S.height,_,S.data):n.compressedTexImage2D(e.TEXTURE_2D,t,b,S.width,S.height,0,S.data)}}else if(o.isDataArrayTexture)w?(T&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,b,h.width,h.height,h.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,h.width,h.height,h.depth,_,y,h.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,b,h.width,h.height,h.depth,0,_,y,h.data);else if(o.isData3DTexture)w?(T&&n.texStorage3D(e.TEXTURE_3D,j,b,h.width,h.height,h.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,h.width,h.height,h.depth,_,y,h.data)):n.texImage3D(e.TEXTURE_3D,0,b,h.width,h.height,h.depth,0,_,y,h.data);else if(o.isFramebufferTexture){if(T){if(w)n.texStorage2D(e.TEXTURE_2D,j,b,h.width,h.height);else{let t=h.width,r=h.height;for(let i=0;i<j;i++)n.texImage2D(e.TEXTURE_2D,i,b,t,r,0,_,y,null),t>>=1,r>>=1}}}else if(C.length>0&&g){w&&T&&n.texStorage2D(e.TEXTURE_2D,j,b,C[0].width,C[0].height);for(let t=0,r=C.length;t<r;t++)S=C[t],w?n.texSubImage2D(e.TEXTURE_2D,t,0,0,_,y,S):n.texImage2D(e.TEXTURE_2D,t,b,_,y,S);o.generateMipmaps=!1}else w?(T&&n.texStorage2D(e.TEXTURE_2D,j,b,h.width,h.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,_,y,h)):n.texImage2D(e.TEXTURE_2D,0,b,_,y,h);k(o,g)&&A(l),f.__version=d.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,o,c){if(o.image.length!==6)return;let l=L(t,o),u=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+c);let t=Ue.getPrimaries(Ue.workingColorSpace),r=o.colorSpace===``?null:Ue.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=o.isCompressedTexture||o.image[0].isCompressedTexture,m=o.image[0]&&o.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)!p&&!m?h[e]=E(o.image[e],!1,!0,i.maxCubemapSize):h[e]=m?o.image[e].image:o.image[e],h[e]=Ee(o,h[e]);let g=h[0],_=D(g)||s,v=a.convert(o.format,o.colorSpace),y=a.convert(o.type),b=ee(o.internalFormat,v,y,o.colorSpace),x=s&&o.isVideoTexture!==!0,S=d.__version===void 0||l===!0,C=te(o,g,_);I(e.TEXTURE_CUBE_MAP,o,_);let w;if(p){x&&S&&n.texStorage2D(e.TEXTURE_CUBE_MAP,C,b,g.width,g.height);for(let t=0;t<6;t++){w=h[t].mipmaps;for(let r=0;r<w.length;r++){let i=w[r];o.format===1023?x?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,v,y,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,v,y,i.data):v===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):x?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,v,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,b,i.width,i.height,0,i.data)}}}else{w=o.mipmaps,x&&S&&(w.length>0&&C++,n.texStorage2D(e.TEXTURE_CUBE_MAP,C,b,h[0].width,h[0].height));for(let t=0;t<6;t++)if(m){x?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,h[t].width,h[t].height,v,y,h[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,h[t].width,h[t].height,0,v,y,h[t].data);for(let r=0;r<w.length;r++){let i=w[r].image[t].image;x?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,v,y,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,b,i.width,i.height,0,v,y,i.data)}}else{x?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,v,y,h[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,b,v,y,h[t]);for(let r=0;r<w.length;r++){let i=w[r];x?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,v,y,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,b,v,y,i.image[t])}}}k(o,_)&&A(e.TEXTURE_CUBE_MAP),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function z(t,i,o,s,c,l){let u=a.convert(o.format,o.colorSpace),d=a.convert(o.type),f=ee(o.internalFormat,u,d,o.colorSpace);if(!r.get(i).__hasExternalTextures){let t=Math.max(1,i.width>>l),r=Math.max(1,i.height>>l);c===e.TEXTURE_3D||c===e.TEXTURE_2D_ARRAY?n.texImage3D(c,l,f,t,r,i.depth,0,u,d,null):n.texImage2D(c,l,f,t,r,0,u,d,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),we(i)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,c,r.get(o).__webglTexture,0,Ce(i)):(c===e.TEXTURE_2D||c>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&c<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,c,r.get(o).__webglTexture,l),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer&&!n.stencilBuffer){let i=s===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(r||we(n)){let t=n.depthTexture;t&&t.isDepthTexture&&(t.type===1015?i=e.DEPTH_COMPONENT32F:t.type===1014&&(i=e.DEPTH_COMPONENT24));let r=Ce(n);we(n)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,r,i,n.width,n.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,r,i,n.width,n.height)}else e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)}else if(n.depthBuffer&&n.stencilBuffer){let i=Ce(n);r&&we(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):we(n)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)}else{let t=n.isWebGLMultipleRenderTargets===!0?n.texture:[n.texture];for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),c=a.convert(o.type),l=ee(o.internalFormat,s,c,o.colorSpace),u=Ce(n);r&&we(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,u,l,n.width,n.height):we(n)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,u,l,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,l,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function B(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),ce(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture,o=Ce(i);if(i.depthTexture.format===1026)we(i)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0);else if(i.depthTexture.format===1027)we(i)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0);else throw Error(`Unknown depthTexture format`)}function ve(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);B(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]=e.createRenderbuffer(),_e(i.__webglDepthbuffer[r],t,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer=e.createRenderbuffer(),_e(i.__webglDepthbuffer,t,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,i){let a=r.get(t);n!==void 0&&z(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ve(t)}function be(t){let c=t.texture,l=r.get(t),u=r.get(c);t.addEventListener(`dispose`,M),t.isWebGLMultipleRenderTargets!==!0&&(u.__webglTexture===void 0&&(u.__webglTexture=e.createTexture()),u.__version=c.version,o.memory.textures++);let d=t.isWebGLCubeRenderTarget===!0,f=t.isWebGLMultipleRenderTargets===!0,p=D(t)||s;if(d){l.__webglFramebuffer=[];for(let t=0;t<6;t++)if(s&&c.mipmaps&&c.mipmaps.length>0){l.__webglFramebuffer[t]=[];for(let n=0;n<c.mipmaps.length;n++)l.__webglFramebuffer[t][n]=e.createFramebuffer()}else l.__webglFramebuffer[t]=e.createFramebuffer()}else{if(s&&c.mipmaps&&c.mipmaps.length>0){l.__webglFramebuffer=[];for(let t=0;t<c.mipmaps.length;t++)l.__webglFramebuffer[t]=e.createFramebuffer()}else l.__webglFramebuffer=e.createFramebuffer();if(f){if(i.drawBuffers){let n=t.texture;for(let t=0,i=n.length;t<i;t++){let i=r.get(n[t]);i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture(),o.memory.textures++)}}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`)}if(s&&t.samples>0&&we(t)===!1){let r=f?c:[c];l.__webglMultisampledFramebuffer=e.createFramebuffer(),l.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer);for(let n=0;n<r.length;n++){let i=r[n];l.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let o=a.convert(i.format,i.colorSpace),s=a.convert(i.type),c=ee(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),u=Ce(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,l.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(l.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(l.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(d){n.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture),I(e.TEXTURE_CUBE_MAP,c,p);for(let n=0;n<6;n++)if(s&&c.mipmaps&&c.mipmaps.length>0)for(let r=0;r<c.mipmaps.length;r++)z(l.__webglFramebuffer[n][r],t,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else z(l.__webglFramebuffer[n],t,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);k(c,p)&&A(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(f){let i=t.texture;for(let a=0,o=i.length;a<o;a++){let o=i[a],s=r.get(o);n.bindTexture(e.TEXTURE_2D,s.__webglTexture),I(e.TEXTURE_2D,o,p),z(l.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+a,e.TEXTURE_2D,0),k(o,p)&&A(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s?r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error(`THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.`)),n.bindTexture(r,u.__webglTexture),I(r,c,p),s&&c.mipmaps&&c.mipmaps.length>0)for(let n=0;n<c.mipmaps.length;n++)z(l.__webglFramebuffer[n],t,c,e.COLOR_ATTACHMENT0,r,n);else z(l.__webglFramebuffer,t,c,e.COLOR_ATTACHMENT0,r,0);k(c,p)&&A(r),n.unbindTexture()}t.depthBuffer&&ve(t)}function xe(t){let i=D(t)||s,a=t.isWebGLMultipleRenderTargets===!0?t.texture:[t.texture];for(let o=0,s=a.length;o<s;o++){let s=a[o];if(k(s,i)){let i=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,a=r.get(s).__webglTexture;n.bindTexture(i,a),A(i),n.unbindTexture()}}}function Se(t){if(s&&t.samples>0&&we(t)===!1){let i=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=[],l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=t.isWebGLMultipleRenderTargets===!0;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){c.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&c.push(l);let f=u.__ignoreDepthValues!==void 0&&u.__ignoreDepthValues;if(f===!1&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]),f===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[l]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[l])),d){let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),y&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,c)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}}function Ce(e){return Math.min(i.maxSamples,e.samples)}function we(e){let n=r.get(e);return s&&e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Te(e){let t=o.render.frame;b.get(e)!==t&&(b.set(e,t),e.update())}function Ee(e,n){let r=e.colorSpace,i=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||e.format===1035||r!==`srgb-linear`&&r!==``&&(Ue.getTransfer(r)===`srgb`?s===!1?t.has(`EXT_sRGB`)===!0&&i===1023?(e.format=le,e.minFilter=m,e.generateMipmaps=!1):n=qe.sRGBToLinear(n):(i!==1023||a!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,r)),n}this.allocateTextureUnit=oe,this.resetTextureUnits=ae,this.setTexture2D=ce,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=z,this.useMultisampledRTT=we}function bo(e,t,n){let r=n.isWebGL2;function i(n,i=``){let a,o=Ue.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return r?e.HALF_FLOAT:(a=t.get(`OES_texture_half_float`),a===null?null:a.HALF_FLOAT_OES);if(n===1021)return e.ALPHA;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1035)return a=t.get(`EXT_sRGB`),a===null?null:a.SRGB_ALPHA_EXT;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(o===`srgb`){if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196)return a=t.get(`WEBGL_compressed_texture_etc1`),a===null?null:a.COMPRESSED_RGB_ETC1_WEBGL;if(n===37492||n===37496){if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?r?e.UNSIGNED_INT_24_8:(a=t.get(`WEBGL_depth_texture`),a===null?null:a.UNSIGNED_INT_24_8_WEBGL):e[n]===void 0?null:e[n]}return{convert:i}}var xo=class extends mr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},So=class extends rn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Co={type:`move`},wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new So,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new So,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new So,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Co)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new So;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},To=class extends de{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=t.getContextAttributes(),h=null,g=null,y=[],b=[],T=new H,E=null,D=new mr;D.layers.enable(1),D.viewport=new $e;let O=new mr;O.layers.enable(2),O.viewport=new $e;let k=[D,O],A=new xo;A.layers.enable(1),A.layers.enable(2);let ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=y[e];return t===void 0&&(t=new wo,y[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=y[e];return t===void 0&&(t=new wo,y[e]=t),t.getGripSpace()},this.getHand=function(e){let t=y[e];return t===void 0&&(t=new wo,y[e]=t),t.getHandSpace()};function j(e){let t=b.indexOf(e.inputSource);if(t===-1)return;let n=y[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<y.length;e++){let t=b[e];t!==null&&(b[e]=null,y[e].disconnect(t))}ee=null,te=null,e.setRenderTarget(h),f=null,d=null,u=null,r=null,g=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(h=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,M),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let n={antialias:r.renderState.layers!==void 0||m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new tt(f.framebufferWidth,f.framebufferHeight,{format:S,type:_,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let n=null,a=null,o=null;m.depth&&(o=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=m.stencil?w:C,a=m.stencil?x:v);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new tt(d.textureWidth,d.textureHeight,{format:S,type:_,depthTexture:new pi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});let c=e.properties.get(g);c.__ignoreDepthValues=d.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=b.indexOf(n);r>=0&&(b[r]=null,y[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=b.indexOf(n);if(r===-1){for(let e=0;e<y.length;e++)if(e>=b.length){b.push(n),r=e;break}else if(b[e]===null){b[e]=n,r=e;break}if(r===-1)break}let i=y[r];i&&i.connect(n)}}let N=new G,P=new G;function re(e,t,n){N.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;A.near=O.near=D.near=e.near,A.far=O.far=D.far=e.far,(ee!==A.near||te!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ee=A.near,te=A.far);let t=e.parent,n=A.cameras;ie(A,t);for(let e=0;e<n.length;e++)ie(n[e],t);n.length===2?re(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),F(e,A,t)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=he*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)};let ae=null;function oe(t,r){if(l=r.getViewerPose(c||a),p=r,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(g,f.framebuffer),e.setRenderTarget(g));let n=!1;t.length!==A.cameras.length&&(A.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(g,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(g))}let o=k[r];o===void 0&&(o=new mr,o.layers.enable(r),o.viewport=new $e,k[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),n===!0&&A.cameras.push(o)}}for(let e=0;e<y.length;e++){let t=b[e],n=y[e];t!==null&&n!==void 0&&n.update(t,r,c||a)}ae&&ae(t,r),r.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:r}),p=null}let se=new Dr;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}};function Eo(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,cr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map,n(i.map,r.mapTransform)),i.alphaMap&&(r.alphaMap.value=i.alphaMap,n(i.alphaMap,r.alphaMapTransform)),i.bumpMap&&(r.bumpMap.value=i.bumpMap,n(i.bumpMap,r.bumpMapTransform),r.bumpScale.value=i.bumpScale,i.side===1&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,n(i.normalMap,r.normalMapTransform),r.normalScale.value.copy(i.normalScale),i.side===1&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,n(i.displacementMap,r.displacementMapTransform),r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap,n(i.emissiveMap,r.emissiveMapTransform)),i.specularMap&&(r.specularMap.value=i.specularMap,n(i.specularMap,r.specularMapTransform)),i.alphaTest>0&&(r.alphaTest.value=i.alphaTest);let a=t.get(i).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio),i.lightMap){r.lightMap.value=i.lightMap;let t=e._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=i.lightMapIntensity*t,n(i.lightMap,r.lightMapTransform)}i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity,n(i.aoMap,r.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,r){e.metalness.value=r.metalness,r.metalnessMap&&(e.metalnessMap.value=r.metalnessMap,n(r.metalnessMap,e.metalnessMapTransform)),e.roughness.value=r.roughness,r.roughnessMap&&(e.roughnessMap.value=r.roughnessMap,n(r.roughnessMap,e.roughnessMapTransform)),t.get(r).envMap&&(e.envMapIntensity.value=r.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Do(e,t,n,r){let i={},a={},o=[],s=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Oo=class{constructor(e={}){let{canvas:t=Ie(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;d=n===null?a:n.getContextAttributes().alpha;let f=new Uint32Array(4),p=new Int32Array(4),m=null,h=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=N,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let x=this,S=!1,C=0,w=0,T=null,E=-1,D=null,O=new $e,k=new $e,A=null,ee=new J(0),te=0,j=t.width,ne=t.height,M=1,re=null,ie=null,F=new $e(0,0,j,ne),ae=new $e(0,0,j,ne),oe=!1,se=new Er,ce=!1,le=!1,ue=null,de=new K,fe=new H,pe=new G,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return T===null?M:1}let I=n;function L(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r160`),t.addEventListener(`webglcontextlost`,ze,!1),t.addEventListener(`webglcontextrestored`,Be,!1),t.addEventListener(`webglcontextcreationerror`,Ve,!1),I===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(x.isWebGL1Renderer===!0&&t.shift(),I=L(t,e),I===null)throw L(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}typeof WebGLRenderingContext<`u`&&I instanceof WebGLRenderingContext&&console.warn(`THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.`),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let R,ge,z,_e,B,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,Ae,V,je,Me,U,Ne,Pe,Fe;function Le(){R=new ai(I),ge=new Fr(I,R,e),R.init(ge),Ne=new bo(I,R,ge),z=new vo(I,R,ge),_e=new ci(I),B=new eo,ve=new yo(I,R,z,B,ge,Ne,_e),ye=new Lr(x),be=new ii(x),xe=new Or(I,ge),Pe=new Nr(I,R,xe,ge),Se=new oi(I,xe,_e,Pe),Ce=new fi(I,Se,xe,_e),je=new di(I,ge,ve),Oe=new Ir(B),we=new $a(x,ye,be,R,ge,Pe,Oe),Te=new Eo(x,B),Ee=new io,De=new fo(R,ge),V=new Mr(x,ye,be,z,Ce,d,s),Ae=new _o(x,Ce,ge),Fe=new Do(I,_e,ge,z),Me=new Pr(I,R,_e,ge),U=new si(I,R,_e,ge),_e.programs=we.programs,x.capabilities=ge,x.extensions=R,x.properties=B,x.renderLists=Ee,x.shadowMap=Ae,x.state=z,x.info=_e}Le();let Re=new To(x,I);this.xr=Re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=R.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=R.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(e){e!==void 0&&(M=e,this.setSize(j,ne,!1))},this.getSize=function(e){return e.set(j,ne)},this.setSize=function(e,n,r=!0){Re.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(j=e,ne=n,t.width=Math.floor(e*M),t.height=Math.floor(n*M),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(j*M,ne*M).floor()},this.setDrawingBufferSize=function(e,n,r){j=e,ne=n,M=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(O)},this.getViewport=function(e){return e.copy(F)},this.setViewport=function(e,t,n,r){e.isVector4?F.set(e.x,e.y,e.z,e.w):F.set(e,t,n,r),z.viewport(O.copy(F).multiplyScalar(M).floor())},this.getScissor=function(e){return e.copy(ae)},this.setScissor=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),z.scissor(k.copy(ae).multiplyScalar(M).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(e){z.setScissorTest(oe=e)},this.setOpaqueSort=function(e){re=e},this.setTransparentSort=function(e){ie=e},this.getClearColor=function(e){return e.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=T.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=V.getClearColor(),r=V.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(f[0]=i,f[1]=a,f[2]=o,f[3]=r,I.clearBufferuiv(I.COLOR,0,f)):(p[0]=i,p[1]=a,p[2]=o,p[3]=r,I.clearBufferiv(I.COLOR,0,p))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ze,!1),t.removeEventListener(`webglcontextrestored`,Be,!1),t.removeEventListener(`webglcontextcreationerror`,Ve,!1),Ee.dispose(),De.dispose(),B.dispose(),ye.dispose(),be.dispose(),Ce.dispose(),Pe.dispose(),Fe.dispose(),we.dispose(),Re.dispose(),Re.removeEventListener(`sessionstart`,Je),Re.removeEventListener(`sessionend`,Ye),ue&&=(ue.dispose(),null),Xe.stop()};function ze(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),S=!0}function Be(){console.log(`THREE.WebGLRenderer: Context Restored.`),S=!1;let e=_e.autoReset,t=Ae.enabled,n=Ae.autoUpdate,r=Ae.needsUpdate,i=Ae.type;Le(),_e.autoReset=e,Ae.enabled=t,Ae.autoUpdate=n,Ae.needsUpdate=r,Ae.type=i}function Ve(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function He(e){let t=e.target;t.removeEventListener(`dispose`,He),Ue(t)}function Ue(e){We(e),B.remove(e)}function We(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){we.releaseProgram(e)}),e.isShaderMaterial&&we.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=me);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ot(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Se.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Pe.setup(i,r,s,n,c);let h,g=Me;if(c!==null&&(h=xe.get(c),g=U,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*he()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*he()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh)g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ge(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,W(e,t,n),e.side=0,e.needsUpdate=!0,W(e,t,n),e.side=2):W(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),h=De.get(n),h.init(),y.push(h),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),h.setupLights(x._useLegacyLights);let r=new Set;return e.traverse(function(e){let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ge(a,n,e),r.add(a)}else Ge(t,n,e),r.add(t)}}),y.pop(),h=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){B.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}R.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ke=null;function qe(e){Ke&&Ke(e)}function Je(){Xe.stop()}function Ye(){Xe.start()}let Xe=new Dr;Xe.setAnimationLoop(qe),typeof self<`u`&&Xe.setContext(self),this.setAnimationLoop=function(e){Ke=e,Re.setAnimationLoop(e),e===null?Xe.stop():Xe.start()},Re.addEventListener(`sessionstart`,Je),Re.addEventListener(`sessionend`,Ye),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(S===!0)return;e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(t),t=Re.getCamera()),e.isScene===!0&&e.onBeforeRender(x,e,t,T),h=De.get(e,y.length),h.init(),y.push(h),de.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),se.setFromProjectionMatrix(de),le=this.localClippingEnabled,ce=Oe.init(this.clippingPlanes,le),m=Ee.get(e,v.length),m.init(),v.push(m),Ze(e,t,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(re,ie),this.info.render.frame++,ce===!0&&Oe.beginShadows();let n=h.state.shadowsArray;if(Ae.render(n,e,t),ce===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(m,e),h.setupLights(x._useLegacyLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];Qe(m,e,r,r.viewport)}}else Qe(m,e,t);T!==null&&(ve.updateMultisampleRenderTarget(T),ve.updateRenderTargetMipmap(T)),e.isScene===!0&&e.onAfterRender(x,e,t),Pe.resetDefaultState(),E=-1,D=null,y.pop(),h=y.length>0?y[y.length-1]:null,v.pop(),m=v.length>0?v[v.length-1]:null};function Ze(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)h.pushLight(e),e.castShadow&&h.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||se.intersectsSprite(e)){r&&pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(de);let t=Ce.update(e),i=e.material;i.visible&&m.push(e,t,i,n,pe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||se.intersectsObject(e))){let t=Ce.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),pe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),pe.copy(e.boundingSphere.center)),pe.applyMatrix4(e.matrixWorld).applyMatrix4(de)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&m.push(e,t,s,n,pe.z,o)}}else i.visible&&m.push(e,t,i,n,pe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ze(i[e],t,n,r)}function Qe(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;h.setupLightsView(n),ce===!0&&Oe.setGlobalState(x.clippingPlanes,n),a.length>0&&et(i,a,t,n),r&&z.viewport(O.copy(r)),i.length>0&&nt(i,t,n),a.length>0&&nt(a,t,n),o.length>0&&nt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;let i=ge.isWebGL2;ue===null&&(ue=new tt(1,1,{generateMipmaps:!0,type:R.has(`EXT_color_buffer_half_float`)?b:_,minFilter:g,samples:i?4:0})),x.getDrawingBufferSize(fe),i?ue.setSize(fe.x,fe.y):ue.setSize(ke(fe.x),ke(fe.y));let a=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(ee),te=x.getClearAlpha(),te<1&&x.setClearColor(16777215,.5),x.clear();let o=x.toneMapping;x.toneMapping=0,nt(e,n,r),ve.updateMultisampleRenderTarget(ue),ve.updateRenderTargetMipmap(ue);let s=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],a=i.object,o=i.geometry,c=i.material,l=i.group;if(c.side===2&&a.layers.test(r.layers)){let e=c.side;c.side=1,c.needsUpdate=!0,rt(a,n,r,o,c,l),c.side=e,c.needsUpdate=!0,s=!0}}s===!0&&(ve.updateMultisampleRenderTarget(ue),ve.updateRenderTargetMipmap(ue)),x.setRenderTarget(a),x.setClearColor(ee,te),x.toneMapping=o}function nt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&rt(o,t,n,s,c,l)}}function rt(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(x,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function W(e,t,n){t.isScene!==!0&&(t=me);let r=B.get(e),i=h.state.lights,a=h.state.shadowsArray,o=i.state.version,s=we.getParameters(e,i.state,a,t,n),c=we.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?be:ye).get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,He),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return at(e,s),u}else s.uniforms=we.getUniforms(e),e.onBuild(n,s,x),e.onBeforeCompile(s,x),u=we.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Oe.uniform),at(e,s),r.needsLights=ct(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function it(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ba.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function at(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ot(e,t,n,r,i){t.isScene!==!0&&(t=me),ve.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:P,c=(r.isMeshStandardMaterial?be:ye).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(m=x.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=h.state.lights;if(ce===!0&&(le===!0||e!==D)){let t=e===D&&r.id===E;Oe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null?b=!0:v.envMap===c?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Oe.numPlanes||v.numIntersection!==Oe.numIntersection)?b=!0:v.vertexAlphas===l&&v.vertexTangents===u&&v.morphTargets===d&&v.morphNormals===f&&v.morphColors===p&&v.toneMapping===m?ge.isWebGL2===!0&&v.morphTargetsCount!==_&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=W(r,t,i));let C=!1,w=!1,O=!1,k=S.getUniforms(),A=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,O=!0),r.id!==E&&(E=r.id,w=!0),C||D!==e){k.setValue(I,`projectionMatrix`,e.projectionMatrix),k.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(I,pe.setFromMatrixPosition(e.matrixWorld)),ge.logarithmicDepthBuffer&&k.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),D!==e&&(D=e,w=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(I,i,`bindMatrix`),k.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(ge.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(I,`boneTexture`,e.boneTexture,ve)):console.warn(`THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.`))}i.isBatchedMesh&&(k.setOptional(I,i,`batchingTexture`),k.setValue(I,`batchingTexture`,i._matricesTexture,ve));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0&&ge.isWebGL2===!0)&&je.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(I,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),w&&(k.setValue(I,`toneMappingExposure`,x.toneMappingExposure),v.needsLights&&st(A,O),a&&r.fog===!0&&Te.refreshFogUniforms(A,a),Te.refreshMaterialUniforms(A,r,M,ne,ue),ba.upload(I,it(v),A,ve)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ba.upload(I,it(v),A,ve),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(I,`center`,i.center),k.setValue(I,`modelViewMatrix`,i.modelViewMatrix),k.setValue(I,`normalMatrix`,i.normalMatrix),k.setValue(I,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(ge.isWebGL2){let n=e[t];Fe.update(n,S),Fe.bind(n,S)}else console.warn(`THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.`)}return S}function st(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=n;let r=B.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||R.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){T=e,C=t,w=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=B.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?ve.setupRenderTarget(e):s.__hasExternalTextures&&ve.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture):(z.bindFramebuffer(I.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=ge.isWebGL2&&e.samples>0&&ve.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,O.copy(e.viewport),k.copy(e.scissor),A=e.scissorTest}else O.copy(F).multiplyScalar(M).floor(),k.copy(ae).multiplyScalar(M).floor(),A=oe;if(z.bindFramebuffer(I.FRAMEBUFFER,i)&&ge.drawBuffers&&r&&z.drawBuffers(e,i),z.viewport(O),z.scissor(k),z.setScissorTest(A),a){let r=B.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=B.get(e.texture),i=t||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}E=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){z.bindFramebuffer(I.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&Ne.convert(s)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(R.has(`EXT_color_buffer_half_float`)||ge.isWebGL2&&R.has(`EXT_color_buffer_float`));if(c!==1009&&Ne.convert(c)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(c===1015&&(ge.isWebGL2||R.has(`OES_texture_float`)||R.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Ne.convert(s),Ne.convert(c),a)}finally{let e=T===null?null:B.get(T).__webglFramebuffer;z.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);ve.setTexture2D(t,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,e.x,e.y,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=Ne.convert(n.format),s=Ne.convert(n.type);ve.setTexture2D(n,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,n.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(x.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=e.max.x-e.min.x+1,o=e.max.y-e.min.y+1,s=e.max.z-e.min.z+1,c=Ne.convert(r.format),l=Ne.convert(r.type),u;if(r.isData3DTexture)ve.setTexture3D(r,0),u=I.TEXTURE_3D;else if(r.isDataArrayTexture||r.isCompressedArrayTexture)ve.setTexture2DArray(r,0),u=I.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,r.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,r.unpackAlignment);let d=I.getParameter(I.UNPACK_ROW_LENGTH),f=I.getParameter(I.UNPACK_IMAGE_HEIGHT),p=I.getParameter(I.UNPACK_SKIP_PIXELS),m=I.getParameter(I.UNPACK_SKIP_ROWS),h=I.getParameter(I.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[i]:n.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,g.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,g.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,e.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,e.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?I.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g.data):n.isCompressedArrayTexture?(console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`),I.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,g.data)):I.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g),I.pixelStorei(I.UNPACK_ROW_LENGTH,d),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,f),I.pixelStorei(I.UNPACK_SKIP_PIXELS,p),I.pixelStorei(I.UNPACK_SKIP_ROWS,m),I.pixelStorei(I.UNPACK_SKIP_IMAGES,h),i===0&&r.generateMipmaps&&I.generateMipmap(u),z.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?ve.setTextureCube(e,0):e.isData3DTexture?ve.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ve.setTexture2DArray(e,0):ve.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,z.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=Ue.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}get outputEncoding(){return console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace===`srgb`?j:te}set outputEncoding(e){console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace=e===3001?N:P}get useLegacyLights(){return console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights}set useLegacyLights(e){console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights=e}},ko=class extends Oo{};ko.prototype.isWebGL1Renderer=!0;var Ao=class extends rn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},jo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ce,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=I()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=I()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=I()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mo=new G,No=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix4(e),this.setXYZ(t,Mo.x,Mo.y,Mo.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.applyNormalMatrix(e),this.setXYZ(t,Mo.x,Mo.y,Mo.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.transformDirection(e),this.setXYZ(t,Mo.x,Mo.y,Mo.z);return this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=V(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=V(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=V(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=V(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),r=je(r,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new En(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Po=new G,Fo=new $e,Io=new $e,Lo=new G,Ro=new K,zo=new G,Bo=new wt,Vo=new K,Ho=new Mt,Uo=class extends tr{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=s,this.bindMatrix=new K,this.bindMatrixInverse=new K,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ot),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,zo),this.boundingBox.expandByPoint(zo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wt),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,zo),this.boundingSphere.expandByPoint(zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(r),e.ray.intersectsSphere(Bo)!==!1&&(Vo.copy(r).invert(),Ho.copy(e.ray).applyMatrix4(Vo),(this.boundingBox===null||Ho.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ho)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Fo.fromBufferAttribute(r.attributes.skinIndex,e),Io.fromBufferAttribute(r.attributes.skinWeight,e),Po.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=Io.getComponent(e);if(r!==0){let i=Fo.getComponent(e);Ro.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Lo.copy(Po).applyMatrix4(Ro),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn(`THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151.`),this.applyBoneTransform(e,t)}},Wo=class extends rn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Go=class extends Qe{constructor(e=null,t=1,n=1,r,i,a,o,s,c=d,l=d,u,f){super(null,a,o,s,c,l,r,i,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ko=new K,qo=new K,Jo=class e{constructor(e=[],t=[]){this.uuid=I(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn(`THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new K)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new K;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:qo;Ko.multiplyMatrices(i,t[r]),Ko.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Go(t,e,e,S,y);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(console.warn(`THREE.Skeleton: No bone found with UUID:`,r),i=new Wo),this.bones.push(i),this.boneInverses.push(new K().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Yo=class extends En{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xo=new K,Zo=new K,Qo=[],$o=new ot,es=new K,ts=new tr,ns=new wt,rs=class extends tr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,es)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xo),$o.copy(e.boundingBox).applyMatrix4(Xo),this.boundingBox.union($o)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xo),ns.copy(e.boundingSphere).applyMatrix4(Xo),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),e.ray.intersectsSphere(ns)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Xo),Zo.multiplyMatrices(n,Xo),ts.matrixWorld=Zo,ts.raycast(e,Qo);for(let e=0,n=Qo.length;e<n;e++){let n=Qo[e];n.instanceId=i,n.object=this,t.push(n)}Qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`})}},is=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new J(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},as=new G,os=new G,ss=new K,cs=new Mt,ls=new wt,us=class extends rn{constructor(e=new Ln,t=new is){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)as.fromBufferAttribute(t,e-1),os.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=as.distanceTo(os);e.setAttribute(`lineDistance`,new kn(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),ls.radius+=i,e.ray.intersectsSphere(ls)===!1)return;ss.copy(r).invert(),cs.copy(e.ray).applyMatrix4(ss);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new G,l=new G,u=new G,d=new G,f=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){let n=Math.max(0,a.start),r=Math.min(p.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){let n=p.getX(i),r=p.getX(i+1);if(c.fromBufferAttribute(m,n),l.fromBufferAttribute(m,r),cs.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let a=e.ray.origin.distanceTo(d);a<e.near||a>e.far||t.push({distance:a,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}else{let n=Math.max(0,a.start),r=Math.min(m.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){if(c.fromBufferAttribute(m,i),l.fromBufferAttribute(m,i+1),cs.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(d);n<e.near||n>e.far||t.push({distance:n,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},ds=new G,fs=new G,ps=class extends us{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ds.fromBufferAttribute(t,e),fs.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ds.distanceTo(fs);e.setAttribute(`lineDistance`,new kn(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ms=class extends us{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},hs=class extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gs=new K,_s=new Mt,vs=new wt,ys=new G,bs=class extends rn{constructor(e=new Ln,t=new hs){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),vs.radius+=i,e.ray.intersectsSphere(vs)===!1)return;gs.copy(r).invert(),_s.copy(e.ray).applyMatrix4(gs);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ys.fromBufferAttribute(l,n),xs(ys,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ys.fromBufferAttribute(l,a),xs(ys,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function xs(e,t,n,r,i,a,o){let s=_s.distanceSqToPoint(e);if(s<n){let n=new G;_s.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,object:o})}}var Ss=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new G);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new G,r=[],i=[],a=[],o=new G,s=new K;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new G)}i[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(L(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(L(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cs={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ws(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=js(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return Es(a,o,n,s,c,p,0),o}};function ws(e,t,n,r,i){let a,o;if(i===ec(e,t,n,r)>0)for(a=t;a<n;a+=r)o=Zs(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=Zs(a,e[a],e[a+1],o);return o&&Us(o,o.next)&&(Qs(o),o=o.next),o}function Ts(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Us(n,n.next)||Hs(n.prev,n,n.next)===0)){if(Qs(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Es(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Is(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;)if(c=e.prev,l=e.next,a?Os(e,r,i,a):Ds(e))t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),Qs(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=ks(Ts(e),t,n),Es(e,t,n,r,i,a,2)):o===2&&As(e,t,n,r,i,a):Es(Ts(e),t,n,r,i,a,1);break}}function Ds(e){let t=e.prev,n=e,r=e.next;if(Hs(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Bs(i,s,a,c,o,l,m.x,m.y)&&Hs(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Os(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Hs(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=Rs(p,m,t,n,r),v=Rs(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Bs(s,u,c,d,l,f,y.x,y.y)&&Hs(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Bs(s,u,c,d,l,f,b.x,b.y)&&Hs(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Bs(s,u,c,d,l,f,y.x,y.y)&&Hs(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Bs(s,u,c,d,l,f,b.x,b.y)&&Hs(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ks(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!Us(i,a)&&Ws(i,r,r.next,a)&&Js(i,a)&&Js(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),Qs(r),Qs(r.next),r=e=a),r=r.next}while(r!==e);return Ts(r)}function As(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Vs(o,e)){let s=Xs(o,e);o=Ts(o,o.next),s=Ts(s,s.next),Es(o,t,n,r,i,a,0),Es(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function js(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=ws(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(zs(l));for(i.sort(Ms),a=0;a<i.length;a++)n=Ns(i[a],n);return n}function Ms(e,t){return e.x-t.x}function Ns(e,t){let n=Ps(e,t);if(!n)return t;let r=Xs(n,e);return Ts(r,r.next),Ts(n,n.next)}function Ps(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&Bs(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),Js(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&Fs(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function Fs(e,t){return Hs(e.prev,e,t.prev)<0&&Hs(t.next,e,e.next)<0}function Is(e,t,n,r){let i=e;do i.z===0&&(i.z=Rs(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ls(i)}function Ls(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function Rs(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function zs(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Bs(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Vs(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!qs(e,t)&&(Js(e,t)&&Js(t,e)&&Ys(e,t)&&(Hs(e.prev,e,t.prev)||Hs(e,t.prev,t))||Us(e,t)&&Hs(e.prev,e,e.next)>0&&Hs(t.prev,t,t.next)>0)}function Hs(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Us(e,t){return e.x===t.x&&e.y===t.y}function Ws(e,t,n,r){let i=Ks(Hs(e,t,n)),a=Ks(Hs(e,t,r)),o=Ks(Hs(n,r,e)),s=Ks(Hs(n,r,t));return!!(i!==a&&o!==s||i===0&&Gs(e,n,t)||a===0&&Gs(e,r,t)||o===0&&Gs(n,e,r)||s===0&&Gs(n,t,r))}function Gs(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ks(e){return e>0?1:e<0?-1:0}function qs(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ws(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Js(e,t){return Hs(e.prev,e,e.next)<0?Hs(e,t,e.next)>=0&&Hs(e,e.prev,t)>=0:Hs(e,t,e.prev)<0||Hs(e,e.next,t)<0}function Ys(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Xs(e,t){let n=new $s(e.i,e.x,e.y),r=new $s(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Zs(e,t,n,r){let i=new $s(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Qs(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function $s(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ec(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var tc=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];nc(e),rc(n,e);let a=e.length;t.forEach(nc);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,rc(n,t[e]);let o=Cs.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function nc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function rc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ic=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new J(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ac=class extends ic{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new H(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return L(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new J(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new J(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new J(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},oc=class extends Sn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new J(16777215),this.specular=new J(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sc=class extends Sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function cc(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function lc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function uc(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function dc(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function fc(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push.apply(n,o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var pc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},mc=class extends pc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:O,endingEnd:O}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case k:i=e,o=2*t-n;break;case A:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case k:a=e,s=2*n-t;break;case A:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},hc=class extends pc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},gc=class extends pc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_c=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=cc(t,this.TimeBufferType),this.values=cc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cc(e.times,Array),values:cc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case T:t=this.InterpolantFactoryMethodDiscrete;break;case E:t=this.InterpolantFactoryMethodLinear;break;case D:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return T;case this.InterpolantFactoryMethodLinear:return E;case this.InterpolantFactoryMethodSmooth:return D}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&lc(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===D,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};_c.prototype.TimeBufferType=Float32Array,_c.prototype.ValueBufferType=Float32Array,_c.prototype.DefaultInterpolation=E;var vc=class extends _c{};vc.prototype.ValueTypeName=`bool`,vc.prototype.ValueBufferType=Array,vc.prototype.DefaultInterpolation=T,vc.prototype.InterpolantFactoryMethodLinear=void 0,vc.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends _c{};yc.prototype.ValueTypeName=`color`;var bc=class extends _c{};bc.prototype.ValueTypeName=`number`;var xc=class extends pc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)W.slerpFlat(i,0,a,c-o,a,c,s);return i}},Sc=class extends _c{InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}};Sc.prototype.ValueTypeName=`quaternion`,Sc.prototype.DefaultInterpolation=E,Sc.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends _c{};Cc.prototype.ValueTypeName=`string`,Cc.prototype.ValueBufferType=Array,Cc.prototype.DefaultInterpolation=T,Cc.prototype.InterpolantFactoryMethodLinear=void 0,Cc.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends _c{};wc.prototype.ValueTypeName=`vector`;var Tc=class{constructor(e,t=-1,n,r=ee){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=I(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Dc(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=n.length;e!==r;++e)t.push(_c.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=uc(o);o=dc(o,1,c),s=dc(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new bc(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(!e)return console.error(`THREE.AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];fc(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(i&&i.length!==0){if(i[0].morphTargets){let e={},t=0;for(;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new bc(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;n(wc,a+`.position`,i,`pos`,r),n(Sc,a+`.quaternion`,i,`rot`,r),n(wc,a+`.scale`,i,`scl`,r)}}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ec(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return bc;case`vector`:case`vector2`:case`vector3`:case`vector4`:return wc;case`color`:return yc;case`quaternion`:return Sc;case`bool`:case`boolean`:return vc;case`string`:return Cc}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Dc(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Ec(e.type);if(e.times===void 0){let t=[],n=[];fc(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var Oc={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},kc=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},Ac=class{constructor(e){this.manager=e===void 0?kc:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ac.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var jc={},Mc=class extends Error{constructor(e,t){super(e),this.response=t}},Nc=class extends Ac{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Oc.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(jc[e]!==void 0){jc[e].push({onLoad:t,onProgress:n,onError:r});return}jc[e]=[],jc[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=jc[e],r=t.body.getReader(),i=t.headers.get(`Content-Length`)||t.headers.get(`X-File-Size`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}})}}});return new Response(c)}throw new Mc(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===void 0)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Oc.add(e,t);let n=jc[e];delete jc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=jc[e];if(n===void 0)throw this.manager.itemError(e),t;delete jc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Pc=class extends Ac{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Oc.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=Fe(`img`);function s(){l(),Oc.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},Fc=class extends Ac{constructor(e){super(e)}load(e,t,n,r){let i=new Qe,a=new Pc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Ic=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new J(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Lc=class extends Ic{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new J(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rc=new K,zc=new G,Bc=new G,Vc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.map=null,this.mapPass=null,this.matrix=new K,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(zc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hc=class extends Vc{constructor(){super(new mr(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=he*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Uc=class extends Ic{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Hc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wc=new K,Gc=new G,Kc=new G,qc=class extends Vc{constructor(){super(new mr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new H(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Gc.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gc),Kc.copy(n.position),Kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kc),n.updateMatrixWorld(),r.makeTranslation(-Gc.x,-Gc.y,-Gc.z),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc)}},Jc=class extends Ic{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yc=class extends Vc{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xc=class extends Ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Yc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zc=class extends Ic{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Qc=class{static decodeText(e){if(typeof TextDecoder<`u`)return new TextDecoder().decode(e);let t=``;for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},$c=class extends Ac{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&console.warn(`THREE.ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&console.warn(`THREE.ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Oc.get(e);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{t&&t(n),i.manager.itemEnd(e)}).catch(e=>{r&&r(e)});return}return setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){return Oc.add(e,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),Oc.remove(e),i.manager.itemError(e),i.manager.itemEnd(e)});Oc.add(e,s),i.manager.itemStart(e)}},el=`\\[\\]\\.:\\/`,tl=RegExp(`[\\[\\]\\.:\\/]`,`g`),nl=`[^\\[\\]\\.:\\/]`,rl=`[^`+el.replace(`\\.`,``)+`]`,il=`((?:WC+[\\/:])*)`.replace(`WC`,nl),al=`(WCOD+)?`.replace(`WCOD`,rl),ol=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,nl),sl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,nl),cl=RegExp(`^`+il+al+ol+sl+`$`),ll=[`material`,`materials`,`bones`,`map`],ul=class{constructor(e,t,n){let r=n||dl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(tl,``)}static parseTrackName(e){let t=cl.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ll.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dl.Composite=ul,dl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},dl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},dl.prototype.GetterByBindingType=[dl.prototype._getValue_direct,dl.prototype._getValue_array,dl.prototype._getValue_arrayElement,dl.prototype._getValue_toArray],dl.prototype.SetterByBindingTypeAndVersioning=[[dl.prototype._setValue_direct,dl.prototype._setValue_direct_setNeedsUpdate,dl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dl.prototype._setValue_array,dl.prototype._setValue_array_setNeedsUpdate,dl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dl.prototype._setValue_arrayElement,dl.prototype._setValue_arrayElement_setNeedsUpdate,dl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dl.prototype._setValue_fromArray,dl.prototype._setValue_fromArray_setNeedsUpdate,dl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fl=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(L(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},pl=new G,ml=new K,hl=new K,gl=class extends ps{constructor(e){let t=_l(e),n=new Ln,r=[],i=[],a=new J(0,0,1),o=new J(0,1,0);for(let e=0;e<t.length;e++){let n=t[e];n.parent&&n.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),i.push(a.r,a.g,a.b),i.push(o.r,o.g,o.b))}n.setAttribute(`position`,new kn(r,3)),n.setAttribute(`color`,new kn(i,3));let s=new is({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,s),this.isSkeletonHelper=!0,this.type=`SkeletonHelper`,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,r=n.getAttribute(`position`);hl.copy(this.root.matrixWorld).invert();for(let e=0,n=0;e<t.length;e++){let i=t[e];i.parent&&i.parent.isBone&&(ml.multiplyMatrices(hl,i.matrixWorld),pl.setFromMatrixPosition(ml),r.setXYZ(n,pl.x,pl.y,pl.z),ml.multiplyMatrices(hl,i.parent.matrixWorld),pl.setFromMatrixPosition(ml),r.setXYZ(n+1,pl.x,pl.y,pl.z),n+=2)}n.getAttribute(`position`).needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function _l(e){let t=[];e.isBone===!0&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,_l(e.children[n]));return t}var vl=class extends ps{constructor(e=10,t=10,n=4473924,r=8947848){n=new J(n),r=new J(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new Ln;l.setAttribute(`position`,new kn(s,3)),l.setAttribute(`color`,new kn(c,3));let u=new is({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}},yl=class extends ps{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ln;r.setAttribute(`position`,new kn(t,3)),r.setAttribute(`color`,new kn(n,3));let i=new is({vertexColors:!0,toneMapped:!1});super(r,i),this.type=`AxesHelper`}setColors(e,t,n){let r=new J,i=this.geometry.attributes.color.array;return r.set(e),r.toArray(i,0),r.toArray(i,3),r.set(t),r.toArray(i,6),r.toArray(i,9),r.set(n),r.toArray(i,12),r.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`160`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`160`);function bl(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var xl=class extends Ac{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new El(e)}),this.register(function(e){return new Fl(e)}),this.register(function(e){return new Il(e)}),this.register(function(e){return new Ll(e)}),this.register(function(e){return new Ol(e)}),this.register(function(e){return new kl(e)}),this.register(function(e){return new Al(e)}),this.register(function(e){return new jl(e)}),this.register(function(e){return new Tl(e)}),this.register(function(e){return new Ml(e)}),this.register(function(e){return new Dl(e)}),this.register(function(e){return new Pl(e)}),this.register(function(e){return new Nl(e)}),this.register(function(e){return new Cl(e)}),this.register(function(e){return new Rl(e)}),this.register(function(e){return new zl(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Qc.extractUrlBase(e);a=Qc.resolveURL(t,this.path)}else a=Qc.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new Nc(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw Error(`THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".`)}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Bl){try{a[Z.KHR_BINARY_GLTF]=new Ul(e)}catch(e){r&&r(e);return}i=JSON.parse(a[Z.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new hu(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case Z.KHR_MATERIALS_UNLIT:a[t]=new wl;break;case Z.KHR_DRACO_MESH_COMPRESSION:a[t]=new Wl(i,this.dracoLoader);break;case Z.KHR_TEXTURE_TRANSFORM:a[t]=new Gl;break;case Z.KHR_MESH_QUANTIZATION:a[t]=new Kl;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Sl(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}var Z={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Cl=class{constructor(e){this.parser=e,this.name=Z.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new J(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],P);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new Xc(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Jc(s),o.distance=c;break;case`spot`:o=new Uc(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),o.decay=2,su(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},wl=class{constructor(){this.name=Z.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){let r=[];e.color=new J(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],P),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,N))}return Promise.all(r)}},Tl=class{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},El=class{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ac}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatMap`,a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatRoughnessMap`,a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,`clearcoatNormalMap`,a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let e=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new H(e,e)}return Promise.all(i)}},Dl=class{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ac}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceMap`,a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceThicknessMap`,a.iridescenceThicknessTexture)),Promise.all(i)}},Ol=class{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ac}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[];t.sheenColor=new J(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let e=a.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],P)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,`sheenColorMap`,a.sheenColorTexture,N)),a.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`sheenRoughnessMap`,a.sheenRoughnessTexture)),Promise.all(i)}},kl=class{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ac}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(n.assignTexture(t,`transmissionMap`,a.transmissionTexture)),Promise.all(i)}},Al=class{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ac}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor===void 0?0:a.thicknessFactor,a.thicknessTexture!==void 0&&i.push(n.assignTexture(t,`thicknessMap`,a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new J().setRGB(o[0],o[1],o[2],P),Promise.all(i)}},jl=class{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ac}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.ior=r.ior===void 0?1.5:r.ior,Promise.resolve()}},Ml=class{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ac}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor===void 0?1:a.specularFactor,a.specularTexture!==void 0&&i.push(n.assignTexture(t,`specularIntensityMap`,a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new J().setRGB(o[0],o[1],o[2],P),a.specularColorTexture!==void 0&&i.push(n.assignTexture(t,`specularColorMap`,a.specularColorTexture,N)),Promise.all(i)}},Nl=class{constructor(e){this.parser=e,this.name=Z.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ac}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor===void 0?1:a.bumpFactor,a.bumpTexture!==void 0&&i.push(n.assignTexture(t,`bumpMap`,a.bumpTexture)),Promise.all(i)}},Pl=class{constructor(e){this.parser=e,this.name=Z.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:ac}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,`anisotropyMap`,a.anisotropyTexture)),Promise.all(i)}},Fl=class{constructor(e){this.parser=e,this.name=Z.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Il=class{constructor(e){this.parser=e,this.name=Z.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: WebP required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},Ll=class{constructor(e){this.parser=e,this.name=Z.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: AVIF required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},Rl=class{constructor(e){this.name=Z.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},zl=class{constructor(e){this.name=Z.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Xl.TRIANGLES&&e.mode!==Xl.TRIANGLE_STRIP&&e.mode!==Xl.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new K,n=new G,a=new W,s=new G(1,1,1),c=new rs(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new Yo(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);rn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Bl=`glTF`,Vl=12,Hl={JSON:1313821514,BIN:5130562},Ul=class{constructor(e){this.name=Z.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Vl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bl)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Vl,i=new DataView(e,Vl),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Hl.JSON){let r=new Uint8Array(e,Vl+a,t);this.content=n.decode(r)}else if(r===Hl.BIN){let n=Vl+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Wl=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=Z.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=tu[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=tu[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Zl[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,P,n)})})}},Gl=class{constructor(){this.name=Z.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Kl=class{constructor(){this.name=Z.KHR_MESH_QUANTIZATION}},ql=class extends pc{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Jl=new W,Yl=class extends ql{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Jl.fromArray(i).normalize().toArray(i),i}},Xl={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ql={9728:d,9729:m,9984:f,9985:h,9986:p,9987:g},$l={33071:l,33648:u,10497:c},eu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},nu={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},ru={CUBICSPLINE:void 0,LINEAR:E,STEP:T},iu={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function au(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new ic({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function ou(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function su(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function cu(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function lu(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function uu(e){let t,n=e.extensions&&e.extensions[Z.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+du(n.attributes):e.indices+`:`+du(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+du(e.targets[n]);return t}function du(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function fu(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function pu(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:`image/png`}var mu=new K,hu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sl,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,i=-1;typeof navigator<`u`&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf(`Firefox`)>-1,i=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),this.textureLoader=typeof createImageBitmap>`u`||n||r&&i<98?new Fc(this.options.manager):new $c(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nc(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return ou(i,a,r),su(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Z.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Qc.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=eu[r.type],t=Zl[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new En(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=eu[r.type],o=Zl[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new jo(f,u/s),t.cache.add(n,c)),p=new No(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new En(f,a,d);if(r.sparse!==void 0){let t=eu.SCALAR,n=Zl[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new En(p.array.slice(),p.itemSize,p.normalized));for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Ql[n.magFilter]||1006,t.minFilter=Ql[n.minFilter]||1008,t.wrapS=$l[n.wrapS]||1e3,t.wrapT=$l[n.wrapT]||1e3,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Qe(e);t.needsUpdate=!0,n(t)}),t.load(Qc.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),e.userData.mimeType=a.mimeType||pu(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[Z.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[Z.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[Z.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new hs,Sn.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new is,Sn.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return ic}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[Z.KHR_MATERIALS_UNLIT]){let e=r[Z.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new J(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],P),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,N)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||iu.OPAQUE;if(l===iu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===iu.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==Cn&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new H(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==Cn&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Cn){let e=i.emissiveFactor;o.emissive=new J().setRGB(e[0],e[1],e[2],P)}return i.emissiveTexture!==void 0&&a!==Cn&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,N)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),su(n,i),t.associations.set(n,{materials:e}),i.extensions&&ou(r,n,i),n})}createUniqueName(e){let t=dl.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[Z.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return _u(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=uu(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[Z.KHR_DRACO_MESH_COMPRESSION]?i(o):_u(new Ln,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?au(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Xl.TRIANGLES||u.mode===Xl.TRIANGLE_STRIP||u.mode===Xl.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new Uo(l,f):new tr(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===Xl.TRIANGLE_STRIP?d.geometry=bl(d.geometry,1):u.mode===Xl.TRIANGLE_FAN&&(d.geometry=bl(d.geometry,2));else if(u.mode===Xl.LINES)d=new ps(l,f);else if(u.mode===Xl.LINE_STRIP)d=new us(l,f);else if(u.mode===Xl.LINE_LOOP)d=new ms(l,f);else if(u.mode===Xl.POINTS)d=new bs(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&lu(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),su(d,i),u.extensions&&ou(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&ou(r,c[0],i),c[0];let l=new So;i.extensions&&ou(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new mr(Me.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new Rr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),su(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new K;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Jo(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],r=e[1],a=e[2],o=e[3],s=e[4],c=[];for(let e=0,i=t.length;e<i;e++){let i=t[e],l=r[e],u=a[e],d=o[e],f=s[e];if(i===void 0)continue;i.updateMatrix&&i.updateMatrix();let p=n._createAnimationTracks(i,l,u,d,f);if(p)for(let e=0;e<p.length;e++)c.push(p[e])}return new Tc(i,void 0,c)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,mu)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Wo:t.length>1?new So:t.length===1?t[0]:new rn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),su(o,i),i.extensions&&ou(n,o,i),i.matrix!==void 0){let e=new K;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);return r.associations.has(o)||r.associations.set(o,{}),r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new So;n.name&&(i.name=r.createUniqueName(n.name)),su(i,n),n.extensions&&ou(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++)i.add(e[t]);return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Sn||e instanceof Qe)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];nu[i.path]===nu.weights?e.traverse(function(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}):s.push(o);let c;switch(nu[i.path]){case nu.weights:c=bc;break;case nu.rotation:c=Sc;break;case nu.position:case nu.scale:c=wc;break;default:switch(n.itemSize){case 1:c=bc;break;default:c=wc}}let l=r.interpolation===void 0?E:ru[r.interpolation],u=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new c(s[e]+`.`+nu[i.path],t.array,u,l);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=fu(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Sc?Yl:ql)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function gu(e,t,n){let r=t.attributes,i=new ot;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new G(t[0],t[1],t[2]),new G(a[0],a[1],a[2])),e.normalized){let t=fu(Zl[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new G,t=new G;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=fu(Zl[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new wt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function _u(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=tu[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Ue.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ue.workingColorSpace}" not supported.`),su(e,t),gu(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:cu(e,t.targets,n)})}var vu=function(e){return URL.createObjectURL(new Blob([e],{type:`text/javascript`}))};try{URL.revokeObjectURL(vu(``))}catch{vu=function(e){return`data:application/javascript;charset=UTF-8,`+encodeURI(e)}}var yu=Uint8Array,bu=Uint16Array,xu=Uint32Array,Su=new yu([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cu=new yu([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),wu=new yu([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tu=function(e,t){for(var n=new bu(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new xu(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},Eu=Tu(Su,2),Du=Eu[0],Ou=Eu[1];Du[28]=258,Ou[258]=28;var ku=Tu(Cu,0),Au=ku[0];ku[1];for(var ju=new bu(32768),Mu=0;Mu<32768;++Mu){var Nu=(Mu&43690)>>>1|(Mu&21845)<<1;Nu=(Nu&52428)>>>2|(Nu&13107)<<2,Nu=(Nu&61680)>>>4|(Nu&3855)<<4,ju[Mu]=((Nu&65280)>>>8|(Nu&255)<<8)>>>1}for(var Pu=(function(e,t,n){for(var r=e.length,i=0,a=new bu(t);i<r;++i)++a[e[i]-1];var o=new bu(t);for(i=0;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new bu(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[ju[d]>>>c]=l}else for(s=new bu(r),i=0;i<r;++i)e[i]&&(s[i]=ju[o[e[i]-1]++]>>>15-e[i]);return s}),Fu=new yu(288),Mu=0;Mu<144;++Mu)Fu[Mu]=8;for(var Mu=144;Mu<256;++Mu)Fu[Mu]=9;for(var Mu=256;Mu<280;++Mu)Fu[Mu]=7;for(var Mu=280;Mu<288;++Mu)Fu[Mu]=8;for(var Iu=new yu(32),Mu=0;Mu<32;++Mu)Iu[Mu]=5;var Lu=Pu(Fu,9,1),Ru=Pu(Iu,5,1),zu=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Bu=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Vu=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Hu=function(e){return(e/8|0)+(e&7&&1)},Uu=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new(e instanceof bu?bu:e instanceof xu?xu:yu)(n-t);return r.set(e.subarray(t,n)),r},Wu=function(e,t,n){var r=e.length;if(!r||n&&!n.l&&r<5)return t||new yu(0);var i=!t||n,a=!n||n.i;n||={},t||=new yu(r*3);var o=function(e){var n=t.length;if(e>n){var r=new yu(Math.max(n*2,e));r.set(t),t=r}},s=n.f||0,c=n.p||0,l=n.b||0,u=n.l,d=n.d,f=n.m,p=n.n,m=r*8;do{if(!u){n.f=s=Bu(e,c,1);var h=Bu(e,c+1,3);if(c+=3,!h){var g=Hu(c)+4,_=e[g-4]|e[g-3]<<8,v=g+_;if(v>r){if(a)throw`unexpected EOF`;break}i&&o(l+_),t.set(e.subarray(g,v),l),n.b=l+=_,n.p=c=v*8;continue}if(h==1)u=Lu,d=Ru,f=9,p=5;else if(h==2){var y=Bu(e,c,31)+257,b=Bu(e,c+10,15)+4,x=y+Bu(e,c+5,31)+1;c+=14;for(var S=new yu(x),C=new yu(19),w=0;w<b;++w)C[wu[w]]=Bu(e,c+w*3,7);c+=b*3;for(var T=zu(C),E=(1<<T)-1,D=Pu(C,T,1),w=0;w<x;){var O=D[Bu(e,c,E)];c+=O&15;var g=O>>>4;if(g<16)S[w++]=g;else{var k=0,A=0;for(g==16?(A=3+Bu(e,c,3),c+=2,k=S[w-1]):g==17?(A=3+Bu(e,c,7),c+=3):g==18&&(A=11+Bu(e,c,127),c+=7);A--;)S[w++]=k}}var ee=S.subarray(0,y),te=S.subarray(y);f=zu(ee),p=zu(te),u=Pu(ee,f,1),d=Pu(te,p,1)}else throw`invalid block type`;if(c>m){if(a)throw`unexpected EOF`;break}}i&&o(l+131072);for(var j=(1<<f)-1,ne=(1<<p)-1,M=c;;M=c){var k=u[Vu(e,c)&j],N=k>>>4;if(c+=k&15,c>m){if(a)throw`unexpected EOF`;break}if(!k)throw`invalid length/literal`;if(N<256)t[l++]=N;else if(N==256){M=c,u=null;break}else{var P=N-254;if(N>264){var w=N-257,re=Su[w];P=Bu(e,c,(1<<re)-1)+Du[w],c+=re}var ie=d[Vu(e,c)&ne],F=ie>>>4;if(!ie)throw`invalid distance`;c+=ie&15;var te=Au[F];if(F>3){var re=Cu[F];te+=Vu(e,c)&(1<<re)-1,c+=re}if(c>m){if(a)throw`unexpected EOF`;break}i&&o(l+131072);for(var ae=l+P;l<ae;l+=4)t[l]=t[l-te],t[l+1]=t[l+1-te],t[l+2]=t[l+2-te],t[l+3]=t[l+3-te];l=ae}}n.l=u,n.p=M,n.b=l,u&&(s=1,n.m=f,n.d=d,n.n=p)}while(!s);return l==t.length?t:Uu(t,0,l)},Gu=new yu(0),Ku=function(e){if((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw`invalid zlib data`;if(e[1]&32)throw`invalid zlib data: preset dictionaries not supported`};function qu(e,t){return Wu((Ku(e),e.subarray(2,-4)),t)}var Ju=typeof TextDecoder<`u`&&new TextDecoder;try{Ju.decode(Gu,{stream:!0})}catch{}function Yu(e,t,n){let r=n.length-e-1;if(t>=n[r])return r-1;if(t<=n[e])return e;let i=e,a=r,o=Math.floor((i+a)/2);for(;t<n[o]||t>=n[o+1];)t<n[o]?a=o:i=o,o=Math.floor((i+a)/2);return o}function Xu(e,t,n,r){let i=[],a=[],o=[];i[0]=1;for(let s=1;s<=n;++s){a[s]=t-r[e+1-s],o[s]=r[e+s]-t;let n=0;for(let e=0;e<s;++e){let t=o[e+1],r=a[s-e],c=i[e]/(t+r);i[e]=n+t*c,n=r*c}i[s]=n}return i}function Zu(e,t,n,r){let i=Yu(e,r,t),a=Xu(i,r,e,t),o=new $e(0,0,0,0);for(let t=0;t<=e;++t){let r=n[i-e+t],s=a[t],c=r.w*s;o.x+=r.x*c,o.y+=r.y*c,o.z+=r.z*c,o.w+=r.w*s}return o}function Qu(e,t,n,r,i){let a=[];for(let e=0;e<=n;++e)a[e]=0;let o=[];for(let e=0;e<=r;++e)o[e]=a.slice(0);let s=[];for(let e=0;e<=n;++e)s[e]=a.slice(0);s[0][0]=1;let c=a.slice(0),l=a.slice(0);for(let r=1;r<=n;++r){c[r]=t-i[e+1-r],l[r]=i[e+r]-t;let n=0;for(let e=0;e<r;++e){let t=l[e+1],i=c[r-e];s[r][e]=t+i;let a=s[e][r-1]/s[r][e];s[e][r]=n+t*a,n=i*a}s[r][r]=n}for(let e=0;e<=n;++e)o[0][e]=s[e][n];for(let e=0;e<=n;++e){let t=0,i=1,c=[];for(let e=0;e<=n;++e)c[e]=a.slice(0);c[0][0]=1;for(let a=1;a<=r;++a){let r=0,l=e-a,u=n-a;e>=a&&(c[i][0]=c[t][0]/s[u+1][l],r=c[i][0]*s[l][u]);let d=l>=-1?1:-l,f=e-1<=u?a-1:n-e;for(let e=d;e<=f;++e)c[i][e]=(c[t][e]-c[t][e-1])/s[u+1][l+e],r+=c[i][e]*s[l+e][u];e<=u&&(c[i][a]=-c[t][a-1]/s[u+1][e],r+=c[i][a]*s[e][u]),o[a][e]=r;let p=t;t=i,i=p}}let u=n;for(let e=1;e<=r;++e){for(let t=0;t<=n;++t)o[e][t]*=u;u*=n-e}return o}function $u(e,t,n,r,i){let a=i<e?i:e,o=[],s=Yu(e,r,t),c=Qu(s,r,e,a,t),l=[];for(let e=0;e<n.length;++e){let t=n[e].clone(),r=t.w;t.x*=r,t.y*=r,t.z*=r,l[e]=t}for(let t=0;t<=a;++t){let n=l[s-e].clone().multiplyScalar(c[t][0]);for(let r=1;r<=e;++r)n.add(l[s-e+r].clone().multiplyScalar(c[t][r]));o[t]=n}for(let e=a+1;e<=i+1;++e)o[e]=new $e(0,0,0);return o}function ed(e,t){let n=1;for(let t=2;t<=e;++t)n*=t;let r=1;for(let e=2;e<=t;++e)r*=e;for(let n=2;n<=e-t;++n)r*=n;return n/r}function td(e){let t=e.length,n=[],r=[];for(let i=0;i<t;++i){let t=e[i];n[i]=new G(t.x,t.y,t.z),r[i]=t.w}let i=[];for(let e=0;e<t;++e){let t=n[e].clone();for(let n=1;n<=e;++n)t.sub(i[e-n].clone().multiplyScalar(ed(e,n)*r[n]));i[e]=t.divideScalar(r[0])}return i}function nd(e,t,n,r,i){return td($u(e,t,n,r,i))}var rd=class extends Ss{constructor(e,t,n,r,i){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=i||this.knots.length-1;for(let e=0;e<n.length;++e){let t=n[e];this.controlPoints[e]=new $e(t.x,t.y,t.z,t.w)}}getPoint(e,t=new G){let n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),i=Zu(this.degree,this.knots,this.controlPoints,r);return i.w!==1&&i.divideScalar(i.w),n.set(i.x,i.y,i.z)}getTangent(e,t=new G){let n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),i=nd(this.degree,this.knots,this.controlPoints,r,1);return n.copy(i[1]).normalize(),n}},Q,id,ad,od=class extends Ac{constructor(e){super(e)}load(e,t,n,r){let i=this,a=i.path===``?Qc.extractUrlBase(e):i.path,o=new Nc(this.manager);o.setPath(i.path),o.setResponseType(`arraybuffer`),o.setRequestHeader(i.requestHeader),o.setWithCredentials(i.withCredentials),o.load(e,function(n){try{t(i.parse(n,a))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e,t){if(md(e))Q=new dd().parse(e);else{let t=Td(e);if(!hd(t))throw Error(`THREE.FBXLoader: Unknown format.`);if(gd(t)<7e3)throw Error(`THREE.FBXLoader: FBX version not supported, FileVersion: `+gd(t));Q=new ud().parse(t)}return new sd(new Fc(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),this.manager).parse(Q)}},sd=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){id=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),i=new cd().parse(r);return this.parseScene(r,i,n),ad}parseConnections(){let e=new Map;return`Connections`in Q&&Q.Connections.connections.forEach(function(t){let n=t[0],r=t[1],i=t[2];e.has(n)||e.set(n,{parents:[],children:[]});let a={ID:r,relationship:i};e.get(n).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});let o={ID:n,relationship:i};e.get(r).children.push(o)}),e}parseImages(){let e={},t={};if(`Video`in Q.Objects){let n=Q.Objects.Video;for(let r in n){let i=n[r],a=parseInt(r);if(e[a]=i.RelativeFilename||i.Filename,`Content`in i){let e=i.Content instanceof ArrayBuffer&&i.Content.byteLength>0,a=typeof i.Content==`string`&&i.Content!==``;if(e||a){let e=this.parseImage(n[r]);t[i.RelativeFilename||i.Filename]=e}}}}for(let n in e){let r=e[n];e[n]=t[r]===void 0?e[n].split(`\\`).pop():t[r]}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(`.`)+1).toLowerCase(),i;switch(r){case`bmp`:i=`image/bmp`;break;case`jpg`:case`jpeg`:i=`image/jpeg`;break;case`png`:i=`image/png`;break;case`tif`:i=`image/tiff`;break;case`tga`:this.manager.getHandler(`.tga`)===null&&console.warn(`FBXLoader: TGA loader not found, skipping `,n),i=`image/tga`;break;default:console.warn(`FBXLoader: Image type "`+r+`" is not supported.`);return}if(typeof t==`string`)return`data:`+i+`;base64,`+t;{let e=new Uint8Array(t);return window.URL.createObjectURL(new Blob([e],{type:i}))}}parseTextures(e){let t=new Map;if(`Texture`in Q.Objects){let n=Q.Objects.Texture;for(let r in n){let i=this.parseTexture(n[r],e);t.set(parseInt(r),i)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let r=e.WrapModeU,i=e.WrapModeV,a=r===void 0?0:r.value,o=i===void 0?0:i.value;if(n.wrapS=a===0?c:l,n.wrapT=o===0?c:l,`Scaling`in e){let t=e.Scaling.value;n.repeat.x=t[0],n.repeat.y=t[1]}if(`Translation`in e){let t=e.Translation.value;n.offset.x=t[0],n.offset.y=t[1]}return n}loadTexture(e,t){let n,r=this.textureLoader.path,i=id.get(e.id).children;i!==void 0&&i.length>0&&t[i[0].ID]!==void 0&&(n=t[i[0].ID],(n.indexOf(`blob:`)===0||n.indexOf(`data:`)===0)&&this.textureLoader.setPath(void 0));let a,o=e.FileName.slice(-3).toLowerCase();if(o===`tga`){let t=this.manager.getHandler(`.tga`);t===null?(console.warn(`FBXLoader: TGA loader not found, creating placeholder texture for`,e.RelativeFilename),a=new Qe):(t.setPath(this.textureLoader.path),a=t.load(n))}else if(o===`dds`){let t=this.manager.getHandler(`.dds`);t===null?(console.warn(`FBXLoader: DDS loader not found, creating placeholder texture for`,e.RelativeFilename),a=new Qe):(t.setPath(this.textureLoader.path),a=t.load(n))}else o===`psd`?(console.warn(`FBXLoader: PSD textures are not supported, creating placeholder texture for`,e.RelativeFilename),a=new Qe):a=this.textureLoader.load(n);return this.textureLoader.setPath(r),a}parseMaterials(e){let t=new Map;if(`Material`in Q.Objects){let n=Q.Objects.Material;for(let r in n){let i=this.parseMaterial(n[r],e);i!==null&&t.set(parseInt(r),i)}}return t}parseMaterial(e,t){let n=e.id,r=e.attrName,i=e.ShadingModel;if(typeof i==`object`&&(i=i.value),!id.has(n))return null;let a=this.parseParameters(e,t,n),o;switch(i.toLowerCase()){case`phong`:o=new oc;break;case`lambert`:o=new sc;break;default:console.warn(`THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.`,i),o=new oc}return o.setValues(a),o.name=r,o}parseParameters(e,t,n){let r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new J().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type===`Color`||e.DiffuseColor.type===`ColorRGB`)&&(r.color=new J().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new J().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type===`Color`||e.EmissiveColor.type===`ColorRGB`)&&(r.emissive=new J().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new J().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type===`Color`&&(r.specular=new J().fromArray(e.SpecularColor.value).convertSRGBToLinear());let i=this;return id.get(n).children.forEach(function(e){let n=e.relationship;switch(n){case`Bump`:r.bumpMap=i.getTexture(t,e.ID);break;case`Maya|TEX_ao_map`:r.aoMap=i.getTexture(t,e.ID);break;case`DiffuseColor`:case`Maya|TEX_color_map`:r.map=i.getTexture(t,e.ID),r.map!==void 0&&(r.map.colorSpace=N);break;case`DisplacementColor`:r.displacementMap=i.getTexture(t,e.ID);break;case`EmissiveColor`:r.emissiveMap=i.getTexture(t,e.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=N);break;case`NormalMap`:case`Maya|TEX_normal_map`:r.normalMap=i.getTexture(t,e.ID);break;case`ReflectionColor`:r.envMap=i.getTexture(t,e.ID),r.envMap!==void 0&&(r.envMap.mapping=303,r.envMap.colorSpace=N);break;case`SpecularColor`:r.specularMap=i.getTexture(t,e.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=N);break;case`TransparentColor`:case`TransparencyFactor`:r.alphaMap=i.getTexture(t,e.ID),r.transparent=!0;break;default:console.warn(`THREE.FBXLoader: %s map is not supported in three.js, skipping texture.`,n)}}),r}getTexture(e,t){return`LayeredTexture`in Q.Objects&&t in Q.Objects.LayeredTexture&&(console.warn(`THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.`),t=id.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if(`Deformer`in Q.Objects){let n=Q.Objects.Deformer;for(let r in n){let i=n[r],a=id.get(parseInt(r));if(i.attrType===`Skin`){let t=this.parseSkeleton(a,n);t.ID=r,a.parents.length>1&&console.warn(`THREE.FBXLoader: skeleton attached to more than one geometry is not supported.`),t.geometryID=a.parents[0].ID,e[r]=t}else if(i.attrType===`BlendShape`){let e={id:r};e.rawTargets=this.parseMorphTargets(a,n),e.id=r,a.parents.length>1&&console.warn(`THREE.FBXLoader: morph target attached to more than one geometry is not supported.`),t[r]=e}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(e){let r=t[e.ID];if(r.attrType!==`Cluster`)return;let i={ID:e.ID,indices:[],weights:[],transformLink:new K().fromArray(r.TransformLink.a)};`Indexes`in r&&(i.indices=r.Indexes.a,i.weights=r.Weights.a),n.push(i)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let r=0;r<e.children.length;r++){let i=e.children[r],a=t[i.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!==`BlendShapeChannel`)return;o.geoID=id.get(parseInt(i.ID)).children.filter(function(e){return e.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){ad=new So;let r=this.parseModels(e.skeletons,t,n),i=Q.Objects.Model,a=this;r.forEach(function(e){let t=i[e.ID];a.setLookAtProperties(e,t),id.get(e.ID).parents.forEach(function(t){let n=r.get(t.ID);n!==void 0&&n.add(e)}),e.parent===null&&ad.add(e)}),this.bindSkeleton(e.skeletons,t,r),this.addGlobalSceneSettings(),ad.traverse(function(e){if(e.userData.transformData){e.parent&&(e.userData.transformData.parentMatrix=e.parent.matrix,e.userData.transformData.parentMatrixWorld=e.parent.matrixWorld);let t=Sd(e.userData.transformData);e.applyMatrix4(t),e.updateWorldMatrix()}});let o=new ld().parse();ad.children.length===1&&ad.children[0].isGroup&&(ad.children[0].animations=o,ad=ad.children[0]),ad.animations=o}parseModels(e,t,n){let r=new Map,i=Q.Objects.Model;for(let a in i){let o=parseInt(a),s=i[a],c=id.get(o),l=this.buildSkeleton(c,e,o,s.attrName);if(!l){switch(s.attrType){case`Camera`:l=this.createCamera(c);break;case`Light`:l=this.createLight(c);break;case`Mesh`:l=this.createMesh(c,t,n);break;case`NurbsCurve`:l=this.createCurve(c,t);break;case`LimbNode`:case`Root`:l=new Wo;break;default:l=new So}l.name=s.attrName?dl.sanitizeNodeName(s.attrName):``,l.userData.originalName=s.attrName,l.ID=o}this.getTransformData(l,s),r.set(o,l)}return r}buildSkeleton(e,t,n,r){let i=null;return e.parents.forEach(function(e){for(let a in t){let o=t[a];o.rawBones.forEach(function(t,a){if(t.ID===e.ID){let e=i;i=new Wo,i.matrixWorld.copy(t.transformLink),i.name=r?dl.sanitizeNodeName(r):``,i.userData.originalName=r,i.ID=n,o.bones[a]=i,e!==null&&i.add(e)}})}}),i}createCamera(e){let t,n;if(e.children.forEach(function(e){let t=Q.Objects.NodeAttribute[e.ID];t!==void 0&&(n=t)}),n===void 0)t=new rn;else{let e=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(e=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let i=1e3;n.FarPlane!==void 0&&(i=n.FarPlane.value/1e3);let a=window.innerWidth,o=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,o=n.AspectHeight.value);let s=a/o,c=45;n.FieldOfView!==void 0&&(c=n.FieldOfView.value);let l=n.FocalLength?n.FocalLength.value:null;switch(e){case 0:t=new mr(c,s,r,i),l!==null&&t.setFocalLength(l);break;case 1:t=new Rr(-a/2,a/2,o/2,-o/2,r,i);break;default:console.warn(`THREE.FBXLoader: Unknown camera type `+e+`.`),t=new rn}}return t}createLight(e){let t,n;if(e.children.forEach(function(e){let t=Q.Objects.NodeAttribute[e.ID];t!==void 0&&(n=t)}),n===void 0)t=new rn;else{let e;e=n.LightType===void 0?0:n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new J().fromArray(n.Color.value).convertSRGBToLinear());let i=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(i=0);let a=0;switch(n.FarAttenuationEnd!==void 0&&(a=n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?0:n.FarAttenuationEnd.value),e){case 0:t=new Jc(r,i,a,1);break;case 1:t=new Xc(r,i);break;case 2:let e=Math.PI/3;n.InnerAngle!==void 0&&(e=Me.degToRad(n.InnerAngle.value));let o=0;n.OuterAngle!==void 0&&(o=Me.degToRad(n.OuterAngle.value),o=Math.max(o,1)),t=new Uc(r,i,a,e,o,1);break;default:console.warn(`THREE.FBXLoader: Unknown light type `+n.LightType.value+`, defaulting to a PointLight.`),t=new Jc(r,i)}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,i=null,a=null,o=[];return e.children.forEach(function(e){t.has(e.ID)&&(i=t.get(e.ID)),n.has(e.ID)&&o.push(n.get(e.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new oc({name:Ac.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),`color`in i.attributes&&o.forEach(function(e){e.vertexColors=!0}),i.FBX_Deformer?(r=new Uo(i,a),r.normalizeSkinWeights()):r=new tr(i,a),r}createCurve(e,t){return new us(e.children.reduce(function(e,n){return t.has(n.ID)&&(e=t.get(n.ID)),e},null),new is({name:Ac.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1}))}getTransformData(e,t){let n={};`InheritType`in t&&(n.inheritType=parseInt(t.InheritType.value)),n.eulerOrder=`RotationOrder`in t?Cd(t.RotationOrder.value):`ZYX`,`Lcl_Translation`in t&&(n.translation=t.Lcl_Translation.value),`PreRotation`in t&&(n.preRotation=t.PreRotation.value),`Lcl_Rotation`in t&&(n.rotation=t.Lcl_Rotation.value),`PostRotation`in t&&(n.postRotation=t.PostRotation.value),`Lcl_Scaling`in t&&(n.scale=t.Lcl_Scaling.value),`ScalingOffset`in t&&(n.scalingOffset=t.ScalingOffset.value),`ScalingPivot`in t&&(n.scalingPivot=t.ScalingPivot.value),`RotationOffset`in t&&(n.rotationOffset=t.RotationOffset.value),`RotationPivot`in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){`LookAtProperty`in t&&id.get(e.ID).children.forEach(function(t){if(t.relationship===`LookAtProperty`){let n=Q.Objects.Model[t.ID];if(`Lcl_Translation`in n){let t=n.Lcl_Translation.value;e.target===void 0?e.lookAt(new G().fromArray(t)):(e.target.position.fromArray(t),ad.add(e.target))}}})}bindSkeleton(e,t,n){let r=this.parsePoseNodes();for(let i in e){let a=e[i];id.get(parseInt(a.ID)).parents.forEach(function(e){if(t.has(e.ID)){let t=e.ID;id.get(t).parents.forEach(function(e){n.has(e.ID)&&n.get(e.ID).bind(new Jo(a.bones),r[e.ID])})}})}}parsePoseNodes(){let e={};if(`Pose`in Q.Objects){let t=Q.Objects.Pose;for(let n in t)if(t[n].attrType===`BindPose`&&t[n].NbPoseNodes>0){let r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(t){e[t.Node]=new K().fromArray(t.Matrix.a)}):e[r.Node]=new K().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if(`GlobalSettings`in Q){if(`AmbientColor`in Q.GlobalSettings){let e=Q.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){let e=new J(t,n,r).convertSRGBToLinear();ad.add(new Zc(e,1))}}`UnitScaleFactor`in Q.GlobalSettings&&(ad.userData.unitScaleFactor=Q.GlobalSettings.UnitScaleFactor.value)}}},cd=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if(`Geometry`in Q.Objects){let n=Q.Objects.Geometry;for(let r in n){let i=id.get(parseInt(r)),a=this.parseGeometry(i,n[r],e);t.set(parseInt(r),a)}}return this.negativeMaterialIndices===!0&&console.warn(`THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected.`),t}parseGeometry(e,t,n){switch(t.attrType){case`Mesh`:return this.parseMeshGeometry(e,t,n);case`NurbsCurve`:return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let r=n.skeletons,i=[],a=e.parents.map(function(e){return Q.Objects.Model[e.ID]});if(a.length===0)return;let o=e.children.reduce(function(e,t){return r[t.ID]!==void 0&&(e=r[t.ID]),e},null);e.children.forEach(function(e){n.morphTargets[e.ID]!==void 0&&i.push(n.morphTargets[e.ID])});let s=a[0],c={};`RotationOrder`in s&&(c.eulerOrder=Cd(s.RotationOrder.value)),`InheritType`in s&&(c.inheritType=parseInt(s.InheritType.value)),`GeometricTranslation`in s&&(c.translation=s.GeometricTranslation.value),`GeometricRotation`in s&&(c.rotation=s.GeometricRotation.value),`GeometricScaling`in s&&(c.scale=s.GeometricScaling.value);let l=Sd(c);return this.genGeometry(t,o,i,l)}genGeometry(e,t,n,r){let i=new Ln;e.attrName&&(i.name=e.attrName);let a=this.parseGeoNode(e,t),o=this.genBuffers(a),s=new kn(o.vertex,3);if(s.applyMatrix4(r),i.setAttribute(`position`,s),o.colors.length>0&&i.setAttribute(`color`,new kn(o.colors,3)),t&&(i.setAttribute(`skinIndex`,new Dn(o.weightsIndices,4)),i.setAttribute(`skinWeight`,new kn(o.vertexWeights,4)),i.FBX_Deformer=t),o.normal.length>0){let e=new U().getNormalMatrix(r),t=new kn(o.normal,3);t.applyNormalMatrix(e),i.setAttribute(`normal`,t)}if(o.uvs.forEach(function(e,t){let n=t===0?`uv`:`uv${t}`;i.setAttribute(n,new kn(o.uvs[t],2))}),a.material&&a.material.mappingType!==`AllSame`){let e=o.materialIndex[0],t=0;if(o.materialIndex.forEach(function(n,r){n!==e&&(i.addGroup(t,r-t,e),e=n,t=r)}),i.groups.length>0){let t=i.groups[i.groups.length-1],n=t.start+t.count;n!==o.materialIndex.length&&i.addGroup(n,o.materialIndex.length-n,e)}i.groups.length===0&&i.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(i,e,n,r),i}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices===void 0?[]:e.Vertices.a,n.vertexIndices=e.PolygonVertexIndex===void 0?[]:e.PolygonVertexIndex.a,e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let t=0;for(;e.LayerElementUV[t];)e.LayerElementUV[t].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[t])),t++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(e,t){e.indices.forEach(function(r,i){n.weightTable[r]===void 0&&(n.weightTable[r]=[]),n.weightTable[r].push({id:t,weight:e.weights[i]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,r=0,i=!1,a=[],o=[],s=[],c=[],l=[],u=[],d=this;return e.vertexIndices.forEach(function(f,p){let m,h=!1;f<0&&(f^=-1,h=!0);let g=[],_=[];if(a.push(f*3,f*3+1,f*3+2),e.color){let t=yd(p,n,f,e.color);s.push(t[0],t[1],t[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(e){_.push(e.weight),g.push(e.id)}),_.length>4){i||=(console.warn(`THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.`),!0);let e=[0,0,0,0],t=[0,0,0,0];_.forEach(function(n,r){let i=n,a=g[r];t.forEach(function(t,n,r){if(i>t){r[n]=i,i=t;let o=e[n];e[n]=a,a=o}})}),g=e,_=t}for(;_.length<4;)_.push(0),g.push(0);for(let e=0;e<4;++e)l.push(_[e]),u.push(g[e])}if(e.normal){let t=yd(p,n,f,e.normal);o.push(t[0],t[1],t[2])}e.material&&e.material.mappingType!==`AllSame`&&(m=yd(p,n,f,e.material)[0],m<0&&(d.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(e,t){let r=yd(p,n,f,e);c[t]===void 0&&(c[t]=[]),c[t].push(r[0]),c[t].push(r[1])}),r++,h&&(d.genFace(t,e,a,m,o,s,c,l,u,r),n++,r=0,a=[],o=[],s=[],c=[],l=[],u=[])}),t}getNormalNewell(e){let t=new G(0,0,0);for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t.x+=(r.y-i.y)*(r.z+i.z),t.y+=(r.z-i.z)*(r.x+i.x),t.z+=(r.x-i.x)*(r.y+i.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),n=(Math.abs(t.z)>.5?new G(0,1,0):new G(0,0,1)).cross(t).normalize();return{normal:t,tangent:n,bitangent:t.clone().cross(n).normalize()}}flattenVertex(e,t,n){return new H(e.dot(t),e.dot(n))}genFace(e,t,n,r,i,a,o,s,c,l){let u;if(l>3){let e=[];for(let r=0;r<n.length;r+=3)e.push(new G(t.vertexPositions[n[r]],t.vertexPositions[n[r+1]],t.vertexPositions[n[r+2]]));let{tangent:r,bitangent:i}=this.getNormalTangentAndBitangent(e),a=[];for(let t of e)a.push(this.flattenVertex(t,r,i));u=tc.triangulateShape(a,[])}else u=[[0,1,2]];for(let[l,d,f]of u)e.vertex.push(t.vertexPositions[n[l*3]]),e.vertex.push(t.vertexPositions[n[l*3+1]]),e.vertex.push(t.vertexPositions[n[l*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),t.skeleton&&(e.vertexWeights.push(s[l*4]),e.vertexWeights.push(s[l*4+1]),e.vertexWeights.push(s[l*4+2]),e.vertexWeights.push(s[l*4+3]),e.vertexWeights.push(s[d*4]),e.vertexWeights.push(s[d*4+1]),e.vertexWeights.push(s[d*4+2]),e.vertexWeights.push(s[d*4+3]),e.vertexWeights.push(s[f*4]),e.vertexWeights.push(s[f*4+1]),e.vertexWeights.push(s[f*4+2]),e.vertexWeights.push(s[f*4+3]),e.weightsIndices.push(c[l*4]),e.weightsIndices.push(c[l*4+1]),e.weightsIndices.push(c[l*4+2]),e.weightsIndices.push(c[l*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3])),t.color&&(e.colors.push(a[l*3]),e.colors.push(a[l*3+1]),e.colors.push(a[l*3+2]),e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[f*3]),e.colors.push(a[f*3+1]),e.colors.push(a[f*3+2])),t.material&&t.material.mappingType!==`AllSame`&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(i[l*3]),e.normal.push(i[l*3+1]),e.normal.push(i[l*3+2]),e.normal.push(i[d*3]),e.normal.push(i[d*3+1]),e.normal.push(i[d*3+2]),e.normal.push(i[f*3]),e.normal.push(i[f*3+1]),e.normal.push(i[f*3+2])),t.uv&&t.uv.forEach(function(t,n){e.uvs[n]===void 0&&(e.uvs[n]=[]),e.uvs[n].push(o[n][l*2]),e.uvs[n].push(o[n][l*2+1]),e.uvs[n].push(o[n][d*2]),e.uvs[n].push(o[n][d*2+1]),e.uvs[n].push(o[n][f*2]),e.uvs[n].push(o[n][f*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let i=this;n.forEach(function(n){n.rawTargets.forEach(function(n){let a=Q.Objects.Geometry[n.geoID];a!==void 0&&i.genMorphGeometry(e,t,a,r,n.name)})})}genMorphGeometry(e,t,n,r,i){let a=t.PolygonVertexIndex===void 0?[]:t.PolygonVertexIndex.a,o=n.Vertices===void 0?[]:n.Vertices.a,s=n.Indexes===void 0?[]:n.Indexes.a,c=e.attributes.position.count*3,l=new Float32Array(c);for(let e=0;e<s.length;e++){let t=s[e]*3;l[t]=o[e*3],l[t+1]=o[e*3+1],l[t+2]=o[e*3+2]}let u={vertexIndices:a,vertexPositions:l},d=new kn(this.genBuffers(u).vertex,3);d.name=i||n.attrName,d.applyMatrix4(r),e.morphAttributes.position.push(d)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a,i=[];return n===`IndexToDirect`&&(`NormalIndex`in e?i=e.NormalIndex.a:`NormalsIndex`in e&&(i=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:i,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a,i=[];return n===`IndexToDirect`&&(i=e.UVIndex.a),{dataSize:2,buffer:r,indices:i,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a,i=[];n===`IndexToDirect`&&(i=e.ColorIndex.a);for(let e=0,t=new J;e<r.length;e+=4)t.fromArray(r,e).convertSRGBToLinear().toArray(r,e);return{dataSize:4,buffer:r,indices:i,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t===`NoMappingInformation`)return{dataSize:1,buffer:[0],indices:[0],mappingType:`AllSame`,referenceType:n};let r=e.Materials.a,i=[];for(let e=0;e<r.length;++e)i.push(e);return{dataSize:1,buffer:r,indices:i,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error(`THREE.FBXLoader: Invalid Order %s given for geometry ID: %s`,e.Order,e.id),new Ln;let n=t-1,r=e.KnotVector.a,i=[],a=e.Points.a;for(let e=0,t=a.length;e<t;e+=4)i.push(new $e().fromArray(a,e));let o,s;if(e.Form===`Closed`)i.push(i[0]);else if(e.Form===`Periodic`){o=n,s=r.length-1-o;for(let e=0;e<n;++e)i.push(i[e])}let c=new rd(n,r,i,o,s).getPoints(i.length*12);return new Ln().setFromPoints(c)}},ld=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let r=t[n],i=this.addClip(r);e.push(i)}return e}parseClips(){if(Q.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=Q.Objects.AnimationCurveNode,t=new Map;for(let n in e){let r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){let e={id:r.id,attr:r.attrName,curves:{}};t.set(e.id,e)}}return t}parseAnimationCurves(e){let t=Q.Objects.AnimationCurve;for(let n in t){let r={id:t[n].id,times:t[n].KeyTime.a.map(_d),values:t[n].KeyValueFloat.a},i=id.get(r.id);if(i!==void 0){let t=i.parents[0].ID,n=i.parents[0].relationship;n.match(/X/)?e.get(t).curves.x=r:n.match(/Y/)?e.get(t).curves.y=r:n.match(/Z/)?e.get(t).curves.z=r:n.match(/DeformPercent/)&&e.has(t)&&(e.get(t).curves.morph=r)}}}parseAnimationLayers(e){let t=Q.Objects.AnimationLayer,n=new Map;for(let r in t){let t=[],i=id.get(parseInt(r));i!==void 0&&(i.children.forEach(function(n,r){if(e.has(n.ID)){let i=e.get(n.ID);if(i.curves.x!==void 0||i.curves.y!==void 0||i.curves.z!==void 0){if(t[r]===void 0){let e=id.get(n.ID).parents.filter(function(e){return e.relationship!==void 0})[0].ID;if(e!==void 0){let i=Q.Objects.Model[e.toString()];if(i===void 0){console.warn(`THREE.FBXLoader: Encountered a unused curve.`,n);return}let a={modelName:i.attrName?dl.sanitizeNodeName(i.attrName):``,ID:i.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};ad.traverse(function(e){e.ID===i.id&&(a.transform=e.matrix,e.userData.transformData&&(a.eulerOrder=e.userData.transformData.eulerOrder))}),a.transform||=new K,`PreRotation`in i&&(a.preRotation=i.PreRotation.value),`PostRotation`in i&&(a.postRotation=i.PostRotation.value),t[r]=a}}t[r]&&(t[r][i.attr]=i)}else if(i.curves.morph!==void 0){if(t[r]===void 0){let e=id.get(n.ID).parents.filter(function(e){return e.relationship!==void 0})[0].ID,i=id.get(e).parents[0].ID,a=id.get(i).parents[0].ID,o=id.get(a).parents[0].ID,s=Q.Objects.Model[o],c={modelName:s.attrName?dl.sanitizeNodeName(s.attrName):``,morphName:Q.Objects.Deformer[e].attrName};t[r]=c}t[r][i.attr]=i}}}),n.set(parseInt(r),t))}return n}parseAnimStacks(e){let t=Q.Objects.AnimationStack,n={};for(let r in t){let i=id.get(parseInt(r)).children;i.length>1&&console.warn(`THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.`);let a=e.get(i[0].ID);n[r]={name:t[r].attrName,layer:a}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(e){t=t.concat(n.generateTracks(e))}),new Tc(e.name,-1,t)}generateTracks(e){let t=[],n=new G,r=new G;if(e.transform&&e.transform.decompose(n,new W,r),n=n.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.T.curves,n,`position`);r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let n=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);n!==void 0&&t.push(n)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let n=this.generateVectorTrack(e.modelName,e.S.curves,r,`scale`);n!==void 0&&t.push(n)}if(e.DeformPercent!==void 0){let n=this.generateMorphTrack(e);n!==void 0&&t.push(n)}return t}generateVectorTrack(e,t,n,r){let i=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(i,t,n);return new wc(e+`.`+r,i,a)}generateRotationTrack(e,t,n,r,i){let a,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){let e=this.interpolateRotations(t.x,t.y,t.z,i);a=e[0],o=e[1]}n!==void 0&&(n=n.map(Me.degToRad),n.push(i),n=new Ht().fromArray(n),n=new W().setFromEuler(n)),r!==void 0&&(r=r.map(Me.degToRad),r.push(i),r=new Ht().fromArray(r),r=new W().setFromEuler(r).invert());let s=new W,c=new Ht,l=[];if(!o||!a)return new Sc(e+`.quaternion`,[],[]);for(let e=0;e<o.length;e+=3)c.set(o[e],o[e+1],o[e+2],i),s.setFromEuler(c),n!==void 0&&s.premultiply(n),r!==void 0&&s.multiply(r),e>2&&new W().fromArray(l,(e-3)/3*4).dot(s)<0&&s.set(-s.x,-s.y,-s.z,-s.w),s.toArray(l,e/3*4);return new Sc(e+`.quaternion`,a,l)}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(e){return e/100}),r=ad.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new bc(e.modelName+`.morphTargetInfluences[`+r+`]`,t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(e,t){return e-t}),t.length>1){let e=1,n=t[0];for(let r=1;r<t.length;r++){let i=t[r];i!==n&&(t[e]=i,n=i,e++)}t=t.slice(0,e)}return t}getKeyframeTrackValues(e,t,n){let r=n,i=[],a=-1,o=-1,s=-1;return e.forEach(function(e){if(t.x&&(a=t.x.times.indexOf(e)),t.y&&(o=t.y.times.indexOf(e)),t.z&&(s=t.z.times.indexOf(e)),a!==-1){let e=t.x.values[a];i.push(e),r[0]=e}else i.push(r[0]);if(o!==-1){let e=t.y.values[o];i.push(e),r[1]=e}else i.push(r[1]);if(s!==-1){let e=t.z.values[s];i.push(e),r[2]=e}else i.push(r[2])}),i}interpolateRotations(e,t,n,r){let i=[],a=[];i.push(e.times[0]),a.push(Me.degToRad(e.values[0])),a.push(Me.degToRad(t.values[0])),a.push(Me.degToRad(n.values[0]));for(let o=1;o<e.values.length;o++){let s=[e.values[o-1],t.values[o-1],n.values[o-1]];if(isNaN(s[0])||isNaN(s[1])||isNaN(s[2]))continue;let c=s.map(Me.degToRad),l=[e.values[o],t.values[o],n.values[o]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;let u=l.map(Me.degToRad),d=[l[0]-s[0],l[1]-s[1],l[2]-s[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){let t=Math.max(...f)/180,n=new Ht(...c,r),s=new Ht(...u,r),l=new W().setFromEuler(n),d=new W().setFromEuler(s);l.dot(d)&&d.set(-d.x,-d.y,-d.z,-d.w);let p=e.times[o-1],m=e.times[o]-p,h=new W,g=new Ht;for(let e=0;e<1;e+=1/t)h.copy(l.clone().slerp(d.clone(),e)),i.push(p+e*m),g.setFromQuaternion(h,r),a.push(g.x),a.push(g.y),a.push(g.z)}else i.push(e.times[o]),a.push(Me.degToRad(e.values[o])),a.push(Me.degToRad(t.values[o])),a.push(Me.degToRad(n.values[o]))}return[i,a]}},ud=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),--this.currentIndent}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new pd,this.nodeStack=[],this.currentProp=[],this.currentPropName=``;let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(e,r){let i=e.match(/^[\s\t]*;/),a=e.match(/^[\s\t]*$/);if(i||a)return;let o=e.match(`^\\t{`+t.currentIndent+`}(\\w+):(.*){`,``),s=e.match(`^\\t{`+t.currentIndent+`}(\\w+):[\\s\\t\\r\\n](.*)`),c=e.match(`^\\t{`+(t.currentIndent-1)+`}}`);o?t.parseNodeBegin(e,o):s?t.parseNodeProperty(e,s,n[++r]):c?t.popStack():e.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(e)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,``).replace(/"$/,``),r=t[2].split(`,`).map(function(e){return e.trim().replace(/^"/,``).replace(/"$/,``)}),i={name:n},a=this.parseNodeAttr(r),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,i):n in o?(n===`PoseNode`?o.PoseNode.push(i):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==``&&(o[n][a.id]=i)):typeof a.id==`number`?(o[n]={},o[n][a.id]=i):n!==`Properties70`&&(o[n]=n===`PoseNode`?[i]:i),typeof a.id==`number`&&(i.id=a.id),a.name!==``&&(i.attrName=a.name),a.type!==``&&(i.attrType=a.type),this.pushStack(i)}parseNodeAttr(e){let t=e[0];e[0]!==``&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n=``,r=``;return e.length>1&&(n=e[1].replace(/^(\w+)::/,``),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,``).replace(/"$/,``).trim(),i=t[2].replace(/^"/,``).replace(/"$/,``).trim();r===`Content`&&i===`,`&&(i=n.replace(/"/g,``).replace(/,$/,``).trim());let a=this.getCurrentNode();if(a.name===`Properties70`)this.parseNodeSpecialProperty(e,r,i);else{if(r===`C`){let e=i.split(`,`).slice(1),t=parseInt(e[0]),n=parseInt(e[1]),o=i.split(`,`).slice(3);o=o.map(function(e){return e.trim().replace(/^"/,``)}),r=`connections`,i=[t,n],Ed(i,o),a[r]===void 0&&(a[r]=[])}r===`Node`&&(a.id=i),r in a&&Array.isArray(a[r])?a[r].push(i):r===`a`?a.a=i:a[r]=i,this.setCurrentProp(a,r),r===`a`&&i.slice(-1)!==`,`&&(a.a=wd(i))}}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==`,`&&(t.a=wd(t.a))}parseNodeSpecialProperty(e,t,n){let r=n.split(`",`).map(function(e){return e.trim().replace(/^\"/,``).replace(/\s/,`_`)}),i=r[0],a=r[1],o=r[2],s=r[3],c=r[4];switch(a){case`int`:case`enum`:case`bool`:case`ULongLong`:case`double`:case`Number`:case`FieldOfView`:c=parseFloat(c);break;case`Color`:case`ColorRGB`:case`Vector3D`:case`Lcl_Translation`:case`Lcl_Rotation`:case`Lcl_Scaling`:c=wd(c)}this.getPrevNode()[i]={type:a,type2:o,flag:s,value:c},this.setCurrentProp(this.getPrevNode(),i)}},dd=class{parse(e){let t=new fd(e);t.skip(23);let n=t.getUint32();if(n<6400)throw Error(`THREE.FBXLoader: FBX version not supported, FileVersion: `+n);let r=new pd;for(;!this.endOfContent(t);){let e=this.parseNode(t,n);e!==null&&r.add(e.name,e)}return r}endOfContent(e){return e.size()%16==0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},r=t>=7500?e.getUint64():e.getUint32(),i=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let a=e.getUint8(),o=e.getString(a);if(r===0)return null;let s=[];for(let t=0;t<i;t++)s.push(this.parseProperty(e));let c=s.length>0?s[0]:``,l=s.length>1?s[1]:``,u=s.length>2?s[2]:``;for(n.singleProperty=i===1&&e.getOffset()===r;r>e.getOffset();){let r=this.parseNode(e,t);r!==null&&this.parseSubNode(o,n,r)}return n.propertyList=s,typeof c==`number`&&(n.id=c),l!==``&&(n.attrName=l),u!==``&&(n.attrType=u),o!==``&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let e=n.propertyList[0];Array.isArray(e)?(t[n.name]=n,n.a=e):t[n.name]=e}else if(e===`Connections`&&n.name===`C`){let e=[];n.propertyList.forEach(function(t,n){n!==0&&e.push(t)}),t.connections===void 0&&(t.connections=[]),t.connections.push(e)}else if(n.name===`Properties70`)Object.keys(n).forEach(function(e){t[e]=n[e]});else if(e===`Properties70`&&n.name===`P`){let e=n.propertyList[0],r=n.propertyList[1],i=n.propertyList[2],a=n.propertyList[3],o;e.indexOf(`Lcl `)===0&&(e=e.replace(`Lcl `,`Lcl_`)),r.indexOf(`Lcl `)===0&&(r=r.replace(`Lcl `,`Lcl_`)),o=r===`Color`||r===`ColorRGB`||r===`Vector`||r===`Vector3D`||r.indexOf(`Lcl_`)===0?[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:n.propertyList[4],t[e]={type:r,type2:i,flag:a,value:o}}else t[n.name]===void 0?typeof n.id==`number`?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name===`PoseNode`?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case`C`:return e.getBoolean();case`D`:return e.getFloat64();case`F`:return e.getFloat32();case`I`:return e.getInt32();case`L`:return e.getInt64();case`R`:return n=e.getUint32(),e.getArrayBuffer(n);case`S`:return n=e.getUint32(),e.getString(n);case`Y`:return e.getInt16();case`b`:case`c`:case`d`:case`f`:case`i`:case`l`:let r=e.getUint32(),i=e.getUint32(),a=e.getUint32();if(i===0)switch(t){case`b`:case`c`:return e.getBooleanArray(r);case`d`:return e.getFloat64Array(r);case`f`:return e.getFloat32Array(r);case`i`:return e.getInt32Array(r);case`l`:return e.getInt64Array(r)}let o=new fd(qu(new Uint8Array(e.getArrayBuffer(a))).buffer);switch(t){case`b`:case`c`:return o.getBooleanArray(r);case`d`:return o.getFloat64Array(r);case`f`:return o.getFloat32Array(r);case`i`:return o.getInt32Array(r);case`l`:return o.getInt64Array(r)}break;default:throw Error(`THREE.FBXLoader: Unknown property type `+t)}}},fd=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t===void 0||t,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)==1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t|0,e=~e|0,e===4294967295&&(t=t+1|0),e=e+1|0,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}},pd=class{add(e,t){this[e]=t}};function md(e){return e.byteLength>=21&&Td(e,0,21)===`Kaydara FBX Binary  \0`}function hd(e){let t=[`K`,`a`,`y`,`d`,`a`,`r`,`a`,`\\`,`F`,`B`,`X`,`\\`,`B`,`i`,`n`,`a`,`r`,`y`,`\\`,`\\`],n=0;function r(t){let r=e[t-1];return e=e.slice(n+t),n++,r}for(let e=0;e<t.length;++e)if(r(1)===t[e])return!1;return!0}function gd(e){let t=e.match(/FBXVersion: (\d+)/);if(t)return parseInt(t[1]);throw Error(`THREE.FBXLoader: Cannot find the version number for the file given.`)}function _d(e){return e/46186158e3}var vd=[];function yd(e,t,n,r){let i;switch(r.mappingType){case`ByPolygonVertex`:i=e;break;case`ByPolygon`:i=t;break;case`ByVertice`:i=n;break;case`AllSame`:i=r.indices[0];break;default:console.warn(`THREE.FBXLoader: unknown attribute mapping type `+r.mappingType)}r.referenceType===`IndexToDirect`&&(i=r.indices[i]);let a=i*r.dataSize,o=a+r.dataSize;return Dd(vd,r.buffer,a,o)}var bd=new Ht,xd=new G;function Sd(e){let t=new K,n=new K,r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K,d=new K,f=new K,p=e.inheritType?e.inheritType:0;if(e.translation&&t.setPosition(xd.fromArray(e.translation)),e.preRotation){let t=e.preRotation.map(Me.degToRad);t.push(e.eulerOrder||Ht.DEFAULT_ORDER),n.makeRotationFromEuler(bd.fromArray(t))}if(e.rotation){let t=e.rotation.map(Me.degToRad);t.push(e.eulerOrder||Ht.DEFAULT_ORDER),r.makeRotationFromEuler(bd.fromArray(t))}if(e.postRotation){let t=e.postRotation.map(Me.degToRad);t.push(e.eulerOrder||Ht.DEFAULT_ORDER),i.makeRotationFromEuler(bd.fromArray(t)),i.invert()}e.scale&&a.scale(xd.fromArray(e.scale)),e.scalingOffset&&s.setPosition(xd.fromArray(e.scalingOffset)),e.scalingPivot&&o.setPosition(xd.fromArray(e.scalingPivot)),e.rotationOffset&&c.setPosition(xd.fromArray(e.rotationOffset)),e.rotationPivot&&l.setPosition(xd.fromArray(e.rotationPivot)),e.parentMatrixWorld&&(d.copy(e.parentMatrix),u.copy(e.parentMatrixWorld));let m=n.clone().multiply(r).multiply(i),h=new K;h.extractRotation(u);let g=new K;g.copyPosition(u);let _=g.clone().invert().multiply(u),v=h.clone().invert().multiply(_),y=a,b=new K;if(p===0)b.copy(h).multiply(m).multiply(v).multiply(y);else if(p===1)b.copy(h).multiply(v).multiply(m).multiply(y);else{let e=new K().scale(new G().setFromMatrixScale(d)).clone().invert(),t=v.clone().multiply(e);b.copy(h).multiply(m).multiply(t).multiply(y)}let x=l.clone().invert(),S=o.clone().invert(),C=t.clone().multiply(c).multiply(l).multiply(n).multiply(r).multiply(i).multiply(x).multiply(s).multiply(o).multiply(a).multiply(S),w=new K().copyPosition(C),T=u.clone().multiply(w);return f.copyPosition(T),C=f.clone().multiply(b),C.premultiply(u.invert()),C}function Cd(e){e||=0;let t=[`ZYX`,`YZX`,`XZY`,`ZXY`,`YXZ`,`XYZ`];return e===6?(console.warn(`THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.`),t[0]):t[e]}function wd(e){return e.split(`,`).map(function(e){return parseFloat(e)})}function Td(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=e.byteLength),new TextDecoder().decode(new Uint8Array(e,t,n))}function Ed(e,t){for(let n=0,r=e.length,i=t.length;n<i;n++,r++)e[r]=t[n]}function Dd(e,t,n,r){for(let i=n,a=0;i<r;i++,a++)e[a]=t[i];return e}var Od={type:`change`},kd={type:`start`},Ad={type:`end`},jd=new Mt,Md=new Cr,Nd=Math.cos(70*Me.DEG2RAD),Pd=class extends de{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction=`none`,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:a.ROTATE,MIDDLE:a.DOLLY,RIGHT:a.PAN},this.touches={ONE:o.ROTATE,TWO:o.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener(`keydown`,we),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener(`keydown`,we),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Od),n.update(),i=r.NONE},this.update=function(){let t=new G,a=new W().setFromUnitVectors(e.up,new G(0,1,0)),o=a.clone().invert(),f=new G,p=new W,m=new G,h=2*Math.PI;return function(g=null){let _=n.object.position;t.copy(_).sub(n.target),t.applyQuaternion(a),c.setFromVector3(t),n.autoRotate&&i===r.NONE&&k(D(g)),n.enableDamping?(c.theta+=l.theta*n.dampingFactor,c.phi+=l.phi*n.dampingFactor):(c.theta+=l.theta,c.phi+=l.phi);let v=n.minAzimuthAngle,y=n.maxAzimuthAngle;isFinite(v)&&isFinite(y)&&(v<-Math.PI?v+=h:v>Math.PI&&(v-=h),y<-Math.PI?y+=h:y>Math.PI&&(y-=h),v<=y?c.theta=Math.max(v,Math.min(y,c.theta)):c.theta=c.theta>(v+y)/2?Math.max(v,c.theta):Math.min(y,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?c.radius=P(c.radius):c.radius=P(c.radius*u),t.setFromSpherical(c),t.applyQuaternion(o),_.copy(n.target).add(t),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let b=!1;if(n.zoomToCursor&&C){let r=null;if(n.object.isPerspectiveCamera){let e=t.length();r=P(e*u);let i=e-r;n.object.position.addScaledVector(x,i),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new G(S.x,S.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),b=!0;let i=new G(S.x,S.y,0);i.unproject(n.object),n.object.position.sub(i).add(e),n.object.updateMatrixWorld(),r=t.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),n.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(r).add(n.object.position):(jd.origin.copy(n.object.position),jd.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(jd.direction))<Nd?e.lookAt(n.target):(Md.setFromNormalAndCoplanarPoint(n.object.up,n.target),jd.intersectPlane(Md,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),b=!0);return u=1,C=!1,b||f.distanceToSquared(n.object.position)>s||8*(1-p.dot(n.object.quaternion))>s||m.distanceToSquared(n.target)>0?(n.dispatchEvent(Od),f.copy(n.object.position),p.copy(n.object.quaternion),m.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener(`contextmenu`,De),n.domElement.removeEventListener(`pointerdown`,z),n.domElement.removeEventListener(`pointercancel`,B),n.domElement.removeEventListener(`wheel`,be),n.domElement.removeEventListener(`pointermove`,_e),n.domElement.removeEventListener(`pointerup`,B),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener(`keydown`,we),n._domElementKeyEvents=null)};let n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},i=r.NONE,s=1e-6,c=new fl,l=new fl,u=1,d=new G,f=new H,p=new H,m=new H,h=new H,g=new H,_=new H,v=new H,y=new H,b=new H,x=new G,S=new H,C=!1,w=[],T={},E=!1;function D(e){return e===null?2*Math.PI/60/60*n.autoRotateSpeed:2*Math.PI/60*n.autoRotateSpeed*e}function O(e){let t=Math.abs(e*.01);return .95**(n.zoomSpeed*t)}function k(e){l.theta-=e}function A(e){l.phi-=e}let ee=function(){let e=new G;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}}(),te=function(){let e=new G;return function(t,r){n.screenSpacePanning===!0?e.setFromMatrixColumn(r,1):(e.setFromMatrixColumn(r,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),j=function(){let e=new G;return function(t,r){let i=n.domElement;if(n.object.isPerspectiveCamera){let a=n.object.position;e.copy(a).sub(n.target);let o=e.length();o*=Math.tan(n.object.fov/2*Math.PI/180),ee(2*t*o/i.clientHeight,n.object.matrix),te(2*r*o/i.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ee(t*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),te(r*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),n.enablePan=!1)}}();function ne(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),n.enableZoom=!1)}function M(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),n.enableZoom=!1)}function N(e,t){if(!n.zoomToCursor)return;C=!0;let r=n.domElement.getBoundingClientRect(),i=e-r.left,a=t-r.top,o=r.width,s=r.height;S.x=i/o*2-1,S.y=-(a/s)*2+1,x.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function P(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function re(e){f.set(e.clientX,e.clientY)}function ie(e){N(e.clientX,e.clientX),v.set(e.clientX,e.clientY)}function F(e){h.set(e.clientX,e.clientY)}function ae(e){p.set(e.clientX,e.clientY),m.subVectors(p,f).multiplyScalar(n.rotateSpeed);let t=n.domElement;k(2*Math.PI*m.x/t.clientHeight),A(2*Math.PI*m.y/t.clientHeight),f.copy(p),n.update()}function oe(e){y.set(e.clientX,e.clientY),b.subVectors(y,v),b.y>0?ne(O(b.y)):b.y<0&&M(O(b.y)),v.copy(y),n.update()}function se(e){g.set(e.clientX,e.clientY),_.subVectors(g,h).multiplyScalar(n.panSpeed),j(_.x,_.y),h.copy(g),n.update()}function ce(e){N(e.clientX,e.clientY),e.deltaY<0?M(O(e.deltaY)):e.deltaY>0&&ne(O(e.deltaY)),n.update()}function le(e){let t=!1;switch(e.code){case n.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}function ue(e){if(w.length===1)f.set(e.pageX,e.pageY);else{let t=V(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);f.set(n,r)}}function de(e){if(w.length===1)h.set(e.pageX,e.pageY);else{let t=V(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);h.set(n,r)}}function fe(e){let t=V(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);v.set(0,i)}function pe(e){n.enableZoom&&fe(e),n.enablePan&&de(e)}function me(e){n.enableZoom&&fe(e),n.enableRotate&&ue(e)}function he(e){if(w.length==1)p.set(e.pageX,e.pageY);else{let t=V(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);p.set(n,r)}m.subVectors(p,f).multiplyScalar(n.rotateSpeed);let t=n.domElement;k(2*Math.PI*m.x/t.clientHeight),A(2*Math.PI*m.y/t.clientHeight),f.copy(p)}function I(e){if(w.length===1)g.set(e.pageX,e.pageY);else{let t=V(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);g.set(n,r)}_.subVectors(g,h).multiplyScalar(n.panSpeed),j(_.x,_.y),h.copy(g)}function L(e){let t=V(e),r=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(r*r+i*i);y.set(0,a),b.set(0,(y.y/v.y)**+n.zoomSpeed),ne(b.y),v.copy(y),N((e.pageX+t.x)*.5,(e.pageY+t.y)*.5)}function R(e){n.enableZoom&&L(e),n.enablePan&&I(e)}function ge(e){n.enableZoom&&L(e),n.enableRotate&&he(e)}function z(e){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener(`pointermove`,_e),n.domElement.addEventListener(`pointerup`,B)),Oe(e),e.pointerType===`touch`?Te(e):ve(e))}function _e(e){n.enabled!==!1&&(e.pointerType===`touch`?Ee(e):ye(e))}function B(e){ke(e),w.length===0&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener(`pointermove`,_e),n.domElement.removeEventListener(`pointerup`,B)),n.dispatchEvent(Ad),i=r.NONE}function ve(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case a.DOLLY:if(n.enableZoom===!1)return;ie(e),i=r.DOLLY;break;case a.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(n.enablePan===!1)return;F(e),i=r.PAN}else{if(n.enableRotate===!1)return;re(e),i=r.ROTATE}break;case a.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(n.enableRotate===!1)return;re(e),i=r.ROTATE}else{if(n.enablePan===!1)return;F(e),i=r.PAN}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(kd)}function ye(e){switch(i){case r.ROTATE:if(n.enableRotate===!1)return;ae(e);break;case r.DOLLY:if(n.enableZoom===!1)return;oe(e);break;case r.PAN:if(n.enablePan===!1)return;se(e)}}function be(e){n.enabled!==!1&&n.enableZoom!==!1&&i===r.NONE&&(e.preventDefault(),n.dispatchEvent(kd),ce(xe(e)),n.dispatchEvent(Ad))}function xe(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!E&&(n.deltaY*=10),n}function Se(e){e.key===`Control`&&(E=!0,document.addEventListener(`keyup`,Ce,{passive:!0,capture:!0}))}function Ce(e){e.key===`Control`&&(E=!1,document.removeEventListener(`keyup`,Ce,{passive:!0,capture:!0}))}function we(e){n.enabled!==!1&&n.enablePan!==!1&&le(e)}function Te(e){switch(Ae(e),w.length){case 1:switch(n.touches.ONE){case o.ROTATE:if(n.enableRotate===!1)return;ue(e),i=r.TOUCH_ROTATE;break;case o.PAN:if(n.enablePan===!1)return;de(e),i=r.TOUCH_PAN;break;default:i=r.NONE}break;case 2:switch(n.touches.TWO){case o.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pe(e),i=r.TOUCH_DOLLY_PAN;break;case o.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(e),i=r.TOUCH_DOLLY_ROTATE;break;default:i=r.NONE}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(kd)}function Ee(e){switch(Ae(e),i){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(e),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;I(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;R(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(e),n.update();break;default:i=r.NONE}}function De(e){n.enabled!==!1&&e.preventDefault()}function Oe(e){w.push(e.pointerId)}function ke(e){delete T[e.pointerId];for(let t=0;t<w.length;t++)if(w[t]==e.pointerId){w.splice(t,1);return}}function Ae(e){let t=T[e.pointerId];t===void 0&&(t=new H,T[e.pointerId]=t),t.set(e.pageX,e.pageY)}function V(e){let t=e.pointerId===w[0]?w[1]:w[0];return T[t]}n.domElement.addEventListener(`contextmenu`,De),n.domElement.addEventListener(`pointerdown`,z),n.domElement.addEventListener(`pointercancel`,B),n.domElement.addEventListener(`wheel`,be,{passive:!1}),document.addEventListener(`keydown`,Se,{passive:!0,capture:!0}),this.update()}},$=r();function Fd({isOpen:e,onClose:t,onComplete:n,liveCount:r=0,totalCount:a=19}){let[o,s]=(0,i.useState)(1),[c,l]=(0,i.useState)(3),u=(0,i.useRef)(n);if((0,i.useEffect)(()=>{u.current=n},[n]),(0,i.useEffect)(()=>{e||(s(1),l(3))},[e]),(0,i.useEffect)(()=>{if(o!==2)return;let e=3;l(3);let t=setInterval(()=>{--e,e>0?l(e):(clearInterval(t),u.current&&u.current(),s(3))},1e3);return()=>clearInterval(t)},[o]),!e)return null;let d=r>=a;return(0,$.jsx)(`div`,{style:{position:`fixed`,inset:0,backgroundColor:`rgba(7, 9, 14, 0.8)`,backdropFilter:`blur(6px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:250},children:(0,$.jsxs)(`div`,{className:`inertis-fade-in`,style:{backgroundColor:`#12141c`,border:`1px solid #1e2230`,borderRadius:14,padding:28,width:440,color:`#f8fafc`,textAlign:`center`,boxShadow:`0 20px 50px rgba(0,0,0,0.6)`},children:[(0,$.jsx)(`div`,{style:{fontSize:`1.1rem`,fontWeight:700,marginBottom:8,color:`#ffffff`},children:`Inertis Studio Calibration`}),(0,$.jsxs)(`div`,{style:{fontSize:`0.78rem`,color:`#94a3b8`,marginBottom:20},children:[`Active Sensors Detected: `,(0,$.jsxs)(`b`,{style:{color:d?`#bcf800`:`#f87171`},children:[r,` / `,a]})]}),o===1&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{style:{fontSize:`0.84rem`,lineHeight:1.5,color:`#cbd5e1`,marginBottom:24},children:[`Stand upright facing forward in your chosen reference pose (`,(0,$.jsx)(`b`,{children:`T-Pose`}),` or `,(0,$.jsx)(`b`,{children:`A-Pose`}),`). Hold still for 3 seconds while zero-point orientation offsets are sampled.`,!d&&(0,$.jsx)(`div`,{style:{color:`#f87171`,marginTop:10,fontSize:`0.78rem`},children:`Some sensors are not reporting. Check the harness connections before calibrating.`})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,$.jsx)(`button`,{onClick:t,style:{flex:1,padding:`10px`,borderRadius:6,border:`1px solid #1e2230`,backgroundColor:`#0b0e14`,color:`#f8fafc`,cursor:`pointer`,fontWeight:600},children:`Cancel`}),(0,$.jsx)(`button`,{onClick:()=>s(2),style:{flex:1,padding:`10px`,borderRadius:6,border:`none`,backgroundColor:`#bcf800`,color:`#07090e`,cursor:`pointer`,fontWeight:700},children:`Start 3s Countdown`})]})]}),o===2&&(0,$.jsxs)(`div`,{style:{padding:`20px 0`},children:[(0,$.jsx)(`div`,{style:{fontSize:`4.5rem`,fontWeight:800,color:`#bcf800`,marginBottom:8},children:c}),(0,$.jsx)(`div`,{style:{fontSize:`0.82rem`,color:`#94a3b8`},children:`Hold pose steady... sampling sensor orientations`})]}),o===3&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{style:{fontSize:`3rem`,marginBottom:10},children:`✅`}),(0,$.jsx)(`div`,{style:{fontSize:`0.9rem`,fontWeight:600,color:`#bcf800`,marginBottom:20},children:`Skeletal Zero-Pose Successfully Calibrated!`}),(0,$.jsx)(`button`,{onClick:t,style:{width:`100%`,padding:`10px`,borderRadius:6,border:`none`,backgroundColor:`#bcf800`,color:`#07090e`,cursor:`pointer`,fontWeight:700},children:`Return to Viewport`})]})]})})}var Id=({isDark:e})=>(0,$.jsx)(`style`,{children:`
    * { box-sizing: border-box; user-select: none; }
    input, select { user-select: auto; }
    @keyframes pulseLive {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.35; transform: scale(0.92); }
      100% { opacity: 1; transform: scale(1); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .inertis-pulse { animation: pulseLive 2s infinite ease-in-out; }
    .inertis-fade-in { animation: fadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: ${e?`#0b0e14`:`#f1f5f9`}; }
    ::-webkit-scrollbar-thumb { background: ${e?`#1e2230`:`#cbd5e1`}; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: ${e?`#bcf800`:`#94a3b8`}; }
    button, input[type="range"], select {
      transition: all 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    }
    button:active:not(:disabled) { transform: scale(0.97); }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
  `}),Ld=({isDark:e})=>(0,$.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 650 130`,preserveAspectRatio:`xMidYMid meet`,style:{width:`100%`,height:`auto`,display:`block`,marginBottom:10},children:[(0,$.jsx)(`rect`,{x:`2`,y:`2`,width:`646`,height:`126`,rx:`18`,fill:e?`#0b0e14`:`#f1f5f9`,stroke:e?`#1e2230`:`#cbd5e1`,strokeWidth:`3`}),(0,$.jsxs)(`g`,{transform:`translate(18, 17)`,children:[(0,$.jsx)(`rect`,{width:`96`,height:`96`,rx:`22`,fill:`#07090e`,stroke:`#1e2230`,strokeWidth:`3`}),(0,$.jsx)(`line`,{x1:`33`,y1:`24`,x2:`22`,y2:`72`,stroke:`#30363d`,strokeWidth:`8.5`,strokeLinecap:`round`}),(0,$.jsx)(`line`,{x1:`46.5`,y1:`24`,x2:`35.5`,y2:`72`,stroke:`#586069`,strokeWidth:`8.5`,strokeLinecap:`round`}),(0,$.jsx)(`line`,{x1:`60`,y1:`24`,x2:`49`,y2:`72`,stroke:`#8b949e`,strokeWidth:`8.5`,strokeLinecap:`round`}),(0,$.jsx)(`line`,{x1:`73.5`,y1:`24`,x2:`62.5`,y2:`72`,stroke:`#bcf800`,strokeWidth:`8.5`,strokeLinecap:`round`})]}),(0,$.jsx)(`text`,{x:`132`,y:`71`,fill:e?`#f8fafc`:`#0f172a`,fontFamily:`Segoe UI, system-ui, sans-serif`,fontWeight:`800`,fontSize:`44`,letterSpacing:`1.5`,children:`INERTIS`}),(0,$.jsx)(`rect`,{x:`335`,y:`37`,width:`115`,height:`36`,rx:`8`,fill:`#bcf800`,fillOpacity:`0.15`}),(0,$.jsx)(`rect`,{x:`335`,y:`37`,width:`115`,height:`36`,rx:`8`,fill:`none`,stroke:`#bcf800`,strokeWidth:`2`}),(0,$.jsx)(`text`,{x:`392.5`,y:`61`,fill:e?`#bcf800`:`#3f6212`,fontFamily:`Segoe UI, monospace`,fontWeight:`700`,fontSize:`17`,textAnchor:`middle`,letterSpacing:`2`,children:`STUDIO`}),(0,$.jsx)(`text`,{x:`134`,y:`102`,fill:e?`#94a3b8`:`#64748b`,fontFamily:`Segoe UI, sans-serif`,fontWeight:`600`,fontSize:`13.5`,letterSpacing:`4`,children:`MOTION CAPTURE SUITE`})]}),Rd=`/inertis-studio/default_avatar.glb`,zd=`inertis_studio_autosave_v1`,Bd=`inertis_studio_offline_lease_v1`,Vd=30,Hd={MANNY:{PELVIS:`pelvis`,SPINE:`spine_01`,CHEST:`spine_03`,NECK:`neck_01`,HEAD:`head`,SHOULDER_L:`clavicle_l`,ARM_L:`upperarm_l`,FOREARM_L:`lowerarm_l`,HAND_L:`hand_l`,SHOULDER_R:`clavicle_r`,ARM_R:`upperarm_r`,FOREARM_R:`lowerarm_r`,HAND_R:`hand_r`,THIGH_L:`thigh_l`,CALF_L:`calf_l`,FOOT_L:`foot_l`,THIGH_R:`thigh_r`,CALF_R:`calf_r`,FOOT_R:`foot_r`},MIXAMO:{PELVIS:`mixamorigHips`,SPINE:`mixamorigSpine`,CHEST:`mixamorigSpine2`,NECK:`mixamorigNeck`,HEAD:`mixamorigHead`,SHOULDER_L:`mixamorigLeftShoulder`,ARM_L:`mixamorigLeftArm`,FOREARM_L:`mixamorigLeftForeArm`,HAND_L:`mixamorigLeftHand`,SHOULDER_R:`mixamorigRightShoulder`,ARM_R:`mixamorigRightArm`,FOREARM_R:`mixamorigRightForeArm`,HAND_R:`mixamorigRightHand`,THIGH_L:`mixamorigLeftUpLeg`,CALF_L:`mixamorigLeftLeg`,FOOT_L:`mixamorigLeftFoot`,THIGH_R:`mixamorigRightUpLeg`,CALF_R:`mixamorigRightLeg`,FOOT_R:`mixamorigRightFoot`}},Ud={PELVIS:[`pelvis`,`hips`,`hip`],SPINE:[`spine01`,`spine1`,`spine`],CHEST:[`spine03`,`spine3`,`spine2`,`chest`],NECK:[`neck01`,`neck`],HEAD:[`head`],SHOULDER_L:[`claviclel`,`leftshoulder`,`shoulderl`,`lshoulder`,`lclavicle`],ARM_L:[`upperarml`,`leftarm`,`arml`,`larm`,`lupperarm`],FOREARM_L:[`lowerarml`,`leftforearm`,`forearml`,`lforearm`,`llowerarm`],HAND_L:[`handl`,`lefthand`,`lhand`],SHOULDER_R:[`clavicler`,`rightshoulder`,`shoulderr`,`rshoulder`,`rclavicle`],ARM_R:[`upperarmr`,`rightarm`,`armr`,`rarm`,`rupperarm`],FOREARM_R:[`lowerarmr`,`rightforearm`,`forearmr`,`rforearm`,`rlowerarm`],HAND_R:[`handr`,`righthand`,`rhand`],THIGH_L:[`thighl`,`leftupleg`,`uplegl`,`lupleg`,`lthigh`],CALF_L:[`calfl`,`leftleg`,`legl`,`lleg`,`lcalf`],FOOT_L:[`footl`,`leftfoot`,`lfoot`],THIGH_R:[`thighr`,`rightupleg`,`uplegr`,`ruplegr`,`rthigh`],CALF_R:[`calfr`,`rightleg`,`legr`,`rleg`,`rcalf`],FOOT_R:[`footr`,`rightfoot`,`rfoot`]},Wd=[`PELVIS`,`SPINE`,`CHEST`,`NECK`,`HEAD`,`SHOULDER_L`,`ARM_L`,`FOREARM_L`,`HAND_L`,`SHOULDER_R`,`ARM_R`,`FOREARM_R`,`HAND_R`,`THIGH_L`,`CALF_L`,`FOOT_L`,`THIGH_R`,`CALF_R`,`FOOT_R`],Gd=[{key:`HEAD`,name:`Head`,bone:`HEAD`,pos:{top:`14.5%`,left:`50.0%`}},{key:`CHEST_L`,name:`Left Chest`,bone:`CHEST`,pos:{top:`30.8%`,left:`45.6%`}},{key:`CHEST_R`,name:`Right Chest`,bone:`CHEST`,pos:{top:`30.8%`,left:`54.4%`}},{key:`PELVIS_L`,name:`Left Pelvis`,bone:`PELVIS`,pos:{top:`46.1%`,left:`45.4%`}},{key:`PELVIS_R`,name:`Right Pelvis`,bone:`PELVIS`,pos:{top:`46.1%`,left:`54.6%`}},{key:`SHOULDER_L`,name:`Left Shoulder`,bone:`SHOULDER_L`,pos:{top:`25.3%`,left:`44.5%`}},{key:`ARM_L`,name:`Left Upper Arm`,bone:`ARM_L`,pos:{top:`25.0%`,left:`33.0%`}},{key:`FOREARM_L`,name:`Left Forearm`,bone:`FOREARM_L`,pos:{top:`23.9%`,left:`18.9%`}},{key:`HAND_L`,name:`Left Hand`,bone:`HAND_L`,pos:{top:`24.4%`,left:`7.9%`}},{key:`THIGH_L`,name:`Left Thigh`,bone:`THIGH_L`,pos:{top:`57.2%`,left:`42.2%`}},{key:`CALF_L`,name:`Left Shin`,bone:`CALF_L`,pos:{top:`75.7%`,left:`43.7%`}},{key:`FOOT_L`,name:`Left Foot`,bone:`FOOT_L`,pos:{top:`87.0%`,left:`45.2%`}},{key:`SHOULDER_R`,name:`Right Shoulder`,bone:`SHOULDER_R`,pos:{top:`25.3%`,left:`55.5%`}},{key:`ARM_R`,name:`Right Upper Arm`,bone:`ARM_R`,pos:{top:`25.0%`,left:`67.0%`}},{key:`FOREARM_R`,name:`Right Forearm`,bone:`FOREARM_R`,pos:{top:`23.9%`,left:`81.1%`}},{key:`HAND_R`,name:`Right Hand`,bone:`HAND_R`,pos:{top:`24.4%`,left:`92.1%`}},{key:`THIGH_R`,name:`Right Thigh`,bone:`THIGH_R`,pos:{top:`57.2%`,left:`57.8%`}},{key:`CALF_R`,name:`Right Shin`,bone:`CALF_R`,pos:{top:`75.7%`,left:`56.3%`}},{key:`FOOT_R`,name:`Right Foot`,bone:`FOOT_R`,pos:{top:`87.0%`,left:`54.8%`}}],Kd=Gd.length,qd=[`ROOT_POS`,`META`,`BATTERY`,`RSSI`,`t`],Jd=10,Yd=(e,t)=>{let n=e[t];return n&&typeof n.t==`number`?n.t:t*Jd},Xd=e=>{let{META:t,...n}=e;return n},Zd={CALF_L:{minX:-2.4,maxX:.05,minY:-.15,maxY:.15,minZ:-.15,maxZ:.15},CALF_R:{minX:-2.4,maxX:.05,minY:-.15,maxY:.15,minZ:-.15,maxZ:.15},FOREARM_L:{minX:-.1,maxX:2.5,minY:-.4,maxY:.4,minZ:-2.5,maxZ:2.5},FOREARM_R:{minX:-.1,maxX:2.5,minY:-.4,maxY:.4,minZ:-2.5,maxZ:2.5},NECK:{minX:-.8,maxX:.8,minY:-1.2,maxY:1.2,minZ:-.6,maxZ:.6},HEAD:{minX:-.8,maxX:.8,minY:-1.2,maxY:1.2,minZ:-.6,maxZ:.6}},Qd=e=>{let t=Math.floor(e/60),n=Math.floor(e%60);return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`};async function $d(e,t,n=`.inertis`){if(window.pywebview?.api?.save_file)try{return!!await window.pywebview.api.save_file(e,t,n)}catch(e){console.warn(`PyWebView save fallback:`,e)}if(window.showSaveFilePicker)try{let r=await(await window.showSaveFilePicker({suggestedName:e,types:[{description:`Inertis Studio (${n})`,accept:{"application/octet-stream":[n]}}]})).createWritable();return await r.write(t),await r.close(),!0}catch(e){if(e.name===`AbortError`)return!1}let r=new Blob([t],{type:`application/octet-stream;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);return a.href=i,a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(i),1500),!0}function ef(e){if(!e||e.length<2)return Jd/1e3;let t=(Yd(e,e.length-1)-Yd(e,0))/(e.length-1);return t>0?t/1e3:Jd/1e3}function tf(e){let t=new W,n=new Ht,r=180/Math.PI,i=(e,i)=>{let a=e[i];return!Array.isArray(a)||a.length!==4?`0.0000 0.0000 0.0000`:(t.set(a[0],a[1],a[2],a[3]).normalize(),n.setFromQuaternion(t,`ZXY`),`${(n.z*r).toFixed(4)} ${(n.x*r).toFixed(4)} ${(n.y*r).toFixed(4)}`)};return`HIERARCHY
ROOT Hips
{
  OFFSET 0.00 95.00 0.00
  CHANNELS 6 Xposition Yposition Zposition Zrotation Xrotation Yrotation
  JOINT Spine
  {
    OFFSET 0.00 12.00 0.00
    CHANNELS 3 Zrotation Xrotation Yrotation
    JOINT Chest
    {
      OFFSET 0.00 14.00 0.00
      CHANNELS 3 Zrotation Xrotation Yrotation
      JOINT Neck
      {
        OFFSET 0.00 16.00 0.00
        CHANNELS 3 Zrotation Xrotation Yrotation
        JOINT Head
        {
          OFFSET 0.00 10.00 0.00
          CHANNELS 3 Zrotation Xrotation Yrotation
          End Site { OFFSET 0.00 10.00 0.00 }
        }
      }
      JOINT LeftShoulder
      {
        OFFSET 5.00 12.00 0.00
        CHANNELS 3 Zrotation Xrotation Yrotation
        JOINT LeftArm
        {
          OFFSET 12.00 0.00 0.00
          CHANNELS 3 Zrotation Xrotation Yrotation
          JOINT LeftForeArm
          {
            OFFSET 26.00 0.00 0.00
            CHANNELS 3 Zrotation Xrotation Yrotation
            JOINT LeftHand
            {
              OFFSET 24.00 0.00 0.00
              CHANNELS 3 Zrotation Xrotation Yrotation
              End Site { OFFSET 10.00 0.00 0.00 }
            }
          }
        }
      }
      JOINT RightShoulder
      {
        OFFSET -5.00 12.00 0.00
        CHANNELS 3 Zrotation Xrotation Yrotation
        JOINT RightArm
        {
          OFFSET -12.00 0.00 0.00
          CHANNELS 3 Zrotation Xrotation Yrotation
          JOINT RightForeArm
          {
            OFFSET -26.00 0.00 0.00
            CHANNELS 3 Zrotation Xrotation Yrotation
            JOINT RightHand
            {
              OFFSET -24.00 0.00 0.00
              CHANNELS 3 Zrotation Xrotation Yrotation
              End Site { OFFSET -10.00 0.00 0.00 }
            }
          }
        }
      }
    }
  }
  JOINT LeftUpLeg
  {
    OFFSET 10.00 -4.00 0.00
    CHANNELS 3 Zrotation Xrotation Yrotation
    JOINT LeftLeg
    {
      OFFSET 0.00 -42.00 0.00
      CHANNELS 3 Zrotation Xrotation Yrotation
      JOINT LeftFoot
      {
        OFFSET 0.00 -40.00 0.00
        CHANNELS 3 Zrotation Xrotation Yrotation
        End Site { OFFSET 0.00 -5.00 12.00 }
      }
    }
  }
  JOINT RightUpLeg
  {
    OFFSET -10.00 -4.00 0.00
    CHANNELS 3 Zrotation Xrotation Yrotation
    JOINT RightLeg
    {
      OFFSET 0.00 -42.00 0.00
      CHANNELS 3 Zrotation Xrotation Yrotation
      JOINT RightFoot
      {
        OFFSET 0.00 -40.00 0.00
        CHANNELS 3 Zrotation Xrotation Yrotation
        End Site { OFFSET 0.00 -5.00 12.00 }
      }
    }
  }
}
MOTION
Frames: ${e.length}
Frame Time: ${ef(e).toFixed(6)}
`+e.map(e=>`${Array.isArray(e.ROOT_POS)&&e.ROOT_POS.length===3?`${(e.ROOT_POS[0]*100).toFixed(4)} ${((e.ROOT_POS[1]+.95)*100).toFixed(4)} ${(e.ROOT_POS[2]*100).toFixed(4)}`:`0.0000 95.0000 0.0000`} ${Wd.map(t=>i(e,t)).join(` `)}`).join(`
`)+`
`}function nf(e){let t={},n={},r={};e.traverse(e=>{if(!e.isBone)return;let n=e.name.toLowerCase().replace(/[^a-z0-9]/g,``);for(let[r,i]of Object.entries(Ud)){if(t[r])continue;let a=!1;for(let o of i)if(n.endsWith(o)||n===o){t[r]=e,a=!0;break}if(!a){for(let a of i)if(n.includes(a)){if(a===`spine`&&(n.includes(`2`)||n.includes(`3`)))continue;t[r]=e;break}}}}),e.updateMatrixWorld(!0);for(let e in t)n[e]=t[e].getWorldQuaternion(new W),r[e]=t[e].quaternion.clone();return{profileName:Object.keys(t).length>10?`AUTO-MAPPED`:`PARTIAL`,bones:t,restWorld:n,restLocal:r,root:e,rootBase:e.position.clone()}}var rf={DARK:{bg:`#07090e`,panel:`#12141c`,panelHeader:`#0b0e14`,border:`#1e2230`,text:`#f8fafc`,muted:`#94a3b8`,inputBg:`#0b0e14`,cardBg:`#0b0e14`,accent:`#bcf800`,accentText:`#07090e`,secondaryBtn:`#1e2230`,danger:`#ef4444`,success:`#bcf800`,warning:`#facc15`,sceneBg:`#0b0e14`,gridMain:6060544,gridSub:1974832,glow:`0 0 15px rgba(188, 248, 0, 0.25)`},LIGHT:{bg:`#f1f5f9`,panel:`#ffffff`,panelHeader:`#f8fafc`,border:`#e2e8f0`,text:`#0f172a`,muted:`#64748b`,inputBg:`#f8fafc`,cardBg:`#f1f5f9`,accent:`#65a30d`,accentText:`#ffffff`,secondaryBtn:`#e2e8f0`,danger:`#dc2626`,success:`#4d7c0f`,warning:`#d97706`,sceneBg:`#e2e8f0`,gridMain:9741240,gridSub:13358561,glow:`0 4px 12px rgba(101, 163, 13, 0.2)`}};function af({onOpenPortal:e}){let t=(0,i.useRef)(null),[r,a]=(0,i.useState)(`DARK`),o=r===`DARK`,s=rf[r],[c,l]=(0,i.useState)(340),[u,d]=(0,i.useState)(340),f=(0,i.useRef)(!1),p=(0,i.useRef)(!1),[m,h]=(0,i.useState)(!1),[g,_]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),[b,x]=(0,i.useState)(`BVH_FILES`),[S,C]=(0,i.useState)(!1),w=(0,i.useRef)(null),T=(0,i.useRef)(null),[E,D]=(0,i.useState)(()=>{try{let e=localStorage.getItem(Bd);if(e){let t=JSON.parse(e);if(t.isHardwareVerified)return t.leaseValid=!0,t}}catch{}return{leaseValid:!1}}),[O,k]=(0,i.useState)(E.email||``),[A,ee]=(0,i.useState)(``),[te,j]=(0,i.useState)(!1),[ne,M]=(0,i.useState)(null),[N,P]=(0,i.useState)(null),[re,ie]=(0,i.useState)(null),[F,ae]=(0,i.useState)(null),oe=(0,i.useRef)(null),[se,ce]=(0,i.useState)(null),[le,ue]=(0,i.useState)(null),[de,fe]=(0,i.useState)(null),[pe,me]=(0,i.useState)(null),[he,I]=(0,i.useState)(`InertisStudio_Session`),[L,R]=(0,i.useState)([]),[ge,z]=(0,i.useState)(`Take_01`),[_e,B]=(0,i.useState)(!1),[ve,ye]=(0,i.useState)(0),be=(0,i.useRef)([]),[xe,Se]=(0,i.useState)(0),[Ce,we]=(0,i.useState)(null),[Te,Ee]=(0,i.useState)(!1),[De,Oe]=(0,i.useState)(!1),[ke,Ae]=(0,i.useState)(0),[V,je]=(0,i.useState)(0),[H,U]=(0,i.useState)(new Set),[Ne,Pe]=(0,i.useState)(`T-POSE`),[Fe,Ie]=(0,i.useState)(`MIXAMO`),[Le,Re]=(0,i.useState)(`Default Avatar`),[ze,Be]=(0,i.useState)(`127.0.0.1`),[Ve,He]=(0,i.useState)(`8085`),[Ue,We]=(0,i.useState)(`ws://127.0.0.1:8085`),[Ge,Ke]=(0,i.useState)(!1),[qe,Je]=(0,i.useState)(!0),[Ye,Xe]=(0,i.useState)(!0),[Ze,Qe]=(0,i.useState)(!0),[$e,et]=(0,i.useState)(!1),[tt,nt]=(0,i.useState)(!1),[rt,it]=(0,i.useState)(!1),[at,st]=(0,i.useState)(!1),[ct,lt]=(0,i.useState)(0),ut=(0,i.useRef)(0),dt=(0,i.useRef)(null),ft=(0,i.useRef)(null),pt=(0,i.useRef)(0),mt=(0,i.useRef)(!1),ht=(0,i.useRef)(null),gt=(0,i.useRef)(null),_t=(0,i.useRef)(null),vt=(0,i.useRef)(null),yt=(0,i.useRef)({}),bt=(0,i.useRef)(null),xt=(0,i.useRef)(null),St=(0,i.useRef)(0),Ct=(0,i.useRef)({treadmill:!1,startFromOrigin:!1,footIK:!0,jointLimits:!0,upperBodyOnly:!1,driftCorrection:!0}),wt=(0,i.useRef)(!1),Tt=(0,i.useRef)([]),Et=(0,i.useRef)(0),Dt=(0,i.useRef)(0),Ot=(0,i.useMemo)(()=>L.find(e=>e.id===Ce),[L,Ce]),kt=(0,i.useCallback)(e=>{ue(e),setTimeout(()=>ue(null),3200)},[]),At=async e=>{let{data:t,error:r}=await n.from(`hardware_licenses`).select(`serial_number, hardware_model, bound_at`).eq(`user_id`,e.id).order(`bound_at`,{ascending:!1});if(r)throw Error(`Signed in, but the hardware licence lookup failed: ${r.message}`);let i=Array.isArray(t)?t:[],a=i.length>0,o=i[0]||null,s={email:e.email||O.trim(),userId:e.id,isHardwareVerified:a,suitSerial:o?.serial_number||``,hardwareModel:o?.hardware_model||``,boundSerials:i.map(e=>e.serial_number),verifiedAt:Date.now(),leaseValid:a};if(ee(``),!a){M(E.leaseValid?`Signed in, but no Waist Hub serial is bound to ${s.email}. The Studio stays unlocked by the licence already saved on this device (${E.suitSerial}).`:`Signed in, but no Waist Hub serial is bound to this account yet. Bind your MFS- serial in the web Account Dashboard, then sync again.`);return}try{localStorage.setItem(Bd,JSON.stringify(s))}catch{}D(s),y(!1);let c=i.length>1?` (+${i.length-1} more hub${i.length>2?`s`:``})`:``;kt(`Verified Owner (${s.suitSerial}${c}) — Studio permanently unlocked on this device`)},jt=async()=>{try{localStorage.removeItem(Bd)}catch{}try{await n.auth.signOut()}catch{}P(null),D({leaseValid:!1}),M(null),kt(`Licence removed from this device`)},Mt=async e=>{e.preventDefault(),j(!0),M(null);try{let{data:e,error:t}=await n.auth.signInWithPassword({email:O.trim(),password:A});if(t)throw t;P(e.user),await At(e.user)}catch(e){M(e.message||`Failed to sync licence`)}j(!1)},K=async()=>{if(N){j(!0),M(null);try{await At(N)}catch(e){M(e.message||`Failed to sync licence`)}j(!1)}};(0,i.useEffect)(()=>{v&&n.auth.getSession().then(({data:e})=>P(e?.session?.user||null)).catch(()=>{})},[v]),(0,i.useEffect)(()=>{ft.current=Ce},[Ce]),(0,i.useEffect)(()=>{pt.current=ke},[ke]),(0,i.useEffect)(()=>{mt.current=rt;let e=dt.current;e&&e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({cmd:`set_ue_stream`,enabled:rt}))},[rt]),(0,i.useEffect)(()=>{Ct.current={treadmill:Ge,startFromOrigin:tt,footIK:qe,jointLimits:Ye,upperBodyOnly:$e,driftCorrection:Ze},bt.current=null},[Ge,tt,qe,Ye,$e,Ze]),(0,i.useEffect)(()=>{try{let e=localStorage.getItem(zd);if(e){let t=JSON.parse(e);t&&Array.isArray(t.clips)&&t.clips.length>0&&fe(t)}}catch{}},[]),(0,i.useEffect)(()=>{let e=setInterval(()=>{if(L.length>0)try{let e={suite:`Inertis Studio`,savedAt:new Date().toLocaleTimeString(),projectName:he,clips:L,exportTarget:Fe,smoothingFactor:V,linkLive:rt};localStorage.setItem(zd,JSON.stringify(e)),me(e.savedAt)}catch{}},15e3);return()=>clearInterval(e)},[he,L,Fe,V,rt]);let Nt=()=>{de&&(I(de.projectName||`InertisStudio_Session`),R(de.clips||[]),de.exportTarget&&Ie(de.exportTarget),de.smoothingFactor!==void 0&&je(de.smoothingFactor),fe(null),kt(`Restored session from auto-save!`))},Pt=()=>{localStorage.removeItem(zd),fe(null)};(0,i.useEffect)(()=>{let e;return _e?e=setInterval(()=>{ye(e=>{let t=e+1;return Dt.current=t,t})},1e3):(ye(0),Dt.current=0),()=>clearInterval(e)},[_e]);let Ft=(0,i.useMemo)(()=>{let e=new W,t=new W,n=new W,r=new Ht,i=new G;return a=>{let o=_t.current;if(!o)return;let s=yt.current,c=Ct.current;for(let i of Wd){let l=o.bones[i];if(!l||!l.parent)continue;if(c.upperBodyOnly&&(i.includes(`THIGH`)||i.includes(`CALF`)||i.includes(`FOOT`))){o.restLocal[i]&&l.quaternion.copy(o.restLocal[i]);continue}let u=a[i];if(Array.isArray(u)&&u.length===4&&(e.set(u[0],u[1],u[2],u[3]).normalize(),t.copy(e),s[i]&&t.multiply(s[i]),t.multiply(o.restWorld[i]),l.parent.getWorldQuaternion(n).invert(),l.quaternion.copy(n.multiply(t)),c.jointLimits&&Zd[i])){let e=Zd[i];r.setFromQuaternion(l.quaternion,`XYZ`),r.x=Math.max(e.minX,Math.min(e.maxX,r.x)),r.y=Math.max(e.minY,Math.min(e.maxY,r.y)),r.z=Math.max(e.minZ,Math.min(e.maxZ,r.z)),l.quaternion.setFromEuler(r)}}let l=0,u=0,d=0;if(Array.isArray(a.ROOT_POS)&&a.ROOT_POS.length===3&&([l,u,d]=a.ROOT_POS,c.startFromOrigin&&(bt.current||=[l,d],l-=bt.current[0],d-=bt.current[1]),c.treadmill&&(l=0,d=0)),o.root.position.set(o.rootBase.x+l,o.rootBase.y+u,o.rootBase.z+d),c.footIK){o.root.updateMatrixWorld(!0);let e=0;[`FOOT_L`,`FOOT_R`].forEach(t=>{o.bones[t]&&(o.bones[t].getWorldPosition(i),i.y<e&&(e=i.y))}),e<0&&(o.root.position.y-=e)}c.driftCorrection&&o.bones.FOOT_L&&o.bones.FOOT_R&&(o.root.updateMatrixWorld(!0),[`FOOT_L`,`FOOT_R`].forEach(e=>{let t=o.bones[e];t&&(t.getWorldPosition(i),i.y<=.04&&(o.root.position.y+=0-i.y))}))}},[]);(0,i.useEffect)(()=>{let e,t=!1,n=null,r=()=>{try{e=new WebSocket(Ue)}catch{n=setTimeout(r,2e3);return}dt.current=e,e.onopen=()=>{e.send(JSON.stringify({cmd:`set_ue_stream`,enabled:mt.current}))},e.onmessage=e=>{try{let t=JSON.parse(e.data);if(!t||typeof t!=`object`)return;t.META&&(oe.current=t.META);let n=Object.keys(t).filter(e=>!qd.includes(e));if(n.length===0)return;let r=Xd(t),i=Date.now();xt.current=r,St.current=performance.now(),U(e=>e.size===n.length&&n.every(t=>e.has(t))?e:new Set(n)),ut.current+=1,be.current.push({absTime:i,...r});let a=i-Vd*1e3;for(;be.current.length>0&&be.current[0].absTime<a;)be.current.shift();ft.current||Ft(r),wt.current&&Tt.current.push({t:i-Et.current,...r})}catch{}},e.onclose=()=>{dt.current===e&&(dt.current=null),t||(n=setTimeout(r,2e3))}};return r(),()=>{t=!0,n&&clearTimeout(n),e&&e.close()}},[Ue,Ft]),(0,i.useEffect)(()=>{let e=setInterval(()=>{lt(ut.current),ut.current=0;let e=performance.now()-St.current<=1200;if(st(e),be.current.length>1){let e=be.current[be.current.length-1].absTime-be.current[0].absTime;Se(Math.min(Vd,Math.round(e/1e3)))}else Se(0);ae(oe.current?{...oe.current,stale:!e}:null)},1e3);return()=>clearInterval(e)},[]),(0,i.useEffect)(()=>{let e=e=>{f.current?l(Math.max(260,Math.min(e.clientX,window.innerWidth*.4))):p.current&&d(Math.max(260,Math.min(window.innerWidth-e.clientX,window.innerWidth*.4)))},t=()=>{f.current=!1,p.current=!1,document.body.style.cursor=`default`};return document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)}},[]),(0,i.useEffect)(()=>{let e=ht.current;if(!e)return;e.background=new J(s.sceneBg),T.current&&e.remove(T.current);let t=new vl(100,100,s.gridMain,s.gridSub);e.add(t),T.current=t},[r,s.sceneBg,s.gridMain,s.gridSub]),(0,i.useEffect)(()=>{let e=ht.current,t=gt.current;if(e&&(w.current&&=(e.remove(w.current),null),S&&t)){let n=new gl(t);n.material.linewidth=2,n.material.color.set(`#bcf800`),e.add(n),w.current=n}},[S,Le]);let It=(e,t)=>{let n=ht.current;if(!n)return;gt.current&&n.remove(gt.current);let r=new ot().setFromObject(e),i=r.getSize(new G),a=Math.max(i.x,i.y,i.z);if(a>0){let t=1.7/a;e.scale.set(t,t,t)}r.setFromObject(e),e.position.y-=r.min.y,e.traverse(e=>{e.isMesh&&(e.frustumCulled=!1)}),gt.current=e,n.add(e),_t.current=nf(e),Re(t)},Lt=e=>{let t=e.target.files[0];if(!t)return;let n=URL.createObjectURL(t),r=t.name.split(`.`).pop().toLowerCase();r===`fbx`?new od().load(n,e=>It(e,t.name),void 0,()=>alert(`Failed to load FBX mesh.`)):r===`gltf`||r===`glb`?new xl().load(n,e=>It(e.scene,t.name),void 0,()=>alert(`Failed to load GLTF/GLB mesh.`)):alert(`Unsupported format. Please upload .fbx, .gltf, or .glb files.`),e.target.value=``},Rt=async()=>{let e=he.replace(/\.inertis$/i,``).trim()||`InertisStudio_Session`,t={suite:`Inertis Studio`,version:`1.0.0`,savedAt:new Date().toISOString(),projectName:e,clips:L,exportTarget:Fe,smoothingFactor:V,linkLive:rt},n=JSON.stringify(t,null,2);await $d(`${e}.inertis`,n,`.inertis`)&&kt(`Saved ${e}.inertis`)},zt=(e,t=`project.inertis`)=>{try{let n=JSON.parse(e);n.projectName&&I(n.projectName),Array.isArray(n.clips)&&R(n.clips),n.exportTarget&&Ie(n.exportTarget),n.smoothingFactor!==void 0&&je(n.smoothingFactor),n.linkLive!==void 0&&it(n.linkLive),we(null),kt(`Loaded ${t}`)}catch{alert(`Failed to parse .inertis project file.`)}},Bt=async e=>{if(!e?.target?.files&&window.pywebview?.api?.load_file)try{let e=await window.pywebview.api.load_file(`.inertis`);e&&e.content&&zt(e.content,e.filename||`Session.inertis`);return}catch{}let t=e?.target?.files?.[0];if(!t)return;if(t.name.split(`.`).pop().toLowerCase()!==`inertis`){alert(`Invalid file format. Inertis Studio strictly allows .inertis project files.`),e.target.value=``;return}let n=new FileReader;n.onload=e=>zt(e.target.result,t.name),n.readAsText(t),e.target.value=``},Vt=(0,i.useCallback)(e=>{let t=e||Ne,n=_t.current,r=xt.current;if(!n)return;let i={},a=new W,o=new W;for(let e of Wd)r&&Array.isArray(r[e])&&r[e].length===4?a.set(...r[e]).normalize().invert():n.bones[e]&&a.copy(n.bones[e].getWorldQuaternion(new W)).invert(),t===`A-POSE`&&(e===`ARM_L`||e===`FOREARM_L`?(o.setFromAxisAngle(new G(0,0,1),Me.degToRad(45)),a.multiply(o)):(e===`ARM_R`||e===`FOREARM_R`)&&(o.setFromAxisAngle(new G(0,0,1),Me.degToRad(-45)),a.multiply(o))),i[e]=a.clone();yt.current=i,bt.current=null,kt(`Calibration locked (${t})`)},[Ne,kt]),Ut=e=>{Pe(e),Vt(e)},Wt=(0,i.useCallback)((e,t)=>{if(t===0||!e||e.length<2)return e||[];let n=JSON.parse(JSON.stringify(e)),r=new W,i=new W;for(let e=1;e<n.length;e++)for(let a of Wd)n[e][a]&&n[e-1][a]&&(r.set(...n[e-1][a]),i.set(...n[e][a]),i.slerp(r,t),n[e][a]=[i.x,i.y,i.z,i.w]);return n},[]),Gt=()=>{if(!Ot||Ot.frames.length<3)return;let e=JSON.parse(JSON.stringify(Ot.frames)),t=new W,n=new W,r=new W,i=0;for(let a=1;a<e.length-1;a++)for(let o of Wd)if(e[a-1][o]&&e[a][o]&&e[a+1][o]){t.set(...e[a-1][o]).normalize(),n.set(...e[a][o]).normalize(),r.set(...e[a+1][o]).normalize();let s=Math.abs(t.dot(n)),c=Math.abs(n.dot(r));s<.86&&c<.86&&(t.slerp(r,.5),e[a][o]=[t.x,t.y,t.z,t.w],i++)}R(L.map(t=>t.id===Ce?{...t,frames:e}:t)),kt(`Cleaned ${i} rotational spikes in ${Ot.name}`)},Kt=()=>{let e=L.filter(e=>e.selected);if(e.length<2){alert(`Select at least 2 clips in the list to stitch together.`);return}let t=[],n=0;[...e].reverse().forEach(e=>{let r=e.frames.slice(e.trimStart,e.trimEnd+1);if(r.length===0)return;let i=Yd(r,0);r.forEach((e,a)=>{t.push({...e,t:n+(Yd(r,a)-i)})}),n+=Yd(r,r.length-1)-i+Jd});let r=Math.max(1,Math.round(n/1e3)),i={id:Date.now(),name:`Stitched_${e.length}_Takes`,duration:Qd(r),frames:t,selected:!0,trimStart:0,trimEnd:Math.max(0,t.length-1)};R(e=>[i,...e]),we(i.id),Ae(0),kt(`Stitched ${e.length} clips into ${i.name}`)},qt=(0,i.useCallback)(()=>{let e=be.current;if(e.length===0){kt(`Replay buffer is empty (awaiting live packets)`);return}let t=e[0].absTime,n=e.map(e=>{let{absTime:n,...r}=e;return{t:n-t,...r}}),r=Math.max(1,Math.round((e[e.length-1].absTime-t)/1e3)),i={id:Date.now(),name:`Replay_${String(L.length+1).padStart(2,`0`)}`,duration:Qd(r),frames:n,selected:!0,trimStart:0,trimEnd:Math.max(0,n.length-1)};R(e=>[i,...e]),kt(`Saved ${r}s instant replay (${n.length} frames)`)},[L.length,kt]),Jt=()=>{we(null),Tt.current=[],Et.current=Date.now(),wt.current=!0,B(!0),ye(0),Dt.current=0},Yt=(0,i.useCallback)(()=>{wt.current=!1,B(!1);let e=[...Tt.current],t=Qd(Dt.current);R(n=>{let r=n.length+1,i={id:Date.now(),name:ge||`Take_${String(r).padStart(2,`0`)}`,duration:t,frames:e,selected:!0,trimStart:0,trimEnd:Math.max(0,e.length-1)};return z(`Take_${String(r+1).padStart(2,`0`)}`),kt(`Recorded ${i.name} (${e.length} frames)`),[i,...n]}),Tt.current=[]},[ge,kt]),Xt=(0,i.useCallback)(()=>{if(wt.current)Yt();else{ce(3);let e=3,t=setInterval(()=>{--e,e>0?ce(e):(clearInterval(t),ce(null),Jt())},1e3)}},[Yt]);(0,i.useEffect)(()=>{let e=e=>{e.target.tagName!==`INPUT`&&e.target.tagName!==`SELECT`&&(e.code===`Space`?(e.preventDefault(),Ce?Ee(e=>!e):Xt()):(e.ctrlKey||e.metaKey)&&e.code===`KeyS`?(e.preventDefault(),Rt()):e.code===`KeyR`?(e.preventDefault(),qt()):e.code===`KeyF`&&(e.preventDefault(),gt.current&&vt.current&&(vt.current.target.copy(gt.current.position),kt(`Camera focused on avatar`))))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Ce,Xt,qt,kt,he,L,Fe,V,rt]);let Zt=(0,i.useMemo)(()=>!Ot||!Ot.frames?[]:Wt(Ot.frames,V),[Ot,V,Wt]);(0,i.useEffect)(()=>{if(!Ot||!Te||Zt.length===0)return;let e=Zt,t=Math.min(Ot.trimEnd,e.length-1),n,r=Math.max(Ot.trimStart||0,Math.min(pt.current,t)),i=performance.now(),a=Yd(e,r),o=-1,s=()=>{n=requestAnimationFrame(s);let c=a+(performance.now()-i);for(;r<t&&Yd(e,r+1)<=c;)r++;if(r>=t&&c>Yd(e,t)){if(De){let e=L.filter(e=>e.selected);if(e.length>1){let t=e[(e.findIndex(e=>e.id===Ce)+1)%e.length];if(t&&t.id!==Ce){cancelAnimationFrame(n),we(t.id),Ae(t.trimStart||0);return}}}r=Ot.trimStart||0,i=performance.now(),a=Yd(e,r)}r!==o&&(o=r,e[r]&&Ft(e[r]),Ae(r))};return s(),()=>cancelAnimationFrame(n)},[Ot,Te,Zt,De,L,Ce,Ft]);let Qt=e=>{Ae(e),Zt[e]&&Ft(Zt[e])},$t=e=>{Ot&&R(L.map(t=>t.id===Ce?{...t,[e]:ke}:t))},en=async()=>{let e=L.filter(e=>e.selected);if(e.length===0)alert(`No clips selected for export.`);else{if(b===`JSON_BUNDLE`){let t={suite:`Inertis Studio`,exportedAt:new Date().toISOString(),targetSkeleton:Fe,clips:e.map(e=>({name:e.name,duration:e.duration,frames:Wt(e.frames,V).slice(e.trimStart,e.trimEnd+1)}))};await $d(`${he}_BatchBundle.json`,JSON.stringify(t,null,2),`.json`)}else if(b===`BVH_FILES`)for(let t of e){let e=tf(Wt(t.frames,V).slice(t.trimStart,t.trimEnd+1));await $d(`${t.name}.bvh`,e,`.bvh`)}else for(let t of e){let e=Wt(t.frames,V).slice(t.trimStart,t.trimEnd+1),n=Hd[Fe],r=e.map(e=>{let t={time_ms:e.t};for(let[r,i]of Object.entries(e))if(r!==`t`&&r!==`ROOT_POS`){let e=n[r];e&&(t[e]=i)}return e.ROOT_POS&&(t.RootNode=e.ROOT_POS),t}),i={suite:`Inertis Studio`,take:t.name,targetSkeleton:Fe,frameTimeSeconds:ef(e),quaternionOrder:`xyzw`,frames:r};await $d(`${t.name}_${Fe}.json`,JSON.stringify(i,null,2),`.json`)}_(!1),kt(`Exported ${e.length} clip(s)`)}};(0,i.useEffect)(()=>{let e=t.current;if(!e)return;let n=new Ao;n.background=new J(s.sceneBg),ht.current=n;let r=new mr(45,e.clientWidth/e.clientHeight,.1,1e3);r.position.set(0,1.4,4);let i=new Oo({antialias:!0});i.setSize(e.clientWidth,e.clientHeight),i.shadowMap.enabled=!0,e.appendChild(i.domElement);let a=new Pd(r,i.domElement);a.target.set(0,1,0),vt.current=a,n.add(new Zc(16777215,.8));let o=new Lc(16777215,4473924,1);o.position.set(0,20,0),n.add(o);let c=new Xc(16777215,1.5);c.position.set(5,10,5),c.castShadow=!0,n.add(c);let l=new vl(100,100,s.gridMain,s.gridSub);n.add(l),T.current=l,n.add(new yl(1.5)),Rd.toLowerCase().endsWith(`.fbx`)?new od().load(Rd,e=>It(e,`Default Avatar`),void 0,()=>{}):new xl().load(Rd,e=>It(e.scene,`Default Avatar`),void 0,()=>{});let u,d=()=>{u=requestAnimationFrame(d),a.update(),i.render(n,r)};d();let f=new ResizeObserver(()=>{e&&r&&i&&(r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),i.setSize(e.clientWidth,e.clientHeight))});return f.observe(e),()=>{cancelAnimationFrame(u),f.disconnect(),a.dispose(),i.dispose(),i.domElement.parentNode===e&&e.removeChild(i.domElement)}},[]);let tn=(0,i.useMemo)(()=>{if(!Ot||!Ot.frames||Ot.frames.length<2)return[];let e=Ot.frames,t=Math.max(1,Math.floor(e.length/48)),n=[],r=new W,i=new W;for(let a=0;a<48;a++){let o=Math.min(e.length-1,a*t),s=Math.max(0,o-1),c=0;[`PELVIS`,`HAND_L`,`HAND_R`,`FOOT_L`,`FOOT_R`].forEach(t=>{e[o][t]&&e[s][t]&&(r.set(...e[s][t]),i.set(...e[o][t]),c+=(1-Math.abs(r.dot(i)))*25)});let l=c>.75;n.push({height:Math.min(100,Math.max(14,Math.round(c*100))),isSpike:l,frameIdx:o})}return n},[Ot]),nn=F&&!F.stale&&Array.isArray(F.live)?F.live:null,rn=e=>e<0?!1:nn?!!nn[e]:at&&H.has(Gd[e].bone),an=Gd.reduce((e,t,n)=>e+ +!!rn(n),0),q={panel:{backgroundColor:s.panel,display:`flex`,flexDirection:`column`,zIndex:10,overflowY:`auto`,borderRight:`1px solid ${s.border}`,borderLeft:`1px solid ${s.border}`},header:{padding:`14px 18px`,backgroundColor:s.panelHeader,borderBottom:`1px solid ${s.border}`,fontWeight:600,fontSize:`0.85rem`,color:s.text},sectionTitle:{fontSize:`0.68rem`,fontWeight:700,color:s.muted,textTransform:`uppercase`,letterSpacing:`0.8px`,marginBottom:8,marginTop:14,padding:`0 18px`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},input:{width:`100%`,backgroundColor:s.inputBg,border:`1px solid ${s.border}`,color:s.text,padding:`7px 10px`,borderRadius:6,fontSize:`0.78rem`,outline:`none`},btn:(e,t)=>({width:`100%`,background:e,color:t,border:`none`,padding:`8px 12px`,borderRadius:6,fontSize:`0.76rem`,fontWeight:700,cursor:`pointer`}),listItem:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`8px 18px`,borderBottom:`1px solid ${s.border}`,fontSize:`0.78rem`,cursor:`pointer`}};return(0,$.jsxs)(`div`,{style:{display:`flex`,position:`absolute`,inset:0,backgroundColor:s.bg,color:s.text,fontFamily:`Segoe UI, system-ui, sans-serif`,overflow:`hidden`},children:[(0,$.jsx)(Id,{isDark:o}),de&&(0,$.jsxs)(`div`,{className:`inertis-fade-in`,style:{position:`fixed`,top:14,right:20,zIndex:300,backgroundColor:s.panel,border:`1px solid ${s.accent}`,borderRadius:8,padding:`10px 16px`,display:`flex`,alignItems:`center`,gap:12,boxShadow:s.glow,fontSize:`0.78rem`},children:[(0,$.jsxs)(`span`,{children:[`🔄 Unsaved session found (`,de.clips.length,` takes from `,de.savedAt,`)`]}),(0,$.jsx)(`button`,{onClick:Nt,style:{background:s.accent,color:s.accentText,border:`none`,borderRadius:4,padding:`4px 10px`,cursor:`pointer`,fontWeight:700},children:`Restore`}),(0,$.jsx)(`button`,{onClick:Pt,style:{background:`transparent`,color:s.muted,border:`none`,cursor:`pointer`},children:`✖`})]}),le&&(0,$.jsxs)(`div`,{className:`inertis-fade-in`,style:{position:`fixed`,bottom:110,left:`50%`,transform:`translateX(-50%)`,zIndex:250,backgroundColor:s.panelHeader,color:s.text,padding:`8px 18px`,borderRadius:20,border:`1px solid ${s.accent}`,fontSize:`0.78rem`,fontWeight:600,boxShadow:`0 8px 24px rgba(0,0,0,0.4)`},children:[`✨ `,le]}),(0,$.jsxs)(`div`,{style:{...q.panel,width:c},children:[(0,$.jsxs)(`div`,{style:q.header,children:[(0,$.jsx)(Ld,{isDark:o}),(0,$.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginTop:4},children:(0,$.jsx)(`input`,{type:`text`,value:he,onChange:e=>I(e.target.value),style:{...q.input,fontWeight:`bold`,padding:`5px 8px`,fontSize:`0.82rem`}})}),pe&&(0,$.jsxs)(`div`,{style:{fontSize:`0.62rem`,color:s.muted,marginTop:4},children:[`Auto-saved at `,pe]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:6,marginTop:8},children:[(0,$.jsx)(`button`,{onClick:Rt,style:{...q.btn(s.secondaryBtn,s.text),marginTop:0,fontSize:`0.72rem`,padding:`7px 10px`,flex:1.3},children:`💾 Save Project (.inertis)`}),window.pywebview?.api?.load_file?(0,$.jsx)(`button`,{onClick:()=>Bt(),style:{...q.btn(s.secondaryBtn,s.text),marginTop:0,fontSize:`0.72rem`,padding:`7px 10px`,flex:1},children:`📂 Load (.inertis)`}):(0,$.jsxs)(`label`,{style:{...q.btn(s.secondaryBtn,s.text),marginTop:0,fontSize:`0.72rem`,padding:`7px 10px`,textAlign:`center`,cursor:`pointer`,flex:1,display:`inline-block`},children:[`📂 Load (.inertis)`,(0,$.jsx)(`input`,{type:`file`,accept:`.inertis`,onChange:Bt,style:{display:`none`}})]})]})]}),(0,$.jsx)(`div`,{style:q.sectionTitle,children:`Network & Hardware`}),(0,$.jsx)(`div`,{style:{padding:`0 18px 10px`,borderBottom:`1px solid ${s.border}`},children:(0,$.jsxs)(`div`,{style:{display:`flex`,gap:6},children:[(0,$.jsx)(`input`,{type:`text`,value:ze,onChange:e=>Be(e.target.value),placeholder:`IP Address`,style:q.input}),(0,$.jsx)(`input`,{type:`text`,value:Ve,onChange:e=>He(e.target.value),placeholder:`Port`,style:{...q.input,width:68}}),(0,$.jsx)(`button`,{onClick:()=>{let e=`ws://${ze.trim()}:${Ve.trim()}`;We(e),kt(`Connecting to ${e}`)},style:{...q.btn(s.accent,s.accentText),marginTop:0,width:`auto`,padding:`0 12px`,fontSize:`0.72rem`},children:`Link`})]})}),(0,$.jsxs)(`div`,{style:q.sectionTitle,children:[(0,$.jsx)(`span`,{children:`Network Status`}),(0,$.jsxs)(`span`,{style:{fontFamily:`monospace`,color:s.muted},children:[ct,` pkt/s`]})]}),(0,$.jsxs)(`div`,{style:{padding:`0 18px 12px`,borderBottom:`1px solid ${s.border}`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,fontSize:`0.75rem`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,$.jsx)(`span`,{className:at?`inertis-pulse`:``,style:{backgroundColor:at?s.success:s.danger,display:`inline-block`,width:8,height:8,borderRadius:`50%`}}),(0,$.jsx)(`span`,{style:{color:at?s.success:s.danger,fontWeight:600},children:at?`Streaming`:F?.status===`waiting_for_hub`?`Waiting for hub`:`No data`})]}),(0,$.jsxs)(`span`,{style:{fontSize:`0.68rem`,color:s.muted},children:[`Replay: `,xe,`s / 30s`]})]}),(0,$.jsxs)(`div`,{style:q.sectionTitle,children:[(0,$.jsxs)(`span`,{children:[`Clips (`,L.length,`)`]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:5},children:[(0,$.jsxs)(`button`,{onClick:()=>Oe(!De),style:{background:De?s.accent:s.secondaryBtn,color:De?s.accentText:s.text,border:`none`,borderRadius:4,padding:`2px 6px`,fontSize:`0.62rem`,fontWeight:700,cursor:`pointer`},children:[`🔁 Playlist `,De?`ON`:`OFF`]}),(0,$.jsx)(`button`,{onClick:Kt,style:{background:s.secondaryBtn,color:s.text,border:`none`,borderRadius:4,padding:`2px 6px`,fontSize:`0.62rem`,fontWeight:600,cursor:`pointer`},children:`🔗 Stitch`})]})]}),(0,$.jsx)(`div`,{style:{flex:1,overflowY:`auto`,minHeight:80,maxHeight:135,borderBottom:`1px solid ${s.border}`},children:L.length===0?(0,$.jsx)(`div`,{style:{padding:`6px 18px`,color:s.muted,fontSize:`0.74rem`},children:`No clips recorded yet.`}):L.map(e=>(0,$.jsxs)(`div`,{style:{...q.listItem,backgroundColor:Ce===e.id?o?`#1a2e05`:`#e2e8f0`:`transparent`},onClick:()=>{we(e.id),Ae(e.trimStart||0),Ee(!1)},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:e.selected,onClick:e=>e.stopPropagation(),onChange:()=>R(L.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))}),(0,$.jsx)(`span`,{style:{fontWeight:Ce===e.id?700:500,color:Ce===e.id?s.accent:s.text},children:e.name})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,fontSize:`0.7rem`,color:s.muted},children:[(0,$.jsxs)(`span`,{children:[e.frames.length,`f`]}),(0,$.jsx)(`span`,{children:e.duration})]})]},e.id))}),(0,$.jsxs)(`div`,{style:q.sectionTitle,children:[(0,$.jsxs)(`span`,{children:[Kd,`-Sensor Body Schematic`]}),(0,$.jsxs)(`span`,{style:{color:an>0?s.success:s.danger},children:[an,`/`,Kd,` Live`]})]}),(0,$.jsxs)(`div`,{style:{padding:`4px 18px 16px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,$.jsxs)(`div`,{style:{position:`relative`,width:220,height:260,backgroundColor:s.cardBg,borderRadius:12,border:`1px solid ${s.border}`,overflow:`hidden`,display:`flex`,justifyContent:`center`,alignItems:`center`},children:[(0,$.jsxs)(`svg`,{viewBox:`0 0 220 260`,preserveAspectRatio:`xMidYMid meet`,style:{width:`100%`,height:`100%`,position:`absolute`,inset:0,opacity:o?.26:.2,pointerEvents:`none`},children:[(0,$.jsxs)(`g`,{fill:o?`#ffffff`:`#0f172a`,children:[(0,$.jsx)(`path`,{d:`M110.0 136.0 L114.1 134.9 L115.8 133.9 L117.2 132.8 L118.4 131.8 L119.4 130.7 L120.4 129.7 L121.3 128.6 L122.1 127.5 L122.8 126.5 L123.5 125.4 L124.1 124.4 L124.7 123.3 L125.2 122.3 L125.6 121.2 L126.0 120.2 L126.2 119.1 L126.2 118.1 L125.9 117.0 L125.4 115.9 L124.6 114.9 L123.3 113.8 L121.4 112.8 L118.5 111.7 L110.0 110.7 L110.0 110.7 L101.5 111.7 L98.6 112.8 L96.7 113.8 L95.4 114.9 L94.6 115.9 L94.1 117.0 L93.8 118.1 L93.8 119.1 L94.0 120.2 L94.4 121.2 L94.8 122.3 L95.3 123.3 L95.9 124.4 L96.5 125.4 L97.2 126.5 L97.9 127.5 L98.7 128.6 L99.6 129.7 L100.6 130.7 L101.6 131.8 L102.8 132.8 L104.2 133.9 L105.9 134.9 L110.0 136.0 Z`}),(0,$.jsx)(`path`,{d:`M110.0 113.0 L115.4 112.1 L117.4 111.3 L118.8 110.4 L119.9 109.5 L120.7 108.7 L121.4 107.8 L121.9 106.9 L122.3 106.1 L122.6 105.2 L122.7 104.4 L122.8 103.5 L122.8 102.6 L122.7 101.8 L122.5 100.9 L122.2 100.0 L121.8 99.2 L121.3 98.3 L120.7 97.5 L120.0 96.6 L119.1 95.7 L118.0 94.9 L116.7 94.0 L114.8 93.1 L110.0 92.3 L110.0 92.3 L105.2 93.1 L103.3 94.0 L102.0 94.9 L100.9 95.7 L100.0 96.6 L99.3 97.5 L98.7 98.3 L98.2 99.2 L97.8 100.0 L97.5 100.9 L97.3 101.8 L97.2 102.6 L97.2 103.5 L97.3 104.4 L97.4 105.2 L97.7 106.1 L98.1 106.9 L98.6 107.8 L99.3 108.7 L100.1 109.5 L101.2 110.4 L102.6 111.3 L104.6 112.1 L110.0 113.0 Z`}),(0,$.jsx)(`path`,{d:`M110.0 92.3 L114.8 90.8 L116.8 89.3 L118.3 87.8 L119.6 86.3 L120.8 84.8 L121.8 83.4 L122.7 81.9 L123.6 80.4 L124.4 78.9 L125.1 77.4 L125.7 75.9 L126.2 74.4 L126.7 73.0 L127.1 71.5 L127.5 70.0 L127.7 68.5 L127.6 67.0 L127.3 65.5 L126.7 64.1 L125.7 62.6 L124.3 61.1 L122.3 59.6 L119.1 58.1 L110.0 56.6 L110.0 56.6 L100.9 58.1 L97.7 59.6 L95.7 61.1 L94.3 62.6 L93.3 64.1 L92.7 65.5 L92.4 67.0 L92.3 68.5 L92.5 70.0 L92.9 71.5 L93.3 73.0 L93.8 74.4 L94.3 75.9 L94.9 77.4 L95.6 78.9 L96.4 80.4 L97.3 81.9 L98.2 83.4 L99.2 84.8 L100.4 86.3 L101.7 87.8 L103.2 89.3 L105.2 90.8 L110.0 92.3 Z`}),(0,$.jsx)(`path`,{d:`M113.7 52.0 L113.5 50.9 L113.0 49.9 L112.2 49.0 L111.1 48.5 L110.0 48.3 L108.9 48.5 L107.8 49.0 L107.0 49.9 L106.5 50.9 L106.3 52.0 L106.1 57.8 L106.3 59.0 L106.8 60.1 L107.7 60.9 L108.8 61.5 L110.0 61.7 L111.2 61.5 L112.3 60.9 L113.2 60.1 L113.7 59.0 L113.9 57.8 Z`}),(0,$.jsx)(`path`,{d:`M110.0 50.9 L112.9 49.9 L114.1 49.0 L115.0 48.0 L115.7 47.0 L116.3 46.1 L116.8 45.1 L117.3 44.2 L117.7 43.2 L118.1 42.2 L118.4 41.3 L118.6 40.3 L118.8 39.4 L119.0 38.4 L119.1 37.5 L119.1 36.5 L119.0 35.5 L118.8 34.6 L118.6 33.6 L118.2 32.7 L117.6 31.7 L116.8 30.8 L115.8 29.8 L114.3 28.8 L110.0 27.9 L110.0 27.9 L105.7 28.8 L104.2 29.8 L103.2 30.8 L102.4 31.7 L101.8 32.7 L101.4 33.6 L101.2 34.6 L101.0 35.5 L100.9 36.5 L100.9 37.5 L101.0 38.4 L101.2 39.4 L101.4 40.3 L101.6 41.3 L101.9 42.2 L102.3 43.2 L102.7 44.2 L103.2 45.1 L103.7 46.1 L104.3 47.0 L105.0 48.0 L105.9 49.0 L107.1 49.9 L110.0 50.9 Z`}),(0,$.jsx)(`path`,{d:`M126.8 71.6 L128.4 71.7 L130.0 71.2 L131.4 70.3 L132.4 69.0 L133.0 67.4 L133.1 65.8 L132.6 64.2 L131.7 62.8 L130.4 61.8 L128.9 61.2 L121.8 60.5 L120.4 60.5 L119.0 60.8 L117.8 61.6 L116.9 62.8 L116.4 64.1 L116.4 65.6 L116.7 66.9 L117.5 68.1 L118.7 69.0 L120.0 69.5 Z`}),(0,$.jsx)(`path`,{d:`M158.3 71.3 L159.8 71.1 L161.2 70.4 L162.3 69.3 L163.0 67.9 L163.2 66.4 L163.0 64.9 L162.3 63.5 L161.2 62.4 L159.8 61.7 L158.3 61.5 L137.0 60.4 L135.2 60.7 L133.5 61.6 L132.2 62.9 L131.3 64.6 L131.0 66.4 L131.3 68.2 L132.2 69.9 L133.5 71.2 L135.2 72.1 L137.0 72.4 Z`}),(0,$.jsx)(`path`,{d:`M189.3 70.1 L190.5 69.9 L191.5 69.4 L192.3 68.6 L192.8 67.5 L193.0 66.4 L192.8 65.3 L192.3 64.2 L191.5 63.4 L190.5 62.9 L189.3 62.7 L168.7 61.6 L167.2 61.8 L165.8 62.5 L164.7 63.6 L164.1 64.9 L163.8 66.4 L164.1 67.9 L164.7 69.2 L165.8 70.3 L167.2 71.0 L168.7 71.2 Z`}),(0,$.jsx)(`ellipse`,{cx:`203.2`,cy:`66.9`,rx:`8.3`,ry:`3.0`}),(0,$.jsx)(`path`,{d:`M113.9 165.3 L114.2 167.4 L115.2 169.2 L116.7 170.7 L118.5 171.6 L120.6 172.0 L122.6 171.6 L124.5 170.7 L126.0 169.2 L126.9 167.4 L127.2 165.3 L129.8 131.9 L129.3 129.1 L128.0 126.5 L126.0 124.5 L123.4 123.2 L120.6 122.8 L117.7 123.2 L115.2 124.5 L113.1 126.5 L111.8 129.1 L111.4 131.9 Z`}),(0,$.jsx)(`path`,{d:`M116.2 215.9 L116.4 217.3 L117.0 218.5 L118.0 219.4 L119.2 220.1 L120.6 220.3 L121.9 220.1 L123.1 219.4 L124.1 218.5 L124.7 217.3 L125.0 215.9 L127.0 179.1 L126.7 177.1 L125.8 175.3 L124.4 173.9 L122.6 173.0 L120.6 172.7 L118.6 173.0 L116.8 173.9 L115.4 175.3 L114.5 177.1 L114.1 179.1 Z`}),(0,$.jsx)(`ellipse`,{cx:`120.6`,cy:`227.2`,rx:`5.8`,ry:`3.9`}),(0,$.jsx)(`path`,{d:`M91.1 61.2 L89.6 61.8 L88.3 62.8 L87.4 64.2 L86.9 65.8 L87.0 67.4 L87.6 69.0 L88.6 70.3 L90.0 71.2 L91.6 71.7 L93.2 71.6 L100.0 69.5 L101.3 69.0 L102.5 68.1 L103.3 66.9 L103.6 65.6 L103.6 64.1 L103.1 62.8 L102.2 61.6 L101.0 60.8 L99.6 60.5 L98.2 60.5 Z`}),(0,$.jsx)(`path`,{d:`M61.7 61.5 L60.2 61.7 L58.8 62.4 L57.7 63.5 L57.0 64.9 L56.8 66.4 L57.0 67.9 L57.7 69.3 L58.8 70.4 L60.2 71.1 L61.7 71.3 L83.0 72.4 L84.8 72.1 L86.5 71.2 L87.8 69.9 L88.7 68.2 L89.0 66.4 L88.7 64.6 L87.8 62.9 L86.5 61.6 L84.8 60.7 L83.0 60.4 Z`}),(0,$.jsx)(`path`,{d:`M30.7 62.7 L29.5 62.9 L28.5 63.4 L27.7 64.2 L27.2 65.3 L27.0 66.4 L27.2 67.5 L27.7 68.6 L28.5 69.4 L29.5 69.9 L30.7 70.1 L51.4 71.2 L52.8 71.0 L54.2 70.3 L55.3 69.2 L55.9 67.9 L56.2 66.4 L55.9 64.9 L55.3 63.6 L54.2 62.5 L52.8 61.8 L51.4 61.6 Z`}),(0,$.jsx)(`ellipse`,{cx:`16.8`,cy:`66.9`,rx:`8.3`,ry:`3.0`}),(0,$.jsx)(`path`,{d:`M92.8 165.3 L93.1 167.4 L94.0 169.2 L95.5 170.7 L97.4 171.6 L99.4 172.0 L101.5 171.6 L103.3 170.7 L104.8 169.2 L105.8 167.4 L106.1 165.3 L108.6 131.9 L108.2 129.1 L106.9 126.5 L104.8 124.5 L102.3 123.2 L99.4 122.8 L96.6 123.2 L94.0 124.5 L92.0 126.5 L90.7 129.1 L90.2 131.9 Z`}),(0,$.jsx)(`path`,{d:`M95.0 215.9 L95.3 217.3 L95.9 218.5 L96.9 219.4 L98.1 220.1 L99.4 220.3 L100.8 220.1 L102.0 219.4 L103.0 218.5 L103.6 217.3 L103.8 215.9 L105.9 179.1 L105.5 177.1 L104.6 175.3 L103.2 173.9 L101.4 173.0 L99.4 172.7 L97.4 173.0 L95.6 173.9 L94.2 175.3 L93.3 177.1 L93.0 179.1 Z`}),(0,$.jsx)(`ellipse`,{cx:`99.4`,cy:`227.2`,rx:`5.8`,ry:`3.9`})]}),(0,$.jsxs)(`g`,{fill:o?`#8b93a7`:`#475569`,children:[(0,$.jsx)(`ellipse`,{cx:`110.0`,cy:`93.4`,rx:`10.1`,ry:`8.3`}),(0,$.jsx)(`ellipse`,{cx:`110.0`,cy:`58.9`,rx:`5.3`,ry:`4.6`}),(0,$.jsx)(`ellipse`,{cx:`110.0`,cy:`50.9`,rx:`4.1`,ry:`3.4`}),(0,$.jsx)(`ellipse`,{cx:`131.3`,cy:`66.4`,rx:`6.4`,ry:`6.4`}),(0,$.jsx)(`ellipse`,{cx:`163.5`,cy:`66.4`,rx:`5.1`,ry:`5.1`}),(0,$.jsx)(`ellipse`,{cx:`193.4`,cy:`66.4`,rx:`3.7`,ry:`3.7`}),(0,$.jsx)(`ellipse`,{cx:`120.6`,cy:`125.0`,rx:`8.6`,ry:`8.6`}),(0,$.jsx)(`ellipse`,{cx:`120.6`,cy:`172.2`,rx:`6.7`,ry:`6.7`}),(0,$.jsx)(`ellipse`,{cx:`120.6`,cy:`221.7`,rx:`4.6`,ry:`4.6`}),(0,$.jsx)(`ellipse`,{cx:`88.7`,cy:`66.4`,rx:`6.4`,ry:`6.4`}),(0,$.jsx)(`ellipse`,{cx:`56.5`,cy:`66.4`,rx:`5.1`,ry:`5.1`}),(0,$.jsx)(`ellipse`,{cx:`26.6`,cy:`66.4`,rx:`3.7`,ry:`3.7`}),(0,$.jsx)(`ellipse`,{cx:`99.4`,cy:`125.0`,rx:`8.6`,ry:`8.6`}),(0,$.jsx)(`ellipse`,{cx:`99.4`,cy:`172.2`,rx:`6.7`,ry:`6.7`}),(0,$.jsx)(`ellipse`,{cx:`99.4`,cy:`221.7`,rx:`4.6`,ry:`4.6`})]}),(0,$.jsx)(`g`,{fill:`none`,stroke:`#bcf800`,strokeWidth:`1.5`,opacity:`0.9`,children:(0,$.jsx)(`rect`,{x:`104.7`,y:`115.2`,width:`10.6`,height:`7.8`,rx:`3`})})]}),(0,$.jsx)(`span`,{style:{position:`absolute`,top:6,left:8,fontSize:`0.6rem`,fontWeight:700,color:s.muted,pointerEvents:`none`},children:`L`}),(0,$.jsx)(`span`,{style:{position:`absolute`,top:6,right:8,fontSize:`0.6rem`,fontWeight:700,color:s.muted,pointerEvents:`none`},children:`R`}),(0,$.jsx)(`span`,{style:{position:`absolute`,bottom:6,left:0,right:0,textAlign:`center`,fontSize:`0.55rem`,fontWeight:700,letterSpacing:`0.12em`,color:s.muted,pointerEvents:`none`},children:`BACK VIEW`}),Gd.map((e,t)=>{let n=rn(t),r=re?.key===e.key;return(0,$.jsx)(`div`,{onMouseEnter:()=>ie(e),onMouseLeave:()=>ie(null),style:{position:`absolute`,top:e.pos.top,left:e.pos.left,transform:`translate(-50%, -50%)`,width:r?13:8,height:r?13:8,borderRadius:`50%`,backgroundColor:n?s.success:s.danger,border:`1.5px solid ${s.panel}`,cursor:`pointer`,boxShadow:n?`0 0 8px rgba(188, 248, 0, 0.7)`:`0 0 6px rgba(239, 68, 68, 0.5)`,zIndex:r?30:10,transition:`all 0.12s ease`}},e.key)})]}),(0,$.jsx)(`div`,{style:{width:`100%`,backgroundColor:s.cardBg,border:`1px solid ${s.border}`,borderRadius:8,padding:`7px 12px`,fontSize:`0.72rem`},children:re?(()=>{let e=Gd.findIndex(e=>e.key===re.key),t=rn(e);return(0,$.jsxs)(`div`,{children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontWeight:700,marginBottom:3},children:[(0,$.jsxs)(`span`,{style:{color:s.text},children:[`#`,e,` `,re.name]}),(0,$.jsx)(`span`,{style:{color:t?s.success:s.danger},children:t?`● LIVE`:`○ NO DATA`})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,color:s.muted,fontFamily:`monospace`,fontSize:`0.66rem`},children:[(0,$.jsxs)(`span`,{children:[`Bone: `,re.bone]}),(0,$.jsx)(`span`,{children:F&&!F.stale?`${F.rate_hz} Hz`:`— Hz`}),(0,$.jsx)(`span`,{children:F&&!F.stale?`${F.loss_pct}% loss`:`—`})]})]})})():(0,$.jsx)(`div`,{style:{color:s.muted,textAlign:`center`,fontStyle:`italic`},children:F&&!F.stale&&typeof F.rate_hz==`number`?`Hub ${F.hub_ip||``} • ${F.rate_hz} Hz • ${F.loss_pct}% packet loss`:F?.status===`waiting_for_hub`?`Bridge running — waiting for the Waist Hub on UDP ${F.listen_port}`:`Hover over any sensor node for diagnostics`})})]})]}),(0,$.jsx)(`div`,{onMouseDown:()=>{f.current=!0,document.body.style.cursor=`col-resize`},style:{width:4,cursor:`col-resize`,backgroundColor:s.border}}),(0,$.jsxs)(`div`,{style:{flex:1,position:`relative`,overflow:`hidden`},children:[(0,$.jsx)(`div`,{ref:t,style:{position:`absolute`,inset:0,zIndex:1}}),(0,$.jsxs)(`div`,{style:{position:`absolute`,top:18,left:`50%`,transform:`translateX(-50%)`,zIndex:5,display:`flex`,gap:10,alignItems:`center`,backgroundColor:s.panelHeader,padding:`6px 14px`,borderRadius:8,border:`1px solid ${s.border}`,boxShadow:`0 4px 20px rgba(0,0,0,0.4)`},children:[(0,$.jsx)(`button`,{onClick:()=>h(!0),style:{...q.btn(s.accent,s.accentText),padding:`6px 14px`,margin:0,width:`auto`},children:`🧍 CALIBRATION WIZARD`}),(0,$.jsx)(`div`,{style:{height:20,width:1,backgroundColor:s.border}}),(0,$.jsxs)(`button`,{onClick:()=>C(!S),style:{...q.btn(S?s.success:s.secondaryBtn,S?s.accentText:s.text),padding:`6px 12px`,margin:0,width:`auto`},children:[`🦴 `,S?`Wireframe ON`:`Wireframe OFF`]}),(0,$.jsx)(`div`,{style:{height:20,width:1,backgroundColor:s.border}}),(0,$.jsxs)(`select`,{value:Ne,onChange:e=>Ut(e.target.value),style:{...q.input,width:`auto`,margin:0,padding:`5px 8px`},children:[(0,$.jsx)(`option`,{value:`T-POSE`,children:`T-Pose Mode`}),(0,$.jsx)(`option`,{value:`A-POSE`,children:`A-Pose Mode (-45°)`})]}),(0,$.jsx)(`div`,{style:{height:20,width:1,backgroundColor:s.border}}),(0,$.jsx)(`button`,{onClick:()=>a(o?`LIGHT`:`DARK`),style:{...q.btn(s.secondaryBtn,s.text),padding:`6px 10px`,margin:0,width:`auto`},children:o?`☀️ Light`:`🌙 Dark`}),(0,$.jsx)(`div`,{style:{height:20,width:1,backgroundColor:s.border}}),(0,$.jsx)(`button`,{onClick:()=>y(!0),style:{...q.btn(E.leaseValid?`#1a2e05`:s.secondaryBtn,E.leaseValid?`#bcf800`:s.text),border:E.leaseValid?`1px solid #3f6212`:`none`,padding:`6px 12px`,margin:0,width:`auto`},children:E.leaseValid?`✓ Verified Owner`:`🔑 Account / License`}),e&&!window.pywebview&&(0,$.jsx)(`button`,{onClick:e,style:{...q.btn(s.secondaryBtn,s.muted),padding:`6px 10px`,margin:0,width:`auto`},children:`🌐 Web Portal`})]}),(0,$.jsx)(`div`,{style:{position:`absolute`,bottom:24,left:`50%`,transform:`translateX(-50%)`,zIndex:5,backgroundColor:o?`rgba(19, 24, 32, 0.94)`:`rgba(255, 255, 255, 0.94)`,backdropFilter:`blur(10px)`,padding:`10px 20px`,borderRadius:12,border:`1px solid ${s.border}`,boxShadow:`0 8px 32px rgba(0,0,0,0.5)`},children:Ce?(0,$.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,minWidth:580},children:[(0,$.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,height:24,gap:2,padding:`0 4px`,backgroundColor:s.inputBg,borderRadius:4,overflow:`hidden`},children:tn.map((e,t)=>(0,$.jsx)(`div`,{onClick:()=>Qt(e.frameIdx),style:{flex:1,height:`${e.height}%`,backgroundColor:e.isSpike?s.warning:s.accent,opacity:Math.abs(ke-e.frameIdx)<Math.ceil(Ot.frames.length/48)?1:.45,cursor:`pointer`,borderRadius:`1px 1px 0 0`}},t))}),(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,$.jsx)(`button`,{onClick:()=>{we(null),Ee(!1)},title:`Return to Live Stream`,style:{background:`transparent`,border:`none`,color:s.muted,cursor:`pointer`,fontSize:`0.76rem`,fontWeight:600},children:`⬅ Live`}),(0,$.jsx)(`button`,{onClick:()=>Ee(!Te),style:{background:`transparent`,border:`none`,color:s.text,cursor:`pointer`,fontSize:`1.1rem`,width:28},children:Te?`⏸`:`▶`}),(0,$.jsx)(`input`,{type:`range`,min:`0`,max:Math.max(0,Ot.frames.length-1),value:ke,onChange:e=>Qt(parseInt(e.target.value,10)),style:{flex:1,accentColor:s.accent}}),(0,$.jsx)(`button`,{onClick:()=>$t(`trimStart`),style:{...q.btn(s.secondaryBtn,s.text),margin:0,width:`auto`,padding:`4px 10px`,fontSize:`0.7rem`},children:`[ In`}),(0,$.jsx)(`button`,{onClick:()=>$t(`trimEnd`),style:{...q.btn(s.secondaryBtn,s.text),margin:0,width:`auto`,padding:`4px 10px`,fontSize:`0.7rem`},children:`Out ]`}),(0,$.jsx)(`button`,{onClick:Gt,style:{...q.btn(s.secondaryBtn,s.warning),margin:0,width:`auto`,padding:`4px 10px`,fontSize:`0.7rem`},children:`✨ Clean Spikes`}),(0,$.jsxs)(`div`,{style:{fontFamily:`monospace`,fontSize:`0.8rem`,minWidth:85,textAlign:`right`},children:[ke,` / `,Ot.frames.length]})]})]}):(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,$.jsx)(`input`,{type:`text`,value:ge,onChange:e=>z(e.target.value),style:{...q.input,width:130}}),(0,$.jsx)(`button`,{onClick:Xt,title:`Record Take (Space)`,style:{background:`transparent`,border:`none`,cursor:`pointer`,display:`flex`,alignItems:`center`},children:(0,$.jsx)(`div`,{style:{width:32,height:32,borderRadius:`50%`,border:`2px solid ${_e?s.danger:s.text}`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,$.jsx)(`div`,{style:{width:16,height:16,borderRadius:_e?4:`50%`,backgroundColor:s.danger,transition:`all 0.2s`}})})}),(0,$.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:`1.15rem`,fontWeight:`bold`,width:68,textAlign:`center`,color:_e?s.danger:s.text},children:Qd(ve)}),(0,$.jsx)(`div`,{style:{height:22,width:1,backgroundColor:s.border}}),(0,$.jsxs)(`button`,{onClick:qt,title:`Clip Last 30s (Hotkey: R)`,style:{...q.btn(s.secondaryBtn,s.text),margin:0,width:`auto`,padding:`6px 12px`,fontSize:`0.74rem`},children:[`⚡ Clip Last 30s `,(0,$.jsxs)(`span`,{style:{color:s.muted,fontSize:`0.68rem`},children:[`(`,xe,`s)`]})]})]})}),se!==null&&(0,$.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundColor:`rgba(11,14,20,0.65)`,backdropFilter:`blur(8px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:50},children:(0,$.jsx)(`div`,{className:`inertis-fade-in`,style:{fontSize:`6rem`,fontWeight:`bold`,color:s.accent,textShadow:`0 0 30px rgba(190,242,100,0.5)`},children:se})})]}),(0,$.jsx)(`div`,{onMouseDown:()=>{p.current=!0,document.body.style.cursor=`col-resize`},style:{width:4,cursor:`col-resize`,backgroundColor:s.border}}),(0,$.jsxs)(`div`,{style:{...q.panel,width:u},children:[(0,$.jsx)(`div`,{style:q.header,children:`Inertis Studio - Details & Export`}),(0,$.jsx)(`div`,{style:q.sectionTitle,children:`Avatar Model`}),(0,$.jsxs)(`div`,{style:{padding:`0 18px 14px`,borderBottom:`1px solid ${s.border}`},children:[(0,$.jsxs)(`div`,{style:{fontSize:`0.75rem`,color:s.muted,marginBottom:8,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:[`Status: `,(0,$.jsx)(`span`,{style:{color:s.text,fontWeight:600},children:Le})]}),(0,$.jsxs)(`label`,{style:{...q.btn(s.secondaryBtn,s.text),display:`block`,textAlign:`center`,cursor:`pointer`,border:`1px solid ${s.border}`},children:[`📁 Import Custom Mesh (.fbx, .glb)`,(0,$.jsx)(`input`,{type:`file`,accept:`.fbx,.glb,.gltf`,onChange:Lt,style:{display:`none`}})]})]}),(0,$.jsx)(`div`,{style:q.sectionTitle,children:`FK / IK Retargeting & Streaming`}),(0,$.jsxs)(`div`,{style:{padding:`0 18px 14px`,borderBottom:`1px solid ${s.border}`,fontSize:`0.78rem`,display:`flex`,flexDirection:`column`,gap:8},children:[(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,cursor:`pointer`,color:rt?s.success:s.text,fontWeight:rt?600:`normal`},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:rt,onChange:e=>it(e.target.checked),style:{accentColor:s.accent}}),` Stream to Unreal Engine (Inertis plugin, beta)`]}),(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,cursor:`pointer`},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:Ye,onChange:e=>Xe(e.target.checked),style:{accentColor:s.accent}}),` Anatomical FK Joint Constraints`]}),(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,cursor:`pointer`},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:qe,onChange:e=>Je(e.target.checked),style:{accentColor:s.accent}}),` Ground-Plane Foot IK Floor Lock`]}),(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,cursor:`pointer`},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:$e,onChange:e=>et(e.target.checked),style:{accentColor:s.accent}}),` Upper-Body Only Solve (Lock Legs)`]}),(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,cursor:`pointer`},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:Ge,onChange:e=>Ke(e.target.checked),style:{accentColor:s.accent}}),` Lock Root Position (Treadmill)`]}),(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,cursor:`pointer`},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:tt,onChange:e=>nt(e.target.checked),style:{accentColor:s.accent}}),` Reset Position to Origin on Start`]}),(0,$.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,cursor:`pointer`,color:Ze?s.success:s.text},children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:Ze,onChange:e=>Qe(e.target.checked),style:{accentColor:s.accent}}),` Foot Ground-Contact Clamp`]})]}),(0,$.jsx)(`div`,{style:q.sectionTitle,children:`Export Pipeline`}),(0,$.jsxs)(`div`,{style:{padding:`0 18px 16px`,borderBottom:`1px solid ${s.border}`},children:[(0,$.jsxs)(`div`,{style:{marginBottom:14},children:[(0,$.jsx)(`label`,{style:{fontSize:`0.73rem`,fontWeight:600,color:s.muted},children:`Skeleton Target Profile`}),(0,$.jsxs)(`select`,{value:Fe,onChange:e=>Ie(e.target.value),style:{...q.input,marginTop:4},children:[(0,$.jsx)(`option`,{value:`MIXAMO`,children:`Mixamo Standard Rig`}),(0,$.jsx)(`option`,{value:`MANNY`,children:`Unreal Engine 5 Manny`})]})]}),(0,$.jsxs)(`button`,{onClick:()=>_(!0),disabled:!L.some(e=>e.selected),style:q.btn(L.some(e=>e.selected)?s.accent:s.secondaryBtn,L.some(e=>e.selected)?s.accentText:s.muted),children:[`📦 Batch Export Selected (`,L.filter(e=>e.selected).length,`)`]})]}),(0,$.jsx)(`div`,{style:q.sectionTitle,children:`Post-Processing & Curve Filters`}),(0,$.jsxs)(`div`,{style:{padding:`0 18px 16px`,borderBottom:`1px solid ${s.border}`},children:[(0,$.jsxs)(`label`,{style:{fontSize:`0.75rem`,fontWeight:700,display:`flex`,justifyContent:`space-between`},children:[`Quaternion Smoothing (SLERP) `,(0,$.jsxs)(`span`,{style:{color:s.accent},children:[(V*100).toFixed(0),`%`]})]}),(0,$.jsx)(`input`,{type:`range`,min:`0`,max:`0.9`,step:`0.05`,value:V,onChange:e=>je(parseFloat(e.target.value)),style:{width:`100%`,marginTop:8,accentColor:s.accent}}),(0,$.jsx)(`div`,{style:{fontSize:`0.66rem`,color:s.muted,marginTop:4},children:`Smooths rotational trajectories to reduce hardware micro-jitters before export.`})]}),(0,$.jsx)(`div`,{style:q.sectionTitle,children:`Studio Hotkeys`}),(0,$.jsxs)(`div`,{style:{padding:`0 18px 16px`,fontSize:`0.7rem`,color:s.muted,display:`flex`,flexDirection:`column`,gap:4},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{style:{color:s.text},children:`Space:`}),` Record / Play / Pause`]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{style:{color:s.text},children:`R:`}),` Instant Clip Last 30s Replay`]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{style:{color:s.text},children:`Ctrl + S:`}),` Save .inertis Project`]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`b`,{style:{color:s.text},children:`F:`}),` Focus Camera on Avatar`]})]})]}),(0,$.jsx)(Fd,{isOpen:m,onClose:()=>h(!1),onComplete:()=>Vt(),liveCount:an,totalCount:Kd}),g&&(0,$.jsx)(`div`,{style:{position:`fixed`,inset:0,backgroundColor:`rgba(11,14,20,0.75)`,backdropFilter:`blur(5px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:200},children:(0,$.jsxs)(`div`,{className:`inertis-fade-in`,style:{backgroundColor:s.panel,border:`1px solid ${s.border}`,borderRadius:12,padding:24,width:420,boxShadow:`0 20px 50px rgba(0,0,0,0.6)`},children:[(0,$.jsx)(`div`,{style:{fontSize:`1rem`,fontWeight:`bold`,marginBottom:12,color:s.text},children:`Batch Export Configuration`}),(0,$.jsxs)(`div`,{style:{fontSize:`0.8rem`,color:s.muted,marginBottom:16},children:[`Exporting `,(0,$.jsx)(`b`,{children:L.filter(e=>e.selected).length}),` selected clip(s) mapped for `,(0,$.jsx)(`b`,{children:Fe}),`.`]}),(0,$.jsx)(`label`,{style:{fontSize:`0.75rem`,fontWeight:700,display:`block`,marginBottom:6},children:`Export Package Format`}),(0,$.jsxs)(`select`,{value:b,onChange:e=>x(e.target.value),style:{...q.input,marginBottom:20},children:[(0,$.jsx)(`option`,{value:`RETARGET_JSON`,children:`Retargeted Animation Data per Clip (.json)`}),(0,$.jsx)(`option`,{value:`BVH_FILES`,children:`Biovision Hierarchy Motion Files (.bvh)`}),(0,$.jsx)(`option`,{value:`JSON_BUNDLE`,children:`Unified Studio Session Bundle (.json)`})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,$.jsx)(`button`,{onClick:()=>_(!1),style:{...q.btn(s.secondaryBtn,s.text),flex:1},children:`Cancel`}),(0,$.jsx)(`button`,{onClick:en,style:{...q.btn(s.accent,s.accentText),flex:1},children:`Confirm Export`})]})]})}),v&&(0,$.jsx)(`div`,{style:{position:`fixed`,inset:0,backgroundColor:`rgba(11,14,20,0.75)`,backdropFilter:`blur(5px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:260},children:(0,$.jsxs)(`div`,{className:`inertis-fade-in`,style:{backgroundColor:s.panel,border:`1px solid ${s.border}`,borderRadius:12,padding:24,width:420,boxShadow:`0 20px 50px rgba(0,0,0,0.6)`},children:[(0,$.jsx)(`div`,{style:{fontSize:`1.05rem`,fontWeight:700,marginBottom:6,color:s.text},children:`Inertis Account & Hardware Licence`}),(0,$.jsx)(`div`,{style:{fontSize:`0.78rem`,color:s.muted,marginBottom:16,lineHeight:1.4},children:`Sign in with your Inertis account once to verify your bound Waist Hub serial. After that, the Studio stays unlocked on this device permanently, online or offline. Accounts created with GitHub, Discord, Microsoft or Google can sync from an existing session above.`}),E.leaseValid&&(0,$.jsxs)(`div`,{style:{backgroundColor:s.cardBg,border:`1px solid ${s.accent}`,borderRadius:8,padding:`10px 12px`,marginBottom:14,fontSize:`0.74rem`},children:[(0,$.jsx)(`div`,{style:{color:s.success,fontWeight:700,marginBottom:4},children:`✓ Verified Owner — permanently unlocked on this device`}),(0,$.jsx)(`div`,{style:{color:s.muted,fontFamily:`monospace`,fontSize:`0.7rem`},children:(E.boundSerials&&E.boundSerials.length>0?E.boundSerials:[E.suitSerial]).filter(Boolean).join(` • `)}),(0,$.jsx)(`button`,{type:`button`,onClick:jt,style:{marginTop:8,background:`transparent`,border:`none`,color:s.muted,fontSize:`0.68rem`,textDecoration:`underline`,cursor:`pointer`,padding:0},children:`Remove licence from this device`})]}),N&&(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:10,backgroundColor:s.cardBg,border:`1px solid ${s.border}`,borderRadius:8,padding:`10px 12px`,marginBottom:14,fontSize:`0.74rem`},children:[(0,$.jsxs)(`span`,{style:{color:s.muted},children:[`Signed in as `,(0,$.jsx)(`b`,{style:{color:s.text},children:N.email})]}),(0,$.jsx)(`button`,{type:`button`,onClick:K,disabled:te,style:{...q.btn(s.accent,s.accentText),width:`auto`,padding:`6px 12px`},children:te?`Syncing...`:`Sync this account`})]}),ne&&(0,$.jsx)(`div`,{style:{backgroundColor:`rgba(239, 68, 68, 0.12)`,border:`1px solid ${s.danger}`,color:s.danger,borderRadius:8,padding:`10px 12px`,marginBottom:14,fontSize:`0.74rem`,lineHeight:1.4},children:ne}),(0,$.jsxs)(`form`,{onSubmit:Mt,style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,$.jsx)(`input`,{type:`email`,placeholder:`Account Email`,value:O,onChange:e=>k(e.target.value),required:!0,style:q.input}),(0,$.jsx)(`input`,{type:`password`,placeholder:`Password`,value:A,onChange:e=>ee(e.target.value),required:!0,style:q.input}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:10,marginTop:8},children:[(0,$.jsx)(`button`,{type:`button`,onClick:()=>{y(!1),M(null)},style:{...q.btn(s.secondaryBtn,s.text),flex:1},children:`Close`}),(0,$.jsx)(`button`,{type:`submit`,disabled:te,style:{...q.btn(s.accent,s.accentText),flex:1},children:te?`Syncing...`:`Sync License`})]})]})]})})]})}export{af as default};