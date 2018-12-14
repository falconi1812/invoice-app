/**
 * ProductTransactions.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    transaction_id: { type: 'number', required: true, columnType: 'int' },
    quantity: { type: 'number', required: false, defaultsTo: 1, columnType: 'int' },
    // Relationship
    product_id: { model: 'Transactions' }
  },

};

