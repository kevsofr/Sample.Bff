import client from ".";
import Value from "../models/Value";
import ValueDto, { mapToValue } from "./dtos/ValueDto";

export const getValues = async (): Promise<Value[]> => {
    const response = await client.get<{"values": ValueDto[]}>("/remote/values");
    return response.data.values.map(mapToValue);
};

export const getValueById = async (id: number): Promise<Value> => {
    const response = await client.get<ValueDto>(`/remote/values/${id}`);
    return mapToValue(response.data);
};

export const createValue = async (value: Value): Promise<Value> => {
    const request = {
        id: value.id,
        name: value.name
    };
    const response = await client.post<ValueDto>("/remote/values", request);
    return mapToValue(response.data);
};

export const updateValue = async (value: Value): Promise<Value> => {
    const request = {
        id: value.id,
        name: value.name
    };
    const response = await client.put<ValueDto>(`/remote/values/${value.id}`, request);
    return mapToValue(response.data);
};

export const deleteValue = async (id: number): Promise<void> =>
    await client.delete(`/remote/values/${id}`);