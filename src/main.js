

contractJSON = {
  "contractName": "TodoList",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "greet",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "taskCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tasks",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "content",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_content",
          "type": "string"
        }
      ],
      "name": "createTask",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_greet",
          "type": "string"
        }
      ],
      "name": "setGreet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getGreet",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_content\",\"type\":\"string\"}],\"name\":\"createTask\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getGreet\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"greet\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_greet\",\"type\":\"string\"}],\"name\":\"setGreet\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"taskCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tasks\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"content\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"completed\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/waverune/eth-todo-list/contracts/TodoList.sol\":\"TodoList\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/waverune/eth-todo-list/contracts/TodoList.sol\":{\"keccak256\":\"0x1840413d5df7dded2109248c37c840be4dd984b5a0f694f26553980e0b7bcc17\",\"urls\":[\"bzz-raw://794d6edfc230a4255f227d03609564686ddd6c4e961f3acb54fc17bdd3687139\",\"dweb:/ipfs/QmRLegDZtzdZsPDVdyH3nCu5LKnQD2Wnf7AafQEfnPSc8S\"]}},\"version\":1}",
  "bytecode": "0x6080604052600060015534801561001557600080fd5b5060408051808201909152600c81526b02637b99030b733b2b632b9960a51b602082015261004b906001600160e01b0361008316565b60408051808201909152600b8082526a12195b1b1bc81ddbdc9b1960aa1b602090920191825261007d916000916100ee565b50610189565b600180548101808255604080516060810182528281526020808201868152600083850181905294855260028252929093208151815591518051919492936100cf938501929101906100ee565b50604091909101516002909101805460ff191691151591909117905550565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012f57805160ff191683800117855561015c565b8280016001018555821561015c579182015b8281111561015c578251825591602001919060010190610141565b5061016892915061016c565b5090565b61018691905b808211156101685760008155600101610172565b90565b610623806101986000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063111002aa146100675780638d9776721461010f5780639698086b146101b6578063b6cb58a51461025c578063cfae321714610276578063d705a4b5146102f3575b600080fd5b61010d6004803603602081101561007d57600080fd5b81019060208101813564010000000081111561009857600080fd5b8201836020820111156100aa57600080fd5b803590602001918460018302840111640100000000831117156100cc57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102fb945050505050565b005b61012c6004803603602081101561012557600080fd5b5035610366565b604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b83811015610179578181015183820152602001610161565b50505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b61010d600480360360208110156101cc57600080fd5b8101906020810181356401000000008111156101e757600080fd5b8201836020820111156101f957600080fd5b8035906020019184600183028401116401000000008311171561021b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610414945050505050565b61026461042b565b60408051918252519081900360200190f35b61027e610431565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102b85781810151838201526020016102a0565b50505050905090810190601f1680156102e55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61027e6104bf565b6001805481018082556040805160608101825282815260208082018681526000838501819052948552600282529290932081518155915180519194929361034793850192910190610556565b50604091909101516002909101805460ff191691151591909117905550565b60026020818152600092835260409283902080546001808301805487519281161561010002600019011695909504601f81018590048502820185019096528581529094919390929091908301828280156104015780601f106103d657610100808354040283529160200191610401565b820191906000526020600020905b8154815290600101906020018083116103e457829003601f168201915b5050506002909301549192505060ff1683565b8051610427906000906020840190610556565b5050565b60015481565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104b75780601f1061048c576101008083540402835291602001916104b7565b820191906000526020600020905b81548152906001019060200180831161049a57829003601f168201915b505050505081565b60008054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561054b5780601f106105205761010080835404028352916020019161054b565b820191906000526020600020905b81548152906001019060200180831161052e57829003601f168201915b505050505090505b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061059757805160ff19168380011785556105c4565b828001600101855582156105c4579182015b828111156105c45782518255916020019190600101906105a9565b506105d09291506105d4565b5090565b61055391905b808211156105d057600081556001016105da56fea265627a7a72315820e85726e693c3ed4451f29236d89646d38b9a71a33245ae6613db4fc01cc5b50f64736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c8063111002aa146100675780638d9776721461010f5780639698086b146101b6578063b6cb58a51461025c578063cfae321714610276578063d705a4b5146102f3575b600080fd5b61010d6004803603602081101561007d57600080fd5b81019060208101813564010000000081111561009857600080fd5b8201836020820111156100aa57600080fd5b803590602001918460018302840111640100000000831117156100cc57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102fb945050505050565b005b61012c6004803603602081101561012557600080fd5b5035610366565b604051808481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b83811015610179578181015183820152602001610161565b50505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b61010d600480360360208110156101cc57600080fd5b8101906020810181356401000000008111156101e757600080fd5b8201836020820111156101f957600080fd5b8035906020019184600183028401116401000000008311171561021b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610414945050505050565b61026461042b565b60408051918252519081900360200190f35b61027e610431565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102b85781810151838201526020016102a0565b50505050905090810190601f1680156102e55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61027e6104bf565b6001805481018082556040805160608101825282815260208082018681526000838501819052948552600282529290932081518155915180519194929361034793850192910190610556565b50604091909101516002909101805460ff191691151591909117905550565b60026020818152600092835260409283902080546001808301805487519281161561010002600019011695909504601f81018590048502820185019096528581529094919390929091908301828280156104015780601f106103d657610100808354040283529160200191610401565b820191906000526020600020905b8154815290600101906020018083116103e457829003601f168201915b5050506002909301549192505060ff1683565b8051610427906000906020840190610556565b5050565b60015481565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104b75780601f1061048c576101008083540402835291602001916104b7565b820191906000526020600020905b81548152906001019060200180831161049a57829003601f168201915b505050505081565b60008054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561054b5780601f106105205761010080835404028352916020019161054b565b820191906000526020600020905b81548152906001019060200180831161052e57829003601f168201915b505050505090505b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061059757805160ff19168380011785556105c4565b828001600101855582156105c4579182015b828111156105c45782518255916020019190600101906105a9565b506105d09291506105d4565b5090565b61055391905b808211156105d057600081556001016105da56fea265627a7a72315820e85726e693c3ed4451f29236d89646d38b9a71a33245ae6613db4fc01cc5b50f64736f6c63430005100032",
  "sourceMap": "27:651:1:-;;;102:1;78:25;;263:95;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;294:26:1;;;;;;;;;;;;-1:-1:-1;;;294:26:1;;;;;;-1:-1:-1;;;;;294:10:1;:26;:::i;:::-;330:21;;;;;;;;;;;;;-1:-1:-1;;;330:21:1;;;;;;;;;-1:-1:-1;;330:21:1;:::i;:::-;;27:651;;364:142;428:9;:11;;;;;;;468:31;;;;;;;;;;;;;;;;;;428:9;468:31;;;;;;449:16;;;:5;:16;;;;;;:50;;;;;;;;468:31;;449:16;;:50;;;;;;;;;:::i;:::-;-1:-1:-1;449:50:1;;;;;;;;;;;;-1:-1:-1;;449:50:1;;;;;;;;;;-1:-1:-1;364:142:1:o;27:651::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;27:651:1;;;-1:-1:-1;27:651:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "27:651:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;27:651:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:142;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;364:142:1;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;364:142:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;364:142:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;364:142:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;364:142:1;;-1:-1:-1;364:142:1;;-1:-1:-1;;;;;364:142:1:i;:::-;;222:34;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;222:34:1;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;222:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;512:76;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;512:76:1;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;512:76:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;512:76:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;512:76:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;512:76:1;;-1:-1:-1;512:76:1;;-1:-1:-1;;;;;512:76:1:i;78:25::-;;;:::i;:::-;;;;;;;;;;;;;;;;52:19;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;52:19:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;594:81;;;:::i;364:142::-;428:9;:11;;;;;;;468:31;;;;;;;;;;;;;;;;;;428:9;468:31;;;;;;449:16;;;:5;:16;;;;;;:50;;;;;;;;468:31;;449:16;;:50;;;;;;;;;:::i;:::-;-1:-1:-1;449:50:1;;;;;;;;;;;;-1:-1:-1;;449:50:1;;;;;;;;;;-1:-1:-1;364:142:1:o;222:34::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;222:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;222:34:1;;;;;;;-1:-1:-1;;222:34:1;;;:::o;512:76::-;567:14;;;;:5;;:14;;;;;:::i;:::-;;512:76;:::o;78:25::-;;;;:::o;52:19::-;;;;;;;;;;;;;;;-1:-1:-1;;52:19:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;594:81::-;663:5;656:12;;;;;;;;-1:-1:-1;;656:12:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;634:13;;656:12;;663:5;;656:12;;663:5;656:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;594:81;;:::o;27:651::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;27:651:1;;;-1:-1:-1;27:651:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;",
  "source": "pragma solidity^0.5.0;\n    contract  TodoList{\n\n    string public greet;\n\n    uint public taskCount = 0;    // state var:memory\n\n    struct Task{\n        uint id;\n        string content;\n        bool completed;\n    }\n\n    mapping(uint => Task) public tasks;\n\n    constructor() public {\n        createTask(\"Los angeles \");\n        greet = \"Hello world\";\n    }\n\n    function createTask(string memory _content)  public   {\n        taskCount++;\n        tasks[taskCount] = Task(taskCount,_content, false);\n    }\n\n    function setGreet(string memory _greet)public  {\n      greet = _greet;\n    }\n\n    function getGreet() public view returns(string memory){\n      return greet;\n    }\n\n}\n",
  "sourcePath": "/home/waverune/eth-todo-list/contracts/TodoList.sol",
  "ast": {
    "absolutePath": "/home/waverune/eth-todo-list/contracts/TodoList.sol",
    "exportedSymbols": {
      "TodoList": [
        100
      ]
    },
    "id": 101,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 100,
        "linearizedBaseContracts": [
          100
        ],
        "name": "TodoList",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 36,
            "name": "greet",
            "nodeType": "VariableDeclaration",
            "scope": 100,
            "src": "52:19:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 35,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "52:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 39,
            "name": "taskCount",
            "nodeType": "VariableDeclaration",
            "scope": 100,
            "src": "78:25:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 37,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "78:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 38,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "102:1:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "canonicalName": "TodoList.Task",
            "id": 46,
            "members": [
              {
                "constant": false,
                "id": 41,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "154:7:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 40,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "154:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 43,
                "name": "content",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "171:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 42,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "171:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 45,
                "name": "completed",
                "nodeType": "VariableDeclaration",
                "scope": 46,
                "src": "195:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 44,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "195:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Task",
            "nodeType": "StructDefinition",
            "scope": 100,
            "src": "133:83:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 50,
            "name": "tasks",
            "nodeType": "VariableDeclaration",
            "scope": 100,
            "src": "222:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$46_storage_$",
              "typeString": "mapping(uint256 => struct TodoList.Task)"
            },
            "typeName": {
              "id": 49,
              "keyType": {
                "id": 47,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "230:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "222:21:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$46_storage_$",
                "typeString": "mapping(uint256 => struct TodoList.Task)"
              },
              "valueType": {
                "contractScope": null,
                "id": 48,
                "name": "Task",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 46,
                "src": "238:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Task_$46_storage_ptr",
                  "typeString": "struct TodoList.Task"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 61,
              "nodeType": "Block",
              "src": "284:74:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "4c6f7320616e67656c657320",
                        "id": 54,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "305:14:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_927642a8d9896b242f406ae4667d35c4bd8b5c231694ee3ef12f43f249ea1ea6",
                          "typeString": "literal_string \"Los angeles \""
                        },
                        "value": "Los angeles "
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_927642a8d9896b242f406ae4667d35c4bd8b5c231694ee3ef12f43f249ea1ea6",
                          "typeString": "literal_string \"Los angeles \""
                        }
                      ],
                      "id": 53,
                      "name": "createTask",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 81,
                      "src": "294:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 55,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "294:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56,
                  "nodeType": "ExpressionStatement",
                  "src": "294:26:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 57,
                      "name": "greet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36,
                      "src": "330:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "48656c6c6f20776f726c64",
                      "id": 58,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "338:13:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_ed6c11b0b5b808960df26f5bfc471d04c1995b0ffd2055925ad1be28d6baadfd",
                        "typeString": "literal_string \"Hello world\""
                      },
                      "value": "Hello world"
                    },
                    "src": "330:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "330:21:1"
                }
              ]
            },
            "documentation": null,
            "id": 62,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:2:1"
            },
            "returnParameters": {
              "id": 52,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "284:0:1"
            },
            "scope": 100,
            "src": "263:95:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 80,
              "nodeType": "Block",
              "src": "418:88:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "428:11:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 67,
                      "name": "taskCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39,
                      "src": "428:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "428:11:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 78,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 70,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50,
                        "src": "449:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Task_$46_storage_$",
                          "typeString": "mapping(uint256 => struct TodoList.Task storage ref)"
                        }
                      },
                      "id": 72,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 71,
                        "name": "taskCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 39,
                        "src": "455:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "449:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$46_storage",
                        "typeString": "struct TodoList.Task storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 74,
                          "name": "taskCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39,
                          "src": "473:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 75,
                          "name": "_content",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 64,
                          "src": "483:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 76,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "493:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 73,
                        "name": "Task",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46,
                        "src": "468:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Task_$46_storage_ptr_$",
                          "typeString": "type(struct TodoList.Task storage pointer)"
                        }
                      },
                      "id": 77,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "468:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Task_$46_memory",
                        "typeString": "struct TodoList.Task memory"
                      }
                    },
                    "src": "449:50:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Task_$46_storage",
                      "typeString": "struct TodoList.Task storage ref"
                    }
                  },
                  "id": 79,
                  "nodeType": "ExpressionStatement",
                  "src": "449:50:1"
                }
              ]
            },
            "documentation": null,
            "id": 81,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createTask",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64,
                  "name": "_content",
                  "nodeType": "VariableDeclaration",
                  "scope": 81,
                  "src": "384:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "384:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "383:24:1"
            },
            "returnParameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "418:0:1"
            },
            "scope": 100,
            "src": "364:142:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 90,
              "nodeType": "Block",
              "src": "559:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 86,
                      "name": "greet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36,
                      "src": "567:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 87,
                      "name": "_greet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 83,
                      "src": "575:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "567:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 89,
                  "nodeType": "ExpressionStatement",
                  "src": "567:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 91,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setGreet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 83,
                  "name": "_greet",
                  "nodeType": "VariableDeclaration",
                  "scope": 91,
                  "src": "530:20:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 82,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "530:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "529:22:1"
            },
            "returnParameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "559:0:1"
            },
            "scope": 100,
            "src": "512:76:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 98,
              "nodeType": "Block",
              "src": "648:27:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 96,
                    "name": "greet",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 36,
                    "src": "663:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 95,
                  "id": 97,
                  "nodeType": "Return",
                  "src": "656:12:1"
                }
              ]
            },
            "documentation": null,
            "id": 99,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getGreet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:2:1"
            },
            "returnParameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 94,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 99,
                  "src": "634:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "634:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "633:15:1"
            },
            "scope": 100,
            "src": "594:81:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 101,
        "src": "27:651:1"
      }
    ],
    "src": "0:679:1"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/home/waverune/eth-todo-list/contracts/TodoList.sol",
      "exportedSymbols": {
        "TodoList": [
          100
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".0"
          ]
        },
        "id": 34,
        "name": "PragmaDirective",
        "src": "0:22:1"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            100
          ],
          "name": "TodoList",
          "scope": 101
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "greet",
              "scope": 100,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 35,
                "name": "ElementaryTypeName",
                "src": "52:6:1"
              }
            ],
            "id": 36,
            "name": "VariableDeclaration",
            "src": "52:19:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "taskCount",
              "scope": 100,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 37,
                "name": "ElementaryTypeName",
                "src": "78:4:1"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "30",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 0",
                  "value": "0"
                },
                "id": 38,
                "name": "Literal",
                "src": "102:1:1"
              }
            ],
            "id": 39,
            "name": "VariableDeclaration",
            "src": "78:25:1"
          },
          {
            "attributes": {
              "canonicalName": "TodoList.Task",
              "name": "Task",
              "scope": 100,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 46,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 40,
                    "name": "ElementaryTypeName",
                    "src": "154:4:1"
                  }
                ],
                "id": 41,
                "name": "VariableDeclaration",
                "src": "154:7:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "content",
                  "scope": 46,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 42,
                    "name": "ElementaryTypeName",
                    "src": "171:6:1"
                  }
                ],
                "id": 43,
                "name": "VariableDeclaration",
                "src": "171:14:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "completed",
                  "scope": 46,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "bool",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bool",
                      "type": "bool"
                    },
                    "id": 44,
                    "name": "ElementaryTypeName",
                    "src": "195:4:1"
                  }
                ],
                "id": 45,
                "name": "VariableDeclaration",
                "src": "195:14:1"
              }
            ],
            "id": 46,
            "name": "StructDefinition",
            "src": "133:83:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tasks",
              "scope": 100,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => struct TodoList.Task)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => struct TodoList.Task)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 47,
                    "name": "ElementaryTypeName",
                    "src": "230:4:1"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Task",
                      "referencedDeclaration": 46,
                      "type": "struct TodoList.Task"
                    },
                    "id": 48,
                    "name": "UserDefinedTypeName",
                    "src": "238:4:1"
                  }
                ],
                "id": 49,
                "name": "Mapping",
                "src": "222:21:1"
              }
            ],
            "id": 50,
            "name": "VariableDeclaration",
            "src": "222:34:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "modifiers": [
                null
              ],
              "name": "",
              "scope": 100,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 51,
                "name": "ParameterList",
                "src": "274:2:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 52,
                "name": "ParameterList",
                "src": "284:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_927642a8d9896b242f406ae4667d35c4bd8b5c231694ee3ef12f43f249ea1ea6",
                                  "typeString": "literal_string \"Los angeles \""
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 81,
                              "type": "function (string memory)",
                              "value": "createTask"
                            },
                            "id": 53,
                            "name": "Identifier",
                            "src": "294:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "4c6f7320616e67656c657320",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Los angeles \"",
                              "value": "Los angeles "
                            },
                            "id": 54,
                            "name": "Literal",
                            "src": "305:14:1"
                          }
                        ],
                        "id": 55,
                        "name": "FunctionCall",
                        "src": "294:26:1"
                      }
                    ],
                    "id": 56,
                    "name": "ExpressionStatement",
                    "src": "294:26:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 36,
                              "type": "string storage ref",
                              "value": "greet"
                            },
                            "id": 57,
                            "name": "Identifier",
                            "src": "330:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "48656c6c6f20776f726c64",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Hello world\"",
                              "value": "Hello world"
                            },
                            "id": 58,
                            "name": "Literal",
                            "src": "338:13:1"
                          }
                        ],
                        "id": 59,
                        "name": "Assignment",
                        "src": "330:21:1"
                      }
                    ],
                    "id": 60,
                    "name": "ExpressionStatement",
                    "src": "330:21:1"
                  }
                ],
                "id": 61,
                "name": "Block",
                "src": "284:74:1"
              }
            ],
            "id": 62,
            "name": "FunctionDefinition",
            "src": "263:95:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "createTask",
              "scope": 100,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_content",
                      "scope": 81,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 63,
                        "name": "ElementaryTypeName",
                        "src": "384:6:1"
                      }
                    ],
                    "id": 64,
                    "name": "VariableDeclaration",
                    "src": "384:22:1"
                  }
                ],
                "id": 65,
                "name": "ParameterList",
                "src": "383:24:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 66,
                "name": "ParameterList",
                "src": "418:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 39,
                              "type": "uint256",
                              "value": "taskCount"
                            },
                            "id": 67,
                            "name": "Identifier",
                            "src": "428:9:1"
                          }
                        ],
                        "id": 68,
                        "name": "UnaryOperation",
                        "src": "428:11:1"
                      }
                    ],
                    "id": 69,
                    "name": "ExpressionStatement",
                    "src": "428:11:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct TodoList.Task storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct TodoList.Task storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 50,
                                  "type": "mapping(uint256 => struct TodoList.Task storage ref)",
                                  "value": "tasks"
                                },
                                "id": 70,
                                "name": "Identifier",
                                "src": "449:5:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 39,
                                  "type": "uint256",
                                  "value": "taskCount"
                                },
                                "id": 71,
                                "name": "Identifier",
                                "src": "455:9:1"
                              }
                            ],
                            "id": 72,
                            "name": "IndexAccess",
                            "src": "449:16:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": true,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "struct TodoList.Task memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    },
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 46,
                                  "type": "type(struct TodoList.Task storage pointer)",
                                  "value": "Task"
                                },
                                "id": 73,
                                "name": "Identifier",
                                "src": "468:4:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 39,
                                  "type": "uint256",
                                  "value": "taskCount"
                                },
                                "id": 74,
                                "name": "Identifier",
                                "src": "473:9:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 64,
                                  "type": "string memory",
                                  "value": "_content"
                                },
                                "id": 75,
                                "name": "Identifier",
                                "src": "483:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "66616c7365",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "false"
                                },
                                "id": 76,
                                "name": "Literal",
                                "src": "493:5:1"
                              }
                            ],
                            "id": 77,
                            "name": "FunctionCall",
                            "src": "468:31:1"
                          }
                        ],
                        "id": 78,
                        "name": "Assignment",
                        "src": "449:50:1"
                      }
                    ],
                    "id": 79,
                    "name": "ExpressionStatement",
                    "src": "449:50:1"
                  }
                ],
                "id": 80,
                "name": "Block",
                "src": "418:88:1"
              }
            ],
            "id": 81,
            "name": "FunctionDefinition",
            "src": "364:142:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "setGreet",
              "scope": 100,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_greet",
                      "scope": 91,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 82,
                        "name": "ElementaryTypeName",
                        "src": "530:6:1"
                      }
                    ],
                    "id": 83,
                    "name": "VariableDeclaration",
                    "src": "530:20:1"
                  }
                ],
                "id": 84,
                "name": "ParameterList",
                "src": "529:22:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 85,
                "name": "ParameterList",
                "src": "559:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 36,
                              "type": "string storage ref",
                              "value": "greet"
                            },
                            "id": 86,
                            "name": "Identifier",
                            "src": "567:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 83,
                              "type": "string memory",
                              "value": "_greet"
                            },
                            "id": 87,
                            "name": "Identifier",
                            "src": "575:6:1"
                          }
                        ],
                        "id": 88,
                        "name": "Assignment",
                        "src": "567:14:1"
                      }
                    ],
                    "id": 89,
                    "name": "ExpressionStatement",
                    "src": "567:14:1"
                  }
                ],
                "id": 90,
                "name": "Block",
                "src": "559:29:1"
              }
            ],
            "id": 91,
            "name": "FunctionDefinition",
            "src": "512:76:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getGreet",
              "scope": 100,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 92,
                "name": "ParameterList",
                "src": "611:2:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 99,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 93,
                        "name": "ElementaryTypeName",
                        "src": "634:6:1"
                      }
                    ],
                    "id": 94,
                    "name": "VariableDeclaration",
                    "src": "634:13:1"
                  }
                ],
                "id": 95,
                "name": "ParameterList",
                "src": "633:15:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 95
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 36,
                          "type": "string storage ref",
                          "value": "greet"
                        },
                        "id": 96,
                        "name": "Identifier",
                        "src": "663:5:1"
                      }
                    ],
                    "id": 97,
                    "name": "Return",
                    "src": "656:12:1"
                  }
                ],
                "id": 98,
                "name": "Block",
                "src": "648:27:1"
              }
            ],
            "id": 99,
            "name": "FunctionDefinition",
            "src": "594:81:1"
          }
        ],
        "id": 100,
        "name": "ContractDefinition",
        "src": "27:651:1"
      }
    ],
    "id": 101,
    "name": "SourceUnit",
    "src": "0:679:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x598231F4B42cFeE0366F425CF71CE44c9Bb161fa",
      "transactionHash": "0x0ee22f3132223cb6d2ffbffa7e95d1443827bc34f7c12b10ddd14573f67dde0d"
    },
    "1625115382705": {
      "events": {},
      "links": {},
      "address": "0x138f9CD23495F716E3c38EF3858902eAaDEc8110",
      "transactionHash": "0x5d7144d052719fce2345099c9bfa3d956c4cd12b59922626bd162e88cefbad29"
    }
  },
  "schemaVersion": "3.4.1",
  "updatedAt": "2021-07-04T17:51:03.467Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
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


    let obj =[
      '0x3C671b2752D3D3d4dBCF7996d61cbb4EDdd5079f',
      '0xDd952bC0057414DB45437C5AFFF868Ce9F79D82d',
      '0x4A360ec366Db01Ed02A3598721cC883bd1F8D49d',
      '0x3c0B639DBccc242de9389226BdBB9f0E35207667',
      '0xA948C285Ed474ADeFCd2f0E72dfa05C29B81353A',
      '0x535003A18578Bcb578f60201234bFee615489FF5',
      '0xc392b46e2D3723ddf7D597C7106086355d69956E',
      '0x7770c1e47b3bAA42846700Fb35E02690C45BACF5',
      '0x487dB7a919ad863c258210fcfac310398d3B651E',
      '0x68614a0168c03488b764e34C8a3b6E1c808bC5F4'
    ];




    //instance.methods.getGreet().call().then(console.log() );
    //instance.methods.getGreet().call({from:a0} ).then(console.log);
    //console.log(instance.methods.setGreet("yellow").send({from:a0}));
