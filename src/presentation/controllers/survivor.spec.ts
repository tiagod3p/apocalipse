import { SurvivorController } from './survivor'
import { MissingParamError } from '../errors/missing-param-error'

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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
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
    expect(httpResponse.body).toEqual(new MissingParamError('age'))
  })
  test('Should return 400 if no gender is provided', () => {
    const sut = new SurvivorController()

    const httpRequest = {
      body: {
        name: 'any_name',
        age: 15,
        location: 'any location',
        inventory: 'any_inventory'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('gender'))
  })
  test('Should return 400 if no location is provided', () => {
    const sut = new SurvivorController()

    const httpRequest = {
      body: {
        name: 'any_name',
        age: 15,
        gender: 'any_gender',
        inventory: 'any_inventory'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('location'))
  })
})
