import React, { FC } from "react";

const Coins: FC<{ className?: string }> = ({ className }) => {
  return (
    <div>
      <svg
        className={className}
        width="365"
        height="262"
        viewBox="0 0 365 262"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M134.658 128.054C156.383 128.054 173.996 111.28 173.996 90.5891C173.996 69.8978 156.383 53.1242 134.658 53.1242C112.932 53.1242 95.3198 69.8978 95.3198 90.5891C95.3198 111.28 112.932 128.054 134.658 128.054Z"
          fill="#68D1FC"
        />
        <path
          d="M134.658 128.932C126.695 128.933 118.91 126.686 112.288 122.474C105.666 118.262 100.505 112.274 97.4562 105.268C94.4076 98.2621 93.6091 90.5524 95.1615 83.1141C96.7138 75.6758 100.547 68.843 106.177 63.4798C111.808 58.1167 118.981 54.464 126.791 52.9839C134.601 51.5037 142.696 52.2625 150.053 55.1643C157.41 58.0661 163.698 62.9806 168.122 69.2862C172.547 75.5918 174.908 83.0052 174.908 90.5891C174.896 100.753 170.652 110.498 163.106 117.686C155.561 124.873 145.33 128.918 134.658 128.932ZM134.658 53.9933C127.055 53.9916 119.623 56.1371 113.301 60.1586C106.979 64.1801 102.052 69.8969 99.1414 76.5858C96.2312 83.2748 95.4693 90.6354 96.9521 97.7368C98.4348 104.838 102.095 111.361 107.471 116.481C112.847 121.601 119.696 125.087 127.153 126.499C134.609 127.911 142.338 127.186 149.361 124.414C156.384 121.643 162.387 116.95 166.609 110.929C170.832 104.908 173.085 97.8295 173.083 90.5891C173.071 80.8868 169.019 71.5852 161.815 64.7246C154.612 57.8641 144.845 54.0048 134.658 53.9933Z"
          fill="#093F68"
        />
        <path
          d="M230.342 128.054C252.068 128.054 269.68 111.28 269.68 90.5891C269.68 69.8978 252.068 53.1242 230.342 53.1242C208.617 53.1242 191.005 69.8978 191.005 90.5891C191.005 111.28 208.617 128.054 230.342 128.054Z"
          fill="#68D1FC"
        />
        <path
          d="M230.342 128.932C222.379 128.933 214.595 126.686 207.973 122.474C201.351 118.262 196.189 112.274 193.141 105.268C190.092 98.2621 189.294 90.5524 190.846 83.1141C192.399 75.6758 196.232 68.843 201.862 63.4798C207.492 58.1167 214.666 54.464 222.476 52.9839C230.285 51.5037 238.381 52.2625 245.738 55.1643C253.095 58.0661 259.383 62.9806 263.807 69.2862C268.231 75.5918 270.593 83.0052 270.593 90.5891C270.583 100.754 266.34 110.5 258.794 117.688C251.248 124.877 241.015 128.92 230.342 128.932ZM230.342 53.9933C222.74 53.9916 215.308 56.1371 208.986 60.1586C202.664 64.1801 197.736 69.8969 194.826 76.5858C191.916 83.2748 191.154 90.6354 192.637 97.7368C194.12 104.838 197.78 111.361 203.156 116.481C208.532 121.601 215.381 125.087 222.837 126.499C230.294 127.911 238.022 127.186 245.046 124.414C252.069 121.643 258.072 116.95 262.294 110.929C266.517 104.908 268.77 97.8295 268.768 90.5891C268.756 80.8868 264.703 71.5852 257.5 64.7246C250.296 57.8641 240.53 54.0048 230.342 53.9933Z"
          fill="#093F68"
        />
        <path
          d="M134.658 208.876C156.383 208.876 173.996 192.102 173.996 171.411C173.996 150.72 156.383 133.946 134.658 133.946C112.932 133.946 95.3198 150.72 95.3198 171.411C95.3198 192.102 112.932 208.876 134.658 208.876Z"
          fill="#68D1FC"
        />
        <path
          d="M134.658 209.745C126.694 209.747 118.909 207.499 112.287 203.287C105.665 199.074 100.504 193.086 97.4553 186.079C94.407 179.073 93.609 171.363 95.1621 163.924C96.7153 156.486 100.55 149.653 106.181 144.29C111.812 138.927 118.986 135.275 126.796 133.796C134.607 132.317 142.703 133.077 150.059 135.98C157.416 138.883 163.704 143.799 168.127 150.106C172.55 156.412 174.91 163.827 174.908 171.411C174.896 181.574 170.651 191.318 163.106 198.504C155.56 205.691 145.329 209.733 134.658 209.745ZM134.658 134.806C127.056 134.805 119.624 136.95 113.302 140.971C106.98 144.992 102.053 150.709 99.1423 157.397C96.2318 164.085 95.4694 171.446 96.9514 178.547C98.4334 185.648 102.093 192.171 107.468 197.291C112.843 202.411 119.691 205.898 127.147 207.311C134.603 208.725 142.331 208 149.355 205.23C156.378 202.46 162.381 197.768 166.605 191.748C170.829 185.728 173.083 178.651 173.083 171.411C173.071 161.708 169.019 152.405 161.816 145.543C154.612 138.681 144.846 134.82 134.658 134.806Z"
          fill="#093F68"
        />
        <path
          d="M230.342 208.876C252.068 208.876 269.68 192.102 269.68 171.411C269.68 150.72 252.068 133.946 230.342 133.946C208.617 133.946 191.005 150.72 191.005 171.411C191.005 192.102 208.617 208.876 230.342 208.876Z"
          fill="#68D1FC"
        />
        <path
          d="M230.342 209.745C222.379 209.747 214.594 207.499 207.972 203.287C201.35 199.074 196.188 193.086 193.14 186.079C190.092 179.073 189.294 171.363 190.847 163.924C192.4 156.486 196.235 149.653 201.865 144.29C207.496 138.927 214.671 135.275 222.481 133.796C230.292 132.317 238.387 133.077 245.744 135.98C253.101 138.883 259.389 143.799 263.812 150.106C268.235 156.412 270.595 163.827 270.593 171.411C270.581 181.574 266.336 191.318 258.79 198.504C251.245 205.691 241.014 209.733 230.342 209.745ZM230.342 134.806C222.74 134.805 215.309 136.95 208.987 140.971C202.665 144.992 197.737 150.709 194.827 157.397C191.917 164.085 191.154 171.446 192.636 178.547C194.118 185.648 197.778 192.171 203.153 197.291C208.528 202.411 215.376 205.898 222.832 207.311C230.287 208.725 238.016 208 245.039 205.23C252.063 202.46 258.066 197.768 262.29 191.748C266.513 185.728 268.768 178.651 268.768 171.411C268.756 161.708 264.704 152.405 257.5 145.543C250.297 138.681 240.531 134.82 230.342 134.806Z"
          fill="#093F68"
        />
        <path
          d="M130.789 183.36C131.569 181.945 132.042 180.395 132.18 178.802C132.318 177.209 132.118 175.605 131.592 174.088H137.842V169.134C135.388 169.134 132.997 169.056 130.615 169.134C130.139 169.201 129.653 169.103 129.245 168.86C128.837 168.616 128.533 168.242 128.389 167.804C126.436 163.928 126.956 159.983 130.004 157.115C133.052 154.247 137.842 153.639 141.073 157.393C142.139 158.783 143.114 160.234 143.993 161.738C144.285 162.182 144.513 162.677 144.777 163.172L151.502 160.365C150.59 158.853 149.851 157.402 148.947 156.02C147.379 153.343 145.043 151.146 142.213 149.685C136.665 147.034 131.309 147.686 126.445 151.136C124.064 152.715 122.201 154.904 121.07 157.449C119.94 159.994 119.589 162.792 120.058 165.519C120.222 166.718 120.596 167.891 120.897 169.186H116.061V174.131C118.397 174.131 120.678 174.131 122.959 174.131C123.224 174.131 123.644 174.201 123.726 174.366C124.419 175.713 125.195 177.095 124.784 178.711C124.32 180.509 123.411 182.175 122.134 183.57C120.856 184.966 119.246 186.05 117.439 186.732L116.964 186.958C117.786 189.061 118.598 191.112 119.41 193.189C119.811 193.05 120.122 192.963 120.404 192.842C121.673 192.286 122.914 191.651 124.2 191.164C127.349 189.983 130.524 189.565 133.754 190.93C134.557 191.269 135.379 191.582 136.2 191.912C141.073 193.893 145.398 192.477 149.632 190.017L146.538 183.499C145.982 183.821 145.535 184.108 145.06 184.368C142.98 185.42 140.79 186.22 138.435 185.472C136.081 184.725 133.59 183.491 130.789 183.36Z"
          fill="#093F68"
        />
        <path
          d="M144.467 90.2762C142.69 89.3388 140.863 88.4918 138.992 87.7386C138.8 87.686 138.634 87.5692 138.525 87.4095C138.416 87.2499 138.371 87.0581 138.399 86.8696C138.399 83.8018 138.399 80.7254 138.399 77.6576C138.399 77.5359 138.445 77.4229 138.463 77.2665C140.814 77.9708 142.927 79.2574 144.586 80.9948L149.148 75.9108C146.509 73.085 142.993 71.1337 139.111 70.3402C138.545 70.2272 138.372 70.0273 138.39 69.4711C138.435 68.3761 138.39 67.2811 138.39 66.1166H132.459V69.923C130.908 70.3344 129.384 70.8336 127.896 71.4178C123.753 73.3732 121.107 76.4149 120.934 80.9774C120.76 85.5399 122.987 88.6163 126.92 90.7803C128.525 91.6004 130.172 92.343 131.856 93.0051C132.051 93.0543 132.219 93.1704 132.328 93.331C132.438 93.4915 132.481 93.685 132.449 93.8741C132.449 96.4204 132.449 98.9494 132.449 101.487V104.755C129.385 104.17 126.572 102.734 124.365 100.627L119.328 105.841C122.856 109.194 127.497 111.276 132.459 111.733V114.983H138.371V111.568L139.202 111.359C140.982 110.97 142.683 110.307 144.239 109.395C151.667 105.068 152.032 94.5954 144.467 90.2762ZM132.431 84.9403C131.467 84.7246 130.604 84.2163 129.97 83.492C129.336 82.7677 128.967 81.8668 128.918 80.9252C128.945 80.0171 129.315 79.1487 129.961 78.4797C130.606 77.8107 131.483 77.3861 132.431 77.2839V84.9403ZM138.435 104.338C138.408 104.191 138.39 104.043 138.381 103.894V95.8903C139.391 96.1135 140.291 96.6577 140.933 97.4334C141.575 98.209 141.92 99.1698 141.912 100.157C141.919 101.128 141.579 102.072 140.947 102.834C140.315 103.595 139.429 104.129 138.435 104.346V104.338Z"
          fill="#093F68"
        />
        <path
          d="M243.838 79.4044L248.538 73.9902C246.795 72.1202 244.642 70.6369 242.232 69.6449C236.666 67.368 231.136 67.8373 225.807 70.3575C220.478 72.8778 217.367 77.2404 215.605 82.5243C215.031 84.2624 215.04 84.2624 213.114 84.2624H207.767V89.2855H214.437V91.8926H207.776V96.9592H214.994C217.211 105.398 222.084 111.246 231.419 112.689C234.731 113.314 238.16 113.061 241.331 111.958C244.503 110.854 247.295 108.943 249.404 106.432C247.826 104.694 246.284 102.956 244.714 101.165C242.597 103.251 240.334 105.015 237.305 105.511C235.853 105.8 234.354 105.805 232.9 105.525C231.446 105.246 230.067 104.688 228.846 103.886C226.336 102.2 224.968 99.7923 224.083 96.9331H241.055V91.8926H223.353V89.2855H241.046V84.2537H224.165C225.424 80.4385 227.623 77.4664 231.611 76.1367C236.337 74.5637 240.389 75.9542 243.838 79.4044Z"
          fill="#093F68"
        />
        <path
          d="M248.2 152.092C244.349 158.914 240.571 165.588 236.73 172.376H246.174V177.181H235.252V179.589H246.11V184.369H235.224V195.666H225.515V184.369H214.565V179.667H225.433V177.234H214.593V172.462H224.028L212.521 152.127H217.175C218.9 152.127 220.615 152.127 222.34 152.127C222.538 152.09 222.743 152.127 222.913 152.231C223.083 152.334 223.204 152.496 223.252 152.683C225.509 157.66 227.778 162.631 230.059 167.596C230.151 167.796 230.26 167.978 230.434 168.317C230.634 167.926 230.771 167.691 230.881 167.448C233.18 162.547 235.48 157.648 237.779 152.752C237.898 152.5 238.226 152.17 238.464 152.161C241.603 152.083 244.805 152.092 248.2 152.092Z"
          fill="#093F68"
        />
        <path
          d="M134.658 123.179C127.895 123.185 121.282 121.282 115.655 117.709C110.028 114.137 105.64 109.055 103.046 103.107C100.451 97.1587 99.7674 90.6115 101.08 84.2933C102.393 77.975 105.644 72.1695 110.422 67.6109C115.199 63.0523 121.289 59.9454 127.921 58.6832C134.552 57.421 141.428 58.0601 147.678 60.5197C153.928 62.9793 159.272 67.149 163.034 72.5013C166.796 77.8537 168.807 84.1483 168.812 90.5891C168.81 99.2211 165.213 107.5 158.81 113.609C152.407 119.719 143.721 123.16 134.658 123.179ZM134.658 59.7899C128.253 59.783 121.991 61.5857 116.663 64.9698C111.335 68.3539 107.181 73.1672 104.726 78.8007C102.272 84.4342 101.627 90.6346 102.874 96.6171C104.121 102.6 107.204 108.095 111.731 112.409C116.259 116.722 122.029 119.659 128.31 120.849C134.591 122.038 141.102 121.426 147.018 119.09C152.934 116.754 157.989 112.799 161.544 107.725C165.098 102.652 166.993 96.6883 166.987 90.5891C166.985 82.418 163.58 74.5814 157.52 68.7979C151.459 63.0144 143.237 59.7561 134.658 59.7377V59.7899Z"
          fill="#093F68"
        />
        <path
          d="M230.342 123.179C223.581 123.179 216.972 121.269 211.35 117.692C205.727 114.115 201.345 109.031 198.756 103.083C196.168 97.1339 195.489 90.5879 196.806 84.2719C198.123 77.9559 201.377 72.1537 206.156 67.5985C210.935 63.0434 217.025 59.94 223.655 58.6806C230.286 57.4212 237.16 58.0624 243.408 60.523C249.656 62.9837 254.998 67.1533 258.758 72.5049C262.518 77.8565 264.528 84.1497 264.534 90.5891C264.531 99.2271 260.929 107.511 254.518 113.622C248.108 119.732 239.412 123.169 230.342 123.179ZM230.342 59.7898C223.94 59.7898 217.681 61.5984 212.358 64.9867C207.035 68.3749 202.886 73.1907 200.437 78.8248C197.988 84.4589 197.349 90.6582 198.6 96.6384C199.851 102.619 202.936 108.111 207.466 112.421C211.995 116.731 217.765 119.665 224.045 120.851C230.325 122.038 236.834 121.424 242.747 119.086C248.661 116.749 253.714 112.794 257.267 107.722C260.821 102.649 262.714 96.6868 262.709 90.5891C262.706 82.412 259.296 74.5701 253.228 68.7856C247.159 63.0011 238.928 59.7469 230.342 59.7377V59.7898Z"
          fill="#093F68"
        />
        <path
          d="M134.658 204C127.895 204.007 121.282 202.104 115.655 198.531C110.028 194.958 105.64 189.877 103.046 183.929C100.451 177.981 99.7674 171.433 101.08 165.115C102.393 158.797 105.644 152.991 110.422 148.433C115.199 143.874 121.289 140.767 127.921 139.505C134.552 138.243 141.428 138.882 147.678 141.342C153.928 143.801 159.272 147.971 163.034 153.323C166.796 158.676 168.807 164.97 168.812 171.411C168.81 180.043 165.213 188.322 158.81 194.431C152.407 200.541 143.721 203.982 134.658 204ZM134.658 140.612C128.253 140.605 121.991 142.408 116.663 145.792C111.335 149.176 107.181 153.989 104.726 159.623C102.272 165.256 101.627 171.456 102.874 177.439C104.121 183.421 107.204 188.917 111.731 193.231C116.259 197.544 122.029 200.481 128.31 201.671C134.591 202.86 141.102 202.248 147.018 199.912C152.934 197.576 157.989 193.621 161.544 188.547C165.098 183.474 166.993 177.51 166.987 171.411C166.985 163.24 163.58 155.403 157.52 149.62C151.459 143.836 143.237 140.578 134.658 140.56V140.612Z"
          fill="#093F68"
        />
        <path
          d="M230.342 204C223.581 204 216.972 202.091 211.35 198.514C205.727 194.937 201.345 189.853 198.756 183.904C196.168 177.956 195.489 171.41 196.806 165.094C198.123 158.778 201.377 152.976 206.156 148.42C210.935 143.865 217.025 140.762 223.655 139.502C230.286 138.243 237.16 138.884 243.408 141.345C249.656 143.806 254.998 147.975 258.758 153.327C262.518 158.678 264.528 164.972 264.534 171.411C264.531 180.049 260.929 188.333 254.518 194.443C248.108 200.554 239.412 203.991 230.342 204ZM230.342 140.612C223.94 140.612 217.681 142.42 212.358 145.809C207.035 149.197 202.886 154.013 200.437 159.647C197.988 165.281 197.349 171.48 198.6 177.46C199.851 183.441 202.936 188.933 207.466 193.243C211.995 197.553 217.765 200.487 224.045 201.673C230.325 202.86 236.834 202.245 242.747 199.908C248.661 197.571 253.714 193.616 257.267 188.544C260.821 183.471 262.714 177.509 262.709 171.411C262.706 163.234 259.296 155.392 253.228 149.607C247.159 143.823 238.928 140.569 230.342 140.56V140.612Z"
          fill="#093F68"
        />
      </svg>
    </div>
  );
};

export default Coins;
