import { Informations } from "../Informations";
import { Newsletter } from "../Newsletter/Index";
import { FooterStyle } from "./styles";

export function Footer(){
    return(
        <FooterStyle>
          <Newsletter/>  
          <Informations/> 
        </FooterStyle>
       
    )
    
}