import { HttpRequest, HttpResponse } from '../protocols/http'

export class SurvivorController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!httpRequest.body.age) {
      return {
        statusCode: 400,
        body: new Error('Missing param: age')
      }
    }
  }
}
