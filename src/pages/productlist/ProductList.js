import Navigation from "../../components/navigation/Navigation";
import ProductDetail from "../producdetail/ProductDetail";

function ProductList() {
    return (
        <section>
            <Navigation />
            <p>List of Products</p>
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
        </section>
    );
}

export default ProductList;