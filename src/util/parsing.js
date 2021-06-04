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
        
        const paletteKeys = Object.keys(themeContext.palette)
        let colorIndex = 0

        for(let i=0; i<dataLen; i++){
            labels.push(data[dataKeys[xIndex]])
            values.push(data[dataKeys[yIndex]])
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
        ariaChartData['labels'] = labels
        ariaChartData['values'] = values

    }else{

        ariaChartData['labels'] = []
        ariaChartData['values'] = []
    }

    return barChartData
}