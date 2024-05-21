import User from "../models/User";

export default interface ManagementState {
    user: User;
    isAuthenticated: boolean;
}