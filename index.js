//App file

//Import Classes Block and Blockchain
const Block = require('./simpleChain.js');
const Blockchain = require('./simpleChain.js');

//Create new blockchain
const myBlockChain = new Blockchain.Blockchain();    

//Adding Blocks to chain
(function theLoop (i) {
    setTimeout(function () {
        let blockTest = new Block.Block("Test Block - " + (i + 1));
        myBlockChain.addBlock(blockTest).then((result) => {
            //console.log(result);
            i++;
            if (i < 12) theLoop(i);
        });
    }, 200);
  })(0);

//Read the chain
setTimeout(function () {
    console.log("Reading Blockchain...");
    myBlockChain.chain.readChain();
},5000);


//Validate Chain
setTimeout(function () {
    console.log("Validating Blockchain...");
    myBlockChain.validateChain().then((result) => {
        if(result == true){
            console.log ("The Blockchain is validated without errors.");
        }else {
            console.log ("Errors in Blockchain validation.");
        }
    });
},8000);