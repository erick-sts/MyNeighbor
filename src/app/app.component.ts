import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyNeighbor';

  constructor(private router: Router) { }

  navegarParaPaginaComMenu() {
    this.router.navigate(['/pagina-com-menu']);
  }

  navegarParaPaginaSemMenu() {
    this.router.navigate(['/pagina-sem-menu']);
  }
}
