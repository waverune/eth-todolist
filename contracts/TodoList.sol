pragma solidity ^0.5.0;
    contract  TodoList{

    string public greet;

    uint public taskCount = 0;    // state var:memory

    struct Task{
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    constructor() public {
        createTask("Los angeles ");
        greet = "Hello world";
    }

    function createTask(string memory _content)  public   {
        taskCount++;
        tasks[taskCount] = Task(taskCount,_content, false);
    }

    function setGreet(string memory _greet)public  {
      greet = _greet;
    }

    function getGreet() public view returns(string memory){
      return greet;
    }

}
