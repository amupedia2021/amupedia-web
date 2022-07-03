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
					notes: ['https://drive.google.com/file/d/1W9u4rnFNwlXOEDoPeNF7MzoXnQqe2_jL/view?usp=sharing'],
					videoLectures: ['https://www.youtube.com/playlist?list=PLQvzPLYdJBGcGyREMkipXypbrwjJoJIpj'],
					assignments: [],
				},
				{
					unitNo: 2,
					notes: ['https://drive.google.com/file/d/1GqwnQ7mwrpKPC1UoxVhnpJUQMxtkLkIV/view?usp=sharing'],
					videoLectures: ['https://www.youtube.com/playlist?list=PLQvzPLYdJBGcodM-2_TvUUR1L5VJUBbdc'],
					assignments: [],
				},
				{
					unitNo: 3,
					notes: ['https://drive.google.com/file/d/1LcYa2aoOuzINfSnO1dIGoiuJWKkJPlvp/view?usp=sharing'],
					videoLectures: ['https://www.youtube.com/playlist?list=PLQvzPLYdJBGfoWZK9G7uiWlFHdZ2Xg2ZN'],
					assignments: [],
				},
				{
					unitNo: 4,
					notes: ['https://drive.google.com/file/d/1daEW95k74std5L_UCqNw6cqYtobVIGjo/view?usp=sharing'],
					videoLectures: ['https://www.youtube.com/playlist?list=PLzSTglXGeoUuhXb4czCE_0fA2tQPA1yEk'],
					assignments: [],
				},
			],
			
		},

		'thermodynamics': {
			name: 'Thermodynamics',
			bgImg: '/images/btech/firstYear/applied_chemistry.jpg',
			units: [
				{
					unitNo: 1,
					notes: ['https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_3be56cb6d5cb4e64bcafb3376bcc6f40.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_625940c5579a45db8b76d20e8b2a1a09.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_3be56cb6d5cb4e64bcafb3376bcc6f40.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_23813a5e14344b60a01424c6ede1ae41.pdf'],
					videoLectures: [],
					assignments: [],
				},
				{
					unitNo: 2,
					notes: ['https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_5e144883b46d41dabae4b30cd53c8d68.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_92ec02e6a4b045cb9d1f6d10c4257652.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_6753b6da0dae4ca48407e96236a4efdb.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_4d2801b0b9d9410db8c9160f2f6748c4.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_cbb1660c46e64c2bb0561b025bb01783.pdf'],
					videoLectures: [],
					assignments: [],
				},
				{
					unitNo: 3,
					notes: ['https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_8f131fda4bd64869af38ea33311cf006.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_3d7e78cf5b8e4984b363b96595bf9026.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_ce431275298f4269bf5c8194b34665e1.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_0d8eeff7c22d43d795cd7a8869513f78.pdf'],
					videoLectures: [],
					assignments: [],
				},
				{
					unitNo: 4,
					notes: ['https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_8a7949ed702c484b861d5e6cb9fff1bc.pdf'],
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
					notes: ['https://drive.google.com/file/d/1IQoMJnfucIDOMGNlq8AF10ltgrLUSMgj/view?usp=sharing'],
					videoLectures: ['https://drive.google.com/file/d/1tQd4vO5hXxcZxcCqXzFKc8BSe6hik1CL/view?usp=sharing','https://drive.google.com/file/d/13Zx3TsI1A6G-S9Ojote6veVe6H700_Ga/view?usp=sharing','https://drive.google.com/file/d/1aIrOjNg8ICf544L9C5ILOX287m2UIQbo/view?usp=sharing','https://drive.google.com/file/d/1BN_nvHqlqtLmssEKpRg7pRTdLq2hrUp1/view?usp=sharing','https://drive.google.com/file/d/1erf7HXpkzn2N4gRG87Z-NqqxA6O2A2sE/view?usp=sharing','https://drive.google.com/file/d/1Ip3w02z1_IOrpPuv7JnMbXFYdQ-JTXxS/view?usp=sharing','https://drive.google.com/file/d/14iHn-ZvdGHlUmFAso4TI2KpWzxh5SZKn/view?usp=sharing','https://www.youtube.com/watch?v=k_FqhE0uNEU&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&index=21','https://www.youtube.com/watch?v=HKRFX7AtYig&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&index=22','https://www.youtube.com/watch?v=aS5bkOMZRIs&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&index=23','https://www.youtube.com/watch?v=pTkNXgGXCjo&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&index=24','https://drive.google.com/file/d/1b-5ynWooYSh9kfD9V5UtCg3BOeE9iBoG/view'],
					assignments: [],
				},
				{
					unitNo: 2,
					notes: ['https://drive.google.com/file/d/1oypMde_kDrSglXxcfPlt3Fuvavd7g1Y8/view?usp=sharing','https://drive.google.com/file/d/1gexZRxfDna4zRN85vVKcQi7iyeUyugYE/view?usp=sharing','https://drive.google.com/file/d/1R-is9kXcOCxpo1qHCjMuv68SsR9YtNLZ/view?usp=sharing'],
					videoLectures: ['https://www.youtube.com/watch?v=-V87ANqaHD4&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&index=27','https://www.youtube.com/watch?v=UdaDs-zKfsA&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&index=28','https://www.youtube.com/watch?v=cw9f33jLkd4&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&index=29','https://www.youtube.com/watch?v=_RJRbGOAeok&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&index=32','https://www.youtube.com/watch?v=vh_aCAHThTQ','https://www.youtube.com/watch?v=TvMLBLprbXo'],
					assignments: [],
				},
				{
					unitNo: 3,
					notes: ['https://drive.google.com/file/d/1gexZRxfDna4zRN85vVKcQi7iyeUyugYE/view?usp=sharing','https://drive.google.com/file/d/17hkomnLb1FvjTIaKH795Yq0GmQGpb92B/view?usp=sharing','https://drive.google.com/file/d/1_OPcN-T6cXpj7xU3LQbmPfohBVlboNny/view?usp=sharing','https://drive.google.com/file/d/1CiFJ4bVFPXrbtCzWgD65B_xmQI4QB8Ul/view?usp=sharing'],
					videoLectures: ['https://www.youtube.com/watch?v=AQqyGNOP_3o','https://www.youtube.com/watch?v=knuH97y6WrQ','https://www.youtube.com/watch?v=Y7_zKCnGgsI'],
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
					notes: ['https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_6ba30303d6004f9da680e1840769cf52.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_1d5f20344ac646a4964414d321962358.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_5acea1d75cfc43129b90df195b1fd984.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_dbc12d07f6d34d72919e2f7c25c6aee4.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_b7da4d5338734e41b2d4fd1ec7546e66.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_a10f8861fbcf48a19118b14106c6ed5e.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_38b2cc6559534ebc93fd54e5b6ae4bf6.pdf'],
					videoLectures: [],
					assignments: [],
				},
				{
					unitNo: 2,
					notes: ['https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_5262d5051dc94919871cd8ddfb798884.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_6ea016d27e8746059cabcb9e627481e7.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_06e49ddc353f4b5882aab5eda31e3804.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_537d9bc8c71342ed8fe40d65164ac864.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/42f86e_9be785138bc44608a25c2c68ba5ce7ed.pdf'],
					videoLectures: [],
					assignments: [],
				},
				{
					unitNo: 3,
					notes: ['https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_d9b16af3833c4c3f914404aa3cc11adf.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_1e2a3fa6dc4f4f18b47eed9bc82d2a91.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_1b236bc9956f435393b178cbaccc90c6.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_46f8e0faddcc481fad658ff4340b06b8.pdf','https://27c5e116-11a7-4dd8-87e8-9b8b77ba7ba5.filesusr.com/ugd/3d609f_a8cbf0261250418e99d2b2b606ee03e5.pdf'],
					videoLectures: [],
					assignments: [],
				},
			],
			shortNotes: [],
			previousPapers: {
				midSem: ['https://drive.google.com/drive/folders/1PLy-bYg-Uje9Rhq3HRcvExVRtP2COSrQ?usp=sharing'],
				endSem: [],
			},
		},
		'applied-chemistry-lab': {
			name: 'Applied Chemistry Lab',
			bgImg: '/images/btech/firstYear/applied_chemistry.jpg',
			units: [
				{
					unitNo: 1,
					notes: ['https://drive.google.com/file/d/1_uTaUAaeCE8J0T5N3Z_au9AwQ7LBBNvu/view?usp=sharing'],
					videoLectures: ['https://youtu.be/Sm4RubV1gCw'],
					assignments: [],
				},
				{
					unitNo: 1,
					notes: [],
					videoLectures: [],
					assignments: [],
				},
				{
					unitNo: 1,
					notes: [],
					videoLectures: [],
					assignments: [],
				},
				{
					unitNo: 1,
					notes: [],
					videoLectures: [],
					assignments: [],
				},
				{
					unitNo: 1,
					notes: [],
					videoLectures: [],
					assignments: [],
				},
				{
					unitNo: 1,
					notes: [],
					videoLectures: [],
					assignments: [],
				},
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