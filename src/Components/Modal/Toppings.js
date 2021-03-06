import React from 'react';
import { OptionsWrapper, OptionLabel, OptionItem } from './Options';

export const Toppings = ({ toppings, checkTopping }) => {
  return (
    <>
      <h3>Additives</h3>
      <OptionsWrapper>
        {toppings.map((item, i) => (
          <OptionLabel key={i}>
            <OptionItem
              type="checkbox"
              checked={item.checked}
              // вызываем функцию checkTopping и передаем туда индекс, который сравнивается с индексом топпинга в массиве
              onChange={() => checkTopping(i)}
            />
            {item.name}
          </OptionLabel>
        ))}
      </OptionsWrapper>
    </>
  );
};
