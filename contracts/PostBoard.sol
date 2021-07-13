pragma solidity ^0.5.0;
contract  PostBoard{


  uint randMod = 16;      // uuid

  struct Post{
    uint uuid;
    //    uint endTime;  // in days             epoch time
    /* uint isDeprecated; */
    string content;
  }

  Post[] public posts;
  uint[] public postsEndTime;  // indexed by post id
  mapping(uint => address) postToOwner;
  mapping(address => uint) ownerPostCount;

  constructor() public {
    createPost(11,"bingo");
  }

  function createPost(uint _endTime, string memory _content) public{

    uint _postId = posts.push( Post( _generateUUID(_content), _content) ) - 1 ;
    postsEndTime.push(uint(now + (_endTime*86400)));
    postToOwner[_postId] = msg.sender;
    ownerPostCount[msg.sender]++;
  }

  function getArray() public view returns(uint[] memory){
    return postsEndTime;
  }

  //_generateUUID returns randMod digits random num;
  function _generateUUID(string memory _str) private view returns(uint) {
    uint rand = uint(keccak256(abi.encodePacked(_str)));
    return  rand % randMod;
  }

  //deprecator   since delete is
  function deprecateExpiredPost(uint _postId) private{
    // automatic post deprecation
    //
  }

  //time can only be extended further
  //will create a new post with the same post id ?
  /* // how?
  function updateTime(uint _newEndTime, uint _postId){
  require(posts[_postId].endTime > now);     // post cannot be update after end time

  } */

  modifier onlyOwnerOf(uint _postId){
    require(msg.sender == postToOwner[_postId]);
    _;
  }

  /* function setGreet(string memory _greet) public{
  greet = _greet;
}

function getGreet() public view returns(string memory) {
return greet;
} */

}
