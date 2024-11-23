import React, {ButtonHTMLAttributes} from 'react';

type ColorsType = {
    bgColor: string
    borderColor: string
    fontColor: string
    buttonsTextColor: string
    headersColor: string
}

type CustomButtonProps = Omit<Partial<ColorsType>, 'headersColor' | 'buttonsTextColor'>

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps

export const SuperButton = (props: SuperButtonProps) => {

    const {children, bgColor, className, ...restProps} = props

    return (
        <button style={{borderColor: restProps.borderColor}} className={className}>
            {children}
        </button>
    );
};
