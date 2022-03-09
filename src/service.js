import http from './http-common';

class VidburdurService {
  getAll(){
    return http.get("/");
  }
  get(id) {
    return http.get(`/$(id)`);
  }
}

export default new VidburdurService(); 
