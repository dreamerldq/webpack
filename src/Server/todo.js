import { HttpService } from '../Core/server'
export class SampleQueryService {
  static getNews(){
    return HttpService.get('/news')
  }
}