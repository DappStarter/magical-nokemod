require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth rifle uniform grace hidden suit ghost'; 
let testAccounts = [
"0x0f24bf72a670c8d16f84c8fe4f6b8104aaac2bdf6b4e2afb2219b287002b5bfd",
"0xfcf5c1f637132605207c95d544a668f0d3ea0e2c574f2ce027c65e530e4d63b4",
"0xd87bb93b297df883affe7fbe4cc2c88ad23ff659ff67aaeb4c6c034370e24ef8",
"0x6a5b714634523a59fde3bbef0f448cce88f08aef3b542eb5a732e237a6b24a81",
"0xb5458276fb93deaf7f194e5a30bf852402084b5a5f880a619368cffe44ede1a9",
"0x9b2c53a28e00733a9b1e8e224405a76e950314bfc9fe3e071cc8780fa9da6541",
"0x3fd3b5cd6be90fd9d84c33b54da82f7dc1573098337fd596ac3c476dfe880d97",
"0x042a73a95dfccae2a4545b565e805dcbfd6807a29491cf0d4a94d3f3a4f0132a",
"0xa9f36dde14e003ab8f6f16b4a5236585d237ee3ef113d0b74a9faaab1a319460",
"0xd0b8b97fd15a3fd128ab4f779b83ac5f86801c05642d3fb71f8b63029ac84570"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
