if (Package['accounts-ui']
    && !Package['service-configuration']
    && !Object.prototype.hasOwnProperty.call(Package, 'moneybutton-config-ui')) {
  console.warn(
    "Note: You're using accounts-ui and accounts-moneybutton,\n" +
    "but didn't install the configuration UI for Money Button\n" +
    "OAuth. You can install it with:\n" +
    "\n" +
    "    meteor add moneybutton-config-ui" +
    "\n"
  );
}
