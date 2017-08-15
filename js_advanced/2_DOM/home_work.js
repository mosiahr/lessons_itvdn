/**
 * Created by mosya on 15.08.17.
 */

window.onload = function () {
    
    var allParagraph = document.getElementById('allParagraph');
    var allLinks = document.getElementById('allLinks');
    var div = document.getElementById('div');


    // Обработка события клика на каждой из кнопок
    allParagraph.onclick = function () {
        var pArr = document.getElementsByTagName("p");

        for (var i = 0; i < pArr.length; i++){
            pArr[i].style.border = "1px solid red";
        }
    }

    allLinks.onclick = function () {
        var linkArr = document.getElementsByTagName("a");

        for (var i = 0; i < linkArr.length; i++) {
            linkArr[i].style.border = "1px solid blue";
        }
    }

    div.onclick = function () {
        var divA = document.getElementById("test_div");
        divA.style.border = "1px solid green";
    }


}