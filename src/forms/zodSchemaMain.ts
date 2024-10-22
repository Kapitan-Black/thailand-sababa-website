import z from "zod";

export const MainContactFormSchema = z.object({
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
  freeText: z.string().optional(),

  dateRange: z
    .array(z.date(), {
      required_error: "Date range is required",
      invalid_type_error: "Invalid date range",
    })
    .length(2, { message: "Date range must include start and end date" })
    .refine(
      (dates) => dates[0] && dates[1], // Check that both start and end dates exist
      { message: "Both start and end dates are required" }
    ),
  // kidAge: z.array(z.number().optional()).optional(),
  kidAge: z.array(z.number().min(0).max(18)),

  website: z.string(),
});



export type signUpSchemaMain = z.infer<typeof MainContactFormSchema>;



