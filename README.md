# Q.js a lightweight js library for DOM manipulation
<div>
<img src="./letter-q.png" style="width:100px;margin:auto"/>
  
  <a href="https://www.flaticon.com/free-icons/q-letter" title="faq icons">Q letter icons created by Freepik - Flaticon</a>
</div>

## Get Started
> Q.query
```html
<div>
  <input type="text" />
</div>
```
```javascript
Q.query('input').get() /// returns input element
// Note query returns the first element
```
> Q.queryAll
 ```html
 <div>first div</div>
 <div>second div</div>
 ```
 ```javascript
 Q.queryAll('div').get() /// returns all div elements first div + second div
 Q.queryAll('div').get(1) / returns first div element
 Q.queryAll('div').get(2) /// returns second div element
 let firstDiv 
 ```
