import Image from "next/image";
import { Roboto, Sora } from "next/font/google";

const head = Sora({ subsets: ["latin"], weight: ["600", "700"] });
const body = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

/* Details taken from the existing Specialists data (Dr.VKG Sudha) */
const DOCTOR = {
  name: "Dr. VKG Sudha",
  qualification: "MD, DVL",
  designation: "Senior Consultant",
  specialty: "Hair Restoration",
  experience: "10+ Years",
};

const FACTS = [
  {
    label: "Qualification",
    value: DOCTOR.qualification,
    icon: (
      <path d="M12 3 2 8l10 5 8-4v6h2V8L12 3Zm-6 9.5v3.2c0 1.6 2.7 3.3 6 3.3s6-1.7 6-3.3v-3.2l-6 3-6-3Z" />
    ),
  },
  {
    label: "Designation",
    value: DOCTOR.designation,
    icon: <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 12c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5Z" />,
  },
  {
    label: "Specialty",
    value: DOCTOR.specialty,
    icon: <path d="M9.5 3h5v6.5H21v5h-6.5V21h-5v-6.5H3v-5h6.5V3Z" />,
  },
  {
    label: "Experience",
    value: DOCTOR.experience,
    icon: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v5.4l4 2.3-1 1.7-5-2.9V7h2Z" />,
  },
];

export default function DoctorExpertise() {
  return (
    <section
      id="specialists"
      className={`${body.className} relative w-full overflow-hidden bg-[#f4f7fb] bg-[radial-gradient(circle_at_8%_90%,rgba(94,154,113,0.12),transparent_42%),radial-gradient(circle_at_95%_10%,rgba(200,107,155,0.10),transparent_38%)] py-10 sm:py-20 lg:py-24`}
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-y-6 px-4 sm:px-8 lg:grid-cols-2 lg:gap-x-[4vw] lg:gap-y-0 lg:px-[11.1%]">
        {/* ---------- doctor image ---------- */}
        <div className="relative order-3 mx-auto mt-4 h-[440px] w-full max-w-[440px] lg:order-none lg:mt-0 sm:h-[540px] lg:h-[34vw] lg:max-h-[640px] lg:min-h-[500px] lg:max-w-none">
          {/* arch backdrop */}
          <div className="absolute inset-x-[8%] bottom-0 top-[8%] rounded-t-[999px] bg-gradient-to-b from-[#7fb591] via-[#5e9a71] to-[#3f7455]" />
          <div className="absolute inset-x-[3%] bottom-0 top-[3%] rounded-t-[999px] border-2 border-[#c86b9b]/45" />

          <Image
            src="/health-doctor-standing.png"
            alt={`${DOCTOR.name}, ${DOCTOR.qualification}`}
            width={619}
            height={1476}
            sizes="(min-width:1024px) 36vw, 90vw"
            className="absolute bottom-0 left-1/2 h-[96%] w-auto -translate-x-1/2 object-contain"
          />

          {/* floating chips */}
          <div className="hero-float animate-[hero-float_5s_ease-in-out_infinite] absolute right-0 top-[47%] flex items-center gap-3 sm:top-[12%] rounded-2xl border border-white/80 bg-white/90 px-4 py-3 backdrop-blur-md sm:right-[-2%]">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#3f7455] to-[#7fb591] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                {FACTS[3].icon}
              </svg>
            </span>
            <div className={`${head.className} leading-tight`}>
              <div className="text-[20px] font-bold text-[#1f2a24]">10+</div>
              <div className="text-[12px] font-semibold text-[#4a5550]">Years Experience</div>
            </div>
          </div>

          <div className="hero-float-soft animate-[hero-float-soft_4.5s_ease-in-out_infinite_0.5s] absolute bottom-[14%] left-0 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 backdrop-blur-md sm:left-[-2%]">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#c86b9b] to-[#e48bb3] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                {FACTS[0].icon}
              </svg>
            </span>
            <div className={`${head.className} leading-tight`}>
              <div className="text-[18px] font-bold text-[#1f2a24]">{DOCTOR.qualification}</div>
              <div className="text-[12px] font-semibold text-[#4a5550]">{DOCTOR.specialty}</div>
            </div>
          </div>
        </div>

        {/* ---------- text ---------- */}
        <div className="max-lg:contents lg:flex lg:flex-col lg:items-start">
          <div className="order-1 inline-flex items-center gap-2 justify-self-start rounded-full border border-[#3f7455]/25 bg-white py-1.5 pl-1.5 pr-4 text-[11px] font-bold uppercase leading-none tracking-[0.1em] text-[#3f7455] lg:order-none">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#3f7455] to-[#7fb591] text-white">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                <path d="M9.5 3h5v6.5H21v5h-6.5V21h-5v-6.5H3v-5h6.5V3Z" />
              </svg>
            </span>
            Doctor Expertise
          </div>

          <div
            role="heading"
            aria-level={2}
            className={`${head.className} order-2 mt-0 text-[26px] font-bold leading-[1.22] tracking-[-0.015em] text-[#1f2a24] sm:text-[34px] lg:order-none lg:mt-5 lg:text-[max(28px,2.3vw)]`}
          >
            Treated{" "}
            <span className="bg-gradient-to-r from-[#3f7455] to-[#7fb591] bg-clip-text text-transparent">10,000+ Patients!</span>
            <br className="hidden sm:block" /> Your Journey Could Be Next
          </div>

          {/* doctor card */}
          <div className="order-4 mt-2 w-full max-w-[560px] rounded-[22px] border border-[#3f7455]/12 bg-white p-6 sm:p-7 lg:order-none lg:mt-7">
            <div className="flex items-center gap-4">
              <span className="h-12 w-1.5 rounded-full bg-gradient-to-b from-[#3f7455] to-[#c86b9b]" />
              <div>
                <div className={`${head.className} text-[19px] font-bold leading-tight text-[#1f2a24] sm:text-[22px]`}>
                  {DOCTOR.name}
                </div>
                <div className="mt-1 text-[13px] font-medium text-[#4a5550]">
                  {DOCTOR.qualification} &middot; {DOCTOR.designation}
                </div>
              </div>
            </div>

            <div className="my-5 h-px w-full bg-gradient-to-r from-[#3f7455]/30 via-[#3f7455]/10 to-transparent" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FACTS.map((f) => (
                <div key={f.label} className="flex items-center gap-3 rounded-2xl bg-[#f4f7fb] px-4 py-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#3f7455]/10 text-[#3f7455]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      {f.icon}
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7a847f]">{f.label}</div>
                    <div className={`${head.className} text-[14.5px] font-bold leading-tight text-[#1f2a24]`}>{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
