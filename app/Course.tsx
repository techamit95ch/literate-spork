'use client';

import Image from 'next/image';
import { shallow } from 'zustand/shallow';

import { useStore } from '@/stores';
import { Course } from '@/type';

const Course = (course: Course) => {
	const buyCourse = useStore((state) => state.buyCourse, shallow);

	return (
		<div className="flex justify-center">
			<div className="rounded-lg shadow-lg bg-white max-w-sm">
				<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
					<Image
						className="rounded-t-lg"
						src={
							course.image.trim() ??
							'https://mdbootstrap.com/img/new/standard/nature/182.jpg'
						}
						alt=""
						loading="lazy"
						width={400}
						height={300}
					/>
				</a>
				<div className="p-6">
					<h5 className="text-gray-900 text-xl font-medium mb-2">{course.name}</h5>
					<p className="text-gray-700 text-base mb-4">
						{course?.owner} {course.id}
					</p>
					<button
						type="button"
						className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						onClick={async () => await buyCourse({ course })}
					>
						Buy {course.price}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Course;
