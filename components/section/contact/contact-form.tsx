"use client";

import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useForm } from "react-hook-form";
import { useMemo, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useFormSpree } from "@formspree/react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { submitMessage } from "@/lib/action/message";
import { ContactSchema, ContactData } from "@/lib/schema";
import { MotionDiv, MotionH1, formVariants } from "@/lib/motion";

const ContactFrom = () => {
  const { width, height } = useWindowSize();
  const [isPending, startTransition] = useTransition();
  const [state, handleSubmit] = useFormSpree("mvoebegy");

  console.log({ width, height });

  const form = useForm<ContactData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const isLoading = useMemo(() => {
    return isPending || state.submitting;
  }, [isPending, state.submitting]);

  const isDisabled = useMemo(() => {
    return (
      !!form.formState.errors.email ||
      !!form.formState.errors.message ||
      !!form.formState.errors.name ||
      !!form.formState.errors.phone ||
      isLoading
    );
  }, [
    form.formState.errors.email,
    form.formState.errors.message,
    form.formState.errors.name,
    form.formState.errors.phone,
    isLoading,
  ]);

  function onSubmit(values: ContactData) {
    startTransition(() => {
      submitMessage(values)
        .then((data) => {
          if (data?.success) {
            handleSubmit(values);
          }
        })
        .catch((error) => console.log(error));
    });
  }

  return (
    <>
      {!state.succeeded ? (
        <Form {...form}>
          <form
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full sm:w-4/5 xl:w-3/5"
          >
            <MotionDiv variants={formVariants}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className={`${
                          form.formState.errors.name &&
                          "focus-visible:ring-destructive"
                        }`}
                        autoComplete="off"
                        placeholder="Name *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionDiv>
            <MotionDiv variants={formVariants}>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className={`${
                          form.formState.errors.phone &&
                          "focus-visible:ring-destructive"
                        }`}
                        autoComplete="off"
                        placeholder="Phone"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionDiv>
            <MotionDiv variants={formVariants}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className={`${
                          form.formState.errors.email &&
                          "focus-visible:ring-destructive"
                        }`}
                        autoComplete="off"
                        placeholder="Email *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionDiv>
            <MotionDiv variants={formVariants}>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        disabled={isLoading}
                        className={`${
                          form.formState.errors.message &&
                          "focus-visible:ring-destructive"
                        } resize-none`}
                        autoComplete="off"
                        placeholder="Message *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionDiv>
            <MotionDiv variants={formVariants}>
              <Button
                disabled={isDisabled}
                className="block mx-auto"
                type="submit"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </MotionDiv>
          </form>
        </Form>
      ) : (
        <div>
          <MotionH1
            variants={formVariants}
            className="text-center text-5xl font-extrabold capitalize text-primary"
          >
            Thank you for getting in touch!
          </MotionH1>
          <Confetti width={width} height={height} />
        </div>
      )}
    </>
  );
};

export default ContactFrom;

// "use client";

// import { useWindowSize } from "react-use";
// import { useForm } from "react-hook-form";
// import {
//   startTransition,
//   useActionState,
//   useEffect,
//   useMemo,
//   useRef,
// } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm as useFormSpree } from "@formspree/react";

// import Confetti from "react-confetti";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { submitMessage } from "@/lib/action/message";
// import { ContactSchema, ContactData } from "@/lib/schema";
// import { MotionDiv, MotionH1, formVariants } from "@/lib/motion";

// const ContactFrom = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const { width, height } = useWindowSize();
//   const [state, handleSubmit] = useFormSpree("mvoebegy");
//   const [formState, formAction, isPending] = useActionState(submitMessage, {
//     success: false,
//   });

//   const form = useForm<ContactData>({
//     resolver: zodResolver(ContactSchema),
//     defaultValues: {
//       name: "",
//       phone: "",
//       email: "",
//       message: "",
//     },
//   });

//   const isLoading = useMemo(() => {
//     return isPending || state.submitting;
//   }, [isPending, state.submitting]);

//   const {
//     // reset,
//     formState: { isSubmitSuccessful },
//     getValues,
//   } = form;

//   useEffect(() => {
//     if (isSubmitSuccessful && formState.success) {
//       // reset();
//       handleSubmit(getValues());
//     }
//   }, [
//     // reset,
//     getValues,
//     isSubmitSuccessful,
//     formState.success,
//     handleSubmit,
//   ]);

//   function onSubmit() {
//     startTransition(() => {
//       formAction(new FormData(formRef.current!));
//     });
//   }

//   return (
//     <>
//       {!state.succeeded ? (
//         <Form {...form}>
//           <form
//             ref={formRef}
//             action={formAction}
//             noValidate
//             autoComplete="off"
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="space-y-8 w-full sm:w-4/5 xl:w-3/5"
//           >
//             <MotionDiv variants={formVariants}>
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input
//                         disabled={isLoading}
//                         className={`${
//                           form.formState.errors.name &&
//                           "focus-visible:ring-destructive"
//                         }`}
//                         autoComplete="off"
//                         placeholder="Name *"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                     {formState?.errors?.name && (
//                       <p className="text-sm font-medium text-destructive">
//                         {formState?.errors?.name[0]}
//                       </p>
//                     )}
//                   </FormItem>
//                 )}
//               />
//             </MotionDiv>
//             <MotionDiv variants={formVariants}>
//               <FormField
//                 control={form.control}
//                 name="phone"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input
//                         disabled={isLoading}
//                         className={`${
//                           form.formState.errors.phone &&
//                           "focus-visible:ring-destructive"
//                         }`}
//                         autoComplete="off"
//                         placeholder="Phone"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                     {formState?.errors?.phone && (
//                       <p className="text-sm font-medium text-destructive">
//                         {formState?.errors?.phone[0]}
//                       </p>
//                     )}
//                   </FormItem>
//                 )}
//               />
//             </MotionDiv>
//             <MotionDiv variants={formVariants}>
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input
//                         disabled={isLoading}
//                         className={`${
//                           form.formState.errors.email &&
//                           "focus-visible:ring-destructive"
//                         }`}
//                         autoComplete="off"
//                         placeholder="Email *"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                     {formState?.errors?.email && (
//                       <p className="text-sm font-medium text-destructive">
//                         {formState?.errors?.email[0]}
//                       </p>
//                     )}
//                   </FormItem>
//                 )}
//               />
//             </MotionDiv>
//             <MotionDiv variants={formVariants}>
//               <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Textarea
//                         disabled={isLoading}
//                         className={`${
//                           form.formState.errors.message &&
//                           "focus-visible:ring-destructive"
//                         } resize-none`}
//                         autoComplete="off"
//                         placeholder="Message *"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                     {formState?.errors?.message && (
//                       <p className="text-sm font-medium text-destructive">
//                         {formState?.errors?.message[0]}
//                       </p>
//                     )}
//                   </FormItem>
//                 )}
//               />
//             </MotionDiv>
//             <MotionDiv variants={formVariants}>
//               <Button
//                 disabled={isLoading}
//                 className="block mx-auto"
//                 type="submit"
//               >
//                 {isLoading ? "Sending..." : "Send Message"}
//               </Button>
//             </MotionDiv>
//           </form>
//         </Form>
//       ) : (
//         <div>
//           <MotionH1
//             variants={formVariants}
//             className="text-center text-5xl font-extrabold capitalize text-primary"
//           >
//             Thank you for getting in touch!
//           </MotionH1>
//           <Confetti width={width} height={height} />
//         </div>
//       )}
//     </>
//   );
// };

// export default ContactFrom;
