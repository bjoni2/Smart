import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { ListService } from './_services/list.service';
import { MapService } from './_services/map.service';
import ListMockService from './_services/mocks/list-mock.service';
import PropertyMockService from './_services/mocks/property-mock.service';
import { PropertyService } from './_services/property.service';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './app-state';
import { ListEffects } from './app-state/effects/list.effects';
import { PropertyEffects } from './app-state/effects/property.effects';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule /* We'll use this module for common used components */,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ListEffects, PropertyEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    MapService,
    ListService,
    ListMockService,
    PropertyService,
    PropertyMockService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
