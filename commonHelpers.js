import{S as u,i as m}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function p(o,s){let t=`https://pixabay.com/api/?${new URLSearchParams({key:"45153931-2470322a6efc3ba9ceddb2cb4",image_type:"photo",orientation:"horizontal",safesearch:!0,q:o})}`;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}let c=new u(".img-list a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function f(o,s){s.innerHTML="";const a=o.hits.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
            <img
            class="gallery-img"
            src="${t.webformatURL}"
            data-source="${t.largeImageURL}"
            alt="${t.tags}">
            </a>
            <div class="img-description">
              <p class="description-text">Likes <span class="description-value"> ${t.likes}</span></p>
              <p class="description-text">Views <span class="description-value"> ${t.views}</span></p>
              <p class="description-text">Comments <span class="description-value"> ${t.comments}</span></p>
              <p class="description-text">Downloads <span class="description-value"> ${t.downloads}</span></p>
            </div>
              </li>`).join("");s.insertAdjacentHTML("afterbegin",a),c.on("show.simplelightbox",function(){}),c.refresh()}const i=document.querySelector(".search-btn"),l=document.querySelector(".search-input"),d=document.querySelector(".img-list"),g=document.querySelector(".img-section");function h(){i.classList.add("search-btn-disabled")}function y(){i.classList.remove("search-btn-disabled"),i.disabled=!1}i.addEventListener("click",()=>{const o='<div class="loader"></div>';g.insertAdjacentHTML("afterbegin",o);let s=l.value;const a=document.querySelector(".loader");l.value!==""?(y(),p(s).then(t=>{t.total===0?(d.innerHTML="",m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconColor:"#fff",icon:"fa-regular fa-circle-xmark",progressBarColor:"#B51B1B",maxWidth:432,messageSize:"16"}),a.remove()):(f(t,d),a.remove())}).catch(t=>{console.log("This error"),console.log(t)})):(h(),a.remove())});
//# sourceMappingURL=commonHelpers.js.map
