import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // Estado dos ícones
  icons = {
    home: 'ic-home.svg',
    saved: 'ic-salvos.svg',
    later: 'ic-relogio.svg',
    logout: 'ic-sair.svg'
  };

  // Método para atualizar os ícones
  updateIcon(icon: string, isHovering: boolean) {
    switch (icon) {
      case 'home':
        this.icons.home = isHovering ? 'ic-home1.svg' : 'ic-home.svg';
        break;
      case 'saved':
        this.icons.saved = isHovering ? 'ic-salvos1.svg' : 'ic-salvos.svg';
        break;
      case 'later':
        this.icons.later = isHovering ? 'ic-relogio1.svg' : 'ic-relogio.svg';
        break;
      case 'logout':
        this.icons.logout = isHovering ? 'ic-sair1.svg' : 'ic-sair.svg';
        break;
    }
  }
}
