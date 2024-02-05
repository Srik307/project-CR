// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDt1YfTFmYL889yQrbPWRfsUyh6psiJsbI",
  authDomain: "project-cr-409fb.firebaseapp.com",
  projectId: "project-cr-409fb",
  storageBucket: "project-cr-409fb.appspot.com",
  messagingSenderId: "376536481258",
  appId: "1:376536481258:web:b2616c3c1fe07ec0590693"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/log.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


const CACHE_NAME = 'my-pwa-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/account.html',
  '/tasks.html',
  '/messages.html',
  '/manifest.json',
  '/log.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});







