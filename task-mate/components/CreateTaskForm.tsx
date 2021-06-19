import React, { useState } from "react";
import { useCreateTaskMutation } from "../generated/graphql-frontend";

interface Props {
  onSuccess: () => void;
}

const CreateTaskForm: React.FC<Props> = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const [createTask, { loading, error }] = useCreateTaskMutation({
    onCompleted: () => {
      onSuccess();
      setTitle("");
    },
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!loading) {
      try {
        await createTask({ variables: { input: { title } } });
      } catch (e) {
        // Log the error.
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="alert-error">Something went wrong</p>}
      <input
        type="text"
        name="tite"
        placeholder="what would you like to add to you Todo list?"
        autoComplete="off"
        className="text-input new-task-text-input"
        value={title}
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default CreateTaskForm;
