import cCostelloQr from "@assets/qrcode-PBATEssayProjectBuilder_1768425410059.png";
import cCostelloPhoto from "@assets/CleanShot_2026-01-14_at_16.24.15@2x_1768425864489.png";
import eCastroQr from "@assets/qrcode-CIOBHOTHelper_1768426557336.png";

import eCastroPhoto from "@assets/image_1768435325402.png";
import bHarneyQr from "@assets/qrcode-NearPeerFeedbacksciencev2_1768427021869.png";
import bHarneyCover from "@assets/CleanShot_2026-01-14_at_16.44.19@2x_1768427080910.png";
import bHarneyPhoto from "@assets/CleanShot_2026-01-14_at_16.48.28@2x_1768427316706.png";
import aDvorakQr from "@assets/qrcode-HOTBotYourHigherOrderThinkingThoughtPartner_1768427445781.png";
import aDvorakPhoto from "@assets/CleanShot_2026-01-14_at_16.54.28@2x_1768427682769.png";
import aKatineQr from "@assets/qrcode-V2MathThoughtPartnerforStudents_1768428109571.png";
import aKatinePhoto from "@assets/image001_1768428190212.jpg";
import jVincenteQr from "@assets/qrcode-CIOBSciencePBATPresentationCoach_1768428612972.png";
import jVincentePhoto from "@assets/CleanShot_2026-01-14_at_17.10.51@2x_1768428662566.png";
import jVincenteCover from "@assets/DSCF4069_1768428691241.JPG";
import eCoppolaQr from "@assets/qrcode-CreateaLearningPlan_1768429416319.png";
import eCoppolaPhoto from "@assets/CleanShot_2026-01-14_at_17.23.49@2x_1768429435262.png";
import sPetersQr from "@assets/qrcode-EchoSpace_(1)_1768429866393.png";
import sPetersPhoto from "@assets/CleanShot_2026-01-14_at_17.32.21@2x_1768429948742.png";
import eVillanuevaQr from "@assets/qrcode-MAKERSINACTION_1768430239291.png";
import eVillanuevaPhoto from "@assets/CleanShot_2026-01-14_at_17.37.25@2x_1768430253453.png";
import eVillanuevaCover from "@assets/DSCF4071_1768432078513.JPG";
import nWeberQr from "@assets/qrcode-ThinkPhysLearnPhysicsbyThinkingLikeaPhysicist_1768430551590.png";
import nWeberPhoto from "@assets/CleanShot_2026-01-14_at_17.43.22@2x_1768430610114.png";
import tCrisfieldQr from "@assets/qrcode-EmotionalRegulationToolbox_1768430792304.png";
import tCrisfieldPhoto from "@assets/CleanShot_2026-01-14_at_17.46.46@2x_1768430815024.png";
import ciobLogo from "@assets/ciob_logo-removebg-preview_1768420327507.png";
import videoPlaceholder from "@assets/image_1768431182032.png";
import cYeungQr from "@assets/qrcode-CrystalsFeedbackAIforHorrorStories_1768431542616.png";
import cYeungPhoto from "@assets/CleanShot_2026-01-14_at_17.59.12@2x_1768431558449.png";
import rBonillaQr from "@assets/qrcode-DifferentiationwithProficiencyLevelsinSpanish_1768431916293.png";
import rBonillaPhoto from "@assets/CleanShot_2026-01-14_at_18.07.35@2x_1768432062263.png";
import gMeinQr from "@assets/qrcode-GMDebateDojov3_1768432534898.png";
import gMeinPhoto from "@assets/CleanShot_2026-01-14_at_18.15.12@2x_1768432518386.png";
import gMeinCover from "@assets/CleanShot_2026-01-14_at_18.14.05@2x_1768432460524.png";
import aSylviaQr from "@assets/qrcode-TeacherLessonDOKAnalyzer_1768432969009.png";
import aSylviaPhoto from "@assets/CleanShot_2026-01-14_at_18.23.05@2x_1768432991865.png";
import aSylviaCover from "@assets/image_1768433140690.png";
import jdQr from "@assets/qrcode-ThinkingThroughLearning_(1)_1768433720161.png";

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
  summary?: string;
  impact?: string;
  videoUrl?: string; // Placeholder for embedded video
  quote?: string;
  playlabUrl?: string; // Placeholder for app link
  importance?: string; // Why this is important
  qrCode?: string;
  photoUrl?: string;
  coverImage?: string;
  coverStyle?: 'default' | 'contain-navy';
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
  { id: "12", name: "J. Vincente", email: "jvincente2@schools.nyc.gov", school: "East Side Community School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "8", name: "A. Katine", email: "akatine@schools.nyc.gov", school: "CIOB District Team", role: "District Leader", status: "Accepted", category: "District/Other" },
  { id: "14", name: "C. Costello", email: "Ccostello2@schools.nyc.gov", school: "El Puente Academy for Peace and Justice", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "10", name: "E. Castro", email: "ecastro16@schools.nyc.gov", school: "CIOB District Team", role: "District Leader", status: "Accepted", category: "District/Other" },
  { id: "40", name: "Al Sylvia", school: "Bronx Lab School", role: "Principal", status: "Accepted", category: "Consortium" },
  { id: "2", name: "JD", school: "Bronx Lab School", role: "Instructional Coach", status: "Accepted", category: "Consortium" },
  { id: "17", name: "Eloi", email: "eloi@flushinginternational.org", school: "Flushing International High School", role: "Educator", status: "Accepted", category: "International" },
  { id: "4", name: "Crystal Yeung", email: "crystal@bcs448.org", school: "Brooklyn Collaborative School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "5", name: "Glen Meinschein", email: "glen@bcs448.org", school: "Brooklyn Collaborative School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "7", name: "E. Coppola", email: "ecoppola5@schools.nyc.gov", school: "CIOB District Team", role: "District Leader", status: "Accepted", category: "District/Other" },
  { id: "3", name: "Christina Crisfield", email: "christina.crisfield@bronxlabschool.org", school: "Bronx Lab School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "22", name: "Alexander Dvorak", email: "advorak@schools.nyc.gov", school: "International HS at Union Square", role: "Educator", status: "Accepted", category: "International" },
  { id: "28", name: "R. Bonilla", email: "rbonilla7@schools.nyc.gov", school: "School Without Walls", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "33", name: "N. Weber", email: "nweber5@uhhsnyc.org", school: "University Heights High School", role: "Educator", status: "Accepted", category: "Consortium" },
  { id: "39", name: "S. Peters", email: "speters9@schools.nyc.gov", school: "Virtual Innovators Academy", role: "Educator", status: "Accepted", category: "District/Other" },
] as const;

export const fellows: Fellow[] = rawFellows.map(fellow => ({
  ...fellow,
  bio: `An experienced ${fellow.role.toLowerCase()} at ${fellow.school}, dedicated to transforming student learning experiences through technology and innovation.`,
  appDescription: "Developed an AI-powered feedback assistant that helps students refine their performance assessments through iterative, personalized guidance.",
  summary: "Developed an AI-powered feedback assistant that helps students refine their performance assessments through iterative, personalized guidance.",
  impact: "Reduced grading time by 40% while increasing student engagement in the revision process. Students reported feeling more confident in their final submissions.",
  quote: "This fellowship has completely reshaped how I view the role of technology in the classroom.",
  playlabUrl: "https://www.playlab.ai", // Placeholder
  importance: "This tool bridges the gap between assessment and learning, ensuring that students receive immediate, actionable feedback that deepens their understanding rather than just correcting their mistakes.",
  coverImage: videoPlaceholder,
  coverStyle: 'contain-navy'
}));

// Manually specific updates based on Broad Forum Presentation data
const presentationFellows: Partial<Fellow>[] = [
  {
    id: "40", // Al Sylvia
    name: "Al Sylvia",
    role: "Principal",
    bio: "Principal at Bronx Lab School focusing on driving student agency and teacher agency through engaging, high Depth of Knowledge teaching and learning.",
    appDescription: "Teacher Lesson DOK Analyzer. An AI-powered instructional coach that helps school leaders and teachers analyze lesson plans for Depth of Knowledge (DOK). It reviews lesson documents, embedded links, and observation notes to provide a DOK level breakdown, rationale, and numerical average, comparing planned versus enacted rigor.",
    summary: "Helps school leaders and teachers analyze lesson plans for Depth of Knowledge (DOK).",
    impact: "Drives the school-wide goal of increasing instructional rigor by pushing for greater Depth of Knowledge. It promotes genuine agency for both students and teachers by providing objective, data-driven feedback that makes rigorous thinking visible and actionable.",
    importance: "Raising expectations requires clear standards. This tool moves the conversation from abstract goals to concrete analysis, helping the entire school community align on what rigor actually looks like in practice.",
    quote: "We need to push instruction beyond recall to true agency, ensuring rigor is a reality in every classroom.",
    playlabUrl: "https://www.playlab.ai/project/cm0fcpuvw0mil6q60r6y0ma3i",
    qrCode: aSylviaQr,
    photoUrl: aSylviaPhoto,
    coverImage: aSylviaCover,
    coverStyle: 'default'
  },
  {
    id: "2", // JD
    name: "JD",
    role: "Instructional Coach",
    bio: "Instructional Coach supporting inquiry-based STEM instruction, helping teachers reflect on and refine their classroom strategies.",
    appDescription: "Thinking Through Learning. A thinking partner for teachers to help them think through their lessons before teaching them, reflect on lessons after they are taught, and to brainstorm strategies based on classroom experiences.",
    summary: "Acts as a thinking partner for teachers to help them think through, reflect on, and brainstorm lesson strategies.",
    quote: "Teaching is challenging work. We need tools that support reflection without judgment, helping us understand the deeper purpose of our lessons.",
    impact: "Provides educators with a non-judgmental space to anticipate classroom dynamics, refine their timing, and reflect on what's working. This fosters a culture of continuous improvement and thoughtful planning.",
    importance: "Reflection is key to professional growth, but teachers often lack the time or a neutral partner to do it effectively. This tool bridges that gap.",
    playlabUrl: "https://www.playlab.ai/project/cm5ztrj3j0vs911xohrz36vgp",
    qrCode: jdQr,
    coverImage: ciobLogo,
    coverStyle: 'contain-navy'
  },
  {
    id: "4", // Crystal Yeung
    name: "Crystal Yeung",
    bio: "Middle school SPED teacher at Brooklyn Collaborative Studies and a writer/poet. Focuses on co-teaching ELA and supporting MLL students.",
    appDescription: "Feedback AI for Horror Stories. An AI writing coach that helps students refine their horror narratives by focusing on 'show, don't tell' strategies. It analyzes drafts for sensory details, suspense, and mood, offering specific questions and prompts in a structured feedback table without doing the writing for them.",
    summary: "Helps students refine their horror narratives by focusing on 'show, don't tell' strategies.",
    quote: "Great writing comes from revision. We need feedback that nudges students to 'show, not tell' without stealing the joy of discovery from them.",
    impact: "Helps students at Brooklyn Collaborative Studies enhance their writing skills by providing feedback that deepens understanding of literary devices. It pushes them to effectively use repetition, alliteration, and dialogue to create atmosphere, ensuring they master the genre's conventions while maintaining ownership of their story.",
    importance: "Writing feedback can often be prescriptive. This tool models the revision process by asking 'tell me more' or 'what do you mean?', guiding students to discover their own solutions and develop a stronger, more descriptive writing voice.",
    playlabUrl: "https://www.playlab.ai/project/cmi5bzjok6190jx0ucagdss9z",
    qrCode: cYeungQr,
    photoUrl: cYeungPhoto,
    coverImage: ciobLogo,
    coverStyle: 'contain-navy'
  },
  {
    id: "8", // Arden Katine
    name: "Arden Katine",
    role: "District Math Instructional Coach",
    bio: "Former math teacher, now coaches math teachers towards more inquiry-based math with a focus on discourse.",
    appDescription: "Math Thought Partner. An AI tutor designed to support students with non-routine math problems through strategic, non-leading questioning. Rather than providing answers, it acts as a coach—helping students identify stuck points, visualize problems, and journal their discoveries to build long-term problem-solving skills.",
    summary: "Supports students with non-routine math problems through strategic, non-leading questioning.",
    quote: "We need to help students move forward through questioning, not telling.",
    impact: "Students are taking ownership of their learning journey. By having a tool that refuses to give the answer but always offers a way forward, students are building the resilience and agency needed to tackle complex mathematical challenges without immediate teacher intervention.",
    importance: "In math, the struggle is where the learning happens. This tool ensures that support doesn't rob students of that productive struggle, but instead scaffolds it so they can reach the solution themselves.",
    videoUrl: "https://vocalvideo.com/embed/v1/videos/223990",
    playlabUrl: "https://www.playlab.ai/project/cmj1h3drk3dg1mi0upotlfac0",
    qrCode: aKatineQr,
    photoUrl: aKatinePhoto
  },
  {
    id: "1", // Brendan Harney
    appDescription: "Near Peer Feedback Tool. A tool designed to scaffold peer feedback, helping students provide more meaningful, specific, and actionable feedback to one another before teacher review. Working to provide mastery and standards based feedback for science students across all grades.",
    summary: "Scaffolds peer feedback, helping students provide more meaningful, specific, and actionable feedback to one another before teacher review.",
    quote: "Meaningful feedback requires understanding the standard. This tool ensures students aren't just correcting each other, but coaching each other toward mastery.",
    impact: "Students have shifted from giving generic 'good job' comments to providing specific, actionable feedback tied directly to scientific standards. This has noticeably improved the quality of final submissions and deepened student understanding of the grading criteria before they even hand in their work.",
    importance: "Peer feedback is often superficial. This tool structures the process so students must engage deeply with criteria and their peer's work.",
    videoUrl: "https://vocalvideo.com/embed/v1/videos/224222",
    playlabUrl: "https://www.playlab.ai/project/cmiz47auf012ljr0uljchkrpo",
    qrCode: bHarneyQr,
    coverImage: bHarneyCover,
    coverStyle: 'default',
    photoUrl: bHarneyPhoto
  },
  {
    id: "12", // J. Vincente (Joe Vincent)
    name: "Joseph Vincente",
    role: "Vice Principal",
    bio: "Assistant Principal of STEM at East Side Community School. A former Chemistry teacher passionate about leveraging AI for learning and equity.",
    appDescription: "Science PBAT Presentation Practice Tool. An AI simulation that helps students prepare for their Performance Based Assessment Tasks (PBAT) defenses by asking probing questions and simulating the Q&A portion of the defense.",
    summary: "Helps students prepare for their Performance Based Assessment Tasks (PBAT) defenses by asking probing questions and simulating the Q&A portion of the defense.",
    quote: "Confidence comes from practice. By simulating the defense, we transform the panel from a test of nerves into a demonstration of expertise.",
    impact: "Students are moving towards approaching their defenses with the confidence of experts. By stress-testing their knowledge beforehand, they are shifting from rote memorization to demonstrating true mastery during their presentations.",
    importance: "Defense preparation is high-stakes. This tool provides a safe space for rehearsal, building confidence and revealing gaps in logic before the final presentation.",
    playlabUrl: "https://www.playlab.ai/project/cmhw3oazw08sbk10ub24yysha",
    videoUrl: "https://vocalvideo.com/embed/v1/videos/224195",
    qrCode: jVincenteQr,
    photoUrl: jVincentePhoto,
  },
  {
    id: "14", // C. Costello
    name: "Christopher A. Costello",
    bio: "18-year Educator; 10 years as Special Education and Social Studies teacher and 8 years as the Assistant Principal at El Puente Academy for Peace and Justice.",
    appDescription: "ELA & Debate Research Writing Coach. An AI thought partner that provides follow-up questions to research submissions, encouraging students to develop and improve persuasive writing and personal reflections. It targets support based on subject rubrics (ELA, Math, Science, Social Studies) without providing direct answers.",
    summary: "Provides follow-up questions to research submissions, encouraging students to develop and improve persuasive writing and personal reflections.",
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
    bio: "With roots in Brooklyn and a heart for service, I guide schools in using tech, policy, and outside-the-box thinking to build inclusive, empowered communities. As a CIOB brand ambassador and one of the earliest AI adopters in the DOE, I center parent engagement, drive innovation, and bring clarity, connection, and good energy to every space.",
    appDescription: "CIOB Higher-Order Thinking (HOT) Helper. An instructional coaching assistant that helps educators analyze and improve the rigor and equity of their classroom artifacts. It provides feedback grounded in cognitive demand analysis, supporting teachers in creating rigorous, inclusive learning experiences.",
    summary: "Helps educators analyze and improve the rigor and equity of their classroom artifacts.",
    quote: "We need tools that support teachers in designing for rigor and equity, not just compliance.",
    impact: "This tool has provided educators with a safe, non-evaluative space to audit their own materials. It allows them to instantly see where they can increase rigor and receive concrete, actionable coaching that they can implement immediately.",
    videoUrl: "https://vocalvideo.com/embed/v1/videos/224043",
    playlabUrl: "https://www.playlab.ai/project/cmhnlyvq400s6lx0uqxv9m9n2",
    importance: "Ensuring equity requires intentional design. This tool acts as a non-evaluative thought partner, helping teachers spot where they might be inadvertently lowering expectations and guiding them to lift the cognitive load for all students.",
    qrCode: eCastroQr,
    photoUrl: eCastroPhoto
  },
  {
    id: "5", // Glen Mein
    name: "Glen Meinschein",
    bio: "Middle school Special Education teacher and AI lead at Brooklyn Collaborative Studies. Loves creating engaging, project-based learning experiences.",
    appDescription: "Debate Dojo. An AI tool that helps teachers design 5-day debate protocols for Crew advisory, generating engaging topics, pro/con arguments, and lesson plans.",
    summary: "Helps teachers design 5-day debate protocols for Crew advisory, generating engaging topics, pro/con arguments, and lesson plans.",
    impact: "Impacts Crew advisory by bringing structured, meaningful debate into the classroom, allowing students to practice civil discourse and critical thinking on relevant topics, strengthening the community through shared intellectual inquiry.",
    importance: "Debate and discussion are crucial for civic engagement. This tool ensures that Crew advisory is not just a homeroom, but a place for rigorous, respectful dialogue on issues that matter to students.",
    playlabUrl: "https://www.playlab.ai/project/cmg6qia2f02xmoz0uhjcl6aht",
    qrCode: gMeinQr,
    photoUrl: gMeinPhoto,
    coverImage: gMeinCover,
    coverStyle: 'default'
  },
  {
    id: "7", // E. Coppola
    name: "Eileen Coppola",
    bio: "CIOB district staff member and former principal/professor who works alongside school leaders to build plans for continuous improvement.",
    appDescription: "Create a Learning Plan. An AI guide that partners with students to co-construct personalized learning plans. It helps students define goals, assess their current understanding against New York State Standards, set actionable steps, and reflect on their progress.",
    summary: "Partners with students to co-construct personalized learning plans, helping them define goals and reflect on their progress.",
    quote: "We need to shift planning from something done to students to something done with them.",
    impact: "This tool promotes genuine student agency by facilitating co-planning between students and teachers. It ensures that learning goals are both rigorous and personally meaningful, directly aligning with CIOB's principles of student-centered learning and shared ownership of the educational journey.",
    importance: "True agency comes from understanding where you are and where you're going. This tool gives students the structure to navigate that journey themselves.",
    playlabUrl: "https://www.playlab.ai/project/cmgr3cz0h0020jz0uq57rb45u",
    qrCode: eCoppolaQr,
    photoUrl: eCoppolaPhoto,
    coverImage: ciobLogo,
    coverStyle: 'contain-navy'
  },
  {
    id: "22", // Alexander Dvorak
    bio: "Biology and AI elective teacher of immigrant students in Manhattan. Has taught in Africa and NYC public schools for 30 years. Enjoys singing in a chorus and growing native plants in a community garden.",
    appDescription: "HOT Bot (Higher Order Thinking Thought Partner). An AI colleague designed to help teachers audit and elevate the cognitive rigor of their lessons. Grounded in the Hess Cognitive Rigor Matrix and Internationals Network pedagogy, it helps educators design project-based, language-rich experiences that spark deep thinking for ELL and SLIFE students.",
    summary: "Helps teachers audit and elevate the cognitive rigor of their lessons.",
    quote: "Rigor shouldn't be a casualty of language support. We need to design for intellect, regardless of fluency.",
    impact: "Shifts the cognitive lift from the teacher to the student, fostering genuine intellectual agency. By ensuring that rigorous thinking is accessible to all learners, it moves students from passive compliance to active ownership of their own inquiry and understanding.",
    importance: "It challenges the misconception that English Language Learners can't handle complex thought. By providing concrete, leveled strategies, it ensures that rigor is a constant, not an afterthought.",
    playlabUrl: "https://www.playlab.ai/project/cmh9uqdyr7hnqfr0uwe241n9l",
    qrCode: aDvorakQr,
    photoUrl: aDvorakPhoto
  },
  {
    id: "39", // S. Peters (Sparkle Peters)
    name: "Sparkle Peters",
    bio: "Ed Tech Director and Computer Science teacher at Virtual Innovators Academy, which is an all remote school.",
    appDescription: "EchoSpace. An AI facilitator designed to guide student groups through effective virtual collaboration. It provides light structure and targeted prompts to help teams organize themselves, clarify goals, ensuring participation is even and thinking is co-constructed rather than just divided.",
    summary: "Guides student groups through effective virtual collaboration.",
    quote: "Collaboration is a skill, not a setting. We need to give student teams the structure to manage their own voices so they can focus on the thinking.",
    impact: "This tool fundamentally shifts learning from passive group participation to active, shared ownership. By scaffolding the 'how' of collaboration—resolving conflicts, clarifying roles, and ensuring equitable voice—it allows students to focus their cognitive energy on co-constructing knowledge and reasoning together, rather than getting stuck on logistics.",
    importance: "Group work often fails due to unstructured dynamics. This tool scaffolds the process, ensuring that collaboration supports higher-order thinking and that every student's voice is valued.",
    playlabUrl: "https://www.playlab.ai/project/cmgr2swd93bwpis0vddordmx7",
    qrCode: sPetersQr,
    photoUrl: sPetersPhoto
  },
  {
    id: "17", // Eloi (Eloi Villenueva)
    name: "Eloi Villenueva",
    bio: "Math educator who loves turning numbers into stories and projects. Mixes math, STEM, and creativity so every student sees themselves as a problem-solver. Believes learning should spark curiosity, build confidence, and be fun.",
    appDescription: "Makers in Action. An AI facilitator that helps students plan and execute rigorous maker projects. It guides students through the design thinking process, ensuring their creations are aligned with learning goals while preserving their creative autonomy.",
    summary: "Helps students plan and execute rigorous maker projects, guiding them through the design thinking process.",
    impact: "This tool shifts the focus from efficiency to alignment and depth. Instead of just speeding up the process, it encourages students to design projects that are more tightly aligned with learning goals while pushing them to ask more profound, inquiry-driven questions that drive their making.",
    importance: "Maker projects can sometimes prioritize 'doing' over 'learning'. This tool ensures that the making is grounded in deep inquiry and clear educational objectives.",
    playlabUrl: "https://www.playlab.ai/project/cmh0jdf9m01rpil0uf0uxsx5n",
    qrCode: eVillanuevaQr,
    photoUrl: eVillanuevaPhoto,
    coverImage: eVillanuevaCover,
    coverStyle: 'default'
  },
  {
    id: "28", // Rosa Bonilla
    name: "Rosa Bonilla",
    quote: "Language proficiency should never be a barrier to higher-order thinking or student inquiry.",
    appDescription: "Differentiation with Proficiency Levels in Spanish. An AI assistant for Spanish language education that curates and adapts texts for diverse learners. It provides versions of the same text at multiple proficiency levels (beginner to advanced/heritage), ensuring all students can access age-appropriate, intellectually engaging content regardless of their language background.",
    summary: "Curates and adapts texts for diverse learners at multiple proficiency levels.",
    impact: "Ensures equitable access to rigorous content at School Without Walls. By instantly generating scaffolded versions of authentic texts—along with vocabulary glossaries for beginners and analytical prompts for heritage speakers—it allows the entire class to engage with the same essential ideas and higher-order thinking questions.",
    importance: "True inclusion means everyone accesses the same complex ideas, not watered-down content. This tool makes differentiation manageable, ensuring that language proficiency isn't a barrier to intellectual engagement.",
    playlabUrl: "https://www.playlab.ai/project/cmhzeokrodtfxgf0uoy7jfrt7",
    qrCode: rBonillaQr,
    photoUrl: rBonillaPhoto,
    coverImage: ciobLogo,
    coverStyle: 'contain-navy'
  },
  {
    id: "33", // N. Weber
    name: "Nathan Weber",
    bio: "Teaches AP Physics and Robotics, coaching 3 FTC Robotics teams. Loves playing with his son, hanging out with family, reading, and travelling to Greece in the summer.",
    appDescription: "ThinkPhys: Learn Physics by Thinking Like a Physicist. An AI tutor for AP Physics 1 and C: E&M that guides student reasoning, reveals misconceptions, and leads them step-by-step toward conceptual understanding without simply providing answers.",
    summary: "Guides student reasoning in AP Physics, reveals misconceptions, and leads them step-by-step toward conceptual understanding.",
    quote: "Solving the equation is the easy part. The real work is understanding the physical reality behind it—and that requires conversation, not just calculation.",
    impact: "This tool pushes students beyond procedural fluency to a higher Depth of Knowledge (DOK). It requires them to articulate their reasoning and connect mathematical solutions to physical concepts, ensuring they truly understand the 'why' behind the physics, not just the 'how' of the calculation.",
    importance: "Physics often becomes an exercise in plugging numbers into formulas. This tool insists on conceptual grounding, training students to think like physicists who first understand the system before applying the math.",
    playlabUrl: "https://www.playlab.ai/project/cmh98r1cd5ak3fr0u7yoeoi4t",
    qrCode: nWeberQr,
    photoUrl: nWeberPhoto,
    coverImage: ciobLogo,
    coverStyle: 'contain-navy'
  },
  {
    id: "3", // Christina Crisfield -> Tina Crisfield
    name: "Tina Crisfield",
    bio: "Special education teacher at Bronx Lab School in her 16th year of education. Has taught English, History, Science and Math in special class, ICT and Gen Ed settings. English is her favorite subject because she personally enjoys reading and writing.",
    appDescription: "Emotional Regulation Toolbox. An AI assistant for educators working with students with emotional and learning disabilities. It uses evidence-based frameworks (CBT, Plutchik's Wheel, Restorative Justice) to provide concise strategies for behavioral regulation based on antecedent, behavior, and consequence analysis.",
    summary: "Provides educators working with students with emotional and learning disabilities concise strategies for behavioral regulation.",
    impact: "This tool equips educators with immediate, non-judgmental strategies to de-escalate situations and support student self-regulation. It shifts the focus from punitive measures to restorative practices, helping students return to learning while building emotional resilience.",
    importance: "Managing complex behaviors can be overwhelming. This tool provides real-time, evidence-based support, ensuring that interventions are consistent, inclusive, and focused on the student's long-term social-emotional growth.",
    playlabUrl: "https://www.playlab.ai/project/cmgh0qyyw18ytiq0vf5hpyyz9",
    qrCode: tCrisfieldQr,
    photoUrl: tCrisfieldPhoto,
    coverImage: ciobLogo,
    coverStyle: 'contain-navy'
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

export const programRationale = {
  title: "Program Design and Rationale",
  description: "It is critical to bring in educators from across the network with deep expertise and diverse roles to help shape this work. By centering those closest to the classroom, we increase agency and ensure that AI tools are designed to meet authentic pedagogical needs rather than external mandates."
};

export const programDetails = {
  title: "Program Timeline",
  description: "An intensive journey from concept to pilot, designed for educators ready to push boundaries.",
  timeline: [
    {
      session: "1",
      title: "Foundation & Vision",
      description: "Establish shared vision, responsible AI frameworks, and form cohort teams. Fellows define their initial app concept proposals."
    },
    {
      session: "2",
      title: "Co-Design & Prototyping",
      description: "Deep dive into Playlab design methodology and rapid prototyping. Fellows build initial prototypes and establish testing protocols."
    },
    {
      session: "3",
      title: "Designing with End in Mind",
      description: "Focus on student-facing apps, accessibility, and cognitive load. Integrate student voice and refine tools based on feedback."
    },
    {
      session: "4",
      title: "Implementation & Pilot",
      description: "Prepare for classroom deployment in real contexts. Fellows design implementation guides and troubleshoot challenges."
    },
    {
      session: "5",
      title: "Assessment & Iteration",
      description: "Analyze impact data and evidence-based iteration. Fellows share learnings and create data-driven improvement plans."
    },
    {
      session: "6",
      title: "Trust and Safety Considerations",
      description: "Direct collaboration with Playlab Engineers on advanced features and technical optimization. MVPs ready to share."
    },
    {
      session: "7",
      title: "Evaluation and Feedback",
      description: "Finalize demonstrations and case studies. Focus on demo creation, documentation, and presentation skills."
    },
    {
      session: "8",
      title: "Public Showcase",
      description: "Public presentations of portfolios and implementation strategies. Demonstrate tools and share lessons with the community."
    }
  ],
  images: [
    "@assets/IMG_5922_1768318177323.jpg",
    "@assets/IMG_6404_1768318179239.jpg"
  ]
};
