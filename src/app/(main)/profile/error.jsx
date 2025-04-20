'use client'

const error = (props) => {
    console.log(props)
    return <div>{props.error.message}</div>
}

export default error;