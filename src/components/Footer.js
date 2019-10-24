import React from 'react';

import presentedByLogo from '../assets/images/leapfrog-open-source-logo-1x.png';

const Footer = () => (
  <footer className="text-sm px-8 text-center flex-none py-4 w-3/4 sm:w-1/2 lg:w-1/3 mx-auto mt-4">
    <a href="https://github.com/leapfrogtechnology/opensource">
      <img src={presentedByLogo} alt="Leapfrog Open Source Logo"></img>
    </a>
  </footer>
);

export default Footer;
