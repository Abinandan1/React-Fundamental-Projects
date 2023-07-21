import { useGlobalContext } from "./context";
import { sublinks } from "./data";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            onMouseEnter={() => {
              setPageId(pageId);
            }}
            className="nav-link"
            key={pageId}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
