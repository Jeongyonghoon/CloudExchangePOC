export const parsingDashboardAraiChart = (data) => {

    const ariaChartData = {}
    const datasets = []

    ariaChartData['title'] = '주요 상품별 사용 요금 이력' // props로 받기?

    if(data.length>0){

        const dataKeys = Object.keys(data[0])
        const yearMonthKey = dataKeys.indexOf('yearMonth')
        const row = dataKeys.length
        const col = data.length
        const array = Array.from(Array(row), ()=> new Array(col))
        const paletteKeys = Object.keys(themeContext.palette)
        let colorIndex = 0

        for(let i=0; i<col; i++){
            for(let j=0;j<row;j++){
                if(j===0){
                    array[j][i] = data[i][dataKeys[j]].replace(/(\w{4})(\w{2})/g, '$1년 $2월')
                    continue
                }
                array[j][i] = data[i][dataKeys[j]]
            }
        }

        for(let i=0; i<row; i++){
            if(i==yearMonthKey) continue
            datasets.push({
                label : dataKeys[i],
                data : array[i],
                backgroundColor : themeContext.palette[paletteKeys[colorIndex%paletteKeys.length]]+'80',
                borderColor : themeContext.palette[paletteKeys[colorIndex%paletteKeys.length]]+'80'
            });
            colorIndex++
        }
        // x axis 
        ariaChartData['labels'] = array[yearMonthKey]
        ariaChartData['datasets'] = datasets

    }else{

        ariaChartData['labels'] = []
        ariaChartData['datasets'] = []
    }

    return ariaChartData

}

export const parsingDetailBarChart = (data) => {

    // console.log(data);
    const barChartData = {}
    const datasets = []

    barChartData['title'] = '클라우드 상품 단위별 상위 요금' // props로 받기?

    if(data.length>0){

        const dataKeys = Object.keys(data[0])
        const xIndex = dataKeys.indexOf('usageType')
        const yIndex = dataKeys.indexOf('cost')
        const dataLen = data.length
        let labels = []
        let values = []

        for(let i=0; i<dataLen; i++){
            labels.push(data[i][dataKeys[xIndex]])
            values.push(data[i][dataKeys[yIndex]])
        }

        // x axis 
        barChartData['labels'] = labels
        barChartData['values'] = values

    }else{

        barChartData['labels'] = []
        barChartData['values'] = []
    }

    // console.log(barChartData);
    return barChartData
}

// originData : 그대로 들어옴 

/**
 * 
 * @param {*} originData 
 * @returns 
 * parsingData : Object
 * 
 * {
 *   labels : [array]
 *   datasets : [
 *      {
 *          label : string
 *          data : array
 *      }
 *   ] 
 * }
 * 
 */
export const getParsingData = (originData) => {

    const parsingData = {}
    const datasets = []
    const labels = []
    const names = []
    let array = null

    if(originData.length>0){

        if(originData[0].datasets.length>0){
            originData[0].datasets.forEach(dataset => {
                names.push(dataset.name)
            })
        }

        array = Array.from(Array(names.length), ()=> new Array(originData.length))
        
        for(let i=0;i<originData.length;i++){
            labels.push(originData[i].label)
            for(let j=0;j<names.length;j++){
                array[j][i]=originData[i].datasets[j].value
            }
        }

        for(let i=0; i<names.length; i++){
            datasets.push({
                label : names[i],
                data : array[i]
            })
        }
    }

    parsingData['labels'] = labels
    parsingData['datasets'] = datasets

    return parsingData

}