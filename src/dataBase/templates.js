export default {
    title: "Шаблоны",
    navTitle: "Шаблоны",
    id: "templates",
    items: [
        {
            summary: "Шаблон Секции для Коднота",
            content: "export default {\n" +
                "    title: \"\",\n" +
                "    navTitle: \"\",\n" +
                "    id: \"\",\n" +
                "    items: [\n" +
                "        {\n" +
                "            summary: \"\",\n" +
                "            content: \"\"\n" +
                "        },\n" +
                "    ]\n" +
                "}"
        },
        {
          summary: 'Zoomable Image (styled components, useState)',
          content: 'import React, { useState } from \'react\';\n' +
              'import styled from "styled-components";\n' +
              'import {flexCenter, imageDefault} from "../../styles/styles";\n' +
              '\n' +
              'const Modal = styled.div`\n' +
              '  position: relative;\n' +
              '  display: inline-block;\n' +
              '  cursor: zoom-in;\n' +
              '  .modal__image{\n' +
              '    position: fixed;\n' +
              '    top: 50%;\n' +
              '    left: 50%;\n' +
              '    transform: translate(-50%, -50%);\n' +
              '    width: 90vw;\n' +
              '    height: 90vh;\n' +
              '    ${flexCenter};\n' +
              '    z-index: 30;\n' +
              '    img{\n' +
              '      object-fit: contain;\n' +
              '      ${imageDefault};\n' +
              '    }\n' +
              '  }\n' +
              '`;\n' +
              '\n' +
              'const Overlay = styled.div`\n' +
              '  position: fixed;\n' +
              '  top: 0;\n' +
              '  left: 0;\n' +
              '  width: 100vw;\n' +
              '  height: 100vh;\n' +
              '  background-color: rgba(0, 0, 0, 0.8);\n' +
              '  cursor: zoom-out;\n' +
              '  ${flexCenter};\n' +
              '  z-index: 20;\n' +
              '`;\n' +
              '\n' +
              'const ZoomableImage = ({src, alt, className = \'\'}) => {\n' +
              '    const [zoomed, setZoomed] = useState(false);\n' +
              '\n' +
              '    const handleZoomToggle = () => {\n' +
              '        setZoomed(!zoomed);\n' +
              '    };\n' +
              '\n' +
              '    return (\n' +
              '        <Modal\n' +
              '            className={className}\n' +
              '            onClick={handleZoomToggle}\n' +
              '        >\n' +
              '            <img\n' +
              '                src={src}\n' +
              '                alt={alt}\n' +
              '            />\n' +
              '            {\n' +
              '                zoomed &&\n' +
              '                <Overlay\n' +
              '                    onClick={handleZoomToggle}\n' +
              '                >\n' +
              '                    <div className=\'modal__image\'>\n' +
              '                        <img src={src} alt={alt}/>\n' +
              '                    </div>\n' +
              '                </Overlay>\n' +
              '            }\n' +
              '        </Modal>\n' +
              '    );\n' +
              '};\n' +
              '\n' +
              'export default ZoomableImage;' +
              '\n\n' +
              'Стили от styled components:\n' +
              'export const flexCenter = css`\n' +
              '    display: flex;\n' +
              '    align-items: center;\n' +
              '    justify-content: center;\n' +
              '`;\n' +
              'export const imageDefault = css`\n' +
              '    width: auto;\n' +
              '    height: auto;\n' +
              '    max-width: 100%;\n' +
              '    max-height: 100%;\n' +
              '`;' +
              '\n\n' +
              '' +
              'ВАНИЛА:\n' +
              'import React, { useState } from \'react\';\n' +
              'import styles from \'./ZoomableImage.module.css\';\n' +
              '\n' +
              'const ZoomableImage = ({ src, alt, className = \'\' }) => {\n' +
              '    const [zoomed, setZoomed] = useState(false);\n' +
              '\n' +
              '    const handleZoomToggle = () => {\n' +
              '        setZoomed(!zoomed);\n' +
              '    };\n' +
              '\n' +
              '    return (\n' +
              '        <div\n' +
              '            className={`${styles.modal} ${className}`}\n' +
              '            onClick={handleZoomToggle}\n' +
              '        >\n' +
              '            <img\n' +
              '                src={src}\n' +
              '                alt={alt}\n' +
              '            />\n' +
              '            {zoomed && (\n' +
              '                <div className={styles.overlay} onClick={handleZoomToggle}>\n' +
              '                    <div className={styles.modalImage}>\n' +
              '                        <img src={src} alt={alt} />\n' +
              '                    </div>\n' +
              '                </div>\n' +
              '            )}\n' +
              '        </div>\n' +
              '    );\n' +
              '};\n' +
              '\n' +
              'export default ZoomableImage;\n\n' +
              '.flexCenter {\n' +
              '    display: flex;\n' +
              '    align-items: center;\n' +
              '    justify-content: center;\n' +
              '}\n' +
              '\n' +
              '.imageDefault {\n' +
              '    width: auto;\n' +
              '    height: auto;\n' +
              '    max-width: 100%;\n' +
              '    max-height: 100%;\n' +
              '}\n' +
              '\n' +
              '.modal {\n' +
              '    position: relative;\n' +
              '    display: inline-block;\n' +
              '    cursor: zoom-in;\n' +
              '}\n' +
              '\n' +
              '.modalImage {\n' +
              '    position: fixed;\n' +
              '    top: 50%;\n' +
              '    left: 50%;\n' +
              '    transform: translate(-50%, -50%);\n' +
              '    width: 90vw;\n' +
              '    height: 90vh;\n' +
              '    z-index: 30;\n' +
              '}\n' +
              '.modalImage img {\n' +
              '    object-fit: contain;\n' +
              '    composes: imageDefault;\n' +
              '}\n' +
              '\n' +
              '.overlay {\n' +
              '    position: fixed;\n' +
              '    top: 0;\n' +
              '    left: 0;\n' +
              '    width: 100vw;\n' +
              '    height: 100vh;\n' +
              '    background-color: rgba(0, 0, 0, 0.8);\n' +
              '    cursor: zoom-out;\n' +
              '    z-index: 20;\n' +
              '    composes: flexCenter;\n' +
              '}\n'
        },
        {
          summary: 'css шаблоны STYLED COMPONENTS или MUI',
          content: 'import {css} from "styled-components";\n' +
              'ИЛИ\n' +
              'import { css } from \'@emotion/react\';\n' +
              '\n' +
              'export const media = {\n' +
              '  mobile: (...args) => css`\n' +
              '    @media only screen and (max-width: 767px) {\n' +
              '      ${css(...args)}\n' +
              '    }\n' +
              '  `,\n' +
              '  tablet: (...args) => css`\n' +
              '    @media only screen and (min-width: 767px) and (max-width: 991px) {\n' +
              '      ${css(...args)}\n' +
              '    }\n' +
              '  `,\n' +
              '  laptop: (...args) => css`\n' +
              '    @media only screen and (min-width: 991px) and (max-width: 1200px) {\n' +
              '      ${css(...args)}\n' +
              '    }\n' +
              '  `,\n' +
              '  desktop: (...args) => css`\n' +
              '    @media only screen and (min-width: 1200px) {\n' +
              '      ${css(...args)}\n' +
              '    }\n' +
              '  `,\n' +
              '};\n' +
              '\n' +
              'export const colors = {\n' +
              '  main: \'#351C0F\',\n' +
              '  mainRGB: \'53,28,15\',\n' +
              '  secondary: \'#E9E9E9\',\n' +
              '  secondaryRGB: \'233,233,233\',\n' +
              '  accent: \'#FF5733\',\n' +
              '  accentRGB: \'255,87,51\',\n' +
              '  background: \'#F0F0F0\',\n' +
              '  backgroundRGB: \'240,240,240\',\n' +
              '};\n' +
              '\n' +
              'export const headerHeight = {\n' +
              '  mobile: \'3rem\',\n' +
              '  tablet: \'4rem\',\n' +
              '  laptop: \'5rem\',\n' +
              '  desktop: \'6rem\',\n' +
              '  ultraWide: \'7rem\',\n' +
              '};\n' +
              '\n' +
              'export const container = css`\n' +
              '  width: 100vw;\n' +
              '  max-width: 90vw;\n' +
              '  margin-inline: auto;\n' +
              '  text-align: center;\n' +
              '  box-sizing: border-box;\n' +
              '  padding: 1rem;\n' +
              '`;\n' +
              '\n' +
              'export const imageDefault = css`\n' +
              '  width: auto;\n' +
              '  height: auto;\n' +
              '  max-width: 100%;\n' +
              '  max-height: 100%;\n' +
              '  border-radius: 0.5rem;\n' +
              '`;\n' +
              '\n' +
              '// Флекс позиционирование\n' +
              'export const justifyCenter_around = css`\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  justify-content: space-around;\n' +
              '`;\n' +
              '\n' +
              'export const justifyCenter_between = css`\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  justify-content: space-between;\n' +
              '`;\n' +
              '\n' +
              'export const justifyEnd_between = css`\n' +
              '  display: flex;\n' +
              '  align-items: end;\n' +
              '  justify-content: space-between;\n' +
              '`;\n' +
              '\n' +
              'export const flexCenter = css`\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  justify-content: center;\n' +
              '`;\n' +
              '\n' +
              'export const flexCenter_wrap = css`\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  justify-content: center;\n' +
              '  flex-wrap: wrap;\n' +
              '`;\n' +
              '\n' +
              'export const flexCenter_column = css`\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  justify-content: center;\n' +
              '  flex-direction: column;\n' +
              '`;\n' +
              '\n' +
              'export const flexStart = css`\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  justify-content: flex-start;\n' +
              '`;\n' +
              '\n' +
              'export const flexEnd = css`\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  justify-content: flex-end;\n' +
              '`;\n' +
              '\n' +
              'export const flexSpaceEvenly = css`\n' +
              '  display: flex;\n' +
              '  justify-content: space-evenly;\n' +
              '  align-items: center;\n' +
              '`;\n' +
              '\n' +
              '// Остальное позиционирование\n' +
              'export const center_relative = css`\n' +
              '  position: relative;\n' +
              '  top: 50%;\n' +
              '  left: 50%;\n' +
              '  transform: translate(-50%, -50%);\n' +
              '`;\n' +
              '\n' +
              'export const bottomStart_relative = css`\n' +
              '  position: relative;\n' +
              '  bottom: 0;\n' +
              '  left: 0;\n' +
              '`;\n' +
              '\n' +
              'export const center_absolute = css`\n' +
              '  position: absolute;\n' +
              '  top: 50%;\n' +
              '  left: 50%;\n' +
              '  transform: translate(-50%, -50%);\n' +
              '`;\n' +
              '\n' +
              'export const centerY_relative = css`\n' +
              '  position: relative;\n' +
              '  top: 50%;\n' +
              '  transform: translateY(-50%);\n' +
              '`;\n' +
              '\n' +
              'export const centerY_absolute = css`\n' +
              '  position: absolute;\n' +
              '  top: 50%;\n' +
              '  transform: translateY(-50%);\n' +
              '`;\n' +
              '\n' +
              'export const bottomStart_fixed = css`\n' +
              '  position: fixed;\n' +
              '  bottom: 0;\n' +
              '  left: 0;\n' +
              '`;\n' +
              '\n' +
              'export const center_fixed = css`\n' +
              '  position: fixed;\n' +
              '  top: 50%;\n' +
              '  left: 50%;\n' +
              '  transform: translate(-50%, -50%);\n' +
              '`;\n' +
              '\n' +
              'export const start_relative = css`\n' +
              '  position: relative;\n' +
              '  top: 0;\n' +
              '  left: 0;\n' +
              '`;\n' +
              '\n' +
              'export const start_absolute = css`\n' +
              '  position: absolute;\n' +
              '  top: 0;\n' +
              '  left: 0;\n' +
              '`;\n' +
              '\n' +
              'export const start_fixed = css`\n' +
              '  position: fixed;\n' +
              '  top: 0;\n' +
              '  left: 0;\n' +
              '`;\n' +
              '\n' +
              'export const borderBox = css`\n' +
              '  box-sizing: border-box;\n' +
              '`;\n' +
              '\n' +
              'export const card = css`\n' +
              '  ${borderBox};\n' +
              '  border: 1px solid ${colors.secondary};\n' +
              '  background-color: ${colors.background};\n' +
              '  border-radius: 8px;\n' +
              '  padding: 1rem;\n' +
              '  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n' +
              '`;\n' +
              '\n' +
              'export const buttonPrimary = css`\n' +
              '  ${flexCenter};\n' +
              '  padding: 0.5rem 1rem;\n' +
              '  background-color: ${colors.accent};\n' +
              '  color: #fff;\n' +
              '  border: none;\n' +
              '  border-radius: 4px;\n' +
              '  cursor: pointer;\n' +
              '  transition: background-color 0.3s ease;\n' +
              '\n' +
              '  &:hover {\n' +
              '    background-color: darken(${colors.accent}, 10%);\n' +
              '  }\n' +
              '`;\n'
        },
        {
            summary: 'css шаблоны VANILLA MODULE CSS',
            content: '/* colors.css */\n' +
                ':root {\n' +
                '  --main-color: #351C0F;\n' +
                '  --main-rgb: 53, 28, 15;\n' +
                '  --secondary-color: #E9E9E9;\n' +
                '  --secondary-rgb: 233, 233, 233;\n' +
                '  --accent-color: #FF5733;\n' +
                '  --accent-rgb: 255, 87, 51;\n' +
                '  --background-color: #F0F0F0;\n' +
                '  --background-rgb: 240, 240, 240;\n' +
                '  --header-height-mobile: 3rem;\n' +
                '  --header-height-tablet: 4rem;\n' +
                '  --header-height-laptop: 5rem;\n' +
                '  --header-height-desktop: 6rem;\n' +
                '  --header-height-ultrawide: 7rem;\n' +
                '}\n' +
                '\n' +
                '/* flex.css */\n' +
                '.flex-center {\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  justify-content: center;\n' +
                '}\n' +
                '\n' +
                '.flex-center-wrap {\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  justify-content: center;\n' +
                '  flex-wrap: wrap;\n' +
                '}\n' +
                '\n' +
                '.flex-center-column {\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  justify-content: center;\n' +
                '  flex-direction: column;\n' +
                '}\n' +
                '\n' +
                '.flex-start {\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  justify-content: flex-start;\n' +
                '}\n' +
                '\n' +
                '.flex-end {\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  justify-content: flex-end;\n' +
                '}\n' +
                '\n' +
                '.flex-space-evenly {\n' +
                '  display: flex;\n' +
                '  justify-content: space-evenly;\n' +
                '  align-items: center;\n' +
                '}\n' +
                '\n' +
                '.justify-center-around {\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  justify-content: space-around;\n' +
                '}\n' +
                '\n' +
                '.justify-center-between {\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  justify-content: space-between;\n' +
                '}\n' +
                '\n' +
                '.justify-end-between {\n' +
                '  display: flex;\n' +
                '  align-items: end;\n' +
                '  justify-content: space-between;\n' +
                '}\n' +
                '\n' +
                '/* positioning.css */\n' +
                '.center-relative {\n' +
                '  position: relative;\n' +
                '  top: 50%;\n' +
                '  left: 50%;\n' +
                '  transform: translate(-50%, -50%);\n' +
                '}\n' +
                '\n' +
                '.bottom-start-relative {\n' +
                '  position: relative;\n' +
                '  bottom: 0;\n' +
                '  left: 0;\n' +
                '}\n' +
                '\n' +
                '.center-absolute {\n' +
                '  position: absolute;\n' +
                '  top: 50%;\n' +
                '  left: 50%;\n' +
                '  transform: translate(-50%, -50%);\n' +
                '}\n' +
                '\n' +
                '.center-y-relative {\n' +
                '  position: relative;\n' +
                '  top: 50%;\n' +
                '  transform: translateY(-50%);\n' +
                '}\n' +
                '\n' +
                '.center-y-absolute {\n' +
                '  position: absolute;\n' +
                '  top: 50%;\n' +
                '  transform: translateY(-50%);\n' +
                '}\n' +
                '\n' +
                '.bottom-start-fixed {\n' +
                '  position: fixed;\n' +
                '  bottom: 0;\n' +
                '  left: 0;\n' +
                '}\n' +
                '\n' +
                '.center-fixed {\n' +
                '  position: fixed;\n' +
                '  top: 50%;\n' +
                '  left: 50%;\n' +
                '  transform: translate(-50%, -50%);\n' +
                '}\n' +
                '\n' +
                '.start-relative {\n' +
                '  position: relative;\n' +
                '  top: 0;\n' +
                '  left: 0;\n' +
                '}\n' +
                '\n' +
                '.start-absolute {\n' +
                '  position: absolute;\n' +
                '  top: 0;\n' +
                '  left: 0;\n' +
                '}\n' +
                '\n' +
                '.start-fixed {\n' +
                '  position: fixed;\n' +
                '  top: 0;\n' +
                '  left: 0;\n' +
                '}\n' +
                '\n' +
                '/* utilities.css */\n' +
                '.container {\n' +
                '  width: 100vw;\n' +
                '  max-width: 90vw;\n' +
                '  margin-inline: auto;\n' +
                '  text-align: center;\n' +
                '  box-sizing: border-box;\n' +
                '  padding: 1rem;\n' +
                '}\n' +
                '\n' +
                '.image-default {\n' +
                '  width: auto;\n' +
                '  height: auto;\n' +
                '  max-width: 100%;\n' +
                '  max-height: 100%;\n' +
                '  border-radius: 0.5rem;\n' +
                '}\n' +
                '\n' +
                '.border-box {\n' +
                '  box-sizing: border-box;\n' +
                '}\n' +
                '\n' +
                '.card {\n' +
                '  composes: border-box;\n' +
                '  border: 1px solid var(--secondary-color);\n' +
                '  background-color: var(--background-color);\n' +
                '  border-radius: 8px;\n' +
                '  padding: 1rem;\n' +
                '  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n' +
                '}\n' +
                '\n' +
                '.button-primary {\n' +
                '  composes: flex-center;\n' +
                '  padding: 0.5rem 1rem;\n' +
                '  background-color: var(--accent-color);\n' +
                '  color: #fff;\n' +
                '  border: none;\n' +
                '  border-radius: 4px;\n' +
                '  cursor: pointer;\n' +
                '  transition: background-color 0.3s ease;\n' +
                '}\n' +
                '\n' +
                '.button-primary:hover {\n' +
                '  background-color: rgba(var(--accent-rgb), 0.9);\n' +
                '}\n' +
                '\n' +
                '/* media.css */\n' +
                '@media only screen and (max-width: 767px) {\n' +
                '  .media-mobile {\n' +
                '    /* Add mobile-specific styles here */\n' +
                '  }\n' +
                '}\n' +
                '\n' +
                '@media only screen and (min-width: 767px) and (max-width: 991px) {\n' +
                '  .media-tablet {\n' +
                '    /* Add tablet-specific styles here */\n' +
                '  }\n' +
                '}\n' +
                '\n' +
                '@media only screen and (min-width: 991px) and (max-width: 1200px) {\n' +
                '  .media-laptop {\n' +
                '    /* Add laptop-specific styles here */\n' +
                '  }\n' +
                '}\n' +
                '\n' +
                '@media only screen and (min-width: 1200px) {\n' +
                '  .media-desktop {\n' +
                '    /* Add desktop-specific styles here */\n' +
                '  }\n' +
                '}\n'
        },
        {
            summary: 'css шаблоны LESS и SASS',
            content: '/* colors.less */\n' +
                '@main-color: #351C0F;\n' +
                '@main-rgb: 53, 28, 15;\n' +
                '@secondary-color: #E9E9E9;\n' +
                '@secondary-rgb: 233, 233, 233;\n' +
                '@accent-color: #FF5733;\n' +
                '@accent-rgb: 255, 87, 51;\n' +
                '@background-color: #F0F0F0;\n' +
                '@background-rgb: 240, 240, 240;\n' +
                '\n' +
                '@header-height-mobile: 3rem;\n' +
                '@header-height-tablet: 4rem;\n' +
                '@header-height-laptop: 5rem;\n' +
                '@header-height-desktop: 6rem;\n' +
                '@header-height-ultrawide: 7rem;\n' +
                '\n' +
                '/* flex.less */\n' +
                '.flex-center() {\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  justify-content: center;\n' +
                '}\n' +
                '\n' +
                '.flex-center-wrap() {\n' +
                '  .flex-center();\n' +
                '  flex-wrap: wrap;\n' +
                '}\n' +
                '\n' +
                '.flex-center-column() {\n' +
                '  .flex-center();\n' +
                '  flex-direction: column;\n' +
                '}\n' +
                '\n' +
                '.flex-start() {\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  justify-content: flex-start;\n' +
                '}\n' +
                '\n' +
                '.flex-end() {\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  justify-content: flex-end;\n' +
                '}\n' +
                '\n' +
                '/* positioning.less */\n' +
                '.center-relative() {\n' +
                '  position: relative;\n' +
                '  top: 50%;\n' +
                '  left: 50%;\n' +
                '  transform: translate(-50%, -50%);\n' +
                '}\n' +
                '\n' +
                '.bottom-start-relative() {\n' +
                '  position: relative;\n' +
                '  bottom: 0;\n' +
                '  left: 0;\n' +
                '}\n' +
                '\n' +
                '.center-absolute() {\n' +
                '  position: absolute;\n' +
                '  top: 50%;\n' +
                '  left: 50%;\n' +
                '  transform: translate(-50%, -50%);\n' +
                '}\n' +
                '\n' +
                '/* utilities.less */\n' +
                '.container {\n' +
                '  width: 100vw;\n' +
                '  max-width: 90vw;\n' +
                '  margin-inline: auto;\n' +
                '  text-align: center;\n' +
                '  box-sizing: border-box;\n' +
                '}\n' +
                '\n' +
                '.image-default {\n' +
                '  width: auto;\n' +
                '  height: auto;\n' +
                '  max-width: 100%;\n' +
                '  max-height: 100%;\n' +
                '}\n' +
                '\n' +
                '/* media.less */\n' +
                '@media (max-width: 767px) {\n' +
                '  .media-mobile {\n' +
                '    /* Mobile-specific styles */\n' +
                '  }\n' +
                '}\n' +
                '\n' +
                '@media (min-width: 767px) and (max-width: 991px) {\n' +
                '  .media-tablet {\n' +
                '    /* Tablet-specific styles */\n' +
                '  }\n' +
                '}',
        },
        {
            summary: 'css шаблоны SASS',
            content: '@import "src/styles/variables"\n' +
                '\n' +
                '// флекс центрирование\n' +
                '@mixin justify-center-around\n' +
                '  display: flex\n' +
                '  align-items: center\n' +
                '  justify-content: space-around\n' +
                '\n' +
                '@mixin justify-center-between\n' +
                '  display: flex\n' +
                '  align-items: center\n' +
                '  justify-content: space-between\n' +
                '\n' +
                '@mixin flex-center\n' +
                '  display: flex\n' +
                '  align-items: center\n' +
                '  justify-content: center\n' +
                '\n' +
                '@mixin flex-center-wrap\n' +
                '  display: flex\n' +
                '  align-items: center\n' +
                '  justify-content: center\n' +
                '  flex-wrap: wrap\n' +
                '\n' +
                '@mixin flex-center-column\n' +
                '  display: flex\n' +
                '  flex-direction: column\n' +
                '  align-items: center\n' +
                '\n' +
                '// позиционное центрирование\n' +
                '@mixin center-relative\n' +
                '  position: relative\n' +
                '  top: 50%\n' +
                '  left: 50%\n' +
                '  transform: translate(-50%, -50%)\n' +
                '\n' +
                '@mixin center-absolute\n' +
                '  position: absolute\n' +
                '  top: 50%\n' +
                '  left: 50%\n' +
                '  transform: translate(-50%, -50%)\n' +
                '\n' +
                '@mixin center-fixed\n' +
                '  position: absolute\n' +
                '  top: 50%\n' +
                '  left: 50%\n' +
                '  transform: translate(-50%, -50%)\n' +
                '\n' +
                '@mixin start-relative\n' +
                '  position: relative\n' +
                '  top: 0\n' +
                '  left: 0\n' +
                '\n' +
                '@mixin start-absolute\n' +
                '  position: absolute\n' +
                '  top: 0\n' +
                '  left: 0\n' +
                '\n' +
                '@mixin start-fixed\n' +
                '  position: absolute\n' +
                '  top: 0\n' +
                '  left: 0\n' +
                '\n' +
                '// градиент\n' +
                '@mixin gradient($color1, $color2)\n' +
                '  background-image: linear-gradient($color1, $color2)\n' +
                '\n' +
                '// анимация\n' +
                '@mixin animation($name, $duration, $timing-function, $iteration-count)\n' +
                '  animation-name: $name\n' +
                '  animation-duration: $duration\n' +
                '  animation-timing-function: $timing-function\n' +
                '  animation-iteration-count: $iteration-count\n' +
                '\n' +
                '// миксин для создания карточки с тенью и радиусом скругления\n' +
                '@mixin card-style\n' +
                '  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)\n' +
                '  border-radius: 8px\n' +
                '  padding: $base-padding\n' +
                '  margin: $base-margin\n' +
                '\n' +
                '// дефолтные стили\n' +
                '@mixin imageDefault\n' +
                '  width: auto\n' +
                '  height: auto\n' +
                '  max-width: 100%\n' +
                '  max-height: 100%\n' +
                '\n' +
                '// миксин для создания градиентного фона с углами\n' +
                '@mixin gradient-angle($color1, $color2, $angle)\n' +
                '  background-image: linear-gradient($angle, $color1, $color2)\n' +
                '\n' +
                '// миксин для создания анимации с задержкой\n' +
                '@mixin animation-delay($name, $duration, $timing-function, $iteration-count, $delay)\n' +
                '  animation-name: $name\n' +
                '  animation-duration: $duration\n' +
                '  animation-timing-function: $timing-function\n' +
                '  animation-iteration-count: $iteration-count\n' +
                '  animation-delay: $delay\n' +
                '\n\n' +
                '// переменные для цветов\n' +
                '$main-dark: #161513\n' +
                '$secondary-dark: #1C1C22\n' +
                '$main-light: #E3E0DEFF\n' +
                '$secondary-light: #B5B5BBFF\n' +
                '$accent-color: #FF5733\n' +
                '$accent-rgb: 255, 87, 51\n' +
                '$background-color: #F0F0F0\n' +
                '$background-rgb: 240, 240, 240\n' +
                '\n' +
                '// размеры\n' +
                '$title-margin: 25px\n' +
                '$block-margin: $title-margin / 2\n' +
                '$inner-block-margin: $block-margin / 2\n' +
                '\n' +
                '// медиа запросы\n' +
                '$mobile-width: "(max-width: 767px)"\n' +
                '$tablet-width: "(min-width: 767px) and (max-width: 991px)"\n' +
                '$laptop-width: "(min-width: 991px) and (max-width: 1200px)"\n' +
                '$desktop-width: "(min-width: 1200px)"\n' +
                '\n' +
                '// z индекс\n' +
                '$z-index-popup: 500\n' +
                '$z-index-overlay: 450\n' +
                '$z-index-tooltip: 50\n' +
                '\n' +
                '// размеры для хедера\n' +
                '$header-height: 60px\n' +
                '$section-vh: calc(100dvh - #{$header-height})\n' +
                '\n' +
                '// функции\n' +
                '@function section-vh-plus($number)\n' +
                '  @return $number + $section-vh\n' +
                '\n' +
                '@function header-height-plus($number)\n' +
                '  @return $number + $header-height\n' +
                '\n' +
                '// шрифты\n' +
                '$font-family-main: \'Arial\', sans-serif\n' +
                '$font-family-heading: \'Helvetica\', sans-serif\n' +
                '\n' +
                '// радиус скругления\n' +
                '$border-radius-small: 4px\n' +
                '$border-radius-medium: 8px\n' +
                '$border-radius-large: 16px\n' +
                '\n' +
                '// ширина границы\n' +
                '$border-width: 1px\n' +
                '$border-color: rgba(0, 0, 0, 0.1)\n' +
                '\n' +
                '// отступы\n' +
                '$base-padding: 1rem\n' +
                '$base-margin: 1rem\n' +
                '$card-padding: 2rem\n' +
                '\n' +
                '// светлые и темные режимы\n' +
                '$light-mode-background: #FFFFFF\n' +
                '$dark-mode-background: #121212\n' +
                '\n' +
                '// альфа каналы\n' +
                '$alpha-channel-light: rgba(255, 255, 255, 0.8)\n' +
                '$alpha-channel-dark: rgba(0, 0, 0, 0.8)\n',
        },
        {
            summary: 'components requests',
            content: 'JS\n' +
                'import {useEffect, useState} from \'react\';\n' +
                '\n' +
                'export const useFetch = (url, options = {}) => {\n' +
                '    const [data, setData] = useState([]);\n' +
                '    const [error, setError] = useState(\'\');\n' +
                '    const [loading, setLoading] = useState(true);\n' +
                '\n' +
                '    useEffect(() => {\n' +
                '        const fetchData = async () => {\n' +
                '            try {\n' +
                '                const response = await fetch(url, options);\n' +
                '                const responseData = await response.json();\n' +
                '\n' +
                '                response.ok\n' +
                '                    ?setData(responseData)\n' +
                '                    :setError(\n' +
                '                        `Ошибка запроса на сервер! Код ошибки: ${response.status}`\n' +
                '                    );\n' +
                '            } catch (error) {\n' +
                '                setError(`Произошла ошибка: ${error.message}`);\n' +
                '            } finally {\n' +
                '                setLoading(false);\n' +
                '            }\n' +
                '        };\n' +
                '        fetchData();\n' +
                '    }, []);\n' +
                '\n' +
                '    return {data, error, loading};\n' +
                '};\n' +
                '\n' +
                'TS\n' +
                'import {useState, useEffect} from "react";\n' +
                '\n' +
                'export interface ObjectWithUnknownValue {\n' +
                '    [key: string]: unknown;\n' +
                '}\n' +
                'export interface FetchResponse<T> {\n' +
                '    data: T | null;\n' +
                '    error: string;\n' +
                '    isLoading: boolean;\n' +
                '}\n' +
                '\n' +
                'export const useFetch = <T>(url: string, options?: ObjectWithUnknownValue): FetchResponse<T> => {\n' +
                '    const [data, setData] = useState<T | null>(null);\n' +
                '    const [error, setError] = useState<string>(\'\');\n' +
                '    const [isLoading, setIsLoading] = useState<boolean>(true);\n' +
                '\n' +
                '    useEffect(() => {\n' +
                '        const fetchData = async () => {\n' +
                '            try {\n' +
                '                const response = await fetch(url, options);\n' +
                '                const responseData = await response.json();\n' +
                '\n' +
                '                response.ok\n' +
                '                    ?setData(responseData)\n' +
                '                    :setError(`Ошибка запроса на сервер! Код ошибки: ${response.status}`);\n' +
                '            } catch (error: any) {\n' +
                '                setError(`Произошла ошибка${\': \' + error.message}`);\n' +
                '            } finally {\n' +
                '                setIsLoading(false);\n' +
                '            }\n' +
                '        };\n' +
                '\n' +
                '        fetchData();\n' +
                '    }, [url, options]);\n' +
                '\n' +
                '    return {data, error, isLoading};\n' +
                '};',
        },
        {
            summary: 'components buttons (JS + SASS)',
            content: 'import React from "react";\n' +
                '\n' +
                'const Button = ({children,func,customClasses = \'\'}) => {\n' +
                '  return <button\n' +
                '      onClick={func}\n' +
                '      className={customClasses}\n' +
                '  >\n' +
                '      {children}\n' +
                '  </button>\n' +
                '};\n' +
                '\n' +
                'export default Button;\n' +
                '\n' +
                'import React from \'react\';\n' +
                'import classes from \'./Buttons.module.sass\';\n' +
                '\n' +
                'const IconButton = ({label, icon, isBefore = true, onClick, className = \'\'}) => {\n' +
                '    const beforeOrAfter = isBefore\n' +
                '        ?\'before\'\n' +
                '        :\'after\';\n' +
                '\n' +
                '    const handleClick = () => {\n' +
                '        onClick && onClick();\n' +
                '    };\n' +
                '\n' +
                '    return (\n' +
                '        <button className={`${classes.icon_button} ${beforeOrAfter} ${className}`} onClick={handleClick}>\n' +
                '            {isBefore &&\n' +
                '                <img\n' +
                '                    src={icon}\n' +
                '                    alt="Before"\n' +
                '                />\n' +
                '            }\n' +
                '            {label &&\n' +
                '                <span>\n' +
                '                    {label}\n' +
                '                </span>\n' +
                '            }\n' +
                '            {!isBefore &&\n' +
                '                <img\n' +
                '                    src={icon}\n' +
                '                    alt="After"\n' +
                '                />\n' +
                '            }\n' +
                '        </button>\n' +
                '    );\n' +
                '};\n' +
                '\n' +
                'export default IconButton;\n' +
                '\n' +
                '@import "src/styles/mixins"\n' +
                '@import "src/styles/variables"\n' +
                '\n' +
                '.icon_button\n' +
                '  @include flex-center\n' +
                '  padding: 8px 16px\n' +
                '  border: none\n' +
                '  border-radius: 8px\n' +
                '  background-color: $secondary-light !important\n' +
                '  position: relative\n' +
                '  cursor: pointer\n' +
                '  transition: 0.3s\n' +
                '\n' +
                '  span\n' +
                '    margin-left: 8px\n' +
                '    color: $main-dark\n' +
                '\n' +
                '  img\n' +
                '    height: 16px\n' +
                '    object-fit: contain\n' +
                '\n' +
                '  @media(hover: hover)\n' +
                '    &:hover\n' +
                '      padding: 10px 20px\n' +
                '      border: 1px solid $secondary-light'
        },
        {
          summary: 'components buttons (TS + STYLED COMPONENTS)',
          content: 'import React,{FC} from \'react\';\n' +
              'import styled from "styled-components";\n' +
              'import {colors, flexCenter} from "../../styles/styles";\n' +
              '\n' +
              'interface IconButtonProps {\n' +
              '    label?: string,\n' +
              '    icon: string,\n' +
              '    alt?: string,\n' +
              '    iconLocation: \'before\' | \'after\',\n' +
              '    onClick: () => any,\n' +
              '}\n' +
              '\n' +
              'const Button = styled.button`\n' +
              '  padding: 10px 20px;\n' +
              '  border: none;\n' +
              '  border-radius: 8px;\n' +
              '   background-color: ${colors.secondaryLight} !important;\n' +
              '  position: relative;\n' +
              '  cursor: pointer;\n' +
              '  transition: 0.3s;\n' +
              '  ${flexCenter}\n' +
              '  span{\n' +
              '    color: ${colors.mainDark};\n' +
              '    margin: auto 8px;\n' +
              '  }\n' +
              '  img {\n' +
              '    height: 24px;\n' +
              '    object-fit: contain;\n' +
              '  }\n' +
              '  @media(hover: hover){\n' +
              '    &:hover {\n' +
              '      padding: 12px 24px;\n' +
              '      border: 1px solid ${colors.secondaryLight};\n' +
              '    }\n' +
              '  }\n' +
              '  @media(hover: none){\n' +
              '    &:active {\n' +
              '      padding: 12px 24px;\n' +
              '      border: 1px solid ${colors.secondaryLight};\n' +
              '    }\n' +
              '  }\n' +
              '`;\n' +
              '\n' +
              'const IconButton:FC<IconButtonProps> = ({label,icon,alt = \'text\',iconLocation,onClick}) => {\n' +
              '    return(\n' +
              '        <Button onClick={onClick}>\n' +
              '            {iconLocation === \'before\' &&\n' +
              '                <img src={icon} alt={alt}/>\n' +
              '            }\n' +
              '            {label &&\n' +
              '                <span>{label}</span>\n' +
              '            }\n' +
              '            {iconLocation === \'after\' &&\n' +
              '                <img src={icon} alt={alt}/>\n' +
              '            }\n' +
              '        </Button>\n' +
              '    )\n' +
              '}\n' +
              '\n' +
              'export default IconButton;'
        },
        {
            summary: 'components navigation (JS + SASS)',
            content: 'import React from \'react\';\n' +
                'import classes from \'./Navigation.module.sass\';\n' +
                'import {useLocation} from "react-router-dom";\n' +
                'import {HashLink} from "react-router-hash-link";\n' +
                '\n' +
                'const Navigation = ({config, text}) => {\n' +
                '    const location = useLocation();\n' +
                '    return (\n' +
                '        <nav className={classes.wrapper}>\n' +
                '            {Object.entries(config).map(([key, value]) => {\n' +
                '                const isActive = location.pathname === value\n' +
                '                    ?classes.active :\'\';\n' +
                '\n' +
                '                return (\n' +
                '                    <HashLink\n' +
                '                        smooth\n' +
                '                        to={value}\n' +
                '                        className={`${classes.link}\n' +
                '                        ${isActive}`}\n' +
                '                        key={key}\n' +
                '                    >\n' +
                '                        {text[key]}\n' +
                '                    </HashLink>\n' +
                '                )\n' +
                '            })}\n' +
                '        </nav>\n' +
                '    );\n' +
                '};\n' +
                '\n' +
                'export default Navigation;\n' +
                '\n' +
                '@import "src/styles/mixins"\n' +
                '@import "src/styles/variables"\n' +
                '\n' +
                '@keyframes enlarge\n' +
                '  from\n' +
                '    font-size: 1em\n' +
                '  to\n' +
                '    text-decoration: underline $main-light\n' +
                '    font-size: 1.1em\n' +
                '\n' +
                '.wrapper\n' +
                '  display: flex\n' +
                '  align-items: center\n' +
                '\n' +
                '  .link\n' +
                '    font-weight: bold\n' +
                '    text-decoration: none\n' +
                '    transition: 3s\n' +
                '\n' +
                '    & + .link\n' +
                '      margin-left: 24px\n' +
                '      @media #{$mobile-width}\n' +
                '        margin-left: 12px\n' +
                '\n' +
                '    @media(hover: hover)\n' +
                '      &:hover\n' +
                '        animation: enlarge 0.2s forwards\n' +
                '\n' +
                '  @media (max-width: 450px)\n' +
                '    display: none\n' +
                '\n' +
                '.active\n' +
                '  pointer-events: none\n' +
                '  opacity: 0.3'
        },
        {
            summary: 'components (TS + SASS)',
            content: 'import React from \'react\';\n' +
                'import classes from \'./Navigation.module.sass\';\n' +
                'import { useLocation } from "react-router-dom";\n' +
                'import { HashLink } from "react-router-hash-link";\n' +
                '\n' +
                '// Типы для пропсов\n' +
                'interface NavigationProps {\n' +
                '  config: Record<string, string>;\n' +
                '  text: Record<string, string>;\n' +
                '}\n' +
                '\n' +
                'const Navigation: React.FC<NavigationProps> = ({ config, text }) => {\n' +
                '  const location = useLocation();\n' +
                '\n' +
                '  return (\n' +
                '    <nav className={classes.wrapper}>\n' +
                '      {Object.entries(config).map(([key, value]) => {\n' +
                '        const isActive = location.pathname === value ? classes.active : \'\';\n' +
                '\n' +
                '        return (\n' +
                '          <HashLink\n' +
                '            smooth\n' +
                '            to={value}\n' +
                '            className={`${classes.link} ${isActive}`}\n' +
                '            key={key}\n' +
                '          >\n' +
                '            {text[key]}\n' +
                '          </HashLink>\n' +
                '        );\n' +
                '      })}\n' +
                '    </nav>\n' +
                '  );\n' +
                '};\n' +
                '\n' +
                'export default Navigation;\n'
        },
        {
            summary: 'components images (JS + SASS)',
            content: 'SCROLABLE IMAGE\n' +
                'import React from \'react\';\n' +
                'import classes from \'./ScrollableImage.module.sass\';\n' +
                '\n' +
                'const ScrollableImage = ({src = \'#\', alt = \'image\', className = \'\'}) => {\n' +
                '\n' +
                '    return (\n' +
                '        <div\n' +
                '            className={`${classes.image_block} ${className}`}\n' +
                '        >\n' +
                '            <img\n' +
                '                src={src}\n' +
                '                alt={alt}\n' +
                '            />\n' +
                '        </div>\n' +
                '    );\n' +
                '};\n' +
                '\n' +
                'export default ScrollableImage;\n' +
                '\n' +
                '@import "src/styles/mixins"\n' +
                '@import "src/styles/variables"\n' +
                '\n' +
                '.image_block\n' +
                '  width: 100%\n' +
                '  height: 100%\n' +
                '  overflow: auto\n' +
                '  img\n' +
                '    width: 100%\n' +
                '\n' +
                'TOOLTIPED IMAGE\n' +
                'import React from \'react\';\n' +
                'import classes from \'./TooltopedImage.module.sass\';\n' +
                'import {Tooltip} from "@mui/material";\n' +
                '\n' +
                'const TooltipedImage  = ({title,placement = \'top\',image,alt}) => {\n' +
                '    const isImageSkills = image.includes(\'https://skillicons.dev/icons?i=\');\n' +
                '    const skillsCount = (image.match(/,/g) || []).length + 1;\n' +
                '\n' +
                '    return(\n' +
                '        <Tooltip\n' +
                '            title={title}\n' +
                '            arrow\n' +
                '            placement={placement}\n' +
                '        >\n' +
                '            <img\n' +
                '                src={image}\n' +
                '                alt={alt || title || image}\n' +
                '                className={classes.image}\n' +
                '                style={isImageSkills && {width: `${skillsCount * 40}px`}}\n' +
                '            />\n' +
                '        </Tooltip>\n' +
                '    );\n' +
                '};\n' +
                '\n' +
                'export default TooltipedImage;\n' +
                '\n\n' +
                '.image\n' +
                '  height: 40px\n' +
                '  transition: transform 0.2s ease-in-out\n' +
                '  @media(hover: hover)\n' +
                '    &:hover\n' +
                '      transform: scale(1.1)\n' +
                '  @media(hover: none)\n' +
                '    &:active\n' +
                '      transform: scale(1.1)\n' +
                '\n\n' +
                'ZOOMABLE IMAGE\n' +
                'import React, { useState } from \'react\';\n' +
                'import classes from \'./ZoomableImage.module.sass\';\n' +
                '\n' +
                'const ZoomableImage = ({src, alt, className = \'\'}) => {\n' +
                '    const [zoomed, setZoomed] = useState(false);\n' +
                '\n' +
                '    const handleZoomToggle = () => {\n' +
                '        setZoomed(!zoomed);\n' +
                '    };\n' +
                '\n' +
                '    return (\n' +
                '        <div\n' +
                '            className={classes.modal}\n' +
                '            onClick={handleZoomToggle}\n' +
                '        >\n' +
                '            <img\n' +
                '                src={src}\n' +
                '                alt={alt}\n' +
                '                className={`${className} ${classes.image}`}\n' +
                '            />\n' +
                '            {zoomed &&\n' +
                '                <div\n' +
                '                    onClick={handleZoomToggle}\n' +
                '                    className={classes.overlay}\n' +
                '                >\n' +
                '                    <div\n' +
                '                        className={classes.modal__image}\n' +
                '                    >\n' +
                '                        <img\n' +
                '                            src={src}\n' +
                '                            alt={alt}\n' +
                '                        />\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            }\n' +
                '        </div>\n' +
                '    );\n' +
                '};\n' +
                '\n' +
                'export default ZoomableImage;\n' +
                '\n' +
                '@import "src/styles/mixins"\n' +
                '@import "src/styles/variables"\n' +
                '\n' +
                '.overlay\n' +
                '  position: fixed\n' +
                '  top: 0\n' +
                '  left: 0\n' +
                '  width: 100vw\n' +
                '  height: 100vh\n' +
                '  background-color: rgba(0, 0, 0, 0.8)\n' +
                '  cursor: zoom-out\n' +
                '  @include flex-center\n' +
                '  z-index: 998\n' +
                '\n' +
                '.image\n' +
                '  transition: .3s ease-in-out\n' +
                '  @media (hover: hover)\n' +
                '    &:hover\n' +
                '      transform: scale(1.1)\n' +
                '\n' +
                '.modal\n' +
                '  position: relative\n' +
                '  display: inline-block\n' +
                '  cursor: zoom-in\n' +
                '  overflow: hidden\n' +
                '  border-radius: 8px\n' +
                '  &__image\n' +
                '    position: fixed\n' +
                '    top: 50%\n' +
                '    left: 50%\n' +
                '    transform: translate(-50%, -50%)\n' +
                '    width: 90vw\n' +
                '    height: 90vh\n' +
                '    @include flex-center\n' +
                '    z-index: 9999\n' +
                '    img\n' +
                '      @include imageDefault\n' +
                '      object-fit: contain'
        },
        {
            summary: 'components images (JS + SASS)',
            content: 'SCROLABLE IMAGE\n' +
                'import React from \'react\';\n' +
                'import classes from \'./ScrollableImage.module.sass\';\n' +
                '\n' +
                'interface ScrollableImageProps {\n' +
                '  src?: string;\n' +
                '  alt?: string;\n' +
                '  className?: string;\n' +
                '}\n' +
                '\n' +
                'const ScrollableImage: React.FC<ScrollableImageProps> = ({\n' +
                '  src = \'#\',\n' +
                '  alt = \'image\',\n' +
                '  className = \'\',\n' +
                '}) => {\n' +
                '  return (\n' +
                '    <div className={`${classes.image_block} ${className}`}>\n' +
                '      <img src={src} alt={alt} />\n' +
                '    </div>\n' +
                '  );\n' +
                '};\n' +
                '\n' +
                'export default ScrollableImage;\n' +
                '\n' +
                '@import "src/styles/mixins"\n' +
                '@import "src/styles/variables"\n' +
                '\n' +
                '.image_block\n' +
                '  width: 100%\n' +
                '  height: 100%\n' +
                '  overflow: auto\n' +
                '  img\n' +
                '    width: 100%\n' +
                '\n' +
                'TOOLTIPED IMAGE\n' +
                'import React from \'react\';\n' +
                'import classes from \'./TooltopedImage.module.sass\';\n' +
                'import {Tooltip} from "@mui/material";\n' +
                '\n' +
                'import React from \'react\';\n' +
                'import classes from \'./TooltopedImage.module.sass\';\n' +
                'import { Tooltip } from \'@mui/material\';\n' +
                '\n' +
                'interface TooltipedImageProps {\n' +
                '  title: string;\n' +
                '  placement?: \'top\' | \'bottom\' | \'left\' | \'right\';\n' +
                '  image: string;\n' +
                '  alt?: string;\n' +
                '}\n' +
                '\n' +
                'const TooltipedImage: React.FC<TooltipedImageProps> = ({\n' +
                '  title,\n' +
                '  placement = \'top\',\n' +
                '  image,\n' +
                '  alt,\n' +
                '}) => {\n' +
                '  const isImageSkills = image.includes(\'https://skillicons.dev/icons?i=\');\n' +
                '  const skillsCount = (image.match(/,/g) || []).length + 1;\n' +
                '\n' +
                '  return (\n' +
                '    <Tooltip title={title} arrow placement={placement}>\n' +
                '      <img\n' +
                '        src={image}\n' +
                '        alt={alt || title || image}\n' +
                '        className={classes.image}\n' +
                '        style={isImageSkills && { width: `${skillsCount * 40}px` }}\n' +
                '      />\n' +
                '    </Tooltip>\n' +
                '  );\n' +
                '};\n' +
                '\n' +
                'export default TooltipedImage;\n' +
                '\n\n' +
                '.image\n' +
                '  height: 40px\n' +
                '  transition: transform 0.2s ease-in-out\n' +
                '  @media(hover: hover)\n' +
                '    &:hover\n' +
                '      transform: scale(1.1)\n' +
                '  @media(hover: none)\n' +
                '    &:active\n' +
                '      transform: scale(1.1)\n' +
                '\n\n' +
                'ZOOMABLE IMAGE\n' +
                'import React, { useState } from \'react\';\n' +
                'import classes from \'./ZoomableImage.module.sass\';\n' +
                '\n' +
                'interface ZoomableImageProps {\n' +
                '  src: string;\n' +
                '  alt: string;\n' +
                '  className?: string;\n' +
                '}\n' +
                '\n' +
                'const ZoomableImage: React.FC<ZoomableImageProps> = ({\n' +
                '  src,\n' +
                '  alt,\n' +
                '  className = \'\',\n' +
                '}) => {\n' +
                '  const [zoomed, setZoomed] = useState<boolean>(false);\n' +
                '\n' +
                '  const handleZoomToggle = () => {\n' +
                '    setZoomed(!zoomed);\n' +
                '  };\n' +
                '\n' +
                '  return (\n' +
                '    <div className={classes.modal} onClick={handleZoomToggle}>\n' +
                '      <img\n' +
                '        src={src}\n' +
                '        alt={alt}\n' +
                '        className={`${className} ${classes.image}`}\n' +
                '      />\n' +
                '      {zoomed && (\n' +
                '        <div onClick={handleZoomToggle} className={classes.overlay}>\n' +
                '          <div className={classes.modal__image}>\n' +
                '            <img src={src} alt={alt} />\n' +
                '          </div>\n' +
                '        </div>\n' +
                '      )}\n' +
                '    </div>\n' +
                '  );\n' +
                '};\n' +
                '\n' +
                'export default ZoomableImage;\n' +
                '\n' +
                '@import "src/styles/mixins"\n' +
                '@import "src/styles/variables"\n' +
                '\n' +
                '.overlay\n' +
                '  position: fixed\n' +
                '  top: 0\n' +
                '  left: 0\n' +
                '  width: 100vw\n' +
                '  height: 100vh\n' +
                '  background-color: rgba(0, 0, 0, 0.8)\n' +
                '  cursor: zoom-out\n' +
                '  @include flex-center\n' +
                '  z-index: 998\n' +
                '\n' +
                '.image\n' +
                '  transition: .3s ease-in-out\n' +
                '  @media (hover: hover)\n' +
                '    &:hover\n' +
                '      transform: scale(1.1)\n' +
                '\n' +
                '.modal\n' +
                '  position: relative\n' +
                '  display: inline-block\n' +
                '  cursor: zoom-in\n' +
                '  overflow: hidden\n' +
                '  border-radius: 8px\n' +
                '  &__image\n' +
                '    position: fixed\n' +
                '    top: 50%\n' +
                '    left: 50%\n' +
                '    transform: translate(-50%, -50%)\n' +
                '    width: 90vw\n' +
                '    height: 90vh\n' +
                '    @include flex-center\n' +
                '    z-index: 9999\n' +
                '    img\n' +
                '      @include imageDefault\n' +
                '      object-fit: contain'
        },
        {
            summary: 'components loading spinner (JS + STYLED COMPONENTS)',
            content: 'import React from "react";\n' +
                'import { CircularProgress } from "@mui/material";\n' +
                'import { styled } from "styled-components";\n' +
                '\n' +
                'const Loading = styled.div`\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  font-size: 1.5rem;\n' +
                '`;\n' +
                '\n' +
                'const LoadingSpinner = ({ value = \'Загрузка...\' }) => {\n' +
                '  return (\n' +
                '    <Loading>\n' +
                '      <CircularProgress />\n' +
                '      <p>{value}</p>\n' +
                '    </Loading>\n' +
                '  );\n' +
                '};\n' +
                '\n' +
                'export default LoadingSpinner;\n'
        },
        {
            summary: 'components loading spinner (TS + STYLED COMPONENTS)',
            content: 'import React,{FC} from "react";\n' +
                'import {CircularProgress} from "@mui/material";\n' +
                'import {styled} from "styled-components";\n' +
                '\n' +
                'interface LoadingSpinnerProps {\n' +
                '    value?: string;\n' +
                '}\n' +
                'const Loading = styled.div`\n' +
                '  display: flex;\n' +
                '  align-items: center;\n' +
                '  font-size: 1.5rem;\n' +
                '`;\n' +
                '\n' +
                'const LoadingSpinner: FC<LoadingSpinnerProps> = ({value = \'Загрузка...\'}) => {\n' +
                '  return (\n' +
                '      <Loading>\n' +
                '          <CircularProgress/>\n' +
                '          <p>{value}</p>\n' +
                '      </Loading>\n' +
                '  )\n' +
                '};\n' +
                '\n' +
                'export default LoadingSpinner;'
        },
        {
            summary: 'components modal (JS + COMPONENTS + REACT ROUTER DOM)',
            content: 'import React, { Fragment } from \'react\';\n' +
                'import styled from "styled-components";\n' +
                'import { useLocation, useNavigate } from "react-router-dom";\n' +
                'import { colors, flexCenter, flexCenter_column, justifyCenter_between, center_absolute } from "../../styles/styles";\n' +
                '\n' +
                'const Overlay = styled.div`\n' +
                '    position: fixed;\n' +
                '    top: 0;\n' +
                '    left: 0;\n' +
                '    width: 100vw;\n' +
                '    height: 100vh;\n' +
                '    background-color: rgba(0, 0, 0, 0.8);\n' +
                '    @include flex-center;\n' +
                '    z-index: 998;\n' +
                '`;\n' +
                'const ModalStyled = styled.div`\n' +
                '    position: fixed;\n' +
                '    top: 50%;\n' +
                '    left: 50%;\n' +
                '    transform: translate(-50%, -50%);\n' +
                '    border: 2px solid ${colors.secondaryLight};\n' +
                '    border-radius: 8px;\n' +
                '    box-sizing: content-box;\n' +
                '    ${flexCenter_column};\n' +
                '    z-index: 9999;    \n' +
                '`;\n' +
                'const ModalHeader = styled.div`\n' +
                '    width: 100%;\n' +
                '    padding: 5px;\n' +
                '    box-sizing: border-box;\n' +
                '    background-color: ${colors.secondaryDark};\n' +
                '    border-top-left-radius: 8px;\n' +
                '    border-top-right-radius: 8px;\n' +
                '    ${justifyCenter_between}\n' +
                '    button{\n' +
                '      width: 30px;\n' +
                '      aspect-ratio: 1;\n' +
                '      position: relative;\n' +
                '      cursor: pointer;\n' +
                '      &::before{\n' +
                '        content: \'x\';\n' +
                '        font-size: 2rem;\n' +
                '        ${center_absolute};\n' +
                '        transform: translate(-50%,-60%);\n' +
                '      }\n' +
                '    }\n' +
                '`;\n' +
                'const ModalContent = styled.div`\n' +
                '    padding: 5px;\n' +
                '    border-bottom-left-radius: 8px;\n' +
                '    border-bottom-right-radius: 8px;\n' +
                '    ${flexCenter}\n' +
                '`;\n' +
                '\n' +
                'const Modal = ({ title, content }) => {\n' +
                '    const location = useLocation();\n' +
                '    const navigate = useNavigate();\n' +
                '    const isMainPage = () => {\n' +
                '      return location.pathname === \'/\';\n' +
                '    };\n' +
                '    const handleClose = () => {\n' +
                '        navigate(\'/\');\n' +
                '    };\n' +
                '\n' +
                '    return isMainPage() ? null : (\n' +
                '        <Fragment>\n' +
                '            <Overlay />\n' +
                '            <ModalStyled>\n' +
                '                <ModalHeader>\n' +
                '                    <h2>{title}</h2>\n' +
                '                    <button onClick={handleClose} />\n' +
                '                </ModalHeader>\n' +
                '                <ModalContent>\n' +
                '                    {content}\n' +
                '                </ModalContent>\n' +
                '            </ModalStyled>\n' +
                '        </Fragment>\n' +
                '    );\n' +
                '};\n' +
                '\n' +
                'export default Modal;\n'
        },
        {
            summary: 'components modal (TS + STYLED COMPONENTS + REACT ROUTE DOM)',
            content: 'import React,{FC,Fragment,ReactElement} from \'react\';\n' +
                'import styled from "styled-components";\n' +
                'import {useLocation,useNavigate} from "react-router-dom";\n' +
                'import {colors,flexCenter,flexCenter_column,justifyCenter_between,center_absolute} from "../../styles/styles";\n' +
                '\n' +
                'interface ModalProps {\n' +
                '    title: string,\n' +
                '    content: ReactElement | string,\n' +
                '}\n' +
                '\n' +
                'const Overlay = styled.div`\n' +
                '    position: fixed;\n' +
                '    top: 0;\n' +
                '    left: 0;\n' +
                '    width: 100vw;\n' +
                '    height: 100vh;\n' +
                '    background-color: rgba(0, 0, 0, 0.8);\n' +
                '    @include flex-center;\n' +
                '    z-index: 998;\n' +
                '`;\n' +
                'const ModalStyled = styled.div`\n' +
                '    position: fixed;\n' +
                '    top: 50%;\n' +
                '    left: 50%;\n' +
                '    transform: translate(-50%, -50%);\n' +
                '    border: 2px solid ${colors.secondaryLight};\n' +
                '    border-radius: 8px;\n' +
                '    box-sizing: content-box;\n' +
                '    ${flexCenter_column};\n' +
                '    z-index: 9999;    \n' +
                '`;\n' +
                'const ModalHeader = styled.div`\n' +
                '    width: 100%;\n' +
                '    padding: 5px;\n' +
                '    box-sizing: border-box;\n' +
                '    background-color: ${colors.secondaryDark};\n' +
                '    border-top-left-radius: 8px;\n' +
                '    border-top-right-radius: 8px;\n' +
                '    ${justifyCenter_between}\n' +
                '    button{\n' +
                '      width: 30px;\n' +
                '      aspect-ratio: 1;\n' +
                '      position: relative;\n' +
                '      cursor: pointer;\n' +
                '      &::before{\n' +
                '        content: \'x\';\n' +
                '        font-size: 2rem;\n' +
                '        ${center_absolute};\n' +
                '        transform: translate(-50%,-60%);\n' +
                '      }\n' +
                '    }\n' +
                '`;\n' +
                'const ModalContent = styled.div`\n' +
                '    padding: 5px;\n' +
                '    border-bottom-left-radius: 8px;\n' +
                '    border-bottom-right-radius: 8px;\n' +
                '    ${flexCenter}\n' +
                '`;\n' +
                '\n' +
                'const Modal:FC<ModalProps> = ({title,content}) => {\n' +
                '    const location = useLocation();\n' +
                '    const navigate = useNavigate();\n' +
                '    const isMainPage = (): boolean => {\n' +
                '      return location.pathname === \'/\';\n' +
                '    };\n' +
                '    const handleClose = (): void => {\n' +
                '        navigate(\'/\');\n' +
                '    };\n' +
                '\n' +
                '    return isMainPage()?null:(\n' +
                '            <Fragment>\n' +
                '                <Overlay/>\n' +
                '                <ModalStyled>\n' +
                '                    <ModalHeader>\n' +
                '                        <h2>{title}</h2>\n' +
                '                        <button onClick={handleClose}/>\n' +
                '                    </ModalHeader>\n' +
                '                    <ModalContent>\n' +
                '                        {content}\n' +
                '                    </ModalContent>\n' +
                '                </ModalStyled>\n' +
                '            </Fragment>\n' +
                '        )\n' +
                '};\n' +
                '\n' +
                'export default Modal;'
        },
    ]
}