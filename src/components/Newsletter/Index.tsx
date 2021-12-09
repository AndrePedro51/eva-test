import mailImg from '../../assets/mail.svg'
import { Content } from './style'

export function Newsletter(){
    return(
        <Content>
            <img src={mailImg} alt="Email" />
            <h3>Receba nossas novidades, descontos e muito mais</h3>
            <form >
                <input type="text" placeholder="Digite seu nome" required/>
                <input type="email" placeholder="Digite seu email" required/>
                <button type="submit">Eu quero receber novidades!</button>
            </form>
        </Content>
        
    )
}