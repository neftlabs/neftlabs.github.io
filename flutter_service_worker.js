'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "d7139b74b260cf5790717e5170b2a169",
"/": "d7139b74b260cf5790717e5170b2a169",
"CNAME": "d8c22aca5c0581044eae8e80c9a54a77",
"_config.yml": "932865e374757d33e321eeb2d5e88b6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/lib/assets/logoPix.png": "d5cc25536a20d900855ee31d10ec0b04",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4cf3d2aa51abba8aab054095e15c054e",
"assets/AssetManifest.json": "d377541c5bd697a2e1ca35c74fd0064e",
".git/config": "cadb511086527042246d7a0fc870edeb",
".git/refs/heads/main": "62245f2516116b285fef94b1d2380608",
".git/refs/remotes/origin/main": "12fc4d184b177f0c5bbac7fa2f4d2a33",
".git/objects/71/b2c0ba03069f77fcfe2ca6586b2a9762869d91": "cfbacb3de3a87907d5bc90555f7c3a59",
".git/objects/03/3ea6dc0ba427e2b79dd6d4080dc0648ac5861e": "0b06d49c83e791ff4c4eba100d17d764",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/c7/418817439b2f071c93a4a6cee831e996123c0b": "a973381dec3e0988db3e91122a03c303",
".git/objects/eb/46d846be6c5ba7c64501ca439ea37f8d283247": "0d734945b8eafb4be1900ed50f21e1d0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/95/7f3cc613047ee7faf7a06806d813d7e4ba8e4f": "0c395387941abd0bd2acf454369fbc40",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b7/388450e3273c679bb5d428564ffb298163281e": "542ffff38287023aabb2fed2a26d076f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/81/8507bd337aa3f854b816a629f9e46d8a96b13f": "8eb5d7fac0e31884e9422c4bee13b9c7",
".git/objects/ca/cdd9dcea496c7966cb10c8b6ad654528c605fd": "29ca7d9368d353276be64aa45471205c",
".git/objects/9c/8b4f84b52f6b09e6e6e00fea1cf19dc9d1cd6b": "f49001231808acba1bc4d34dd9397ad1",
".git/objects/fe/29752243fbd84dc84fb88aba907326271c2ca7": "8652a355927c5d801a1d95072ede2865",
".git/objects/27/91580adba33886e200c451144c0a51f967a81f": "873eaf212f8db11731ed311b66183305",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/f06d3e52de00db44717a1fd1734ec477b9a57d": "6c97fc08c31f735b181866cab36a7900",
".git/objects/bf/fba50f3c7caa72a40941a427844c22d522bfae": "ee24eb4653a4a1eb76cfc42f4d2cfb46",
".git/objects/f8/a522084c23e7758e28118154d9742378c2a642": "56a9acaa9422e72a9a9846dcc80c16d7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/dd/6477fbf1aa743ed7ae9431537c8f83b5add562": "e3c75e4dcd1fc405caaffe5e45921444",
".git/objects/aa/45eb71c03ed6d7b9b4e5d5a4cf4bbc9f48185e": "15618cd6b29f6c72785e3ba924aafea6",
".git/objects/00/c9a22d2961ba741810abba4781b99a512234f9": "bd72e992100f1b17e8de8def4d46f2e8",
".git/objects/e9/a50410511f0b126f0125389ca5b46c374fb1eb": "4332cc50edc3441e1e393d9208e215d1",
".git/objects/f5/1d70c7a5830dadf70c1e423af73d3769c458c5": "b49a98aa377d21e04266319964fea410",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/4be9e45a7a59e3df9c279e814a974159da196e": "586bb276457cebe6326fa2fb233c8ef8",
".git/objects/ab/ea7853cf05f80ea8065b998839f381ee2bde77": "a85b3eaa7e1f430f26ad96937e53a7d5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/10/90b21c3bb44bf98a30643486413e29421cc97d": "35700e57ce05b56afbb13a5c92425f34",
".git/objects/72/0d50e394bff12c5a857a7975f66f26bc333bc8": "74fa624959984b7078c11f9d03ff3b3a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/d7/89ae363c3c0cf27b7269d70608e1c1e213e75e": "dc15e346031451b7e43587208a80b676",
".git/objects/42/b9b5703cdaf61a0fc24323354bf9149c20933c": "5513eb5ac5401a326fa0b8dd020dfe65",
".git/objects/42/9742e7673ffceed69759e54d47ce2a2c41ccce": "e9c93824ef36f3ff985631f641230612",
".git/objects/42/8ac27627d0da163f4fc1b2d7f40033c233393c": "7ef576793bb9d129a70b1b14ca8afe62",
".git/objects/14/2b503d80d0182491b418a40ff95802784969e9": "d59d69de088d0548a3cff56818162b84",
".git/objects/8d/c4fcc57f82ca19496b880af3f84603c2fd3ccb": "a1b9ce581b59ab11a91f09497db11aac",
".git/objects/55/16d3f9ef2f5dd2fa12a97d76e77e467df11724": "9becf2fad74e405d4cb9a7a951e7f7de",
".git/objects/2a/42511d0bec1a1f8ab7062ffe0f1c43bdffd902": "b3e936c9575d23dabfc88ba0da963efd",
".git/objects/1b/183e51c76753158e26ab2714b3708ec205b002": "a58a27bbd1357ab7fc2756d5e4c1d4ed",
".git/objects/12/c83e661df6a123607f99a60d64a9a72142dd5c": "406fbb67e7dccc10bd907f0ad253f21e",
".git/objects/64/207c8a4324c68c5bf08594713077f6411f5aee": "53ad0683176b06fa3c503cf428224864",
".git/objects/80/d41decabe5a095bcfa575c7452625608af6597": "d7810b6face1ea18c17673c6a3888210",
".git/objects/40/6329f1018b2dc1ce7ea58f0baa35a1a1a3bdff": "5d99e0a7002daa38271fb5aca8a8485c",
".git/objects/b6/a907572dc093ce22bc86ce0f9f4802240a68e8": "c133266470e96767238ac4512ff8737e",
".git/objects/06/dfd67457db45615f0e50a0fde72bd593f46f6c": "d5b23f0e6fa0718143740cfb623047f1",
".git/objects/39/acab083c465873b2473bf4ab24cf236c14a44d": "0f7b5cfa98acef992392b064a6dd0eb7",
".git/objects/69/3c4ede02784eb55822825cb4075e5ca2aadcfb": "fbeabcc2218073effb37df455f8297ae",
".git/objects/a6/5bc9be71216c6abe80790cca2977c66c71dba6": "6348d2ad9d718473c1e3eaf7a5a829d2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/73/589dbee1f6fcf4f68ec141c4f3c3d5a87c96ba": "0143a1b7b3a660a2abc86968541421b4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/fc/fbd328df5842da3029f278fc3380a2e9e56ace": "19b50e18b0650fd858100d61c9dc3594",
".git/objects/9d/92d5a9f1fbbea20358000b8fa4f9582e71ad99": "9d549103da364cb2a84ff64e4fc7994c",
".git/objects/5b/6462a23cd94259a61f3edb78caa161969d6d13": "de2a132b036bdca7ef76493445aedd3d",
".git/objects/46/0e082d0d1637cca14c0879974cf12fc1d07ba8": "dc46530747265a8a61fc2412f78e791c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "ac148f6bb0606de88c08470b05b6a812",
".git/ORIG_HEAD": "0f040cbae1860c37ee059aa412c88d41",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/logs/refs/heads/main": "533f3447b7bb311ed68426dccc799e48",
".git/logs/refs/remotes/origin/main": "bf9e44a106289afdf775daa631ec3b08",
".git/logs/HEAD": "bd42286518959c9934ff29b29b16a9f7",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "0c6f2333edea7dd42d127916d2baa952",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "76eb19b14f2e24b7c1e85563a58ea57d",
"manifest.json": "925d6ac685047279fb37e16320ac9be0",
"main.dart.js": "39cd4b2a5fe946873d1f90c3c2d70a93"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
