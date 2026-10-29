import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.developer";
import { Archivo } from "../models/archivo";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceArchivos {
    constructor(private _http:HttpClient) {}
    url = environment.urlApiComics

    async postArchivoAsync(archivo: Archivo): Promise<void> {
        let request = "api/TestingFiles"
        let json = JSON.stringify(archivo)
        await firstValueFrom(this._http.post<any>(this.url + request, json))
    }
}