if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  } else {
    console.warn('Service Workers are not supported in this browser.');
  }


var Sdata={};
  const firebaseConfig = {
    apiKey: "AIzaSyDt1YfTFmYL889yQrbPWRfsUyh6psiJsbI",
    authDomain: "project-cr-409fb.firebaseapp.com",
    projectId: "project-cr-409fb",
    storageBucket: "project-cr-409fb.appspot.com",
    messagingSenderId: "376536481258",
    appId: "1:376536481258:web:b2616c3c1fe07ec0590693"
  };
  
  const app=firebase.initializeApp(firebaseConfig);
  
  const messaging=app.messaging();
  
  const db=app.firestore();

  // Request permission for notifications
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Permission granted!');
      // Proceed to subscribe
    } else {
      console.log('Permission not granted.');
    }
  });
  
  // Subscribe to topics or FCM tokens (modify as needed)
  messaging.getToken().then((currentToken) => {
    if (currentToken){
      console.log('Device registered with token:', currentToken);
      // Send token to your server for association with users, if needed
    }else{
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err)=>{
    console.error('An error occurred while retrieving token:', err);
    window.location.reload();
  });
  
  // Handle incoming messages directly or redirect to background handler
  messaging.onMessage((payload) => {
    console.log('Message received:', payload);
    // Display notification or handle in service worker, if applicable
  });










const strings={'btnav':`<div style="display:flex;flex-direction:row;position: fixed;bottom: 0;left:0; justify-content:space-around;width: 100%;border-top: 2px solid rgba(0, 0, 0, 0.7);padding: 15 0 10;align-items: center;border-radius:10px;background-color:#ffffff;">
<div onclick="navigate('home')">
    <svg id="home"  width="25" height="30" viewBox="0 0 13 10" fill="black" fill-opacity="0.55" xmlns="http://www.w3.org/2000/svg" >
        <path d="M6.5 -0.00976372L0.536377 5.09961L1.08862 5.65039L1.625 5.19043V9.5H5.6875V5.75H7.3125V9.5H11.375V5.19043L11.9114 5.65039L12.4636 5.09961L6.5 -0.00976372ZM6.5 1.00977L10.5625 4.4961V8.75H8.125V5H4.875V8.75H2.4375V4.4961L6.5 1.00977Z" />
        </svg>                
</div>
<div onclick="navigate('msg')">
    <svg id="msg"  width="20" height="28" viewBox="0 0 13 12" fill="black" fill-opacity="0.55" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.1183 7.78036H10.9478V4.85627C10.9478 3.34994 9.87326 2.07106 8.39464 1.63806C8.36674 0.730526 7.5588 0 6.56898 0H6.53798C5.55909 0 4.7577 0.714431 4.71319 1.60804C3.1792 2.00922 2.05213 3.31352 2.05213 4.85627V7.78036H0.881714V10.5533H4.66225C4.80358 11.3721 5.57375 12 6.49998 12C7.42621 12 8.19637 11.3721 8.3377 10.5533H12.1182V7.78036H12.1183ZM6.53798 0.542523H6.56898C7.18841 0.542523 7.70315 0.964209 7.79397 1.51292C7.62952 1.49194 7.46167 1.48084 7.29107 1.48084H5.70885C5.57594 1.48084 5.44468 1.4876 5.31542 1.50044C5.41197 0.957879 5.92329 0.542523 6.53798 0.542523ZM6.49998 11.4574C5.89896 11.4574 5.39422 11.071 5.26115 10.5532H7.7388C7.60574 11.071 7.101 11.4574 6.49998 11.4574ZM11.5305 10.0107H1.46945V8.32285H2.6399V4.85624C2.6399 3.29417 4.01665 2.02332 5.70889 2.02332H7.29111C8.98335 2.02332 10.3601 3.29417 10.3601 4.85624V8.32285H11.5305V10.0107Z"/>
        </svg>
        
</div>
<div onclick="navigate('tasks')">
    <svg id="tasks"  fill="black" fill-opacity="0.55"  height="20" width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 470.767 470.767" xml:space="preserve">
<g>
   <path d="M362.965,21.384H289.62L286.638,7.99C285.614,3.323,281.467,0,276.685,0h-82.618c-4.782,0-8.913,3.323-9.953,7.99
       l-2.967,13.394h-73.36c-26.835,0-48.654,21.827-48.654,48.662v352.06c0,26.835,21.819,48.662,48.654,48.662h255.179
       c26.835,0,48.67-21.827,48.67-48.662V70.046C411.635,43.211,389.8,21.384,362.965,21.384z M379.831,422.105
       c0,9.295-7.563,16.858-16.866,16.858H107.786c-9.287,0-16.85-7.563-16.85-16.858V70.046c0-9.295,7.563-16.857,16.85-16.857h66.294
       l-1.692,7.609c-0.684,3.02,0.062,6.188,1.988,8.596c1.94,2.415,4.876,3.82,7.965,3.82h106.082c3.091,0,6.026-1.405,7.951-3.82
       c1.942-2.415,2.687-5.575,2.004-8.596l-1.692-7.609h66.279c9.303,0,16.866,7.563,16.866,16.857V422.105z"/>
   <path d="M170.835,188.426h43.249l-10.279-7.019c-14.506-9.899-18.232-29.693-8.325-44.197c9.893-14.489,29.693-18.239,44.197-8.324
       l1.694,1.157v-12.136c0-7.866-6.383-14.248-14.242-14.248h-56.294c-7.857,0-14.24,6.383-14.24,14.248v56.271
       C156.595,182.045,162.978,188.426,170.835,188.426z"/>
   <path d="M303.256,110.313l-49.85,47.194l-22.704-15.49c-7.221-4.962-17.13-3.083-22.099,4.162
       c-4.954,7.251-3.09,17.144,4.178,22.098l33.28,22.727c2.718,1.864,5.839,2.772,8.961,2.772c3.96,0,7.888-1.474,10.933-4.356
       l59.167-56.014c6.382-6.033,6.645-16.104,0.62-22.479C319.686,104.552,309.637,104.28,303.256,110.313z"/>
   <path d="M170.835,297.669H214.1l-10.295-7.027c-14.506-9.901-18.232-29.693-8.325-44.197c9.893-14.498,29.693-18.248,44.197-8.325
       l1.694,1.158v-12.136c0-7.865-6.383-14.248-14.242-14.248h-56.294c-7.857,0-14.24,6.383-14.24,14.248v56.279
       C156.595,291.286,162.978,297.669,170.835,297.669z"/>
   <path d="M303.256,219.555l-49.85,47.186l-22.704-15.49c-7.221-4.97-17.13-3.098-22.099,4.162
       c-4.954,7.253-3.09,17.144,4.178,22.099l33.28,22.727c2.718,1.864,5.839,2.772,8.961,2.772c3.96,0,7.888-1.476,10.933-4.356
       l59.167-56.007c6.382-6.033,6.645-16.096,0.62-22.479C319.686,213.793,309.637,213.529,303.256,219.555z"/>
   <path d="M227.129,322.135h-56.294c-7.857,0-14.24,6.383-14.24,14.248v56.271c0,7.865,6.383,14.248,14.24,14.248h56.294
       c7.859,0,14.242-6.383,14.242-14.248v-56.271C241.371,328.518,234.988,322.135,227.129,322.135z"/>
</g>
</svg>
</div>
<div onclick="navigate('acc')">
    <svg id="acc" class="feather feather-user"  height="28" fill="black" fill-opacity="0.55"  viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"  /><circle cx="12" cy="7" r="4" /></svg> 
</div>
</div>`} 


const bg=['#EC8870','#11B1FB','#F2BDE9','#7EAAFF','#3AD29F']
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 window.addEventListener('load',()=>{
  document.getElementById('btnav').innerHTML=strings['btnav'];
  if(!localStorage.getItem('SMain')){
    window.location.replace("./login.html");
  }
   const curpage=localStorage.getItem('curpage');
   console.log(curpage);
   if(curpage==null || curpage==undefined){
    setbright('home');
   }else{
    setbright(curpage);
    setTimeout(()=>{
      localStorage.setItem('curpage','home');
    },200);
   }
 });

function setbright(x){
    console.log(x);
    document.getElementById(x).setAttribute('fill',"#6066D0");
    document.getElementById(x).setAttribute('fill-opacity',"1");
    const p=['home','msg','tasks','acc'];
    for(let i in p){
        if(p[i]==x){continue}
        document.getElementById(p[i]).setAttribute('fill',"#000000");
        document.getElementById(p[i]).setAttribute('fill-opacity',"0.55");
    }
}

function navigate(x){
    localStorage.setItem('curpage',x);
    const dict={'home':'index','tasks':'tasks','acc':'account','msg':'messages'}
    console.log(dict[x]);
    window.location.replace(`./${dict[x]}.html`);
}



function fetchdata(){
  var uid=localStorage.getItem('uid');
}