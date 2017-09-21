import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import Grid from '../template/grid';
import Icon from '../template/icon';

import { add, changeDescription, search, clear } from './todoActions'


class TodoForm extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.search()
  }

  render(){
    const { add, search, description, clear } = this.props
    return (
      <div role='form' className='todoForm'>
        <Grid cols={[12,9,10]}>
          <input className='form-control' onChange={this.props.changeDescription} id='description' value={this.props.description} placeholder='Adicione uma tarefa' />
        </Grid>
        <Grid cols={[12,3,2]}>
          <Icon style='primary' icon='plus' onClick={() => add(description)}></Icon>
          <Icon style='info' icon='search' onClick={search}></Icon>
          <Icon style='default' icon='close' onClick={() => clear()}></Icon>
        </Grid>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
