import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, seterror] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseditem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseditem = initialValue;
        } else {
          parseditem = JSON.parse(localStorageItem);
          setItem(parseditem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        seterror(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

/* localStorage.removeItem("TODOS_V1"); 
const defaultTodos = [
  { text: "Me recibi en esta carrera", completed: true },
  { text: "Termine el curso de React", completed: false },
  { text: "Pase mi prueba tecnica", completed: false },
  { text: "Trabajo en Extendi", completed: true },
  { text: "Con esfuerzo todo se puede", completed: true },
  { text: "Mi perfil de Linkedin quedó hermoso", completed: false },
];

 localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
 */