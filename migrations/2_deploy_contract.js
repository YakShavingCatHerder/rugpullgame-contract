const RugPullGame = artifacts.require("RugPullGame");

module.exports = function (deployer) {
    deployer.deploy(RugPullGame, "rugpullgame.eth.link", "RPG", 1000);
};
