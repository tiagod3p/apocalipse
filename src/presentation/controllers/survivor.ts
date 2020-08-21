import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { MissingParamError } from '../errors/missing-param-error'

export class SurvivorController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'age', 'gender', 'location', 'inventory']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
