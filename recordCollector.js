var RecordCollector = function(cash){
  this.cash = cash,
  this.collection = []
};

RecordCollector.prototype = {
  buyRecord: function(record){
    if (this.cash >= record.price){
      this.cash -= record.price;
      this.collection.push(record);
    } else {
      return "You're skint."
    }

  },

  sellRecord: function(record){
    this.cash += record.price;
    var index = this.collection.indexOf(record);
    this.collection.splice(index, 1);
  }


}


module.exports = RecordCollector;