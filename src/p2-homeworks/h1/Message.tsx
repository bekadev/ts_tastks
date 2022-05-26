import React from 'react'
import style from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {

    return (
        <div className={style.message}>
                <div className={style.section}>
                    <div>
                        <img src={props.avatar}/>
                    </div>

                    <div className={style.block}>
                        <div className={style.arrow}/>
                        <div className={style.main}>
                            <div className={style.main_content}>
                                <div className={style.main_name}>{props.name}</div>
                                <div className={style.main_message}>{props.message}</div>
                                <div className={style.main_time}>{props.time}</div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Message
