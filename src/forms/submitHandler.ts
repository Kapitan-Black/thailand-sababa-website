// submitHandler.ts
import emailjs from "@emailjs/browser";
import { UseFormReset, UseFormWatch } from "react-hook-form";
import { signUpSchemaMain } from "./zodSchemaMain"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";


interface SubmitHandlerArgs {
  data: signUpSchemaMain;
  form: React.RefObject<HTMLFormElement | null>;
  reset: UseFormReset<signUpSchemaMain>;
  watch: UseFormWatch<signUpSchemaMain>;
  isBot: boolean;
  navigate: ReturnType<typeof useNavigate>;
}

export const submitHandler = ({
  data,
  form,
  reset,
  isBot,
  navigate,
}: SubmitHandlerArgs) => {


  if (isBot) {
    alert("Spam detected! Form submission blocked.");
    return;
  }


  if (form.current) {
    const formElement = form.current;

    // Update form elements with form data
    const nameInput = formElement.elements.namedItem("name");
    const emailInput = formElement.elements.namedItem("email");
    const phoneNumberInput = formElement.elements.namedItem("phoneNumber");
    const travelersInput = formElement.elements.namedItem("numberOfTravelers");
    

    // Assign values to form fields if they exist
    if (nameInput instanceof HTMLInputElement) {
      nameInput.value = data.name || "";
    }
    if (emailInput instanceof HTMLInputElement) {
      emailInput.value = data.email || "";
    }
    if (phoneNumberInput instanceof HTMLInputElement) {
      phoneNumberInput.value = data.phoneNumber?.toString() || "";
    }
    if (travelersInput instanceof HTMLInputElement) {
      travelersInput.value = data.numberOfTravelers.toString() || "1";
    }


    emailjs
      .sendForm(
        "service_tfcgso5",
        "template_7mjli34",
        form.current,
        "7-BibI9EkrBHvwLA3"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          reset(); // Reset form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message, please try again later.");
        }
      );
    }
  console.log("form.current>>>", form.current);
       new Promise((resolve) => setTimeout(resolve, 6000));

  
  navigate("/form-submitted");

};
