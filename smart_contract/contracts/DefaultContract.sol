// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract DefaultContract {

	string public deployMessage;

	constructor(string memory initMessage) {

		deployMessage = initMessage;
	}

	function update(string memory newMessage) public {
		deployMessage = newMessage;
	}
}