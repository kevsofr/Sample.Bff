import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Value from "../../models/Value";

export interface IUseValueModal {
    validated: boolean,
    inputs: { id: string, name: string },
    idInputRef: React.RefObject<HTMLInputElement>,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
    close: () => void
}

export const useValueModal = (
    isCreation: boolean,
    value: Value | undefined,
    submit: (v: Value) => void,
    closeModal: () => void
): IUseValueModal => {
    const [validated, setValidated] = useState(false);
    const [inputs, setInputs] = useState({
        id: value?.id.toString() || "",
        name: value?.name || ""
    });
    const idInputRef: React.Ref<HTMLInputElement> = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setInputs(() => ({
            "id": value?.id.toString() || "",
            "name": value?.name.toString() || ""
        }));
        setValidated(false);
    }, [value]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        setValidated(true);
        
        e.preventDefault();
        e.stopPropagation();
        
        if (isCreation) {
            createValue(e.currentTarget);
        } else {
            updateValue(e.currentTarget);
        }
    };

    const createValue = (form: HTMLFormElement) => {
        let checkCustomValidity = false;
        const idValue = parseInt(inputs.id);
    
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
            });
            close();
        }
    };

    const updateValue = (form: HTMLFormElement) => {
        if (value !== undefined && form.checkValidity()) {
            submit({
                id: value.id,
                name: inputs.name
            });
            close();
        }
    };

    const close = () => {
        setValidated(false);
        setInputs(() => ({
            "id": "",
            "name": ""
        }));
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