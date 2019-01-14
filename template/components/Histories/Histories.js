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
              return (
                <div>
                  <Size>{filesize(tooltipData[0].value)}</Size>
                  <Data>#{tooltipData[3].value}</Data>
                  <Data>{tooltipData[2].value}</Data>
                  <Data>{tooltipData[1].value}</Data>
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