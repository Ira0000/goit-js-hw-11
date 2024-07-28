import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=document.querySelector(".search-btn"),c=document.querySelector(".search-input"),n=document.querySelector(".img-list"),m=document.querySelector(".img-section");d.addEventListener("click",()=>{p().then(r=>{f(r)}).catch(r=>{console.log("This error"),console.log(r)})});function p(){let r=c.value;const s=new URLSearchParams({key:"45153931-2470322a6efc3ba9ceddb2cb4",image_type:"photo",orientation:"horizontal",safesearch:!0,q:r}),o='<div class="loader"></div>';m.insertAdjacentHTML("afterbegin",o);let a=`https://pixabay.com/api/?${s}`;return fetch(a).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function f(r){n.innerHTML="";const s=document.querySelector(".loader");if(r.total===0||c.value==="")n.innerHTML="",l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconColor:"#fff",icon:"fa-regular fa-circle-xmark",progressBarColor:"#B51B1B",maxWidth:432,messageSize:"16"}),s.remove();else{const o=r.hits.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
            <img
            class="gallery-img"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}">
            </a>
            <div class="img-description">
              <p class="description-text">Likes <span class="description-value"> ${e.likes}</span></p>
              <p class="description-text">Views <span class="description-value"> ${e.views}</span></p>
              <p class="description-text">Comments <span class="description-value"> ${e.comments}</span></p>
              <p class="description-text">Downloads <span class="description-value"> ${e.downloads}</span></p>
            </div>
              </li>`).join("");n.insertAdjacentHTML("afterbegin",o),s.remove(),new u(".img-list a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).on("show.simplelightbox",function(){})}}
//# sourceMappingURL=commonHelpers.js.map
