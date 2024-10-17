// import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
// import { useRef, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

// interface FormInputs {
//   user_name: string;
//   user_email: string;
//   message: string;
//   website: string; // Honeypot field
// }

//  const MainContactForm = () => {
//   const form = useRef<HTMLFormElement | null>(null);
//   const { register, handleSubmit, reset } = useForm<FormInputs>(); // React Hook Form
//   const [captchaToken, setCaptchaToken] = useState<string | null>(null);
//   const [isBot, setIsBot] = useState(false); // Honeypot detection

//   // Handle reCAPTCHA change
// //   const handleCaptchaChange = (token: string | null) => {
// //     setCaptchaToken(token);
// //   };

//   // Handle Honeypot field change (Spam bot detection)
//   const handleHoneypot = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.value) {
//       setIsBot(true); // If honeypot field is filled, mark as bot
//     }
//   };

//   // Form submission handler
//   const onSubmit = (data: FormInputs) => {
//     // Check honeypot field
//     if (isBot) {
//       alert("Spam detected! Form submission blocked.");
//       return;
//     }

//     // Check reCAPTCHA
//     // if (!captchaToken) {
//     //   alert("Please verify the reCAPTCHA.");
//     //   return;
//     // }

//     if (form.current) {
//       console.log("form=====",form.current)
//       emailjs
//         .sendForm(
//           "YOUR_SERVICE_ID",
//           "YOUR_TEMPLATE_ID",
//           form.current,
//           "YOUR_PUBLIC_KEY"
//         )
//         .then(
//           () => {
//             console.log("SUCCESS!");
//             alert("Message sent successfully!");
//             reset(); // Reset form after successful submission
//             setCaptchaToken(null); // Reset reCAPTCHA
//           },
//           (error) => {
//             console.log("FAILED...", error.text);
//             alert("Failed to send the message, please try again later.");
//           }
//         );
//     }
//   };

//   return (
//     <form
//       ref={form}
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg"
//     >
//       <div className="flex flex-col gap-6">
//         {/* Name */}
//         <div className="flex items-center">
//           <label htmlFor="name" className="w-32 text-gray-700 font-medium">
//             Name
//           </label>
//           <input
//             {...register("user_name", { required: true })}
//             type="text"
//             id="name"
//             className="flex-1 border border-gray-300 p-2 rounded-lg"
//             required
//           />
//         </div>

//         {/* Email */}
//         <div className="flex items-center">
//           <label htmlFor="email" className="w-32 text-gray-700 font-medium">
//             Email
//           </label>
//           <input
//             {...register("user_email", { required: true })}
//             type="email"
//             id="email"
//             className="flex-1 border border-gray-300 p-2 rounded-lg"
//             required
//           />
//         </div>

//         {/* Message */}
//         <div className="flex items-start">
//           <label
//             htmlFor="message"
//             className="w-32 text-gray-700 font-medium pt-2"
//           >
//             Message
//           </label>
//           <textarea
//             {...register("message", { required: true })}
//             id="message"
//             rows={4}
//             className="flex-1 border border-gray-300 p-2 rounded-lg"
//             required
//           />
//         </div>

//         {/* Honeypot Field (Hidden) */}
//         <input
//           {...register("website")}
//           type="text"
//           name="website" // Honeypot field name
//           onChange={handleHoneypot}
//           className="hidden"
//           autoComplete="off"
//         />

//         {/* reCAPTCHA */}
//         {/* <ReCAPTCHA
//           sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
//           onChange={handleCaptchaChange}
//         /> */}

//         {/* Submit Button */}
//         <div className="flex justify-end">
//           <input
//             type="submit"
//             value="Send"
//             className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

// export default MainContactForm;


import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useLocation } from "react-router-dom";
import { useEffect } from "react";
import z from "zod";
import Select, { StylesConfig } from "react-select";
import { MaincontactForm } from "./zodSchemaMain";
import { submitHandler } from "./submitHandler";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";

type OptionType = {
  value: string;
  label: string;
};

type signUpSchemaMain = z.infer<typeof MaincontactForm>;

const MainContactForm = () => {
  const location = useLocation();
  const { state } = location; // Get the state passed from ContactForm

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<signUpSchemaMain>({
    resolver: zodResolver(MaincontactForm),
  });

  const form = useRef<HTMLFormElement | null>(null);
  const [isBot, setIsBot] = useState(false); // Honeypot detection

  const handleHoneypot = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsBot(true); // If honeypot field is filled, mark as bot
    }
  };

  useEffect(() => {
    if (state) {
      // Pre-fill the form fields with the values from the ContactForm
      setValue("name", state?.name || "");
      setValue("email", state?.email || "");
      setValue("phoneNumber", state?.phoneNumber || "");
      setValue("numberOfTravelers", state?.numberOfTravelers || 1);
    }
  }, [state, setValue]);
  
const onSubmit = (data: signUpSchemaMain) => {
  submitHandler({
    data,
    form,
    reset,
    watch,
    isBot,
  });
};

  const isBuyTicketOptions: OptionType[] = [
    { value: "כן", label: "כן" },
    { value: "לא", label: "לא" },
  ];
  const typeOfVacationOptions: OptionType[] = [
    { value: "בטן גב", label: "בטן גב" },
    { value: "אטרקציות וטיולים", label: "אטרקציות וטיולים" },
    { value: "משולב", label: "משולב" },
  ];
  const typeOfHotelsOptions: OptionType[] = [
    { value: "3", label: "3 כוכבים" },
    { value: "4", label: "4 כוכבים" },
    { value: "5", label: "5 כוכבים" },
  ];
   const vacationPlanningOptions: OptionType[] = [
     { value: "כן", label: "כן" },
     { value: "לא", label: "לא" },
   ];

  const customStyles: StylesConfig<OptionType> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "blue",
      borderRadius: "0.375rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white", // Force white text color
      fontSize: "16px",
      fontWeight: "bold",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#60a5fa"
        : state.isFocused
        ? "#bfdbfe"
        : undefined,
      color: state.isSelected ? "#fff" : "#000",
      padding: 10,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white", // Custom placeholder color
      fontSize: "16px",
      fontStyle: "italic", // Optional: Italic style for the placeholder
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white", // Change arrow color
      padding: "0 8px",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none", // Remove the separator line between the dropdown arrow and the selected value
    }),
  };

  return (
    <form
      dir="rtl"
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-lg"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center">
          <label htmlFor="name" className="w-32 text-gray-700 font-medium">
            שם
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className={`flex-1 border border-gray-300 p-2 rounded-lg ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder={errors.name ? errors.name.message : "Name"}
          />
        </div>
        {/* Email */}
        <div className="flex items-center">
          <label htmlFor="email" className="w-32 text-gray-700 font-medium">
            מייל
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className={`flex-1 border border-gray-300 p-2 rounded-lg ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder={errors.email ? errors.email.message : "Email"}
          />
        </div>
        {/* Phone Number */}
        <div className="flex items-center">
          <label
            htmlFor="phoneNumber"
            className="w-32 text-gray-700 font-medium"
          >
            מספר טלפון
          </label>
          <input
            {...register("phoneNumber")}
            type="number"
            id="phoneNumber"
            className={`flex-1 border border-gray-300 p-2 rounded-lg ${
              errors.phoneNumber ? "border-red-500" : ""
            }`}
            placeholder="Phone Number"
          />
        </div>
        {/* Number of Travelers */}
        <div className="flex items-center">
          <label
            htmlFor="numberOfTravelers"
            className="w-32 text-gray-700 font-medium"
          >
            מספר נופשים
          </label>
          <input
            {...register("numberOfTravelers")}
            type="number"
            id="numberOfTravelers"
            className={`flex-1 border border-gray-300 p-2 rounded-lg ${
              errors.numberOfTravelers ? "border-red-500" : ""
            }`}
            placeholder="Number of Travelers"
            min={1}
            onKeyDown={(e) => {
              if (["-", "+", "e", "E"].includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="" className="w-32 text-gray-700 font-medium">
            הרכב הנוסעים
          </label>

          <input
            {...register("numberOfAdults")}
            type="number"
            id="numberOfAdults"
            className={`flex-1 border border-gray-300 p-2 rounded-lg ${
              errors.numberOfTravelers ? "border-red-500" : ""
            }`}
            placeholder="מבוגרים"
            min={1}
            onKeyDown={(e) => {
              if (["-", "+", "e", "E"].includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <input
            {...register("numberOfChildren")}
            type="number"
            id="numberOfChildren"
            className={`flex-1 border border-gray-300 p-2 rounded-lg ${
              errors.numberOfTravelers ? "border-red-500" : ""
            }`}
            placeholder="ילדים"
            min={1}
            onKeyDown={(e) => {
              if (["-", "+", "e", "E"].includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </div>

        <div className="flex items-center">
          <label
            htmlFor="isBuyTicket"
            className="w-32 text-gray-700 font-medium"
          >
            האם רכשתם כבר כרטיס?
          </label>
          <Select
            id="isBuyTicket"
            name="isBuyTicket"
            options={isBuyTicketOptions}
            styles={customStyles}
            placeholder="בחרו אפשרות"
            onChange={(selectedOption) => {
              const option = selectedOption as OptionType;
              setValue("isBuyTicket", option.value); // Update the value in the form state
            }}
          />
        </div>

        <div className="flex items-center">
          <label
            htmlFor="isBuyTicket"
            className="w-32 text-gray-700 font-medium"
          >
            איזו חופשה תעדיפו?
          </label>
          <Select
            id="typeOfVacation"
            name="typeOfVacation"
            options={typeOfVacationOptions}
            styles={customStyles}
            placeholder="בחרו אפשרות"
            onChange={(selectedOption) => {
              const option = selectedOption as OptionType;
              setValue("typeOfVacation", option.value); // Update the value in the form state
            }}
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="isBuyTicket"
            className="w-32 text-gray-700 font-medium"
          >
            איזו חופשה תעדיפו?
          </label>
          <Select
            id="typeOfHotels"
            name="typeOfHotels"
            options={typeOfHotelsOptions}
            styles={customStyles}
            placeholder="בחרו אפשרות"
            onChange={(selectedOption) => {
              const option = selectedOption as OptionType;
              setValue("typeOfHotels", option.value); // Update the value in the form state
            }}
          />
        </div>

        <div className="flex items-center">
          <label
            htmlFor="isBuyTicket"
            className="w-32 text-gray-700 font-medium"
          >
            האם יש מסלול מתוכנן?
          </label>
          <Select
            id="PlanningOptions"
            name="PlanningOptions"
            options={vacationPlanningOptions}
            styles={customStyles}
            placeholder="בחרו אפשרות"
            onChange={(selectedOption) => {
              const option = selectedOption as OptionType;
              setValue("PlanningOptions", option.value); // Update the value in the form state
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="freeText" className=" text-gray-700 font-medium">
             אם תרצו להוסיף משהו לגבי החופשה נשמח לשמוע
          </label>
          <textarea
            {...register("freeText")}
            id="freeText"
            name="freeText"
            className={`flex-1 border border-black w-full p-2 rounded-lg ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder={errors.name ? errors.name.message : ""}
          />
        </div>
        <input
          {...register("website")}
          type="text"
          name="website" // Honeypot field name
          onChange={handleHoneypot}
          className="hidden"
          autoComplete="off"
        />
        {/* Submit Button */}
        <div className="flex justify-end">
          {/* <input
            type="submit"
            value="Send"
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          /> */}

          <Button variant={"default"} className="text-white bg-blue-500 hover:bg-blue-700">שלח</Button>
        </div>
      </div>
    </form>
  );
};

export default MainContactForm;
