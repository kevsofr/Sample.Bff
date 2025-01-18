import client from ".";
import Value from "../models/Value";

export const getValues = async (): Promise<Value[]> => {
    const response = await client.get<{"values": Value[]}>("/remote/values");
    return response.data.values;
};

export const getValueById = async (id: number): Promise<Value> => {
    const response = await client.get<Value>(`/remote/values/${id}`);
    return response.data;
};

export const createValue = async (value: Value): Promise<Value> => {
    const request = {
        id: value.id,
        name: value.name
    };
    const response = await client.post<Value>("/remote/values", request);
    return response.data;
};

export const updateValue = async (value: Value): Promise<Value> => {
    const request = {
        id: value.id,
        name: value.name
    };
    const response = await client.put<Value>(`/remote/values/${value.id}`, request);
    return response.data;
};

export const deleteValue = async (id: number): Promise<void> =>
    await client.delete(`/remote/values/${id}`);