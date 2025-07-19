// sample test file for user module

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

describe('User Module Tests', () => {
  it('should create a user with valid data', () => {
    const user = { name: 'John Doe', email: 'john.doe@example.com' }
    expect(user).toHaveProperty('name', 'John Doe')
    expect(user).toHaveProperty('email', 'john.doe@example.com')
  })
})
