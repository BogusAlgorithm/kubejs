// priority: 100

ServerEvents.recipes(event => {
    global.CrisCrosCraft = (output, cris, cros, cntr) => {
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

    global.CrosCraft = (output, cros, cntr) => {
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

    global.XCrosCraft = (output, cros, cntr) => {
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

    global.doughnut = (output, cont, cntr) => {
        event.shaped(
            output, 
            [ 
            'AAA', 
            'ABA', 
            'AAA'  
            ],{
            A: cont,
            B: cntr
            }    
        )
    }

    global.sandwich = (output, layer, cntr) => {
        event.shaped(
            output, 
            [ 
            'AAA', 
            'BBB', 
            'AAA'  
            ],{
            A: layer,
            B: cntr
            }    
        )
    }
})