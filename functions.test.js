const {returnTwo, greeting,add,multiply,divide,subtract} = require('./functions')

test('Returns 2',()=>{
    expect(returnTwo()).toBe(2);
} )
test('greeting returns "Hello, "(name)"',()=>{
    expect(greeting("Jack")).toEqual('Hello, Jack.')
})
test('add returns the sum of two numbers',()=>{
    expect(add(4,7)).toBe(11);
})
test('subrtract returns num1 - num2', ()=>{
    expect(subtract(7,5)).toBe(2)
})
test('multiply return two numbers multiplied',()=>{
    expect(multiply(9,8)).toBe(72)
})
test('divide returns num1 /num2',()=>{
    expect(divide(9,3)).toBe(3)
})