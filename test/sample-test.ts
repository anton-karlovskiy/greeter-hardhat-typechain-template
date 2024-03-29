
// TODO: should update the test based on typechain
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Greeter", function() {
  it("Should return the new greeting once it's changed", async function() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    
    await greeter.deployed();
    expect(await greeter.getGreeting()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.getGreeting()).to.equal("Hola, mundo!");
  });
});
