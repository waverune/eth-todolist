#  instructions

clone the repo
##  1. install dependencies  {installs dependencies in package.json}
  ### npm install
##  2. Download Ganache or use ganache-cli { https://www.trufflesuite.com/ganache }  // creates personal ethereum blockchain w 10 default accounts 100 ether

##  3. Run ganache with network port 8545  {or configure port accordingly in truffle-config.js}

##  4. Run the following commands <br>
    ### a) truffle compile    <br>
    ### b) truffle migrate --reset       {now the contract is deployed on the blockchain}


##  5. put default account from ganache in a0 & also set deployed contract Address in main.js // bad design

##  6. install metamask extension in the browser { https://metamask.io }   // crypto wallet

##  7. npm run dev {with liteserver webpage is hosted on localhost}
