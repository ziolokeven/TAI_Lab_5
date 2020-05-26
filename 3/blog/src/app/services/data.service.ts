import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url + '/api/posts/');
  }

  getById(id) {
    return this.http.get(this.url + '/api/posts/' + id);
  }

  getByText(data){
    return this.http.post(this.url + '/api/posts/', data);
  }

  createOrUpdate(post) {
    return this.http.post(`${this.url}/api/posts`, post);
  }

}
