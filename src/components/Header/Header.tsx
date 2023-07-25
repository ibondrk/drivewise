import React from 'react';
import s from './header.module.scss';
// import cn from 'classnames';

import { HamburgerIcon } from '../HamburgerMenu/icon';
import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';

export const Header: React.FC = () => {
  const { id } = useAppSelector((state) => state.section);
  return (
    <header
      className={s.header}
      id="header"
      style={id === 1 ? { background: '#fff' } : {}}
    >
      <NavLink to={'/'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="77"
          viewBox="0 0 75 77"
          className={s.logo}
          fill={id === 0 ? '#fff' : '#000'}
        >
          <mask
            id="a"
            width="32"
            height="50"
            x="0"
            y="27"
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'luminance' }}
          >
            <path fill="#fff" d="M0 27.233h31.423V76.67H0V27.233Z" />
          </mask>
          <g mask="url(#a)">
            <mask
              id="b"
              width="64"
              height="63"
              x="-11"
              y="19"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path
                fill="#fff"
                d="m19.66 81.697-29.714-29.714 32.81-32.809 29.713 29.714-32.809 32.81Z"
              />
            </mask>
            <g mask="url(#b)">
              <mask
                id="c"
                width="64"
                height="63"
                x="-11"
                y="19"
                maskUnits="userSpaceOnUse"
                style={{ maskType: 'luminance' }}
              >
                <path
                  fill="#fff"
                  d="m19.66 81.697-29.714-29.714 32.81-32.809 29.713 29.714-32.809 32.81Z"
                />
              </mask>
              <g mask="url(#c)">
                <mask
                  id="d"
                  width="32"
                  height="50"
                  x="0"
                  y="27"
                  maskUnits="userSpaceOnUse"
                  style={{ maskType: 'luminance' }}
                >
                  <path
                    fill="#fff"
                    d="M13.408 40.803a15.83 15.83 0 0 0-4.553 12.789 15.941 15.941 0 0 0 3.55 8.533 16.29 16.29 0 0 0 1.615 1.697 16.045 16.045 0 0 0 6.069 3.445 15.996 15.996 0 0 0 4.615.694l-.003-1.152a14.727 14.727 0 0 1-1.445-.075 14.613 14.613 0 0 1-4.2-1.061 14.526 14.526 0 0 1-1.31-.622 14.358 14.358 0 0 1-1.241-.746 14.79 14.79 0 0 1-4.821-5.32 14.842 14.842 0 0 1-1.687-8.399 14.321 14.321 0 0 1 .56-2.834 14.67 14.67 0 0 1 1.841-3.907 14.869 14.869 0 0 1 1.829-2.232c.342-.34.698-.662 1.07-.968a14.424 14.424 0 0 1 2.4-1.601 14.826 14.826 0 0 1 2.669-1.1 14.783 14.783 0 0 1 4.28-.625l6.505.013-.004-1.152-6.505-.005a15.798 15.798 0 0 0-6.085 1.187 15.683 15.683 0 0 0-5.149 3.441Zm4.089 4.087a9.965 9.965 0 0 0-1.766 2.384 10.065 10.065 0 0 0-1.175 4.273 10.155 10.155 0 0 0 .297 2.96 10.267 10.267 0 0 0 1.142 2.748 10.177 10.177 0 0 0 3.068 3.219 10.048 10.048 0 0 0 2.689 1.276 10.15 10.15 0 0 0 2.939.444l-.002-1.154a8.775 8.775 0 0 1-1.75-.175 8.494 8.494 0 0 1-.857-.216 8.793 8.793 0 0 1-1.627-.676 8.916 8.916 0 0 1-2.712-2.227 8.556 8.556 0 0 1-.526-.71 9.088 9.088 0 0 1-1.347-3.239 9.278 9.278 0 0 1-.177-1.751 8.803 8.803 0 0 1 .17-1.75 8.54 8.54 0 0 1 .508-1.683 8.39 8.39 0 0 1 .374-.795 8.744 8.744 0 0 1 1.565-2.113 8.857 8.857 0 0 1 1.358-1.113 9.48 9.48 0 0 1 .755-.452c.26-.137.525-.261.795-.374a9.04 9.04 0 0 1 3.435-.674l6.514.012-.003-1.15-6.514-.015a10.01 10.01 0 0 0-5.625 1.692 9.979 9.979 0 0 0-1.528 1.259Zm-2.05-2.047a12.957 12.957 0 0 0-3.772 8.551 13.117 13.117 0 0 0 .381 3.798 13.109 13.109 0 0 0 1.468 3.529 13.067 13.067 0 0 0 7.39 5.777 13.006 13.006 0 0 0 3.775.571l.007-1.144a12.011 12.011 0 0 1-4.452-.995 11.977 11.977 0 0 1-3.754-2.597 12.28 12.28 0 0 1-1.437-1.789c-.21-.32-.404-.65-.583-.988a12.066 12.066 0 0 1-.867-2.123 11.89 11.89 0 0 1-.275-1.113 11.49 11.49 0 0 1-.226-2.278 11.623 11.623 0 0 1 .216-2.278 11.825 11.825 0 0 1 1.709-4.218 11.946 11.946 0 0 1 1.429-1.782 12.149 12.149 0 0 1 1.746-1.471c.314-.218.638-.42.972-.604a11.933 11.933 0 0 1 3.201-1.21 11.923 11.923 0 0 1 2.272-.271l6.51.013-.003-1.152-6.51-.014a12.88 12.88 0 0 0-2.539.241 12.815 12.815 0 0 0-4.687 1.933 12.942 12.942 0 0 0-1.966 1.618l-.005-.005Zm-6.13-6.131A21.438 21.438 0 0 0 6.63 39.99c-.393.59-.756 1.196-1.09 1.822a21.798 21.798 0 0 0-1.615 3.92 21.67 21.67 0 0 0-.808 8.41 21.759 21.759 0 0 0 6.27 13.207 21.635 21.635 0 0 0 7.03 4.723 21.584 21.584 0 0 0 8.3 1.656l-.009-1.147a20.598 20.598 0 0 1-7.852-1.578 20.55 20.55 0 0 1-5.168-3.105 20.54 20.54 0 0 1-2.85-2.849 20.743 20.743 0 0 1-2.24-3.348c-.32-.593-.608-1.2-.865-1.822a20.422 20.422 0 0 1-1.176-3.849 20.64 20.64 0 0 1-.308-6.013 20.616 20.616 0 0 1 1.452-5.836 20.593 20.593 0 0 1 1.887-3.541 20.375 20.375 0 0 1 13.035-8.695 20.83 20.83 0 0 1 1.99-.292 20.62 20.62 0 0 1 2.01-.093l6.504.008-.004-1.152-6.498-.013a21.408 21.408 0 0 0-8.292 1.622 21.259 21.259 0 0 0-3.74 1.996 21.245 21.245 0 0 0-3.272 2.694l-.005-.003Zm10.217 10.217a7.252 7.252 0 0 0-1.974 3.705 7.437 7.437 0 0 0-.1 2.121 7.356 7.356 0 0 0 .52 2.064 7.404 7.404 0 0 0 1.833 2.599 7.407 7.407 0 0 0 1.77 1.185 7.264 7.264 0 0 0 2.036.62c.352.054.707.08 1.062.082l-.002-1.152a6.079 6.079 0 0 1-3.386-1.033 6.326 6.326 0 0 1-.924-.76 6.333 6.333 0 0 1-.76-.924 6.18 6.18 0 0 1-.913-2.198 6.049 6.049 0 0 1-.005-2.376 6.04 6.04 0 0 1 1.66-3.116 6.16 6.16 0 0 1 .921-.755 6.013 6.013 0 0 1 2.195-.905 6.013 6.013 0 0 1 1.188-.114l6.518.021-.004-1.15-6.517-.015a7.1 7.1 0 0 0-2.77.54 7.065 7.065 0 0 0-2.343 1.566l-.005-.005Zm-8.173-8.173a18.737 18.737 0 0 0-3.277 4.42 18.646 18.646 0 0 0-1.846 5.185 18.629 18.629 0 0 0-.26 5.506 18.763 18.763 0 0 0 1.35 5.35 18.51 18.51 0 0 0 1.25 2.47 18.791 18.791 0 0 0 3.505 4.27 18.94 18.94 0 0 0 4.59 3.071 18.836 18.836 0 0 0 8.036 1.818l-.002-1.154a17.653 17.653 0 0 1-6.7-1.4 17.762 17.762 0 0 1-4.402-2.68 18.166 18.166 0 0 1-1.272-1.163 17.6 17.6 0 0 1-2.173-2.67 17.535 17.535 0 0 1-2.198-4.66 17.774 17.774 0 0 1-.675-3.372 17.711 17.711 0 0 1 .24-5.137 17.62 17.62 0 0 1 1.714-4.843 17.613 17.613 0 0 1 3.041-4.136 17.682 17.682 0 0 1 2.642-2.188 17.584 17.584 0 0 1 3.016-1.631 17.26 17.26 0 0 1 1.614-.588 17.456 17.456 0 0 1 3.365-.689c.57-.06 1.142-.091 1.716-.096l6.502.014-.004-1.152-6.501-.015a18.612 18.612 0 0 0-10.43 3.138 18.48 18.48 0 0 0-2.836 2.335l-.005-.003ZM.124 52.014a24.619 24.619 0 0 0 1.072 7.127c.234.771.507 1.527.817 2.27a23.69 23.69 0 0 0 1.034 2.18 24.478 24.478 0 0 0 2.681 4.008 25.024 25.024 0 0 0 3.41 3.41 24.468 24.468 0 0 0 4.007 2.682 24.827 24.827 0 0 0 4.45 1.851 24.903 24.903 0 0 0 4.721.947c.8.08 1.603.121 2.408.123l-.005-1.15a23.329 23.329 0 0 1-4.565-.46 23.38 23.38 0 0 1-8.441-3.51 23.562 23.562 0 0 1-8.638-10.518 23.646 23.646 0 0 1-1.34-4.39 23.673 23.673 0 0 1-.343-2.274 23.318 23.318 0 0 1 .877-9.081c.22-.734.477-1.454.768-2.16a23.382 23.382 0 0 1 5.055-7.58 23.042 23.042 0 0 1 3.54-2.902 23.364 23.364 0 0 1 4.041-2.155 23.38 23.38 0 0 1 6.656-1.654 23.817 23.817 0 0 1 2.293-.107l6.496.013-.003-1.152-6.496-.013a24.624 24.624 0 0 0-4.787.462 24.342 24.342 0 0 0-4.602 1.387 24.608 24.608 0 0 0-4.239 2.259 24.25 24.25 0 0 0-1.931 1.432 24.103 24.103 0 0 0-3.396 3.394 24.22 24.22 0 0 0-1.43 1.933 24.126 24.126 0 0 0-2.26 4.239 24.534 24.534 0 0 0-1.85 9.389Z"
                  />
                </mask>
                <g mask="url(#d)">
                  <path d="m.02 27.452.103 49.16 31.154.066-.103-49.16L.02 27.452Z" />
                </g>
              </g>
            </g>
          </g>
          <mask
            id="e"
            width="28"
            height="20"
            x="47"
            y="27"
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'luminance' }}
          >
            <path fill="#fff" d="M47.763 27.233h26.395v18.854H47.763V27.233Z" />
          </mask>
          <g mask="url(#e)">
            <mask
              id="f"
              width="38"
              height="38"
              x="38"
              y="18"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path
                fill="#fff"
                d="M57.606 55.73 38.622 36.744l17.953-17.953L75.56 37.776 57.606 55.729Z"
              />
            </mask>
            <g mask="url(#f)">
              <mask
                id="g"
                width="38"
                height="38"
                x="38"
                y="18"
                maskUnits="userSpaceOnUse"
                style={{ maskType: 'luminance' }}
              >
                <path
                  fill="#fff"
                  d="M57.606 55.73 38.622 36.744l17.953-17.953L75.56 37.776 57.606 55.729Z"
                />
              </mask>
              <g mask="url(#g)">
                <mask
                  id="h"
                  width="27"
                  height="20"
                  x="47"
                  y="27"
                  maskUnits="userSpaceOnUse"
                  style={{ maskType: 'luminance' }}
                >
                  <path
                    fill="#fff"
                    d="m61.785 39.06-13.903.014v1.154l13.903-.015v-1.154ZM47.879 28.671l9.759-.012.001-1.154-9.76.012v1.154Zm.006 2.883 16.482-.016.002-1.155-16.486.017.002 1.154Zm-.002 13.298v1.153l18.645-.02.004-1.15-18.648.017Zm-.004-1.732 22.33-.025v-1.153l-22.327.02-.003 1.158Zm-.002-8.669 21.446-.026.002-1.152-21.445.021-.003 1.157Zm.005 2.885 26.056-.026.002-1.154-26.058.027v1.153Z"
                  />
                </mask>
                <g mask="url(#h)">
                  <path d="m47.877 27.506-.02 18.527 26.083-.027.02-18.527-26.083.027Z" />
                </g>
              </g>
            </g>
          </g>
          <mask
            id="i"
            width="26"
            height="77"
            x="24"
            y="0"
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'luminance' }}
          >
            <path fill="#fff" d="M24.3 0h25.138v76.671H24.3V0Z" />
          </mask>
          <g mask="url(#i)">
            <mask
              id="j"
              width="82"
              height="83"
              x="-11"
              y="-1"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path
                fill="#fff"
                d="M29.684 81.697-10.76 41.252 30.51-.018l40.445 40.445-41.27 41.27Z"
              />
            </mask>
            <g mask="url(#j)">
              <mask
                id="k"
                width="82"
                height="83"
                x="-11"
                y="-1"
                maskUnits="userSpaceOnUse"
                style={{ maskType: 'luminance' }}
              >
                <path
                  fill="#fff"
                  d="M29.684 81.697-10.76 41.252 30.51-.018l40.445 40.445-41.27 41.27Z"
                />
              </mask>
              <g mask="url(#k)">
                <mask
                  id="l"
                  width="26"
                  height="77"
                  x="24"
                  y="0"
                  maskUnits="userSpaceOnUse"
                  style={{ maskType: 'luminance' }}
                >
                  <path
                    fill="#fff"
                    d="m24.555 61.046.001 1.15c.331 0 .662-.015.99-.047a10.4 10.4 0 0 0 1.943-.386 10.036 10.036 0 0 0 5.461-4.049 9.93 9.93 0 0 0 1.506-3.64c.064-.324.113-.65.146-.98.03-.329.047-.66.047-.99l-.083-48.065-1.154-1.154.087 49.217a9.2 9.2 0 0 1-.043.878 9.2 9.2 0 0 1-.342 1.721 8.684 8.684 0 0 1-.67 1.62 8.982 8.982 0 0 1-.973 1.459 8.518 8.518 0 0 1-.59.65 8.818 8.818 0 0 1-2.902 1.938 8.71 8.71 0 0 1-.825.294 9.172 9.172 0 0 1-1.722.342 9.24 9.24 0 0 1-.877.042Zm6.06-8.945c0 .4-.04.795-.116 1.186a6.133 6.133 0 0 1-.905 2.188 6.062 6.062 0 0 1-5.049 2.696l.002 1.15a7.314 7.314 0 0 0 2.098-.309 7.331 7.331 0 0 0 1.915-.905 7.095 7.095 0 0 0 1.093-.897 7.24 7.24 0 0 0 1.564-2.342 7.376 7.376 0 0 0 .41-1.355 7.313 7.313 0 0 0 .14-1.41l-.088-50.951-1.15-1.15.086 52.099Zm2.31 8.373a11.699 11.699 0 0 1-6.056 3.234c-.763.148-1.532.22-2.31.217l.002 1.15c.426.002.85-.017 1.274-.06a12.915 12.915 0 0 0 6.962-2.874c.329-.27.643-.555.944-.854.3-.301.584-.615.854-.943a12.972 12.972 0 0 0 2.934-8.237l-.08-45.184-1.152-1.153.08 46.337c.004.778-.068 1.549-.219 2.311a11.685 11.685 0 0 1-3.234 6.056Zm8.158 8.158a22.926 22.926 0 0 1-3.529 2.907 23.114 23.114 0 0 1-8.417 3.473 23.151 23.151 0 0 1-4.558.431l.002 1.151a25 25 0 0 0 2.4-.115 24.286 24.286 0 0 0 4.713-.927 24.42 24.42 0 0 0 4.435-1.832 24.466 24.466 0 0 0 3.99-2.663 24.037 24.037 0 0 0 1.779-1.612 24.503 24.503 0 0 0 4.275-5.769 24.577 24.577 0 0 0 1.83-4.435 24.754 24.754 0 0 0 .929-4.712c.077-.798.114-1.599.114-2.4l-.059-33.668-1.152-1.153.06 34.819a23.131 23.131 0 0 1-1.75 8.94 23.111 23.111 0 0 1-5.062 7.565Zm-2.043-2.044a20.176 20.176 0 0 1-3.093 2.55 20.08 20.08 0 0 1-3.533 1.89c-1.242.514-2.522.9-3.84 1.159-1.319.26-2.651.386-3.995.381v1.15a21.808 21.808 0 0 0 4.22-.407 21.744 21.744 0 0 0 4.055-1.224c.654-.27 1.293-.571 1.918-.904a21.675 21.675 0 0 0 5.091-3.772 21.88 21.88 0 0 0 2.684-3.273 21.96 21.96 0 0 0 1.089-1.818 21.806 21.806 0 0 0 1.615-3.915 21.703 21.703 0 0 0 .82-4.159c.067-.703.102-1.41.1-2.12l-.064-36.546-1.157-1.157.07 37.704a20.334 20.334 0 0 1-1.538 7.836 20.089 20.089 0 0 1-1.89 3.535 20.073 20.073 0 0 1-2.548 3.093l-.004-.003Zm-2.044-2.043c-.813.819-1.7 1.549-2.661 2.189a17.37 17.37 0 0 1-6.343 2.615 17.41 17.41 0 0 1-3.436.322l.014 1.164c.615 0 1.227-.028 1.837-.087a18.541 18.541 0 0 0 3.604-.712 18.457 18.457 0 0 0 3.394-1.4 18.487 18.487 0 0 0 4.414-3.27 18.485 18.485 0 0 0 2.326-2.838c.34-.51.655-1.035.944-1.575a18.781 18.781 0 0 0 1.4-3.394 18.566 18.566 0 0 0 .798-5.442l-.069-39.425-1.152-1.153.07 40.585a17.368 17.368 0 0 1-1.32 6.733 17.375 17.375 0 0 1-3.812 5.695l-.008-.007Zm-12.431 2.26.001 1.151a15.935 15.935 0 0 0 3.093-.303 16.014 16.014 0 0 0 2.972-.9 15.966 15.966 0 0 0 2.74-1.463 15.967 15.967 0 0 0 2.4-1.969 15.753 15.753 0 0 0 2.765-3.731 15.903 15.903 0 0 0 1.565-4.378 15.785 15.785 0 0 0 .303-3.093L40.33 9.816l-1.152-1.152.08 43.448c0 .481-.023.962-.07 1.442a14.504 14.504 0 0 1-.559 2.828c-.14.462-.3.915-.486 1.358-.183.446-.388.88-.615 1.305a14.28 14.28 0 0 1-.74 1.237 14.571 14.571 0 0 1-5.291 4.794 14.22 14.22 0 0 1-1.304.615 14.55 14.55 0 0 1-4.187 1.044c-.48.048-.96.07-1.441.07Z"
                  />
                </mask>
                <g mask="url(#l)">
                  <path d="m36.797 88.846 50.548-50.548L36.797-12.25l-50.548 50.548 50.548 50.548Z" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </NavLink>
      <HamburgerIcon />
    </header>
  );
};
