if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js')
                .then((registration) => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch((error) => {
                    console.error('Service Worker registration failed:', error);
                });
        }


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
    console.log(e);
    });


const installApp = document.getElementById('inst');
var relatedApps;
installApp.addEventListener('click', async () => {
    if (deferredPrompt != null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            installApp.textContent="Installing...";
            deferredPrompt = null;
    }
    }
    else{
        alert('App alreay installed');
    }
});
