import User from "../models/User";

type FetchUser = {
    type: "FETCH_USER";
};

type FetchUserSuccess = {
    type: "FETCH_USER_SUCCESS";
    payload: User;
};

type FetchUserFail = {
    type: "FETCH_USER_FAIL";
};

type HelpCandidate = {
    type: "HELP_CANDIDATE";
    payload: string;
};

type HelpCandidateSuccess = {
    type: "HELP_CANDIDATE_SUCCESS";
};

type HelpCandidateFail = {
    type: "HELP_CANDIDATE_FAIL";
};

type HelpCompany = {
    type: "HELP_COMPANY";
    payload: string;
};

type HelpCompanySuccess = {
    type: "HELP_COMPANY_SUCCESS";
};

type HelpCompanyFail = {
    type: "HELP_COMPANY_FAIL";
};

export type UserAction = FetchUser
    | FetchUserSuccess
    | FetchUserFail
    | HelpCandidate
    | HelpCandidateSuccess
    | HelpCandidateFail
    | HelpCompany
    | HelpCompanySuccess
    | HelpCompanyFail;