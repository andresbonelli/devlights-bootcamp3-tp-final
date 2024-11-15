export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div>
      <h1>Category Page</h1>
      <h1>{params.category}</h1>
    </div>
  );
}
