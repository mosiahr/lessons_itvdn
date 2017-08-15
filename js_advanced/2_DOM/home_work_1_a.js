/**
 * Created by mosya on 15.08.17.
 */

var ModuleA = {}

ModuleA.changeAll = function (){
    var arr = document.body.childNodes;
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i].nodeType == 1 && arr[i].nodeName == "P"){
            arr[i].innerHTML = "PARAGRAPH";
        }
    }
}