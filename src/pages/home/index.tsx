import { Banner } from './components/banner/index';
import { Product } from './components/product/index';
import { ListCoffee } from '../../shared/list-coffee';
import {
  HomeContainer,
  ListProducts,
  ProductsSection,
  TitleLContainer,
} from './style';

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <ProductsSection>
        <TitleLContainer>Nossos cafés</TitleLContainer>
        <ListProducts>
          {ListCoffee.map((coffee) => (
            <Product key={coffee.id} coffee={coffee} />
          ))}
        </ListProducts>
      </ProductsSection>
    </HomeContainer>
  );
}
