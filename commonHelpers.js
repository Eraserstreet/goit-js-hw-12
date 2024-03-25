import{i as u,S as h}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function p(o){const e="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"42962590-b9bb006e5b1e7f6cfce132ccb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${e}${s}?${i}`;return fetch(t).then(r=>{if(!r.ok)throw new Error(response.status);return r.json()})}function l(){u.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function f(o){const e=m(o.hits);c.innerHTML=e;const s={captionsData:"alt"};let i=new h(".gallery a",s);i.on("show.simplelightbox",function(){}),i.refresh()}const c=document.querySelector(".gallery"),a=document.querySelector(".form");a.addEventListener("submit",o=>{o.preventDefault();const e=o.currentTarget.elements.image.value.trim();c.innerHTML='<div class="loader"></div>',p(e).then(s=>{s.hits.length===0?l():f(s)}).catch(s=>{l()}).finally(()=>{a.reset()})});const m=o=>o.map(e=>`<li class="gallery-item">
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
           </li>`).join("");
//# sourceMappingURL=commonHelpers.js.map
