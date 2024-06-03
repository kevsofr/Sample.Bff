import { useEffect, useRef, useState } from "react";
import Value from "../models/Value";

export interface IUseValueModal {
    validated: boolean,
    inputs: { id: string, name: string },
    idInputRef: React.RefObject<HTMLInputElement>,
    handleInputChange: (e: any) => void,
    handleSubmit: (e: any) => void,
    close: () => void
}

export const useValueModal = (
    value: Value | null,
    submit: (v: Value, isCreation: boolean) => void,
    closeModal: () => void
): IUseValueModal => {
    const [validated, setValidated] = useState(false);
    const [inputs, setInputs] = useState({
        id: value?.id.toString() || "",
        name: value?.name || ""
    });
    const idInputRef: React.Ref<HTMLInputElement> = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setInputs(_ => ({
            "id": value?.id.toString() || "",
            "name": value?.name.toString() || ""
        }));
        setValidated(false);
    }, [value]);

    const handleInputChange = (e: any) => {
        const { name, value } = e.currentTarget;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any): void => {
        setValidated(true);
        
        e.preventDefault();
        e.stopPropagation();
        
        if (value === null) {
            createValue(e.currentTarget);
        } else {
            updateValue(e.currentTarget);
        }
    };

    const createValue = (form: any) => {
        let checkCustomValidity: boolean = false;
        const idValue: number = parseInt(inputs.id);
    
        if (idInputRef !== null && idInputRef.current !== null
            && (Number.isNaN(idValue) || idValue <= 0 || idValue >= 1_000)) {
            idInputRef.current.setCustomValidity("Error");
        } else if (idInputRef !== null && idInputRef.current !== null) {
            idInputRef.current.setCustomValidity("");
            checkCustomValidity = true;
        }

        if (form.checkValidity() && checkCustomValidity) {
            submit({
                id: idValue,
                name: inputs.name
            }, true);
        }
    };

    const updateValue = (form: any) => {
        if (value !== null && form.checkValidity()) {
            submit({
                id: value.id,
                name: inputs.name
            }, false);
        }
    };

    const close = () => {
        setValidated(false);
        closeModal();
    };

    return {
        validated,
        inputs,
        idInputRef,
        handleInputChange,
        handleSubmit,
        close
    };
};