import axios from 'axios';
import { RegistrationModel } from '@/models/registrationModel.interface';
import { BaseService } from './base.service';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

class AccountService extends BaseService {
  private static instance: AccountService;

  private constructor() {
    super();
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  public register(userRegistration: RegistrationModel): Observable<any> {
    return from(axios.post(`${this.api}/accounts`, userRegistration)).pipe(
      map((res: any) => true),
      catchError((error: any) => this.handleError(error.response))
    );
  }
}

export const accountService = AccountService.Instance;
