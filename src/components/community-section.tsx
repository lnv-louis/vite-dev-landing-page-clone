type Testimonial = {
  name: string;
  handle: string;
  avatar: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ryan Carniato",
    handle: "@RyanCarniato",
    avatar: "/images/avatars/ryan-carniato.jpg",
    quote:
      "I'm loving what Vite enables. We've found building SolidStart that it is less a metaframework but a system of symbiotic Vite plugins. While built with SolidJS in mind, they should scale from our simple starts to whole frameworks.",
  },
  {
    name: "Rich Harris",
    handle: "@Rich_Harris",
    avatar: "/images/avatars/rich-harris.jpg",
    quote:
      "Vite is basically the united nations of JavaScript at this point. I'll be there as a representative of Sveltelandia",
  },
  {
    name: "David East",
    handle: "@_davideast",
    avatar: "/images/avatars/david-east.jpg",
    quote: "Each and every time I use Vite, I feel a true sense of pure and unbridled joy.",
  },
  {
    name: "Mark Dalgleish",
    handle: "@markdalgleish",
    avatar: "/images/avatars/mark-dalgleish.jpg",
    quote:
      "It's also a great platform to build a framework on since it provides a pluggable dev environment. Community is amazing too.",
  },
  {
    name: "Jason Miller",
    handle: "@_developit",
    avatar: "/images/avatars/jason-miller.jpg",
    quote: "Every time I suspect I've hit the bounds of what Vite can do, I end up being wrong.",
  },
  {
    name: "David Cramer",
    handle: "@zeeg",
    avatar: "/images/avatars/david-cramer.jpg",
    quote: "Vite has been a game changer for the industry.",
  },
  {
    name: "Dion Almaer",
    handle: "@dalmaer",
    avatar: "/images/avatars/dion-almaer.jpg",
    quote:
      "I am so excited to see so many great frameworks teaming up on top of vite. So many will benefit. ❤️ to the vite team.",
  },
  {
    name: "Christoph Nakazawa",
    handle: "@cpojer",
    avatar: "/images/avatars/christoph-nakazawa.jpg",
    quote: "Vite is gonna eat the (JavaScript) world.",
  },
  {
    name: "Nikolaj",
    handle: "@lopugit",
    avatar: "/images/avatars/nikolaj.jpg",
    quote: "Wow, wow, wow, wow, wow, wow, Vite is..... Vite is.... Wow 🤤🤯🙏",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="mb-4 break-inside-avoid rounded-lg border border-nickel bg-bg-alt p-5">
      <p className="text-[15px] leading-relaxed text-text-2">{testimonial.quote}</p>
      <div className="mt-4 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 rounded-sm object-cover"
        />
        <div>
          <div className="text-sm font-medium text-text-1">{testimonial.name}</div>
          <div className="text-sm text-text-3">{testimonial.handle}</div>
        </div>
      </div>
    </div>
  );
}

export function CommunitySection() {
  return (
    <section className="wrapper-ticks px-6 py-24">
      <h2 className="py-24 text-center font-display text-4xl font-medium md:text-5xl">
        Loved by the community
      </h2>

      <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
        <p className="max-w-md text-center text-text-2 md:text-left">
          Don&apos;t take our word for it - listen to what Vite community members have to say.
        </p>
        <div className="flex gap-10">
          <div className="text-center">
            <div className="font-display text-5xl text-text-1">80k+</div>
            <div className="mt-1 text-sm text-text-2">Github Stars</div>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl text-text-1">80m+</div>
            <div className="mt-1 text-sm text-text-2">Weekly NPM downloads</div>
          </div>
        </div>
      </div>

      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.handle} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
