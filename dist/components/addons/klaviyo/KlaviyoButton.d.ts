import React from 'react';
export type KlaviyoButtonProps = {
    formId?: string;
    justifyContent?: string;
    buttonText?: string;
    variant?: 'text' | 'outlined' | 'contained';
};
declare const KlaviyoButton: React.FC<KlaviyoButtonProps>;
export default KlaviyoButton;
