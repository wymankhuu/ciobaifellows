import cCostelloQr from "@assets/qrcode-PBATEssayProjectBuilder_1768425410059.png";
import cCostelloPhoto from "@assets/CleanShot_2026-01-14_at_16.24.15@2x_1768425864489.png";
import eCastroQr from "@assets/qrcode-CIOBHOTHelper_1768426557336.png";

import eCastroPhoto from "@assets/CleanShot_2026-01-14_at_16.39.04@2x_1768426750429.png";

export interface Fellow {
  id: string;
  name: string;
  email?: string;
  school: string;
  role: string;
  status: "Accepted" | "Waitlist";
  category: "Consortium" | "International" | "Outward Bound" | "District/Other";
  bio?: string;
  appDescription?: string;
  impact?: string;
  videoUrl?: string; // Placeholder for embedded video
  quote?: string;
  playlabUrl?: string; // Placeholder for app link
  importance?: string; // Why this is important
  qrCode?: string;
  photoUrl?: string;
}

const schoolCategories: Record<string, Fellow['category']> = {
  "Bronx Lab School": "Consortium",
  "Brooklyn Collaborative School": "Consortium",
  "East Side Community School": "Consortium",
  "El Puente Academy for Peace and Justice": "Consortium",
  "Fannie Lou Hamer Freedom High School": "Consortium",
  "Forsyth Satellite Academy": "Consortium",
  "Lyons Community School": "Consortium",
  "School Without Walls": "Consortium",
  "University Heights High School": "Consortium",
  
  "Crotona International High School": "International",
  "Flushing High School": "International",
  "International High School @ Prospect Heights": "International",
  "International High School at Union Square": "International",
  "International HS at Union Square": "International",
  "Internationals Network": "International",
  "The Manhattan International High School": "International",
  "Pan American International HS": "International",
  
  "NYC Outward Bound": "Outward Bound",
  
  "CIOB District Team": "District/Other",
  "North Star Academy": "District/Other",
  "Speyer Legacy School": "District/Other",
  "Virtual Innovators Academy": "District/Other"
};

// Data extracted and normalized from the provided text
const rawFellows = [
  { id: "1", name: "Brendan Harney", email: "brendan.harney@bronxlabschool.org", school: "Bronx Lab School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "2", name: "Jacob Prairie", email: "jacob.prairie@bronxlabschool.org", school: "Bronx Lab School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "3", name: "Christina Crisfield", email: "christina.crisfield@bronxlabschool.org", school: "Bronx Lab School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "4", name: "Crystal", email: "crystal@bcs448.org", school: "Brooklyn Collaborative School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "5", name: "Glen", email: "glen@bcs448.org", school: "Brooklyn Collaborative School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "6", name: "J. Long", email: "jlong22@schools.nyc.gov", school: "CIOB District Team", role: "District Leader", status: "Accepted", category: "District/Other" },
  { id: "7", name: "E. Coppola", email: "ecoppola5@schools.nyc.gov", school: "CIOB District Team", role: "District Leader", status: "Accepted", category: "District/Other" },
  { id: "8", name: "A. Katine", email: "akatine@schools.nyc.gov", school: "CIOB District Team", role: "District Leader", status: "Accepted", category: "District/Other" },
  { id: "9", name: "S. Bruss", email: "sbruss@schools.nyc.gov", school: "CIOB District Team", role: "District Leader", status: "Accepted", category: "District/Other" },
  { id: "10", name: "E. Castro", email: "ecastro16@schools.nyc.gov", school: "CIOB District Team", role: "District Leader", status: "Accepted", category: "District/Other" },
  { id: "11", name: "A. Uy", email: "auy@schools.nyc.gov", school: "Crotona International High School", role: "Educator", status: "Accepted", category: "International" },
  { id: "12", name: "J. Vincente", email: "jvincente2@schools.nyc.gov", school: "East Side Community School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "13", name: "A. Swenson", email: "aswenso@schools.nyc.gov", school: "East Side Community School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "14", name: "C. Costello", email: "Ccostello2@schools.nyc.gov", school: "El Puente Academy for Peace and Justice", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "15", name: "Ed B.", email: "EdB@FLHFHS.org", school: "Fannie Lou Hamer Freedom High School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "16", name: "Yousra", email: "yousra@flushinginternational.org", school: "Flushing High School", role: "Educator", status: "Accepted", category: "International" },
  { id: "17", name: "Eloi", email: "eloi@flushinginternational.org", school: "Flushing High School", role: "Educator", status: "Accepted", category: "International" },
  { id: "18", name: "M. Britto", email: "mbritto2@schools.nyc.gov", school: "Forsyth Satellite Academy", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "19", name: "J. Rojas", email: "jrojas27@schools.nyc.gov", school: "Forsyth Satellite Academy", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "20", name: "M. Sane", email: "M.sane@ihsph.org", school: "International High School @ Prospect Heights", role: "Educator", status: "Accepted", category: "International" },
  { id: "21", name: "S. DeSilva", email: "sdesilv2@schools.nyc.gov", school: "International High School at Union Square", role: "Educator", status: "Accepted", category: "International" },
  { id: "22", name: "A. Dvorak", email: "advorak@schools.nyc.gov", school: "International HS at Union Square", role: "Educator", status: "Accepted", category: "International" },
  { id: "23", name: "Khalia Joseph", email: "khalia.joseph@internationalsnetwork.org", school: "Internationals Network", role: "Network Leader", status: "Accepted", category: "International" },
  { id: "24", name: "D. Wilson", email: "DWilson36@schools.nyc.gov", school: "Lyons Community School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "25", name: "S. Kern", email: "skern@northstaracademy.org", school: "North Star Academy", role: "Educator", status: "Accepted", category: "District/Other" },
  { id: "26", name: "Mike Taubman", email: "mike.taubman@northstaracademy.org", school: "North Star Academy", role: "Educator", status: "Accepted", category: "District/Other" },
  { id: "27", name: "Dolan Morgan", email: "dolan.morgan@internationalsnetwork.org", school: "NYC Outward Bound", role: "Educator", status: "Accepted", category: "Outward Bound" },
  { id: "28", name: "R. Bonilla", email: "rbonilla7@schools.nyc.gov", school: "School Without Walls", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "29", name: "J. Ferraiolo", email: "jferraiolo@schools.nyc.gov", school: "School Without Walls", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "30", name: "A. Kang", email: "akang@mihsnyc.org", school: "The Manhattan International High School", role: "Educator", status: "Accepted", category: "International" },
  { id: "31", name: "M. Ahn", email: "mahn@mihsnyc.org", school: "The Manhattan International High School", role: "Educator", status: "Accepted", category: "International" },
  { id: "32", name: "W. Abreu", email: "Wabreu5@schools.nyc.gov", school: "University Heights High School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "33", name: "N. Weber", email: "nweber5@uhhsnyc.org", school: "University Heights High School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "34", name: "Brett Xu", school: "Pan American International HS", role: "Educator", status: "Waitlist", category: "International" },
  { id: "35", name: "Tess Ramsey", school: "Speyer Legacy School", role: "Educator", status: "Waitlist", category: "District/Other" },
  { id: "36", name: "Tania Mohammed", school: "The Manhattan International High School", role: "Educator", status: "Waitlist", category: "International" },
  { id: "37", name: "Rusmi Ramli", school: "University Heights High School", role: "Educator", status: "Waitlist", category: "Consortium" },
  { id: "38", name: "Jessica Rodriguez", school: "University Heights High School", role: "Educator", status: "Waitlist", category: "Consortium" },
  { id: "39", name: "S. Peters", email: "speters9@schools.nyc.gov", school: "Virtual Innovators Academy", role: "Educator", status: "Accepted", category: "District/Other" },
] as const;

export const fellows: Fellow[] = rawFellows.map(fellow => ({
  ...fellow,
  bio: `An experienced ${fellow.role.toLowerCase()} at ${fellow.school}, dedicated to transforming student learning experiences through technology and innovation.`,
  appDescription: "Developed an AI-powered feedback assistant that helps students refine their performance assessments through iterative, personalized guidance.",
  impact: "Reduced grading time by 40% while increasing student engagement in the revision process. Students reported feeling more confident in their final submissions.",
  quote: "This fellowship has completely reshaped how I view the role of technology in the classroom.",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  playlabUrl: "https://www.playlab.ai", // Placeholder
  importance: "This tool bridges the gap between assessment and learning, ensuring that students receive immediate, actionable feedback that deepens their understanding rather than just correcting their mistakes."
}));

// Manually specific updates based on Broad Forum Presentation data
const presentationFellows: Partial<Fellow>[] = [
  {
    id: "1", // Brendan Harney
    appDescription: "Near Peer Feedback Tool. A tool designed to scaffold peer feedback, helping students provide more meaningful, specific, and actionable feedback to one another before teacher review.",
    quote: "We need tools that guide thinking, not replace it.",
    impact: "Helps students practice sustained attention and judgment by structuring how they critique and support their peers.",
    importance: "Peer feedback is often superficial. This tool structures the process so students must engage deeply with criteria and their peer's work."
  },
  {
    id: "12", // J. Vincente (Joe Vincent)
    appDescription: "Science PBAT Presentation Practice Tool. An AI simulation that helps students prepare for their Performance Based Assessment Tasks (PBAT) defenses by asking probing questions and simulating the Q&A portion of the defense.",
    impact: "Reveals misconceptions that would otherwise stay hidden until the actual defense, allowing students to refine their arguments and understanding beforehand.",
    importance: "Defense preparation is high-stakes. This tool provides a safe space for rehearsal, building confidence and revealing gaps in logic before the final presentation."
  },
  {
    id: "14", // C. Costello
    name: "Christopher A. Costello",
    appDescription: "ELA & Debate Research Writing Coach. An AI thought partner that provides follow-up questions to research submissions, encouraging students to develop and improve persuasive writing and personal reflections. It targets support based on subject rubrics (ELA, Math, Science, Social Studies) without providing direct answers.",
    quote: "We need to encourage, develop, and improve persuasive writing through critical thinking, not just error correction.",
    impact: "Provides specific, positive reinforcement on grammar and punctuation while pushing for authentic student responses. Supports students from initial drafts to visual presentations and data analysis.",
    videoUrl: "https://vocalvideo.com/embed/v1/videos/223934",
    playlabUrl: "https://www.playlab.ai/project/cmkbambgo2s5bg90u11q2e34r",
    importance: "This tool shifts the focus from 'getting it right' to 'thinking it through,' requiring full sentences and deep reflection while ensuring students maintain ownership of their authentic voice.",
    qrCode: cCostelloQr,
    photoUrl: cCostelloPhoto
  },
  {
    id: "10", // E. Castro
    name: "Ed Castro",
    role: "Family Leadership Coordinator",
    appDescription: "CIOB Higher-Order Thinking (HOT) Helper. An instructional coaching assistant that helps educators analyze and improve the rigor and equity of their classroom artifacts. It provides feedback grounded in cognitive demand analysis, supporting teachers in creating rigorous, inclusive learning experiences.",
    quote: "We need tools that support teachers in designing for rigor and equity, not just compliance.",
    impact: "This tool has provided educators with a safe, non-evaluative space to audit their own materials. It allows them to instantly see where they can increase rigor and receive concrete, actionable coaching that they can implement immediately.",
    videoUrl: "https://vocalvideo.com/embed/v1/videos/224043",
    playlabUrl: "https://www.playlab.ai/project/cmhnlyvq400s6lx0uqxv9m9n2",
    importance: "Ensuring equity requires intentional design. This tool acts as a non-evaluative thought partner, helping teachers spot where they might be inadvertently lowering expectations and guiding them to lift the cognitive load for all students.",
    qrCode: eCastroQr,
    photoUrl: eCastroPhoto
  }
];

// Apply updates
presentationFellows.forEach(update => {
  const index = fellows.findIndex(f => f.id === update.id);
  if (index !== -1) {
    fellows[index] = { ...fellows[index], ...update };
  }
});


export const contextData = {
  consortium: {
    title: "Consortium Schools",
    description: "The New York Performance Standards Consortium was founded two decades ago on the belief that there was a better way to assess student learning than dependence upon standardized testing. The Consortium’s system is based on in-depth literacy, mathematical problem-solving, application of the scientific method, social studies research, a span of mediums for exhibiting learning, and a chance for students to have a voice and proud ownership of their work. Instead of standard Regents exams, students complete a series of performance assessments to graduate."
  },
  international: {
    title: "International Schools",
    description: "International schools and academies are for newcomers who have been in the country for four years or less at their time of admission. Students are diverse, coming from over 130 countries, and represent a multitude of racial and ethnic groups, with over 100 native languages spoken in our schools. Classroom curriculum is based on project-based learning where students integrate language and content development in order to accelerate academic language learning."
  },
  outwardBound: {
    title: "Outward Bound Schools",
    description: "NYC Outward Bound Schools joins together demanding and engaging learning with an emphasis on community and character. They honor students’ roots and dreams while preparing them for success in college, careers, and citizenship. Curriculum is based on field experiences and projects that engage students critical thinking and problem solving skills. The Crew advisory model throughout high school helps to build a strong community and ongoing support for students’ social-emotional development."
  }
};

export const broadContext = {
  title: "AI That Deepens Thinking",
  subtitle: "A Teacher-Centered Approach to Innovation in NYC Public Schools",
  description: "Much of the current conversation about AI in schools leans toward shortcuts. Faster grading. Quick lesson plans. A smoother workflow. None of that answers the real question facing classrooms: How do we help students practice sustained attention, make sense of complex ideas, and build their own interpretations in a world where a machine can produce a passable answer in seconds?",
  mission: "In our district, we are trying to keep the focus on deep and meaningful thinking. AI should strengthen the parts of learning that require patience, judgment, reflection, and conversation. It should not replace them."
};

export const programDetails = {
  title: "About the Program",
  description: "The AI Innovation Fellows Program is a unique opportunity for CIOB educators and leaders to design and pilot real-world uses of AI that enhance instruction, address existing challenges, and build next-generation practices rooted in responsible innovation.",
  commitments: [
    {
      title: "Design & Innovation",
      description: "Direct collaboration with Playlab Learning Engineers for custom AI app creation, focusing on tools that deepen student thinking."
    },
    {
      title: "Community of Practice",
      description: "8-session learning series with targeted breakout groups and dedicated site visits for personalized coaching."
    },
    {
      title: "Impact & Scaling",
      description: "Fellows document their impact and present their tools at the AI Innovation Fellows Showcase, contributing to a collection of proven models for district-wide scaling."
    }
  ],
  images: [
    "@assets/IMG_5922_1768318177323.jpg",
    "@assets/IMG_6404_1768318179239.jpg"
  ]
};
