var assert = require('assert');
var RecordCollector = require('../recordCollector');
var Record = require('../record');

describe('recordCollector', function() {

  var recordCollector;
  var record;

  beforeEach("Setup", function() {
      recordCollector = new RecordCollector(15);
      record = new Record("Killers", "Don't waste your wishes", 12);
    });

  it('should have a starting cash value', function(){
    assert.equal(15, recordCollector.cash);
  });

  it('should buy a record and cash goes down', function(){
    recordCollector.buyRecord(record);
    assert.equal(3, recordCollector.cash);
  });

  it('should buy a record and see it added to collection', function(){
    recordCollector.buyRecord(record);
    assert.equal(1, recordCollector.collection.length);
  });

  it('should buy a record only if has enough cash', function(){
    recordCollector.cash = 5;
    var response = recordCollector.buyRecord(record);
    assert.equal("You're skint.", response)

  })

  it('should sell a record and cash goes up', function(){
    recordCollector.buyRecord(record);
    recordCollector.sellRecord(record);
    assert.equal(15, recordCollector.cash)
  });

  it('should sell a record and it be removed from collection', function(){
    recordCollector.buyRecord(record);
    recordCollector.sellRecord(record);
    assert.equal(0, recordCollector.collection.length)
  })


})