import { Content, InformationsDivStyle, InformationsStyle } from "./styles";
import establishmentImg from '../../assets/establishment.svg'
import mapImg from '../../assets/map.svg'
import whatsappImg from '../../assets/whatsapp.svg'
import evamailImg from '../../assets/evamail.svg'

export function Informations(){
    return(
        <InformationsStyle>
            <Content>
                <h2>Eva Shop</h2>
                <InformationsDivStyle>
                    <div>
                        <img src={establishmentImg} alt="Dados" />
                        <ul>
                            <li><a href="#">Quem somos</a></li>
                            <li><a href="#">Políticas de privacidade</a></li>
                            <li><a href="#">Feedback de clientes</a></li>
                            <li><a href="#">Trocas e devoluções</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src={mapImg} alt="Dados" />
                        <span>Rua Av. Rio Negro, 1100</span>
                        <span>Jardim Roselandia</span>
                        <span>14406-005</span>
                        <span>Franca / SP</span>
                    </div>
                    <div>
                        <img src={establishmentImg} alt="Dados" />
                        <span><img src={whatsappImg} alt="Whatsapp" /> (16) 9 98179-7325</span>
                        <span><img src={evamailImg} alt="Whatsapp" /> contato@evacommerce.com.br</span>
                    </div>
                </InformationsDivStyle>
            </Content>
        </InformationsStyle>
        

    )
}