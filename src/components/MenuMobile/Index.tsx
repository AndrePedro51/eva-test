import {Categories, MenuMobileStyle, InputWrapper, Content} from './style'
import arrowImg from '../../assets/arrow-down.svg'
import searchImg from '../../assets/search.svg'
import cartImg from '../../assets/shopping-cart.svg'
import userImg from '../../assets/user.svg'
import logoImg from '../../assets/logo-eva.png';
import { useState } from 'react'




export function MenuMobile(){
    const [menuClass, setMenuClass] = useState('hide')
    const [categoryClass, setCategoryClass] = useState('hideCat')
    function handleCategoryClass(){
        if (categoryClass === 'showCat'){
            setCategoryClass('hideCat')
        } else {
            setCategoryClass('showCat')
        }
    }
    function handleMenuClass(){
        if (menuClass === 'show'){
            setMenuClass('hide')
        } else {
            setMenuClass('show')
        }
    }
    
    return(
        
        <MenuMobileStyle>
            <Content className={menuClass}>
                <img src={logoImg} alt="Logotipo Eva" className="menu"/>
                <img src="https://img.icons8.com/ios-filled/30/ffffff/menu-rounded.png" onClick={handleMenuClass} className="menu"/>
                <InputWrapper>
                    <input type="text" />
                    <button type="button">
                        <img src={searchImg} alt="Pesquisar" />
                    </button>
                </InputWrapper>
                <Categories>
                    <p onClick={handleCategoryClass}>Categorias</p>
                    <img src={arrowImg} alt="Meu carrinho" />
                    <ul className={categoryClass}>
                        <li><a href="#">Livros</a></li>
                        <li><a href="#">Escritório</a></li>
                        <li><a href="#">Vestuário</a></li>
                        <li><a href="#">Informática</a></li>
                    </ul>
                </Categories>
                <a href="#">Minha conta<img src={userImg} alt="Meu carrinho" /></a>
                <a href="#">Carrinho (2)<img src={cartImg} alt="Categorias" /></a>
            </Content>
            
        </MenuMobileStyle>
    )
}