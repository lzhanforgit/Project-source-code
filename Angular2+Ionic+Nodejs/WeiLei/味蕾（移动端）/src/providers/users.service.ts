import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {
  /*url:string='http://localhost:3000/users';*/
  // url:string='http://localhost:3000/users';
  // url:string='http://47.94.165.179:3000/users';

  url:string='http://localhost:3000/users';

  constructor(
    private http:HttpClient,
    private storage:Storage
  ) {
  }
  login(user):Promise<any>{
    return this.http.post(this.url+'/login',user).toPromise().then((data)=> data
    )
  }
  getCodeByphone(phone): Promise<any>{
    // console.log(phone);
    return this.http.post(this.url + '/code', phone).toPromise().then((result)=>{
      // console.log("1111--->service");
      return result;
    });
  }
  register(user):Promise<any>{
    return this.http.post(this.url + '/regist', user).toPromise().then((result)=>{
      return result;
    });
  }
  getMyInfo(id):Promise<any>{
    let  headers = new HttpHeaders({"id": id+''});
    return this.http.get(this.url + '/info',{headers:headers}).toPromise().then((data)=>{
      // console.log(data);
      return data;
    })
  }
  getMenu(id):Promise<any>{
    //console.log(id+"here!");
    let  headers = new HttpHeaders({"id": id+''});
    return this.http.get(this.url + '/menus',{headers:headers}).toPromise().then((data)=>{
      // console.log(data);
      return data;
    })
  }
  getMenuGather(id):Promise<any>{
    let  headers = new HttpHeaders({"id": id+''});
    return this.http.get(this.url+'/personallists',{headers:headers}).toPromise().then((data)=>{
      return data;
    })
  }
  getPersonalWoks(id):Promise<any>{
    let  headers = new HttpHeaders({"id": id+''});
    return this.http.get(this.url + '/works', {headers: headers}).toPromise().then((data)=>{
      return data;
    })
  }
  checkZan(work_id,user_id):Promise<any>{
    return this.http.post(this.url+'/checkThumb', {'work_id': work_id, 'user_id': user_id }).toPromise().then((date)=>{
      return date;
    })
  }
  zan(work_id,user_id):Promise<any>{
    return this.http.post(this.url+'/thumbWork', {'work_id': work_id, 'user_id': user_id }).toPromise().then((date)=>{
      return date;
    })
  }
  unzan(work_id,user_id):Promise<any>{
    return this.http.post(this.url+'/UnthumbWork', {'work_id': work_id, 'user_id': user_id }).toPromise().then((date)=>{
      return date;
    })
  }
  updateInfo(infoFormData):Promise<any>{
    return this.http.post(this.url+'/UpdateInfo',infoFormData).toPromise().then((date)=>{
      return date;
    })
  }
  getFans(id):Promise<any>{
    let  headers = new HttpHeaders({"id": id+''});
    return this.http.get(this.url + '/Befollowed', {headers: headers}).toPromise().then((data)=>{
      return data;
    })
  }
  getFocus(id):Promise<any> {
    let  headers = new HttpHeaders({"id": id+''});
    return this.http.get(this.url + '/follow', {headers: headers}).toPromise().then((data)=>{
      return data;
    })
  }
  getAllmessages(id):Promise<any>{
    let  headers = new HttpHeaders({"id": id+''});
    return this.http.get(this.url + '/comments', {headers: headers}).toPromise().then((data)=>{
      return data;
    })
  }
  delMessage(id):Promise<any>{
    return this.http.post(this.url+'/delcomment',{'id':id}).toPromise().then((data)=>{
      // console.log(data);
      return data;
    })
  }
  addComment(master_id,commenter_id,message):Promise<any>{
    return this.http.post(this.url+'/addcomment',{'master_id': master_id, 'commenter_id': commenter_id, 'content': message }).toPromise().then((data)=>{
      return data;
    })
  }
  checkFollow(master_id,user_id):Promise<any>{
    return this.http.post(this.url + '/checkFollow', {'follower_id': master_id, 'user_id': user_id }).toPromise().then((data)=>{
      return data;
    })
  }
  follow(master_id,user_id):Promise<any>{
    return this.http.post(this.url + '/followUser', {'follower_id': master_id, 'user_id': user_id }).toPromise().then((data)=>{
      return data;
    })
  }
  unfollow(master_id,user_id):Promise<any>{
    return this.http.post(this.url + '/UnfollowUser', {'follower_id': master_id, 'user_id': user_id }).toPromise().then((data)=>{
      return data;
    })
  }
  getReCodeByphone(phone):Promise<any>{
    // console.log(phone);
    return this.http.post(this.url+'/Resetcode',phone).toPromise().then((data)=>{
      // console.log("1111--->service");
      return data;
    })
  }
  retrieve(user):Promise<any>{
    return this.http.post(this.url+'/ResetPssword',user).toPromise().then((data)=>{
      return data;
    })
  }
  delWork(work_id):Promise<any> {
    return this.http.post(this.url + '/delPersonalWork', {'id': work_id}).toPromise().then((date) =>{
      return date;
    })
  }
  getUnfollowUsers(id):Promise<any>{
    const headers = new HttpHeaders({id: id+''});
    return this.http.get(this.url + '/UnfollowUsers', {headers: headers}).toPromise().then(data=> {
      return data;
    });
  }
  getCollectRecipes(id):Promise<any> {
    let  headers = new HttpHeaders({"id": id+''});
    return this.http.get(this.url + '/collect_recipes', {headers: headers}).toPromise().then((data)=>{
      return data;
    })
  }

  getFavorite(id):Promise<any> {
    let  headers = new HttpHeaders({"id": id+''});
    return this.http.get(this.url + '/collect_lists', {headers: headers}).toPromise().then((data)=>{
      return data;
    })
  }



}
