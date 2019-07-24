Accounts.oauth.registerService('moneybutton');

if (Meteor.isClient) {
  const loginWithMoneyButton = (options, callback) => {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    MoneyButton.requestCredential(options, credentialRequestCompleteCallback);
  };
  Accounts.registerClientLoginFunction('moneybutton', loginWithMoneyButton);
  Meteor.loginWithMoneyButton = (...args) =>
    Accounts.applyLoginFunction('moneybutton', args);
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: MoneyButton.whitelistedFields,
    forOtherUsers: MoneyButton.whitelistedFields
  });
}
