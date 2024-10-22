
// import { useForm, } from "react-hook-form";
// import z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";

// import "react-datepicker/dist/react-datepicker.css"; // Import CSS
// import { Button } from "@/components/ui/button";

// import contactForm from "./zodSchema";
// import { useNavigate } from "react-router-dom";
// import LoadingButton from "@/components/LoadingButton";




// type TsignUpSchema = z.infer<typeof contactForm>;



// const ContactForm = () => {

// const navigate = useNavigate()

//   const {
//     register,
//     handleSubmit,
//     // control, // Added for Controller usage
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm<TsignUpSchema>({ resolver: zodResolver(contactForm) });

//   const onSubmit = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 3000));
//       reset();
//       navigate("/contactForm");
      
//   };

//     return (
//       <div dir="rtl" className="relative ">
//         <div className="flex flex-col justify-center items-center mt-20 bg-lime-200 py-8 rounded-xl md:-mx-8">
//           <div>
//             <h2 className="text-2xl md:text-5xl text-center text-sky-500">
//               עזרו לנו לסייע לכם ולבנות את החופשה המושלמת עבורכם
//             </h2>
//           </div>

//           <div className="w-3/4 mt-8">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="flex flex-col gap-4 md:gap-8 w-full"
//             >
//               <div className="flex justify-center items-center flex-col md:flex-row gap-4">
//                 <Input
//                   {...register("name")}
//                   type="text"
//                   maxLength={40}
//                   placeholder={errors.name ? errors.name.message : "שם"}
//                   className={`px-4 py-6 rounded-xl shadow-lg shadow-green-500 bg-white placeholder:text-gray-500 lg:w-full w-[300px] ${
//                     errors.name ? "border border-red-500" : ""
//                   }`}
//                   title={errors.name ? errors.name.message : ""}
//                 />
//                 <Input
//                   {...register("email")}
//                   type="email"
//                   maxLength={40}
//                   placeholder={errors.email ? errors.email.message : "אימייל"}
//                   className={`px-4 py-6 rounded-xl shadow-lg shadow-green-500 bg-white placeholder:text-gray-500 lg:w-full w-[300px]${
//                     errors.email ? "border border-red-500" : ""
//                   }`}
//                   title={errors.email ? errors.email.message : ""}
//                 />
//               </div>

//               <div className="flex justify-center items-center flex-col md:flex-row gap-4">
//                 <Input
//                   {...register("phoneNumber")}
//                   type="number"
//                   maxLength={20}
//                   placeholder="מספר טלפוון"
//                   className="px-4 py-6 rounded-xl shadow-lg shadow-green-500 bg-white hide-arrows placeholder:text-gray-500 lg:w-full w-[300px]"
//                   style={{
//                     WebkitAppearance: "none",
//                     MozAppearance: "textfield",
//                   }}
//                 />

//                 <Input
//                   {...register("numberOfTravelers")}
//                   type="number"
//                   min={1}
//                   placeholder={
//                     errors.numberOfTravelers
//                       ? errors.numberOfTravelers.message
//                       : "מספר נוסעים"
//                   }
//                   className={`px-4 py-6 rounded-xl shadow-lg shadow-green-500 bg-white placeholder:text-gray-500 lg:w-full w-[300px]${
//                     errors.numberOfTravelers ? "border border-red-500" : ""
//                   }`}
//                   style={{
//                     WebkitAppearance: "none",
//                     MozAppearance: "textfield",
//                   }}
//                   onKeyDown={(e) => {
//                     if (["-", "+", "e", "E"].includes(e.key)) {
//                       e.preventDefault();
//                     }
//                   }}
//                 />
//               </div>

//               {/* <div className="flex justify-center">
//             <Controller
//               name="departureDate"
//               control={control}
//               render={({ field }) => (
//                 <DatePicker
//                   selected={field.value ? new Date(field.value) : null}
//                   onChange={(date) => field.onChange(date)}
//                   dateFormat="dd/MM/yyyy"
//                   placeholderText="בחרו תאריך טיסה שלכם"
//                   className="px-4 py-1 rounded-lg bg-slate-100 border border-black placeholder:text-gray-500 text-center"
//                 />
//               )}
//             />
//           </div> */}

//               <div className="flex justify-center items-center gap-3">
//                 <div className="flex justify-center items-center gap-3">
//                   {isSubmitting ? (
//                     <LoadingButton />
//                   ) : (
//                     <Button
//                       variant="default"
//                       size="lg"
//                       className="disabled:bg-red-300 text-lg bg-green-500 hover:bg-green-700 hover:text-white"
//                       disabled={isSubmitting}
//                     >
//                       שלח
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
      
//       </div>
//     );
// };

// export default ContactForm;


import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";
import contactForm from "./zodSchema";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS
import { useEffect } from "react";

type signUpSchema = z.infer<typeof contactForm>;

const ContactForm = () => {
  const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
     if (location.hash) {
       const element = document.querySelector(location.hash);
       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
       }
     }
   }, [location]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<signUpSchema>({ resolver: zodResolver(contactForm) });

  const onSubmit = async (data: signUpSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    reset();

    // Pass the form data when navigating to MainContactForm
    navigate("/contact-form", { state: data });
  };

  return (
    <div dir="rtl" className="relative mb-10" id="form">
      <div className="flex flex-col justify-center items-center mt-20 bg-lime-300 py-8 md:-mx-56">
        <div>
          <h2 className="text-2xl md:text-5xl font-serif text-center text-sky-500">
            עזרו לנו לעזור לכם ולבנות את החופשה המושלמת עבורכם
          </h2>
        </div>

        <div className="w-3/4 mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:gap-8 w-full"
          >
            <div className="flex justify-center items-center flex-col md:flex-row gap-4">
              <Input
                {...register("name")}
                type="text"
                maxLength={40}
                placeholder={errors.name ? errors.name.message : "שם"}
                className={`px-4 py-6 rounded-xl shadow-lg shadow-green-500 bg-white placeholder:text-gray-500 lg:w-full w-[300px] ${
                  errors.name ? "border border-red-500" : ""
                }`}
                title={errors.name ? errors.name.message : ""}
              />
              <Input
                {...register("email")}
                type="email"
                maxLength={40}
                placeholder={errors.email ? errors.email.message : "אימייל"}
                className={`px-4 py-6 rounded-xl shadow-lg shadow-green-500 bg-white placeholder:text-gray-500 lg:w-full w-[300px]${
                  errors.email ? "border border-red-500" : ""
                }`}
                title={errors.email ? errors.email.message : ""}
              />
            </div>

            <div className="flex justify-center items-center flex-col md:flex-row gap-4">
              <Input
                {...register("phoneNumber")}
                type="number"
                maxLength={20}
                placeholder="מספר טלפוון"
                className="px-4 py-6 rounded-xl shadow-lg shadow-green-500 bg-white hide-arrows placeholder:text-gray-500 lg:w-full w-[300px]"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                }}
              />
              <Input
                {...register("numberOfTravelers")}
                type="number"
                min={1}
                placeholder={
                  errors.numberOfTravelers
                    ? errors.numberOfTravelers.message
                    : "מספר נוסעים"
                }
                className={`px-4 py-6 rounded-xl shadow-lg shadow-green-500 bg-white placeholder:text-gray-500 lg:w-full w-[300px]${
                  errors.numberOfTravelers ? "border border-red-500" : ""
                }`}
                onKeyDown={(e) => {
                  if (["-", "+", "e", "E"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>

            <div className="flex justify-center items-center gap-3">
              {isSubmitting ? (
                <LoadingButton />
              ) : (
                <Button
                  variant="default"
                  size="lg"
                  className="disabled:bg-red-300 text-lg font-serif bg-green-500 hover:bg-green-700 hover:text-white"
                  disabled={isSubmitting}
                >
                  שלח
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
