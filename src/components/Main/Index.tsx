import { useState } from "react";
import { Benefits } from "../Benefits";
import { Categories } from "../Categories/Index";
import { Highlights } from "../Highlights/Index";
import { HighlightsByCategory } from "../HiglightsByCategory";
import { MenuMobile } from "../MenuMobile/Index";
import { Newsletter } from "../Newsletter/Index";
import { MainStyle } from "./style";

export function MainComponent(){

    return(
        <MainStyle>
            <MenuMobile/>
            <Benefits />
            <Categories/>
            <Highlights/>
            <HighlightsByCategory/>
        </MainStyle>
        
    )
}