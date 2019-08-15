import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr:ToastrService, private translateSrv: TranslateService) { }

  public handleErrors(error: HttpErrorResponse){
    this.showError(error);
    switch (error.status){
      case 401:

        break;
    }

  }


  private showError (error: HttpErrorResponse)
  {
    console.log(error);
    this.toastr.error(error.error.status? `${error.error.status}` : this.translateSrv.instant("UNEXPECTED_ERROR"),this.translateSrv.instant("ERROR"), {
      positionClass: 'toast-top-center',
      timeOut: 5000
    });
  }
  
}
