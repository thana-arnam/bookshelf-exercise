import './globals.css'
import { K2D } from "@next/font/google";
const k2d = K2D({weight: "400", subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={k2d.className}>{children}</body>
    </html>
  )
}
