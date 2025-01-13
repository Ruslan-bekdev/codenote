const n={title:"Шаблоны",navTitle:"Шаблоны",id:"templates",items:[{summary:"Шаблон Секции для Коднота",content:`export default {
    title: "",
    navTitle: "",
    id: "",
    items: [
        {
            summary: "",
            content: ""
        },
    ]
}`},{summary:"Zoomable Image (styled components, useState)",content:`import React, { useState } from 'react';
import styled from "styled-components";
import {flexCenter, imageDefault} from "../../styles/styles";

const Modal = styled.div\`
  position: relative;
  display: inline-block;
  cursor: zoom-in;
  .modal__image{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 90vh;
    \${flexCenter};
    z-index: 30;
    img{
      object-fit: contain;
      \${imageDefault};
    }
  }
\`;

const Overlay = styled.div\`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: zoom-out;
  \${flexCenter};
  z-index: 20;
\`;

const ZoomableImage = ({src, alt, className = ''}) => {
    const [zoomed, setZoomed] = useState(false);

    const handleZoomToggle = () => {
        setZoomed(!zoomed);
    };

    return (
        <Modal
            className={className}
            onClick={handleZoomToggle}
        >
            <img
                src={src}
                alt={alt}
            />
            {
                zoomed &&
                <Overlay
                    onClick={handleZoomToggle}
                >
                    <div className='modal__image'>
                        <img src={src} alt={alt}/>
                    </div>
                </Overlay>
            }
        </Modal>
    );
};

export default ZoomableImage;

Стили от styled components:
export const flexCenter = css\`
    display: flex;
    align-items: center;
    justify-content: center;
\`;
export const imageDefault = css\`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
\`;

ВАНИЛА:
import React, { useState } from 'react';
import styles from './ZoomableImage.module.css';

const ZoomableImage = ({ src, alt, className = '' }) => {
    const [zoomed, setZoomed] = useState(false);

    const handleZoomToggle = () => {
        setZoomed(!zoomed);
    };

    return (
        <div
            className={\`\${styles.modal} \${className}\`}
            onClick={handleZoomToggle}
        >
            <img
                src={src}
                alt={alt}
            />
            {zoomed && (
                <div className={styles.overlay} onClick={handleZoomToggle}>
                    <div className={styles.modalImage}>
                        <img src={src} alt={alt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ZoomableImage;

.flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
}

.imageDefault {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}

.modal {
    position: relative;
    display: inline-block;
    cursor: zoom-in;
}

.modalImage {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 90vh;
    z-index: 30;
}
.modalImage img {
    object-fit: contain;
    composes: imageDefault;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: zoom-out;
    z-index: 20;
    composes: flexCenter;
}
`},{summary:"css шаблоны STYLED COMPONENTS или MUI",content:`import {css} from "styled-components";
ИЛИ
import { css } from '@emotion/react';

export const media = {
  mobile: (...args) => css\`
    @media only screen and (max-width: 767px) {
      \${css(...args)}
    }
  \`,
  tablet: (...args) => css\`
    @media only screen and (min-width: 767px) and (max-width: 991px) {
      \${css(...args)}
    }
  \`,
  laptop: (...args) => css\`
    @media only screen and (min-width: 991px) and (max-width: 1200px) {
      \${css(...args)}
    }
  \`,
  desktop: (...args) => css\`
    @media only screen and (min-width: 1200px) {
      \${css(...args)}
    }
  \`,
};

export const colors = {
  main: '#351C0F',
  mainRGB: '53,28,15',
  secondary: '#E9E9E9',
  secondaryRGB: '233,233,233',
  accent: '#FF5733',
  accentRGB: '255,87,51',
  background: '#F0F0F0',
  backgroundRGB: '240,240,240',
};

export const headerHeight = {
  mobile: '3rem',
  tablet: '4rem',
  laptop: '5rem',
  desktop: '6rem',
  ultraWide: '7rem',
};

export const container = css\`
  width: 100vw;
  max-width: 90vw;
  margin-inline: auto;
  text-align: center;
  box-sizing: border-box;
  padding: 1rem;
\`;

export const imageDefault = css\`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.5rem;
\`;

// Флекс позиционирование
export const justifyCenter_around = css\`
  display: flex;
  align-items: center;
  justify-content: space-around;
\`;

export const justifyCenter_between = css\`
  display: flex;
  align-items: center;
  justify-content: space-between;
\`;

export const justifyEnd_between = css\`
  display: flex;
  align-items: end;
  justify-content: space-between;
\`;

export const flexCenter = css\`
  display: flex;
  align-items: center;
  justify-content: center;
\`;

export const flexCenter_wrap = css\`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
\`;

export const flexCenter_column = css\`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
\`;

export const flexStart = css\`
  display: flex;
  align-items: center;
  justify-content: flex-start;
\`;

export const flexEnd = css\`
  display: flex;
  align-items: center;
  justify-content: flex-end;
\`;

export const flexSpaceEvenly = css\`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
\`;

// Остальное позиционирование
export const center_relative = css\`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
\`;

export const bottomStart_relative = css\`
  position: relative;
  bottom: 0;
  left: 0;
\`;

export const center_absolute = css\`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
\`;

export const centerY_relative = css\`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
\`;

export const centerY_absolute = css\`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
\`;

export const bottomStart_fixed = css\`
  position: fixed;
  bottom: 0;
  left: 0;
\`;

export const center_fixed = css\`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
\`;

export const start_relative = css\`
  position: relative;
  top: 0;
  left: 0;
\`;

export const start_absolute = css\`
  position: absolute;
  top: 0;
  left: 0;
\`;

export const start_fixed = css\`
  position: fixed;
  top: 0;
  left: 0;
\`;

export const borderBox = css\`
  box-sizing: border-box;
\`;

export const card = css\`
  \${borderBox};
  border: 1px solid \${colors.secondary};
  background-color: \${colors.background};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
\`;

export const buttonPrimary = css\`
  \${flexCenter};
  padding: 0.5rem 1rem;
  background-color: \${colors.accent};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(\${colors.accent}, 10%);
  }
\`;
`},{summary:"css шаблоны VANILLA MODULE CSS",content:`/* colors.css */
:root {
  --main-color: #351C0F;
  --main-rgb: 53, 28, 15;
  --secondary-color: #E9E9E9;
  --secondary-rgb: 233, 233, 233;
  --accent-color: #FF5733;
  --accent-rgb: 255, 87, 51;
  --background-color: #F0F0F0;
  --background-rgb: 240, 240, 240;
  --header-height-mobile: 3rem;
  --header-height-tablet: 4rem;
  --header-height-laptop: 5rem;
  --header-height-desktop: 6rem;
  --header-height-ultrawide: 7rem;
}

/* flex.css */
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.flex-center-column {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.flex-start {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.flex-end {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.flex-space-evenly {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.justify-center-around {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.justify-center-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.justify-end-between {
  display: flex;
  align-items: end;
  justify-content: space-between;
}

/* positioning.css */
.center-relative {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bottom-start-relative {
  position: relative;
  bottom: 0;
  left: 0;
}

.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center-y-relative {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.center-y-absolute {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.bottom-start-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
}

.center-fixed {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.start-relative {
  position: relative;
  top: 0;
  left: 0;
}

.start-absolute {
  position: absolute;
  top: 0;
  left: 0;
}

.start-fixed {
  position: fixed;
  top: 0;
  left: 0;
}

/* utilities.css */
.container {
  width: 100vw;
  max-width: 90vw;
  margin-inline: auto;
  text-align: center;
  box-sizing: border-box;
  padding: 1rem;
}

.image-default {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.5rem;
}

.border-box {
  box-sizing: border-box;
}

.card {
  composes: border-box;
  border: 1px solid var(--secondary-color);
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button-primary {
  composes: flex-center;
  padding: 0.5rem 1rem;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-primary:hover {
  background-color: rgba(var(--accent-rgb), 0.9);
}

/* media.css */
@media only screen and (max-width: 767px) {
  .media-mobile {
    /* Add mobile-specific styles here */
  }
}

@media only screen and (min-width: 767px) and (max-width: 991px) {
  .media-tablet {
    /* Add tablet-specific styles here */
  }
}

@media only screen and (min-width: 991px) and (max-width: 1200px) {
  .media-laptop {
    /* Add laptop-specific styles here */
  }
}

@media only screen and (min-width: 1200px) {
  .media-desktop {
    /* Add desktop-specific styles here */
  }
}
`},{summary:"css шаблоны LESS и SASS",content:`/* colors.less */
@main-color: #351C0F;
@main-rgb: 53, 28, 15;
@secondary-color: #E9E9E9;
@secondary-rgb: 233, 233, 233;
@accent-color: #FF5733;
@accent-rgb: 255, 87, 51;
@background-color: #F0F0F0;
@background-rgb: 240, 240, 240;

@header-height-mobile: 3rem;
@header-height-tablet: 4rem;
@header-height-laptop: 5rem;
@header-height-desktop: 6rem;
@header-height-ultrawide: 7rem;

/* flex.less */
.flex-center() {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center-wrap() {
  .flex-center();
  flex-wrap: wrap;
}

.flex-center-column() {
  .flex-center();
  flex-direction: column;
}

.flex-start() {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.flex-end() {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

/* positioning.less */
.center-relative() {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bottom-start-relative() {
  position: relative;
  bottom: 0;
  left: 0;
}

.center-absolute() {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* utilities.less */
.container {
  width: 100vw;
  max-width: 90vw;
  margin-inline: auto;
  text-align: center;
  box-sizing: border-box;
}

.image-default {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

/* media.less */
@media (max-width: 767px) {
  .media-mobile {
    /* Mobile-specific styles */
  }
}

@media (min-width: 767px) and (max-width: 991px) {
  .media-tablet {
    /* Tablet-specific styles */
  }
}`},{summary:"css шаблоны SASS",content:`@import "src/styles/variables"

// флекс центрирование
@mixin justify-center-around
  display: flex
  align-items: center
  justify-content: space-around

@mixin justify-center-between
  display: flex
  align-items: center
  justify-content: space-between

@mixin flex-center
  display: flex
  align-items: center
  justify-content: center

@mixin flex-center-wrap
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap

@mixin flex-center-column
  display: flex
  flex-direction: column
  align-items: center

// позиционное центрирование
@mixin center-relative
  position: relative
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

@mixin center-absolute
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

@mixin center-fixed
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

@mixin start-relative
  position: relative
  top: 0
  left: 0

@mixin start-absolute
  position: absolute
  top: 0
  left: 0

@mixin start-fixed
  position: absolute
  top: 0
  left: 0

// градиент
@mixin gradient($color1, $color2)
  background-image: linear-gradient($color1, $color2)

// анимация
@mixin animation($name, $duration, $timing-function, $iteration-count)
  animation-name: $name
  animation-duration: $duration
  animation-timing-function: $timing-function
  animation-iteration-count: $iteration-count

// миксин для создания карточки с тенью и радиусом скругления
@mixin card-style
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
  border-radius: 8px
  padding: $base-padding
  margin: $base-margin

// дефолтные стили
@mixin imageDefault
  width: auto
  height: auto
  max-width: 100%
  max-height: 100%

// миксин для создания градиентного фона с углами
@mixin gradient-angle($color1, $color2, $angle)
  background-image: linear-gradient($angle, $color1, $color2)

// миксин для создания анимации с задержкой
@mixin animation-delay($name, $duration, $timing-function, $iteration-count, $delay)
  animation-name: $name
  animation-duration: $duration
  animation-timing-function: $timing-function
  animation-iteration-count: $iteration-count
  animation-delay: $delay


// переменные для цветов
$main-dark: #161513
$secondary-dark: #1C1C22
$main-light: #E3E0DEFF
$secondary-light: #B5B5BBFF
$accent-color: #FF5733
$accent-rgb: 255, 87, 51
$background-color: #F0F0F0
$background-rgb: 240, 240, 240

// размеры
$title-margin: 25px
$block-margin: $title-margin / 2
$inner-block-margin: $block-margin / 2

// медиа запросы
$mobile-width: "(max-width: 767px)"
$tablet-width: "(min-width: 767px) and (max-width: 991px)"
$laptop-width: "(min-width: 991px) and (max-width: 1200px)"
$desktop-width: "(min-width: 1200px)"

// z индекс
$z-index-popup: 500
$z-index-overlay: 450
$z-index-tooltip: 50

// размеры для хедера
$header-height: 60px
$section-vh: calc(100dvh - #{$header-height})

// функции
@function section-vh-plus($number)
  @return $number + $section-vh

@function header-height-plus($number)
  @return $number + $header-height

// шрифты
$font-family-main: 'Arial', sans-serif
$font-family-heading: 'Helvetica', sans-serif

// радиус скругления
$border-radius-small: 4px
$border-radius-medium: 8px
$border-radius-large: 16px

// ширина границы
$border-width: 1px
$border-color: rgba(0, 0, 0, 0.1)

// отступы
$base-padding: 1rem
$base-margin: 1rem
$card-padding: 2rem

// светлые и темные режимы
$light-mode-background: #FFFFFF
$dark-mode-background: #121212

// альфа каналы
$alpha-channel-light: rgba(255, 255, 255, 0.8)
$alpha-channel-dark: rgba(0, 0, 0, 0.8)
`},{summary:"components requests",content:`JS
import {useEffect, useState} from 'react';

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const responseData = await response.json();

                response.ok
                    ?setData(responseData)
                    :setError(
                        \`Ошибка запроса на сервер! Код ошибки: \${response.status}\`
                    );
            } catch (error) {
                setError(\`Произошла ошибка: \${error.message}\`);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return {data, error, loading};
};

TS
import {useState, useEffect} from "react";

export interface ObjectWithUnknownValue {
    [key: string]: unknown;
}
export interface FetchResponse<T> {
    data: T | null;
    error: string;
    isLoading: boolean;
}

export const useFetch = <T>(url: string, options?: ObjectWithUnknownValue): FetchResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const responseData = await response.json();

                response.ok
                    ?setData(responseData)
                    :setError(\`Ошибка запроса на сервер! Код ошибки: \${response.status}\`);
            } catch (error: any) {
                setError(\`Произошла ошибка\${': ' + error.message}\`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return {data, error, isLoading};
};`},{summary:"components buttons (JS + SASS)",content:`import React from "react";

const Button = ({children,func,customClasses = ''}) => {
  return <button
      onClick={func}
      className={customClasses}
  >
      {children}
  </button>
};

export default Button;

import React from 'react';
import classes from './Buttons.module.sass';

const IconButton = ({label, icon, isBefore = true, onClick, className = ''}) => {
    const beforeOrAfter = isBefore
        ?'before'
        :'after';

    const handleClick = () => {
        onClick && onClick();
    };

    return (
        <button className={\`\${classes.icon_button} \${beforeOrAfter} \${className}\`} onClick={handleClick}>
            {isBefore &&
                <img
                    src={icon}
                    alt="Before"
                />
            }
            {label &&
                <span>
                    {label}
                </span>
            }
            {!isBefore &&
                <img
                    src={icon}
                    alt="After"
                />
            }
        </button>
    );
};

export default IconButton;

@import "src/styles/mixins"
@import "src/styles/variables"

.icon_button
  @include flex-center
  padding: 8px 16px
  border: none
  border-radius: 8px
  background-color: $secondary-light !important
  position: relative
  cursor: pointer
  transition: 0.3s

  span
    margin-left: 8px
    color: $main-dark

  img
    height: 16px
    object-fit: contain

  @media(hover: hover)
    &:hover
      padding: 10px 20px
      border: 1px solid $secondary-light`},{summary:"components buttons (TS + STYLED COMPONENTS)",content:`import React,{FC} from 'react';
import styled from "styled-components";
import {colors, flexCenter} from "../../styles/styles";

interface IconButtonProps {
    label?: string,
    icon: string,
    alt?: string,
    iconLocation: 'before' | 'after',
    onClick: () => any,
}

const Button = styled.button\`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
   background-color: \${colors.secondaryLight} !important;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  \${flexCenter}
  span{
    color: \${colors.mainDark};
    margin: auto 8px;
  }
  img {
    height: 24px;
    object-fit: contain;
  }
  @media(hover: hover){
    &:hover {
      padding: 12px 24px;
      border: 1px solid \${colors.secondaryLight};
    }
  }
  @media(hover: none){
    &:active {
      padding: 12px 24px;
      border: 1px solid \${colors.secondaryLight};
    }
  }
\`;

const IconButton:FC<IconButtonProps> = ({label,icon,alt = 'text',iconLocation,onClick}) => {
    return(
        <Button onClick={onClick}>
            {iconLocation === 'before' &&
                <img src={icon} alt={alt}/>
            }
            {label &&
                <span>{label}</span>
            }
            {iconLocation === 'after' &&
                <img src={icon} alt={alt}/>
            }
        </Button>
    )
}

export default IconButton;`},{summary:"components navigation (JS + SASS)",content:`import React from 'react';
import classes from './Navigation.module.sass';
import {useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navigation = ({config, text}) => {
    const location = useLocation();
    return (
        <nav className={classes.wrapper}>
            {Object.entries(config).map(([key, value]) => {
                const isActive = location.pathname === value
                    ?classes.active :'';

                return (
                    <HashLink
                        smooth
                        to={value}
                        className={\`\${classes.link}
                        \${isActive}\`}
                        key={key}
                    >
                        {text[key]}
                    </HashLink>
                )
            })}
        </nav>
    );
};

export default Navigation;

@import "src/styles/mixins"
@import "src/styles/variables"

@keyframes enlarge
  from
    font-size: 1em
  to
    text-decoration: underline $main-light
    font-size: 1.1em

.wrapper
  display: flex
  align-items: center

  .link
    font-weight: bold
    text-decoration: none
    transition: 3s

    & + .link
      margin-left: 24px
      @media #{$mobile-width}
        margin-left: 12px

    @media(hover: hover)
      &:hover
        animation: enlarge 0.2s forwards

  @media (max-width: 450px)
    display: none

.active
  pointer-events: none
  opacity: 0.3`},{summary:"components (TS + SASS)",content:`import React from 'react';
import classes from './Navigation.module.sass';
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Типы для пропсов
interface NavigationProps {
  config: Record<string, string>;
  text: Record<string, string>;
}

const Navigation: React.FC<NavigationProps> = ({ config, text }) => {
  const location = useLocation();

  return (
    <nav className={classes.wrapper}>
      {Object.entries(config).map(([key, value]) => {
        const isActive = location.pathname === value ? classes.active : '';

        return (
          <HashLink
            smooth
            to={value}
            className={\`\${classes.link} \${isActive}\`}
            key={key}
          >
            {text[key]}
          </HashLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
`},{summary:"components images (JS + SASS)",content:`SCROLABLE IMAGE
import React from 'react';
import classes from './ScrollableImage.module.sass';

const ScrollableImage = ({src = '#', alt = 'image', className = ''}) => {

    return (
        <div
            className={\`\${classes.image_block} \${className}\`}
        >
            <img
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default ScrollableImage;

@import "src/styles/mixins"
@import "src/styles/variables"

.image_block
  width: 100%
  height: 100%
  overflow: auto
  img
    width: 100%

TOOLTIPED IMAGE
import React from 'react';
import classes from './TooltopedImage.module.sass';
import {Tooltip} from "@mui/material";

const TooltipedImage  = ({title,placement = 'top',image,alt}) => {
    const isImageSkills = image.includes('https://skillicons.dev/icons?i=');
    const skillsCount = (image.match(/,/g) || []).length + 1;

    return(
        <Tooltip
            title={title}
            arrow
            placement={placement}
        >
            <img
                src={image}
                alt={alt || title || image}
                className={classes.image}
                style={isImageSkills && {width: \`\${skillsCount * 40}px\`}}
            />
        </Tooltip>
    );
};

export default TooltipedImage;


.image
  height: 40px
  transition: transform 0.2s ease-in-out
  @media(hover: hover)
    &:hover
      transform: scale(1.1)
  @media(hover: none)
    &:active
      transform: scale(1.1)


ZOOMABLE IMAGE
import React, { useState } from 'react';
import classes from './ZoomableImage.module.sass';

const ZoomableImage = ({src, alt, className = ''}) => {
    const [zoomed, setZoomed] = useState(false);

    const handleZoomToggle = () => {
        setZoomed(!zoomed);
    };

    return (
        <div
            className={classes.modal}
            onClick={handleZoomToggle}
        >
            <img
                src={src}
                alt={alt}
                className={\`\${className} \${classes.image}\`}
            />
            {zoomed &&
                <div
                    onClick={handleZoomToggle}
                    className={classes.overlay}
                >
                    <div
                        className={classes.modal__image}
                    >
                        <img
                            src={src}
                            alt={alt}
                        />
                    </div>
                </div>
            }
        </div>
    );
};

export default ZoomableImage;

@import "src/styles/mixins"
@import "src/styles/variables"

.overlay
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background-color: rgba(0, 0, 0, 0.8)
  cursor: zoom-out
  @include flex-center
  z-index: 998

.image
  transition: .3s ease-in-out
  @media (hover: hover)
    &:hover
      transform: scale(1.1)

.modal
  position: relative
  display: inline-block
  cursor: zoom-in
  overflow: hidden
  border-radius: 8px
  &__image
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 90vw
    height: 90vh
    @include flex-center
    z-index: 9999
    img
      @include imageDefault
      object-fit: contain`},{summary:"components images (JS + SASS)",content:`SCROLABLE IMAGE
import React from 'react';
import classes from './ScrollableImage.module.sass';

interface ScrollableImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

const ScrollableImage: React.FC<ScrollableImageProps> = ({
  src = '#',
  alt = 'image',
  className = '',
}) => {
  return (
    <div className={\`\${classes.image_block} \${className}\`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ScrollableImage;

@import "src/styles/mixins"
@import "src/styles/variables"

.image_block
  width: 100%
  height: 100%
  overflow: auto
  img
    width: 100%

TOOLTIPED IMAGE
import React from 'react';
import classes from './TooltopedImage.module.sass';
import {Tooltip} from "@mui/material";

import React from 'react';
import classes from './TooltopedImage.module.sass';
import { Tooltip } from '@mui/material';

interface TooltipedImageProps {
  title: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  image: string;
  alt?: string;
}

const TooltipedImage: React.FC<TooltipedImageProps> = ({
  title,
  placement = 'top',
  image,
  alt,
}) => {
  const isImageSkills = image.includes('https://skillicons.dev/icons?i=');
  const skillsCount = (image.match(/,/g) || []).length + 1;

  return (
    <Tooltip title={title} arrow placement={placement}>
      <img
        src={image}
        alt={alt || title || image}
        className={classes.image}
        style={isImageSkills && { width: \`\${skillsCount * 40}px\` }}
      />
    </Tooltip>
  );
};

export default TooltipedImage;


.image
  height: 40px
  transition: transform 0.2s ease-in-out
  @media(hover: hover)
    &:hover
      transform: scale(1.1)
  @media(hover: none)
    &:active
      transform: scale(1.1)


ZOOMABLE IMAGE
import React, { useState } from 'react';
import classes from './ZoomableImage.module.sass';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  className = '',
}) => {
  const [zoomed, setZoomed] = useState<boolean>(false);

  const handleZoomToggle = () => {
    setZoomed(!zoomed);
  };

  return (
    <div className={classes.modal} onClick={handleZoomToggle}>
      <img
        src={src}
        alt={alt}
        className={\`\${className} \${classes.image}\`}
      />
      {zoomed && (
        <div onClick={handleZoomToggle} className={classes.overlay}>
          <div className={classes.modal__image}>
            <img src={src} alt={alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ZoomableImage;

@import "src/styles/mixins"
@import "src/styles/variables"

.overlay
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background-color: rgba(0, 0, 0, 0.8)
  cursor: zoom-out
  @include flex-center
  z-index: 998

.image
  transition: .3s ease-in-out
  @media (hover: hover)
    &:hover
      transform: scale(1.1)

.modal
  position: relative
  display: inline-block
  cursor: zoom-in
  overflow: hidden
  border-radius: 8px
  &__image
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 90vw
    height: 90vh
    @include flex-center
    z-index: 9999
    img
      @include imageDefault
      object-fit: contain`},{summary:"components loading spinner (JS + STYLED COMPONENTS)",content:`import React from "react";
import { CircularProgress } from "@mui/material";
import { styled } from "styled-components";

const Loading = styled.div\`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
\`;

const LoadingSpinner = ({ value = 'Загрузка...' }) => {
  return (
    <Loading>
      <CircularProgress />
      <p>{value}</p>
    </Loading>
  );
};

export default LoadingSpinner;
`},{summary:"components loading spinner (TS + STYLED COMPONENTS)",content:`import React,{FC} from "react";
import {CircularProgress} from "@mui/material";
import {styled} from "styled-components";

interface LoadingSpinnerProps {
    value?: string;
}
const Loading = styled.div\`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
\`;

const LoadingSpinner: FC<LoadingSpinnerProps> = ({value = 'Загрузка...'}) => {
  return (
      <Loading>
          <CircularProgress/>
          <p>{value}</p>
      </Loading>
  )
};

export default LoadingSpinner;`},{summary:"components modal (JS + COMPONENTS + REACT ROUTER DOM)",content:`import React, { Fragment } from 'react';
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { colors, flexCenter, flexCenter_column, justifyCenter_between, center_absolute } from "../../styles/styles";

const Overlay = styled.div\`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    @include flex-center;
    z-index: 998;
\`;
const ModalStyled = styled.div\`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid \${colors.secondaryLight};
    border-radius: 8px;
    box-sizing: content-box;
    \${flexCenter_column};
    z-index: 9999;    
\`;
const ModalHeader = styled.div\`
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    background-color: \${colors.secondaryDark};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    \${justifyCenter_between}
    button{
      width: 30px;
      aspect-ratio: 1;
      position: relative;
      cursor: pointer;
      &::before{
        content: 'x';
        font-size: 2rem;
        \${center_absolute};
        transform: translate(-50%,-60%);
      }
    }
\`;
const ModalContent = styled.div\`
    padding: 5px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    \${flexCenter}
\`;

const Modal = ({ title, content }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isMainPage = () => {
      return location.pathname === '/';
    };
    const handleClose = () => {
        navigate('/');
    };

    return isMainPage() ? null : (
        <Fragment>
            <Overlay />
            <ModalStyled>
                <ModalHeader>
                    <h2>{title}</h2>
                    <button onClick={handleClose} />
                </ModalHeader>
                <ModalContent>
                    {content}
                </ModalContent>
            </ModalStyled>
        </Fragment>
    );
};

export default Modal;
`},{summary:"components modal (TS + STYLED COMPONENTS + REACT ROUTE DOM)",content:`import React,{FC,Fragment,ReactElement} from 'react';
import styled from "styled-components";
import {useLocation,useNavigate} from "react-router-dom";
import {colors,flexCenter,flexCenter_column,justifyCenter_between,center_absolute} from "../../styles/styles";

interface ModalProps {
    title: string,
    content: ReactElement | string,
}

const Overlay = styled.div\`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    @include flex-center;
    z-index: 998;
\`;
const ModalStyled = styled.div\`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid \${colors.secondaryLight};
    border-radius: 8px;
    box-sizing: content-box;
    \${flexCenter_column};
    z-index: 9999;    
\`;
const ModalHeader = styled.div\`
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    background-color: \${colors.secondaryDark};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    \${justifyCenter_between}
    button{
      width: 30px;
      aspect-ratio: 1;
      position: relative;
      cursor: pointer;
      &::before{
        content: 'x';
        font-size: 2rem;
        \${center_absolute};
        transform: translate(-50%,-60%);
      }
    }
\`;
const ModalContent = styled.div\`
    padding: 5px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    \${flexCenter}
\`;

const Modal:FC<ModalProps> = ({title,content}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isMainPage = (): boolean => {
      return location.pathname === '/';
    };
    const handleClose = (): void => {
        navigate('/');
    };

    return isMainPage()?null:(
            <Fragment>
                <Overlay/>
                <ModalStyled>
                    <ModalHeader>
                        <h2>{title}</h2>
                        <button onClick={handleClose}/>
                    </ModalHeader>
                    <ModalContent>
                        {content}
                    </ModalContent>
                </ModalStyled>
            </Fragment>
        )
};

export default Modal;`}]};export{n as default};
//# sourceMappingURL=templates-CCWEh9b2.js.map
