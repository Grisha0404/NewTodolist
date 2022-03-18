import {ActionType, div, mult, numReducer, sub, sum} from "./tasks";

test('sum of twu numbers', () => {
    //1. Тестовые данные
    const a = 10
    const b = 20
    //2. Выполнение тестируемого кода:
    const result = sum(a,b)
    //3. Проверка результатов:
    expect(result).toBe(30)

})
test('subscribe of twu numbers', ()=>{
    expect(sub(20,10)).toBe(10)
})
test('multiply of twu numbers', ()=>{
    expect(mult(20,10)).toBe(200)
})
test('division of twu numbers', ()=>{
    expect(div(20,10)).toBe(2)
})
test('sum with numberReducer',()=>{
    const salary: number = 1000
    const action : ActionType ={
        type: 'SUM',
        num: 3000
    }
    const result = numReducer(salary, action)
    expect(result).toBe(4000)
})
test('sub with numberReducer',()=>{
    const salary: number = 1000
    const action : ActionType ={
        type: 'SUB',
        num: 500
    }
    const result = numReducer(salary, action)
    expect(result).toBe(500)
})
test('MULT with numberReducer',()=>{
    const salary: number = 1000
    const action : ActionType ={
        type: 'MULT',
        num: 3
    }
    const result = numReducer(salary, action)
    expect(result).toBe(3000)
})
test('DIV with numberReducer',()=>{
    const salary: number = 1000
    const action : ActionType ={
        type: 'DIV',
        num: 2
    }
    const result = numReducer(salary, action)
    expect(result).toBe(500)
})