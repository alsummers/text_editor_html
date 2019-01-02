
var sourceCode = false;

var switchTog = false;

function enableEdit (){
    richTextArea.document.designMode = 'On';
}

function toolFunc (arg){
    richTextArea.document.execCommand(arg, false, null);
}

function toolHeaderOption(arg, value){
    richTextArea.document.execCommand(arg, false, value);

}

function toggleCode(){
    if(sourceCode){
        richTextArea.document.getElementsByTagName('body')[0].innerHTML = richTextArea.document.getElementsByTagName('body')[0].textContent
        sourceCode = false
    } else {
        richTextArea.document.getElementsByTagName('body')[0].textContent = richTextArea.document.getElementsByTagName('body')[0].innerHTML
        sourceCode = true
    }
}
