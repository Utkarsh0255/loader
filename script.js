const content = document.getElementById('percent')
var elem = document.getElementById("percent");
  var count = 1;
  var i = setInterval(()=>{
    if (count >= 100) {
        clearInterval(i);
      } else {
        count++;
        content.innerText=count
      }
  }, 20);
