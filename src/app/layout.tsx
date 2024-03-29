import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next js Tutorial - Codevolution", // for fallback purposes
    template: "%s | Codevolution" //add prefix / suffix
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}><p>Header</p></header>
        {children}</body>
      <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}><p>Footer</p></footer>
    </html>
  )
}
