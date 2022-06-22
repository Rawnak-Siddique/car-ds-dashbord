import React from 'react'
import { SalesFormBody } from './styles';
import { useForm } from 'react-hook-form';

const SalesForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <SalesFormBody>
            <h1>hi</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="datetime-local" placeholder="Sales Date" {...register("Sales Date", {required: true})} />
            <select {...register("Deal type")}>
                <option value="Cash">Cash</option>
                <option value=" installment"> installment</option>
                <option value=" card"> card</option>
            </select>
            <select {...register("Deal Status")}>
                <option value="Open">Open</option>
                <option value=" Closed"> Closed</option>
                <option value=" Pending"> Pending</option>
            </select>
            <input type="text" placeholder="First Name" {...register("First Name", {})} />
            <input type="text" placeholder="Last Name" {...register("Last Name", {})} />
            <input type="text" placeholder="Driver Licence" {...register("Driver Licence", {})} />
            <input type="datetime-local" placeholder="Birth Date" {...register("Birth Date", {})} />
            <input type="datetime-local" placeholder="Driver license Expiration " {...register("Driver license Expiration ", {})} />
            <select {...register("Inventory")}>
                <option value="Load">Load</option>
                <option value=" Inventory"> Inventory</option>
            </select>

            <input type="submit" />
            </form>
        </SalesFormBody>
    )
}

export default SalesForm
