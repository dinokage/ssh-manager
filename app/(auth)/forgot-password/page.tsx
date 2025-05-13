import Link from "next/link"
import { Terminal } from "lucide-react"
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Terminal className="h-10 w-10 text-purple-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">Reset your password</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-card px-4 py-8 shadow sm:rounded-lg sm:px-10 border">
          <ForgotPasswordForm />

          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm font-medium text-purple-500 hover:text-purple-400">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
