import * as React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled, { css } from 'styled-components';

interface IWrapper { 
    color?: string;
}

interface IInput {
    type: 'text' | 'password',
}

interface Iprops extends IWrapper, IInput {
    register?: UseFormRegisterReturn;
}

const TextField = React.forwardRef((props: Iprops, ref?: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <Wrapper color={props.color} ref={ref}>
            <Input type={props.type} {...props.register}></Input>
        </Wrapper>
    )
});

export default TextField;

const Wrapper = styled.div<IWrapper>`
    box-sizing: border-box;
    
    ${props => css`
        border: 1px solid ${props.color};
    `}
`

const Input = styled.input.attrs((props: IInput) => ({
    type: props.type,
}))<IInput>`
    border: none;
    box-sizing: border-box;
    padding: 6px 8px;
    width: 100%;

    &:focus {
        outline: none;
    }
`