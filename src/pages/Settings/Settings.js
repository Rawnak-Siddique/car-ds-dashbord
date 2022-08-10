import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loading-icons'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { sendSettingsForm } from '../../api/api';
import { SERVER_URL } from '../../variables/variables';
import { CustomerBody } from '../Customer/styles';

const Settings = () => {
    const [notifyEmail, setNotifyEmail] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(SERVER_URL + '/outgoing/settings-data/get')
            .then(function (response) {
                // handle success
                // console.log(response)
                setNotifyEmail(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [loading, setLoading] = useState(true);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data?.notify_email === '') {
            alert('Notification Email is Empty/Unchanged')
            return;
        }
        sendSettingsForm(data, setSubmitSuccess, setSubmitError);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    return (
        <CustomerBody>
            <h2 className='text-4xl mx-5 my-2'>
                Settings
            </h2>
            <div className='p-8'>
                {submitSuccess ?
                    <>
                        {loading ?
                            <div className='p-4 flex flex-col items-center justify-center'>
                                <TailSpin stroke="#0a0a0a" /></div>

                            :
                            <>
                                <div className='p-4 flex flex-col items-center justify-center'>
                                    <h4 className='text-3xl my-4'>
                                        {submitError ? <><span className='text-red-600 text-center'>Email Update Failed. Try Again Later</span></> : <span className='text-green-600 text-center'>Email Update Success</span>}
                                    </h4>

                                    <p className='my-3'>Check out our vehicles</p>
                                    <button onClick={() => { navigate('/') }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Dashboard</button>
                                </div>
                            </>}

                    </>
                    :

                    <>
                        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                autoComplete="false"
                                name="hidden"
                                type="text"
                                style={{ display: "none" }}
                            />

                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-lg font-medium"
                                >
                                    Email Address for Receiving Email Notifications
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="example@example.com"
                                    defaultValue={notifyEmail[0]?.notify_email}
                                    required=""
                                    {...register("notify_email", { required: false })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Save
                            </button>

                        </form>
                        <br />
                        <hr />
                        <div className="mb-6">
                            <h2 className="block my-2 text-lg font-medium">
                                Change Password
                            </h2>
                            <Link
                                to="/change-pass"
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2"
                            >
                                Change Password
                            </Link>
                        </div>

                    </>}


            </div>
        </CustomerBody>
    );
};

export default Settings;