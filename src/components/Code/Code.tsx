import React from 'react';
import { useNotionContext } from 'react-notion-x';

import { IconCheck, IconCopy } from '@tabler/icons-react';
import clsx from 'clsx';
import copyToClipboard from 'copy-to-clipboard';
import { CodeBlock } from 'notion-types';
import { getBlockTitle } from 'notion-utils';
import { highlightElement } from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-clike.min.js';
import 'prismjs/components/prism-css-extras.min.js';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-js-extras.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-tsx.min.js';
import 'prismjs/components/prism-typescript.min.js';

import { formatName } from '@/utils/formatName';

type Props = {
  block: CodeBlock;
  defaultLanguage?: string;
  className?: string;
};

const Code = ({ block, className, defaultLanguage = 'typescript' }: Props) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const copyTimeout = React.useRef<number | null>(null);
  const { recordMap } = useNotionContext();
  const content = getBlockTitle(block, recordMap);
  const language = (
    block.properties?.language?.[0]?.[0] || defaultLanguage
  ).toLowerCase();

  const codeRef = React.useRef<HTMLElement | null>(null);
  React.useEffect(() => {
    if (codeRef.current) {
      try {
        highlightElement(codeRef.current);
      } catch (err) {
        console.warn('prismjs highlight error', err);
      }
    }
  }, [codeRef]);

  const onClickCopyToClipboard = React.useCallback(() => {
    copyToClipboard(content);
    setIsCopied(true);

    if (copyTimeout.current) {
      clearTimeout(copyTimeout.current);
      copyTimeout.current = null;
    }

    copyTimeout.current = setTimeout(() => {
      setIsCopied(false);
    }, 1200) as unknown as number;
  }, [content, copyTimeout]);

  return (
    <div className="my-1 w-full rounded shadow dark:bg-stone-800">
      <div className="flex items-center justify-between rounded-t bg-stone-200 p-4 dark:bg-stone-900">
        <span>{formatName(language)}</span>
        <button
          onClick={!isCopied ? onClickCopyToClipboard : undefined}
          title="Copy"
        >
          {isCopied ? <IconCheck className="text-green-500" /> : <IconCopy />}
        </button>
      </div>
      <pre
        className={clsx(
          'notion-code m-0 rounded-none rounded-b p-4 dark:bg-stone-800',
          className
        )}
      >
        <code className={`language-${language}`} ref={codeRef}>
          {content}
        </code>
      </pre>
    </div>
  );
};

export default Code;
