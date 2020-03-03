import * as React from "react";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
// models 

import HeaderComponent from '../../components/header/headerComponent';
import { dataService } from "../../services/dataService";
import { ThreadsData } from "../../models/threadsData";
import { MessageTComponent } from "./MessageTComponent";

import { Accordion, AccordionItem } from 'react-sanfona';
import { ThreadModel } from "../../models/threadModel";

interface IProps {
  history: any,
  classes: any,
  lang: string,

}

interface IState {
  // services 
  dataService: dataService;
  // models   
  isLoading: boolean,
  threads: Array<ThreadsData>;
  threadsData: Array<ThreadModel>;
}

var styles: any = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class Home extends React.Component<IProps, IState> {

  growl: any;

  constructor(props: IProps) {
    super(props);

    this.state = {
      // services 
      dataService: new dataService(),
      // models 
      isLoading: false,
      threads: new Array<ThreadsData>(),
      threadsData: new Array<ThreadModel>()
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.refreshData();
  }
  componentWillUpdate() {
  }
  componentWillUnmount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  async refreshData() {
    const { dataService } = this.state;
    let threads: Array<ThreadsData> = await dataService.getAllThreads();
    let threadsData = await dataService.getAllThreadsData();

    if (threads.length > 0) {
      console.log(threads.toString());
    }
    this.setState({ threads, threadsData, isLoading: false });
  }

  updateDimensions = () => {
  };

  onExpand = (thread, that) => {
    if (thread.message_count <= 0)
      return;
    thread.message_count = 0;
    let threads = this.state.threads;
    this.setState({ threads });
  };

  onClose = (thread, count, that) => {
    if (count > 1) {
      thread.message_count = count;
      let threads = this.state.threads;
      this.setState({ threads });
    }
  };

  setAditionalProps = (threads: Array<ThreadModel>) => {
    threads[0].message_count =threads[0].message_count == null ? threads.length : threads[0].message_count;
    threads[0].is_message_low = threads.filter(t => t.score >= 6).length > 0 ? false : true;
  }

  render() {
    return (<div>
      <div>
        <HeaderComponent />
      </div>
      <div className="app-home">
        <div>
          {this.state.threads.map((thread, i) => {
            return (
              thread.threads.map((messageTh, j) => {
                //return <MessageTComponent key={messageTh.id} messageT={messageTh} />
              }))
          })}
        </div>
        <Accordion allowMultiple={true}>
          {this.state.threads.map((thread, i) => {
            this.setAditionalProps(thread.threads);
            //thread.threads[0].message_count = thread.threads.length;
            return (
              <AccordionItem onExpand={(e) => this.onExpand(thread.threads[0], this)} onClose={() => this.onClose(thread.threads[0], thread.threads.length, this)} key={i} //expanded={thread != null}
                title={<div><MessageTComponent messageT={thread.threads[0]} /></div>}>
                {thread.threads.map((messageTh, j) => {
                  if (j > 0)
                    return <MessageTComponent key={messageTh.id} messageT={messageTh} />
                })}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>)
  }
}// end of component

const mapsStateToProps = state => {
  return {

  };
}
const mapDispatchToProps = dispatch => {
  return {

  }
}
export default withStyles(styles)(connect(mapsStateToProps, mapDispatchToProps)(Home));

