export const FadeLeft = (delay: number) => {
    return {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay,
            }
        }
    }
}


export const ScaleFadeIn = () => {
    return {
        initial: {
            opacity: 0,
            scale: 0.5,
        },
        whileInView: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.2,
                duration: 1,
            },
        },
    };
};


export const LeftToRight = () => {
    return {
        initial: {
            opacity: 0,
            x: -100,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.3,
                duration: 1,
            },
        }
    }
}


export const RightToLeft = () => {
    return {
        initial: {
            opacity: 0,
            x: 100,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.3
            }
        }
    }
}


export const UptoDown = () => {
    return {
        initial: {
            opacity: 0,
            y: -100
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.3
            }
        }
    }
}


export const DownToUp = () => {
    return {
        initial: {
            opacity: 0,
            y: 100
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.3
            }
        }
    }
}