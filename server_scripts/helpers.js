// priority: 100

let CrisCrosCraft = (output, cris, cros, cntr) => {
    event.shaped(
        output, 
        [ 
        'ABA', 
        'BCB', 
        'ABA'  
        ],{
        A: cris,
        B: cros,
        C: cntr
        }    
    )
}

let CrosCraft = (output, cros, cntr) => {
    event.shaped(
        output, 
        [ 
        ' A ', 
        'ABA', 
        ' A '  
        ],{
        A: cros,
        B: cntr
        }    
    )
}

let XCrosCraft = (output, cros, cntr) => {
    event.shaped(
        output, 
        [ 
        'A A', 
        ' B ', 
        'A A'  
        ],{
        A: cros,
        B: cntr
        }    
    )
}