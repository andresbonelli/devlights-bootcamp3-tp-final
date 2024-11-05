import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start font-regular">
      <main className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-ultralight">Ultralight</h1>
        <h1 className="text-3xl font-ultralight-italic">Ultralight Italic</h1>
        <h1 className="text-3xl font-thin">Thin</h1>
        <h1 className="text-3xl font-thin-italic">Thin Italic</h1>
        <h1 className="text-3xl font-light">Light</h1>
        <h1 className="text-3xl font-light-italic">Light Italic</h1>
        <h1 className="text-3xl">Regular</h1>
        <h1 className="text-3xl font-regular-italic">Regular Italic</h1>
        <h1 className="text-3xl font-medium">Medium</h1>
        <h1 className="text-3xl font-medium-italic">Medium Italic</h1>
        <h1 className="text-3xl font-semibold">Semibold</h1>
        <h1 className="text-3xl font-semibold-italic">Semibold Italic</h1>
        <h1 className="text-3xl font-bold">Bold</h1>
        <h1 className="text-3xl font-bold-italic">Bold Italic</h1>
        <h1 className="text-3xl font-heavy">Heavy</h1>
        <h1 className="text-3xl font-heavy-italic">Heavy Italic</h1>
        <h1 className="text-3xl font-black">Black</h1>
        <h1 className="text-3xl font-black-italic">Black Italic</h1>
      </main>
    </div>
  );
}
