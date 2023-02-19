import { Descriptions, Space, Table, Tag } from 'antd';
import React from 'react'

export default function TableView(props) {

    const columns = [
        {
          title: 'API',
          dataIndex: 'API',
        },
        {
          title: 'Description',
          dataIndex: 'Description',
        },
        {
          title: 'Auth',
          dataIndex: 'Auth',
        },
        {
            title: 'HTTPS',
            dataIndex: 'HTTPS',
          },

        {
          title: 'Cors',
          dataIndex: 'Cors',
        },
        {
            title: 'Link',
            dataIndex: 'Link',
        },
        {
            title: 'Category',
            dataIndex: 'Category',
        },
      ];
      const data = [];

      {props && props.entries.map((item)=>{
        data.push({
            API: item.API,
            Descriptions: item.Descriptions,
            Auth: item.Auth,
            HTTPS: item.HTTPS,
            Cors: item.Cors,
            Link: item.Link,
            Category: item.Category


        });
      })}

  return (
    <div>
        <h1 className='handle_header'>DATA IN TABLE FORMAT</h1>
        <br/>
        <br />
        <Table columns={columns} dataSource={data} />
    </div>
  )
}
