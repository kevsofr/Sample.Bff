import { Room } from "../domain/Room";

export default interface RoomState {
    rooms: Room[];
    currentRoom: Room | undefined;
    isOpen: boolean;
    isLoading: boolean;
}