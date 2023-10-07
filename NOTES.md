# My Notes

I think I'll use NextJS. I'm using the newer App router instead of the Pages router.

## Contents

- [Google fonts with nextjs](#google-fonts-with-nextjs)
- [Change opacity without effecting the border color](#change-opacity-without-effecting-the-border-color)
- [Client component](#client-component)

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
