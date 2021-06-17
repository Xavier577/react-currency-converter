import React, { FC } from "react";

const ConvertIcon: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div>
      <svg
        className={className}
        width="103"
        height="89"
        viewBox="0 0 103 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M72.2007 14.8841L63.7243 14.9718L64.1769 58.7028L51.4622 58.8344L68.566 73.2359L85.368 58.4834L72.6534 58.6151L72.2007 14.8841ZM17.2547 30.0314L29.9694 29.8998L30.422 73.6307L38.8985 73.543L38.4458 29.812L51.1605 29.6804L34.0567 15.2789L17.2547 30.0314Z"
          fill="#68D1FC"
        />
      </svg>
    </div>
  );
};

export default ConvertIcon;
