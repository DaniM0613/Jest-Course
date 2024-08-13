
test('2 + 2 = 4', () => {
    expect(2+2).toBe(4)
})

test('object validation', () => {
    const data = {username: 'Yoongi'}
    const data2 = {username: 'Jin'}

    expect(data).toEqual({username: 'Yoongi'})
    expect(data).not.toEqual(data2)
})