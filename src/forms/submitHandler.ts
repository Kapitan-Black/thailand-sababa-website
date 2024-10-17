// submitHandler.ts
import emailjs from "@emailjs/browser";
import { UseFormReset, UseFormWatch } from "react-hook-form";
import { signUpSchemaMain } from "./zodSchemaMain"; // Adjust the path as necessary

interface SubmitHandlerArgs {
  data: signUpSchemaMain;
  form: React.RefObject<HTMLFormElement | null>;
  reset: UseFormReset<signUpSchemaMain>;
  watch: UseFormWatch<signUpSchemaMain>;
  isBot: boolean;
}

export const submitHandler = ({
  data,
  form,
  reset,
  watch,
  isBot,
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
    // const isBuyTicketElement = formElement.elements.namedItem("isBuyTicket");
    // const numberOfAdultsInput =
    //   formElement.elements.namedItem("numberOfAdults");
    // const numberOfChildrenInput =
    //   formElement.elements.namedItem("numberOfChildren");

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
    // if (isBuyTicketElement instanceof HTMLInputElement) {
    //   isBuyTicketElement.value = watch("isBuyTicket") || "";
    // }
    // if (numberOfAdultsInput instanceof HTMLInputElement) {
    //   numberOfAdultsInput.value = watch("numberOfAdults")?.toString() || "1";
    // }
    // if (numberOfChildrenInput instanceof HTMLInputElement) {
    //   numberOfChildrenInput.value =
    //     watch("numberOfChildren")?.toString() || "0";
    // }

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
    
};
