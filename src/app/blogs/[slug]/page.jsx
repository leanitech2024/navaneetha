// import BlogDetailsInner from '@/components/BlogDetailsInner';
import Breadcrumb from '@/components/Breadcrumb';
import CertificateOne from '@/components/CertificateOne';
import MDXContent from '@/components/MDXContent';
import Animation from '@/helper/Animation';
import { allPosts, getPostBySlug } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const posts = await allPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// export const dynamicParams = false;

export async function generateMetadata({ params }, parent) {
  // read route params
  const { slug } = await params;

  // fetch data
  const post = await getPostBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${post.metadata.title} | Navaneetha Education Trust`,
    description: post.metadata.summary,
    // openGraph: {
    //   images: [post.metadata.image, ...previousImages],
    // },
  };
}

export default async function BlogPage({ params }) {
  const slug = await params.slug;

  if (!slug) {
    return notFound();
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <Animation />

      {/* Breadcrumb */}
      <Breadcrumb title={'Blog Details'} />

      {/* BlogDetailsInner */}
      <BlogDetailsInner post={post} />

      {/* CertificateOne */}
      <CertificateOne />
    </main>
  );
}

const BlogDetailsInner = async ({ post }) => {
  const lastThreePosts = await allPosts().then((posts) => posts.slice(0, 3));

  const popularTags = post.metadata.categories.reduce((acc, category) => {
    if (!acc.includes(category)) {
      acc.push(category);
    }
    return acc;
  }, []);

  return (
    <main className='blog-page-section py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <article className='col-lg-8'>
            <div className='bg-main-25 rounded-16 p-12 border border-neutral-30'>
              <div className='rounded-12 overflow-hidden position-relative'>
                <img
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className='rounded-12 cover-img transition-2'
                />
                <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium'>
                  <p className='mb-0 text-white fw-medium'>
                    {new Date(post.metadata.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <div className='flex-align gap-14 flex-wrap mb-20'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-user-circle' />
                    </span>
                    <span className='text-neutral-500 text-lg'>
                      By {post.metadata.author}
                    </span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph-bold ph-eye' />
                    </span>
                    <span className='text-neutral-500 text-lg'>1.6k</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-chat-dots' />
                    </span>
                    <span className='text-neutral-500 text-lg'>24</span>
                  </div>
                </div>

                <MDXContent code={post.content} />
              </div>
            </div>
          </article>
          <aside className='col-lg-4'>
            {/* Related Blogs */}
            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25 mt-24'>
              <h4 className='mb-16'>More Related Blogs</h4>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              {lastThreePosts.map((post) => (
                <Fragment key={post.metadata.slug}>
                  <div className='flex-align gap-16'>
                    <Link
                      href={`/blogs/${post.metadata.slug}`}
                      className='flex-shrink-0'>
                      <img
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        className='w-80 h-80 rounded-8 object-fit-cover'
                      />
                    </Link>
                    <div className='flex-grow-1'>
                      <h6 className='text-xl mb-10'>
                        <Link
                          href={`/blogs/${post.metadata.slug}`}
                          className='hover-text-main-600 text-line-2'>
                          {post.metadata.title}
                        </Link>
                      </h6>
                      <span className='text-neutral-500'>
                        {new Date(post.metadata.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <span className='d-block border border-neutral-30 my-24 border-dashed' />
                </Fragment>
              ))}

              <Link
                href='/blogs'
                className='h6 mb-0 text-main-600 fw-semibold hover-text-decoration-underline'>
                See All
                <i className='ph-bold ph-arrow-right' />
              </Link>
            </div>

            {/* Popular Tag */}
            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25 mt-24'>
              <h4 className='mb-16'>Popular Tag</h4>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <div className='flex-align flex-wrap gap-8'>
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    href='/blogs'
                    className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 hover-text-main-600'>
                    {tag}
                  </Link>
                ))}
              </div>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <Link
                href='/blogs'
                className='h6 mb-0 text-main-600 fw-semibold hover-text-decoration-underline'>
                See All
                <i className='ph-bold ph-arrow-right' />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};
