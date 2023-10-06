# My Notes

I think I'll use NextJS. I'm using the newer App router instead of the Pages router.

## Contents

- [Google fonts with nextjs](#google-fonts-with-nextjs)

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

## Responsive navbar

This took a little while to figure out.

## Change opacity of an image without effecting the border color

ChatGPT solution:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Set initial styles for the image */
      .image-container {
        position: relative;
        display: inline-block;
      }

      .image-container img {
        max-width: 100%;
        height: auto;
        transition: opacity 0.3s ease-in-out; /* Add a smooth transition for opacity change */
      }

      .image-container:hover img {
        opacity: 0.7; /* Change the opacity on hover */
      }

      .image-container:hover {
        border: 2px solid #ff0000; /* Add a border on hover */
      }
    </style>
  </head>
  <body>
    <div class="image-container">
      <img src="your-image.jpg" alt="Your Image" />
    </div>
  </body>
</html>
```
