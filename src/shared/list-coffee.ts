import ImgCoffeeAmericano from './../assets/coffees/americano.png';
import ImgCoffeeArabe from './../assets/coffees/arabe.png';
import ImgCoffeeCafeComLeite from './../assets/coffees/cafe-com-leite.png';
import ImgCoffeeCapuccino from './../assets/coffees/capuccino.png';
import ImgCoffeeChocolateQuente from './../assets/coffees/chocolate-quente.png';
import ImgCoffeeCubano from './../assets/coffees/cubano.png';
import ImgCoffeeExpressoCremoso from './../assets/coffees/expresso-cremoso.png';
import ImgCoffeeExpresso from './../assets/coffees/expresso.png';
import ImgCoffeeGelado from './../assets/coffees/gelado.png';
import ImgCoffeeHavaiano from './../assets/coffees/havaiano.png';
import ImgCoffeeIrlandes from './../assets/coffees/irlandes.png';
import ImgCoffeeLatte from './../assets/coffees/latte.png';
import ImgCoffeeMacchiato from './../assets/coffees/macchiato.png';
import ImgCoffeeMochaccino from './../assets/coffees/mochaccino.png';

export interface Coffee {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
}

export const ListCoffee: Coffee[] = [
  {
    id: '50c229f3-50ac-4c1d-a365-05f79a916697',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['TRADICIONAL'],
    image: ImgCoffeeExpresso,
  },
  {
    id: '285cb076-e123-408f-9495-b2e5eaf58e6f',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['TRADICIONAL'],
    image: ImgCoffeeAmericano,
  },
  {
    id: 'b866c486-0e16-4dba-9ade-07def82e3f5c',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['TRADICIONAL'],
    image: ImgCoffeeExpressoCremoso,
  },
  {
    id: '6705a312-f932-4075-a55b-c73064c846e4',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['TRADICIONAL', 'GELADO'],
    image: ImgCoffeeGelado,
  },
  {
    id: '9d9a4d88-a743-4158-be5e-3af5ac39092e',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: ImgCoffeeCafeComLeite,
  },
  {
    id: '62af4234-6f31-48f5-9ab0-96a4d2d4ba22',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: ImgCoffeeLatte,
  },
  {
    id: 'e79f05bc-3635-4bc1-9def-76131454af4f',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: ImgCoffeeCapuccino,
  },
  {
    id: 'b65d0593-1a47-4a0e-8c10-81457350d8e9',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: ImgCoffeeMacchiato,
  },
  {
    id: 'f314474e-e480-4090-85a1-a4aa7741eef0',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['TRADICIONAL'],
    image: ImgCoffeeMochaccino,
  },
  {
    id: '5c6ea349-c9d7-4df3-b64d-cac456d99136',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['ESPECIAL', 'COM LEITE'],
    image: ImgCoffeeChocolateQuente,
  },
  {
    id: 'c3b893ac-2303-41be-842f-c239fd446861',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    image: ImgCoffeeCubano,
  },
  {
    id: 'ffd6c76f-3f86-4696-8ba0-063470a471ac',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['ESPECIAL'],
    image: ImgCoffeeHavaiano,
  },
  {
    id: '2f0b4c61-97a3-47c1-9ecd-530b8e92c3f1',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['ESPECIAL'],
    image: ImgCoffeeArabe,
  },
  {
    id: '7488a5c2-e4f3-4a32-a924-d4d4dd6dc3e4',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    image: ImgCoffeeIrlandes,
  },
];
