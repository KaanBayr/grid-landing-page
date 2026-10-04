# Frontend Mentor - Grid landing page solution

This is a solution to the [Grid landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/grid-landing-page). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Open and close the navigation menu at any screen size (optional JavaScript)

### Links

- Solution URL: [github.com/KaanBayr/grid-landing-page](https://github.com/KaanBayr/grid-landing-page)
- Live Site URL: [grid-landing-page-mu.vercel.app](https://grid-landing-page-mu.vercel.app)

## My process

### Built with

- Semantic HTML5 markup (`main`, `nav`, `footer`, `button`, links)
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first responsive layout with a media query
- Vanilla JavaScript for the navigation menu
- Deployed on Vercel

### What I learned

- **Grid and Flexbox work together.** `main` is a two-column grid (hero | stats), `.stats` is a nested 2x2 grid, and every tile is a flex column with a top part (icon and number) and a bottom part (title and text).
- **One line between tiles.** Giving every tile its own border made the shared edges twice as thick. A `1px` grid `gap` over a coloured background draws exactly one line.
- **Browser default margins.** The DevTools showed me that `h1`, `h2` and `p` bring their own margins, which was why my spacing never matched the design.
- **Media queries.** A query is a block of ordinary rules that only applies under a condition. I used `max-width: 900px` to switch the layout to one column and to adjust sizes and spacing on small screens. I found the breakpoint by resizing the page until the two-column layout looked cramped.
- **Hover and focus.** `:hover` is for the mouse, `:focus-visible` is for keyboard users. Only real interactive elements can receive focus, so the menu icon became a `button` and the menu items real links.
- **Measuring a design.** The design files are plain images, so I measured spacing, font sizes and colours from them and checked the colours against the style guide.

### Continued development

- Learn JavaScript properly and rebuild the menu script myself.
- Match the column ratio of the design more closely (the hero is slightly narrower than the stats on desktop).
- Try the optional extensions from the challenge, such as a sliding menu panel and `prefers-reduced-motion`.

### AI Collaboration

I used Claude Code as a mentor while building the page. It guided me with questions and hints, explained concepts such as Grid versus Flexbox, media queries and hover versus focus, and reviewed my CSS. I wrote the layout, the colours and most of the styling myself.

For the optional navigation menu, the media query sizes and the single-line border fix I asked Claude to write the code. I reviewed it afterwards and tested it in the browser. I plan to learn JavaScript and rebuild the menu script on my own.

What worked well: asking for explanations and then trying the change myself. What did not: the values estimated from the design images were sometimes off, so I had to adjust them by testing in the browser.

## Author

- GitHub - [@KaanBayr](https://github.com/KaanBayr)
