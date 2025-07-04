// File: src/contentful-utilities.js

// This module provides utility functions to interact with Contentful rich text fields
// and extract text content from them.
function readRichText(richText) {
  if (!richText || !richText.content) return '';

  // Helper to recursively extract text from nodes
  function extractText(nodes) {
    return nodes.map(node => {
      if (node.nodeType === 'text') {
        return node.value || '';
      }
      if (node.nodeType === 'hyperlink' && node.content) {
        // Extract text from hyperlink content
        return extractText(node.content);
      }
      if (node.content) {
        // Recursively extract text from other node types
        return extractText(node.content);
      }
      return '';
    }).join('');
  }

  // Extract text from each paragraph
  return richText.content
    .filter(item => item.nodeType === 'paragraph')
    .map(paragraph => extractText(paragraph.content))
    .join('\n');
}

export default readRichText;