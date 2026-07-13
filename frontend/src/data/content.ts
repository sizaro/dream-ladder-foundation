import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Shield,
  Users,
} from "lucide-react";

export const contactInfo = {
  email: "info@dreamladderfoundation.org",
  phone: "+256 XXX XXX XXX",
  location: "Kampala, Uganda",
  hours: "Mon – Fri, 9:00 AM – 5:00 PM EAT",
};

export const impactStats = [
  { value: "1,500+", label: "Children Supported" },
  { value: "10,000+", label: "Books & Supplies Distributed" },
  { value: "8+", label: "Partner Schools" },
  { value: "4", label: "Communities Reached" },
];

export const coreValues: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    description: "We meet every child and family with empathy, dignity, and respect.",
  },
  {
    icon: BookOpen,
    title: "Access",
    description: "We remove barriers so learning materials and mentorship reach those who need them most.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We work alongside schools, parents, and local leaders to create lasting change.",
  },
  {
    icon: Lightbulb,
    title: "Opportunity",
    description: "We believe education unlocks potential and opens doors to a brighter future.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We steward every resource transparently and accountably for maximum impact.",
  },
  {
    icon: GraduationCap,
    title: "Excellence",
    description: "We pursue quality in every program, partnership, and learning experience we deliver.",
  },
];

export const programs = [
  {
    id: "book-distribution",
    icon: BookOpen,
    title: "Book & School Supply Distribution",
    shortDescription:
      "We provide essential learning materials such as books, pens, and school kits to children who lack access to basic educational resources.",
    fullDescription:
      "Our flagship distribution program ensures that no child starts the school term without the tools they need to learn. We partner with schools to identify students in need, then deliver curated supply kits containing textbooks, notebooks, pens, pencils, and other essentials.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Termly supply kits for primary and secondary students",
      "Textbook lending libraries at partner schools",
      "Emergency supply support for newly enrolled children",
      "Coordination with head teachers for fair distribution",
    ],
    impact: "300+ children reached per distribution cycle",
  },
  {
    id: "mentorship",
    icon: GraduationCap,
    title: "Education & Mentorship Support",
    shortDescription:
      "We work closely with teachers and volunteers to provide mentorship and academic support that helps children stay in school and succeed.",
    fullDescription:
      "Beyond materials, children need guidance and encouragement. Our mentorship program connects trained volunteers with students for weekly sessions focused on academic support, career awareness, and personal development.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    features: [
      "One-on-one and small-group mentoring sessions",
      "After-school homework and study support",
      "Career guidance workshops for older students",
      "Teacher training and classroom resource support",
    ],
    impact: "120+ students enrolled in active mentorship",
  },
  {
    id: "community-outreach",
    icon: HeartHandshake,
    title: "Community Outreach Programs",
    shortDescription:
      "We engage with communities to identify children in need and ensure support reaches the most vulnerable households.",
    fullDescription:
      "Sustainable impact starts at the community level. We organize outreach events, parent engagement sessions, and needs assessments to understand local challenges and tailor our support accordingly.",
    image:
      "https://images.unsplash.com/photo-1603575448360-153f093fd0ab?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Community needs assessments and household visits",
      "Parent education on schooling and child welfare",
      "Referral pathways for additional social support",
      "Volunteer mobilization and local partnership building",
    ],
    impact: "4 communities actively engaged",
  },
];

export type GalleryCategory = "All" | "Outreach" | "Schools" | "Distribution" | "Community";

export const galleryItems: {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  date: string;
}[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    alt: "Volunteers distributing school materials",
    title: "Volunteer Distribution Day",
    category: "Distribution",
    date: "June 2026",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    alt: "Children receiving books and supplies",
    title: "School Supply Handover",
    category: "Distribution",
    date: "June 2026",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    alt: "Teacher guiding students in classroom",
    title: "Classroom Mentorship Session",
    category: "Schools",
    date: "May 2026",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1603575448360-153f093fd0ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Community outreach meeting",
    title: "Community Planning Meeting",
    category: "Community",
    date: "May 2026",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Children learning together in classroom",
    title: "Group Learning Activity",
    category: "Schools",
    date: "April 2026",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    alt: "Group learning activity with children",
    title: "Reading Circle",
    category: "Schools",
    date: "April 2026",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    alt: "Children in classroom setting",
    title: "Partner School Visit",
    category: "Outreach",
    date: "March 2026",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    alt: "Stack of books for distribution",
    title: "Book Sorting & Preparation",
    category: "Distribution",
    date: "March 2026",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    alt: "Community gathering outdoors",
    title: "Community Engagement Day",
    category: "Community",
    date: "February 2026",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Outreach",
  "Schools",
  "Distribution",
  "Community",
];

export const newsItems = [
  {
    id: "n1",
    slug: "school-supply-distribution-drive",
    title: "School Supply Distribution Drive Reaches 300 Children",
    excerpt:
      "We reached over 300 children with books, pens, and essential learning materials across three partner schools in Kampala and surrounding districts.",
    content:
      "Our latest distribution drive brought together volunteers, teachers, and community leaders to deliver termly supply kits to students who would otherwise start the semester without basic materials. Each kit included textbooks, notebooks, pens, pencils, and a geometry set.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    date: "June 15, 2026",
    category: "Programs",
    featured: true,
  },
  {
    id: "n2",
    slug: "mentorship-program-launch",
    title: "Mentorship Program Launch Connects 120 Students",
    excerpt:
      "We launched a mentorship initiative connecting volunteers with students to improve academic performance and motivation.",
    content:
      "The new mentorship program pairs trained volunteers with students for weekly sessions covering homework support, study skills, and career awareness. Early feedback from partner schools shows improved attendance and classroom participation.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    date: "May 22, 2026",
    category: "Programs",
    featured: false,
  },
  {
    id: "n3",
    slug: "community-outreach-expansion",
    title: "Community Outreach Expands to Two New Areas",
    excerpt:
      "We expanded our outreach to two new communities, identifying children in need of educational support.",
    content:
      "Following community needs assessments, Dream Ladder Foundation extended its outreach to two underserved areas. Local leaders helped identify households where children lacked school materials, enabling targeted support.",
    image:
      "https://images.unsplash.com/photo-1603575448360-153f093fd0ab?auto=format&fit=crop&w=1200&q=80",
    date: "April 10, 2026",
    category: "Outreach",
    featured: false,
  },
  {
    id: "n4",
    slug: "volunteer-recruitment-drive",
    title: "Volunteer Recruitment Drive Welcomes 25 New Helpers",
    excerpt:
      "A successful recruitment campaign brought 25 new volunteers into our programs, strengthening our capacity to serve more children.",
    content:
      "Volunteers underwent orientation on child safeguarding, program goals, and field protocols. They will support distribution events, mentorship sessions, and community outreach over the coming months.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    date: "March 28, 2026",
    category: "Community",
    featured: false,
  },
  {
    id: "n5",
    slug: "reading-library-established",
    title: "Reading Library Established at Partner School",
    excerpt:
      "A new reading corner with 500 donated books gives students access to stories and reference materials beyond the standard curriculum.",
    content:
      "The library was set up in collaboration with school administration and will be managed by teachers with support from our team. Students can borrow books during break times and after school.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    date: "February 14, 2026",
    category: "Programs",
    featured: false,
  },
  {
    id: "n6",
    slug: "annual-impact-report",
    title: "2025 Impact Report: A Year of Growth",
    excerpt:
      "Our annual report highlights milestones from the past year — from new school partnerships to thousands of supplies distributed.",
    content:
      "The report documents our reach across four communities, eight partner schools, and over 1,500 children supported. It also outlines goals for expanding mentorship and outreach in the year ahead.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    date: "January 8, 2026",
    category: "Updates",
    featured: false,
  },
];

export const testimonials = [
  {
    quote:
      "Before Dream Ladder Foundation supported our school, many children lacked basic learning materials. Now attendance and participation have improved significantly.",
    name: "School Teacher",
    role: "Partner School",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "My child received books and school supplies that we could not afford. This support has changed our family's outlook on education.",
    name: "Parent",
    role: "Community Member",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The mentorship program helped me stay in school and believe in my future again. I now want to become a teacher myself.",
    name: "Student Beneficiary",
    role: "Program Participant",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
];

export const donationTiers = [
  { amount: 10, impact: "Provides pens and notebooks for one child" },
  { amount: 25, impact: "Covers a full term supply kit for one student" },
  { amount: 50, impact: "Supports mentorship sessions for five students" },
  { amount: 100, impact: "Funds books for an entire classroom" },
  { amount: 250, impact: "Sponsors a school's termly distribution" },
];

export const faqItems = [
  {
    question: "How can I volunteer with Dream Ladder Foundation?",
    answer:
      "Reach out through our contact form or email us directly. We welcome volunteers for distribution events, mentorship, and community outreach. All volunteers complete an orientation before participating in field activities.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Donations directly fund school supplies, books, mentorship programs, and community outreach. We prioritize transparency and ensure resources reach children through verified partner schools and community channels.",
  },
  {
    question: "Can my organization partner with you?",
    answer:
      "Yes. We welcome partnerships with schools, businesses, and community organizations. Contact us to discuss corporate sponsorship, in-kind donations, or program collaboration.",
  },
  {
    question: "Which areas do you currently serve?",
    answer:
      "We currently operate across four communities in and around Kampala, Uganda, working with eight partner schools. We are actively exploring expansion to additional districts.",
  },
];
