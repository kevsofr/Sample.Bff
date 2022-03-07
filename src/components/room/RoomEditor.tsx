import React, { useEffect } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

const RoomEditor: React.FC = () => {
    const dispatch = useDispatch();
    const currentRoom = useSelector((state: RootState) => !_.isNil(state.room.currentRoom) ? state.room.currentRoom : {
        id: 0,
        name: ""
    });
    const isOpen = useSelector((state: RootState) => state.room.isLoading);

    const [id, setId] = React.useState(currentRoom.id);
    const [name, setName] = React.useState(currentRoom.name);

    useEffect(() => {
        setId(currentRoom.id);
        setName(currentRoom.name);
    }, [currentRoom.id]);

    const saveRoom = () => {
        if (id === 0) {
            dispatch({ type: "CREATE_ROOM", payload: { name } });
        } else {
            dispatch({ type: "UPDATE_ROOM", payload: { id, name } });
        }
    };

    const roomStyle = {
        height: "100px",
        width: "800px",
        margin: "5px auto",
        border: "solid 1px"
    };

    return <div style={roomStyle}>
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <button onClick={saveRoom}>Save</button>
        </div>
    </div>;
};

export default RoomEditor;