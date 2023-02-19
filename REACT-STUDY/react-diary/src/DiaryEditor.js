import { useState } from "react";

const DiaryEditor = () =>{
    // 작성자 state
    const [author, setAuthor] = useState("");

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input />
            </div>
        </div>
    )
}

export default DiaryEditor;