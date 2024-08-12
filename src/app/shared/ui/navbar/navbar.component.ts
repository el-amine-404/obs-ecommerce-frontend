import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../../core/constants/routes';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    // the constants
    public ROUTES = ROUTES;

    constructor(public authService: AuthService) {}

    handleLogout() {
        this.authService.logout();
    }

}
