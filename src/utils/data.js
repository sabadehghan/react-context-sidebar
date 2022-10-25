import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaWpforms,
} from "react-icons/fa";
export const links = {
  home: {
    id: 1,
    url: "/",
    icon: <FaHome />,
  },
  team: {
    id: 2,
    url: "/team",
    icon: <FaUserFriends />,
  },
  projects: {
    id: 3,
    url: "/projects",
    icon: <FaFolderOpen />,
  },
  documents: {
    id: 5,
    url: "/documents",
    icon: <FaWpforms />,
  },
};

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.sketch.com",
    icon: <FaSketch />,
  },
];
