pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract  PostBoard is Ownable{
  string greet ;
  uint randMod = 16;      // uuid length


  struct Post{
    uint uuid;
    string content;
    string title;
  }

  Post[] public posts;
  uint[] public postsEndTime;  // indexed by post id  //byte could be tried array ??
  mapping(uint => address) postToOwner;
  mapping(address => uint) ownerPostCount;

  constructor(string memory _greet) {
    createPost(999,"Init Paste","init title");
    greet = _greet;   // owners greet just checking getters and setters
  }

  /// methods
  function createPost(uint _endTime, string memory _content, string memory _title) public{

    //  uint _postId = posts.push( Post( _generateUUID(_content), _content, _title) ) - 1 ; // earlier push used to return length
    posts.push( Post( _generateUUID(_content), _content, _title) ) ; //

    uint _postId = posts.length;
    postsEndTime.push(uint(block.timestamp  + (_endTime*86400)));      // now is deprecated  so,block.timestamp is used
    postToOwner[_postId] = msg.sender;
    ownerPostCount[msg.sender]++;
  }
/*
  function editTitle(uint _postId, string memory _title) public {  // only endTime or title is editable
    require(msg.sender == postToOwner[_postId])    ;  // check for original postToOwner
    //reset _title
    posts[_postId].title = _title;

  }

  function editEndtime(uint _postId, uint _endTime) public {  // only endTime or title is editable
    require(msg.sender == postToOwner[_postId])    ;  // check for original postToOwner
    // reset endTime
    postsEndTime[_postId] = _endTime;
  }
 */

  // client side optimisation
  function getEndTimeArray() public view onlyOwner returns(uint[] memory){
    return postsEndTime;
  }

  //_generateUUID returns randMod digits random num;
  function _generateUUID(string memory _str) private view returns(uint){
    uint rand = uint(keccak256(abi.encodePacked(_str)));
    return  rand % randMod;
  }



  function setGreet(string memory _greet) public onlyOwner{
    greet = _greet;
  }

  function getGreet() public view returns(string memory) {
    return greet;
  }

  //time can only be extended further
  //will create a new post with the same post id ?
  /* // how?
  function updateTime(uint _newEndTime, uint _postId){
  require(posts[_postId].endTime > now);     // post cannot be update after end time

  } */

}
