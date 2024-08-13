import React from 'react';
import { Footer, PageNavbar as Navbar } from "components";
interface PageLayoutProps {
    children?:any
}
const PageLayout:React.FC<PageLayoutProps> = ({children}) => {
  return (
		<div className="relative">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

export default PageLayout;
