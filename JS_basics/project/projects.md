# project related to dom

# project link
(https://stackblitz.com/edit/stackblitz-starters-axgegp?description=HTML/CSS/JS%20Starter&file=index.html,1-colorchanger%2Findex.html,1-colorchanger%2Fstyle.css,1-colorchanger%2Fcolorchanger.js,script.js&terminalHeight=10&title=Static%20Starter)

# solution code

# project-1

```javascript
let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');
buttons.forEach(function (items) {
  items.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    let target = e.target.id;
    switch (target) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

//using if statment
//     // if(e.target.id==='grey')
//     // {
//     //   body.style.backgroundColor=e.target.id
//     // }
//     // if(e.target.id==='yellow')
//     // {
//     //   body.style.backgroundColor=e.target.id
//     // }
//     // if(e.target.id==='blue')
//     // {
//     //   body.style.backgroundColor=e.target.id
//     // }
//     // if(e.target.id==='white')
//     // {
//     //   body.style.backgroundColor=e.target.id
//     // }
//   });
// });

// using seprate function to every button

// let greybutton=document.querySelector('#grey')
// let body=document.querySelector('body')
// greybutton.addEventListener('click', function (e){
//   if(e.target.id==='grey'){
//     body.style.backgroundColor=e.target.id
//   }
// })
// let whitebutton=document.querySelector('#white')
// let body=document.querySelector('body')
// whitebutton.addEventListener('click', function (e){
//   if(e.target.id==='white'){
//     body.style.backgroundColor=e.target.id
//   }
// })
// let bluebutton=document.querySelector('#blue')
// let body=document.querySelector('body')
// bluebutton.addEventListener('click', function (e){
//   if(e.target.id==='blue'){
//     body.style.backgroundColor=e.target.id
//   }
// })
// let yellowbutton = document.querySelector('#yellow');
// let body = document.querySelector('body');
// yellowbutton.addEventListener('click', function (e) {
//   if (e.target.id === 'yellow') {
//     body.style.backgroundColor = e.target.id;
//   }
// })



```