import { useGlobalContext } from "./context";
import { sublinks } from "./data";
import { useRef } from "react";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const submenuContainer = useRef(null);
  const handleSubmenu = (e) => {
    const submenu = submenuContainer.current;
    if (!(e.clientY < submenu.getBoundingClientRect().top)) {
      setPageId(null);
    }
  };
  return (
    <article
      ref={submenuContainer}
      onMouseLeave={handleSubmenu}
      className={`submenu ${currentPage ? "show-submenu" : ""}`}
    >
      <h5>{currentPage?.page}</h5>
      <div
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
        className="submenu-links"
      >
        {currentPage?.links.map((item) => {
          const { id, icon, label, url } = item;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </article>
  );
};
export default Submenu;
