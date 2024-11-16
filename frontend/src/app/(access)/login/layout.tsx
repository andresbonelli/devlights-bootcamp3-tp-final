export default function AccessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="access">{children}</main>;
}
