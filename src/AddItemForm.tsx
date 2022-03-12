import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddItemForm = {
    callBack: (title: string) => void
}

const AddItemForm: React.FC<AddItemForm> = ({ callBack}) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTasks = () => {
        if (title.trim() !== "") {
            callBack(title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addTasks();
        }
    }

    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTasks}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default AddItemForm;