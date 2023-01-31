import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
    console.log("Form Controller Connected")
  }

  // schema = yup.object().shape({
  //   name: yup.string().required(),
  //   description: yup.string().required(),
  //   due_date: yup.date().required(),
  //   review_required: yup.boolean(),
  //   priority: yup.number().required(),
  // });

  submit() {
    debugger
    this.element.requestSubmit()
    // const valid = schema.isValid(data).then((valid) => {
    //   console.log(valid); // true
    // });
  }
}
