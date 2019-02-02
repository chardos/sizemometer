import React from 'react';
import filesize from 'filesize';
import { connect } from 'react-redux';
import {
  HistoriesWrapper, Card, ChartWrapper, CardTitleBar, Size, Data,
} from './styled';
import BarChart from '../BarChart';
import { openModal } from '../../ducks/detailModal';
import { getReadableDate } from '../../utils';

const Histories = ({ histories, panelWidth, openModal }) => (
  <HistoriesWrapper>
    {histories.map(({ filename, data }) => (
      <Card className="card" key={filename}>
        <CardTitleBar>
          <div>{filename}</div>
          <div>{filesize(data[data.length - 1].size)}</div>
        </CardTitleBar>

        <ChartWrapper>
          <BarChart
            onBarClick={openModal}
            filename={filename}
            width="auto"
            height={180}
            data={data}
            panelWidth={panelWidth}
            tooltipTemplate={(data) => {
              const { size, timestamp } = data;

              return (
                <div>
                  <Size>{filesize(size)}</Size>
                  <Data>{getReadableDate(timestamp)}</Data>
                </div>
              );
            }
            }
          />
        </ChartWrapper>
      </Card>
    ))}
  </HistoriesWrapper>
);

export default connect(null, {
  openModal,
})(Histories);
