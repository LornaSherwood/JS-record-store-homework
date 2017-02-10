var assert = require('assert');
var RecordStore = require('../recordStore');
var Record = require('../record');

describe('recordStore', function() {

  var recordStore;
  var record;

  beforeEach("Setup", function() {
      recordStore = new RecordStore("Choones", "Glasgow");
      record1 = new Record("Killers", "Don't waste your wishes", 12);
      record2 = new Record("Franz Ferdinand", "Tonight", 11);
    });
  
  it('should have a name', function(){
    assert.equal("Choones", recordStore.name);
  }),

  it('should have a city', function(){
    assert.equal("Glasgow", recordStore.city);
  }),

  it('should have an inventory starting empty', function(){
    assert.equal(0, recordStore.inventory.length);
  }),

  it('should have a balance', function(){
    assert.equal(0, recordStore.balance);
  }),

  it('should have records added', function(){
    recordStore.addRecord(record1);
    assert.equal(record1, recordStore.inventory[0]);
  }),

  it('should have multiple records added', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.equal(2, recordStore.inventory.length);
  }),

  it('should be able to list inventory', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.equal(recordStore.inventory, recordStore.listInventory());
  })

  it ('should be able to sell a record and record be removed', function(){
    recordStore.addRecord(record1);
    recordStore.sellRecord(record1);
    assert.equal(0, recordStore.inventory.length);
  })

  it ('should be able to sell a record and the balance go up', function(){
    recordStore.addRecord(record1);
    recordStore.sellRecord(record1);
    assert.equal(12, recordStore.balance);
  })

  it ('should show total value of inventory', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.equal(23, recordStore.inventoryValue())
  })

  it ('should report financial status', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.sellRecord(record1);
    assert.equal("Balance: 12, Inventory Value: 11", recordStore.financialReport())
  })

})