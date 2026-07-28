import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";

export default function Contact() {
  return (
    <main>
      <PageHero
        tag="Contact"
        title={<>Tell us what <span className="text-[#22c55e]">you&apos;re building.</span></>}
        description="Fill in a few details and we'll get back within one business day. Prefer email? hello@zanostech.com works too."
      />
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <ContactForm />
            <ContactSidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
