import { BUY, Course } from '@/type';

export const fetchNearCourses = async (): Promise<Course[]> => {
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

export const addNearCourse = async (data: { course: Course }) => {
	const { addCourse } = window?.contract;
	if (!addCourse) {
		console.log('add course doesnt');
		return;
	}

	return addCourse(data);
};

export const purchaseNearCourse = async (data: BUY) => {
	const { purchaseCourse } = window?.contract;
	if (!purchaseCourse) {
		console.log('add course doesnt');
		return;
	}

	return purchaseCourse(data);
};
