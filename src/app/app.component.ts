import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'marvel-heroes';
  constructor(translate: TranslateService) {
    translate.setDefaultLang('es');
   translate.use('es');
}
}