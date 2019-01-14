import React from 'react';
import { GraphCard, ChartWrapper, Filename, Size, Data} from './styled';
import BarChart from '../BarChart';
import filesize from 'filesize';

const Histories = ({histories}) => {
  return (
    histories.map(({filename, data}) => (
      <GraphCard>
        <Filename>{filename}</Filename>
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
      </GraphCard>
    ))
  )
}

export default Histories;