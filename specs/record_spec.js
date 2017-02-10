var assert = require('assert');
var Record = require('../record');

describe('record', function() {

  var record;

  beforeEach("Setup", function() {
      record = new Record("Killers", "Don't waste your wishes", 12);
    });
  
  it('should have an artist', function(){
    assert.equal("Killers", record.artist);
  }),

  it('should have a title', function(){
    assert.equal("Don't waste your wishes", record.title);
  }),

  it('should have a price', function(){
    assert.equal(12, record.price);
  })




})
