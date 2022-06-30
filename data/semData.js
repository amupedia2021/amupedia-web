let id1 = 0;
let id2 = 0;
export const firstYearSems = [
	{
		id: id1++,
		name: null,
		subjects: [
			{
				id: id2++,
				name: 'Applied Mathematics 1',
				img: null,
				linkToPage: '/courses/btech/first-year/applied-mathematics-1',
			},
			{
				id: id2++,
				name: 'Applied Chemistry',
				img: null,
				linkToPage: '/courses/btech/first-year',
			},
			{
				id: id2++,
				name: 'Thermodynamics',
				img: null,
				linkToPage: '/courses/btech/first-year',
			},
			{
				id: id2++,
				name: 'Electrical Engineering',
				img: null,
				linkToPage: '/courses/btech/first-year',
			},
			{
				id: id2++,
				name: 'Environmental Studies',
				img: null,
				linkToPage: '/courses/btech/first-year',
			},
			{
				id: id2++,
				name: 'Applied Chemistry Lab',
				img: null,
				linkToPage: '/courses/btech/first-year',
			},
			{
				id: id2++,
				name: 'Computer Programming Lab',
				img: null,
				linkToPage: '/courses/btech/first-year',
			},
			{
				id: id2++,
				name: 'Engineering Graphics',
				img: null,
				linkToPage: '/courses/btech/first-year',
			},
		],
	},
];

export function getSubjectPages(subject) {
	const subjectPages = {
		'applied-mathematics-1': {
			name: 'Applied Mathematics 1',
			bgImg: '/images/btech/firstYear/applied_maths_1.jpg',
			units: [
				{
					unitNo: 1,
					unitName: 'Successive Differentiation and Approximations',
					notes: [
						'https://drive.google.com/drive/u/1/folders/15mzmbugLcfhvDcd8Zc6vP3ZWYLe4Po0CS2zalVHHwzARH7hp4GDVM41L7rfGdBOfn-0aZ34h',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
					],
					videoLectures: [],
					assignments: [],
				},
			],
			shortNotes: [],
			previousPapers: {
				midSem: [],
				endSem: [],
			},
		},
	};

	return subjectPages[subject];
}
