import { throwError } from 'rxjs';

export abstract class BaseService {
  protected readonly api =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:5000'
      : 'http://api.thea-project.ru';

  protected readonly jsonHeaderConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  };

  protected handleError(error: any) {
    if (!error) {
      return throwError('Проблемы с сетью');
    }

    const applicationError = error.headers['Application-Error'];

    if (applicationError) {
      return throwError(applicationError);
    }

    let modelStateErrors: any = '';

    if (error.data) {
      for (const key in error.data) {
        if (error.data[key]) {
          modelStateErrors += error.data[key] + '\n';
        }
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    return throwError(modelStateErrors || 'Server error');
  }
}
