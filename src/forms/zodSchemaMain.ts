import z from "zod";

export const MaincontactForm = z.object({
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
  isBuyTicket: z.string().min(1),

  numberOfAdults: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z
      .number({
        required_error: "מספר המבוגרים הוא שדה חובה",
      })
      .min(1, { message: "חייבים לפחות מבוגר אחד" })
  ),
  numberOfChildren: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number().min(0).optional()
  ),
  typeOfVacation: z.string().min(1),
  typeOfHotels: z.string().min(1),
  PlanningOptions: z.string().min(1),
  freeText: z.string().min(1),

  website: z.string(),
});



export type signUpSchemaMain = z.infer<typeof MaincontactForm>;



