import React, { useState } from 'react';
import fetch from 'node-fetch';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [isReadOnly, setIsReadOnly] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsReadOnly(true);

    const body = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(body),
      });

      if (res.status === 200) {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');

        toast.success(`I'll get back to you soon!`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(`Failed to send. Try again later.`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      setIsReadOnly(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="w-full max-w-lg" onSubmit={onSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Jane"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            readOnly={isReadOnly}
          />
          {/* <p className="text-red-500 border-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="email"
            placeholder="janedoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
            Message
          </label>
          <textarea
            className="no-resize appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            readOnly={isReadOnly}
          ></textarea>
          <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
        </div>
      </div>
      <div className="md:flex md:items-center justify-end">
        <div className="justify-end">
          <button
            className="shadow bg-blue-600 hover:bg-transparent focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
