import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import { UserButton } from "@clerk/clerk-react";

export default function Header() {

    return (
        <header className="h-28 md:h-24 flex items-center justify-center md:justify-between flex-col md:flex-row">

            <Link to="../"> <img width="120" height="120" src={logo} alt="GatorChefs Logo"/></Link>

            <section>
                <UserButton></UserButton>
            </section>
            
            
        </header>
    );
  }