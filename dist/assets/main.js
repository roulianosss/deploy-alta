const F=document.querySelectorAll(".management-others-card");if(F){let o=0;F.forEach(t=>{const u=t.querySelectorAll(".management-others-card__explaination");for(let c=0;c<u.length;c++){const r=u[c].offsetHeight;r>o&&(o=r)}o>0&&t.querySelector(".management-others-card__explainations").style.setProperty("height",`calc(${o}px + var(--spacing-8))`),t.querySelectorAll(".management-others-card__link").forEach(c=>{let p=c.dataset.name,r=t.querySelector(".management-others-card__explaination[data-name="+p+"]");c.addEventListener("mouseenter",()=>{r.classList.add("active")}),c.addEventListener("mouseleave",()=>{r.classList.remove("active")})})}),window.addEventListener("resize",function(t){const u=document.querySelectorAll(".management-guided-card"),n=document.querySelectorAll(".management-others-card");u.length&&n.length&&u[0].offsetHeight!=n[0].offsetHeight&&(u[0].offsetHeight>n[0].offsetHeight?n[0].style.height=u[0].offsetHeight+"px":u[0].style.height=n[0].offsetHeight+"px")},!0),document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".management-guided-card"),u=document.querySelectorAll(".management-others-card");t.length&&u.length&&t[0].offsetHeight!=u[0].offsetHeight&&(t[0].offsetHeight>u[0].offsetHeight?u[0].style.height=t[0].offsetHeight+"px":t[0].style.height=u[0].offsetHeight+"px")})}const q=document.querySelector(".header");if(q){let c=function(){C(o),p(o),r()},p=function(s){s.forEach(d=>{d.querySelector(".menu__name").addEventListener("click",_=>{_.preventDefault(),g(d)})})},r=function(){n.addEventListener("click",()=>{l()})},l=function(){const s=document.querySelector(".menu__item.active");s&&(s.classList.remove("active"),n.classList.remove("active"))},g=function(s){const d=document.querySelector(".menu__item.active");d===s?(s.classList.remove("active"),n.classList.remove("active")):d?(d.classList.remove("active"),s.classList.add("active")):(s.classList.add("active"),n.classList.add("active"))},v=function(s){const d=s.getBoundingClientRect(),_=q.getBoundingClientRect();return d.left-_.left},h=function(s){const d=s.getBoundingClientRect(),_=q.getBoundingClientRect();return d.right-_.left},C=function(s){const d=parseInt(window.getComputedStyle(q).getPropertyValue("padding-left"),10);parseInt(window.getComputedStyle(u).getPropertyValue("padding-left"),10),s.forEach(_=>{const b=_.querySelector(".expand-menu");if(_.classList.contains("menu__item--full")){const L=v(_),y=document.querySelector(".header__content"),f=v(y);b.style.left=`${-(L-f)}px`}else q.offsetWidth-h(b)<d?(_.classList.add("menu__item--right"),_.classList.remove("menu__item--left")):(_.classList.remove("menu__item--right"),_.getAttribute("data-position")==="left"&&_.classList.add("menu__item--left"))})};var init=c,displayExpandMenuItems=p,handleOverlayClick=r,closeMenu=l,toogleMenuItem=g,getElementLeftPosition=v,getElementRightPosition=h,positionMenuItems=C;const o=document.querySelectorAll(".menu__item"),t=document.querySelectorAll(".expand-menu__sub-menu"),u=document.querySelector(".header__menu"),n=document.querySelector(".header__overlay");window.addEventListener("resize",()=>{C(o)}),c(),t&&t.forEach(s=>{s.querySelectorAll(".link--arrow").forEach(_=>{let b=_.dataset.name,L=s.querySelector(".link--arrow[data-name="+b+"]");_.addEventListener("click",()=>{s.querySelector(".link--arrow").classList.remove("active"),_.classList.remove("active"),L.classList.add("active"),$(".expand-menu__sub-item").classList.remove("visible"),$(".expand-menu__sub-item[data-name="+b+"]").classList.add("visible")})})})}const z={speed:200},R=document.querySelectorAll(".awards-section");R&&R.forEach(o=>{const t=o.querySelector(".awards-section__content"),u=t.cloneNode(!0);t.classList.add("primary"),u.classList.add("secondary"),t.parentNode.appendChild(u);const n=t.querySelectorAll(".award-item").length;t.style.setProperty("animation",`awards-section--primary ${n*1e3/z.speed}s linear infinite`),u.style.setProperty("animation",`awards-section--secondary ${n*1e3/z.speed}s linear infinite`)});if(document.querySelector(".contracts-piloted-section-container")){let s=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const i=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${i}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var handleClick=s;const o={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:8,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},t=document.querySelectorAll(".btns-container__first-choice-container__btn"),u=document.querySelector(".btns-container__second-choice-container"),n=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),c=document.querySelectorAll(".filters-container__btns-container__btn"),p=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),r=document.querySelector(".results-container"),l=document.querySelectorAll(".toggle-button"),g=document.querySelectorAll(".card-container, .grid-row-body"),v=document.querySelector(".cards-display-container"),h=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body"),document.querySelector(".distribution-funds-array-section__btn").addEventListener("click",s);const d={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};t.forEach(i=>i.addEventListener("click",()=>_(i))),n.forEach(i=>i.addEventListener("click",()=>b(i))),c.forEach(i=>i.addEventListener("click",()=>L(i))),l.forEach(i=>i.addEventListener("click",()=>S())),g.forEach(i=>i.addEventListener("click",()=>E(i)));const _=i=>{d.secondChoice="",n.forEach(e=>e.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),t.forEach(e=>e.classList.remove("btns-container__first-choice-container__btn--active")),p.forEach(e=>e.classList.add("hidden")),i.classList.add("btns-container__first-choice-container__btn--active"),d.firstChoice=i.getAttribute("data-attr"),u.classList.remove("hidden"),document.querySelector(`.${i.getAttribute("data-attr")}`).classList.remove("hidden"),y()},b=i=>{n.forEach(e=>e.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),d.secondChoice=i.getAttribute("data-attr"),i.classList.add("btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),y()},L=i=>{d.thirdChoice=i.getAttribute("data-attr"),c.forEach(e=>e.classList.remove("filters-container__btns-container__btn--active")),i.classList.add("filters-container__btns-container__btn--active"),y()},y=()=>{d.firstChoice!==""&&d.secondChoice!==""?r.classList.remove("hidden"):r.classList.add("hidden"),h.innerHTML="",v.innerHTML="";const i=o[d.firstChoice][d.secondChoice][d.thirdChoice];i.map(e=>v.innerHTML+=`
            <div class="card-container">
              <div class="card-container__card-header">
                <p class="card-container__card-header__title">${e.title}</p>
                <div class="card-container__card-header__numbers-rating-container">
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===1?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">1</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===2?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">2</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===3?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">3</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===4?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">4</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===5?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">5</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===6?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">6</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===7?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">7</p>
                  </div>
                </div>
              </div>
              <div class="card-container__card-informations">
                <p class="card-container__card-informations__percentage-rate">${e.percentageRate}</p>
                <p class="card-container__card-informations__card-information-text">
                  ${e.informations}
                </p>
                <svg class="card-container__card-informations__logo">
                    <use href="${e.iconUrl}#logo"></use>
                </svg>
              </div>
            </div>
    `),h.innerHTML+=`
                <div class="grid-container">
                  <div class="grid-container__grid-header">
                    <div>
                      <p></p>
                    </div>
                    <div>
                      <p>SRRI</p>
                    </div>
                    <div>
                      <p>YTD</p>
                    </div>
                    <div>
                      <p>N-1</p>
                    </div>
                    <div>
                      <p>Perf. 3ans</p>
                      <p>cumulé</p>
                    </div>
                    <div>
                      <p>Perf. 5ans</p>
                      <p>cumulé</p>
                    </div>
                    <div>
                      <p>Perf.</p>
                      <p>depuis création</p>
                    </div>
                    <div>
                      <p>Volatilité</p>
                      <p>depuis création</p>
                    </div>
                  </div>
                </div>
    `,i.map(e=>h.innerHTML+=`
                <div class="grid-row-body">
                  <div class="grid-row-body__grid-profil-item-container">
                    <h3>${e.title}</h3>
                    <p>Lazard Frère Gestion</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-srri-item-container">
                    <p>${e.srri}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-ytd-item-container">
                    <p>${e.ytd}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-n1-item-container">
                    <p>${e.nOne}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf3year-item-container">
                    <p>${e.perfThreeYears}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf5year-item-container">
                    <p>${e.perfFiveYears}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf-item-container">
                    <p>${e.perf}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-volatility-item-container">
                    <p>${e.volatility}</p>
                  </div>
                </div>
    `),h.innerHTML+=`
        <div class="grid-container-mobile">
          <div class="grid-container-mobile__grid-header">
            <div class="grid-container-mobile__grid-header__whiteLabel">
              <p></p>
            </div>
            <div class="grid-container-mobile__grid-header__items">
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>SRRI</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>YTD</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>N-1</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Perf. 3ans</p>
                        <p>cumulé</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Perf. 5ans</p>
                        <p>cumulé</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Perf.</p>
                        <p>depuis création</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Volatilité</p>
                        <p>depuis création</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
            </div>
          </div>
        </div>
`,i.map(e=>h.innerHTML+=`
              <div class="grid-row-body-mobile">
                <div class="grid-row-body-mobile__grid-profil-label-container">
                  <h3>${e.title}</h3>
                  <p>${e.name}</p>
                </div>
                <div class='grid-row-body-mobile__grid-profil-items-container'>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container grid-row-body-mobile__grid-profil-items-container__item-container--srri">
                        <p>${e.srri}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.ytd}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.nOne}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.perfThreeYears}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.perfFiveYears}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.perf}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.volatility}</p>
                    </div>
                </div>
                
              </div>
  `),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:first-child").forEach(e=>e.addEventListener("click",()=>w("prev"))),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:last-child").forEach(e=>e.addEventListener("click",()=>w("next"))),document.querySelectorAll(".card-container, .grid-row-body").forEach(e=>e.addEventListener("click",()=>E(e)))};let f=0;const w=i=>{i==="prev"&&f!==0?f+=100:i==="prev"&&f===0&&(f=-600,console.log(f)),i==="next"&&f>-600?f-=100:i==="next"&&f<=-600&&(f=0),console.log(`translate(${f}%)`),document.querySelectorAll(".grid-container-mobile__grid-header__items__label-container").forEach(A=>A.style.transform=`translate(${f}%)`),document.querySelectorAll(".grid-row-body-mobile__grid-profil-items-container__item-container").forEach(A=>A.style.transform=`translate(${f}%)`)},S=i=>{l.forEach(e=>{e.classList.toggle("toggle-button--active")}),x()},E=i=>{x(),document.querySelectorAll(".card-container, .grid-row-body").forEach(e=>e.classList.remove("card-container--active")),i.classList.add("card-container--active")},x=()=>{l.forEach(i=>{i.classList.contains("btn-parameter1")&&i.classList.contains("toggle-button--active")?v.classList.remove("hidden"):i.classList.contains("btn-parameter1")&&!i.classList.contains("toggle-button--active")&&v.classList.add("hidden"),i.classList.contains("btn-parameter2")&&i.classList.contains("toggle-button--active")?h.classList.remove("hidden"):i.classList.contains("btn-parameter2")&&!i.classList.contains("toggle-button--active")&&h.classList.add("hidden")})}}if(document.querySelector(".contracts-support-section-container")){const o={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},t={firstChoice:"",secondChoice:"",thirdChoice:""},u=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),n=document.querySelector(".support-btns-container__second-choice-container"),c=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),p=document.querySelector(".btns-third-choice-container"),r=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),l=document.querySelectorAll(".btns-third-choice-container__btn"),g=document.querySelectorAll(".account-unit-container__btns-container__btn"),v=document.querySelector(".euro-fund-container"),h=document.querySelector(".growth-fund-container"),C=document.querySelector(".euro-fund-container__netissima-container"),s=document.querySelector(".growth-container"),d=document.querySelectorAll(".grid-row-body"),_=document.querySelector(".structured-fund-container"),b=document.querySelector(".account-unit-container"),L=document.querySelector(".tunnel-array-container"),y=document.querySelector(".euro-fund-container__cards-container"),f=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container"),document.querySelector(".array-container"),u.forEach(a=>a.addEventListener("click",()=>w(a))),r.forEach(a=>a.addEventListener("click",()=>S(a))),l.forEach(a=>a.addEventListener("click",()=>E(a))),g.forEach(a=>a.addEventListener("click",()=>x(a))),f.forEach(a=>a.addEventListener("click",()=>i(a))),d.forEach(a=>a.addEventListener("click",()=>setActiveRow(a)));const w=a=>{u.forEach(m=>m.classList.remove("support-btns-container__first-choice-container__btn--active")),r.forEach(m=>m.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),l.forEach(m=>m.classList.remove("btns-third-choice-container__btn--active")),v.classList.add("hidden"),b.classList.add("hidden"),h.classList.add("hidden"),p.classList.add("hidden"),a.classList.add("support-btns-container__first-choice-container__btn--active"),n.classList.remove("hidden"),c.forEach(m=>m.classList.add("hidden")),t.secondChoice="",t.thirdChoice="",t.firstChoice=a.getAttribute("data-attr"),n.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${a.getAttribute("data-attr")}`).classList.remove("hidden"),e()},S=a=>{l.forEach(m=>m.classList.remove("btns-third-choice-container__btn--active")),p.classList.add("hidden"),v.classList.add("hidden"),b.classList.add("hidden"),h.classList.add("hidden"),r.forEach(m=>m.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),t.secondChoice=a.getAttribute("data-attr"),a.classList.add("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),p.classList.remove("hidden"),e(),A()},E=a=>{t.thirdChoice=a.getAttribute("data-attr"),l.forEach(m=>m.classList.remove("btns-third-choice-container__btn--active")),a.classList.add("btns-third-choice-container__btn--active"),P(a.getAttribute("data-attr")),A()},x=a=>{g.forEach(m=>m.classList.remove("account-unit-container__btns-container__btn--active")),a.classList.add("account-unit-container__btns-container__btn--active"),a.getAttribute("data-attr")!=="structured-funds"?(L.classList.remove("hidden"),_.classList.add("hidden")):(L.classList.add("hidden"),_.classList.remove("hidden"))},i=a=>{document.querySelectorAll(".support-card-container").forEach(m=>m.classList.remove("support-card-container--active")),a.classList.add("support-card-container--active"),a.getAttribute("data-attr")==="Netissima"?C.classList.remove("hidden"):C.classList.add("hidden"),a.getAttribute("data-attr")==="growth-netissima"?s.classList.remove("hidden"):s.classList.add("hidden")},e=()=>{t.firstChoice==="assuranceVie"&&t.secondChoice==="altaprofitsVie"||t.firstChoice==="capitalisation"&&t.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),t.firstChoice!=="planEpargneRetraite"&&t.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},P=a=>{a==="euro"?(v.classList.remove("hidden"),A()):v.classList.add("hidden"),a==="growth"?h.classList.remove("hidden"):h.classList.add("hidden"),a==="unit"?b.classList.remove("hidden"):b.classList.add("hidden")},A=()=>{y.innerHTML="";const a=o[t.firstChoice][t.secondChoice][t.thirdChoice];a==null||a.map(m=>y.innerHTML+=`
    <div class="support-card-container" data-attr="${m.title}">
      <div class="support-card-container__card-header">
        <p class="support-card-container__card-header__title">${m.title}</p>
      </div>
      <div class="support-card-container__informations">
        <p class="support-card-container__informations__percentage-rate">${m.percentageRate}</p>
        <p class="support-card-container__informations__information-text">${m.informations}</p>
        
        <svg class="card-container__card-informations__logo">
          <use href="${m.iconUrl}#logo"></use>
        </svg>
      </div>
    </div>
  `),document.querySelectorAll(".support-card-container").forEach(m=>m.addEventListener("click",()=>i(m)))}}if(document.querySelector(".alta-news-talking-about-container")){let p=function(r){n.forEach(l=>{l.getAttribute("data-attr")===r&&l.classList.add("activePage")}),c.innerHTML="",o.slice((r-1)*4,r*4).forEach(l=>c.innerHTML+=`
        <div class="alta-news-talking-about-container__left-container__card">
        <div
        class="alta-news-talking-about-container__left-container__card__logo-container"
        >
            <img src="${l.logoUrl}" alt="logo">
        </div>
        <div
        class="alta-news-talking-about-container__left-container__card__informations-container"
        >
            <p>${l.date}</p>
            <h3><span class="alta-news-talking-about-container__left-container__card__informations-container__underline">${l.title}</h3></span>
            <p>${l.description}</p>
        </div>
    </div>  
`)};var displayNews=p;const o=[{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"21 Juin 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"2 Juin 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"15 Mai 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"10 Mai 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"26 Avril 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"31 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"11 Mars 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"10 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"22 Février 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"12 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"10 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"9 Janvier 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"}],t=document.querySelector(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"),u=Math.ceil(o.length/4);t.innerHTML="";for(let r=1;r<=u;r++)t.innerHTML+=`
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${r===1?"activePage":""}' data-attr="${r}" >${r}</p>
        `;const n=document.querySelectorAll(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn");n.forEach(r=>r.addEventListener("click",l=>{n.forEach(g=>g.classList.remove("activePage")),p(l.target.getAttribute("data-attr"))}));const c=document.querySelector(".alta-news-talking-about-container__left-container__news-container");p(1)}if(document.querySelector(".experts-voice-section")){let p=function(l){n.forEach(g=>{g.getAttribute("data-attr")===l&&g.classList.add("active")}),c.innerHTML="",o.slice((l-1)*3,l*3).forEach(g=>c.innerHTML+=`
        <a class="article-card article-card--horizontal article-card--large" href="#">
            <img class="article-card__image" src="/assets/images/article_default.jpg">
            <div class="article-card__content">
                <p class="article-card__date">Publié le <span>${g.date}</span></p>
                <div class="article-card__title">
                    <h5 class="link">${g.title}</h5>
                </div>
                <p class="article-card__excerpt">${g.description}</p>
                <p class="article-card__author">${g.author}</p>
            </div>
        </a>
`)};var displayNews=p;const o=[{date:"13 novembre 2022",title:"Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",description:"Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. ",author:"Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi",logoUrl:"/assets/images/parole-d-expert.png"},{date:"21 novembre 2022",title:"SCPI : en quoi l’immobilier en région est source d’opportunités ?",description:"Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises constituent des zones d’investissement recherchées pour les investisseurs en quête de rendement et de diversification.",author:"Par <b>Jean-Marie Souclier</b>, Président chez Sogenial",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"}],t=document.querySelector(".experts-voice-section__pagination"),u=Math.ceil(o.length/3);t.innerHTML="";for(let l=1;l<=u;l++)t.innerHTML+=`
        <p class='experts-voice-section__page ${l===1?"active":""}' data-attr="${l}" >${l}</p>
        `;const n=document.querySelectorAll(".experts-voice-section__page");n.forEach(l=>l.addEventListener("click",g=>{n.forEach(v=>v.classList.remove("active")),p(g.target.getAttribute("data-attr"))}));const c=document.querySelector(".experts-voice-section__content");p(1)}if(document.querySelector(".questions-container")){let u=function(c){this.nextElementSibling.style.maxHeight?(this.nextElementSibling.style.maxHeight="",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="+",this.nextElementSibling.style.opacity="0",this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`):(this.lastElementChild.style.transform="rotate(0deg)",this.style.backgroundColor="",this.style.color="")):(this.nextElementSibling.style.maxHeight=`${this.nextElementSibling.scrollHeight}px`,this.nextElementSibling.style.opacity="1",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="-",setTimeout(()=>{this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`},200)):(this.lastElementChild.style.transform="rotate(-180deg)",console.dir(this),this.style.backgroundColor="#002853",this.style.color="#F7FAFD"))};var handleClick=u;const o=document.querySelectorAll(".accordion-container__accordion-btn");document.querySelectorAll(".accordion-container__content__question-container__question").forEach(c=>c.addEventListener("click",u)),o.forEach(c=>c.addEventListener("click",u))}if(document.querySelector(".history-section")){let p=function(){let r=0;window.screen.width<1280?r=(u.length-1)*-100:r=(u.length-4)*-100,this.classList.contains("history-section__cards-section__right-arrow")&&c>r?c-=100:this.classList.contains("history-section__cards-section__right-arrow")&&c<=r?c=0:this.classList.contains("history-section__cards-section__left-arrow")&&c<0?c+=100:this.classList.contains("history-section__cards-section__left-arrow")&&c===0&&(c=r),u.forEach(l=>l.style.transform=`translateX(${c}%)`)};var handleArrowClick=p;const o=[{year:"1999",description:`Création d’Altaprofits S.A.
    <b>1er courtier en ligne spécialisé en assurance vie en France</b>`},{year:"2000",description:"Création et développement de sa propre plate-forme technologique"},{year:"2000",description:"Création et développement de son robo-advisor"},{year:"2000",description:"Le 1er contrat d’assurance vie en ligne sans frais supplémentaire"},{year:"2001",description:`Altaprofits reçoit un label ANVAR (Agence Nationale pour la Valorisation de la Recherche
      devenue Oséo) pour la création du premier « front-office (finance) de gestion de contrats
      d’assurance vie online » et le développement de son robo-advisor, deux outils qu’ANVAR
      considère comme les plus avancés <br/> <b>Altaprofits.com</b>`},{year:"2001",description:`Le 1er contrat d’assurance vie en ligne sans frais supplémentaire et le 1er robo-advisor
    (algorithme d’allocation d’actifs en OPCVM, basé sur la théorie moderne du portefeuille développé par Harry Markowitz, 
      prix Nobel en 1990, avec William Sharpe et Merton Miller),  sont <b>mis à disposition du grand public</b> <br/> 
      <b>Altaprofits Vie</b> <br/> <b>Fédération Continentale / Groupe Generali France</b><br/> <b>Asset Allocator</b>`},{year:"2006",description:"1ère Gestion Pilotée <br/> <b>Lazard Frères Gestion</b>"},{year:"2009",description:"Les obligations en direct pour les particuliers dans un contrat d’assurance vie"},{year:"2011",description:"1er contrat d’assurance vie proposant des titres vifs en direct & 1er contrat d’assurance vie multi-poches <br/> <b>Titres@Vie</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2015",description:"1er contrat d’assurance vie 100 % digital<br/>Signature électronique <br/> <b>Digital Vie</b><br/> <b>Suravenir</b>"},{year:"2015",description:"1er contrat d’assurance vie de droit luxembourgeois accessible sur Internet et à tarifs négociés <br/> <b>Generali Espace Lux Vie</b><br/> <b>Generali Luxembourg</b>"},{year:"2020",description:`Naissance d’un acteur majeur en gestion de Patrimoine sur Internet
    Altaprofits, standard du marché de l’assurance vie en ligne, et Cosevad, spécialisé dans la vente Directe en assurance vie et conseil en gestion de patrimoine, réalisent leur fusion 
    <br/> <b>Altaprofits</b><br/> <b>Société de Conseil en Gestion de Patrimoine sur Internet</b>
    `},{year:"2020",description:"1er Plan Épargne Retraite (PER) 100 % numérique <br/> <b>Titres@PER</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2020",description:"Proposition de parts de SCPI de rendement en direct accessibles aux investisseurs particuliers"},{year:"2022",description:"Enrichissement des contrats historiques d’assurance vie et de capitalisation "},{year:"2022",description:" Contrats « nouvelle génération » (accessibilité à un fonds croissance, à des ETF, abaissement du seuil d’accès aux actions européennes du SBF 120 et de l’Euro Stoxx 50)"},{year:"2022",description:"Intégration d’une nouvelle gestion pilotée associant gestion indicielle (ETF) et gestion thématique <br/> <b>Altaprofits Vie & Altaprofits Capitalisation</b><br/> <b>Generali Vie</b><br/> <b>Generali Wealth Solutions</b>"}];o.reverse();const t=document.querySelector(".history-section__cards-section__cards");o.forEach(r=>{t.innerHTML+=`
    <div class="history-section__cards-section__cards__card">
      <div class="history-section__cards-section__cards__card__header">
        <h3>${r.year}</h3>
      </div>
      <div class="history-section__cards-section__cards__card__body">
        <p>
          ${r.description}
        </p>
      </div>
    </div>
  `});const u=document.querySelectorAll(".history-section__cards-section__cards__card");document.querySelectorAll(".history-section__cards-section__right-arrow, .history-section__cards-section__left-arrow").forEach(r=>r.addEventListener("click",p));let c=0}if(document.querySelector(".discover-our-job")){let c=function(){let r=0;r=(t.length-1)*-100,this.classList.contains("discover-our-job__card-section__right-arrow")&&n>r?n-=100:this.classList.contains("discover-our-job__card-section__right-arrow")&&n<=r?n=0:this.classList.contains("discover-our-job__card-section__left-arrow")&&n<0?n+=100:this.classList.contains("discover-our-job__card-section__left-arrow")&&n===0&&(n=r),t.forEach(l=>l.style.transform=`translateX(${n}%)`)};var handleArrowClick=c;[{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"}].forEach(r=>{document.querySelector(".discover-our-job__card-section__cards").innerHTML+=`
  <div class="discover-our-job__card-section__cards__card">
  <div class="discover-our-job__card-section__cards__card__text-container">
    <div class="discover-our-job__card-section__cards__card__text-container__title">
      <h3>${r.name}</h3>
      <p>${r.job}</p>
    </div>
    <div class="discover-our-job__card-section__cards__card__text-container__description">
      ${r.description}
    </div>
    <div class="discover-our-job__card-section__cards__card__profile-container">
    <img src="${r.photoUrl}" alt="">
  </div>
  </div>
  
</div>
  `}),document.querySelector(".discover-our-job__card-section__cards");const t=document.querySelectorAll(".discover-our-job__card-section__cards__card");document.querySelectorAll(".discover-our-job__card-section__right-arrow, .discover-our-job__card-section__left-arrow").forEach(r=>r.addEventListener("click",c));let n=0}if(document.querySelector(".join-the-team-section")){let t=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const n=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${n}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var handleClick=t;document.querySelectorAll(".join-the-team-section__offer-container__offer-btn").forEach(n=>n.addEventListener("click",t))}document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".piloted-graph-section")){let v=function(){l.innerHTML="",g.forEach(L=>L.classList.remove("piloted-graph-section__btns-container__btn--active")),this.classList.add("piloted-graph-section__btns-container__btn--active");const s=this.getAttribute("data-attr"),d=o[s][o[s].length-2].percentage,_=o[0][s].condition,b=document.querySelector(".piloted-graph-section__conditions p");switch(b.textContent=_,o[s].forEach((L,y)=>{if(y===3)return;const f=L.percentage*100/d;l.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph piloted-graph-section__graph-container__bar-container__bar-graph--${y}"

      >
        ${L.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${L.description}
      </div>
    </div>`;const w=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${y}`);w.style.maxHeight="0",w.style.opacity="0",setTimeout(()=>{const S=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${y}`);S.style.maxHeight=`${f}%`,S.style.opacity="1",h(S,L.percentage,500)},10)}),s){case"0":b.textContent=o[0][3].conditions;break;case"1":b.textContent=o[1][3].conditions;break;case"2":b.textContent=o[2][3].conditions;break}},h=function(s,d,_){const y=_/10;let f=0;const w=(d-0)/y;function S(){f+=w,f>=d?s.textContent=`${d} %`:(s.textContent=`${f.toFixed(1)} %`,setTimeout(S,10))}S()};var t=v,u=h;const n=[[{titre:"Sur 3 ans",percentage:3.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3",condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 3 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{titre:"Sur 5 ans",percentage:8.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4",active:!0,condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{titre:"depuis l'origine",percentage:11.9,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5",condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : performances des profils depuis l’origine de 2006 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{conditions:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 3 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."}],[{percentage:5.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{percentage:9.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4"},{percentage:15.8,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"},{conditions:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."}],[{percentage:7.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{percentage:10.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4"},{percentage:16.9,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"},{conditions:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : performances des profils depuis l’origine de 2006 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."}]],c=JSON.stringify(n),p=document.querySelector(".piloted-graph-section__btns-container");if(p.hasAttribute("data-content")){const s=JSON.parse(p.getAttribute("data-content").replace(/\\r\\n/g,""));var o=JSON.parse(s)}else{p.setAttribute("data-content",c);var o=n}let r=o[0];const l=document.querySelector(".piloted-graph-section__graph-container");p.innerHTML="",r.forEach((s,d)=>{if(d===3)return;let _=s.active==1?"piloted-graph-section__btns-container__btn--active":"";p.innerHTML+='<div class="piloted-graph-section__btns-container__btn '+_+'" data-attr="'+d+'">'+s.titre+"</div>"}),document.querySelector(".piloted-graph-section__conditions p");const g=document.querySelectorAll(".piloted-graph-section__btns-container__btn");g.forEach((s,d)=>{d!==3&&(s.innerHTML=o[0][d].titre)}),g.forEach(s=>s.addEventListener("click",v));const C=o[1][o[1].length-2].percentage;o[1].forEach((s,d)=>{if(d===3)return;const _=s.percentage*100/C;l.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph"
        style="max-height: ${_}%"
      >
        ${s.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${s.description}
      </div>
    </div>
        `})}});
