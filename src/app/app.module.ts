import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextareaAutosizeDirective } from './textarea-autosize.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IdentityComponent } from './identity/identity.component';
import { StatsComponent } from './stats/stats.component';
import { InputAutosizeDirective } from './input-autosize.directive';
import { MinorStatsComponent } from './minor-stats/minor-stats.component';
import { TraitsComponent } from './traits/traits.component';
import { IconComponent } from './icon/icon.component';
import { AttunementsComponent } from './attunements/attunements.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NotesComponent } from './notes/notes.component';
import { UtilitiesComponent } from './utilities/utilities.component';

@NgModule({
  declarations: [
    AppComponent,
    TextareaAutosizeDirective,
    InputAutosizeDirective,
    IdentityComponent,
    StatsComponent,
    MinorStatsComponent,
    TraitsComponent,
    IconComponent,
    AttunementsComponent,
    InventoryComponent,
    NotesComponent,
    UtilitiesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
