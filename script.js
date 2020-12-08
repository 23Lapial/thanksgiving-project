ctx = document.getElementById("myCanvas").getContext("2d");

var availableColors = new Array("#000300", "#ff0000", "#00ff00", "#0000ff", "#feff04", "#fed202");
var drawSize = 25
var currentColor = 0;

function drawSquare(color, x, y, w=drawSize, h=drawSize) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}

function getX(event) {
    return event.clientX;
}

function getY(event) {
    return event.clientY;
}

function getColor(change=false) {
    if (currentColor >= availableColors.length-1) {
        currentColor=0;
    } else if (change) {
        currentColor++;
    }
    console.log(currentColor,availableColors[currentColor]);
    return availableColors[currentColor];
}

var coordPairs = new Array;

document.body.onmousedown = function() {
    var x = getX(event); var y = getY(event);
    coordPairs.push(x, y,drawSize, `"${availableColors[currentColor]}"`);
    drawSquare(availableColors[currentColor], x-325, y-25, drawSize, drawSize);
}
document.body.onmouseup = function() {
    copyToClipboard("["+coordPairs+"]");

}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        drawSize++;
    }
    else if (e.keyCode == '40') {
        drawSize--;
    }
    else if (e.keyCode == '13') {
       getColor(change=true)
    }
}

const copyToClipboard = (function initClipboardText() {
    const textarea = document.createElement('textarea');
  
    // Move it off-screen.
    textarea.style.cssText = 'position: absolute; left: -99999em';
  
    // Set to readonly to prevent mobile devices opening a keyboard when
    // text is .select()'ed.
    textarea.setAttribute('readonly', true);
  
    document.body.appendChild(textarea);
  
    return function setClipboardText(text) {
      textarea.value = text;
  
      // Check if there is any content selected previously.
      const selected = document.getSelection().rangeCount > 0 ?
        document.getSelection().getRangeAt(0) : false;
  
      // iOS Safari blocks programmatic execCommand copying normally, without this hack.
      // https://stackoverflow.com/questions/34045777/copy-to-clipboard-using-javascript-in-ios
      if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        const editable = textarea.contentEditable;
        textarea.contentEditable = true;
        const range = document.createRange();
        range.selectNodeContents(textarea);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        textarea.setSelectionRange(0, 999999);
        textarea.contentEditable = editable;
      }
      else {
        textarea.select();
      }
  
      try {
        const result = document.execCommand('copy');
  
        // Restore previous selection.
        if (selected) {
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(selected);
        }
  
        return result;
      }
      catch (err) {
        console.error(err);
        return false;
      }
    };
  })();
