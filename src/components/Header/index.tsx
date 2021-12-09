import logoImg from '../../assets/logo-eva.png';
import arrowImg from '../../assets/arrow-down.svg'
import searchImg from '../../assets/search.svg'
import cartImg from '../../assets/shopping-cart.svg'
import userImg from '../../assets/user.svg'
import { Categories, Container, Content, InputWrapper } from './styles';


export function Header(){
    return(
        <Container>
            <Content className="mobile">
                <img src={logoImg} alt="Logo Eva" />
                <Categories>
                    <p>Categorias</p>
                    <img src={arrowImg} alt="Meu carrinho" />
                    <ul>
                        <li><a href="#">Livros</a></li>
                        <li><a href="#">Escritório</a></li>
                        <li><a href="#">Vestuário</a></li>
                        <li><a href="#">Informática</a></li>
                    </ul>
                </Categories>
                <InputWrapper>
                    <input type="text" />
                    <button type="button">
                        <img src={searchImg} alt="Pesquisar" />
                    </button>
                </InputWrapper>
                <a href="#" >Minha conta<img src={userImg} alt="Meu carrinho" /></a>
                <a href="#">Carrinho (2)<img src={cartImg} alt="Categorias" /></a>
            </Content>
        </Container>
        
    )

}