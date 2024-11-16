import { Categories } from "@/constants/categories";
import Image from "next/image";
import { capitalize } from "@/utils/string";
import Link from "next/link";

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
        <div className="section-content">
          <div className="product-card-container">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
              <div key={product} className="product-card featured">
                <div className="text-container">
                  <h1>Product</h1>
                  <p>From $999 or $49/mo.</p>
                </div>
                <Image
                  src={`/images/products/macbook-pro.jpeg`}
                  alt={product.toString()}
                  width={300}
                  height={300}
                  // className="object-fill w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h1 className="section-subtitle">Black Friday. Holiday sale.</h1>
        <div className="section-content">
          <div className="product-card-container">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
              <div key={product} className="product-card">
                <div className="text-container">
                  <h1>Product</h1>
                  <p>From $999 or $49/mo.</p>
                </div>
                <Image
                  src={`/images/products/macbook-pro.jpeg`}
                  alt={product.toString()}
                  width={200}
                  height={200}
                  // className="object-fill w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
