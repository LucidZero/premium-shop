import Navbar from "./Navbar";
import './FrequentlyAskedQuestions.css';
import Footer from './Footer.js'; 

const FrequentlyAskedQuestions = () => {
  return (
    <div className="background-image-faq">
      <div className="faq-page">
            <div className="white-box"></div>
            <Navbar />
            <div className="a-box">
            <div> <h2>Frequently Asked Questions</h2> <ul> <li>How do I place an order? To place an order, simply browse our selection of calligraphy supplies, artwork, and other products. Click on the desired item, select any available options, and add it to your cart. When you're ready, proceed to the checkout page to finalize your purchase.</li> <li>What payment methods do you accept? We accept major credit cards (Visa, Mastercard, American Express) as well as PayPal for secure online payments. Choose the payment method that suits you best during the checkout process.</li> <li>What are your shipping options? We offer various shipping options to accommodate your needs. Standard shipping typically takes [insert estimated time], while expedited shipping is available for faster delivery. Shipping costs and estimated delivery times will be provided at checkout.</li> <li>Do you ship internationally? Yes, we ship internationally to many countries. During the checkout process, you can select your country from the available options. Please note that international shipping may have additional customs fees or duties depending on your location.</li> <li>Can I track my order? Absolutely! Once your order is shipped, we'll provide you with a tracking number via email. You can use this tracking number to monitor the progress of your package and know when it will arrive.</li>

<li>What is your return policy? We want you to be completely satisfied with your purchase. If you receive a damaged or incorrect item, please contact our customer support within [insert number of days] days of receiving the order. For detailed information about our return policy, please refer to our [insert link to return policy page].</li> <li>Do you offer custom calligraphy services? Yes, we offer custom calligraphy services for personalized artwork, invitations, or special projects. Please visit our [insert link to custom calligraphy page] to learn more about our offerings and how to request a custom order.</li> <li>Can I cancel or modify my order? We strive to process orders quickly, but if you need to cancel or modify your order, please reach out to our customer support as soon as possible. We'll do our best to accommodate your request, depending on the status of your order.</li> </ul> <p>If you have any other questions or need further assistance, please don't hesitate to contact our friendly customer support team at [insert contact information]. We're here to help!</p> </div>
            </div>
      </div>
      <Footer />
    </div>
  );
}

export default FrequentlyAskedQuestions;