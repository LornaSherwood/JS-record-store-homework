var assert = require('assert');
var Record = require('../recordCollector');

describe('recordCollector', function() {

  var recordCollector;

  beforeEach("Setup", function() {
      recordCollector = new RecordCollector(15);
    });

  it('should have a starting cash value', function(){
    
  })