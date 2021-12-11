import { HighlightsStyle } from "./style";
import { useState, useEffect, useLayoutEffect } from "react";
import Carousel from "react-elastic-carousel"
import { api } from "../../services/api";
import starImgFill from "../../assets/star-fill.svg"
import starImg from "../../assets/star.svg"


interface Product{
    id: string,
    name: string,
    stars: number,
    price: string,
    promotional_price: string,
    category_id:string,
    created_at: string,
    updated_at: string,
    category: {
        id: string,
        name: string,
        bankslip_discount: number,
        created_at: string,
        updated_at: string
    },
    images:[
        {
          id: string,
          path: string,
          product_id: string,
          created_at: string,
          updated_at: string,
        },
    ]
        
        
}
function useWindowSize() {
    const [size, setSize] = useState(0);
    let itemsToShow = 4
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    if(size > 1100){
        itemsToShow = 4
    }else if(size > 750){
        itemsToShow = 3
    }else if(size > 550){
        itemsToShow = 2
    }else{
        itemsToShow = 1
    }
    return itemsToShow;
    
}

export function Highlights(){
    const items = useWindowSize()
    console.log(items);
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        api.get('products')
        .then(response => setProducts(response.data))
    }, [])
    

    return(
        <HighlightsStyle>
            <h2>Destaques</h2>
            <Carousel 
                itemsToShow={items} 
                isRTL={false} 
                pagination={false}
                
            >
                {products.map(product => {
                    let stars = []
                    let image = ''
                    let bankslipPrice = 0
                    for ( let i = 0; i < product.stars; i++){
                        stars.push('1')
                    }
                    if(stars.length < 5){
                        for(let i = stars.length; i < 5; i++){
                            stars.push('0')
                        }
                    }
                    try{
                        image = (product.images[0].path)
                    } catch(e) {
                        image = 'https://picsum.photos/200'
                    }
                    bankslipPrice = Number(product.promotional_price) - (Number(product.promotional_price) * (product.category.bankslip_discount/100))
                    
                    return(
                        <div key={product.id} className="card">
                            <figure >
                                <img src={image} alt={product.name} />
                                <figcaption>{product.name}</figcaption>
                            </figure>
                            <div className="stars">
                                {stars.map(star => {
                                    if(star === "1"){
                                    return(
                                            <span key={product.id + Math.random()}><img src={starImgFill}/></span>
                                        ) 
                                    }else {
                                        return(
                                            <span key={product.id + Math.random()}><img src={starImg}/></span>
                                        )
                                    }
                                    
                                })}
                            </div>
                            <span className="price">
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(Number(product.price))}
                            </span>
                            <h2 className="price">
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(Number(product.promotional_price))}
                            </h2>
                            
                            <p>
                                Ou {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(bankslipPrice)} com {product.category.bankslip_discount}% off no boleto
                            </p>
                            <button className="button">
                                Comprar
                            </button>
                        </div>
                    )
                })}
            </Carousel>
        </HighlightsStyle>
    )
}