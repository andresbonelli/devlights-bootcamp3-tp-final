import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start font-[family-name:var(--font-sf-pro-regular)]">
      <main className="flex flex-col items-center gap-5">
        <h1 className="text-5xl">Regular</h1>
        <h1 className="text-5xl font-[family-name:var(--font-sf-pro-bold)]">
          Bold
        </h1>
        <h1 className="text-5xl font-[family-name:var(--font-sf-pro-medium)]">
          Medium
        </h1>
        <h1 className="text-5xl font-[family-name:var(--font-sf-pro-black-italic)]">
          Black Italic
        </h1>
        <h1 className="text-5xl font-[family-name:var(--font-sf-pro-semibold-italic)]">
          Semibold Italic
        </h1>
        <h1 className="text-5xl font-[family-name:var(--font-sf-pro-light-italic)]">
          Light Italic
        </h1>
        <h1 className="text-5xl font-[family-name:var(--font-sf-pro-thin)]">
          Thin
        </h1>
        <h1 className="text-5xl font-[family-name:var(--font-sf-pro-ultralight-italic)]">
          Ultralight Italic
        </h1>
        <h1 className="text-5xl font-[family-name:var(--font-sf-pro-heavy-italic)]">
          Heavy Italic
        </h1>
      </main>
    </div>
  );
}
