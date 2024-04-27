import client from ".";
import Value from "../models/Value";

export const getValues = async (): Promise<Value[]> => {
    const response = await client.get("/remote/values");
    return response.data.values.map(mapValue);
};

export const getValueById = async (id: number): Promise<Value> => {
    const response = await client.get(`/remote/values/${id}`);
    return mapValue(response.data.value);
};

export const createValue = async (value: Value): Promise<Value> => {
    const request = {
        id: value.id,
        name: value.name
    };
    const response = await client.post("/remote/values", request);
    return mapValue(response.data);
};

export const updateValue = async (value: Value): Promise<Value> => {
    const request = {
        id: value.id,
        name: value.name
    };
    const response = await client.post(`/remote/values/${value.id}`, request);
    return mapValue(response.data);
};

export const deleteValue = async (id: number): Promise<void> =>
    await client.delete(`/remote/values/${id}`);

export const mapValue = (value: any): Value => ({
    id: value.id,
    name: value.name
});