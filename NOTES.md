# My Notes

It took two long sessions to complete this frontend mentor challenge.

Components:

- Responsive layout
- Navbar collapses into hamburger that toggles menu overlay
- Shopping cart popover
- Lightbox gallery (ie. image carousel)

## Contents

- [Google fonts with nextjs](#google-fonts-with-nextjs)
- [Change opacity without effecting the border color](#change-opacity-without-effecting-the-border-color)
- [Client component](#client-component)
- [Change color of SVG](#change-color-of-svg)
- [Click outside cart to close](#click-outside-cart-to-close)
- [Problems](#problems)

## Google fonts with nextjs

With NextJS you can choose your font like below instead of importing it into your html or css file like I would normally do. Nextjs handles the rest.

```js
// layout.js
import { Kumbh_Sans } from "next/font/google";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>{children}</body>
    </html>
  );
}
```

## Change opacity without effecting the border color

You have to put the image in a div and put the border on that div. If using border radius, add to both the img and div and make the div radius a bit curvier.

## Client component

Add `"use client";` to the top of the component to make `useState` work. Components are server components by default and so are sent as pure html (ie. without javascript). [Stackoverflow answer](https://stackoverflow.com/a/74965850).

## Change color of SVG

I couldn't seem to change the color using CSS so I changed the SVG file directly. This means copying the file to have multiple colors.

## Click outside cart to close

See the `cart.jsx` component for an example of click outside to close. Got the code from chatGPT.

## Becoming a mess!

The way I've implemented the image carousel is becoming quite a mess. It could do with refactoring!
