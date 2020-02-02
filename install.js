let deferredPrompt;
function saveBeforeInstallPromptEvent(e){
    e.preventDefault();
    deferredPrompt=e;
    // console.log(e)

}

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
function install(){
    deferredPrompt.prompt();
    deferredPrompt.user.Choice.then((choiceResult)=>{
        // if (choiceResult.outcome === 'accepted') {
        //     console.log('User accepted the A2HS prompt');
        // }
        deferredPrompt=null;
    })
}