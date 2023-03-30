import { Children, createContext, ReactNode, useEffect, useState } from 'react';
import { Coffee } from '../shared/list-coffee';
import { ListTypePayment } from '../shared/list-type-payment';

export interface Payment {
  id: number;
  name: string;
}

export interface DeliveryAddress {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface CartItem {
  id: number;
  coffee: Coffee;
  amount: number;
  qtd: number;
}

interface CartContextType {
  listItem: CartItem[];
  amoutItens: number;
  payment: Payment | null;
  deliveryAddress: DeliveryAddress | null;
  addItem: (addItemProps: AddItemProps) => void;
  dropItem: (dropItemProps: DropItemProps) => void;
  addQtdItem: (addQtdItemProps: AddQtdItemProps) => void;
  subQtdItem: (addQtdItemProps: AddQtdItemProps) => void;
  selectPayment: (id: number) => void;
  createDeliveryAddress: (address: DeliveryAddress) => void;
}

const keyLocalStorage = '@ignite-coffee:cart-state-1.0.0';

export interface AddItemProps {
  coffee: Coffee;
  qtd: number;
}
export interface DropItemProps {
  id: number;
}
export interface AddQtdItemProps {
  id: number;
}

export const CartContext = createContext({} as CartContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CyclesContextProviderProps) {
  const storedStateAsJSON = localStorage.getItem(keyLocalStorage);

  const obj = JSON.parse(storedStateAsJSON ?? '{}');

  const [listItem, setListCoffee] = useState<CartItem[]>(obj.listItem ?? []);
  const [amoutItens, setAmoutItens] = useState(obj.amoutItens ?? 0);
  const [payment, setPayment] = useState<Payment | null>(obj.payment ?? null);
  const [deliveryAddress, setDeliveryAddress] =
    useState<DeliveryAddress | null>(obj.deliveryAddress ?? null);

  useEffect(() => {
    calcAmountItens();
  }, [listItem]);

  useEffect(() => {
    const obj = {
      listItem,
      amoutItens,
      payment,
      deliveryAddress,
    };

    const stateJSON = JSON.stringify(obj);
    localStorage.setItem(keyLocalStorage, stateJSON);
  }, [listItem, amoutItens, payment, deliveryAddress]);

  function addItem({ coffee, qtd }: AddItemProps) {
    const item: CartItem = {
      id: listItem.length + 1,
      coffee,
      qtd,
      amount: qtd * coffee.price,
    };

    setListCoffee([...listItem, item]);
  }

  function selectPayment(id: number) {
    const payment = ListTypePayment.find((payment) => payment.id === id);

    if (payment) setPayment(payment);
  }

  function dropItem({ id }: DropItemProps) {
    const newList = listItem.filter((item) => item.id != id);

    setListCoffee(newList);
  }

  function addQtdItem({ id }: AddQtdItemProps) {
    const newList = [...listItem];
    const item = newList.find((item) => item.id === id);

    if (!item) return;
    item.qtd++;
    item.amount = item.qtd * item.coffee.price;
    setListCoffee(newList);
  }

  function subQtdItem({ id }: AddQtdItemProps) {
    const newList = [...listItem];
    const item = newList.find((item) => item.id === id);

    if (!item) return;
    if (item.qtd <= 1) return;
    item.qtd--;
    item.amount = item.qtd * item.coffee.price;
    setListCoffee(newList);
  }

  function calcAmountItens() {
    const amoutItens = listItem.reduce((old, current, index) => {
      return old + current.amount;
    }, 0);

    setAmoutItens(amoutItens);
  }

  function createDeliveryAddress(address: DeliveryAddress) {
    setDeliveryAddress({ ...address });
  }

  return (
    <CartContext.Provider
      value={{
        listItem,
        amoutItens,
        payment,
        deliveryAddress,

        addItem,
        dropItem,
        addQtdItem,
        subQtdItem,
        selectPayment,
        createDeliveryAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
