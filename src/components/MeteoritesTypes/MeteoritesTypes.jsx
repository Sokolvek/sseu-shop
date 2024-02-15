import styles from "./meteoritestypes.module.css"



export default function MeteoritesTypes() {
    
    return(
        <section className="bg-white pt-20">
            <div className="container py-8">
            <ul className="flex justify-between">
                <li className="flex flex-col items-center text-center">
                    <img className="max-w-16" src="../src/assets/imgs/storefront.svg" alt="" />
                    <footer className="card-footer">
                        <h3>Wide selection</h3>
                        <span>Shop from everywhere</span>
                    </footer>
                </li>
                <li className="flex flex-col items-center text-center">
                    <img className="max-w-16" src="../src/assets/imgs/storefront.svg" alt="" />
                    <footer className="card-footer">
                        <h3>Wide selection</h3>
                        <span>Shop from everywhere</span>
                    </footer>
                </li>
                <li className="flex flex-col items-center text-center">
                    <img className="max-w-16" src="../src/assets/imgs/storefront.svg" alt="" />
                    <footer className="card-footer">
                        <h3>Wide selection</h3>
                        <span>Shop from everywhere</span>
                    </footer>
                </li>
                <li className="flex flex-col items-center text-center">
                    <img className="max-w-16" src="../src/assets/imgs/storefront.svg" alt="" />
                    <footer className="card-footer">
                        <h3>Wide selection</h3>
                        <span>Shop from everywhere</span>
                    </footer>
                </li>
            </ul>
            </div>
        </section>
    )
}