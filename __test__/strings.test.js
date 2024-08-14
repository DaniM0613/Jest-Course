
describe('email validation', () => {

    test('this is an email', () => {
        const email = 'yoongi@gmail.com'

        expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    })

    test('this is not an email', () => {
        const email = 'yoongigmail.com'

        expect(email).not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    })
})