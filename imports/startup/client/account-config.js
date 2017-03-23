import { Accounts, AccountsCommon } from 'meteor/accounts-base'

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
});

