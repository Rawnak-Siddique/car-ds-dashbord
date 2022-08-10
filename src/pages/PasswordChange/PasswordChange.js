import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loading-icons';
import { sendChangePassForm } from '../../api/api';
import logo from '../../assets/momin-logo.png';
import bcrypt from 'bcryptjs';
import useCredentials from '../../hooks/useAuth';
import {useNavigate} from 'react-router-dom';

const PasswordChange = () => {
    let navigate = useNavigate();
    const saltRounds = 10;
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [credentials] = useCredentials();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data?.new_pass !== data?.repeat_pass) {
            alert('Your New Passwords don\'t match. Please Try again.')
            return;
        }
        bcrypt.compare(data?.current_pass, credentials[0]?.password, function (err, res) {
            if (!res) {
                alert('Your Current Password Input is Wrong. Please Try again.')
                return;
            }
        });
        bcrypt.hash(data?.new_pass, saltRounds).then(function (hash) {
            sendChangePassForm({ hash: hash }, setSubmitSuccess, setSubmitError);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        });

    }
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <img
                        className="w-40 mb-2"
                        src={logo}
                        alt="logo"
                    />

                    <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Change Password
                        </h2>
                        {submitSuccess ?
                            <>
                                {loading ?
                                    <div className='p-4 flex flex-col items-center justify-center'>
                                        <TailSpin stroke="#0a0a0a" /></div>

                                    :
                                    <>
                                        <div className='p-4 flex flex-col items-center justify-center'>
                                            <h4 className='text-2xl my-4'>
                                                {submitError ? <><span className='text-red-600'>Password Change Failed. Try Again Later</span></> : <span className='text-green-600'>Password Change Success</span>}
                                            </h4>

                                            <p className='my-3'>Click below to close this Tab</p>
                                            <button onClick={() => { window.close() }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Done</button>
                                        </div>
                                    </>}

                            </>
                            :

                            <>
                                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label
                                            htmlFor="current-pass"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            name="current-pass"
                                            id="current-pass"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Current Password"
                                            required="yes"
                                            {...register("current_pass", { required: true })}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Type your new password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required="yes"
                                            {...register("new_pass", { required: true })}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="confirm-password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Confirm password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirm-password"
                                            id="confirm-password"
                                            placeholder="Retype your new password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required="yes"
                                            {...register("repeat_pass", { required: true })}
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="newsletter"
                                                aria-describedby="newsletter"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required="yes"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="newsletter"
                                                className="font-light text-gray-500 dark:text-gray-300"
                                            >
                                                I remember my new password

                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Change Password
                                    </button>
                                    <button
                                        onClick={() => navigate('/')}
                                        className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </>}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PasswordChange;