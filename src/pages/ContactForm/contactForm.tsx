import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzbvqdr");
  if (state.succeeded) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-green-600">
          Thanks for reaching to us!
        </p>
      </div>
    );
  }
  return (
    <div className="mt-12 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-6"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="mt-1 block w-full px-4 py-2 border text-black rounded-md shadow-sm focus:ring-black focus:border-black"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-600 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 text-black block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-black focus:border-black"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-600 text-sm mt-1"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-white text-black border border-gray-300 font-semibold py-2 px-4 rounded-full hover:bg-black hover:text-white disabled:bg-gray-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
