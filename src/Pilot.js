import React from 'react';
import social from './img/group.png';
import folder from './img/folder.png';
import cup from './img/cup.png';
import book from './img/book.png';

export default function Pilot() {
  return (
    <section className="pilot">
      <div className="icons">
        <p>
          <img src={social} alt="social" />
          Our links
        </p>
        <p>
          <img src={folder} alt="folder" />
          Our Files
        </p>
        <p>
          <img src={book} alt="book" />
          Our Notes
        </p>
        <p>
          <img src={cup} alt="cup" />
          Our Chiffres
        </p>
      </div>

      <div className="plain">
        <h1>
          Mettez votre micro- <br /> enterprise en auto <br /> pilote.
        </h1>
        <h5 className="meet">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          officiis unde ad enim quasi tempora doloribus. Sapiente labore
          voluptatibus soluta fuga, iste cupiditate mollitia reprehenderit
          aliquid suscipit tenetur explicabo quae.
        </h5>
      </div>
    </section>
  );
}
