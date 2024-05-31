//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {LibDiamond} from "hardhat-deploy/solc_0.8/diamond/libraries/LibDiamond.sol";

bytes32 constant SUSUWATARI_STORAGE_POSITION = keccak256("susuwatari.contract.storage");
bytes32 constant LEAFWALLET_STORAGE_POSITION = keccak256("leafwallet.contract.storage");

struct OwnableStorage {

    address _owner;
}

struct SusuwatariStorage {
    

  bool isInitialized;
}

struct LeafWalletStorage {
    mapping(address => address) _deviceOwner;
    mapping(address => address[]) _ownerDevices;
    mapping(address => uint256) _deviceActivationCodes;
}

contract StorageHandler {
    function susu() internal pure returns (SusuwatariStorage storage cs) {
        bytes32 position = SUSUWATARI_STORAGE_POSITION;
        assembly {
           cs.slot := position
        }
    }

    function os() internal pure returns (OwnableStorage storage cs) {
        bytes32 position = keccak256("ownable.contract.storage");
        assembly {
           cs.slot := position
        }
    }
    
    function ds() internal pure returns (LibDiamond.DiamondStorage storage) {
        return LibDiamond.diamondStorage();
    }

    
    function lw() internal pure returns (LeafWalletStorage storage cs) {
        bytes32 position = keccak256("leafwallet.contract.storage");
        assembly {
           cs.slot := position
        }
    }
}