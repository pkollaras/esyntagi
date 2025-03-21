
import { FacebookIcon, LinkedinIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  // Menu items based on page sections
  const footerMenu = [
  // Removed "Αρχική" item
  {
    label: 'Χαρακτηριστικά',
    link: '#features'
  }, {
    label: 'Cloud ERP',
    link: '#cloud'
  }, {
    label: 'Τιμολόγηση',
    link: '#invoicing'
  }, {
    label: 'Οφέλη',
    link: '#benefits'
  }, {
    label: 'Επικοινωνία',
    link: '#cta'
  }];

  // Custom TikTok icon since it's not available in lucide-react
  const TikTokIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M10.7 3.3C10.4 3 10.2 2.6 10.1 2.2C10 1.7 10 1.2 10 0.8H7.6V10.7C7.6 11 7.5 11.3 7.4 11.6C7.3 11.8 7.1 12 6.9 12.2C6.7 12.4 6.5 12.5 6.2 12.6C6 12.7 5.7 12.7 5.4 12.7C4.9 12.7 4.3 12.5 3.9 12.1C3.5 11.7 3.3 11.2 3.3 10.7C3.3 10.2 3.5 9.7 3.9 9.3C4.3 8.9 4.9 8.7 5.4 8.7C5.6 8.7 5.7 8.7 5.9 8.8V6.3C5.7 6.3 5.6 6.3 5.4 6.3C4.6 6.3 3.8 6.5 3.1 6.9C2.4 7.3 1.9 7.9 1.5 8.6C1.2 9.3 1 10.1 1 10.9C1 11.7 1.2 12.5 1.5 13.2C1.9 13.9 2.4 14.5 3.1 14.9C3.8 15.3 4.6 15.5 5.4 15.5C6.2 15.5 7 15.3 7.7 14.9C8.4 14.5 8.9 13.9 9.3 13.2C9.7 12.5 9.9 11.7 9.9 10.9V6.8C10.3 7.1 10.7 7.3 11.1 7.5C11.6 7.7 12.1 7.8 12.7 7.8V5.4C12.4 5.4 12.1 5.3 11.8 5.2C11.5 5 11.2 4.8 11 4.6C10.8 4.3 10.7 3.8 10.7 3.3Z" fill="currentColor" />
    </svg>;

  return <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          {/* Company info */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <img alt="Eprescription Logo" className="h-20 w-auto bg-transparent cursor-pointer" 
                   onClick={() => navigate('/')} 
                   src="/lovable-uploads/1fb19abe-7979-4ca0-93ed-7b9ff493abe0.png" />
            </div>
            <p className="text-gray-600 mb-4 max-w-xl">Το esyntagi.gr αποτελεί μια ολοκληρωμένη και εύχρηστη πλατφόρμα για την εκτέλεση συνταγών, προσφέροντας στους φαρμακοποιούς έναν αποτελεσματικό τρόπο διαχείρισης της διαδικασίας επιπλέον παρέχει την δυνατότητα εκδώσεις παραστατικών B2C, B2B και B2G μέσω παρόχου. Παρέχει άμεση πρόσβαση σε πληροφορίες για φάρμακα των κατηγοριών ΣΥΦΑ, ΜΗΣΥΦΑ και Παραφάρμακα, διευκολύνοντας την καθημερινή σας εργασία.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/advisablecom/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-essyntagi-600 transition" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/9413222/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-essyntagi-600 transition" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@advisable.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-essyntagi-600 transition" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>
          
          {/* Empty div with 2 columns */}
          <div className="md:col-span-2"></div>
          
          {/* Footer menu */}
          <div className="md:col-span-3 pl-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Πλοήγηση</h3>
            <nav>
              <ul className="flex flex-col space-y-3">
                {footerMenu.map((item, index) => (
                  <li key={index}>
                    <a 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.link.replace('#', ''));
                      }}
                      href={item.link} 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Legal Menu */}
          <div className="md:col-span-3 pl-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Νομικά</h3>
            <nav>
              <ul className="flex flex-col space-y-3">
                <li>
                  <a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Advisable.com
            </p>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
