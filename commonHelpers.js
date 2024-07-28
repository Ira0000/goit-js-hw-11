import{i as c,S as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(o,s){const a=new URLSearchParams({key:"45153931-2470322a6efc3ba9ceddb2cb4",image_type:"photo",orientation:"horizontal",safesearch:!0,q:o}),i='<div class="loader"></div>';s.insertAdjacentHTML("afterbegin",i);let e=`https://pixabay.com/api/?${a}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function d(o,s,a){a.innerHTML="";const i=document.querySelector(".loader");if(o.total===0||s.value==="")a.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconColor:"#fff",icon:"fa-regular fa-circle-xmark",progressBarColor:"#B51B1B",maxWidth:432,messageSize:"16"}),i.remove();else{const e=o.hits.map(r=>`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img
            class="gallery-img"
            src="${r.webformatURL}"
            data-source="${r.largeImageURL}"
            alt="${r.tags}">
            </a>
            <div class="img-description">
              <p class="description-text">Likes <span class="description-value"> ${r.likes}</span></p>
              <p class="description-text">Views <span class="description-value"> ${r.views}</span></p>
              <p class="description-text">Comments <span class="description-value"> ${r.comments}</span></p>
              <p class="description-text">Downloads <span class="description-value"> ${r.downloads}</span></p>
            </div>
              </li>`).join("");a.insertAdjacentHTML("afterbegin",e),i.remove(),new l(".img-list a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).on("show.simplelightbox",function(){})}}const m=document.querySelector(".search-btn"),n=document.querySelector(".search-input"),p=document.querySelector(".img-list"),f=document.querySelector(".img-section");m.addEventListener("click",()=>{let o=n.value;u(o,f).then(s=>{d(s,n,p)}).catch(s=>{console.log("This error"),console.log(s)})});
//# sourceMappingURL=commonHelpers.js.map
