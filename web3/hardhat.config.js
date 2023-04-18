/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url: process.env.REACT_APP_ALCHEMY_API_URL,
        accounts: [ process.env.REACT_APP_PRIVATE_KEY ]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
