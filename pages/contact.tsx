import { PortfolioContainer } from '../components/portfolio-container';
import { ContactForm } from '../components/portfolio';

export default function Contact() {
  return (
    <PortfolioContainer>
      <div className="relative flex justify-center h-screen top-28 overflow-hidden">
        <ContactForm />
      </div>
    </PortfolioContainer>
  );
}
