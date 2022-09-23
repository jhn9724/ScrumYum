class ItemsController{
  constructor(currentId=0){
      this.items=[];
      this.currentId = currentId;
  }

  addItem(name,description,img){
      const product1 = {
          id: this.currentId++,
          name: name,
          description: description,
          img: img
      };
      this.items.push(product1);
  }
  loadItemsFromLocalStorage() {
    const storageItems = localStorage.getItem("items")
    if (storageItems) {
        const items = JSON.parse(storageItems)
        for (var i = 0, size = items.length; i < size; i++) {
            const item = items[i];
            this.items.push(item);
        }
    }
}
}


