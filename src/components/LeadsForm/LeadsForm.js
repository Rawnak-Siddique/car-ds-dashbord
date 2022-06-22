import React from 'react';
import { LeadsFormBody } from './styles';
import { useForm } from 'react-hook-form';

const LeadsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <LeadsFormBody>
      <h1>hi</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true})} />
      <input type="text" placeholder="Last name" {...register("Last name", {})} />
      <input type="number" placeholder="phone" {...register("phone", {required: true, min: 0})} />
      <input type="email" placeholder="email" {...register("email", { pattern: /@ .com/i})} />
      <select {...register("source", { required: true })}>
        <option value="Web lead">Web lead</option>
        <option value=" trade-in"> trade-in</option>
        <option value=" request-info"> request-info</option>
        <option value=" contact"> contact</option>
        <option value=" drive-test"> drive-test</option>
      </select>
      <select {...register("status", { required: true })}>
        <option value="new">new</option>
        <option value=" used"> used</option>
      </select>
      <input type="text" placeholder="assignee" {...register("assignee", {})} />
      <select {...register("Inventory")}>
        <option value="AM General">AM General</option>
        <option value=" AMC"> AMC</option>
        <option value=" Acura"> Acura</option>
        <option value=" Alfa Romeo"> Alfa Romeo</option>
        <option value=" Aston Martin"> Aston Martin</option>
        <option value=" Atlas Copco"> Atlas Copco</option>
        <option value=" Audi"> Audi</option>
        <option value=" Austin Healey"> Austin Healey</option>
        <option value=" BMW"> BMW</option>
        <option value=" Bayliner"> Bayliner</option>
        <option value=" Bentley"> Bentley</option>
        <option value=" Bricklin"> Bricklin</option>
        <option value=" Bugatti"> Bugatti</option>
        <option value="  Buick">  Buick</option>
        <option value=" Budd"> Budd</option>
        <option value=" Cadillac"> Cadillac</option>
        <option value=" Capacity"> Capacity</option>
        <option value=" Carrier"> Carrier</option>
        <option value=" Caterpillar"> Caterpillar</option>
        <option value=" Cedar Rapids "> Cedar Rapids </option>
        <option value=" Chevrolet"> Chevrolet</option>
        <option value=" Chrysler"> Chrysler</option>
        <option value=" Daewoo"> Daewoo</option>
        <option value=" Daihatsu"> Daihatsu</option>
        <option value=" Datsun"> Datsun</option>
        <option value=" Dodge"> Dodge</option>
        <option value=" Ducati"> Ducati</option>
        <option value=" Eagle"> Eagle</option>
        <option value=" Excavating"> Excavating</option>
        <option value=" FIAT"> FIAT</option>
        <option value=" Ferrari"> Ferrari</option>
        <option value=" Fisker"> Fisker</option>
        <option value=" Ford"> Ford</option>
        <option value=" GMC"> GMC</option>
        <option value=" Genesis"> Genesis</option>
        <option value=" Genix"> Genix</option>
        <option value=" Geo HUMMER"> Geo HUMMER</option>
        <option value=" Harley-Davidson"> Harley-Davidson</option>
        <option value="Heartland">Heartland</option>
        <option value=" Hino"> Hino</option>
        <option value=" Honda"> Honda</option>
        <option value=" Hyundai"> Hyundai</option>
        <option value=" Infiniti"> Infiniti</option>
        <option value=" International"> International</option>
        <option value="International Harvester">International Harvester</option>
        <option value=" Isuzu"> Isuzu</option>
        <option value=" Jaguar"> Jaguar</option>
        <option value="JC">JC</option>
        <option value=" Jeep"> Jeep</option>
        <option value=" Kawasaki"> Kawasaki</option>
        <option value=" Kenworth"> Kenworth</option>
        <option value="Kia">Kia</option>
        <option value=" King"> King</option>
        <option value=" Lamborghini"> Lamborghini</option>
        <option value=" Land Rover"> Land Rover</option>
        <option value=" Lexus"> Lexus</option>
        <option value=" Lincoln"> Lincoln</option>
        <option value=" Lotus"> Lotus</option>
        <option value=" MACK"> MACK</option>
        <option value=" MG"> MG</option>
        <option value=" MINI"> MINI</option>
        <option value=" MV"> MV</option>
        <option value=" Mack"> Mack</option>
        <option value=" Maserati"> Maserati</option>
        <option value=" Maybach"> Maybach</option>
        <option value=" Mazda"> Mazda</option>
        <option value=" McLaren"> McLaren</option>
        <option value=" Mercedes-Benz"> Mercedes-Benz</option>
        <option value=" Mercury"> Mercury</option>
        <option value=" Mitsubishi"> Mitsubishi</option>
        <option value=" Mitsubishi"> Mitsubishi</option>
        <option value=" Mobility Ventures"> Mobility Ventures</option>
        <option value=" Nissan"> Nissan</option>
        <option value=" Oldsmobile"> Oldsmobile</option>
        <option value=" Opel"> Opel</option>
        <option value=" Panoz"> Panoz</option>
        <option value=" Peterbilt"> Peterbilt</option>
        <option value=" Peugeot"> Peugeot</option>
        <option value=" Plymouth"> Plymouth</option>
        <option value=" Polaris"> Polaris</option>
        <option value=" Pontiac"> Pontiac</option>
        <option value=" Porsche"> Porsche</option>
        <option value=" Ram"> Ram</option>
        <option value=" Reefer"> Reefer</option>
        <option value=" Renault"> Renault</option>
        <option value=" Roll-off"> Roll-off</option>
        <option value=" Rolls-Royce"> Rolls-Royce</option>
        <option value=" Saab"> Saab</option>
        <option value=" Saturn"> Saturn</option>
        <option value=" Scion"> Scion</option>
        <option value=" Shelby"> Shelby</option>
        <option value=" Smart"> Smart</option>
        <option value=" Spyker"> Spyker</option>
        <option value=" Sterling"> Sterling</option>
        <option value=" Subaru"> Subaru</option>
        <option value=" Suzuki"> Suzuki</option>
        <option value=" Taylor"> Taylor</option>
        <option value=" Terex"> Terex</option>
        <option value=" Tesla"> Tesla</option>
        <option value=" Thermo King"> Thermo King</option>
        <option value=" Thru-Way"> Thru-Way</option>
        <option value=" Toyota"> Toyota</option>
        <option value=" Trailmobile"> Trailmobile</option>
        <option value=" Triumph"> Triumph</option>
        <option value=" Utility"> Utility</option>
        <option value=" Volkswagen"> Volkswagen</option>
        <option value=" Volv"> Volv</option>
        <option value=" Western Star"> Western Star</option>
        <option value=" Yamaha"> Yamaha</option>
        <option value=" Yugo"> Yugo</option>
        <option value=" other"> other</option>
      </select>
      <input type="datetime-local" placeholder="Created date" {...register("Created date", {required: true})} />
      <input type="text" placeholder="vinNumber" {...register("vinNumber", {})} />
      <input type="number" placeholder="stock number" {...register("stock number", { min: 0})} />
      <input type="text" placeholder="City" {...register("City", {})} />
      <input type="text" placeholder="Province" {...register("Province", {})} />
      <input type="text" placeholder="Country" {...register("Country", {})} />
      <input type="text" placeholder="Postal Code" {...register("Postal Code", {})} />
      <input type="text" placeholder="Driving Licence" {...register("Driving Licence", {})} />
      <input type="datetime-local" placeholder="Birth Date" {...register("Birth Date", {})} />
      <input type="datetime-local" placeholder="Driving licence Expiry Date" {...register("Driving licence Expiry Date", {})} />
      <select {...register("Gender")}>
        <option value="Prefer not to say">Prefer not to say</option>
        <option value=" Male"> Male</option>
        <option value=" Female"> Female</option>
        <option value=" other"> other</option>
      </select>
      <textarea {...register("Lead Comment", {required: true})} />

      <input type="submit" />
    </form>
    </LeadsFormBody>
  );
}

export default LeadsForm;
