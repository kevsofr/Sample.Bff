import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Loading from "../shared/Loading";
import RoomEditor from "./RoomEditor";
import Rooms from "./Rooms";

const Room: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.room.isOpen);
    const isLoading = useSelector((state: RootState) => state.room.isLoading);

    return <div>
        <Rooms />
        {isLoading && <Loading />}
        {isOpen && <RoomEditor />}
    </div>;
};

export default Room;