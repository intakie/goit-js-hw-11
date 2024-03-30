import{i,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=t(r);fetch(r.href,e)}})();function f(s){const o="43146865-68c1cea507737b224ce08763a",t="https://pixabay.com/api/",a=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${t}?${a}`;return fetch(r).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{throw console.error("Error:",e),e})}const l=document.querySelector(".gallery");function h(s){if(l.innerHTML="",s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}l.innerHTML=s.hits.map(t=>`
    <li class="gallery-item">
        <a href="${t.largeImageURL}" data-lightbox="gallery">
            <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image" />
        </a>
        <div class="image-details">
            <p>Likes: ${t.likes}</p>
            <p>Views: ${t.views}</p>
            <p>Comments: ${t.comments}</p>
            <p>Downloads: ${t.downloads}</p>
        </div>
    </li>
`).join(""),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const u=document.querySelector(".search-form"),c=document.querySelector(".loader");u.addEventListener("submit",m);function m(s){s.preventDefault(),c.style.display="block";const o=u.elements.search.value.trim();if(!o){i.error({message:"Please enter a search query"});return}f(o).then(h).catch(t=>{console.error("Error handling search:",t),i.error({message:"Failed to search for images. Please try again later."})}).finally(()=>{c.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
