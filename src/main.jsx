import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Event from "./components/Event/Event";
import Membership from "./components/Membership/Membership";
import Service from "./components/Service/Service";
import "./index.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import InduvisulBlog from "./components/Blog/InduvisulBlog/InduvisulBlog";
import Home from "./components/Home/Home";
import NonEvents from "./components/NonEvents/NonEvents";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsofUse from "./components/TermsOfUse/TermsofUse";
import CarrierPage from "./components/Contact/CarrierPage/Carrier";
import Ticket from "./components/Ticket/Ticket";
import ChatAi from "./components/common/Chatbot/ChatAi";
import Gallery from "./components/Gallery/Gallery";

import GalleryDemo from "./components/Gallery/GalleryDemo";
import DemoMember from "./components/Membership/DemoMember";
import TicketForm from "./components/Ticket/TicketForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/event",
    element: <Event></Event>,
  },
  {
    path: "/chatAi",
    element: <ChatAi></ChatAi>,
  },
  {
    path: "/NonEvents",
    element: <NonEvents></NonEvents>,
  },

  {
    path: "/contact",
    element: <Contact></Contact>,
  },

  {
    path: "/gallery",
    element: <Gallery></Gallery>,
  },

  {
    path: "/galleryDemo",
    element: <GalleryDemo></GalleryDemo>,
  },

  {
    path: "/demoMember",
    element: <DemoMember></DemoMember>,
  },
  {
    path: "/career",
    element: <CarrierPage></CarrierPage>,
  },
  {
    path: "/membership",
    element: <Membership></Membership>,
  },
  {
    path: "/ticket",
    element: <Ticket></Ticket>,
  },
  {
    path: "/ticketform",
    element: <TicketForm></TicketForm>,
  },
  {
    path: "/service",
    element: <Service></Service>,
  },

  {
    path: "/About",
    element: <About></About>,
  },
  {
    path: "/blogs",
    element: <Blog></Blog>,
  },
  {
    path: "/induvisual-blog",
    element: <InduvisulBlog></InduvisulBlog>,
  },
  {
    path: "/terms-of-use",
    element: <TermsofUse></TermsofUse>,
  },

  {
    path: "/privacy-policy",
    element: <PrivacyPolicy></PrivacyPolicy>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
