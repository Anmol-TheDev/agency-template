import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";

const services = [
  {
    title: "Vulcanizing Machines",
    features: [
      "Portable & Lightweight",
      "High Strength Aluminium Alloy",
      "Modular Design",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96zm0 32c-70.7 0-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128zm0 192c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM128 320c0-53 43-96 96-96c14.1 0 27.5 3.1 39.6 8.6C249 222 224 192 224 192c-53 0-96 43-96 96s43 96 96 96c0 0 25-30 39.6-42.6C131.1 347.5 128 334.1 128 320z"/></svg>`,
  },
  {
    title: "Conveyor Belts",
    features: [
      "High Adhesion Levels",
      "Outstanding Impact Resistance",
      "Superior Flexibility",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-3.2 8.7-11.4 14.6-20.8 14.6h-86.1c-3.4 10.2-7.8 20-13.2 29.2l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-3.2 8.7-11.4 14.6-20.8 14.6H315.2c-11.1 9.3-23.4 17.3-36.8 23.6l-17.3 78.8c-2.1 9.6-10.2 16.6-20.2 16.6s-18.1-7-20.2-16.6l-17.3-78.8c-13.4-6.3-25.7-14.3-36.8-23.6H79.2c-9.4 0-17.6-5.9-20.8-14.6c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-5.4-9.2-9.8-19-13.2-29.2H16.8c-9.4 0-17.6-5.9-20.8-14.6c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.3-1.7-16.8-1.7-25.4s.6-17.1 1.7-25.4L2.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6C-.8 158.1 7.4 152.2 16.8 152.2h86.1c3.4-10.2 7.8-20 13.2-29.2L72.8 83.6c-6.9-6.2-9.6-15.9-6.4-24.6c3.2-8.7 11.4-14.6 20.8-14.6h88.7c11.1-9.3 23.4-17.3 36.8-23.6l17.3-78.8c2.1-9.6 10.2-16.6 20.2-16.6s18.1 7 20.2 16.6l17.3 78.8c13.4 6.3 25.7 14.3 36.8 23.6h88.7c9.4 0 17.6 5.9 20.8 14.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c5.4 9.2 9.8 19 13.2 29.2h86.1c9.4 0 17.6 5.9 20.8 14.6zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>`,
  },
  {
    title: "Rollers & Idlers",
    features: [
      "Carrying, Impact, and Return Rollers",
      "Maintenance Free Options",
      "Galvanized and Self-Aligning Idlers",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM128 288V224h256v64H128zm0-128v-32c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v32H128zm256 192H128v-32h256v32z"/></svg>`,
  },
  {
    title: "Pulley Lagging",
    features: [
      "Prevents Belt Slippage",
      "High Friction Coefficient",
      "Reduces Wear",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M440.7 83.6c-16.5-16.5-38.4-25.6-61.7-25.6s-45.2 9.1-61.7 25.6L256 144.7 194.7 83.6C178.2 67.1 156.3 58 133 58s-45.2 9.1-61.7 25.6C54.8 100.1 45.8 122 45.8 145.3s9.1 45.2 25.6 61.7l176 176c16.5 16.5 43.2 16.5 59.7 0l176-176c16.5-16.5 25.6-38.4 25.6-61.7s-9.1-45.2-25.6-61.7zM133 384c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm246.1 0c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/></svg>`,
  },
  {
    title: "Hydraulic Components",
    features: [
      "Cross Beams",
      "Electronic Control Units",
      "Manual Pumps & Hoses",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M192 0C192 0 32 96 32 224c0 70.7 57.3 128 128 128s128-57.3 128-128C288 96 192 0 192 0zm0 320c-44.2 0-80-35.8-80-80c0-48.5 32.2-89.3 72-101.4V128c0-4.4 3.6-8 8-8s8 3.6 8 8v10.6c39.8 12.1 72 52.9 72 101.4c0 44.2-35.8 80-80 80z"/></svg>`,
  },
  {
    title: "Other Products",
    features: [
      "Hot & Cold Vulcanizing Solutions",
      "Lagging Sheets",
      "Frog Clamps",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0-16h416c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H48c-35.3 0-64-28.7-64-64V80c0-35.3 28.7-64 64-64zM176 176c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H176zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H176z"/></svg>`,
  },
];

const solutions = [
  {
    title: "Equipment Downtime",
    painPoint: "Your operations are halted by unexpected equipment failures, causing costly downtime.",
    agitatepainPoint: "Every minute of downtime means lost productivity and revenue. You can't afford to have unreliable machinery.",
    solution: "Our durable and reliable equipment is built to last, minimizing downtime and keeping your operations running smoothly. Our portable vulcanizing machines allow for quick on-site repairs.",
    img: visibilityDilemma,
  },
  {
    title: "Inefficient Material Handling",
    painPoint: "Your current material handling system is slow and inefficient, creating bottlenecks in your production line.",
    agitatepainPoint: "Inefficiency in material handling leads to delays, increased operational costs, and reduced output.",
    solution: "Our conveyor belts, rollers, and idlers are designed for optimal performance, ensuring smooth and efficient material flow throughout your facility.",
    img: engagementGap,
  },
  {
    title: "Belt Slippage and Wear",
    painPoint: "Conveyor belt slippage and premature wear are causing frequent maintenance issues and safety concerns.",
    agitatepainPoint: "Constant belt problems not only disrupt your workflow but also pose a safety risk to your employees.",
    solution: "Our high-quality pulley lagging provides excellent grip and reduces wear, extending the life of your conveyor belts and ensuring safe operation.",
    img: resultsInHibernation,
  },
];

const faqs = [
  {
    question: "What is vulcanizing?",
    answer: "Vulcanizing is a chemical process for converting natural rubber or related polymers into more durable materials by heating them with sulfur or other equivalent curatives or accelerators.",
  },
  {
    question: "What types of conveyor belts do you offer?",
    answer: "We offer a wide range of conveyor belts, including fabric and steel cord belts, with various specifications for ply, thickness, and carcass type to suit different industrial applications.",
  },
  {
    question: "What are the advantages of your pulley lagging?",
    answer: "Our pulley lagging prevents belt slippage, reduces wear on the belt and pulley, and improves water shedding. This leads to increased belt life, reduced maintenance, and improved safety.",
  },
  {
    question: "Are your vulcanizing machines portable?",
    answer: "Yes, our TSC Portable Hydraulic Operated Vulcanizing Machines are made of lightweight, high-strength aluminum alloy for easy transportation and quick assembly.",
  },
  {
    question: "What information do you need to provide a quote?",
    answer: "To provide an accurate quote, we need details such as belt width, belt type (fabric/steel cord), belt rating, and number of plies.",
  },
];

export { services, solutions, faqs };