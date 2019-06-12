import axios from 'axios';
import { Credentials } from '@/models/credentials.interface';
import { BaseService } from './base.service';
import { from, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

class AuthService extends BaseService {
  private static instance: AuthService;

  private constructor() {
    super();
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  public login(credentials: Credentials): Observable<any> {
    return from(axios.post(`${this.api}/auth/login`, credentials)).pipe(
      map((res: any) => res.data.auth_token),
      catchError((error: any) => this.handleError(error.response))
    );
  }
}

export const authService = AuthService.Instance;
