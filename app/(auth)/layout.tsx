export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="bg-slate-900 w-full flex items-center justify-center h-dvh">
          {children}
        </body>
      </html>
    );
  }