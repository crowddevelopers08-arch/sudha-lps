import { getImageProps } from "next/image";

const ALT =
  "Asalu problem cure avtundaa? Prathi treatment tarvatha mee skin or hair infections malli malli vastunnaya? Identify root cause, get correct treatment, healthy skin and hair long term.";

export default function CareHero() {
  // art direction: a landscape banner from 768px up, a portrait banner on phones
  const common = { alt: ALT, sizes: "100vw", priority: true };

  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "/banner-2.png", width: 1896, height: 829 });

  const {
    props: { srcSet: mobile, ...img },
  } = getImageProps({ ...common, src: "/banner-mble.png", width: 941, height: 1672 });

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f7fb]">
      {/* the headline is part of the picture – keep it for screen readers / SEO without changing the look */}
      <div role="heading" aria-level={1} className="sr-only">
        Asalu problem cure avtundaa? Prathi treatment tarvatha mee skin or hair infections malli malli vastunnaya?
      </div>

      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <source media="(max-width: 767px)" srcSet={mobile} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img {...img} className="block aspect-[941/1672] h-auto w-full md:aspect-[1896/829]" />
      </picture>
    </section>
  );
}
