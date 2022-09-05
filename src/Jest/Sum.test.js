const sum = require('./Sum')

describe.skip('Object testing',()=>{
    test('Object Test',()=>{
        expect(sum()).toEqual({name:"karthik"})
    })
})

// test('my first test',()=>{
//     let data = "karthi"
//     expect(data).toBe('karthi')
// })

// describe('Sum testing',()=>{
//     test('Actual sum test-1',()=>{
//         expect(sum(5,5)).toBe(10)
//     })
    
//     describe('Sum testing',()=>{
//         test('Actual sum test-2',()=>{
//             expect(sum(1,5)).not.toBe(9)
//         })
        
//         test('Actual sum test-3',()=>{
//                 expect(sum(5,-5)).toBe(0)
//             })})
// })