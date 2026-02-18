import "@testing-library/jest-dom";
import { valueSchema } from "../valueSchema";

test("should valid valueSchema", () => {
    const result = valueSchema.safeParse({
        id: 100,
        name: "Fake value"
    });

    expect(result.success).toBeTruthy();
});

test("should not valid valueSchema when no id", () => {
    const result = valueSchema.safeParse({
        id: undefined,
        name: "Fake value"
    });

    expect(result.success).toBeFalsy();
    expect(result.success ? null : result.error.issues[0].message).toBe("Invalid input");
});

test("should not valid valueSchema when id under 1", () => {
    const result = valueSchema.safeParse({
        id: 0,
        name: "Fake value"
    });

    expect(result.success).toBeFalsy();
    expect(result.success ? null : result.error.issues[0].message).toBe("Please provide a number between 1 and 999.");
});

test("should not valid valueSchema when id over 999", () => {
    const result = valueSchema.safeParse({
        id: 1_000,
        name: "Fake value"
    });

    expect(result.success).toBeFalsy();
    expect(result.success ? null : result.error.issues[0].message).toBe("Please provide a number between 1 and 999.");
});

test("should not valid valueSchema when name is empty", () => {
    const result = valueSchema.safeParse({
        id: 100,
        name: ""
    });

    expect(result.success).toBeFalsy();
    expect(result.success ? null : result.error.issues[0].message).toBe("Please provide a name.");
});