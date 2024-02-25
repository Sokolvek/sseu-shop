import { useEffect, useState } from 'react';
import styles from './productpage.module.css';
import { useParams } from 'react-router-dom'
import useStore from "../../store/store";
function ProductPage() {
    const {id} = useParams()
    const [product,useProduct] = useState({})
    const { addToCart } = useStore()
    const url = import.meta.env.VITE_BASE_URL;
    async function fetchProducts() {
        const response = await fetch(`${url}/products/${id}`)
        const data = await response.json()
        useProduct(data)
        console.log(data)
      }
    useEffect(() =>{
        console.log(id)
        fetchProducts()
    },[])
    return (
        <section id={styles['product-page']}>
            <div className={styles['product-details']}>
                {/* **Img************************* */}
                <div className={styles['product-img']}>

                    {/* Swiper Slider */}
                    <div className={`${styles['swiper']} ${styles['mySwiper']}`}>
                        <div className={styles['swiper-wrapper']}>

                            {/* **1****** */}
                            <div className={styles['swiper-slide']}>
                                <img src="images/1.jpg" alt="Product Image" />
                            </div>
                           

                        </div>

                        {/* btns */}
                        
                    </div>
                </div>
                {/* **Text************************ */}
                <div className={styles['product-text']}>
                    {/* category */}
                    {/* <span className={styles['product-category']}>Women Clothes & Dresses</span> */}
                    <h3>{product.name}</h3>
                    <span className={styles['product-price']}>${product.price}</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis laboriosam vitae ab aspernatur qui facere a commodi cupiditate praesentium. Aliquam, voluptatem est debitis consequuntur ex autem exercitationem quas dolorem alias?
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo, enim non molestias dolores eos officia minima quidem architecto labore soluta? Expedita officiis voluptas sapiente officia debitis, mollitia eum quia.
                    </p>
                    {/* size */}
                   

                    {/* btn */}
                    <div className={styles['product-button']}>
                        <a href="#" onClick={() => addToCart(product)} className={styles['add-bag-btn']}>Add To Bag</a>
                        {/* <a href="#" className={styles['add-wishlist-btn']}>Add To Wishlist</a> */}
                    </div>
                    {/* help-btn */}
                    <a href="#" className={styles['help-btn']}>Need Any Help?</a>
                </div>
            </div>
        </section>
    );
}

export default ProductPage;