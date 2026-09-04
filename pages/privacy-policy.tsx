/* eslint-disable max-len */
import React from 'react';
import type { NextPage } from 'next';
import { PageHead } from '@/components/Head';
import styles from '@/styles/PrivacyPolicy.module.scss';

const PrivacyPolicy: NextPage = function PrivacyPolicy() {
  return (
    <>
      <PageHead
        title="StellarSOL Privacy Policy"
        description="Privacy policy for the StellarSOL browser extension."
        canonicalPath="/privacy-policy"
        themeColor="#d5d4f2"
      />
      <style jsx global>
        {`
          html,
          body {
            color-scheme: light;
            background: #d5d4f2;
          }
        `}
      </style>
      <main className={styles.page}>
        <article className={styles.article}>
          <h1>Privacy Policy</h1>
          <p>
            At StellarSOL, we are committed to protecting your privacy. This privacy policy explains how we collect, use, and share information about you when you use our browser extension and website.
          </p>

          <h2>Information We Collect</h2>
          <p>StellarSOL collects the following personal information about you:</p>
          <ul>
            <li>
              Email address: We collect your email address in order to authorize your use of our extension and to store your purchase history within the extension.
            </li>
          </ul>
          <p>We do not collect any other information including IP Address and Cookies.</p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect about you as follows:</p>
          <ul>
            <li>
              Email address: We use your email address to:
              <ul>
                <li>Authorize your use of StellarSOL</li>
                <li>Store your purchase history within the extension for your personal reference</li>
                <li>Communicate with you about your use of our extension and website, including updates and changes to our terms and policies</li>
              </ul>
            </li>
          </ul>
          <p>
            We do not share your personal information with any third parties, except as necessary to provide our extension and website to you. Your purchase history is stored within the extension for your personal reference and is not shared with any third parties.
          </p>
          <p>
            StellarSOL allows you to make payments using cryptocurrency on e-commerce sites such as Amazon and Flipkart. To facilitate these payments, we may use third party vendors such as Bitrefill.com and Bidali.com to buy gift cards on behalf of our users using the cryptocurrency provided by the user. These vendors do not receive any personal information about our users. We then use automation to apply those gift cards to purchases made through our extension on behalf of the user.
          </p>

          <h2>Restrictions on Use</h2>
          <p>
            StellarSOL is not intended for use by children under the age of 13. If you are under the age of 13, please do not use our extension.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect the information we collect about you from unauthorized access or tampering. These measures include implementing appropriate technical and organizational safeguards and regularly monitoring our systems for potential vulnerabilities and attacks. However, no data transmission over the internet or storage system can be guaranteed to be completely secure, so we cannot guarantee the absolute security of your information.
          </p>

          <h2>Data Retention</h2>
          <p>
            We will retain your personal information for as long as you use our extension and website. After you cease using our extension and website, we will retain your personal information for a reasonable period of time in order to comply with legal obligations and to resolve any disputes that may arise.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, and delete your personal information at any time. You can exercise these rights by contacting us at
            {' '}
            <a href="mailto:stellarsolapp@gmail.com">stellarsolapp@gmail.com</a>
            . We will respond to your request within 48 hours.
          </p>
          <p>
            You also have the right to object to the processing of your personal information, and to withdraw your consent at any time. Please note that withdrawing your consent may affect our ability to provide our extension and website to you.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time to reflect changes in our practices or to comply with legal requirements. We will post any updates to this policy on this page and notify you via email or through a prominent notice on our website. We encourage you to review this policy periodically for the latest information on our privacy practices.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this privacy policy or the privacy practices of StellarSOL, please contact us at
            {' '}
            <a href="mailto:stellarsolapp@gmail.com">stellarsolapp@gmail.com</a>
            . We are committed to working with you to resolve any issues you may have.
          </p>
          <p className={styles.lastUpdated}>
            Last updated:
            {' '}
            <time dateTime="2022-12-12">12 December, 2022</time>
          </p>
        </article>
      </main>
    </>
  );
};

export default PrivacyPolicy;
