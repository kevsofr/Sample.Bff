import * as React from "react";
import Content from "./Content";
import { useGetUserQuery } from "../services/userApi";

const MainPage: React.FC = () => {
    const { data: user } = useGetUserQuery({});

    return <>
        {user !== undefined && <Content user={user} />}
    </>;
};

export default MainPage;