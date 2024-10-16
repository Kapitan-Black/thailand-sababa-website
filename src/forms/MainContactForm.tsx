import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface FormInputs {
  user_name: string;
  user_email: string;
  message: string;
  website: string; // Honeypot field
}

 const MainContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { register, handleSubmit, reset } = useForm<FormInputs>(); // React Hook Form
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isBot, setIsBot] = useState(false); // Honeypot detection

  // Handle reCAPTCHA change
//   const handleCaptchaChange = (token: string | null) => {
//     setCaptchaToken(token);
//   };

  // Handle Honeypot field change (Spam bot detection)
  const handleHoneypot = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsBot(true); // If honeypot field is filled, mark as bot
    }
  };

  // Form submission handler
  const onSubmit = (data: FormInputs) => {
    // Check honeypot field
    if (isBot) {
      alert("Spam detected! Form submission blocked.");
      return;
    }

    // Check reCAPTCHA
    // if (!captchaToken) {
    //   alert("Please verify the reCAPTCHA.");
    //   return;
    // }

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Message sent successfully!");
            reset(); // Reset form after successful submission
            setCaptchaToken(null); // Reset reCAPTCHA
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Failed to send the message, please try again later.");
          }
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg"
    >
      <div className="flex flex-col gap-6">
        {/* Name */}
        <div className="flex items-center">
          <label htmlFor="name" className="w-32 text-gray-700 font-medium">
            Name
          </label>
          <input
            {...register("user_name", { required: true })}
            type="text"
            id="name"
            className="flex-1 border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center">
          <label htmlFor="email" className="w-32 text-gray-700 font-medium">
            Email
          </label>
          <input
            {...register("user_email", { required: true })}
            type="email"
            id="email"
            className="flex-1 border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Message */}
        <div className="flex items-start">
          <label
            htmlFor="message"
            className="w-32 text-gray-700 font-medium pt-2"
          >
            Message
          </label>
          <textarea
            {...register("message", { required: true })}
            id="message"
            rows={4}
            className="flex-1 border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Honeypot Field (Hidden) */}
        <input
          {...register("website")}
          type="text"
          name="website" // Honeypot field name
          onChange={handleHoneypot}
          className="hidden"
          autoComplete="off"
        />

        {/* reCAPTCHA */}
        {/* <ReCAPTCHA
          sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
          onChange={handleCaptchaChange}
        /> */}

        {/* Submit Button */}
        <div className="flex justify-end">
          <input
            type="submit"
            value="Send"
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          />
        </div>
      </div>
    </form>
  );
};


export default MainContactForm;