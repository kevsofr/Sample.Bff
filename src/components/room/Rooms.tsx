import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Rooms: React.FC = () => {
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch({ type: "FETCH_ROOMS" });
    }, []);

    const rooms = useSelector((state: RootState) => state.room.rooms);

    if (!rooms) {
        return <></>;
    }

    const roomStyle = {
        height: "100px",
        width: "800px",
        margin: "5px auto",
        border: "solid 1px"
    };

    return <div style={roomStyle}>
        {rooms.map((r) =>
            <div key={r.id} className="room-item">
                <button onClick={() => dispatch({ type: "FETCH_ROOM", payload: r.id })}>{r.id}</button> - {r.name}
            </div>)
        }
        <div>
            <button onClick={() => dispatch({ type: "OPEN_ROOM_EDITOR" })}>New room</button>
        </div>
    </div>
};

export default Rooms;