import User from "../models/User";

export default interface UserState {
    user: User;
    isAuthenticated: boolean;
}