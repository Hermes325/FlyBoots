import * as React from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


const CatalogPage = () => 
    <>
        <Header />

        < h1 class="flex_center" style={{ marginTop: "70px" }} >
            Выбирай скорее, сука!
        </h1 >

        <div class="grid_in_catalog" style={{ marginTop: "70px" }}>
            <div class="cartochka">
                <div class="flex_center">
                    <img src="../images/adidas Originals Kamanda.svg" alt="adidas Originals Kamanda"
                        style={{ width: "250px" }} />
                </div>
                <h5>title</h5>
                <div>
                    <p class="Roboto400_3">
                        Congue arcu aliquam amet sapien, sollicitudin egestas.
                        Euismod praesent viverra rutrum eget tellus dignissim mauris elit.
                    </p>
                    <form action="/cartochka.html">
                        <button class="buy jost500_2">
                            Купить
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <Footer />
    </>


export default CatalogPage

