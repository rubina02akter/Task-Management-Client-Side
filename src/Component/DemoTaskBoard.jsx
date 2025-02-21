import React from "react";
import { Droppable, Draggable, DragDropContext } from "@hello-pangea/dnd";

import { motion } from "framer-motion";

const DemoTaskBoard = () => {
  const tasks = [
    { id: "1", title: "Design Homepage" },
    { id: "2", title: "Set up Firebase Auth" },
    { id: "3", title: "Implement Drag & Drop" },
  ];

  const onDragEnd = (result) => {
    if (!result.destination) return;
    // Handle reordering logic here (optional)
  };

  return (
    <div className="pt-24 ">
      <h2 className="text-3xl font-bold text-center mb-6">Try Our Drag & Drop</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto"
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <motion.div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 mb-2 bg-blue-500 text-white rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      {task.title}
                    </motion.div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DemoTaskBoard;
