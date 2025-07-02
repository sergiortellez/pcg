/*<---------------------------------------------------------------------------->
<!--	Info (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './Info.module.css'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClock } from '@awesome.me/kit-698a354a60/icons/classic/solid'

export default function Info() {
  return (
    <>
      <section className={styles.directory}>
        <h1>Partner contact <i><FontAwesomeIcon icon={faClock} /> 24 hr consult</i> </h1>

        <article>
          <h3>JJ Powell</h3>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>jjpowell@thepowellcg.com</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+1646363115">+1 (646) 369 3115</a>

          </div>
        </article>
        <article>
          <h3>Jorge Martínez y López</h3>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>jmartinezyl@thepowellcg.com</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+525522994142">+52 (55) 2299 4142</a>
          </div>
        </article>
        <article>
          <h3>Gabriel Cordero Casasola</h3>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>gccasasola@thepowellcg.com</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+525513533146">+52 (55) 1353 3146</a>
          </div>
        </article>
      </section>
      <section className={styles.privacyNotice}>

        <h1>Privacy Notice</h1>

        <h2>1. About Us</h2>
        <p>
          PCG is an international law firm. We are committed to safeguarding the privacy of the personal information that is provided to us or collected by us during the course of our business as well as the personal information we receive from visitors to our PCG website. PCG is the data controller of any personal information collected by or provided to us in the circumstances described below in section 2.
        </p>
        <p>
          This Privacy notice explains how we may collect and use any personal information that we obtain about you and your rights in relation to that information. In line with our aim to have a consistent approach to protecting personal data, this is a global policy that we follow in each of our offices. It is based on data protection principles that are set out in Mexico, the UK and relevant European Union data protection laws. Where we have offices in jurisdictions with significantly different data protection laws it may be that the rights and obligations set out in this Privacy notice do not apply.
        </p>
        <p>
          If you have any questions about how our Privacy notices apply to you or want to make a complaint to us about how we handle your personal information, please contact us at <a href="mailto:info@pcg.com">info@pcg.com</a>
        </p>
        <p>
          We may provide you with additional privacy notices where we believe that it is appropriate to do so. Those additional notices supplement and should be read together with this Privacy notice.
        </p>

        <h2>2. The Scope of This Privacy Notice</h2>
        <p>This Privacy notice applies in the following circumstances:</p>
        <ul>
          <li>when we conduct open source searches on you in connection with our business development or business acceptance processes;</li>
          <li>when we agree to provide legal services to you or the organisation you work for;</li>
          <li>when you or the organisation you work for are a counterparty of one or more of our clients;</li>
          <li>when you request information from us or provide information to us;</li>
          <li>when you apply for a role or work experience opportunity, open day or insight event with us;</li>
          <li>when you visit our offices and our website;</li>
          <li>when you complete application forms on various sections of our website;</li>
          <li>if you are an alumni of the firm;</li>
          <li>when you attend our seminars or other hosted events (including virtual events organised by us and hosted on third party platforms);</li>
          <li>when you are entered onto our mailing lists to receive publications and other marketing emails.</li>
        </ul>
        <p>
          We do not directly target or provide services to children. However, we may process children’s personal information in relation to the provision of legal services or if you and/or your employer provide this information to us directly.
        </p>

        <h2>3. Legal Services and Keeping You Up to Date with Relevant Marketing and Events</h2>
        <p>
          The type of personal information that we may collect includes current and historical information including your name and contact details (such as your address, email address and telephone numbers) and identifiers such as your organisation, employment history, professional and business expertise and positions held.
        </p>
        <p>
          We will also collect personal information you choose to provide to us directly, or, for information about your other dealings with us and our clients, including contact we have with you in person, by telephone, letter, email or online. This information may include access or dietary requirements which may reveal information about your health or religious beliefs. We obtain personal information from your IP address and the operating systems and web browsers that you use to access our website. It enables us to identify which organisations have visited our website and we use this information to compile statistical data on the use of those sites to help us to improve the user experience.
        </p>
        <p>
          We collect personal information directly from you, from our clients or other parties to a matter and their authorised representatives. We may also collect personal information from third parties such as your employer, other organisations that you have dealings with, regulators, government agencies, credit reporting agencies, publicly available records (including electronic data sources to carry out checks to enable us to comply with applicable law), information or service providers (some of whom may process your personal information on our behalf), third party platforms that we engage to host our training and events, recruitment agencies and other law firms or professional advisers. Your personal information may be collected in the firm’s contact database when you register to receive legal updates or we otherwise receive your contact details.
        </p>
        <p>
          We use a third party service provider to manage the firm’s contact database and deliver emails to inform you about our services, legal developments and updates and invite you to PCG events (including those we may jointly host with other organisations).
        </p>

        <h2>4. How We Use Your Information</h2>
        <p>We will only use your personal information if and to the extent that applicable law allows. We will therefore only process your personal information if:</p>
        <ul>
          <li>it is necessary for the performance of a contract with you or the organisation you work for;</li>
          <li>it is necessary in connection with a legal obligation;</li>
          <li>you have given your consent (where necessary) to such use or the organisation you work for has obtained your consent (where necessary) to share your information with us; or</li>
          <li>if we (or a third party) have a legitimate interest which is not overridden by your interests or your rights and freedoms. Such legitimate interests include the provision of legal services, running the firm’s business and marketing relevant services directly to you.</li>
        </ul>
        <p>We may use your personal information to:</p>
        <ul>
          <li>consider whether we can pursue certain business development initiatives;</li>
          <li>comply with our legal obligations to identify and verify the identity of our clients and their beneficial owners and to identify and assess the risks of money laundering and terrorist financing which may apply to our business;</li>
          <li>deliver legal services to you and/or the organisation you work for, if you are a client;</li>
          <li>carry out identity and security checks when you visit our offices (including capturing your image on CCTV);</li>
          <li>run the firm’s business (e.g. carry out administrative or operational processes, including recruitment);</li>
          <li>maintain and develop our business relationship with you;</li>
          <li>improve our services and products to you, if you or the organisation you work for are a client or prospective client;</li>
          <li>identify services you may be interested in;</li>
          <li>send you marketing and invite you to events;</li>
          <li>monitor and analyse our business; or</li>
          <li>process and respond to requests, enquiries or complaints received from you.</li>
        </ul>
        <p>
          We will only retain your personal information for as long as is necessary for the purpose for which it was collected, including for the purposes of complying with any legal, regulatory, accounting or reporting requirements. Personal information processed in connection with our business acceptance processes and/or providing legal services will be retained in accordance with the firm’s retention and destruction policy unless we agree otherwise with you, in writing. If you wish to know more about the firm’s retention and destruction policy or any of the firm’s different retention periods, please contact <a href="mailto:info@pcg.com">info@pcg.com</a>
        </p>

        <h2>5. How and Why Do We Share Your Personal Information?</h2>
        <p>
          We may share your personal information with our offices, branches, in-house companies and associated partnerships due to, for example, our shared IT systems and/or cross jurisdictional working on a matter. We use third parties who provide services on our behalf and will share your information with them, for example a technology supplier may have access to your personal information when providing software support, or a company we use for a communications campaign or to host our events may process the personal information of our contacts or attendees for us.
        </p>
        <p>
          During the course of working with you or the organisation you work for we may use certain third party technology services to assist with our work on the matter. Where these services are integral to our work for you (for example, the use of word processing software provided by Microsoft and due diligence tools provided by Luminance, the AI software solution that we helped to develop), we deploy them as a matter of course. We also use various ancillary services, for example, software that is capable of effecting bulk data transfers or facilitating e-signatures and virtual completions. In addition we make use of third party technology services that are more integral to the work we do, i.e. running the firm’s business. These services include, amongst other things, cloud security systems and subscription application services. The use of these integral and ancillary services may require your personal information to be held in the cloud on infrastructure managed by the relevant service provider.
        </p>
        <p>
          We may also have to share your personal information with regulators, government and enforcement agencies, courts and other third parties.
        </p>
        <p>
          To enable us to provide the services set out in this Privacy notice, it is likely that we will transfer your personal information to countries outside the jurisdiction where you provided it or where we collected it, for example information that we collect through cookies or through your completion of our online forms.
        </p>
        <p>
          Your personal information may be accessed by our offices, branches, in-house companies and associated partnerships and third parties in countries whose laws provide varying levels of protection for personal information.
        </p>
        <p>
          Some of your personal information may be stored in a cloud located within or outside of the UK, the EEA or your own jurisdiction and managed by a third party service provider. In adopting this approach, the confidentiality of your personal information is of key importance to us and we conduct careful due diligence on the security of any third party technology systems we use.
        </p>
        <p>
          Where we transfer your personal information outside the jurisdictions where our offices are located, we will take reasonable steps to ensure that your information is treated securely and the means of transfer provide adequate safeguards.
        </p>
        <p>
          Personal information shared between PCG offices is subject to a data sharing agreement which sets out the standards each office must follow.
        </p>
        <p>
          We may share your personal information with third parties where:
        </p>
        <ul>
          <li>you have consented to us doing so (where necessary) or the organisation that you work for has obtained your consent for us to do so (where necessary);</li>
          <li>we are under a legal, regulatory or professional obligation to do so (for example, to comply with anti-money laundering or sanctions requirements or in relation to our employment obligations);</li>
          <li>it is necessary for the purpose of, or in connection with, legal proceedings or in order to exercise or defend legal rights;</li>
          <li>it is in our or a third party’s legitimate interest to share the information, and that legitimate interest is not overridden by your rights or freedoms; or</li>
          <li>it is appropriate to disclose the information to parties with whom we have promotional arrangements (such as jointly hosted events).</li>
        </ul>
        <p>
          If you would like more detailed information about the legal bases upon which we rely to process your personal information, please contact <a href="mailto:info@pcg.com">info@pcg.com</a>
        </p>

        <h2>6. Security</h2>
        <p>
          We use up to date data storage and security to hold your personal information securely in electronic and physical form to protect your personal information from unauthorised access, improper use or disclosure, unauthorised modification or unlawful destruction or accidental loss.
        </p>
        <p>
          All our partners, staff and third party service providers who have access to confidential information (including personal information) are subject to confidentiality obligations.
        </p>
        <p>
          However, the transmission of information via the internet is not completely secure. Although we take appropriate and proportionate steps to manage the risks posed, we cannot guarantee the security of your information transmitted to our online services.
        </p>

        <h2>7. Third Party Sites</h2>
        <p>
          Our website contains links to other sites which are controlled by third parties, for example in the Community and Environment section. We also use social media sites, such as LinkedIn, Facebook and Twitter and third party platforms to host events, training and seminars. You should review these other sites’ privacy policies. We do not accept any responsibility for the information you provide on those sites or their collection and use of your personal information.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          You have certain rights that you can exercise under certain circumstances in relation to the personal information that we hold. These rights are to:
        </p>
        <ul>
          <li>request access to your personal information (known as a subject access request) and request certain information in relation to its processing;</li>
          <li>request rectification of your personal information;</li>
          <li>request the erasure of your personal information;</li>
          <li>request that we restrict the processing of your personal information; and</li>
          <li>object to the processing of your personal information.</li>
        </ul>
        <p>
          In the limited circumstances where you may have provided your consent to the collection, processing and transfer of your personal information for a specific purpose, you have the right to withdraw your consent for that specific processing at any time. Once the firm has received notification that you have withdrawn your consent, we will no longer process your information for the purpose or purposes you originally agreed to, unless we have another legitimate basis for doing so in law.
        </p>


      </section>
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Info(Component)	-->
<!--------------------------------------------------------------------------->*/

