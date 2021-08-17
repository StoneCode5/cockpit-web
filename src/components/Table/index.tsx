import React from 'react'
import { Table } from 'antd'
import { WithContainer } from "../DashBoard/withContainer";
import './index.less'

interface IMyTable {
  columns: any[]
  data: any[]
  tableProps?: any
  hintLeft?: string
}

const MyTable: React.FC<IMyTable> = (props) => {
  const { columns, data, tableProps = {} } = props
  return (
    <div className="tableBox">
      <Table
        rowClassName={(_, index) => (index + 1) % 2 === 1 ? 'tableOddRow' : 'tableEvenRow'}
        columns={columns}
        dataSource={data}
        pagination={false}
        // scroll={{ x: '610px' }}
        {...tableProps}
      />
    </div>
  )
}

export default WithContainer(MyTable)
