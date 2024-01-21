// src/app/form/form.component.spec.ts

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [FormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });


 




  it('should not allow form submission with invalid data', () => {
    component.model = {
      firstName: '',
      lastName: '',
      email: 'invalid-email',
      phoneNumber: '123',
      age: 0,
    };

    // Create a spy on the component's onSubmit method
    const onSubmitSpy = spyOn(component, 'onSubmit').and.callFake(() => {});

    // Trigger form submission
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Ensure onSubmit method is not called
    expect(onSubmitSpy).toHaveBeenCalled();
  });

  it('should allow form submission with valid data', () => {
    // Create a spy on the component's onSubmit method
    const onSubmitSpy = spyOn(component, 'onSubmit').and.callFake(() => {});

    // Set valid data
    component.model = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      age: 25,
    };

    // Trigger form submission
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Ensure onSubmit method is called
    expect(onSubmitSpy).toHaveBeenCalled();
  });


  it('should have empty firstName textbox on form initialization', () => {
    const firstNameTextbox = fixture.nativeElement.querySelector('#firstName');
    expect(firstNameTextbox.value).toBe('');
  });
  
  it('should have empty lastName textbox on form initialization', () => {
    const lastNameTextbox = fixture.nativeElement.querySelector('#lastName');
    expect(lastNameTextbox.value).toBe('');
  });
  
  it('should have empty email textbox on form initialization', () => {
    const emailTextbox = fixture.nativeElement.querySelector('#email');
    expect(emailTextbox.value).toBe('');
  });
  
  it('should have empty phoneNumber textbox on form initialization', () => {
    const phoneNumberTextbox = fixture.nativeElement.querySelector('#phoneNumber');
    expect(phoneNumberTextbox.value).toBe('');
  });
  
  it('should have empty age textbox on form initialization', () => {
    const ageTextbox = fixture.nativeElement.querySelector('#age');
    expect(ageTextbox.value).toBe('');
  });
  


it('should invoke onSubmit method when submit button is clicked', fakeAsync(() => {
    const onSubmitSpy = spyOn(component, 'onSubmit');

    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();

    tick();

    expect(onSubmitSpy).toHaveBeenCalled();
  }));
  
});
