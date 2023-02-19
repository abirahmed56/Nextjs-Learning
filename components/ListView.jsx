import React from 'react'
import { Card, List } from 'antd';

export default function (props) {

  return (
    <div className='handle_default'>
      <h1 className='handle_header'>DATA IN CARD FORMAT</h1>
      <br/>
      <br />
      <List
        grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 1,
        }}
            dataSource={props && props.entries}
            renderItem={(item) => (
            <List.Item>
                <Card
                title={item.API}
                >
                <p>API: {item.API}</p>
                <p>Desc: {item.Description}</p>
                <p>Auth: {item.Auth}</p>
                <p>HTTPS: {item.HTTPS}</p>
                <p>Cors: {item.Cors}</p>
                <p>Link: {item.Link}</p>
                <p>Category: {item.Category}</p>
                </Card>  
            </List.Item>
            )}
        />
  </div>
)
}
