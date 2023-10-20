// https://w5x5neakxd.execute-api.us-east-1.amazonaws.com/dev
import { FormEvent } from "react";
import Register from "./Components/Register";

export interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  city: HTMLInputElement;
  state: HTMLInputElement;
  zip: HTMLInputElement;
}

export interface RegisterForm extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function App() {
  async function handleOnFormSubmission(e: FormEvent<RegisterForm>) {
    e.preventDefault();
    const target = e.currentTarget.elements;

    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      password: target.password.value,
      city: target.city.value,
      state: target.state.value,
      zip: target.zip.value,
    };

    const response = await fetch(
      "https://w5x5neakxd.execute-api.us-east-1.amazonaws.com/dev",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log(result);
  }

  return (
    <>
      <Register handleOnFormSubmission={handleOnFormSubmission} />
    </>
  );
}
