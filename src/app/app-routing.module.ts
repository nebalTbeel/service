import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SectiosComponent } from './sectios/sectios.component';
import {SectionDetailsComponent} from './section-details/section-details.component'




const routes: Routes = [
  {path:'sections', component: SectiosComponent},
  {path:'sectionDetails/:id', component: SectionDetailsComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})



export class AppRoutingModule { 
  
  
}
export const routingComponents=[SectionDetailsComponent]
