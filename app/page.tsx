'use client';

import { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import AddForm from './AddForm';
import Course from './Course';

import { Course as CourseType } from '@/type';
import { addNearCourse, fetchNearCourses } from '@/utils';

export default function Home() {
	const { isLoading, data, refetch } = useQuery('todos', fetchNearCourses);

	const { isLoading: loading, mutate } = useMutation(addNearCourse, {
		onSuccess: async () => {
			await refetch();
		},
		onError: async (err) => {
			console.log(err);
		},
	});

	const submit: SubmitHandler<CourseType> = useCallback(
		async (data) => {
			mutate({ course: data });
		},
		[mutate]
	);
	return (
		<>
			<div className="bg-white  w-full">
				<AddForm
					submit={submit}
					loading={loading || isLoading}
					id={data?.length?.toString()}
				/>
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">
						Customers also purchased
					</h2>
					<div className="py-4 flex flex-row flex-wrap gap-3">
						{data?.map((data, index) => (
							<Course
								key={index.toString()}
								name={data.name}
								id={data.id}
								price={data.price}
								owner={data.owner}
								image={data.image}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
