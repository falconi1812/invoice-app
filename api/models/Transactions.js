/**
 * Transactions.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type_id: { type: 'number', required: true, columnType: 'int' },
    user_id: { type: 'string', required: true },
    location_id: { type: 'number', required: true, columnType: 'int' },
    amount: { type: 'number', required: true },
    // Relationships
    invoice: {
      collection: 'Invoice',
      via: 'transactions'
    },
    products: { 
      collection: 'ProductTransactions', 
      via: 'product_id'
    }
  },

};

