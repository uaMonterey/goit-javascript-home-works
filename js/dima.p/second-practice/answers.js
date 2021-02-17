// task 1 

user.getinfo = function(){
    return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`
}

// task 2

function getProp(key) {
    for(prop in obj) {
        if(prop === key) {
            return true
        }
    }
}
console.log(getProp('My car'))

// task 3

const findBestEmployee = (employees) => Object.entries(employees).sort((a, b) => b[1] - a[1])[0][0];


// task 4

function getArr(key) {
    for(key in obj1) {
        if(Array.isArray(obj1[key])) {
            obj1[key].map(el => {
                obj1[`I like ${el}`] = el
            })
        }
    }
}

// task 5

function getFact(n) {
    if(n === 1) {
        return 1
    } else {
        return n*getFact(n - 1)
    }
}

console.log(getFact(5))

// task 6

function getNestedName(obj, library) {
    for(key in obj) {
        if(typeof obj[key] === 'object') {
            for(elem in obj[key]) {
                if(typeof obj[key][elem] === 'object') {
                    for(lastEl in obj[key][elem]) {
                        if(typeof obj[key][elem][lastEl] === 'object') {
                            if(obj[key][elem][lastEl].hasOwnProperty(library)) {
                                return user2[key][elem][lastEl][library]
                            }
                        }
                    }
                }
            }
        }
    }
}