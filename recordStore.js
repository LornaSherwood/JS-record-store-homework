var RecordStore = function (name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;

}

RecordStore.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  },

  // listInventory: function(){
  //   var number = 0;
  //   while (number < this.inventory.length){
  //     return this.inventory[number].artist + ", " + this.inventory[number].title + ", " + this.inventory[number].price;
  //     number += 1;
  //   }
  // }
  // listInventory: function(){
  //   return this.inventory;
  // },
  checkInventory: function(record, list){
    if (list === []){
      return true; // not necessary?
    } else {
      for (var entry of list){  //
        var result = true;
        if (entry['title'] === record.title){
          result = false;
        // } else {
        //   return true;
        }
      }
      return result;
    }
  },

  listInventory: function(){
    var inventoryDisplay = [];

    for (var record of this.inventory){
      if ((inventoryDisplay.length === 0) || this.checkInventory(record, inventoryDisplay)){
        var entry = {
          artist: record.artist,
          title: record.title,
          price: record.price,
          quantity: 1
        }
        inventoryDisplay.push(entry);
      }
       else {
        for (item of inventoryDisplay){
          if (item['title'] === record.title){
          item['quantity'] += 1;
          }
        }
      }
    }

    return inventoryDisplay;
  },


  sellRecord: function(record){
    var index = this.inventory.indexOf(record);
    this.inventory.splice(index, 1);
    this.balance += record.price;
  },

  inventoryValue: function(){
    var total = 0
    for (var record of this.inventory){
      total += record.price;
    }
    return total;
  },

  financialReport: function(){
    var inventoryValue = this.inventoryValue();
    var balance = this.balance;
    return "Balance: " + balance + ", Inventory Value: " + inventoryValue
  }


}




module.exports = RecordStore;