const express = require('express');
const config = require('../config');

const router = express.Router();

const fieldsStep1 = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    required: true,
    placeholder: 'John',
    value: '',
    errorMessage: 'You must provide a valid Name`',
  },
  {
    name: 'lastname',
    type: 'text',
    label: 'Last Name',
    required: true,
    placeholder: 'Doe',
    value: '',
    errorMessage: 'You must provide a valid Last Name`',
  },
  {
    name: 'email',
    type: 'email',
    label: 'E-mail',
    placeholder: 'Doe',
    value: '',
    errorMessage: 'You must provide a valid Last Name`',
    validations: [
      config.EMAIL_REGEX_EXP
    ]
  },
];

const fieldsStep2 = [
  {
    name: 'subscription_type',
    type: 'select',
    label: 'Subscription Type',
    placeholder: 'Select your subscription type',
    value: {},
    options: [
      {value: 'basic', label: 'Basic'},
      {value: 'pro', label: 'Professional'},
      {value: 'exp', label: 'Expert'},
    ]
  },
  {
    name: 'bio',
    type: 'textarea',
    label: 'About you',
    required: false,
    placeholder: 'You can provide a more detailed information about you',
    value: '',
  },
];

const formData = [
  {
    title: 'Basic Registration Data',
    fields: fieldsStep1
  },
  {
    title: 'Personal info',
    fields: fieldsStep2
  }
];

// GET returns form items
router.get('/', (req, res) => {
  res.json({
    form_data: formData,
    timestamp: Date.now()
  });
});

module.exports = router;
