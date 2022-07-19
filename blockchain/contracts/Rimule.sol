// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Rimule is ERC20, ERC20Burnable, ReentrancyGuard {
    address public owner;
    address public ico;
    address public founder;

    //Max Supply 68719476736000000

    constructor(
        uint256 maxSupply,
        address _ico,
        address _founder
    ) nonReentrant ERC20("Rimule", "RILE") {
        require(_ico != address(0), "Zero Address");
        require(_founder != address(0), "Zero Address");
        owner = msg.sender; // owner address
        ico = _ico; // ico address
        founder = _founder; // founder address

        uint256 onePercent = maxSupply / 100; // finding 1% from total supply
        uint256 icoTwentyPerShare = onePercent * 30; // finding ico shares
        uint256 founderTwentyPerShare = onePercent * 20; // find fouder shares
        _mint(msg.sender, maxSupply * 10**6); // Minting Max Supply to Owner
        transfer(ico, icoTwentyPerShare); // Transfer to ICO
        transfer(founder, founderTwentyPerShare); //  Transfer To Founder
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner");
        _;
    }

    function decimals() public pure override returns (uint8) {
        return 6;
    }
}
