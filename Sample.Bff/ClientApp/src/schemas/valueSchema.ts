import { z } from "zod";

const idErrorMessage = "Please provide a number between 1 and 999.";
const nameErrorMessage = "Please provide a name.";

export const valueSchema = z.object({
    id: z.union([
        z
            .number({ error: idErrorMessage })
            .int({ error: idErrorMessage })
            .min(1, { error: idErrorMessage })
            .max(999, { error: idErrorMessage }),
        z.string()
    ]),
    name: z
        .string()
        .trim()
        .min(1, { error: nameErrorMessage })
        .max(50, { error: nameErrorMessage })
});

export type ValueForm = z.infer<typeof valueSchema>;