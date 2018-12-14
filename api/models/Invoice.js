/**
 * Invoice.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user_id: { type: 'string', required: true },
    total: { type: 'number', required: true },
    invoice_url: { type: 'string', required: true },
    // Relationships
    transactions: {
      collection: 'Transactions',
      via: 'invoice'
    }
  },

};

