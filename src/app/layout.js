import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js Example</title>
      </head>
      <body>
        <main>
          <Suspense fallback={<i>Loading...</i>}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
