export type SectionSlug =
  | "discovery"
  | "nursery"
  | "grade-school"
  | "junior-secondary"
  | "senior-secondary";

export interface SectionData {
  slug: SectionSlug;
  name: string;
  tagline: string;
  ageGroup: string;
  logoTier: "junior" | "senior";
  overview: string;
  curriculum: string[];
  typicalDay: { time: string; activity: string }[];
  facilities: string[];
  uniqueTitle: string;
  uniqueBody: string;
  linkTo?: SectionSlug | "alumni";
  heroPhoto?: string;
  tabs?: { label: string; focus: string }[];
}

export const SECTIONS: SectionData[] = [
  {
    slug: "discovery",
    name: "Discovery",
    tagline: "Gentle first steps into a whole new world",
    ageGroup: "2+ years · Playgroup",
    logoTier: "junior",
    overview:
      "Discovery is where a child's very first day away from home feels safe, warm, and full of wonder. In small, home-like classrooms, our caregivers meet every toddler exactly where they are — building trust before we ever ask for a pencil to be held.",
    curriculum: ["Sensory play stations", "Motor-skill activities", "Music & movement", "Guided story time", "Free play & structured play balance"],
    typicalDay: [
      { time: "7:30 am", activity: "Drop-off & settling circle" },
      { time: "8:30 am", activity: "Snack time" },
      { time: "9:00 am", activity: "Sensory circle time" },
      { time: "10:30 am", activity: "Outdoor play" },
      { time: "12:00 pm", activity: "Nap & rest" },
      { time: "2:00 pm", activity: "Pickup window opens" },
    ],
    facilities: ["Soft-play area", "Dedicated nap room", "Low-height furniture throughout", "CCTV-monitored playground"],
    uniqueTitle: "What to Pack & Our Safety Promise",
    uniqueBody:
      "A labeled bag with a change of clothes, a comfort item, and a water bottle is all you need. Every drop-off and pickup is logged against an approved guardian list, and our caregiver-to-child ratio never exceeds 1:8 for this age group.",
  },
  {
    slug: "nursery",
    name: "Nursery",
    tagline: "Guided discovery, ready for big-school days",
    ageGroup: "3–5 years · Nursery 1 · LKG · HKG",
    logoTier: "junior",
    overview:
      "Nursery carries children from their first guided lessons through to primary-readiness. Rather than one flat curriculum, we move learners through three deliberate stages — Nursery 1, Lower Kindergarten, and Higher Kindergarten — each building on the last.",
    curriculum: ["Phonics & early literacy", "Early numeracy", "Fine motor skill development", "Guided homework habits introduced"],
    typicalDay: [
      { time: "7:45 am", activity: "Morning devotion" },
      { time: "8:15 am", activity: "Literacy circle" },
      { time: "9:30 am", activity: "Numeracy stations" },
      { time: "11:00 am", activity: "Outdoor learning garden" },
      { time: "1:00 pm", activity: "Guided homework club" },
    ],
    facilities: ["Reading corner", "Numeracy manipulatives library", "Outdoor learning garden"],
    uniqueTitle: "Three Stages, One Page",
    uniqueBody:
      "Use the tabs below to see how focus shifts from social & cognitive growth in Nursery 1, to literacy and numeracy readiness in LKG, through to primary-preparatory skills in HKG.",
    tabs: [
      { label: "Nursery 1", focus: "Social & cognitive growth, guided homework introduced, sharing and turn-taking." },
      { label: "LKG", focus: "Literacy and numeracy readiness — letter sounds, number recognition, pattern-building." },
      { label: "HKG", focus: "Primary-preparatory skills — sentence writing, addition & subtraction, classroom independence." },
    ],
    heroPhoto: "/images/sections/nursery/nur-hero-frisbee-play.jpg",
  },
  {
    slug: "grade-school",
    name: "Grade School",
    tagline: "Strong foundations, built one grade at a time",
    ageGroup: "6–10 years · Grade 1–5",
    logoTier: "junior",
    overview:
      "Grade School is where academic identity takes shape. Learners move through a full NERDC-aligned curriculum with regular Continuous Assessment, building the discipline and depth they'll carry into Junior Secondary.",
    curriculum: ["English Studies", "Mathematics", "Basic Science", "Social Studies", "Digital Technology", "CRS", "Vocational & Trade Skills"],
    typicalDay: [
      { time: "7:30 am", activity: "Morning devotion & assembly" },
      { time: "8:00 am", activity: "Subject periods (Block 1)" },
      { time: "10:00 am", activity: "Break" },
      { time: "10:30 am", activity: "Subject periods (Block 2)" },
      { time: "1:30 pm", activity: "Homework club" },
    ],
    facilities: ["Grade-level classrooms", "Introductory computer lab sessions", "Library access"],
    uniqueTitle: "From Grade School to Junior Secondary",
    uniqueBody:
      "Grade 5 learners begin a structured transition track in their final term — study-skills coaching and an early look at the Junior Secondary timetable — so the move to JSS1 feels like a next step, not a leap.",
    linkTo: "junior-secondary",
    heroPhoto: "/images/sections/grade-school/gs-classroom-writing.jpg",
  },
  {
    slug: "junior-secondary",
    name: "Junior Secondary",
    tagline: "Discipline, depth, and the road to BECE",
    ageGroup: "11+ years · JSS1–JSS3",
    logoTier: "senior",
    overview:
      "Junior Secondary sharpens focus. Alongside the full NERDC curriculum, learners get hands-on time in our ICT lab and trade-skills workshop, building toward a strong Basic Education Certificate Examination result.",
    curriculum: ["Core NERDC subjects", "Digital Technology / ICT", "Trade & Vocational Skills", "BECE preparation track"],
    typicalDay: [
      { time: "7:30 am", activity: "Morning devotion & assembly" },
      { time: "8:00 am", activity: "Core subject periods" },
      { time: "11:00 am", activity: "Practical session (ICT lab or workshop)" },
      { time: "1:00 pm", activity: "Break" },
      { time: "1:30 pm", activity: "Elective periods" },
      { time: "3:00 pm", activity: "Sports & clubs" },
    ],
    facilities: ["ICT / Computer Lab", "Science laboratories", "Trade-skills workshop", "Sports field"],
    uniqueTitle: "BECE Readiness",
    uniqueBody:
      "A term-by-term readiness timeline keeps every JSS3 learner on pace, with mock exams scheduled ahead of the real thing. Our Exam Officer, Mr. Stephen Farinola, oversees the full BECE process.",
    heroPhoto: "/images/sections/high-school/hs-ict-computer-lab.jpg",
  },
  {
    slug: "senior-secondary",
    name: "Senior Secondary",
    tagline: "Advanced academics, and a clear path forward",
    ageGroup: "Senior · SS1–SS3",
    logoTier: "senior",
    overview:
      "Senior Secondary prepares learners for WAEC, NECO, and life beyond Tamara's Fairview. Science, Arts, and Commercial tracks let students specialize, backed by career counselling and university placement support.",
    curriculum: ["Science Track", "Arts Track", "Commercial Track", "WAEC / NECO exam preparation", "Career counselling"],
    typicalDay: [
      { time: "7:30 am", activity: "Morning devotion & assembly" },
      { time: "8:00 am", activity: "Extended academic periods" },
      { time: "11:30 am", activity: "Practical lab sessions" },
      { time: "1:30 pm", activity: "Break" },
      { time: "2:00 pm", activity: "Prep / study periods" },
    ],
    facilities: ["Advanced science laboratories", "Careers office", "ICT Lab", "Examination hall"],
    uniqueTitle: "Where Our Graduates Go",
    uniqueBody:
      "From WAEC and NECO results to the universities our graduates go on to attend, our Senior Secondary track record speaks for itself — and our Alumni network stays close after graduation.",
    linkTo: "alumni",
    heroPhoto: "/images/sections/high-school/hs-chem-lab-group-experiment.jpg",
  },
];

export const CROSS_LINKS = SECTIONS.map((s) => ({ slug: s.slug, name: s.name }));

// Two-tier logo system: Discovery, Nursery, and Grade School all use the
// Grade School crest; Junior and Senior Secondary use the High School crest.
export function logoForSection(slug: SectionSlug): string {
  return slug === "junior-secondary" || slug === "senior-secondary"
    ? "/images/logos/high-school-logo.png"
    : "/images/logos/grade-school-logo.png";
}

export const GRADE_SCHOOL_GALLERY: { src: string; caption: string }[] = [
  { src: "/images/sections/grade-school/gs-hardware-lesson-1.jpg", caption: "Hands-on computer hardware lesson" },
  { src: "/images/sections/grade-school/gs-hardware-lesson-2.jpg", caption: "Working through the assignment together" },
  { src: "/images/sections/grade-school/gs-student-writing.jpg", caption: "Focused on the day's exercise" },
  { src: "/images/sections/grade-school/gs-student-smiling.jpg", caption: "All smiles in class" },
  { src: "/images/sections/grade-school/gs-ict-projector-lesson.jpg", caption: "ICT lesson with laptops and projector" },
  { src: "/images/sections/grade-school/gs-scratch-coding.jpg", caption: "Learning to code with Scratch" },
  { src: "/images/sections/grade-school/gs-computer-lab.jpg", caption: "Computer lab session" },
  { src: "/images/sections/grade-school/gs-outdoor-play.jpg", caption: "Playtime on the field" },
  { src: "/images/sections/grade-school/gs-classwork-1.jpg", caption: "Settling in for classwork" },
  { src: "/images/sections/grade-school/gs-classwork-2.jpg", caption: "All smiles at their desks" },
  { src: "/images/sections/grade-school/gs-classwork-3.jpg", caption: "Working through the exercise book" },
  { src: "/images/sections/grade-school/gs-classwork-4.jpg", caption: "Focused on the day's assignment" },
];

export const HIGH_SCHOOL_GALLERY: { src: string; caption: string }[] = [
  { src: "/images/sections/high-school/hs-anatomy-practical.jpg", caption: "Anatomy practical" },
  { src: "/images/sections/high-school/hs-microscope-lab-work.jpg", caption: "Microscope work in the science lab" },
  { src: "/images/sections/high-school/hs-solar-system-physics-class.jpg", caption: "Solar system model, physics class" },
  { src: "/images/sections/high-school/hs-word-of-the-week.jpg", caption: "Word of the Week — building vocabulary" },
  { src: "/images/sections/high-school/hs-students-with-textbooks.jpg", caption: "Ready for the school day" },
  { src: "/images/sections/high-school/hs-uniform-group-photo.jpg", caption: "Students in uniform, ready for the day" },
  { src: "/images/sections/high-school/hs-cultural-day-group-1.jpg", caption: "Cultural Day celebrations" },
  { src: "/images/sections/high-school/hs-cultural-day-audience.jpg", caption: "Community gathered for Cultural Day" },
  { src: "/images/sections/high-school/hs-cultural-day-family-portrait.jpg", caption: "Traditional attire on Cultural Day" },
  { src: "/images/sections/high-school/hs-cultural-day-dance.jpg", caption: "Cultural dance performance" },
  { src: "/images/sections/high-school/hs-cultural-day-group-2.jpg", caption: "Cultural Day, dressed in heritage attire" },
];

export const NURSERY_GALLERY: { src: string; caption: string }[] = [
  { src: "/images/sections/nursery/nur-circle-time-field.jpg", caption: "Circle time on the field" },
  { src: "/images/sections/nursery/nur-sports-day-fun.jpg", caption: "Sports day fun" },
  { src: "/images/sections/nursery/nur-face-painting-games.jpg", caption: "Face-painting and games" },
  { src: "/images/sections/nursery/nur-snack-time-circle-1.jpg", caption: "Snack time circle" },
  { src: "/images/sections/nursery/nur-snack-time-circle-2.jpg", caption: "Snack time circle" },
  { src: "/images/sections/nursery/nur-craft-slippers-1.jpg", caption: "Craft time — making paper slippers" },
  { src: "/images/sections/nursery/nur-craft-slippers-2.jpg", caption: "Craft time — making paper slippers" },
  { src: "/images/sections/nursery/nur-craft-slippers-3.jpg", caption: "Craft time — making paper slippers" },
  { src: "/images/sections/nursery/nur-craft-slippers-4.jpg", caption: "Craft time — making paper slippers" },
  { src: "/images/sections/nursery/nur-careful-gluing-cutting.jpg", caption: "Careful gluing and cutting" },
  { src: "/images/sections/nursery/nur-finished-craft.jpg", caption: "Showing off the finished craft" },
  { src: "/images/sections/nursery/nur-celebrating-together.jpg", caption: "Celebrating together" },
  { src: "/images/sections/nursery/nur-youngest-learners-smiles.jpg", caption: "The youngest learners, all smiles" },
];

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  body: string[];
}

export const HOME_HERO_PHOTO = "/images/hero-home-classroom.jpg";

export const HOME_GALLERY: { src: string; caption: string }[] = [
  { src: "/images/home/home-gallery-chem-lab.jpg", caption: "Hands-on science in the lab" },
  { src: "/images/home/home-gallery-projector-class.jpg", caption: "Classroom learning, screen-led lessons" },
  { src: "/images/home/home-gallery-hardware-lesson.jpg", caption: "Hands-on computer hardware lesson" },
  { src: "/images/home/home-gallery-computer-lab.jpg", caption: "ICT lab session" },
  { src: "/images/home/home-gallery-tfhs-3d-logo.png", caption: "Tamara's Fairview High School crest" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "jets-competition-national-win",
    title: "Tamara's Fairview Students Win Top Honors at National JETS Competition",
    date: "2026-01-15",
    excerpt:
      "Students from Tamara's Fairview High School represented Plateau State and won top honors at the National Junior Engineers, Technicians, and Scientists (JETS) Competition.",
    image: "/images/blog/jets-competition-award.jpg",
    body: [
      "Students from Tamara's Fairview High School represented Plateau State and won top honors at the National Junior Engineers, Technicians, and Scientists (JETS) Competition — a proud moment for the school and for STEM education across the state.",
      "The victorious students were received at the Government House in Rayfield, Jos, where they presented their plaque and award to Governor Mutfwang.",
      "Governor Mutfwang commended the students for their innovation and outstanding representation of Plateau State on the national stage, reaffirming the state government's commitment to supporting STEM education and empowering young talent.",
    ],
  },
];

export interface StaffMember {
  name: string;
  role: string;
  photo: string;
  narration: string;
}

export const STAFF: StaffMember[] = [
  {
    name: "Mrs. Tamara Oko",
    role: "Founder",
    photo: "/images/staff/founder-tamara-oko.jpg",
    narration:
      "\"I started this school on a simple belief: that a child taught with both discipline and warmth grows into an adult who leads with both. Every classroom we build still carries that founding purpose.\"",
  },
  {
    name: "Mr. Vincent Dadi",
    role: "Principal, High School",
    photo: "/images/staff/principal-vincent-dadi.jpg",
    narration:
      "\"Running a high school means holding two things at once — high expectations and genuine care. I want every student here to feel both challenged and known.\"",
  },
  {
    name: "Mrs. Hannah Akinade",
    role: "Head Teacher",
    photo: "/images/staff/head-teacher-hannah-akinade.jpg",
    narration:
      "\"The early years set the tone for everything that follows. I see my role as making sure every teacher in my care has the tools and encouragement to make each child feel capable, seen, and genuinely excited to learn.\"",
  },
  {
    name: "Mr. Stephen Farinola",
    role: "Vice Principal, Academics",
    photo: "/images/staff/vp-academics-stephen-farinola.jpg",
    narration:
      "\"Academic excellence isn't about pressure, it's about preparation. I work to make sure every learner walks into an exam room having already done the hard part — the consistent, well-guided work that comes before it.\"",
  },
  {
    name: "Mr. Dokduna Gorip",
    role: "Vice Principal, Admin",
    photo: "/images/staff/vp-admin-dokduna-gorip.jpg",
    narration:
      "\"A school runs on the things nobody notices until they go wrong. My job is to keep those things — schedules, resources, day-to-day order — running so quietly that teachers can just focus on teaching.\"",
  },
  {
    name: "Mrs. Blessing Ini",
    role: "Assistant Head Teacher",
    photo: "/images/staff/asst-head-teacher-blessing-ini.jpg",
    narration:
      "\"Structure and affection aren't opposites — they work together. I try to give every learner clear expectations and a steady hand to hold while they find their confidence.\"",
  },
  {
    name: "Miss Julie Johnson",
    role: "HOD, Preschool",
    photo: "/images/staff/hod-preschool-julie-johnson.jpg",
    narration:
      "\"Preschool is where curiosity either gets nurtured or dampened. My job is to protect that curiosity — through play, patience, and a classroom where it's always safe to ask 'why?'\"",
  },
  {
    name: "Mr. Dikon Nanbal Alex",
    role: "HOD, Chemistry",
    photo: "/images/staff/hod-chemistry-alex.jpg",
    narration:
      "\"Chemistry clicks when students stop memorizing and start observing. I build my lessons around the lab bench, not the textbook, because that's where the subject actually comes alive.\"",
  },
  {
    name: "Engr. Barthlomeu Ogah",
    role: "HOD, Physics",
    photo: "/images/staff/hod-physics-barthlomeu-ogah.jpg",
    narration:
      "\"Physics is just the world explaining itself, if you're patient enough to listen. I want my students to leave every class seeing the everyday differently — not just solving for x.\"",
  },
  {
    name: "Mr. Semion",
    role: "HOD, Biology",
    photo: "/images/staff/hod-biology-semion.jpg",
    narration:
      "\"Biology rewards curiosity more than memorization. I push my students to ask what a living system is trying to do — once you see that, the details start making sense on their own.\"",
  },
  {
    name: "Mr. Iliya",
    role: "HOD, English Language",
    photo: "/images/staff/hod-english-iliya.jpg",
    narration:
      "\"Language is the tool every other subject depends on. I take that seriously — a student who can read closely and write clearly has an advantage that follows them everywhere.\"",
  },
  {
    name: "Mr. Titus Longji",
    role: "HOD, French",
    photo: "/images/staff/hod-french-titus-longji.jpg",
    narration:
      "\"Learning a new language is really learning to see the world through someone else's words. I try to make that feel like discovery, not drilling.\"",
  },
  {
    name: "Mr. Ifanyi",
    role: "ICT / Technical Department",
    photo: "/images/staff/ict-td-ifanyi.jpg",
    narration:
      "\"Technology should feel like a tool students are comfortable with, not a subject they're afraid of. I focus on hands-on, practical skills they'll actually use.\"",
  },
];

export const EXPECTATIONS = [
  {
    section: "Discovery",
    academic: ["Recognize own name and personal belongings", "Identify basic colors and shapes", "Follow simple one-step instructions"],
    behavioral: ["Settle into classroom routine with minimal distress", "Begin sharing toys and materials with peers", "Respond appropriately to caregiver redirection"],
    psychomotor: ["Hold a crayon with a developing grip", "Stack and sort blocks", "Run, climb, and balance safely on playground equipment"],
  },
  {
    section: "Nursery (incl. LKG / HKG)",
    academic: ["Recognize letters and numbers 1–20", "Write own name independently", "Blend simple phonic sounds", "Count and sort objects accurately"],
    behavioral: ["Follow classroom rules with minimal reminders", "Take turns during group activities", "Use polite words unprompted"],
    psychomotor: ["Cut along a line with scissors", "Hop on one foot and skip", "Hold a pencil with a tripod grip", "Complete age-appropriate puzzles"],
  },
  {
    section: "Grade School",
    academic: ["Read grade-level texts fluently", "Perform grade-appropriate arithmetic operations", "Write structured paragraphs", "Complete Continuous Assessment tasks on schedule"],
    behavioral: ["Demonstrate honesty and respect for school property", "Complete homework independently", "Resolve peer conflicts using taught strategies"],
    psychomotor: ["Participate actively in PE and sports drills", "Maintain neat, legible handwriting", "Handle classroom tools and materials safely"],
  },
  {
    section: "Junior Secondary",
    academic: ["Meet subject-specific NERDC benchmarks", "Prepare for and sit BECE mock examinations", "Produce independent project / trade-skill work"],
    behavioral: ["Uphold the school's code of conduct", "Show punctuality and organizational discipline", "Support and mentor younger learners where assigned"],
    psychomotor: ["Operate ICT lab equipment competently", "Execute practical science and workshop procedures safely", "Participate in inter-house sports"],
  },
  {
    section: "Senior Secondary",
    academic: ["Maintain subject-track performance (Science / Arts / Commercial) toward WAEC / NECO", "Complete career-counselling milestones", "Submit coursework and practicals on time"],
    behavioral: ["Model leadership and responsibility as senior students", "Adhere to examination integrity standards", "Engage in community and co-curricular service"],
    psychomotor: ["Demonstrate proficiency in advanced lab techniques", "Represent the school in sports and co-curricular activities", "Maintain consistent personal presentation standards"],
  },
];

export const CONTACTS = [
  { name: "Mrs. Osinamofan Oko", role: "Proprietress", phone: "07038532976" },
  { name: "Mrs. Hannah Akinade", role: "Head Teacher — Grade School", phone: "08131618327" },
  { name: "Mr. Vincent Dadi", role: "Principal — High School", phone: "08032823229" },
  { name: "Support Line", role: "General Enquiries", phone: "08138298325" },
];

// Admissions form submissions post here — a Google Apps Script "Web App"
// deployment URL bound to the school's admissions Google Sheet.
export const GOOGLE_SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxWCxo8PR1UfgMan9CpvDLeYauso0K5FMlzd1m_6Hidgq_Bs9Eil8Qkw_zpmb0nWK8b/exec";
