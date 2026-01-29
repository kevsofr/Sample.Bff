import { defineFixtureFactory } from "efate";
import Value from "../../models/Value";

const createFixture = defineFixtureFactory();

export const valueFixture = createFixture<Value>(v => {
    v.id.asNumber();
    v.name.asString();
});