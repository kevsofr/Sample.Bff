import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

const Rooms: React.FC = () => {
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch({ type: "FETCH_ROOMS" });
    }, []);

    const rooms = useSelector((state: RootState) => state.room.rooms);

    if (!rooms) {
        return <></>;
    }

    return <div>
        {rooms.map((r) => <div key={r.id} className="room-item">{r.id} - {r.name}</div>)}
    </div>
};

export default Rooms;