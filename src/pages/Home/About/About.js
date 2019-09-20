import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="About">
      <div className="About-main">
        <h2>
          Hotel Blue Lagoon Dubrovnik, an icon of private boutique luxury and
          design, has re-emerged with a fresh new vibe after its complete
          refurbishment in spring 2019. Carved into a cliffside, with
          floor-to-ceiling windows revealing the vast Adriatic, five-star
          boutique Blue Lagoon Dubrovnik is a state-of-the-art seaside
          retreat around the bay from Dubrovnik’s a magnificent 6th-century Old
          Town.
        </h2>
        <div className="About-main__bottom">
          <div className="About-main__bottom--left">
            Strikingly set on a 30m-high cliff on Miramare Bay, Hotel Blue Lagoon
            Dubrovnik gives you some of the most cinematic panoramas of the
            Dalmatian coast. From the moment you arrive, you’re immersed in a
            world of contemporary luxury and elegant service that makes you feel
            as if you’re on your own private ocean liner.
          </div>
          <div className="About-main__bottom--right">
            Yet it is just a 10-minute walk down to the mesmerising medieval
            city centre. Which means you have the best of both worlds. At the
            bottom of the cliff a pebble beach invites you to lie on a sun
            lounger, so there’s not far to go when you’re in the mood to lie
            back and soak up the hot Mediterranean sun.
          </div>
        </div>
        <span className="box">HOTEL BLUE LAGOON DETAILS</span>
      </div>
    </section>
  );
};

export default About;
