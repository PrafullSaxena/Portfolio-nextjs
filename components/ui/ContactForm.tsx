"use client";
import React, {useState} from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import {CopyIcon} from "lucide-react";
import {TextArea} from "@components/ui/TextArea";
import {useForm} from "@formspree/react";
import { MultiStepLoader as Loader } from "@components/ui/multi-step-loader";
import {loadingStates} from "@data/AppConstent";
import {IconSquareRoundedX} from "@tabler/icons-react";

interface ContactFormProps {
    formToken: string;
}

export function ContactForm({formToken}:ContactFormProps) {
    const [loading, setLoading] = useState(false);
    const [state, handleSubmit] = useForm(formToken);

    if(state.submitting) {
        console.log("submitting", state.submitting);
    }

    if (state.succeeded) {
        console.log("succeeded", state.succeeded);
    }

    if (state.errors) {
        console.error("errors", state.errors);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        handleSubmit(e);
    }

  return (
      <>
          <div className="max-w-4xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black">
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
                  {"Let's catch up!"}
              </h2>
              <p className="text-neutral-600 text-sm  mt-2 text-center dark:text-neutral-300">
                  Fill in the details and send your message, I will revert you on your email.
              </p>

              <form className="my-8" onSubmit={handleFormSubmit}>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                      <LabelInputContainer>
                          <Label htmlFor="firstname">First name</Label>
                          <Input id="firstname" name="firstname" placeholder="Tyler" type="text"/>
                      </LabelInputContainer>
                      <LabelInputContainer>
                          <Label htmlFor="lastname">Last name</Label>
                          <Input id="lastname" name="lastname" placeholder="Durden" type="text"/>
                      </LabelInputContainer>
                  </div>
                  <LabelInputContainer className="mb-4">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" placeholder="name@email.com" type="email"/>
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                      <Label htmlFor="email">Subject</Label>
                      <Input id="subject" name="subject" placeholder="Inquiring for business." type="text"/>
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-8">
                      <Label htmlFor="twitterpassword">Your message</Label>
                      <TextArea id="message" name="message" placeholder="wating for your message..." className="h-60"
                      />
                  </LabelInputContainer>

                  <button
                      className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900
              to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10
              font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
              dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                      type="submit"
                  >
                      Send message &rarr;
                      <BottomGradient/>
                  </button>

                  <div
                      className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"/>

                  <div className="flex flex-col space-y-4">
                      <button
                          className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10
                font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                          type="submit"
                      >
                          <CopyIcon className='h-4 w-4 text-neutral-800 dark:text-neutral-300'/>
                          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Copy my email
                    </span>
                          <BottomGradient/>
                      </button>

                  </div>
              </form>
          </div>
          <div className="w-full h-[60vh] flex items-center justify-center">
              {/* Core Loader Modal */}
              <Loader loadingStates={loadingStates} loading={loading} duration={2000} loop={false}/>
              {loading && (
                  <button
                      className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                      onClick={() => setLoading(false)}
                  >
                      <IconSquareRoundedX className="h-10 w-10"/>
                  </button>
              )}
          </div>
      </>
  );
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"/>
            <span
                className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"/>
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
