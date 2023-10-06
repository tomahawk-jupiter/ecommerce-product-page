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

[Responsive navbar with hamburger example article](https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci)
