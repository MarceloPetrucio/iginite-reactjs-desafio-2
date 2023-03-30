import {
  BannerContainer,
  BannerImage,
  TitleContainer,
  SubtitleContainer,
  ListBenefits,
  Benefits,
} from './styles';
import { TitleXL, TextRegularL, TextRegularM } from '../../../../styles/text';

import ImagemCopoCafe from './../../../../assets/imagem-copo-cafe.png';
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';

export function Banner() {
  return (
    <BannerImage>
      <BannerContainer>
        <main>
          <section>
            <TitleContainer>
              Encontre o café perfeito para qualquer hora do dia
            </TitleContainer>

            <SubtitleContainer>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </SubtitleContainer>
          </section>

          <ListBenefits>
            <Benefits benefitColor="yellowDark">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              <TextRegularM>Compra simples e segura</TextRegularM>
            </Benefits>

            <Benefits benefitColor="gray">
              <span>
                <Package size={16} weight="fill" />
              </span>
              <TextRegularM>Embalagem mantém o café intacto</TextRegularM>
            </Benefits>

            <Benefits benefitColor="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <TextRegularM>Entrega rápida e rastreada</TextRegularM>
            </Benefits>

            <Benefits benefitColor="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              <TextRegularM>O café chega fresquinho até você</TextRegularM>
            </Benefits>
          </ListBenefits>
        </main>
        <img src={ImagemCopoCafe} alt="" />
      </BannerContainer>
    </BannerImage>
  );
}
