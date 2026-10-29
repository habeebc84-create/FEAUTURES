/*
 * Free template libraries, checked 29 October 2026.
 * Nothing here is copied: no template design, code, image or branding
 * from any of these libraries appears on this site. Each entry links
 * out to the source, where the file's own licence or terms govern reuse.
 * The Figma listing page showed no licence wording, so every Figma file
 * must be checked on its own page before reuse.
 */

export type TemplateSource = {
  name: string;
  url: string;
  headline: string;
  freeStatus: string;
  facts: string[];
  categories: string[];
  howTo: string[];
  warning: string;
};

export const TEMPLATE_SOURCES: TemplateSource[] = [
  {
    name: 'Figma Community — website templates',
    url: 'https://www.figma.com/community/website-templates?resource_type=files',
    headline: '10,000+ free website templates and themes to customise, sorted by Popular, 21 pages.',
    freeStatus: 'Free and paid, with a Price filter (All / Paid / Free). The first 15 files on the Popular sort were all marked Free.',
    facts: [
      'On-page heading: “Website templates and desktop apps”. Files are labelled “For Figma” or, for one entry, “For Figma Sites”.',
      'Includes filter: Code, Motion, Draw, Prototypes, Shader Effects, Shader Fills — use it to find files with motion or code included.',
      'Most-duplicated free files seen: Positivus Landing Page Design (Olga, 187k users), Minimal Landing Page Design (Muntasir Billah, 220k), DashStack admin dashboard UI kit (Seju, 212k), E-commerce Website Template (Hamza Naeem, 162k), BankDash dashboard UI kit (Seju, 150k), Whitepace SaaS landing page (Al Razi Siam, 125k).',
      'Also in the first 15: a SaaS landing UI kit (Brainwave.io, Seju), MNTN landing page (Kryston Schwarze), Sales Dashboard (Design with Will), an Awwwards top-16 collection, and a scrollbar component.',
      'No licence or terms wording was shown on the listing page itself. The file’s own page and Figma’s Community guidelines / Terms of Service govern reuse — check before using any file.',
    ],
    categories: ['Landing page', 'Portfolio', 'Ecommerce', 'SaaS', 'Dashboards', 'Blog', 'Restaurant', 'Real estate', 'Travel', 'Fashion', 'E-learning', 'Wedding', 'Marketplace', 'Business', 'Personal website', 'Photography', 'Interior design', 'Event', 'Login', 'Sign up', 'Navbar', 'Sidebar', 'User profile', 'Chatbot', 'CRM', 'CMS', 'Menu', 'Simple', 'About Us'],
    howTo: [
      'Open figma.com, sign in, and open the template file you want.',
      'Duplicate it into your drafts — that gives you your own editable copy.',
      'Replace the content with your own words, swap the images, update colours and typography to your brand, and reorganise sections.',
      'Use it as the design for a build, or as the handoff file a developer builds from. Do not ship another creator’s branding, copy or images as your own.',
    ],
    warning: 'A file being marked Free does not mean its licence allows every use. Read the file page before reusing, and credit the creator where the file asks for it.',
  },
  {
    name: 'Webflow templates',
    url: 'https://webflow.com/templates',
    headline: '7,000+ free and premium HTML website templates, built by Webflow’s community of creators.',
    freeStatus: 'Both free and paid. Free templates are a way to start without upfront cost; paid templates add more pages, CMS structures, ecommerce and polished interactions. A separate free-templates page exists, but its listing did not load in a text read, so no individual template names are claimed here.',
    facts: [
      'Every template is customisable in the visual Designer without code: colours, typography, images, layouts, page structure, navigation, sections and pages.',
      'Free templates are fully responsive, with breakpoints you can fine-tune, and include core features, basic CMS capabilities and essential interactions.',
      'Custom HTML, CSS and JavaScript can be added to a free template, and Webflow Apps can be integrated.',
      'A free Starter workspace lets you explore, build and customise before paying anything. A paid Site Plan is needed for a custom domain, higher CMS limits, ecommerce or more form submissions. A paid template is a separate one-time purchase, independent of the hosting plan.',
      'Template structures: One Page (single scrolling page — landing pages, portfolios, events), Multi Page (home, about, services, blog, contact), Multi Layout (several page variations in one build).',
    ],
    categories: ['Portfolios', 'Agencies', 'Online stores', 'Blogs', 'SaaS companies', 'Landing pages', 'Event sites', 'Product experiences'],
    howTo: [
      'Open webflow.com/templates, filter to free, and pick the structure that fits: One Page, Multi Page or Multi Layout.',
      'Create the template in a free Starter workspace and customise it in the Designer: your content, colours, type and images.',
      'Test every breakpoint, then connect a custom domain with a paid Site Plan only when you are ready to publish.',
      'Use Webflow templates inside Webflow. Do not lift a template’s design into another builder and present it as your own original design.',
    ],
    warning: 'Templates live in Webflow’s Designer and its terms. What is free to build with is not automatically free to copy elsewhere.',
  },
  {
    name: 'Jitter templates',
    url: 'https://jitter.video/templates/',
    headline: 'Free motion graphics templates, editable in the browser.',
    freeStatus: 'Free to use and edit in Jitter. Templates may be used for commercial purposes. The Max plan adds more export formats and higher resolutions.',
    facts: [
      'Use cases named by Jitter: text overlays for videos, animated logos, eye-catching transitions, animated designs for team presentations and design portfolios, motion graphics on websites to showcase a product, and social media animation.',
      'Editing is in Jitter itself: click a template to start editing, replace media or text, change the colour scheme, add or remove animations, then export in the format that fits.',
      'No extensive technical skills are needed; Jitter’s help centre has Design and Animate sections for first-time creators.',
      'Individual template names were not listed in the text read of the page, so none are claimed here — browse the gallery and open the one that fits.',
    ],
    categories: ['Text overlays', 'Animated logos', 'Transitions', 'Presentations', 'Design portfolios', 'Website motion', 'Social media'],
    howTo: [
      'Open jitter.video/templates and click the template you want — editing starts in Jitter, free.',
      'Replace the media and text with your own, set your colours, and add or remove animations.',
      'Export in the format your project needs. For more formats and higher resolutions, check the Max plan before you start.',
      'Use the exported motion on your site, video or social post. Keep the template’s own stock media out if you do not have rights to it — use your own assets.',
    ],
    warning: 'Commercial use is allowed by Jitter, but that covers the template, not necessarily third-party media inside it. Use your own media.',
  },
];

export const HOW_TO_USE: { step: string; title: string; body: string }[] = [
  {
    step: '1',
    title: 'Pick a style, not a colour',
    body: 'Start in the Styles section. Choose one Tilda style (Minimalism, Swiss, Brutalism, Editorial, Bento…) and check it against the Refero structure and the UI/UX Pro Max palettes. One distinctive style per project. Write down the style, the palette and the font pairing before you open any tool.',
  },
  {
    step: '2',
    title: 'Pick a layout from the wireframes',
    body: 'Choose one of the 12 layout wireframes on this page — hero, bento, split, dashboard, pricing, video-first, docs, article list and the rest. The wireframe is the page order. Everything you add later must fit that order; if it does not fit, change the layout, not the content.',
  },
  {
    step: '3',
    title: 'Pick a free starting point',
    body: 'Figma Community for a design file you duplicate and restyle; Webflow for a no-code build you customise in the Designer; Jitter for the motion pieces (logo animation, transitions, overlays). Use the Free Templates section links. Check each file’s own licence or terms page before reuse — Free on a listing is not a licence.',
  },
  {
    step: '4',
    title: 'Add one motion library, then one more only if needed',
    body: 'Motion for React animation, GSAP for timelines and scroll-scrub, Lenis for smooth scroll, Anime.js for small staggers. Install with npm (npm install motion / gsap / lenis / animejs), import only what you use, and keep every animation off when the user prefers reduced motion. The demos on this page show the exact pattern for each.',
  },
  {
    step: '5',
    title: 'Replace everything with your own content',
    body: 'Your words, your images, your prices, your brand. Templates, styles and libraries are starting points, never the finished site. If a template’s photo, logo or copy is still in the build, it is not finished.',
  },
  {
    step: '6',
    title: 'Check before you call it done',
    body: 'Build clean, no broken images, no overlap at phone width, keyboard navigation works, contrast passes, reduced motion respected, and the page still feels fast. Push to GitHub, let the host deploy, and check the live link — a local preview is not proof.',
  },
];

export const QUICK_STARTS: { tool: string; install: string; firstUse: string }[] = [
  { tool: 'Motion', install: 'npm install motion', firstUse: 'import { motion } from "motion/react" — animate a heading with whileInView, or a value with useSpring.' },
  { tool: 'GSAP + ScrollTrigger', install: 'npm install gsap', firstUse: 'gsap.registerPlugin(ScrollTrigger), then a timeline with stagger, or a scrub animation tied to scroll. Free under the GreenSock standard licence.' },
  { tool: 'Lenis', install: 'npm install lenis', firstUse: 'new Lenis({ lerp: 0.1 }) with a requestAnimationFrame loop; scrollTo for anchor jumps. Skip it entirely for reduced motion.' },
  { tool: 'Anime.js', install: 'npm install animejs', firstUse: 'animate(targets, { scale, delay: stagger(60) }) for a small stagger. Keep it to one gesture per section.' },
  { tool: 'Tailwind CSS', install: 'Already the styling system of this site', firstUse: 'Utility classes for layout and spacing; one design-token file for colours and type so a style change is one edit.' },
  { tool: 'shadcn/ui', install: 'Copy components, do not install wholesale', firstUse: 'Pick one component, copy it into your project, restyle it to your tokens. MIT, built on Radix + Tailwind.' },
  { tool: 'Figma', install: 'No install — figma.com', firstUse: 'Duplicate a free Community file into your drafts, restyle it, then build or hand it off from your copy.' },
  { tool: 'Webflow', install: 'No install — webflow.com', firstUse: 'Create a free template in a Starter workspace, customise in the Designer, publish to a custom domain only with a Site Plan.' },
  { tool: 'Jitter', install: 'No install — jitter.video', firstUse: 'Open a free template, swap in your media and text, set colours, export in the format you need.' },
];
