import React, { useContext, useEffect, useState } from "react";

export const FunctionsContext = React.createContext();

export function useFunctions() {
  return useContext(FunctionsContext);
}

export default function FunctionsProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [productsArray, setProductsArray] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    fetch("/api/product")
      .then((result) => result.json())
      .then((data) => {
        setProducts(data);
        setProductsArray(data);
      })
      .catch(function () {
        return "Error";
      });
  }, []);

 


  const onAdd = (id, price) => {
    // check if product in cart
   
    const exist = cartItems.find((x) => x._id === id);
    // if product exists, add to qty
    if (exist) {
    
      setCartItems(
        cartItems.map((x) =>
          x._id === id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      setTotalCartPrice(totalCartPrice+price);
    }
    // else, add to cart with qty = 1
    else {
      const newProduct = productsArray.find((x) => x._id === id);
       const totalPrice= + price;
      setCartItems((prev) => [...prev, { ...newProduct, qty: 1 }]);
      
        setTotalCartPrice(totalCartPrice+price);
    }
   
  };



  //----- remove poroduct from cart
  const onRemove = (id,price) => {
    // ---filtering the shopping cart by product qty >0
    const product = cartItems[cartItems.findIndex((p) => p._id === id)];
    // --if qty>1 then find the id in the cart array..if (true) give me the object (prod) and change
    //  his qty value if (false) leave the object as it is
    if (product.qty > 1) {
      setCartItems(
        cartItems.map((prod) =>
          prod._id === id ? { ...prod, qty: prod.qty - 1 } : prod
        )
      );
      setTotalCartPrice(totalCartPrice-price);
      }
      // else give me all the objects (product) that have diffrent id
     else {
      const removeProduct = cartItems.filter((product) => product._id !== id);
      setCartItems(removeProduct);
      setTotalCartPrice(totalCartPrice-price);
    }
  };

  const qtyCheck = (id) => {
    const productQty = cartItems.find((product) => product._id === id);
    if (productQty) {
      return productQty.qty;
    } else {
      return 0;
    }
  };

  // search in the array for the key & reurn value.
  const keyValues = (array, prop) => {
    const extract = array?.map((obj) => {
      return `${obj[prop]},`;
    });
    return extract;
  };
  
  
  return (
    <FunctionsContext.Provider
      value={{
        onAdd: onAdd,
        onRemove: onRemove,
        products: products,
        cartItems: cartItems,
        setCartItems: setCartItems,
        productsArray: productsArray,
        setProductsArray: setProductsArray,
        qtyCheck: qtyCheck,
        keyValues: keyValues,
        totalCartPrice:totalCartPrice,
      }}
    >
      {children}
    </FunctionsContext.Provider>
  );
}
