"use client";

import Image from 'next/image'
import React from 'react'

const Review = () => {
  return (
    <div className="min-h-screen bg-[var(--surface)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl items-center justify-center">
        <div className="w-full border border-[#5e9a71]/18 bg-white/85 p-5 shadow-[0_24px_70px_rgba(46,60,50,0.12)] backdrop-blur sm:p-8 lg:p-10">
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

          <div className="mb-7 text-center sm:mb-5">
            <div className="mx-auto mb-3 h-1 w-12 bg-[#c86b9b]" />
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5e9a71]">
              Sudha Aesthetics
            </p>
            <h2 className="text-2xl font-black leading-tight text-[#241f21] sm:text-4xl">
              Click & Review
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#5b5558] sm:text-base">
              We'd love to hear your feedback!<br />
              Please click any one of the buttons below to share your review.<br />
              A short review of 4 to 5 lines would be greatly appreciated.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJr49zFygpODoRyS7tjU_7mw4&source=g.page.m.ia._&laa=nmx-review-solicitation-ia2"
              className="w-full border-2 border-[#5e9a71] bg-[#5e9a71] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(94,154,113,0.22)]"
            >
              Client Review
            </a>
            <a
              href="/client-feedback"
              className="w-full border-2 border-[#5e9a71] bg-transparent px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#5e9a71]"
            >
              Client Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
