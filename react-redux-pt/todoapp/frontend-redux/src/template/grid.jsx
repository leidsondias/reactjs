import React, { Component } from 'react';

export default class Grid extends Component{
  toCssClasses(numbers){
    let classes = '';
    if(numbers[0]) classes += `col-xs-${numbers[0]}`;
    if(numbers[1]) classes += ` col-xs-${numbers[1]}`;
    if(numbers[2]) classes += ` col-xs-${numbers[2]}`;
    if(numbers[3]) classes += ` col-xs-${numbers[3]}`;

    return classes;
  }

  render(){
    const gridClasses = this.toCssClasses(this.props.cols || 12);
    return(
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}
