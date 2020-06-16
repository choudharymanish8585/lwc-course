const getBMI = function (weightInKg, heightInMt) {
    try {
        return weightInKg / (heightInMt * heightInMt);
    } catch (error) {
        return undefined;
    }
}

export{getBMI};