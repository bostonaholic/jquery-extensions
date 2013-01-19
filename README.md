# jquery-extensions

a compilation of commonly used jquery extensions I use

#### actsAsMailTo

safer mailto links

html:

``` html
<span rel="email">tom [at] domain [dot] com</span>
```

javascript:

``` javascript
$('[rel=email]').actsAsMailTo()
```

#### actsAsSlideshow

easy photo slideshows

html:

``` html
<div id="slideshow_photos">
  <img src="/images/lolcat.jpg"/>
  <img src="/images/cheezburger.jpg"/>
  <img src="/images/roflcopter.jpg"/>
</div>
```

javascript:

``` javascript
$('#slideshow_photos').actsAsSlideshow()
```
