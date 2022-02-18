import React from 'react';

import ComercialCard from 'components/ComercialCard';

import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';

import './social-section.scss';

const SocialSection = () => {
  const socialItems = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com',
      svg: <FacebookIcon className="facebook" />,
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com',
      svg: <InstagramIcon className="svg" />,
    },
    {
      name: 'twitter',
      link: 'https://www.twitter.com',
      svg: <TwitterIcon />,
    },
  ];

  return (
    <div className="container">
      <ComercialCard
        className="container__card"
        heading="Sign up for our newsletter"
        description="Be the first to know when we launch a new product or when we need your support to rally for a cause.">
        <form className="sign-up">
          <button className="sign-up__sign-up-button item">Sign up</button>
        </form>
      </ComercialCard>
      <ComercialCard
        className="container__card"
        heading="Follow us"
        description="You know the drill. Show your support by following and sharing our message on social media."
        theme="dark">
        <nav className="section">
          <ul className="section__list">
            {socialItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer">
                {item.svg}
              </a>
            ))}
          </ul>
        </nav>
      </ComercialCard>
    </div>
  );
};

export default SocialSection;
