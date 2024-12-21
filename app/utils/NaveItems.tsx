import Link from "next/link";

// Navigation data for rendering menu items with names and URLs
export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
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
      <div className="hidden 800px:flex gap-4">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? " rounded-md bg-[#6126d7] text-white" // Highlight active item
                    : " text-[#9764ff] hover:text-[#bc97ff]"
                }
                              text-[18px] px-3 font-Poppins font-[400] py-1 pb-2.5`}
              >
                {i.name}
              </span>
            </Link>
          ))}
      </div>

      {/* Mobile navigation */}
      {isMobile && (
        <div className="800px:hidden p-10">
          <div className="text-center mb-5">
            <Link
              href={"/"}
              className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
            >
              AJUS-ELearning
            </Link>
          </div>{" "}
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
      )}
    </>
  );
};

export default NaveItems;
