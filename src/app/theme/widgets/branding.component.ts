import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" href="/">
      <div class="flex flex-row">
        <img src="./assets/images/icon.png" class="matero-branding-logo-expanded" alt="logo" />
        <span class="matero-branding-name">Engineering</span>
      </div>
    </a>
  `,
})
export class BrandingComponent {}
