'use server';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';

const schema = z.object({
  title: z.string(),
  slug: z.string(),
  image: z.string(),
  summary: z.string(),
  categories: z.array(z.string()),
  author: z.string(),
  createdAt: z.string(),
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Parse YAML frontmatter from MDX content
 * @param {string} content - The full MDX content with frontmatter
 * @returns {Object} { metadata, content }
 */
function parseFrontmatter(content) {
  // Normalize line endings (convert \r\n to \n)
  const normalizedContent = content.replace(/\r\n/g, '\n');

  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = normalizedContent.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content: normalizedContent };
  }

  const frontmatterText = match[1];
  const mdxContent = match[2];

  // Parse YAML frontmatter
  const metadata = {};
  const lines = frontmatterText.split('\n');

  for (const line of lines) {
    if (!line.trim()) continue;

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    // Handle array values like ['item1', 'item2']
    if (value.startsWith('[') && value.endsWith(']')) {
      const arrayContent = value.slice(1, -1);
      metadata[key] = arrayContent
        .split(',')
        .map((item) => item.trim().replace(/^['"]|['"]$/g, ''));
    }
    // Handle string values with quotes
    else if (
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith('"') && value.endsWith('"'))
    ) {
      metadata[key] = value.slice(1, -1);
    }
    // Handle unquoted values
    else {
      metadata[key] = value;
    }
  }

  return { metadata, content: mdxContent.trim() };
}

/**
 * Read all posts from contents/posts folder
 * @returns {Promise<Array>} Array of post objects with metadata and content
 */
export async function allPosts() {
  const postsDirectory = path.join(__dirname, '..', 'contents', 'posts');

  // Read all files in the posts directory
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'));

  const posts = files.map((file) => {
    const filePath = path.join(postsDirectory, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { metadata, content: mdxContent } = parseFrontmatter(raw);

    // Validate frontmatter using Zod schema
    const validation = schema.safeParse(metadata);
    if (!validation.success) {
      // Provide a helpful error pointing to the problematic file
      const formatted = validation.error.format();
      throw new Error(
        `Invalid frontmatter in ${file}: ${JSON.stringify(formatted, null, 2)}`,
      );
    }

    const parsedMetadata = validation.data;

    return {
      slug: parsedMetadata.slug || file.replace('.mdx', ''),
      metadata: parsedMetadata,
      content: mdxContent,
    };
  });

  // Sort by createdAt date (newest first)
  posts.sort((a, b) => {
    const dateA = new Date(a.metadata.createdAt || 0);
    const dateB = new Date(b.metadata.createdAt || 0);
    return dateB - dateA;
  });

  return posts;
}

/**
 * Get a single post by slug
 * @param {string} slug - The post slug
 * @returns {Promise<Object|null>} Post object or null if not found
 */
export async function getPostBySlug(slug) {
  const posts = await allPosts();
  return posts.find((post) => post.metadata.slug === slug) || null;
}
