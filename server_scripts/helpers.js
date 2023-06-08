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

    global.CrisCrosCraftMech = (output, cris, cros, cntr) => {
        event.recipes.create.mechanicalCrafting(
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

    global.CrisCrosCraft2 = (output, cris, updw, ltrt, cntr) => {
        event.shaped(
            output, 
            [ 
            'ABA', 
            'CDC', 
            'ABA'  
            ],{
            A: cris,
            B: updw,
            C: ltrt,
            D: cntr
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

    global.doughnut = (output, outer, cntr) => {
        event.shaped(
            output, 
            [ 
            'AAA', 
            'ABA', 
            'AAA'  
            ],{
            A: outer,
            B: cntr
            }    
        )
    }

    global.ring = (output, outer) => {
        event.shaped(
            output, 
            [ 
            'AAA', 
            'A A', 
            'AAA'  
            ],{
            A: outer
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