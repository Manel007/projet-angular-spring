import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocComponent } from './bloc/bloc.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { DeleteBlocComponent } from './delete-bloc/delete-bloc.component';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UpdateblocInputComponent } from './updatebloc-input/updatebloc-input.component';
@NgModule({
  declarations: [
    AppComponent,
   
    UpdateBlocComponent,
    AddBlocComponent,
    DeleteBlocComponent,
    BlocComponent,
    UpdateblocInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
