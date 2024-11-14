import { BlogsType } from '@/interfaces/blog.interface';
import { CategoryType } from '@/interfaces/categories.interface';
import Layout from '@/layout/Layout';
import { BlogsService } from '@/services/blog.servise';
import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import { Content, Hero, Sidebar } from 'src/components';


const BlogPage = ({ blogs, latestBlogs, categories }:  HomePageProps) => {
	return (
		
		<Layout>
		<Hero blogs={blogs.slice(0, 3)} />
		<Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
			<Sidebar latestBlogs={latestBlogs} categories={categories} />
			<Content blogs={blogs} />
		</Box>
	</Layout>
		
	);
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
	const blogs = await BlogsService.getAllBLogs();
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

interface HomePageProps {
	blogs: BlogsType[];
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}
