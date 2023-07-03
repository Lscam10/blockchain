// import web3 from './web3Connection';
import web3 from './web3';
import Record from '../ethereum/build/Record.json';


//var contract = await new web3.eth.Contract(abi, address);
const instance = new web3.eth.Contract((Record.abi),
'0x5718F4F37C30466FEB99a34e41EA562cbF5d3AA1'
// '0x71F8A4045Ae545715447604D198c6be7F7998DDC'
       
);

export default instance;
