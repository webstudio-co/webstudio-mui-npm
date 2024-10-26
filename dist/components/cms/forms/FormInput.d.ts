import React from 'react';
import { SyntheticEventType } from '../../../types';
type FormInputProps = {
    variant: any;
    name: string;
    label?: string;
    errors?: any;
    value?: any | any[];
    options: any;
    placeholder?: string;
    handleChange: (e: SyntheticEventType) => void;
    handleRemove?: (name: string) => void;
    handleAddAttachment?: (name: string, attachmentId: number) => void;
    handleRemoveAttachment?: (name: string) => void;
    url?: string;
    query?: any;
    displayField?: string;
    valueParam?: string;
    inputOptions?: Record<string, React.FC>;
    inputParams?: Record<string, any>;
};
declare const FormInput: React.FC<FormInputProps>;
export default FormInput;
