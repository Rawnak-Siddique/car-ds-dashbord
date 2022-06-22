import React, { useState } from 'react'
import { InventoryFormBody, InventoryFormBodySection, InventoryFormImage, InventoryFormImageHolder, InventoryFormImageUpload, InventoryFormSection } from './styles'
import { useForm } from 'react-hook-form';

const InventoryForm = () => {
    const [img, setImg] = useState('https://files.hodoor.world/images/products/images-products-1-5950-362149694-mansory_porsche_cayenne_coupe_06.jpg');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <InventoryFormBody>
            <h1>Inventory Form</h1>
            <InventoryFormBodySection>
                <InventoryFormImage>
                    <InventoryFormImageHolder src={img} alt="Inventory image"/>
                    <InventoryFormImageUpload>
                        <input type="file" onChange={(e) => setImg(e.target.files[0])}/>
                    </InventoryFormImageUpload>
                </InventoryFormImage>
              <InventoryFormSection>
                <h1>hi</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <select {...register("Brand", { required: true })}>
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
                        <input type="text" placeholder="Model" {...register("Model", {required: true})} />
                        <input type="text" placeholder="vinNumber" {...register("vinNumber", {})} />
                        <input type="number" placeholder="Stock" {...register("Stock", {required: true})} />
                        <input type="number" placeholder="Price" {...register("Price", { min: 0})} />
                        <input type="text" placeholder="Exterior Color" {...register("Exterior Color", {})} />
                        <input type="text" placeholder="Interior Color" {...register("Interior Color", {})} />
                        <input type="number" placeholder="OdoMeter" {...register("OdoMeter", { min: 0})} />
                        <textarea {...register("Featured", {})} />
                        <select {...register("Cylinder")}>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="other">other</option>
                        </select>
                        <select {...register("Transmission")}>
                            <option value="Automatic">Automatic</option>
                            <option value=" Manual"> Manual</option>
                            <option value=" Triprotic"> Triprotic</option>
                            <option value=" other"> other</option>
                        </select>
                        <select {...register("Drive")}>
                            <option value="4-wheel">4-wheel</option>
                            <option value=" 4x4"> 4x4</option>
                            <option value=" all-wheel"> all-wheel</option>
                            <option value=" front-wheel"> front-wheel</option>
                            <option value=" rear-wheel"> rear-wheel</option>
                            <option value=" other"> other</option>
                        </select>
                        <select {...register("Body Type")}>
                            <option value="Boat">Boat</option>
                            <option value=" Commercial EV"> Commercial EV</option>
                            <option value=" Convertible"> Convertible</option>
                            <option value=" Coupe"> Coupe</option>
                            <option value=" Coupe-2-Door"> Coupe-2-Door</option>
                            <option value=" Cargo Van"> Cargo Van</option>
                            <option value=" Dump"> Dump</option>
                            <option value=" Golf Carts EV"> Golf Carts EV</option>
                            <option value=" Hatchback"> Hatchback</option>
                            <option value=" Minivan-Van"> Minivan-Van</option>
                            <option value=" Pickup-Truck"> Pickup-Truck</option>
                            <option value=" Passenger Van"> Passenger Van</option>
                            <option value="  Sedan">  Sedan</option>
                            <option value=" SUV"> SUV</option>
                            <option value=" SUV-Crossover"> SUV-Crossover</option>
                            <option value=" Trailer"> Trailer</option>
                            <option value=" Truck"> Truck</option>
                            <option value=" Wagon"> Wagon</option>
                            <option value=" other"> other</option>
                        </select>
                        <select {...register("Door")}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="other">other</option>
                        </select>
                        <select {...register("Status")}>
                            <option value="in stock">in stock</option>
                            <option value=" out of stock"> out of stock</option>
                        </select>
                        <select {...register("Condition")}>
                            <option value="New">New</option>
                            <option value=" Used"> Used</option>
                        </select>
                        <select {...register("Fuel Type")}>
                            <option value="Diesel">Diesel</option>
                            <option value=" Flex Fuel"> Flex Fuel</option>
                            <option value=" Gasoline Fuel"> Gasoline Fuel</option>
                            <option value=" Hybrid Gas"> Hybrid Gas</option>
                            <option value=" Electric"> Electric</option>
                            <option value=" Propane"> Propane</option>
                            <option value=" other"> other</option>
                        </select>
                        <input type="text" placeholder="Mileage" {...register("Mileage", { min: 0})} />
                        <input type="datetime-local" placeholder="Created Date" {...register("Created Date", {})} />
                        <input type="datetime-local" placeholder="Modified Date" {...register("Modified Date", {})} />
                        <textarea {...register("Detail Description", {})} />

                        <input type="submit" />
                        </form>
              </InventoryFormSection>  
            </InventoryFormBodySection>
        </InventoryFormBody>
    )
}

export default InventoryForm
