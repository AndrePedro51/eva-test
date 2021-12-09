import { CarouselComponent } from "./components/Carousel";
import { Footer } from "./components/Footer/Index";
import { Header } from "./components/Header";
import { MainComponent } from "./components/Main/Index";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <CarouselComponent/>
      <MainComponent/>
      <Footer/>
      <GlobalStyle />
    </>
  );
}
