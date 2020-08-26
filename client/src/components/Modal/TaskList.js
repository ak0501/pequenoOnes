import React from "react";
const TaskList = (props) => {
  return props.activities.map((val, idx) => {
    let projectName = `projectName-${idx}`,
      task = `task-${idx}`,
      taskStatus = `taskStatus-${idx}`;
    return (
      <tr key={val.index}>
        <td>
          <input
            type="text"
            name="projectName"
            data-id={idx}
            id={projectName}
            className="form-control "
            onChange={props.onChange}
          />
        </td>
      </tr>
    );
  });
};
export default TaskList;
