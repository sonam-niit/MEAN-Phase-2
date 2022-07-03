const { async } = require("rxjs");

const OFFLINE_VERSION=1;
const CACHE_NAME = "offline";
//you can customize you url from here
const OFFLINE_URL= "index.html";

self.addEventListener("install",(event)=>{
    event.waitUntil((async()=>{
        const cache = await caches.open(CACHE_NAME);
        await cache.add(new Request(OFFLINE_URL,{cache:'reload'}))
    })());
});

self.addEventListener("activate",(event)=>{
    event.waitUntil((async()=>{
        if('navigationPreload' in self.registration){
            await self.registration.navigationPreload.enable();
        }
    })());

    self.clients.claim();
})

self.addEventListener("fetch",(event)=>{
    if(event.request.mode==='navigate'){
        event.respondWith((async()=>{
            try{
                const preloadResponse = await event.preloadResponse;
                if(preloadResponse){
                    return preloadResponse;
                }
                const networkResponse = await fetch(event.request);
                return networkResponse;
            }
            catch(error){
                console.log("Error while fetching offline page returning",error);
                const cache= await caches.open(CACHE_NAME);
                const catcheResponse=await cache.match(OFFLINE_URL);
                return catcheResponse;
            }
        })())
    }
})