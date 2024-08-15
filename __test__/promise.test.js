
const getData = require('../src/promise')
const API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'

test('should return Goku information', () => {
    return getData(API).then(response => {
        expect(response.data.name).toBe()
    })
})

test('should fail by invalid URL', () => {
    expect.assertions(1)
    return getData('asdasdas').catch(err => expect(err).not.toBeNull())
})