export const helperChain = {
    arbitrum: {
        eid: "30110", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x2f55C492897526677C5B68fb199ea31E2c126416", 
        lib: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A", // send302
        receive: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6", //receive302
        contract_address: "0x2212291025d65D6cFe91De3f0e1a6cAd4dC4AE36",
        confirmation: 20
    },
    polygon: {
        eid: "30109", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x23DE2FE932d9043291f870324B74F820e11dc81A", 
        lib: "0x6c26c61a97006888ea9e4fa36584c7df57cd9da3", // send302
        receive: "0x1322871e4ab09Bc7f5717189434f97bBD9546e95", //receive302
        contract_address: "0x2809702F7900748fd579bF7d2B44b17437110cc7",
        confirmation: 512
    },
    bsc: {
        eid: "30102", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0xfD6865c841c2d64565562fCc7e05e619A30615f0", 
        lib: "0x9f8c645f2d0b2159767bd6e0839de4be49e823de", // send302
        receive: "0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1", //receive302
        contract_address: "0xAc9319982Bf2E64e4C41146c912a35F237180375",
        confirmation: 20
    },
    optimism: {
        eid: "30111", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x6A02D83e8d433304bba74EF1c427913958187142", 
        lib: "0x1322871e4ab09bc7f5717189434f97bbd9546e95", // send302
        receive: "0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063", //receive302
        contract_address: "0xE73c6F1B6F43142Ea545053DaAB6Fc2c514DfeAA",
        confirmation: 20
    },
    fantom: {
        eid: "30112", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0xE60A3959Ca23a92BF5aAf992EF837cA7F828628a", 
        lib: "0xc17babef02a937093363220b0fb57de04a535d5e", // send302
        receive: "0xe1Dd69A2D08dF4eA6a30a91cC061ac70F98aAbe3", //receive302
        contract_address: "0x6D594b9FCb39E7E8942b431C0826BEeaE25bA39a",
        confirmation: 5
    },
    core: {
        eid: "30153", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x3C5575898f59c097681d1Fc239c2c6Ad36B7b41c", 
        lib: "0x0bcac336466ef7f1e0b5c184aab2867c108331af", // send302
        receive: "0x8F76bAcC52b5730c1f1A2413B8936D4df12aF4f6", //receive302
        contract_address: "0xFb7EF0BbD8bFB5f129F995FbC34F4D786cCC63CF",
        confirmation: 21
    },
    gnosis: {
        eid: "30145", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x11bb2991882a86Dc3E38858d922559A385d506bA", 
        lib: "0x3c156b1f625d2b4e004d43e91ac2c3a719c29c7b", // send302
        receive: "0x9714Ccf1dedeF14BaB5013625DB92746C1358cb4", //receive302
        contract_address: "0xFb7EF0BbD8bFB5f129F995FbC34F4D786cCC63CF",
        confirmation: 5
    },
    conflux: {
        eid: "30212", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x8D183A062e99cad6f3723E6d836F9EA13886B173", 
        lib: "0xb360a579dc6f77d6a3e8710a9d983811129c428d", // send302
        receive: "0x16Cc4EF7c128d7FEa96Cf46FFD9dD20f76170347", //receive302
        contract_address: "0xfb7ef0bbd8bfb5f129f995fbc34f4d786ccc63cf",
        confirmation: 2
    },
    aurora: {
        eid: "30211", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0xD4a903930f2c9085586cda0b11D9681EECb20D2f", 
        lib: "0x1ace9dd1bc743ad036ef2d92af42ca70a1159df5", // send302
        receive: "0x000CC1A759bC3A15e664Ed5379E321Be5de1c9B6", //receive302
        contract_address: "0xfb7ef0bbd8bfb5f129f995fbc34f4d786ccc63cf",
        confirmation: 2
    },
    klaytn: {
        eid: "30150", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0xc80233AD8251E668BecbC3B0415707fC7075501e", 
        lib: "0x9714ccf1dedef14bab5013625db92746c1358cb4", // send302
        receive: "0x937AbA873827BF883CeD83CA557697427eAA46Ee", //receive302
        contract_address: "0x5359a9a6351147Ba66a2C750c746743d73BdBeDD",
        confirmation: 5
    },
    metis: { // error
        eid: "30151", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x32d4F92437454829b3Fe7BEBfeCE5D0523DEb475", 
        lib: "0x63e39ccb510926d05a0ae7817c8f1cc61c5bdd6c", // send302
        receive: "0x5539Eb17a84E1D59d37C222Eb2CC4C81b502D1Ac", //receive302
        contract_address: "0xFb7EF0BbD8bFB5f129F995FbC34F4D786cCC63CF",
        confirmation: 5
    },
    mantle: {
        eid: "30181", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x28B6140ead70cb2Fb669705b3598ffB4BEaA060b", 
        lib: "0xde19274c009a22921e3966a1ec868ceba40a5dac", // send302
        receive: "0x8da6512De9379fBF4F09BF520Caf7a85435ed93e", //receive302
        contract_address: "0xd8c12333aC7b6e24416F9175E242bD302f4dFd19",
        confirmation: 2
    },
    tenet: {
        eid: "30173", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x28A5536cA9F36c45A9d2AC8d2B62Fc46Fde024B6", 
        lib: "0x1785c94d31e3e3ab1079e7ca8a9fbdf33eef9dd5", // send302
        receive: "0x16909F77E57CDaaB7BE0fbDF12b6A77d99541605", //receive302
        contract_address: "0xFb7EF0BbD8bFB5f129F995FbC34F4D786cCC63CF",
        confirmation: 2
    },
    moonriver: { // отьеб
        eid: "30167", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x2b3eBE6662Ad402317EE7Ef4e6B25c79a0f91015", 
        lib: "0x1bacc2205312534375c8d1801c27d28370656cff", // send302
        receive: "0xe8BAa65CeD8E46DA43520375Af6fAbC31D7bCb8B", //receive302
        contract_address: "0xE73c6F1B6F43142Ea545053DaAB6Fc2c514DfeAA",
        confirmation: 10
    },
    avalanche: {
        eid: "30106", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x962F502A63F5FBeB44DC9ab932122648E8352959", 
        lib: "0x197d1333dea5fe0d6600e9b396c7f1b1cfcc558a", // send302
        receive: "0xbf3521d309642FA9B1c91A08609505BA09752c61", //receive302
        contract_address: "0x9020Cb8D5516497F25e5Cd0877f563fe9Ed2daEa",
        confirmation: 20
    },
    orderly: {
        eid: "30213", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0xF53857dbc0D2c59D5666006EC200cbA2936B8c35", 
        lib: "0x5b23e2bae5c5f00e804ea2c4c9abe601604378fa", // send302
        receive: "0xCFf08a35A5f27F306e2DA99ff198dB90f13DEF77", //receive302
        contract_address: "0x36c83bf151078404bf4927AeF40C14FD862B88e4",
        confirmation: 2
    },
    telos: {
        eid: "30199", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x3C5575898f59c097681d1Fc239c2c6Ad36B7b41c", 
        lib: "0x0bcac336466ef7f1e0b5c184aab2867c108331af", // send302
        receive: "0x8F76bAcC52b5730c1f1A2413B8936D4df12aF4f6", //receive302
        contract_address: "0xE73c6F1B6F43142Ea545053DaAB6Fc2c514DfeAA",
        confirmation: 2
    },
    celo: { 
        eid: "30125", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x75b073994560A5c03Cd970414d9170be0C6e5c36", 
        lib: "0x42b4e9c6495b4cfdae024b1ec32e09f28027620e", // send302
        receive: "0xaDDed4478B423d991C21E525Cd3638FBce1AaD17", //receive302
        contract_address: "0xA991694fd6d9DA350cdFD6D3f9c8E125Ce5B3185",
        confirmation: 5
    },
    fuse: {
        eid: "30138", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x795F8325aF292Ff6E58249361d1954893BE15Aff", 
        lib: "0x2762409baa1804d94d8c0bcff8400b78bf915d5b", // send302
        receive: "0xB12514e226E50844E4655696c92c0c36B8A53141", //receive302
        contract_address: "0xFb7EF0BbD8bFB5f129F995FbC34F4D786cCC63CF",
        confirmation: 5
    },
    okx: {
        eid: "30155", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x52EEA5c490fB89c7A0084B32FEAB854eefF07c82", 
        lib: "0x7807888fac5c6f23f6eefef0e6987df5449c1beb", // send302
        receive: "0x51Ae634318E7191C7ffc5778E2D9f860e1e60361", //receive302
        contract_address: "0xE73c6F1B6F43142Ea545053DaAB6Fc2c514DfeAA",
        confirmation: 2
    },
    zora: {
        eid: "30195", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0xC1EC25A9e8a8DE5Aa346f635B33e5B74c4c081aF", 
        lib: "0xedf930cd8095548f97b21ec4e2de5455a7382f04", // send302
        receive: "0x57D9775eE8feC31F1B612a06266f599dA167d211", //receive302
        contract_address: "0xE73c6F1B6F43142Ea545053DaAB6Fc2c514DfeAA",
        confirmation: 20
    },
    nova: {
        eid: "30175", 
        endpoint: "0x1a44076050125825900e736c501f859c50fE728c", 
        dvn: "0xb7e97ad5661134185Fe608b2A31fe8cEf2147Ba9", 
        lib: "0xef32f931ac53808e695b7ef3d1b6c5016024a68f", // send302
        receive: "0xB81F326b95e79eaC4aba800Ae545efb4C602973D", //receive302
        contract_address: "0xe4D8aBB420033F64289048184Bbd1Ae175E578F6",
        confirmation: 20
    },
    manta: {
        eid: "30217", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0xA09dB5142654e3eB5Cf547D66833FAe7097B21C3", 
        lib: "0xd1654c656455e40e2905e96b6b91088ac2b362a2", // send302
        receive: "0xC1EC25A9e8a8DE5Aa346f635B33e5B74c4c081aF", //receive302
        contract_address: "0xE73c6F1B6F43142Ea545053DaAB6Fc2c514DfeAA",
        confirmation: 20
    },
    xpla: {
        eid: "30216", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x2f55C492897526677C5B68fb199ea31E2c126416", 
        lib: "0xf622dfb40bf7340dbcf1e5147d6cfd95d7c5cf1f", // send302
        receive: "0x6167caAb5c3DA63311186db4D4E2596B20f557ec", //receive302
        contract_address: "0xE73c6F1B6F43142Ea545053DaAB6Fc2c514DfeAA",
        confirmation: 20
    },

    scroll: { //otbe
        eid: "30214", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0xbe0d08a85EeBFCC6eDA0A843521f7CBB1180D2e2", 
        lib: "0x9bbeb2b2184b9313cf5ed4a4ddfea2ef62a2a03b", // send302
        receive: "0x8363302080e711E0CAb978C081b9e69308d49808", //receive302
        contract_address: "0x9cE5f55c5CF1EA63D1CB3ac4EfC7FBe07e83916B",
        confirmation: 5
    },

    astar: {
        eid: "30210", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0xE1975c47779EdAaABa31F64934A33Affd3CE15c2", 
        lib: "0x30c3074669d866933db74df1fbe4b3703e6ec139", // send302
        receive: "0xF08f13c080fcc530B1C21DE827C27B7b66874DDc", //receive302
        contract_address: "0xE73c6F1B6F43142Ea545053DaAB6Fc2c514DfeAA",
        confirmation: 5
    },

    opBNB: {
        eid: "30202", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x3eBb618B5c9d09DE770979D552b27D6357Aff73B", 
        lib: "0x44289609cc6781fa2c665796b6c5aabf9ffcedc5", // send302
        receive: "0x9c9e25F9fC4e8134313C2a9f5c719f5c9F4fbD95", //receive302
        contract_address: "0xAc9319982Bf2E64e4C41146c912a35F237180375",
        confirmation: 5
    },

    rari: {
        eid: "30235", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x0b5E5452d0c9DA1Bb5fB0664F48313e9667d7820", 
        lib: "0xa09db5142654e3eb5cf547d66833fae7097b21c3", // send302
        receive: "0x148f693af10ddfaE81cDdb36F4c93B31A90076e1", //receive302
        contract_address: "0x36c83bf151078404bf4927AeF40C14FD862B88e4",
        confirmation: 5
    },
    
    moonbeam: { //dead
        eid: "30126", 
        endpoint: "0x1a44076050125825900e736c501f859c50fE728c", 
        dvn: "0x8B9b67b22ab2ed6Ee324C2fd43734dBd2dDDD045", 
        lib: "0xeac136456d078bb76f59dccb2d5e008b31afe1cf", // send302
        receive: "0x2F4C6eeA955e95e6d65E08620D980C0e0e92211F", //receive302
        contract_address: "0x36c83bf151078404bf4927AeF40C14FD862B88e4",
        confirmation: 5
    },

    harmony: { //dead
        eid: "30116", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x8363302080e711E0CAb978C081b9e69308d49808", 
        lib: "0x795f8325af292ff6e58249361d1954893be15aff", // send302
        receive: "0x177d36dBE2271A4DdB2Ad8304d82628eb921d790", //receive302
        contract_address: "0x36c83bf151078404bf4927AeF40C14FD862B88e4",
        confirmation: 5
    },

    zkevm: { //dead
        eid: "30158", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x488863D609F3A673875a914fBeE7508a1DE45eC6", 
        lib: "0x28b6140ead70cb2fb669705b3598ffb4beaa060b", // send302
        receive: "0x581b26F362AD383f7B51eF8A165Efa13DDe398a4", //receive302
        contract_address: "0xE73c6F1B6F43142Ea545053DaAB6Fc2c514DfeAA",
        confirmation: 5
    },

    base: { 
        eid: "30184", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x9e059a54699a285714207b43B055483E78FAac25", 
        lib: "0xb5320b0b3a13cc860893e2bd79fcd7e13484dda2", // send302
        receive: "0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf", //receive302
        contract_address: "0xFb7EF0BbD8bFB5f129F995FbC34F4D786cCC63CF",
        confirmation: 5
    },

    linea: {
        eid: "30183", 
        endpoint: "0x1a44076050125825900e736c501f859c50fe728c", 
        dvn: "0x129Ee430Cb2Ff2708CCADDBDb408a88Fe4FFd480", 
        lib: "0x32042142dd551b4ebe17b6fed53131dd4b4eea06", // send302
        receive: "0xE22ED54177CE1148C557de74E4873619e6c6b205", //receive302
        contract_address: "0xE73c6F1B6F43142Ea545053DaAB6Fc2c514DfeAA",
        confirmation: 5
    },


}
