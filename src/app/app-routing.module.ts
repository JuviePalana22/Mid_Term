import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path: 'profile', component: ProfilePageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'contact', component: ContactPageComponent}
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
