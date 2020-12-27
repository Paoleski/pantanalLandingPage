import React from 'react';
import '../styles/section2.css';

function Section2() {
  return (
    <div className="section2">
      <div className="section2__container">
        <h2 className="section2__title">THE BIOME</h2>
        <div className="section2__left">
          <img
            className="section2__map"
            src="http://www.invivo.fiocruz.br/media/pantanalmapap.jpg"
            alt=""
          ></img>
        </div>
        <div className="section2__right">
          <p>
            If you don’t know much about this biome, you may think it’s just a
            wetland filled with swamps. Ok, we’ll give you that, a lot of
            Pantanal is flooded. But swamps and marshes are not all of it.
            Pantanal is located in the South of Mato Grosso and the northwest of
            Mato Grosso do Sul. This is the Brazilian Pantanal, which
            encompasses 85 thousand square miles. It continues beyond the
            Brazilian border, into northern Paraguay and eastern Bolivia.
          </p>
          <p>
            Since it is located near both the Amazon and the Cerrado, Pantanal
            harbors many plant and animal species from both biomes, besides
            housing many endemic species;
          </p>
          <p>
            Due to its rich biodiversity, Pantanal was considered by UNESCO  as
            a World Heritage Site.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
