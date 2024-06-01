/*
import { useState } from 'react';
import { Text, Page } from '@vercel/examples-ui';
import { Chat } from '../components/Chat';
import Wallet from '../components/WalletDigital';
import React from 'react';
import PriceDisplay from '../components/PriceDisplay';
import Trade from '../components/Trade';
import Image from 'next/image';

function Home() {
  const [paymentMade, setPaymentMade] = useState(false);

  const handlePayment = () => {
    // Logic to handle payment through the wallet
    // After successful payment, update the state
    setPaymentMade(true);
  };

  return (
    <Page className="relative flex flex-col gap-12">
      <Image
        src="/lovepik-big-data-technology-background-image_401731771.jpg"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0"
        alt="Background image of big data technology"
      />

      <div className="relative z-10">
        <div className="App">
          <h1>Cryptocurrency Trading App</h1>
          <PriceDisplay />
          <Trade />
        </div>
        <section className="flex flex-col gap-6">
          <Text variant="h1">WELCOME TO SCOUT-LAND</Text>
          <Text className="text-zinc-600">
            The trading house for purchasing and buying/borrowing sports players using Play-Coin.

            You are probably asking yourself what is "Play-Coin" and "Scout-Land", or what are we even talking about, so… 
            Meet the "Play-Coin" –The Future Sport Scouters Cryptographic Currency. 

            At Scout-Land, we believe in the creativity and independence of our users. This is actually the main reason why our platform, our tool, and cryptographic currency we created support the principle of "free-hand for users". Each of them was born for a number of clear purposes - First, to serve as a trading platform for sport scouters, to provide them the ability to trade athletes (at their level as users), and second, to allow them to make transactions in a convenient, efficient, self-evaluation and fast way, using an automation tool, that centralizes the information they need to make safe transactions.

            After brainstorming and business analysis, we came to realization that the sport scouters market is not "accessible enough". We believe that this huge market requires its own organized platform. Which will help the "talent hunters" to focus their search work, which in the first place, one of the main problems in it, is the fact that the information in it is very decentralized.
          </Text>
        </section>

        <section className="flex flex-col gap-3">
          <Wallet onPayment={handlePayment} />
        </section>

        {paymentMade && (
          <section className="flex flex-col gap-3">
            <Chat />
          </section>
        )}
      </div>
    </Page>
  );
}

export default Home;


//<WalletDigital onPayment={handlePayment} />

*/



/*

import { useState } from 'react';
import { Text, Page } from '@vercel/examples-ui';
import { Chat } from '../components/Chat';
import Wallet from '../components/WalletDigital'; // Updated import
import React from 'react';
import PriceDisplay from '../components/PriceDisplay';
import Trade from '../components/Trade';
import Image from 'next/image';

function Home() {
  const [paymentMade, setPaymentMade] = useState(false);

  const handlePayment = () => {
    setPaymentMade(true);
  };

  return (
    <Page className="relative flex flex-col gap-12">
      <Image
        src="/lovepik-big-data-technology-background-image_401731771.jpg"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0"
        alt="Background image of big data technology"
      />

      <div className="relative z-10">
        <div className="App">
          <h1>Cryptocurrency Trading App</h1>
          <PriceDisplay />
          <Trade />
        </div>
        <section className="flex flex-col gap-6">
          <Text variant="h1">WELCOME TO SCOUT-LAND</Text>
          <Text className="text-zinc-600">
            The trading house for purchasing and buying/borrowing sports players using Play-Coin.

            You are probably asking yourself what is "Play-Coin" and "Scout-Land", or what are we even talking about, so… 
            Meet the "Play-Coin" –The Future Sport Scouters Cryptographic Currency. 

            At Scout-Land, we believe in the creativity and independence of our users. This is actually the main reason why our platform, our tool, and cryptographic currency we created support the principle of "free-hand for users". Each of them was born for a number of clear purposes - First, to serve as a trading platform for sport scouters, to provide them the ability to trade athletes (at their level as users), and second, to allow them to make transactions in a convenient, efficient, self-evaluation and fast way, using an automation tool, that centralizes the information they need to make safe transactions.

            After brainstorming and business analysis, we came to realization that the sport scouters market is not "accessible enough". We believe that this huge market requires its own organized platform. Which will help the "talent hunters" to focus their search work, which in the first place, one of the main problems in it, is the fact that the information in it is very decentralized.
          </Text>
        </section>

        <section className="flex flex-col gap-3">
          <Wallet onPayment={handlePayment} /> {/* Pass the handlePayment function }
        </section>

        {paymentMade && (
          <section className="flex flex-col gap-3">
            <Chat />
          </section>
        )}
      </div>
    </Page>
  );
}

export default Home;

*/

import { useState } from 'react';
import { Text, Page } from '@vercel/examples-ui';
import { Chat } from '../components/Chat';
import Wallet from '../components/WalletDigital'; // Updated import
import React from 'react';
import PriceDisplay from '../components/PriceDisplay';
import Trade from '../components/Trade';
import Image from 'next/image';

function Home() {
  const [paymentMade, setPaymentMade] = useState(false);

  const handlePayment = () => {
    setPaymentMade(true);
  };

  return (
    <Page className="relative flex flex-col gap-12 min-h-screen">
      <Image
        src="/lovepik-big-data-technology-background-image_401731771.jpg"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0 w-full h-full"
        alt="Background image of big data technology"
      />

      <div className="relative z-10 flex flex-col gap-12 p-8 bg-white bg-opacity-80">
        <div className="App text-center">
          <h1 className="text-4xl font-bold">Cryptocurrency Trading App</h1>
          <PriceDisplay />
          <Trade />
        </div>

        <section className="flex flex-col gap-3">
          <Wallet onPayment={handlePayment} /> {/* Pass the handlePayment function */}
        </section>

        {paymentMade && (
          <section className="flex flex-col gap-3">
            <Chat />
          </section>
        )}
                <section className="flex flex-col gap-6">
          <Text variant="h1">WELCOME TO SCOUT-LAND</Text>
          <Text className="text-zinc-600">
            The trading house for purchasing and buying/borrowing sports players using Play-Coin.

            You are probably asking yourself what is "Play-Coin" and "Scout-Land", or what are we even talking about, so… 
            Meet the "Play-Coin" –The Future Sport Scouters Cryptographic Currency. 

            At Scout-Land, we believe in the creativity and independence of our users. This is actually the main reason why our platform, our tool, and cryptographic currency we created support the principle of "free-hand for users". Each of them was born for a number of clear purposes - First, to serve as a trading platform for sport scouters, to provide them the ability to trade athletes (at their level as users), and second, to allow them to make transactions in a convenient, efficient, self-evaluation and fast way, using an automation tool, that centralizes the information they need to make safe transactions.

            After brainstorming and business analysis, we came to realization that the sport scouters market is not "accessible enough". We believe that this huge market requires its own organized platform. Which will help the "talent hunters" to focus their search work, which in the first place, one of the main problems in it, is the fact that the information in it is very decentralized.
          </Text>
        </section>
      </div>
    </Page>
  );
}

export default Home;
