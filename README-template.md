# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Is there a way to the dispatch to be executed right after the shortLink fetched? what I did is, I added a setTimeout of 200ms so that it have time to get the link before dispacthing.

any tips will help...

```js
async function fetchLink(link) {
  try {
    const res = await fetch(` https://api.shrtco.de/v2/shorten?url=${link}`);
    const data = await res.json();
    const shortLink = await data.result.short_link;

    setTimeout(() => {
      dispatchLinks({
        type: "addLink",
        payload: { shortLink: shortLink, longLink: link },
      });
    }, 200);
  } catch (error) {
    console.log(error);
  }
}
```

### Continued development

I want to improvein the area of fetchig API and react rendering. Rendering is so confusing.

### Useful resources

- [fontawesome](https://fontawesome.com/) - This helped me for have an svg to my solutio reason. I really liked this pattern and will use it going forward.

## Author

- Website - [Silver_Dave_Ramos](I don't have any site yet, but I want to build my Portfolio when I am good enough both codig and designing, maybe after 1 more month of practice)
- Frontend Mentor - [@zxilverHub](https://www.frontendmentor.io/profile/zxilverHub)

## Acknowledgments

I used and ask chatGPT for debugging. But majority of the code is doe by me, and I am happy with it.
