import React from 'react'
import {Table, Empty} from 'antd'

const TableComponent = ({columns, datasource, uniqueKey}) =>{ 
  return (
    datasource ? <Table dataSource={datasource} columns={columns} rowKey={uniqueKey} /> : <Empty description="Desculpe, não há dados :("/>
  )
}

export default TableComponent;