export const fetchNearCourses = async (): Promise<Record<string, string>[]> => {
	const { getCourses } = window?.contract;
	if (!getCourses) {
		console.log('get courses doesnt');
		return [];
	}
	const courses = await getCourses();
	return courses;
};
export const fetchNearCourse = async (id: string): Promise<string | null> => {
	const { getCourse } = window?.contract;
	if (!getCourse) {
		console.log('get course doesnt');
		return null;
	}
	const course = await getCourse({ id });
	return course;
};

export const addNearCourse = (data: { id: string; course: string; name: string }) => {
	const { addCourse } = window?.contract;
	if (!addCourse) {
		console.log('add course doesnt');
		return;
	}
	if (!data.course) {
		throw new Error('Course needed');
	}
	if (!data.id) {
		throw new Error('id needed');
	}
	console.log({ data });
	return addCourse(data);
};
