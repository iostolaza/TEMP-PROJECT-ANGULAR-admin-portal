import { Component, inject, OnInit } from '@angular/core';
import { MainLayoutComponent } from '@temp-project-angular-admin-portal/ui';
import { AppService } from '@temp-project-angular-admin-portal/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private appService = inject(AppService);

  ngOnInit() {
    this.appService.appTitle.set('Protos Admin');
  }
}
