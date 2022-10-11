class MaxBagsReachedException2 extends Error {
    constructor() {
      super('Max bags reached');
  
      // NOTE: uncomment this line when you change from js to TS
      (<any>Object).setPrototypeOf(this, MaxBagsReachedException2.prototype);
    }
}

class Item2 {
    private name: string;
    private category: string;

    constructor(name: string, category: string) {
        this.name = name;
        this.category = category;
    }

    toString() {
        return `Item with name ${this.name} has category ${this.category}`;
    }
}

interface IContainer {
    add(item: Item2): void;
    getCapacity(): number;
}

class Container2 implements IContainer {
    private items: Item2[];
    capacity: number;

    constructor() {
      this.items = [];
      this.capacity = 0;
    }
  
    add(item: Item2) {
      if (this.items.length >= this.getCapacity()) {
        throw new MaxBagsReachedException2();
      }
  
      this.items.push(item);
    }
  
    getCapacity(): number {
      return this.capacity;
    }
}

class BackPack2 extends Container2 {
    constructor() {
        super();

        this.capacity = 8;
    }
}

class Bag2 extends Container2 {
    constructor() {
        super();

        this.capacity = 4;
    }
}

class Player2 {
    bag: IContainer;
    bags: IContainer[];

    constructor(bag: Container2, bags: Container2[]) {
      this.bag = bag;
      this.bags = bags;
    }
  
    pickItem(item: Item2) {
      try {
        this.bag.add(item);
        console.log(`${item.toString()} collected ON BAGPACK`);
      } catch (e) {
        if (e instanceof MaxBagsReachedException2) {
          this.storeInNextAvailableBag(item);
        }
      }
    }
  
    storeInNextAvailableBag(item: Item2) {
      for (let index = 0; index < this.bags.length; index++) {
        const bag = this.bags[index];

        try {
          bag.add(item);
          console.log(`${item.toString()} collected ON A BAG`);
          break;
        } catch (error) {
          if (index === this.bags.length - 1) {
            throw error;
          }
        }
      }
    }
}

const $button2 = document.getElementById('saveItemCaro');
const $error2 = document.getElementById('errorCaro');
// We can create another type of BackPack with more capacity and inject into Player object
const player2 = new Player2(new BackPack2(), [new Bag2(), new Bag2(), new Bag2(), new Bag2()]);
const ITEMS_CATEGORIES2 = ['clothes', 'weapons', 'herbs'];

$button2.addEventListener('click', function () {
  const index = Math.round(Math.random() * (ITEMS_CATEGORIES2.length - 1));
  const itemCategory = ITEMS_CATEGORIES2[index];
  const item = new Item2(Date.now().toString(), itemCategory);

  try {
    player2.pickItem(item);
  } catch (e) {
    console.log(e);
    $error2.innerHTML = e.toString();
    $error2.style.display = 'block';
  }
});