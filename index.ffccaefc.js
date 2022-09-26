const t=t=>{let e=null;return new Promise((n=>{e=setTimeout((()=>{n()}),t)})).finally((()=>{clearTimeout(e),e=null}))},e=async(e,n)=>{for(let u=0;u<=n;u++)e.innerText=u,await t(30)};(()=>{const t=document.getElementById("cafes-count"),n=document.getElementById("trucks-count"),u=t.dataset.cafesCount,c=n.dataset.truckCount;e(t,u).then((()=>{e(n,c)}))})();
//# sourceMappingURL=index.ffccaefc.js.map
