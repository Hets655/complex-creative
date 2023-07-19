import React from "react";

class FooterClass extends React.Component {
  render() {
    return <i>{this.props.name}</i>;
  }
}

const links = {
  Privacy: "Privacy Policy",
  terms: "Terms",
  PrivacyLink: "https://opensource.fb.com/legal/privacy/",
  termsLink: "https://opensource.fb.com/legal/terms/"
};

const element = <FooterClass name="Hetal" />;

function Footer() {
  return (
    <div className="bg-gray-800 p-6">
      <h5 className="py-3 text-center text-white">
        Copyright © {new Date().getFullYear()} {element} - WordPress & React
        Development, App Development & Digital Marketing Agency
      </h5>
      <div className="absolute inset-y-0 justify-center right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="{links.PrivacyLink}" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2">{links.Privacy}</a>
            <a href="{links.termsLink}" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2">{links.terms}</a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
