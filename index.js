// Your code here
function saturdayFun(activity="roller-skate"){
        return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(outerParam="*"){
    return function (innerParam="special"){
        return(`You are ${outerParam}${innerParam}${outerParam}!`)
    }
}