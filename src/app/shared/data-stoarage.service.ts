import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class DataStorageService {
    constructor (private http:HttpClient){}



    fetchData(){
        console.log("in target");
        return this.http.get("http://uat.lightingmanager.in/panel/gettestlist?org_id=" + 4);
    }
}

// recipe module
// recipe service
