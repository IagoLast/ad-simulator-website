"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border-2 border-pixel-green bg-pixel-green/10 p-6 text-center">
        <h3 className="mb-2 font-pixel text-xl text-pixel-green">You're on the list!</h3>
        <p className="font-pixel text-pixel-light-gray">
          We'll notify you when AD SIMULATOR is ready to play. Get ready for battle!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <Input
          type="email"
          placeholder="Enter your email"
          className="h-12 border-2 border-pixel-border bg-pixel-dark font-pixel text-white placeholder:text-pixel-light-gray"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="pixel" className="h-12 px-6" disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="animate-pulse">Processing</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Join Waitlist <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </Button>
      </div>
      <p className="text-center font-pixel text-xs text-pixel-light-gray">
        By joining, you agree to receive updates about AD SIMULATOR. We respect your privacy.
      </p>
    </form>
  )
}

