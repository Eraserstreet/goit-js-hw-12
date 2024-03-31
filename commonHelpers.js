import{a as $,S as m,i as c}from"./assets/vendor-2cfd16ce.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function h(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=h(t);fetch(t.href,o)}})();const E=r=>r.map(e=>`<li class="gallery-item">
           <a class="gallery-link" href="${e.largeImageURL}">
             <img
               class="gallery-image"
               width="1280"
               height="152"
               src="${e.webformatURL}"
               data-source="${e.largeImageURL}"
               alt="${e.tags}"
             />
             </a>
             <ul class="gallery-description">
             <li><h3>Likes</h3><p>${e.likes}</p>
             </li>
             <li><h3>Views</h3><p>${e.views}</p>
               </li>
               <li><h3>Comments</h3><p>${e.comments}</p>
                 </li>
                 <li><h3>Downloads</h3><p>${e.downloads}</p>
                   </li>
             </ul>
           </li>`).join("");let d=null;async function p(r,e){const h="https://pixabay.com",a="/api/",t=new URLSearchParams({key:"42962590-b9bb006e5b1e7f6cfce132ccb",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}),o=`${h}${a}?${t}`;try{const s=await $.get(o);if(!s.data.hits||s.data.hits.length===0)throw new Error("No images found");return d?d.refresh():d=new m(".gallery a",{}),s.data}catch{throw c.error({title:"Error",message:"Failed to fetch images",position:"topRight"}),new Error("Error fetching images")}}const f=document.querySelector(".form"),g=document.querySelector(".gallery"),l=document.querySelector(".load-more"),w=document.querySelector(".loader");let n="",i=1,u=null;const b=()=>{w.style.display="block"},L=()=>{w.style.display="none"},y=()=>{c.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})},S=r=>{const e=E(r.hits);g.innerHTML+=e,u?u.refresh():u=new m(".gallery a",{})},I=async r=>{if(r.preventDefault(),g.innerHTML="",i=1,n=r.currentTarget.elements.image.value.trim(),!n){c.error({color:"yellow",message:"Please fill in the field for search query.",position:"topRight"});return}b();try{const e=await p(n,i);if(e.hits.length===0){y(),l.style.display="none";return}S(e),e.totalHits>15?l.style.display="block":l.style.display="none"}catch{y(),l.style.display="none"}finally{L(),f.reset()}},R=async()=>{i+=1,b();try{const r=await p(n,i);if(r.hits.length===0){c.info({color:"yellow",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}S(r),r.totalHits<=i*15&&(l.style.display="none"),q()}catch{y()}finally{L()}};f.addEventListener("submit",I);l.addEventListener("click",R);function q(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
