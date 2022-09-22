class itemController {
  constructor(currentId = 0) {
    this.items = [];
    this.currentId = currentId;
  }

  addItem(name, description, img) {
    const product1 = {
      id: this.currentId++,
      name: name,
      description: description,
      img: img
    };
    this.items.push(product1);
  }
};

let item = new itemController();
item.addItem("bloop beep");
console.log(item); 