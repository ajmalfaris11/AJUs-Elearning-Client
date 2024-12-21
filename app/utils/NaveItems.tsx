import Link from "next/link";

// Navigation data for rendering menu items with names and URLs
export const navItemsData = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "Courses",
      url: "/courses"
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Policy",
      url: "/policy",
    },
    {
      name: "FAQ",
      url: "/faq",
    },
  ];
  
  interface Props {
    activeItem: number; 
    isMobile: boolean;
  }
  
  const NaveItems: React.FC<Props> = ({ activeItem, isMobile }) => {
    return (
      <>
        {/* Desktop navigation */}
        <div className="hidden 800px:flex">
          {navItemsData &&
            navItemsData.map((i, index) => (
              <Link href={`${i.url}`} key={index} passHref>
                <span
                  className={`${
                      activeItem === index
                      ? "dark:text-[#a64cff] text-[#751eb8]" // Highlight active item
                      : "dark:text-white text-black"
                  }
                              text-[18px] px-6 font-Poppins font-[400]`}
                >
                  {i.name}
                </span>
              </Link>
            ))}
        </div>
  
        {/* Mobile navigation */}
        {isMobile && (
          <div className="800px:hidden mt-5">
            <div className="w-full text-center py-6">
              {navItemsData &&
                navItemsData.map((i, index) => (
                  <Link href={`${i.url}`} key={index} passHref>
                    <span
                      className={`${
                        activeItem === index
                          ? "dark:text-[#a64cff] text-[#751eb8]" // Highlight active item
                          : "dark:text-white text-black"
                      }
                          block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                    >
                      {i.name}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default NaveItems;
  