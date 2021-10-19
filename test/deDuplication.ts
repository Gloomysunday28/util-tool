import { deDuplication } from '../src/index'

console.log(deDuplication<{ id: number, value: number }>([{id: 1, value: 1}, { id: 2 , value: 2}, { id: 1, value: 1 }]))