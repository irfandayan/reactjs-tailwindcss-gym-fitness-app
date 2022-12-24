import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const EvoAnchorLink = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      <p>{children}</p>
    </AnchorLink>
  );
};

export default EvoAnchorLink;
