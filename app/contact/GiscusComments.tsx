'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

export default function GiscusComments() {
  const { resolvedTheme } = useTheme();
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://giscus.app/client.js';
    scriptElement.async = true;
    scriptElement.crossOrigin = 'anonymous';
    scriptElement.setAttribute('data-repo', 'giankbr/porto2025');
    scriptElement.setAttribute('data-repo-id', 'R_kgDOOXKQ-w');
    scriptElement.setAttribute('data-category', 'General');
    scriptElement.setAttribute('data-category-id', 'DIC_kwDOOXKQ-84Co9sp');
    scriptElement.setAttribute('data-mapping', 'pathname');
    scriptElement.setAttribute('data-strict', '0');
    scriptElement.setAttribute('data-reactions-enabled', '1');
    scriptElement.setAttribute('data-emit-metadata', '0');
    scriptElement.setAttribute('data-input-position', 'top');
    scriptElement.setAttribute('data-theme', theme);
    scriptElement.setAttribute('data-lang', 'en');

    const commentDiv = commentRef.current;
    if (commentDiv) {
      commentDiv.innerHTML = '';
      commentDiv.appendChild(scriptElement);
    }

    return () => {
      if (commentDiv && scriptElement.parentNode === commentDiv) {
        commentDiv.removeChild(scriptElement);
      }
    };
  }, [resolvedTheme]);

  return <div className="giscus-comments w-full" ref={commentRef} />;
}
