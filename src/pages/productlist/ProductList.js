import ProductDetail from "../producdetail/ProductDetail";

function ProductList() {
    return (
        <section>
            <p>List of Products</p>
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
        </section>
    );
}

export default ProductList;