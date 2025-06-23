export const html = () => {
    const classes = 'scroll-progress'
    return `<div class="${classes}"></div>`
}

export const outerHTML = () => {
    return `<scroll-progress>${html()}</scroll-progress>`
}
