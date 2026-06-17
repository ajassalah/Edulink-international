import { getCourseBySlug } from '@/data/courses';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: 'Course Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: course.title,
    description: course.description,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.image],
    },
  };
}

export default function CourseDetailLayout({ children }) {
  return children;
}
