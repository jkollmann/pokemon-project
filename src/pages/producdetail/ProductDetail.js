import { useParams } from "react-router-dom";

function ProductDetail() {
    const params = useParams();
    const id = params.id;

    return <section>Detail for id {id}</section>;
}

export default ProductDetail;