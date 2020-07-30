import React from 'react';
import { Button } from '@material-ui/core';

export interface Props {
    label: string
}

function MyButton({label}:Props) {
    return <Button color="primary">{label}</Button>;
}

export default MyButton;