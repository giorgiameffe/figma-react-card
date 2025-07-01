function ProductCard() {

    return (

        <div className="card col-3 rounded-3 shadow">
            <div className="d-flex justify-content-center align-items-center">
                <img src="../src/assets/img/coco-chanel.jpeg" className="w-75 card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">Chanel Coco Mademoiselle</h5>
                <p className="card-text mb-5">L'essenza di una donna libera e audace. Un orientale femminile deciso e fresco.</p>
                <button className="btn fw-bold text-white">SCOPRI</button>
            </div>
        </div>
    )
}

export default ProductCard;