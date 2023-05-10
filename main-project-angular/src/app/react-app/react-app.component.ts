import { AfterContentInit, Component } from '@angular/core';
import { mount } from 'mfeReact/reactApp';

@Component({
  selector: 'app-react-app',
  templateUrl: './react-app.component.html',
  styleUrls: ['./react-app.component.scss'],
})
export class ReactAppComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    const el = document.getElementById('react-child');
    mount(el);
  }
}
