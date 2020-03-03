import { ThreadModel } from "./threadModel";

export class ThreadsData {
	public threads: Array<ThreadModel>;
            	
	constructor(_threads?: Array<ThreadModel>) {
		if (_threads != null) this.threads = _threads;
	}
}