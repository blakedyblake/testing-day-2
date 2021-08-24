const {returnTwo, greeting,add,multiply,divide,subtract} = require('./functions')

test('Returns 2',()=>{
    expect(returnTwo()).toBe(2);
} )
test('greeting returns "Hello, "(name)"',()=>{
    expect(greeting("James")).toEqual('Hello, James.')
    expect(greeting("Jill")).toEqual('Hello, Jill.')

})

//Describe block?
describe('Math functions',()=>{
    test('add returns the sum of two numbers',()=>{
        expect(add(4,7)).toBe(11);
        expect(add(1,2)).toBe(3)
        expect(add(5,9)).toBe(14)
    })
    test('subrtract returns num1 - num2', ()=>{
        expect(subtract(7,5)).toBe(2)
        expect(subtract(9,2)).toBe(7)
    
    })
    test('multiply return two numbers multiplied',()=>{
        expect(multiply(9,8)).toBe(72)
        expect(multiply(11,4)).toBe(44)
    
    })
    test('divide returns num1 /num2',()=>{
        expect(divide(9,3)).toBe(3)
        expect(divide(50,5)).toBe(10)
    
    })
})
