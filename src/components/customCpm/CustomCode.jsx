import React, { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HiCheckCircle, HiClipboard } from "@/components/iconCpm";

export function Pre(props) {
  return (
    <pre {...props}>
      {props.children}
      <style jsx>{`
        pre {
          position: relative;
          padding-top: 2.5rem;
        }
      `}</style>
    </pre>
  );
}

export default function CustomCode(props) {
  const textRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const language = props.className?.includes("language")
    ? props.className.replace("language-", "").replace(" code-highlight", "")
    : null;

  return (
    <code {...props} data-code-type={language && "code-block"}>
      {language ? (
        <div ref={textRef} className="overflow-x-auto">
          {props.children}
        </div>
      ) : (
        <span>{props.children}</span>
      )}

      {language && (
        <div className="absolute top-0 px-3 py-1 border border-t-0 border-gray-600 left-6 rounded-b-md">
          <span className="font-medium text-white select-none bg-gradient-to-tr from-primary-300 to-primary-400 bg-clip-text">
            {language}
          </span>
        </div>
      )}
      {language && (
        <CopyToClipboard
          text={textRef.current?.textContent ?? ""}
          onCopy={() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
          }}
        >
          <button className="absolute block p-2 text-lg transition-colors border border-gray-600 rounded top-2 right-2 hover:bg-gray-700">
            {isCopied ? (
              <HiCheckCircle className="text-green-400" />
            ) : (
              <HiClipboard />
            )}
          </button>
        </CopyToClipboard>
      )}
    </code>
  );
}
