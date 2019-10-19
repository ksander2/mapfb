import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './ListPoint.css';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class ListPoint extends Component {
  handleButtonDeleteClick = e => {
    this.props.removePointAction(e);
  };

  handleDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.props.points,
      result.source.index,
      result.destination.index
    );

    this.props.reorderPointsAction(items);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <ul
              className={'list-points'}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.props.points.map((item, index) => (
                <Draggable
                  key={`key-${item.id}`}
                  draggableId={item.id.toString(10)}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      className={'list-points-item'}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                    >
                      {item.name}
                      <span
                        className={'delete-button'}
                        onClick={this.handleButtonDeleteClick.bind(
                          this,
                          item.id
                        )}
                      >
                        X
                      </span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default ListPoint;
