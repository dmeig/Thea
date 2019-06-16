import { BaseService } from './base.service';
import { Observable, from } from 'rxjs';
import axios, { AxiosResponse } from 'axios';
import { map, catchError } from 'rxjs/operators';

export interface EffectLibrary {
  id: number;
  name: string;
  description: string;
  snippets: number[];
}

class EffectsService extends BaseService {
  private static instance: EffectsService;

  private constructor() {
    super();
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  public getEffects(): Observable<EffectLibrary[]> {
    return from(axios.get(`${this.api}/effects/`)).pipe(
      map((res: AxiosResponse<EffectLibrary[]>) => res.data),
      catchError((error: any) => this.handleError(error.response))
    );
  }

  public createSnippet(effect: EffectLibrary): Observable<EffectLibrary> {
    return from(
      axios.post(`${this.api}/effects`, effect, this.jsonHeaderConfig)
    ).pipe(
      map((res: AxiosResponse<EffectLibrary>) => res.data),
      catchError((error: any) => this.handleError(error.response))
    );
  }
}

export const effectsService = EffectsService.Instance;
