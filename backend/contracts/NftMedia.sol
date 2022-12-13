// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract NftMedia{
    mapping(uint256 => uint256) public like;
    mapping(uint256 => string) public comment;
    mapping(uint256=> uint256) public cmtnos;
    function likeplus(uint256 postno) public{
like[postno]+=1;
    }
    function commentplus(uint256 postno, string memory cmdData) public{
        comment[postno]= cmdData;
        cmtnos[postno]+=1;
    }
}