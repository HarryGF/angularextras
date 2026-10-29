import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UploadFileComponent } from './components/upload-file-component/upload-file-component';
import { provideHttpClient } from '@angular/common/http';
import { ServiceArchivos } from './services/service.archivos';

@NgModule({
  declarations: [App, UploadFileComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceArchivos
  ],
  bootstrap: [App],
})
export class AppModule {}
