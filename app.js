let sizeOfGrid = 5
const container = document.querySelector('.container');
const resetButton = document.querySelector('.resetButton')

const createRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return { r, g, b }
}


const createGrid = (amountOfGrids) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper')


    for (let i = 0; i < amountOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < amountOfGrids; j++) {
            const { r, g, b } = createRandomRGB();
            const widthAndHeight = 960 / amountOfGrids
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            // adding mouseenter listener to change the background color alternative
            gridBox.addEventListener('mouseenter', () => {
                // const currentOpacity = gridBox.style.opacity
                // gridBox.style.background = `rgb(0,0,0)`
                // gridBox.style.opacity = Number(currentOpacity) + .1
                const bgColor = "rgb(" + r + "," + g + "," + b + ")";
                gridBox.style.background = bgColor;
            })
            row.appendChild(gridBox)
        }

        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

createGrid(sizeOfGrid)

// Alternative way of adding mouseenter listener to change the background color
// const allDivs = document.querySelectorAll('.grid-box')
// allDivs.forEach(div => {
//     div.addEventListener('mouseenter', () => {
//         div.style.backgroundColor = 'black';
//     })
// })

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('what dimensions do you want for your new grid?'));

    while (userSize > 100) {
        userSize = Number(prompt('Pick a number that is 100 or less'));
    }
    const wrapper = document.querySelector('.wrapper')

    if (!wrapper) {
        createGrid(userSize)
    } else {
        wrapper.remove()
        createGrid(userSize)
    }
})
