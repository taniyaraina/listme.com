import React from 'react';
import Features from './Features';

const FeatureItem = ({ secondary }) => (
  <div>
    {secondary ? (
      <Features
        subtitle="App Solution"
        title="Socialise with ListME Across the Globe"
        iconOne="/images/contacticon.png"
        titleOne="Entry without the need of a wallet. ListMe APP is your ID and G-token"
        iconTwo="/images/contacticon2.png"
        titleTwo="Get guest-listed multiple times while only paying for entry."
        iconThree="/images/contacticon3.png"
        titleThree="Explore the event that suits your taste. Check up ListMe for the events you might just like"
        iconFour="/images/contacticon4.png"
        titleFour="Meet new people, find new friends and get immersed in the night time experience."
      />
    ) : (
      <Features
        title="Reap the benefit of digitization"
        iconOne="/images/contacticon.png"
        titleOne="We help you get customers to go cashless. Less work to be done means better efficiency."
        iconTwo="/images/safety-Icon.png"
        titleTwo="With the G-token, your customers can safely enjoy their night without the need of carrying their paper ID"
        iconThree="/images/Message-icon.png"
        titleThree="With the E-guest list, your door pickers never have to stare at a long queue of angry customers waiting to get into the venue anymore."
        iconFour="/images/garbage-icon.png"
        titleFour="The ListMe is the bridge between you and customers. Create a real trendy event through messaging and photo feeds!"
      />
    )}
  </div>
);
export default FeatureItem;
