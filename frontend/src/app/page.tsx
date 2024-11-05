import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start font-[family-name:var(--font-sf-pro-regular)]">
      <main className="flex flex-col items-center gap-5">
        <h1 className="text-5xl">Regular</h1>
        <h1 className="text-5xl font-bold">Bold</h1>
        <h1 className="text-5xl font-medium">Medium</h1>
        <h1 className="text-5xl font-black-italic">Black Italic</h1>
        <h1 className="text-5xl font-semibold-italic">Semibold Italic</h1>
        <h1 className="text-5xl font-light-italic">Light Italic</h1>
        <h1 className="text-5xl font-thin-italic">Thin</h1>
        <h1 className="text-5xl font-ultralight-italic">Ultralight Italic</h1>
        <h1 className="text-5xl font-heavy-italic">Heavy Italic</h1>
      </main>
    </div>
  );
}
