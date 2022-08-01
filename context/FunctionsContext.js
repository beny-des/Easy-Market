import React, { useContext, useEffect, useState } from "react";

export const FunctionsContext = React.createContext();

export function useFunctions() {
  return useContext(FunctionsContext);
}

export default function FunctionsProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [titleSearch, setTitleSearch] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [productsArray, setProductsArray] = useState([]);
  const [productsFilteredArray, setProductFilterdsArray] = useState([]);
  const [categories, setCategories] = useState([]);
  const [consoles, setConsoles] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [error, setError] = useState(false);

  // const func = () => {
  //   fetch('url',{
  //     method: 'post',
  //     body:{
  //       user: 'id',
  //       cart:{
  //         products: [],
  //         sum: '400$'
  //       }
  //     }
  //   })
  // }

  useEffect(() => {
    setLoadingSpinner(true);
    setError(false);
    fetch("/api/product")
      .then((result) => result.json())
      .then((data) => {
        setAllProducts(data);
        setProductsArray(data);
        setProductFilterdsArray(data);
        setLoadingSpinner(false);
        setTitleSearch(
          data.map((product) => {
            return product.title;
          })
        );
      })
      .catch(function (err) {
        setError(err);
        setLoadingSpinner(false);
      });
  }, []);

  useEffect(() => {
    fetch("/api/category")
      .then((result) => result.json())
      .then((data) => {
        setCategories(data);
      })
      .catch(function (err) {
        setError(err);
        setLoadingSpinner(false);
      });
  }, []);

  useEffect(() => {
    fetch("/api/console")
      .then((result) => result.json())
      .then((data) => {
        setConsoles(data);
      })
      .catch(function (err) {
        setError(err);
        setLoadingSpinner(false);
      });
  }, []);

  function gameSearch(newValue) {
    const choosedOption = allProducts.find((item) => item.title === newValue);

    if (choosedOption) {
      setProductFilterdsArray([choosedOption]);
    } else {
      setProductFilterdsArray(allProducts);
    }
  }

  function consoleFiltering(searchOption) {
    const filteringConsole =
      searchOption === "All"
        ? allProducts
        : productsArray.filter((productObj) =>
            productObj.console.some(
              (console) => console.console === searchOption
            )
          );
    setProductFilterdsArray(filteringConsole);
  }

  function categoryFiltering(searchOption) {
    console.log("searchOption", searchOption);
    const filteringCategory =
      searchOption === "All"
        ? allProducts
        : productsArray.filter((productObj) =>
            productObj.category.some(
              (category) => category.category === searchOption
            )
          );
    setProductFilterdsArray(filteringCategory);
  }

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
      setTotalCartPrice(totalCartPrice + price);
    }
    // else, add to cart with qty = 1
    else {
      const newProduct = allProducts.find((x) => x._id === id);

      setCartItems((prev) => [...prev, { ...newProduct, qty: 1 }]);

      setTotalCartPrice(totalCartPrice + price);
    }
  };

  //----- remove poroduct from cart
  const onRemove = (id, price) => {
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
      setTotalCartPrice(totalCartPrice - price);
    }
    // else give me all the objects (product) that have diffrent id
    else {
      const removeProduct = cartItems.filter((product) => product._id !== id);
      setCartItems(removeProduct);
      setTotalCartPrice(totalCartPrice - price);
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

  const keyValues = (array, prop) => {
    return array?.map((obj) => {
      return `${obj[prop]} `;
    });
  };

  return (
    <FunctionsContext.Provider
      value={{
        error: error,
        onAdd: onAdd,
        qtyCheck: qtyCheck,
        onRemove: onRemove,
        keyValues: keyValues,
        gameSearch: gameSearch,
        loadingSpinner: loadingSpinner,
        consoleFiltering: consoleFiltering,
        totalCartPrice: totalCartPrice,
        consoles: consoles,
        cartItems: cartItems,
        categories: categories,
        titleSearch: titleSearch,
        allProducts: allProducts,
        setCartItems: setCartItems,
        productsArray: productsArray,
        setProductsArray: setProductsArray,
        categoryFiltering: categoryFiltering,
        productsFilteredArray: productsFilteredArray,
      }}
    >
      {children}
    </FunctionsContext.Provider>
  );
}
