import { useState } from 'react';

// функция возвращает хук
export function useOpenItem(){
  // сразу деструктурируем массив из React.useState
  // arr[0] - что изменяется
  // arr[1] - функция, которая обрабатывает изменения
  // openItem содержит данные о товаре, которые открываются в новом окне
  // setOpenItem - назначает товар и запускает перерендер - изменяет стейт и дает команду перерендера, запускается при клике, поэтому передаем в виде пропса в компонент меню
  // сразу деструктурируем хук
  // null - начальное состояние
  const [openItem, setOpenItem] = useState(null);

  return { openItem, setOpenItem };
}