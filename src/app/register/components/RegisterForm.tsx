"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import useRegister from "@/hooks/api/auth/useRegister";
import { RegisterValidationSchema } from "../schema";

export default function RegisterForm({
   className,
   ...props
}: React.ComponentProps<"div">) {
   const { mutateAsync:register, isPending } = useRegister();
   const formik = useFormik({
      initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         confirmPassword: "",
      },
      validationSchema: RegisterValidationSchema,
      onSubmit: async (values) => {
         await register(values);
      },
   });

   return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
         <Card className="overflow-hidden py-0 shadow-2xl">
            <CardContent className="grid p-0 md:grid-cols-2">
               <form onSubmit={formik.handleSubmit} className="p-6 md:p-8">
                  <div className="flex flex-col gap-6">
                     <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold">Welcome back</h1>
                        <p className="text-balance text-muted-foreground">
                           Register to your Ncrit account
                        </p>
                     </div>

                     <div className="grid gap-2 relative">
                        <Label htmlFor="firstName">first Name</Label>
                        <Input
                           name="firstName"
                           id="firstName"
                           type="text"
                           value={formik.values.firstName}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           placeholder="alex"
                        />
                        {!!formik.touched.firstName &&
                           !!formik.errors.firstName && (
                              <span className="text-sm text-destructive absolute top-[100%]">
                                 {formik.errors.firstName}
                              </span>
                           )}
                     </div>

                     <div className="grid gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                           name="lastName"
                           id="lastName"
                           type="text"
                           value={formik.values.lastName}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           placeholder="kopling"
                        />
                        {!!formik.touched.lastName &&
                           !!formik.errors.lastName && (
                              <span className="text-sm text-destructive">
                                 {formik.errors.lastName}
                              </span>
                           )}
                     </div>

                     <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                           name="email"
                           id="email"
                           type="email"
                           placeholder="m@example.com"
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {!!formik.touched.email && !!formik.errors.email && (
                           <span className="text-sm text-destructive">
                              {formik.errors.email}
                           </span>
                        )}
                     </div>

                     <div className="grid gap-2">
                        <div className="flex items-center">
                           <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                           name="password"
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           id="password"
                           type="password"
                        />
                        {!!formik.touched.password &&
                           !!formik.errors.password && (
                              <span className="text-sm text-destructive">
                                 {formik.errors.password}
                              </span>
                           )}
                     </div>

                     <div className="grid gap-2">
                        <div className="flex items-center">
                           <Label htmlFor="password">Confirm Password</Label>
                        </div>
                        <Input
                           id="confirmPassword"
                           type="password"
                           value={formik.values.confirmPassword}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                        {!!formik.touched.confirmPassword &&
                           !!formik.errors.confirmPassword && (
                              <span className="text-sm text-destructive">
                                 {formik.errors.confirmPassword}
                              </span>
                           )}
                     </div>

                     <Button disabled={isPending} type="submit" className="w-full">
                        {isPending ? "يني لوادينع..." : "سوبميت"}
                     </Button>
                     <div className="text-center text-sm">
                        Already have an account?{" "}
                        <a
                           href="/login"
                           className="underline underline-offset-4"
                        >
                           Login
                        </a>
                     </div>
                  </div>
               </form>
               <div className="relative hidden bg-muted md:block">
                  <img
                     src="/webKampungJaya.png"
                     alt="Image"
                     className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                  />
               </div>
            </CardContent>
         </Card>
         <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
         </div>
      </div>
   );
}
