'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3eb69679dbfb77587a156315ababc394",
"index.html": "f08670cd79ad766aedb6864cac1abb80",
"/": "f08670cd79ad766aedb6864cac1abb80",
"main.dart.js": "42a61fe9583cfe1aa51d9b95e80f9ea9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6db227b2013bdce1d53900b9eb96062a",
"assets/images/update_icon.png": "e3fbc9691cd10dd3b95108387552a467",
"assets/images/shopillustration.png": "cec74dc4b668096523e7124ff22da57f",
"assets/images/splashscreen.png": "e569cde468e3e704d58a6c3ccc69a51e",
"assets/images/empty_cart.PNG": "abcf348f190a94139300a1ea94c103d7",
"assets/images/plogout.png": "555552233ab3878d4d65a06ad97af13d",
"assets/images/refund.png": "93ce342570fc0b49bc8b9959df74dd9b",
"assets/images/home_location.png": "93263403970eb1e228e0ed881d7d6f2a",
"assets/images/AppStoreLogo.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/images/login.png": "a27ef2928d027d755da546d4f3ea708f",
"assets/images/trendingitems.png": "85c7cdd6c1c32e0f8c88be2feb462a57",
"assets/images/terms.png": "35f41af597b1b655148cf8694b9a654c",
"assets/images/order.png": "6b3ca5e9d315b5e234272354249fc795",
"assets/images/flower.gif": "bdd57d2b4ad342e1e6f8a09a98cb7595",
"assets/images/banner2.jpg": "2c94049015178ab655a32d5facd0b320",
"assets/images/restaurantscreen.png": "01ed87b826ddb7317a3ed05cc3ca3529",
"assets/images/item.jpeg": "b433e74efda1e1e333730cf9051d510a",
"assets/images/locate.gif": "db315932e95727997df1a39008a269ac",
"assets/images/pcall_2.png": "2748be05c359637d3dcdd1ed09a8da20",
"assets/images/banner3.jpg": "78592caad31d13f06ed5f6b04d516eed",
"assets/images/banner1.jpg": "794cd7593c0c45c8f1befcc2f8fff08b",
"assets/images/otp.png": "d11078f51be9c6e837571b9d541e087a",
"assets/images/mapbg.jpg": "5a8f582d07efde687b0c96fd9bc2d7de",
"assets/images/Shop.png": "73e1a5050c5c77e01e6ae61b00331a56",
"assets/images/arrow.png": "6482ec5aaa00234144453a46f1c92b14",
"assets/images/badidukkan_square.png": "603847c4411c70ee6225d6f4cd0beaf3",
"assets/images/pemail.png": "81638723081e9c370f6a5270e66e648c",
"assets/images/button.gif": "23b6093225caf477e3526348f2881170",
"assets/images/nodata.png": "6be23602cb175bc0b35b3d76361995e2",
"assets/images/menu.png": "43c6bac641c6501bf6fd5d6072e01043",
"assets/images/logo.png": "d1fbaf2c190ec2698b26a2876290eba2",
"assets/images/new.png": "d30a6abba6817def9713c98ea4366af6",
"assets/images/GooglePlayIcon.png": "c839494c32c39975f3c77801fed4c268",
"assets/images/badidukkan_round.png": "5a6ef50d09e3de73064c9f55e6166999",
"assets/images/OrderC.png": "8c12688e1bc246c981d9a4cb01de6685",
"assets/images/preorderscreen.png": "0940dca87779073c4a365690ec606017",
"assets/images/vendor_location.png": "06a9766c5f0bfe9cf86e3f88cacb11b4",
"assets/images/no_order.png": "a85aceeeae96f4e19e0ac55d1adba020",
"assets/images/vendor_call.png": "fb2e058dbed5d026f69348db33af21f5",
"assets/images/pcontactus.png": "35f8dd02f56d5a2f18dc1a31090306f3",
"assets/images/percent.png": "80a6a1f93b21cbc326c4eab837590ef8",
"assets/images/like.gif": "6c2072959351e76df889473fbaa96b7c",
"assets/images/res.png": "c809811911b9d6876ee0173f155302d7",
"assets/AssetManifest.json": "1571d1a16ba6b319dc59010486131fe2",
"assets/NOTICES": "49c5d49747bf2c270120eede3f3ce723",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "de264d69ce1e1fc780f77296cce0c3ef",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2bcb9f86eafd5da60697774cde8d1823",
"assets/fonts/MaterialIcons-Regular.otf": "2f7cff5a8a63b5e452c96c4454a241c4",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
