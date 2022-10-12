  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { DatabaindingComponent } from './databainding/databainding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { CoronaComponent } from './corona/corona.component';
import { TodosComponent } from './components/todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosService } from './services/todos.service';
import { CoronanewComponent } from './components/coronanew/coronanew.component';
import { CoronanewService } from './services/coronanew.service';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ServiceformComponent } from './components/serviceform/serviceform.component';
import { ServicelistComponent } from './components/servicelist/servicelist.component';
@NgModule({
  declarations: [
    AppComponent,
    DatatypesComponent,
    DatabaindingComponent,
    DirectivesComponent,
    ProductComponent,
    UserComponent,
    CoronaComponent,
    TodosComponent,
   CoronanewComponent,
   TemplateformComponent,
   CustomersComponent,
   ParentComponent,
   ChildComponent,
   ServiceformComponent,
   ServicelistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
