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
 Q.queryAll('div').get(1) // returns first div element
 Q.queryAll('div').get(2) /// returns second div element
 ```

 >Q.id
 ```html
 <input id="username" type="text" />

```
```javascript
Q.id('username').get() /// returns input element
```

>Q.className
```html
<div class="first-container"></div>
<div class="second-container"></div>
```
```javascript
Q.className('first-container').get() /// returns first container element
Q.className('second-container').get() /// returns second container
```
>Q.tagName
```html
<div class="first-container"></div>
<div class="second-container"></div>
```
```javascript
Q.tagName('div').get() /// returns array of div elements
Q.tagName('div').get(1) /// returns first container element
Q.tagName('div').get(2) /// returns second container
```

>Q.attr
```html
<div data-title="first">first div</div>
<div data-title="second">second div</div>

```
```javascript
Q.attr('data-title').get() /// returns array of elements which have data-title attribute
Q.attr('data-title').get(1) /// returns first div
Q.attr('data-title').get(2) /// returns second div
Q.attr('data-title','first').get() /// returns the element which have data-title attribute and 'first' as value (first div element)
Q.attr('data-title','second').get() /// returns the element which have data-title attribute and 'second' as value (second div)

```
