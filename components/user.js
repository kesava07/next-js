import React from 'react';

const User = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>Age : {props.age}</p>
        <style jsx>{`
        div {
            border:1px solid lightgray;
            padding:20px;
            box-shadow:0 2px 3px #eee;
            border-radius:7px;
            text-align:center;
        }
        `}
        </style>
    </div>
);
export default User;