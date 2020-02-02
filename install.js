let deferredPromt
function saveBeforeInstallPromptEvent(e){
    e.preventDefault();
    deferredPromt=e;

}

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
function install(){
    deferredPromt.prompt();
    deferredPromt.userChoiceice.then((choiceResult)=>{
        deferredPromt=null;
    })
}