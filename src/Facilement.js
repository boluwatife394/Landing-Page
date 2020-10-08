import React from 'react';
import meeting from './img/meeting.jpg';

export default function Facilement() {
  return (
    <section className="cone">
      <div className="client">
        <div className="generate">
          <h5>Client devis et projets</h5>
          <h1>
            Gerez facilement <br /> vos clients et davis
          </h1>
          <p>
            <i className="far fa-check-circle"></i> Ajoutez vos clients et
            visualisez vos projets
          </p>
          <p>
            <i className="far fa-check-circle"></i> Analysez les chiffres lies
          </p>
          <p>
            <i className="far fa-check-circle"></i> Generez des devis
            esthetiques facilement
          </p>
        </div>

        <div className="calculate">
          <img src={meeting} alt="" />
        </div>
      </div>
    </section>
  );
}
