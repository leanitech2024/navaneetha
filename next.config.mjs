// const { withContentCollections } = require('@content-collections/next');
import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});

export default withMDX(nextConfig);
// module.exports = withContentCollections(nextConfig);
