import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'

export class SurvivorController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new Error('Missing param: name'))
    }

    if (!httpRequest.body.age) {
      return badRequest(new Error('Missing param: age'))
    }
  }
}
