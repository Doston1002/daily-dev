import { BlogsType } from '@/interfaces/blog.interface';
import { CategoryType } from 'src/interfaces/categories.interface';

export interface SidebarProps {
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}