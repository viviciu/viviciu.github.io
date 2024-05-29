import type { MDXComponents } from "mdx/types"

// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  // Additional Next.js configuration options can go here
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
});

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className='h1-restyled'>{children}</h1>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{width: '100%, height: 'auto}} 
        {...(props as ImageProps)}
        />
    ),
    ...components,
  }
}