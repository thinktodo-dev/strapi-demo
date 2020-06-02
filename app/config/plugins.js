module.exports = ({ env }) => ({
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'thinktodo.dev@gmail.com',
        defaultReplyTo: 'info@mallorcard.es',
      },
    },
  });