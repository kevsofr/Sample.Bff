import { defineFixtureFactory } from "efate";
import User from "../../models/User";

const createFixture = defineFixtureFactory();

export const userFixture = createFixture<User>(u => {
    u.name.asString();
    u.logoutUrl.asString();
});