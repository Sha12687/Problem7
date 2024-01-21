import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  model = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: 0,
  };

  onSubmit() {
    // Check if all fields are filled before allowing form submission
    if (this.model.firstName && this.model.lastName && this.model.email && this.model.phoneNumber && this.model.age > 0) {
      // Handle form submission logic here
      console.log('Form submitted:', this.model);
    }
  }
}
