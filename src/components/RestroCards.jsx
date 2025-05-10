import React from 'react';
import classes from '../assets/styles/test.module.css';
import { IoIosStarHalf } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice.js';
export default function RestroCards() {
  const [menu, setMenu] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  const dispatch = useDispatch();

  const recipeUrl = 'https://dummyjson.com/recipes';

  // const debounce = (func, delay) => {
  //   let timer;
  //   return function (...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this, args);
  //     }, delay);
  //   };
  // };

  const fetchMenu = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(recipeUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setMenu(result.recipes);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  const filteredRecipes = React.useMemo(() => {
    return menu.filter(item => {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.difficulty.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }, [menu, searchValue]);

  const handleAddToCart = item => {
    // setCart(prevCart => [...prevCart, item]);
    dispatch(addToCart(item)); // Send item to Redux
  };

  // debouncing login

  // const debouncedSearch = React.useMemo(() => {
  //   return debounce(value => {
  //     setSearchValue(value);
  //   }, 500); // 500ms delay
  // }, []);

  // const handleChange = e => {
  //   debouncedSearch(e.target.value);
  // };

  const handleChange = e => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <>
      <h2 className={classes.header}>MENU</h2>

      <div className={classes.inputWrapper}>
        <input
          className={classes.input}
          type='text'
          placeholder='search'
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      {isLoading && <p className={classes.loading}>Loading...</p>}
      {error && <p className={classes.error}>Error: {error}</p>}

      <div className={classes.container}>
        {!isLoading &&
          filteredRecipes.map(item => (
            <div
              className={classes.imgDiv}
              key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className={classes.image}
              />
              <div className={classes.detailDiv}>
                <div className={classes.detailDiv}>
                  <h3
                    className={classes.title}
                    title={item.name}>
                    {item.name}
                  </h3>{' '}
                  <p className={classes.rating}> {item.rating}</p>
                  <p className={classes.star}>
                    <IoIosStarHalf />
                  </p>
                  <button
                    className={classes.cartBtn}
                    onClick={() => handleAddToCart(item)}>
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
