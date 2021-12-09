import { BenefitsStyle } from "./style";
import secure from "../../assets/secure.svg"
import card from "../../assets/card.svg"
import truck from "../../assets/truck.svg"


export function Benefits(){
    return(
        <BenefitsStyle>
            <div>
                <img src={secure} alt="Site Seguro" />
                <p>Site Seguro</p>
            </div>
            <div>
                <img src={card} alt="Site Seguro" />
                <p>Até 12x sem juros</p>
            </div>
            <div>
                <img src={truck} alt="Site Seguro" />
                <p>Entrega para todo o Brasil</p>
            </div>

        </BenefitsStyle>
    )
}