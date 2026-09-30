export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for DiscoverMyCar.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-20">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
          DiscoverMyCar
        </p>

        <h1 className="mt-4 text-4xl font-black text-slate-950">
          Privacy Policy
        </h1>


        <div className="mt-10 space-y-8 leading-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Information we collect
            </h2>
            <p className="mt-3">
              DiscoverMyCar may collect information that you provide directly,
              such as account details, preferences, quiz responses, and
              information submitted through forms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              How we use information
            </h2>
            <p className="mt-3">
              We may use information to provide recommendations, operate
              accounts, improve the website, respond to requests, and maintain
              the security and reliability of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Cookies and analytics
            </h2>
            <p className="mt-3">
              The website may use cookies or similar technologies for essential
              functionality, preferences, security, and understanding how the
              website is used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Data security and retention
            </h2>
            <p className="mt-3">
              We take reasonable measures to protect information, but no
              internet transmission or storage system can be guaranteed to be
              completely secure. Information may be retained as needed for
              legitimate operational, legal, and security purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Contact
            </h2>
            <p className="mt-3">
              For privacy questions or requests, please contact the
              DiscoverMyCar team through the official contact channel provided
              on the website.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}