// Get the <link> element that references the "style.css" stylesheet
const link = document.querySelector("link[href='style.css']");

// Get the stylesheet object associated with the <link> element
const stylesheet = link.sheet;

// Get an array of all CSS rules
// const rules = stylesheet.cssRules;

stylesheet.insertRule("div { padding: 0; margin: 0; display: flex; }", stylesheet.cssRules.length);

stylesheet.insertRule(".wrapper { flex-direction: column; justify-content: center; align-items: center; width: 80vw; }", stylesheet.cssRules.length);

stylesheet.insertRule(".row { flex-direction: row; }", stylesheet.cssRules.length);

stylesheet.insertRule(".tile { border: 1px solid #f2f2f2; padding: 10px; }", stylesheet.cssRules.length);

stylesheet.insertRule(".tile:hover { background-color: #f2f2f2; }", stylesheet.cssRules.length);

// ************************************************************

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

            row.appendChild(tile);
        }
    }

    document.querySelector("body").appendChild(wrapper);
}