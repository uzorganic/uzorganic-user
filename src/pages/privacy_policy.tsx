import { SEO } from '@/components/SEO';
import { PrivacyPolicy } from '@/contents/PrivacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="I’m ORGANIC - Privacy Policy"
        description="This is the privacy policy page of our website, detailing how we handle user data and privacy."
        url="https://uzorganic.com/privacy_policy"
      />
      <PrivacyPolicy />
    </>
  );
};

PrivacyPolicyPage.layoutFillColor = 'black';

export default PrivacyPolicyPage;
