import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

import { Http, HttpResponse } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  private privateKey = "f1fa688df62c786bc508d16167181080b6593311";
  private publicKey = "83ab092f51fae9d60da186cd831d6423";

  constructor() { }

  public async getCharacterList(limit: number, startOffset: number, searchText: string) {

    //get MD5 hash
    var timeStamp = new Date().getTime();
    var hash = this.createHash(timeStamp);

    //Assemble URL
    let marvelApiUrl = "http://gateway.marvel.com:80/v1/public/characters?limit=" + limit + "&offset=" + startOffset + "&apikey=" + this.publicKey + "&ts=" + timeStamp + "&hash=" + hash;

    if (searchText != null && searchText != "") {

      marvelApiUrl += "&nameStartsWith=" + searchText;

    }

    //Marvel Api Call
    const options = {
      url: marvelApiUrl,
    };

    const response: HttpResponse = await Http.get(options);

    return response;
  }

  public async getCharacterById(id: number) {
   
    //get MD5 hash\
    var timeStamp = new Date().getTime();
    var hash = this.createHash(timeStamp);

    //Assemble URL
    let marvelApiUrl = "http://gateway.marvel.com:80/v1/public/characters/" + id + "?apikey=" + this.publicKey + "&ts=" + timeStamp + "&hash=" + hash;
   
    //Marvel Api Call
    const options = {
      url: marvelApiUrl,
    };

    const response: HttpResponse = await Http.get(options);

    return response;
  }


  public async getComicsList(id: number, limit: number, startOffset: number) {

    //get MD5 hash
    var timeStamp = new Date().getTime();
    var hash = this.createHash(timeStamp);

    //Assemble URL
    let marvelApiUrl = "http://gateway.marvel.com:80/v1/public/characters/" + id + "/comics?apikey=" + this.publicKey + "&ts=" + timeStamp + "&hash=" + hash;
  
    //Marvel Api Call
    const options = {
      url: marvelApiUrl,
    };

    const response: HttpResponse = await Http.get(options);

    return response;
  }

  public async getComicById(id: number) {

    //get MD5 hash
    var timeStamp = new Date().getTime();
    var hash = this.createHash(timeStamp);

    //Assemble URL
    let marvelApiUrl = "http://gateway.marvel.com:80/v1/public/comics/" + id + "?apikey=" + this.publicKey + "&ts=" + timeStamp + "&hash=" + hash;
    
    //Marvel Api Call
    const options = {
      url: marvelApiUrl,
    };

    const response: HttpResponse = await Http.get(options);

    return response;

  }

  public async getStoriesList(id: number, limit: number, startOffset: number) {

    //get MD5 hash
    var timeStamp = new Date().getTime();
    var hash = this.createHash(timeStamp);

    //Assemble URL
    let marvelApiUrl = "http://gateway.marvel.com:80/v1/public/characters/" + id + "/stories?apikey=" + this.publicKey + "&ts=" + timeStamp + "&hash=" + hash;
    
    //Marvel Api Call
    const options = {
      url: marvelApiUrl,
    };

    const response: HttpResponse = await Http.get(options);

    return response;
  }

  public async getSeriesList(id: number, limit: number, startOffset: number) {

    //get MD5 hash
    var timeStamp = new Date().getTime();
    var hash = this.createHash(timeStamp);

    //Assemble URL
    let marvelApiUrl = "http://gateway.marvel.com:80/v1/public/characters/" + id + "/series?apikey=" + this.publicKey + "&ts=" + timeStamp + "&hash=" + hash;
   
    //Marvel Api Call
    const options = {
      url: marvelApiUrl,
    };

    const response: HttpResponse = await Http.get(options);

    return response;
  }

  private createHash(timeStamp) {

    var toBeHashed = timeStamp + this.privateKey + this.publicKey;
    const md5 = Md5.hashStr(toBeHashed);

    console.log("md5 Hash: " + JSON.stringify(md5));

    return md5;

  }
  
}
