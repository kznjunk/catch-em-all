const { catchEmAll } = require('../src')

test('Successful promise', async () => {
    const promise = Promise.resolve('Pika Pika')
    const [ error, data ] = await catchEmAll(promise)

    expect(error).toBeUndefined()
    expect(data).toBe('Pika Pika')
})

test('Unsuccessful promise', async () => {
    const promise = Promise.reject('Game Over')
    const [ error, data ] = await catchEmAll(promise)

    expect(data).toBeUndefined()
    expect(error).toBe('Game Over')
})
