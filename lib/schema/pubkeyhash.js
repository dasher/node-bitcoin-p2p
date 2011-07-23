var mongoose = require('mongoose'); // database

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PubKeyHash = new Schema({
  pubKeyHash: { type: Buffer, unique: true },
  balance: Number,
  txs: Array
});

mongoose.model('PubKeyHash', PubKeyHash);