//generating random color hex value
const randomfunc=function(){
    let hex='0123456ABCDEF';
    let color='#'
    for(let i=0;i<6;i++){
      color=color+hex[Math.floor(Math.random()*16)]
  
    }
    return color;
  
  };
  let inter;
  const start=document.querySelector('.start')
  start.addEventListener('click',function(){
    const myfunc=function(){
      document.body.style.backgroundColor=randomfunc();
  
    }
  
    inter=setInterval(myfunc,2000);
  
  })