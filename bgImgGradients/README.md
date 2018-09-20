# Background Image with line gradients
you can use color selector to change the colors of line gradients
or you can press random button to change color with random colors

HTMl:
```script
<div class="gradientDiv"> // Background line gradients
  <div class="backgroundImg"> //Add background Image here
  </div>
  <div class="inner">
    ... //other contents
  </div>
</div>
```

P.S For cover the Image to linear gradient

#### Keys:
  1.Using CSS {position: absolute} property to put Image on the (div class="gradientDiv").<br>
  2.setting the {z-index} property.

Using Color selector:
<input type="color" id="color1" value="#ff0000">

Using linear gradients:
<CSS>
background : linear-gradient(0deg, rgba(44, 44, 44, .2), rgba(224, 23, 3, .6))
