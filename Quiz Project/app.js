const greet = () => 'hello  world';

console.log(greet());

const bill = (product , tax) => {
    let  total = 0 ;
    for( let i =0 ; i<product.length ; i++)
    {
        total += product[i] * tax;
    }
    return total
}

console.log(bill([1,2,4], 0.2))