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
  watch,
}: SubmitHandlerArgs) => {
  if (isBot) {
    alert("Spam detected! Form submission blocked.");
    return;
  }

  console.log(form.current);

  if (form.current) {
    const formElement = form.current;

    // Update form elements with form data
    const nameInput = formElement.elements.namedItem("name");
    const emailInput = formElement.elements.namedItem("email");
    const phoneNumberInput = formElement.elements.namedItem("phoneNumber");
    const travelersInput = formElement.elements.namedItem("numberOfTravelers");
    const dateRangeInput = formElement.elements.namedItem("dateRange");
    const kidAgeInput = formElement.elements.namedItem("kidAge");

    const formattedKidAge =
      data.kidAge?.map((age) => `(${age})`).join(", ") || "";

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
    if (dateRangeInput instanceof HTMLInputElement) {
      dateRangeInput.value =
        watch("dateRange") && watch("dateRange")[0] && watch("dateRange")[1]
          ? `${new Date(
              watch("dateRange")[0]
            ).toLocaleDateString()} - ${new Date(
              watch("dateRange")[1]
            ).toLocaleDateString()}`
          : "";
    }

     if (kidAgeInput instanceof HTMLInputElement) {
       kidAgeInput.value = formattedKidAge;
     } else {
       // If kidAge input doesn't exist, create and append it as a hidden field
       const hiddenKidAgeInput = document.createElement("input");
       hiddenKidAgeInput.type = "hidden";
       hiddenKidAgeInput.name = "kidAge"; // Set the name attribute for EmailJS
       hiddenKidAgeInput.value = formattedKidAge;
       formElement.appendChild(hiddenKidAgeInput);
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
