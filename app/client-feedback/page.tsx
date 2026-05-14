"use client";
import Image from 'next/image'
import React, { useState } from 'react'

const fields = [
  {
    id: 'name',
    label: 'Full Name *',
    type: 'text',
    placeholder: 'Enter your full name',
  },
  {
    id: 'email',
    label: 'Email Address *',
    type: 'email',
    placeholder: 'Enter your email address',
  },
  {
    id: 'phone',
    label: 'Phone Number *',
    type: 'tel',
    placeholder: 'Enter your phone number',
  },
] as const;

const ClientFeedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suggestions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear message when user starts typing
    if (message.text) setMessage({ type: '', text: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          message: formData.suggestions.trim(),
          treatment: 'Client Feedback',
          source: 'Client Feedback Page',
          formName: 'client feedback',
          consent: true,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Feedback submitted successfully!' });
        setFormData({ name: '', email: '', phone: '', suggestions: '' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to submit feedback' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[var(--surface)] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl items-center justify-center">
          <div className="w-full border border-[#5e9a71]/18 bg-white/85 p-5 shadow-[0_24px_70px_rgba(46,60,50,0.12)] backdrop-blur sm:p-8">
            <div className="mb-6 flex items-center justify-center">
              <div className="flex items-center justify-center gap-2 rounded-full border border-[#5e9a71]/15 bg-[#fffdfa] px-4 py-3 shadow-[0_12px_34px_rgba(63,116,85,0.08)] sm:gap-3 sm:px-5">
                <div className="relative h-14 w-20 sm:h-16 sm:w-28">
                  <Image
                    src="/logos.png"
                    alt="Sudha Skin Hair Aesthetics logo"
                    fill
                    sizes="(min-width: 640px) 112px, 80px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="relative h-14 w-24 sm:h-16 sm:w-32">
                  <Image
                    src="/logos1.png"
                    alt="Sudha Skin Hair Aesthetics secondary logo"
                    fill
                    sizes="(min-width: 640px) 128px, 96px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="mb-9 text-center sm:mb-5">
              <div className="mx-auto mb-3 h-1 w-12 bg-[#c86b9b]" />
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5e9a71]">
                Client Feedback
              </p>
              <h4 className="text-2xl font-black text-[#241f21] sm:text-6xl mb-4">
                Help Us Improve
              </h4>
              <p className="mx-auto mb-4 max-w-lg text-sm leading-7 text-[#5b5558] sm:text-base">
                Tell us what did not meet your expectations. We genuinely value your feedback and will work on making things better.
              </p>
            </div>

            {message.text && (
              <div className={`mb-5 border px-4 py-3 text-center text-sm font-medium ${
                message.type === 'success'
                  ? 'border-[#5e9a71]/25 bg-[#5e9a71]/10 text-[#3f7455]'
                  : 'border-[#c86b9b]/30 bg-[#f3e1ea] text-[#b72c78]'
              }`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {fields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-2 block text-sm font-semibold text-[#241f21]">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full border border-[#5e9a71]/20 bg-[#fffdfa] px-4 py-3 text-sm text-[#241f21] outline-none transition focus:border-[#5e9a71] focus:ring-4 focus:ring-[#5e9a71]/12 disabled:cursor-not-allowed disabled:bg-[#f6f2ec] disabled:text-[#8a7f74]"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="suggestions" className="mb-2 block text-sm font-semibold text-[#241f21]">
                  Your Suggestions *
                </label>
                <textarea
                  id="suggestions"
                  name="suggestions"
                  value={formData.suggestions}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full resize-none border border-[#5e9a71]/20 bg-[#fffdfa] px-4 py-3 text-sm text-[#241f21] outline-none transition focus:border-[#5e9a71] focus:ring-4 focus:ring-[#5e9a71]/12 disabled:cursor-not-allowed disabled:bg-[#f6f2ec] disabled:text-[#8a7f74]"
                  placeholder="Share your valuable suggestions and feedback..."
                />
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer border-2 border-[#5e9a71] bg-[#5e9a71] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(94,154,113,0.22)] disabled:cursor-not-allowed disabled:border-[#8a7f74] disabled:bg-[#8a7f74]"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                </button>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  disabled={isSubmitting}
                  className="w-full cursor-pointer border-2 border-[#5e9a71] bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#5e9a71] disabled:cursor-not-allowed disabled:border-[#8a7f74] disabled:text-[#8a7f74]"
                >
                  Back to Home
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientFeedback
