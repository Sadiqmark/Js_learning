# project related to dom

# project link
[click here!!]
(https://stackblitz.com/edit/stackblitz-starters-axgegp?description=HTML/CSS/JS%20Starter&file=index.html,1-colorchanger%2Findex.html,1-colorchanger%2Fstyle.css,1-colorchanger%2Fcolorchanger.js,script.js&terminalHeight=10&title=Static%20Starter)

# solution code

# project-1 [color changer]

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

# project- 3 [BMI calculator]
# HTML
``` HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <form action="" class="myform"> 
        <p>
          <label for="weight">Weight in KG:</label>
          <input type="text" id="weight" />
        </p>
        <p>
          <label for="height">Height in CM:</label>
          <input type="text" id="height" />
        </p>
        <button class="cal">Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
    <script src="bmi.js"></script>
  </body>
</html>

```
# css
```css
.container {
  width: 575px;
  height: 825px;

  background-color: #797978;
  padding-left: 30px;
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
  
}

```
# Javascript
``` javascript
let form=document.querySelector(".myform")  

form.addEventListener('submit', function(e){
  e.preventDefault();

  let height=parseInt(document.querySelector("#height").value);
  let weight=parseInt(document.querySelector("#weight").value);
  let result=document.querySelector("#results")

  if(height===" " || height<0 || isNaN(height))
  {
    let finalval=document.createTextNode("Plz give a valid height")
    result.appendChild(finalval)
  }
  else if(weight===" " || weight<0 || isNaN(weight)){
    let finalval2=document.createTextNode("plz give valid weight")
    result.appendChild(finalval2)
  }
  else{
    let finalresult=(weight / ((height*height)/10000)).toFixed(2)
    let finval3=document.createTextNode(finalresult)
    // result.appendChild(finval3)
    // result.innerHTML=`<span>${finalresult}</span>`
    if(finalresult<18.6){
      result.innerHTML=`your weight ${finalresult} is Under weight`
    }
    else if(finalresult>=18.6 && finval3 <24.9){
      result.innerHTML=`your weight ${finalresult} is Normal weight`
  
    }
    else{
      result.innerHTML=`your weight ${finalresult} is Over weight`
    }
  }

  

})


```
# project - login form with error message
# HTML 
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
      padding:0%;
      margin:0%;
      box-sizing:border-box;
    }
    body{
      background-color:skyblue;
    }
    .log{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      height: 100vh;
      gap:2rem;
    }
    form {
       /* Occupy full height of parent container */
      width: 300px; /* Occupy full width of parent container */
    }
    .form{
      display:flex;
      flex-direction:column;
      gap:1rem;
      align-items:center;

    }
    .user{
      display:flex;
      /* flex-direction:column; */
      gap:0.8rem;
    }
    .pass{
      display:flex;
      gap:0.8rem;
    }
    .submit{
      width:70px;
      height:30px;
    }


  </style>
</head>
<body>
  <div class="log">
    <form action="" class="form">
      <div class="user">
        <label for="username" id="myuser">Username</label>
        <input type="text" class="username" id="username">
        </br>
        <!-- <p class="errormsg1"></p> -->
      </div>
      <div class="pass">
        <label for="password" id="mypass">Password</label>
        <input type="password" class="password" id="password">
        <!-- <p class="errormsg2"></p> -->
      </div>
      <button type="submit" class="submit">Submit</button>
      <div class="error"></div>
      


    
    </form>
   

  </div>
  <script src="login.js"></script>
</body>
</html>

```
# javascript
``` javascript
// login.js
document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.querySelector('.username');
  const passwordInput = document.querySelector('.password');
  const form = document.querySelector('.form');
  const submit=document.querySelector('.submit');
  const errorMsg1 = document.querySelector('.error');
  // const errorMsg2 = document.querySelector('.errormsg2');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check if username is empty
    if (usernameInput.value.trim() === '' && passwordInput.value.trim() === '') {
      errorMsg1.textContent = 'Please enter username and password';
      // return;
      // usernameInput.style.border = '1px solid red'; // Optionally, change border color
      usernameInput.style.border='1px solid red'
      passwordInput.style.border='1px solid red'
    }
  
    else if(usernameInput.value.trim() === '') {
      errorMsg1.textContent = 'Please enter a username.';
      usernameInput.style.border='1px solid red'
       // Stop further processing
    }

    // Check if password is empty
    else if(passwordInput.value.trim() === '') {
      errorMsg1.textContent = 'Please enter a password.';
      passwordInput.style.border='1px solid red'
      // Stop further processing
    }

    // Clear error message if both fields are filled
    else{
      // Add your logic for form submission here
      console.log('Form submitted successfully!');
      function clearForm() {
        form.reset();
        // Clear any error messages
        errorMsg1.textContent = '';
        usernameInput.style.border = '';
        passwordInput.style.border = '';
      }
    
      // Example usage:
      // Assuming you have a button or some other trigger to clear the form
      // Here, I'll use a button with the class "clear-button"
      submit.addEventListener('click', clearForm);

    }


  });
  
});

```
# project - background color change
# html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="conatiner">
    <h1 class="head">Start should change the background color randomly</h1>
    <button class="start">start</button>
    <button class="end">End</button>
  </div>
  <script src="random.js"></script>

  
</body>
</html>
```
```javascript
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

  inter=setInterval(myfunc,1000);

})
const stop=document.querySelector('.end')
stop.addEventListener('click',function(){
  clearInterval(inter);
})
```


