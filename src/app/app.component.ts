import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite.service';
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
import { NgxSpinnerModule } from "ngx-spinner";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgxSpinnerModule,],
  templateUrl: './app.component.html',

  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProductsGallery';
  constructor(private flowbiteService: FlowbiteService,) { }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }

}
