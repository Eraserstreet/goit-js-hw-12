import{a as L,i as h,S as b}from"./assets/vendor-2cfd16ce.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const S=r=>r.map(e=>`<li class="gallery-item">
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
           </li>`).join("");async function u(r,e){const c="https://pixabay.com",n="/api/",t=new URLSearchParams({key:"42962590-b9bb006e5b1e7f6cfce132ccb",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}),o=`${c}${n}?${t}`;try{const s=await L.get(o);if(!s.data.hits||s.data.hits.length===0)throw new Error("No images found");return s.data}catch{throw new Error("Error fetching images")}}const y=document.querySelector(".form"),p=document.querySelector(".gallery"),i=document.querySelector(".load-more"),m=document.querySelector(".flower-spinner");let a="",l=1;const f=()=>{m.style.display="block"},g=()=>{m.style.display="none"},d=()=>{h.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})},w=r=>{const e=S(r.hits);p.innerHTML+=e,new b(".gallery a",{})},$=async r=>{if(r.preventDefault(),p.innerHTML="",l=1,a=r.currentTarget.elements.image.value.trim(),!a){h.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"});return}f();try{const e=await u(a,l);if(e.hits.length===0){d(),i.style.display="none";return}w(e),e.totalHits>15?i.style.display="block":i.style.display="none"}catch{d(),i.style.display="none",g(),y.reset()}},E=async()=>{l+=1,f();try{const r=await u(a,l);if(r.hits.length===0){h.info({color:"yellow",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}w(r),r.totalHits<=l*15&&(i.style.display="none"),q()}catch{d()}finally{g()}};y.addEventListener("submit",$);i.addEventListener("click",E);function q(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
