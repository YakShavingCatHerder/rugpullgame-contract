const the100 = artifacts.require('RugPullGame');


contract('RugPullGame', (account) => {
    beforeEach(async () => {
        this.the100 = await the100.new("th1e00.eth.link","t100",1000);
    });
    
    it('should have correct name and symbol and decimal', async () => {
        const name = await this.the100.name();
        const symbol = await this.the100.symbol();
        const decimals = await this.the100.decimals();
        assert.equal(name.valueOf(), 'th100.eth.link');
        assert.equal(symbol.valueOf(), 't100');
        assert.equal(decimals.valueOf(), '18');
    });
   it('Check contract', async () => {
       console.log(address(this));
       console.log(address(this.the100._msgSender()));
    });
    // function testItGreets() public {
        // Get the deployed contract
    //     HelloWorld helloWorld = HelloWorld(DeployedAddresses.HelloWorld());

        // Call getGreeting function in deployed contract
       //  string memory greeting = helloWorld.getGreeting();

        // Assert that the function returns the correct greeting
        // Assert.equal(greeting, "Hello World", "It should greet me with Hello World.");
    });
