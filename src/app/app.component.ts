import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  detail = [];
  fg: FormGroup;
  constructor(public fb: FormBuilder) {}
  onTDSubmit(f: NgForm) {
    console.log(f.value);
    this.detail.push({ name: f.value.name, age: f.value.age });
  }
  ngOnInit() {
    // new FormGroup can be replaced with this.fb.group
    this.fg = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null),
    });
  }
  onReactiveSubmit() {
    console.log(this.fg.value);
    this.detail.push(
      this.fg.value
      // {name: this.fg.value.name,
      // age: this.fg.value.age,}
    );
  }
}
