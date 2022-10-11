var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MaxBagsReachedException2 = /** @class */ (function (_super) {
    __extends(MaxBagsReachedException2, _super);
    function MaxBagsReachedException2() {
        var _this = _super.call(this, 'Max bags reached') || this;
        // NOTE: uncomment this line when you change from js to TS
        Object.setPrototypeOf(_this, MaxBagsReachedException2.prototype);
        return _this;
    }
    return MaxBagsReachedException2;
}(Error));
var Item2 = /** @class */ (function () {
    function Item2(name, category) {
        this.name = name;
        this.category = category;
    }
    Item2.prototype.toString = function () {
        return "Item with name ".concat(this.name, " has category ").concat(this.category);
    };
    return Item2;
}());
var Container2 = /** @class */ (function () {
    function Container2() {
        this.items = [];
        this.capacity = 0;
    }
    Container2.prototype.add = function (item) {
        if (this.items.length >= this.getCapacity()) {
            throw new MaxBagsReachedException2();
        }
        this.items.push(item);
    };
    Container2.prototype.getCapacity = function () {
        return this.capacity;
    };
    return Container2;
}());
var BackPack2 = /** @class */ (function (_super) {
    __extends(BackPack2, _super);
    function BackPack2() {
        var _this = _super.call(this) || this;
        _this.capacity = 8;
        return _this;
    }
    return BackPack2;
}(Container2));
var Bag2 = /** @class */ (function (_super) {
    __extends(Bag2, _super);
    function Bag2() {
        var _this = _super.call(this) || this;
        _this.capacity = 4;
        return _this;
    }
    return Bag2;
}(Container2));
var Player2 = /** @class */ (function () {
    function Player2(bag, bags) {
        this.bag = bag;
        this.bags = bags;
    }
    Player2.prototype.pickItem = function (item) {
        try {
            this.bag.add(item);
            console.log("".concat(item.toString(), " collected ON BAGPACK"));
        }
        catch (e) {
            if (e instanceof MaxBagsReachedException2) {
                this.storeInNextAvailableBag(item);
            }
        }
    };
    Player2.prototype.storeInNextAvailableBag = function (item) {
        for (var index = 0; index < this.bags.length; index++) {
            var bag = this.bags[index];
            try {
                bag.add(item);
                console.log("".concat(item.toString(), " collected ON A BAG"));
                break;
            }
            catch (error) {
                if (index === this.bags.length - 1) {
                    throw error;
                }
            }
        }
    };
    return Player2;
}());
var $button2 = document.getElementById('saveItemCaro');
var $error2 = document.getElementById('errorCaro');
// We can create another type of BackPack with more capacity and inject into Player object
var player2 = new Player2(new BackPack2(), [new Bag2(), new Bag2(), new Bag2(), new Bag2()]);
var ITEMS_CATEGORIES2 = ['clothes', 'weapons', 'herbs'];
$button2.addEventListener('click', function () {
    var index = Math.round(Math.random() * (ITEMS_CATEGORIES2.length - 1));
    var itemCategory = ITEMS_CATEGORIES2[index];
    var item = new Item2(Date.now().toString(), itemCategory);
    try {
        player2.pickItem(item);
    }
    catch (e) {
        console.log(e);
        $error2.innerHTML = e.toString();
        $error2.style.display = 'block';
    }
});
