function generateHtml(riddle) {
    console.log(riddle);
    return`
    <!DOCTYPE html>
    <html lang= "en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
    

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <title>Super Team</title>
        </head>

    </html>`
    
};

module.exports = generateHtml;