import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/ui/navbar/navbar.component";
import { FooterComponent } from "./shared/ui/footer/footer.component";
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'obs-ecommerce-frontend';

  constructor(private authService:AuthService) {}

  ngOnInit() {
    this.authService.loadJwtFromLocalStorage();
  }
}
