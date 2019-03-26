import { Injectable } from '@angular/core';

// import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class PositionsService {
  // url:string='http://47.94.165.179:3000/positions';

  url:string='http://106.14.213.216:8080/positions';
  // url:string='http://10.40.4.3:3000/positions';
  constructor(
    private http:HttpClient,
  ) {

  }

  getAllPositions():Promise<any>{


    return this.http.get(this.url).toPromise().then((data)=> data
    )

  }
  getPositionById(id):Promise<any>{
    return this.getAllPositions().then(data=>{
      for(let item of data){
        if(item.id===id){
          return item;
        }
      }
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || 'error');
  }
}
