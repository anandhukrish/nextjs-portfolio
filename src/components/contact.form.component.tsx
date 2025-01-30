import React, { useActionState } from "react";
import { Send } from "lucide-react";

type State = {
  message: string;
  status: "error" | "success" | "idle";
  error?: {
    email?: string;
    message?: string;
  };
};

async function handleFormState(
  previousState: State,
  formData: FormData
): Promise<State> {
  console.log(previousState);

  const email = formData.get("email");
  const message = formData.get("message");
  const errors: State["error"] = {};
  if (!email) {
    errors.email = "email field required";
  }
  if (!message) {
    errors.message = "message field required";
  }

  console.log(errors);

  if (Object.keys(errors).length > 0) {
    return {
      message: "",
      status: "error",
      error: errors,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    message: "",
    status: "success",
  };
}

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState<State, FormData>(
    handleFormState,
    { error: {}, message: "", status: "idle" }
  );

  return (
    <form className="space-y-6" action={formAction}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
          placeholder="you@example.com"
        />
        {state.error?.email && (
          <div className="text-sm text-red-600 font-medium">
            {state.error.email}
          </div>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={8}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors resize-none"
          placeholder="Your message here..."
        ></textarea>
        {state.error?.message && (
          <div className="text-sm text-red-500 font-medium">
            {state.error.message}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        tabIndex={0}
        disabled={isPending}
      >
        <Send className="size-5" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
