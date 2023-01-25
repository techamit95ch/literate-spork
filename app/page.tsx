'use client';

import { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';

import AddForm from './AddForm';
import Course from './Course';

import { addNearCourse, fetchNearCourses } from '@/utils';

type FormData = {
	id: string;
	course: string;
	name: string;
};

export default function Home() {
	const { isLoading, data, refetch } = useQuery('todos', fetchNearCourses);

	const submit: SubmitHandler<FormData> = useCallback(
		async (data) => {
			await addNearCourse(data);
			refetch();
		},
		[refetch]
	);

	return (
		<>
			<div className="bg-white  w-full">
				<AddForm submit={submit} loading={isLoading} id={data?.length?.toString()} />
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">
						Customers also purchased
					</h2>
					{data?.map((data, index) => (
						<Course key={index.toString()} name={data.value} id={data.key} />
					))}
				</div>
			</div>
		</>
	);
}
