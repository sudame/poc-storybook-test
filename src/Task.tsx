import { useCallback, useState } from "react";

type TaskStatus = "todo" | "doing" | "done";

export function Task() {
  const [taskStatus, setTaskStatus] = useState<TaskStatus>("todo");
  const [isTaskStatusSelecting, setIsTaskStatusSelecting] = useState(false);

  const handleClickTaskSelect = useCallback(
    () => () => {
      setIsTaskStatusSelecting((isSelecting) => !isSelecting);
    },
    []
  );

  const handleClickTaskOption = useCallback(
    (taskStatus: TaskStatus) => () => {
      setTaskStatus(taskStatus);
    },
    []
  );

  return (
    <div>
      <div>現在のタスクの状態: {taskStatus}</div>
      <div onClick={handleClickTaskSelect()} style={{ cursor: "pointer" }}>
        タスクの状態を選択してください {isTaskStatusSelecting ? "▲" : "▼"}
      </div>
      <div
        style={{
          display: isTaskStatusSelecting ? "block" : "none",
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={handleClickTaskOption("todo")}
        >
          todo
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={handleClickTaskOption("doing")}
        >
          doing
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={handleClickTaskOption("done")}
        >
          done
        </div>
      </div>
    </div>
  );
}
