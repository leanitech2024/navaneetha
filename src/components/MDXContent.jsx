'use client';

import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/**
 * MDXContent Component
 * Renders markdown/MDX content dynamically
 * @param {string} code - The markdown/MDX code to render
 * @param {Object} customComponents - Optional custom components to override defaults
 */
export default function MDXContent({ code, customComponents = {} }) {
  const defaultComponents = useMDXComponents();
  const components = { ...defaultComponents, ...customComponents };

  const memoizedContent = useMemo(() => {
    if (!code || typeof code !== 'string') {
      return <div className='mdx-empty'>No content to display</div>;
    }

    return (
      <MDXProvider components={components}>
        <div className='mdx-content'>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
            components={components}>
            {code}
          </ReactMarkdown>
        </div>
      </MDXProvider>
    );
  }, [code, components]);

  return memoizedContent;
}
