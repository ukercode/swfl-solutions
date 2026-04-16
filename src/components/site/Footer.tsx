import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-prose py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <Link to="/" className="font-serif text-2xl font-semibold">
            SWFL <span className="text-accent">Solutions</span>
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
            Your trusted Owner's Representative for construction, project management, and real estate development across Southwest Florida.
          </p>
          <div className="mt-6 inline-block w-12 h-[2px] bg-accent" />
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-accent">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/services" className="hover:text-accent transition-colors">Owner Representation</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Project Management</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Project Recovery</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Construction Oversight</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Real Estate Development</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-accent">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Free Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <a href="tel:9412495750" className="hover:text-accent transition-colors">941-249-5750</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <a href="mailto:contact.us@swflsolutions.com" className="hover:text-accent transition-colors break-all">
                contact.us@swflsolutions.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>Englewood, FL 34224</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-prose py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Southwest Florida Solutions. All rights reserved.</p>
          <p>Professional · Experienced · Insured · Exclusively on Your Side</p>
        </div>
      </div>
    </footer>
  );
};
