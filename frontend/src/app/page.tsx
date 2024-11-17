import { Categories } from "@/constants/categories";
import Image from "next/image";
import { capitalize } from "@/utils/string";
import Link from "next/link";
import ProductCarrousel from "@/components/carrousel";

export default async function Home() {
  return (
    <main className="home">
      <section>
        <h1 className="section-title">Welcome to our Store</h1>
        <div className="section-content">
          <div className="category-container">
            {Categories.map((category) => (
              <div key={category.id} className="category-card">
                <Image
                  src={`/images/categories/${category.name}.png`}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="object-fill w-full h-full"
                />
                <Link href={`/products/${category.name}`}>
                  {capitalize(category.name)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h1 className="section-subtitle">Featured Products</h1>
        <ProductCarrousel featured />
      </section>
      <section>
        <h1 className="section-subtitle">Black Friday. Holiday sale.</h1>
        <ProductCarrousel />
      </section>
    </main>
  );
}
