import{S as c,i as u}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"42962590-b9bb006e5b1e7f6cfce132ccb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${s}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(response.status);return t.json()})}const n=document.querySelector(".gallery"),a=document.querySelector(".form");a.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements.image.value.trim();n.innerHTML='<div class="loader"></div>',p(r).then(s=>{const i=f(s.hits);n.innerHTML=i;const e={captionsData:"alt"};let t=new c(".gallery a",e);if(t.on("show.simplelightbox",function(){}),t.refresh(),s.hits.length===0)return error}).catch(s=>{u.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Error occurred while loading images. Please try again later."})}).finally(()=>a.reset())});const f=o=>o.map(r=>`<li class="gallery-item">
           <a class="gallery-link" href="${r.largeImageURL}">
             <img
               class="gallery-image"
               width="1280"
               height="152"
               src="${r.webformatURL}"
               data-source="${r.largeImageURL}"
               alt="${r.tags}"
             />
             </a>
             <ul class="gallery-description">
             <li><h3>Likes</h3><p>${r.likes}</p>
             </li>
             <li><h3>Views</h3><p>${r.views}</p>
               </li>
               <li><h3>Comments</h3><p>${r.comments}</p>
                 </li>
                 <li><h3>Downloads</h3><p>${r.downloads}</p>
                   </li>
             </ul>
           </li>`).join("");
//# sourceMappingURL=commonHelpers.js.map
