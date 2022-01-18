Package.describe({
  name: 'icellan:accounts-moneybutton',
  summary: "Login service for Money Button accounts",
  git: 'https://github.com/icellan/meteor-accounts-moneybutton.git',
  version: "2.0.0",
});

Package.onUse(api => {
  api.use('ecmascript@0.16.1');
  api.use('accounts-base@2.2.1', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@2.2.1', ['client', 'server']);
  api.use('accounts-oauth@1.0.0', ['client', 'server']);
  api.use('icellan:moneybutton-oauth@2.0.0');
  api.imply('icellan:moneybutton-oauth@2.0.0');

  api.use('http@2.0.0', ['client', 'server']);

  api.use(['accounts-ui@1.4.2', 'icellan:moneybutton-config-ui@1.0.0'], ['client', 'server'], { weak: true });
  api.addFiles("notice.js");

  api.addFiles("moneybutton.js");
});
