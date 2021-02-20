import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div class="content-loading bg-primary">
  <div class="lds-ripple"><div></div><div></div></div>
</div>`
})
export class LoaderComponent {

}
