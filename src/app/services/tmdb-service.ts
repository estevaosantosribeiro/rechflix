import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private readonly http = inject(HttpClient);
  private readonly urlBase = 'https://api.themoviedb.org/3';

  selecionarFilmes() {
    const url = `${this.urlBase}/movie/popular?language=pt-BR`;

    return this.http.get<ApiResponse>(url, {
      headers: {
        Authorization: environment.apiKey,
      }
    }).pipe(
        map((x) => {
          return {
            ...x,
            results: x.results.map((y) => ({
              ...y,
              poster_path: 'https://image.tmdb.org/t/p/w500' + y.poster_path,
              backdrop_path: 'https://image.tmdb.org/t/p/original' + y.backdrop_path,
            })),
          };
        })
      );
  }
}
