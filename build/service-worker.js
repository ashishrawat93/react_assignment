"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/filterandsort/index.html","82474a118800d830e5de81a976d8984f"],["/filterandsort/static/css/main.ef92a4b5.css","287596073cfde7e512e1de178b46aecc"],["/filterandsort/static/js/main.1d836734.js","b240e46c47968ed767ab326a8d406dff"],["/filterandsort/static/media/affenpinscher-2.559f5c23.jpg","559f5c23a1774225f8fb30067d4b4594"],["/filterandsort/static/media/affenpinscher.58ba7785.58ba7785.jpg","58ba77851901d699f1ba517c5bc789c0"],["/filterandsort/static/media/affenpinscher.58ba7785.jpg","58ba77851901d699f1ba517c5bc789c0"],["/filterandsort/static/media/americaneskimo.1bce5ff3.1bce5ff3.jpg","1bce5ff3f0c6b1b9b228e596d4e85092"],["/filterandsort/static/media/americaneskimo.1bce5ff3.jpg","1bce5ff3f0c6b1b9b228e596d4e85092"],["/filterandsort/static/media/bichon.6d23816e.6d23816e.jpg","6d23816e4b186512d2bf4f93d29fd088"],["/filterandsort/static/media/bichon.6d23816e.jpg","6d23816e4b186512d2bf4f93d29fd088"],["/filterandsort/static/media/bloodhound.c528b741.c528b741.jpg","c528b74158a4e253702ed023a7d4771a"],["/filterandsort/static/media/bloodhound.c528b741.jpg","c528b74158a4e253702ed023a7d4771a"],["/filterandsort/static/media/bulldogblack.2951706a.2951706a.jpg","2951706a892d9b43e166b7158fbf7cd1"],["/filterandsort/static/media/bulldogblack.2951706a.jpg","2951706a892d9b43e166b7158fbf7cd1"],["/filterandsort/static/media/bulldogbrown.0e612708.0e612708.jpg","0e61270833051c02e0a31876af020994"],["/filterandsort/static/media/bulldogbrown.0e612708.jpg","0e61270833051c02e0a31876af020994"],["/filterandsort/static/media/bullmastiff.2c1991fb.2c1991fb.jpg","2c1991fbd88fb48c6a833c9b6c7dd78f"],["/filterandsort/static/media/bullmastiff.2c1991fb.jpg","2c1991fbd88fb48c6a833c9b6c7dd78f"],["/filterandsort/static/media/bullterrier.6a72165c.6a72165c.jpg","6a72165c7ef8ef32125c1b24f9b6a6c8"],["/filterandsort/static/media/bullterrier.6a72165c.jpg","6a72165c7ef8ef32125c1b24f9b6a6c8"],["/filterandsort/static/media/chihuahua-2.a50c53d7.jpg","a50c53d79177e03c5ecc3351ba5a309f"],["/filterandsort/static/media/chihuahua.7c549f67.7c549f67.jpg","7c549f6768e9a61cdc077b05e66a1e3d"],["/filterandsort/static/media/chihuahua.7c549f67.jpg","7c549f6768e9a61cdc077b05e66a1e3d"],["/filterandsort/static/media/corgibrown.193a3abe.193a3abe.jpg","193a3abef10cc422f7c1f07df1141c99"],["/filterandsort/static/media/corgibrown.193a3abe.jpg","193a3abef10cc422f7c1f07df1141c99"],["/filterandsort/static/media/corgiwhite-2.5233cd96.jpg","5233cd9686d66db8f7b29fcaaae34fd4"],["/filterandsort/static/media/corgiwhite.da90b6ee.da90b6ee.jpg","da90b6ee062db31913529b6138b1b6b0"],["/filterandsort/static/media/corgiwhite.da90b6ee.jpg","da90b6ee062db31913529b6138b1b6b0"],["/filterandsort/static/media/dalmation.839bf633.839bf633.jpg","839bf6339f325a76e530352f72742fbf"],["/filterandsort/static/media/dalmation.839bf633.jpg","839bf6339f325a76e530352f72742fbf"],["/filterandsort/static/media/foxterrier.a38e0be3.a38e0be3.jpg","a38e0be3def88e8e149646f43827fcc2"],["/filterandsort/static/media/foxterrier.a38e0be3.jpg","a38e0be3def88e8e149646f43827fcc2"],["/filterandsort/static/media/germanshephard-2.267e2173.jpg","267e217351d0a929056d4facd5e7e546"],["/filterandsort/static/media/germanshephard.6a0c59c0.6a0c59c0.jpg","6a0c59c05b436cc4fc0e5c23c549fe25"],["/filterandsort/static/media/germanshephard.6a0c59c0.jpg","6a0c59c05b436cc4fc0e5c23c549fe25"],["/filterandsort/static/media/goldenretriver.baa3d183.baa3d183.jpg","baa3d183f839bfe42d0a1cc13bec6d7b"],["/filterandsort/static/media/goldenretriver.baa3d183.jpg","baa3d183f839bfe42d0a1cc13bec6d7b"],["/filterandsort/static/media/labradorretriverblack.088910e3.088910e3.jpg","088910e3ecc8667cb964afad3d48888b"],["/filterandsort/static/media/labradorretriverblack.088910e3.jpg","088910e3ecc8667cb964afad3d48888b"],["/filterandsort/static/media/labradorretrivergold.da69619b.da69619b.jpg","da69619bbf8b2ddc41e8fbce359ae87a"],["/filterandsort/static/media/labradorretrivergold.da69619b.jpg","da69619bbf8b2ddc41e8fbce359ae87a"],["/filterandsort/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/filterandsort/static/media/newfoundlandblack.091cb728.091cb728.jpg","091cb728d55be0bdf42f58c631a84c02"],["/filterandsort/static/media/newfoundlandblack.091cb728.jpg","091cb728d55be0bdf42f58c631a84c02"],["/filterandsort/static/media/newfoundlandbrown.65af5760.65af5760.jpg","65af5760bfb2960c71010eeb9a51ba0d"],["/filterandsort/static/media/newfoundlandbrown.65af5760.jpg","65af5760bfb2960c71010eeb9a51ba0d"],["/filterandsort/static/media/pekingese.8a997d4e.8a997d4e.jpg","8a997d4e0787fd50d0d828259b7b7f29"],["/filterandsort/static/media/pekingese.8a997d4e.jpg","8a997d4e0787fd50d0d828259b7b7f29"],["/filterandsort/static/media/pug.94ca1939.94ca1939.jpg","94ca19398bbe6d0c184e94d3659b6200"],["/filterandsort/static/media/pug.94ca1939.jpg","94ca19398bbe6d0c184e94d3659b6200"],["/filterandsort/static/media/rottweiler.0abfb7c2.0abfb7c2.jpg","0abfb7c20f0c16b74f68e5a3917b23cb"],["/filterandsort/static/media/rottweiler.0abfb7c2.jpg","0abfb7c20f0c16b74f68e5a3917b23cb"],["/filterandsort/static/media/shihtzublack.8b381acb.8b381acb.jpg","8b381acb74e610dbc47393deab638e44"],["/filterandsort/static/media/shihtzublack.8b381acb.jpg","8b381acb74e610dbc47393deab638e44"],["/filterandsort/static/media/shihtzuwhite.5a552fe3.5a552fe3.jpg","5a552fe3a015fc55c5022b6520c41dc0"],["/filterandsort/static/media/shihtzuwhite.5a552fe3.jpg","5a552fe3a015fc55c5022b6520c41dc0"],["/filterandsort/static/media/siberianhusky.963456da.963456da.jpg","963456daa8e102bd979c75440dcc3346"],["/filterandsort/static/media/siberianhusky.963456da.jpg","963456daa8e102bd979c75440dcc3346"],["/filterandsort/static/media/welshterrier-2.7560a713.jpg","7560a71347f7cc5b1f5048f410b4e43e"],["/filterandsort/static/media/welshterrier.73a5c3d1.73a5c3d1.jpg","73a5c3d110bef9b3f5e792c4bad4cbbe"],["/filterandsort/static/media/welshterrier.73a5c3d1.jpg","73a5c3d110bef9b3f5e792c4bad4cbbe"],["/filterandsort/static/media/yorkipoo.6a944606.6a944606.jpg","6a944606b1b200be7569866694613ec7"],["/filterandsort/static/media/yorkipoo.6a944606.jpg","6a944606b1b200be7569866694613ec7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),c=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/filterandsort/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});