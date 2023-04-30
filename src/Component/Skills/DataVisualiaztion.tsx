import React from 'react'

export const DataVisualiaztion = () => {
    return (
        <div className="DataV-div mt-2 mb-4 px-1_5">
            <div className="subtitle-div text-gray-900 py-1">Data Visualiaztion</div>
            <div className='grid-pro-section'>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="d3js" className="checkbox-label__input" /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg" alt="d3js" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="chartjs" className="checkbox-label__input" /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs"/>
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="canvasjs" className="checkbox-label__input" /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg" alt="canvasjs" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="kibana" className="checkbox-label__input" /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg" alt="kibana" />
                </div>
                <div className='my-6 grid-pro-input'>
                    <input type="checkbox" id="grafana" className="checkbox-label__input" /><span className="checkbox-label__control"></span><img className="w-h-img" src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" alt="grafana" />
                </div>
            </div>
        </div>
    )
}
