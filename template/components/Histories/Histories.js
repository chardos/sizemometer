import React from 'react';
import { HistoriesWrapper, Card, ChartWrapper, CardTitleBar, Size, Data} from './styled';
import BarChart from '../BarChart';
import filesize from 'filesize';

const Histories = ({histories, panelWidth}) => {
  const PADDING = 40;
  const numBars = Math.floor((panelWidth - PADDING) / 60);
  console.log('numBars', numBars);
  return (
    <HistoriesWrapper>
      {histories.map(({filename, data}) => (
        <Card className="card">
          <CardTitleBar>
            <div>{filename}</div>
            <div>{filesize(data.bars[data.bars.length - 1].value)}</div>
          </CardTitleBar>
          <ChartWrapper>
            <BarChart 
              width="auto"
              height={180}
              data={data} 
              tooltipTemplate={(tooltipData) => {
                const { size, timestamp } = tooltipData;

                return (
                  <div>
                    <Size>{filesize(size)}</Size>
                    <Data>{getReadableDate(timestamp)}</Data>
                  </div>
                )
              }
            }/>
          </ChartWrapper>
        </Card>
      ))}
    </HistoriesWrapper>
  )
}

export default Histories;

function getReadableDate(timestamp) {
  const date = new Date(parseInt(timestamp));
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}