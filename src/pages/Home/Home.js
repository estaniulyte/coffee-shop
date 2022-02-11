import ComercialCard from 'components/ComercialCard';
import React from 'react';

import './home.scss';

const Home = () => {
  return (
    <main>
      <div className="comercial">
        <ComercialCard
          className="comercial__card"
          heading="Sign up for our newsletter"
          description="Be the first to know when we launch a new product or when we need your support to rally for a cause."
        />
        <ComercialCard
          className="comercial__card"
          heading="Follow us"
          description="You know the drill. Show your support by following and sharing our message on social media.."
        />
      </div>
    </main>
  );
};

export default Home;
