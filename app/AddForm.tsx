import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Course } from '@/type';

type FormData = Course;
type AddFormProps = {
	submit: SubmitHandler<FormData>;
	loading?: boolean;
	id?: string;
};

const AddForm = ({ submit, loading, id }: AddFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		defaultValues: {
			id,
			name: '',
		},
	});

	const onsubmit: SubmitHandler<Course> = useCallback(
		async (data) => {
			console.log({ data });
			await submit(data);
			reset();
		},
		[reset, submit]
	);

	return (
		<div className="w-full  items-center  flex-col flex  mt-[40px] gap-2 justify-center ">
			<form
				className="w-full  max-w-md self-center justify-self-center flex-col flex items-center  gap-2  border-teal-500 shadow-slate-600 shadow-sm p-8 rounded-sm font-mono font-medium antialiased text-cyan-700"
				onSubmit={handleSubmit(onsubmit)}
			>
				<h4 className="font-black text-left w-full pb-2 border-teal-500 border-b">
					Add Course
				</h4>
				<div className=" w-full  max-w-md flex items-center border-b border-teal-500 py-2 ">
					<input
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Course Id"
						{...register('id', { required: 'id missing' })}
					/>
				</div>
				{errors?.id ? (
					<p className="text-red-500 text-xs italic self-start">{errors?.id?.message}</p>
				) : null}
				<div className=" w-full  max-w-md flex items-center border-b border-teal-500 py-2 ">
					<input
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Course Name"
						aria-label="Full name"
						{...register('name', {
							required: 'Course missing',
						})}
					/>
				</div>
				{errors?.name ? (
					<p className="text-red-500 text-xs italic self-start">
						{errors?.name?.message}
					</p>
				) : null}
				<div className=" w-full  max-w-md flex items-center border-b border-teal-500 py-2 ">
					<input
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Course Price"
						aria-label="Full Price"
						{...register('price', {
							required: 'Price missing',
						})}
					/>
				</div>
				{errors?.price ? (
					<p className="text-red-500 text-xs italic self-start">
						{errors?.price?.message}
					</p>
				) : null}
				<div className=" w-full  max-w-md flex items-center border-b border-teal-500 py-2 ">
					<input
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Course Image"
						aria-label="Full Image"
						{...register('image', {
							required: 'Image missing',
						})}
					/>
				</div>
				{errors?.image ? (
					<p className="text-red-500 text-xs italic self-start">
						{errors?.image?.message}
					</p>
				) : null}

				<div className="w-full  max-w-md flex items-center flex-row gap-2 ">
					<button
						className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded  shadow-slate-400 shadow"
						type="submit"
					>
						{loading ? 'Loading' : 'Add Course'}
					</button>

					<button
						className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded shadow-slate-400 shadow"
						type="reset"
						onClick={() => reset}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddForm;
