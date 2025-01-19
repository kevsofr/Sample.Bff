export default interface ValueDto {
    id: number;
    name: string;
}

export const mapToValue = (value: ValueDto) => ({
    id: value.id,
    name: value.name
});