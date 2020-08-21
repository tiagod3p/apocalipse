import { SurvivorController } from './survivor'

describe('Survivor Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SurvivorController()

    const httpRequest = {
      body: {
        age: 15,
        gender: 'any_gender',
        location: 'any location',
        inventory: 'any_inventory'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
  test('Should return 400 if no age is provided', () => {
    const sut = new SurvivorController()

    const httpRequest = {
      body: {
        name: 'any_name',
        gender: 'any_gender',
        location: 'any location',
        inventory: 'any_inventory'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: age'))
  })
})
