import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { MissingParamError } from '../errors/missing-param-error'

export class SurvivorController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.age) {
      return badRequest(new MissingParamError('age'))
    }

    if (!httpRequest.body.gender) {
      return badRequest(new MissingParamError('gender'))
    }
  }
}
