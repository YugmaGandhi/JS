import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container">
       <h1 className='my-3'>Today's top headlines</h1>
       <div className='row'>
        <NewsItem title="'Abhi bhi time hai...' Jadeja shares Bal Thackeray's old 'Gujarat gaya' video" description="Cricketer Ravindra Jadeja shared an old video of Shiv Sena founder Balasaheb Thackeray in which Balasaheb said Gujarat is nothing without Modi." imgUrl="https://images.hindustantimes.com/img/2022/12/01/1600x900/jadeja_modi_1669855567578_1669855571807_1669855571807.jpg"/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
       </div>
      </div>
    )
  }
}

export default News
