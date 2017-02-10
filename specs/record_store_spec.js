var assert = require('assert');
var RecordStore = require('../recordStore');

describe('recordStore', function() {

  var record;

  beforeEach("Setup", function() {
      recordStore = new RecordStore("Choones", "Glasgow");
    });
  
  it('should have a name', function(){
    assert.equal("Choones", recordStore.name);
  }),

  it('should have a city', function(){
    assert.equal("Glasgow", recordStore.city);
  }),

  it('should have an inventory starting empty', function(){
    assert.equal(0, recordStore.inventory.length);
  })

})