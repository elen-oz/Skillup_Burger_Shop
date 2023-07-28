import React from 'react';
import Menu from './Menu';

const Home = () => {
  return (
    <div className='container'>
      <section className='home'>
        <div>
          <h1>Burger Shop</h1>
          <p>Give yourself a tasty burger.</p>
        </div>

        <a className='main-red-button'>Explore Menu</a>
      </section>
      <Menu />
    </div>
  );
};

export default Home;
