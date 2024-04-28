import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import User from "../models/User";
import Content from "./Content";

const MainPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_USER" });
    }, [dispatch]);

    const { user, isAuthenticated }: { user: User, isAuthenticated: boolean } = useSelector((s: RootState) => s.user);

    return <>
        { isAuthenticated && <Content user={user} /> }
    </>;
};

export default MainPage;