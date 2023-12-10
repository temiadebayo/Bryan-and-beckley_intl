import {
    EmojiHappyIcon,
    ChartSquareBarIcon,
    CursorClickIcon,
    DeviceMobileIcon,
    AdjustmentsIcon,
    SunIcon,
  } from "@heroicons/react/outline";
import benefitOneImg from '../public/images/valueprop.png';
import benefitTwoImg from '../public/images/benefit-two.webp';

  const benefitOne = {
    title: "Value Proposition",
    desc: "Bryan & Beckley International is a multinational IT Infrastructure and Digital Solutions provider across Africa. With a multinational presence, we excel in unified communications, data center, and security solutions, offering top-notch technical support and exceeding corporate client expectations. Trust us to be your IT partner for African success.",
    image: benefitOneImg,
    bullets: [
      {
        title: "Understand your customers",
        desc: "Then explain the first point breifly in one or two lines.",
        icon: <EmojiHappyIcon />,
      },
      {
        title: "Improve acquisition",
        desc: "Here you can add the next benefit point.",
        icon: <ChartSquareBarIcon />,
      },
      {
        title: "Drive customer retention",
        desc: "This will be your last bullet point in this section.",
        icon: <CursorClickIcon />,
      },
    ],
  };

  const benefitTwo = {
    title: "Offer more benefits here",
    desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Mobile Responsive Template",
        desc: "Nextly is designed as a mobile first responsive template.",
        icon: <DeviceMobileIcon />,
      },
      {
        title: "Powered by Next.js & TailwindCSS",
        desc: "This template is powered by latest technologies and tools.",
        icon: <AdjustmentsIcon />,
      },
      {
        title: "Dark & Light Mode",
        desc: "Nextly comes with a zero-config light & dark mode. ",
        icon: <SunIcon />,
      },
    ],
  };

  export { benefitOne, benefitTwo };