let size = 1;
size = getGridSize();
renderGrid(size);

function getGridSize()
{
    let size = parseInt(prompt("Insert size of square Grid ( between 0 and 100 )"));

    while (size < 1 || size > 100)
    {
        size = parseInt(prompt("Error, please input a valid number ( between 0 and 100 )"));
    }

    return size;
}

function getRandomRGB()
{
    // Generate random values for each channel (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Return RGB color string
    return `rgb(${r}, ${g}, ${b})`;
}

function extractRGB(rgbString)
{
    // Extract values of r, g, and b from RGB string
    const matches = rgbString.match(/(\d+)/g);
    const r = parseInt(matches[0]);
    const g = parseInt(matches[1]);
    const b = parseInt(matches[2]);
  
    // Return array containing r, g, and b values
    return [r, g, b];
}
  

function darkenRGB(color, r = 0, g = 0, b = 0)
{
    const rgbValues = extractRGB(color);

    let originalR = rgbValues[0];
    let originalG = rgbValues[1];
    let originalB = rgbValues[2];

    if (r === 0 && g === 0 && b === 0)
    {
        r = Math.max(0, Math.floor(originalR * 0.1));
        g = Math.max(0, Math.floor(originalG * 0.1));
        b = Math.max(0, Math.floor(originalB * 0.1));
    }

    originalR -= r;
    originalG -= g;
    originalB -= b;

    return {
        color: `rgb(${originalR}, ${originalG}, ${originalB})`,
        r: r,
        g: g,
        b: b
    };
}

function renderGrid(size)
{
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    for (let rowNumber = 1; rowNumber < size + 1; rowNumber++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        row.id = `row${rowNumber}`;

        wrapper.appendChild(row);
        
        for (let tileNumber = 1; tileNumber < size + 1; tileNumber++)
        {
            const tile = document.createElement("div");
            tile.id = `tile${tileNumber}`;
            tile.classList.add("tile", "withoutColor");

            tile.addEventListener("mouseover", (e) =>
            {
                if (tile.classList.contains("withoutColor"))
                {
                        e.target.style.backgroundColor = getRandomRGB();
                        tile.classList.remove("withoutColor");
                
                        e.target.classList.add("r0", "g0", "b0");
                }
                else
                {
                        const redValue = e.target.classList[1];
                        const greenValue = e.target.classList[2];
                        const blueValue = e.target.classList[3];
                
                        const r = parseInt(redValue.substring(1));
                        const g = parseInt(greenValue.substring(1));
                        const b = parseInt(blueValue.substring(1));
                        
                        const colorObj = darkenRGB(e.target.style.backgroundColor, r, g, b);

                        e.target.style.backgroundColor = colorObj.color;

                        e.target.classList.remove("r0", "g0", "b0");
                
                        e.target.classList.add(`r${colorObj.r}`, `g${colorObj.g}`, `b${colorObj.b}`);
                }
            });

            row.appendChild(tile);
        }
    }

    document.querySelector("body").appendChild(wrapper);
}

function resetGrid()
{
    const bodyElement = document.querySelector("body");
    const wrapperElement = document.querySelector(".wrapper");
    
    bodyElement.removeChild(wrapperElement);
}

const resetButtonElement = document.querySelector("#resetButton");

resetButtonElement.addEventListener("click", (e) =>
{
    resetGrid();
    size = getGridSize();
    renderGrid(size);
});