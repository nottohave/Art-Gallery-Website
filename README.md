# Frontend Mentor - Art gallery website solution

This is a solution to the [Art gallery website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/art-gallery-website-yVdrZlxyA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Project Blog](#projectblog)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- **Bonus**: Use [Leaflet JS](https://leafletjs.com/) to create an interactive location map with custom location pin - I used Mapbox for the bonus as it is easy, up to date and more simplified to use.

### Screenshot

![preview](./preview.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Live site](https://nottohave.github.io/Art-Gallery-Website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
<section class="invite-message">
  <h3>Come & be inspired</h3>
  <p>We're excited to welcome you to our gallery and see how our collections 
    influence you.
  </p>
</section>  
```
```css
.linear-gradient {
  background-image:
  linear-gradient(to right, white 0 55%, black 55% 100%),
    url(./assets/desktop/image-hero@2x.jpg);
}

.mix-blend-mode-text {
  mix-blend-mode: difference;
  color: var(--white);
}
```
```js
const map = new mapboxgl.Map({
  container: 'map', // container ID
  tilesize: 512,
  style: 'mapbox://styles/mapbox/outdoors-v11', 
  center: [-71.3110000, 41.480265], // center of map
  zoom: 15 // starting zoom
});
```


### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Learn) - I use this when I was confused about certain CSS styles like flex gap and grid column start/end.
- [Mapbox](https://www.mapbox.com/) - Amazing place to get your free map and attach it to your webpage.
- [An intro to Mapbox](https://www.youtube.com/watch?v=xqziMlFkDA0) - follow this tutorial to use mapbox.

## Author

- Github - [nottohave](https://github.com/nottohave)
- Frontend Mentor - [@nottohave](https://www.frontendmentor.io/profile/nottohave)
- Twitter - [@Ubering_Cacti](https://twitter.com/Ubering_Cacti)


## Acknowledgments
[Frontend Mentor Slack](https://www.frontendmentor.io/slack)

## Project Blog


12/26/21
    Begin project, construct html and style files.
    Download the correct fonts.
    Look up solutions to anchor vs button for Location,
    how to navigate to another page by using anchor,
    check to see which elements need to be hovered over.
    
12/27/21
    Construct html files semantically
    Begin styling fonts
    Styling button location and arrow using flexbox
    Found another way to do this without flexbox using after pseudo element but did not go along with it because it is more tiresome and less simplified
    Header is ready to view in mobile screen 375 width

12/28/21
    Construct main body and footer,
    Style text like the design for mobile
    Fix text margin & padding

12/29/21
    Style cover image and reposition them to get the full view of the pictures
    Create 2 new files to make the location webpage. This is to be linked with main page button.
    Construct html semantic for the location webpage.

12/30/21
    Update mobile main page and location page.
    One bug: for some reason, the github location page does not load the styled fonts in the live site. Maybe it just take some time to update. 

12/31/21
    Finished the header for tablet.
    Thinking about how to construct the body using grid.

1/1/22
    Finished the body using grid.
    Begin to contruct the footer.

1/2/22
    Debug footer. It has extra paddings on certain section and div so I took it off and reconstruct it for tablet. It is also easy to control the design in Dekstop mode.
    Update location page in tablet mode.
    I need to consider responsive design because I need to design to flow on my phone. So I need to dig in em and rem for size, padding and minmax.

1/3/22
    Update header for desktop site.
    Small experiement with linear gradient and mix blend mode today.

1/4/22
    Update on desktop mode for the website.
    Everything is static - mean as you increase the screen size, things will stay permanent to the top left. I will find a way to make it responsive. Just atm, to make it responsive meaning to break certain big part down which could affect the smaller components. This is not a great practice, but it can be improved over time. 

    Web is available to see in:
    Mobile 375px
    Tablet 768px
    Desktop: 1400px

1/11/22
    Apply max and min-width to allow content to grow before reaching the break points in mobile and tablet mode. Will touch on desktop mode tomorrow. 

1//12/22
    one major flaw: min and max-width are restricting the design to grow or even cause bug if I don't use carefully. Because I built this project using the old style position absolute and size in pixels. The size of the container remain fixed and static to the top left of the browser. 

    Design fall apart in these screen sizes:
    375px - <768px
    800px - <1400px
    1500px+

1/14/22
    Fix the location page to allow content to grow before breakpoint in tablet and desktop mode.