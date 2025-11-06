import React from 'react';

/**
 * PageLayout component acts as a wrapper for all main page content.
 * It applies the 'content-wrapper' class, which is styled globally
 * (in global-layout.css) to provide the necessary top padding to push
 * content below the fixed Navbar.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped.
 * @param {string} props.pageTitle - The title of the current page.
 * @returns {JSX.Element} The wrapped page content.
 */
const PageLayout = ({ children, pageTitle = "" }) => {
  // We can use the title here if needed for accessibility or display,
  // but the main job is to apply the class.
  return (
    <div className="content-wrapper" aria-label={`Content for ${pageTitle}`}>
      {children}
    </div>
  );
};

export default PageLayout;