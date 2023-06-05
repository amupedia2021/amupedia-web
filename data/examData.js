export const competitiveExams = [{
    title: "Gate",
    desc: "Information about entry-level examinations and examinations held as needed in particular occupational groups in the General Service and related categories.",
    date: "15/04/2024",
    icon: "/images/exam/gate.svg",
    minQualification: "10+2",
    benefit: "This will get you M Tech"
},
{
    title: "Ssc",
    desc: "Examinations for recruitment at the P-1 and P-2 levels.",
    date: "25/04/2024",
    icon: "/images/exam/ssc.svg",
    minQualification: "Graduation",
    benefit: "This will get you in school service"
},
{
    title: "Mat",
    desc: "Examinations for recruitment at the P-1 and P-2 levels.",
    date: "10/04/2024",
    icon: "/images/exam/mat.svg",
    minQualification: "10+2",
    benefit: "This will get you into MBA"
},
{
    title: "Cat",
    desc: "Information about entry-level examinations and examinations held as needed in particular occupational groups in the General Service and related categories.",
    date: "15/05/2024",
    icon: "/images/exam/cat.svg",
    minQualification: "Graduation",
    benefit: "This will get you into MBA"
}
];


export function getExamDetails(exam) {
    return competitiveExams.filter(item => item.title === exam)[0];
}