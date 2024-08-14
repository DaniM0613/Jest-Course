
const {carsList, brandList} = require('../src/arrays')

describe('Verificando las marcas existentes', () => {
    test('Que el arreglo no sea null', () => {
        expect(brandList()).not.toBeNull()
    })
})

describe('Verificando los autos existentes', () => {
    test('Que el arreglo no sea null',() => {
        expect(carsList()).not.toBeNull()
    })

    test('Verificar  si contiene un VW Gold', () => {
        expect(carsList()).toContain('VW Gold GTI')
    })

    test('Comprobar la longitud del arrreglo', () => {
        expect(carsList()).toHaveLength(4)
    })
})