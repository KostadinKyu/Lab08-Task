import * as React from "react";

interface IProps {
    messageT: any
}

interface IState {
    isLoading: boolean
}

export class MessageTComponent extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            isLoading: false,
        }
    }

    render() {
        let textStyle = (this.props.messageT.score) <= 5 ? "message-subject-low" : "message-subject-height";
        let coutStyle = (this.props.messageT.is_message_low) ? "message-count-low" : "message-count-height";
        return (
            <div className="message-style">
                {(this.props.messageT.message_count && this.props.messageT.message_count > 1) ?
                (
                    <div className={coutStyle}>{this.props.messageT.message_count + "messages"}</div>
                ): (null)}
                <div className="main-info">
                    <div className={textStyle}>{this.props.messageT.subject}</div>
                    <div style={{ alignItems: 'center' }}>{this.props.messageT.question}</div>
                    <div style={{ alignItems: 'center' }}>{this.props.messageT.text}</div>
                </div>
                <div className="more-info">
                    <div style={{ alignItems: 'center' }}>{this.props.messageT.created_at}</div>
                    <div style={{ alignItems: 'center' }}>{this.props.messageT.team}</div>
                </div>
            </div>
        )
    }
} // end of component
