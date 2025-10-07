const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');


// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor((canvas.width / 20)+1); // Number of columns
const rows = Math.floor((canvas.height / 20)); 
const rowsPX = rows*20

const matrix_old = 'abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()*&^%+-/~{[|`]}'; // Characters to be displayed
const matrix_maybe = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ二コソヤ日012345789Z:・¦｜."=*+-<>'; // Characters to be displayed
const matrix = '259817:."=*+-¦|_Zｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ '; // Characters to be displayed


const stripewidth = Math.round(columns/12.5)


// Create an array of column positions
const columnPositions = Array(columns).fill(0);




const searchParams = new URLSearchParams(window.location.search);




const pride = searchParams.get("pride")


// Function to draw the matrix effect
function drawMatrix() {
    // Set a semi-transparent black background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text color
    ctx.fillStyle = '#00ff00';
    ctx.font = 'bold 15px monospace';
    
    

    // Iterate over each column
    columnPositions.forEach((position, index) => {
        // Generate a random character
        const char = matrix[Math.floor(Math.random() * matrix.length)];
//          ctx.fillStyle = '#FFFFFF';
        

        currentrow = Math.floor((position / 20));
        
        if (pride == "1") {
            if (currentrow <= (rows/6)) {
                if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                    ctx.fillStyle = '#814612';
                }
                else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                    ctx.fillStyle = '#2D2D2D';
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                    ctx.fillStyle = '#74D7EE';
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFAFC8';
                }
                else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFFFFF';
                }
                else {
                    ctx.fillStyle = '#E40303';
                }
            }
            else if (currentrow <= (rows/6)*2) {
                if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                    ctx.fillStyle = '#814612';
                }
                else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                    ctx.fillStyle = '#2D2D2D';
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                    ctx.fillStyle = '#74D7EE';
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFAFC8';
                }
                else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFFFFF';
                }
                else {
                    ctx.fillStyle = '#FF8C00';
                }
            }
            else if (currentrow <= (rows/6)*3) {
                if ((index <= (stripewidth + currentrow - 2)) & (index >= currentrow - 1)) {
                    ctx.fillStyle = '#814612';
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth)) & (index >= currentrow - 1 - stripewidth)) {
                    ctx.fillStyle = '#74D7EE';
                }
                else if ((index <= (stripewidth + currentrow - 2 + stripewidth)) & (index >= currentrow - 2 + stripewidth)) {
                    ctx.fillStyle = '#2D2D2D';
                }
                else if ((index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth)) & (index >= currentrow - 1 - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFAFC8';
                }
                else if (index <= (stripewidth + currentrow - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFFFFF';
                }
                else {
                    ctx.fillStyle = '#FFED00';
                }
            }
            else if (currentrow <= (rows/6)*4) {
                if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                    ctx.fillStyle = '#814612';
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                    ctx.fillStyle = '#2D2D2D';
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                    ctx.fillStyle = '#74D7EE';
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFAFC8';
                }
                else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFFFFF';
                }
                else {
                    ctx.fillStyle = '#008026';
                }
            }
            else if (currentrow <= (rows/6)*5) {
                if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                    ctx.fillStyle = '#814612';
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                    ctx.fillStyle = '#2D2D2D';
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                    ctx.fillStyle = '#74D7EE';
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFAFC8';
                }
                else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFFFFF';
                }
                else {
                    ctx.fillStyle = '#004CFF';
                }
            }
            else if (currentrow <= (rows/6)*6) {
                if ((index <= (stripewidth + (rows-currentrow) - 1)) & (index >= (rows-currentrow))) {
                    ctx.fillStyle = '#814612';
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 + stripewidth)) & (index >= (rows-currentrow) + stripewidth)) {
                    ctx.fillStyle = '#2D2D2D';
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth)) & (index >= (rows-currentrow) - stripewidth)) {
                    ctx.fillStyle = '#74D7EE';
                }
                else if ((index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth)) & (index >= (rows-currentrow) - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFAFC8';
                }
                else if (index <= (stripewidth + (rows-currentrow) - 1 - stripewidth - stripewidth - stripewidth)) {
                    ctx.fillStyle = '#FFFFFF';
                }
                else {
                    ctx.fillStyle = '#732982';
                }
            }
        }
        
        
        else if (pride == "2") {
            if (currentrow <= (rows/6)) {
                ctx.fillStyle = '#E40303';
            }
            else if (currentrow <= (rows/6)*2) {
                ctx.fillStyle = '#FF8C00';
            }
            else if (currentrow <= (rows/6)*3) {
                ctx.fillStyle = '#FFED00';
            }
            else if (currentrow <= (rows/6)*4) {
                ctx.fillStyle = '#008026';
            }
            else if (currentrow <= (rows/6)*5) {
                ctx.fillStyle = '#004CFF';
            }
            else if (currentrow <= (rows/6)*6) {
                ctx.fillStyle = '#732982';
            }
        }


        else if (pride == "3") {
            if (currentrow <= (rows/4)) {
                ctx.fillStyle = '#FFF433';
            }
            else if (currentrow <= (rows/4)*2) {
                ctx.fillStyle = '#FFF8E7';
            }
            else if (currentrow <= (rows/4)*3) {
                ctx.fillStyle = '#9B59D0';
            }
            else if (currentrow <= (rows/4)*4) {
                ctx.fillStyle = '#2D2D2D';
            }
        }


        else if (pride == "4") {
            if (currentrow <= (rows/5)) {
                ctx.fillStyle = '#5BCEFA';
            }
            else if (currentrow <= (rows/5)*2) {
                ctx.fillStyle = '#F5A9B8';
            }
            else if (currentrow <= (rows/5)*3) {
                ctx.fillStyle = '#FFFFFF';
            }
            else if (currentrow <= (rows/5)*4) {
                ctx.fillStyle = '#F5A9B8';
            }
            else if (currentrow <= (rows/5)*5) {
                ctx.fillStyle = '#5BCEFA';
            }
        }


        else if (pride == "5") {
            if (currentrow <= (rows/7)) {
                ctx.fillStyle = '#D52D00';
            }
            else if (currentrow <= (rows/7)*2) {
                ctx.fillStyle = '#EF7627';
            }
            else if (currentrow <= (rows/7)*3) {
                ctx.fillStyle = '#FF9A56';
            }
            else if (currentrow <= (rows/7)*4) {
                ctx.fillStyle = '#FFFFFF';
            }
            else if (currentrow <= (rows/7)*5) {
                ctx.fillStyle = '#D162A4';
            }
            else if (currentrow <= (rows/7)*6) {
                ctx.fillStyle = '#B55690';
            }
            else if (currentrow <= (rows/7)*7) {
                ctx.fillStyle = '#A30262';
            }
        }


        else if (pride == "6") {
            if (currentrow <= (rows/5)*2) {
                ctx.fillStyle = '#D60270';
            }
            else if (currentrow <= (rows/5)*3) {
                ctx.fillStyle = '#9B4F96';
            }
            else if (currentrow <= (rows/5)*5) {
                ctx.fillStyle = '#0038A8';
            }
        }


        else if (pride == "7") {
            if (currentrow <= (rows/3)) {
                ctx.fillStyle = '#FF218C';
            }
            else if (currentrow <= (rows/3)*2) {
                ctx.fillStyle = '#FFD800';
            }
            else if (currentrow <= (rows/3)*3) {
                ctx.fillStyle = '#21B1FF';
            }
        }


        else if (pride == "8") {
            if (currentrow <= (rows/4)) {
                ctx.fillStyle = '#2D2D2D';
            }
            else if (currentrow <= (rows/4)*2) {
                ctx.fillStyle = '#A3A3A3';
            }
            else if (currentrow <= (rows/4)*3) {
                ctx.fillStyle = '#FFFFFF';
            }
            else if (currentrow <= (rows/4)*4) {
                ctx.fillStyle = '#800080';
            }
        }


        else if (pride == "9") {
            if (currentrow <= (rows/5)) {
                ctx.fillStyle = '#3DA542';
            }
            else if (currentrow <= (rows/5)*2) {
                ctx.fillStyle = '#A7D379';
            }
            else if (currentrow <= (rows/5)*3) {
                ctx.fillStyle = '#FFFFFF';
            }
            else if (currentrow <= (rows/5)*4) {
                ctx.fillStyle = '#A9A9A9';
            }
            else if (currentrow <= (rows/5)*6) {
                ctx.fillStyle = '#2D2D2D';
            }
        }






        // Display the character at the current position\
        ctx.fillText(char, index * 20, position);


        // Move the position down
        columnPositions[index] += 20;

        // Reset the position if it exceeds the canvas height
        if (columnPositions[index] > canvas.height && Math.random() > 0.975) {
            columnPositions[index] = 0;
        }
    });
}

// Function to continuously update and render the animation
function animate() {
    drawMatrix();
    setTimeout(animate, (1000/40)); // Adjust the delay (in milliseconds) for desired speed
}

// Start the animation
animate();

