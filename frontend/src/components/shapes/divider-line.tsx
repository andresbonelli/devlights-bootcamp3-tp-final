export default function DividerLine({
  color,
  thick,
}: {
  color: string;
  thick?: boolean;
}) {
  return (
    <div
      className={`w-full my-3 border-${color} ${thick ? "border" : "border-t"}`}
    ></div>
  );
}
