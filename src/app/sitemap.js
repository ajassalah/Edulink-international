import { allCoursesData } from '@/data/courses';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://edulink.edu.lk';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/about-edulink',
    '/courses',
    '/life-at-edulink',
    '/edulink-news-events',
    '/contact',
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    })),
    ...allCoursesData.map((course) => ({
      url: `${siteUrl}/courses/${course.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
