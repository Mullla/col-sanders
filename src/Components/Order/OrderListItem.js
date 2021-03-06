import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImage from './../../img/trash.svg';
// functions
import {
  formatCurrency,
  countItemsPrice,
} from '../Functions/secondaryFunctions';

const OrderItemStyled = styled.li`
  margin: 15px 0;
  div {
    display: flex;
  }
`;

const DeleteBtn = styled.button`
  background: url(${trashImage}) no-repeat center / cover;
  width: 30px;
  height: 30px;
  border-color: transparent;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 105px;
  text-align: right;
  font-weight: 700;
`;

const ToppingsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ToppingsItem = styled.li`
  position: relative;
  color: grey;
  font-size: 12px;
  &:not(:last-child) {
    margin-right: 15px;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%) rotate(-45deg);
      right: -12px;
      width: 10px;
      background: #38c8f4;
      height: 1px;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      right: -12px;
      width: 10px;
      background: #c838f4;
      height: 1px;
    }
  }
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
  const showToppings = toppings => {
    return toppings.reduce((result, item) => {
      if (item.checked) {
        result.push(item.name);
      }

      return result;
    }, []);
  };

  // или функция, которая перебирает order.topping и врзвращает строку
  /*
  const topping = order.topping
    .filter(item => item.checked)
    .map(item => item.name)
    .join(', ');
  */

  const refDeleteBtn = useRef(null);

  return (
    // передаем индекс, чтобы знать, какой именно заказ мы редактируем
    <OrderItemStyled
      onClick={e =>
        e.target !== refDeleteBtn.current && setOpenItem({ ...order, index })
      }
    >
      <div>
        <ItemName>
          {order.name} {order.choice}
        </ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(countItemsPrice(order))}</ItemPrice>
        <DeleteBtn ref={refDeleteBtn} onClick={() => deleteItem(index)} />
      </div>
      {/* 
        если выводить строкой
        {topping && <Toppings>Additives: {topping}</Toppings>}
       */}
      {order.toppings && (
        <ToppingsList>
          {showToppings(order.topping).map(item => (
            <ToppingsItem key={item}>{item}</ToppingsItem>
          ))}
        </ToppingsList>
      )}
    </OrderItemStyled>
  );
};
