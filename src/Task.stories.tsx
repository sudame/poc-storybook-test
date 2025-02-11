import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { Task } from "./Task";

const meta: Meta<typeof Task> = {
  component: Task,
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    // 描画するコンポーネントの取得
    const canvas = within(canvasElement);

    // test: 初期状態は todo
    const taskStatus = canvas.getByText("現在のタスクの状態: todo");
    expect(taskStatus).toBeVisible();

    // test: セレクトボックスをクリックすると選択肢が表示される
    const taskStatusSelect =
      canvas.getByText("タスクの状態を選択してください ▼");
    await userEvent.click(taskStatusSelect);

    // test: 選択肢をクリックするとタスクの状態が変わる
    const doingOption = canvas.getByText("doing");
    await userEvent.click(doingOption);
    const updatedTaskStatus = canvas.getByText("現在のタスクの状態: doing");
    expect(updatedTaskStatus).toBeVisible();

    // test: セレクトボックスを再度クリックすると選択肢が非表示になる
    const taskStatusSelectAfterClick =
      canvas.getByText("タスクの状態を選択してください ▲");
    await userEvent.click(taskStatusSelectAfterClick);
    const doneOption = canvas.getByText("done");
    expect(doneOption).not.toBeVisible();
  },
};
