const EnPolicy = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">
        Privacy Policy – Somnia
      </h1>
      <p className="text-sm">Effective date: October 20, 2025</p>

      <section className="space-y-3">
        <p>
          Thank you for using Somnia (the &quot;App&quot;). This Privacy Policy
          explains how we collect, use, and protect user data.
        </p>
        <h2 className="text-xl font-semibold">1. General information</h2>
        <p>
          Somnia is an app designed to play relaxing sounds that help users fall
          asleep. Users can create and save their own sound mixes locally on
          their devices.
        </p>
        <h2 className="text-xl font-semibold">2. Data collection</h2>
        <p>
          The app does not collect any personal data stored locally (such as the
          user’s sound mixes). However, it uses third-party services that may
          collect certain information for analytics and advertising purposes:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Google AdMob – for displaying ads and measuring their effectiveness;
          </li>
          <li>
            Firebase (Google LLC) – for analytics and app performance
            monitoring.
          </li>
        </ul>
        <p>
          These services may automatically collect data such as device
          identifiers, IP address, crash logs, or app usage statistics. This
          data is handled in accordance with Google’s privacy policies.
        </p>
        <h2 className="text-xl font-semibold">3. Data storage</h2>
        <p>
          User-created sound mixes are stored only locally on the user’s device
          and are not uploaded or shared externally.
        </p>
        <h2 className="text-xl font-semibold">4. Advertising</h2>
        <p>
          The app uses Google AdMob to display ads. Users can adjust ad
          personalization preferences through their Google Account settings or
          via the in-app ad settings (if available). More info:{" "}
          <a
            className="underline"
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/technologies/ads
          </a>
        </p>
        <h2 className="text-xl font-semibold">5. Security</h2>
        <p>
          We take steps to protect user information; however, please note that
          no system is completely secure.
        </p>
        <h2 className="text-xl font-semibold">
          6. Changes to this Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. The latest version
          will always be available within the app or at the provided URL.
        </p>
        <h2 className="text-xl font-semibold">7. Contact</h2>
        <p>
          For any questions or concerns regarding privacy, please contact us:
          [insert developer email here]
        </p>
      </section>
    </>
  );
};

export default EnPolicy;
