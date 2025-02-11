import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-darkBlue text-white py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">BrandName</h1>
        <ul className="hidden md:flex space-x-6">
          <Link href="#product" className="hover:text-lightBlue">Product</Link>
          <Link  href="#pricing" className="hover:text-lightBlue">Pricing</Link>
          <Link  href="#contact" className="hover:text-lightBlue">Contact</Link>
        </ul>
        <div className="hidden md:flex space-x-4">
          <button className="text-lightBlue">Login</button>
          <button className="bg-lightBlue text-white px-4 py-2 rounded">Join Us</button>
        </div>
        <div className="md:hidden">
          <button className="text-lightBlue"></button>
          <ul  className="md:hidden">
            <Link  href="#product" className="hover:text-lightBlue">Product</Link>
            <Link  href="#pricing" className="hover:text-lightBlue">Pricing</Link>
            <Link  href="#contact" className="hover:text-lightBlue">Contact</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
