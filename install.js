let deferredPromt
function saveBeforeInstallPromptEvent(e){
    e.preventDefault();
    deferredPromt=e;

}

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
function install(){
    deferredPromt.prompt();
    deferredPromt.userChoice.then((choiceResult)=>{
        deferredPromt=null;
    })
}