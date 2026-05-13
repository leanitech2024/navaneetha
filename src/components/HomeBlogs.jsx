import { allPosts } from '@/lib/markdown';
import HomeBlogsCarousel from './HomeBlogsCarousel';

const HomeBlogs = async () => {
  const posts = await allPosts();

  return (
    <section className='blog-two py-120 bg-main-25'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-book-open' />
            </span>
            <h5 className='text-main-600 mb-0'>Latest News</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>Stay Informed, Stay Inspired</h2>
          <p className=' wow bounceInUp'>
            Welcome to our blog, where we share insights, stories, and updates
            on topics ranging from education
          </p>
        </div>

        <HomeBlogsCarousel posts={posts} />
      </div>
    </section>
  );
};

export default HomeBlogs;
