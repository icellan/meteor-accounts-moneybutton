Package.describe({
  name: 'icellan:accounts-moneybutton',
  summary: "Login service for Money Button accounts",
  git: 'https://github.com/icellan/meteor-accounts-moneybutton.git',
  version: "1.0.0",
});

Package.onUse(api => {
  api.use('ecmascript@0.12.4');
  api.use('accounts-base@1.4.3', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.1.16', ['client', 'server']);
  api.use('icellan:moneybutton-oauth@1.0.0');
  api.imply('icellan:moneybutton-oauth@1.0.0');

  api.use('http@1.4.2', ['client', 'server']);

  api.use(['accounts-ui@1.3.1', 'icellan:moneybutton-config-ui@1.0.0'], ['client', 'server'], { weak: true });
  api.addFiles("notice.js");

  api.addFiles("moneybutton.js");
});
