import React, { InputHTMLAttributes } from 'react';
import { Component } from './style';
import InputGroup from '../InputGroup';

const TextBox = (props: InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
    <InputGroup>
        <label>{props.label}</label>
        <Component {...props} />
    </InputGroup>
);

export default TextBox;