export const competitiveExams = [{
    title: "GATE",
    desc: "Information about entry-level examinations and examinations held as needed in particular occupational groups in the General Service and related categories.",
    date: "15/04/2024",
    icon: "/images/exam/gate.svg",
    minQualification: "10+2",
    benefit: "This will get you M Tech"
},
{
    title: "SSC",
    desc: "Examinations for recruitment at the P-1 and P-2 levels.",
    date: "25/04/2024",
    icon: "/images/exam/ssc.svg",
    minQualification: "Graduation",
    benefit: "This will get you in school service"
},
{
    title: "MAT",
    desc: "Examinations for recruitment at the P-1 and P-2 levels.",
    date: "10/04/2024",
    icon: "/images/exam/mat.svg",
    minQualification: "10+2",
    benefit: "This will get you into MBA"
},
{
    title: "CAT",
    desc: "Information about entry-level examinations and examinations held as needed in particular occupational groups in the General Service and related categories.",
    date: "15/05/2024",
    icon: "/images/exam/cat.svg",
    minQualification: "Graduation",
    benefit: "This will get you into MBA"
},
{
    title: "CUET",
    desc: " A single examination will enable the Candidates to cover a wide outreach and be part of the admissions process to various Central Universities.",
    date: "10/04/2025",
    icon: "/images/exam/mat.svg",
    minQualification: "Graduation",
    benefit: "The Common University Entrance Test (CUET) will provide a common platform and equal opportunities to candidates across the country"
},
{
    title: "UGC",
    desc: "University Grants Commission.",
    date: "15/05/2024",
    icon: "/images/exam/cat.svg",
    minQualification: "Graduation",
    benefit: "This is a Test to determine the eligibility of Indian nationals for ‘Assistant Professor’ as well as ‘Junior Research Fellowship and Assistant Professor’ in Indian Universities and Colleges."
}
];


export function getExamDetails(exam) {
    return competitiveExams.filter(item => item.title === exam)[0];
}