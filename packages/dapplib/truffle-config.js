require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember honey hockey knife broken twice'; 
let testAccounts = [
"0x576d75a142ddbd61cfad8ae91ab14f109d3e619219abc5fe2862450bb888a219",
"0x534c8ef43c170a0bb205cf64b4dd7dfe63ba191b998632784e4a5c9cb4c9c73e",
"0x202d838b5a454b5505f1893c04c7fcdf8c0fd92c7e03ef31037093b0e8371d4d",
"0xc1a528afd86a27630e5f9defa1df910ec3ead566771f87aa417f9757670f1403",
"0xf46b921f71256ea3a5b6dd5aefa10ba6803bef82e1d528e6eb99911f972c1379",
"0x238a18e5fbf4663cadc9c62951d90259eff77b4867452386c81d8db7be58d3a4",
"0xa7fc489307c8cd9bc09ab5af7b9923bd69849528c319bde684646de94bee11bc",
"0x73061587ba077825bddce5f6380226239f6365e957c2b40472ea6cf60b960cef",
"0x4aaf6e4d63323999f0e1e731f4430f65947c909be47ec7e8ae9ea31b089f3949",
"0x5332f4d90ccff48d01a7f4fb4ba3a425c909cf946b0be4e2786c0053e94cc99f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


