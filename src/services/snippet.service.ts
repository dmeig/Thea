import { BaseService } from './base.service';
import { from, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import axios, { AxiosResponse } from 'axios';

class SnippetsService extends BaseService {
  private static instance: SnippetsService;

  private constructor() {
    super();
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  public getSnippet(id: number): Observable<Snippet> {
    return from(axios.get(`${this.api}/snippets/${id}`)).pipe(
      map((res: AxiosResponse<Snippet>) => res.data),
      catchError((error: any) => this.handleError(error.response))
    );
  }

  public getSnippets(): Observable<Snippet[]> {
    return from(axios.get(`${this.api}/snippets/my`)).pipe(
      map((res: AxiosResponse<Snippet[]>) => res.data),
      catchError((error: any) => this.handleError(error.response))
    );
  }

  public createSnippet(snippet: Snippet): Observable<Snippet> {
    return from(
      axios.post(`${this.api}/snippets`, snippet, this.jsonHeaderConfig)
    ).pipe(
      map((res: AxiosResponse<Snippet>) => res.data),
      catchError((error: any) => this.handleError(error.response))
    );
  }

  public saveSnippet(snippet: Snippet): Observable<boolean> {
    return from(
      axios.put(
        `${this.api}/snippets/${snippet.id}`,
        snippet,
        this.jsonHeaderConfig
      )
    ).pipe(
      map((res: AxiosResponse<any>) => true),
      catchError((error: any) => this.handleError(error.response))
    );
  }

  public getSnippetsOfLibrary(librayrId: number): Observable<Snippet[]> {
    return from(axios.get(`${this.api}/effects/library/${librayrId}`)).pipe(
      map((res: AxiosResponse<Snippet[]>) => res.data),
      catchError((error: any) => this.handleError(error.response))
    );
  }
}

export interface Snippet {
  id?: number;
  name: string;
  description: string;
  html: string;
  css: string;
  javaScript: string;
}

export const snippetsService = SnippetsService.Instance;
