Certainly! The content you posted contains conflict markers (e.g. >>>>>>) from a version control merge. I'll **clean up all the conflict markers** and clearly present the finalized code and project details for all three projects as requested.

# Project 1: JavaScript Background Color Switcher

### HTML

```html


  
    
    
    
    
    
    JavaScript Background Color Switcher
  
  
    
      Home
      Youtube channel
    
    
      Color Scheme Switcher
      
      
      
      
      
        Try clicking on one of the colors above
        to change the background color of this page!
      
    
    
  

```

### CSS

```css
html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
```

### JavaScript

```javascript
console.log("ishu")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

# Project 2: BMI Calculator

### HTML

```html


  
    
    
    
    
    BMI Calculator
  
  
    
      BMI Calculator
      
        
        
        Calculate
      
      
      
        BMI Weight Guide
        Underweight = Less than 18.6
        Normal Range = 18.6 and 24.9
        Overweight = Greater than 24.9
      
    
    
  

```

### CSS

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

### JavaScript

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height ${bmi}`;
  }
});
```

# Project 3: Local Time Clock

### HTML

```html


  
    
    
    
    
    Your Local Time
    
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    
  
  
    
      Home
      Youtube channel
    
    
      Your local time
      
    
    
  

```

### JavaScript

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

✨ **All conflict markers have been removed, and every project code is clean and ready to use! If you need further changes or code explanations, just ask!**

[1] https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html