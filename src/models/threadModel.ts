export class ThreadModel {
	public id: number;
    public team: string;
	public question: string;
	public question_id: number;
	public thread_id: string;
	public subject_id: number;
	public score: number;
    public text: string;    
	public created_at: string;
	public subject: string;
	public message_count: number;
    public is_message_low: boolean;
	
	constructor(_id?: number, _team?: string, _question?: string, _question_id?: number, _thread_id?: string, _subject_id?: number, _score?: number, _text?: string, _created_at?: string, _subject?: string, _message_count?: number, _is_message_low?: boolean) {
		if (_id != null) this.id = _id;
		if (_team != null) this.team = _team;
		if (_question != null) this.question = _question;
		if (_question_id != null) this.question_id = _question_id;
		if (_thread_id != null) this.thread_id = _thread_id;
		if (_subject_id != null) this.subject_id = _subject_id;
		if (_score != null) this.score = _score;
		if (_text != null) this.text = _text;
		if (_created_at != null) this.created_at = _created_at;
		if (_subject != null) this.subject = _subject;
		if (_message_count != null) this.message_count = _message_count;	
		if (_is_message_low != null) this.is_message_low = _is_message_low;		
	}
}
