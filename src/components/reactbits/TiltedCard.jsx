import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './TiltedCard.css';

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2
};

export default function TiltedCard({
    imageSrc,
    altText = 'Tilted card image',
    captionText = '',
    containerHeight = '300px',
    containerWidth = '100%',
    imageHeight = '300px',
    imageWidth = '300px',
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
    backgroundImage = null,
    children = null,
    className = ''
}) {
    const ref = useRef(null);

    const x = useMotionValue();
    const y = useMotionValue();
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1
    });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    // Determine if we're in wrapper mode (has children or overlayContent, no image)
    const isWrapperMode = (children || (displayOverlayContent && overlayContent)) && !imageSrc && !backgroundImage;

    return (
        <figure
            ref={ref}
            className={`tilted-card-figure ${className}`}
            style={{
                height: isWrapperMode ? '100%' : containerHeight,
                width: isWrapperMode ? '100%' : containerWidth
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showMobileWarning && (
                <div className="tilted-card-mobile-alert">This effect is not optimized for mobile. Check on desktop.</div>
            )}

            {/* Wrapper mode: render children or overlayContent with tilt animation */}
            {isWrapperMode && (
                <motion.div
                    className="tilted-card-inner tilted-card-wrapper"
                    style={{
                        width: '100%',
                        height: '100%',
                        rotateX,
                        rotateY,
                        scale
                    }}
                >
                    <div className="tilted-card-wrapper-content">
                        {displayOverlayContent && overlayContent ? overlayContent : children}
                    </div>
                </motion.div>
            )}

            {/* Image mode: render image with tilt animation */}
            {(imageSrc || backgroundImage) && !isWrapperMode && (
                <motion.div
                    className="tilted-card-inner"
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                        rotateX,
                        rotateY,
                        scale
                    }}
                >
                    <div
                        className={`tilted-card-background ${imageSrc ? 'has-image' : ''} ${backgroundImage ? 'has-background-image' : ''}`}
                        style={backgroundImage ? {
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        } : {}}
                    ></div>
                    {imageSrc && (
                        <motion.img
                            src={imageSrc}
                            alt={altText}
                            className="tilted-card-img"
                            style={{
                                width: imageWidth,
                                height: imageHeight
                            }}
                        />
                    )}

                    {displayOverlayContent && overlayContent && (
                        <motion.div className="tilted-card-overlay">{overlayContent}</motion.div>
                    )}
                </motion.div>
            )}

            {showTooltip && (
                <motion.figcaption
                    className="tilted-card-caption"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}
