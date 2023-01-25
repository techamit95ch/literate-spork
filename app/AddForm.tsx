import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
	id: string;
	course: string;
	name: string;
};
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
		setValue,
	} = useForm<FormData>({
		defaultValues: {
			id,
			course: '',
			name: '',
		},
	});

	return (
		<form
			className="w-full  max-w-md self-center justify-self-center flex-col flex p-2 items-center mt-[40px]"
			onSubmit={handleSubmit(submit)}
		>
			<div className=" w-full  max-w-md flex items-center border-b border-teal-500 py-2 ">
				<input
					className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					placeholder="Course Id"
					{...register('id', { required: 'id missing' })}
				/>
				<input
					className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					placeholder="Course Name"
					aria-label="Full name"
					{...register('course', {
						required: 'Course missing',
						onChange(event) {
							setValue('name', event.target.value);
						},
					})}
					// {...register('name', { required: 'Name missing' })}
				/>

				<button
					className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
					type="submit"
				>
					{loading ? 'Loading' : 'Add Course'}
				</button>
				<button
					className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
					type="reset"
					onClick={() => reset}
				>
					Cancel
				</button>
			</div>
			{errors ? (
				<p className="text-red-500 text-xs italic self-start">
					{errors?.course?.message || errors?.name?.message || errors?.id?.message}
				</p>
			) : null}
		</form>
	);
};

export default AddForm;
