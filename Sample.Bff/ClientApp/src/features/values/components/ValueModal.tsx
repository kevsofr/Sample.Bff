import * as React from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ModalHeader, { ModalHeaderProps } from "../../../components/common/ModalHeader";
import ModalFooter from "../../../components/common/ModalFooter";
import { useCreateValueMutation, useGetValueQuery, useUpdateValueMutation } from "../../../services/valueApi";
import { useDispatch, useSelector } from "react-redux";
import { selectValuesUi } from "../valuesUiSlice";
import { closeModal } from "../valuesUiSlice";
import { ValueForm, valueSchema } from "../../../schemas/valueSchema";
import ModalBody, { ModalBodyProps } from "./ModalBody";

const ValueModal: React.FC = () => {
    const dispatch = useDispatch();
    const [createValue] = useCreateValueMutation();
    const [updateValue] = useUpdateValueMutation();
    const { displayModal, valueId } = useSelector(selectValuesUi);
    const isCreation = valueId === 0;
    const value = useGetValueQuery(valueId, {
        skip: isCreation
    }).data;
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ValueForm>({
        resolver: zodResolver(valueSchema)
    });

    useEffect(() => {
        reset({
            id: value?.id ?? undefined,
            name: value?.name ?? ""
        });
    }, [value]);

    const onSubmit = (data: ValueForm) => {
        if (isCreation) {
            createValue({
                id: Number(data.id),
                name: data.name
            });
        } else {
            updateValue({
                id: Number(data.id),
                name: data.name
            });
        }

        close();
    };

    const close = () => {
        dispatch(closeModal());
        reset({
            id: "",
            name: ""
        });
    };

    const modalHeaderProps: ModalHeaderProps = {
        isCreation,
        creationTitle: "Add value",
        updateTitle: "Update value"
    };

    const modalBodyProps: ModalBodyProps = {
        isCreation,
        value,
        register,
        errors
    };

    return (
        <Modal show={displayModal} onHide={close}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader {...modalHeaderProps} />
                <ModalBody {...modalBodyProps} />
                <ModalFooter close={close} />
            </form>
        </Modal>
    );
};

export default ValueModal;