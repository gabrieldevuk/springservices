  (function(){
    var oldLog = console.log;
    console.log = function (message) {
        document.getElementById('a').value += message
        oldLog.apply(arguments);
    };
})();

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
var textarea = document.getElementById('a')
if (navigator.userAgent.indexOf('Mobile') !== -1) { document.getElementById('save').style.display = "none"; textarea.style.height = "100px";
}//resize for mobile
function generate() {
var triesPerSecond = document.getElementById('speed').value //self explanatory
console.log("\n")
getGiftCode = function () {
    let code = '';
    let code1 = '';
    let code2 = '';
    let code3 = '';
    let code4 = '';
  
    let dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 5; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    for(var i = 0; i < 5; i++){
        code1 = code1 + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    for(var i = 0; i < 5; i++){
        code2 = code2 + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    for(var i = 0; i < 5; i++){
        code3 = code3 + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    for(var i = 0; i < 5; i++){
        code4 = code4 + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    console.log(code + "-" + code1 + "-" + code2 + "-" + code3 + "-" + code4 + "\n");
    document.getElementById('b').value += `${ code }-${ code1 }-${ code2 }-${ code3 }-${ code4 }\n`;

} //generates codes


getGiftCode();
document.getElementById('stop').addEventListener("click", stop); //binds button stop to function stop
function stop() {
  clearInterval(gInterval);
  clearInterval(interval)
} //stop generating and stop console scroll loop
var gInterval = setInterval(() => {getGiftCode();}, (500/triesPerSecond) * 1);
//repeat making codes

function scroll() {
  document.getElementById("a").scrollTop = document.getElementById("a").scrollHeight
}; // auto scroll
var interval = setInterval(scroll, 100) //keep on making "console" scroll
document.getElementById('clear').addEventListener("click", stop);
}

document.getElementById('generate').addEventListener("click", generate);
