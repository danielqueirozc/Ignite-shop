import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/router';
import { Bag } from 'phosphor-react';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Cart } from '../Cart';
import { ButtonCartContainer, HeaderContainer } from "./styles";

import logoImg from '../../assets/logo.svg';
import Image from "next/future/image";

export function Header() {
  const { itemProductDuplicated } = useContext(ShopContext)

  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";

  return (
    <HeaderContainer >
      <Image src={logoImg} alt="" />

      {showCartButton && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonCartContainer>
              <Bag weight="bold" />
              {itemProductDuplicated.length > 0 && <span>{itemProductDuplicated.length}</span>}
            </ButtonCartContainer>
          </Dialog.Trigger>
          <Cart />
        </Dialog.Root>
      )}
    </HeaderContainer>
  )
}