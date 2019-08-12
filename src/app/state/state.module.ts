import { NgModule, SkipSelf, Optional, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule, routerReducer, RouterStateSerializer} from '@ngrx/router-store'
import { StoreDevtoolsModule} from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { HeroEffect } from './app.effects';
import { CustomSerializer } from './shared/utils';
import { charactersReducer } from './app.reducer';



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({marvel: charactersReducer}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      HeroEffect
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: []
})
export class StateModule {

  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        {
          provide: RouterStateSerializer,
          useClass: CustomSerializer
        }
      ]
    };
  }
}