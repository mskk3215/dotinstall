'use strict'; //エラーチェックをする際にはエラーが発見しやすくなる

{
  document.querySelector("li").addEventListener("click",e=>{
    if(e.target.nodeName ==="LI"){
      e.target.classList.toggle("done");
    }
  });
}