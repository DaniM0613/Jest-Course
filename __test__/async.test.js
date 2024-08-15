
const getData = require('../src/promise')
const API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'

test('Should return the goku information', async () => {
    const response = await getData(API)

    expect(response.data.name).toBe()
} )

test('should fail the test with an invalid url', async () => {
    expect.assertions(1)
    try {
        await getData('asdfsglj')

    }catch(err){
        expect(err).not.toBeNull()

    }
})
