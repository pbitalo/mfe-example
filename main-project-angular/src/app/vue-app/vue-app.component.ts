import { AfterContentInit, Component } from '@angular/core';
import { mount } from 'mfeVue/vueApp';

@Component({
  selector: 'app-vue-app',
  templateUrl: './vue-app.component.html',
  styleUrls: ['./vue-app.component.scss'],
})
export class VueAppComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    const el = document.getElementById('vue-child');
    mount(el);
  }
}
