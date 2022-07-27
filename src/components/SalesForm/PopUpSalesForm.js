import { Checkbox, Input, Select } from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import HorizontalLinearStepper from '../../fragments/HorizontalLinearStepper';

const PopUpSalesForm = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div>
           {/* <HorizontalLinearStepper></HorizontalLinearStepper> */}
        </div>
    );
};

export default PopUpSalesForm;