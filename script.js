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

function getRandomColorHex()
{
    //Generate a random integer between 0 and 16777215 (FFFFFF in hexadecimal)
    const randomInt = Math.floor(Math.random() * 16777215);
  
    //Convert the integer to hexadecimal
    const color = "#" + randomInt.toString(16);
  
    return color;
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
            tile.classList.add("tile");
            tile.id = `tile${tileNumber}`;

            tile.addEventListener("mouseover", (e) =>
            {
                e.target.style.backgroundColor = getRandomColorHex();
            });

            row.appendChild(tile);
        }
    }

    document.querySelector("body").appendChild(wrapper);
}