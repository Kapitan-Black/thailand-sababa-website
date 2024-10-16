

import z from "zod";

const contactForm = z.object({
  name: z.string().min(2, { message: "שם הוא שדה חובה" }),
  phoneNumber: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number().optional()
  ),
  email: z.string().email({ message: "אימייל הוא שדה חובה" }),
  departureDate: z.date().optional(),
  numberOfTravelers: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z
      .number({
        required_error: "מספר הנוסעים הוא שדה חובה",
      })
      .min(1, { message: "מספר הנוסעים הוא שדה חובה" })
  ),
});
 

export default contactForm