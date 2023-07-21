import { FaTimes } from "react-icons/fa";
import { sublinks } from "./data";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-container">
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { page, pageId, links } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { url, icon, label, id } = link;
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
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
