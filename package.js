Package.describe({
  name: 'icellan:accounts-moneybutton',
  summary: "Login service for Money Button accounts",
  git: 'https://github.com/icellan/meteor-accounts-moneybutton.git',
  version: "1.0.0",
});

Package.onUse(api => {
  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('moneybutton-oauth');
  api.imply('moneybutton-oauth');

  api.use('http', ['client', 'server']);

  api.use(['accounts-ui', 'moneybutton-config-ui'], ['client', 'server'], { weak: true });
  api.addFiles("notice.js");

  api.addFiles("moneybutton.js");
});
