const F=document.querySelectorAll(".management-others-card");if(F){let s=0;F.forEach(e=>{const l=e.querySelectorAll(".management-others-card__explaination");for(let i=0;i<l.length;i++){const t=l[i].offsetHeight;t>s&&(s=t)}s>0&&e.querySelector(".management-others-card__explainations").style.setProperty("height",`calc(${s}px + var(--spacing-8))`),e.querySelectorAll(".management-others-card__link").forEach(i=>{let m=i.dataset.name,t=e.querySelector(".management-others-card__explaination[data-name="+m+"]");i.addEventListener("mouseenter",()=>{t.classList.add("active")}),i.addEventListener("mouseleave",()=>{t.classList.remove("active")})})}),window.addEventListener("resize",function(e){const l=document.querySelectorAll(".management-guided-card"),n=document.querySelectorAll(".management-others-card");l.length&&n.length&&l[0].offsetHeight!=n[0].offsetHeight&&(l[0].offsetHeight>n[0].offsetHeight?n[0].style.height=l[0].offsetHeight+"px":l[0].style.height=n[0].offsetHeight+"px")},!0),document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".management-guided-card"),l=document.querySelectorAll(".management-others-card");e.length&&l.length&&e[0].offsetHeight!=l[0].offsetHeight&&(e[0].offsetHeight>l[0].offsetHeight?l[0].style.height=e[0].offsetHeight+"px":e[0].style.height=l[0].offsetHeight+"px")})}const A=document.querySelector(".header");if(A){let i=function(){S(s),m(s),t()},m=function(a){a.forEach(u=>{u.querySelector(".menu__name").addEventListener("click",p=>{p.preventDefault(),g(u)})})},t=function(){n.addEventListener("click",()=>{c()})},c=function(){const a=document.querySelector(".menu__item.active");a&&(a.classList.remove("active"),n.classList.remove("active"))},g=function(a){const u=document.querySelector(".menu__item.active");u===a?(a.classList.remove("active"),n.classList.remove("active")):u?(u.classList.remove("active"),a.classList.add("active")):(a.classList.add("active"),n.classList.add("active"))},_=function(a){const u=a.getBoundingClientRect(),p=A.getBoundingClientRect();return u.left-p.left},f=function(a){const u=a.getBoundingClientRect(),p=A.getBoundingClientRect();return u.right-p.left},S=function(a){const u=parseInt(window.getComputedStyle(A).getPropertyValue("padding-left"),10);parseInt(window.getComputedStyle(l).getPropertyValue("padding-left"),10),a.forEach(p=>{const h=p.querySelector(".expand-menu");if(p.classList.contains("menu__item--full")){const y=_(p),L=document.querySelector(".header__content"),b=_(L);h.style.left=`${-(y-b)}px`}else A.offsetWidth-f(h)<u?(p.classList.add("menu__item--right"),p.classList.remove("menu__item--left")):(p.classList.remove("menu__item--right"),p.getAttribute("data-position")==="left"&&p.classList.add("menu__item--left"))})};var init=i,displayExpandMenuItems=m,handleOverlayClick=t,closeMenu=c,toogleMenuItem=g,getElementLeftPosition=_,getElementRightPosition=f,positionMenuItems=S;const s=document.querySelectorAll(".menu__item"),e=document.querySelectorAll(".expand-menu__sub-menu"),l=document.querySelector(".header__menu"),n=document.querySelector(".header__overlay");window.addEventListener("resize",()=>{S(s)}),i(),e&&e.forEach(a=>{a.querySelectorAll(".link--arrow").forEach(p=>{let h=p.dataset.name,y=a.querySelector(".link--arrow[data-name="+h+"]");p.addEventListener("click",()=>{a.querySelector(".link--arrow").classList.remove("active"),p.classList.remove("active"),y.classList.add("active"),$(".expand-menu__sub-item").classList.remove("visible"),$(".expand-menu__sub-item[data-name="+h+"]").classList.add("visible")})})})}const R={speed:200},z=document.querySelectorAll(".awards-section");z&&z.forEach(s=>{const e=s.querySelector(".awards-section__content"),l=e.cloneNode(!0);e.classList.add("primary"),l.classList.add("secondary"),e.parentNode.appendChild(l);const n=e.querySelectorAll(".award-item").length;e.style.setProperty("animation",`awards-section--primary ${n*1e3/R.speed}s linear infinite`),l.style.setProperty("animation",`awards-section--secondary ${n*1e3/R.speed}s linear infinite`)});if(document.querySelector(".contracts-piloted-section-container")){let a=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const o=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${o}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var M=a;const s={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:8,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},e=document.querySelectorAll(".btns-container__first-choice-container__btn"),l=document.querySelector(".btns-container__second-choice-container"),n=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),i=document.querySelectorAll(".filters-container__btns-container__btn"),m=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),t=document.querySelector(".results-container"),c=document.querySelectorAll(".toggle-button"),g=document.querySelectorAll(".card-container, .grid-row-body"),_=document.querySelector(".cards-display-container"),f=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body"),document.querySelector(".distribution-funds-array-section__btn").addEventListener("click",a);const u={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};e.forEach(o=>o.addEventListener("click",()=>p(o))),n.forEach(o=>o.addEventListener("click",()=>h(o))),i.forEach(o=>o.addEventListener("click",()=>y(o))),c.forEach(o=>o.addEventListener("click",()=>C())),g.forEach(o=>o.addEventListener("click",()=>E(o)));const p=o=>{u.secondChoice="",n.forEach(r=>r.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),e.forEach(r=>r.classList.remove("btns-container__first-choice-container__btn--active")),m.forEach(r=>r.classList.add("hidden")),o.classList.add("btns-container__first-choice-container__btn--active"),u.firstChoice=o.getAttribute("data-attr"),l.classList.remove("hidden"),document.querySelector(`.${o.getAttribute("data-attr")}`).classList.remove("hidden"),L()},h=o=>{n.forEach(r=>r.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),u.secondChoice=o.getAttribute("data-attr"),o.classList.add("btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),L()},y=o=>{u.thirdChoice=o.getAttribute("data-attr"),i.forEach(r=>r.classList.remove("filters-container__btns-container__btn--active")),o.classList.add("filters-container__btns-container__btn--active"),L()},L=()=>{u.firstChoice!==""&&u.secondChoice!==""?t.classList.remove("hidden"):t.classList.add("hidden"),f.innerHTML="",_.innerHTML="";const o=s[u.firstChoice][u.secondChoice][u.thirdChoice];o.map(r=>_.innerHTML+=`
            <div class="card-container">
              <div class="card-container__card-header">
                <p class="card-container__card-header__title">${r.title}</p>
                <div class="card-container__card-header__numbers-rating-container">
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===1?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">1</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===2?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">2</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===3?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">3</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===4?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">4</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===5?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">5</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===6?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">6</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===7?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">7</p>
                  </div>
                </div>
              </div>
              <div class="card-container__card-informations">
                <p class="card-container__card-informations__percentage-rate">${r.percentageRate}</p>
                <p class="card-container__card-informations__card-information-text">
                  ${r.informations}
                </p>
                <svg class="card-container__card-informations__logo">
                    <use href="${r.iconUrl}#logo"></use>
                </svg>
              </div>
            </div>
    `),f.innerHTML+=`
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
    `,o.map(r=>f.innerHTML+=`
                <div class="grid-row-body">
                  <div class="grid-row-body__grid-profil-item-container">
                    <h3>${r.title}</h3>
                    <p>Lazard Frère Gestion</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-srri-item-container">
                    <p>${r.srri}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-ytd-item-container">
                    <p>${r.ytd}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-n1-item-container">
                    <p>${r.nOne}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf3year-item-container">
                    <p>${r.perfThreeYears}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf5year-item-container">
                    <p>${r.perfFiveYears}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf-item-container">
                    <p>${r.perf}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-volatility-item-container">
                    <p>${r.volatility}</p>
                  </div>
                </div>
    `),f.innerHTML+=`
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
`,o.map(r=>f.innerHTML+=`
              <div class="grid-row-body-mobile">
                <div class="grid-row-body-mobile__grid-profil-label-container">
                  <h3>${r.title}</h3>
                  <p>${r.name}</p>
                </div>
                <div class='grid-row-body-mobile__grid-profil-items-container'>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container grid-row-body-mobile__grid-profil-items-container__item-container--srri">
                        <p>${r.srri}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${r.ytd}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${r.nOne}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${r.perfThreeYears}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${r.perfFiveYears}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${r.perf}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${r.volatility}</p>
                    </div>
                </div>
                
              </div>
  `),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:first-child").forEach(r=>r.addEventListener("click",()=>w("prev"))),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:last-child").forEach(r=>r.addEventListener("click",()=>w("next"))),document.querySelectorAll(".card-container, .grid-row-body").forEach(r=>r.addEventListener("click",()=>E(r)))};let b=0;const w=o=>{o==="prev"&&b!==0?b+=100:o==="prev"&&b===0&&(b=-600,console.log(b)),o==="next"&&b>-600?b-=100:o==="next"&&b<=-600&&(b=0),console.log(`translate(${b}%)`),document.querySelectorAll(".grid-container-mobile__grid-header__items__label-container").forEach(q=>q.style.transform=`translate(${b}%)`),document.querySelectorAll(".grid-row-body-mobile__grid-profil-items-container__item-container").forEach(q=>q.style.transform=`translate(${b}%)`)},C=o=>{c.forEach(r=>{r.classList.toggle("toggle-button--active")}),x()},E=o=>{x(),document.querySelectorAll(".card-container, .grid-row-body").forEach(r=>r.classList.remove("card-container--active")),o.classList.add("card-container--active")},x=()=>{c.forEach(o=>{o.classList.contains("btn-parameter1")&&o.classList.contains("toggle-button--active")?_.classList.remove("hidden"):o.classList.contains("btn-parameter1")&&!o.classList.contains("toggle-button--active")&&_.classList.add("hidden"),o.classList.contains("btn-parameter2")&&o.classList.contains("toggle-button--active")?f.classList.remove("hidden"):o.classList.contains("btn-parameter2")&&!o.classList.contains("toggle-button--active")&&f.classList.add("hidden")})}}if(document.querySelector(".contracts-support-section-container")){const s={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},e={firstChoice:"",secondChoice:"",thirdChoice:""},l=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),n=document.querySelector(".support-btns-container__second-choice-container"),i=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),m=document.querySelector(".btns-third-choice-container"),t=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),c=document.querySelectorAll(".btns-third-choice-container__btn"),g=document.querySelectorAll(".account-unit-container__btns-container__btn"),_=document.querySelector(".euro-fund-container"),f=document.querySelector(".growth-fund-container"),S=document.querySelector(".euro-fund-container__netissima-container"),a=document.querySelector(".growth-container"),u=document.querySelectorAll(".grid-row-body"),p=document.querySelector(".structured-fund-container"),h=document.querySelector(".account-unit-container"),y=document.querySelector(".tunnel-array-container"),L=document.querySelector(".euro-fund-container__cards-container"),b=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container"),document.querySelector(".array-container"),l.forEach(d=>d.addEventListener("click",()=>w(d))),t.forEach(d=>d.addEventListener("click",()=>C(d))),c.forEach(d=>d.addEventListener("click",()=>E(d))),g.forEach(d=>d.addEventListener("click",()=>x(d))),b.forEach(d=>d.addEventListener("click",()=>o(d))),u.forEach(d=>d.addEventListener("click",()=>setActiveRow(d)));const w=d=>{l.forEach(v=>v.classList.remove("support-btns-container__first-choice-container__btn--active")),t.forEach(v=>v.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),c.forEach(v=>v.classList.remove("btns-third-choice-container__btn--active")),_.classList.add("hidden"),h.classList.add("hidden"),f.classList.add("hidden"),m.classList.add("hidden"),d.classList.add("support-btns-container__first-choice-container__btn--active"),n.classList.remove("hidden"),i.forEach(v=>v.classList.add("hidden")),e.secondChoice="",e.thirdChoice="",e.firstChoice=d.getAttribute("data-attr"),n.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${d.getAttribute("data-attr")}`).classList.remove("hidden"),r()},C=d=>{c.forEach(v=>v.classList.remove("btns-third-choice-container__btn--active")),m.classList.add("hidden"),_.classList.add("hidden"),h.classList.add("hidden"),f.classList.add("hidden"),t.forEach(v=>v.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),e.secondChoice=d.getAttribute("data-attr"),d.classList.add("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),m.classList.remove("hidden"),r(),q()},E=d=>{e.thirdChoice=d.getAttribute("data-attr"),c.forEach(v=>v.classList.remove("btns-third-choice-container__btn--active")),d.classList.add("btns-third-choice-container__btn--active"),P(d.getAttribute("data-attr")),q()},x=d=>{g.forEach(v=>v.classList.remove("account-unit-container__btns-container__btn--active")),d.classList.add("account-unit-container__btns-container__btn--active"),d.getAttribute("data-attr")!=="structured-funds"?(y.classList.remove("hidden"),p.classList.add("hidden")):(y.classList.add("hidden"),p.classList.remove("hidden"))},o=d=>{document.querySelectorAll(".support-card-container").forEach(v=>v.classList.remove("support-card-container--active")),d.classList.add("support-card-container--active"),d.getAttribute("data-attr")==="Netissima"?S.classList.remove("hidden"):S.classList.add("hidden"),d.getAttribute("data-attr")==="growth-netissima"?a.classList.remove("hidden"):a.classList.add("hidden")},r=()=>{e.firstChoice==="assuranceVie"&&e.secondChoice==="altaprofitsVie"||e.firstChoice==="capitalisation"&&e.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),e.firstChoice!=="planEpargneRetraite"&&e.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},P=d=>{d==="euro"?(_.classList.remove("hidden"),q()):_.classList.add("hidden"),d==="growth"?f.classList.remove("hidden"):f.classList.add("hidden"),d==="unit"?h.classList.remove("hidden"):h.classList.add("hidden")},q=()=>{L.innerHTML="";const d=s[e.firstChoice][e.secondChoice][e.thirdChoice];d==null||d.map(v=>L.innerHTML+=`
    <div class="support-card-container" data-attr="${v.title}">
      <div class="support-card-container__card-header">
        <p class="support-card-container__card-header__title">${v.title}</p>
      </div>
      <div class="support-card-container__informations">
        <p class="support-card-container__informations__percentage-rate">${v.percentageRate}</p>
        <p class="support-card-container__informations__information-text">${v.informations}</p>
        
        <svg class="card-container__card-informations__logo">
          <use href="${v.iconUrl}#logo"></use>
        </svg>
      </div>
    </div>
  `),document.querySelectorAll(".support-card-container").forEach(v=>v.addEventListener("click",()=>o(v)))}}if(document.querySelector(".alta-news-talking-about-container")){let m=function(t){n.forEach(c=>{c.getAttribute("data-attr")===t&&c.classList.add("activePage")}),i.innerHTML="",s.slice((t-1)*4,t*4).forEach(c=>i.innerHTML+=`
        <div class="alta-news-talking-about-container__left-container__card">
        <div
        class="alta-news-talking-about-container__left-container__card__logo-container"
        >
            <img src="${c.logoUrl}" alt="logo">
        </div>
        <div
        class="alta-news-talking-about-container__left-container__card__informations-container"
        >
            <p>${c.date}</p>
            <h3><span class="alta-news-talking-about-container__left-container__card__informations-container__underline">${c.title}</h3></span>
            <p>${c.description}</p>
        </div>
    </div>  
`)};var displayNews=m;const s=[{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"21 Juin 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"2 Juin 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"15 Mai 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"10 Mai 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"26 Avril 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"31 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"11 Mars 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"10 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"22 Février 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"12 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"10 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"9 Janvier 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"}],e=document.querySelector(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"),l=Math.ceil(s.length/4);e.innerHTML="";for(let t=1;t<=l;t++)e.innerHTML+=`
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${t===1?"activePage":""}' data-attr="${t}" >${t}</p>
        `;const n=document.querySelectorAll(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn");n.forEach(t=>t.addEventListener("click",c=>{n.forEach(g=>g.classList.remove("activePage")),m(c.target.getAttribute("data-attr"))}));const i=document.querySelector(".alta-news-talking-about-container__left-container__news-container");m(1)}if(document.querySelector(".experts-voice-section")){let m=function(c){n.forEach(g=>{g.getAttribute("data-attr")===c&&g.classList.add("active")}),i.innerHTML="",s.slice((c-1)*3,c*3).forEach(g=>i.innerHTML+=`
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
`)};var displayNews=m;const s=[{date:"13 novembre 2022",title:"Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",description:"Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. ",author:"Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi",logoUrl:"/assets/images/parole-d-expert.png"},{date:"21 novembre 2022",title:"SCPI : en quoi l’immobilier en région est source d’opportunités ?",description:"Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises constituent des zones d’investissement recherchées pour les investisseurs en quête de rendement et de diversification.",author:"Par <b>Jean-Marie Souclier</b>, Président chez Sogenial",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"}],e=document.querySelector(".experts-voice-section__pagination"),l=Math.ceil(s.length/3);e.innerHTML="";for(let c=1;c<=l;c++)e.innerHTML+=`
        <p class='experts-voice-section__page ${c===1?"active":""}' data-attr="${c}" >${c}</p>
        `;const n=document.querySelectorAll(".experts-voice-section__page");n.forEach(c=>c.addEventListener("click",g=>{n.forEach(_=>_.classList.remove("active")),m(g.target.getAttribute("data-attr"))}));const i=document.querySelector(".experts-voice-section__content");m(1)}if(document.querySelector(".questions-container")){let l=function(i){this.nextElementSibling.style.maxHeight?(this.nextElementSibling.style.maxHeight="",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="+",this.nextElementSibling.style.opacity="0",this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`):(this.lastElementChild.style.transform="rotate(0deg)",this.style.backgroundColor="",this.style.color="")):(this.nextElementSibling.style.maxHeight=`${this.nextElementSibling.scrollHeight}px`,this.nextElementSibling.style.opacity="1",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="-",setTimeout(()=>{this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`},200)):(this.lastElementChild.style.transform="rotate(-180deg)",console.dir(this),this.style.backgroundColor="#002853",this.style.color="#F7FAFD"))};var M=l;const s=document.querySelectorAll(".accordion-container__accordion-btn");document.querySelectorAll(".accordion-container__content__question-container__question").forEach(i=>i.addEventListener("click",l)),s.forEach(i=>i.addEventListener("click",l))}if(document.querySelector(".history-section")){let m=function(){let t=0;window.screen.width<1280?t=(l.length-1)*-100:t=(l.length-4)*-100,this.classList.contains("history-section__cards-section__right-arrow")&&i>t?i-=100:this.classList.contains("history-section__cards-section__right-arrow")&&i<=t?i=0:this.classList.contains("history-section__cards-section__left-arrow")&&i<0?i+=100:this.classList.contains("history-section__cards-section__left-arrow")&&i===0&&(i=t),l.forEach(c=>c.style.transform=`translateX(${i}%)`)};var handleArrowClick=m;const s=[{year:"1999",description:`Création d’Altaprofits S.A.
    <b>1er courtier en ligne spécialisé en assurance vie en France</b>`},{year:"2000",description:"Création et développement de sa propre plate-forme technologique"},{year:"2000",description:"Création et développement de son robo-advisor"},{year:"2000",description:"Le 1er contrat d’assurance vie en ligne sans frais supplémentaire"},{year:"2001",description:`Altaprofits reçoit un label ANVAR (Agence Nationale pour la Valorisation de la Recherche
      devenue Oséo) pour la création du premier « front-office (finance) de gestion de contrats
      d’assurance vie online » et le développement de son robo-advisor, deux outils qu’ANVAR
      considère comme les plus avancés <br/> <b>Altaprofits.com</b>`},{year:"2001",description:`Le 1er contrat d’assurance vie en ligne sans frais supplémentaire et le 1er robo-advisor
    (algorithme d’allocation d’actifs en OPCVM, basé sur la théorie moderne du portefeuille développé par Harry Markowitz, 
      prix Nobel en 1990, avec William Sharpe et Merton Miller),  sont <b>mis à disposition du grand public</b> <br/> 
      <b>Altaprofits Vie</b> <br/> <b>Fédération Continentale / Groupe Generali France</b><br/> <b>Asset Allocator</b>`},{year:"2006",description:"1ère Gestion Pilotée <br/> <b>Lazard Frères Gestion</b>"},{year:"2009",description:"Les obligations en direct pour les particuliers dans un contrat d’assurance vie"},{year:"2011",description:"1er contrat d’assurance vie proposant des titres vifs en direct & 1er contrat d’assurance vie multi-poches <br/> <b>Titres@Vie</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2015",description:"1er contrat d’assurance vie 100 % digital<br/>Signature électronique <br/> <b>Digital Vie</b><br/> <b>Suravenir</b>"},{year:"2015",description:"1er contrat d’assurance vie de droit luxembourgeois accessible sur Internet et à tarifs négociés <br/> <b>Generali Espace Lux Vie</b><br/> <b>Generali Luxembourg</b>"},{year:"2020",description:`Naissance d’un acteur majeur en gestion de Patrimoine sur Internet
    Altaprofits, standard du marché de l’assurance vie en ligne, et Cosevad, spécialisé dans la vente Directe en assurance vie et conseil en gestion de patrimoine, réalisent leur fusion 
    <br/> <b>Altaprofits</b><br/> <b>Société de Conseil en Gestion de Patrimoine sur Internet</b>
    `},{year:"2020",description:"1er Plan Épargne Retraite (PER) 100 % numérique <br/> <b>Titres@PER</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2020",description:"Proposition de parts de SCPI de rendement en direct accessibles aux investisseurs particuliers"},{year:"2022",description:"Enrichissement des contrats historiques d’assurance vie et de capitalisation "},{year:"2022",description:" Contrats « nouvelle génération » (accessibilité à un fonds croissance, à des ETF, abaissement du seuil d’accès aux actions européennes du SBF 120 et de l’Euro Stoxx 50)"},{year:"2022",description:"Intégration d’une nouvelle gestion pilotée associant gestion indicielle (ETF) et gestion thématique <br/> <b>Altaprofits Vie & Altaprofits Capitalisation</b><br/> <b>Generali Vie</b><br/> <b>Generali Wealth Solutions</b>"}];s.reverse();const e=document.querySelector(".history-section__cards-section__cards");s.forEach(t=>{e.innerHTML+=`
    <div class="history-section__cards-section__cards__card">
      <div class="history-section__cards-section__cards__card__header">
        <h3>${t.year}</h3>
      </div>
      <div class="history-section__cards-section__cards__card__body">
        <p>
          ${t.description}
        </p>
      </div>
    </div>
  `});const l=document.querySelectorAll(".history-section__cards-section__cards__card");document.querySelectorAll(".history-section__cards-section__right-arrow, .history-section__cards-section__left-arrow").forEach(t=>t.addEventListener("click",m));let i=0}if(document.querySelector(".discover-our-job")){let i=function(){let t=0;t=(e.length-1)*-100,this.classList.contains("discover-our-job__card-section__right-arrow")&&n>t?n-=100:this.classList.contains("discover-our-job__card-section__right-arrow")&&n<=t?n=0:this.classList.contains("discover-our-job__card-section__left-arrow")&&n<0?n+=100:this.classList.contains("discover-our-job__card-section__left-arrow")&&n===0&&(n=t),e.forEach(c=>c.style.transform=`translateX(${n}%)`)};var handleArrowClick=i;[{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"}].forEach(t=>{document.querySelector(".discover-our-job__card-section__cards").innerHTML+=`
  <div class="discover-our-job__card-section__cards__card">
  <div class="discover-our-job__card-section__cards__card__text-container">
    <div class="discover-our-job__card-section__cards__card__text-container__title">
      <h3>${t.name}</h3>
      <p>${t.job}</p>
    </div>
    <div class="discover-our-job__card-section__cards__card__text-container__description">
      ${t.description}
    </div>
    <div class="discover-our-job__card-section__cards__card__profile-container">
    <img src="${t.photoUrl}" alt="">
  </div>
  </div>
  
</div>
  `}),document.querySelector(".discover-our-job__card-section__cards");const e=document.querySelectorAll(".discover-our-job__card-section__cards__card");document.querySelectorAll(".discover-our-job__card-section__right-arrow, .discover-our-job__card-section__left-arrow").forEach(t=>t.addEventListener("click",i));let n=0}if(document.querySelector(".join-the-team-section")){let e=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const n=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${n}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var M=e;document.querySelectorAll(".join-the-team-section__offer-container__offer-btn").forEach(n=>n.addEventListener("click",e))}document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".piloted-graph-section")){let _=function(){c.innerHTML="",g.forEach(y=>y.classList.remove("piloted-graph-section__btns-container__btn--active")),this.classList.add("piloted-graph-section__btns-container__btn--active");const a=this.getAttribute("data-attr"),u=s[a][s[a].length-2].percentage,p=s[0][a].condition,h=document.querySelector(".piloted-graph-section__conditions p");switch(h.textContent=p,s[a].forEach((y,L)=>{if(L===3)return;const b=y.percentage*100/u;c.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph piloted-graph-section__graph-container__bar-container__bar-graph--${L}"

      >
        ${y.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${y.description}
      </div>
    </div>`;const w=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${L}`);w.style.maxHeight="0",w.style.opacity="0",setTimeout(()=>{const C=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${L}`);C.style.maxHeight=`${b}%`,C.style.opacity="1",f(C,y.percentage,500)},10)}),a){case"0":h.textContent=s[0][3].conditions;break;case"1":h.textContent=s[1][3].conditions;break;case"2":h.textContent=s[2][3].conditions;break}},f=function(a,u,p){const L=p/10;let b=0;const w=(u-0)/L;function C(){b+=w,b>=u?a.textContent=`${u} %`:(a.textContent=`${b.toFixed(1)} %`,setTimeout(C,10))}C()};var e=_,l=f;const n=[[{titre:"Sur 3 ans",percentage:3.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3",condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 3 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{titre:"Sur 5 ans",percentage:8.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4",active:!0,condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{titre:"depuis l'origine",percentage:11.9,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5",condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : performances des profils depuis l’origine de 2006 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{conditions:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 3 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."}],[{percentage:5.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{percentage:9.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4"},{percentage:15.8,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"},{conditions:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."}],[{percentage:7.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{percentage:10.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4"},{percentage:16.9,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"},{conditions:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : performances des profils depuis l’origine de 2006 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."}]],i=JSON.stringify(n),m=document.querySelector(".piloted-graph-section__btns-container");if(m.hasAttribute("data-content")){const a=JSON.parse(m.getAttribute("data-content").replace(/\\r\\n/g,""));var s=JSON.parse(a)}else{m.setAttribute("data-content",i);var s=n}let t=s[0];const c=document.querySelector(".piloted-graph-section__graph-container");m.innerHTML="",t.forEach((a,u)=>{if(u===3)return;let p=a.active==1?"piloted-graph-section__btns-container__btn--active":"";m.innerHTML+='<div class="piloted-graph-section__btns-container__btn '+p+'" data-attr="'+u+'">'+a.titre+"</div>"}),document.querySelector(".piloted-graph-section__conditions p");const g=document.querySelectorAll(".piloted-graph-section__btns-container__btn");g.forEach((a,u)=>{u!==3&&(a.innerHTML=s[0][u].titre)}),g.forEach(a=>a.addEventListener("click",_));const S=s[1][s[1].length-2].percentage;s[1].forEach((a,u)=>{if(u===3)return;const p=a.percentage*100/S;c.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph"
        style="max-height: ${p}%"
      >
        ${a.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${a.description}
      </div>
    </div>
        `})}});if(document.querySelector(".capital-calculator-section")){let t=function(){let _=l.valueAsNumber;const f=i.valueAsNumber,S=m.valueAsNumber/100,a=n.valueAsNumber;for(let p=0;p<f;p++)for(let h=0;h<12;h++){const y=S*_;_+=y*(1/12)+a}_=Math.round(_/1e3)*1e3,_.toString().split("").splice(-3,0," "),c(s,_,500)},c=function(_,f,S){const p=S/10;let h=0;const y=(f-0)/p;function L(){h+=y,h>=f?_.textContent=`${g(f)} €`:(_.textContent=`${g(h.toFixed(0))} €`,setTimeout(L,10))}L()},g=function(_){return _.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};var calculateResult=t,animateNumber=c,numberWithSpaces=g;const s=document.querySelector(".capital-calculator-section__result-value"),e=document.querySelectorAll(".capital-calculator-section__cursors-container__cursor-container input"),l=document.querySelector("#first-range"),n=document.querySelector("#second-range"),i=document.querySelector("#third-range"),m=document.querySelector("#fourth-range");e.forEach(_=>_.addEventListener("input",function(){const f=(this.value-this.min)/(this.max-this.min)*100,S=_.value.split("");S.splice(-3,0," "),(_.name="first-range")&&(_.labels[0].textContent=`${S.join("")} ${_.getAttribute("data-attr")}`),this.style.background=`linear-gradient(to right, #ff6442 0%, #ff6442 ${f}%, #fbe1da ${f}%, #fbe1da 100%)`,t()})),t()}const T=document.querySelectorAll(".promo-banner-section");T.forEach(s=>{s.querySelector(".promo-banner-section__items-section__items");const e=s.querySelectorAll(".promo-banner-section__items-section__items__item"),l=s.querySelector(".promo-banner-section__items-section__left-arrow"),n=s.querySelector(".promo-banner-section__items-section__right-arrow");let i=0;e.length>1&&(n.style.display="block",l.style.display="block",n.addEventListener("click",()=>{i=(i+1)%e.length,m(i)},{passive:!0}),l.addEventListener("click",()=>{i=(i-1+e.length)%e.length,m(i)},{passive:!0}));function m(t){e.forEach(c=>{c.style.transform=`translateX(-${t*100}%)`})}m(i)});const Y={initialInvestissement:1e5,selectedBtns:["France","Europe","Commerces"]};document.querySelector(".scpi-selector__selectors-container__resultsCards");const U=document.querySelectorAll(".scpi-selector__selectors-container__sectoralCategory__btns-container__btn, .scpi-selector__selectors-container__geographicalArea__btns-container__btn"),G=document.querySelector(".scpi-selector__selectors-container__initial-investissement-container input");document.querySelector(".scpi-selector__selectors-container__initial-investissement-container label");G.addEventListener("input",handleInputRange);U.forEach(s=>s.addEventListener("click",e=>M(e,Y.selectedBtns)));
