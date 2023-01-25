'use client';

import Image from 'next/image';
// import { shallow } from 'zustand/shallow';

// import { useStore } from '@/stores';

const Course = (course: { name: string; id: string }) => {
	// const course = useStore((state) => state.course, shallow);

	return (
		<div className="flex justify-center">
			<div className="rounded-lg shadow-lg bg-white max-w-sm">
				<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
					<Image
						className="rounded-t-lg"
						src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
						alt=""
						loading="lazy"
						width={400}
						height={300}
					/>
				</a>
				<div className="p-6">
					<h5 className="text-gray-900 text-xl font-medium mb-2">{course.name}</h5>
					<p className="text-gray-700 text-base mb-4">
						Some quick example text to build on the card title and make up the bulk of
						the {course.id}
					</p>
					<button
						type="button"
						className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Button
					</button>
				</div>
			</div>
		</div>
	);
};

export default Course;
