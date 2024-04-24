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

# Project-2[dark mode]
# html
``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Toggle Button</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body class='body1'>
    <label class="switch">
      <input type="checkbox" class="checkbox" id="black" />
      <span class="slider"></span>
    </label>
    <div class="para">
      <div class="hi">
        Hello all
      </div>
    </div>

    <script src="toggle.js"></script>
  </body>
</html>
```
# css
``` css
/* Hide the default checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Slider styles */
.slider {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: #ccc;
  border-radius: 34px;
  transition: background-color 0.3s;
}

/* Slider handle */
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

/* Toggle effect when checked */
.switch input:checked + .slider {
  background-color: #2196F3;
}

.switch input:checked + .slider:before {
  transform: translateX(26px);
}
.hi{
  text-align: center;
}

```
# js
```javascript
let togglebutton = document.querySelector('.checkbox');
let body = document.querySelector('body');
let font=document.querySelector('.hi')
togglebutton.addEventListener('change', function (e) {
  if (e.target.checked) {
    body.style.backgroundColor = 'black';
    font.style.color='white';

  } else {
    body.style.backgroundColor = 'white';
    font.style.color='black';
  }
});

```