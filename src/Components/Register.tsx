import { FormEvent } from "react";
import { RegisterForm } from "../App";

interface RegisterProps {
  handleOnFormSubmission: (e: FormEvent<RegisterForm>) => void;
}

export default function Register(props: RegisterProps) {
  const { handleOnFormSubmission } = props;

  return (
    <>
      <form className='w-full max-w-lg' onSubmit={handleOnFormSubmission}>
        <h1 className='my-3'>Register</h1>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              First Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='firstName'
              type='text'
              placeholder='Jane'
            />
            <p className='text-red-500 text-xs italic'>
              Please fill out this field.
            </p>
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Last Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='lastName'
              type='text'
              placeholder='Doe'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              email
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='email'
              type='email'
              placeholder='example@gmail.com'
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Password
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='password'
              type='password'
              placeholder='******************'
            />
            <p className='text-gray-600 text-xs italic'>
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              City
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='city'
              type='text'
              placeholder='San Francisco'
            />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              State
            </label>
            <div className='relative'>
              <select
                className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='state'
              >
                {StateNames.map((state, i) => (
                  <option key={i}>{state}</option>
                ))}
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
              Zip
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='zip'
              type='text'
              placeholder='90210'
            />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

const StateNames: string[] = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
