'use client';

import React from 'react';

function HighlightText({ text, highlight }) {
  if (!text) {
    return null;
  }

  const query = highlight.trim();
  if (!query) {
    return <>{text}</>;
  }

  // Escape special characters in the query for the regex
  const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? <mark key={i} className="bg-blue-500/30 text-blue-300 rounded px-1 py-0.5">{part}</mark> : part
      )}
    </>
  );
}

export default HighlightText;

