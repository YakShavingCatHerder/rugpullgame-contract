/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "fe"; 
// replace with your own phrases

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "5777",
        },
        rinkeby: {
          provider: function() {
            return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/");
          },
          network_id: 4
        },
        main: {
          provider: function() {
            return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/");
          },
          network_id: 1,
          gas: 8000000,
          gasPrice: 80000000000
        }
  },
  
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.1",    // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
