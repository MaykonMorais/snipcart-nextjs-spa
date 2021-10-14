import { useEffect } from "react";

import Product, { IProduct } from "./Product";
interface IProductListProps {
  products: IProduct[];
}

const ProductList = (props: IProductListProps) => {
  useEffect(() => {
    window.dataLayer.push({
      event: "product-list",
      ecommerce: {
        currencyCode: "BRL", // Local currency is optional.
        impressions: props.products,
      },
    });
  }, []);
  return (
    <div className="product-list">
      {props.products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
