!function(){function e(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};var t={};function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,n,t){n&&r(e.prototype,n);t&&r(e,t);return e};var a={headers:{"x-api-key":"live_4jedRlAWSRx3jFyMn5M3JGRQ8rFrFURgp3h7GLTPmakUBvLr0FdhVLk6nvXpBVyl"}},c=new(function(){"use strict";function r(){e(n)(this,r)}return e(t)(r,[{key:"fetchBreeds",value:function(){return fetch("https://api.thecatapi.com/v1/breeds",a).then((function(e){return e.json()}))}},{key:"fetchCatByBreed",value:function(e){return fetch("".concat("https://api.thecatapi.com/v1/images/search","?breed_ids=").concat(e),a).then((function(e){return e.json()})).then((function(e){return e[0]}))}}]),r}()),s={breedSelect:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};s.loader.classList.add("js-visible"),c.fetchBreeds().then((function(e){var n;n=e.map((function(e){var n=e.id,t=e.name;return"\n            <option value='".concat(n,"'>").concat(t,"</option>\n        ")})).join(""),s.breedSelect.insertAdjacentHTML("beforeend",n),s.breedSelect.classList.add("js-visible"),s.loader.classList.remove("js-visible")})).catch((function(e){s.loader.classList.remove("js-visible"),s.error.classList.add("js-visible")})),s.breedSelect.addEventListener("change",(function(e){s.loader.classList.add("js-visible"),s.catInfo.classList.remove("js-visible"),s.error.classList.remove("js-visible"),c.fetchCatByBreed(e.currentTarget.value).then((function(e){var n=e.breeds,t=e.url,r=n.map((function(e){var n=e.name,r=e.description,a=e.temperament;return"\n            <div>\n                <img class='cat-image' src='".concat(t,"'>\n            </div>\n            <div>\n                <h2>").concat(n,"</h2>\n                <p>").concat(r,"</p>\n                <p>\n                    <span class='evidance'>Temperament: </span> ").concat(a,"\n                </p>\n            </div>\n            ")})).join("");s.catInfo.innerHTML=r,s.catInfo.classList.add("js-visible"),s.loader.classList.remove("js-visible")})).catch((function(e){console.log("Opps! Some error!",e),s.loader.classList.remove("js-visible"),s.error.classList.add("js-visible")}))}))}();
//# sourceMappingURL=index.8ec04e7f.js.map
