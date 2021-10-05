interface Mountain{
    name: string;
    height: number;
}

let mountains:Mountain[]= [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
];

function findNameOfTallestMountain(mounts: Mountain[]):string{
    let tallestHeight: number = 0;
    let tallestMountain: string ='';

    for (let i = 0; i < mounts.length; i++) {
        if(mounts[i].height > tallestHeight)
        {
            tallestHeight = mounts[i].height;
            tallestMountain = mounts[i].name;
        }
    }
    return tallestMountain;
}

let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);


//===========================================================

interface Product{
    name: string;
    price: number;
}

let products:Product[] = [
    {name: 'myPhone11', price: 900},
    {name: 'myPhone12', price: 1100},
    {name: 'myPhone13 Super', price: 2000},
    {name: 'myPhone14 Mega Super', price: 3300},
    {name: 'myPhone14 Super Max Pro Mega Max ', price: 5000}
];

function calcAverageProductPrice(prods: Product[]):number{
    let total: number = 0;
    prods.forEach(prod => {
        total+= prod.price;
    });
    let average: number = total/prods.length;
    return average;
}

let averageProductPrice = calcAverageProductPrice(products);
console.log(averageProductPrice);


//===========================================================

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory:InventoryItem[] = [
    {product: {name: 'motor', price: 10.00}, quantity: 10 },
    {product: {name: 'sensor', price: 12.50}, quantity: 4 },
    {product: {name: 'LED', price: 1.00}, quantity: 20 }
];

function calcInventoryValue(invItems: InventoryItem[]):number{
    let totalValue: number = 0;
    invItems.forEach(item => {
        totalValue += (item.product.price * item.quantity)
    });
    return totalValue;
}

let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);