import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import User from "../models/User";
import Menu from "./Menu";

const MainPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_USER" });
    }, [dispatch]);

    const { user, isAuthenticated }: { user: User, isAuthenticated: boolean } = useSelector((s: RootState) => s.user);

    return <>
        { isAuthenticated && <Menu user={user} /> }
    </>;
};

export default MainPage;