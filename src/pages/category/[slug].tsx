import { BlogsType } from '@/interfaces/blog.interface';
import Layout from '@/layout/Layout';
import SEO from '@/layout/seo/seo';
import { BlogsService } from '@/services/blog.servise';
import { Box } from '@mui/material';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Content, Sidebar } from 'src/components';

import { CategoryType } from 'src/interfaces/categories.interface';


const CategoryDetailedPage = ({ blogs, latestBlogs, categories }: DetailedCategoriesPageProps) => {
	const router = useRouter();
    return (
        <SEO metaTitle={`${router.query.slug}-category`}>

      
		<Layout>
			<Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
				<Sidebar latestBlogs={latestBlogs} categories={categories} />
				<Content blogs={blogs} />
			</Box>
		</Layout>
        </SEO>
	);
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<DetailedCategoriesPageProps> = async ({ query }) => {
	const blogs = await BlogsService.getDetaieldCateogriesBlog(query.slug as string);
	const latestBlogs = await BlogsService.getLatestBlog();
	const categories = await BlogsService.getCategories();

	return {
		props: {
			blogs,
			latestBlogs,
			categories,
		},
	};
};

interface DetailedCategoriesPageProps {
	blogs: BlogsType[];
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}