import React from 'react';
import { VendorsFormBody } from './styles';
import { useForm } from 'react-hook-form';

const VendorsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <VendorsFormBody>
      <h1>hi</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="Password" {...register("Password", {})} />
      <input type="number" placeholder="Phone" {...register("Phone", {})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <input type="text" placeholder="Location" {...register("Location", {})} />
      <input type="text" placeholder="Address" {...register("Address", {})} />
      <input type="text" placeholder="City" {...register("City", {})} />
      <input type="text" placeholder="Province" {...register("Province", {})} />
      <input type="text" placeholder="Country" {...register("Country", {})} />
      <input type="text" placeholder="Postal Code" {...register("Postal Code", {})} />

      <input type="submit" />
    </form>
    </VendorsFormBody>
  );
}

export default VendorsForm;
