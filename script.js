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

function darkenRGB(color)
{
    const factor = 0.9; // 10% darker

    // Extract the individual R, G, B values from the string
    const rgb = color.substring(4, color.length - 1).split(",");
    const r = Math.floor(parseInt(rgb[0].trim()) * factor);
    const g = Math.floor(parseInt(rgb[1].trim()) * factor);
    const b = Math.floor(parseInt(rgb[2].trim()) * factor);
    
    // Return the new RGB color string
    return `rgb(${r}, ${g}, ${b})`;
}

function renderGrid(size)
{
    console.log(size);

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
            tile.classList.add("tile");
            
            tile.classList.add("withoutColor");

            tile.addEventListener("mouseover", (e) =>
            {
                if (tile.classList[1])
                {
                    e.target.style.backgroundColor = getRandomRGB();
                    tile.classList.remove("withoutColor");
                }
                else
                {
                    e.target.style.backgroundColor = darkenRGB(e.target.style.backgroundColor);
                }
            });

            row.appendChild(tile);
        }
    }

    document.querySelector("body").appendChild(wrapper);
}