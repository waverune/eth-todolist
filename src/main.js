

contractJSON = {
 
}

  // import contractJSON from '../build/contracts/TodoList.json'
  //import Web3 from 'web3'
  //var fs = require('fs');
  // load smart contract json
  //var contractJSON = require('../.. /build/contracts/TodoList.json')
  //var contractJSON = JSON.parse(fs.readFileSync('../build/contracts/TodoList.json').toString());

  //hardcoded contractJSON >>
  const abi = contractJSON.abi;
  const bytecode = contractJSON.bytecode;


  //test
  // const accounts = await ethereum.request({ method: 'eth_accounts' });
  // console.log(accounts);




  var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8545');






//instance
//acs =  (web3.eth.getAccounts(console.log) );
const a0 =  '0x881989B612e7Fc2465fF9D50cf44037E0802507C';   // default account
contract_address ='0x598231F4B42cFeE0366F425CF71CE44c9Bb161fa';   // deployed contract address on the blockchain blocka blockchain



// web3 checker
let acx;
let acs = web3.eth.getAccounts().then(e => (acx = e));


//instantiate contract instance
var instance = new web3.eth.Contract(
  abi,
  contract_address,
  { from: a0, data: bytecode,gas: '672197'}
);


  // enable metask with web3


  const ethEnabled = async () => {
    if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    window.web3 = new Web3(window.ethereum);
    return true;
  }
    return false;
  }

  //memtamaskkkkkkkkkkkkk
  const initialize = () => {
    //Basic Actions Section
    const onboardButton = document.getElementById('xxx');
  };

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };


  const onboarding = new MetaMaskOnboarding();  //{ forwarderOrigin }

  onboarding.startOnboarding();


  // const onClickConnect = async () => {
  //   try {
  //     // Will open the MetaMask UI
  //     // You should disable this button while the request is pending!
  //     await ethereum.request({ method: 'eth_requestAccounts' });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  //const accounts = await ethereum.request({ method: 'eth_accounts' });



  web3.eth.getBlockNumber(function (error, result) {

    console.log(result)

  })

  /// async methods

  async function getTask(tc){
    try{
      await  instance.methods.tasks(tc).call().then(a => console.log("tasck  : "+ a.content));

    } catch(e){
      console.log(Error,e);  }
    }

    async function gettGreet(){
      try{
        await  instance.methods.getGreet().call().then(a => alert(a));

      } catch(e){
        console.log(Error,e);  }
      }

      async function setGreet(_greet){try {
        await instance.methods.setGreet(_greet).send({from: a0 });
      } catch (e) {
        console.log(Error,e);
      }
    }

    async function createTask(currentTask){
      try {
        await instance.methods.createTask(currentTask).send({from: a0});
      } catch (e) {
        console.log(Error,e);
      }
    }

    async function getBalance(address){
      web3.eth.getBalance(address, (err, wei) => {
        balance = web3.utils.fromWei(wei, 'ether')
        return balance;
      })

    }



    //instance.methods.getGreet().call().then(console.log() );
    //instance.methods.getGreet().call({from:a0} ).then(console.log);
    //console.log(instance.methods.setGreet("yellow").send({from:a0}));
