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
					notes: ['https://drive.google.com/file/d/13eLpsguDbUkksgOQsfiU-horiUwR_ABj/view','https://drive.google.com/file/d/18lVA1KJT9bFKO3rQOezf5vpHOECxgmE8/view','https://drive.google.com/file/d/14O3haLuwyeLygBmCTfPx4a6z29EeBY4x/view','https://drive.google.com/file/d/1hGtu-ZbQu_aBM2WtOO0ts8Adc9uCQi67/view','https://drive.google.com/file/d/1hGtu-ZbQu_aBM2WtOO0ts8Adc9uCQi67/view','https://drive.google.com/file/d/1ZiWNgNdIor3Si5wSVpexDq5PCj-fzFOU/view','https://drive.google.com/file/d/1ZI1UpXiCsFKP5YbjUdPaJB7T0kEXhodj/view'],
					videoLectures: ['https://www.youtube.com/watch?v=ccaHV-ukK2o&list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG&index=8','https://www.youtube.com/watch?v=iwkFNEWqzgc&list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG&index=10','https://www.youtube.com/watch?v=7a9Yawt1O50&list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG&index=11','https://www.youtube.com/watch?v=rDrQH9ma82o&list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG&index=5','https://www.youtube.com/watch?v=1wjXVdwzgX8&list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG&index=12','https://www.youtube.com/watch?v=THONvuviGkc&list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG&index=18','https://www.youtube.com/watch?v=ZOHMCsdDti0&list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG&index=16'],
					assignments: [],
				},
				{
					unitNo: 2,
					notes: ['https://drive.google.com/file/d/1vbmtRBwEC6YY_d3htllMpH9i2Fyk_6Po/view','https://drive.google.com/file/d/1goL5uQ0czyGRz89rpHwG55kylJ3lryWn/view','https://drive.google.com/file/d/1LnxqI8FrturJnUfS0bpBdf3v4FzWgurz/view','https://drive.google.com/file/d/1J0F_Yh0S0PGy29qLCO6qyT4ub6eEAUhm/view','https://drive.google.com/file/d/1rSuMi4HF0E8DXj7YxqvjjInbbU23sxXQ/view','https://drive.google.com/file/d/1S-5ObF94giWPQQAzdD97JL5qqOPqVS9h/view'],
					videoLectures: ['https://www.youtube.com/watch?v=KijGLjxKlsY&list=PLU6SqdYcYsfLLAU6Hxi0C_TnrZeqgbJMJ&index=1','https://www.youtube.com/watch?v=JinafWKRSLU&list=PLU6SqdYcYsfLLAU6Hxi0C_TnrZeqgbJMJ&index=2','https://www.youtube.com/watch?v=EGnI8WyYb3o&list=PLU6SqdYcYsfLLAU6Hxi0C_TnrZeqgbJMJ&index=3','https://www.youtube.com/watch?v=Ac1mr2WrO-g&list=PLU6SqdYcYsfLLAU6Hxi0C_TnrZeqgbJMJ&index=6','https://www.youtube.com/watch?v=LEspaisjDFE&list=PLU6SqdYcYsfLLAU6Hxi0C_TnrZeqgbJMJ&index=8','https://www.youtube.com/watch?v=WX6O9TiFYsA&list=PLU6SqdYcYsfLLw-QCXT9KAA0mPq-PMfd5&index=1','https://www.youtube.com/watch?v=mco9p6EzR50&list=PLU6SqdYcYsfLLw-QCXT9KAA0mPq-PMfd5&index=2','http://youtube.com/watch?v=CBrIHByAlrw&list=PLU6SqdYcYsfLLw-QCXT9KAA0mPq-PMfd5&index=3','https://www.youtube.com/watch?v=m8lmI6LQyWs&list=PLU6SqdYcYsfLLw-QCXT9KAA0mPq-PMfd5&index=4','https://www.youtube.com/watch?v=CioY8ElsjO4&list=PLU6SqdYcYsfLa93f2pwdASYgPWQMBFBv-&index=1','https://www.youtube.com/watch?v=yhGOx0qhGF0&list=PLU6SqdYcYsfLa93f2pwdASYgPWQMBFBv-&index=2','https://www.youtube.com/watch?v=zLQE8tO5G90&list=PLU6SqdYcYsfLa93f2pwdASYgPWQMBFBv-&index=3','https://www.youtube.com/watch?v=vfg1mmsSMMM&list=PLU6SqdYcYsfJqbZvQECrwnlQrp4fg6isX','https://www.youtube.com/watch?v=9sLsX9DV5Fs&list=PLU6SqdYcYsfJqbZvQECrwnlQrp4fg6isX&index=4','https://www.youtube.com/watch?v=tF4vDQ6X7Kg&list=PLU6SqdYcYsfJqbZvQECrwnlQrp4fg6isX&index=6','https://www.youtube.com/watch?v=S-qzRWJOlf8&list=PLU6SqdYcYsfJqbZvQECrwnlQrp4fg6isX&index=2'],
					assignments: [],
				},
				{
					unitNo: 3,
					notes: ['https://drive.google.com/file/d/1JhMSUpFw2x7xoYRjt22DUPffh7BhAS6W/view','https://drive.google.com/file/d/17vcBE3EyTYTnAGB0wmTZqC7MLsmufBPU/view','https://drive.google.com/file/d/1Zbi0X4ED_hmTaeDTsOSg0oyQnUrGfxcn/view','https://drive.google.com/file/d/1_5l8dGYNCnbxn4Z2ybI7UeuhEGYsILA0/view'],
					videoLectures: ['https://www.youtube.com/watch?v=n4JJ3fNKHUc&list=PLU6SqdYcYsfL7EIZrqNVMyQ5xMbCu18Mf','https://www.youtube.com/watch?v=qwJYHoalErk&list=PLU6SqdYcYsfL7EIZrqNVMyQ5xMbCu18Mf&index=2','https://www.youtube.com/watch?v=LDPGDtxezWs&list=PLU6SqdYcYsfL7EIZrqNVMyQ5xMbCu18Mf&index=3','https://www.youtube.com/watch?v=jCmexnTwxmM','https://www.youtube.com/watch?v=jCmexnTwxmM','https://www.youtube.com/watch?v=x4U4n4DaxZ8&list=PLU6SqdYcYsfK8JhTfv-A1LreCcbMQ0BXF&index=2'],
					assignments: [],
				},
				{
					unitNo: 4,
					notes: ['https://drive.google.com/file/d/1vLxIZYRdnLHr2HJ_c1rFSyCvc4-nxPSI/view','https://drive.google.com/file/d/1NJBygOuWX6av6Uug7VeAzD_R0sol4Iyi/view','https://drive.google.com/file/d/17BWLXEavj_xjI8g0a40Te5tG_U0nV2se/view','https://drive.google.com/file/d/18ZbZIaC-gOZTvzrJDNkWBnwSmK5Vhfnb/view','https://drive.google.com/file/d/1BVkbFJrZz7JJyZd15XJiYQ06uePPvwqu/view','https://drive.google.com/file/d/1WG1-ny1E99wqbX3UtjVRidowknwAerM5/view','https://drive.google.com/file/d/1YaTo1KbxGEpQ8WVoUzuQgFJU3evMZxuH/view'],
					videoLectures: ['https://www.youtube.com/watch?v=vQcThbJJjOI&list=PLU6SqdYcYsfJmqo86d12EoNNWKtAZqu8q&index=48','https://www.youtube.com/watch?v=Qscs_AZTf7c&list=PLU6SqdYcYsfJmqo86d12EoNNWKtAZqu8q&index=3','https://www.youtube.com/watch?v=tHqx1qxA8q4&list=PLU6SqdYcYsfJmqo86d12EoNNWKtAZqu8q&index=4','https://www.youtube.com/watch?v=1HKn9IvYiEM&list=PLU6SqdYcYsfJmqo86d12EoNNWKtAZqu8q&index=6','https://www.youtube.com/watch?v=1HKn9IvYiEM&list=PLU6SqdYcYsfJmqo86d12EoNNWKtAZqu8q&index=6','https://www.youtube.com/watch?v=Qscs_AZTf7c&list=PLU6SqdYcYsfJmqo86d12EoNNWKtAZqu8q&index=3','https://www.youtube.com/watch?v=Y8CF01gbd_U'],
					assignments: [],
				},
			],
			shortNotes: ['https://drive.google.com/file/d/1m6_1lzeY1eWVjgAzULTQEMK3vrIZIeXY/view?usp=sharing','https://drive.google.com/file/d/11pDOfTy1lemlEoYGIsa5Dsqk6OJXefuj/view?usp=sharing'],
			previousPapers: {
				midSem: [],
				endSem: [],
			},
		},
		'applied-chemistry': {
			name: 'Applied Chemistry',
			bgImg: '/images/btech/firstYear/applied_chemistry.jpg',
			units: [
				{
					unitNo: 1,
					notes: [],
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
		'thermodynamics': {
			name: 'Thermodynamics',
			bgImg: '/images/btech/firstYear/applied_chemistry.jpg',
			units: [
				{
					unitNo: 1,
					notes: [],
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
		'electrical-engineering': {
			name: 'Electrical Engineering',
			bgImg: '/images/btech/firstYear/applied_chemistry.jpg',
			units: [
				{
					unitNo: 1,
					notes: [],
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
		'environmental-studies': {
			name: 'Environmental Studies',
			bgImg: '/images/btech/firstYear/applied_chemistry.jpg',
			units: [
				{
					unitNo: 1,
					notes: [],
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
		'applied-chemistry-lab': {
			name: 'Applied Chemistry Lab',
			bgImg: '/images/btech/firstYear/applied_chemistry.jpg',
			units: [
				{
					unitNo: 1,
					notes: [],
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
		'computer-programming-lab': {
			name: 'Computer Programming Lab',
			bgImg: '/images/btech/firstYear/applied_chemistry.jpg',
			units: [
				{
					unitNo: 1,
					notes: [],
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
		'engineering-graphics': {
			name: 'Engineering Graphics',
			bgImg: '/images/btech/firstYear/applied_chemistry.jpg',
			units: [
				{
					unitNo: 1,
					notes: [],
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