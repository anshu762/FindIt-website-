export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for DiscoverMyCar.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-20">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
          DiscoverMyCar
        </p>

        <h1 className="mt-4 text-4xl font-black text-slate-950">
          Terms of Service
        </h1>

        <div className="mt-10 space-y-8 leading-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Using DiscoverMyCar
            </h2>
            <p className="mt-3">
              You agree to use DiscoverMyCar lawfully and responsibly. You
              should provide accurate information when creating an account or
              using recommendation tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Recommendations and information
            </h2>
            <p className="mt-3">
              DiscoverMyCar provides general information and recommendation
              tools. Recommendations are not a substitute for independent
              research, a professional inspection, a test drive, or advice
              from an authorised vehicle professional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Accounts and security
            </h2>
            <p className="mt-3">
              You are responsible for maintaining the confidentiality of your
              account information and for activity performed through your
              account. Notify us promptly if you believe your account has been
              used without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Website content
            </h2>
            <p className="mt-3">
              Website content, branding, designs, and software may belong to
              DiscoverMyCar or its licensors and may not be copied, modified,
              or redistributed without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Changes and contact
            </h2>
            <p className="mt-3">
              We may update these terms as the website develops. Continued use
              after an update means that you accept the revised terms. Contact
              the DiscoverMyCar team through the official contact channel for
              questions.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}