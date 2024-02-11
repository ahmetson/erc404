module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const name = "FROG WARS";
    const symbol = "PAGE";
    const decimals = 18;
    const value = 404;
    const owner = deployer;
    const recipient = "0x143f8cFB7e91b7836D90A06Fe0e2cF8728D61FB0";

    await deploy('FrogWars', {
        from: deployer,
        args: [name, symbol, decimals, value, owner, recipient],
        log: true,
    });
};
module.exports.tags = ['FrogWars'];  