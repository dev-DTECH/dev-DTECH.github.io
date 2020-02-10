let installButton = document.getElementById("install")
let deferredPrompt;
function saveBeforeInstallPromptEvent(e){
    e.preventDefault();
    deferredPrompt=e;
    installButton.style="right: 10px"
    
    // console.log(e)

}

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
function install(){
    deferredPrompt.prompt();
}