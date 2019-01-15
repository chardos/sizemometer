import React from 'react';
import { HistoriesWrapper, Card, ChartWrapper, CardTitle, Size, Data} from './styled';
import BarChart from '../BarChart';
import filesize from 'filesize';

const Histories = ({histories}) => {
  return (
    <HistoriesWrapper>
      {histories.map(({filename, data}) => (
        <Card>
          <CardTitle>{filename}</CardTitle>
          <ChartWrapper>
            <BarChart data={data} tooltipTemplate={(tooltipData) => {
              const { size, timestamp } = tooltipData;

              return (
                <div>
                  <Size>{filesize(size)}</Size>
                  <Data>{getReadableDate(timestamp)}</Data>
                </div>
              )
            }}/>
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