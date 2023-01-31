import { Controller } from "@hotwired/stimulus"
import * as yup from 'yup';

// Connects to data-controller="form"
export default class extends Controller {
  static targets = [
    'name',
    'description',
    'dueDate',
    'reviewRequired',
    'priority'
  ]

  connect() {
    console.log("Form Controller Connected")
  }

  schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    description: yup.string().required(),
    due_date: yup.date().required(),
    review_required: yup.boolean(),
    priority: yup.number().required().min(1,"Priority must be 1 or more").max(10,"Can't have more then 10 priority"),
  });

  data =  {
    name: this.nameTarget.value,
    description: this.descriptionTarget.value,
    due_date: Date.parse(this.dueDateTarget.value),
    review_required: this.reviewRequiredTarget.value,
    priority: Number(this.priorityTarget.value)
  }

  validateForm() {
    const valid = this.schema.isValid(this.data).then((valid) => {
      console.log(valid); // true
    });
    valid
  }
  
  applyErrors(event) {
    this.schema.validate(this.data, { abortEarly: false }).catch(function(errors) {
      errors.inner.forEach(error => {
        console.log(error.path, error.errors)
        const element = document.getElementById(error.path);
      
        element.innerHTML += `<p>Error: ${error.errors}</p>`
      })
    });
    console.log("Stopping submission")
    event.detail.formSubmission.stop()

  }

  submit(event) {
    if (this.validateForm()) {
      console.log("form is valid")
      this.element.requestSubmit()

    } else {
      console.log("Form is not valid")
      this.applyErrors(event);
    }
  }
}
