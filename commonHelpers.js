import{a as b,i as h,S}from"./assets/vendor-2cfd16ce.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const $=r=>r.map(e=>`<li class="gallery-item">
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
           </li>`).join("");async function y(r,e){const c="https://pixabay.com",a="/api/",t=new URLSearchParams({key:"42962590-b9bb006e5b1e7f6cfce132ccb",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}),o=`${c}${a}?${t}`;try{return(await b.get(o)).data}catch{throw new Error("Error fetching images")}}const m=document.querySelector(".form"),p=document.querySelector(".gallery"),n=document.querySelector(".load-more"),f=document.querySelector(".loader");let i="",l=1,d=null;const g=()=>{f.style.display="block"},w=()=>{f.style.display="none"},u=()=>{h.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})},L=r=>{const e=$(r.hits);p.innerHTML+=e,d?d.refresh():d=new S(".gallery a",{})},q=async r=>{if(r.preventDefault(),p.innerHTML="",l=1,i=r.currentTarget.elements.image.value.trim(),!i){h.error({color:"yellow",message:"Please fill in the field for search query.",position:"topRight"});return}n.style.display="none",g();try{const e=await y(i,l);if(e.hits.length===0){u();return}L(e),e.totalHits>15&&(n.style.display="block")}catch{u()}finally{w(),m.reset()}},E=async()=>{l+=1,g();try{const r=await y(i,l);if(L(r),r.totalHits<=l*15){n.style.display="none",h.info({color:"yellow",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}I()}catch{u()}finally{w()}};m.addEventListener("submit",q);n.addEventListener("click",E);function I(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
